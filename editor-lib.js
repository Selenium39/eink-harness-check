var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../repos/e-ink/node_modules/jszip/dist/jszip.min.js
var require_jszip_min = __commonJS({
  "../../repos/e-ink/node_modules/jszip/dist/jszip.min.js"(exports, module) {
    "use strict";
    !(function(e) {
      if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
      else if ("function" == typeof define && define.amd) define([], e);
      else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e();
      }
    })(function() {
      return (function s(a, o, h) {
        function u(r, e2) {
          if (!o[r]) {
            if (!a[r]) {
              var t = "function" == typeof __require && __require;
              if (!e2 && t) return t(r, true);
              if (l) return l(r, true);
              var n2 = new Error("Cannot find module '" + r + "'");
              throw n2.code = "MODULE_NOT_FOUND", n2;
            }
            var i = o[r] = { exports: {} };
            a[r][0].call(i.exports, function(e3) {
              var t2 = a[r][1][e3];
              return u(t2 || e3);
            }, i, i.exports, s, a, o, h);
          }
          return o[r].exports;
        }
        for (var l = "function" == typeof __require && __require, e = 0; e < h.length; e++) u(h[e]);
        return u;
      })({ 1: [function(e, t, r) {
        "use strict";
        var d = e("./utils"), c = e("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        r.encode = function(e2) {
          for (var t2, r2, n2, i, s, a, o, h = [], u = 0, l = e2.length, f = l, c2 = "string" !== d.getTypeOf(e2); u < e2.length; ) f = l - u, n2 = c2 ? (t2 = e2[u++], r2 = u < l ? e2[u++] : 0, u < l ? e2[u++] : 0) : (t2 = e2.charCodeAt(u++), r2 = u < l ? e2.charCodeAt(u++) : 0, u < l ? e2.charCodeAt(u++) : 0), i = t2 >> 2, s = (3 & t2) << 4 | r2 >> 4, a = 1 < f ? (15 & r2) << 2 | n2 >> 6 : 64, o = 2 < f ? 63 & n2 : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
          return h.join("");
        }, r.decode = function(e2) {
          var t2, r2, n2, i, s, a, o = 0, h = 0, u = "data:";
          if (e2.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
          var l, f = 3 * (e2 = e2.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (e2.charAt(e2.length - 1) === p.charAt(64) && f--, e2.charAt(e2.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e2.length; ) t2 = p.indexOf(e2.charAt(o++)) << 2 | (i = p.indexOf(e2.charAt(o++))) >> 4, r2 = (15 & i) << 4 | (s = p.indexOf(e2.charAt(o++))) >> 2, n2 = (3 & s) << 6 | (a = p.indexOf(e2.charAt(o++))), l[h++] = t2, 64 !== s && (l[h++] = r2), 64 !== a && (l[h++] = n2);
          return l;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(e, t, r) {
        "use strict";
        var n2 = e("./external"), i = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), a = e("./stream/DataLengthProbe");
        function o(e2, t2, r2, n3, i2) {
          this.compressedSize = e2, this.uncompressedSize = t2, this.crc32 = r2, this.compression = n3, this.compressedContent = i2;
        }
        o.prototype = { getContentWorker: function() {
          var e2 = new i(n2.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t2 = this;
          return e2.on("end", function() {
            if (this.streamInfo.data_length !== t2.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), e2;
        }, getCompressedWorker: function() {
          return new i(n2.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, o.createWorkerFrom = function(e2, t2, r2) {
          return e2.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t2.compressWorker(r2)).pipe(new a("compressedSize")).withStreamInfo("compression", t2);
        }, t.exports = o;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, t, r) {
        "use strict";
        var n2 = e("./stream/GenericWorker");
        r.STORE = { magic: "\0\0", compressWorker: function() {
          return new n2("STORE compression");
        }, uncompressWorker: function() {
          return new n2("STORE decompression");
        } }, r.DEFLATE = e("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, t, r) {
        "use strict";
        var n2 = e("./utils");
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n3 = 0; n3 < 8; n3++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2) {
          return void 0 !== e2 && e2.length ? "string" !== n2.getTypeOf(e2) ? (function(e3, t3, r2, n3) {
            var i = o, s = n3 + r2;
            e3 ^= -1;
            for (var a = n3; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3[a])];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : (function(e3, t3, r2, n3) {
            var i = o, s = n3 + r2;
            e3 ^= -1;
            for (var a = n3; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3.charCodeAt(a))];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(e, t, r) {
        "use strict";
        r.base64 = false, r.binary = false, r.dir = false, r.createFolders = true, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
      }, {}], 6: [function(e, t, r) {
        "use strict";
        var n2 = null;
        n2 = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = { Promise: n2 };
      }, { lie: 37 }], 7: [function(e, t, r) {
        "use strict";
        var n2 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako"), s = e("./utils"), a = e("./stream/GenericWorker"), o = n2 ? "uint8array" : "array";
        function h(e2, t2) {
          a.call(this, "FlateWorker/" + e2), this._pako = null, this._pakoAction = e2, this._pakoOptions = t2, this.meta = {};
        }
        r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(e2) {
          this.meta = e2.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e2.data), false);
        }, h.prototype.flush = function() {
          a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
        }, h.prototype.cleanUp = function() {
          a.prototype.cleanUp.call(this), this._pako = null;
        }, h.prototype._createPako = function() {
          this._pako = new i[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
          var t2 = this;
          this._pako.onData = function(e2) {
            t2.push({ data: e2, meta: t2.meta });
          };
        }, r.compressWorker = function(e2) {
          return new h("Deflate", e2);
        }, r.uncompressWorker = function() {
          return new h("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, t, r) {
        "use strict";
        function A(e2, t2) {
          var r2, n3 = "";
          for (r2 = 0; r2 < t2; r2++) n3 += String.fromCharCode(255 & e2), e2 >>>= 8;
          return n3;
        }
        function n2(e2, t2, r2, n3, i2, s2) {
          var a, o, h = e2.file, u = e2.compression, l = s2 !== O.utf8encode, f = I.transformTo("string", s2(h.name)), c = I.transformTo("string", O.utf8encode(h.name)), d = h.comment, p = I.transformTo("string", s2(d)), m = I.transformTo("string", O.utf8encode(d)), _ = c.length !== h.name.length, g = m.length !== d.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          t2 && !r2 || (x.crc32 = e2.crc32, x.compressedSize = e2.compressedSize, x.uncompressedSize = e2.uncompressedSize);
          var S = 0;
          t2 && (S |= 8), l || !_ && !g || (S |= 2048);
          var z = 0, C = 0;
          w && (z |= 16), "UNIX" === i2 ? (C = 798, z |= (function(e3, t3) {
            var r3 = e3;
            return e3 || (r3 = t3 ? 16893 : 33204), (65535 & r3) << 16;
          })(h.unixPermissions, w)) : (C = 20, z |= (function(e3) {
            return 63 & (e3 || 0);
          })(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + c, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
          var E = "";
          return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), { fileRecord: R.LOCAL_FILE_HEADER + E + f + b, dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(n3, 4) + f + b + p };
        }
        var I = e("../utils"), i = e("../stream/GenericWorker"), O = e("../utf8"), B = e("../crc32"), R = e("../signature");
        function s(e2, t2, r2, n3) {
          i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t2, this.zipPlatform = r2, this.encodeFileName = n3, this.streamFiles = e2, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        I.inherits(s, i), s.prototype.push = function(e2) {
          var t2 = e2.meta.percent || 0, r2 = this.entriesCount, n3 = this._sources.length;
          this.accumulate ? this.contentBuffer.push(e2) : (this.bytesWritten += e2.data.length, i.prototype.push.call(this, { data: e2.data, meta: { currentFile: this.currentFile, percent: r2 ? (t2 + 100 * (r2 - n3 - 1)) / r2 : 100 } }));
        }, s.prototype.openedSource = function(e2) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = e2.file.name;
          var t2 = this.streamFiles && !e2.file.dir;
          if (t2) {
            var r2 = n2(e2, t2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: r2.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = true;
        }, s.prototype.closedSource = function(e2) {
          this.accumulate = false;
          var t2 = this.streamFiles && !e2.file.dir, r2 = n2(e2, t2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(r2.dirRecord), t2) this.push({ data: (function(e3) {
            return R.DATA_DESCRIPTOR + A(e3.crc32, 4) + A(e3.compressedSize, 4) + A(e3.uncompressedSize, 4);
          })(e2), meta: { percent: 100 } });
          else for (this.push({ data: r2.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, s.prototype.flush = function() {
          for (var e2 = this.bytesWritten, t2 = 0; t2 < this.dirRecords.length; t2++) this.push({ data: this.dirRecords[t2], meta: { percent: 100 } });
          var r2 = this.bytesWritten - e2, n3 = (function(e3, t3, r3, n4, i2) {
            var s2 = I.transformTo("string", i2(n4));
            return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(e3, 2) + A(e3, 2) + A(t3, 4) + A(r3, 4) + A(s2.length, 2) + s2;
          })(this.dirRecords.length, r2, e2, this.zipComment, this.encodeFileName);
          this.push({ data: n3, meta: { percent: 100 } });
        }, s.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, s.prototype.registerPrevious = function(e2) {
          this._sources.push(e2);
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.closedSource(t2.previous.streamInfo), t2._sources.length ? t2.prepareNextSource() : t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
        }, s.prototype.error = function(e2) {
          var t2 = this._sources;
          if (!i.prototype.error.call(this, e2)) return false;
          for (var r2 = 0; r2 < t2.length; r2++) try {
            t2[r2].error(e2);
          } catch (e3) {
          }
          return true;
        }, s.prototype.lock = function() {
          i.prototype.lock.call(this);
          for (var e2 = this._sources, t2 = 0; t2 < e2.length; t2++) e2[t2].lock();
        }, t.exports = s;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, t, r) {
        "use strict";
        var u = e("../compressions"), n2 = e("./ZipFileWorker");
        r.generateWorker = function(e2, a, t2) {
          var o = new n2(a.streamFiles, t2, a.platform, a.encodeFileName), h = 0;
          try {
            e2.forEach(function(e3, t3) {
              h++;
              var r2 = (function(e4, t4) {
                var r3 = e4 || t4, n4 = u[r3];
                if (!n4) throw new Error(r3 + " is not a valid compression method !");
                return n4;
              })(t3.options.compression, a.compression), n3 = t3.options.compressionOptions || a.compressionOptions || {}, i = t3.dir, s = t3.date;
              t3._compressWorker(r2, n3).withStreamInfo("file", { name: e3, dir: i, date: s, comment: t3.comment || "", unixPermissions: t3.unixPermissions, dosPermissions: t3.dosPermissions }).pipe(o);
            }), o.entriesCount = h;
          } catch (e3) {
            o.error(e3);
          }
          return o;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, t, r) {
        "use strict";
        function n2() {
          if (!(this instanceof n2)) return new n2();
          if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var e2 = new n2();
            for (var t2 in this) "function" != typeof this[t2] && (e2[t2] = this[t2]);
            return e2;
          };
        }
        (n2.prototype = e("./object")).loadAsync = e("./load"), n2.support = e("./support"), n2.defaults = e("./defaults"), n2.version = "3.10.1", n2.loadAsync = function(e2, t2) {
          return new n2().loadAsync(e2, t2);
        }, n2.external = e("./external"), t.exports = n2;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, t, r) {
        "use strict";
        var u = e("./utils"), i = e("./external"), n2 = e("./utf8"), s = e("./zipEntries"), a = e("./stream/Crc32Probe"), l = e("./nodejsUtils");
        function f(n3) {
          return new i.Promise(function(e2, t2) {
            var r2 = n3.decompressed.getContentWorker().pipe(new a());
            r2.on("error", function(e3) {
              t2(e3);
            }).on("end", function() {
              r2.streamInfo.crc32 !== n3.decompressed.crc32 ? t2(new Error("Corrupted zip : CRC32 mismatch")) : e2();
            }).resume();
          });
        }
        t.exports = function(e2, o) {
          var h = this;
          return o = u.extend(o || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n2.utf8decode }), l.isNode && l.isStream(e2) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e2, true, o.optimizedBinaryString, o.base64).then(function(e3) {
            var t2 = new s(o);
            return t2.load(e3), t2;
          }).then(function(e3) {
            var t2 = [i.Promise.resolve(e3)], r2 = e3.files;
            if (o.checkCRC32) for (var n3 = 0; n3 < r2.length; n3++) t2.push(f(r2[n3]));
            return i.Promise.all(t2);
          }).then(function(e3) {
            for (var t2 = e3.shift(), r2 = t2.files, n3 = 0; n3 < r2.length; n3++) {
              var i2 = r2[n3], s2 = i2.fileNameStr, a2 = u.resolve(i2.fileNameStr);
              h.file(a2, i2.decompressed, { binary: true, optimizedBinaryString: true, date: i2.date, dir: i2.dir, comment: i2.fileCommentStr.length ? i2.fileCommentStr : null, unixPermissions: i2.unixPermissions, dosPermissions: i2.dosPermissions, createFolders: o.createFolders }), i2.dir || (h.file(a2).unsafeOriginalName = s2);
            }
            return t2.zipComment.length && (h.comment = t2.zipComment), h;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, t, r) {
        "use strict";
        var n2 = e("../utils"), i = e("../stream/GenericWorker");
        function s(e2, t2) {
          i.call(this, "Nodejs stream input adapter for " + e2), this._upstreamEnded = false, this._bindStream(t2);
        }
        n2.inherits(s, i), s.prototype._bindStream = function(e2) {
          var t2 = this;
          (this._stream = e2).pause(), e2.on("data", function(e3) {
            t2.push({ data: e3, meta: { percent: 0 } });
          }).on("error", function(e3) {
            t2.isPaused ? this.generatedError = e3 : t2.error(e3);
          }).on("end", function() {
            t2.isPaused ? t2._upstreamEnded = true : t2.end();
          });
        }, s.prototype.pause = function() {
          return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
        }, t.exports = s;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, t, r) {
        "use strict";
        var i = e("readable-stream").Readable;
        function n2(e2, t2, r2) {
          i.call(this, t2), this._helper = e2;
          var n3 = this;
          e2.on("data", function(e3, t3) {
            n3.push(e3) || n3._helper.pause(), r2 && r2(t3);
          }).on("error", function(e3) {
            n3.emit("error", e3);
          }).on("end", function() {
            n3.push(null);
          });
        }
        e("../utils").inherits(n2, i), n2.prototype._read = function() {
          this._helper.resume();
        }, t.exports = n2;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, t, r) {
        "use strict";
        t.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e2, t2) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e2, t2);
          if ("number" == typeof e2) throw new Error('The "data" argument must not be a number');
          return new Buffer(e2, t2);
        }, allocBuffer: function(e2) {
          if (Buffer.alloc) return Buffer.alloc(e2);
          var t2 = new Buffer(e2);
          return t2.fill(0), t2;
        }, isBuffer: function(e2) {
          return Buffer.isBuffer(e2);
        }, isStream: function(e2) {
          return e2 && "function" == typeof e2.on && "function" == typeof e2.pause && "function" == typeof e2.resume;
        } };
      }, {}], 15: [function(e, t, r) {
        "use strict";
        function s(e2, t2, r2) {
          var n3, i2 = u.getTypeOf(t2), s2 = u.extend(r2 || {}, f);
          s2.date = s2.date || /* @__PURE__ */ new Date(), null !== s2.compression && (s2.compression = s2.compression.toUpperCase()), "string" == typeof s2.unixPermissions && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = true), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = true), s2.dir && (e2 = g(e2)), s2.createFolders && (n3 = _(e2)) && b.call(this, n3, true);
          var a2 = "string" === i2 && false === s2.binary && false === s2.base64;
          r2 && void 0 !== r2.binary || (s2.binary = !a2), (t2 instanceof c && 0 === t2.uncompressedSize || s2.dir || !t2 || 0 === t2.length) && (s2.base64 = false, s2.binary = true, t2 = "", s2.compression = "STORE", i2 = "string");
          var o2 = null;
          o2 = t2 instanceof c || t2 instanceof l ? t2 : p.isNode && p.isStream(t2) ? new m(e2, t2) : u.prepareContent(e2, t2, s2.binary, s2.optimizedBinaryString, s2.base64);
          var h2 = new d(e2, o2, s2);
          this.files[e2] = h2;
        }
        var i = e("./utf8"), u = e("./utils"), l = e("./stream/GenericWorker"), a = e("./stream/StreamHelper"), f = e("./defaults"), c = e("./compressedObject"), d = e("./zipObject"), o = e("./generate"), p = e("./nodejsUtils"), m = e("./nodejs/NodejsStreamInputAdapter"), _ = function(e2) {
          "/" === e2.slice(-1) && (e2 = e2.substring(0, e2.length - 1));
          var t2 = e2.lastIndexOf("/");
          return 0 < t2 ? e2.substring(0, t2) : "";
        }, g = function(e2) {
          return "/" !== e2.slice(-1) && (e2 += "/"), e2;
        }, b = function(e2, t2) {
          return t2 = void 0 !== t2 ? t2 : f.createFolders, e2 = g(e2), this.files[e2] || s.call(this, e2, null, { dir: true, createFolders: t2 }), this.files[e2];
        };
        function h(e2) {
          return "[object RegExp]" === Object.prototype.toString.call(e2);
        }
        var n2 = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(e2) {
          var t2, r2, n3;
          for (t2 in this.files) n3 = this.files[t2], (r2 = t2.slice(this.root.length, t2.length)) && t2.slice(0, this.root.length) === this.root && e2(r2, n3);
        }, filter: function(r2) {
          var n3 = [];
          return this.forEach(function(e2, t2) {
            r2(e2, t2) && n3.push(t2);
          }), n3;
        }, file: function(e2, t2, r2) {
          if (1 !== arguments.length) return e2 = this.root + e2, s.call(this, e2, t2, r2), this;
          if (h(e2)) {
            var n3 = e2;
            return this.filter(function(e3, t3) {
              return !t3.dir && n3.test(e3);
            });
          }
          var i2 = this.files[this.root + e2];
          return i2 && !i2.dir ? i2 : null;
        }, folder: function(r2) {
          if (!r2) return this;
          if (h(r2)) return this.filter(function(e3, t3) {
            return t3.dir && r2.test(e3);
          });
          var e2 = this.root + r2, t2 = b.call(this, e2), n3 = this.clone();
          return n3.root = t2.name, n3;
        }, remove: function(r2) {
          r2 = this.root + r2;
          var e2 = this.files[r2];
          if (e2 || ("/" !== r2.slice(-1) && (r2 += "/"), e2 = this.files[r2]), e2 && !e2.dir) delete this.files[r2];
          else for (var t2 = this.filter(function(e3, t3) {
            return t3.name.slice(0, r2.length) === r2;
          }), n3 = 0; n3 < t2.length; n3++) delete this.files[t2[n3].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(e2) {
          var t2, r2 = {};
          try {
            if ((r2 = u.extend(e2 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i.utf8encode })).type = r2.type.toLowerCase(), r2.compression = r2.compression.toUpperCase(), "binarystring" === r2.type && (r2.type = "string"), !r2.type) throw new Error("No output type specified.");
            u.checkSupport(r2.type), "darwin" !== r2.platform && "freebsd" !== r2.platform && "linux" !== r2.platform && "sunos" !== r2.platform || (r2.platform = "UNIX"), "win32" === r2.platform && (r2.platform = "DOS");
            var n3 = r2.comment || this.comment || "";
            t2 = o.generateWorker(this, r2, n3);
          } catch (e3) {
            (t2 = new l("error")).error(e3);
          }
          return new a(t2, r2.type || "string", r2.mimeType);
        }, generateAsync: function(e2, t2) {
          return this.generateInternalStream(e2).accumulate(t2);
        }, generateNodeStream: function(e2, t2) {
          return (e2 = e2 || {}).type || (e2.type = "nodebuffer"), this.generateInternalStream(e2).toNodejsStream(t2);
        } };
        t.exports = n2;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, t, r) {
        "use strict";
        t.exports = e("stream");
      }, { stream: void 0 }], 17: [function(e, t, r) {
        "use strict";
        var n2 = e("./DataReader");
        function i(e2) {
          n2.call(this, e2);
          for (var t2 = 0; t2 < this.data.length; t2++) e2[t2] = 255 & e2[t2];
        }
        e("../utils").inherits(i, n2), i.prototype.byteAt = function(e2) {
          return this.data[this.zero + e2];
        }, i.prototype.lastIndexOfSignature = function(e2) {
          for (var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n3 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === t2 && this.data[s + 1] === r2 && this.data[s + 2] === n3 && this.data[s + 3] === i2) return s - this.zero;
          return -1;
        }, i.prototype.readAndCheckSignature = function(e2) {
          var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n3 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.readData(4);
          return t2 === s[0] && r2 === s[1] && n3 === s[2] && i2 === s[3];
        }, i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return [];
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, t, r) {
        "use strict";
        var n2 = e("../utils");
        function i(e2) {
          this.data = e2, this.length = e2.length, this.index = 0, this.zero = 0;
        }
        i.prototype = { checkOffset: function(e2) {
          this.checkIndex(this.index + e2);
        }, checkIndex: function(e2) {
          if (this.length < this.zero + e2 || e2 < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e2 + "). Corrupted zip ?");
        }, setIndex: function(e2) {
          this.checkIndex(e2), this.index = e2;
        }, skip: function(e2) {
          this.setIndex(this.index + e2);
        }, byteAt: function() {
        }, readInt: function(e2) {
          var t2, r2 = 0;
          for (this.checkOffset(e2), t2 = this.index + e2 - 1; t2 >= this.index; t2--) r2 = (r2 << 8) + this.byteAt(t2);
          return this.index += e2, r2;
        }, readString: function(e2) {
          return n2.transformTo("string", this.readData(e2));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var e2 = this.readInt(4);
          return new Date(Date.UTC(1980 + (e2 >> 25 & 127), (e2 >> 21 & 15) - 1, e2 >> 16 & 31, e2 >> 11 & 31, e2 >> 5 & 63, (31 & e2) << 1));
        } }, t.exports = i;
      }, { "../utils": 32 }], 19: [function(e, t, r) {
        "use strict";
        var n2 = e("./Uint8ArrayReader");
        function i(e2) {
          n2.call(this, e2);
        }
        e("../utils").inherits(i, n2), i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, t, r) {
        "use strict";
        var n2 = e("./DataReader");
        function i(e2) {
          n2.call(this, e2);
        }
        e("../utils").inherits(i, n2), i.prototype.byteAt = function(e2) {
          return this.data.charCodeAt(this.zero + e2);
        }, i.prototype.lastIndexOfSignature = function(e2) {
          return this.data.lastIndexOf(e2) - this.zero;
        }, i.prototype.readAndCheckSignature = function(e2) {
          return e2 === this.readData(4);
        }, i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, t, r) {
        "use strict";
        var n2 = e("./ArrayReader");
        function i(e2) {
          n2.call(this, e2);
        }
        e("../utils").inherits(i, n2), i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return new Uint8Array(0);
          var t2 = this.data.subarray(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, t, r) {
        "use strict";
        var n2 = e("../utils"), i = e("../support"), s = e("./ArrayReader"), a = e("./StringReader"), o = e("./NodeBufferReader"), h = e("./Uint8ArrayReader");
        t.exports = function(e2) {
          var t2 = n2.getTypeOf(e2);
          return n2.checkSupport(t2), "string" !== t2 || i.uint8array ? "nodebuffer" === t2 ? new o(e2) : i.uint8array ? new h(n2.transformTo("uint8array", e2)) : new s(n2.transformTo("array", e2)) : new a(e2);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, t, r) {
        "use strict";
        r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(e, t, r) {
        "use strict";
        var n2 = e("./GenericWorker"), i = e("../utils");
        function s(e2) {
          n2.call(this, "ConvertWorker to " + e2), this.destType = e2;
        }
        i.inherits(s, n2), s.prototype.processChunk = function(e2) {
          this.push({ data: i.transformTo(this.destType, e2.data), meta: e2.meta });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, t, r) {
        "use strict";
        var n2 = e("./GenericWorker"), i = e("../crc32");
        function s() {
          n2.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        e("../utils").inherits(s, n2), s.prototype.processChunk = function(e2) {
          this.streamInfo.crc32 = i(e2.data, this.streamInfo.crc32 || 0), this.push(e2);
        }, t.exports = s;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, t, r) {
        "use strict";
        var n2 = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataLengthProbe for " + e2), this.propName = e2, this.withStreamInfo(e2, 0);
        }
        n2.inherits(s, i), s.prototype.processChunk = function(e2) {
          if (e2) {
            var t2 = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = t2 + e2.data.length;
          }
          i.prototype.processChunk.call(this, e2);
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, t, r) {
        "use strict";
        var n2 = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataWorker");
          var t2 = this;
          this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e2.then(function(e3) {
            t2.dataIsReady = true, t2.data = e3, t2.max = e3 && e3.length || 0, t2.type = n2.getTypeOf(e3), t2.isPaused || t2._tickAndRepeat();
          }, function(e3) {
            t2.error(e3);
          });
        }
        n2.inherits(s, i), s.prototype.cleanUp = function() {
          i.prototype.cleanUp.call(this), this.data = null;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n2.delay(this._tickAndRepeat, [], this)), true);
        }, s.prototype._tickAndRepeat = function() {
          this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n2.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
        }, s.prototype._tick = function() {
          if (this.isPaused || this.isFinished) return false;
          var e2 = null, t2 = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) return this.end();
          switch (this.type) {
            case "string":
              e2 = this.data.substring(this.index, t2);
              break;
            case "uint8array":
              e2 = this.data.subarray(this.index, t2);
              break;
            case "array":
            case "nodebuffer":
              e2 = this.data.slice(this.index, t2);
          }
          return this.index = t2, this.push({ data: e2, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, t, r) {
        "use strict";
        function n2(e2) {
          this.name = e2 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        n2.prototype = { push: function(e2) {
          this.emit("data", e2);
        }, end: function() {
          if (this.isFinished) return false;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = true;
          } catch (e2) {
            this.emit("error", e2);
          }
          return true;
        }, error: function(e2) {
          return !this.isFinished && (this.isPaused ? this.generatedError = e2 : (this.isFinished = true, this.emit("error", e2), this.previous && this.previous.error(e2), this.cleanUp()), true);
        }, on: function(e2, t2) {
          return this._listeners[e2].push(t2), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(e2, t2) {
          if (this._listeners[e2]) for (var r2 = 0; r2 < this._listeners[e2].length; r2++) this._listeners[e2][r2].call(this, t2);
        }, pipe: function(e2) {
          return e2.registerPrevious(this);
        }, registerPrevious: function(e2) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = e2.streamInfo, this.mergeStreamInfo(), this.previous = e2;
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
        }, resume: function() {
          if (!this.isPaused || this.isFinished) return false;
          var e2 = this.isPaused = false;
          return this.generatedError && (this.error(this.generatedError), e2 = true), this.previous && this.previous.resume(), !e2;
        }, flush: function() {
        }, processChunk: function(e2) {
          this.push(e2);
        }, withStreamInfo: function(e2, t2) {
          return this.extraStreamInfo[e2] = t2, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var e2 in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e2) && (this.streamInfo[e2] = this.extraStreamInfo[e2]);
        }, lock: function() {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = true, this.previous && this.previous.lock();
        }, toString: function() {
          var e2 = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + e2 : e2;
        } }, t.exports = n2;
      }, {}], 29: [function(e, t, r) {
        "use strict";
        var h = e("../utils"), i = e("./ConvertWorker"), s = e("./GenericWorker"), u = e("../base64"), n2 = e("../support"), a = e("../external"), o = null;
        if (n2.nodestream) try {
          o = e("../nodejs/NodejsStreamOutputAdapter");
        } catch (e2) {
        }
        function l(e2, o2) {
          return new a.Promise(function(t2, r2) {
            var n3 = [], i2 = e2._internalType, s2 = e2._outputType, a2 = e2._mimeType;
            e2.on("data", function(e3, t3) {
              n3.push(e3), o2 && o2(t3);
            }).on("error", function(e3) {
              n3 = [], r2(e3);
            }).on("end", function() {
              try {
                var e3 = (function(e4, t3, r3) {
                  switch (e4) {
                    case "blob":
                      return h.newBlob(h.transformTo("arraybuffer", t3), r3);
                    case "base64":
                      return u.encode(t3);
                    default:
                      return h.transformTo(e4, t3);
                  }
                })(s2, (function(e4, t3) {
                  var r3, n4 = 0, i3 = null, s3 = 0;
                  for (r3 = 0; r3 < t3.length; r3++) s3 += t3[r3].length;
                  switch (e4) {
                    case "string":
                      return t3.join("");
                    case "array":
                      return Array.prototype.concat.apply([], t3);
                    case "uint8array":
                      for (i3 = new Uint8Array(s3), r3 = 0; r3 < t3.length; r3++) i3.set(t3[r3], n4), n4 += t3[r3].length;
                      return i3;
                    case "nodebuffer":
                      return Buffer.concat(t3);
                    default:
                      throw new Error("concat : unsupported type '" + e4 + "'");
                  }
                })(i2, n3), a2);
                t2(e3);
              } catch (e4) {
                r2(e4);
              }
              n3 = [];
            }).resume();
          });
        }
        function f(e2, t2, r2) {
          var n3 = t2;
          switch (t2) {
            case "blob":
            case "arraybuffer":
              n3 = "uint8array";
              break;
            case "base64":
              n3 = "string";
          }
          try {
            this._internalType = n3, this._outputType = t2, this._mimeType = r2, h.checkSupport(n3), this._worker = e2.pipe(new i(n3)), e2.lock();
          } catch (e3) {
            this._worker = new s("error"), this._worker.error(e3);
          }
        }
        f.prototype = { accumulate: function(e2) {
          return l(this, e2);
        }, on: function(e2, t2) {
          var r2 = this;
          return "data" === e2 ? this._worker.on(e2, function(e3) {
            t2.call(r2, e3.data, e3.meta);
          }) : this._worker.on(e2, function() {
            h.delay(t2, arguments, r2);
          }), this;
        }, resume: function() {
          return h.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(e2) {
          if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
          return new o(this, { objectMode: "nodebuffer" !== this._outputType }, e2);
        } }, t.exports = f;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, t, r) {
        "use strict";
        if (r.base64 = true, r.array = true, r.string = true, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = false;
        else {
          var n2 = new ArrayBuffer(0);
          try {
            r.blob = 0 === new Blob([n2], { type: "application/zip" }).size;
          } catch (e2) {
            try {
              var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              i.append(n2), r.blob = 0 === i.getBlob("application/zip").size;
            } catch (e3) {
              r.blob = false;
            }
          }
        }
        try {
          r.nodestream = !!e("readable-stream").Readable;
        } catch (e2) {
          r.nodestream = false;
        }
      }, { "readable-stream": 16 }], 31: [function(e, t, s) {
        "use strict";
        for (var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n2 = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++) u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
        u[254] = u[254] = 1;
        function a() {
          n2.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function l() {
          n2.call(this, "utf-8 encode");
        }
        s.utf8encode = function(e2) {
          return h.nodebuffer ? r.newBufferFrom(e2, "utf-8") : (function(e3) {
            var t2, r2, n3, i2, s2, a2 = e3.length, o2 = 0;
            for (i2 = 0; i2 < a2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n3 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n3 - 56320), i2++), o2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
            for (t2 = h.uint8array ? new Uint8Array(o2) : new Array(o2), i2 = s2 = 0; s2 < o2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n3 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n3 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
            return t2;
          })(e2);
        }, s.utf8decode = function(e2) {
          return h.nodebuffer ? o.transformTo("nodebuffer", e2).toString("utf-8") : (function(e3) {
            var t2, r2, n3, i2, s2 = e3.length, a2 = new Array(2 * s2);
            for (t2 = r2 = 0; t2 < s2; ) if ((n3 = e3[t2++]) < 128) a2[r2++] = n3;
            else if (4 < (i2 = u[n3])) a2[r2++] = 65533, t2 += i2 - 1;
            else {
              for (n3 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; 1 < i2 && t2 < s2; ) n3 = n3 << 6 | 63 & e3[t2++], i2--;
              1 < i2 ? a2[r2++] = 65533 : n3 < 65536 ? a2[r2++] = n3 : (n3 -= 65536, a2[r2++] = 55296 | n3 >> 10 & 1023, a2[r2++] = 56320 | 1023 & n3);
            }
            return a2.length !== r2 && (a2.subarray ? a2 = a2.subarray(0, r2) : a2.length = r2), o.applyFromCharCode(a2);
          })(e2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2));
        }, o.inherits(a, n2), a.prototype.processChunk = function(e2) {
          var t2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2.data);
          if (this.leftOver && this.leftOver.length) {
            if (h.uint8array) {
              var r2 = t2;
              (t2 = new Uint8Array(r2.length + this.leftOver.length)).set(this.leftOver, 0), t2.set(r2, this.leftOver.length);
            } else t2 = this.leftOver.concat(t2);
            this.leftOver = null;
          }
          var n3 = (function(e3, t3) {
            var r3;
            for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); ) r3--;
            return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u[e3[r3]] > t3 ? r3 : t3;
          })(t2), i2 = t2;
          n3 !== t2.length && (h.uint8array ? (i2 = t2.subarray(0, n3), this.leftOver = t2.subarray(n3, t2.length)) : (i2 = t2.slice(0, n3), this.leftOver = t2.slice(n3, t2.length))), this.push({ data: s.utf8decode(i2), meta: e2.meta });
        }, a.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: s.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, s.Utf8DecodeWorker = a, o.inherits(l, n2), l.prototype.processChunk = function(e2) {
          this.push({ data: s.utf8encode(e2.data), meta: e2.meta });
        }, s.Utf8EncodeWorker = l;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, t, a) {
        "use strict";
        var o = e("./support"), h = e("./base64"), r = e("./nodejsUtils"), u = e("./external");
        function n2(e2) {
          return e2;
        }
        function l(e2, t2) {
          for (var r2 = 0; r2 < e2.length; ++r2) t2[r2] = 255 & e2.charCodeAt(r2);
          return t2;
        }
        e("setimmediate"), a.newBlob = function(t2, r2) {
          a.checkSupport("blob");
          try {
            return new Blob([t2], { type: r2 });
          } catch (e2) {
            try {
              var n3 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return n3.append(t2), n3.getBlob(r2);
            } catch (e3) {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var i = { stringifyByChunk: function(e2, t2, r2) {
          var n3 = [], i2 = 0, s2 = e2.length;
          if (s2 <= r2) return String.fromCharCode.apply(null, e2);
          for (; i2 < s2; ) "array" === t2 || "nodebuffer" === t2 ? n3.push(String.fromCharCode.apply(null, e2.slice(i2, Math.min(i2 + r2, s2)))) : n3.push(String.fromCharCode.apply(null, e2.subarray(i2, Math.min(i2 + r2, s2)))), i2 += r2;
          return n3.join("");
        }, stringifyByChar: function(e2) {
          for (var t2 = "", r2 = 0; r2 < e2.length; r2++) t2 += String.fromCharCode(e2[r2]);
          return t2;
        }, applyCanBeUsed: { uint8array: (function() {
          try {
            return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
          } catch (e2) {
            return false;
          }
        })(), nodebuffer: (function() {
          try {
            return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
          } catch (e2) {
            return false;
          }
        })() } };
        function s(e2) {
          var t2 = 65536, r2 = a.getTypeOf(e2), n3 = true;
          if ("uint8array" === r2 ? n3 = i.applyCanBeUsed.uint8array : "nodebuffer" === r2 && (n3 = i.applyCanBeUsed.nodebuffer), n3) for (; 1 < t2; ) try {
            return i.stringifyByChunk(e2, r2, t2);
          } catch (e3) {
            t2 = Math.floor(t2 / 2);
          }
          return i.stringifyByChar(e2);
        }
        function f(e2, t2) {
          for (var r2 = 0; r2 < e2.length; r2++) t2[r2] = e2[r2];
          return t2;
        }
        a.applyFromCharCode = s;
        var c = {};
        c.string = { string: n2, array: function(e2) {
          return l(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.string.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return l(e2, new Uint8Array(e2.length));
        }, nodebuffer: function(e2) {
          return l(e2, r.allocBuffer(e2.length));
        } }, c.array = { string: s, array: n2, arraybuffer: function(e2) {
          return new Uint8Array(e2).buffer;
        }, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.arraybuffer = { string: function(e2) {
          return s(new Uint8Array(e2));
        }, array: function(e2) {
          return f(new Uint8Array(e2), new Array(e2.byteLength));
        }, arraybuffer: n2, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(new Uint8Array(e2));
        } }, c.uint8array = { string: s, array: function(e2) {
          return f(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return e2.buffer;
        }, uint8array: n2, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.nodebuffer = { string: s, array: function(e2) {
          return f(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.nodebuffer.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return f(e2, new Uint8Array(e2.length));
        }, nodebuffer: n2 }, a.transformTo = function(e2, t2) {
          if (t2 = t2 || "", !e2) return t2;
          a.checkSupport(e2);
          var r2 = a.getTypeOf(t2);
          return c[r2][e2](t2);
        }, a.resolve = function(e2) {
          for (var t2 = e2.split("/"), r2 = [], n3 = 0; n3 < t2.length; n3++) {
            var i2 = t2[n3];
            "." === i2 || "" === i2 && 0 !== n3 && n3 !== t2.length - 1 || (".." === i2 ? r2.pop() : r2.push(i2));
          }
          return r2.join("/");
        }, a.getTypeOf = function(e2) {
          return "string" == typeof e2 ? "string" : "[object Array]" === Object.prototype.toString.call(e2) ? "array" : o.nodebuffer && r.isBuffer(e2) ? "nodebuffer" : o.uint8array && e2 instanceof Uint8Array ? "uint8array" : o.arraybuffer && e2 instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, a.checkSupport = function(e2) {
          if (!o[e2.toLowerCase()]) throw new Error(e2 + " is not supported by this platform");
        }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e2) {
          var t2, r2, n3 = "";
          for (r2 = 0; r2 < (e2 || "").length; r2++) n3 += "\\x" + ((t2 = e2.charCodeAt(r2)) < 16 ? "0" : "") + t2.toString(16).toUpperCase();
          return n3;
        }, a.delay = function(e2, t2, r2) {
          setImmediate(function() {
            e2.apply(r2 || null, t2 || []);
          });
        }, a.inherits = function(e2, t2) {
          function r2() {
          }
          r2.prototype = t2.prototype, e2.prototype = new r2();
        }, a.extend = function() {
          var e2, t2, r2 = {};
          for (e2 = 0; e2 < arguments.length; e2++) for (t2 in arguments[e2]) Object.prototype.hasOwnProperty.call(arguments[e2], t2) && void 0 === r2[t2] && (r2[t2] = arguments[e2][t2]);
          return r2;
        }, a.prepareContent = function(r2, e2, n3, i2, s2) {
          return u.Promise.resolve(e2).then(function(n4) {
            return o.blob && (n4 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n4))) && "undefined" != typeof FileReader ? new u.Promise(function(t2, r3) {
              var e3 = new FileReader();
              e3.onload = function(e4) {
                t2(e4.target.result);
              }, e3.onerror = function(e4) {
                r3(e4.target.error);
              }, e3.readAsArrayBuffer(n4);
            }) : n4;
          }).then(function(e3) {
            var t2 = a.getTypeOf(e3);
            return t2 ? ("arraybuffer" === t2 ? e3 = a.transformTo("uint8array", e3) : "string" === t2 && (s2 ? e3 = h.decode(e3) : n3 && true !== i2 && (e3 = (function(e4) {
              return l(e4, o.uint8array ? new Uint8Array(e4.length) : new Array(e4.length));
            })(e3))), e3) : u.Promise.reject(new Error("Can't read the data of '" + r2 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, t, r) {
        "use strict";
        var n2 = e("./reader/readerFor"), i = e("./utils"), s = e("./signature"), a = e("./zipEntry"), o = e("./support");
        function h(e2) {
          this.files = [], this.loadOptions = e2;
        }
        h.prototype = { checkSignature: function(e2) {
          if (!this.reader.readAndCheckSignature(e2)) {
            this.reader.index -= 4;
            var t2 = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t2) + ", expected " + i.pretty(e2) + ")");
          }
        }, isSignature: function(e2, t2) {
          var r2 = this.reader.index;
          this.reader.setIndex(e2);
          var n3 = this.reader.readString(4) === t2;
          return this.reader.setIndex(r2), n3;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var e2 = this.reader.readData(this.zipCommentLength), t2 = o.uint8array ? "uint8array" : "array", r2 = i.transformTo(t2, e2);
          this.zipComment = this.loadOptions.decodeFileName(r2);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var e2, t2, r2, n3 = this.zip64EndOfCentralSize - 44; 0 < n3; ) e2 = this.reader.readInt(2), t2 = this.reader.readInt(4), r2 = this.reader.readData(t2), this.zip64ExtensibleData[e2] = { id: e2, length: t2, value: r2 };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var e2, t2;
          for (e2 = 0; e2 < this.files.length; e2++) t2 = this.files[e2], this.reader.setIndex(t2.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t2.readLocalPart(this.reader), t2.handleUTF8(), t2.processAttributes();
        }, readCentralDir: function() {
          var e2;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) (e2 = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e2);
          if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var e2 = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
          if (e2 < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
          this.reader.setIndex(e2);
          var t2 = e2;
          if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
            if (this.zip64 = true, (e2 = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(e2), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var r2 = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (r2 += 20, r2 += 12 + this.zip64EndOfCentralSize);
          var n3 = t2 - r2;
          if (0 < n3) this.isSignature(t2, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n3);
          else if (n3 < 0) throw new Error("Corrupted zip: missing " + Math.abs(n3) + " bytes.");
        }, prepareReader: function(e2) {
          this.reader = n2(e2);
        }, load: function(e2) {
          this.prepareReader(e2), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, t.exports = h;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, t, r) {
        "use strict";
        var n2 = e("./reader/readerFor"), s = e("./utils"), i = e("./compressedObject"), a = e("./crc32"), o = e("./utf8"), h = e("./compressions"), u = e("./support");
        function l(e2, t2) {
          this.options = e2, this.loadOptions = t2;
        }
        l.prototype = { isEncrypted: function() {
          return 1 == (1 & this.bitFlag);
        }, useUTF8: function() {
          return 2048 == (2048 & this.bitFlag);
        }, readLocalPart: function(e2) {
          var t2, r2;
          if (e2.skip(22), this.fileNameLength = e2.readInt(2), r2 = e2.readInt(2), this.fileName = e2.readData(this.fileNameLength), e2.skip(r2), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if (null === (t2 = (function(e3) {
            for (var t3 in h) if (Object.prototype.hasOwnProperty.call(h, t3) && h[t3].magic === e3) return h[t3];
            return null;
          })(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
          this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t2, e2.readData(this.compressedSize));
        }, readCentralPart: function(e2) {
          this.versionMadeBy = e2.readInt(2), e2.skip(2), this.bitFlag = e2.readInt(2), this.compressionMethod = e2.readString(2), this.date = e2.readDate(), this.crc32 = e2.readInt(4), this.compressedSize = e2.readInt(4), this.uncompressedSize = e2.readInt(4);
          var t2 = e2.readInt(2);
          if (this.extraFieldsLength = e2.readInt(2), this.fileCommentLength = e2.readInt(2), this.diskNumberStart = e2.readInt(2), this.internalFileAttributes = e2.readInt(2), this.externalFileAttributes = e2.readInt(4), this.localHeaderOffset = e2.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          e2.skip(t2), this.readExtraFields(e2), this.parseZIP64ExtraField(e2), this.fileComment = e2.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var e2 = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), 0 == e2 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e2 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var e2 = n2(this.extraFields[1].value);
            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e2.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e2.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e2.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e2.readInt(4));
          }
        }, readExtraFields: function(e2) {
          var t2, r2, n3, i2 = e2.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); e2.index + 4 < i2; ) t2 = e2.readInt(2), r2 = e2.readInt(2), n3 = e2.readData(r2), this.extraFields[t2] = { id: t2, length: r2, value: n3 };
          e2.setIndex(i2);
        }, handleUTF8: function() {
          var e2 = u.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
          else {
            var t2 = this.findExtraFieldUnicodePath();
            if (null !== t2) this.fileNameStr = t2;
            else {
              var r2 = s.transformTo(e2, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(r2);
            }
            var n3 = this.findExtraFieldUnicodeComment();
            if (null !== n3) this.fileCommentStr = n3;
            else {
              var i2 = s.transformTo(e2, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(i2);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var e2 = this.extraFields[28789];
          if (e2) {
            var t2 = n2(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileName) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var e2 = this.extraFields[25461];
          if (e2) {
            var t2 = n2(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileComment) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        } }, t.exports = l;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, t, r) {
        "use strict";
        function n2(e2, t2, r2) {
          this.name = e2, this.dir = r2.dir, this.date = r2.date, this.comment = r2.comment, this.unixPermissions = r2.unixPermissions, this.dosPermissions = r2.dosPermissions, this._data = t2, this._dataBinary = r2.binary, this.options = { compression: r2.compression, compressionOptions: r2.compressionOptions };
        }
        var s = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), a = e("./utf8"), o = e("./compressedObject"), h = e("./stream/GenericWorker");
        n2.prototype = { internalStream: function(e2) {
          var t2 = null, r2 = "string";
          try {
            if (!e2) throw new Error("No output type specified.");
            var n3 = "string" === (r2 = e2.toLowerCase()) || "text" === r2;
            "binarystring" !== r2 && "text" !== r2 || (r2 = "string"), t2 = this._decompressWorker();
            var i2 = !this._dataBinary;
            i2 && !n3 && (t2 = t2.pipe(new a.Utf8EncodeWorker())), !i2 && n3 && (t2 = t2.pipe(new a.Utf8DecodeWorker()));
          } catch (e3) {
            (t2 = new h("error")).error(e3);
          }
          return new s(t2, r2, "");
        }, async: function(e2, t2) {
          return this.internalStream(e2).accumulate(t2);
        }, nodeStream: function(e2, t2) {
          return this.internalStream(e2 || "nodebuffer").toNodejsStream(t2);
        }, _compressWorker: function(e2, t2) {
          if (this._data instanceof o && this._data.compression.magic === e2.magic) return this._data.getCompressedWorker();
          var r2 = this._decompressWorker();
          return this._dataBinary || (r2 = r2.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r2, e2, t2);
        }, _decompressWorker: function() {
          return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
        } };
        for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, f = 0; f < u.length; f++) n2.prototype[u[f]] = l;
        t.exports = n2;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, l, t) {
        (function(t2) {
          "use strict";
          var r, n2, e2 = t2.MutationObserver || t2.WebKitMutationObserver;
          if (e2) {
            var i = 0, s = new e2(u), a = t2.document.createTextNode("");
            s.observe(a, { characterData: true }), r = function() {
              a.data = i = ++i % 2;
            };
          } else if (t2.setImmediate || void 0 === t2.MessageChannel) r = "document" in t2 && "onreadystatechange" in t2.document.createElement("script") ? function() {
            var e3 = t2.document.createElement("script");
            e3.onreadystatechange = function() {
              u(), e3.onreadystatechange = null, e3.parentNode.removeChild(e3), e3 = null;
            }, t2.document.documentElement.appendChild(e3);
          } : function() {
            setTimeout(u, 0);
          };
          else {
            var o = new t2.MessageChannel();
            o.port1.onmessage = u, r = function() {
              o.port2.postMessage(0);
            };
          }
          var h = [];
          function u() {
            var e3, t3;
            n2 = true;
            for (var r2 = h.length; r2; ) {
              for (t3 = h, h = [], e3 = -1; ++e3 < r2; ) t3[e3]();
              r2 = h.length;
            }
            n2 = false;
          }
          l.exports = function(e3) {
            1 !== h.push(e3) || n2 || r();
          };
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}], 37: [function(e, t, r) {
        "use strict";
        var i = e("immediate");
        function u() {
        }
        var l = {}, s = ["REJECTED"], a = ["FULFILLED"], n2 = ["PENDING"];
        function o(e2) {
          if ("function" != typeof e2) throw new TypeError("resolver must be a function");
          this.state = n2, this.queue = [], this.outcome = void 0, e2 !== u && d(this, e2);
        }
        function h(e2, t2, r2) {
          this.promise = e2, "function" == typeof t2 && (this.onFulfilled = t2, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r2 && (this.onRejected = r2, this.callRejected = this.otherCallRejected);
        }
        function f(t2, r2, n3) {
          i(function() {
            var e2;
            try {
              e2 = r2(n3);
            } catch (e3) {
              return l.reject(t2, e3);
            }
            e2 === t2 ? l.reject(t2, new TypeError("Cannot resolve promise with itself")) : l.resolve(t2, e2);
          });
        }
        function c(e2) {
          var t2 = e2 && e2.then;
          if (e2 && ("object" == typeof e2 || "function" == typeof e2) && "function" == typeof t2) return function() {
            t2.apply(e2, arguments);
          };
        }
        function d(t2, e2) {
          var r2 = false;
          function n3(e3) {
            r2 || (r2 = true, l.reject(t2, e3));
          }
          function i2(e3) {
            r2 || (r2 = true, l.resolve(t2, e3));
          }
          var s2 = p(function() {
            e2(i2, n3);
          });
          "error" === s2.status && n3(s2.value);
        }
        function p(e2, t2) {
          var r2 = {};
          try {
            r2.value = e2(t2), r2.status = "success";
          } catch (e3) {
            r2.status = "error", r2.value = e3;
          }
          return r2;
        }
        (t.exports = o).prototype.finally = function(t2) {
          if ("function" != typeof t2) return this;
          var r2 = this.constructor;
          return this.then(function(e2) {
            return r2.resolve(t2()).then(function() {
              return e2;
            });
          }, function(e2) {
            return r2.resolve(t2()).then(function() {
              throw e2;
            });
          });
        }, o.prototype.catch = function(e2) {
          return this.then(null, e2);
        }, o.prototype.then = function(e2, t2) {
          if ("function" != typeof e2 && this.state === a || "function" != typeof t2 && this.state === s) return this;
          var r2 = new this.constructor(u);
          this.state !== n2 ? f(r2, this.state === a ? e2 : t2, this.outcome) : this.queue.push(new h(r2, e2, t2));
          return r2;
        }, h.prototype.callFulfilled = function(e2) {
          l.resolve(this.promise, e2);
        }, h.prototype.otherCallFulfilled = function(e2) {
          f(this.promise, this.onFulfilled, e2);
        }, h.prototype.callRejected = function(e2) {
          l.reject(this.promise, e2);
        }, h.prototype.otherCallRejected = function(e2) {
          f(this.promise, this.onRejected, e2);
        }, l.resolve = function(e2, t2) {
          var r2 = p(c, t2);
          if ("error" === r2.status) return l.reject(e2, r2.value);
          var n3 = r2.value;
          if (n3) d(e2, n3);
          else {
            e2.state = a, e2.outcome = t2;
            for (var i2 = -1, s2 = e2.queue.length; ++i2 < s2; ) e2.queue[i2].callFulfilled(t2);
          }
          return e2;
        }, l.reject = function(e2, t2) {
          e2.state = s, e2.outcome = t2;
          for (var r2 = -1, n3 = e2.queue.length; ++r2 < n3; ) e2.queue[r2].callRejected(t2);
          return e2;
        }, o.resolve = function(e2) {
          if (e2 instanceof this) return e2;
          return l.resolve(new this(u), e2);
        }, o.reject = function(e2) {
          var t2 = new this(u);
          return l.reject(t2, e2);
        }, o.all = function(e2) {
          var r2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var n3 = e2.length, i2 = false;
          if (!n3) return this.resolve([]);
          var s2 = new Array(n3), a2 = 0, t2 = -1, o2 = new this(u);
          for (; ++t2 < n3; ) h2(e2[t2], t2);
          return o2;
          function h2(e3, t3) {
            r2.resolve(e3).then(function(e4) {
              s2[t3] = e4, ++a2 !== n3 || i2 || (i2 = true, l.resolve(o2, s2));
            }, function(e4) {
              i2 || (i2 = true, l.reject(o2, e4));
            });
          }
        }, o.race = function(e2) {
          var t2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var r2 = e2.length, n3 = false;
          if (!r2) return this.resolve([]);
          var i2 = -1, s2 = new this(u);
          for (; ++i2 < r2; ) a2 = e2[i2], t2.resolve(a2).then(function(e3) {
            n3 || (n3 = true, l.resolve(s2, e3));
          }, function(e3) {
            n3 || (n3 = true, l.reject(s2, e3));
          });
          var a2;
          return s2;
        };
      }, { immediate: 36 }], 38: [function(e, t, r) {
        "use strict";
        var n2 = {};
        (0, e("./lib/utils/common").assign)(n2, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n2;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, t, r) {
        "use strict";
        var a = e("./zlib/deflate"), o = e("./utils/common"), h = e("./utils/strings"), i = e("./zlib/messages"), s = e("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, c = 0, d = 8;
        function p(e2) {
          if (!(this instanceof p)) return new p(e2);
          this.options = o.assign({ level: f, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 < t2.windowBits ? t2.windowBits = -t2.windowBits : t2.gzip && 0 < t2.windowBits && t2.windowBits < 16 && (t2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
          var r2 = a.deflateInit2(this.strm, t2.level, t2.method, t2.windowBits, t2.memLevel, t2.strategy);
          if (r2 !== l) throw new Error(i[r2]);
          if (t2.header && a.deflateSetHeader(this.strm, t2.header), t2.dictionary) {
            var n3;
            if (n3 = "string" == typeof t2.dictionary ? h.string2buf(t2.dictionary) : "[object ArrayBuffer]" === u.call(t2.dictionary) ? new Uint8Array(t2.dictionary) : t2.dictionary, (r2 = a.deflateSetDictionary(this.strm, n3)) !== l) throw new Error(i[r2]);
            this._dict_set = true;
          }
        }
        function n2(e2, t2) {
          var r2 = new p(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || i[r2.err];
          return r2.result;
        }
        p.prototype.push = function(e2, t2) {
          var r2, n3, i2 = this.strm, s2 = this.options.chunkSize;
          if (this.ended) return false;
          n3 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0, "string" == typeof e2 ? i2.input = h.string2buf(e2) : "[object ArrayBuffer]" === u.call(e2) ? i2.input = new Uint8Array(e2) : i2.input = e2, i2.next_in = 0, i2.avail_in = i2.input.length;
          do {
            if (0 === i2.avail_out && (i2.output = new o.Buf8(s2), i2.next_out = 0, i2.avail_out = s2), 1 !== (r2 = a.deflate(i2, n3)) && r2 !== l) return this.onEnd(r2), !(this.ended = true);
            0 !== i2.avail_out && (0 !== i2.avail_in || 4 !== n3 && 2 !== n3) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i2.output, i2.next_out))) : this.onData(o.shrinkBuf(i2.output, i2.next_out)));
          } while ((0 < i2.avail_in || 0 === i2.avail_out) && 1 !== r2);
          return 4 === n3 ? (r2 = a.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === l) : 2 !== n3 || (this.onEnd(l), !(i2.avail_out = 0));
        }, p.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, p.prototype.onEnd = function(e2) {
          e2 === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Deflate = p, r.deflate = n2, r.deflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, n2(e2, t2);
        }, r.gzip = function(e2, t2) {
          return (t2 = t2 || {}).gzip = true, n2(e2, t2);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, t, r) {
        "use strict";
        var c = e("./zlib/inflate"), d = e("./utils/common"), p = e("./utils/strings"), m = e("./zlib/constants"), n2 = e("./zlib/messages"), i = e("./zlib/zstream"), s = e("./zlib/gzheader"), _ = Object.prototype.toString;
        function a(e2) {
          if (!(this instanceof a)) return new a(e2);
          this.options = d.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 <= t2.windowBits && t2.windowBits < 16 && (t2.windowBits = -t2.windowBits, 0 === t2.windowBits && (t2.windowBits = -15)), !(0 <= t2.windowBits && t2.windowBits < 16) || e2 && e2.windowBits || (t2.windowBits += 32), 15 < t2.windowBits && t2.windowBits < 48 && 0 == (15 & t2.windowBits) && (t2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
          var r2 = c.inflateInit2(this.strm, t2.windowBits);
          if (r2 !== m.Z_OK) throw new Error(n2[r2]);
          this.header = new s(), c.inflateGetHeader(this.strm, this.header);
        }
        function o(e2, t2) {
          var r2 = new a(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || n2[r2.err];
          return r2.result;
        }
        a.prototype.push = function(e2, t2) {
          var r2, n3, i2, s2, a2, o2, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = false;
          if (this.ended) return false;
          n3 = t2 === ~~t2 ? t2 : true === t2 ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e2 ? h.input = p.binstring2buf(e2) : "[object ArrayBuffer]" === _.call(e2) ? h.input = new Uint8Array(e2) : h.input = e2, h.next_in = 0, h.avail_in = h.input.length;
          do {
            if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r2 = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o2 = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r2 = c.inflateSetDictionary(this.strm, o2)), r2 === m.Z_BUF_ERROR && true === f && (r2 = m.Z_OK, f = false), r2 !== m.Z_STREAM_END && r2 !== m.Z_OK) return this.onEnd(r2), !(this.ended = true);
            h.next_out && (0 !== h.avail_out && r2 !== m.Z_STREAM_END && (0 !== h.avail_in || n3 !== m.Z_FINISH && n3 !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i2 = p.utf8border(h.output, h.next_out), s2 = h.next_out - i2, a2 = p.buf2string(h.output, i2), h.next_out = s2, h.avail_out = u - s2, s2 && d.arraySet(h.output, h.output, i2, s2, 0), this.onData(a2)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = true);
          } while ((0 < h.avail_in || 0 === h.avail_out) && r2 !== m.Z_STREAM_END);
          return r2 === m.Z_STREAM_END && (n3 = m.Z_FINISH), n3 === m.Z_FINISH ? (r2 = c.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === m.Z_OK) : n3 !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
        }, a.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, a.prototype.onEnd = function(e2) {
          e2 === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, o(e2, t2);
        }, r.ungzip = o;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, t, r) {
        "use strict";
        var n2 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
        r.assign = function(e2) {
          for (var t2 = Array.prototype.slice.call(arguments, 1); t2.length; ) {
            var r2 = t2.shift();
            if (r2) {
              if ("object" != typeof r2) throw new TypeError(r2 + "must be non-object");
              for (var n3 in r2) r2.hasOwnProperty(n3) && (e2[n3] = r2[n3]);
            }
          }
          return e2;
        }, r.shrinkBuf = function(e2, t2) {
          return e2.length === t2 ? e2 : e2.subarray ? e2.subarray(0, t2) : (e2.length = t2, e2);
        };
        var i = { arraySet: function(e2, t2, r2, n3, i2) {
          if (t2.subarray && e2.subarray) e2.set(t2.subarray(r2, r2 + n3), i2);
          else for (var s2 = 0; s2 < n3; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          var t2, r2, n3, i2, s2, a;
          for (t2 = n3 = 0, r2 = e2.length; t2 < r2; t2++) n3 += e2[t2].length;
          for (a = new Uint8Array(n3), t2 = i2 = 0, r2 = e2.length; t2 < r2; t2++) s2 = e2[t2], a.set(s2, i2), i2 += s2.length;
          return a;
        } }, s = { arraySet: function(e2, t2, r2, n3, i2) {
          for (var s2 = 0; s2 < n3; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          return [].concat.apply([], e2);
        } };
        r.setTyped = function(e2) {
          e2 ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
        }, r.setTyped(n2);
      }, {}], 42: [function(e, t, r) {
        "use strict";
        var h = e("./common"), i = true, s = true;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch (e2) {
          i = false;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (e2) {
          s = false;
        }
        for (var u = new h.Buf8(256), n2 = 0; n2 < 256; n2++) u[n2] = 252 <= n2 ? 6 : 248 <= n2 ? 5 : 240 <= n2 ? 4 : 224 <= n2 ? 3 : 192 <= n2 ? 2 : 1;
        function l(e2, t2) {
          if (t2 < 65537 && (e2.subarray && s || !e2.subarray && i)) return String.fromCharCode.apply(null, h.shrinkBuf(e2, t2));
          for (var r2 = "", n3 = 0; n3 < t2; n3++) r2 += String.fromCharCode(e2[n3]);
          return r2;
        }
        u[254] = u[254] = 1, r.string2buf = function(e2) {
          var t2, r2, n3, i2, s2, a = e2.length, o = 0;
          for (i2 = 0; i2 < a; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n3 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n3 - 56320), i2++), o += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
          for (t2 = new h.Buf8(o), i2 = s2 = 0; s2 < o; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n3 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n3 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
          return t2;
        }, r.buf2binstring = function(e2) {
          return l(e2, e2.length);
        }, r.binstring2buf = function(e2) {
          for (var t2 = new h.Buf8(e2.length), r2 = 0, n3 = t2.length; r2 < n3; r2++) t2[r2] = e2.charCodeAt(r2);
          return t2;
        }, r.buf2string = function(e2, t2) {
          var r2, n3, i2, s2, a = t2 || e2.length, o = new Array(2 * a);
          for (r2 = n3 = 0; r2 < a; ) if ((i2 = e2[r2++]) < 128) o[n3++] = i2;
          else if (4 < (s2 = u[i2])) o[n3++] = 65533, r2 += s2 - 1;
          else {
            for (i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7; 1 < s2 && r2 < a; ) i2 = i2 << 6 | 63 & e2[r2++], s2--;
            1 < s2 ? o[n3++] = 65533 : i2 < 65536 ? o[n3++] = i2 : (i2 -= 65536, o[n3++] = 55296 | i2 >> 10 & 1023, o[n3++] = 56320 | 1023 & i2);
          }
          return l(o, n3);
        }, r.utf8border = function(e2, t2) {
          var r2;
          for ((t2 = t2 || e2.length) > e2.length && (t2 = e2.length), r2 = t2 - 1; 0 <= r2 && 128 == (192 & e2[r2]); ) r2--;
          return r2 < 0 ? t2 : 0 === r2 ? t2 : r2 + u[e2[r2]] > t2 ? r2 : t2;
        };
      }, { "./common": 41 }], 43: [function(e, t, r) {
        "use strict";
        t.exports = function(e2, t2, r2, n2) {
          for (var i = 65535 & e2 | 0, s = e2 >>> 16 & 65535 | 0, a = 0; 0 !== r2; ) {
            for (r2 -= a = 2e3 < r2 ? 2e3 : r2; s = s + (i = i + t2[n2++] | 0) | 0, --a; ) ;
            i %= 65521, s %= 65521;
          }
          return i | s << 16 | 0;
        };
      }, {}], 44: [function(e, t, r) {
        "use strict";
        t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(e, t, r) {
        "use strict";
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n2 = 0; n2 < 8; n2++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2, r2, n2) {
          var i = o, s = n2 + r2;
          e2 ^= -1;
          for (var a = n2; a < s; a++) e2 = e2 >>> 8 ^ i[255 & (e2 ^ t2[a])];
          return -1 ^ e2;
        };
      }, {}], 46: [function(e, t, r) {
        "use strict";
        var h, c = e("../utils/common"), u = e("./trees"), d = e("./adler32"), p = e("./crc32"), n2 = e("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, i = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
        function R(e2, t2) {
          return e2.msg = n2[t2], t2;
        }
        function T(e2) {
          return (e2 << 1) - (4 < e2 ? 9 : 0);
        }
        function D(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        function F(e2) {
          var t2 = e2.state, r2 = t2.pending;
          r2 > e2.avail_out && (r2 = e2.avail_out), 0 !== r2 && (c.arraySet(e2.output, t2.pending_buf, t2.pending_out, r2, e2.next_out), e2.next_out += r2, t2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, t2.pending -= r2, 0 === t2.pending && (t2.pending_out = 0));
        }
        function N(e2, t2) {
          u._tr_flush_block(e2, 0 <= e2.block_start ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, F(e2.strm);
        }
        function U(e2, t2) {
          e2.pending_buf[e2.pending++] = t2;
        }
        function P(e2, t2) {
          e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = 255 & t2;
        }
        function L(e2, t2) {
          var r2, n3, i2 = e2.max_chain_length, s2 = e2.strstart, a2 = e2.prev_length, o2 = e2.nice_match, h2 = e2.strstart > e2.w_size - z ? e2.strstart - (e2.w_size - z) : 0, u2 = e2.window, l2 = e2.w_mask, f2 = e2.prev, c2 = e2.strstart + S, d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
          e2.prev_length >= e2.good_match && (i2 >>= 2), o2 > e2.lookahead && (o2 = e2.lookahead);
          do {
            if (u2[(r2 = t2) + a2] === p2 && u2[r2 + a2 - 1] === d2 && u2[r2] === u2[s2] && u2[++r2] === u2[s2 + 1]) {
              s2 += 2, r2++;
              do {
              } while (u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && s2 < c2);
              if (n3 = S - (c2 - s2), s2 = c2 - S, a2 < n3) {
                if (e2.match_start = t2, o2 <= (a2 = n3)) break;
                d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
              }
            }
          } while ((t2 = f2[t2 & l2]) > h2 && 0 != --i2);
          return a2 <= e2.lookahead ? a2 : e2.lookahead;
        }
        function j(e2) {
          var t2, r2, n3, i2, s2, a2, o2, h2, u2, l2, f2 = e2.w_size;
          do {
            if (i2 = e2.window_size - e2.lookahead - e2.strstart, e2.strstart >= f2 + (f2 - z)) {
              for (c.arraySet(e2.window, e2.window, f2, f2, 0), e2.match_start -= f2, e2.strstart -= f2, e2.block_start -= f2, t2 = r2 = e2.hash_size; n3 = e2.head[--t2], e2.head[t2] = f2 <= n3 ? n3 - f2 : 0, --r2; ) ;
              for (t2 = r2 = f2; n3 = e2.prev[--t2], e2.prev[t2] = f2 <= n3 ? n3 - f2 : 0, --r2; ) ;
              i2 += f2;
            }
            if (0 === e2.strm.avail_in) break;
            if (a2 = e2.strm, o2 = e2.window, h2 = e2.strstart + e2.lookahead, u2 = i2, l2 = void 0, l2 = a2.avail_in, u2 < l2 && (l2 = u2), r2 = 0 === l2 ? 0 : (a2.avail_in -= l2, c.arraySet(o2, a2.input, a2.next_in, l2, h2), 1 === a2.state.wrap ? a2.adler = d(a2.adler, o2, l2, h2) : 2 === a2.state.wrap && (a2.adler = p(a2.adler, o2, l2, h2)), a2.next_in += l2, a2.total_in += l2, l2), e2.lookahead += r2, e2.lookahead + e2.insert >= x) for (s2 = e2.strstart - e2.insert, e2.ins_h = e2.window[s2], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + 1]) & e2.hash_mask; e2.insert && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + x - 1]) & e2.hash_mask, e2.prev[s2 & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = s2, s2++, e2.insert--, !(e2.lookahead + e2.insert < x)); ) ;
          } while (e2.lookahead < z && 0 !== e2.strm.avail_in);
        }
        function Z(e2, t2) {
          for (var r2, n3; ; ) {
            if (e2.lookahead < z) {
              if (j(e2), e2.lookahead < z && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 !== r2 && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2)), e2.match_length >= x) if (n3 = u._tr_tally(e2, e2.strstart - e2.match_start, e2.match_length - x), e2.lookahead -= e2.match_length, e2.match_length <= e2.max_lazy_match && e2.lookahead >= x) {
              for (e2.match_length--; e2.strstart++, e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart, 0 != --e2.match_length; ) ;
              e2.strstart++;
            } else e2.strstart += e2.match_length, e2.match_length = 0, e2.ins_h = e2.window[e2.strstart], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 1]) & e2.hash_mask;
            else n3 = u._tr_tally(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++;
            if (n3 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
          }
          return e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
        }
        function W(e2, t2) {
          for (var r2, n3, i2; ; ) {
            if (e2.lookahead < z) {
              if (j(e2), e2.lookahead < z && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = x - 1, 0 !== r2 && e2.prev_length < e2.max_lazy_match && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2), e2.match_length <= 5 && (1 === e2.strategy || e2.match_length === x && 4096 < e2.strstart - e2.match_start) && (e2.match_length = x - 1)), e2.prev_length >= x && e2.match_length <= e2.prev_length) {
              for (i2 = e2.strstart + e2.lookahead - x, n3 = u._tr_tally(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - x), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2; ++e2.strstart <= i2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 != --e2.prev_length; ) ;
              if (e2.match_available = 0, e2.match_length = x - 1, e2.strstart++, n3 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
            } else if (e2.match_available) {
              if ((n3 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1])) && N(e2, false), e2.strstart++, e2.lookahead--, 0 === e2.strm.avail_out) return A;
            } else e2.match_available = 1, e2.strstart++, e2.lookahead--;
          }
          return e2.match_available && (n3 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
        }
        function M(e2, t2, r2, n3, i2) {
          this.good_length = e2, this.max_lazy = t2, this.nice_length = r2, this.max_chain = n3, this.func = i2;
        }
        function H() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function G(e2) {
          var t2;
          return e2 && e2.state ? (e2.total_in = e2.total_out = 0, e2.data_type = i, (t2 = e2.state).pending = 0, t2.pending_out = 0, t2.wrap < 0 && (t2.wrap = -t2.wrap), t2.status = t2.wrap ? C : E, e2.adler = 2 === t2.wrap ? 0 : 1, t2.last_flush = l, u._tr_init(t2), m) : R(e2, _);
        }
        function K(e2) {
          var t2 = G(e2);
          return t2 === m && (function(e3) {
            e3.window_size = 2 * e3.w_size, D(e3.head), e3.max_lazy_match = h[e3.level].max_lazy, e3.good_match = h[e3.level].good_length, e3.nice_match = h[e3.level].nice_length, e3.max_chain_length = h[e3.level].max_chain, e3.strstart = 0, e3.block_start = 0, e3.lookahead = 0, e3.insert = 0, e3.match_length = e3.prev_length = x - 1, e3.match_available = 0, e3.ins_h = 0;
          })(e2.state), t2;
        }
        function Y(e2, t2, r2, n3, i2, s2) {
          if (!e2) return _;
          var a2 = 1;
          if (t2 === g && (t2 = 6), n3 < 0 ? (a2 = 0, n3 = -n3) : 15 < n3 && (a2 = 2, n3 -= 16), i2 < 1 || y < i2 || r2 !== v || n3 < 8 || 15 < n3 || t2 < 0 || 9 < t2 || s2 < 0 || b < s2) return R(e2, _);
          8 === n3 && (n3 = 9);
          var o2 = new H();
          return (e2.state = o2).strm = e2, o2.wrap = a2, o2.gzhead = null, o2.w_bits = n3, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = i2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + x - 1) / x), o2.window = new c.Buf8(2 * o2.w_size), o2.head = new c.Buf16(o2.hash_size), o2.prev = new c.Buf16(o2.w_size), o2.lit_bufsize = 1 << i2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new c.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = t2, o2.strategy = s2, o2.method = r2, K(e2);
        }
        h = [new M(0, 0, 0, 0, function(e2, t2) {
          var r2 = 65535;
          for (r2 > e2.pending_buf_size - 5 && (r2 = e2.pending_buf_size - 5); ; ) {
            if (e2.lookahead <= 1) {
              if (j(e2), 0 === e2.lookahead && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            e2.strstart += e2.lookahead, e2.lookahead = 0;
            var n3 = e2.block_start + r2;
            if ((0 === e2.strstart || e2.strstart >= n3) && (e2.lookahead = e2.strstart - n3, e2.strstart = n3, N(e2, false), 0 === e2.strm.avail_out)) return A;
            if (e2.strstart - e2.block_start >= e2.w_size - z && (N(e2, false), 0 === e2.strm.avail_out)) return A;
          }
          return e2.insert = 0, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : (e2.strstart > e2.block_start && (N(e2, false), e2.strm.avail_out), A);
        }), new M(4, 4, 8, 4, Z), new M(4, 5, 16, 8, Z), new M(4, 6, 32, 32, Z), new M(4, 4, 16, 16, W), new M(8, 16, 32, 32, W), new M(8, 16, 128, 128, W), new M(8, 32, 128, 256, W), new M(32, 128, 258, 1024, W), new M(32, 258, 258, 4096, W)], r.deflateInit = function(e2, t2) {
          return Y(e2, t2, v, 15, 8, 0);
        }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function(e2, t2) {
          return e2 && e2.state ? 2 !== e2.state.wrap ? _ : (e2.state.gzhead = t2, m) : _;
        }, r.deflate = function(e2, t2) {
          var r2, n3, i2, s2;
          if (!e2 || !e2.state || 5 < t2 || t2 < 0) return e2 ? R(e2, _) : _;
          if (n3 = e2.state, !e2.output || !e2.input && 0 !== e2.avail_in || 666 === n3.status && t2 !== f) return R(e2, 0 === e2.avail_out ? -5 : _);
          if (n3.strm = e2, r2 = n3.last_flush, n3.last_flush = t2, n3.status === C) if (2 === n3.wrap) e2.adler = 0, U(n3, 31), U(n3, 139), U(n3, 8), n3.gzhead ? (U(n3, (n3.gzhead.text ? 1 : 0) + (n3.gzhead.hcrc ? 2 : 0) + (n3.gzhead.extra ? 4 : 0) + (n3.gzhead.name ? 8 : 0) + (n3.gzhead.comment ? 16 : 0)), U(n3, 255 & n3.gzhead.time), U(n3, n3.gzhead.time >> 8 & 255), U(n3, n3.gzhead.time >> 16 & 255), U(n3, n3.gzhead.time >> 24 & 255), U(n3, 9 === n3.level ? 2 : 2 <= n3.strategy || n3.level < 2 ? 4 : 0), U(n3, 255 & n3.gzhead.os), n3.gzhead.extra && n3.gzhead.extra.length && (U(n3, 255 & n3.gzhead.extra.length), U(n3, n3.gzhead.extra.length >> 8 & 255)), n3.gzhead.hcrc && (e2.adler = p(e2.adler, n3.pending_buf, n3.pending, 0)), n3.gzindex = 0, n3.status = 69) : (U(n3, 0), U(n3, 0), U(n3, 0), U(n3, 0), U(n3, 0), U(n3, 9 === n3.level ? 2 : 2 <= n3.strategy || n3.level < 2 ? 4 : 0), U(n3, 3), n3.status = E);
          else {
            var a2 = v + (n3.w_bits - 8 << 4) << 8;
            a2 |= (2 <= n3.strategy || n3.level < 2 ? 0 : n3.level < 6 ? 1 : 6 === n3.level ? 2 : 3) << 6, 0 !== n3.strstart && (a2 |= 32), a2 += 31 - a2 % 31, n3.status = E, P(n3, a2), 0 !== n3.strstart && (P(n3, e2.adler >>> 16), P(n3, 65535 & e2.adler)), e2.adler = 1;
          }
          if (69 === n3.status) if (n3.gzhead.extra) {
            for (i2 = n3.pending; n3.gzindex < (65535 & n3.gzhead.extra.length) && (n3.pending !== n3.pending_buf_size || (n3.gzhead.hcrc && n3.pending > i2 && (e2.adler = p(e2.adler, n3.pending_buf, n3.pending - i2, i2)), F(e2), i2 = n3.pending, n3.pending !== n3.pending_buf_size)); ) U(n3, 255 & n3.gzhead.extra[n3.gzindex]), n3.gzindex++;
            n3.gzhead.hcrc && n3.pending > i2 && (e2.adler = p(e2.adler, n3.pending_buf, n3.pending - i2, i2)), n3.gzindex === n3.gzhead.extra.length && (n3.gzindex = 0, n3.status = 73);
          } else n3.status = 73;
          if (73 === n3.status) if (n3.gzhead.name) {
            i2 = n3.pending;
            do {
              if (n3.pending === n3.pending_buf_size && (n3.gzhead.hcrc && n3.pending > i2 && (e2.adler = p(e2.adler, n3.pending_buf, n3.pending - i2, i2)), F(e2), i2 = n3.pending, n3.pending === n3.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n3.gzindex < n3.gzhead.name.length ? 255 & n3.gzhead.name.charCodeAt(n3.gzindex++) : 0, U(n3, s2);
            } while (0 !== s2);
            n3.gzhead.hcrc && n3.pending > i2 && (e2.adler = p(e2.adler, n3.pending_buf, n3.pending - i2, i2)), 0 === s2 && (n3.gzindex = 0, n3.status = 91);
          } else n3.status = 91;
          if (91 === n3.status) if (n3.gzhead.comment) {
            i2 = n3.pending;
            do {
              if (n3.pending === n3.pending_buf_size && (n3.gzhead.hcrc && n3.pending > i2 && (e2.adler = p(e2.adler, n3.pending_buf, n3.pending - i2, i2)), F(e2), i2 = n3.pending, n3.pending === n3.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n3.gzindex < n3.gzhead.comment.length ? 255 & n3.gzhead.comment.charCodeAt(n3.gzindex++) : 0, U(n3, s2);
            } while (0 !== s2);
            n3.gzhead.hcrc && n3.pending > i2 && (e2.adler = p(e2.adler, n3.pending_buf, n3.pending - i2, i2)), 0 === s2 && (n3.status = 103);
          } else n3.status = 103;
          if (103 === n3.status && (n3.gzhead.hcrc ? (n3.pending + 2 > n3.pending_buf_size && F(e2), n3.pending + 2 <= n3.pending_buf_size && (U(n3, 255 & e2.adler), U(n3, e2.adler >> 8 & 255), e2.adler = 0, n3.status = E)) : n3.status = E), 0 !== n3.pending) {
            if (F(e2), 0 === e2.avail_out) return n3.last_flush = -1, m;
          } else if (0 === e2.avail_in && T(t2) <= T(r2) && t2 !== f) return R(e2, -5);
          if (666 === n3.status && 0 !== e2.avail_in) return R(e2, -5);
          if (0 !== e2.avail_in || 0 !== n3.lookahead || t2 !== l && 666 !== n3.status) {
            var o2 = 2 === n3.strategy ? (function(e3, t3) {
              for (var r3; ; ) {
                if (0 === e3.lookahead && (j(e3), 0 === e3.lookahead)) {
                  if (t3 === l) return A;
                  break;
                }
                if (e3.match_length = 0, r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++, r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
              }
              return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
            })(n3, t2) : 3 === n3.strategy ? (function(e3, t3) {
              for (var r3, n4, i3, s3, a3 = e3.window; ; ) {
                if (e3.lookahead <= S) {
                  if (j(e3), e3.lookahead <= S && t3 === l) return A;
                  if (0 === e3.lookahead) break;
                }
                if (e3.match_length = 0, e3.lookahead >= x && 0 < e3.strstart && (n4 = a3[i3 = e3.strstart - 1]) === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3]) {
                  s3 = e3.strstart + S;
                  do {
                  } while (n4 === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3] && i3 < s3);
                  e3.match_length = S - (s3 - i3), e3.match_length > e3.lookahead && (e3.match_length = e3.lookahead);
                }
                if (e3.match_length >= x ? (r3 = u._tr_tally(e3, 1, e3.match_length - x), e3.lookahead -= e3.match_length, e3.strstart += e3.match_length, e3.match_length = 0) : (r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++), r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
              }
              return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
            })(n3, t2) : h[n3.level].func(n3, t2);
            if (o2 !== O && o2 !== B || (n3.status = 666), o2 === A || o2 === O) return 0 === e2.avail_out && (n3.last_flush = -1), m;
            if (o2 === I && (1 === t2 ? u._tr_align(n3) : 5 !== t2 && (u._tr_stored_block(n3, 0, 0, false), 3 === t2 && (D(n3.head), 0 === n3.lookahead && (n3.strstart = 0, n3.block_start = 0, n3.insert = 0))), F(e2), 0 === e2.avail_out)) return n3.last_flush = -1, m;
          }
          return t2 !== f ? m : n3.wrap <= 0 ? 1 : (2 === n3.wrap ? (U(n3, 255 & e2.adler), U(n3, e2.adler >> 8 & 255), U(n3, e2.adler >> 16 & 255), U(n3, e2.adler >> 24 & 255), U(n3, 255 & e2.total_in), U(n3, e2.total_in >> 8 & 255), U(n3, e2.total_in >> 16 & 255), U(n3, e2.total_in >> 24 & 255)) : (P(n3, e2.adler >>> 16), P(n3, 65535 & e2.adler)), F(e2), 0 < n3.wrap && (n3.wrap = -n3.wrap), 0 !== n3.pending ? m : 1);
        }, r.deflateEnd = function(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state.status) !== C && 69 !== t2 && 73 !== t2 && 91 !== t2 && 103 !== t2 && t2 !== E && 666 !== t2 ? R(e2, _) : (e2.state = null, t2 === E ? R(e2, -3) : m) : _;
        }, r.deflateSetDictionary = function(e2, t2) {
          var r2, n3, i2, s2, a2, o2, h2, u2, l2 = t2.length;
          if (!e2 || !e2.state) return _;
          if (2 === (s2 = (r2 = e2.state).wrap) || 1 === s2 && r2.status !== C || r2.lookahead) return _;
          for (1 === s2 && (e2.adler = d(e2.adler, t2, l2, 0)), r2.wrap = 0, l2 >= r2.w_size && (0 === s2 && (D(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), u2 = new c.Buf8(r2.w_size), c.arraySet(u2, t2, l2 - r2.w_size, r2.w_size, 0), t2 = u2, l2 = r2.w_size), a2 = e2.avail_in, o2 = e2.next_in, h2 = e2.input, e2.avail_in = l2, e2.next_in = 0, e2.input = t2, j(r2); r2.lookahead >= x; ) {
            for (n3 = r2.strstart, i2 = r2.lookahead - (x - 1); r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n3 + x - 1]) & r2.hash_mask, r2.prev[n3 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n3, n3++, --i2; ) ;
            r2.strstart = n3, r2.lookahead = x - 1, j(r2);
          }
          return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = x - 1, r2.match_available = 0, e2.next_in = o2, e2.input = h2, e2.avail_in = a2, r2.wrap = s2, m;
        }, r.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, t, r) {
        "use strict";
        t.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
        };
      }, {}], 48: [function(e, t, r) {
        "use strict";
        t.exports = function(e2, t2) {
          var r2, n2, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C;
          r2 = e2.state, n2 = e2.next_in, z = e2.input, i = n2 + (e2.avail_in - 5), s = e2.next_out, C = e2.output, a = s - (t2 - e2.avail_out), o = s + (e2.avail_out - 257), h = r2.dmax, u = r2.wsize, l = r2.whave, f = r2.wnext, c = r2.window, d = r2.hold, p = r2.bits, m = r2.lencode, _ = r2.distcode, g = (1 << r2.lenbits) - 1, b = (1 << r2.distbits) - 1;
          e: do {
            p < 15 && (d += z[n2++] << p, p += 8, d += z[n2++] << p, p += 8), v = m[d & g];
            t: for (; ; ) {
              if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;
              else {
                if (!(16 & y)) {
                  if (0 == (64 & y)) {
                    v = m[(65535 & v) + (d & (1 << y) - 1)];
                    continue t;
                  }
                  if (32 & y) {
                    r2.mode = 12;
                    break e;
                  }
                  e2.msg = "invalid literal/length code", r2.mode = 30;
                  break e;
                }
                w = 65535 & v, (y &= 15) && (p < y && (d += z[n2++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z[n2++] << p, p += 8, d += z[n2++] << p, p += 8), v = _[d & b];
                r: for (; ; ) {
                  if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                    if (0 == (64 & y)) {
                      v = _[(65535 & v) + (d & (1 << y) - 1)];
                      continue r;
                    }
                    e2.msg = "invalid distance code", r2.mode = 30;
                    break e;
                  }
                  if (k = 65535 & v, p < (y &= 15) && (d += z[n2++] << p, (p += 8) < y && (d += z[n2++] << p, p += 8)), h < (k += d & (1 << y) - 1)) {
                    e2.msg = "invalid distance too far back", r2.mode = 30;
                    break e;
                  }
                  if (d >>>= y, p -= y, (y = s - a) < k) {
                    if (l < (y = k - y) && r2.sane) {
                      e2.msg = "invalid distance too far back", r2.mode = 30;
                      break e;
                    }
                    if (S = c, (x = 0) === f) {
                      if (x += u - y, y < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        x = s - k, S = C;
                      }
                    } else if (f < y) {
                      if (x += u + f - y, (y -= f) < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        if (x = 0, f < w) {
                          for (w -= y = f; C[s++] = c[x++], --y; ) ;
                          x = s - k, S = C;
                        }
                      }
                    } else if (x += f - y, y < w) {
                      for (w -= y; C[s++] = c[x++], --y; ) ;
                      x = s - k, S = C;
                    }
                    for (; 2 < w; ) C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
                    w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                  } else {
                    for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3); ) ;
                    w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (n2 < i && s < o);
          n2 -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e2.next_in = n2, e2.next_out = s, e2.avail_in = n2 < i ? i - n2 + 5 : 5 - (n2 - i), e2.avail_out = s < o ? o - s + 257 : 257 - (s - o), r2.hold = d, r2.bits = p;
        };
      }, {}], 49: [function(e, t, r) {
        "use strict";
        var I = e("../utils/common"), O = e("./adler32"), B = e("./crc32"), R = e("./inffast"), T = e("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, n2 = 852, i = 592;
        function L(e2) {
          return (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((65280 & e2) << 8) + ((255 & e2) << 24);
        }
        function s() {
          this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function a(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state, e2.total_in = e2.total_out = t2.total = 0, e2.msg = "", t2.wrap && (e2.adler = 1 & t2.wrap), t2.mode = P, t2.last = 0, t2.havedict = 0, t2.dmax = 32768, t2.head = null, t2.hold = 0, t2.bits = 0, t2.lencode = t2.lendyn = new I.Buf32(n2), t2.distcode = t2.distdyn = new I.Buf32(i), t2.sane = 1, t2.back = -1, N) : U;
        }
        function o(e2) {
          var t2;
          return e2 && e2.state ? ((t2 = e2.state).wsize = 0, t2.whave = 0, t2.wnext = 0, a(e2)) : U;
        }
        function h(e2, t2) {
          var r2, n3;
          return e2 && e2.state ? (n3 = e2.state, t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = 1 + (t2 >> 4), t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || 15 < t2) ? U : (null !== n3.window && n3.wbits !== t2 && (n3.window = null), n3.wrap = r2, n3.wbits = t2, o(e2))) : U;
        }
        function u(e2, t2) {
          var r2, n3;
          return e2 ? (n3 = new s(), (e2.state = n3).window = null, (r2 = h(e2, t2)) !== N && (e2.state = null), r2) : U;
        }
        var l, f, c = true;
        function j(e2) {
          if (c) {
            var t2;
            for (l = new I.Buf32(512), f = new I.Buf32(32), t2 = 0; t2 < 144; ) e2.lens[t2++] = 8;
            for (; t2 < 256; ) e2.lens[t2++] = 9;
            for (; t2 < 280; ) e2.lens[t2++] = 7;
            for (; t2 < 288; ) e2.lens[t2++] = 8;
            for (T(D, e2.lens, 0, 288, l, 0, e2.work, { bits: 9 }), t2 = 0; t2 < 32; ) e2.lens[t2++] = 5;
            T(F, e2.lens, 0, 32, f, 0, e2.work, { bits: 5 }), c = false;
          }
          e2.lencode = l, e2.lenbits = 9, e2.distcode = f, e2.distbits = 5;
        }
        function Z(e2, t2, r2, n3) {
          var i2, s2 = e2.state;
          return null === s2.window && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new I.Buf8(s2.wsize)), n3 >= s2.wsize ? (I.arraySet(s2.window, t2, r2 - s2.wsize, s2.wsize, 0), s2.wnext = 0, s2.whave = s2.wsize) : (n3 < (i2 = s2.wsize - s2.wnext) && (i2 = n3), I.arraySet(s2.window, t2, r2 - n3, i2, s2.wnext), (n3 -= i2) ? (I.arraySet(s2.window, t2, r2 - n3, n3, 0), s2.wnext = n3, s2.whave = s2.wsize) : (s2.wnext += i2, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += i2))), 0;
        }
        r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(e2) {
          return u(e2, 15);
        }, r.inflateInit2 = u, r.inflate = function(e2, t2) {
          var r2, n3, i2, s2, a2, o2, h2, u2, l2, f2, c2, d, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!e2 || !e2.state || !e2.output || !e2.input && 0 !== e2.avail_in) return U;
          12 === (r2 = e2.state).mode && (r2.mode = 13), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n3 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, f2 = o2, c2 = h2, x = N;
          e: for (; ; ) switch (r2.mode) {
            case P:
              if (0 === r2.wrap) {
                r2.mode = 13;
                break;
              }
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n3[s2++] << l2, l2 += 8;
              }
              if (2 & r2.wrap && 35615 === u2) {
                E[r2.check = 0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0), l2 = u2 = 0, r2.mode = 2;
                break;
              }
              if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & u2) << 8) + (u2 >> 8)) % 31) {
                e2.msg = "incorrect header check", r2.mode = 30;
                break;
              }
              if (8 != (15 & u2)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (l2 -= 4, k = 8 + (15 & (u2 >>>= 4)), 0 === r2.wbits) r2.wbits = k;
              else if (k > r2.wbits) {
                e2.msg = "invalid window size", r2.mode = 30;
                break;
              }
              r2.dmax = 1 << k, e2.adler = r2.check = 1, r2.mode = 512 & u2 ? 10 : 12, l2 = u2 = 0;
              break;
            case 2:
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n3[s2++] << l2, l2 += 8;
              }
              if (r2.flags = u2, 8 != (255 & r2.flags)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (57344 & r2.flags) {
                e2.msg = "unknown header flags set", r2.mode = 30;
                break;
              }
              r2.head && (r2.head.text = u2 >> 8 & 1), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 3;
            case 3:
              for (; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n3[s2++] << l2, l2 += 8;
              }
              r2.head && (r2.head.time = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, E[2] = u2 >>> 16 & 255, E[3] = u2 >>> 24 & 255, r2.check = B(r2.check, E, 4, 0)), l2 = u2 = 0, r2.mode = 4;
            case 4:
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n3[s2++] << l2, l2 += 8;
              }
              r2.head && (r2.head.xflags = 255 & u2, r2.head.os = u2 >> 8), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 5;
            case 5:
              if (1024 & r2.flags) {
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n3[s2++] << l2, l2 += 8;
                }
                r2.length = u2, r2.head && (r2.head.extra_len = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0;
              } else r2.head && (r2.head.extra = null);
              r2.mode = 6;
            case 6:
              if (1024 & r2.flags && (o2 < (d = r2.length) && (d = o2), d && (r2.head && (k = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), I.arraySet(r2.head.extra, n3, s2, d, k)), 512 & r2.flags && (r2.check = B(r2.check, n3, d, s2)), o2 -= d, s2 += d, r2.length -= d), r2.length)) break e;
              r2.length = 0, r2.mode = 7;
            case 7:
              if (2048 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k = n3[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.name += String.fromCharCode(k)), k && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B(r2.check, n3, d, s2)), o2 -= d, s2 += d, k) break e;
              } else r2.head && (r2.head.name = null);
              r2.length = 0, r2.mode = 8;
            case 8:
              if (4096 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k = n3[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.comment += String.fromCharCode(k)), k && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B(r2.check, n3, d, s2)), o2 -= d, s2 += d, k) break e;
              } else r2.head && (r2.head.comment = null);
              r2.mode = 9;
            case 9:
              if (512 & r2.flags) {
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n3[s2++] << l2, l2 += 8;
                }
                if (u2 !== (65535 & r2.check)) {
                  e2.msg = "header crc mismatch", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), e2.adler = r2.check = 0, r2.mode = 12;
              break;
            case 10:
              for (; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n3[s2++] << l2, l2 += 8;
              }
              e2.adler = r2.check = L(u2), l2 = u2 = 0, r2.mode = 11;
            case 11:
              if (0 === r2.havedict) return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, 2;
              e2.adler = r2.check = 1, r2.mode = 12;
            case 12:
              if (5 === t2 || 6 === t2) break e;
            case 13:
              if (r2.last) {
                u2 >>>= 7 & l2, l2 -= 7 & l2, r2.mode = 27;
                break;
              }
              for (; l2 < 3; ) {
                if (0 === o2) break e;
                o2--, u2 += n3[s2++] << l2, l2 += 8;
              }
              switch (r2.last = 1 & u2, l2 -= 1, 3 & (u2 >>>= 1)) {
                case 0:
                  r2.mode = 14;
                  break;
                case 1:
                  if (j(r2), r2.mode = 20, 6 !== t2) break;
                  u2 >>>= 2, l2 -= 2;
                  break e;
                case 2:
                  r2.mode = 17;
                  break;
                case 3:
                  e2.msg = "invalid block type", r2.mode = 30;
              }
              u2 >>>= 2, l2 -= 2;
              break;
            case 14:
              for (u2 >>>= 7 & l2, l2 -= 7 & l2; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n3[s2++] << l2, l2 += 8;
              }
              if ((65535 & u2) != (u2 >>> 16 ^ 65535)) {
                e2.msg = "invalid stored block lengths", r2.mode = 30;
                break;
              }
              if (r2.length = 65535 & u2, l2 = u2 = 0, r2.mode = 15, 6 === t2) break e;
            case 15:
              r2.mode = 16;
            case 16:
              if (d = r2.length) {
                if (o2 < d && (d = o2), h2 < d && (d = h2), 0 === d) break e;
                I.arraySet(i2, n3, s2, d, a2), o2 -= d, s2 += d, h2 -= d, a2 += d, r2.length -= d;
                break;
              }
              r2.mode = 12;
              break;
            case 17:
              for (; l2 < 14; ) {
                if (0 === o2) break e;
                o2--, u2 += n3[s2++] << l2, l2 += 8;
              }
              if (r2.nlen = 257 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ndist = 1 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ncode = 4 + (15 & u2), u2 >>>= 4, l2 -= 4, 286 < r2.nlen || 30 < r2.ndist) {
                e2.msg = "too many length or distance symbols", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 18;
            case 18:
              for (; r2.have < r2.ncode; ) {
                for (; l2 < 3; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n3[s2++] << l2, l2 += 8;
                }
                r2.lens[A[r2.have++]] = 7 & u2, u2 >>>= 3, l2 -= 3;
              }
              for (; r2.have < 19; ) r2.lens[A[r2.have++]] = 0;
              if (r2.lencode = r2.lendyn, r2.lenbits = 7, S = { bits: r2.lenbits }, x = T(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                e2.msg = "invalid code lengths set", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 19;
            case 19:
              for (; r2.have < r2.nlen + r2.ndist; ) {
                for (; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n3[s2++] << l2, l2 += 8;
                }
                if (b < 16) u2 >>>= _, l2 -= _, r2.lens[r2.have++] = b;
                else {
                  if (16 === b) {
                    for (z = _ + 2; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n3[s2++] << l2, l2 += 8;
                    }
                    if (u2 >>>= _, l2 -= _, 0 === r2.have) {
                      e2.msg = "invalid bit length repeat", r2.mode = 30;
                      break;
                    }
                    k = r2.lens[r2.have - 1], d = 3 + (3 & u2), u2 >>>= 2, l2 -= 2;
                  } else if (17 === b) {
                    for (z = _ + 3; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n3[s2++] << l2, l2 += 8;
                    }
                    l2 -= _, k = 0, d = 3 + (7 & (u2 >>>= _)), u2 >>>= 3, l2 -= 3;
                  } else {
                    for (z = _ + 7; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n3[s2++] << l2, l2 += 8;
                    }
                    l2 -= _, k = 0, d = 11 + (127 & (u2 >>>= _)), u2 >>>= 7, l2 -= 7;
                  }
                  if (r2.have + d > r2.nlen + r2.ndist) {
                    e2.msg = "invalid bit length repeat", r2.mode = 30;
                    break;
                  }
                  for (; d--; ) r2.lens[r2.have++] = k;
                }
              }
              if (30 === r2.mode) break;
              if (0 === r2.lens[256]) {
                e2.msg = "invalid code -- missing end-of-block", r2.mode = 30;
                break;
              }
              if (r2.lenbits = 9, S = { bits: r2.lenbits }, x = T(D, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                e2.msg = "invalid literal/lengths set", r2.mode = 30;
                break;
              }
              if (r2.distbits = 6, r2.distcode = r2.distdyn, S = { bits: r2.distbits }, x = T(F, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, S), r2.distbits = S.bits, x) {
                e2.msg = "invalid distances set", r2.mode = 30;
                break;
              }
              if (r2.mode = 20, 6 === t2) break e;
            case 20:
              r2.mode = 21;
            case 21:
              if (6 <= o2 && 258 <= h2) {
                e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, R(e2, c2), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n3 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, 12 === r2.mode && (r2.back = -1);
                break;
              }
              for (r2.back = 0; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                if (0 === o2) break e;
                o2--, u2 += n3[s2++] << l2, l2 += 8;
              }
              if (g && 0 == (240 & g)) {
                for (v = _, y = g, w = b; g = (C = r2.lencode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n3[s2++] << l2, l2 += 8;
                }
                u2 >>>= v, l2 -= v, r2.back += v;
              }
              if (u2 >>>= _, l2 -= _, r2.back += _, r2.length = b, 0 === g) {
                r2.mode = 26;
                break;
              }
              if (32 & g) {
                r2.back = -1, r2.mode = 12;
                break;
              }
              if (64 & g) {
                e2.msg = "invalid literal/length code", r2.mode = 30;
                break;
              }
              r2.extra = 15 & g, r2.mode = 22;
            case 22:
              if (r2.extra) {
                for (z = r2.extra; l2 < z; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n3[s2++] << l2, l2 += 8;
                }
                r2.length += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
              }
              r2.was = r2.length, r2.mode = 23;
            case 23:
              for (; g = (C = r2.distcode[u2 & (1 << r2.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                if (0 === o2) break e;
                o2--, u2 += n3[s2++] << l2, l2 += 8;
              }
              if (0 == (240 & g)) {
                for (v = _, y = g, w = b; g = (C = r2.distcode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n3[s2++] << l2, l2 += 8;
                }
                u2 >>>= v, l2 -= v, r2.back += v;
              }
              if (u2 >>>= _, l2 -= _, r2.back += _, 64 & g) {
                e2.msg = "invalid distance code", r2.mode = 30;
                break;
              }
              r2.offset = b, r2.extra = 15 & g, r2.mode = 24;
            case 24:
              if (r2.extra) {
                for (z = r2.extra; l2 < z; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n3[s2++] << l2, l2 += 8;
                }
                r2.offset += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
              }
              if (r2.offset > r2.dmax) {
                e2.msg = "invalid distance too far back", r2.mode = 30;
                break;
              }
              r2.mode = 25;
            case 25:
              if (0 === h2) break e;
              if (d = c2 - h2, r2.offset > d) {
                if ((d = r2.offset - d) > r2.whave && r2.sane) {
                  e2.msg = "invalid distance too far back", r2.mode = 30;
                  break;
                }
                p = d > r2.wnext ? (d -= r2.wnext, r2.wsize - d) : r2.wnext - d, d > r2.length && (d = r2.length), m = r2.window;
              } else m = i2, p = a2 - r2.offset, d = r2.length;
              for (h2 < d && (d = h2), h2 -= d, r2.length -= d; i2[a2++] = m[p++], --d; ) ;
              0 === r2.length && (r2.mode = 21);
              break;
            case 26:
              if (0 === h2) break e;
              i2[a2++] = r2.length, h2--, r2.mode = 21;
              break;
            case 27:
              if (r2.wrap) {
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 |= n3[s2++] << l2, l2 += 8;
                }
                if (c2 -= h2, e2.total_out += c2, r2.total += c2, c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, a2 - c2) : O(r2.check, i2, c2, a2 - c2)), c2 = h2, (r2.flags ? u2 : L(u2)) !== r2.check) {
                  e2.msg = "incorrect data check", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.mode = 28;
            case 28:
              if (r2.wrap && r2.flags) {
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n3[s2++] << l2, l2 += 8;
                }
                if (u2 !== (4294967295 & r2.total)) {
                  e2.msg = "incorrect length check", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.mode = 29;
            case 29:
              x = 1;
              break e;
            case 30:
              x = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return U;
          }
          return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, (r2.wsize || c2 !== e2.avail_out && r2.mode < 30 && (r2.mode < 27 || 4 !== t2)) && Z(e2, e2.output, e2.next_out, c2 - e2.avail_out) ? (r2.mode = 31, -4) : (f2 -= e2.avail_in, c2 -= e2.avail_out, e2.total_in += f2, e2.total_out += c2, r2.total += c2, r2.wrap && c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, e2.next_out - c2) : O(r2.check, i2, c2, e2.next_out - c2)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (12 === r2.mode ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 == f2 && 0 === c2 || 4 === t2) && x === N && (x = -5), x);
        }, r.inflateEnd = function(e2) {
          if (!e2 || !e2.state) return U;
          var t2 = e2.state;
          return t2.window && (t2.window = null), e2.state = null, N;
        }, r.inflateGetHeader = function(e2, t2) {
          var r2;
          return e2 && e2.state ? 0 == (2 & (r2 = e2.state).wrap) ? U : ((r2.head = t2).done = false, N) : U;
        }, r.inflateSetDictionary = function(e2, t2) {
          var r2, n3 = t2.length;
          return e2 && e2.state ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode ? U : 11 === r2.mode && O(1, t2, n3, 0) !== r2.check ? -3 : Z(e2, t2, n3, n3) ? (r2.mode = 31, -4) : (r2.havedict = 1, N) : U;
        }, r.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, t, r) {
        "use strict";
        var D = e("../utils/common"), F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        t.exports = function(e2, t2, r2, n2, i, s, a, o) {
          var h, u, l, f, c, d, p, m, _, g = o.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
          for (b = 0; b <= 15; b++) O[b] = 0;
          for (v = 0; v < n2; v++) O[t2[r2 + v]]++;
          for (k = g, w = 15; 1 <= w && 0 === O[w]; w--) ;
          if (w < k && (k = w), 0 === w) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
          for (y = 1; y < w && 0 === O[y]; y++) ;
          for (k < y && (k = y), b = z = 1; b <= 15; b++) if (z <<= 1, (z -= O[b]) < 0) return -1;
          if (0 < z && (0 === e2 || 1 !== w)) return -1;
          for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O[b];
          for (v = 0; v < n2; v++) 0 !== t2[r2 + v] && (a[B[t2[r2 + v]]++] = v);
          if (d = 0 === e2 ? (A = R = a, 19) : 1 === e2 ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, c = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
          for (; ; ) {
            for (p = b - S, _ = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; i[c + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u; ) ;
            for (h = 1 << b - 1; E & h; ) h >>= 1;
            if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
              if (b === w) break;
              b = t2[r2 + a[v]];
            }
            if (k < b && (E & f) !== l) {
              for (0 === S && (S = k), c += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0); ) x++, z <<= 1;
              if (C += 1 << x, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
              i[l = E & f] = k << 24 | x << 16 | c - s | 0;
            }
          }
          return 0 !== E && (i[c + E] = b - S << 24 | 64 << 16 | 0), o.bits = k, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(e, t, r) {
        "use strict";
        t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(e, t, r) {
        "use strict";
        var i = e("../utils/common"), o = 0, h = 1;
        function n2(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, c = 19, _ = 2 * l + 1, g = 15, d = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (l + 2));
        n2(z);
        var C = new Array(2 * f);
        n2(C);
        var E = new Array(512);
        n2(E);
        var A = new Array(256);
        n2(A);
        var I = new Array(a);
        n2(I);
        var O, B, R, T = new Array(f);
        function D(e2, t2, r2, n3, i2) {
          this.static_tree = e2, this.extra_bits = t2, this.extra_base = r2, this.elems = n3, this.max_length = i2, this.has_stree = e2 && e2.length;
        }
        function F(e2, t2) {
          this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
        }
        function N(e2) {
          return e2 < 256 ? E[e2] : E[256 + (e2 >>> 7)];
        }
        function U(e2, t2) {
          e2.pending_buf[e2.pending++] = 255 & t2, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
        }
        function P(e2, t2, r2) {
          e2.bi_valid > d - r2 ? (e2.bi_buf |= t2 << e2.bi_valid & 65535, U(e2, e2.bi_buf), e2.bi_buf = t2 >> d - e2.bi_valid, e2.bi_valid += r2 - d) : (e2.bi_buf |= t2 << e2.bi_valid & 65535, e2.bi_valid += r2);
        }
        function L(e2, t2, r2) {
          P(e2, r2[2 * t2], r2[2 * t2 + 1]);
        }
        function j(e2, t2) {
          for (var r2 = 0; r2 |= 1 & e2, e2 >>>= 1, r2 <<= 1, 0 < --t2; ) ;
          return r2 >>> 1;
        }
        function Z(e2, t2, r2) {
          var n3, i2, s2 = new Array(g + 1), a2 = 0;
          for (n3 = 1; n3 <= g; n3++) s2[n3] = a2 = a2 + r2[n3 - 1] << 1;
          for (i2 = 0; i2 <= t2; i2++) {
            var o2 = e2[2 * i2 + 1];
            0 !== o2 && (e2[2 * i2] = j(s2[o2]++, o2));
          }
        }
        function W(e2) {
          var t2;
          for (t2 = 0; t2 < l; t2++) e2.dyn_ltree[2 * t2] = 0;
          for (t2 = 0; t2 < f; t2++) e2.dyn_dtree[2 * t2] = 0;
          for (t2 = 0; t2 < c; t2++) e2.bl_tree[2 * t2] = 0;
          e2.dyn_ltree[2 * m] = 1, e2.opt_len = e2.static_len = 0, e2.last_lit = e2.matches = 0;
        }
        function M(e2) {
          8 < e2.bi_valid ? U(e2, e2.bi_buf) : 0 < e2.bi_valid && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
        }
        function H(e2, t2, r2, n3) {
          var i2 = 2 * t2, s2 = 2 * r2;
          return e2[i2] < e2[s2] || e2[i2] === e2[s2] && n3[t2] <= n3[r2];
        }
        function G(e2, t2, r2) {
          for (var n3 = e2.heap[r2], i2 = r2 << 1; i2 <= e2.heap_len && (i2 < e2.heap_len && H(t2, e2.heap[i2 + 1], e2.heap[i2], e2.depth) && i2++, !H(t2, n3, e2.heap[i2], e2.depth)); ) e2.heap[r2] = e2.heap[i2], r2 = i2, i2 <<= 1;
          e2.heap[r2] = n3;
        }
        function K(e2, t2, r2) {
          var n3, i2, s2, a2, o2 = 0;
          if (0 !== e2.last_lit) for (; n3 = e2.pending_buf[e2.d_buf + 2 * o2] << 8 | e2.pending_buf[e2.d_buf + 2 * o2 + 1], i2 = e2.pending_buf[e2.l_buf + o2], o2++, 0 === n3 ? L(e2, i2, t2) : (L(e2, (s2 = A[i2]) + u + 1, t2), 0 !== (a2 = w[s2]) && P(e2, i2 -= I[s2], a2), L(e2, s2 = N(--n3), r2), 0 !== (a2 = k[s2]) && P(e2, n3 -= T[s2], a2)), o2 < e2.last_lit; ) ;
          L(e2, m, t2);
        }
        function Y(e2, t2) {
          var r2, n3, i2, s2 = t2.dyn_tree, a2 = t2.stat_desc.static_tree, o2 = t2.stat_desc.has_stree, h2 = t2.stat_desc.elems, u2 = -1;
          for (e2.heap_len = 0, e2.heap_max = _, r2 = 0; r2 < h2; r2++) 0 !== s2[2 * r2] ? (e2.heap[++e2.heap_len] = u2 = r2, e2.depth[r2] = 0) : s2[2 * r2 + 1] = 0;
          for (; e2.heap_len < 2; ) s2[2 * (i2 = e2.heap[++e2.heap_len] = u2 < 2 ? ++u2 : 0)] = 1, e2.depth[i2] = 0, e2.opt_len--, o2 && (e2.static_len -= a2[2 * i2 + 1]);
          for (t2.max_code = u2, r2 = e2.heap_len >> 1; 1 <= r2; r2--) G(e2, s2, r2);
          for (i2 = h2; r2 = e2.heap[1], e2.heap[1] = e2.heap[e2.heap_len--], G(e2, s2, 1), n3 = e2.heap[1], e2.heap[--e2.heap_max] = r2, e2.heap[--e2.heap_max] = n3, s2[2 * i2] = s2[2 * r2] + s2[2 * n3], e2.depth[i2] = (e2.depth[r2] >= e2.depth[n3] ? e2.depth[r2] : e2.depth[n3]) + 1, s2[2 * r2 + 1] = s2[2 * n3 + 1] = i2, e2.heap[1] = i2++, G(e2, s2, 1), 2 <= e2.heap_len; ) ;
          e2.heap[--e2.heap_max] = e2.heap[1], (function(e3, t3) {
            var r3, n4, i3, s3, a3, o3, h3 = t3.dyn_tree, u3 = t3.max_code, l2 = t3.stat_desc.static_tree, f2 = t3.stat_desc.has_stree, c2 = t3.stat_desc.extra_bits, d2 = t3.stat_desc.extra_base, p2 = t3.stat_desc.max_length, m2 = 0;
            for (s3 = 0; s3 <= g; s3++) e3.bl_count[s3] = 0;
            for (h3[2 * e3.heap[e3.heap_max] + 1] = 0, r3 = e3.heap_max + 1; r3 < _; r3++) p2 < (s3 = h3[2 * h3[2 * (n4 = e3.heap[r3]) + 1] + 1] + 1) && (s3 = p2, m2++), h3[2 * n4 + 1] = s3, u3 < n4 || (e3.bl_count[s3]++, a3 = 0, d2 <= n4 && (a3 = c2[n4 - d2]), o3 = h3[2 * n4], e3.opt_len += o3 * (s3 + a3), f2 && (e3.static_len += o3 * (l2[2 * n4 + 1] + a3)));
            if (0 !== m2) {
              do {
                for (s3 = p2 - 1; 0 === e3.bl_count[s3]; ) s3--;
                e3.bl_count[s3]--, e3.bl_count[s3 + 1] += 2, e3.bl_count[p2]--, m2 -= 2;
              } while (0 < m2);
              for (s3 = p2; 0 !== s3; s3--) for (n4 = e3.bl_count[s3]; 0 !== n4; ) u3 < (i3 = e3.heap[--r3]) || (h3[2 * i3 + 1] !== s3 && (e3.opt_len += (s3 - h3[2 * i3 + 1]) * h3[2 * i3], h3[2 * i3 + 1] = s3), n4--);
            }
          })(e2, t2), Z(s2, u2, e2.bl_count);
        }
        function X(e2, t2, r2) {
          var n3, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), t2[2 * (r2 + 1) + 1] = 65535, n3 = 0; n3 <= r2; n3++) i2 = a2, a2 = t2[2 * (n3 + 1) + 1], ++o2 < h2 && i2 === a2 || (o2 < u2 ? e2.bl_tree[2 * i2] += o2 : 0 !== i2 ? (i2 !== s2 && e2.bl_tree[2 * i2]++, e2.bl_tree[2 * b]++) : o2 <= 10 ? e2.bl_tree[2 * v]++ : e2.bl_tree[2 * y]++, s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4));
        }
        function V(e2, t2, r2) {
          var n3, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), n3 = 0; n3 <= r2; n3++) if (i2 = a2, a2 = t2[2 * (n3 + 1) + 1], !(++o2 < h2 && i2 === a2)) {
            if (o2 < u2) for (; L(e2, i2, e2.bl_tree), 0 != --o2; ) ;
            else 0 !== i2 ? (i2 !== s2 && (L(e2, i2, e2.bl_tree), o2--), L(e2, b, e2.bl_tree), P(e2, o2 - 3, 2)) : o2 <= 10 ? (L(e2, v, e2.bl_tree), P(e2, o2 - 3, 3)) : (L(e2, y, e2.bl_tree), P(e2, o2 - 11, 7));
            s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4);
          }
        }
        n2(T);
        var q = false;
        function J(e2, t2, r2, n3) {
          P(e2, (s << 1) + (n3 ? 1 : 0), 3), (function(e3, t3, r3, n4) {
            M(e3), n4 && (U(e3, r3), U(e3, ~r3)), i.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending), e3.pending += r3;
          })(e2, t2, r2, true);
        }
        r._tr_init = function(e2) {
          q || ((function() {
            var e3, t2, r2, n3, i2, s2 = new Array(g + 1);
            for (n3 = r2 = 0; n3 < a - 1; n3++) for (I[n3] = r2, e3 = 0; e3 < 1 << w[n3]; e3++) A[r2++] = n3;
            for (A[r2 - 1] = n3, n3 = i2 = 0; n3 < 16; n3++) for (T[n3] = i2, e3 = 0; e3 < 1 << k[n3]; e3++) E[i2++] = n3;
            for (i2 >>= 7; n3 < f; n3++) for (T[n3] = i2 << 7, e3 = 0; e3 < 1 << k[n3] - 7; e3++) E[256 + i2++] = n3;
            for (t2 = 0; t2 <= g; t2++) s2[t2] = 0;
            for (e3 = 0; e3 <= 143; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (; e3 <= 255; ) z[2 * e3 + 1] = 9, e3++, s2[9]++;
            for (; e3 <= 279; ) z[2 * e3 + 1] = 7, e3++, s2[7]++;
            for (; e3 <= 287; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (Z(z, l + 1, s2), e3 = 0; e3 < f; e3++) C[2 * e3 + 1] = 5, C[2 * e3] = j(e3, 5);
            O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, c, p);
          })(), q = true), e2.l_desc = new F(e2.dyn_ltree, O), e2.d_desc = new F(e2.dyn_dtree, B), e2.bl_desc = new F(e2.bl_tree, R), e2.bi_buf = 0, e2.bi_valid = 0, W(e2);
        }, r._tr_stored_block = J, r._tr_flush_block = function(e2, t2, r2, n3) {
          var i2, s2, a2 = 0;
          0 < e2.level ? (2 === e2.strm.data_type && (e2.strm.data_type = (function(e3) {
            var t3, r3 = 4093624447;
            for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1) if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3]) return o;
            if (0 !== e3.dyn_ltree[18] || 0 !== e3.dyn_ltree[20] || 0 !== e3.dyn_ltree[26]) return h;
            for (t3 = 32; t3 < u; t3++) if (0 !== e3.dyn_ltree[2 * t3]) return h;
            return o;
          })(e2)), Y(e2, e2.l_desc), Y(e2, e2.d_desc), a2 = (function(e3) {
            var t3;
            for (X(e3, e3.dyn_ltree, e3.l_desc.max_code), X(e3, e3.dyn_dtree, e3.d_desc.max_code), Y(e3, e3.bl_desc), t3 = c - 1; 3 <= t3 && 0 === e3.bl_tree[2 * S[t3] + 1]; t3--) ;
            return e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4, t3;
          })(e2), i2 = e2.opt_len + 3 + 7 >>> 3, (s2 = e2.static_len + 3 + 7 >>> 3) <= i2 && (i2 = s2)) : i2 = s2 = r2 + 5, r2 + 4 <= i2 && -1 !== t2 ? J(e2, t2, r2, n3) : 4 === e2.strategy || s2 === i2 ? (P(e2, 2 + (n3 ? 1 : 0), 3), K(e2, z, C)) : (P(e2, 4 + (n3 ? 1 : 0), 3), (function(e3, t3, r3, n4) {
            var i3;
            for (P(e3, t3 - 257, 5), P(e3, r3 - 1, 5), P(e3, n4 - 4, 4), i3 = 0; i3 < n4; i3++) P(e3, e3.bl_tree[2 * S[i3] + 1], 3);
            V(e3, e3.dyn_ltree, t3 - 1), V(e3, e3.dyn_dtree, r3 - 1);
          })(e2, e2.l_desc.max_code + 1, e2.d_desc.max_code + 1, a2 + 1), K(e2, e2.dyn_ltree, e2.dyn_dtree)), W(e2), n3 && M(e2);
        }, r._tr_tally = function(e2, t2, r2) {
          return e2.pending_buf[e2.d_buf + 2 * e2.last_lit] = t2 >>> 8 & 255, e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2, e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2, e2.last_lit++, 0 === t2 ? e2.dyn_ltree[2 * r2]++ : (e2.matches++, t2--, e2.dyn_ltree[2 * (A[r2] + u + 1)]++, e2.dyn_dtree[2 * N(t2)]++), e2.last_lit === e2.lit_bufsize - 1;
        }, r._tr_align = function(e2) {
          P(e2, 2, 3), L(e2, m, z), (function(e3) {
            16 === e3.bi_valid ? (U(e3, e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0) : 8 <= e3.bi_valid && (e3.pending_buf[e3.pending++] = 255 & e3.bi_buf, e3.bi_buf >>= 8, e3.bi_valid -= 8);
          })(e2);
        };
      }, { "../utils/common": 41 }], 53: [function(e, t, r) {
        "use strict";
        t.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(e, t, r) {
        (function(e2) {
          !(function(r2, n2) {
            "use strict";
            if (!r2.setImmediate) {
              var i, s, t2, a, o = 1, h = {}, u = false, l = r2.document, e3 = Object.getPrototypeOf && Object.getPrototypeOf(r2);
              e3 = e3 && e3.setTimeout ? e3 : r2, i = "[object process]" === {}.toString.call(r2.process) ? function(e4) {
                process.nextTick(function() {
                  c(e4);
                });
              } : (function() {
                if (r2.postMessage && !r2.importScripts) {
                  var e4 = true, t3 = r2.onmessage;
                  return r2.onmessage = function() {
                    e4 = false;
                  }, r2.postMessage("", "*"), r2.onmessage = t3, e4;
                }
              })() ? (a = "setImmediate$" + Math.random() + "$", r2.addEventListener ? r2.addEventListener("message", d, false) : r2.attachEvent("onmessage", d), function(e4) {
                r2.postMessage(a + e4, "*");
              }) : r2.MessageChannel ? ((t2 = new MessageChannel()).port1.onmessage = function(e4) {
                c(e4.data);
              }, function(e4) {
                t2.port2.postMessage(e4);
              }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function(e4) {
                var t3 = l.createElement("script");
                t3.onreadystatechange = function() {
                  c(e4), t3.onreadystatechange = null, s.removeChild(t3), t3 = null;
                }, s.appendChild(t3);
              }) : function(e4) {
                setTimeout(c, 0, e4);
              }, e3.setImmediate = function(e4) {
                "function" != typeof e4 && (e4 = new Function("" + e4));
                for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; r3++) t3[r3] = arguments[r3 + 1];
                var n3 = { callback: e4, args: t3 };
                return h[o] = n3, i(o), o++;
              }, e3.clearImmediate = f;
            }
            function f(e4) {
              delete h[e4];
            }
            function c(e4) {
              if (u) setTimeout(c, 0, e4);
              else {
                var t3 = h[e4];
                if (t3) {
                  u = true;
                  try {
                    !(function(e5) {
                      var t4 = e5.callback, r3 = e5.args;
                      switch (r3.length) {
                        case 0:
                          t4();
                          break;
                        case 1:
                          t4(r3[0]);
                          break;
                        case 2:
                          t4(r3[0], r3[1]);
                          break;
                        case 3:
                          t4(r3[0], r3[1], r3[2]);
                          break;
                        default:
                          t4.apply(n2, r3);
                      }
                    })(t3);
                  } finally {
                    f(e4), u = false;
                  }
                }
              }
            }
            function d(e4) {
              e4.source === r2 && "string" == typeof e4.data && 0 === e4.data.indexOf(a) && c(+e4.data.slice(a.length));
            }
          })("undefined" == typeof self ? void 0 === e2 ? this : e2 : self);
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}] }, {}, [10])(10);
    });
  }
});

// ../../repos/e-ink/src/lib/editors/epub.ts
var import_jszip = __toESM(require_jszip_min());

// ../../repos/e-ink/src/lib/editors/html-editor.ts
var BLOCK_TAGS = /* @__PURE__ */ new Set([
  "P",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "LI",
  "BLOCKQUOTE",
  "PRE",
  "TD",
  "TH"
]);
var TEXT_ALIGN_VALUES = /* @__PURE__ */ new Set(["left", "center", "right", "justify", "start", "end"]);
function parseStyleTextAlign(style) {
  const match = style.match(/text-align\s*:\s*([a-z-]+)/i);
  if (!match) return null;
  const value = match[1].toLowerCase();
  return TEXT_ALIGN_VALUES.has(value) ? value : null;
}
function getElementTextAlign(el) {
  return parseStyleTextAlign(el.getAttribute("style") || "");
}
function isAlignmentOnlyDiv(el) {
  if (el.tagName !== "DIV") return false;
  const attrs = [...el.attributes];
  if (attrs.length === 0) return true;
  if (attrs.length !== 1 || attrs[0].name !== "style") return false;
  const style = attrs[0].value.trim();
  if (!style) return true;
  const parts = style.split(";").map((part) => part.trim()).filter(Boolean);
  return parts.every((part) => /^text-align\s*:/i.test(part));
}
function hasBlockChild(el) {
  return [...el.children].some((child) => BLOCK_TAGS.has(child.tagName) || child.tagName === "DIV");
}
function unwrapElement(el) {
  const parent = el.parentNode;
  if (!parent) return;
  while (el.firstChild) {
    parent.insertBefore(el.firstChild, el);
  }
  parent.removeChild(el);
}
function sanitizeEditorHtml(html) {
  const doc = new DOMParser().parseFromString(`<div id="root">${html}</div>`, "text/html");
  const root = doc.getElementById("root");
  if (!root) return html;
  let changed = true;
  while (changed) {
    changed = false;
    const divs = [...root.querySelectorAll("div")];
    for (const div of divs) {
      if (!isAlignmentOnlyDiv(div)) continue;
      const align = getElementTextAlign(div);
      const elementChildren2 = [...div.children];
      if (elementChildren2.length === 0 && !div.textContent?.trim()) {
        div.remove();
        changed = true;
        continue;
      }
      if (elementChildren2.length > 0 && elementChildren2.every((child) => BLOCK_TAGS.has(child.tagName))) {
        elementChildren2.forEach((child) => {
          if (child instanceof HTMLElement && align) {
            child.style.textAlign = align;
          }
        });
        unwrapElement(div);
        changed = true;
        continue;
      }
      if (!hasBlockChild(div)) {
        const p = doc.createElement("p");
        if (align) p.style.textAlign = align;
        while (div.firstChild) {
          p.appendChild(div.firstChild);
        }
        div.replaceWith(p);
        changed = true;
      }
    }
  }
  root.querySelectorAll("div").forEach((div) => {
    if (!div.textContent?.trim() && !div.querySelector("img, hr, br, svg")) {
      div.remove();
    }
  });
  changed = true;
  while (changed) {
    changed = false;
    [...root.querySelectorAll("div")].forEach((div) => {
      if (div.attributes.length > 0) return;
      const meaningfulChildren = [...div.childNodes].filter(
        (node) => node.nodeType !== Node.TEXT_NODE || node.textContent?.trim()
      );
      if (meaningfulChildren.length === 1 && meaningfulChildren[0] instanceof Element && BLOCK_TAGS.has(meaningfulChildren[0].tagName)) {
        unwrapElement(div);
        changed = true;
      }
    });
  }
  return root.innerHTML;
}

// ../../repos/e-ink/src/lib/editors/chapterNumbering.ts
function formatChapterNumber(format, n2, pad) {
  const numStr = pad > 0 ? String(n2).padStart(pad, "0") : String(n2);
  return format.replace(/#/g, numStr);
}

// ../../repos/e-ink/src/lib/readers/readerOrnaments.ts
var ORNAMENT_VIEWBOX = { width: 240, height: 24 };
var AXIS_Y = 12;
var STROKE = 1.25;
var n = (v) => +v.toFixed(2);
var rad = (deg) => deg * Math.PI / 180;
function star(cx, cy, outer, inner) {
  const k = inner * Math.SQRT1_2;
  const points = [
    [cx, cy - outer],
    [cx + k, cy - k],
    [cx + outer, cy],
    [cx + k, cy + k],
    [cx, cy + outer],
    [cx - k, cy + k],
    [cx - outer, cy],
    [cx - k, cy - k]
  ];
  return `M${points.map((p) => `${n(p[0])} ${n(p[1])}`).join("L ")}Z`;
}
function diamond(cx, cy, r) {
  return `M${cx} ${n(cy - r)}L${n(cx + r)} ${cy}L${cx} ${n(cy + r)}L${n(cx - r)} ${cy}Z`;
}
function rule(endX) {
  return `M0 ${AXIS_Y}H${endX}`;
}
function volute(cx, cy, r0, r1, a0, a1, steps = 30) {
  const points = Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps;
    const angle = rad(a0 + (a1 - a0) * t);
    const radius = r0 + (r1 - r0) * t;
    const point = [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
    return point;
  });
  const d = points.map((p, i) => `${i ? "L" : "M"}${n(p[0])} ${n(p[1])}`).join(" ");
  const direction = Math.sign(a1 - a0);
  const tangent = [
    -direction * Math.sin(rad(a0)),
    direction * Math.cos(rad(a0))
  ];
  return [d, points[0], tangent];
}
function stem(startX, end, tangent, run = 4, lead = 4) {
  const c1 = [startX - run, AXIS_Y];
  const c2 = [end[0] - lead * tangent[0], end[1] - lead * tangent[1]];
  return `M${n(startX)} ${AXIS_Y}C${n(c1[0])} ${n(c1[1])} ${n(c2[0])} ${n(c2[1])} ${n(end[0])} ${n(end[1])}`;
}
var [scroll, scrollStart, scrollTangent] = volute(101, AXIS_Y, 8.2, 3, -50, -590);
var flourishTendril = `${stem(115, scrollStart, scrollTangent)} ${scroll}`;
var ORNAMENT_SHAPES = {
  // 细线 + 中央小菱形,两侧各缀一粒圆点
  minimalist: [
    { kind: "stroke", d: rule(104), width: STROKE, mirror: true },
    { kind: "dot", cx: 109.5, cy: AXIS_Y, r: 1.6, mirror: true },
    { kind: "fill", d: diamond(120, AXIS_Y, 4.4) }
  ],
  // 对称卷草:主干自中央菱形两侧扬起,各卷成一个开口卷涡
  "classic-flourish": [
    { kind: "stroke", d: rule(82), width: STROKE, mirror: true },
    { kind: "dot", cx: 87, cy: AXIS_Y, r: 1.7, mirror: true },
    { kind: "stroke", d: flourishTendril, width: STROKE, mirror: true },
    { kind: "fill", d: diamond(120, AXIS_Y, 4) }
  ],
  // 新月 + 四角星 + 一粒碎星
  celestial: [
    { kind: "stroke", d: rule(99.5), width: STROKE, mirror: true },
    { kind: "fill", d: "M115.5 3A9 9 0 1 0 115.5 21A10.5 10.5 0 0 1 115.5 3Z" },
    { kind: "fill", d: star(128, 9, 5.6, 1.8) },
    { kind: "dot", cx: 130, cy: 17.6, r: 1.3 }
  ],
  // 三片叶:中叶直立,两侧叶片向外上方舒展
  nature: [
    { kind: "stroke", d: rule(96), width: STROKE, mirror: true },
    { kind: "fill", d: "M120 18Q115.4 11 120 4Q124.6 11 120 18Z" },
    { kind: "fill", d: "M119 17.2Q108.6 16.6 102.5 5.6Q113 8.4 119 17.2Z", mirror: true }
  ]
};
var ORNAMENT_MIRROR_TRANSFORM = `matrix(-1 0 0 1 ${ORNAMENT_VIEWBOX.width} 0)`;
function expandOrnamentShapes(shapes) {
  return shapes.flatMap((shape) => {
    const own = { shape };
    return shape.mirror ? [own, { shape, transform: ORNAMENT_MIRROR_TRANSFORM }] : [own];
  });
}

// ../../repos/e-ink/src/lib/editors/chapterDecoration.ts
var ORNAMENT_CLASS = "eink-ornament";
var HEADING_SELECTOR = "h1, h2";
var SVG_NS = "http://www.w3.org/2000/svg";
var ORNAMENT_STYLE_ATTR = "display:block;width:14em;max-width:75%;height:auto;margin:0.5em auto;";
function ornamentInlineSvg(style) {
  const body = expandOrnamentShapes(ORNAMENT_SHAPES[style]).map(({ shape, transform }) => {
    const at = transform ? ` transform='${transform}'` : "";
    switch (shape.kind) {
      case "stroke":
        return `<path d='${shape.d}'${at} fill='none' stroke='currentColor' stroke-width='${shape.width}' stroke-linecap='round' stroke-linejoin='round'/>`;
      case "dot":
        return `<circle${at} fill='currentColor' cx='${shape.cx}' cy='${shape.cy}' r='${shape.r}'/>`;
      case "fill":
        return `<path d='${shape.d}'${at} fill='currentColor'/>`;
    }
  }).join("");
  const { width, height } = ORNAMENT_VIEWBOX;
  return `<svg xmlns='${SVG_NS}' viewBox='0 0 ${width} ${height}' class='${ORNAMENT_CLASS}' aria-hidden='true' style='${ORNAMENT_STYLE_ATTR}'>${body}</svg>`;
}
function stripChapterOrnaments(doc) {
  const nodes = Array.from(doc.querySelectorAll(`.${ORNAMENT_CLASS}`));
  for (const node of nodes) {
    node.remove();
  }
  return nodes.length;
}
function decorateChapterDoc(doc, style) {
  const removed = stripChapterOrnaments(doc);
  const heading = doc.querySelector(HEADING_SELECTOR);
  if (!heading || !heading.parentNode) {
    return { decorated: false, changed: removed > 0 };
  }
  const markup = ornamentInlineSvg(style);
  const parser = new DOMParser();
  const buildOrnament = () => {
    const svgDoc = parser.parseFromString(markup, "image/svg+xml");
    return doc.importNode(svgDoc.documentElement, true);
  };
  const parent = heading.parentNode;
  parent.insertBefore(buildOrnament(), heading);
  parent.insertBefore(buildOrnament(), heading.nextSibling);
  return { decorated: true, changed: true };
}

// ../../repos/e-ink/src/lib/editors/footnotes.ts
var EPUB_NS = "http://www.idpf.org/2007/ops";
var XMLNS_NS = "http://www.w3.org/2000/xmlns/";
function hasEpubTypeAttr(doc) {
  const root = doc.body ?? doc.documentElement;
  if (!root) return false;
  for (const el of [root, ...root.querySelectorAll("*")]) {
    for (const at of el.attributes) {
      if (at.name === "epub:type") return true;
      if (at.namespaceURI === EPUB_NS && at.localName === "type") return true;
    }
  }
  return false;
}
function ensureEpubNamespace(doc) {
  const root = doc.documentElement;
  if (root.hasAttributeNS(XMLNS_NS, "epub")) return;
  if (!hasEpubTypeAttr(doc)) return;
  root.setAttributeNS(XMLNS_NS, "xmlns:epub", EPUB_NS);
}

// ../../repos/e-ink/src/lib/ebook-tools/toc-label.ts
var MAX_TOC_LABEL_LENGTH = 80;
var BOILERPLATE_TITLE = /^(unknown|untitled|untitled\s+document|new\s+document|section\s+\d+|\/.*)$/i;
var MULTI_SENTENCE_MIN_LENGTH = 24;
function sanitizeTocLabel(label) {
  const trimmed = label.replace(/\s+/g, " ").trim();
  if (!trimmed) return "";
  const sentenceEnds = (trimmed.match(/[.!?。！？…]+/g) || []).length;
  if (trimmed.length > MAX_TOC_LABEL_LENGTH) return "";
  if (sentenceEnds >= 2 && trimmed.length > MULTI_SENTENCE_MIN_LENGTH) return "";
  return trimmed;
}

// ../../repos/e-ink/src/lib/editors/epub.ts
function rel2abs(base, relative) {
  const stack = base.split("/").slice(0, -1);
  const parts = relative.split("/");
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === ".") continue;
    if (parts[i] === "..") stack.pop();
    else stack.push(parts[i]);
  }
  return stack.join("/");
}
function decodeHref(href) {
  try {
    return decodeURIComponent(href);
  } catch {
    return href;
  }
}
function abs2rel(base, absolute) {
  const baseParts = base.split("/").slice(0, -1);
  const parts = absolute.split("/");
  while (baseParts[0] === parts[0]) {
    baseParts.shift();
    parts.shift();
  }
  let relParts = new Array(baseParts.length).fill("..");
  relParts = relParts.concat(parts);
  return relParts.join("/");
}
function getPath(filePath) {
  let path = filePath.split("/").slice(0, -1).join("/");
  if (path !== "") path += "/";
  return path;
}
function getListPath(fileList) {
  const pathCounts = {};
  const paths = fileList.map(getPath);
  paths.forEach((path) => {
    pathCounts[path] = (pathCounts[path] || 0) + 1;
  });
  let maxPath = "";
  let maxCount = 0;
  for (const [path, count] of Object.entries(pathCounts)) {
    if (count > maxCount) {
      maxCount = count;
      maxPath = path;
    }
  }
  return maxPath;
}
function isTextFilePath(filePath) {
  return /[\s\S]+\.(xhtml|html)$/i.test(filePath);
}
var READABLE_MEDIA_TYPES = /* @__PURE__ */ new Set([
  "application/xhtml+xml",
  "text/html",
  "application/xml",
  "text/xml"
]);
function isImageFilePath(filePath) {
  return /[\s\S]+\.(png|jpe?g|gif|svg|webp|avif)$/i.test(filePath);
}
function elementChildren(el) {
  if (!el) return [];
  return Array.from(el.children);
}
function getElementAttrWords(el, attrName) {
  return (el.getAttribute(attrName) || "").split(/\s+/).map((word) => word.trim()).filter(Boolean);
}
function hasElementName(el, name) {
  return el.localName === name || el.tagName === name;
}
function stripBOM(text) {
  return text.charCodeAt(0) === 65279 ? text.slice(1) : text;
}
function getBodyElement(doc) {
  return doc.body ?? doc.getElementsByTagName("body")[0] ?? null;
}
var EpubFile = class {
  zip;
  loaded;
  dp;
  file;
  name;
  fileList;
  textFileList;
  textDocs;
  textPath;
  styleFileList;
  stylePath;
  imageFileList;
  imageBlobs;
  imagePath;
  opfFilePath;
  opfDoc;
  ncxFilePath;
  ncxDoc;
  navFilePath;
  navDoc;
  coverWrapperPaths;
  coverImagePath;
  constructor(file) {
    this.zip = new import_jszip.default();
    this.loaded = false;
    this.dp = new DOMParser();
    this.name = "";
    this.fileList = [];
    this.textFileList = [];
    this.textPath = "";
    this.styleFileList = [];
    this.stylePath = "";
    this.imageFileList = [];
    this.imageBlobs = [];
    this.imagePath = "";
    this.textDocs = {};
    this.opfFilePath = "";
    this.opfDoc = new Document();
    this.ncxFilePath = "";
    this.ncxDoc = new Document();
    this.navFilePath = "";
    this.navDoc = new Document();
    this.coverWrapperPaths = [];
    this.coverImagePath = null;
    if (file !== void 0) {
      this.file = file;
      this.name = file.name;
    }
  }
  async load() {
    if (this.loaded) return;
    try {
      await this.loadAsZip();
      await this.parseOpf();
      await this.parseNcx();
      await this.parseNavDoc();
      this.loaded = true;
    } catch (e) {
      throw e;
    }
  }
  async createEmpty(title, author, chapterTitle) {
    this.zip = new import_jszip.default();
    const uid = `urn:uuid:${crypto.randomUUID?.() || Date.now().toString(36)}`;
    const opfPath = "OEBPS/";
    this.opfFilePath = `${opfPath}content.opf`;
    const chapterHref = "chapter1.xhtml";
    const chapterPath = `${opfPath}${chapterHref}`;
    const navHref = "nav.xhtml";
    const navPath = `${opfPath}${navHref}`;
    const opfXml = `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="BookId">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="BookId">${uid}</dc:identifier>
    <dc:title>${title}</dc:title>
    <dc:creator>${author}</dc:creator>
    <dc:language>en</dc:language>
  </metadata>
  <manifest>
    <item id="nav" href="${navHref}" media-type="application/xhtml+xml" properties="nav"/>
    <item id="chapter1" href="${chapterHref}" media-type="application/xhtml+xml"/>
  </manifest>
  <spine>
    <itemref idref="chapter1"/>
  </spine>
</package>`;
    const chapterXml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>${chapterTitle}</title></head>
<body>
<h1>${chapterTitle}</h1>
<p></p>
</body>
</html>`;
    const navXml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head><title>Navigation</title></head>
<body>
<nav epub:type="toc">
<ol>
<li><a href="${chapterHref}">${chapterTitle}</a></li>
</ol>
</nav>
</body>
</html>`;
    const containerXml = `<?xml version="1.0" encoding="UTF-8"?>
<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">
  <rootfiles>
    <rootfile full-path="${this.opfFilePath}" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`;
    this.zip.file("mimetype", "application/epub+zip");
    this.zip.file("META-INF/container.xml", containerXml);
    this.zip.file(this.opfFilePath, opfXml);
    this.zip.file(chapterPath, chapterXml);
    this.zip.file(navPath, navXml);
    this.fileList = Object.keys(this.zip.files).filter((f) => !this.zip.files[f].dir);
    this.opfDoc = this.dp.parseFromString(opfXml, "text/xml");
    this.navFilePath = navPath;
    this.navDoc = this.dp.parseFromString(navXml, "text/xml");
    this.ncxFilePath = "";
    this.ncxDoc = new Document();
    this.textFileList = [chapterPath];
    this.textPath = opfPath;
    this.styleFileList = [];
    this.stylePath = "";
    this.imageFileList = [];
    this.imagePath = "";
    this.imageBlobs = [];
    this.textDocs = {};
    this.name = "new-book.epub";
    this.loaded = true;
  }
  async loadAsZip() {
    if (this.file === void 0) throw new Error("file not found.");
    const data = typeof this.file.arrayBuffer === "function" ? await this.file.arrayBuffer() : this.file;
    this.zip = await import_jszip.default.loadAsync(data);
    this.fileList = Object.keys(this.zip.files);
  }
  async getOpfFilePath() {
    const fallback = () => {
      const path2 = this.fileList.find((name) => /[\s\S]+\.opf/g.test(name));
      if (path2 === void 0) throw new Error("opf filepath not found");
      return path2;
    };
    const containerFile = this.zip.file("META-INF/container.xml");
    if (containerFile === null) return fallback();
    const containerXml = await containerFile.async("text");
    const containerDoc = this.dp.parseFromString(stripBOM(containerXml), "text/xml");
    const el = containerDoc.getElementsByTagName("rootfile")[0];
    if (el === void 0) return fallback();
    const path = el.getAttribute("full-path");
    if (path === null) return fallback();
    return path;
  }
  async parseOpf() {
    this.opfFilePath = await this.getOpfFilePath();
    const opfPath = getPath(this.opfFilePath);
    const opfFile = this.zip.file(this.opfFilePath);
    if (opfFile === null) throw new Error("opf file not found");
    const contentText = await opfFile.async("string");
    this.opfDoc = this.dp.parseFromString(stripBOM(contentText), "text/xml");
    const manifestEl = this.opfDoc.getElementsByTagName("manifest")[0];
    if (manifestEl === void 0)
      throw new Error("the opf file has no manifest");
    const manifestItems = elementChildren(manifestEl).map((el) => {
      const href = el.getAttribute("href");
      if (!href) return null;
      return {
        id: el.getAttribute("id") || "",
        href,
        path: rel2abs(opfPath, href),
        mediaType: el.getAttribute("media-type") || "",
        properties: getElementAttrWords(el, "properties")
      };
    }).filter((item) => item !== null);
    const navItem = manifestItems.find((item) => item.properties.includes("nav"));
    this.navFilePath = navItem?.path || "";
    const manifestTextFileList = manifestItems.filter(
      (item) => (isTextFilePath(item.href) || READABLE_MEDIA_TYPES.has(item.mediaType)) && !item.properties.includes("nav")
    ).map((item) => item.path);
    const manifestPathById = new Map(manifestItems.map((item) => [item.id, item.path]));
    const spineEl = this.opfDoc.getElementsByTagName("spine")[0];
    const spineTextFileList = elementChildren(spineEl).filter((el) => hasElementName(el, "itemref")).map((el) => el.getAttribute("idref") || "").map((idref) => manifestPathById.get(idref) || "").filter((path) => manifestTextFileList.includes(path));
    const orderedPaths = spineTextFileList.length > 0 ? spineTextFileList : manifestTextFileList;
    const unorderedPaths = manifestTextFileList.filter((path) => !orderedPaths.includes(path));
    this.coverWrapperPaths = this.findCoverWrapperPaths();
    this.textFileList = [...orderedPaths, ...unorderedPaths].filter(
      (path) => !this.coverWrapperPaths.includes(path)
    );
    this.textPath = getListPath(this.textFileList);
    this.styleFileList = this.fileList.filter(
      (name) => /[\s\S]+\.css/g.test(name)
    );
    this.stylePath = getListPath(this.styleFileList);
    this.imageFileList = this.fileList.filter((name) => isImageFilePath(name));
    this.imagePath = getListPath(this.imageFileList);
    for (const path of this.imageFileList) {
      this.imageBlobs.push({
        path,
        blob: await this.getImage(path)
      });
    }
    this.coverImagePath = await this.resolveCoverImagePath();
  }
  async getTextDoc(filePath) {
    if (this.textDocs[filePath] !== void 0) {
      return this.textDocs[filePath];
    }
    const textFile = this.zip.file(filePath);
    if (textFile === null) return new Document();
    const html = await textFile.async("string");
    const doc = this.dp.parseFromString(stripBOM(html), "application/xhtml+xml");
    this.textDocs[filePath] = doc;
    return doc;
  }
  async updateImageSrc(filePath, urlMap) {
    const doc = await this.getTextDoc(filePath);
    const imgEls = doc.getElementsByTagName("img");
    for (const el of imgEls) {
      let src = el.getAttribute("src");
      if (src === null) continue;
      src = rel2abs(filePath, src);
      if (urlMap[src] === void 0) continue;
      el.setAttribute("src", urlMap[src]);
    }
    const imageEls = doc.getElementsByTagName("image");
    for (const el of imageEls) {
      const attrName = el.hasAttribute("xlink:href") ? "xlink:href" : "href";
      let href = el.getAttribute(attrName);
      if (!href) continue;
      href = rel2abs(filePath, href);
      if (urlMap[href] === void 0) continue;
      el.setAttribute(attrName, urlMap[href]);
    }
  }
  async getTextBody(filePath) {
    const doc = await this.getTextDoc(filePath);
    const body = getBodyElement(doc);
    return body?.innerHTML ?? "";
  }
  getNcxFilePath() {
    const fallback = () => {
      const path2 = this.fileList.find((name) => /[\s\S]+\.ncx/g.test(name));
      return path2 || "";
    };
    const doc = this.opfDoc;
    const manifestEl = doc.getElementsByTagName("manifest")[0];
    const spineEl = doc.getElementsByTagName("spine")[0];
    const tocId = spineEl?.getAttribute("toc") || "ncx";
    const manifestItems = elementChildren(manifestEl);
    const el = manifestItems.find((item) => item.getAttribute("id") === tocId) || manifestItems.find((item) => item.getAttribute("id") === "ncx") || manifestItems.find((item) => item.getAttribute("media-type") === "application/x-dtbncx+xml");
    if (!el) return fallback();
    const path = el.getAttribute("href");
    if (path === null) return fallback();
    return rel2abs(this.opfFilePath, path);
  }
  async parseNcx() {
    this.ncxFilePath = this.getNcxFilePath();
    if (!this.ncxFilePath) return;
    const ncxFile = this.zip.file(this.ncxFilePath);
    if (ncxFile === null) return;
    const ncxText = await ncxFile.async("text");
    this.ncxDoc = this.dp.parseFromString(stripBOM(ncxText), "text/xml");
  }
  async parseNavDoc() {
    if (!this.navFilePath) return;
    const navFile = this.zip.file(this.navFilePath);
    if (navFile === null) return;
    const navText = await navFile.async("text");
    this.navDoc = this.dp.parseFromString(stripBOM(navText), "application/xhtml+xml");
  }
  getTocNavElement() {
    const navEls = Array.from(this.navDoc.getElementsByTagName("nav"));
    const isNonTocNav = (el) => {
      const types = [
        ...getElementAttrWords(el, "epub:type"),
        ...getElementAttrWords(el, "type")
      ];
      return types.includes("landmarks") || types.includes("page-list");
    };
    return navEls.find((el) => {
      const types = [
        ...getElementAttrWords(el, "epub:type"),
        ...getElementAttrWords(el, "type")
      ];
      return types.includes("toc");
    }) || navEls.find((el) => !isNonTocNav(el)) || navEls[0];
  }
  /**
   * 章节级 TOC 入口定位：建立 filePath → {navAnchor, ncxNavPoint} 的映射。
   * 判据是「结构层级」（顶层 li / navMap 直接子级），而非 href 有没有 #fragment
   * （章节根锚点本身常带 fragment，如 ch001.xhtml#easily-...）。
   * 只取「直接子节点」（elementChildren，非递归 getElementsByTagName），
   * 因此嵌套的小节子锚点根本进不了这个 Map，读/写都只触及章节入口。
   * 同一文件多个顶层条目时 first-wins（与现有重排序 updateNcxOrder/updateNavDocOrder 一致）。
   */
  getChapterAnchorMap() {
    const map = /* @__PURE__ */ new Map();
    const ensure = (fp) => {
      if (!map.has(fp)) map.set(fp, { navAnchor: null, ncxNavPoint: null });
      return map.get(fp);
    };
    if (this.navFilePath) {
      const tocNav = this.getTocNavElement();
      const topOl = tocNav?.getElementsByTagName("ol")[0];
      if (topOl) {
        for (const li of elementChildren(topOl)) {
          const a = li.querySelector("a");
          const href = a?.getAttribute("href");
          if (!href) continue;
          const fp = rel2abs(this.navFilePath, href.split("#")[0]);
          if (!this.textFileList.includes(fp)) continue;
          if (map.has(fp)) continue;
          ensure(fp).navAnchor = a ?? null;
        }
      }
    }
    if (this.ncxFilePath) {
      const navMap = this.ncxDoc.getElementsByTagName("navMap")[0];
      if (navMap) {
        for (const np of elementChildren(navMap)) {
          if (!hasElementName(np, "navPoint")) continue;
          const src = np.getElementsByTagName("content")[0]?.getAttribute("src");
          if (!src) continue;
          const fp = rel2abs(this.ncxFilePath, src.split("#")[0]);
          if (!this.textFileList.includes(fp)) continue;
          if (ensure(fp).ncxNavPoint) continue;
          ensure(fp).ncxNavPoint = np;
        }
      }
    }
    return map;
  }
  getNavDocFlat() {
    if (!this.navFilePath) return {};
    const nav = {};
    for (const [fp, entry] of this.getChapterAnchorMap()) {
      const text = sanitizeTocLabel(entry.navAnchor?.textContent || "");
      if (text) nav[fp] = text;
    }
    return nav;
  }
  async getNavFlat() {
    const nav = {};
    for (const [fp, entry] of this.getChapterAnchorMap()) {
      if (entry.ncxNavPoint) {
        const textEl = entry.ncxNavPoint.getElementsByTagName("text")[0];
        const text = sanitizeTocLabel(textEl?.textContent || "");
        if (text) nav[fp] = text;
      }
    }
    return { ...nav, ...this.getNavDocFlat() };
  }
  /**
   * 章节标题的文档层兜底：h1 → h2 → head <title>，逐层过滤样板值。
   * 与 Fix TOC / 字数统计的 extractDocumentTitle 同口径——nav/ncx 没有条目的
   * 章节（半成品转换书常见：NCX 只有 "Start"→封面页）此前只能显示文件名。
   * 仅用于侧栏展示，不写回 nav/ncx（改名走 updateNavTitle 才落盘）。
   */
  async getDocumentChapterTitle(filePath) {
    const doc = await this.getTextDoc(filePath);
    for (const selector of ["h1", "h2", "title"]) {
      const value = doc.querySelector(selector)?.textContent?.trim() || "";
      if (value && !BOILERPLATE_TITLE.test(value)) return value.replace(/\s+/g, " ");
    }
    return "";
  }
  updateNavTitle(filePath, title) {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;
    this.updateNcxTitle(filePath, trimmedTitle);
    this.updateNavDocTitle(filePath, trimmedTitle);
  }
  /**
   * 判断给定章节是否是前置/后置非正文页（封面、标题页、版权页、目录、landmarks 等），
   * 这类页面不参与章节编号。判据只看 <body> 的 epub:type（不递归，避免正文里偶发的
   * section epub:type 误判）。无 epub:type 标记的 epub 视为正文。
   */
  async isFrontMatter(filePath) {
    const doc = await this.getTextDoc(filePath);
    const body = doc.querySelector("body");
    if (!body) return false;
    const types = getElementAttrWords(body, "epub:type");
    return types.some(
      (t) => ["frontmatter", "titlepage", "cover", "copyright-page", "toc", "landmarks", "backmatter"].includes(t)
    );
  }
  /**
   * 返回应参与编号的章节文件列表（按 textFileList 顺序，剔除前置页）。
   * 关键回退：当没有任何章节命中 frontmatter 标记时（如纯 EPUB2 无 epub:type），
   * 返回全部 textFileList，绝不返回空——否则会一个都不编号。
   */
  async getNumberableFilePaths() {
    const kept = [];
    for (const fp of this.textFileList) {
      if (!await this.isFrontMatter(fp)) kept.push(fp);
    }
    return kept.length > 0 ? kept : this.textFileList.slice();
  }
  /**
   * 按侧边栏顺序批量给章节标题套格式串自动编号。
   * 跳过前置页（封面/标题页等），正文从 start 开始编号。
   * 格式串里的 `#` 替换为自增号；可选同时更新每章正文第一个 <h1> 与 <title>。
   * 返回真正编号的章节映射（供组件同步 nav state）与正文无 h1 而被跳过的章节列表。
   */
  async applyChapterNumbering(opts) {
    const start = Number.isFinite(opts.start) ? Math.trunc(opts.start) : 1;
    const pad = [0, 2, 3].includes(opts.pad) ? opts.pad : 0;
    const format = typeof opts.format === "string" && opts.format ? opts.format : "#";
    const applied = {};
    const bodySkipped = [];
    const numberable = await this.getNumberableFilePaths();
    let numbering = numberable;
    if (typeof opts.startFromFilePath === "string" && opts.startFromFilePath) {
      const idx = numberable.indexOf(opts.startFromFilePath);
      if (idx > 0) numbering = numberable.slice(idx);
      else if (idx === -1) console.warn("[chapterNumbering] startFromFilePath \u4E0D\u5728\u5217\u8868\u4E2D\uFF0C\u5FFD\u7565", opts.startFromFilePath);
    }
    numbering.forEach((filePath, i) => {
      const title = formatChapterNumber(format, start + i, pad);
      this.updateNavTitle(filePath, title);
      applied[filePath] = title;
    });
    if (opts.updateBody) {
      for (const filePath of numbering) {
        const title = applied[filePath];
        const doc = await this.getTextDoc(filePath);
        const h1 = doc.querySelector("h1");
        const titleEl = doc.querySelector("head > title");
        let changed = false;
        if (h1) {
          h1.textContent = title;
          changed = true;
        }
        if (titleEl) {
          titleEl.textContent = title;
          changed = true;
        }
        if (changed) {
          this.serializeTextDoc(filePath);
        } else {
          bodySkipped.push(filePath);
        }
      }
    }
    return { applied, bodySkipped };
  }
  /**
   * 为全书可编号章节（排除前置/后置页）的首个 h1/h2 上下写入内联 SVG 饰纹。
   * 先按标记剥除旧饰纹再插入，重复应用或切换样式不叠加。
   */
  async applyChapterDecoration(style) {
    const decorated = [];
    const skipped = [];
    const targets = await this.getNumberableFilePaths();
    for (const filePath of targets) {
      const doc = await this.getTextDoc(filePath);
      const { decorated: wasDecorated, changed } = decorateChapterDoc(doc, style);
      if (changed) {
        this.serializeTextDoc(filePath);
      }
      if (wasDecorated) {
        decorated.push(filePath);
      } else {
        skipped.push(filePath);
      }
    }
    return { decorated, skipped };
  }
  /**
   * 移除全书所有正文文档中带装饰标记的饰纹元素（扫描全部 textFileList，含前置页）。
   */
  async removeChapterDecoration() {
    let chaptersCleaned = 0;
    let ornamentsRemoved = 0;
    for (const filePath of this.textFileList) {
      const doc = await this.getTextDoc(filePath);
      const count = stripChapterOrnaments(doc);
      if (count > 0) {
        this.serializeTextDoc(filePath);
        chaptersCleaned += 1;
        ornamentsRemoved += count;
      }
    }
    return { chaptersCleaned, ornamentsRemoved };
  }
  updateNcxTitle(filePath, title) {
    if (!this.ncxFilePath) return;
    const navPoint = this.getChapterAnchorMap().get(filePath)?.ncxNavPoint;
    if (!navPoint) return;
    const textEl = navPoint.getElementsByTagName("text")[0];
    if (textEl) textEl.textContent = title;
  }
  updateNavDocTitle(filePath, title) {
    if (!this.navFilePath) return;
    const anchor = this.getChapterAnchorMap().get(filePath)?.navAnchor;
    if (anchor) anchor.textContent = title;
  }
  reorderTextFiles(filePaths) {
    const knownFiles = new Set(this.textFileList);
    const nextFileList = [
      ...filePaths.filter((filePath) => knownFiles.has(filePath)),
      ...this.textFileList.filter((filePath) => !filePaths.includes(filePath))
    ];
    this.textFileList = nextFileList;
    this.updateSpineOrder(nextFileList);
    this.updateNcxOrder(nextFileList);
    this.updateNavDocOrder(nextFileList);
  }
  async addTextChapter(title, afterFilePath) {
    const trimmedTitle = title.trim() || "New Chapter";
    const filePath = this.generateUniqueChapterPath();
    const itemId = this.generateUniqueManifestId("chapter");
    const href = abs2rel(this.opfFilePath, filePath);
    const templatePath = afterFilePath && this.textFileList.includes(afterFilePath) ? afterFilePath : this.textFileList[0] || "";
    const xhtml = await this.buildChapterXhtml(trimmedTitle, templatePath);
    const doc = this.dp.parseFromString(xhtml, "application/xhtml+xml");
    this.textDocs[filePath] = doc;
    this.zip.file(filePath, xhtml);
    this.fileList.push(filePath);
    const manifest = this.opfDoc.getElementsByTagName("manifest")[0];
    const item = this.opfDoc.createElement("item");
    item.setAttribute("id", itemId);
    item.setAttribute("href", href);
    item.setAttribute("media-type", "application/xhtml+xml");
    manifest.appendChild(item);
    let insertIndex = this.textFileList.length;
    if (afterFilePath) {
      const index = this.textFileList.indexOf(afterFilePath);
      if (index !== -1) insertIndex = index + 1;
    }
    const nextFileList = [...this.textFileList];
    nextFileList.splice(insertIndex, 0, filePath);
    this.textFileList = nextFileList;
    this.addNcxEntry(filePath, trimmedTitle);
    this.addNavDocEntry(filePath, trimmedTitle);
    this.updateSpineOrder(nextFileList);
    this.updateNcxOrder(nextFileList);
    this.updateNavDocOrder(nextFileList);
    return filePath;
  }
  deleteTextChapter(filePath) {
    if (this.textFileList.length <= 1) return false;
    if (!this.textFileList.includes(filePath)) return false;
    this.removeSpineItemsByPath(filePath);
    this.removeManifestItemByPath(filePath);
    this.removeNcxEntry(filePath);
    this.removeNavDocEntry(filePath);
    this.zip.remove(filePath);
    delete this.textDocs[filePath];
    this.fileList = this.fileList.filter((path) => path !== filePath);
    this.textFileList = this.textFileList.filter((path) => path !== filePath);
    this.syncPublicationStructure();
    return true;
  }
  async splitChapter(filePath, beforeHtml, afterHtml, newTitle, pathMap) {
    await this.saveTextFile(filePath, beforeHtml, pathMap);
    const newFilePath = this.generateUniqueChapterPath();
    const itemId = this.generateUniqueManifestId("chapter");
    const href = abs2rel(this.opfFilePath, newFilePath);
    const doc = await this.getTextDoc(filePath);
    const serializer = new XMLSerializer();
    const head = doc.getElementsByTagName("head")[0];
    const headStr = head ? serializer.serializeToString(head) : "<head><title></title></head>";
    const xhtml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
${headStr}
<body>
${this.htmlToXhtml(afterHtml)}
</body>
</html>`;
    const newDoc = this.dp.parseFromString(xhtml, "application/xhtml+xml");
    this.textDocs[newFilePath] = newDoc;
    this.zip.file(newFilePath, xhtml);
    this.fileList.push(newFilePath);
    const manifest = this.opfDoc.getElementsByTagName("manifest")[0];
    const item = this.opfDoc.createElement("item");
    item.setAttribute("id", itemId);
    item.setAttribute("href", href);
    item.setAttribute("media-type", "application/xhtml+xml");
    manifest.appendChild(item);
    const index = this.textFileList.indexOf(filePath);
    const nextFileList = [...this.textFileList];
    nextFileList.splice(index + 1, 0, newFilePath);
    this.textFileList = nextFileList;
    this.addNcxEntry(newFilePath, newTitle);
    this.addNavDocEntry(newFilePath, newTitle);
    this.updateSpineOrder(nextFileList);
    this.updateNcxOrder(nextFileList);
    this.updateNavDocOrder(nextFileList);
    return newFilePath;
  }
  /**
   * 合并章节：source 的 body 内容并入 target，随后删除 source 文件
   * （spine/manifest/nav/ncx/缓存由 deleteTextChapter 统一清理）。
   * position：'append' = source 内容接 target 之后（source 并入前一章）；
   * 'prepend' = source 内容放 target 之前（source 并入后一章）——保持书的阅读顺序。
   * 合并语义=两章并一章：source 的章标题（body 首个元素且为 h1-h6）变冗余——
   * 保留会一个文件两个 h1，干扰下游按 h1 的判定（自动编号/TTS 选章/正文起点），
   * 故并入前去掉、章名保留 target 的。返回 false = 路径无效或正文缺失，未做任何修改。
   */
  async mergeChapters(targetPath, sourcePath, position = "append") {
    if (this.textFileList.length <= 1) return false;
    if (!this.textFileList.includes(sourcePath) || !this.textFileList.includes(targetPath)) return false;
    const targetDoc = await this.getTextDoc(targetPath);
    const sourceDoc = await this.getTextDoc(sourcePath);
    const targetBody = getBodyElement(targetDoc);
    const sourceBody = getBodyElement(sourceDoc);
    if (!targetBody || !sourceBody) return false;
    const sourceHeading = sourceBody.firstElementChild;
    if (sourceHeading && /^h[1-6]$/i.test(sourceHeading.tagName)) {
      sourceHeading.remove();
    }
    const fragment = targetDoc.createDocumentFragment();
    for (let i = 0; i < sourceBody.childNodes.length; i++) {
      fragment.appendChild(targetDoc.importNode(sourceBody.childNodes[i], true));
    }
    if (position === "prepend") {
      targetBody.insertBefore(fragment, targetBody.firstChild);
    } else {
      targetBody.appendChild(fragment);
    }
    const serialized = new XMLSerializer().serializeToString(targetDoc);
    this.zip.file(targetPath, serialized);
    return this.deleteTextChapter(sourcePath);
  }
  generateUniqueChapterPath() {
    let counter = this.textFileList.length + 1;
    let filePath = `${this.textPath}chapter-${counter}.xhtml`;
    while (this.fileList.includes(filePath) || this.zip.file(filePath)) {
      counter += 1;
      filePath = `${this.textPath}chapter-${counter}.xhtml`;
    }
    return filePath;
  }
  generateUniqueManifestId(base) {
    const manifestEl = this.opfDoc.getElementsByTagName("manifest")[0];
    const existingIds = new Set(
      elementChildren(manifestEl).map((el) => el.getAttribute("id") || "").filter(Boolean)
    );
    let id = base;
    let counter = 1;
    while (existingIds.has(id)) {
      id = `${base}-${counter}`;
      counter += 1;
    }
    return id;
  }
  escapeXml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  async buildChapterXhtml(title, templateFilePath) {
    const links = [];
    const styles = [];
    if (templateFilePath) {
      const templateDoc = await this.getTextDoc(templateFilePath);
      const head = templateDoc.getElementsByTagName("head")[0];
      if (head) {
        [...head.getElementsByTagName("link")].forEach((link) => {
          links.push(new XMLSerializer().serializeToString(link));
        });
        [...head.getElementsByTagName("style")].forEach((style) => {
          styles.push(new XMLSerializer().serializeToString(style));
        });
      }
    }
    const escapedTitle = this.escapeXml(title);
    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="en" xml:lang="en">
<head>
<title>${escapedTitle}</title>
${links.join("\n")}
${styles.join("\n")}
</head>
<body>
<h1>${escapedTitle}</h1>
<p>&#160;</p>
</body>
</html>`;
  }
  addNcxEntry(filePath, title) {
    if (!this.ncxFilePath) return;
    const navMap = this.ncxDoc.getElementsByTagName("navMap")[0];
    if (!navMap) return;
    const navPoint = this.ncxDoc.createElement("navPoint");
    navPoint.setAttribute("id", this.generateUniqueManifestId("navPoint"));
    const navLabel = this.ncxDoc.createElement("navLabel");
    const textEl = this.ncxDoc.createElement("text");
    textEl.textContent = title;
    navLabel.appendChild(textEl);
    navPoint.appendChild(navLabel);
    const content = this.ncxDoc.createElement("content");
    content.setAttribute("src", abs2rel(this.ncxFilePath, filePath));
    navPoint.appendChild(content);
    navMap.appendChild(navPoint);
    this.resetNcxPlayOrder();
  }
  addNavDocEntry(filePath, title) {
    if (!this.navFilePath) return;
    const tocNav = this.getTocNavElement();
    const list = tocNav?.getElementsByTagName("ol")[0];
    if (!list) return;
    const li = this.navDoc.createElement("li");
    const anchor = this.navDoc.createElement("a");
    anchor.setAttribute("href", abs2rel(this.navFilePath, filePath));
    anchor.textContent = title;
    li.appendChild(anchor);
    list.appendChild(li);
  }
  getManifestPathByIdMap() {
    const manifestEl = this.opfDoc.getElementsByTagName("manifest")[0];
    const map = /* @__PURE__ */ new Map();
    if (!manifestEl) return map;
    elementChildren(manifestEl).forEach((el) => {
      const id = el.getAttribute("id");
      const href = el.getAttribute("href");
      if (id && href) map.set(id, rel2abs(this.opfFilePath, href));
    });
    return map;
  }
  removeSpineItemsByPath(filePath) {
    const spineEl = this.opfDoc.getElementsByTagName("spine")[0];
    if (!spineEl) return;
    const manifestPathById = this.getManifestPathByIdMap();
    elementChildren(spineEl).filter((el) => hasElementName(el, "itemref")).forEach((el) => {
      const idref = el.getAttribute("idref") || "";
      if (manifestPathById.get(idref) === filePath) el.remove();
    });
  }
  removeManifestItemByPath(filePath) {
    const manifestEl = this.opfDoc.getElementsByTagName("manifest")[0];
    if (!manifestEl) return;
    elementChildren(manifestEl).filter((el) => {
      const href = el.getAttribute("href");
      return href ? rel2abs(this.opfFilePath, href) === filePath : false;
    }).forEach((el) => el.remove());
  }
  removeNcxEntry(filePath) {
    if (!this.ncxFilePath) return;
    Array.from(this.ncxDoc.getElementsByTagName("navPoint")).filter((el) => this.getNcxNavPointPath(el) === filePath).forEach((el) => el.remove());
    this.resetNcxPlayOrder();
  }
  removeNavDocEntry(filePath) {
    if (!this.navFilePath) return;
    const tocNav = this.getTocNavElement();
    const list = tocNav?.getElementsByTagName("ol")[0];
    if (!list) return;
    elementChildren(list).filter((el) => hasElementName(el, "li") && this.getNavDocListItemPath(el) === filePath).forEach((el) => el.remove());
  }
  getManifestItemIdByPath(filePath) {
    const manifestEl = this.opfDoc.getElementsByTagName("manifest")[0];
    const item = elementChildren(manifestEl).find((el) => {
      const href = el.getAttribute("href");
      if (!href) return false;
      return rel2abs(this.opfFilePath, href) === filePath;
    });
    return item?.getAttribute("id") || "";
  }
  updateSpineOrder(filePaths) {
    const spineEl = this.opfDoc.getElementsByTagName("spine")[0];
    if (!spineEl) return;
    elementChildren(spineEl).filter((el) => hasElementName(el, "itemref")).forEach((el) => el.remove());
    const appendItemRef = (filePath, linear) => {
      const id = this.getManifestItemIdByPath(filePath);
      if (!id) return;
      const itemRef = this.opfDoc.createElement("itemref");
      itemRef.setAttribute("idref", id);
      itemRef.setAttribute("linear", linear);
      spineEl.appendChild(itemRef);
    };
    this.coverWrapperPaths.forEach((filePath) => appendItemRef(filePath, "no"));
    filePaths.forEach((filePath) => appendItemRef(filePath, "yes"));
  }
  syncPublicationStructure() {
    this.updateSpineOrder(this.textFileList);
  }
  getNcxNavPointPath(navPoint) {
    const contentEl = navPoint.getElementsByTagName("content")[0];
    const src = contentEl?.getAttribute("src");
    if (!src || !this.ncxFilePath) return "";
    return rel2abs(this.ncxFilePath, src.split("#")[0]);
  }
  updateNcxOrder(filePaths) {
    if (!this.ncxFilePath) return;
    const navMap = this.ncxDoc.getElementsByTagName("navMap")[0];
    if (!navMap) return;
    const filePathSet = new Set(filePaths);
    const navPoints = elementChildren(navMap).filter((el) => hasElementName(el, "navPoint"));
    navPoints.forEach((el) => {
      const path = this.getNcxNavPointPath(el);
      if (path && !filePathSet.has(path)) el.remove();
    });
    const remainingNavPoints = elementChildren(navMap).filter((el) => hasElementName(el, "navPoint"));
    const navPointByPath = /* @__PURE__ */ new Map();
    remainingNavPoints.forEach((el) => {
      const path = this.getNcxNavPointPath(el);
      if (path && !navPointByPath.has(path)) navPointByPath.set(path, el);
    });
    filePaths.map((filePath) => navPointByPath.get(filePath)).filter((el) => el !== void 0).forEach((el) => navMap.appendChild(el));
    this.resetNcxPlayOrder();
  }
  resetNcxPlayOrder() {
    const navPoints = Array.from(this.ncxDoc.getElementsByTagName("navPoint"));
    navPoints.forEach((el, index) => {
      el.setAttribute("playOrder", String(index + 1));
    });
  }
  getNavDocListItemPath(listItem) {
    const anchor = listItem.getElementsByTagName("a")[0];
    const href = anchor?.getAttribute("href");
    if (!href || !this.navFilePath) return "";
    return rel2abs(this.navFilePath, href.split("#")[0]);
  }
  updateNavDocOrder(filePaths) {
    if (!this.navFilePath) return;
    const tocNav = this.getTocNavElement();
    const list = tocNav?.getElementsByTagName("ol")[0];
    if (!list) return;
    const filePathSet = new Set(filePaths);
    const listItems = elementChildren(list).filter((el) => hasElementName(el, "li"));
    listItems.forEach((el) => {
      const path = this.getNavDocListItemPath(el);
      if (path && !filePathSet.has(path)) el.remove();
    });
    const remainingListItems = elementChildren(list).filter((el) => hasElementName(el, "li"));
    const listItemByPath = /* @__PURE__ */ new Map();
    remainingListItems.forEach((el) => {
      const path = this.getNavDocListItemPath(el);
      if (path && !listItemByPath.has(path)) listItemByPath.set(path, el);
    });
    filePaths.map((filePath) => listItemByPath.get(filePath)).filter((el) => el !== void 0).forEach((el) => list.appendChild(el));
  }
  getMetadata() {
    const doc = this.opfDoc;
    const metadataEl = doc.getElementsByTagName("metadata")[0];
    if (!metadataEl) return {};
    const metadata = [...metadataEl.children];
    const result = {};
    metadata.forEach((el) => {
      let tag = el.tagName;
      if (/dc:[\s\S]+/g.test(tag) === false) return;
      tag = tag.slice(3);
      const text = el.innerHTML;
      result[tag] = text;
    });
    return result;
  }
  async getCssListOfTextFile(filePath) {
    const doc = await this.getTextDoc(filePath);
    const cssList = [...doc.getElementsByTagName("link")].map((e) => {
      const path = e.getAttribute("href");
      if (path === null) return "";
      return path;
    }).filter((p) => p !== "").map((p) => rel2abs(filePath, p));
    return cssList;
  }
  async getInternalStyle(filePath) {
    const doc = await this.getTextDoc(filePath);
    const styleEls = [...doc.getElementsByTagName("style")];
    if (styleEls.length === 0) return "";
    const styleText = styleEls.map((el) => el.innerHTML).reduce((t0, t1) => `${t0}
${t1}`);
    return styleText;
  }
  async getCssText(filePath) {
    const cssFile = this.zip.file(filePath);
    if (cssFile === null) return "";
    return await cssFile.async("string");
  }
  // 源码模式:读 zip 原文。不用 textDocs 缓存——它已被 updateImageSrc 污染(img src 变 blob url),
  // 且 XMLSerializer 序列化会丢 DOCTYPE/XML 声明,不是用户 zip 里的真实文件。
  async getRawTextFile(filePath) {
    const textFile = this.zip.file(filePath);
    if (textFile === null) return "";
    return stripBOM(await textFile.async("string"));
  }
  // 源码模式:校验后原文整体写回 zip(不做 sanitize,保留用户所写的一切,含 XML 声明/DOCTYPE)。
  // 注意:回到富文本再保存走 saveTextFile,其 XMLSerializer 序列化 documentElement 会剥掉
  // XML 声明/DOCTYPE(既有行为,阅读器普遍容忍)——源码模式的保真只在源码管线内成立。
  // 必须校验:坏 XML 落盘后 getTextDoc 以 application/xhtml+xml 重新 parse 会 parsererror(整章空白)。
  // 必须失效 textDocs 缓存:否则切回 text 模式读旧缓存,源码编辑被无视。
  async saveRawTextFile(filePath, text) {
    const doc = new DOMParser().parseFromString(stripBOM(text), "application/xhtml+xml");
    const parserError = doc.querySelector("parsererror") || doc.getElementsByTagName("parsererror")[0];
    if (parserError) {
      throw Object.assign(new Error(parserError.textContent || "Invalid XHTML"), { invalidXhtml: true });
    }
    this.zip.file(filePath, text);
    delete this.textDocs[filePath];
  }
  async getImage(filePath) {
    const file = this.zip.file(filePath);
    if (file === null) throw new Error("file not found");
    return file.async("blob");
  }
  async addImage(file) {
    if (!this.loaded) return "";
    const type = file.type || "image/png";
    const filePath = this.generateUniqueImagePath(file.name);
    this.zip.file(filePath, file);
    this.fileList.push(filePath);
    this.imageFileList.push(filePath);
    if (!this.imagePath) {
      this.imagePath = getPath(filePath);
    }
    const manifest = this.opfDoc.getElementsByTagName("manifest")[0];
    const item = this.opfDoc.createElement("item");
    item.setAttribute("id", this.generateUniqueManifestId("image"));
    item.setAttribute("href", abs2rel(this.opfFilePath, filePath));
    item.setAttribute("media-type", type);
    manifest.appendChild(item);
    return filePath;
  }
  getCoverPath() {
    if (!this.loaded) return null;
    if (this.coverImagePath) return this.coverImagePath;
    return this.detectCoverImagePathSync();
  }
  /** 解码态优先、以 zip 实际条目归一：href 单侧编码时解码态即 zip 真名；
   *  guide/manifest 双侧编码的书 zip 真名仍是编码态（解码态查不到条目），回退原样——
   *  否则解码态路径与 textFileList 的编码态 path 对不上，封面剔除反而失效。 */
  zipEntryPath(decoded, raw) {
    if (this.zip.file(decoded) || !this.zip.file(raw)) return decoded;
    return raw;
  }
  findCoverWrapperPaths() {
    const opfPath = getPath(this.opfFilePath);
    const guideEl = this.opfDoc.getElementsByTagName("guide")[0];
    if (!guideEl) return [];
    const manifestEl = this.opfDoc.getElementsByTagName("manifest")[0];
    const paths = [];
    for (const ref of elementChildren(guideEl)) {
      if (!hasElementName(ref, "reference")) continue;
      const type = ref.getAttribute("type") || "";
      if (!type.split(/\s/).includes("cover")) continue;
      const href = ref.getAttribute("href");
      if (!href) continue;
      const rawPath = rel2abs(opfPath, href.split("#")[0]);
      const path = this.zipEntryPath(rel2abs(opfPath, decodeHref(href.split("#")[0])), rawPath);
      const mediaType = manifestEl ? elementChildren(manifestEl).find((el) => {
        const itemHref = el.getAttribute("href");
        if (itemHref === null) return false;
        return rel2abs(opfPath, decodeHref(itemHref.split("#")[0])) === decodeHref(rawPath);
      })?.getAttribute("media-type") || "" : "";
      if (isTextFilePath(path) || READABLE_MEDIA_TYPES.has(mediaType)) paths.push(path);
    }
    return paths;
  }
  detectCoverImagePathSync() {
    const opfPath = getPath(this.opfFilePath);
    const manifestEl = this.opfDoc.getElementsByTagName("manifest")[0];
    if (!manifestEl) return null;
    for (const el of elementChildren(manifestEl)) {
      if (getElementAttrWords(el, "properties").includes("cover-image")) {
        const href = el.getAttribute("href");
        if (href) return this.zipEntryPath(rel2abs(opfPath, decodeHref(href)), rel2abs(opfPath, href));
      }
    }
    const metadataEl = this.opfDoc.getElementsByTagName("metadata")[0];
    if (metadataEl) {
      for (const meta of [...metadataEl.getElementsByTagName("meta")]) {
        const coverId = meta.getAttribute("content");
        if (!coverId) continue;
        if (meta.getAttribute("name") === "cover" || meta.getAttribute("property") === "cover-image") {
          const item = elementChildren(manifestEl).find((el) => el.getAttribute("id") === coverId);
          const href = item?.getAttribute("href");
          if (href) return this.zipEntryPath(rel2abs(opfPath, decodeHref(href)), rel2abs(opfPath, href));
        }
      }
    }
    const guideEl = this.opfDoc.getElementsByTagName("guide")[0];
    if (guideEl) {
      for (const ref of elementChildren(guideEl)) {
        if (!hasElementName(ref, "reference")) continue;
        const type = ref.getAttribute("type") || "";
        if (!type.split(/\s/).includes("cover")) continue;
        const href = ref.getAttribute("href");
        if (!href) continue;
        const path = this.zipEntryPath(rel2abs(opfPath, decodeHref(href.split("#")[0])), rel2abs(opfPath, href.split("#")[0]));
        if (isImageFilePath(path)) return path;
      }
    }
    return null;
  }
  async resolveCoverImagePath() {
    const syncPath = this.detectCoverImagePathSync();
    if (syncPath && isImageFilePath(syncPath)) return syncPath;
    for (const wrapperPath of this.coverWrapperPaths) {
      const imagePath = await this.getFirstImagePathInChapter(wrapperPath);
      if (imagePath) return imagePath;
    }
    if (syncPath && isTextFilePath(syncPath)) {
      return this.getFirstImagePathInChapter(syncPath);
    }
    return syncPath;
  }
  async getFirstImagePathInChapter(filePath) {
    const doc = await this.getTextDoc(filePath);
    const img = doc.getElementsByTagName("img")[0];
    if (img) {
      const src = img.getAttribute("src");
      if (src) return rel2abs(filePath, src.split("#")[0]);
    }
    const image = doc.getElementsByTagName("image")[0];
    if (image) {
      const attrName = image.hasAttribute("xlink:href") ? "xlink:href" : "href";
      const href = image.getAttribute(attrName);
      if (href) return rel2abs(filePath, href.split("#")[0]);
    }
    return null;
  }
  getManifestItemByPath(filePath) {
    const opfPath = getPath(this.opfFilePath);
    const manifestEl = this.opfDoc.getElementsByTagName("manifest")[0];
    if (!manifestEl) return null;
    return elementChildren(manifestEl).find((el) => {
      const href = el.getAttribute("href");
      return href ? rel2abs(opfPath, href) === filePath : false;
    }) ?? null;
  }
  normalizeCoverMetadata() {
    const coverImagePath = this.getCoverPath();
    if (!coverImagePath || !isImageFilePath(coverImagePath)) return;
    const item = this.getManifestItemByPath(coverImagePath);
    if (!item) return;
    let itemId = item.getAttribute("id") || "";
    if (!itemId) {
      itemId = this.generateUniqueManifestId("cover");
      item.setAttribute("id", itemId);
    }
    this.setManifestProperty(item, "cover-image", true);
    this.setCoverMeta(itemId);
    this.coverImagePath = coverImagePath;
  }
  async setCoverImage(file) {
    if (!this.loaded) return "";
    this.clearCoverMarkers();
    const type = file.type || "image/png";
    const filePath = this.generateUniqueImagePath(file.name);
    this.zip.file(filePath, file);
    this.fileList.push(filePath);
    this.imageFileList.push(filePath);
    if (!this.imagePath) {
      this.imagePath = getPath(filePath);
    }
    const manifest = this.opfDoc.getElementsByTagName("manifest")[0];
    const itemId = this.generateUniqueManifestId("cover");
    const item = this.opfDoc.createElement("item");
    item.setAttribute("id", itemId);
    item.setAttribute("href", abs2rel(this.opfFilePath, filePath));
    item.setAttribute("media-type", type);
    item.setAttribute("properties", "cover-image");
    manifest.appendChild(item);
    this.setCoverMeta(itemId);
    this.imageBlobs.push({ path: filePath, blob: file });
    this.coverImagePath = filePath;
    return filePath;
  }
  removeCover() {
    if (!this.loaded) return;
    this.clearCoverMarkers();
    this.coverImagePath = null;
  }
  setManifestProperty(el, property, enabled) {
    const properties = getElementAttrWords(el, "properties");
    if (enabled) {
      if (properties.includes(property)) return;
      properties.push(property);
      el.setAttribute("properties", properties.join(" "));
      return;
    }
    const filtered = properties.filter((value) => value !== property);
    if (filtered.length > 0) {
      el.setAttribute("properties", filtered.join(" "));
    } else {
      el.removeAttribute("properties");
    }
  }
  setCoverMeta(coverId) {
    const metadataEl = this.opfDoc.getElementsByTagName("metadata")[0];
    if (!metadataEl) return;
    const coverMeta = [...metadataEl.getElementsByTagName("meta")].find((meta2) => meta2.getAttribute("name") === "cover");
    if (coverMeta) {
      coverMeta.setAttribute("content", coverId);
      return;
    }
    const meta = this.opfDoc.createElement("meta");
    meta.setAttribute("name", "cover");
    meta.setAttribute("content", coverId);
    metadataEl.appendChild(meta);
  }
  removeCoverMeta() {
    const metadataEl = this.opfDoc.getElementsByTagName("metadata")[0];
    if (!metadataEl) return;
    [...metadataEl.getElementsByTagName("meta")].filter((meta) => meta.getAttribute("name") === "cover").forEach((meta) => meta.remove());
  }
  clearCoverMarkers() {
    const manifestEl = this.opfDoc.getElementsByTagName("manifest")[0];
    if (manifestEl) {
      elementChildren(manifestEl).forEach((el) => {
        this.setManifestProperty(el, "cover-image", false);
      });
    }
    this.removeCoverMeta();
    const guideEl = this.opfDoc.getElementsByTagName("guide")[0];
    if (!guideEl) return;
    elementChildren(guideEl).filter((el) => {
      if (!hasElementName(el, "reference")) return false;
      const type = el.getAttribute("type") || "";
      return type.split(/\s/).includes("cover");
    }).forEach((el) => el.remove());
  }
  getImageStoragePath() {
    if (this.imagePath) return this.imagePath;
    return `${getPath(this.opfFilePath)}images/`;
  }
  generateUniqueImagePath(name) {
    const safeName = name.replace(/[\\/:*?"<>|]+/g, "-").trim() || "image.png";
    const dir = this.getImageStoragePath();
    let filePath = `${dir}${safeName}`;
    let counter = 1;
    const dotIndex = safeName.lastIndexOf(".");
    const base = dotIndex > 0 ? safeName.slice(0, dotIndex) : safeName;
    const ext = dotIndex > 0 ? safeName.slice(dotIndex) : ".png";
    while (this.fileList.includes(filePath) || this.zip.file(filePath)) {
      filePath = `${dir}${base}-${counter}${ext}`;
      counter += 1;
    }
    return filePath;
  }
  resolveImageSrc(src, chapterPath, pathMap) {
    const mappedPath = pathMap[src];
    if (mappedPath) {
      return abs2rel(chapterPath, mappedPath);
    }
    if (src.startsWith("blob:") || src.startsWith("data:")) {
      const blobEntry = Object.entries(pathMap).find(([url]) => src === url || src.startsWith(`${url}#`));
      if (blobEntry) {
        return abs2rel(chapterPath, blobEntry[1]);
      }
      return null;
    }
    if (/^https?:\/\//i.test(src)) {
      return null;
    }
    if (src.startsWith("/")) {
      return null;
    }
    return src;
  }
  async saveTextFile(filePath, bodyText, pathMap) {
    if (!this.textFileList.includes(filePath)) return;
    const doc = await this.getTextDoc(filePath);
    const body = getBodyElement(doc);
    if (!body) return;
    const cleanedBody = this.htmlToXhtml(sanitizeEditorHtml(bodyText));
    const tempDoc = new DOMParser().parseFromString(
      `<html><body>${cleanedBody}</body></html>`,
      "text/html"
    );
    const tempBody = getBodyElement(tempDoc);
    if (!tempBody) return;
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
    const nodes = tempBody.childNodes;
    for (let i = 0; i < nodes.length; i++) {
      try {
        const importedNode = doc.importNode(nodes[i], true);
        body.appendChild(importedNode);
      } catch (e) {
        console.warn("Failed to import node:", e);
      }
    }
    const imgElements = doc.getElementsByTagName("img");
    for (const el of imgElements) {
      const src = el.getAttribute("src");
      if (src === null) continue;
      const resolvedSrc = this.resolveImageSrc(src, filePath, pathMap);
      if (resolvedSrc === null) {
        console.warn("Skipping unresolved image source:", src);
        el.remove();
        continue;
      }
      el.setAttribute("src", resolvedSrc);
    }
    ensureEpubNamespace(doc);
    const text = new XMLSerializer().serializeToString(doc.documentElement);
    this.zip.file(filePath, text);
  }
  /**
   * 把缓存的 textDocs[filePath] 序列化写回 zip（不做 sanitize）。
   * 与 saveTextFile 不同：saveTextFile 接收 WYSIWYG bodyText 并 sanitize+重建 body，
   * 本方法直接序列化整个已缓存的 documentElement，适合程序化修改（如编号）后的落盘。
   * 用 XMLSerializer 而非 outerHTML——对 XHTML 命名空间更稳，是已验证可用的写法。
   */
  serializeTextDoc(filePath) {
    const doc = this.textDocs[filePath];
    if (!doc) return;
    const text = new XMLSerializer().serializeToString(doc.documentElement);
    this.zip.file(filePath, text);
  }
  // Convert HTML to XHTML-compatible format
  htmlToXhtml(html) {
    const selfClosingTags = ["br", "hr", "img", "input", "meta", "link", "area", "base", "col", "embed", "param", "source", "track", "wbr"];
    let result = html;
    selfClosingTags.forEach((tag) => {
      const regex = new RegExp(`<(${tag})([^>]*?)(?<!/)>`, "gi");
      result = result.replace(regex, `<$1$2/>`);
    });
    return result;
  }
  saveStyleFile(filePath, text) {
    this.zip.file(filePath, text);
  }
  async saveOpfFile() {
    const text = new XMLSerializer().serializeToString(this.opfDoc);
    this.zip.file(this.opfFilePath, text);
  }
  async saveNcxFile() {
    if (!this.ncxFilePath) return;
    const text = new XMLSerializer().serializeToString(this.ncxDoc);
    this.zip.file(this.ncxFilePath, text);
  }
  async saveNavFile() {
    if (!this.navFilePath) return;
    const text = new XMLSerializer().serializeToString(this.navDoc);
    this.zip.file(this.navFilePath, text);
  }
  async saveMetadata(data) {
    const keys = Object.keys(data);
    const doc = this.opfDoc;
    let metadataEl = doc.getElementsByTagName("metadata")[0];
    if (metadataEl === void 0) {
      const newEl = doc.createElement("metadata");
      doc.appendChild(newEl);
      metadataEl = newEl;
    }
    for (const key of keys) {
      const tag = `dc:${key}`;
      const el = doc.getElementsByTagName(tag)[0];
      if (el === void 0) {
        if (!data[key].trim()) continue;
        const newEl = doc.createElement(tag);
        newEl.innerHTML = data[key];
        metadataEl.appendChild(newEl);
      } else {
        el.innerHTML = data[key];
      }
    }
  }
  async getBlob() {
    this.normalizeCoverMetadata();
    await this.saveOpfFile();
    await this.saveNcxFile();
    await this.saveNavFile();
    const mimetypeFile = this.zip.file("mimetype");
    if (mimetypeFile) {
      const mimetype = await mimetypeFile.async("string");
      this.zip.file("mimetype", mimetype, { compression: "STORE" });
    }
    return await this.zip.generateAsync({
      type: "blob",
      compression: "DEFLATE",
      mimeType: "application/epub+zip"
    });
  }
};

// dist/_editor-entry.ts
var import_jszip_min = __toESM(require_jszip_min());
var export_JSZip = import_jszip_min.default;
export {
  EpubFile,
  export_JSZip as JSZip,
  ORNAMENT_CLASS,
  decorateChapterDoc,
  ornamentInlineSvg,
  stripChapterOrnaments
};
/*! Bundled license information:

jszip/dist/jszip.min.js:
  (*!
  
  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>
  
  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
  
  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  *)
*/
