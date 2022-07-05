! function(e) {
    var n = {};

    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: i
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) t.d(i, r, function(n) {
                return e[n]
            }.bind(null, r));
        return i
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 13)
}([function(e, n, t) {
    var i = t(3),
        r = {};
    n.set = function(e) {
        r = e;
        for (var n = 0; r.ingress && n < r.ingress.length; n++) {
            var t = r.ingress[n],
                o = null == t.freq ? 1 : t.freq;
            for (var a in t.enabled = Math.random() < o, t.endpoints) {
                var s = t.endpoints[a],
                    d = null == s.freq ? 1 : s.freq;
                for (var u in s.enabled = Math.random() < d, s.eventSources) {
                    var c = s.eventSources[u],
                        f = null == c.freq ? 1 : c.freq;
                    c.enabled = Math.random() < f
                }
            }
        }
        i.enableDebug(!0 === r.debug)
    }, n.get = function() {
        return r
    }, n.getVersion = function() {
        return "production-21"
    }, n.forEachIngress = function(e, n, t, i) {
        for (var r = 0; e.ingress && r < e.ingress.length; r++) {
            var o = e.ingress[r];
            if (o.enabled) {
                var a = o.endpoints[n] || o.endpoints.default;
                if (a && a.enabled) {
                    var s = a.eventSources ? a.eventSources[t] || a.eventSources.default : void 0;
                    if (!s || s.enabled) {
                        var d = a.path.replace(/{eventSource}/g, t);
                        i(o.domain + d)
                    }
                }
            }
        }
    }
}, function(e, n, t) {
    var i = t(0),
        r = t(7),
        o = t(3),
        a = t(8),
        s = t(4),
        d = {
            error: 1,
            warn: 2,
            info: 3,
            debug: 4
        };

    function u(e) {
        return i.get().logLevel >= e
    }

    function c(e, n, t, r) {
        if (o.isDebugEnabled()) {
            var s = t[0],
                d = [].slice.call(t).slice(1);
            o.addLog(e, s, d, Math.floor(a.now()))
        }
        window.console[e] && u(n) && console[e].apply(console, function(e, n, t) {
            return e = [].slice.call(e), i.get().logFormat ? (n && e.unshift(n), e.unshift("display: inline-block; color: #fff; background: " + t + "; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cArgus")) : e.unshift("Argus"), e
        }(t, e.toUpperCase() + ":", r))
    }
    n.level = d, n.enabled = u, n.errorNoPost = function() {
        c("error", d.error, arguments, "#ff0000")
    }, n.error = function() {
        c("error", d.error, arguments, "#ff0000"), r.queue("argus", {
            log: s.serializeArguments(arguments),
            stack: (new Error).stack
        })
    }, n.warn = function() {
        c("warn", d.warn, arguments, "#ffe600")
    }, n.info = function() {
        c("info", d.info, arguments, "#3b88a3")
    }, n.debug = function() {
        c("debug", d.debug, arguments, "#808080")
    }
}, function(e, n, t) {
    function i(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n && (i = i.filter((function(n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable
            }))), t.push.apply(t, i)
        }
        return t
    }

    function r(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e
    }
    var o = t(8),
        a = t(14),
        s = t(1),
        d = {
            sv: 2,
            av: t(0).getVersion(),
            domain: void 0,
            href: window.location.href,
            id: "10000000-1000-4000-8000-100000000000".replace(/1|0/g, (function() {
                return (0 | 16 * Math.random()).toString(16)
            })),
            init: o.startTime(),
            tzOffset: o.getTimezoneOffset(),
            tz: o.getTimezoneString(),
            device: {}
        };
    window._snigelConfig && window._snigelConfig.site ? d.domain = window._snigelConfig.site : window.snigelPubConf && window.snigelPubConf.argus && (d.domain = window.snigelPubConf.argus.domain);
    try {
        d.device = a.autoDetect(!0)
    } catch (e) {
        s.error("Failed to detect device", e)
    }
    var u = 0;
    n.setCounter = function(e) {
        e.session && (e.session.counter = u++)
    }, n.get = function() {
        return d
    }, n.createEvent = function(e) {
        return e.session = function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? i(Object(t), !0).forEach((function(n) {
                    r(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }))
            }
            return e
        }({}, d), e.session.now = o.now(), e
    }
}, function(e, n) {
    var t = {
        auction: {},
        history: {
            events: [],
            logs: [],
            all: [],
            getEvents: function(e, n) {
                return t.history.events.slice(e, n)
            },
            getPbjsEvents: function() {
                return t.history.events.filter((function(e) {
                    return "pbjs" == e.source
                }))
            },
            getGptEvents: function() {
                return t.history.events.filter((function(e) {
                    return "gpt" == e.source
                }))
            },
            getPbjsGptEvents: function() {
                return t.history.events.filter((function(e) {
                    return "pbjs" == e.source || "gpt" == e.source
                }))
            }
        }
    };

    function i() {
        return t
    }
    n.getInfo = i;
    var r = !1;
    n.enableDebug = function(e) {
        e && (r = !0, window.argus.getDebugInfo = i)
    }, n.isDebugEnabled = function() {
        return r
    }, n.addEvent = function(e, n, i, r) {
        var o = {
            source: e,
            eventType: n,
            args: i,
            elapsedTime: r
        };
        t.history.events.push(o), t.history.all.push(o)
    }, n.addLog = function(e, n, i, r) {
        var o = {
            source: "log",
            eventType: e,
            message: n,
            args: i,
            elapsedTime: r
        };
        t.history.logs.push(o), t.history.all.push(o)
    }
}, function(e, n) {
    function t(e) {
        return e ? JSON.parse(JSON.stringify(e)) : e
    }

    function i(e) {
        try {
            if (!e) return e;
            for (var n = [].slice.call(e), t = 0; t < n.length; t++) {
                var i = n[t];
                i instanceof Error && (n[t] = {
                    message: i.message,
                    stack: i.stack
                })
            }
            return n
        } catch (e) {}
        return e
    }
    n.cloneObject = t, n.serializePbjsEvent = function(e) {
        var n = t(e);
        return "auctionDebug" == e.eventType && e.arguments && (n.arguments = i(e.arguments)), n
    }, n.serializeGptEvent = function(e) {
        var n = ["constructor", "slot"],
            t = JSON.parse(JSON.stringify(e, (function(e, t) {
                return n.indexOf(e) < 0 ? t : void 0
            })));
        return t.slot = function(e) {
            var n = ["getName", "getServices", "getSlotId", "getTargeting", "getFirstLook", "getHtml"],
                t = {};
            for (var i in e) i.startsWith("get") && i.length > 3 && n.indexOf(i) < 0 && (t[i] = JSON.parse(JSON.stringify(e[i]())));
            return t
        }(e.slot), t
    }, n.serializeArguments = i
}, function(e, n, t) {
    var i = t(6),
        r = t(8),
        o = t(0);

    function a(e) {
        return e === i.undefined
    }
    n.isUndefined = a, n.valueWhenUndefined = function(e, n) {
        return a(e) ? n : e
    }, n.updateValueWhenUndefined = function(e, n, t) {
        a(e[n]) && (e[n] = t)
    }, n.validateTimeNow = function(e) {
        if (e = Math.floor(e), o.get().noTimeValidation) return e;
        var n = r.now();
        return !e || e > n || e < (n > 5e3 ? n - 5e3 : 0) ? n : e
    }, n.getSafeTimeDiff = function(e, n, t) {
        return e > n ? t || 0 : Math.floor(n - e)
    }
}, function(e, n) {
    n.undefined = void 0, n.channel = {
        pb: "pb",
        pbs: "pbs",
        aps: "aps",
        gpt: "gpt"
    }, n.state = {
        noBid: "noBid",
        bidTimeout: "bidTimeout",
        bidResponseTimeout: "bidResponseTimeout",
        bidResponse: "bidResponse",
        bidRejected: "bidRejected",
        bidAuctionWon: "bidAuctionWon",
        bidWon: "bidWon"
    }, n.bidder = {
        amazon: "amazon",
        gam: "gam",
        unfilled: "unfilled",
        unused: "unused"
    }
}, function(e, n, t) {
    function i(e, n) {
        var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!t) {
            if (Array.isArray(e) || (t = function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return r(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r(e, n)
                }(e)) || n && e && "number" == typeof e.length) {
                t && (e = t);
                var i = 0,
                    o = function() {};
                return {
                    s: o,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s = !0,
            d = !1;
        return {
            s: function() {
                t = t.call(e)
            },
            n: function() {
                var e = t.next();
                return s = e.done, e
            },
            e: function(e) {
                d = !0, a = e
            },
            f: function() {
                try {
                    s || null == t.return || t.return()
                } finally {
                    if (d) throw a
                }
            }
        }
    }

    function r(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, i = new Array(n); t < n; t++) i[t] = e[t];
        return i
    }
    var o = t(0),
        a = t(1),
        s = t(2),
        d = t(10),
        u = t(9),
        c = {},
        f = [];

    function g() {
        try {
            var e, n = i(f);
            try {
                for (n.s(); !(e = n.n()).done;) {
                    var t = e.value;
                    l(t.eventSource, t.event)
                }
            } catch (e) {
                n.e(e)
            } finally {
                n.f()
            }
        } catch (e) {
            a.errorNoPost("Failed to flush error queue", e)
        }
        f = []
    }
    n.flush = g, n.queue = function(e, n) {
        var t = o.get(),
            i = u.hexCode(e + JSON.stringify(n));
        c[i] || (c[i] = !0, a.debug("Queuing error event", n), f.push({
            eventSource: e,
            event: s.createEvent({
                error: n
            })
        }), 1 == f.length && setTimeout(g, t.errorQueueDelay))
    };
    var p = !1;

    function l(e, n) {
        var t = o.get();
        if (p) a.errorNoPost("Recursive error reporting canceled");
        else {
            p = !0;
            try {
                n.session || (n = s.createEvent({
                    error: n
                })), s.setCounter(n), o.forEachIngress(t, "error", e, (function(e) {
                    d.post(e, n, !0)
                }))
            } catch (e) {
                a.errorNoPost("Error reporting failed", e)
            }
            p = !1
        }
    }
    n.post = l
}, function(e, n) {
    var t = window.performance,
        i = Math.floor(Date.now() - (t && t.now ? t.now() : 0));
    n.startTime = function() {
        return i
    }, n.getTimezoneOffset = function() {
        return (new Date).getTimezoneOffset()
    }, n.getTimezoneString = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || (new Date).toTimeString().slice(9)
    };
    n.now = t && t.now ? function() {
        return Math.floor(t.now())
    } : function() {
        return Date.now() - i
    }
}, function(e, n) {
    function t(e) {
        var n, t = 0;
        if (0 === e.length) return t;
        for (n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
        return t
    }
    n.code = t, n.hexCode = function(e) {
        for (var n = (t(e) >>> 0).toString(16); n.length < 8;) n = "0" + n;
        return n
    }
}, function(e, n, t) {
    var i = t(1),
        r = t(9),
        o = t(0);
    n.post = function(e, n, t) {
        var a = JSON.stringify(n);
        (function e(n, t, r, a, s) {
            var d = new XMLHttpRequest;

            function u(u) {
                if (d.status < 200 || d.status >= 300) {
                    var c = o.get();
                    s < c.requestRetryMax && !(d.status >= 300 && d.status <= 499) ? setTimeout((function() {
                        e(n, t, r, a, s + 1)
                    }), c.requestRetryDelay) : i[a ? "errorNoPost" : "error"]("Failed sending to " + n + ", reason: " + u.type + ", status: " + d.status + ", statusText: " + d.statusText, r)
                }
            }
            d.open("POST", n, !0), d.setRequestHeader("Content-Type", "text/plain"), d.onload = function() {
                i.enabled(i.level.info) && i.info("Sent to " + n, JSON.parse(t))
            }, d.onerror = u, d.onabort = u, d.ontimeout = u, d.onload = u, d.send(t)
        })(e = e + "?id=" + (r.code(a) + 2147483648), a, n, t, 0)
    }
}, function(e, n, t) {
    var i = t(1),
        r = t(9),
        o = t(12),
        a = t(6),
        s = t(0),
        d = t(5),
        u = t(4),
        c = t(3),
        f = 0;
    var g = 0;

    function p() {
        return g++
    }
    var l = {};
    var v = {};

    function b(e) {
        return void 0 === v[e] && (v[e] = {
            pbjs: void 0,
            lastPbjsAuction: void 0,
            lastGptAuction: void 0,
            activeGptAuction: void 0
        }), v[e]
    }
    var m, h = {};

    function w(e) {
        return h[e]
    }

    function y(e) {
        return e.id ? e.id : e
    }

    function E(e, n) {
        var t = {
            id: e,
            start: n,
            end: void 0,
            event: {
                counter: f++,
                start: n,
                time: void 0,
                w: window.innerWidth,
                h: window.innerHeight,
                pbjs: void 0,
                gpt: void 0,
                adUnits: []
            },
            adUnitsMap: {},
            bidIdHashMap: {},
            pbjs: {}
        };
        return h[e] = t, i.debug("Creating new auction " + t.id), t
    }

    function O(e, n, t) {
        var i, r = b(n.code),
            o = {
                code: n.code,
                name: n.name,
                path: n.adUnitPath || n.path,
                sizes: n.sizes,
                refresh: (i = n.code, void 0 === l[i] ? l[i] = 0 : l[i]++, l[i]),
                bids: []
            };
        o.name || (n.snigel && n.snigel.adUnitName ? o.name = n.snigel.adUnitName : n.pubstack && n.pubstack.adUnitName ? o.name = n.pubstack.adUnitName : n.placementName ? o.name = n.placementName : r.pbjs && r.pbjs.name ? o.name = r.pbjs.name : t || (o.name = o.code)), o.path || (n.snigel && n.snigel.adUnitPath ? o.path = n.snigel.adUnitPath : n.pubstack && n.pubstack.adUnitPath ? o.path = n.pubstack.adUnitPath : n.codes && Array.isArray(n.codes) && n.codes.length >= 1 && (o.path = n.codes[0])), t && (r.pbjs = r.pbjs || {}, r.pbjs.code = o.code, r.pbjs.name = o.name, r.pbjs.path = o.path), e.event.adUnits.push(o);
        var a = {
            adUnitObj: o,
            addedToEvent: !0,
            bidWonAdded: !0,
            bidsMap: {},
            gpt: {}
        };
        return e.adUnitsMap[o.code] = a, a
    }

    function j(e, n, t) {
        function i(t) {
            return "Cannot find " + t + " for auctionId: " + y(e) + ", adUnitCode: " + n
        }
        var r = function(e) {
            return e.id ? e : h[e]
        }(e);
        if (!r) {
            if (t) return;
            throw new Error(i("auction"))
        }
        var o = r.adUnitsMap[n];
        if (!o) {
            if (t) return;
            throw new Error(i("ad-unit"))
        }
        return {
            auction: r,
            adUnit: o.adUnitObj,
            adUnitsMapEntry: o
        }
    }

    function I(e, n, t, i) {
        var r = j(e, n);
        if (r) {
            if (r.bid = r.adUnitsMapEntry.bidsMap[t], !r.bid) {
                if (i) return;
                throw new Error("Cannot find bid for auctionId: " + y(e) + ", adUnitCode: " + n + ", bidId: " + t)
            }
            return r
        }
    }

    function S(e, n, t) {
        if (!e || !n) throw new Error("Cannot create bid, bidder: " + e + ", channel: " + n);
        return {
            counter: p(),
            bidder: e,
            id: void 0,
            channel: n,
            requestCount: 1,
            state: t
        }
    }

    function A(e, n, t, i) {
        var r = j(e, n);
        r.adUnitsMapEntry.addedToEvent || (r.adUnitsMapEntry.addedToEvent = !0, r.auction.event.adUnits.push(r.adUnit)), void 0 === i.counter && (i.counter = p());
        var o = r.adUnitsMapEntry.bidsMap[t],
            s = t == a.state.bidWon;
        if (o && s) r.adUnitsMapEntry.bidWonAdded || (i.update = (i.update || 0) + 1, r.adUnit.bids.push(i), r.adUnitsMapEntry.bidWonAdded = !0);
        else {
            if (o && !s) throw new Error("Bid already exists for auctionId: " + y(e) + ", adUnitCode: " + n + ", bidId: " + t + ", bidCounter: " + i.counter);
            r.adUnit.bids.push(i), r.adUnitsMapEntry.bidsMap[t] = i, s && (r.adUnitsMapEntry.bidWonAdded = !0)
        }
        return r.bid = i, r
    }

    function T(e) {
        return e.adUnitsMapEntry.bidsMap[a.state.bidWon]
    }

    function U(e) {
        try {
            P(e),
                function(e) {
                    for (var n in e.adUnitsMap)
                        if (e.adUnitsMap[n].addedToEvent) return !0;
                    return !1
                }(e) && w(e.id) && (function(e) {
                    e.event.adUnits.forEach((function(e) {
                        for (var n = 0; n < e.bids.length; n++) {
                            var t = e.bids[n];
                            if (t.state != a.state.bidWon)
                                for (var i = n + 1; i < e.bids.length; i++)
                                    if (e.bids[i].state != a.state.bidWon && e.bids[i].bidder == t.bidder) {
                                        if (!t.cpm || e.bids[i].cpm >= t.cpm) {
                                            e.bids[i].requestCount += t.requestCount, e.bids.splice(n, 1), n--;
                                            break
                                        }
                                        t.requestCount += e.bids[i].requestCount, e.bids.splice(i, 1), i--
                                    }
                        }
                    }))
                }(e), function(e) {
                    e.event.adUnits.forEach((function(e) {
                        for (var n = 0; n < e.bids.length; n++) {
                            var t = e.bids[n];
                            t.channel === a.channel.pbs && (t.state === a.state.noBid && void 0 === t.serverResponseTime ? (e.bids.splice(n, 1), n--) : t.state === a.state.bidTimeout && (t.serverResponseTime = void 0))
                        }
                    }))
                }(e), function(e) {
                    e.event.adUnits.forEach((function(e) {
                        for (var n = -1, t = 0, i = 0; i < e.bids.length; i++) {
                            var r = e.bids[i];
                            r.state == a.state.bidResponse && r.cpm >= t && (n = i, t = r.cpm)
                        }
                        n >= 0 && (e.bids[n].state = a.state.bidAuctionWon)
                    }))
                }(e), i.enabled(i.level.info) && i.info("Sending event of auction " + e.id, u.cloneObject(e)), o.post("auction", "auction", {
                    auction: e.event
                }), function(e) {
                    var n = {};
                    for (var t in e.event) "adUnits" == t ? n.adUnits = [] : n[t] = e.event[t];
                    for (var i in e.adUnitsMap) e.adUnitsMap[i].addedToEvent = !1, e.adUnitsMap[i].bidWonAdded = !1, e.adUnitsMap[i].adUnitObj.bids = [];
                    e.event = n
                }(e), function() {
                    var e, n = 0,
                        t = f;
                    for (var i in h) {
                        n++;
                        var r = h[i].event.counter;
                        r < t && (t = r, e = i)
                    }
                    n > 10 && delete h[e]
                }())
        } catch (e) {
            i.error("postAuctionEvent", e)
        }
    }

    function M(e, n) {
        return !e.postEventTimerId && (i.debug("Start timer for auction " + e.id), e.postEventTimerId = setTimeout((function() {
            U(e)
        }), n), !0)
    }

    function P(e) {
        e.postEventTimerId && (i.debug("Cancel timer for auction " + e.id), clearTimeout(e.postEventTimerId), delete e.postEventTimerId)
    }
    c.getInfo().auction = {
        globalAuctions: h,
        globalLastPbjsAuction: m,
        globalAdUnitStatus: v,
        reset: function() {
            f = 0, g = 0, l = {}, v = {}, h = {}, m = void 0
        }
    }, n.getAuction = w, n.getActiveGptAuction = function(e) {
        return b(e).activeGptAuction
    }, n.initPbjsAuction = function(e, n) {
        var t = h[e.auctionId];
        return t || ((t = E(e.auctionId, n)).pbjs.initEvent = e, t.event.pbjs = {
            start: t.start,
            time: void 0,
            timeout: e.timeout
        }, e.adUnits.forEach((function(e) {
            var n, i = null === (n = t.adUnitsMap[e.code]) || void 0 === n ? void 0 : n.adUnitObj;
            if (i)
                for (var r = 0; r < e.sizes.length; r++) {
                    for (var o = e.sizes[r], a = 0; a < i.sizes.length; a++) {
                        var s = i.sizes[a];
                        if (s[0] === o[0] && s[1] === o[1]) {
                            o = void 0;
                            break
                        }
                    }
                    o && i.sizes.push(o)
                } else i = O(t, e, !0)
        }))), t
    }, n.endPbjsAuction = function(e, n, t) {
        for (var r in e.pbjs.endEvent = n, e.event.pbjs.time = d.getSafeTimeDiff(e.event.pbjs.start, t), e.event.pbjs.time || (e.event.pbjs.time = n.auctionEnd - n.timestamp), e.event.time = e.event.pbjs.time, e.adUnitsMap) {
            i.debug("Set last pbjs auction " + e.id + " for ad-unit " + r), b(r).lastPbjsAuction = e
        }
        m = e
    }, n.initGptAuction = function(e, n) {
        var t, i = e.slot.getSlotElementId(),
            r = b(i);

        function o(e, n) {
            var t = e.adUnitsMap[n];
            return !t || d.isUndefined(t.gpt.start)
        }
        t = r.lastPbjsAuction && o(r.lastPbjsAuction, i) ? r.lastPbjsAuction : m && o(m, i) ? m : E("gpt" + f, n), r.activeGptAuction = t;
        var a = t.adUnitsMap[i];
        if (a) a.adUnitObj.path || (a.adUnitObj.path = e.slot.getAdUnitPath());
        else {
            var s = {
                    code: i,
                    adUnitPath: e.slot.getAdUnitPath(),
                    sizes: []
                },
                u = e.slot.getSizes();
            u && u.forEach((function(e) {
                var n = e.width,
                    t = e.height;
                if ("string" == typeof e) n = t = 1;
                else if (isNaN(n) || n < 1 || isNaN(t) || t < 1) throw new Error("Size is NaN, w: " + n + ", h: " + t);
                s.sizes.push([n, t])
            })), a = O(t, s)
        }
        return a.gpt.start = a.gpt.start || n, a.gpt.targetingMap = a.gpt.targetingMap || e.slot.getTargetingMap(), t.event.gpt || (t.event.gpt = {
            start: n,
            time: void 0
        }, P(t)), t
    }, n.endAdUnitAuction = function(e, n, t, i) {
        function r(e) {
            return !d.isUndefined(e.gpt.start) && !0 !== e.gpt.renderEnded
        }
        if (!r(n.adUnitsMapEntry)) {
            var o = b(n.adUnit.code);
            o.lastGptAuction = o.activeGptAuction, o.activeGptAuction = void 0, e.event.gpt && !i && (e.event.gpt.time = d.getSafeTimeDiff(e.event.gpt.start, t, e.event.gpt.time)), e.end = t;
            var u = d.getSafeTimeDiff(e.start, e.end);
            (!e.event.time || u > e.event.time) && (e.event.time = u), M(e, s.get().auctionBidWonEventDelay);
            var c = !0;
            for (var f in e.adUnitsMap) {
                var g = e.adUnitsMap[f];
                if (g.bidsMap[a.state.bidWon] || (c = !1), r(g)) return
            }
            if (!c) {
                if (!e.event.gpt) return;
                for (var p in e.adUnitsMap) {
                    if (!e.adUnitsMap[p].bidsMap[a.state.bidWon]) {
                        var l = S(a.bidder.unused, a.channel.gpt, a.state.bidWon);
                        l.responseTime = d.getSafeTimeDiff(e.start, t), A(e, p, a.state.bidWon, l)
                    }
                }
            }
        }
    }, n.getBidIdHash = function(e, n, t) {
        var i = w(e);
        if (!i) throw new Error("Cannot find auction for auctionId: " + e);
        var o = i.bidIdHashMap[n];
        return !o && t && (o = i.bidIdHashMap[n] = r.hexCode(JSON.stringify(t))), o
    }, n.getAdUnitInfo = j, n.getBidInfo = I, n.findBidInfo = function(e, n, t) {
        var i = I(e, n, t, !0);
        if (!i)
            for (var r in h)
                if (r != e && (i = I(r, n, t, !0))) break;
        return i
    }, n.createBid = S, n.addBid = A, n.getBidWon = T, n.addBidWon = function e(n, t, i, r, o) {
        function s(e, n, t, i) {
            var r = j(e, n, !0);
            if (r) {
                var o = T(r);
                if (!o) return A(r.auction, r.adUnit.code, a.state.bidWon, t);
                if ((!i || d.getSafeTimeDiff(r.start, i) < 1e4) && o.channel == a.channel.gpt) {
                    for (var s in t) o[s] = t[s];
                    return A(r.auction, r.adUnit.code, a.state.bidWon, o)
                }
            }
        }
        var u;
        if (o) {
            var c = b(t);
            if (c.lastPbjsAuction && c.lastPbjsAuction.id == y(n) && (u = s(n, t, i))) return u;
            if (c.lastGptAuction && (u = s(c.lastGptAuction, t, i, r))) return u;
            if (c.activeGptAuction && (u = s(c.activeGptAuction, t, i, r))) return u;
            if (c.lastPbjsAuction && (u = s(c.lastPbjsAuction, t, i, r))) return u;
            if (u = s(n, t, i, r)) return u
        } else if (u = s(n, t, i)) return u;
        if (r) return e(n, t, i, void 0, o);
        throw new Error("Failed to add bidWon for auctionId: " + y(n) + ", adUnitCode: " + t + ", bidCounter: " + i.counter)
    }, n.startTimerPostAuctionEvent = M, n.cancelTimerPostAuctionEvent = P
}, function(e, n, t) {
    function i(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n && (i = i.filter((function(n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable
            }))), t.push.apply(t, i)
        }
        return t
    }

    function r(e) {
        for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2 ? i(Object(t), !0).forEach((function(n) {
                o(e, n, t[n])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }))
        }
        return e
    }

    function o(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e
    }

    function a(e, n) {
        var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!t) {
            if (Array.isArray(e) || (t = function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s(e, n)
                }(e)) || n && e && "number" == typeof e.length) {
                t && (e = t);
                var i = 0,
                    r = function() {};
                return {
                    s: r,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0,
            d = !1;
        return {
            s: function() {
                t = t.call(e)
            },
            n: function() {
                var e = t.next();
                return a = e.done, e
            },
            e: function(e) {
                d = !0, o = e
            },
            f: function() {
                try {
                    a || null == t.return || t.return()
                } finally {
                    if (d) throw o
                }
            }
        }
    }

    function s(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, i = new Array(n); t < n; t++) i[t] = e[t];
        return i
    }
    var d = t(0),
        u = t(1),
        c = t(2),
        f = t(10),
        g = [];

    function p() {
        try {
            var e, n = a(g);
            try {
                for (n.s(); !(e = n.n()).done;) {
                    var t = e.value;
                    l(t.endpoint, t.eventSource, t.event)
                }
            } catch (e) {
                n.e(e)
            } finally {
                n.f()
            }
        } catch (e) {
            u.error("Failed to flush anayltics queue", e)
        }
        g = []
    }

    function l(e, n, t) {
        var i = d.get();
        t.session || (t = c.createEvent(r({}, t))), c.setCounter(t), d.forEachIngress(i, e, n, (function(e) {
            f.post(e, t)
        }))
    }
    n.flush = p, n.queue = function(e, n, t) {
        var i = d.get();
        u.debug("Queuing analytics event", t), g.push({
            endpoint: e,
            eventSource: n,
            event: c.createEvent(r({}, t))
        }), 1 == g.length && setTimeout(p, i.eventQueueDelay)
    }, n.post = l
}, function(e, n, t) {
    var i = t(0),
        r = t(1),
        o = t(15),
        a = t(16),
        s = t(17),
        d = t(18),
        u = t(19),
        c = t(20),
        f = t(12),
        g = t(7),
        p = t(21),
        l = t(2),
        v = (t(3), {
            version: i.getVersion(),
            logLevel: 2,
            logFormat: !0,
            ingress: [{
                domain: "//argus-fra1.snigelweb.com/ingress/v1",
                endpoints: {
                    default: {
                        path: "/event/{eventSource}"
                    },
                    auction: {
                        path: "/auction"
                    },
                    error: {
                        path: "/error/{eventSource}",
                        eventSources: {
                            default: {
                                freq: 1e-4
                            },
                            argus: {
                                freq: .01
                            },
                            argusDbg: {
                                freq: 0
                            },
                            adngin: {
                                freq: .01
                            },
                            adconsent: {
                                freq: .01
                            }
                        }
                    }
                }
            }, {
                domain: "//staging-argus-fra1.snigelweb.com/ingress/v1",
                freq: .001,
                endpoints: {
                    default: {
                        path: "/event/{eventSource}"
                    },
                    auction: {
                        path: "/auction"
                    },
                    error: {
                        path: "/error/{eventSource}",
                        eventSources: {
                            default: {
                                freq: 0
                            }
                        }
                    }
                }
            }],
            eventQueueDelay: 3e3,
            auctionEventDelay: 500,
            auctionBidWonEventDelay: 500,
            errorQueueDelay: 5e3,
            requestRetryMax: 3,
            requestRetryDelay: 1e3,
            pbjsIgnoreIncompleteEvents: !!(window.snigelPubConf && window.snigelPubConf.argus && window.snigelPubConf.argus.pbjsIgnoreIncompleteEvents),
            tags: {
                adengineName: o.getAdEngineObjectName(),
                pbjsName: o.getPbjsObjectName(),
                gptName: o.getGptObjectName(),
                aptName: o.getApstagObjectName()
            }
        });
    if (i.set(v), l.get().domain)
        if (window.argus = window.argus || {
                cmd: []
            }, window.argus.getConfig) r.error("Duplicate Argus loading");
        else {
            window.argus.getConfig = i.get, window.argus.setConfig = i.set, window.argus.queueEvent = function(e, n) {
                f.queue("default", e, n)
            }, window.argus.queueError = g.queue, a.init(), s.init(), d.init(), u.init(), c.init();
            for (var b = 0; b < v.ingress.length; b++) {
                var m = document.createElement("argprec" + b);
                m.rel = "preconnect", m.href = v.ingress[b].domain, document.head.appendChild(m)
            }
            p.init()
        }
    else l.get().domain = window.location.host, r.error("Missing Argus domain config")
}, function(e, n) {
    function t(e, n, t, r, o, a) {
        var s, d, u, c = r || screen.width,
            f = o || screen.height,
            g = t,
            p = "" + parseFloat(n),
            l = parseInt(n, 10); - 1 != (d = e.indexOf("Opera")) && (g = "Opera", p = e.substring(d + 6), -1 != (d = e.indexOf("Version")) && (p = e.substring(d + 8))), -1 != (d = e.indexOf("OPR")) ? (g = "Opera", p = e.substring(d + 4)) : -1 != (d = e.indexOf("Edge")) ? (g = "Microsoft Legacy Edge", p = e.substring(d + 5)) : -1 != (d = e.indexOf("Edg")) ? (g = "Microsoft Edge", p = e.substring(d + 4)) : -1 != (d = e.indexOf("MSIE")) ? (g = "Microsoft Internet Explorer", p = e.substring(d + 5)) : "Netscape" == g && -1 != e.indexOf("Trident/") ? (g = "Microsoft Internet Explorer", p = e.substring(d + 5), -1 != (d = e.indexOf("rv:")) && (p = e.substring(d + 3))) : -1 != (d = e.indexOf("Chrome")) ? (g = "Chrome", p = e.substring(d + 7)) : -1 != (d = e.indexOf("Safari")) ? (g = "Safari", p = e.substring(d + 7), -1 != (d = e.indexOf("Version")) && (p = e.substring(d + 8)), -1 != e.indexOf("CriOS") && (g = "Chrome")) : -1 != (d = e.indexOf("Firefox")) ? (g = "Firefox", p = e.substring(d + 8)) : (s = e.lastIndexOf(" ") + 1) < (d = e.lastIndexOf("/")) && (g = e.substring(s, d), p = e.substring(d + 1), g.toLowerCase() == g.toUpperCase() && (g = t)), -1 != (u = p.indexOf(";")) && (p = p.substring(0, u)), -1 != (u = p.indexOf(" ")) && (p = p.substring(0, u)), -1 != (u = p.indexOf(")")) && (p = p.substring(0, u)), l = parseInt("" + p, 10), isNaN(l) && (p = "" + parseFloat(n));
        var v = "Unknown",
            b = [{
                s: "Windows 10",
                r: /(Windows 10.0|Windows NT 10.0)/
            }, {
                s: "Windows 8.1",
                r: /(Windows 8.1|Windows NT 6.3)/
            }, {
                s: "Windows 8",
                r: /(Windows 8|Windows NT 6.2)/
            }, {
                s: "Windows 7",
                r: /(Windows 7|Windows NT 6.1)/
            }, {
                s: "Windows Vista",
                r: /Windows NT 6.0/
            }, {
                s: "Windows Server 2003",
                r: /Windows NT 5.2/
            }, {
                s: "Windows XP",
                r: /(Windows NT 5.1|Windows XP)/
            }, {
                s: "Windows 2000",
                r: /(Windows NT 5.0|Windows 2000)/
            }, {
                s: "Windows ME",
                r: /(Win 9x 4.90|Windows ME)/
            }, {
                s: "Windows 98",
                r: /(Windows 98|Win98)/
            }, {
                s: "Windows 95",
                r: /(Windows 95|Win95|Windows_95)/
            }, {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {
                s: "Windows CE",
                r: /Windows CE/
            }, {
                s: "Windows 3.11",
                r: /Win16/
            }, {
                s: "Android",
                r: /Android/
            }, {
                s: "Open BSD",
                r: /OpenBSD/
            }, {
                s: "Sun OS",
                r: /SunOS/
            }, {
                s: "Chrome OS",
                r: /CrOS/
            }, {
                s: "Linux",
                r: /(Linux|X11(?!.*CrOS))/
            }, {
                s: "iOS",
                r: /(iPhone|iPad|iPod)/
            }, {
                s: "Mac OS X",
                r: /Mac OS X/
            }, {
                s: "Mac OS",
                r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }, {
                s: "QNX",
                r: /QNX/
            }, {
                s: "UNIX",
                r: /UNIX/
            }, {
                s: "BeOS",
                r: /BeOS/
            }, {
                s: "OS/2",
                r: /OS\/2/
            }, {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver|Bingbot|BingPreview)/
            }];
        for (var m in b) {
            var h = b[m];
            if (h.r.test(e)) {
                v = h.s;
                break
            }
        }
        var w = "Unknown";

        function y(e, n) {
            var t = e.exec(n);
            return t && t.length > 1 ? t[1].replace(new RegExp("[ _]+", "g"), ".") : "Unknown"
        }
        switch (/Windows/.test(v) && (w = y(/Windows (.*)/, v), v = "Windows"), v) {
            case "Mac OS":
            case "Mac OS X":
            case "Android":
                w = y(/(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([._\d]+)/, e);
                break;
            case "iOS":
                w = y(/OS ([._\d]+)/, n)
        }
        return {
            userAgent: e,
            appVersion: n,
            appName: t,
            platform: i(e),
            browser: g,
            browserVersion: p,
            os: v,
            osVersion: w,
            cookies: a,
            w: c,
            h: f
        }
    }

    function i(e) {
        var n = new RegExp("(?:ipad|playbook|tablet|(?:android(?!.*(nexus|sm-(?:g9|n9|a10)))|bbd+|meego|silk)(?! .+? mobile))", "i"),
            t = new RegExp("Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune", "i");
        return n.test(e) ? "tablet" : t.test(e) ? "mobile" : "desktop"
    }
    n.autoDetect = function(e) {
        var n = screen.width,
            i = screen.height,
            r = function(e) {
                void 0 === (e = !!e) && (document.cookie = "testcookie", e = -1 != document.cookie.indexOf("testcookie"));
                return e
            }(navigator.cookieEnabled);
        return e ? {
            cookies: r,
            w: n,
            h: i
        } : t(navigator.userAgent, navigator.appVersion, navigator.appName, n, i, r)
    }, n.detect = t, n.detectPlatform = i
}, function(e, n) {
    function t(e, n) {
        return window._snigelConfig && window._snigelConfig.settings && window._snigelConfig.settings[e] ? window._snigelConfig.settings[e].objName : window.snigelPubConf && window.snigelPubConf.argus && window.snigelPubConf.argus[e] ? window.snigelPubConf.argus[e] : n
    }
    n.getAdEngineObjectName = function() {
        return t("adngin", "adngin")
    }, n.getApstagObjectName = function() {
        return t("apstag", "apstag")
    }, n.getGptObjectName = function() {
        return t("gpt", "googletag")
    }, n.getPbjsObjectName = function() {
        return t("pbjs", "pbjs")
    }
}, function(e, n, t) {
    var i = t(0),
        r = t(2),
        o = t(1),
        a = t(5),
        s = t(4),
        d = t(3);
    n.init = function() {
        var e = i.get(),
            n = r.get();
        if (window[e.tags.adengineName]) {
            var t = window[e.tags.adengineName];
            t.queue.push((function() {
                e.tags.adengine = t, n.country = t.config.country, n.region = t.config.region, n.adengine = {
                    build: t.config.build,
                    configVersion: t.config.id,
                    tagId: t.config.cfwUuid
                }, t.cmd.getEvents(null, (function(e) {
                    e && e.data && e.data.forEach((function(e) {
                        window.addEventListener(e, (function(n) {
                            ! function(e, n, t) {
                                var i;
                                t = a.validateTimeNow(t), d.isDebugEnabled() && (i = i || s.cloneObject(n), d.addEvent("adngin", e, i, t)), o.enabled(o.level.info) && (i = i || s.cloneObject(n), o.info(e, i))
                            }(e, n && n.detail ? n.detail : {})
                        }))
                    }))
                }))
            }))
        }
    }
}, function(e, n, t) {
    var i = t(2),
        r = t(1);

    function o(e, n, t) {
        var o = i.get();
        o.consentRegion = e, o.consent = n, t || (t = "Consent region [" + e + "], consent: " + n), r.debug(t)
    }
    n.init = function() {
        window.__tcfapi ? __tcfapi("addEventListener", 2, (function(e, n) {
            if (!n || "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus) n && e.gdprApplies && "cmpuishown" === e.eventStatus && o("gdpr", void 0, "Consent unknown, waiting for user input");
            else {
                var t = "none",
                    i = !0;
                if (e.gdprApplies) {
                    t = "gdpr";
                    var a = e.vendor ? e.vendor.consents : void 0,
                        s = e.purpose ? e.purpose.consents : void 0;
                    if (i = a && s)
                        for (var d = [755, 1076, 32], u = 0, c = d.length; u < c; ++u)
                            if (!e.vendor.consents[d[u]]) {
                                r.debug("[gdpr] no vendor consent"), i = !1;
                                break
                            }
                    if (i) {
                        var f = Object.keys(e.purpose.consents);
                        if (i = f.length > 0)
                            for (var g = 0, p = f.length; g < p; ++g)
                                if (!e.purpose.consents[f[g]]) {
                                    r.debug("[gdpr] no purpose consent"), i = !1;
                                    break
                                }
                    }
                } else {
                    if (window.__uspapi) return void __uspapi("getUSPData", 1, (function(e, n) {
                        n && "1---" != e.uspString && (t = "ccpa", "Y" == e.uspString.toUpperCase().charAt(2) && (r.debug("[ccpa] no consent"), i = !1)), o(t, i)
                    }));
                    r.debug("__uspapi not found")
                }
                o(t, i)
            }
        })) : r.debug("__tcfapi not found")
    }
}, function(e, n, t) {
    var i = t(0),
        r = t(2),
        o = t(1),
        a = t(7),
        s = t(11),
        d = t(6),
        u = t(5),
        c = t(4),
        f = t(3),
        g = void 0,
        p = {
            auctionInit: function(e, n) {
                s.initPbjsAuction(e, n)
            },
            auctionEnd: function(e, n) {
                var t = s.getAuction(e.auctionId);
                if (!t) {
                    var r = e.auctionEnd - e.timestamp,
                        a = n;
                    a > r && (a -= r), t = s.initPbjsAuction(e, a), e.bidderRequests.forEach((function(e) {
                        l("bidRequested", e, n, !0)
                    })), e.bidsReceived.forEach((function(e) {
                        l("bidResponse", e, n, !0)
                    })), e.noBids.forEach((function(e) {
                        l("noBid", e, n, !0)
                    })), e.winningBids.forEach((function(e) {
                        l("bidWon", e, n, !0)
                    }))
                }
                t.event.pbjs.userId = function(e) {
                    var n = {
                            state: "notAvailable",
                            modules: [],
                            resolved: 0,
                            configured: 0
                        },
                        t = g.getConfig();
                    t.userSync && t.userSync.userIds && (n.configured = t.userSync.userIds.length);
                    if (0 == e.length) return n;

                    function i(e, n) {
                        var t = !0;
                        if (n) {
                            var i = 0;
                            for (var r in n) i++, -1 == e.indexOf(r) && (e.push(r), t = !1);
                            e.length != i && (t = !1)
                        } else e.length > 0 && (t = !1);
                        return t
                    }
                    var r = !0,
                        a = !0;
                    e.forEach((function(e) {
                        e.bids.forEach((function(e) {
                            a ? (a = !1, e.userId && (n.modules = Object.keys(e.userId || {}))) : e.userId && (r = r && i(n.modules, e.userId))
                        }))
                    })), r = r && i(n.modules, g.getUserIds()), n.resolved = n.modules.length, n.modules.length > 0 && r ? n.state = "available" : n.modules.length > 0 && !r && (n.state = "notConsistent", o.debug("pbjs inconsistent userIds"));
                    return n
                }(e.bidderRequests), e.bidderRequests.forEach((function(e) {
                    v(e, t, d.state.bidTimeout)
                })), s.endPbjsAuction(t, e, n), s.startTimerPostAuctionEvent(t, i.get().auctionEventDelay)
            },
            bidRequested: function(e) {
                if (i.get().pbjsIgnoreIncompleteEvents && !s.getAuction(e.auctionId)) return;
                e.bids.forEach((function(n) {
                    var t = "s2s" === n.src ? d.channel.pbs : d.channel.pb;
                    n.bidder === d.bidder.amazon && (t = d.channel.aps);
                    var i = s.createBid(n.bidder, t);
                    i.id = s.getBidIdHash(e.auctionId, n.bidId, n.params), s.addBid(e.auctionId, n.adUnitCode, n.bidId, i)
                }))
            },
            bidResponse: function(e) {
                if (i.get().pbjsIgnoreIncompleteEvents && !s.getAuction(e.auctionId)) return;
                var n = s.getBidInfo(e.auctionId, e.adUnitCode, e.requestId).bid;
                if (n.cpm > e.cpm) return;
                n.state == d.state.bidTimeout ? (n.state = d.state.bidResponseTimeout, n.channel == d.channel.pbs && void 0 === n.serverResponseTime && (n.serverResponseTime = n.serverTimeout)) : n.state = d.state.bidResponse;
                e.status == d.state.bidRejected && (n.state = d.state.bidRejected);
                n.cpm = e.cpm, n.currency = e.currency, n.origCpm = e.originalCpm, n.origCurrency = e.originalCurrency, n.size = e.size, !n.size && e.width && e.height && (n.size = e.width + "x" + e.height);
                "undefinedxundefined" == n.size && (n.size = "1x1");
                n.mediaType = e.mediaType, n.responseTime = e.timeToRespond, n.channel === d.channel.aps && (n.bidder = e.subBidder || n.bidder)
            },
            noBid: function(e, n) {
                if (i.get().pbjsIgnoreIncompleteEvents && !s.getAuction(e.auctionId)) return;
                var t = s.getBidInfo(e.auctionId, e.adUnitCode, e.bidId),
                    r = t.bid;
                void 0 === r.state && (r.state = d.state.noBid, r.responseTime = u.getSafeTimeDiff(t.auction.start, n))
            },
            bidTimeout: function(e) {
                if (i.get().pbjsIgnoreIncompleteEvents && !s.getAuction(e.auctionId)) return;
                e.forEach((function(e) {
                    var n = s.getBidInfo(e.auctionId, e.adUnitCode, e.bidId).bid;
                    void 0 === n.state && (n.state = d.state.bidTimeout)
                }))
            },
            bidderDone: function(e) {
                if (i.get().pbjsIgnoreIncompleteEvents && !s.getAuction(e.auctionId)) return;
                v(e)
            },
            bidWon: function(e, n) {
                if (i.get().pbjsIgnoreIncompleteEvents && !s.getAuction(e.auctionId)) return;
                var t = s.findBidInfo(e.auctionId, e.adUnitCode, e.requestId);
                if (!t) throw new Error("Cannot find initial bidResponse for bidWon for " + e.requestId + " for ad-unit " + e.adUnitCode + " for auction " + e.auctionId);
                var r = c.cloneObject(t.bid);
                r.state = d.state.bidWon, (t = s.addBidWon(e.auctionId, e.adUnitCode, r, n, !0)).bid.responseTime = u.getSafeTimeDiff(t.auction.start, n, r.responseTime), s.endAdUnitAuction(t.auction, t, n, !0)
            },
            auctionDebug: function(e) {
                "WARNING" != e.type && a.queue("prebid", c.serializePbjsEvent(e))
            },
            adRenderFailed: function(e) {
                a.queue("prebid", e)
            },
            tcf2Enforcement: function(e) {
                a.queue("prebid", e)
            }
        };

    function l(e, n, t, i) {
        var r = p[e];
        if (r) {
            var a;
            t = u.validateTimeNow(t), f.isDebugEnabled() && !i && (a = a || c.serializePbjsEvent(n), f.addEvent("pbjs", e, a, t)), o.enabled(o.level.info) && (a = a || c.serializePbjsEvent(n), o.info(e, a));
            try {
                r(n, t)
            } catch (t) {
                a = a || c.serializePbjsEvent(n), o.error(e, t, a)
            }
        }
    }

    function v(e, n, t) {
        n = n || e.auctionId, e.bids.forEach((function(i) {
            var r = s.getBidInfo(n, i.adUnitCode, i.bidId);
            r.bid.state = r.bid.state || t, "s2s" == i.src && (u.updateValueWhenUndefined(r.bid, "responseTime"), r.bid.serverResponseTime = e.serverResponseTimeMs || r.bid.serverResponseTime, r.bid.serverTimeout = e.timeout || r.bid.serverTimeout)
        }))
    }
    n.init = function() {
        var e = i.get(),
            n = r.get();
        window[e.tags.pbjsName] = window[e.tags.pbjsName] || {
            que: []
        }, (g = window[e.tags.pbjsName]).que.push((function() {
            e.tags.pbjs = g, n.pbjs = {
                version: g.version
            };
            var t = function(e) {
                g.onEvent(e, (function(n, t) {
                    l(e, n, t)
                }))
            };
            for (var i in p) t(i);
            g.getEvents().forEach((function(e) {
                l(e.eventType, e.args, e.elapsedTime)
            }))
        }))
    }
}, function(e, n, t) {
    var i = t(0),
        r = t(2),
        o = t(1),
        a = t(11),
        s = t(6),
        d = t(5),
        u = t(4),
        c = t(3),
        f = {
            slotRequested: function(e, n) {
                a.initGptAuction(e, n)
            },
            slotResponseReceived: function(e, n) {
                var t = e.slot.getSlotElementId(),
                    i = a.getActiveGptAuction(t);
                if (i) {
                    a.getAdUnitInfo(i, t).adUnitsMapEntry.gpt.end = n, i.event.gpt.time = d.getSafeTimeDiff(i.event.gpt.start, n)
                }
            },
            slotRenderEnded: function(e, n) {
                var t = e.slot.getSlotElementId(),
                    i = a.getActiveGptAuction(t);
                if (i) {
                    var r = a.getAdUnitInfo(i, t),
                        o = r.adUnitsMapEntry.gpt;
                    o.end = o.end || n, o.time = d.getSafeTimeDiff(o.start, o.end), o.renderEnded = !0;
                    var u = {
                            campaignId: e.campaignId || void 0,
                            lineItemId: e.lineItemId || e.sourceAgnosticLineItemId || void 0,
                            targetingMap: o.targetingMap
                        },
                        c = a.getBidWon(r);
                    c || ((c = a.createBid(s.bidder.unfilled, s.channel.gpt, s.state.bidWon)).responseTime = d.getSafeTimeDiff(i.start, n), !0 !== e.isEmpty && (c.bidder = s.bidder.gam, e.size && 2 == e.size.length && (c.size = e.size[0] + "x" + e.size[1])), a.addBidWon(i, r.adUnit.code, c, n)), c.gam = u, a.endAdUnitAuction(i, r, n)
                }
            },
            slotOnload: function(e, n) {},
            slotVisibilityChanged: function(e, n) {},
            impressionViewable: function(e, n) {}
        };
    n.init = function() {
        var e = i.get(),
            n = r.get();
        window[e.tags.gptName] = window[e.tags.gptName] || {
            cmd: []
        };
        var t = window[e.tags.gptName];
        t.cmd.push((function() {
            e.tags.gpt = t, n.gpt = {
                version: t.getVersion()
            };
            var i = function(e) {
                t.pubads().addEventListener(e, (function(n, t) {
                    ! function(e, n, t, i) {
                        var r = f[e];
                        if (r) {
                            var a;
                            t = d.validateTimeNow(t), c.isDebugEnabled() && !i && (a = a || u.serializeGptEvent(n), c.addEvent("gpt", e, a, t)), o.enabled(o.level.info) && (a = a || u.serializeGptEvent(n), o.info(e, a));
                            try {
                                "publisher_ads" == n.serviceName ? r(n, t) : o.debug("Invalid gpt event")
                            } catch (t) {
                                a = a || u.serializeGptEvent(n), o.error(e, t, a)
                            }
                        }
                    }(e, n, t)
                }))
            };
            for (var r in f) i(r)
        }))
    }
}, function(e, n, t) {
    var i = t(0),
        r = t(2);
    n.init = function() {
        var e = i.get(),
            n = r.get(),
            t = window[e.tags.aptName];
        t && (e.tags.apt = t, n.apt = {
            version: "0"
        })
    }
}, function(e, n, t) {
    var i = t(1);

    function r(e) {
        try {
            "function" == typeof e ? e() : i.warn("Cannot execute command, because not a function", e)
        } catch (e) {
            i.error("execute command failed", e)
        }
    }
    n.init = function() {
        window.argus.cmd && window.argus.cmd.length > 0 && function(e) {
            for (; e.length > 0;) r(e[0]), e.splice(0, 1)
        }(window.argus.cmd), window.argus.cmd = {
            push: r
        }
    }
}]);