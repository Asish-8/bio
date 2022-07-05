(function(E) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_) return;
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var m, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        n = {},
        fa = {},
        q = function(a, b) {
            var c = fa[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        },
        t = function(a, b, c) {
            if (b) a: {
                var d = a.split(".");a = 1 === d.length;
                var e = d[0],
                    f;!a && e in n ? f = n : f = da;
                for (e = 0; e < d.length - 1; e++) {
                    var h = d[e];
                    if (!(h in f)) break a;
                    f = f[h]
                }
                d = d[d.length - 1];c = ea && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ba(n, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === fa[d] && (a = 1E9 * Math.random() >>> 0, fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, fa[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
        };
    t("Symbol", function(a) {
        if (a) return a;
        var b = function(f, h) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, n.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    }, "es6");
    var ha = function(a) {
            a = {
                next: a
            };
            a[q(n.Symbol, "iterator")] = function() {
                return this
            };
            return a
        },
        ia = function(a) {
            return a.raw = a
        },
        u = function(a) {
            var b = "undefined" != typeof n.Symbol && q(n.Symbol, "iterator") && a[q(n.Symbol, "iterator")];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ja = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        v = function(a) {
            return a instanceof Array ? a : ja(u(a))
        },
        ka = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        ma = ea && "function" == typeof q(Object, "assign") ? q(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ka(d, e) && (a[e] = d[e])
            }
            return a
        };
    t("Object.assign", function(a) {
        return a || ma
    }, "es6");
    var na = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        oa;
    if (ea && "function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa,
        w = function(a, b) {
            a.prototype = na(b.prototype);
            a.prototype.constructor = a;
            if (sa) sa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Sa = b.prototype
        },
        x = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    t("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var h = d[f];
                    if (b.call(c, h, f, d)) {
                        b = h;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    t("WeakMap", function(a) {
        function b() {}

        function c(h) {
            var g = typeof h;
            return "object" === g && null !== h || "function" === g
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var h = Object.seal({}),
                        g = Object.seal({}),
                        k = new a([
                            [h, 2],
                            [g, 3]
                        ]);
                    if (2 != k.get(h) || 3 != k.get(g)) return !1;
                    k.delete(h);
                    k.set(g, 4);
                    return !k.has(h) && 4 == k.get(g)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(h) {
                this.g = (e += Math.random() + 1).toString();
                if (h) {
                    h = u(h);
                    for (var g; !(g = h.next()).done;) g = g.value, this.set(g[0], g[1])
                }
            };
        f.prototype.set = function(h, g) {
            if (!c(h)) throw Error("Invalid WeakMap key");
            if (!ka(h, d)) {
                var k = new b;
                ba(h, d, {
                    value: k
                })
            }
            if (!ka(h, d)) throw Error("WeakMap key fail: " + h);
            h[d][this.g] = g;
            return this
        };
        f.prototype.get = function(h) {
            return c(h) && ka(h, d) ? h[d][this.g] : void 0
        };
        f.prototype.has = function(h) {
            return c(h) && ka(h, d) && ka(h[d], this.g)
        };
        f.prototype.delete = function(h) {
            return c(h) && ka(h, d) && ka(h[d], this.g) ? delete h[d][this.g] : !1
        };
        return f
    }, "es6");
    t("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var g = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [g, "s"]
                        ]));
                    if ("s" != k.get(g) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        p = l.next();
                    if (p.done || p.value[0] != g || "s" != p.value[1]) return !1;
                    p = l.next();
                    return p.done || 4 != p.value[0].x || "t" != p.value[1] || !l.next().done ? !1 : !0
                } catch (r) {
                    return !1
                }
            }()) return a;
        var b = new n.WeakMap,
            c = function(g) {
                this.h = {};
                this.g = f();
                this.size = 0;
                if (g) {
                    g = u(g);
                    for (var k; !(k = g.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(g, k) {
            g = 0 === g ? 0 : g;
            var l = d(this, g);
            l.list || (l.list = this.h[l.id] = []);
            l.m ? l.m.value = k : (l.m = {
                next: this.g,
                s: this.g.s,
                head: this.g,
                key: g,
                value: k
            }, l.list.push(l.m), this.g.s.next = l.m, this.g.s = l.m, this.size++);
            return this
        };
        c.prototype.delete = function(g) {
            g = d(this, g);
            return g.m && g.list ? (g.list.splice(g.index, 1), g.list.length || delete this.h[g.id], g.m.s.next = g.m.next, g.m.next.s = g.m.s, g.m.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.h = {};
            this.g = this.g.s = f();
            this.size = 0
        };
        c.prototype.has = function(g) {
            return !!d(this, g).m
        };
        c.prototype.get = function(g) {
            return (g = d(this, g).m) && g.value
        };
        c.prototype.entries = function() {
            return e(this, function(g) {
                return [g.key, g.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(g) {
                return g.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(g) {
                return g.value
            })
        };
        c.prototype.forEach = function(g, k) {
            for (var l = this.entries(), p; !(p = l.next()).done;) p = p.value, g.call(k, p[1], p[0], this)
        };
        c.prototype[q(n.Symbol, "iterator")] = c.prototype.entries;
        var d = function(g, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++h, b.set(k, l)) : l = "p_" + k;
                var p = g.h[l];
                if (p && ka(g.h, l))
                    for (g = 0; g < p.length; g++) {
                        var r = p[g];
                        if (k !== k && r.key !== r.key || k === r.key) return {
                            id: l,
                            list: p,
                            index: g,
                            m: r
                        }
                    }
                return {
                    id: l,
                    list: p,
                    index: -1,
                    m: void 0
                }
            },
            e = function(g, k) {
                var l = g.g;
                return ha(function() {
                    if (l) {
                        for (; l.head != g.g;) l = l.s;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var g = {};
                return g.s = g.next = g.head = g
            },
            h = 0;
        return c
    }, "es6");
    var ta = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[q(n.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    t("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    var ua = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    t("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (h) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.g = new n.Map;
            if (c) {
                c = u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return q(this.g, "values").call(this.g)
        };
        b.prototype.keys = q(b.prototype, "values");
        b.prototype[q(n.Symbol, "iterator")] = q(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    t("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var h = 0; h < f && c < e;)
                if (d[c++] != b[h++]) return !1;
            return h >= f
        }
    }, "es6");
    t("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = ua(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    t("globalThis", function(a) {
        return a || da
    }, "es_2020");
    t("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? q(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    t("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ta(this, function(b) {
                return b
            })
        }
    }, "es6");
    t("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ta(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    t("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    t("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || q(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    t("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== ua(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var y = this || self,
        va = function(a) {
            a = a.split(".");
            for (var b = y, c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        ya = function(a) {
            return Object.prototype.hasOwnProperty.call(a, wa) && a[wa] || (a[wa] = ++xa)
        },
        wa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        xa = 0,
        za = function(a, b) {
            a = a.split(".");
            var c = y;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };
    var Aa = {};
    var Ba = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Ja = function(a) {
            if (!Ca.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Da, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ea, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Fa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ga, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ha, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ia, "&#0;"));
            return a
        },
        Da = /&/g,
        Ea = /</g,
        Fa = />/g,
        Ga = /"/g,
        Ha = /'/g,
        Ia = /\x00/g,
        Ca = /[\x00&<>"']/,
        La = function(a, b) {
            var c = 0;
            a = Ba(String(a)).split(".");
            b = Ba(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    h = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == h[0].length) break;
                    c = Ka(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Ka(0 == f[2].length, 0 == h[2].length) || Ka(f[2], h[2]);
                    f = f[3];
                    h = h[3]
                } while (0 == c)
            }
            return c
        },
        Ka = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };

    function Ma() {
        var a = y.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function Na(a) {
        return -1 != Ma().indexOf(a)
    };
    var Oa = function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        },
        Pa = function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        },
        Qa = function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        };

    function Ra(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Sa(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ta(a, b) {
        return 0 <= Array.prototype.indexOf.call(a, b, void 0)
    };
    var Ua = {},
        Va = null,
        Ya = function(a) {
            var b;
            void 0 === b && (b = 0);
            Xa();
            b = Ua[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var h = a[e],
                    g = a[e + 1],
                    k = a[e + 2],
                    l = b[h >> 2];
                h = b[(h & 3) << 4 | g >> 4];
                g = b[(g & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = l + h + g + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        $a = function(a) {
            var b = [];
            Za(a, function(c) {
                b.push(c)
            });
            return b
        },
        Za = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        p = Va[l];
                    if (null != p) return p;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            Xa();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    h = c(64),
                    g = c(64);
                if (64 === g && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != h && (b(f << 4 & 240 | h >> 2), 64 != g && b(h << 6 & 192 | g))
            }
        },
        Xa = function() {
            if (!Va) {
                Va = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Ua[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Va[f] && (Va[f] = e)
                    }
                }
            }
        };
    var ab = "undefined" !== typeof Uint8Array,
        bb = {};
    var cb, db = function(a) {
        if (bb !== bb) throw Error("illegal external caller");
        this.U = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    };
    db.prototype.isEmpty = function() {
        return null == this.U
    };
    var eb = "function" === typeof n.Symbol && "symbol" === typeof(0, n.Symbol)() ? (0, n.Symbol)(void 0) : void 0;

    function fb(a, b) {
        Object.isFrozen(a) || (eb ? a[eb] |= b : void 0 !== a.C ? a.C |= b : Object.defineProperties(a, {
            C: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function gb(a) {
        var b;
        eb ? b = a[eb] : b = a.C;
        return null == b ? 0 : b
    }

    function hb(a) {
        fb(a, 1);
        return a
    }

    function z(a) {
        return Array.isArray(a) ? !!(gb(a) & 2) : !1
    }

    function ib(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        fb(a, 2)
    }

    function jb(a, b) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as mutable");
        b ? fb(a, 8) : Object.isFrozen(a) || (eb ? a[eb] &= -9 : void 0 !== a.C && (a.C &= -9))
    };

    function kb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var lb, mb = Object.freeze(hb([])),
        nb = function(a) {
            if (z(a.j)) throw Error("Cannot mutate an immutable Message");
        },
        ob = "undefined" != typeof n.Symbol && "undefined" != typeof n.Symbol.hasInstance;

    function pb(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function qb(a, b) {
        var c = void 0 === c ? !1 : c;
        if (Array.isArray(a)) return new b(a);
        if (c) return new b
    };

    function rb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (ab && null != a && a instanceof Uint8Array) return Ya(a);
                    if (a instanceof db) {
                        var b = a.U;
                        b = null == b || "string" === typeof b ? b : ab && b instanceof Uint8Array ? Ya(b) : null;
                        return null == b ? "" : a.U = b
                    }
                }
        }
        return a
    };

    function sb(a) {
        var b = tb;
        b = void 0 === b ? ub : b;
        return vb(a, b)
    }

    function wb(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = vb(a, b);
            else if (kb(a)) {
                var c = {},
                    d;
                for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = wb(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    }

    function vb(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = wb(c[d], b);
        Array.isArray(a) && gb(a) & 1 && hb(c);
        return c
    }

    function tb(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = rb(a);
        return Array.isArray(a) ? sb(a) : a
    }

    function ub(a) {
        return ab && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    };
    var xb = function(a) {
            return a.h || (a.h = a.j[a.i + a.A] = {})
        },
        B = function(a, b, c) {
            return -1 === b ? null : b >= a.i ? a.h ? a.h[b] : void 0 : (void 0 === c ? 0 : c) && a.h && (c = a.h[b], null != c) ? c : a.j[b + a.A]
        },
        C = function(a, b, c, d, e) {
            d = void 0 === d ? !1 : d;
            (void 0 === e ? 0 : e) || nb(a);
            b < a.i && !d ? a.j[b + a.A] = c : xb(a)[b] = c;
            return a
        },
        yb = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            var e = B(a, b, d);
            Array.isArray(e) || (e = mb);
            if (z(a.j)) c && (ib(e), Object.freeze(e));
            else if (e === mb || z(e)) e = hb(e.slice()), C(a, b, e, d);
            return e
        },
        D = function(a, b, c) {
            a = B(a, b);
            return null == a ? c : a
        },
        zb = function(a, b) {
            a = B(a, b);
            a = null == a ? a : !!a;
            return null == a ? !1 : a
        },
        Ab = function(a, b) {
            a = B(a, b);
            a = null == a ? a : +a;
            return null == a ? 0 : a
        },
        Bb = function(a, b, c) {
            null == c ? c = mb : hb(c);
            return C(a, b, c)
        };

    function F(a, b, c, d) {
        nb(a);
        c !== d ? C(a, b, c) : C(a, b, void 0, !1);
        return a
    }
    var Db = function(a, b, c, d) {
            nb(a);
            (c = Cb(a, c)) && c !== b && null != d && (a.g && c in a.g && (a.g[c] = void 0), C(a, c));
            return C(a, b, d)
        },
        Cb = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != B(a, e) && (0 !== c && C(a, c, void 0, !1, !0), c = e)
            }
            return c
        },
        G = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            if (-1 === c) var e = null;
            else a.g || (a.g = {}), e = a.g[c], e || (b = qb(B(a, c, d), b), void 0 != b && (a.g[c] = b, z(a.j) && ib(b.j), e = b));
            if (null == e) return e;
            z(e.j) && !z(a.j) && (e = e.S(Aa), C(a, c, e.j, d), a.g[c] = e);
            return e
        },
        H = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            var e = z(a.j),
                f = e;
            f = void 0 === f ? !0 : f;
            a.g || (a.g = {});
            var h = z(a.j);
            var g = a.g[c];
            var k = yb(a, c, !0, d),
                l = h || z(k);
            if (!g) {
                g = [];
                h = h || l;
                for (var p = 0; p < k.length; p++) {
                    var r = k[p];
                    h = h || z(r);
                    r = qb(r, b);
                    void 0 !== r && (g.push(r), l && ib(r.j))
                }
                a.g[c] = g;
                jb(k, !h)
            }
            b = l || f;
            f = z(g);
            b && !f && (Object.isFrozen(g) && (a.g[c] = g = g.slice()), ib(g), Object.freeze(g));
            !b && f && (a.g[c] = g = g.slice());
            a = yb(a, c, d);
            if (!(c = e) && (c = a)) {
                if (!Array.isArray(a)) throw Error("cannot check mutability state of non-array");
                c = !(gb(a) & 8)
            }
            if (c) {
                for (c = 0; c < g.length; c++)(d = g[c]) && z(d.j) && !e && (g[c] = g[c].S(Aa), a[c] = g[c].j);
                jb(a, !0)
            }
            return g
        },
        Gb = function(a, b, c) {
            nb(a);
            a.g || (a.g = {});
            var d = null != c ? c.j : c;
            a.g[b] = c;
            return C(a, b, d)
        },
        Hb = function(a, b, c, d) {
            nb(a);
            a.g || (a.g = {});
            var e = null != d ? d.j : d;
            a.g[b] = d;
            return Db(a, b, c, e)
        },
        Ib = function(a, b, c) {
            nb(a);
            if (null != c) {
                var d = hb([]);
                for (var e = !1, f = 0; f < c.length; f++) d[f] = c[f].j, e = e || z(d[f]);
                a.g || (a.g = {});
                a.g[b] = c;
                jb(d, !e)
            } else a.g && (a.g[b] = void 0), d = mb;
            return C(a, b, d)
        },
        Jb = function(a, b) {
            return D(a, b, "")
        },
        Kb = function(a, b, c) {
            b = Cb(a, c) === b ? b : -1;
            return D(a, b, 0)
        };
    var Mb = function(a, b, c) {
        a || (a = Lb);
        Lb = null;
        var d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.A = (d ? 0 : -1) - (this.constructor.g || 0);
        this.g = void 0;
        this.j = a;
        a: {
            d = this.j.length;a = d - 1;
            if (d && (d = this.j[a], kb(d))) {
                this.i = a - this.A;
                this.h = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.i = Math.max(b, a + 1 - this.A), this.h = void 0) : this.i = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.i) a += this.A, (d = this.j[a]) ? Array.isArray(d) && hb(d) : this.j[a] = mb;
                else {
                    d = xb(this);
                    var e = d[a];
                    e ? Array.isArray(e) && hb(e) : d[a] = mb
                }
    };
    Mb.prototype.toJSON = function() {
        var a = this.j;
        return lb ? a : sb(a)
    };

    function Nb(a, b) {
        return rb(b)
    }
    var Lb;
    var Ob = function() {
        Mb.apply(this, arguments)
    };
    w(Ob, Mb);
    Ob.prototype.S = function() {
        return this
    };
    if (ob) {
        var Pb = {};
        Object.defineProperties(Ob, (Pb[n.Symbol.hasInstance] = pb(function() {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        }), Pb))
    };

    function Qb(a, b, c, d, e, f) {
        (a = a.g && a.g[c]) ? Array.isArray(a) ? (e = f.M ? hb(a.slice()) : a, Ib(b, c, e)) : Gb(b, c, a): (ab && d instanceof Uint8Array ? e = d.length ? new db(new Uint8Array(d)) : cb || (cb = new db(null)) : (Array.isArray(d) && (e ? ib(d) : Array.isArray(d) && gb(d) & 1 && f.M && (d = d.slice())), e = d), C(b, c, e))
    };
    var I = function() {
        Ob.apply(this, arguments)
    };
    w(I, Ob);
    I.prototype.S = function(a) {
        if (a !== Aa) throw Error("requires a valid immutable API token");
        if (z(this.j)) {
            a = {
                M: !0
            };
            var b = z(this.j);
            if (b && !a.M) throw Error("copyRepeatedFields must be true for frozen messages");
            var c = new this.constructor;
            this.ka && (c.ka = this.ka.slice());
            for (var d = this.j, e = 0; e < d.length; e++) {
                var f = d[e];
                if (e === d.length - 1 && kb(f))
                    for (g in f) {
                        if (Object.prototype.hasOwnProperty.call(f, g)) {
                            var h = +g;
                            q(Number, "isNaN").call(Number, h) ? xb(c)[g] = f[g] : Qb(this, c, h, f[g], b, a)
                        }
                    } else Qb(this, c, e - this.A, f, b, a)
            }
            var g = c
        } else g = this;
        return g
    };
    if (ob) {
        var Rb = {};
        Object.defineProperties(I, (Rb[n.Symbol.hasInstance] = pb(Object[n.Symbol.hasInstance]), Rb))
    };
    var Ub = function(a, b) {
        this.h = a === Sb && b || "";
        this.i = Tb
    };
    Ub.prototype.F = !0;
    Ub.prototype.g = function() {
        return this.h
    };
    var Vb = function(a) {
            return a instanceof Ub && a.constructor === Ub && a.i === Tb ? a.h : "type_error:Const"
        },
        J = function(a) {
            return new Ub(Sb, a)
        },
        Tb = {},
        Sb = {};
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Wb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    var Xb = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var K = function(a, b) {
        this.i = b === Yb ? a : ""
    };
    K.prototype.toString = function() {
        return this.i + ""
    };
    K.prototype.F = !0;
    K.prototype.g = function() {
        return this.i.toString()
    };
    K.prototype.N = !0;
    K.prototype.h = function() {
        return 1
    };
    var cc = function(a, b) {
            a = Zb.exec($b(a).toString());
            var c = a[3] || "";
            return ac(a[1] + bc("?", a[2] || "", b) + bc("#", c))
        },
        $b = function(a) {
            return a instanceof K && a.constructor === K ? a.i : "type_error:TrustedResourceUrl"
        },
        Zb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        dc = function(a) {
            for (var b = "", c = 0; c < a.length; c++) b += Vb(a[c]);
            return ac(b)
        },
        Yb = {},
        ac = function(a) {
            return new K(a, Yb)
        },
        bc = function(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var h = e[f];
                        null != h && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
                    }
                }
            return b
        };
    var L = function(a, b) {
        this.i = b === ec ? a : ""
    };
    L.prototype.toString = function() {
        return this.i.toString()
    };
    L.prototype.F = !0;
    L.prototype.g = function() {
        return this.i.toString()
    };
    L.prototype.N = !0;
    L.prototype.h = function() {
        return 1
    };
    var fc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        gc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        ec = {},
        hc = new L("about:invalid#zClosurez", ec);
    var ic = {},
        jc = function(a, b, c) {
            this.i = c === ic ? a : "";
            this.l = b;
            this.F = this.N = !0
        };
    jc.prototype.h = function() {
        return this.l
    };
    jc.prototype.g = function() {
        return this.i.toString()
    };
    jc.prototype.toString = function() {
        return this.i.toString()
    };
    var kc = function(a) {
            return a instanceof jc && a.constructor === jc ? a.i : "type_error:SafeHtml"
        },
        mc = function(a) {
            if (a instanceof jc) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.N && (c = a.h());
            return lc(Ja(b && a.F ? a.g() : String(a)), c)
        },
        qc = function(a, b) {
            var c = {
                    src: a
                },
                d = {};
            a = {};
            for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
            for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f]);
            if (b)
                for (var h in b)
                    if (Object.prototype.hasOwnProperty.call(b, h)) {
                        e = h.toLowerCase();
                        if (e in c) throw Error("");
                        e in d && delete a[e];
                        a[h] = b[h]
                    }
            var g;
            b = null;
            h = "";
            if (a)
                for (k in a)
                    if (Object.prototype.hasOwnProperty.call(a, k)) {
                        if (!nc.test(k)) throw Error("");
                        d = a[k];
                        if (null != d) {
                            c = k;
                            if (d instanceof Ub) d = Vb(d);
                            else {
                                if ("style" == c.toLowerCase()) throw Error("");
                                if (/^on/i.test(c)) throw Error("");
                                if (c.toLowerCase() in oc)
                                    if (d instanceof K) d = $b(d).toString();
                                    else if (d instanceof L) d = d instanceof L && d.constructor === L ? d.i : "type_error:SafeUrl";
                                else if ("string" === typeof d) d instanceof L || (d = "object" == typeof d && d.F ? d.g() : String(d), gc.test(d) ? d = new L(d, ec) : (d = String(d), d = d.replace(/(%0A|%0D)/g, ""), d = d.match(fc) ? new L(d, ec) : null)), d = (d || hc).g();
                                else throw Error("");
                            }
                            d.F && (d = d.g());
                            c = c + '="' + Ja(String(d)) + '"';
                            h += " " + c
                        }
                    }
            var k = "<script" + h;
            null == g ? g = [] : Array.isArray(g) || (g = [g]);
            !0 === Xb.script ? k += ">" : (g = pc(g), k += ">" + kc(g).toString() + "\x3c/script>", b = g.h());
            (a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? b = 0 : b = null);
            return lc(k, b)
        },
        sc = function(a) {
            var b = mc(rc),
                c = b.h(),
                d = [],
                e = function(f) {
                    Array.isArray(f) ? f.forEach(e) : (f = mc(f), d.push(kc(f).toString()), f = f.h(), 0 == c ? c = f : 0 != f && c != f && (c = null))
                };
            a.forEach(e);
            return lc(d.join(kc(b).toString()), c)
        },
        pc = function(a) {
            return sc(Array.prototype.slice.call(arguments))
        },
        lc = function(a, b) {
            return new jc(a, b, ic)
        },
        nc = /^[a-zA-Z0-9-]+$/,
        oc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        rc = new jc(y.trustedTypes && y.trustedTypes.emptyHTML || "", 0, ic);

    function tc(a) {
        var b = x.apply(1, arguments);
        if (0 === b.length) return ac(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return ac(c.join(""))
    };

    function uc(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function vc(a, b) {
        a.write(kc(b))
    };
    var wc = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var xc = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var zc = function() {
            a: {
                var a = y.document;
                if (a.querySelector && (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && yc.test(a)) break a;a = ""
            }
            return a
        },
        yc = /^[\w+/_-]+[=]{0,2}$/;
    var Ac = function() {
        return Na("iPad") || Na("Android") && !Na("Mobile") || Na("Silk")
    };
    var Bc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Cc = function(a) {
            return a ? decodeURI(a) : a
        },
        Dc = /#|$/,
        Ec = function(a, b) {
            var c = a.search(Dc);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        };
    var Ic = function(a, b) {
            if (!Fc() && !Gc()) {
                var c = Math.random();
                if (c < b) return c = Hc(), a[Math.floor(c * a.length)]
            }
            return null
        },
        Hc = function() {
            if (!n.globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                n.globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        Jc = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        Kc = function(a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        },
        Gc = wc(function() {
            return Array.prototype.some.call(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Lc, void 0) || 1E-4 > Math.random()
        }),
        Fc = wc(function() {
            return Lc("MSIE")
        }),
        Lc = function(a) {
            return -1 != Ma().indexOf(a)
        },
        Mc = /^(-?[0-9.]{1,30})$/,
        Nc = function(a) {
            var b = void 0 === b ? null : b;
            if (!Mc.test(a)) return b;
            a = Number(a);
            return isNaN(a) ? b : a
        },
        Oc = wc(function() {
            return !Ac() && (Na("iPod") || Na("iPhone") || Na("Android") || Na("IEMobile")) ? 2 : Ac() ? 1 : 0
        }),
        Pc = function(a, b) {
            a = void 0 === a ? "" : a;
            b = void 0 === b ? window : b;
            return (b = Cc(b.location.href.match(Bc)[3] || null)) ? Kc(b + a) : null
        },
        Rc = function(a, b) {
            0 != a.length && b.head && a.forEach(function(c) {
                if (c && c && b.head) {
                    var d = Qc("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
            })
        },
        Sc = function(a) {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * Math.pow(2, 52)),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        Qc = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };
    var Tc = {
        Ia: 0,
        Ha: 1,
        Ea: 2,
        za: 3,
        Fa: 4,
        Aa: 5,
        Ga: 6,
        Ca: 7,
        Da: 8,
        ya: 9,
        Ba: 10
    };
    var Uc = {
        Ka: 0,
        La: 1,
        Ja: 2
    };
    var Vc = "a".charCodeAt(),
        Wc = Wb(Tc),
        Xc = Wb(Uc);
    var Yc = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.h = a;
            this.g = 0
        },
        ad = function(a) {
            var b = M(a, 16);
            return !0 === !!M(a, 1) ? (a = Zc(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : $c(a, b)
        },
        Zc = function(a) {
            for (var b = M(a, 12), c = []; b--;) {
                var d = !0 === !!M(a, 1),
                    e = M(a, 16);
                if (d)
                    for (d = M(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, h) {
                return f - h
            });
            return c
        },
        $c = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (M(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        },
        M = function(a, b) {
            if (a.g + b > a.h.length) throw Error("Requested length " + b + " is past end of string.");
            var c = a.h.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
    var cd = function(a, b) {
            try {
                var c = $a(a.split(".")[0]).map(function(e) {
                        return (m = e.toString(2), q(m, "padStart")).call(m, 8, "0")
                    }).join(""),
                    d = new Yc(c);
                c = {};
                c.tcString = a;
                c.gdprApplies = !0;
                d.g += 78;
                c.cmpId = M(d, 12);
                c.cmpVersion = M(d, 12);
                d.g += 30;
                c.tcfPolicyVersion = M(d, 6);
                c.isServiceSpecific = !!M(d, 1);
                c.useNonStandardStacks = !!M(d, 1);
                c.specialFeatureOptins = bd($c(d, 12, Xc), Xc);
                c.purpose = {
                    consents: bd($c(d, 24, Wc), Wc),
                    legitimateInterests: bd($c(d, 24, Wc), Wc)
                };
                c.purposeOneTreatment = !!M(d, 1);
                c.publisherCC = String.fromCharCode(Vc + M(d, 6)) + String.fromCharCode(Vc + M(d, 6));
                c.vendor = {
                    consents: bd(ad(d), b),
                    legitimateInterests: bd(ad(d), b)
                };
                return c
            } catch (e) {
                return null
            }
        },
        bd = function(a, b) {
            var c = {};
            if (Array.isArray(b) && 0 !== b.length) {
                b = u(b);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
            } else
                for (a = u(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
            delete c[0];
            return c
        };

    function dd(a) {
        return function() {
            var b = x.apply(0, arguments);
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    }
    var ed = dd(function(a) {
        var b = [],
            c = {};
        a = u(a);
        for (var d = a.next(); !d.done; c = {
                G: c.G
            }, d = a.next()) c.G = d.value, dd(function(e) {
            return function() {
                var f = {};
                b.push([(f[e.G.na] = e.G.message.toJSON(), f)])
            }
        }(c))();
        return JSON.stringify([b])
    });
    var fd = function(a, b) {
        if (n.globalThis.fetch) n.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        });
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };

    function gd(a) {
        a.ma.apply(a, v(x.apply(1, arguments).map(function(b) {
            return {
                na: 2,
                message: b
            }
        })))
    }

    function hd(a) {
        a.ma.apply(a, v(x.apply(1, arguments).map(function(b) {
            return {
                na: 4,
                message: b
            }
        })))
    };
    var id = function(a) {
        var b = void 0 === b ? fd : b;
        this.l = void 0 === a ? 1E3 : a;
        this.i = b;
        this.h = [];
        this.g = null
    };
    id.prototype.ma = function() {
        var a = x.apply(0, arguments),
            b = this;
        dd(function() {
            b.h.push.apply(b.h, v(a));
            var c = dd(function() {
                var d = ed(b.h);
                b.i("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                b.h = [];
                b.g = null
            });
            100 <= b.h.length ? (null !== b.g && clearTimeout(b.g), b.g = setTimeout(c, 0)) : null === b.g && (b.g = setTimeout(c, b.l))
        })()
    };
    var jd = function(a, b) {
            this.g = a;
            this.defaultValue = void 0 === b ? !1 : b
        },
        kd = function(a) {
            this.g = a;
            this.defaultValue = 0
        },
        ld = function(a, b) {
            b = void 0 === b ? [] : b;
            this.g = a;
            this.defaultValue = b
        };
    var md = new jd(427549339),
        nd = new kd(428094087),
        od = new kd(24),
        pd = new ld(1934, ["AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A/9La288e7MDEU2ifusFnMg1C2Ij6uoa/Z/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]),
        qd = new jd(203),
        rd = new jd(434462125, !0),
        sd = new jd(1928),
        td = new jd(1941),
        ud = new jd(370946349),
        vd = new jd(392736476),
        wd = new kd(406149835),
        xd = new ld(1932),
        yd = new kd(432059203),
        zd = new kd(1935);
    var Ad = function() {
            this.g = {}
        },
        Ed = function() {
            var a = Bd;
            Cd || (Cd = new Dd);
            var b = Cd.g[a.key];
            if ("proto" === a.valueType) {
                try {
                    var c = JSON.parse(b);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return a.defaultValue
            }
            return typeof b === typeof a.defaultValue ? b : a.defaultValue
        };
    var Fd = function(a) {
        I.call(this, a)
    };
    w(Fd, I);
    var Gd = function(a) {
        I.call(this, a)
    };
    w(Gd, I);
    var Hd = function(a) {
        I.call(this, a)
    };
    w(Hd, I);
    var Id = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25];
    var Jd = function() {
        this.i = this.i;
        this.l = this.l
    };
    Jd.prototype.i = !1;
    Jd.prototype.T = function() {
        if (this.l)
            for (; this.l.length;) this.l.shift()()
    };
    var Kd = function() {};
    var Md = function(a) {
        I.call(this, a, -1, Ld)
    };
    w(Md, I);
    var Nd = function(a) {
        I.call(this, a)
    };
    w(Nd, I);
    var Od = function(a) {
        I.call(this, a)
    };
    w(Od, I);
    var Ld = [7];
    var Pd = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    Pd.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Pa;
            d = c.Qa || !1;
            var f = c.domain || void 0;
            var h = c.path || void 0;
            var g = c.ua
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === g && (g = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (h ? ";path=" + h : "") + (0 > g ? "" : 0 == g ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * g)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    Pd.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ba(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Pd.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    Pd.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ba(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            ua: 0,
            path: void 0,
            domain: void 0
        })
    };
    var Bd = new function() {
        this.key = "45368529";
        this.defaultValue = !1;
        this.valueType = "boolean"
    };
    var Dd = function() {
            this.g = {};
            var a = y.__fcexpdef || "";
            try {
                var b = JSON.parse(a)[0];
                a = "";
                for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                this.g = JSON.parse(a)
            } catch (d) {}
        },
        Cd;
    w(Dd, Ad);

    function Qd(a) {
        return (a = Rd(a)) ? G(a, Nd, 4) : null
    }

    function Rd(a) {
        if (a = (new Pd(a)).get("FCCDCF", ""))
            if (Ed())
                if (q(a, "startsWith").call(a, "%")) try {
                    var b = decodeURIComponent(a)
                } catch (f) {
                    Sd(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            if (b)
                if (null == b || "" == b) var c = new Md;
                else {
                    var d = JSON.parse(b);
                    if (!Array.isArray(d)) throw c = typeof d, Error("Expected to deserialize an Array but got " + ("object" != c ? c : d ? Array.isArray(d) ? "array" : c : "null") + ": " + d);
                    Lb = d;
                    var e = new Md(d);
                    Lb = null;
                    c = e
                }
            else c = null;
            return c
        } catch (f) {
            return Sd(2), null
        }
    }

    function Sd(a) {
        new Kd;
        var b = new Gd;
        a = C(b, 7, a);
        b = new Fd;
        a = Gb(b, 1, a);
        b = new Hd;
        Hb(b, 22, Id, a)
    };
    Wb(Tc).map(function(a) {
        return Number(a)
    });
    Wb(Uc).map(function(a) {
        return Number(a)
    });
    var Td = function(a) {
            this.g = a;
            this.h = null
        },
        Vd = function(a) {
            a.__tcfapiPostMessageReady || Ud(new Td(a))
        },
        Ud = function(a) {
            a.h = function(b) {
                var c = "string" == typeof b.data;
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__tcfapiCall;
                !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, function(f, h) {
                    var g = {};
                    g.__tcfapiReturn = "removeEventListener" === e.command ? {
                        success: f,
                        callId: e.callId
                    } : {
                        returnValue: f,
                        success: h,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(g) : g;
                    b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                    return f
                }, e.parameter)
            };
            a.g.addEventListener("message", a.h);
            a.g.__tcfapiPostMessageReady = !0
        };
    var Wd = function(a, b) {
        var c = a.document,
            d = function() {
                if (!a.frames[b])
                    if (c.body) {
                        var e = Qc("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var Xd = function(a) {
            this.g = a;
            this.h = a.document;
            this.o = (a = (a = Rd(this.h)) ? G(a, Od, 5) || null : null) ? B(a, 2) : null;
            this.i = (a = Qd(this.h)) && null != B(a, 1) ? B(a, 1) : null;
            this.l = (a = Qd(this.h)) && null != B(a, 2) ? B(a, 2) : null
        },
        $d = function(a) {
            a.__uspapi || a.frames.__uspapiLocator || (a = new Xd(a), Yd(a), Zd(a))
        },
        Yd = function(a) {
            !a.o || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", Wd(a.g, "__uspapiLocator"), za("__uspapi", function() {
                return a.D.apply(a, v(x.apply(0, arguments)))
            }))
        };
    Xd.prototype.D = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.o
        }, !0)
    };
    var Zd = function(a) {
        !a.i || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", Wd(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], za("__tcfapi", function() {
            return a.u.apply(a, v(x.apply(0, arguments)))
        }), Vd(a.g))
    };
    Xd.prototype.u = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.g.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(ae(this, d, null), !0) : c(null, !1);
                    break;
                case "ping":
                    c({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    a = b.push(c);
                    c(ae(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ? (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
            }
    };
    var ae = function(a, b, c) {
        if (!a.i) return null;
        b = cd(a.i, b);
        b.addtlConsent = null != a.l ? a.l : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };
    var be = void 0;

    function ce() {
        var a = !N(ee).g,
            b = be;
        be = void 0;
        if (!a) {
            if (b) throw Error(b());
            throw Error(String(a));
        }
    };
    var fe = function(a) {
        return "string" === typeof a
    };
    var he = function(a) {
        I.call(this, a, -1, ge)
    };
    w(he, I);
    var ie = function(a, b) {
            return Gb(a, 1, b)
        },
        je = function(a, b) {
            return Ib(a, 2, b)
        },
        ke = function(a, b) {
            return Bb(a, 4, b)
        },
        le = function(a, b) {
            return Ib(a, 5, b)
        },
        me = function(a, b) {
            return F(a, 6, b, 0)
        },
        ne = function(a) {
            I.call(this, a)
        };
    w(ne, I);
    ne.prototype.B = function() {
        return D(this, 1, 0)
    };
    var oe = function(a, b) {
            return F(a, 1, b, 0)
        },
        pe = function(a, b) {
            return F(a, 2, b, 0)
        },
        qe = function(a) {
            I.call(this, a)
        };
    w(qe, I);
    var ge = [2, 4, 5],
        re = [1, 2];
    var te = function(a) {
        I.call(this, a, -1, se)
    };
    w(te, I);
    var ve = function(a) {
        I.call(this, a, -1, ue)
    };
    w(ve, I);
    var se = [2, 3],
        ue = [5],
        we = [1, 2, 3, 4];
    var xe = function(a) {
        I.call(this, a)
    };
    w(xe, I);
    xe.prototype.getTagSessionCorrelator = function() {
        return D(this, 2, 0)
    };
    var ze = function(a) {
            var b = new xe;
            return Hb(b, 4, ye, a)
        },
        ye = [4, 5, 7];
    var Be = function(a) {
        I.call(this, a, -1, Ae)
    };
    w(Be, I);
    var Ae = [3];
    var De = function(a) {
        I.call(this, a, -1, Ce)
    };
    w(De, I);
    var Ce = [4];
    var Fe = function(a) {
        I.call(this, a, -1, Ee)
    };
    w(Fe, I);
    Fe.prototype.getTagSessionCorrelator = function() {
        return D(this, 1, 0)
    };
    var Ee = [2];
    var Ge = function(a) {
        I.call(this, a)
    };
    w(Ge, I);
    var He = [4];
    var Ie = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Je = null,
        Ke = function() {
            if (null === Je) {
                Je = "";
                try {
                    var a = "";
                    try {
                        a = y.top.location.hash
                    } catch (c) {
                        a = y.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        Je = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return Je
        };
    var Me = function(a) {
        I.call(this, a, -1, Le)
    };
    w(Me, I);
    var Le = [2, 8],
        Ne = [3, 4, 5],
        Oe = [6, 7];
    var Pe;
    Pe = {
        Ma: 0,
        oa: 3,
        pa: 4,
        qa: 5
    };
    var Qe = Pe.oa,
        O = Pe.pa,
        Re = Pe.qa,
        Se = function(a) {
            return null != a ? !a : a
        },
        Te = function(a, b) {
            for (var c = !1, d = 0; d < a.length; d++) {
                var e = a[d]();
                if (e === b) return e;
                null == e && (c = !0)
            }
            if (!c) return !b
        },
        Ve = function(a, b) {
            var c = H(a, Me, 2);
            if (!c.length) return Ue(a, b);
            a = D(a, 1, 0);
            if (1 === a) return Se(Ve(c[0], b));
            c = Qa(c, function(d) {
                return function() {
                    return Ve(d, b)
                }
            });
            switch (a) {
                case 2:
                    return Te(c, !1);
                case 3:
                    return Te(c, !0)
            }
        },
        Ue = function(a, b) {
            var c = Cb(a, Ne);
            a: {
                switch (c) {
                    case Qe:
                        var d = Kb(a, 3, Ne);
                        break a;
                    case O:
                        d = Kb(a, 4, Ne);
                        break a;
                    case Re:
                        d = Kb(a, 5, Ne);
                        break a
                }
                d = void 0
            }
            if (d && (b = (b = b[c]) && b[d])) {
                try {
                    var e = b.apply(null, v(yb(a, 8)))
                } catch (f) {
                    return
                }
                b = D(a, 1, 0);
                if (4 === b) return !!e;
                d = null != e;
                if (5 === b) return d;
                if (12 === b) a = Jb(a, 7 === Cb(a, Oe) ? 7 : -1);
                else a: {
                    switch (c) {
                        case O:
                            a = Ab(a, 6 === Cb(a, Oe) ? 6 : -1);
                            break a;
                        case Re:
                            a = Jb(a, 7 === Cb(a, Oe) ? 7 : -1);
                            break a
                    }
                    a = void 0
                }
                if (null != a) {
                    if (6 === b) return e === a;
                    if (9 === b) return null != e && 0 === La(String(e), a);
                    if (d) switch (b) {
                        case 7:
                            return e < a;
                        case 8:
                            return e > a;
                        case 12:
                            return fe(a) && fe(e) && (new RegExp(a)).test(e);
                        case 10:
                            return null != e && -1 === La(String(e), a);
                        case 11:
                            return null != e && 1 === La(String(e), a)
                    }
                }
            }
        },
        We = function(a, b) {
            return !a || !(!b || !Ve(a, b))
        };
    var Ye = function(a) {
        I.call(this, a, -1, Xe)
    };
    w(Ye, I);
    var Xe = [4];
    var Ze = function(a) {
        I.call(this, a)
    };
    w(Ze, I);
    var af = function(a) {
        I.call(this, a, -1, $e)
    };
    w(af, I);
    var $e = [5],
        bf = [1, 2, 3, 6, 7];
    var cf = function(a, b, c) {
            var d = void 0 === d ? new id(b) : d;
            this.h = a;
            this.o = c;
            this.i = d;
            this.g = [];
            this.l = 0 < this.h && Hc() < 1 / this.h
        },
        ef = function(a, b, c, d, e, f) {
            var h = pe(oe(new ne, b), c);
            b = me(je(ie(le(ke(new he, d), e), h), a.g), f);
            b = ze(b);
            a.l && hd(a.i, df(a, b));
            if (1 === f || 3 === f || 4 === f && !a.g.some(function(g) {
                    return g.B() === h.B() && D(g, 2, 0) === c
                })) a.g.push(h), 100 < a.g.length && a.g.shift()
        },
        ff = function(a, b, c, d) {
            if (a.o) {
                var e = new te;
                b = Ib(e, 2, b);
                c = Ib(b, 3, c);
                d && F(c, 1, d, 0);
                d = new xe;
                d = Hb(d, 7, ye, c);
                a.l && hd(a.i, df(a, d))
            }
        },
        df = function(a, b) {
            b = F(b, 1, Date.now(), 0);
            var c = Sc(window);
            b = F(b, 2, c, 0);
            return F(b, 6, a.h, 0)
        };
    var N = function(a) {
        var b = "O";
        if (a.O && a.hasOwnProperty(b)) return a.O;
        b = new a;
        return a.O = b
    };
    var gf = function() {
        var a = {};
        this.g = (a[Qe] = {}, a[O] = {}, a[Re] = {}, a)
    };
    var hf = /^true$/.test("false");
    var jf = hf,
        kf = function(a, b) {
            switch (b) {
                case 1:
                    return Kb(a, 1, bf);
                case 2:
                    return Kb(a, 2, bf);
                case 3:
                    return Kb(a, 3, bf);
                case 6:
                    return Kb(a, 6, bf);
                default:
                    return null
            }
        },
        lf = function(a, b) {
            if (!a) return null;
            switch (b) {
                case 1:
                    return zb(a, 1);
                case 7:
                    return Jb(a, 3);
                case 2:
                    return Ab(a, 2);
                case 3:
                    return Jb(a, 3);
                case 6:
                    return yb(a, 4);
                default:
                    return null
            }
        },
        mf = wc(function() {
            if (!jf) return {};
            try {
                var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
                if (a) return JSON.parse(a)
            } catch (b) {}
            return {}
        }),
        pf = function(a, b, c, d) {
            var e = d = void 0 === d ? 0 : d,
                f, h;
            N(P).i[e] = null != (h = null == (f = N(P).i[e]) ? void 0 : f.add(b)) ? h : (new n.Set).add(b);
            e = mf();
            if (null != e[b]) return e[b];
            b = nf(d)[b];
            if (!b) return c;
            b = new af(b);
            b = of (b);
            a = lf(b, a);
            return null != a ? a : c
        },
        of = function(a) {
            var b = N(gf).g;
            if (b) {
                var c = Sa(H(a, Ze, 5), function(d) {
                    return We(G(d, Me, 1), b)
                });
                if (c) return G(c, Ye, 2)
            }
            return G(a, Ye, 4)
        },
        P = function() {
            this.h = {};
            this.l = [];
            this.i = {};
            this.g = new n.Map
        },
        qf = function(a, b, c) {
            return !!pf(1, a, void 0 === b ? !1 : b, c)
        },
        rf = function(a, b, c) {
            b = void 0 === b ? 0 : b;
            a = Number(pf(2, a, b, c));
            return isNaN(a) ? b : a
        },
        sf = function(a, b, c) {
            return pf(3, a, void 0 === b ? "" : b, c)
        },
        tf = function(a, b, c) {
            b = void 0 === b ? [] : b;
            return pf(6, a, b, c)
        },
        nf = function(a) {
            return N(P).h[a] || (N(P).h[a] = {})
        },
        uf = function(a, b) {
            var c = nf(b);
            Jc(a, function(d, e) {
                return c[e] = d
            })
        },
        vf = function(a, b, c, d, e) {
            e = void 0 === e ? !1 : e;
            var f = [],
                h = [];
            Oa(b, function(g) {
                var k = nf(g);
                Oa(a, function(l) {
                    var p = Cb(l, bf),
                        r = kf(l, p);
                    if (r) {
                        var A, Eb, de;
                        var Fb = null != (de = null == (A = N(P).g.get(g)) ? void 0 : null == (Eb = A.get(r)) ? void 0 : Eb.slice(0)) ? de : [];
                        a: {
                            A = new ve;
                            switch (p) {
                                case 1:
                                    Db(A, 1, we, r);
                                    break;
                                case 2:
                                    Db(A, 2, we, r);
                                    break;
                                case 3:
                                    Db(A, 3, we, r);
                                    break;
                                case 6:
                                    Db(A, 4, we, r);
                                    break;
                                default:
                                    p = void 0;
                                    break a
                            }
                            Bb(A, 5, Fb);p = A
                        }
                        if (Fb = p) {
                            var Wa;
                            Fb = !(null == (Wa = N(P).i[g]) || !Wa.has(r))
                        }
                        Fb && f.push(p);
                        if (Wa = p) {
                            var la;
                            Wa = !(null == (la = N(P).g.get(g)) || !la.has(r))
                        }
                        Wa && h.push(p);
                        e || (la = N(P), la.g.has(g) || la.g.set(g, new n.Map), la.g.get(g).has(r) || la.g.get(g).set(r, []), d && la.g.get(g).get(r).push(d));
                        k[r] = l.toJSON()
                    }
                })
            });
            (f.length || h.length) && ff(c, f, h, null != d ? d : void 0)
        },
        wf = function(a, b) {
            var c = nf(b);
            Oa(a, function(d) {
                var e = new af(d),
                    f = Cb(e, bf);
                (e = kf(e, f)) && (c[e] || (c[e] = d))
            })
        },
        xf = function() {
            return Qa(q(Object, "keys").call(Object, N(P).h), function(a) {
                return Number(a)
            })
        },
        yf = function(a) {
            Ta(N(P).l, a) || uf(nf(4), a)
        };
    var Q = function(a) {
            this.methodName = a
        },
        zf = new Q(1),
        Af = new Q(16),
        Bf = new Q(15),
        Cf = new Q(2),
        Df = new Q(3),
        Ef = new Q(4),
        Ff = new Q(5),
        Gf = new Q(6),
        Hf = new Q(7),
        If = new Q(8),
        Jf = new Q(9),
        Kf = new Q(10),
        Lf = new Q(11),
        Mf = new Q(12),
        Nf = new Q(13),
        Of = new Q(14),
        R = function(a, b, c) {
            c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
                value: b
            })
        },
        S = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        },
        Pf = function(a) {
            R(Ff, qf, a);
            R(Gf, rf, a);
            R(Hf, sf, a);
            R(If, tf, a);
            R(Nf, wf, a);
            R(Bf, yf, a)
        },
        Qf = function(a) {
            R(Ef, function(b) {
                N(gf).g = b
            }, a);
            R(Jf, function(b, c) {
                var d = N(gf);
                d.g[Qe][b] || (d.g[Qe][b] = c)
            }, a);
            R(Kf, function(b, c) {
                var d = N(gf);
                d.g[O][b] || (d.g[O][b] = c)
            }, a);
            R(Lf, function(b, c) {
                var d = N(gf);
                d.g[Re][b] || (d.g[Re][b] = c)
            }, a);
            R(Of, function(b) {
                for (var c = N(gf), d = u([Qe, O, Re]), e = d.next(); !e.done; e = d.next()) e = e.value, q(Object, "assign").call(Object, c.g[e], b[e])
            }, a)
        },
        Rf = function(a) {
            a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
                value: !0
            })
        };
    var Sf = function() {
            this.h = function() {};
            this.g = function() {
                return []
            }
        },
        Tf = function(a, b, c) {
            a.h = function(d) {
                S(Cf, b, function() {
                    return []
                })(d, c)
            };
            a.g = function() {
                return S(Df, b, function() {
                    return []
                })(c)
            }
        };

    function Uf(a, b) {
        b = void 0 === b ? window.document : b;
        Rc(a, b)
    };
    var Vf = function(a, b) {
            try {
                var c = a.split(".");
                a = y;
                for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
                var f = a;
                if (typeof f === b) return f
            } catch (h) {}
        },
        Wf = function() {
            var a = {};
            this[Qe] = (a[8] = function(b) {
                try {
                    return null != va(b)
                } catch (c) {}
            }, a[9] = function(b) {
                try {
                    var c = va(b)
                } catch (d) {
                    return
                }
                if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
                return b
            }, a[10] = function() {
                return window == window.top
            }, a[6] = function(b) {
                return Ta(N(Sf).g(), parseInt(b, 10))
            }, a[27] = function(b) {
                b = Vf(b, "boolean");
                return void 0 !== b ? b : void 0
            }, a[60] = function(b) {
                try {
                    return !!y.document.querySelector(b)
                } catch (c) {}
            }, a[69] = function(b) {
                var c = y.document;
                c = void 0 === c ? document : c;
                var d;
                return !(null == (d = c.featurePolicy) || !(m = d.features(), q(m, "includes")).call(m, b))
            }, a[70] = function(b) {
                var c = y.document;
                c = void 0 === c ? document : c;
                var d;
                return !(null == (d = c.featurePolicy) || !(m = d.allowedFeatures(), q(m, "includes")).call(m, b))
            }, a);
            a = {};
            this[O] = (a[3] = function() {
                return Oc()
            }, a[6] = function(b) {
                b = Vf(b, "number");
                return void 0 !== b ? b : void 0
            }, a[11] = function(b) {
                b = Pc(void 0 === b ? "" : b, y);
                return null == b ? void 0 : b % 1E3
            }, a);
            a = {};
            this[Re] = (a[2] = function() {
                return window.location.href
            }, a[3] = function() {
                try {
                    return window.top.location.hash
                } catch (b) {
                    return ""
                }
            }, a[4] = function(b) {
                b = Vf(b, "string");
                return void 0 !== b ? b : void 0
            }, a[10] = function() {
                try {
                    var b = y.document;
                    return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
                } catch (c) {
                    return ""
                }
            }, a[11] = function() {
                try {
                    var b, c, d, e, f;
                    return null != (f = null == (d = null == (b = va("google_tag_data")) ? void 0 : null == (c = b.uach) ? void 0 : c.fullVersionList) ? void 0 : null == (e = q(d, "find").call(d, function(h) {
                        return "Google Chrome" === h.brand
                    })) ? void 0 : e.version) ? f : ""
                } catch (h) {
                    return ""
                }
            }, a)
        };
    var Xf = function() {
        var a = void 0 === a ? y : a;
        return a.ggeac || (a.ggeac = {})
    };
    var Zf = function(a) {
        I.call(this, a, -1, Yf)
    };
    w(Zf, I);
    Zf.prototype.getId = function() {
        return D(this, 1, 0)
    };
    Zf.prototype.B = function() {
        return D(this, 7, 0)
    };
    var Yf = [2];
    var ag = function(a) {
        I.call(this, a, -1, $f)
    };
    w(ag, I);
    ag.prototype.B = function() {
        return D(this, 5, 0)
    };
    var $f = [2];
    var cg = function(a) {
        I.call(this, a, -1, bg)
    };
    w(cg, I);
    var eg = function(a) {
        I.call(this, a, -1, dg)
    };
    w(eg, I);
    eg.prototype.B = function() {
        return D(this, 1, 0)
    };
    var fg = function(a) {
        I.call(this, a)
    };
    w(fg, I);
    var bg = [1, 4, 2, 3],
        dg = [2];
    var gg = [12, 13, 20],
        hg = function() {},
        ig = function(a, b, c, d, e) {
            e = void 0 === e ? {} : e;
            var f = void 0 === e.ha ? !1 : e.ha,
                h = void 0 === e.va ? {} : e.va;
            e = void 0 === e.la ? [] : e.la;
            a.l = b;
            a.u = {};
            a.D = f;
            a.o = h;
            b = {};
            a.h = (b[c] = [], b[4] = [], b);
            a.i = {};
            (c = Ke()) && Oa(c.split(",") || [], function(g) {
                (g = parseInt(g, 10)) && (a.i[g] = !0)
            });
            Oa(e, function(g) {
                a.i[g] = !0
            });
            a.g = d;
            return a
        },
        mg = function(a, b, c) {
            var d = [],
                e = jg(a.l, b),
                f;
            if (f = 9 !== b) a.u[b] ? f = !0 : (a.u[b] = !0, f = !1);
            if (f) {
                var h;
                null == (h = a.g) || ef(h, b, c, d, [], 4);
                return d
            }
            if (!e.length) {
                var g;
                null == (g = a.g) || ef(g, b, c, d, [], 3);
                return d
            }
            var k = Ta(gg, b),
                l = [];
            Oa(e, function(r) {
                var A = new qe;
                if (r = kg(a, r, c, A)) 0 !== Cb(A, re) && l.push(A), A = r.getId(), d.push(A), lg(a, A, k ? 4 : c), (r = H(r, af, 2)) && (k ? vf(r, xf(), a.g, A) : vf(r, [c], a.g, A))
            });
            var p;
            null == (p = a.g) || ef(p, b, c, d, l, 1);
            return d
        },
        lg = function(a, b, c) {
            a.h[c] || (a.h[c] = []);
            a = a.h[c];
            Ta(a, b) || a.push(b)
        },
        ng = function(a, b) {
            a.l.push.apply(a.l, v(Pa(Qa(b, function(c) {
                return new eg(c)
            }), function(c) {
                return !Ta(gg, c.B())
            })))
        },
        kg = function(a, b, c, d) {
            var e = N(gf).g;
            if (!We(G(b, Me, 3), e)) return null;
            var f = H(b, Zf, 2),
                h = D(b, 6, 0);
            if (h) {
                Db(d, 1, re, h);
                f = e[O];
                switch (c) {
                    case 2:
                        var g = f[8];
                        break;
                    case 1:
                        g = f[7]
                }
                c = void 0;
                if (g) try {
                    c = g(h), F(d, 3, c, 0)
                } catch (k) {}
                return (b = og(b, c)) ? pg(a, [b], 1) : null
            }
            if (h = D(b, 10, 0)) {
                Db(d, 2, re, h);
                g = null;
                switch (c) {
                    case 1:
                        g = e[O][9];
                        break;
                    case 2:
                        g = e[O][10];
                        break;
                    default:
                        return null
                }
                c = g ? g(String(h)) : void 0;
                if (void 0 === c && 1 === D(b, 11, 0)) return null;
                void 0 !== c && F(d, 3, c, 0);
                return (b = og(b, c)) ? pg(a, [b], 1) : null
            }
            d = e ? Pa(f, function(k) {
                return We(G(k, Me, 3), e)
            }) : f;
            if (!d.length) return null;
            c = d.length * D(b, 1, 0);
            return (b = D(b, 4, 0)) ? qg(a, b, c, d) : pg(a, d, c / 1E3)
        },
        qg = function(a, b, c, d) {
            var e = null != a.o[b] ? a.o[b] : 1E3;
            if (0 >= e) return null;
            d = pg(a, d, c / e);
            a.o[b] = d ? 0 : e - c;
            return d
        },
        pg = function(a, b, c) {
            var d = a.i,
                e = Ra(b, function(f) {
                    return !!d[f.getId()]
                });
            return e ? e : a.D ? null : Ic(b, c)
        },
        rg = function(a, b) {
            R(zf, function(c) {
                a.i[c] = !0
            }, b);
            R(Cf, function(c, d) {
                return mg(a, c, d)
            }, b);
            R(Df, function(c) {
                return (a.h[c] || []).concat(a.h[4])
            }, b);
            R(Mf, function(c) {
                return ng(a, c)
            }, b);
            R(Af, function(c, d) {
                return lg(a, c, d)
            }, b)
        },
        jg = function(a, b) {
            return (a = Ra(a, function(c) {
                return c.B() == b
            })) && H(a, ag, 2) || []
        },
        og = function(a, b) {
            var c = H(a, Zf, 2),
                d = c.length,
                e = D(a, 8, 0);
            a = d * D(a, 1, 0) - 1;
            b = void 0 !== b ? b : Math.floor(1E3 * Hc());
            d = (b - e) % d;
            if (b < e || b - e - d >= a) return null;
            c = c[d];
            e = N(gf).g;
            return !c || e && !We(G(c, Me, 3), e) ? null : c
        };
    var sg = function() {
            var a = {};
            this.h = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.i = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.o = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.g = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.l = function() {}
        },
        tg = function(a) {
            return N(sg).h(a.g, a.defaultValue)
        },
        ug = function(a) {
            return N(sg).i(a.g, a.defaultValue)
        };
    var vg = function() {
            this.g = function() {}
        },
        wg = function(a) {
            N(vg).g(a)
        };
    var xg, yg, zg, Ag, Bg, Cg, Fg = function(a) {
            var b = N(Dg).g,
                c = {
                    ha: T(211),
                    la: T(226)
                },
                d = void 0,
                e = 2;
            d = void 0 === d ? Xf() : d;
            e = void 0 === e ? 0 : e;
            var f = void 0 === f ? new cf(null != (Ag = null == (xg = G(a, fg, 5)) ? void 0 : D(xg, 2, 0)) ? Ag : 0, null != (Bg = null == (yg = G(a, fg, 5)) ? void 0 : D(yg, 4, 0)) ? Bg : 0, null != (Cg = null == (zg = G(a, fg, 5)) ? void 0 : zb(zg, 3)) ? Cg : !1) : f;
            d.hasOwnProperty("init-done") ? (S(Mf, d)(Qa(H(a, eg, 2), function(h) {
                return h.toJSON()
            })), S(Nf, d)(Qa(H(a, af, 1), function(h) {
                return h.toJSON()
            }), e), b && S(Of, d)(b), Eg(d, e)) : (rg(ig(N(hg), H(a, eg, 2), e, f, c), d), Pf(d), Qf(d), Rf(d), Eg(d, e), vf(H(a, af, 1), [e], f, void 0, !0), jf = jf || !(!c || !c.Na), wg(N(Wf)), b && wg(b))
        },
        Eg = function(a, b) {
            a = void 0 === a ? Xf() : a;
            b = void 0 === b ? 0 : b;
            var c = a,
                d = b;
            d = void 0 === d ? 0 : d;
            Tf(N(Sf), c, d);
            Gg(a, b);
            N(vg).g = S(Of, a);
            N(sg).l()
        },
        Gg = function(a, b) {
            var c = N(sg);
            c.h = function(d, e) {
                return S(Ff, a, function() {
                    return !1
                })(d, e, b)
            };
            c.i = function(d, e) {
                return S(Gf, a, function() {
                    return 0
                })(d, e, b)
            };
            c.o = function(d, e) {
                return S(Hf, a, function() {
                    return ""
                })(d, e, b)
            };
            c.g = function(d, e) {
                return S(If, a, function() {
                    return []
                })(d, e, b)
            };
            c.l = function() {
                S(Bf, a)(b)
            }
        };
    var Hg = ia(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        Ig = function() {
            var a = void 0 === a ? "jserror" : a;
            var b = void 0 === b ? .01 : b;
            var c = void 0 === c ? tc(Hg) : c;
            this.i = a;
            this.h = b;
            this.g = c
        };

    function Jg(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = Qc("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests,
                        h = Array.prototype.indexOf.call(f, d, void 0);
                    0 <= h && Array.prototype.splice.call(f, h, 1)
                }
                d.removeEventListener && d.removeEventListener("load", e, !1);
                d.removeEventListener && d.removeEventListener("error", e, !1)
            };
            xc(d, "load", e);
            xc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }
    var Lg = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            Jc(a, function(e, f) {
                e && (d += "&" + f + "=" + encodeURIComponent(e))
            });
            Kg(d, c)
        },
        Kg = function(a, b) {
            var c = window;
            b = void 0 === b ? !1 : b;
            c.fetch ? c.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Jg(c, a, void 0 === b ? !1 : b)
        };
    var Mg = J("gpt/pubads_impl_"),
        Ng = J("pagead/managed/js/gpt/");
    var Og = function(a) {
        a = void 0 === a ? y : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var Pg = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        Qg = function(a, b) {
            var c = Og(b);
            c && Pg({
                label: a,
                type: 9,
                value: c
            }, b)
        },
        Rg = function(a, b, c) {
            var d = !1;
            d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var h = Og(),
                    g = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    g = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && h && Pg(q(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: h,
                        duration: (Og() || 0) - h,
                        type: g
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        },
        Sg = function(a, b) {
            return Rg(a, b, function(c, d) {
                var e = new Ig;
                var f = void 0 === f ? e.h : f;
                var h = void 0 === h ? e.i : h;
                Math.random() > f || (d.error && d.meta && d.id || (d = new Ie(d, {
                    context: c,
                    id: h
                })), y.google_js_errors = y.google_js_errors || [], y.google_js_errors.push(d), y.error_rep_loaded || (c = y.document, e = e.g, f = ac((e instanceof K ? $b(e) : $b(e)).toString()), e = Qc("SCRIPT", c), e.src = $b(f), uc(e), (c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(e, c), y.error_rep_loaded = !0))
            })
        };

    function U(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Tg(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Ug() {
        var a = new n.Set;
        var b = void 0 === b ? window : b;
        b = b.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = u(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Vg(a) {
        a = a.id;
        return null != a && (Ug().has(a) || q(a, "startsWith").call(a, "google_ads_iframe_") || q(a, "startsWith").call(a, "aswift"))
    }

    function Wg(a, b, c) {
        if (!a.sources) return !1;
        switch (Xg(a)) {
            case 2:
                var d = Yg(a);
                if (d) return c.some(function(f) {
                    return Zg(d, f)
                });
            case 1:
                var e = $g(a);
                if (e) return b.some(function(f) {
                    return Zg(e, f)
                })
        }
        return !1
    }

    function Xg(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function $g(a) {
        return ah(a, function(b) {
            return b.currentRect
        })
    }

    function Yg(a) {
        return ah(a, function(b) {
            return b.previousRect
        })
    }

    function ah(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }
    var bh = function() {
        Jd.call(this);
        this.h = this.g = this.J = this.I = this.R = 0;
        this.da = this.aa = Number.NEGATIVE_INFINITY;
        this.W = this.Y = this.Z = this.ba = this.ga = this.u = this.fa = this.L = 0;
        this.X = !1;
        this.K = this.H = this.D = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.ea = a ? a.getAttribute("data-google-query-id") : null;
        this.o = null;
        this.ca = !1;
        this.V = function() {}
    };
    w(bh, Jd);
    var eh = function() {
            var a = new bh;
            if (tg(qd)) {
                var b = window;
                if (!b.google_plmetrics && window.PerformanceObserver) {
                    b.google_plmetrics = !0;
                    b = u(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                    for (var c = b.next(); !c.done; c = b.next()) c = c.value, ch(a).observe({
                        type: c,
                        buffered: !0
                    });
                    dh(a)
                }
            }
        },
        ch = function(a) {
            a.o || (a.o = new PerformanceObserver(Sg(640, function(b) {
                var c = fh !== window.scrollX || gh !== window.scrollY ? [] : hh,
                    d = ih();
                b = u(b.getEntries());
                for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                    case "layout-shift":
                        var f = a;
                        if (!e.hadRecentInput) {
                            f.R += Number(e.value);
                            Number(e.value) > f.I && (f.I = Number(e.value));
                            f.J += 1;
                            var h = Wg(e, c, d);
                            h && (f.u += e.value, f.ba++);
                            if (5E3 < e.startTime - f.aa || 1E3 < e.startTime - f.da) f.aa = e.startTime, f.g = 0, f.h = 0;
                            f.da = e.startTime;
                            f.g += e.value;
                            h && (f.h += e.value);
                            f.g > f.L && (f.L = f.g, f.ga = f.h, f.fa = e.startTime + e.duration)
                        }
                        break;
                    case "largest-contentful-paint":
                        a.Z = Math.floor(e.renderTime || e.loadTime);
                        a.Y = e.size;
                        break;
                    case "first-input":
                        a.W = Number((e.processingStart - e.startTime).toFixed(3));
                        a.X = !0;
                        break;
                    case "longtask":
                        e = Math.max(0, e.duration - 50), a.D += e, a.H = Math.max(a.H, e), a.K += 1
                }
            })));
            return a.o
        },
        dh = function(a) {
            var b = Sg(641, function() {
                    var d = document;
                    2 == (d.prerendering ? 3 : {
                        visible: 1,
                        hidden: 2,
                        prerender: 3,
                        preview: 4,
                        unloaded: 5
                    }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && jh(a)
                }),
                c = Sg(641, function() {
                    return void jh(a)
                });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("unload", c);
            a.V = function() {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("unload", c);
                ch(a).disconnect()
            }
        };
    bh.prototype.T = function() {
        Jd.prototype.T.call(this);
        this.V()
    };
    var jh = function(a) {
            if (!a.ca) {
                a.ca = !0;
                ch(a).takeRecords();
                var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift && (b += Tg("cls", a.R), b += Tg("mls", a.I), b += U("nls", a.J), window.LayoutShiftAttribution && (b += Tg("cas", a.u), b += U("nas", a.ba)), b += Tg("wls", a.L), b += Tg("tls", a.fa), window.LayoutShiftAttribution && (b += Tg("was", a.ga)));
                window.LargestContentfulPaint && (b += U("lcp", a.Z), b += U("lcps", a.Y));
                window.PerformanceEventTiming && a.X && (b += U("fid", a.W));
                window.PerformanceLongTaskTiming && (b += U("cbt", a.D), b += U("mbt", a.H), b += U("nlt", a.K));
                for (var c = 0, d = u(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Vg(e.value) && c++;
                b += U("nif", c);
                c = window.google_unique_id;
                b += U("ifi", "number" === typeof c ? c : 0);
                c = N(Sf).g();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (y === y.top ? 1 : 0);
                b += a.ea ? "&qqid=" + encodeURIComponent(a.ea) : U("pvsid", Sc(y));
                window.googletag && (b += "&gpt=1");
                window.fetch(b, {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                });
                a.i || (a.i = !0, a.T())
            }
        },
        Zg = function(a, b) {
            var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
            a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
            return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
        },
        ih = function() {
            var a = [].concat(v(document.getElementsByTagName("iframe"))).filter(Vg),
                b = [].concat(v(Ug())).map(function(c) {
                    return document.getElementById(c)
                }).filter(function(c) {
                    return null !== c
                });
            fh = window.scrollX;
            gh = window.scrollY;
            return hh = [].concat(v(a), v(b)).map(function(c) {
                return c.getBoundingClientRect()
            })
        },
        fh = void 0,
        gh = void 0,
        hh = [];
    var V = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        W = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };
    var lh = function(a, b, c) {
        Jd.call(this);
        var d = this;
        this.h = a;
        this.g = [];
        b && kh() && this.g.push(V);
        c && this.g.push(W);
        if (document.hasTrustToken && !tg(ud)) {
            var e = new n.Map;
            this.g.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.h ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof n.Map ? new n.Map([].concat(v(e), v(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof n.Map || (window.goog_tt_promise_map = new n.Map)
        }
    };
    w(lh, Jd);
    var kh = function() {
            var a = void 0 === a ? window : a;
            a = a.navigator.userAgent;
            var b = /Chrome/.test(a);
            return /Android/.test(a) && b
        },
        mh = function() {
            var a = window;
            a = void 0 === a ? window : a;
            return !a.PeriodicSyncManager
        },
        nh = function() {
            var a = void 0 === a ? window.document : a;
            var b = N(sg).g(xd.g, xd.defaultValue);
            Rc(b, a)
        },
        oh = function(a) {
            var b = T(221),
                c = T(150);
            return b || ".google.ch" === c || "function" === typeof a.__tcfapi
        },
        X = function(a, b, c) {
            var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
            e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
        },
        ph = function() {
            var a = V.issuerOrigin + V.redemptionPath,
                b = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        issuer: V.issuerOrigin,
                        refreshPolicy: "none"
                    }
                };
            X(V.issuerOrigin, 2);
            return window.fetch(a, b).then(function(c) {
                if (!c.ok) throw Error(c.status + ": Network response was not ok!");
                X(V.issuerOrigin, 6, !0)
            }).catch(function(c) {
                c && "NoModificationAllowedError" === c.name ? X(V.issuerOrigin, 6, !0) : X(V.issuerOrigin, 5)
            })
        },
        qh = function() {
            var a = V.issuerOrigin + V.issuancePath;
            X(V.issuerOrigin, 8);
            return window.fetch(a, {
                keepalive: !0,
                trustToken: {
                    type: "token-request"
                }
            }).then(function(b) {
                if (!b.ok) throw Error(b.status + ": Network response was not ok!");
                X(V.issuerOrigin, 10);
                return ph()
            }).catch(function(b) {
                if (b && "NoModificationAllowedError" === b.name) return X(V.issuerOrigin, 10), ph();
                X(V.issuerOrigin, 9)
            })
        },
        rh = function() {
            X(V.issuerOrigin, 13);
            return document.hasTrustToken(V.issuerOrigin).then(function(a) {
                return a ? ph() : qh()
            })
        },
        sh = function() {
            X(W.issuerOrigin, 13);
            if (window.Promise) {
                var a = document.hasTrustToken(W.issuerOrigin).then(function(e) {
                        return e
                    }).catch(function(e) {
                        return window.Promise.reject({
                            state: 19,
                            error: e
                        })
                    }),
                    b = W.issuerOrigin + W.redemptionPath,
                    c = {
                        keepalive: !0,
                        trustToken: {
                            type: "token-redemption",
                            refreshPolicy: "none"
                        }
                    };
                X(W.issuerOrigin, 16);
                a = a.then(function(e) {
                    return window.fetch(b, c).then(function(f) {
                        if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                        X(W.issuerOrigin, 18, !0)
                    }).catch(function(f) {
                        if (f && "NoModificationAllowedError" === f.name) X(W.issuerOrigin, 18, !0);
                        else {
                            if (e) return window.Promise.reject({
                                state: 17,
                                error: f
                            });
                            X(W.issuerOrigin, 17)
                        }
                    })
                }).then(function() {
                    return document.hasTrustToken(W.issuerOrigin).then(function(e) {
                        return e
                    }).catch(function(e) {
                        return window.Promise.reject({
                            state: 19,
                            error: e
                        })
                    })
                }).then(function(e) {
                    var f = W.issuerOrigin + W.getStatePath;
                    X(W.issuerOrigin, 20);
                    return window.fetch(f + "?ht=" + e, {
                        trustToken: {
                            type: "send-redemption-record",
                            issuers: [W.issuerOrigin]
                        }
                    }).then(function(h) {
                        if (!h.ok) throw Error(h.status + ": Network response was not ok!");
                        X(W.issuerOrigin, 22);
                        return h.text().then(function(g) {
                            return JSON.parse(g)
                        })
                    }).catch(function(h) {
                        return window.Promise.reject({
                            state: 21,
                            error: h
                        })
                    })
                });
                var d = Sc(window);
                return a.then(function(e) {
                    var f = W.issuerOrigin + W.issuancePath;
                    return e && e.srqt && e.cs ? (X(W.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                        keepalive: !0,
                        trustToken: {
                            type: "token-request"
                        }
                    }).then(function(h) {
                        if (!h.ok) throw Error(h.status + ": Network response was not ok!");
                        X(W.issuerOrigin, 25);
                        return e
                    }).catch(function(h) {
                        return window.Promise.reject({
                            state: 24,
                            error: h
                        })
                    })) : e
                }).then(function(e) {
                    if (e && e.srdt && e.cs) return X(W.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                        keepalive: !0,
                        trustToken: {
                            type: "token-redemption",
                            refreshPolicy: "refresh"
                        }
                    }).then(function(f) {
                        if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                        X(W.issuerOrigin, 28, !0)
                    }).catch(function(f) {
                        return window.Promise.reject({
                            state: 27,
                            error: f
                        })
                    })
                }).then(function() {
                    X(W.issuerOrigin, 29)
                }).catch(function(e) {
                    if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                        if ("number" === typeof e.state && e.error instanceof Error) {
                            X(W.issuerOrigin, e.state);
                            var f = ug(wd);
                            Math.random() <= f && Lg({
                                state: e.state,
                                err: e.error.toString()
                            }, "dtt_err")
                        } else throw Error(e);
                    else throw e;
                })
            }
        },
        th = function(a) {
            if (document.hasTrustToken && !tg(ud) && a.h) {
                var b = window.goog_tt_promise_map;
                if (b && b instanceof n.Map) {
                    var c = [];
                    if (a.g.some(function(e) {
                            return e.issuerOrigin === V.issuerOrigin
                        })) {
                        var d = b.get(V.issuerOrigin);
                        d || (d = rh(), b.set(V.issuerOrigin, d));
                        c.push(d)
                    }
                    a.g.some(function(e) {
                        return e.issuerOrigin === W.issuerOrigin
                    }) && (a = b.get(W.issuerOrigin), a || (a = sh(), b.set(W.issuerOrigin, a)), c.push(a));
                    if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
                }
            }
        };
    var vh = function(a) {
        I.call(this, a, -1, uh)
    };
    w(vh, I);
    var wh = function(a, b) {
            return C(a, 2, b)
        },
        xh = function(a, b) {
            return C(a, 3, b)
        },
        yh = function(a, b) {
            return C(a, 4, b)
        },
        zh = function(a, b) {
            return C(a, 5, b)
        },
        Ah = function(a, b) {
            return C(a, 9, b)
        },
        Bh = function(a, b) {
            return Ib(a, 10, b)
        },
        Ch = function(a, b) {
            return C(a, 11, b)
        },
        Dh = function(a, b) {
            return C(a, 1, b)
        },
        Eh = function(a) {
            I.call(this, a)
        };
    w(Eh, I);
    Eh.prototype.getVersion = function() {
        return Jb(this, 2)
    };
    var uh = [10, 6];
    var Fh = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Gh(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Hh(a) {
        var b, c;
        if ("function" !== typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)) return null;
        var d = Gh(a);
        if (d.uach_promise) return d.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Fh).then(function(e) {
            null != d.uach || (d.uach = e);
            return e
        });
        return d.uach_promise = a
    }

    function Ih(a) {
        var b;
        return Ch(Bh(Ah(zh(yh(xh(wh(Dh(new vh, a.platform || ""), a.platformVersion || ""), a.architecture || ""), a.model || ""), a.uaFullVersion || ""), a.bitness || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new Eh;
            d = C(d, 1, c.brand);
            return C(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function Jh(a) {
        if (tg(rd)) {
            var b, c;
            return null != (c = null == (b = Hh(a)) ? void 0 : b.then(function(h) {
                return Ih(h)
            })) ? c : null
        }
        var d, e;
        if ("function" !== typeof(null == (d = a.navigator) ? void 0 : null == (e = d.userAgentData) ? void 0 : e.getHighEntropyValues)) return null;
        var f;
        return null != (f = a.navigator.userAgentData.getHighEntropyValues(Fh).then(function(h) {
            return Ih(h)
        })) ? f : null
    };
    var Kh = ia(["https://www.googletagservices.com/console/host/host.js"]),
        Lh = ia(["https://www.googletagservices.com/console/panel/index.html"]),
        Mh = ia(["https://www.googletagservices.com/console/overlay/index.html"]);
    tc(Kh);
    tc(Lh);
    tc(Mh);

    function Nh() {
        var a;
        return null != (a = y.googletag) ? a : y.googletag = {
            cmd: []
        }
    }

    function Oh(a, b) {
        var c = Nh();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    var Y = {},
        Ph = (Y[23] = .001, Y[211] = !1, Y[253] = !1, Y[246] = [], Y[226] = [], Y[150] = ".google.co.in", Y[148] = hf, Y[221] = /^true$/.test(""), Y[36] = /^true$/.test("false"), Y[172] = null, Y[259] = null, Y[6] = function(a, b) {
            b = void 0 === b ? !0 : b;
            try {
                for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "file:":
                        return b;
                    case "http:":
                        return !1
                }
            } catch (d) {}
            return !0
        }(window), Y[260] = void 0, Y[251] = null, Y[252] = null, Y[258] = null, Y),
        ee = function() {
            this.g = !1
        };

    function T(a) {
        N(ee).g = !0;
        return Ph[a]
    }

    function Qh(a, b) {
        N(ee).g = !0;
        Ph[a] = b
    };
    var Rh = new n.WeakMap,
        Sh = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v")
        };
    var Th = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/,
        Uh = function(a, b) {
            b = void 0 === b ? Sh : b;
            var c = ya(a),
                d = function(e) {
                    e = u(e);
                    e.next();
                    e = ja(e);
                    return b(c, e)
                };
            return function() {
                var e = x.apply(0, arguments),
                    f = this || y,
                    h = Rh.get(f);
                h || (h = {}, Rh.set(f, h));
                f = h;
                h = [this].concat(v(e));
                e = d ? d(h) : h;
                if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
                else {
                    var g = u(h);
                    h = g.next().value;
                    g = ja(g);
                    h = a.apply(h, g);
                    f = f[e] = h
                }
                return f
            }
        }(function(a) {
            return (null == a ? 0 : a.src) ? Th.test(a.src) ? 0 : 1 : 2
        }, function(a, b) {
            var c;
            return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
        });

    function Vh() {
        return 0 === Uh(T(172))
    };
    var Dg = function() {
        var a = {},
            b = {},
            c = {};
        this.g = (c[Qe] = (a[3] = Vh, a[17] = function() {
            return q(x.apply(0, arguments), "includes").call(x.apply(0, arguments), String(Pc()))
        }, a[59] = function() {
            var d = x.apply(0, arguments),
                e = q(d, "includes"),
                f = String,
                h;
            var g = void 0 === g ? window : g;
            var k;
            g = null != (k = null == (h = Cc(g.location.href.match(Bc)[3] || null)) ? void 0 : h.split(".")) ? k : [];
            h = 2 > g.length ? null : "uk" === g[g.length - 1] ? 3 > g.length ? null : Kc(g.splice(g.length - 3).join(".")) : Kc(g.splice(g.length - 2).join("."));
            return e.call(d, f(h))
        }, a[21] = function() {
            return T(148)
        }, a[61] = function() {
            return T(221)
        }, a[63] = function() {
            return T(221) || ".google.ch" === T(150)
        }, a[50] = function() {
            return 1 === Math.floor((new Date).getTime() / 24 / 60 / 60 / 1E3) % 2
        }, a[54] = function() {
            return !!T(259)
        }, a), c[O] = (b[1] = function() {
            var d;
            return null != (d = Nc("{{MOD}}")) ? d : -1
        }, b[4] = function() {
            return Nc("1") || 0
        }, b), c)
    };

    function Wh(a) {
        var b = new cg(T(246));
        if (!H(b, af, 1).length && H(a, af, 1).length) {
            var c = H(a, af, 1);
            Ib(b, 1, c)
        }!H(b, eg, 2).length && H(a, eg, 2).length && (c = H(a, eg, 2), Ib(b, 2, c));
        !Array.isArray(B(b, 5)) && Array.isArray(B(a, 5)) && (a = G(a, fg, 5), Gb(b, 5, a));
        Fg(b)
    };
    var Xh = function(a) {
        I.call(this, a)
    };
    w(Xh, I);
    var Zh = function() {
            return [].concat(v(q(Yh, "values").call(Yh))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        Yh = new n.Map;

    function $h(a) {
        return (a = a.currentScript) ? a : null
    }

    function ai(a) {
        var b;
        a = u(null != (b = a.scripts) ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value, q(b.src, "includes").call(b.src, "/tag/js/gpt")) return b;
        return null
    }

    function bi(a) {
        return !(null == a || !a.src) && "pagead2.googlesyndication.com" === Cc(a.src.match(Bc)[3] || null)
    }

    function ci(a) {
        var b = $h(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null == b || !b.async)
    }

    function di(a, b) {
        b = bi(b) ? J("https://pagead2.googlesyndication.com/") : J("https://securepubads.g.doubleclick.net/");
        a = a.P ? dc([b, Ng, a.ta, J("/pubads_impl.js")]) : tg(md) ? dc([b, Ng, J("m"), a.ja, J("/pubads_impl.js")]) : dc([b, Mg, a.ja, J(".js")]);
        b = {};
        var c = ug(od),
            d = ug(nd);
        c && (b.cb = c);
        d && (b.mcb = d);
        return q(Object, "keys").call(Object, b).length ? cc(a, b) : a
    }
    var ei = function() {
        this.g = []
    };
    ei.prototype.addListener = function(a) {
        void 0 !== this.h || this.error ? a(this.h, this.error) : this.g.push(a)
    };
    var fi = function(a, b, c) {
        a.h = b;
        a.error = c;
        for (var d = u(a.g), e = d.next(); !e.done; e = d.next()) e = e.value, e(b, c);
        a.g.length = 0
    };

    function gi(a, b) {
        if (!b) return null;
        a = a.location.host;
        var c = Ec(b.src, "domain"),
            d = Ec(b.src, "network-code");
        if (!a && !c && !d) return null;
        b = bi(b) ? J("https://pagead2.googlesyndication.com") : J("https://securepubads.g.doubleclick.net");
        return cc(dc([b, J("/pagead/ppub_config")]), {
            ippd: a,
            pppd: c,
            pppnc: d
        })
    }

    function hi(a, b) {
        var c = new ei;
        Qh(260, function(e) {
            return void c.addListener(e)
        });
        if (b = gi(a, b)) {
            var d = new n.globalThis.XMLHttpRequest;
            d.open("GET", b.toString(), !0);
            d.withCredentials = !1;
            d.onload = function() {
                300 > d.status ? (Qg("13", a), fi(c, 204 === d.status ? "" : d.responseText)) : fi(c, void 0, new n.globalThis.Error("resp:" + d.status))
            };
            d.onerror = function() {
                return void fi(c, void 0, new n.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
            };
            d.send()
        } else fi(c, void 0, new n.globalThis.Error("no provided or inferred data"))
    }

    function ii(a, b, c, d) {
        Qh(172, d);
        Qh(259, ci(a));
        Wh(b);
        N(Sf).h(12);
        N(Sf).h(5);
        nh();
        if (!oh(c)) {
            a = tg(mh() ? td : sd);
            b = tg(vd);
            a = new lh(!0, a, b);
            var e = Date.now(),
                f;
            a = null == (f = th(a)) ? void 0 : f.then(function() {
                var h = ug(yd);
                Math.random() <= h && Lg({
                    act: String(Date.now() - e)
                }, "gpt_tt")
            });
            0 < ug(zd) && Qh(258, a)
        }(f = Jh(c)) && f.then(function(h) {
            a: {
                lb = !0;
                try {
                    var g = JSON.stringify(h.toJSON(), Nb);
                    break a
                } finally {
                    lb = !1
                }
                g = void 0
            }
            return void Qh(251, g)
        });
        Uf(N(sg).g(pd.g, pd.defaultValue), c.document)
    }

    function ji() {
        var a = Number("2022060701");
        1 > a || Math.floor(a) !== a ? (Lg({
            v: "2022060701"
        }, "gpt_inv_ver"), a = "1") : a = "2022060701";
        return {
            ia: a,
            P: "",
            wa: new id,
            xa: .01 > Hc(),
            ra: 100
        }
    }

    function ki(a, b) {
        var c = J("2022060701");
        var d = a.P;
        /m\d+/.test(d) ? d = Number(d.substring(1)) : "dev" === d ? d = 1 : (d && Lg({
            mjsv: d
        }, "gpt_inv_ver"), d = void 0);
        return q(Object, "assign").call(Object, {}, a, {
            ja: c,
            sa: d,
            ta: J(""),
            Oa: Sc(window),
            Ra: b
        })
    }

    function li() {
        var a = mi,
            b = Nh(),
            c, d = null != (c = b.fifWin) ? c : window,
            e = d.document;
        c = b.fifWin ? window : d;
        var f = ji(),
            h = new Xh;
        ce();
        q(Object, "assign").call(Object, Ph, b._vars_);
        h && (zb(h, 3) && Qh(36, !0), zb(h, 4) && Qh(148, !0), zb(h, 5) && Qh(221, !0), Jb(h, 6) && Qh(150, Jb(h, 6)));
        b._vars_ = Ph;
        Oh("_loaded_", !0);
        var g = ki(f, h);
        Oh("getVersion", function() {
            return String(g.sa || g.ia)
        });
        Oh("cmd", []);
        var k;
        f = null != (k = $h(e)) ? k : ai(e);
        ii(e, Array.isArray(B(h, 1)) ? G(h, cg, 1) : new cg(a), d, f);
        try {
            eh()
        } catch (Eb) {}
        Qg("1", d);
        a = di(g, f);
        if (!T(259)) {
            d = "gpt-impl-" + Math.random();
            try {
                vc(e, qc(a, {
                    id: d,
                    nonce: zc()
                }))
            } catch (Eb) {}
            e.getElementById(d) && (b._loadStarted_ = !0)
        }
        if (!b._loadStarted_) {
            e = b.fifWin ? c.document : e;
            var l = Qc("SCRIPT");
            l.src = $b(a);
            uc(l);
            l.async = !0;
            var p, r, A = null != (r = null != (p = e.head) ? p : e.body) ? r : e.documentElement;
            "complete" !== c.document.readyState && b.fifWin ? xc(c, "load", function() {
                return void A.appendChild(l)
            }) : A.appendChild(l);
            b._loadStarted_ = !0
        }
        c === c.top && ($d(c), hi(c, f))
    };
    var mi;
    a: {
        try {
            if (Array.isArray(E)) {
                mi = E;
                break a
            }
        } catch (a) {}
        mi = []
    }
    try {
        li()
    } catch (a) {
        try {
            var ni = ji();
            if (ni.xa) {
                var oi, Z = a.error && a.meta && a.id ? a.error : a,
                    pi, qi = new Ge,
                    ri = new Fe;
                try {
                    var si = Sc(window);
                    F(ri, 1, si, 0)
                } catch (b) {}
                try {
                    var ti = N(Sf).g();
                    Bb(ri, 2, ti)
                } catch (b) {}
                try {
                    F(ri, 3, window.document.URL, "")
                } catch (b) {}
                pi = Gb(qi, 2, ri);
                var ui, vi = new De;
                ui = F(vi, 1, 420, 0);
                try {
                    var wi = fe(null == Z ? void 0 : Z.name) ? Z.name : "Unknown error";
                    F(ui, 2, wi, "")
                } catch (b) {}
                try {
                    var xi = fe(null == Z ? void 0 : Z.message) ? Z.message : "Caught " + Z;
                    F(ui, 3, xi, "")
                } catch (b) {}
                try {
                    var yi = fe(null == Z ? void 0 : Z.stack) ? Z.stack : Error().stack;
                    yi && Bb(ui, 4, yi.split(/\n\s*/))
                } catch (b) {}
                oi = Gb(pi, 1, ui);
                var zi = new Be;
                try {
                    F(zi, 1, ni.P || ni.ia, "")
                } catch (b) {}
                try {
                    var Ai = Zh();
                    F(zi, 2, Ai, 0)
                } catch (b) {}
                try {
                    var Bi = [].concat(v(q(Yh, "keys").call(Yh)));
                    Bb(zi, 3, Bi)
                } catch (b) {}
                Hb(oi, 4, He, zi);
                F(oi, 5, ni.ra, 0);
                gd(ni.wa, oi)
            }
        } catch (b) {}
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
    [
        [null, 7, null, [null, 0.1]],
        [null, 444965520, null, [null, 0.01]],
        [null, 448338836, null, [null, 0.01]],
        [null, 408380992, null, [null, 0.01]],
        [null, 377289019, null, [null, 10000]],
        [null, 529, null, [null, 20]],
        [null, 447000223, null, [null, 0.01]],
        [360245597, null, null, [1]],
        [null, 494, null, [null, 5000],
            [
                [
                    [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                    [null, 5500]
                ]
            ]
        ],
        [null, 517, null, [null, 0.01]],
        [384700361, null, null, [1]],
        [null, 388529191, null, null, [
            [
                [4, null, 59, null, null, null, null, ["4276767238"]],
                [null, 86400]
            ]
        ]],
        [null, 492, null, [null, 0.01]],
        [438898982, null, null, [1]],
        [null, 398776877, null, [null, 60000]],
        [null, 374201269, null, [null, 60000]],
        [null, 371364213, null, [null, 60000]],
        [null, 373440923, null, [null, 0.0001]],
        [null, 376149757, null, [null, 0.0025]],
        [377936516, null, null, [1]],
        [null, null, 2, [null, null, "1-0-38"]],
        [null, null, null, [], null, 489],
        [392065905, null, null, null, [
            [
                [3, [
                    [4, null, 15, null, null, null, null, ["18190176,155953048"]],
                    [4, null, 15, null, null, null, null, ["49944529"]],
                    [4, null, 15, null, null, null, null, ["5441"]],
                    [4, null, 15, null, null, null, null, ["6177"]],
                    [4, null, 15, null, null, null, null, ["6782"]],
                    [4, null, 15, null, null, null, null, ["6581"]]
                ]],
                [1]
            ]
        ]],
        [null, 360245595, null, [null, 500]],
        [null, 397316938, null, [null, 1000]],
        [null, 425668704, null, [null, 15360]],
        [null, 1921, null, [null, 72]],
        [null, 1920, null, [null, 24]],
        [null, 1922, null, [null, 5]],
        [null, 426169222, null, [null, 1000]],
        [null, 1917, null, [null, 300]],
        [null, 1916, null, [null, 0.001]],
        [432312926, null, null, [1]],
        [441746591, null, null, [1]],
        [null, null, null, [], null, 1939],
        [null, null, null, [null, null, null, ["AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A/9La288e7MDEU2ifusFnMg1C2Ij6uoa/Z/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]], null, 1934],
        [1953, null, null, [1]],
        [1947, null, null, [1]],
        [434462125, null, null, [1]],
        [null, 1972, null, []],
        [392736476, null, null, []],
        [null, null, null, [], null, 1932],
        [432938498, null, null, []]
    ],
    [
        [12, [
            [100, [
                [42531605],
                [42531606]
            ]],
            [100, [
                [42531607],
                [42531608]
            ]],
            [1, [
                [44764001],
                [44764002]
            ]],
            [20, [
                    [21065724],
                    [21065725, [
                        [203, null, null, [1]]
                    ]]
                ],
                [4, null, 9, null, null, null, null, ["LayoutShift"]]
            ],
            [10, [
                [31061690],
                [31061691, [
                    [83, null, null, [1]],
                    [84, null, null, [1]]
                ]]
            ]],
            [1, [
                [31065721],
                [31065722, [
                    [432946749, null, null, [1]]
                ]]
            ]],
            [100, [
                [31067487],
                [31067488, [
                    [1970, null, null, [1]]
                ]]
            ]],
            [1, [
                [31067825],
                [31067826, [
                    [1971, null, null, [1]]
                ]]
            ]]
        ]],
        [20, [
            [50, [
                [31062930],
                [31062931, [
                    [380025941, null, null, [1]]
                ]]
            ], null, null, null, null, null, 101, null, 102]
        ]],
        [2, [
            [10, [
                [31065642],
                [44765484, [
                    [1122, null, null, [1]]
                ]],
                [44766393, [
                    [1122, null, null, [1]]
                ]],
                [44767010, [
                    [1122, null, null, [1]]
                ]],
                [44767011, [
                    [1122, null, null, [1]]
                ]]
            ], null, 51],
            [10, [
                [31067874],
                [31067875, [
                    [423059401, null, null, [1]]
                ]]
            ], null, null, null, null, null, 301, null, 102],
            [10, [
                [31060888]
            ]],
            [10, [
                [31060889],
                [31060890]
            ], null, null, null, null, null, null, null, 104],
            [10, [
                [31061165],
                [31061166, [
                    [null, 363650251, null, [null, 2]]
                ]],
                [31061167, [
                    [null, 363650251, null, [null, 1]]
                ]]
            ], null, null, null, null, null, 1, null, 102],
            [1000, [
                [31065401, null, [2, [
                    [6, null, null, 6, null, 1, null, ["_pbjsGlobals.length"]],
                    [1, [
                        [6, null, null, null, 4, null, "pbjs", ["_pbjsGlobals.join"]]
                    ]],
                    [1, [
                        [6, null, null, null, 4, null, "$$PREBID_GLOBAL$$", ["_pbjsGlobals.join"]]
                    ]]
                ]]]
            ]],
            [1000, [
                    [31067848, null, [2, [
                        [2, [
                            [8, null, null, 1, null, -1],
                            [7, null, null, 1, null, 10]
                        ]],
                        [4, null, 3]
                    ]]],
                    [31067849, null, [2, [
                        [2, [
                            [8, null, null, 1, null, 29],
                            [7, null, null, 1, null, 40]
                        ]],
                        [4, null, 3]
                    ]]]
                ],
                [2, [
                    [4, null, 66],
                    [12, null, null, null, 4, null, "Chrome/(9[789]|\\d{3,})", ["navigator.userAgent"]],
                    [1, [
                        [4, null, 8, null, null, null, null, ["navigator.serviceWorker.controller"]]
                    ]],
                    [4, null, 9, null, null, null, null, ["document.head.appendChild"]],
                    [1, [
                        [4, null, 8, null, null, null, null, ["pbjs"]]
                    ]]
                ]]
            ],
            [10, [
                [44742767],
                [44742768]
            ]],
            [10, [
                [44752585],
                [44752586, [
                    [392065905, null, null, [1]]
                ]]
            ], null, 41],
            [50, [
                    [44753506],
                    [44753507, [
                        [392065905, null, null, []]
                    ]]
                ],
                [3, [
                    [4, null, 15, null, null, null, null, ["18190176,155953048"]],
                    [4, null, 15, null, null, null, null, ["49944529"]],
                    [4, null, 15, null, null, null, null, ["5441"]],
                    [4, null, 15, null, null, null, null, ["6177"]],
                    [4, null, 15, null, null, null, null, ["6782"]],
                    [4, null, 15, null, null, null, null, ["6581"]]
                ]], 41
            ],
            [1, [
                    [44763398],
                    [44763399, [
                        [392065905, null, null, [1]]
                    ]]
                ],
                [4, null, 68], 41
            ]
        ]],
        [4, [
            [null, [
                [44714449, [
                    [null, 7, null, [null, 1]]
                ]],
                [676982961, [
                    [null, 7, null, [null, 0.4]],
                    [212, null, null, [1]]
                ]],
                [676982996, [
                    [null, 7, null, [null, 1]]
                ]]
            ]],
            [null, [
                [44767022]
            ]],
            [10, [
                    [44763381],
                    [44763382, [
                        [359351145, null, null, [1]]
                    ]]
                ],
                [4, null, 68], 40
            ]
        ]],
        [3, [
            [null, [
                [676982960],
                [676982994],
                [676982998]
            ]],
            [null, [
                [676982975],
                [676982980]
            ]],
            [null, [
                [1337, [
                    [77, null, null, [1]],
                    [78, null, null, [1]],
                    [85, null, null, [1]],
                    [80, null, null, [1]],
                    [76, null, null, [1]],
                    [84, null, null, [1]],
                    [188, null, null, [1]]
                ]]
            ]],
            [10, [
                [21068766],
                [21068767, [
                    [null, 488, null, [null, 0.1]]
                ]]
            ], null, 42],
            [1000, [
                    [31060545, [
                        [null, null, 363931022, [null, null, "A/gAUAMbMh9fgIc7ltQJV7OpnGOsx50F/T5r7KHJIWEM4curJ+KNuln74lBEujYpRpJLzvJTL1s39OMeVWKYCAQAAACBeyJvcmlnaW4iOiJodHRwczovL3NlY3VyZXB1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiU3VicmVzb3VyY2VXZWJCdW5kbGVzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"]]
                    ]]
                ],
                [2, [
                    [12, null, null, null, 4, null, "Chrome/(9\\d|\\d{3,})", ["navigator.userAgent"]],
                    [3, [
                        [2, [
                            [2, [
                                [8, null, null, 1, null, -1],
                                [7, null, null, 1, null, 10]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 29],
                                [7, null, null, 1, null, 50]
                            ]],
                            [4, null, 3]
                        ]]
                    ]]
                ]]
            ],
            [10, [
                [31064225],
                [31064226, [
                    [432254233, null, null, [1]]
                ]]
            ]],
            [10, [
                [31067167],
                [31067168]
            ]],
            [1, [
                [31067511],
                [31067512, [
                    [440148284, null, null, [1]]
                ]]
            ], null, 55],
            [100, [
                    [31067513],
                    [31067514, [
                        [440148284, null, null, [1]]
                    ]]
                ],
                [2, [
                    [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 9, null, null, null, null, ["document.browsingTopics"]]
                ]], 55
            ],
            [1, [
                [31067515],
                [31067516, [
                    [440148284, null, null, [1]],
                    [440148282, null, null, [1]]
                ]],
                [31067517, [
                    [440148284, null, null, [1]],
                    [440148283, null, null, [1]],
                    [440148282, null, null, [1]]
                ]]
            ], null, 55],
            [100, [
                    [31067518],
                    [31067519, [
                        [440148284, null, null, [1]],
                        [440148282, null, null, [1]]
                    ]],
                    [31067520, [
                        [440148284, null, null, [1]],
                        [440148283, null, null, [1]],
                        [440148282, null, null, [1]]
                    ]]
                ],
                [2, [
                    [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 9, null, null, null, null, ["document.browsingTopics"]]
                ]], 55
            ],
            [1000, [
                    [31067706, null, [2, [
                        [2, [
                            [8, null, null, 1, null, 9],
                            [7, null, null, 1, null, 20]
                        ]],
                        [4, null, 3]
                    ]]],
                    [31067707, [
                            [437292966, null, null, [1]]
                        ],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 19],
                                [7, null, null, 1, null, 30]
                            ]],
                            [4, null, 3]
                        ]]
                    ]
                ],
                [3, [
                    [4, null, 59, null, null, null, null, ["2629955493"]],
                    [4, null, 59, null, null, null, null, ["4128785498"]],
                    [4, null, 59, null, null, null, null, ["2454122931"]],
                    [4, null, 59, null, null, null, null, ["1622801803"]],
                    [4, null, 59, null, null, null, null, ["2822201626"]],
                    [4, null, 59, null, null, null, null, ["2808431561"]],
                    [4, null, 59, null, null, null, null, ["3030857437"]],
                    [4, null, 59, null, null, null, null, ["964722235"]],
                    [4, null, 59, null, null, null, null, ["623935665"]],
                    [4, null, 59, null, null, null, null, ["1016541779"]]
                ]]
            ],
            [1, [
                [31067813, [
                    [441529989, null, null, [1]]
                ]],
                [31067814, [
                    [428624799, null, null, [1]]
                ]]
            ]]
        ]],
        [5, [
            [50, [
                    [21062785, null, [4, null, 8, null, null, null, null, ["_gmptnl"]]],
                    [21062786, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["_gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43
            ],
            [900, [
                    [21062812, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["_gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43
            ],
            [50, [
                    [21063916, null, [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]],
                    [21063917, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44
            ],
            [900, [
                    [21064113, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44
            ],
            [10, [
                [31060437],
                [31060438, [
                    [200, null, null, [1]]
                ]],
                [31060439, [
                    [220, null, null, [1]]
                ]]
            ], null, 24],
            [50, [
                    [31061483],
                    [31067420],
                    [31067421, [
                        [360245597, null, null, []]
                    ]],
                    [31067604],
                    [31067690, [
                        [null, 434620574, null, [null, 300]]
                    ]],
                    [31067691, [
                        [null, 434620574, null, [null, 180]]
                    ]],
                    [44765593],
                    [44765830]
                ],
                [3, [
                    [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]]
                ]], 15
            ],
            [10, [
                [31064681],
                [31064682, [
                    [423820325, null, null, [1]]
                ]]
            ]],
            [10, [
                [31064687],
                [31064690, [
                    [null, 425668704, null, [null, 61440]]
                ]]
            ]],
            [10, [
                [31064835],
                [31064836, [
                    [421896358, null, null, [1]]
                ]]
            ]],
            [1, [
                [31065623],
                [31065624, [
                    [430565960, null, null, [1]]
                ]]
            ]],
            [1, [
                [31067454],
                [31067455, [
                    [null, 432023148, null, [null, 1]]
                ]]
            ]],
            [10, [
                [31067746],
                [31067747, [
                    [447038262, null, null, [1]]
                ]]
            ]],
            [10, [
                [31067815],
                [31067816, [
                    [444964204, null, null, [1]]
                ]]
            ]],
            [100, [
                [31067855],
                [31067856, [
                    [439896109, null, null, [1]]
                ]]
            ]],
            [10, [
                [31067912],
                [31067913, [
                    [427203966, null, null, [1]]
                ]]
            ]],
            [10, [
                [31067914],
                [31067915, [
                    [451209599, null, null, [1]]
                ]]
            ]],
            [10, [
                [31067916],
                [31067917, [
                    [111, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [31067967, [
                            [null, 24, null, [null, 31067967]]
                        ],
                        [6, null, null, 4, null, 6]
                    ],
                    [31067968, [
                            [null, 24, null, [null, 31067968]]
                        ],
                        [6, null, null, 4, null, 7]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                    [31067981, [
                            [null, 24, null, [null, 31067981]]
                        ],
                        [6, null, null, 4, null, 8]
                    ],
                    [31067982, [
                            [null, 24, null, [null, 31067982]]
                        ],
                        [6, null, null, 4, null, 9]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                    [31068018, [
                            [null, 24, null, [null, 31068018]]
                        ],
                        [6, null, null, 4, null, 2]
                    ],
                    [31068019, [
                            [null, 24, null, [null, 31068019]]
                        ],
                        [6, null, null, 4, null, 3]
                    ]
                ],
                [4, null, 3], 1
            ],
            [50, [
                [44761477],
                [44761478, [
                    [null, 427198696, null, [null, 1]]
                ]]
            ]]
        ]],
        [9, [
            [1000, [
                    [31063049]
                ],
                [4, null, 13, null, null, null, null, ["cxbbhbxm"]]
            ]
        ]],
        [25, [
            [null, [
                    [31064132],
                    [31064133, [
                        [411850510, null, null, [1]]
                    ]]
                ],
                [2, [
                    [4, null, 68],
                    [3, [
                        [6, null, null, null, 4, null, "2g", ["navigator.connection.effectiveType"]],
                        [6, null, null, null, 4, null, "2g", ["navigator.mozConnection.effectiveType"]],
                        [6, null, null, null, 4, null, "2g", ["navigator.webkitConnection.effectiveType"]]
                    ]]
                ]], 40
            ]
        ]],
        [13, [
            [10, [
                [31065824],
                [31065825, [
                    [424117738, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [21067496]
                ],
                [4, null, 9, null, null, null, null, ["document.hasTrustToken"]]
            ],
            [500, [
                    [31061692],
                    [31061693, [
                        [77, null, null, [1]],
                        [78, null, null, [1]],
                        [85, null, null, [1]],
                        [80, null, null, [1]],
                        [76, null, null, [1]]
                    ]]
                ],
                [4, null, 6, null, null, null, null, ["31061691"]]
            ],
            [50, [
                [31064018],
                [31064019, [
                    [1961, null, null, [1]]
                ]]
            ]],
            [1000, [
                [31065981, null, [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/(9[23456789]|\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]
                ]]]
            ]],
            [1000, [
                    [31067146, null, [4, null, 9, null, null, null, null, ["document.browsingTopics"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067147, null, [2, [
                        [4, null, 9, null, null, null, null, ["navigator.runAdAuction"]],
                        [4, null, 9, null, null, null, null, ["navigator.joinAdInterestGroup"]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067148, null, [4, null, 8, null, null, null, null, ["attributionReporting"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067672, null, [2, [
                        [4, null, 69, null, null, null, null, ["browsing-topics"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["browsing-topics"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067673, null, [2, [
                        [4, null, 69, null, null, null, null, ["join-ad-interest-group"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["join-ad-interest-group"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067674, null, [2, [
                        [4, null, 69, null, null, null, null, ["run-ad-auction"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["run-ad-auction"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067675, null, [2, [
                        [4, null, 69, null, null, null, null, ["attribution-reporting"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["attribution-reporting"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ]
        ]],
        [6, [
            [1000, [
                    [31067850, null, [2, [
                        [2, [
                            [8, null, null, 1, null, -1],
                            [7, null, null, 1, null, 10]
                        ]],
                        [4, null, 3]
                    ]]],
                    [31067851, [
                            [501, null, null, [1]]
                        ],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 29],
                                [7, null, null, 1, null, 40]
                            ]],
                            [4, null, 3]
                        ]]
                    ]
                ],
                [2, [
                    [4, null, 66],
                    [12, null, null, null, 4, null, "Chrome/(9[789]|\\d{3,})", ["navigator.userAgent"]],
                    [1, [
                        [4, null, 8, null, null, null, null, ["navigator.serviceWorker.controller"]]
                    ]],
                    [4, null, 9, null, null, null, null, ["document.head.appendChild"]]
                ]]
            ]
        ]]
    ], null, null, [0.001, 1000, 1, 1000]
])