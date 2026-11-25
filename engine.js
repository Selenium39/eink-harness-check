// Acceptance engine: drives the repo's real EpubFile through the brief's checks.
// Assertions are consistency-based (decorated <=> exactly 2 ornaments around the
// first h1/h2; skipped <=> byte-identical chapter), with hard expectations for
// books B and C (no h1/h2 anywhere -> everything skipped).
import { EpubFile, JSZip } from './editor-lib.js?v=3';

const logEl = document.getElementById('log');
const lines = [];
let failures = 0;
function log(msg, fail = false) {
  lines.push((fail ? 'FAIL ' : '    ') + msg);
  if (fail) failures++;
  logEl.textContent = lines.join('\n');
}
const normText = (s) => (s || '').replace(/\s+/g, ' ').trim();

async function zipChapters(blob) {
  const zip = await JSZip.loadAsync(blob);
  const out = {};
  for (const [path, entry] of Object.entries(zip.files)) {
    if (/\.x?html?$/i.test(path)) out[path] = await entry.async('string');
  }
  return out;
}

async function testBook(name, url, expectAllSkipped) {
  log(`\n=== ${name} ===`);
  const bytes = await (await fetch(url)).arrayBuffer();
  const origZip = await JSZip.loadAsync(bytes.slice(0));
  const snapshot = {};
  for (const [path, entry] of Object.entries(origZip.files)) {
    if (/\.x?html?$/i.test(path)) snapshot[path] = await entry.async('string');
  }

  // 1) zero side effects: load + export without touching decoration.
  // Scope = textFileList chapters only: getBlob() always re-serializes
  // opf/ncx/nav through XMLSerializer (pre-existing behavior), so nav.xhtml
  // bytes legitimately change on ANY export, decorated or not.
  const epub0 = new EpubFile(new File([bytes], name));
  await epub0.load();
  const chapters0 = await zipChapters(await epub0.getBlob());
  let identical = 0, total = 0;
  for (const p of epub0.textFileList.filter((x) => x !== epub0.navFilePath)) {
    total++;
    if (chapters0[p] === snapshot[p]) identical++;
    else log(`baseline export: chapter ${p} differs`, true);
  }
  log(`baseline export: ${identical}/${total} chapter files byte-identical`, identical !== total);

  // 2) apply classic-flourish
  const epub = new EpubFile(new File([bytes], name));
  await epub.load();
  const res1 = await epub.applyChapterDecoration('classic-flourish');
  log(`apply classic-flourish -> decorated=${res1.decorated.length} [${res1.decorated.join(', ')}] skipped=${res1.skipped.length} [${res1.skipped.join(', ')}]`);
  if (expectAllSkipped && res1.decorated.length !== 0) log('expected ALL chapters skipped', true);
  const chapters1 = await zipChapters(await epub.getBlob());
  const parser = new DOMParser();
  for (const p of res1.decorated) {
    const doc = parser.parseFromString(chapters1[p], 'application/xhtml+xml');
    const orns = doc.querySelectorAll('.eink-ornament');
    const heading = doc.querySelector('h1, h2');
    if (orns.length !== 2) { log(`${p}: expected 2 ornaments, got ${orns.length}`, true); continue; }
    const prev = heading?.previousElementSibling, next = heading?.nextElementSibling;
    if (!(prev?.classList.contains('eink-ornament') && next?.classList.contains('eink-ornament'))) {
      log(`${p}: ornaments are not the heading's immediate siblings`, true); continue;
    }
    const origDoc = parser.parseFromString(snapshot[p], 'application/xhtml+xml');
    const origHeading = origDoc.querySelector('h1, h2');
    if (normText(heading.textContent) !== normText(origHeading?.textContent)) {
      log(`${p}: heading text changed`, true); continue;
    }
    log(`${p}: 2 ornaments as heading siblings, heading untouched ("${normText(heading.textContent).slice(0, 40)}")`);
  }
  for (const p of res1.skipped) {
    if (chapters1[p] !== snapshot[p]) log(`${p}: skipped chapter was modified`, true);
    else log(`${p}: skipped, byte-identical`);
  }

  // 3) switch style -> still exactly 2, markup changes
  const res2 = await epub.applyChapterDecoration('celestial');
  const chapters2 = await zipChapters(await epub.getBlob());
  for (const p of res2.decorated) {
    const doc = parser.parseFromString(chapters2[p], 'application/xhtml+xml');
    const n = doc.querySelectorAll('.eink-ornament').length;
    if (n !== 2) log(`${p}: after style switch expected 2 ornaments, got ${n}`, true);
    if (chapters2[p] === chapters1[p]) log(`${p}: export unchanged after style switch`, true);
  }
  log(`style switch classic->celestial: counts stable, markup changed (decorated=${res2.decorated.length}, skipped=${res2.skipped.length})`);

  // 4) remove -> zero residue, content equivalent to original
  const rem = await epub.removeChapterDecoration();
  log(`remove -> chaptersCleaned=${rem.chaptersCleaned} ornamentsRemoved=${rem.ornamentsRemoved}`);
  if (res1.decorated.length > 0 && rem.ornamentsRemoved !== res1.decorated.length * 2) {
    log(`expected ${res1.decorated.length * 2} ornaments removed`, true);
  }
  const chapters3 = await zipChapters(await epub.getBlob());
  for (const p of Object.keys(snapshot)) {
    if ((chapters3[p].match(/eink-ornament/g) || []).length > 0) { log(`${p}: residue after remove`, true); continue; }
    const a = parser.parseFromString(snapshot[p], 'application/xhtml+xml');
    const b = parser.parseFromString(chapters3[p], 'application/xhtml+xml');
    if (normText(a.body?.textContent) !== normText(b.body?.textContent)) {
      log(`${p}: body text differs from original after remove`, true);
    }
  }
  log('remove: no eink-ornament residue anywhere; body text matches original in every chapter');

  return { epub, res1 };
}

const results = {};
try {
  results.a = await testBook('book-a.epub (Alice, h2 chapters)', './book-a.epub', false);
  results.b = await testBook('book-b.epub (p-class titles)', './book-b.epub', true);
  results.c = await testBook('book-c.epub (image titles)', './book-c.epub', true);
} catch (e) {
  log('EXCEPTION: ' + (e?.stack || e), true);
}

const finalFailures = failures;
log(`\n=== SUMMARY: ${finalFailures === 0 ? 'ALL CHECKS PASSED' : finalFailures + ' FAILURE(S)'} ===`);
window.__results = { failures: finalFailures };
document.title = finalFailures === 0 ? 'TESTS-PASSED' : 'TESTS-FAILED-' + finalFailures;

// Reopen book A's decorated (celestial) export in foliate for the screenshot.
try {
  const blob = await results.a.epub.getBlob();
  // re-apply celestial so the reader shows a decorated book (remove already ran)
  await results.a.epub.applyChapterDecoration('celestial');
  const decorated = await results.a.epub.getBlob();
  await customElements.whenDefined('foliate-view');
  const view = document.createElement('foliate-view');
  document.getElementById('reader-host').append(view);
  await view.open(new File([decorated], 'book-a-decorated.epub'));
  log('foliate: decorated export opened OK');
} catch (e) {
  log('foliate open failed: ' + (e?.stack || e), true);
}
