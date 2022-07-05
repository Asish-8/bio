(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var m = this || self;

    function n(a) {
        return a
    };
    var aa = {};

    function p(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };

    function q(a) {
        q[" "](a);
        return a
    }
    q[" "] = function() {};
    var ba = {},
        r = null;

    function ca(a) {
        var b;
        void 0 === b && (b = 0);
        if (!r) {
            r = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                ba[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var k = f[g];
                    void 0 === r[k] && (r[k] = g)
                }
            }
        }
        b = ba[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var l = a[f],
                h = a[f + 1];
            k = a[f + 2];
            g = b[l >> 2];
            l = b[(l & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[e++] = g + l + h + k
        }
        g = 0;
        k = d;
        switch (a.length - f) {
            case 2:
                g =
                    a[f + 1], k = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + k + d
        }
        return c.join("")
    };
    var t = "undefined" !== typeof Uint8Array,
        da = {};
    let ea;
    var fa = class {
        constructor(a) {
            if (da !== da) throw Error("illegal external caller");
            this.O = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
    };
    const u = Symbol(void 0);

    function ha(a, b) {
        Object.isFrozen(a) || (u ? a[u] |= b : void 0 !== a.u ? a.u |= b : Object.defineProperties(a, {
            u: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function ia(a) {
        let b;
        u ? b = a[u] : b = a.u;
        return null == b ? 0 : b
    }

    function v(a) {
        ha(a, 1);
        return a
    }

    function w(a) {
        return Array.isArray(a) ? !!(ia(a) & 2) : !1
    }

    function ja(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        ha(a, 2)
    };

    function ka(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var la = Object.freeze(v([]));

    function ma(a) {
        if (w(a.j)) throw Error("Cannot mutate an immutable Message");
    }

    function na(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function oa(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (t && null != a && a instanceof Uint8Array) return ca(a);
                    if (a instanceof fa) {
                        var b = a.O;
                        b = null == b || "string" === typeof b ? b : t && b instanceof Uint8Array ? ca(b) : null;
                        return null == b ? "" : a.O = b
                    }
                }
        }
        return a
    };

    function pa(a, b = qa) {
        return ra(a, b)
    }

    function wa(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = ra(a, b);
            else if (ka(a)) {
                const c = {};
                for (let d in a) c[d] = wa(a[d], b);
                a = c
            } else a = b(a);
            return a
        }
    }

    function ra(a, b) {
        const c = a.slice();
        for (let d = 0; d < c.length; d++) c[d] = wa(c[d], b);
        Array.isArray(a) && ia(a) & 1 && v(c);
        return c
    }

    function xa(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = oa(a);
        return Array.isArray(a) ? pa(a, xa) : a
    }

    function qa(a) {
        return t && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    };

    function ya(a) {
        return a.h || (a.h = a.j[a.i + a.s] = {})
    }

    function B(a, b, c = !1) {
        return -1 === b ? null : b >= a.i ? a.h ? a.h[b] : void 0 : c && a.h && (c = a.h[b], null != c) ? c : a.j[b + a.s]
    }

    function C(a, b, c, d = !1) {
        ma(a);
        b < a.i && !d ? a.j[b + a.s] = c : ya(a)[b] = c
    }

    function H(a, b) {
        a = B(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    }

    function za(a) {
        var b = Aa;
        a.g || (a.g = {});
        var c = a.g[1];
        if (!c) {
            var d = B(a, 1, !1);
            b = Array.isArray(d) ? new b(d) : void 0;
            void 0 != b && (a.g[1] = b, w(a.j) && ja(b.j), c = b)
        }
        if (null == c) return c;
        w(c.j) && !w(a.j) && (c = c.N(aa), C(a, 1, c.j, !1), a.g[1] = c);
        return c
    }

    function Ba(a, b) {
        a = B(a, b);
        return null == a ? 0 : a
    }

    function Ca(a, b) {
        a = B(a, b);
        return null == a ? "" : a
    };
    var Ea = class {
        constructor(a, b, c) {
            a || (a = Da);
            Da = null;
            var d = this.constructor.h;
            a || (a = d ? [d] : []);
            this.s = (d ? 0 : -1) - (this.constructor.g || 0);
            this.g = void 0;
            this.j = a;
            a: {
                d = this.j.length;a = d - 1;
                if (d && (d = this.j[a], ka(d))) {
                    this.i = a - this.s;
                    this.h = d;
                    break a
                }
                void 0 !== b && -1 < b ? (this.i = Math.max(b, a + 1 - this.s), this.h = void 0) : this.i = Number.MAX_VALUE
            }
            if (c)
                for (b = 0; b < c.length; b++)
                    if (a = c[b], a < this.i) a += this.s, (d = this.j[a]) ? Array.isArray(d) && v(d) : this.j[a] = la;
                    else {
                        d = ya(this);
                        let e = d[a];
                        e ? Array.isArray(e) && v(e) : d[a] = la
                    }
        }
        toJSON() {
            return pa(this.j,
                xa)
        }
    };
    let Da;
    var Fa = class extends Ea {
        N() {
            return this
        }
    };
    Object.defineProperties(Fa, {
        [Symbol.hasInstance]: na(() => {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        })
    });

    function Ga(a, b, c, d, e, f) {
        if (a = a.g && a.g[c])
            if (Array.isArray(a)) {
                d = f.v ? v(a.slice()) : a;
                ma(b);
                if (null != d) {
                    e = v([]);
                    f = !1;
                    for (a = 0; a < d.length; a++) e[a] = d[a].j, f = f || w(e[a]);
                    b.g || (b.g = {});
                    b.g[c] = d;
                    d = e;
                    if (!Array.isArray(d)) throw Error("cannot mark non-array as mutable");
                    f ? Object.isFrozen(d) || (u ? d[u] &= -9 : void 0 !== d.u && (d.u &= -9)) : ha(d, 8)
                } else b.g && (b.g[c] = void 0), e = la;
                C(b, c, e)
            } else ma(b), b.g || (b.g = {}), e = null != a ? a.j : a, b.g[c] = a, C(b, c, e);
        else t && d instanceof Uint8Array ? e = d.length ? new fa(new Uint8Array(d)) : ea || (ea =
            new fa(null)) : (Array.isArray(d) && (e ? ja(d) : Array.isArray(d) && ia(d) & 1 && f.v && (d = d.slice())), e = d), C(b, c, e)
    };
    class Ha extends Fa {
        N(a) {
            if (a !== aa) throw Error("requires a valid immutable API token");
            if (w(this.j)) {
                ({
                    v: a
                } = {
                    v: !0
                });
                a = {
                    v: a
                };
                const c = w(this.j);
                if (c && !a.v) throw Error("copyRepeatedFields must be true for frozen messages");
                const d = new this.constructor;
                this.L && (d.L = this.L.slice());
                const e = this.j;
                for (let f = 0; f < e.length; f++) {
                    const g = e[f];
                    if (f === e.length - 1 && ka(g))
                        for (b in g) {
                            const k = +b;
                            Number.isNaN(k) ? ya(d)[b] = g[b] : Ga(this, d, k, g[b], c, a)
                        } else Ga(this, d, f - this.s, g, c, a)
                }
                var b = d
            } else b = this;
            return b
        }
    }
    Object.defineProperties(Ha, {
        [Symbol.hasInstance]: na(Object[Symbol.hasInstance])
    });
    var Aa = class extends Ha {
            constructor(a) {
                super(a, -1, Ia)
            }
        },
        Ia = [28];
    var Ka = class extends Ha {
            constructor(a) {
                super(a, -1, Ja)
            }
        },
        Ja = [21];
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var I;
    var Ma = class {
            constructor(a, b) {
                this.g = b === La ? a : ""
            }
            toString() {
                return this.g + ""
            }
        },
        La = {};

    function Na(a) {
        if (void 0 === I) {
            var b = null;
            var c = m.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: n,
                        createScript: n,
                        createScriptURL: n
                    })
                } catch (d) {
                    m.console && m.console.error(d.message)
                }
                I = b
            } else I = b
        }
        a = (b = I) ? b.createScriptURL(a) : a;
        return new Ma(a, La)
    };

    function Oa(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Pa = {
            passive: !0
        },
        Qa = Oa(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                m.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Ra(a) {
        return a ? a.passive && Qa() ? a : a.capture || !1 : !1
    }

    function J(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Ra(d))
    };

    function K(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }

    function Sa(a) {
        var b = document;
        b.getElementsByClassName ? a = b.getElementsByClassName(a)[0] : (b = document, a = b.querySelectorAll && b.querySelector && a ? b.querySelector(a ? "." + a : "") : Ta(b, a)[0] || null);
        return a || null
    }

    function Ta(a, b) {
        var c, d;
        if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
        if (b && a.getElementsByClassName) {
            var e = a.getElementsByClassName(b);
            return e
        }
        e = a.getElementsByTagName("*");
        if (b) {
            var f = {};
            for (c = d = 0; a = e[c]; c++) {
                var g = a.className,
                    k;
                if (k = "function" == typeof g.split) k = 0 <= p(g.split(/\s+/), b);
                k && (f[d++] = a)
            }
            f.length = d;
            return f
        }
        return e
    }

    function Ua(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    var Va = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Wa(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Xa(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function Ya(a, b, c = null, d = !1) {
        Za(a, b, c, d)
    }

    function Za(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Xa("IMG", a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const k = p(g, e);
                    0 <= k && Array.prototype.splice.call(g, k, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, Ra());
                e.removeEventListener && e.removeEventListener("error", f, Ra())
            };
            J(e, "load", f);
            J(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };
    let $a = 0;

    function ab(a) {
        return (a = bb(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function bb(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function cb() {
        if (!(.01 < Math.random())) {
            var a = bb(60, document.currentScript);
            a = `https://${a&&"true"===a.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${ab(60)}&sample=${.01}`;
            var b = window,
                c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : Ya(b, a, void 0, !1)
        }
    };
    var db = document,
        L = window;

    function eb(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function jb(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : eb(a).match(/\S+/g) || [], b = 0 <= p(a, b));
        return b
    }

    function M(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!jb(a, b)) {
            var c = eb(a);
            b = c + (0 < c.length ? " " + b : b);
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        }
    };
    class kb {
        constructor(a) {
            this.g = (this.serializedAttributionData = a) ? new Ka(a) : null;
            this.isMutableImpression = Array.isArray(B(this.g, 1)) && !!H(za(this.g), 33);
            this.Y = !!H(this.g, 11);
            this.hasUserFeedbackData = !!this.g && Array.isArray(B(this.g, 1));
            this.S = !!H(this.g, 4);
            this.V = !!H(this.g, 6);
            this.R = !!H(this.g, 13);
            this.creativeIndexSuffix = 1 < Ba(this.g, 8) ? Ba(this.g, 7).toString() : "";
            this.Z = !!H(this.g, 17);
            this.X = !!H(this.g, 18);
            this.P = !!H(this.g, 14);
            this.enableMultiplexThirdPartyAttribution = !!H(this.g, 32);
            this.H = !!H(this.g,
                15);
            this.aa = !!H(this.g, 31);
            this.W = 1 == H(this.g, 9);
            this.openAttributionInline = 1 == H(this.g, 10);
            this.isMobileDevice = !!H(this.g, 12);
            this.B = null;
            this.U = (a = db.querySelector("[data-slide]")) ? "true" === a.getAttribute("data-slide") : !1;
            (this.J = "" !== this.creativeIndexSuffix) && void 0 === L.goog_multislot_cache && (L.goog_multislot_cache = {});
            if (this.J && !this.U) {
                if (a = L.goog_multislot_cache.hd, void 0 === a) {
                    a = !1;
                    var b = db.querySelector("[data-dim]");
                    if (b)
                        if (b = b.getBoundingClientRect(), 150 <= b.right - b.left && 150 <= b.bottom -
                            b.top) a = !1;
                        else {
                            var c = document.body.getBoundingClientRect();
                            150 > (1 >= Math.abs(c.left - b.left) && 1 >= Math.abs(c.right - b.right) ? b.bottom - b.top : b.right - b.left) && (a = !0)
                        }
                    else a = !1;
                    window.goog_multislot_cache.hd = a
                }
            } else a = !1;
            this.I = a;
            this.D = K("abgcp" + this.creativeIndexSuffix);
            this.C = K("abgc" + this.creativeIndexSuffix);
            this.h = K("abgs" + this.creativeIndexSuffix);
            K("abgl" + this.creativeIndexSuffix);
            this.A = K("abgb" + this.creativeIndexSuffix);
            this.G = K("abgac" + this.creativeIndexSuffix);
            K("mute_panel" + this.creativeIndexSuffix);
            this.F = Sa("goog_delegate_attribution" + this.creativeIndexSuffix);
            this.isDelegateAttributionActive = !!this.F && !!this.P && !Sa("goog_delegate_disabled") && !this.H;
            if (this.h) a: {
                a = this.h;b = "A";c = a.childNodes;
                for (let d = 0; d < c.length; d++) {
                    const e = c.item(d);
                    if ("undefined" != typeof e.tagName && e.tagName.toUpperCase() == b) {
                        a = e;
                        break a
                    }
                }
            }
            else a = null;
            this.m = a;
            this.l = this.isDelegateAttributionActive ? this.F : K("cbb" + this.creativeIndexSuffix);
            this.T = this.I ? "0" === this.creativeIndexSuffix : !0;
            this.enableDelegateDismissableMenu = !!this.l && jb(this.l, "goog_dismissable_menu");
            this.o = null;
            this.K = 0;
            this.i = this.isDelegateAttributionActive ? this.F : this.V && this.D ? this.D : this.C;
            this.autoExpandOnLoad = !!H(this.g, 19);
            this.adbadgeEnabled = !!H(this.g, 24);
            this.enableNativeJakeUi = !!H(this.g, 27)
        }
    };
    class lb {
        constructor(a, b) {
            if (!a) throw Error("bad conv util ctor args");
            this.h = a;
            this.g = b
        }
    };
    var N = (a, b) => {
        a && Wa(b, (c, d) => {
            a.style[d] = c
        })
    };
    class mb {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const nb = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var ob = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        pb = class {
            constructor(a, b) {
                this.url = a;
                this.M = !!b;
                this.depth = null
            }
        };

    function P(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function qb(a, b, c, d, e) {
        const f = [];
        Wa(a, function(g, k) {
            (g = rb(g, b, c, d, e)) && f.push(k + "=" + g)
        });
        return f.join(b)
    }

    function rb(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(rb(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(qb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function sb(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function tb(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        let d = sb(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        c = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                k = a.h[g];
            for (let l = 0; l < k.length; l++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                let h = qb(k[l], a.i, ",$");
                if (h) {
                    h = e + h;
                    if (d >= h.length) {
                        d -= h.length;
                        b += h;
                        e = a.i;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }
    class ub {
        constructor() {
            this.i = "&";
            this.h = {};
            this.l = 0;
            this.g = []
        }
    };

    function vb() {
        var a = wb,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }

    function xb(a, b, c, d, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof ub ? f = c : (f = new ub, Wa(c, (k, l) => {
                var h = f;
                const D = h.l++;
                k = P(l, k);
                h.g.push(D);
                h.h[D] = k
            }));
            const g = tb(f, a.h, "/pagead/gen_204?id=" + b + "&");
            g && Ya(m, g)
        } catch (f) {}
    }
    class yb {
        constructor() {
            this.h = "http:" === L.location.protocol ? "http:" : "https:";
            this.g = Math.random()
        }
    };
    let Q = null;
    var zb = () => {
            const a = m.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
        },
        Ab = () => {
            const a = m.performance;
            return a && a.now ? a.now() : null
        };
    class Bb {
        constructor(a, b) {
            var c = Ab() || zb();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const R = m.performance,
        Cb = !!(R && R.mark && R.measure && R.clearMarks),
        S = Oa(() => {
            var a;
            if (a = Cb) {
                var b;
                if (null === Q) {
                    Q = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (Q = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Q;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Db(a) {
        a && R && S() && (R.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), R.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Eb {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = S() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Bb(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            R && S() && R.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (Ab() || zb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                R && S() && R.mark(b);
                !this.g || 2048 <
                    this.h.length || this.h.push(a)
            }
        }
    };

    function Fb(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }

    function Gb(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                Db(e), c = a.o(b, new mb(f, {
                    message: Fb(f)
                }), void 0, void 0)
            } catch (g) {
                a.m(217, g)
            }
            if (c) window.console ? .error ? .(f);
            else throw f;
        }
        return d
    }

    function Hb(a, b) {
        var c = T;
        return (...d) => Gb(c, a, () => b.apply(void 0, d))
    }
    class Ib {
        constructor(a = null) {
            this.i = wb;
            this.h = null;
            this.o = this.m;
            this.g = a;
            this.l = !1
        }
        pinger() {
            return this.i
        }
        m(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const x = new ub;
                var g = x;
                g.g.push(1);
                g.h[1] = P("context", a);
                b.error && b.meta && b.id || (b = new mb(b, {
                    message: Fb(b)
                }));
                if (b.msg) {
                    g = x;
                    var k = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = P("msg", k)
                }
                var l = b.meta || {};
                b = l;
                if (this.h) try {
                    this.h(b)
                } catch (y) {}
                if (d) try {
                    d(b)
                } catch (y) {}
                d = x;
                l = [l];
                d.g.push(3);
                d.h[3] = l;
                d = m;
                l = [];
                let W;
                b = null;
                do {
                    var h = d;
                    try {
                        var D;
                        if (D = !!h && null != h.location.href) b: {
                            try {
                                q(h.foo);
                                D = !0;
                                break b
                            } catch (y) {}
                            D = !1
                        }
                        var E = D
                    } catch {
                        E = !1
                    }
                    E ? (W = h.location.href, b = h.document && h.document.referrer || null) : (W = b, b = null);
                    l.push(new pb(W || ""));
                    try {
                        d = h.parent
                    } catch (y) {
                        d = null
                    }
                } while (d && h != d);
                for (let y = 0, fb = l.length - 1; y <= fb; ++y) l[y].depth = fb - y;
                h = m;
                if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == l.length - 1)
                    for (E = 1; E < l.length; ++E) {
                        var F = l[E];
                        F.url || (F.url = h.location.ancestorOrigins[E - 1] || "", F.M = !0)
                    }
                var z = l;
                let sa = new pb(m.location.href, !1);
                h = null;
                const ta = z.length - 1;
                for (F =
                    ta; 0 <= F; --F) {
                    var A = z[F];
                    !h && nb.test(A.url) && (h = A);
                    if (A.url && !A.M) {
                        sa = A;
                        break
                    }
                }
                A = null;
                const Pb = z.length && z[ta].url;
                0 != sa.depth && Pb && (A = z[ta]);
                f = new ob(sa, A);
                if (f.h) {
                    z = x;
                    var G = f.h.url || "";
                    z.g.push(4);
                    z.h[4] = P("top", G)
                }
                var ua = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var va = f.g.url.match(Va),
                        O = va[1],
                        gb = va[3],
                        hb = va[4];
                    G = "";
                    O && (G += O + ":");
                    gb && (G += "//", G += gb, hb && (G += ":" + hb));
                    var ib = G
                } else ib = "";
                O = x;
                ua = [ua, {
                    url: ib
                }];
                O.g.push(5);
                O.h[5] = ua;
                xb(this.i, e, x, this.l, c)
            } catch (x) {
                try {
                    xb(this.i, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Fb(x),
                        url: f && f.g.url
                    }, this.l, c)
                } catch (W) {}
            }
            return !0
        }
    };
    let wb, T;
    const U = new Eb;
    var Jb = () => {
        window.google_measure_js_timing || (U.g = !1, U.h != U.i.google_js_reporting_queue && (S() && Array.prototype.forEach.call(U.h, Db, void 0), U.h.length = 0))
    };
    (a => {
        wb = a ? ? new yb;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        vb();
        T = new Ib(U);
        T.h = b => {
            const c = $a;
            0 !== c && (b.jc = String(c), b.shv = ab(c))
        };
        T.l = !0;
        "complete" == window.document.readyState ? Jb() : U.g && J(window, "load", () => {
            Jb()
        })
    })();
    var V = (a, b) => Hb(a, b);

    function Kb(a) {
        if (a.g.m && a.g.X) {
            const b = za(a.g.g);
            b && null != B(b, 5) && null != B(b, 6) && (a.i = new lb(Ca(b, 5), Ca(b, 19)));
            J(a.g.m, "click", V(452, () => {
                if (!a.l && (a.l = !0, a.i)) {
                    var c = a.i;
                    let d = c.h + "&label=closebutton_whythisad_click";
                    d += "&label_instance=1";
                    c.g && (d += "&cid=" + c.g);
                    Ya(window, d)
                }
            }))
        }
    }

    function Lb(a) {
        if (a.g.Y) J(a.g.i, "click", V(365, b => {
            const c = L.goog_interstitial_display;
            c && (c(b), b && (b.stopPropagation(), b.preventDefault()))
        }));
        else if (a.g.isMutableImpression && a.g.isMobileDevice) J(a.g.i, "click", () => a.h());
        else if (a.g.isMutableImpression && !a.g.isMobileDevice && (a.g.l && (J(a.g.l, "click", () => a.h()), J(a.g.l, "keydown", b => {
                "Enter" !== b.code && "Space" !== b.code || a.h()
            })), a.g.aa && a.g.h && J(a.g.h, "click", () => a.h())), a.g.S) Mb(a);
        else {
            J(a.g.i, "mouseover", V(367, () => Mb(a)));
            J(a.g.i, "mouseout", V(369,
                () => Nb(a, 500)));
            J(a.g.i, "touchstart", V(368, () => Mb(a)), Pa);
            const b = V(370, () => Nb(a, 4E3));
            J(a.g.i, "mouseup", b);
            J(a.g.i, "touchend", b);
            J(a.g.i, "touchcancel", b);
            a.g.m && J(a.g.m, "click", V(371, c => a.preventDefault(c)))
        }
    }

    function Mb(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.h && "block" == a.g.h.style.display || (a.g.K = Date.now(), a.g.A && a.g.h && (a.g.A.style.display = "none", a.g.h.style.display = "block"))
    }

    function Nb(a, b) {
        window.clearTimeout(a.g.o);
        a.g.o = window.setTimeout(() => Ob(a), b)
    }

    function Qb(a) {
        const b = a.g.G;
        b.style.display = "block";
        a.g.enableNativeJakeUi && window.requestAnimationFrame(() => {
            M(b, "abgacfo")
        })
    }

    function Ob(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.A && a.g.h && (a.g.A.style.display = "block", a.g.h.style.display = "none")
    }
    class Rb {
        constructor(a, b) {
            this.g = a;
            this.h = b;
            this.g.Z || (this.l = !1, this.i = null, !this.g.I || this.g.adbadgeEnabled || this.g.T ? Kb(this) : (a = {
                display: "none"
            }, b = {
                width: "15px",
                height: "15px"
            }, this.g.isMobileDevice ? (N(this.g.A, a), N(this.g.h, a), N(this.g.D, b), N(this.g.C, b)) : N(this.g.C, a)), Lb(this), this.g.enableNativeJakeUi && M(this.g.G, "abgnac"), this.g.isDelegateAttributionActive ? (M(document.body, "goog_delegate_active"), M(document.body, "jaa")) : (!this.g.isMutableImpression && this.g.l && Ua(this.g.l), setTimeout(() => {
                M(document.body,
                    "jar")
            }, this.g.R ? 750 : 100)), this.g.H && M(document.body, "goog_delegate_disabled"), this.g.autoExpandOnLoad && L.addEventListener("load", () => this.h()))
        }
        preventDefault(a) {
            if (this.g.h && "block" == this.g.h.style.display && 500 > Date.now() - this.g.K) a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            else if (this.g.openAttributionInline) {
                var b = this.g.m.getAttribute("href");
                window.adSlot ? window.adSlot.openAttribution(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openAttribution && (window.openAttribution(b),
                    a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            } else this.g.W && (b = this.g.m.getAttribute("href"), window.adSlot ? window.adSlot.openSystemBrowser(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openSystemBrowser && (window.openSystemBrowser(b), a.preventDefault ? a.preventDefault() : a.returnValue = !1))
        }
    };

    function Sb(a) {
        if (!a.g && (a.g = !0, L.goog_delegate_deferred_token = void 0, a.h)) {
            var b = a.i;
            a = a.h;
            if (!a) throw Error("bad attrdata");
            a = new kb(a);
            new b(a)
        }
    }
    class Tb {
        constructor(a) {
            var b = Ub;
            if (!b) throw Error("bad ctor");
            this.i = b;
            this.h = a;
            this.g = !1;
            Sa("goog_delegate_deferred") ? void 0 !== L.goog_delegate_deferred_token ? Sb(this) : (a = () => {
                Sb(this)
            }, L.goog_delegate_deferred_token = a, setTimeout(a, 5E3)) : Sb(this)
        }
    };
    var Vb = (a = []) => {
        m.google_logging_queue || (m.google_logging_queue = []);
        m.google_logging_queue.push([11, a])
    };
    class Wb {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function Xb() {
        const {
            promise: a,
            resolve: b
        } = new Wb;
        return {
            promise: a,
            resolve: b
        }
    };

    function Yb(a, b = () => {}) {
        a.google_llp || (a.google_llp = {});
        a = a.google_llp;
        let c = a[5];
        if (c) return c;
        c = Xb();
        a[5] = c;
        b();
        return c
    }

    function Zb(a, b) {
        return Yb(a, () => {
            var c = a.document;
            const d = Xa("SCRIPT", c);
            d.src = b instanceof Ma && b.constructor === Ma ? b.g : "type_error:TrustedResourceUrl";
            var e;
            (e = (e = (d.ownerDocument && d.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? e.nonce || e.getAttribute("nonce") || "" : "") && d.setAttribute("nonce", e);
            (c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(d, c)
        }).promise
    };

    function $b(a) {
        a.g.B ? a.g.B.expandAttributionCard() : (Gb(T, 373, () => {
            Ob(a.h);
            Qb(a.h)
        }), Zb(window, Na(`https://${"pagead2.googlesyndication.com"}${"/pagead/js/"+Ca(a.g.g,33)+"/abg_survey.js"}`)).then(b => {
            b.createAttributionCard(a.g);
            a.g.B = b;
            b.expandAttributionCard()
        }), cb())
    }
    class Ub {
        constructor(a) {
            this.g = a;
            this.h = new Rb(this.g, V(359, () => $b(this)))
        }
    };
    $a = 60;

    function ac(a) {
        Vb([a]);
        new Tb(a)
    }
    var X = ["buildAttribution"],
        Y = m;
    X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
    for (var Z; X.length && (Z = X.shift());) X.length || void 0 === ac ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = ac;
}).call(this);