! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(i, r, function(t) {
                return e[t]
            }.bind(null, r));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 12)
}([function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "udef", (function() {
        return i
    })), n.d(t, "uuid", (function() {
        return r
    })), n.d(t, "wPerf", (function() {
        return o
    })), n.d(t, "snConfigName", (function() {
        return a
    })), n.d(t, "snPubConfName", (function() {
        return s
    })), n.d(t, "coreObjName", (function() {
        return d
    })), n.d(t, "snConf", (function() {
        return c
    })), n.d(t, "snPubConf", (function() {
        return l
    })), n.d(t, "coreObj", (function() {
        return u
    })), n.d(t, "pbjsObjName", (function() {
        return g
    })), n.d(t, "pbjsObj", (function() {
        return f
    })), n.d(t, "coreEvents", (function() {
        return m
    }));
    var i = void 0,
        r = "10000000-1000-4000-8000-100000000000".replace(/1|0/g, (function() {
            return (0 | 16 * Math.random()).toString(16)
        })),
        o = window.performance,
        a = "_snigelConfig",
        s = "snigelPubConf",
        d = window[a].settings.adngin.objName,
        c = window[a],
        l = window[s],
        u = window[d],
        g = window[a].settings.pbjs.objName,
        f = window[g],
        m = {
            coreLoaded: d + "Loaded",
            coreReady: d + "Ready",
            coreAuctionStart: d + "AuctionStart",
            coreAuctionAdUnitsFiltered: d + "AuctionAdUnitsFiltered",
            coreAuctionAdUnitsSizeMapped: d + "AuctionAdUnitsSizeMapped",
            coreAuctionAdUnitsSet: d + "AuctionAdUnitsSet",
            coreAuctionAdUnitsReady: d + "AuctionAdUnitsReady",
            coreBiddingPhaseStart: d + "BiddingPhaseStart",
            corePbjsBiddingStart: d + "PbjsBiddingStart",
            corePbjsBiddingEnd: d + "PbjsBiddingEnd",
            coreTamBiddingStart: d + "TamBiddingStart",
            coreTamBiddingEnd: d + "TamBiddingEnd",
            coreBiddingPhaseEnd: d + "BiddingPhaseEnd",
            coreAdServerPhaseStart: d + "AdServerPhaseStart",
            coreAdServerStart: d + "AdServerStart",
            coreAdServerEnd: d + "AdServerEnd",
            coreAuctionEnd: d + "AuctionEnd",
            coreLotViewable: d + "LotViewable",
            coreFirstAd: d + "FirstAd"
        }
}, function(e, t, n) {
    var i = n(14),
        r = n(0),
        o = {
            off: 0,
            error: 1,
            warn: 2,
            info: 3,
            debug: 4
        },
        a = o.error,
        s = r.coreObj.log = [];

    function d(e, t) {
        var n = function(e, t) {
            return (e = [].slice.call(e)).unshift("【" + r.coreObjName + "】(" + i.getPerformanceTimeStamp() + ") " + t.toUpperCase() + ":"), e
        }(t, e);
        s.push({
            type: e,
            msg: n
        }), 0 !== a && window.console[e] && a >= o[e] && console[e].apply(console, n)
    }
    t.setLogLevel = function(e) {
        return !!o.hasOwnProperty(e) && (a = o[e], !0)
    }, t.showHistory = function() {
        s.forEach((function(e) {
            console[e.type].apply(console, e.msg)
        }))
    }, t.getHistory = function() {
        return s
    }, t.fatal = function() {
        if (window.argus) {
            var e = 1 === arguments.length && arguments[0] instanceof Error ? {
                stack: arguments[0].stack
            } : {
                log: arguments,
                stack: (new Error).stack
            };
            window.argus.cmd.push((function() {
                window.argus.queueError("adngin", e)
            }))
        }
        d("error", arguments)
    }, t.error = function() {
        d("error", arguments)
    }, t.warn = function() {
        d("warn", arguments)
    }, t.info = function() {
        d("info", arguments)
    }, t.debug = function() {
        d("debug", arguments)
    }
}, function(e, t) {
    e.exports = {
        queueEnabled: !1,
        coreReady: !1,
        window: {
            innerWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            innerHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        },
        activeLots: {},
        debugMode: !1,
        availableBidders: [],
        auction: {
            deferredBy: [],
            running: !1,
            activeLabels: [],
            requestedLots: {},
            lots: {},
            adUnits: [],
            gracePeriodRunning: !1,
            gracePeriodMs: 25,
            queuedLots: {}
        },
        bidding: {
            deferredBy: []
        },
        adServer: {
            deferredBy: {},
            isManualCall: !1,
            enabled: !0
        }
    }
}, function(e, t, n) {
    var i, r = n(9),
        o = r.getValueByPath,
        a = r.cloneValueByPath;

    function s() {
        return void 0 !== i
    }
    e.exports = {
        init: function(e) {
            if (void 0 !== i) throw SyntaxError("Domain configuration was already initialized.");
            i = e
        },
        get: function(e) {
            if (!s()) throw SyntaxError("Can't get '".concat(e, "'. Domain configuration was not initialized."));
            return o(i, e)
        },
        clone: function(e) {
            if (!s()) throw SyntaxError("Can't clone '".concat(e, "'. Domain configuration was not initialized."));
            return a(i, e)
        }
    }
}, function(e, t, n) {
    var i = n(1),
        r = [],
        o = {},
        a = null;

    function s(e, t, n) {
        for (var o in r) {
            var a = r[o][e];
            if (a) {
                for (var s = n ? "capture" : "noCapture", d = a[s], c = d.cbs, l = c.length - 1; l >= 0; l--) c[l].cb === t && (c.splice(l, 1), i.debug("Removed internal event handler for event '" + e + "', using " + s));
                0 == c.length && d.cb && (r[o].target.removeEventListener(e, d.cb, n), i.debug("Removed browser event listener for event '" + e + "', using " + s))
            }
        }
    }
    e.exports = {
        initMetrics: function(e) {
            if (a) throw SyntaxError("Metrics object was already initialized.");
            a = e
        },
        dispatchEvent: function(e, t) {
            if ((t = t || {}).isUnique && o[e]) i.warn("Unique event '" + e + "' was already dispatched. Cannot dispatch again.");
            else {
                var n = t.eventDetail ? {
                        detail: t.eventDetail
                    } : null,
                    r = t.dispatcher || window;
                o[e] = (o[e] || 0) + 1, a && a.recordTiming(t.metricsAction || e), i.debug("Dispatching Event '" + e + "'."), r.dispatchEvent(new CustomEvent(e, n))
            }
        },
        wasEventAlreadyDispatched: function(e) {
            return o[e] || 0
        },
        addEventListener: function(e, t, n) {
            var o = (n = n || {}).useCapture,
                a = n.eventTarget || window;
            if (a.addEventListener) {
                for (var d = null, c = 0; c < r.length; c++)
                    if (r[c].target === a) {
                        d = r[c];
                        break
                    }
                d || (d = {
                    target: a
                }, r.push(d)), d[e] = d[e] || {
                    capture: {
                        cbs: []
                    },
                    noCapture: {
                        cbs: []
                    }
                };
                var l = o ? "capture" : "noCapture",
                    u = d[e][l];
                0 == u.cbs.length && (i.debug("Added a browser event listener for event '" + e + "', using " + l), u.cb = function(e) {
                    for (var t = 0; t < u.cbs.length; t++) u.cbs[t].execCb(e)
                }, a.addEventListener(e, u.cb, o));
                var g = t,
                    f = "";
                n.polledInMs > 0 ? (g = function(e, t) {
                    var n = null;
                    return function(i) {
                        n || (n = setTimeout((function() {
                            clearTimeout(n), n = null, t(i)
                        }), e))
                    }
                }(n.polledInMs, t), f = "with a polling of " + n.polledInMs + "ms.") : n.gracePeriodInMs > 0 ? (g = function(e, t) {
                    var n = null;
                    return function(i) {
                        n && clearTimeout(n), n = setTimeout((function() {
                            t(i)
                        }), e)
                    }
                }(n.gracePeriodInMs, t), f = "with a grace period of " + n.gracePeriodInMs + "ms.") : n.oneTimeEvent && (g = function(e, t, n) {
                    return function(i) {
                        t(i), s(e, t, n)
                    }
                }(e, t, o), f = "as a one time event."), u.cbs.push({
                    cb: t,
                    execCb: g
                }), i.debug("Added a new internal event handler for event '" + e + "', " + f)
            } else i.error("Unable to set event listener to the given object, it can't handle events")
        },
        removeEventListener: s
    }
}, function(e, t, n) {
    var i = n(2),
        r = n(0),
        o = n(1),
        a = n(4),
        s = n(3),
        d = n(7),
        c = Object.freeze({
            square: "square",
            vertical: "vertical",
            horizontal: "horizontal"
        }),
        l = {},
        u = {},
        g = {};

    function f(e) {
        var t = e[0] / e[1];
        return 1 === t ? c.square : t < 1 ? c.vertical : t > 1 ? c.horizontal : void 0
    }

    function m(e, t, n) {
        var i = {
            placements: {}
        };
        return n.code.indexOf("-adaptive-group-") >= 0 && o.fatal("Adaptive recursive naming error"), e.forEach((function(e, r) {
            var a = n.code + "-adaptive-group-" + t + "-placement-" + r,
                s = i.placements[a] = {};
            s.sizes = e, s.adUnit = function(e, t, n, i) {
                var r = JSON.parse(JSON.stringify(e));
                return r.code = i, r.mediaTypes = {
                    banner: {
                        sizes: t
                    }
                }, r.activeSizes = n, -1 !== d.getExcludedPlacements().indexOf(e.code) && d.excludePlacement(i), o.debug("Adaptive original ad-unit:", e), o.debug("Adaptive derived ad-unit :", r), r
            }(n, e, t > 0 ? e : n.activeSizes, a)
        })), i
    }

    function v(e, t, n, i) {
        var a = function(e, t, n) {
            if (!e) return null;
            n === r.udef && (n = !0);
            var i, a = f(e);
            if (c[a] === c.vertical) t.sort((function(e, t) {
                return t[1] - e[1]
            })), i = 1;
            else {
                if (c[a] !== c.horizontal) return null;
                ! function(e) {
                    e.sort((function(e, t) {
                        return t[0] - e[0]
                    }))
                }(t), i = 0
            }
            var s = {};
            t.forEach((function(t) {
                for (var r = e[i], o = t[i], a = Math.floor(r / o); a > 0; a--)
                    for (var d = s[a] = s[a] || [], c = d[0] = d[0] || [], l = 0; l < a; l++) {
                        var u = c[l] = c[l] || [];
                        u.length && 1 !== a && n || u.push(t)
                    }
            }));
            var d = Object.keys(s).map((function(e) {
                return "\n\tGroups with " + e + " placement(s):" + s[e].map((function(e, t) {
                    return "\n\t  Group-" + t + ":" + e.map((function(e, t) {
                        return "\n\t    Placement-" + t + ": [" + e.map((function(e) {
                            return e.join("x")
                        })).join(", ") + "]"
                    })).join("")
                })).join("")
            })).join("");
            return o.debug("Ad Space grouping:", d), s
        }(t, n, i);
        if (!a) return o.warn("No adaptive placement groups available."), null;
        var s = [];
        return Object.keys(a).forEach((function(t, n) {
            a[t].forEach((function(t, i) {
                s.push(m(t, n + i, e))
            }))
        })), s
    }

    function p(e) {
        var t = function(e) {
                return e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes ? e.mediaTypes.banner.sizes.concat() : null
            }(e),
            n = function(e) {
                var t = null;
                return e && (t = [0, 0], e.forEach((function(e) {
                    t[0] = Math.max(e[0], t[0]), t[1] = Math.max(e[1], t[1])
                }))), t
            }(t),
            i = e.adaptive.uniformGrouping,
            r = e.adaptive.sizeConstriction;
        o.debug("Available adaptive ad-space size: " + JSON.stringify(n));
        var a = v(e, n, t, i);
        if (!a) return null;
        var d = {
            placementId: e.code,
            pbAdUnitName: e.name,
            size: n,
            uniformGrouping: i,
            sizeConstriction: r,
            placementGroups: a,
            parallaxEnabled: s.get("modules.parallax.enabled") && e.parallax
        };
        return o.debug("Created adaptive ad-space:", d), d
    }

    function b(e) {
        var t = e.code,
            n = e.name;
        i.auction.requestedLots[t] = n, i.auction.lots[t] = n;
        var r = i.activeLots;
        (r[t] = r[t] || {}).adUnit = n, i.auction.adUnits.push(e)
    }

    function h(e) {
        var t = e.code,
            n = e.name,
            r = document.getElementById(t);
        r && (r.remove(), o.debug("Removing unused adaptive Ad-Space group placement '".concat(t, "'.")));
        var a = i.activeLots[t];
        if (a) {
            var s = a.adSlot;
            s && googletag.cmd.push((function() {
                googletag.destroySlots([s]), o.debug("Removing unused GPT Ad-Slot for group placement '".concat(t, "'."))
            })), delete i.activeLots[t], o.debug("Removing unused adaptive Ad-Space lot (".concat(t, ":").concat(n, ")."))
        }
        delete g[t]
    }

    function y(e) {
        u[e.placementId] = e,
            function(e, t) {
                delete i.auction.requestedLots[e], delete i.auction.lots[e], delete i.activeLots[e];
                for (var n = i.auction.adUnits, r = n.length - 1; r >= 0; r--) {
                    var o = n[r];
                    if (o.code === e && o.name == t) return n.splice(r, 1), !0
                }
            }(e.placementId, e.pbAdUnitName), e.placementGroups.forEach((function(e) {
                var t = e.placements;
                for (var n in t) b(t[n].adUnit)
            }))
    }

    function A(e) {
        Array.from(e).forEach((function(e) {
            if (e.adaptive && !0 === e.adaptive.enabled)
                if (L(e.code) === e.code) {
                    o.debug("Found adaptive lot in auction: (" + e.code + ":" + e.name + ")");
                    var t = function(e) {
                        var t = p(e);
                        return o.debug("New adaptive ad-space:", t), t
                    }(e);
                    t && (o.debug("New adaptive ad-space:", t), y(t))
                } else ! function(e) {
                    var t = g[e.code];
                    t && (e.mediaTypes = t.adUnit.mediaTypes, e.activeSizes = t.adUnit.activeSizes, t.adUnit = e)
                }(e)
        })), Object.keys(A).length > 0 && o.debug("Active adaptive ad-spaces: ", JSON.parse(JSON.stringify(u)))
    }

    function w(e, t, n, i, r) {
        var o = document.getElementById(e);
        if (!o) return !1;
        i ? o.style.width = t[0] + "px" : o.style.minWidth = t[0] + "px", n || (o.style.minHeight = t[1] + "px"), o.style.display = "flex", o.style.justifyContent = "space-around", o.style.alignItems = "center";
        var a, s = f(t);
        for (var d in c[s] === c.vertical ? a = "column" : c[s] === c.horizontal && (a = "row"), o.style.flexDirection = a, r.placements) {
            var l = r.placements[d],
                u = document.getElementById(d);
            g[d] = l, u || ((u = document.createElement("div")).id = d, o.appendChild(u))
        }
    }

    function S(e) {
        var t = {};
        return e.forEach((function(e) {
            t[e.adUnitCode] = t[e.adUnitCode] || 0, t[e.adUnitCode] = Math.max(t[e.adUnitCode], e.cpm)
        })), t
    }

    function E() {
        for (var e in u) {
            var t = u[e],
                n = t.winningPlacementGroup;
            ((l[e] || {}).placementGroups || []).forEach((function(e) {
                for (var t in e.placements) n.placements[t] || (o.debug("Removing losing placement.", t), h(e.placements[t].adUnit))
            })), w(t.placementId, t.size, t.parallaxEnabled, t.sizeConstriction, n), l[t.placementId] = t
        }
    }

    function L(e) {
        return "string" == typeof e ? e.split("-adaptive-group-")[0] : ""
    }
    e.exports = {
        init: function(e, t) {
            a.addEventListener(r.coreEvents.coreAuctionAdUnitsReady, (function() {
                A(i.auction.adUnits)
            })), r.pbjsObj.que.push((function() {
                r.pbjsObj.onEvent("auctionEnd", (function(e) {
                    ! function(e) {
                        for (var t in u) {
                            var n = u[t],
                                i = 0,
                                o = r.udef;
                            n.placementGroups.forEach((function(t, n) {
                                for (var r in t.cpm = 0, t.placements) {
                                    var a = t.placements[r],
                                        s = e[r] || 0;
                                    a.cpm = 0, a.cpm = Math.max(a.cpm, s), t.cpm += a.cpm
                                }
                                t.cpm > i && (i = t.cpm, o = n)
                            })), o !== r.udef ? n.winningPlacementGroup = n.placementGroups[o] : n.winningPlacementGroup || (n.winningPlacementGroup = n.placementGroups[0])
                        }
                    }(S(e.bidsReceived))
                }))
            })), a.addEventListener(r.coreEvents.coreBiddingPhaseEnd, (function() {
                o.debug("Active Ad-Spaces results:", JSON.parse(JSON.stringify(u)))
            })), a.addEventListener(r.coreEvents.coreAdServerPhaseStart, (function() {
                e.doOnDomReady(E)
            }))
        },
        getAdaptiveBasePlacement: L,
        getAdaptiveSubPlacements: function(e) {
            var t = [e],
                n = u[e];
            if (n && n.winningPlacementGroup)
                for (var i in t = [], n.winningPlacementGroup.placements) t.push(i);
            return t
        },
        isAdaptiveSubPlacement: function(e) {
            return L(e) !== e
        },
        getAdaptivePlacementGroup: function(e) {
            if ("string" == typeof e) {
                var t = e.split("-adaptive-group-");
                if (t.length > 1) return Number(t[1].split("-placement-")[0])
            }
            return r.udef
        }
    }
}, function(e, t, n) {
    var i = n(1),
        r = {
            eventNames: ["impressionViewable", "slotOnload", "slotRenderEnded", "slotRequested", "slotResponseReceived", "slotVisibilityChanged"],
            eventListeners: {},
            activeEvent: void 0,
            addListenerQueue: [],
            removeListenerQueue: []
        };

    function o(e, t) {
        -1 !== r.eventNames.indexOf(e) && (r.activeEvent !== e ? r.eventListeners[e].push(t) : r.addListenerQueue.push({
            event: e,
            function: t
        }))
    }

    function a(e, t) {
        if (-1 !== r.eventNames.indexOf(e))
            if (r.activeEvent !== e)
                for (var n = r.eventListeners[e].length - 1; n >= 0; n--) t === r.eventListeners[e][n] && r.eventListeners[e].splice(n, 1);
            else r.removeListenerQueue.push({
                event: e,
                function: t
            })
    }
    r.eventNames.forEach((function(e) {
        var t;
        i.debug("Registering gpt event system listener for '" + e + "'."), r.eventListeners[e] = [], t = e, googletag.cmd.push((function() {
            googletag.pubads().addEventListener(t, (function(e) {
                r.activeEvent = t, r.eventListeners[t].forEach((function(n) {
                    try {
                        i.debug("Gpt event system triggering '" + n.name + "' on event '" + t + "'."), n(e)
                    } catch (e) {
                        i.error(e)
                    }
                })), r.activeEvent = void 0, r.addListenerQueue.forEach((function(e) {
                    o(e.event, e.function)
                })), r.addListenerQueue = [], r.removeListenerQueue.forEach((function(e) {
                    a(e.event, e.function)
                })), r.removeListenerQueue = []
            }))
        }))
    })), e.exports = {
        addEventListener: o,
        removeEventListener: a
    }
}, function(e, t, n) {
    var i = n(0),
        r = n(6),
        o = n(3);

    function a(e, t) {
        -1 === (e.excludedAdUnits || []).indexOf(t) && (function(e, t) {
            var n = !1;
            return e.length > 0 && i.pbjsObj && "function" == typeof i.pbjsObj.getAllWinningBids && i.pbjsObj.getAllWinningBids().some((function(i) {
                if (i.adUnitCode == t && -1 !== e.indexOf(i.bidderCode)) return n = !0, !0
            })), n
        }(e.excludedBidders || [], t) || function(e, t, n) {
            if (t) {
                var i = e.style,
                    r = e.label || "ADVERTISEMENT";
                if (!document.getElementById(n)) {
                    var o = document.createElement("div");
                    o.id = n, o.setAttribute("class", "sn_ad_label"), o.innerHTML = r, i && o.setAttribute("style", i), t.insertBefore(o, t.children[0])
                }
            }
        }(e, document.getElementById(t), "sn_ad_label_" + t))
    }
    e.exports = {
        init: function(e, t) {
            o.get("modules.adLabeling.enabled") && r.addEventListener("slotRenderEnded", (function(e) {
                a(o.get("modules.adLabeling"), e.slot.getSlotElementId())
            }))
        },
        setLabel: a,
        getExcludedPlacements: function() {
            return (o.get("modules.adLabeling") || {}).excludedAdUnits || []
        },
        excludePlacement: function(e) {
            var t = o.get("modules.adLabeling");
            if (t) {
                var n = t.excludedAdUnits || []; - 1 === n.indexOf(e) && n.push(e), t.excludedAdUnits = n
            }
        }
    }
}, function(e, t, n) {
    function i(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var i, r, o = [],
                a = !0,
                s = !1;
            try {
                for (n = n.call(e); !(a = (i = n.next()).done) && (o.push(i.value), !t || o.length !== t); a = !0);
            } catch (e) {
                s = !0, r = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw r
                }
            }
            return o
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    var o = n(2),
        a = n(0),
        s = n(4),
        d = n(6),
        c = n(3),
        l = n(7),
        u = n(5),
        g = {},
        f = window.scrollY,
        m = window.scrollY;

    function v(e) {
        return e + "-parallax"
    }

    function p(e, t, n, i, r, o) {
        var a, s = o.getBoundingClientRect(),
            d = s.top,
            c = s.bottom,
            l = 0;
        if (d <= t && c >= 0) {
            var u = i.config.topOffset,
                g = i.config.bottomOffset,
                f = o.offsetHeight - r.offsetHeight;
            l = function(e, t, n) {
                var i = 0;
                return "left" !== n && (i = "center" === n ? (e.offsetWidth - t.offsetWidth) / 2 : "right" === n ? e.offsetWidth - t.offsetWidth : Number(n) || 0), i
            }(i.elem, r, i.config.hAlign || "center"), a = d < u || window.scrollY >= e - t ? function(e, t) {
                return e ? 0 : t
            }(n, f) : c > t - g || 0 == window.scrollY ? function(e, t) {
                return e ? t : 0
            }(n, f) : function(e, t, n, i, r, o, a) {
                var s = r.top,
                    d = r.bottom,
                    c = r.height,
                    l = window.scrollY < n - a ? n - d - window.scrollY : a,
                    u = s - i + n + window.scrollY,
                    g = o <= u ? u : o,
                    f = (s - g) / (n - l - c - g);
                return t * (e ? f : 1 - f)
            }(n, f, t, e, s, u, g)
        } else a = -r.offsetHeight;
        return [l, a]
    }

    function b(e, t, n, i, r) {
        var o = e.config.reversed,
            a = window.visualViewport ? window.visualViewport.height : window.innerHeight,
            s = document.documentElement.scrollHeight;
        return e.isSuprallax ? function(e, t, n, i, r, o, a) {
            return a ? i.suprallaxTranslationY = n ? -r.offsetHeight + o.offsetHeight : 0 : (i.suprallaxTranslationY += (n ? 1 : -1) * (f - m) * function(e, t, n, i) {
                return e < t * (1 + i) ? n / (e - t) : n / (t * i)
            }(e, t, r.offsetHeight - o.offsetHeight, i.config.numPagesToScrollAd || 1), i.suprallaxTranslationY > 0 && (i.suprallaxTranslationY = 0), i.suprallaxTranslationY < -r.offsetHeight + o.offsetHeight && (i.suprallaxTranslationY = -r.offsetHeight + o.offsetHeight)), [0, i.suprallaxTranslationY]
        }(s, a, o, e, t, i, r) : p(s, a, o, e, t, i)
    }

    function h(e, t) {
        var n = g[e];
        if (n) {
            var r = v(e);
            if (n.elem = n.elem || document.getElementById(r), n.elem && (n.parallaxElem = n.parallaxElem || document.getElementById(e), n.parallaxElem)) {
                var o = n.parallaxElem;
                n.absElem = n.absElem || document.getElementById(r + "-abs");
                var a, s = n.absElem,
                    d = o.style,
                    c = 0;
                if (o.offsetHeight > s.offsetHeight + 2 * (parseInt(n.config.verticalPadding) || 0)) {
                    var l = i(b(n, o, 0, s, t), 2);
                    c = l[0], a = l[1]
                } else a = (s.offsetHeight - o.offsetHeight) / 2;
                d.transform = "translate(" + c + "px," + a + "px)"
            }
        }
    }

    function y() {
        for (var e in g) h(e)
    }

    function A(e) {
        var t, n = 0,
            i = e.parallax.doNotParallaxHeight || [];
        return (e.activeSizes || []).forEach((function(e) {
            Array.isArray(e) && 2 === e.length && (t = 1, i.indexOf(e[1]) < 0 && (t = e[1] * e[0] >= 242500 ? .3 : .5), n = Math.max(n, e[1] * t))
        })), n
    }

    function w(e, t, n, i, r, o) {
        var d = document.getElementById(n);
        if (d) {
            d.id = i;
            var c = document.createElement("div");
            c.id = i + "-abs";
            var g = document.createElement("div");
            for (g.id = n, t.parallax.verticalPadding && (g.style.paddingTop = t.parallax.verticalPadding, g.style.paddingBottom = g.style.paddingTop, g.style.textAlign = t.parallax.hAlign || "center"); d.children.length > 0;) g.appendChild(d.children[0]);
            c.appendChild(g), d.appendChild(c),
                function(e, t, n, i, r, o, d) {
                    var c = d.id,
                        g = 0;
                    i.enabled && (i.excludedAdUnits = i.excludedAdUnits || [], -1 === i.excludedAdUnits.indexOf(n) && (r > 0 && (r += g = 15, i.excludedAdUnits = i.excludedAdUnits || [], i.excludedAdUnits.push(n)), l.setLabel(i, c)), s.addEventListener(a.coreEvents.coreAdServerStart, (function() {
                        u.getAdaptiveSubPlacements(n).forEach((function(e) {
                            -1 === i.excludedAdUnits.indexOf(e) && i.excludedAdUnits.push(e)
                        }))
                    })));
                    var f = c + "-style";
                    t.adhesive || document.getElementById(f) || e.addStyleToDocument("[id='" + o.id + "']{" + t.parallax.style + "}", f), o.style = "position:absolute;left:0;right:0;bottom:0;top:" + g + "px;clip:rect(0,auto,auto,0);", d.style = "position:relative;contain:none;" + (r > 0 ? "height:" + r + "px;" : "")
                }(e, t, n, o, r, c, d)
        }
    }
    e.exports = {
        init: function(e, t) {
            c.get("modules.parallax.enabled") && c.get("adUnits").some((function(e) {
                return !!e.parallax
            })) && (function(e) {
                var t = c.get("modules.adLabeling");
                s.addEventListener(a.coreEvents.coreAuctionAdUnitsSet, (function() {
                    e.doOnDomReady((function() {
                        (o.auction.adUnits || []).forEach((function(n) {
                            if (n.parallax && !u.isAdaptiveSubPlacement(n.code)) {
                                var i = n.code,
                                    r = A(n);
                                if (!g[i]) {
                                    g[i] = {
                                        config: n.parallax,
                                        isSuprallax: n.adhesive
                                    };
                                    var o = v(i);
                                    document.getElementById(o) || w(e, n, i, o, r, t)
                                }
                            }
                        }))
                    }))
                }))
            }(e), function(e) {
                s.addEventListener("scroll", (function() {
                    m = f, f = window.scrollY, y()
                })), s.addEventListener("resize", (function() {
                    y()
                })), window.visualViewport && visualViewport.addEventListener("resize", (function() {
                    y()
                })), s.addEventListener(a.coreEvents.coreAuctionEnd, (function() {
                    e.doOnDomReady((function() {
                        for (var e in g) {
                            (o.activeLots[e] || {}).adSlot || h(e, !0)
                        }
                    }))
                })), d.addEventListener("slotRenderEnded", (function(e) {
                    e.slot && h(e.slot.getSlotElementId(), !0)
                }))
            }(e))
        },
        getAdUnitPlacement: function(e) {
            return e ? c.get("modules.parallax.enabled") && e.parallax ? v(e.code) : e.code : null
        },
        getParallaxContainerHeight: A
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (null != e) {
            var n = (t = t || "").split(".");
            if (1 === n.length && 0 === n[0].length) return e;
            for (var i = e, r = 0; r < n.length; r++) {
                var o = n[r];
                if (!i.hasOwnProperty(o)) return;
                i = i[o]
            }
            return i
        }
    }

    function r(e, t) {
        return JSON.parse(JSON.stringify(i(e, t)))
    }
    n.r(t), n.d(t, "getValueByPath", (function() {
        return i
    })), n.d(t, "cloneValueByPath", (function() {
        return r
    }))
}, function(e, t, n) {
    n(0);
    var i = n(2),
        r = {};
    e.exports = {
        get: function() {
            return r
        },
        add: function(e, t, n, o, a) {
            var s = "debug" + t.charAt(0).toUpperCase() + t.slice(1);
            r[t] = function(t, i) {
                return e.api.executeCommand(s, n, o, t, i)
            }, e.api.commands[s] = a, !0 === i.debugMode && e.debugMode.enableApiCommands()
        }
    }
}, function(e, t, n) {
    var i, r, o = n(2),
        a = n(0),
        s = n(1),
        d = n(4),
        c = n(3),
        l = n(5),
        u = {
            lotsTimeoutFunctions: {},
            activeLots: {},
            lotsWithStatus: {
                0: {
                    status: "Lots pending first view",
                    modes: {}
                },
                1: {
                    status: "Lots pending timeout",
                    modes: {}
                },
                2: {
                    status: "Lots pending viewability",
                    modes: {}
                },
                3: {
                    status: "Lots viewable, pending activity",
                    modes: {}
                },
                4: {
                    status: "Lots ready for refresh",
                    lots: {}
                }
            },
            auctionGracePeriodRunning: !1,
            userActive: !1,
            interactionGracePeriodMs: 5e3,
            windowHasFocus: document.hasFocus()
        };

    function g(e, t) {
        var n = u.lotsTimeoutFunctions[e];
        if (n) {
            var i = function(e, t) {
                e[t] && (clearTimeout(e[t]), delete e[t])
            };
            if (void 0 === t)
                for (var r in n) i(n, r);
            else i(n, t);
            return Object.keys(n) || delete u.lotsTimeoutFunctions[e], !0
        }
        return !1
    }

    function f(e) {
        g(e);
        var t = u.activeLots[e];
        if (t) {
            delete t.adUnit;
            var n = t.modes;
            if (n)
                for (var i in n) {
                    var r = n[i].status,
                        o = u.lotsWithStatus[r];
                    4 === r ? delete o.lots[e] : delete o.modes[i].lots[e]
                }
            delete t.modes, delete u.activeLots[e], s.debug("Canceling smart-refresh for placement: " + e)
        }
    }

    function m(e) {
        var t = 1;
        return e.triggerOnUserActive && e.triggerOnViewable && e.enableOnViewable ? t = 4 : e.triggerOnViewable && e.enableOnViewable ? t = 3 : e.enableOnViewable && (t = 2), t
    }

    function v(e, t, n, a) {
        var d = u.activeLots[e].modes[n],
            c = d.status;
        if (c != a) {
            var l = u.lotsWithStatus[c].modes[n],
                g = l.lots[e];
            if (g) {
                var v = u.lotsWithStatus[a];
                4 === a ? v.lots[e] = g : (v.modes[n] = v.modes[n] || {
                    lots: {}
                }, v.modes[n].lots[e] = g), d.status = a, delete l.lots[e], 4 === a && function(e, t) {
                    u.auctionGracePeriodRunning || (u.auctionGracePeriodRunning = !0, setTimeout((function() {
                        var n = [],
                            a = u.lotsWithStatus[4].lots;
                        for (var d in a) {
                            var c = a[d];
                            n.push({
                                placement: d,
                                adUnit: c
                            }), delete a[d], r.lots[d][c].refreshCountTotal++, r.lots[d][c].smartRefresh = r.lots[d][c].smartRefresh || {}, r.lots[d][c].smartRefresh[t] = r.lots[d][c].smartRefresh[t] || {
                                refreshCountTotal: 0
                            }, r.lots[d][c].smartRefresh[t].refreshCountTotal++, o.activeLots[d].smartRefresh = o.activeLots[d].smartRefresh || {}, o.activeLots[d].smartRefresh.isSmartRefreshImpression = !0;
                            var l = m(e);
                            s.info("Triggering smart-refresh mode '" + l + "'. Lot: (" + d + ":" + c + "), Refresh: " + r.lots[d][c].smartRefresh[t].refreshCountTotal + "/" + e.impressionLimit), o.activeLots[d].smartRefresh.mode = l, f(d)
                        }
                        u.currentAuctionIsSmartRefresh = !0, i.startAuction(n), u.auctionGracePeriodRunning = !1
                    }), u.refreshGracePeriodMs))
                }(t, n)
            }
        }
    }

    function p(e, t) {
        var n, i = u.lotsWithStatus[e].modes;
        for (modeIdx in i) {
            var r = i[modeIdx].lots;
            for (var o in r) t(o, n = u.activeLots[o].adUnit, n.smartRefresh[modeIdx], modeIdx)
        }
    }

    function b(e, t, n, a) {
        (!1 === n.enableOnViewable || !1 === n.enableAndTriggerOnViewable || i.isElementIdInView(e)) && (! function(e, t, n, i) {
            var a = t.name,
                d = 6e4,
                c = 0 === n.impressionLimit ? "∞" : n.impressionLimit,
                l = r.lots[e][a].smartRefresh[i].refreshCountTotal;
            if (!n.impressionLimit || n.impressionLimit <= 0 || l < n.impressionLimit) return n.intervalsSec && (d = 1e3 * n.intervalsSec[Math.min(l, n.intervalsSec.length - 1)]), s.info("Starting smart-refresh timeout. Lot: (" + t.code + ":" + t.name + "), Timeout: " + Math.round(d / 1e3) + "s, Refresh: " + (l + 1) + "/" + c), u.lotsTimeoutFunctions[e] = u.lotsTimeoutFunctions[e] || {}, u.lotsTimeoutFunctions[e][i] = (m = {
                adUnit: a,
                placement: e
            }, p = d, b = n, h = i, setTimeout((function() {
                var e = m.placement;
                if (function(e, t) {
                        var n = (o.activeLots[e] || {}).adSlot;
                        if (!n) return !1;
                        var i = t.campaignIdBlacklist || [],
                            r = t.lineItemIdBlacklist || [],
                            a = n.getResponseInformation();
                        if (a) {
                            var d = a.campaignId,
                                c = a.lineItemId,
                                l = -1 !== r.indexOf(c),
                                u = -1 !== i.indexOf(d),
                                g = "(" + e + ":" + o.activeLots[e].adUnit + ")";
                            if (l || u) {
                                var f = "Autorefresh lot " + g + " filled with blacklisted ";
                                return l && s.debug(f + "lineItemId: " + c), u && s.debug(f + "campaignId: " + d), !0
                            }
                            s.debug("No blacklisted entity detected in autorefresh lot " + g + ".")
                        }
                        return !1
                    }(e, b)) return f(e), !1;
                g(e, h);
                var t = !1 === b.triggerOnUserActive || u.userActive,
                    n = A(b, e, !0);
                s.debug("Smart-refresh timeout of " + p + "ms triggered. Lot: (" + e + ":" + m.adUnit + "), Lot viewable: " + n + ", User active: " + t), v(e, b, h, n ? t ? 4 : 3 : 2)
            }), p)), !0;
            var m, p, b, h
        }(e, t, n, a), v(e, n, a, 1))
    }

    function h(e, t, n, i) {
        A(n, e, !1) && v(e, n, i, u.userActive ? 4 : 3)
    }

    function y(e, t, n, i) {
        A(n, e, !1) || v(e, n, i, 2)
    }

    function A(e, t, n) {
        return !0 === e.triggerOnViewable || !0 === e.enableAndTriggerOnViewable ? i.isElementIdInView(t) : e.triggerOnPageViewable ? i.isDocumentVisible() : n
    }

    function w(e, t) {
        try {
            switch (t.context) {
                case "window":
                    d.addEventListener(t.event, E.functions[t.fn], {
                        eventTarget: e ? e.contentWindow : window,
                        polledInMs: t.pollFrequencyMs
                    });
                    break;
                case "document":
                    d.addEventListener(t.event, E.functions[t.fn], {
                        eventTarget: e ? e.contentDocument : document,
                        polledInMs: t.pollFrequencyMs
                    });
                    break;
                default:
                    s.warn("Unkown event context '" + t.context + "' adding user activity events" + (e ? " to iframe." : "."))
            }
        } catch (e) {
            s.error(e)
        }
    }

    function S(e, t, n) {
        var i = r.lots[n][t];
        i.refreshCountTotal = i.refreshCountTotal || 0, i.smartRefresh = i.smartRefresh || {};
        for (var o = e.smartRefresh, a = 0; a < o.length; a++) {
            i.smartRefresh[a] = i.smartRefresh[a] || {
                refreshCountTotal: 0
            };
            var d = o[a],
                c = i.smartRefresh[a].refreshCountTotal,
                l = m(d),
                g = d.impressionLimit;
            (!g || g <= 0) && (g = "unlimited");
            var f = c >= g;
            if (f && "unlimited" !== g) f && s.debug("Smart-refresh stopped for lot (" + n + ":" + t + "). Impression limit reached for mode '" + l + "': " + c + "/" + g);
            else {
                s.debug("Smart-refresh enabled for lot (" + n + ":" + t + "). Mode = " + l), u.activeLots[n] = u.activeLots[n] || {
                    adUnit: e,
                    modes: {}
                }, u.activeLots[n].modes[a] = {
                    status: 0
                };
                var v = u.lotsWithStatus[0];
                v.modes[a] = v.modes[a] || {
                    lots: {}
                }, v.modes[a].lots[n] = t
            }
        }
    }
    var E = {
        config: [{
            eventType: "moduleControl",
            event: a.coreEvents.coreAuctionEnd,
            context: "window",
            fn: "checkLotsAutorefresh",
            pollFrequencyMs: 0
        }, {
            eventType: "moduleControl",
            event: a.coreEvents.coreAdServerStart,
            context: "window",
            fn: "setAdServerTargeting",
            pollFrequencyMs: 0
        }, {
            eventType: "userActivity",
            event: "focus",
            context: "window",
            fn: "documentGotFocus",
            pollingFrequencyMs: 0
        }, {
            eventType: "userActivity",
            event: "blur",
            context: "window",
            fn: "documentLostFocus",
            pollingFrequencyMs: 0
        }, {
            eventType: "userActivity",
            event: "visibilitychange",
            context: "document",
            fn: "checkLotsViewability",
            pollingFrequencyMs: 0
        }, {
            eventType: "userActivity",
            event: "scroll",
            context: "document",
            fn: "checkLotsViewability",
            pollFrequencyMs: 250
        }, {
            eventType: "userActivity",
            event: "resize",
            context: "window",
            fn: "checkLotsViewability",
            pollFrequencyMs: 250
        }, {
            eventType: "userActivity",
            event: "scroll",
            context: "document",
            fn: "checkUserInteraction",
            pollFrequencyMs: 500
        }, {
            eventType: "userActivity",
            event: "resize",
            context: "window",
            fn: "checkUserInteraction",
            pollFrequencyMs: 500
        }, {
            eventType: "userActivity",
            event: "touchstart",
            context: "document",
            fn: "checkUserInteraction",
            pollFrequencyMs: 500
        }, {
            eventType: "userActivity",
            event: "mousemove",
            context: "document",
            fn: "checkUserInteraction",
            pollFrequencyMs: 500
        }, {
            eventType: "userActivity",
            event: "touchmove",
            context: "document",
            fn: "checkUserInteraction",
            pollFrequencyMs: 500
        }],
        init: function(e) {
            for (var t = E.config, n = 0; n < t.length; n++) {
                var i = t[n];
                e || (i.id = n), e && "userActivity" !== i.eventType || w(e, i)
            }
        },
        functions: {
            checkLotsAutorefresh: function(e) {
                var t = {};
                u.currentAuctionIsSmartRefresh = !1, o.auction.adUnits.forEach((function(e) {
                    if (e.smartRefresh) {
                        var n = e.code,
                            i = e.name;
                        if (t[n] !== i) {
                            t[n] = i, u.activeLots[n] && (s.info("Manual auction of active lot (" + n + ":" + i + ") detected. Stopping smart-refresh of placement '" + n + "'."), f(n));
                            var r = o.activeLots[n];
                            if (r) {
                                if ((r.smartRefresh = r.smartRefresh || {}).isSmartRefreshImpression = !1, r.adUnit !== e.name) return;
                                S(e, i, n)
                            }
                        } else s.debug("Unit '" + i + "': '" + n + "' has already been checked by SSR.")
                    }
                })), E.functions.checkLotsViewability()
            },
            setAdServerTargeting: function() {
                o.auction.adUnits.forEach((function(e) {
                    var t = e.name,
                        n = e.code;
                    if (o.activeLots[n] && o.activeLots[n].smartRefresh && o.activeLots[n].smartRefresh.isSmartRefreshImpression && o.activeLots[n].adSlot) {
                        var a = r.lots[n][t].refreshCountTotal;
                        i.addTargetingKeyValueToAdServer(n, "sn_ric", a), i.addTargetingKeyValueToAdServer(n, "sn_rm", o.activeLots[n].smartRefresh.mode), i.addTargetingKeyValueToAdServer(n, "sn_pd", a % 2 ? 1 : "0")
                    }
                }))
            },
            documentGotFocus: function() {
                u.windowHasFocus = !0, E.functions.checkUserInteraction()
            },
            documentLostFocus: function() {
                u.windowHasFocus = !1, E.functions.checkUserInteraction()
            },
            checkLotsViewability: function(e) {
                p(0, b), p(2, h), p(3, y)
            },
            checkUserInteraction: function(e) {
                if (!u.userActive) {
                    d.dispatchEvent(a.coreEvents.userNowActive);
                    var t = u.lotsWithStatus[3].modes;
                    for (var n in t) {
                        var i = t[n].lots;
                        for (var r in i) {
                            var o = u.activeLots[r].adUnit.smartRefresh;
                            4 === m(o[n]) && v(r, o[n], n, 4)
                        }
                    }
                }
                u.userActive = !0, clearTimeout(u.inactivityTimeout), u.inactivityTimeout = setTimeout((function() {
                    u.userActive = !1, d.dispatchEvent(a.coreEvents.userNowInactive)
                }), u.interactionGracePeriodMs)
            }
        }
    };
    e.exports = {
        init: function(e, t) {
            c.get("modules.smartRefresh.enabled") && (i = e, r = t, u.refreshGracePeriodMs = c.get("modules.smartRefresh.gracePeriodMs") || 25, a.coreEvents.userNowActive = a.coreObjName + "UserNowActive", a.coreEvents.userNowInactive = a.coreObjName + "UserNowInactive", E.init(), a.coreObj.cmd.registerSmartRefreshContentIframeById = function(e, t) {
                return i.api.executeCommand("registerSmartRefreshContentIframeById", a.coreObjName + "Ready", null, e, t)
            }, i.api.commands.registerSmartRefreshContentIframeById = function(e, t, n) {
                var r;
                try {
                    if ("string" != typeof e) throw new TypeError("Expecting argument to be an iframe id of type String");
                    if (null === (r = document.getElementById(e))) throw new Error("No iframe with id '" + e + "' found.");
                    if ("IFRAME" !== r.nodeName) throw new TypeError("Element with id '" + e.nodeName + "' is not an iframe.")
                } catch (e) {
                    return i.api.handleError(n, t, e)
                }
                try {
                    u.registeredIframes = u.registeredIframes || [], u.registeredIframes.push(r.id), E.init(r), r.addEventListener("load", (function() {
                        s.debug("Detected load event for iframe id '" + r.id + "'. Reapplying user activity event listeners."), E.init(r)
                    }))
                } catch (e) {
                    return i.api.handleError(n, t, e)
                }
                return i.runCallback(t, {
                    message: n + "Successfully registered iframe with id '" + r.id + "' for smart refresh event listeners.",
                    data: null
                }, !0), !0
            })
        },
        triggerLotSmartRefresh: function(e, t) {
            u.currentAuctionIsSmartRefresh = !1;
            var n = o.activeLots[e];
            n && ((n.smartRefresh = n.smartRefresh || {}).isSmartRefreshImpression = !1, (c.get("adUnits") || []).some((function(i) {
                return !(n.adUnit !== i.name || !i.smartRefresh) && (u.activeLots[e] && (s.info("Manual auction of active lot (" + e + ":" + i.name + ") detected. Stopping smart-refresh of placement '" + e + "'."), f(e)), t > 0 && ((i = JSON.parse(JSON.stringify(i))).smartRefresh || []).forEach((function(e) {
                    if (e.intervalsSec)
                        for (var n = 0; n < e.intervalsSec.length; n++) {
                            var i = e.intervalsSec[n] - t;
                            e.intervalsSec[n] = i > 0 ? i : 0
                        }
                })), S(i, i.name, e), !0)
            })) && E.functions.checkLotsViewability())
        },
        cancelLotSmartRefresh: f,
        setRefreshWithViewabilityOnly: function(e, t) {
            c.get("modules.smartRefresh.enabled") && e && l.getAdaptiveSubPlacements(e.code).forEach((function(n) {
                var i = ((u.activeLots[n] || {}).adUnit || e).smartRefresh;
                i && i.forEach((function(e) {
                    !t && e.triggerOnViewable && (e.triggerOnPageViewable = !0), e.enableAndTriggerOnViewable = t
                }))
            }))
        }
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var r = n(13),
        o = n(1),
        a = n(0),
        s = n(2);
    setTimeout((function() {
        var e = n(15),
            t = a.coreObj.config,
            d = n(3);
        d.init(t);
        var c = a.coreObj.metrics;
        c.auctions = [], c.lots = {}, a.pbjsObj.que = a.pbjsObj.que || [], r.init();
        var l = {
                parameters: {
                    environments: {
                        production: 0,
                        staging: 1,
                        testing: 2,
                        development: 3
                    }
                },
                labels: {
                    matchAny: function(e, t) {
                        "string" == typeof e && (e = [e]), "string" == typeof t && (t = [t]);
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            if (-1 !== t.indexOf(i)) return !0
                        }
                        return !1
                    },
                    matchAll: function(e, t) {
                        "string" == typeof e && (e = [e]), "string" == typeof t && (t = [t]);
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            if (-1 === t.indexOf(i)) return !1
                        }
                        return !0
                    },
                    matchNone: function(e, t) {
                        return !this.matchAny(e, t)
                    }
                },
                loadScriptAsync: function(e) {
                    var t = document.getElementsByTagName("script")[0],
                        n = document.createElement("script");
                    n.type = "text/javascript", n.src = e, n.async = !0, t.parentNode.insertBefore(n, t), o.info("Loading: '" + e + "'")
                },
                doOnDomReady: function(e) {
                    if ("interactive" === document.readyState || "complete" === document.readyState) e();
                    else {
                        o.info("DOM not ready yet. Queueing callback function."), document.addEventListener("DOMContentLoaded", (function t() {
                            document.removeEventListener("DOMContentLoaded", t, !1), o.info("DOM ready. Executing callback function."), e()
                        }), !1)
                    }
                },
                addTargetingKeyValueToAdServer: function(e, t, n) {
                    var i = e ? s.adServer.targeting[e] : null;
                    i && i.keyValues && (i.keyValues[t] = n)
                },
                getCoreObjName: function() {
                    return a.coreObjName
                },
                getCoreObj: function() {
                    return a.coreObj
                },
                getGeoTier: function(e) {
                    if (s.geoTier === a.udef) {
                        var t = 0;
                        ["IN", "PN", "CX", "MH", "MP", "SJ", "TV", "FK", "NR", "WF", "CF", "UM", "AI", "CC", "NF", "SH", "GL", "IO", "AQ", "SC", "MA", "ME", "MK", "FM", "VU", "NA", "VA", "GW", "PG", "MZ", "SL", "EG", "BA", "GE", "PW", "WS", "UG", "CI", "ML", "BW", "CV", "AD", "NC", "MS", "NG", "LR", "CD", "ID", "JO", "AL", "TM", "KM", "DZ", "AO", "BF", "KG", "AZ", "MW", "TJ", "TN", "CN", "ER", "KE", "TF", "DJ", "SN", "EH", "FO", "NU", "TG", "KH", "GH", "PK", "MN", "CK", "LB", "BJ", "MU", "ZW", "LY", "TZ", "MR", "UZ", "GM", "ZM", "VN", "FJ", "SZ", "PS", "MG", "TL", "TO", "AM", "MM", "NP", "ET", "SB", "RW", "CM", "LA", "LK", "LS", "YE", "BI", "SO", "AF", "BD", "TK", "BT"].indexOf(e) >= 0 && (o.debug("Tier-3 country found (" + e + ")."), t = 3), s.geoTier = t
                    }
                    return s.geoTier
                },
                addStyleToDocument: function(e, t) {
                    if (e) {
                        var n = document.head || document.getElementsByTagName("head")[0],
                            i = document.createElement("style");
                        i.type = "text/css", t && (i.id = t), i.appendChild(document.createTextNode(e)), n.appendChild(i)
                    }
                },
                initAdUnitCode: function(e) {
                    var n = t.elementPrefix;
                    n.length > 0 && (n += "-"), e.code = n + e.name + "-" + e.index
                },
                getAdUnitCode: function(e) {
                    for (var n = 0; n < t.adUnits.length; n++) {
                        var i = t.adUnits[n];
                        if (i.name === e) return i.code
                    }
                },
                adUnitExistsInArray: function(e, t) {
                    if (Array.isArray(t))
                        for (var n = 0; n < t.length; n++) {
                            if (t[n].name === e) return !0
                        }
                    return !1
                },
                getPerformanceTimeStamp: function(e) {
                    e === a.udef && (e = 2);
                    var t = l.getPerformanceNow(),
                        n = "ms";
                    return t / 1e3 >= 1 && (e += 2, t /= 1e3, n = "s"), t.toFixed(e) + n
                },
                getPerformanceNow: a.wPerf && a.wPerf.now ? function() {
                    return Math.floor(a.wPerf.now())
                } : function() {
                    return -1
                },
                metrics: {
                    recordTiming: function(e, t, n) {
                        t === a.udef && (t = "adngin"), n === a.udef && (n = l.getPerformanceNow()), c.timing[t] = c.timing[t] || {}, c.timing[t][e] = c.timing[t][e] || [], c.timing[t][e].push(n)
                    },
                    getDuration: function(e, t, n, i) {
                        return i === a.udef && (i = 0), c.timing[e] && c.timing[e][t] && c.timing[e][n] && c.timing[e][t][i] && c.timing[e][n][i] ? c.timing[e][n][i] - c.timing[e][t][i] : -1
                    },
                    getTimestamp: function(e, t, n) {
                        return n === a.udef && (n = 0), c.timing[e] && c.timing[e][t] && c.timing[e][t][n] ? c.timing[e][t][n] : -1
                    }
                },
                getAbsoluteVerticalViewabilityDistanceForElementId: function(e) {
                    var t = document.getElementById(e);
                    if (null === t) return 1 / 0;
                    var n = t.getClientRects();
                    if (!n || !n.length) return 1 / 0;
                    for (var i, r = 1e10, o = -1e10, a = 0; a < n.length; a++) r = r > (i = n[a]).top ? i.top : r, o = o < i.bottom ? i.bottom : o;
                    var s = (o + r) / 2,
                        d = s - (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
                    return (s ^ d) >>> 31 ? 0 : ~~Math.min(Math.abs(s), Math.abs(d))
                },
                isElementIdInView: function(e) {
                    return !(!l.isDocumentVisible() || 0 !== l.getAbsoluteVerticalViewabilityDistanceForElementId(e))
                },
                isDocumentVisible: function() {
                    return !document.visibilityState || "visible" === document.visibilityState
                },
                queue: {
                    pushCallback: function(e, t) {
                        e.push = function(n) {
                            Array.prototype.push.call(e, n), o.debug("Added new element to queue:", n), t(e)
                        }
                    },
                    process: function(e) {
                        if (e === a.udef && (e = []), !e.isProcessing && e.length > 0) {
                            if (e.isProcessing = !0, o.debug("Processing " + a.coreObjName + ".queue. Queue length:", e.length), "function" == typeof e[0]) try {
                                o.debug("Executing queue element:", e[0]), e[0]()
                            } catch (e) {
                                o.error(a.coreObjName + ".queue element error: ", e)
                            } else o.error(a.coreObjName + ".queue element error: detected " + i(e[0]) + " instead of function");
                            e.splice(0, 1), e.isProcessing = !1, e.length > 0 && l.queue.process(e)
                        }
                    }
                },
                runCallback: function(e, t, n) {
                    if (!e) return !1;
                    if (n === a.udef && (n = !0), "function" != typeof e) return o.error("Callback is not a function(): ", e), !1;
                    try {
                        return e(t, n)
                    } catch (e) {
                        return o.error("Callback error: ", e), !1
                    }
                },
                api: {
                    commands: {
                        getConfig: function(e, n, i) {
                            var r = t;
                            return l.runCallback(n, {
                                message: i + "data returned.",
                                data: r
                            }, !0), r
                        },
                        getStatus: function(e, t, n) {
                            var i = s;
                            return l.runCallback(t, {
                                message: n + "data returned.",
                                data: i
                            }, !0), i
                        },
                        getEvents: function(e, t, n) {
                            var i = Object.keys(a.coreEvents).map((function(e) {
                                return a.coreEvents[e]
                            }));
                            return l.runCallback(t, {
                                message: n + "data returned.",
                                data: i
                            }, !0), i
                        },
                        disableAutoRunAuction: function(e, n, i) {
                            return t.auction.autoRun = !1, l.runCallback(n, {
                                message: i + "Autorun auction disabled.",
                                data: null
                            }, !0), !0
                        },
                        startAuction: function(e, t, n) {
                            var i = l.startAuction(e);
                            return l.runCallback(t, {
                                message: n + "Starting auction.",
                                data: null
                            }, i), !0
                        },
                        disableAutoCallAdServer: function(e, n, i) {
                            return t.adServer.autoCall = !1, l.runCallback(n, {
                                message: i + "Autocall ad-server disabled.",
                                data: null
                            }, !0), !0
                        },
                        callAdServer: function(e, t, n) {
                            return s.adServer.isManualCall = !0, l.callAdServer(), l.runCallback(t, {
                                message: n + "Calling ad-server.",
                                data: null
                            }, !0), !0
                        },
                        setCustomAuctionLabels: function(e, t, n) {
                            var i, r, o = s.targetingFilter.customLabels;
                            try {
                                if (!Array.isArray(e)) throw new TypeError("Expecting argument of type Array");
                                for (i = 0; i < e.length; i++)
                                    if ("string" != typeof(r = e[i])) throw new TypeError("Expecting argument array of elements of type String")
                            } catch (e) {
                                return l.api.handleError(n, t, e)
                            }
                            for (i = 0; i < e.length; i++) r = e[i], -1 === o.indexOf(r) && o.push(r);
                            return l.runCallback(t, {
                                message: n + "Custom auction labels for next auction: (" + o.join(", ") + ")",
                                data: o
                            }, !0), !0
                        },
                        addGoogletagAdSlots: function(e, t, n) {
                            o.warn("Function is deprecated. Please replace with 'setGoogletagAdSlots'."), l.api.commands.setGoogletagAdSlots(e, t, n)
                        },
                        setGoogletagAdSlots: function(e, t, n) {
                            try {
                                if (!Array.isArray(e)) throw new TypeError("Expecting argument of type Array");
                                for (var i = [], r = 0; r < e.length; r++) {
                                    if ("function" != typeof e[r].getSlotElementId) throw new TypeError("Expecting argument Array elements of type googletag.Slot");
                                    i.push(e[r].getSlotElementId())
                                }
                            } catch (e) {
                                return l.api.handleError(n, t, e)
                            }
                            s.adServer.additionalAdSlots = e, s.adServer.additionalAdSlotsSetProgramatically = !0;
                            var a = n + "Added existing googletag adSlots for element ids '" + i.join("', '") + "' for ad-server call.";
                            return o.info(a), l.runCallback(t, {
                                message: a,
                                data: i
                            }, !0), !0
                        },
                        setGoogletagAdSlotElementIds: function(e, t, n) {
                            try {
                                if (!Array.isArray(e)) throw new TypeError("Expecting argument of type Array");
                                for (var i = 0; i < e.length; i++)
                                    if ("string" != typeof e[i]) throw new TypeError("Expecting argument Array elements of type String")
                            } catch (e) {
                                return l.api.handleError(n, t, e)
                            }
                            s.adServer.additionalAdSlotsElementIds = e, s.adServer.additionalAdSlotsElementIdsSetProgramatically = !0;
                            var r = n + "Added googletag adSlots element Ids '" + e.join("', '") + "' for ad-server call.";
                            return l.runCallback(t, {
                                message: n + "Added googletag adSlot for element ids " + e.join(", ") + ".",
                                data: e
                            }, !0), o.info(r), !0
                        },
                        getMetrics: function(e, t, n) {
                            var i = JSON.stringify(c),
                                r = JSON.parse(i);
                            return l.runCallback(t, {
                                message: n + "Returning metrics.",
                                data: r
                            }, !0), r
                        },
                        getTimeline: function(e, t, n) {
                            var i = {},
                                r = JSON.parse(JSON.stringify(c.timing));
                            for (var o in r)
                                for (var a in r[o]) r[o][a].forEach((function(e) {
                                    i[e] = {
                                        name: o,
                                        action: a
                                    }
                                }));
                            return l.runCallback(t, {
                                message: n + "Returning timeline.",
                                data: i
                            }, !0), i
                        },
                        getActiveLots: function(e, t, n) {
                            return l.runCallback(t, {
                                message: n + "Returning active lots.",
                                data: s.activeLots
                            }, !0), s.activeLots
                        },
                        getAvailableAdUnitNames: function(e, n, i) {
                            for (var r = [], o = 0; o < t.adUnits.length; o++) r.push(t.adUnits[o].name);
                            return l.runCallback(n, {
                                message: i + "Returning available ad-unit names.",
                                data: r
                            }, !0), r
                        },
                        showLog: function(e, t, n) {
                            var i = o.getHistory();
                            return o.showHistory(), l.runCallback(t, {
                                message: n + "Showing log history.",
                                data: i
                            }, !0), !0
                        },
                        enableDebug: function(e, t, n) {
                            return l.debugMode.enable(), l.runCallback(t, {
                                message: n + "Debug mode enabled.",
                                data: null
                            }, !0), !0
                        },
                        disableDebug: function(e, t, n) {
                            return l.debugMode.disable(), l.runCallback(t, {
                                message: n + "Debug mode disabled.",
                                data: null
                            }, !0), !0
                        }
                    },
                    handleError: function(e, t, n) {
                        var i = e + n.name + ": " + n.message;
                        return l.runCallback(t, {
                            message: i,
                            data: null
                        }, !1), o.error(i), !1
                    },
                    executeCommand: function(e, t, n, i, r) {
                        return o.debug("Calling command '" + a.coreObjName + ".cmd." + e + "()'"), null !== n && g.wasEventAlreadyDispatched(n) ? (o.error("Command '" + a.coreObjName + ".cmd." + e + "()' needs to be called before event '" + n + "'."), !1) : null === t || g.wasEventAlreadyDispatched(t) ? (o.debug("Executing command '" + a.coreObjName + ".cmd." + e + "()'"), l.api.commands[e](i, r, e + "(): ")) : (o.debug("Queuing command '" + a.coreObjName + ".cmd." + e + "()' until event '" + t + "' triggers"), void g.addEventListener(t, (function() {
                            return o.debug("Executing command '" + a.coreObjName + ".cmd." + e + "()'"), l.api.commands[e](i, r, e + "(): ")
                        }), {
                            oneTimeEvent: !0
                        }))
                    }
                },
                init: function() {
                    var e, n, i, r, f, p, b, h = function() {
                        function e() {
                            var e = -1,
                                t = a.wPerf.timing;
                            a.wPerf && (a.wPerf.getEntriesByType && a.wPerf.getEntriesByType("navigation").length ? e = a.wPerf.getEntriesByType("navigation")[0].domContentLoadedEventEnd : t && (e = t.domContentLoadedEventEnd - t.fetchStart)), e = Math.floor(e), c.session.domReady = e, o.info("DOM ready after " + e + "ms."), l.metrics.recordTiming("domReady", "session", e)
                        }
                        if ("interactive" === document.readyState || "complete" === document.readyState) e();
                        else {
                            document.addEventListener("DOMContentLoaded", (function t() {
                                e(), document.removeEventListener("DOMContentLoaded", t)
                            }), !1)
                        }
                    };
                    t.htmlLanguage = document.documentElement.lang, s.availableBidders = l.getAllAvailableBidders(), l.getAdServerDeclarativeSettings(),
                        function() {
                            for (var e in s.subsystems = s.subsystems || {}, m) !1 !== d.get("subsystems.".concat(e, ".enabled")) ? m[e] && m[e].init ? (o.debug("Initializing subsystem '" + e + "'."), m[e].init(l)) : o.warn("Subsystem '" + e + "' can't be inizialised.") : o.warn("Subsystem '" + e + "' is disabled.")
                        }(), e = navigator.userAgent, n = new RegExp("Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune", "i"), i = new RegExp("(?:ipad|playbook|tablet|(?:android(?!.*(nexus|sm-(?:g9|n9|a10)))|bbd+|meego|silk)(?! .+? mobile))", "i"), r = n.test(e), f = i.test(e), p = "otherplatform", b = "otheros", r || f ? (r && (p = "mobile"), f && (p = "tablet"), /iPad|iPhone|iPod/i.test(e) ? b = "ios" : -1 !== e.toLowerCase().indexOf("android") ? b = "android" : -1 !== e.toLowerCase().indexOf(".net") && (b = "windows")) : (p = "desktop", -1 !== e.toLowerCase().indexOf("windows") ? b = "windows" : -1 !== e.toLowerCase().indexOf("macintosh") ? b = "macos" : -1 !== e.toLowerCase().indexOf("linux") && (b = "linux")), t.platform = p, t.os = b,
                        function() {
                            l.targetingFilter.init();
                            var e = l.targetingFilter.getStaticLabels();
                            o.info("Static session targeting labels: '" + e.join("', '") + "'."), l.targetingFilter.filterDomainConfiguration(e)
                        }(),
                        function() {
                            var e = t.modules;
                            if (e) {
                                var n = l.getGeoTier(d.get("country")),
                                    i = {
                                        1: [],
                                        2: [],
                                        3: ["smartRefresh", "adaptive"]
                                    }[n] || [];
                                for (var r in v) o.debug("Initializing module '" + r + "'."), i.indexOf(r) >= 0 ? o.debug("Module '" + r + "' is blacklisted for Tier-" + n + " countries, so is being disabled.") : e[r] ? !0 === e[r].enabled ? v[r] && v[r].init && v[r].init(l, c) : o.debug("Module '" + r + "' is disabled.") : o.debug("Module '" + r + "': Configuration not found.");
                                return !0
                            }
                        }(), a.coreObj.queue = a.coreObj.queue || [], l.queue.pushCallback(a.coreObj.queue, (function(e) {
                            l.queue.process(e)
                        })), a.coreObj.queue.length > 0 && l.queue.process(a.coreObj.queue),
                        function() {
                            function e() {
                                a.pbjsObj.que.push((function() {
                                    var e = l.metrics.getTimestamp("pbjs", "queued").toFixed(0) + "ms",
                                        t = l.metrics.getTimestamp("pbjs", "requested").toFixed(0) + "ms",
                                        n = l.metrics.getDuration("pbjs", "requested", "loaded").toFixed(0) + "ms",
                                        i = l.metrics.getDuration("pbjs", "loaded", "apiReady").toFixed(0) + "ms";
                                    o.info("Pbjs " + a.pbjsObj.version + " ready. Queued at: " + e + ". Requested at: " + t + ". Load in: " + n + ". API ready in: " + i + ".")
                                }))
                            }

                            function n(e) {
                                a.pbjsObj.que.push((function() {
                                    a.pbjsObj.setConfig(e)
                                }))
                            }
                            a.pbjsObj.bidderSettings = a.pbjsObj.bidderSettings || {},
                                function() {
                                    o.debug("Initializing ad-units.");
                                    for (var e = t.adUnits, n = 0; n < e.length; n++) {
                                        var i = e[n];
                                        i.index = 0, (!i.hasOwnProperty("code") || i.hasOwnProperty("code") && 0 === i.code.length) && l.initAdUnitCode(i)
                                    }
                                }(), n(t.pbjsConfig),
                                function() {
                                    l.parameters.environments[a.coreObj.config.environment] >= 2 && n({
                                        debug: !0
                                    });
                                    var e = t.bidding.adServerCurrency.toUpperCase();
                                    if (n({
                                            currency: {
                                                adServerCurrency: e,
                                                rates: t.currencyRates
                                            },
                                            improvedigital: {
                                                usePrebidSizes: !0,
                                                singleRequest: !0
                                            }
                                        }), !1 !== t.bidding.bidFloorEnabled) {
                                        var i = t.bidding.floorCpm || .05;
                                        n({
                                            floors: {
                                                enforcement: {
                                                    enforcePBS: !0,
                                                    enforceJS: !0,
                                                    bidAdjustment: !0
                                                },
                                                data: {
                                                    currency: e,
                                                    default: i,
                                                    schema: {
                                                        fields: ["mediaType"]
                                                    },
                                                    values: {
                                                        "*": i
                                                    }
                                                },
                                                floorMin: i,
                                                skipRate: 0
                                            }
                                        })
                                    }
                                    m.consentManagement.executeOnConsentResolved((function() {
                                        s.consent.googleConsent && s.adServer.enabled || (n({
                                            floors: {}
                                        }), o.info("Ad-server disabled, disabling bid floor of ".concat(i, " ").concat(e, ".")))
                                    }))
                                }(), t.pbjsAnalytics && t.pbjsAnalytics.providers && t.pbjsAnalytics.providers.length > 0 && a.pbjsObj.que.push((function() {
                                    a.pbjsObj.enableAnalytics(t.pbjsAnalytics.providers), o.debug("Enabling prebid.js analytics providers: '" + t.pbjsAnalytics.providers.map((function(e) {
                                        return e.provider
                                    })).join("', '") + "'.")
                                })), a.snConf.resources.pbjs.loaded ? e() : a.snConf.resources.pbjs.scriptElement.addEventListener("load", e)
                        }(),
                        function() {
                            l.parameters.environments[a.coreObj.config.environment] >= 2 && (u.addEventListener("slotOnload", (function(e) {
                                o.debug("slotOnload: creative's iframe load event fired for '" + e.slot.getSlotElementId() + "'")
                            })), u.addEventListener("impressionViewable", (function(e) {
                                o.debug("impressionViewable: ad-impression viewable according to active view criteria for '" + e.slot.getSlotElementId() + "'")
                            })), u.addEventListener("slotRenderEnded", (function(e) {
                                o.debug("adSlotRenderEnded: creative code injected into adslot for '" + e.slot.getSlotElementId() + "'.\n\tSlot response data:", JSON.parse(JSON.stringify(e.slot.getResponseInformation())))
                            }))), googletag.cmd.push((function() {
                                googletag.pubads().disableInitialLoad(), googletag.pubads().enableAsyncRendering(), googletag.pubads().enableSingleRequest(), googletag.enableServices()
                            }));
                            var e = function() {
                                googletag.cmd.push((function() {
                                    var e = l.metrics.getTimestamp("gpt", "queued").toFixed(0) + "ms",
                                        t = l.metrics.getTimestamp("gpt", "requested").toFixed(0) + "ms",
                                        n = l.metrics.getDuration("gpt", "requested", "loaded").toFixed(0) + "ms",
                                        i = l.metrics.getDuration("gpt", "loaded", "apiReady").toFixed(0) + "ms";
                                    o.info("Gpt " + googletag.getVersion() + " ready. Queued at: " + e + ". Requested at: " + t + ". Load in: " + n + ". API ready in: " + i + ".")
                                }))
                            };
                            a.snConf.resources.gpt.loaded ? e() : a.snConf.resources.gpt.scriptElement.addEventListener("load", e)
                        }(),
                        function() {
                            var e = {
                                uuid: a.uuid,
                                cfwUuid: t.cfwUuid,
                                init: Math.floor(Date.now() - l.getPerformanceNow()),
                                tzOffset: (new Date).getTimezoneOffset(),
                                tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
                                site: window.location.hostname,
                                path: window.location.pathname,
                                country: t.country,
                                consentRegion: t.consentRegion,
                                userAgent: navigator.userAgent,
                                cfwUserAgent: t.cfwUserAgent,
                                platform: t.platform,
                                os: t.os,
                                environment: t.environment,
                                build: t.build,
                                id: t.id
                            };
                            c.session = e, h(), a.coreObj.info = c.session, s.coreReady = !0, o.debug("Available bidders: '" + s.availableBidders.join("', '") + "'.");
                            var n = [];
                            "otherplatform" === t.platform && n.push("platform"), "otheros" === t.os && n.push("os"), n.length > 0 && o.warn("Could not identify '" + n.join("', ") + "' from UA."), g.dispatchEvent(a.coreEvents.coreReady, {
                                isUnique: !0,
                                eventDetail: e
                            }), l.start()
                        }()
                },
                start: function() {
                    var e;
                    if (a.snPubConf.adengine) {
                        var n, i = !0;
                        if (void 0 !== a.snPubConf.adengine.activeLots)
                            if (n = a.snPubConf.adengine.activeLots, Array.isArray(n) && n.length > 0) {
                                for (var r = 0; r < n.length; r++) {
                                    var s = n[r];
                                    if ("string" != typeof s.adUnit || null !== s.placement && "string" != typeof s.placement) {
                                        i = !1, o.error("Error: 'window.snigelPubConf.adengine.activeLots' array element is not of type { adUnit: <string>, placement: <string || null> } . Ignoring property.");
                                        break
                                    }
                                }
                                i && o.info("Detected active lots in snigel publisher configuration:\n\t" + n.map((function(e) {
                                    return "(" + e.placement + ":" + e.adUnit + ")"
                                })).join("\n\t"))
                            } else Array.isArray(n) || null === n ? o.warn("Snigel publisher configuration for auction lots found, but is empty. Auction will skip bidding.") : (i = !1, o.error("Error: 'window.snigelPubConf.adengine.activeLots' is not of type 'Array'. Ignoring property."));
                        else if (void 0 !== a.snPubConf.adengine.activeAdUnits)
                            if (n = a.snPubConf.adengine.activeAdUnits, Array.isArray(n) && n.length > 0) {
                                for (var d = 0; d < n.length; d++)
                                    if ("string" != typeof n[d]) {
                                        i = !1, o.error("Error: 'window.snigelPubConf.adengine.activeAdUnits' array element is not of type 'String'. Ignoring property.");
                                        break
                                    }
                                i && o.info("Detected active ad-units in snigel publisher configuration:\n\t" + n.join("\n\t"))
                            } else Array.isArray(n) || null === n ? o.warn("Snigel publisher configruation for auction ad-units found, but is empty. Auction will skip bidding.") : (i = !1, o.error("Error: 'window.snigelPubConf.adengine.activeAdUnits' is not of type 'Array'. Ignoring property."));
                        i && (e = n)
                    }(t.auction.autoRun || e !== a.udef) && l.startAuction(e)
                },
                auction: {
                    init: function(e) {},
                    start: function() {},
                    end: function() {},
                    bidding: {},
                    adServer: {}
                },
                getRequestedAdUnits: function() {
                    var e = [],
                        n = t.adUnits,
                        i = s.auction.requestedLots || {};
                    for (var r in i)
                        for (var o = i[r].adUnit, a = 0; a < n.length; a++) {
                            var d = n[a];
                            if (o === d.name) {
                                var c = JSON.parse(JSON.stringify(d));
                                c.code = r, e.push(c)
                            }
                        }
                    return e
                },
                startAuction: function(e) {
                    if (s.auction.deferredBy.length > 0) return o.info("Starting auction deferred by '" + s.auction.deferredBy.join("', '") + "'."), !1;
                    var n = function(e) {
                            var n = {};
                            try {
                                if (e === a.udef) n = function() {
                                    for (var e = {}, n = t.adUnits, i = 0; i < n.length; i++) {
                                        var r = n[i],
                                            o = !0;
                                        if (r.objectTargeting) {
                                            var a = l.targetingFilter.getStaticLabels();
                                            o = l.targetingFilter.getObjectTargetingResolution(r.objectTargeting, a, 0)
                                        }
                                        o && !e[r.code] && (e[r.code] = {
                                            adUnit: r.name,
                                            placement: r.code
                                        })
                                    }
                                    return e
                                }();
                                else {
                                    if (!Array.isArray(e) && null !== e) throw new TypeError("startAuction() expects argument of type Array()");
                                    if (null === e || 0 === e.length) return o.info("No lots requested. Skipping requesting bids."), !0;
                                    for (var i = 0; i < e.length; i++) {
                                        var r, d, c = e[i];
                                        if ("string" == typeof c) r = c, d = l.getAdUnitCode(c);
                                        else {
                                            if (!c.hasOwnProperty("adUnit") || "string" != typeof c.adUnit || !c.hasOwnProperty("placement") || "string" != typeof c.placement && null !== c.placement) throw new TypeError("startAuction() expects argument of type Array({adUnit: String, placement: String}) or Array(String)");
                                            r = c.adUnit, d = c.placement
                                        }
                                        if (l.adUnitExistsInArray(r, t.adUnits))
                                            if (n.hasOwnProperty(d)) {
                                                var u = n[d].adUnit,
                                                    g = r;
                                                o.warn("Lot placement conflict detected. Requested lot's (" + d + ":" + g + ") placement already used in lot (" + d + ":" + u + ").");
                                                for (var f = {}, m = 0; m <= t.adUnits.length; m++) {
                                                    var v = t.adUnits[m];
                                                    if (v.name === u && (f.original = v), v.name === g && (f.conflicting = v), f.original && f.conflicting) break
                                                }
                                                var p = f.original.hasOwnProperty("objectTargeting"),
                                                    b = f.conflicting.hasOwnProperty("objectTargeting"),
                                                    h = "(" + d + ":" + u + ")",
                                                    y = "(" + d + ":" + g + ")";
                                                if (p || b) {
                                                    o.debug("Attempting to auto-resolve conflict based on ad-unit object targeting filter.");
                                                    var A = !0,
                                                        w = !0,
                                                        S = l.targetingFilter.getStaticLabels();
                                                    p && (A = l.targetingFilter.getObjectTargetingResolution(f.original.objectTargeting, S, 0)), b && (w = l.targetingFilter.getObjectTargetingResolution(f.conflicting.objectTargeting, S, 0));
                                                    var E = "Conflict successfully resolved";
                                                    A !== w ? A || (n[d] = "string" == typeof c ? {
                                                        adUnit: r,
                                                        placement: d
                                                    } : c) : E = "Conflict unsuccessfully resolved and ignoring conflicting lot:";
                                                    var L = "(" + d + ":" + n[d].adUnit + ")";
                                                    o.info(E + ":\n\tAd-unit filter resolution: (" + u + ": " + A + "), (" + g + ": " + w + ")\n\tLot resolution: " + h + " => " + L)
                                                } else o.info("Conflict not resolvable. Ignoring conflicting lot " + y + ".")
                                            } else n[d] = "string" == typeof c ? {
                                                adUnit: r,
                                                placement: d
                                            } : c;
                                        else console.warn("Ad unit '" + r + "' doesn't exist in AdEngine configuration. Please correct requested ad units to auction.")
                                    }
                                }
                            } catch (e) {
                                return o.error(e.name + ": " + e.message), !1
                            }
                            var C = "\n\t" + Object.entries(n).map((function(e) {
                                return "(" + e[0] + ":" + e[1].adUnit + ")"
                            })).join("\n\t");
                            for (d in o.info("Requested lots:" + C), n) s.auction.requestedLots.hasOwnProperty(d) && o.warn("Placement '" + d + "' already in auction. Ignoring lot (" + d + ":" + n[d].adUnit + ") in auction."), !1 === s.auction.running ? s.auction.requestedLots[d] = n[d] : !0 === s.auction.running && (s.auction.queuedLots[d] = n[d]);
                            return !0
                        },
                        i = function() {
                            m.consentManagement.executeOnConsentResolved((function() {
                                return setTimeout((function() {
                                    s.window.innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, s.window.innerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, s.auction.window = {
                                            width: s.window.innerWidth,
                                            height: s.window.innerHeight
                                        }, !1 !== t.bidding.enabled || s.consent.googleConsent || o.warn("Bidding is disabled and consent requirements for Google are not met. System cannot auction any inventory."), c.auctions.push({
                                            auction: {
                                                reqTs: l.getPerformanceNow()
                                            }
                                        }), g.dispatchEvent(a.coreEvents.coreAuctionStart),
                                        function() {
                                            for (var e = s.auction.activeLabels = s.targetingFilter.staticLabels.slice(), t = s.targetingFilter.customLabels, n = 0; n < t.length; n++) {
                                                var i = t[n]; - 1 === e.indexOf(i) && e.push(i)
                                            }
                                            s.targetingFilter.customLabels = [], o.info("Active auction labels: ['" + e.join("', '") + "'].")
                                        }(),
                                        function() {
                                            var e = l.getRequestedAdUnits();
                                            o.info("Filtering lots...");
                                            var t = l.targetingFilter.getFilteredAdUnits(e, s.auction.activeLabels, {
                                                inplace: !0
                                            });
                                            g.dispatchEvent(a.coreEvents.coreAuctionAdUnitsFiltered), o.info("Size-mapping lots..."), l.sizeMapper.processAdUnits(t), g.dispatchEvent(a.coreEvents.coreAuctionAdUnitsSizeMapped),
                                                function(e) {
                                                    for (var t = s.auction.adUnits = [], n = s.auction.requestedLots, i = 0; i < e.length; i++) {
                                                        var r = e[i],
                                                            d = n[r.code];
                                                        if (r.adUnitPathOverride) {
                                                            var c = d.adUnitPath;
                                                            if ("string" == typeof c && c.length > 0) {
                                                                var l = r.adUnitPathRegex;
                                                                "string" == typeof l && l.length > 0 ? new RegExp(l).test(c) ? r.adUnitPath = c : o.warn("Provided adUnitPath '" + c + "' does not match given regex '" + l + "'. Used path will be default '" + r.adUnitPath + "'.") : r.adUnitPath = c
                                                            }
                                                        }
                                                        var u = r.bidders;
                                                        if (r.bidders.length > 0 && r.snConfig && r.snConfig.video) {
                                                            var f = r.mediaTypes.banner && r.mediaTypes.banner.sizes || [
                                                                    [300, 225]
                                                                ],
                                                                m = [0, 0];
                                                            f.forEach((function(e) {
                                                                m[0] < e[0] && (m[0] = e[0]), m[1] < e[1] && (m[1] = e[1])
                                                            }));
                                                            var p = function(e, n, i) {
                                                                    var r, a = JSON.parse(JSON.stringify(e));
                                                                    if (a.mediaTypes = i && a.mediaTypes || {}, a.mediaTypes.video = {
                                                                            context: "outstream",
                                                                            playerSize: m,
                                                                            mimes: ["video/mp4", "video/webm"],
                                                                            minduration: 0,
                                                                            maxduration: 300,
                                                                            skippable: !0,
                                                                            skip: 1,
                                                                            playback_method: ["auto_play_sound_off"],
                                                                            frameworks: [1],
                                                                            playbackmethod: [2],
                                                                            placement: 2,
                                                                            api: [2],
                                                                            protocols: [2, 3, 5, 6, 7, 8],
                                                                            linearity: 1
                                                                        }, a.mediaTypes.video.renderer = {
                                                                            url: "https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js",
                                                                            backupOnly: !1,
                                                                            render: (r = a.mediaTypes.video, function(e) {
                                                                                var t = r.playerSize[0],
                                                                                    n = r.playerSize[1],
                                                                                    i = (e.vastXml || "").toLowerCase(),
                                                                                    a = function(e) {
                                                                                        var t, n = i.split(e);
                                                                                        if (n.length > 1) {
                                                                                            var r = -1,
                                                                                                o = !1;
                                                                                            for (t = 0, n = n[1];
                                                                                                " " != n[++r] || !o;) n[r] >= "0" && n[r] <= "9" && (o = !0, t = 10 * t + (n[r] - "0"))
                                                                                        }
                                                                                        return t
                                                                                    },
                                                                                    s = a("width"),
                                                                                    d = a("height");
                                                                                if (s > 0 && d > 0) {
                                                                                    var c = s / d;
                                                                                    t / n > c && (t = Math.floor(c * n))
                                                                                }
                                                                                o.info("Rendering ad with appnexus player in '" + e.adUnitCode + "' with max size [" + t + ", " + n + "]");
                                                                                var l = function(e, t, n) {
                                                                                    e.renderer.handleVideoEvent({
                                                                                        id: t,
                                                                                        eventName: n
                                                                                    })
                                                                                };
                                                                                e.renderer.push((function() {
                                                                                    var i;
                                                                                    e.renderer.setEventHandlers({
                                                                                        impression: function() {
                                                                                            o.debug("Video ad impression"), i = Date.now(), v.smartRefresh && v.smartRefresh.cancelLotSmartRefresh(e.adUnitCode)
                                                                                        },
                                                                                        loaded: function() {
                                                                                            o.debug("Video ad loaded")
                                                                                        },
                                                                                        ended: function() {
                                                                                            o.debug("Video ad ended"), v.smartRefresh && v.smartRefresh.triggerLotSmartRefresh(e.adUnitCode, (Date.now() - i) / 1e3)
                                                                                        }
                                                                                    }), window.ANOutstreamVideo.renderAd({
                                                                                        tagId: e.adResponse && e.adResponse.tag_id,
                                                                                        sizes: [
                                                                                            [t, n]
                                                                                        ],
                                                                                        targetId: e.adUnitCode,
                                                                                        uuid: e.adResponse && e.adResponse.uuid,
                                                                                        adResponse: {
                                                                                            content: e.vastXml || e.ad
                                                                                        },
                                                                                        rendererOptions: {
                                                                                            player_width: t,
                                                                                            player_height: n,
                                                                                            playback_methods: r.playback_method
                                                                                        }
                                                                                    }, l.bind(null, e))
                                                                                }))
                                                                            })
                                                                        }, Array.isArray(n) && !i)
                                                                        for (var s = 0; s < n.length; s++) {
                                                                            n[s] = JSON.parse(JSON.stringify(n[s]));
                                                                            var d = n[s].params;
                                                                            if (d && d.videoTags)
                                                                                for (var c in d.videoTags) d[c] = d.videoTags[c]
                                                                        }
                                                                    a.bids = n, t.push(a)
                                                                },
                                                                b = {
                                                                    "33across": 1,
                                                                    amx: 1,
                                                                    rubicon: 1,
                                                                    adagio: 1,
                                                                    ix: 1
                                                                },
                                                                h = {
                                                                    openx: 1,
                                                                    criteo: 1,
                                                                    rubicon: 1,
                                                                    appnexus: 1,
                                                                    onetag: 1,
                                                                    smartadserver: 1
                                                                };
                                                            u = [];
                                                            var y = [],
                                                                A = [];
                                                            r.bidders.forEach((function(e) {
                                                                b[e.bidder] ? (y.push(e), h[e.bidder] && u.push(e)) : h[e.bidder] ? (A.push(e), u.push(e)) : u.push(e)
                                                            })), y.length > 0 && (o.info("Found multiformat bidders, creating separate config for them."), p(r, y, !0)), A.length > 0 && (o.info("Found separate video request bidders, creating config for them."), p(r, A, !1))
                                                        }(u.length > 0 || 0 === r.bidders.length) && (r.bids = u, t.push(r)), s.auction.lots[r.code] = r.name;
                                                        var w = s.activeLots[r.code] = s.activeLots[r.code] || {};
                                                        w.adUnit = r.name, w.isSticky = r.isSticky || !1
                                                    }
                                                    g.dispatchEvent(a.coreEvents.coreAuctionAdUnitsSet)
                                                }(t), g.dispatchEvent(a.coreEvents.coreAuctionAdUnitsReady)
                                        }();
                                    for (var e = 0; e < s.auction.adUnits.length; e++) {
                                        var n = s.auction.adUnits[e];
                                        c.lots[n.code] = c.lots[n.code] || {}, c.lots[n.code][n.name] = c.lots[n.code][n.name] || {};
                                        var i = c.lots[n.code][n.name].auctionCountTotal || 0;
                                        c.lots[n.code][n.name].auctionCountTotal = ++i
                                    }
                                    o.info("Starting bidding phase..."), g.dispatchEvent(a.coreEvents.coreBiddingPhaseStart), !1 === t.bidding.enabled ? (o.warn("Bidding disabled. Skipping requesting bids."), l.callAdServer(a.pbjsObjName)) : 0 === s.auction.adUnits.length ? (o.warn("No ad-units found for bidding. Skipping requesting bids."), l.callAdServer(a.pbjsObjName)) : l.callBids()
                                })), !0
                            }))
                        };

                    function r() {
                        s.auction.gracePeriodRunning = !0;
                        var e = t.auction.gracePeriodMs || s.auction.gracePeriodMs;
                        o.debug("Auction grace period of " + e + "ms started..."), s.auction.gracePeriodTimeout = setTimeout((function() {
                            s.auction.gracePeriodRunning = !1, s.auction.running = !0, i()
                        }), e)
                    }
                    if (o.info("Starting new auction."), !1 === s.auction.running && !1 === s.auction.gracePeriodRunning) {
                        if (!n(e)) return !1;
                        r()
                    } else if (!1 === s.auction.running && !0 === s.auction.gracePeriodRunning) {
                        if (o.info("Auction starting grace period active. Requesting to add lots to active auction..."), !n(e)) return !1;
                        clearTimeout(s.auction.gracePeriodTimeout), r()
                    } else if (!0 === s.auction.running && !1 === s.auction.gracePeriodRunning && (o.info("An auction is already running. Queuing lots for next auction..."), !n(e))) return !1;
                    return !0
                },
                callBids: function() {
                    if (s.adServer.deferredBy[a.pbjsObjName] = 1, s.bidding.deferredBy.length > 0) return o.info("Calling '" + a.pbjsObjName + "' bids deferred by '" + s.bidding.deferredBy.join("', '") + "'."), g.dispatchEvent(a.coreEvents.coreBiddingPhaseEnd), !1;
                    var e = t.bidding.timeoutMs,
                        n = !1,
                        i = setTimeout((function() {
                            n = !0, o.warn("Calling bids for Prebid failed. Calling ad-server."), l.callAdServer(a.pbjsObjName)
                        }), e + 2e3);
                    a.pbjsObj.que.push((function() {
                        c.auctions[c.auctions.length - 1].pbjsBidding = {
                            reqTs: l.getPerformanceNow()
                        }, c.auctions[c.auctions.length - 1].window = [s.auction.window.width, s.auction.window.height], g.dispatchEvent(a.coreEvents.corePbjsBiddingStart);
                        var r = s.auction.adUnits.map((function(e) {
                            return "(" + e.code + ":" + e.name + ")"
                        })).join("\n\t");
                        o.info("Starting bidding. Calling bids for Prebid with a timeout of " + e + "ms for lots:\n\t" + r), a.pbjsObj.adUnits = s.auction.adUnits;
                        a.pbjsObj.requestBids({
                            labels: [],
                            timeout: e,
                            bidsBackHandler: function(e, r, s) {
                                if (n) o.warn("Prebid is returning bids after hitting failsafe timeout. Prebid results are going to be ignored.");
                                else {
                                    clearTimeout(i), c.auctions[c.auctions.length - 1].pbjsBidding.rdyTs = l.getPerformanceNow(), c.auctions[c.auctions.length - 1].pbjsBidding.tmOut = r, g.dispatchEvent(a.coreEvents.corePbjsBiddingEnd), r && o.warn("Prebid bidding closed due to timeout."), o.info("Prebid bidding finished in " + (c.auctions[c.auctions.length - 1].pbjsBidding.rdyTs - c.auctions[c.auctions.length - 1].pbjsBidding.reqTs).toFixed(0) + "ms.");
                                    var d = a.pbjsObj.adUnits.map((function(e) {
                                        return e.code
                                    }));
                                    e !== a.udef && d.forEach((function(n) {
                                        var i = 0;
                                        if (e.hasOwnProperty(n)) {
                                            var r = e[n].bids;
                                            i = Math.max.apply(Math, [0].concat(r.map((function(e) {
                                                return e.cpm
                                            }))))
                                        }
                                        o.debug("Highest PBJS bid for placement '" + n + "': " + i + " " + t.bidding.adServerCurrency.toUpperCase())
                                    })), l.callAdServer(a.pbjsObjName)
                                }
                            }
                        })
                    }))
                },
                getAdServerDeclarativeSettings: function() {
                    a.snPubConf.hasOwnProperty("adengine") && (a.snPubConf.adengine.hasOwnProperty("sensitiveContent") || a.snPubConf.adengine.hasOwnProperty("skipAdServer")) && (!0 === a.snPubConf.adengine.sensitiveContent && o.warn("Declarative flag found that page contains senstive content. Disabling ad-server."), !0 === a.snPubConf.adengine.skipAdServer && o.warn("Declarative flag found disabling ad-server. Disabled."), s.adServer.enabled = !(!0 === a.snPubConf.adengine.sensitiveContent || !0 === a.snPubConf.adengine.skipAdServer))
                },
                callAdServer: function(n) {
                    var i = function(e) {
                            var t = document.getElementById(e);
                            null !== t && s.activeLots[e].pbjsAdIframe !== a.udef && (s.activeLots[e].pbjsAdIframe.remove(), delete s.activeLots[e].pbjsAdIframe, t.innerHTML = null)
                        },
                        r = function() {
                            var e = l.getPerformanceNow(),
                                t = c.auctions[c.auctions.length - 1].auction.reqTs;
                            c.auctions[c.auctions.length - 1].auction.ttfaTs = e, o.debug("First ad shown " + (e - t).toFixed(0) + "ms after auction started."), g.dispatchEvent(a.coreEvents.coreFirstAd)
                        },
                        d = s.adServer.deferredBy;
                    n && delete d[n];
                    var f = Object.keys(d);
                    return f.length > 0 ? (o.info("Calling ad-server deferred by '" + f.join("', '") + "'."), !1) : (o.info("Bidding phase ended."), g.dispatchEvent(a.coreEvents.coreBiddingPhaseEnd), !1 === t.adServer.autoCall && !0 !== s.adServer.isManualCall ? (o.info("Automatically calling ad-server for all placements is disabled."), !1) : (s.adServer.isManualCall = !1, o.info("Starting ad-server phase..."), g.dispatchEvent(a.coreEvents.coreAdServerPhaseStart), l.getAdServerDeclarativeSettings(), void(s.consent.googleConsent && s.adServer.enabled ? l.doOnDomReady((function() {
                        googletag.cmd.push((function() {
                            o.info("Consent requirements for Google met.");
                            try {
                                for (var n in s.activeLots) s.activeLots[n].pbjsAdIframe !== a.udef && (o.debug("Removing existing prebid-only iframe in placement '" + n + "'."), i(n));
                                u.addEventListener("slotRenderEnded", (function e(t) {
                                        r(), u.removeEventListener("slotRenderEnded", e)
                                    })),
                                    function() {
                                        var e = function(e, n) {
                                                s.adServer.targeting[n.code] = {
                                                    adSlot: e,
                                                    keyValues: {
                                                        sn_adngin: 1,
                                                        sn_cr: t.gdpr ? "gdpr" : t.ccpa ? "ccpa" : "none",
                                                        sn_ic: c.lots[n.code][n.name].auctionCountTotal,
                                                        sn_adx: 1,
                                                        sn_rm: "0",
                                                        sn_pd: c.lots[n.code][n.name].auctionCountTotal > 1 ? 1 : "0"
                                                    }
                                                }
                                            },
                                            n = function(t, n) {
                                                var i = "(" + t.code + ":" + t.name + ")";
                                                if (0 !== n.length) {
                                                    o.debug("Creating adSlot for auction lot " + i + " supporting sizes: [" + n.join("], [") + "]");
                                                    var r = googletag.defineSlot(t.adUnitPath, n, t.code).addService(googletag.pubads());
                                                    return e(r, t), s.activeLots[t.code].sizes = n, s.activeLots[t.code].adSlot = r, r
                                                }
                                                o.debug("Skipping adSlot creation for auction lot " + i + ". No sizes detected.", n)
                                            },
                                            i = function(e) {
                                                o.debug("Destroying adSlot for auction lot (" + e.code + ":" + e.name + ")"), googletag.destroySlots([s.activeLots[e.code].adSlot]), delete s.activeLots[e.code].sizes, delete s.activeLots[e.code].adSlot
                                            },
                                            r = function(e) {
                                                return e.activeSizes
                                            },
                                            d = function(e) {
                                                for (var t = googletag && googletag.pubads ? googletag.pubads().getSlots() : [], n = 0; n < t.length; n++)
                                                    if (t[n].getSlotElementId() === e) return t[n]
                                            };
                                        s.adServer.targeting = {};
                                        for (var u = s.auction.adUnits, g = {}, f = u.length - 1; f >= 0; f--) {
                                            var m = u[f],
                                                v = m.code;
                                            if (g[v]) o.debug("Ignoring ad slot creation for ad unit with a media type different from 'banner'.");
                                            else if (g[v] = 1, null !== document.getElementById(v)) {
                                                o.debug("DOM element for auction lot (" + v + ":" + m.name + ") detected.");
                                                var p = s.activeLots[v].adSlot,
                                                    b = r(m);
                                                p || (s.activeLots[v].sizes = b);
                                                var h = (p = s.activeLots[v].adSlot = d(v)) !== a.udef;
                                                if (o.debug("Existing AdSlot for auction lot (" + v + ":" + m.name + ") detected:", h), h) {
                                                    var y = !l.sizeMapper.sizeArrays.containSameSizes(s.activeLots[v].sizes, b);
                                                    y ? (o.debug("Required sizes for existing adSlot for auction lot (" + v + ":" + m.name + ") changed:", y), i(m), n(m, b)) : (p.clearTargeting(), e(p, m), o.debug("Using existing adSlot for auction lot (" + v + ":" + m.name + ")."))
                                                } else n(m, b)
                                            } else o.warn("DOM element for auction lot (" + v + ":" + m.name + ") missing. Removing lot from auction and active lots."), delete s.activeLots[v], delete s.auction.lots[v], u.splice(f, 1)
                                        }
                                    }(),
                                    function() {
                                        for (var t in g.dispatchEvent(a.coreEvents.coreAdServerStart), s.adServer.targeting) {
                                            var n = s.adServer.targeting[t];
                                            if (n.adSlot && n.keyValues)
                                                for (var i in n.keyValues) n.adSlot.setTargeting(i, n.keyValues[i])
                                        }
                                        c.auctions[c.auctions.length - 1].adServer = {
                                            reqTs: l.getPerformanceNow()
                                        };
                                        for (var r = [], d = [], u = [], f = googletag.pubads().getSlots(), m = s.auction.adUnits, v = {}, p = 0; p < m.length; p++) {
                                            var b = m[p];
                                            !v[b.code] && s.activeLots[b.code] && s.activeLots[b.code].adSlot && (v[b.code] = !0, r.push(s.activeLots[b.code].adSlot), googletag.display(b.code), d.push("(" + b.name + ":" + b.code + ")"))
                                        }
                                        if (!0 !== s.adServer.additionalAdSlotsSetProgramatically && a.snPubConf.hasOwnProperty("adengine") && a.snPubConf.adengine.hasOwnProperty("additionalGptAdSlots")) {
                                            var h = a.snPubConf.adengine.additionalGptAdSlots,
                                                y = !0;
                                            if (Array.isArray(h))
                                                for (var A = 0; A < h.length; A++) {
                                                    for (var w = 0; w < f.length; w++) {
                                                        if (h[A] === f[w]) {
                                                            y = !0;
                                                            break
                                                        }
                                                        y = !1
                                                    }
                                                    if (!1 === y) {
                                                        o.error("Error: 'window.snigelPubConf.adengine.additionalGptAdSlots' array element is not of type 'googletag.adSlot'. Ignoring property.");
                                                        break
                                                    }
                                                } else y = !1, o.error("Error: 'window.snigelPubConf.adengine.additionalGptAdSlots' is not of type 'Array'. Ignoring property.");
                                            y && (s.adServer.additionalAdSlots = h, o.info("Detected additional googletag ad-slots in snigel publisher configration. Adding ad-slots for ['" + h.map((function(e) {
                                                return e.getSlotElementId()
                                            })).join("', '") + "'] to ad-server call."))
                                        }
                                        if (s.adServer.hasOwnProperty("additionalAdSlots")) {
                                            var S = s.adServer.additionalAdSlots.length;
                                            if (S > 0)
                                                for (p = 0; p < S; p++) {
                                                    var E = s.adServer.additionalAdSlots[p];
                                                    googletag.display(E), r.push(E), u.push("(" + E.getSlotElementId() + ":" + E.getAdUnitPath() + ")")
                                                }
                                        }
                                        if (!0 !== s.adServer.additionalAdSlotsElementIdsSetProgramatically && a.snPubConf.hasOwnProperty("adengine") && a.snPubConf.adengine.hasOwnProperty("additionalGptAdSlotIds")) {
                                            var L = a.snPubConf.adengine.additionalGptAdSlotIds,
                                                C = !0;
                                            if (Array.isArray(L)) {
                                                for (var x = 0; x < L.length; x++)
                                                    if ("string" != typeof L[x]) {
                                                        o.error("Error: 'window.snigelPubConf.adengine.additionalGptAdSlotIds' array element is not of type 'String'. Ignoring property."), C = !1;
                                                        break
                                                    }
                                            } else C = !1, o.error("Error: 'window.snigelPubConf.adengine.additionalGptAdSlotIds' is not of type 'Array'. Ignoring property.");
                                            C && (s.adServer.additionalAdSlotsElementIds = L, o.info("Detected additional googletag ad-slot element ids in snigel publisher configration. Adding ad-slot ids ['" + L.join("', '") + "'] to ad-server call."))
                                        }
                                        s.adServer.hasOwnProperty("additionalAdSlotsElementIds") && googletag.pubads().getSlots().forEach((function(e) {
                                                var t = e.getSlotElementId(),
                                                    n = e.getAdUnitPath(); - 1 !== s.adServer.additionalAdSlotsElementIds.indexOf(t) && (googletag.display(e), r.push(e), u.push("(" + t + ":" + n + ")"))
                                            })), d.length > 0 ? o.info("Lots with associated ad-slots for ad-server call:\n\t" + d.join("\n\t")) : o.info("No lots with associated ad-slots detected for ad-server call."), Object.keys(u).length > 0 ? o.info("Additional ad-slots for ad-server call:\n\t" + u.join("\n\t")) : o.info("No additional ad-slots detected for ad-server call."), a.pbjsObj.que.push((function() {
                                                a.pbjsObj.setTargetingForGPTAsync(Object.keys(s.auction.lots))
                                            })), r.forEach((function(e) {
                                                var t = e.getTargeting("hb_pb");
                                                e.setTargeting("_adngin_ba", t.length > 0 ? "true" : "false");
                                                try {
                                                    o.debug("Ad-server targeting for adSlot '" + e.getSlotElementId() + "':\n\t{ " + Object.entries(e.getTargetingMap()).map((function(e) {
                                                        return '"' + e[0] + '": ' + JSON.stringify(e[1])
                                                    })).join(", ") + " }")
                                                } catch (e) {
                                                    o.error(e)
                                                }
                                            })),
                                            function() {
                                                var t = {
                                                    sn_ct1: "key1"
                                                };
                                                if (!googletag.pubads) return !1;
                                                var n = e.getTargeting();
                                                for (var i in t) {
                                                    var r = 0,
                                                        a = t[i];
                                                    if (n && n.hasOwnProperty(a)) {
                                                        var s = n[a];
                                                        Number.isInteger(s) && s > 0 && s <= 100 ? (o.info("Found declarative targeting for ad-server. Setting targeting '".concat(i, "'='").concat(r, "'.")), r = s) : o.warn("Ignoring invalid value found for declarative targeting key '".concat(t[i], "': Expecting an Integer from 1 to 100."))
                                                    }
                                                    googletag.pubads().setTargeting(i, r.toString())
                                                }
                                            }();
                                        try {
                                            o.info("Ad-server targeting:\n\t{ " + googletag.pubads().getTargetingKeys().map((function(e) {
                                                return '"' + e + '": ' + JSON.stringify(googletag.pubads().getTargeting(e))
                                            })).join(", ") + " }")
                                        } catch (e) {
                                            o.error(e)
                                        }
                                        r.length > 0 ? (o.info("Calling ad-server for ad-slots:\n\t" + r.map((function(e) {
                                            return "(" + e.getSlotElementId() + ":" + e.getAdUnitPath() + ")"
                                        })).join("\n\t")), googletag.pubads().refresh(r)) : o.warn("No active ad-slots found for ad-server call. Skipping calling ad-server."), a.snPubConf && a.snPubConf.adengine && (delete a.snPubConf.adengine.additionalGptAdSlots, delete a.snPubConf.adengine.additionalGptAdSlotIds), s && s.adServer && (delete s.adServer.additionalAdSlots, delete s.adServer.additionalAdSlotsSetProgramatically, delete s.adServer.additionalAdSlotsElementIds, delete s.adServer.additionalAdSlotsElementIdsSetProgramatically), c.auctions[c.auctions.length - 1].adServer.rdyTs = l.getPerformanceNow(), g.dispatchEvent(a.coreEvents.coreAdServerEnd), l.auctionEnd()
                                    }()
                            } catch (e) {
                                o.error(e), l.auctionEnd()
                            }
                        }))
                    })) : (s.adServer.enabled || o.info("Ad-server disabled. Bypassing calling the ad-server."), s.consent.googleConsent || o.warn("Consent requirements for Google not met. Bypassing calling the ad-server."), a.pbjsObj.que.push((function() {
                        a.pbjsObj.setTargetingForGPTAsync(Object.keys(s.auction.lots));
                        var e = [];
                        for (var t in s.activeLots) s.activeLots[t].adSlot !== a.udef && (o.debug("Destroying existing GPT ad-slot for placement '" + t + "'."), e.push(s.activeLots[t].adSlot));
                        e.length > 0 && googletag.destroySlots(e), a.pbjsObj.getAllPrebidWinningBids().forEach((function(e) {
                            o.debug("Rendering " + e.mediaType + "(" + e.size + ") from '" + e.bidder + "' in '" + e.adUnitCode + "'.");
                            var t = e.adUnitCode,
                                n = document.getElementById(t);
                            if (null === n) {
                                var d = "(" + t + ":" + s.activeLots[t].adUnit + ")";
                                return o.warn("DOM element for lot " + d + " missing. Skipping rendering winning bid."), !1
                            }
                            i(t);
                            var c = function(e) {
                                o.debug("Creating iframe for prebid ad.");
                                var t = "snigel_pbjs_iframe/" + e,
                                    n = document.createElement("iframe");
                                return n.style.border = "0pt none", n.style.verticalAlign = "bottom", n.style.display = "block", n.setAttribute("scrolling", "no"), n.setAttribute("marginwidth", 0), n.setAttribute("marginheight", 0), n.setAttribute("frameborder", 0), n.setAttribute("width", 0), n.setAttribute("height", 0), n.id = t, n.title = "Advertisement", n.onload = function() {
                                    n.contentDocument.head.innerHTML += "<style>body{margin:0;overflow:hidden;}</style>"
                                }, n
                            }(t);
                            n.appendChild(c), s.activeLots[t].pbjsAdIframe = c;
                            var l = c.contentDocument ? c.contentDocument : c.contentWindow.document;
                            "none" === n.style.display && n.style.removeProperty("display"), a.pbjsObj.renderAd(l, e.adId), r()
                        })), l.auctionEnd()
                    }))))))
                },
                auctionEnd: function() {
                    setTimeout((function() {
                        if (s.auction.running = !1, s.auction.requestedLots = {}, s.auction.lots = {}, g.dispatchEvent(a.coreEvents.coreAuctionEnd), c.auctions[c.auctions.length - 1].auction.rdyTs = l.getPerformanceNow(), o.info("Auction finished in " + (c.auctions[c.auctions.length - 1].auction.rdyTs - c.auctions[c.auctions.length - 1].auction.reqTs).toFixed(0) + "ms."), Object.keys(s.auction.queuedLots).length > 0) {
                            o.info("Found queued lots. Starting additional auction...");
                            var e = [];
                            for (var t in s.auction.queuedLots) e.push(s.auction.queuedLots[t]);
                            s.auction.queuedLots = {}, l.startAuction(e)
                        }
                    }), 250)
                },
                targetingFilter: {
                    init: function() {
                        var e = [t.platform, t.os, t.consentRegion, t.environment];
                        t.country && (e.push(t.country), t.region && e.push(t.country + "-" + t.region));
                        var n = function() {
                                var e = [];
                                if (a.snConf.hasOwnProperty("adengine") && a.snConf.adengine.hasOwnProperty("targeting") && snCon.adengine.targeting.hasOwnProperty("staticLabels") && a.snConf.adengine.targeting.staticLabels.length > 0) {
                                    e = a.snConf.adengine.targeting.staticLabels;
                                    o.info("Detected custom static label(s) in loader configuration. Adding ['" + e.join("', '") + "'] to static labels.")
                                }
                                if (a.snPubConf.hasOwnProperty("adengine") && a.snPubConf.adengine.hasOwnProperty("staticLabels")) {
                                    var t = a.snPubConf.adengine.staticLabels,
                                        n = !0;
                                    if (Array.isArray(t)) {
                                        for (var i = 0; i < t.length; i++)
                                            if ("string" != typeof t[i]) {
                                                n = !1, o.error("Error: 'window.snigelPubConf.adengine.staticLabels' array element is not of type 'String'. Ignoring property.");
                                                break
                                            }
                                    } else n = !1, o.error("Error: 'window.snigelPubConf.adengine.staticLabels' is not of type 'Array'. Ignoring property.");
                                    n && (e = t, o.info("Detected custom static label(s) in snigel publisher configration. Adding ['" + e.join("', '") + "'] to static labels."))
                                }
                                return e
                            }(),
                            i = e.concat(n);
                        s.targetingFilter = s.targetingFilter || {}, s.targetingFilter.staticLabels = s.targetingFilter.staticLabels || [], s.targetingFilter.customLabels = s.targetingFilter.customLabels || [], s.targetingFilter.lastLabels = s.targetingFilter.lastLabels || [], s.targetingFilter.lastFilterResults = s.targetingFilter.lastFilterResults || [], s.targetingFilter.staticLabels = s.targetingFilter.staticLabels.concat(i)
                    },
                    getStaticLabels: function() {
                        return s.targetingFilter.staticLabels
                    },
                    filterDomainConfiguration: function(e) {
                        return o.debug("Applying label targeting filters to domain configuration."), this.filterConfig(t, e, {
                            inplace: !0
                        })
                    },
                    getFilteredAdUnits: function(e, t, n) {
                        return o.debug("Applying label targeting filters to Ad-Units configuration."), this.filterConfig(e, t, n)
                    },
                    labelsChanged: function(e) {
                        if (e.length !== s.targetingFilter.lastLabels.length) return s.targetingFilter.lastFilterResults = {}, !0;
                        for (var t = 0; t < e.length; t++)
                            if (-1 === s.targetingFilter.lastLabels.indexOf(e[t])) return !0;
                        return !1
                    },
                    filterConfig: function(e, t, n) {
                        var i, r = l.getPerformanceNow(),
                            d = !1;
                        if (n !== a.udef && n.inplace && (d = n.inplace), o.debug("Filtering configuration " + (d ? "reference" : "copy") + " with labels: ['" + t.join("', '") + "']"), this.labelsChanged(t) ? (o.debug("Targeting labels have changed. Clearing cached filter results."), s.targetingFilter.lastLabels = t.slice(), s.targetingFilter.lastFilterResults = {}) : o.debug("Targeting labels unchanged. Using cached filter results."), d) i = this.parseConfig(e, t);
                        else {
                            var c = JSON.parse(JSON.stringify(e));
                            delete c.targeting, i = this.parseConfig(c, t)
                        }
                        var u = l.getPerformanceNow() - r;
                        return o.debug("Filtering took " + u.toFixed(2) + "ms."), i
                    },
                    parseConfig: function(e, t, n) {
                        n === a.udef && (n = 0), n += 1;
                        for (var r = Object.keys(e), o = r.length - 1; o >= 0; o--) {
                            var s = r[o];
                            if (e.hasOwnProperty(s) && "object" === i(e[s]) && null !== e[s]) {
                                if ("targeting" === s || "adUnits" === s && Array.isArray(e[s])) continue;
                                var d;
                                this.parseConfig(e[s], t, n), e[s].hasOwnProperty("objectTargeting") ? !1 === (d = this.getObjectTargetingResolution(e[s].objectTargeting, t, n)) ? Array.isArray(e) ? e.splice(o, 1) : delete e[s] : delete e[s].objectTargeting : e[s].hasOwnProperty("primitiveTargeting") ? (d = this.getPrimitiveTargetingResolution(e[s].primitiveTargeting, t, n), e[s] = d) : e[s].hasOwnProperty("arrayTargeting") && (d = this.getArrayTargetingResolution(e[s].arrayTargeting, t, n), e[s] = d)
                            }
                        }
                        return e
                    },
                    getPrimitiveTargetingResolution: function(e, t, n) {
                        var i = e.default;
                        for (var r in e.values) {
                            var o = e.values[r];
                            if (this.getFilterResolution(o, t, n)) {
                                i = o.value;
                                break
                            }
                        }
                        return i
                    },
                    getArrayTargetingResolution: function(e, t, n) {
                        var i = [];
                        for (var r in e.values) {
                            var o = e.values[r];
                            if (!o.hasOwnProperty("filterId") && o.hasOwnProperty("value") || this.getObjectTargetingResolution(o, t, n)) {
                                var a = o.value;
                                Array.isArray(a) ? i = i.concat(a) : i.push(o.value)
                            }
                        }
                        return i
                    },
                    getObjectTargetingResolution: function(e, t, n) {
                        return this.getFilterResolution(e, t, n)
                    },
                    getFilterResolution: function(e, n, i) {
                        i += 1;
                        var r, o, d = null;
                        if (e.hasOwnProperty("filterId") ? (o = e.filterId, s.targetingFilter.lastFilterResults.hasOwnProperty(o) && (r = s.targetingFilter.lastFilterResults[o]), d = t.targeting[o]) : d = e, r === a.udef) {
                            for (var c in d)
                                if (d.hasOwnProperty(c) && null !== d[c]) {
                                    var l = d[c];
                                    if (!1 === (r = this.logicOperatorValid(c, l, n, i))) break
                                }
                            o !== a.udef && (s.targetingFilter.lastFilterResults[o] = r)
                        }
                        return r
                    },
                    logicOperatorValid: function(e, t, n, r) {
                        var o;
                        r === a.udef && (r = 0);
                        for (var s = 0; s < t.length; s++) {
                            var d, c = t[s];
                            if ("object" === i(c) ? o = this.getObjectTargetingResolution(c, n, r) : "string" == typeof c && (o = this.labelMatch(c, n)), "and" === e) {
                                if (!1 === o) {
                                    d = !1;
                                    break
                                }
                                d = !0
                            } else if ("or" === e) {
                                if (!0 === o) {
                                    d = !0;
                                    break
                                }
                                d = !1
                            } else if ("nand" === e) {
                                if (!1 === o) {
                                    d = !0;
                                    break
                                }
                                d = !1
                            } else {
                                if ("nor" !== e) throw new Error("Unknown logical operator '" + e + "'.");
                                if (!0 === o) {
                                    d = !1;
                                    break
                                }
                                d = !0
                            }
                        }
                        return d
                    },
                    labelMatch: function(e, t) {
                        return -1 !== t.indexOf(e)
                    }
                },
                sizeMapper: {
                    processAdUnits: function(e) {
                        for (var t = s.window.innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = s.window.innerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, i = s.auction.requestedLots, r = e.length - 1; r >= 0; r--) {
                            var a = e[r],
                                d = (i[a.code] || {}).sizes,
                                c = Array.isArray(d) && d.length > 0,
                                l = a.sizeMapping || {};
                            if (0 !== Object.keys(l).length) {
                                var u = [];
                                for (var g in l) {
                                    var f = l[g],
                                        m = [],
                                        v = [],
                                        p = [],
                                        b = [];
                                    a.mediaTypes = a.mediaTypes || {};
                                    var h = f.dynamicSizes;
                                    if (h)
                                        for (var y = 0; y < h.length; y++) {
                                            var A = h[y],
                                                w = this.getCssMediaQuery(A.mediaQuery);
                                            (window.matchMedia(w).matches || c) && (A.biddingSizes && (m = m.concat(A.biddingSizes)), A.playerSize && ((p[0] + p[1] || 0) < A.playerSize[0] + A.playerSize[1] && (p = A.playerSize), c && b.push(A.playerSize)), A.additionalSizes && (v = v.concat(A.additionalSizes)))
                                        } else m = f.biddingSizes || [], b = (p = f.playerSize || []).length ? [p] : [], v = f.additionalSizes || [];
                                    if (c) {
                                        v = [], p = [];
                                        for (var S, E = [], L = 0; L < d.length; L++) S = d[L], this.sizeArrays.containsSize(m, S) ? E.push(S) : this.sizeArrays.containsSize(b, S) ? p = S : v.push(S);
                                        m = E
                                    }
                                    if (m.length > 0 || 2 === p.length) {
                                        var C = a.mediaTypes = a.mediaTypes || {},
                                            x = C[g] = C[g] || {};
                                        switch (g) {
                                            case "banner":
                                                this.sizeArrays.sanitize(m), x.sizes = m, u = u.concat(m);
                                                break;
                                            case "video":
                                                x.playerSize = p, u = u.concat(p)
                                        }
                                    }
                                    this.sizeArrays.sanitize(v), u = u.concat(v)
                                }
                                a.activeSizes = this.sizeArrays.sanitize(u), o.debug("Sizemapping Ad-Unit '" + a.name + "' for (" + t + "x" + n + "):\n\tAll Sizes: " + JSON.stringify(a.activeSizes))
                            } else o.error("No size mapping configuration found for ad-unit '" + a.name + "'. Removing ad-unit from auction. Please contact our support."), e.splice(r, 1)
                        }
                    },
                    getCssMediaQuery: function(e) {
                        var t = [];
                        for (var n in e) t.push("(" + n + ": " + e[n] + "px)");
                        return t.join(" and ")
                    },
                    sizeArrays: {
                        sizesEqual: function(e, t) {
                            return "string" == typeof e && "string" == typeof t && e === t || !(!Array.isArray(e) || !Array.isArray(t) || e[0] !== t[0] || e[1] !== t[1])
                        },
                        sizeValid: function(e) {
                            return !("string" != typeof e && !Array.isArray(e)) && (!Array.isArray(e) || 2 === e.length)
                        },
                        sanitize: function(e) {
                            for (var t = e.length - 1; t >= 0; t--) {
                                var n = e[t];
                                if (this.sizeValid(n))
                                    for (var i = t - 1; i >= 0; i--) {
                                        var r = e[i];
                                        this.sizesEqual(n, r) && e.splice(t, 1)
                                    } else e.splice(t, 1)
                            }
                            return e
                        },
                        containSameSizes: function(e, t) {
                            if (e.length != t.length) return !1;
                            e: for (var n = 0; n < e.length; n++) {
                                for (var i = e[n], r = 0; r < t.length; r++) {
                                    var o = t[r];
                                    if (this.sizesEqual(i, o)) continue e
                                }
                                return !1
                            }
                            return !0
                        },
                        containsSize: function(e, t) {
                            if (Array.isArray(e))
                                for (var n = 0; n < e.length; n++)
                                    if (this.sizesEqual(e[n], t)) return !0;
                            return !1
                        }
                    }
                },
                debugMode: {
                    enable: function() {
                        s.debugMode = !0, window.localStorage.setItem(a.coreObjName + "DebugEnabled", !0), o.setLogLevel("debug"), this.enableApiCommands(), this.enableObjects(), o.info("Debug mode enabled for environment '" + t.environment + "'.")
                    },
                    disable: function() {
                        s.debugMode = !1, window.localStorage.removeItem(a.coreObjName + "DebugEnabled"), this.disableApiCommands(), this.disableObjects(), o.setLogLevel("error"), o.info("Debug mode disabled.")
                    },
                    enableApiCommands: function() {
                        var e = f.get();
                        for (var t in e) a.coreObj.cmd[t] = e[t]
                    },
                    disableApiCommands: function() {
                        var e = f.get();
                        for (var t in e) delete a.coreObj.cmd[t]
                    },
                    enableObjects: function() {
                        a.coreObj._dev = {}, a.coreObj._dev.system = l, a.coreObj._dev.subsystems = m, a.coreObj._dev.status = s, a.coreObj._dev.modules = v
                    },
                    disableObjects: function() {
                        delete a.coreObj._dev
                    }
                },
                getAllAvailableBidders: function() {
                    for (var e = [], n = t.adUnits, i = 0; i < n.length; i++)
                        for (var r = n[i], o = 0; o < r.bidders.length; o++) {
                            var a = r.bidders[o].bidder; - 1 === e.indexOf(a) && e.push(a)
                        }
                    return e
                }
            },
            u = n(6),
            g = n(4);
        g.initMetrics(l.metrics), a.coreObj.cmd = {
            startAuction: function(e, t) {
                return l.api.executeCommand("startAuction", a.coreEvents.coreReady, null, e, t)
            },
            callAdServer: function(e, t) {
                return l.api.executeCommand("callAdServer", a.coreEvents.coreReady, a.coreEvents.coreAdServerStart, null, t)
            },
            addGoogletagAdSlots: function(e, t) {
                return l.api.executeCommand("addGoogletagAdSlots", a.coreEvents.coreLoaded, a.coreEvents.coreAdServerStart, e, t)
            },
            setGoogletagAdSlots: function(e, t) {
                return l.api.executeCommand("setGoogletagAdSlots", a.coreEvents.coreLoaded, a.coreEvents.coreAdServerStart, e, t)
            },
            setGoogletagAdSlotElementIds: function(e, t) {
                return l.api.executeCommand("setGoogletagAdSlotElementIds", a.coreEvents.coreLoaded, a.coreEvents.coreAdServerStart, e, t)
            },
            enableDebug: function(e, t) {
                return l.api.executeCommand("enableDebug", a.coreEvents.coreLoaded, null, null, t)
            },
            disableDebug: function(e, t) {
                return l.api.executeCommand("disableDebug", a.coreEvents.coreLoaded, null, null, t)
            },
            showLog: function(e, t) {
                return l.api.executeCommand("showLog", a.coreEvents.coreLoaded, null, null, t)
            },
            disableAutoRunAuction: function(e, t) {
                return l.api.executeCommand("disableAutoRunAuction", a.coreEvents.coreLoaded, a.coreEvents.coreReady, null, t)
            },
            disableAutoCallAdServer: function(e, t) {
                return l.api.executeCommand("disableAutoCallAdServer", a.coreEvents.coreLoaded, a.coreEvents.coreBiddingPhaseEnd, null, t)
            },
            setCustomAuctionLabels: function(e, t) {
                return l.api.executeCommand("setCustomAuctionLabels", a.coreEvents.coreLoaded, a.coreEvents.coreAuctionStart, e, t)
            },
            getConfig: function(e, t) {
                return l.api.executeCommand("getConfig", a.coreEvents.coreReady, null, null, t)
            },
            getStatus: function(e, t) {
                return l.api.executeCommand("getStatus", a.coreEvents.coreReady, null, null, t)
            },
            getEvents: function(e, t) {
                return l.api.executeCommand("getEvents", a.coreEvents.coreReady, null, null, t)
            },
            getMetrics: function(e, t) {
                return l.api.executeCommand("getMetrics", a.coreEvents.coreReady, null, null, t)
            },
            getTimeline: function(e, t) {
                return l.api.executeCommand("getTimeline", a.coreEvents.coreReady, null, null, t)
            },
            getActiveLots: function(e, t) {
                return l.api.executeCommand("getActiveLots", a.coreEvents.coreReady, null, null, t)
            },
            getAvailableAdUnitNames: function(e, t) {
                return l.api.executeCommand("getAvailableAdUnitNames", a.coreEvents.coreReady, null, null, t)
            }
        };
        var f = n(10);
        f.add(l, "setSessionBranch", a.coreEvents.coreReady, null, (function(e, t, n) {
            try {
                if ("string" != typeof e) throw new TypeError("Expecting argument of type String")
            } catch (e) {
                return l.api.handleError(n, t, e)
            }
            var i, r = e;
            switch (r) {
                case "master":
                    i = "//master-adengine.snigel.workers.dev";
                    break;
                case "staging":
                    i = "//staging-adengine.snigelweb.com";
                    break;
                case "production":
                    i = "//adengine.snigelweb.com";
                    break;
                default:
                    i = "//" + r + "-adengine.snigel.workers.dev"
            }
            var a = JSON.parse(window.sessionStorage.getItem("snSessionOverrides")) || {};
            return a.adngin = {
                branch: e,
                url: i
            }, window.sessionStorage.setItem("snSessionOverrides", JSON.stringify(a)), o.info("Set session override for AdEngine to branch '" + e + "'."), l.runCallback(t, {
                message: n + "Session override for AdEngine set to branch '" + e + "'",
                data: null
            }, !0), window.confirm("AdEngine branch override to '" + r + "' applied. Reload page?") && location.reload(), !0
        }));
        var m = {
                bidderAdjustments: n(16),
                bidderPreprocessing: n(17),
                biddingChecker: n(18),
                placementViewability: n(19),
                consentManagement: n(20),
                videoManagement: n(21),
                pubstack: n(22),
                labelGenerator: n(23)
            },
            v = {
                adConsent: n(24),
                adLabeling: n(7),
                amazonTam: n(25),
                interstitial: n(26),
                confiant: n(27),
                reauctionResize: n(28),
                smartRefresh: n(11),
                adhesive: n(29),
                sticky: n(30),
                parallax: n(8),
                lazyLoad: n(31),
                videoPlayer: n(32),
                adaptive: n(5)
            },
            p = l.metrics.getTimestamp("adngin", "queued").toFixed(0) + "ms",
            b = l.metrics.getDuration("adngin", "requested", "loaded").toFixed(0) + "ms";
        console.log("%c【AdEngine】(" + t.build + ") queued at " + p + " and loaded in " + b + ". (" + t.id + ")", "color:#2dc9ac;");
        var h = l.parameters.environments[t.environment] >= 2,
            y = -1 !== document.location.href.indexOf("sn_debug=true"),
            A = "true" === window.localStorage.getItem(a.coreObjName + "DebugEnabled");
        (h || y || A) && l.debugMode.enable(), o.info("Loader reqested at " + l.metrics.getTimestamp("loader", "requested").toFixed(0) + "ms and ready in " + l.metrics.getDuration("loader", "requested", "loaded").toFixed(0) + "ms."), o.info("AdEngine (" + t.build + ") was loaded in " + b + "."), g.dispatchEvent(a.coreEvents.coreLoaded, {
            isUnique: !0
        }), a.coreObj.loaded = !0;
        try {
            l.init()
        } catch (e) {
            if (o.fatal(e), !0 === a.snConf.passThroughException) throw e
        }
    }), 0)
}, function(e, t) {
    t.init = function() {
        ! function() {
            if ("function" == typeof window.CustomEvent) return !1;

            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
            }
            e.prototype = window.Event.prototype, window.CustomEvent = e
        }(), Number.isInteger = Number.isInteger || function(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }, Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t, n) {
            return function(i, r) {
                if (null == this) throw TypeError("Array.prototype.indexOf called on null or undefined");
                var o = e(this),
                    a = o.length >>> 0,
                    s = n(0 | r, a);
                if (s < 0) s = t(0, a + s);
                else if (s >= a) return -1;
                if (void 0 === i) {
                    for (; s !== a; ++s)
                        if (void 0 === o[s] && s in o) return s
                } else if (i != i) {
                    for (; s !== a; ++s)
                        if (o[s] != o[s]) return s
                } else
                    for (; s !== a; ++s)
                        if (o[s] === i) return s;
                return -1
            }
        }(Object, Math.max, Math.min)), Object.entries || (Object.entries = function(e) {
            for (var t = Object.keys(e), n = t.length, i = new Array(n); n--;) i[n] = [t[n], e[t[n]]];
            return i
        })
    }
}, function(e, t, n) {
    var i = n(0),
        r = Math.floor(Date.now() - (i.wPerf && i.wPerf.now ? i.wPerf.now() : 0));
    t.startTime = function() {
        return r
    }, t.getTimezoneOffset = function() {
        return (new Date).getTimezoneOffset()
    }, t.getTimezoneString = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
    }, t.now = i.wPerf && i.wPerf.now ? function() {
        return Math.floor(i.wPerf.now())
    } : function() {
        return Date.now() - r
    }, t.getPerformanceTimeStamp = function(e) {
        void 0 === e && (e = 2);
        var n = t.now(),
            i = "ms";
        return n / 1e3 >= 1 && (e += 2, n /= 1e3, i = "s"), n.toFixed(e) + i
    }
}, function(e, t, n) {
    var i = n(9).getValueByPath;
    e.exports = {
        getActiveAdUnits: function() {
            return i(window.snigelPubConf, "adengine.activeAdUnits")
        },
        getActiveLots: function() {
            return i(window.snigelPubConf, "adengine.activeLots")
        },
        getAdditionalGptAdSlotIds: function() {
            return i(window.snigelPubConf, "adengine.additionalGptAdSlotIds")
        },
        getStaticLabels: function() {
            return i(window.snigelPubConf, "adengine.staticLabels")
        },
        getSensitiveContent: function() {
            return i(window.snigelPubConf, "adengine.sensitiveContent")
        },
        getTargeting: function() {
            return i(window.snigelPubConf, "adengine.targeting")
        }
    }
}, function(e, t, n) {
    var i = n(2),
        r = n(0),
        o = n(1),
        a = n(4),
        s = n(3),
        d = {
            adjustmentFunctions: {
                revenueShare: {
                    enabled: !0,
                    adjustmentFunction: function(e, t) {
                        var n = t.bidderCode,
                            i = s.get("bidders.".concat(n, ".factor"));
                        return e * (1 - (i || 0))
                    }
                },
                debugRandomizeBidsInRange: {
                    enabled: !1,
                    adjustmentFunction: function(e, t) {
                        var n = d.adjustmentFunctions.debugRandomizeBidsInRange.range.min,
                            i = d.adjustmentFunctions.debugRandomizeBidsInRange.range.max;
                        return Math.random() * (i - n) + n
                    },
                    range: {
                        min: 0,
                        max: 20
                    }
                }
            }
        };

    function c() {
        for (var e in d.adjustmentFunctions) {
            var t = s.get("subsystems.".concat(e, ".enabled"));
            t !== r.udef && (d.adjustmentFunctions[e].enabled = t)
        }
        var n;
        return n = r.pbjsObj.bidderSettings = {}, i.availableBidders.forEach((function(e) {
            n[e] = {
                bidCpmAdjustment: function(e, t) {
                    var n = e;
                    for (var i in d.adjustmentFunctions)
                        if (!0 === d.adjustmentFunctions[i].enabled) try {
                            n = d.adjustmentFunctions[i].adjustmentFunction(n, t)
                        } catch (e) {
                            o.error(e)
                        }
                    return n
                }
            }
        })), !0
    }
    t.init = function(e) {
        var t = n(10);

        function i() {
            o.warn("Debug function enabled to return randomized bid responses from '".concat(d.adjustmentFunctions.debugRandomizeBidsInRange.range.min, "' to '").concat(d.adjustmentFunctions.debugRandomizeBidsInRange.range.max, "'. "))
        }
        return t.add(e, "enableRandomBidResponseRange", r.coreEvents.coreReady, null, (function(t, n, o) {
            return isNaN(t.min) || (d.adjustmentFunctions.debugRandomizeBidsInRange.range.min = t.min), isNaN(t.max) || (d.adjustmentFunctions.debugRandomizeBidsInRange.range.max = t.max), d.adjustmentFunctions.debugRandomizeBidsInRange.enabled = !0, a.addEventListener(r.coreEvents.corePbjsBiddingStart, i), e.runCallback(n, {
                message: o + "Enabled random bid resposes in a renge of: '" + t + "'",
                data: null
            }, !0), !0
        })), t.add(e, "disableRandomBidResponseRange", r.coreEvents.coreReady, null, (function(t, n, o) {
            return d.adjustmentFunctions.debugRandomizeBidsInRange.range.min = 0, d.adjustmentFunctions.debugRandomizeBidsInRange.range.max = 20, d.adjustmentFunctions.debugRandomizeBidsInRange.enabled = !1, a.removeEventListener(r.coreEvents.corePbjsBiddingStart, i), e.runCallback(n, {
                message: o + "Disabled random bid responses.",
                data: null
            }, !0), !0
        })), c()
    }
}, function(e, t, n) {
    var i = n(0),
        r = n(1),
        o = {
            oftmedia: {
                adpt: "appnexus",
                gvlid: 1111
            }
        };
    t.init = function(e) {
        var t, n, a;
        return (t = i.pbjsObj || {}) && t.que.push((function() {
            for (var e in o) {
                var n = o[e];
                t.aliasBidder(n.adpt, e, {
                    gvlid: n.gvlid
                }), r.info("Aliasing '" + e + "' bidder using '" + n.adpt + "' adapter and gvlid: " + n.gvlid)
            }
        })), n = i.coreObj.config, a = !1, (n.adUnits || []).forEach((function(e) {
            for (var t = e.bidders || [], i = t.length - 1; i >= 0; i--) "amazon" === t[i].bidder && (a || (n.modules = n.modules || {}, n.modules.amazonTam = {
                enabled: !0
            }, a = !0), e.amazonTam = !0, t.splice(i, 1))
        })), !0
    }
}, function(e, t, n) {
    var i = n(0),
        r = n(5),
        o = n(1);

    function a(e, t, n) {
        var i = e.width,
            o = e.height,
            a = e.adUnitCode;
        if ("video" === e.mediaType || i < 10 && o < 10 && !r.getAdaptivePlacementGroup(a)) return !0;
        var s = t[a];
        if (s || n.some((function(e) {
                return e.code === a && (s = e, t[a] = e, !0)
            })), s) {
            for (var d = s.activeSizes, c = 0; c < d.length; c++) {
                var l = d[c];
                if (Array.isArray(l) && 2 === l.length && i === l[0] && o === l[1]) return !0
            }
            return !1
        }
        return !0
    }
    t.init = function(e) {
        return i.pbjsObj.que.push((function() {
            i.pbjsObj.onEvent("auctionEnd", (function(e) {
                for (var t = e.adUnits, n = e.bidsReceived || [], i = {}, r = n.length - 1; r >= 0; r--) {
                    var s = n[r];
                    a(s, i, t) || (o.warn("Bid received from '" + s.bidderCode + "' does not respect the provided active sizes. Bid is being removed. Received [" + s.width + ", " + s.height + "], provided: ", i[s.adUnitCode].activeSizes), n.splice(r, 1))
                }
            }))
        })), !0
    }
}, function(e, t, n) {
    var i, r = n(2),
        o = n(0),
        a = n(1),
        s = n(4),
        d = o.coreObj.metrics;

    function c() {
        for (var e in r.activeLots) {
            r.activeLots[e].inView = !1
        }
    }

    function l() {
        for (var e in r.activeLots) {
            var t = r.activeLots[e],
                n = d.lots[e][t.adUnit];
            if (n.viewableCountTotal = n.viewableCountTotal || 0, t.isSticky && n.viewableCountTotal >= 1) n.viewableCountTotal = 1;
            else {
                var c = t.inView;
                t.inView = i.isElementIdInView(e), c != t.inView && a.debug("Placement " + e + " visible:", t.inView), t.inView && !c && (n.viewableCountTotal++, s.dispatchEvent(o.coreEvents.coreLotViewable, {
                    metricsAction: o.coreEvents.coreLotViewable + "(" + e + ":" + t.adUnit + ")",
                    eventDetail: {
                        placement: e,
                        adUnit: t.adUnit,
                        viewableCountTotal: n.viewableCountTotal
                    }
                }))
            }
        }
    }

    function u() {
        a.debug("Document visible:", i.isDocumentVisible()), l()
    }
    t.init = function(e) {
        return function(e) {
            return i = e, s.addEventListener("resize", l), s.addEventListener("scroll", l), s.addEventListener(o.coreObjName + "AuctionEnd", c), s.addEventListener(o.coreObjName + "AuctionEnd", l), s.addEventListener("visibilitychange", u, {
                eventTarget: document
            }), !0
        }(e)
    }
}, function(e, t, n) {
    var i = n(2),
        r = n(0),
        o = n(1),
        a = {
            api: {
                objectName: "__tcfapi",
                version: 2
            },
            googleId: 755
        };

    function s(e) {
        "function" != typeof e && (e = function() {
            return null
        });
        var t = a.api,
            n = t.objectName;
        i.consent ? e() : window[n] === r.udef ? (o.warn("No compatible consent management platform API '" + n + "' found."), i.consent = {
            deviceAccessAllowed: !0,
            googleConsent: !0
        }, e()) : window[n]("addEventListener", t.version, function(e) {
            return function(t, n) {
                if (!n || !1 !== t.gdprApplies && "tcloaded" !== t.eventStatus && "useractioncomplete" !== t.eventStatus) n && "cmpuishown" === t.eventStatus && o.debug("Waiting for user consent submission.");
                else {
                    if (o.debug("Consent information available.", t), t.gdprApplies) {
                        var r = t.purpose.consents[1] || t.purposeOneTreatment;
                        i.consent = {
                            deviceAccessAllowed: r,
                            googleConsent: !!t.vendor.consents[a.googleId] && r
                        }
                    } else i.consent = {
                        deviceAccessAllowed: !0,
                        googleConsent: !0
                    };
                    i.consent.tcData = t, e();
                    var s = a.api;
                    window[s.objectName]("removeEventListener", s.version, (function(e) {}), t.listenerId)
                }
            }
        }(e))
    }
    e.exports = {
        init: function(e) {
            s((function() {
                o.info("Consent information available: Resuming adsbygoogle delivery."), (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0
            }))
        },
        executeOnConsentResolved: s
    }
}, function(e, t) {
    e.exports = {
        init: function(e) {}
    }
}, function(e, t, n) {
    var i = n(2),
        r = n(0),
        o = n(1),
        a = n(4);

    function s() {
        for (var e in i.auction.adUnits) {
            var t = i.auction.adUnits[e];
            t.pubstack = {}, t.pubstack.adUnitPath = t.adUnitPath, t.pubstack.adUnitName = t.name
        }
    }
    e.exports = {
        init: function(e) {
            var t = r.snConf.settings.scripts;
            if (t)
                for (var n in t) {
                    if ("pubstack" === t[n].name) {
                        o.debug("Detected Pubstack, enabling GAM support..."), a.addEventListener(r.coreEvents.coreAuctionAdUnitsReady, s);
                        break
                    }
                }
        }
    }
}, function(e, t, n) {
    var i = n(2),
        r = n(1),
        o = n(3);

    function a(e) {
        return "static" === e.type && (t = e.label, n = e.frequency, !!(t && n && Math.random() < n) && (i.targetingFilter.staticLabels.push(t), !0));
        var t, n
    }
    i.targetingFilter = i.targetingFilter || {}, i.targetingFilter.staticLabels = i.targetingFilter.staticLabels || [], t.init = function(e) {
        return (o.get("subsystems.labelGenerator.generators") || []).forEach((function(e) {
            a(e) && r.info("Setting ".concat(e.type, " targeting label '").concat(e.label, "'. Label frequency: ").concat((100 * e.frequency).toFixed(0), "%."))
        })), !0
    }
}, function(e, t, n) {
    var i = n(0),
        r = n(1),
        o = n(3),
        a = {
            noconsentregion: 0,
            gdpr: 1,
            ccpa: 2
        };
    e.exports = {
        init: function(e, t) {
            var n = o.get("modules.adConsent"),
                s = o.get("consentRegion");
            r.debug("Initializing AdConsent: " + o.get("country") + "/" + s.toUpperCase());
            var d = i.snConf.settings.adconsent.objName,
                c = window[d];
            if (c) {
                e.addStyleToDocument(n.style);
                var l = n.config,
                    u = (window._snigelCallback || {}).adconsent || {},
                    g = function(e) {
                        var t = "global" === e ? c : c[e],
                            n = l[e];
                        for (var i in n) t(i, n[i], u[i])
                    };
                for (var f in l) g(f);
                c("setConsentRegion", a[s]), c("start")
            } else r.error("AdConsent object '" + d + "' not found.")
        }
    }
}, function(e, t, n) {
    var i, r, o = n(2),
        a = n(0),
        s = n(1),
        d = n(4),
        c = n(3),
        l = {
            amazonGvlId: 793,
            pubID: "3927",
            adServer: "googletag"
        },
        u = {
            activeSlots: []
        };

    function g(e, t) {
        d.addEventListener(a.coreEvents.coreBiddingPhaseStart, (function() {
            if (c.get("bidding.enabled")) {
                if (o.consent.tcData && o.consent.tcData.gdprApplies && (!o.consent.tcData.vendor.consents[l.amazonGvlId] || !o.consent.deviceAccessAllowed)) return s.warn("Consent requirements for Amazon TAM not met. Skipping calling bids for Amazon TAM."), !1;
                u.activeSlots = [], o.auction.adUnits.forEach((function(e) {
                    if (!0 === e.amazonTam) {
                        var t = "(" + e.code + ":" + e.name + ")";
                        s.debug("Amazon TAM enabled for lot " + t + "."), e.mediaTypes.banner ? e.mediaTypes.banner.sizes.length > 0 && u.activeSlots.push({
                            slotID: e.code,
                            slotName: e.adUnitPath,
                            sizes: e.mediaTypes.banner.sizes
                        }) : s.warn("Amazon TAM enabled lot " + t + " has no media type 'banner'. Not adding lot to apstag bidding.")
                    }
                })), u.activeSlots.length > 0 ? function(e, t, n) {
                    o.adServer.deferredBy[i] = 1;
                    var a = !1,
                        d = n + 2e3,
                        c = u.activeSlots.map((function(e) {
                            return e.slotID
                        })).map((function(e) {
                            return "(" + e + ":" + o.activeLots[e].adUnit + ")"
                        })).join("\n\t");
                    s.info("Calling Amazon TAM bids with a timeout of " + n + "ms for lots:\n\t" + c);
                    var l = setTimeout((function() {
                        a = !0, s.warn("Calling bids for Amazon TAM failed. Calling ad-server."), e.callAdServer(i)
                    }), d);
                    t.auctions[t.auctions.length - 1].apstagBidding = {
                        reqTs: e.getPerformanceNow()
                    }, r.fetchBids({
                        slots: u.activeSlots,
                        timeout: n
                    }, (function(n) {
                        if (a) s.warn("Amazon TAM is returning bids after hitting failsafe timeout. Results are going to be ignored.");
                        else {
                            clearTimeout(l), t.auctions[t.auctions.length - 1].apstagBidding.rdyTs = e.getPerformanceNow();
                            var r = (t.auctions[t.auctions.length - 1].apstagBidding.rdyTs - t.auctions[t.auctions.length - 1].apstagBidding.reqTs).toFixed(0);
                            s.info("Amazon TAM bidding finished in " + r + "ms. Calling ad-server."), e.callAdServer(i)
                        }
                    }))
                }(e, t, c.get("modules.amazonTam.timeoutMs") || c.get("bidding.timeoutMs")) : s.debug("None of the active auction lots have Amazon TAM activated. Skipping Amazon TAM bidding.")
            } else s.warn("Bidding disabled. Skipping requesting TAM bids.")
        }))
    }
    e.exports = {
        init: function(e, t) {
            if (c.get("modules.amazonTam.enabled")) {
                if (i = a.snConf.settings.apstag.objName, (r = window[i]) === a.udef) return s.debug("Amazon TAM module '" + i + "' object not found."), !1;
                if (!c.get("adUnits").some((function(e) {
                        return !!e.amazonTam
                    }))) return s.debug("Current configuration does not contain any Amazon TAM enabled ad-units. Disabling Amazon TAM module."), !1;
                l.schain = c.get("pbjsConfig.schain.config"), l.schain || s.error("Can't replicate schain configuration for Amazon TAM. Prebid SCO not configured."),
                    function(e) {
                        r.init(l, (function() {
                            var t = function() {
                                var t = e.metrics.getTimestamp("apstag", "queued").toFixed(0) + "ms",
                                    n = e.metrics.getTimestamp("apstag", "requested").toFixed(0) + "ms",
                                    i = e.metrics.getDuration("apstag", "requested", "loaded").toFixed(0) + "ms";
                                s.info("Apstag ready. Queued at: " + t + ". Requested at: " + n + ". Load in: " + i + ".")
                            };
                            a.snConf.resources.apstag.loaded ? t() : a.snConf.resources.apstag.scriptElement.addEventListener("load", t)
                        }))
                    }(e),
                    function(e, t) {
                        d.addEventListener(a.coreEvents.coreAdServerStart, (function() {
                            r.setDisplayBids();
                            var n = t.auctions[t.auctions.length - 1].apstagBidding,
                                i = n && n.rdyTs && n.reqTs ? n.rdyTs - n.reqTs : null;
                            u.activeSlots.map((function(e) {
                                return e.slotID
                            })).forEach((function(t) {
                                e.addTargetingKeyValueToAdServer(t, "sn_tam", 1), i && e.addTargetingKeyValueToAdServer(t, "amznt", i)
                            }))
                        }))
                    }(e, t), g(e, t)
            }
        }
    }
}, function(e, t, n) {
    var i = n(0),
        r = n(1),
        o = n(4),
        a = n(3);
    e.exports = {
        init: function(e, t) {
            var n;
            a.get("modules.interstitial.enabled") && window.googletag && googletag.cmd && googletag.cmd.push((function() {
                var e = a.get("modules.interstitial.adUnitPath");
                (n = googletag.defineOutOfPageSlot(e, googletag.enums.OutOfPageFormat.INTERSTITIAL)) && (n.addService(googletag.pubads()), o.addEventListener(i.coreEvents.coreAdServerStart, (function() {
                    googletag.pubads().refresh([n]), r.debug("Interstitial unit '" + e + "' has been loaded.")
                }), {
                    oneTimeEvent: !0
                }))
            }))
        }
    }
}, function(e, t, n) {
    var i = n(0),
        r = n(1),
        o = n(3);
    e.exports = {
        init: function(e, t) {
            var n, a = o.get("modules.confiant");
            return a.enabled ? function(e, t, n, o) {
                for (var a in o) {
                    var s, d = o[a];
                    switch (a) {
                        case "platform":
                            s = t;
                            break;
                        case "os":
                            s = n;
                            break;
                        default:
                            r.debug("Unkown label section '" + a + "' in malvertising scanner module configuration.")
                    }
                    if (s !== i.udef && d !== i.udef)
                        for (var c in d) {
                            var l;
                            switch (c) {
                                case "any":
                                    l = e.labels.matchAny(s, d.any);
                                    break;
                                case "none":
                                    l = e.labels.matchNone(s, d.none)
                            }
                            if (r.debug("Malvertising scanner label for '" + a + "': (" + s + ") " + c + " of (" + d[c] + "): ", l), !1 === l) return !0
                        }
                }
                return !1
            }(e, o.get("platform"), o.get("os"), a.labels || {}) ? (r.debug("Malvertising scanner module inactive for this page impression due to label filtering."), !1) : (a.scriptUrl = a.staticUrl + a.propertyId, a.scanGpt && a.scanPbjs ? (a.scriptUrl += a.gptPbjsScript, n = "Prebid and GPT.") : a.scanGpt ? (a.scriptUrl += a.gptScript, n = "GPT.") : a.scanPbjs && (a.scriptUrl += a.pbjsScript, n = "Prebid."), r.debug("Malvertising scanner module activated for " + n), void e.loadScriptAsync(a.scriptUrl)) : (r.debug("Malvertising scanner module disabled."), !1)
        }
    }
}, function(e, t, n) {
    var i = n(2),
        r = n(1),
        o = n(4),
        a = n(3),
        s = n(5);

    function d() {
        var e = [],
            t = {};
        for (var n in i.activeLots) {
            var r = s.getAdaptiveBasePlacement(n);
            t[r] || (t[r] = !0, e.push({
                placement: r,
                adUnit: i.activeLots[n].adUnit
            }))
        }
        return e
    }

    function c(e, t, n) {
        var r = (i.activeLots[e.placement] || {}).sizes || [],
            o = function(e, t, n) {
                var i = [];
                return t.some((function(t) {
                    if (e === t.name) {
                        var r = JSON.parse(JSON.stringify(t));
                        return n.sizeMapper.processAdUnits([r]), i = r.activeSizes.slice(), !0
                    }
                })), i
            }(e.adUnit, t, n);
        return !n.sizeMapper.sizeArrays.containSameSizes(r, o)
    }

    function l(e, t) {
        return e.length > 0 ? (r.debug("Reauctioning the following lots due to window resizing:\n\t" + e.map((function(e) {
            return "(" + e.placement + ":" + e.adUnit + ")"
        })).join("\n\t")), t.startAuction(e), !0) : (r.debug("Active lot sizes unchanged. No lots require reauctioning due to window resizing."), !1)
    }
    e.exports = {
        init: function(e, t) {
            a.get("modules.reauctionResize.enabled") && o.addEventListener("resize", (function(t) {
                return r.debug("Window resized to  ".concat(window.innerWidth, "x").concat(window.innerHeight, ".")), a.get("modules.reauctionResize.reauctionAllActiveLots") ? l(d(), e) : l(function(e) {
                    var t = d(),
                        n = a.get("adUnits"),
                        i = [];
                    return t.forEach((function(t) {
                        c(t, n, e) && i.push(t)
                    })), i
                }(e), e)
            }), {
                gracePeriodInMs: 500
            })
        }
    }
}, function(e, t, n) {
    var i = n(2),
        r = n(0),
        o = n(4),
        a = n(6),
        s = n(11),
        d = n(3),
        c = n(5),
        l = n(8),
        u = {},
        g = {};

    function f(e, t, n) {
        if (e && (n ? e.classList.remove("adhesive-hidden") : e.classList.add("adhesive-hidden")), t && "bottom" === t.position) {
            var i = document.getElementById("adconsent-usp-link");
            i && (n ? i.classList.add("snigel-adhesive-ccpa") : i.classList.remove("snigel-adhesive-ccpa"))
        }
    }

    function m(e, t, n) {
        n && (e < n.offsetWidth ? n.classList.add(t) : n.classList.remove(t))
    }

    function v(e) {
        a.addEventListener("slotRenderEnded", (function(e) {
            if (e.slot) {
                var t = c.getAdaptiveBasePlacement(e.slot.getSlotElementId()),
                    n = u[t];
                if (n && (g[t] = g[t] || (e.isEmpty ? r.udef : {
                        adWidth: 0
                    }), f(document.getElementById(t + "-adhesive"), n.adhesive, g[t]), !e.isEmpty)) {
                    var o = function(e, t, n) {
                            var i = e;
                            if (1 === i) {
                                var r = document.getElementById(n);
                                r && Array.from(r.children).forEach((function(e) {
                                    -1 === (e.id || "").indexOf("sn_ad_label") && i < e.offsetWidth && (i = e.offsetWidth)
                                }))
                            }
                            return t.adWidth += i, t.adWidth
                        }(e.size[0], g[t], e.slot.getSlotElementId()),
                        a = (i.auction.window.width - o) / 2;
                    m(a, "extern", document.getElementById(t + "-adhesive-close")), m(a, "adhesive-hidden", document.getElementById(t + "-adhesive-logo"))
                }
            }
        })), o.addEventListener(r.coreEvents.coreAuctionEnd, (function() {
            Object.keys(u).length > 0 && e.doOnDomReady((function() {
                for (var e in u) {
                    var t = u[e];
                    c.getAdaptiveSubPlacements(e).forEach((function(n) {
                        var r = i.activeLots[n];
                        r && !r.adSlot && f(document.getElementById(e + "-adhesive"), t.adhesive, r.pbjsAdIframe)
                    }))
                }
            }))
        }))
    }

    function p(e, t) {
        var n = d.get("modules.adLabeling"),
            r = d.get("modules.parallax.enabled"),
            o = [];
        return (i.auction.adUnits || []).forEach((function(i) {
            if (i.adhesive && !c.isAdaptiveSubPlacement(i.code)) {
                var a;
                s.setRefreshWithViewabilityOnly(i, !1), o.push(i), u[i.code] = i, r && i.parallax ? a = l.getParallaxContainerHeight(i) : (g = i.activeSizes || [], f = 0, g.forEach((function(e) {
                    Array.isArray(e) && 2 === e.length && f < e[1] && (f = e[1])
                })), a = f), n && n.enabled && -1 === (n.excludedAdUnits || []).indexOf(i.code) && (a += 15);
                var d = i.code + "-adhesive";
                e[d] = function(e, t, n, i) {
                    var r = e.adhesive,
                        o = "[id='" + t + "']{min-height:" + (n ? i : 0) + "px}[id='" + t + "']." + r.position + ".adhesive-hidden{" + r.position + ":-" + (i + 100) + "px}";
                    if (o += r.style || "", r.extendContent) {
                        var a = "snigel-adhesive-contentextension-" + r.position,
                            s = document.getElementById(a);
                        s || ((s = document.createElement("div")).id = a, "bottom" === r.position ? document.body.appendChild(s) : "top" === r.position && document.body.insertBefore(s, document.body.childNodes[0])), o += "#" + a + "{height:" + i + "px}"
                    }
                    return "bottom" === r.position && (o += ".snigel-adhesive-ccpa{bottom:" + (i + 20) + "px !important;transition:all 500ms ease-out}"), o
                }(i, d, t, a)
            }
            var g, f
        })), o
    }

    function b(e) {
        var t = d.get("modules.adhesive.noResize");
        o.addEventListener(r.coreEvents.coreAuctionAdUnitsSet, (function() {
            g = {};
            var n = {},
                i = p(n, t);
            if (i.length > 0) {
                for (var r in n) {
                    var o = r + "-style",
                        a = document.getElementById(o);
                    a && a.parentNode && a.parentNode.removeChild(a), e.addStyleToDocument(n[r], o)
                }
                e.doOnDomReady((function() {
                    i.forEach((function(e) {
                        ! function(e, t) {
                            var n, i, r, o = e.adhesive,
                                a = e.code + "-adhesive",
                                c = document.getElementById(a);
                            if (!c) {
                                (c = document.createElement("div")).id = a;
                                var l = document.getElementById(e.code);
                                if (l || ((l = document.createElement("div")).id = e.code), t) {
                                    l.className = "snigel-adhesive-centered", l.style.top = "50%";
                                    var u = document.createElement("div");
                                    u.className = "snigel-adhesive-center", u.appendChild(l), c.appendChild(u)
                                } else c.appendChild(l);
                                if (!o.hideCloseButton) {
                                    var g = document.createElement("div");
                                    g.id = a + "-close", g.className = "close-adhesive", g.classList.add(o.position), g.innerHTML = '<svg height="100%" width="100%" viewBox="0 0 100 100"><path class="close-adhesive-icon" d="M8 22 L36 50 L8 78 A9.9 9.9 0 1 0 22 92 L50 64 L78 92 A9.9 9.9 0 1 0 92 78 L64 50 L92 22 A9.9 9.9 0 1 0 78 8 L50 36 L22 8 A9.9 9.9 0 1 0 8 22"/>X</svg>', g.addEventListener("click", (n = c, i = o, r = e, function(e) {
                                        f(n, i), s.setRefreshWithViewabilityOnly(r, !0)
                                    })), c.appendChild(g)
                                }
                                if (o.showLogo) {
                                    var m = document.createElement("a");
                                    m.id = a + "-logo", m.className = "logo-adhesive", "mobile" === d.get("platform") && m.classList.add("mobile"), m.href = "https://www.snigel.com", m.target = "_blank", c.appendChild(m)
                                }
                                c.className = "snigel-adhesive", c.classList.add(o.position), f(c, o), document.body.appendChild(c)
                            }
                        }(e, t)
                    }))
                }))
            }
        }))
    }
    e.exports = {
        init: function(e, t) {
            d.get("modules.adhesive.enabled") && (e.addStyleToDocument(".snigel-adhesive{box-sizing:content-box;position:fixed;left:0;right:0;z-index:99999;text-align:center;padding-top:5px;padding-bottom:5px;background-color:#f2f6f7;transition:all 500ms ease-out}.snigel-adhesive.bottom{bottom:0}.snigel-adhesive.top{top:0}.snigel-adhesive-center{position:absolute;top:0;bottom:0;right:0;left:0}.snigel-adhesive-centered{position:absolute;margin:0;transform:translateY(-50%);right:0;left:0}.close-adhesive{box-sizing:content-box;width:16px;height:16px;position:absolute;right:0;padding:5px;background-color:#f2f6f7;text-align:center;cursor:pointer}.close-adhesive.bottom{top:0}.close-adhesive.top{bottom:0}.close-adhesive.bottom.extern{top:-21px;padding-bottom:0}.close-adhesive.top.extern{bottom:-21px;padding-top:0}.close-adhesive>svg{display:block}.close-adhesive-icon{fill:gray;stroke-width:3;stroke:#73d9c6}.logo-adhesive{cursor:pointer;opacity:0.65;position:absolute;left:5px;top:5px;width:24px;height:24px;background:url('https://cdn.snigelweb.com/resources/img/logo/snigel-icon.png') no-repeat 50% 50%/contain}.logo-adhesive:hover{opacity:1}.logo-adhesive.adhesive-hidden{left:-500px}"), b(e), v(e), function(e) {
                o.addEventListener(r.coreEvents.coreAdServerStart, (function() {
                    for (var t in u) {
                        var n = u[t];
                        c.getAdaptiveSubPlacements(t).forEach((function(t) {
                            var r = i.activeLots[t];
                            r && r.adSlot && n.adhesive && e.addTargetingKeyValueToAdServer(t, "sn_stk", n.adhesive.position)
                        }))
                    }
                }))
            }(e))
        }
    }
}, function(e, t, n) {
    var i = n(2),
        r = n(0),
        o = n(4),
        a = n(3),
        s = n(8),
        d = n(5),
        c = {},
        l = {};

    function u(e, t, n) {
        var i = e[t];
        if (i.top >= n) return 0;
        var r = 1;
        for (var o in e) {
            var a = e[o],
                s = c[o] ? c[o].adUnit.sticky.topOffset : n;
            if (a.top < s && a.top > i.top && a.right >= i.left && i.right >= a.left) {
                if (1 != r) return 0;
                r = 2
            }
        }
        return r
    }

    function g(e, t, n, i) {
        if (t.sticked) {
            t.sticked = !1, t.sticking = !1;
            var r = document.getElementById(i);
            n.makeParentSticky && (r = (r || {}).parentNode), r && (r.style.position = "", r.style.top = "", r.style.width = "", r.style.left = "", r.style.zIndex = "", r.className = ""), e.style.height = ""
        }
    }

    function f(e, t, n, i, r, o, a) {
        var s = e.getBoundingClientRect(),
            d = document.getElementById(i);
        n.makeParentSticky && (d = (d || {}).parentNode), t.sticked && !o || (t.sticked || (t.sticked = !0, t.sticking = !1), e.style.height = s.height + "px", d && (d.style.width = s.width + "px", d.style.zIndex = n.zIndex || 9999, d.className = e.className)), d && function(e, t, n, i, r, o, a) {
            var s = n.topOffset,
                d = n.minSpaceToNextAd,
                c = s;
            for (var l in r) {
                var u = r[l];
                u.top > i.top && u.top <= i.height + s + d && u.right >= i.left && i.right >= u.left && c > u.top - i.height - d && (c = u.top - i.height - d)
            }
            c < s ? t.sticking || (t.sticking = !0, e.style.position = "relative", e.style.left = "", e.style.top = c - i.top + "px") : 1 == a && (t.sticking = !1, e.style.position = "fixed", e.style.left = o.left + "px", e.style.top = s + "px")
        }(d, t, n, r[i], r, s, a)
    }

    function m(e) {
        var t = function() {
            var e = {};
            for (var t in l) {
                var n = l[t],
                    i = document.getElementById(n + "-stickypointer") || document.getElementById(n);
                i && (e[t] = i.getBoundingClientRect())
            }
            return e
        }();
        for (var n in c) {
            var i = document.getElementById(n + "-stickypointer");
            if (i) {
                var r = c[n],
                    o = r.adUnit.sticky,
                    a = u(t, n, o.topOffset);
                a ? f(i, r, o, n, t, e, a) : g(i, r, o, n)
            }
        }
    }

    function v(e) {
        o.addEventListener(r.coreEvents.coreAuctionAdUnitsSet, (function() {
            e.doOnDomReady((function() {
                var e;
                i.auction.adUnits.forEach((function(e) {
                    l[e.code] || e.adhesive || d.isAdaptiveSubPlacement(e.code) || (l[e.code] = s.getAdUnitPlacement(e), e.sticky && function(e) {
                        var t = e.code;
                        c[t] = {
                            adUnit: e,
                            sticked: !1
                        };
                        var n = t + "-stickypointer";
                        if (!document.getElementById(n)) {
                            var i = document.getElementById(t);
                            if (i) {
                                e.sticky.makeParentSticky && (t = (i = i.parentNode).id), i.id = n;
                                var r = document.createElement("div");
                                for (r.id = t; i.children.length > 0;) r.appendChild(i.children[0]);
                                i.appendChild(r), r.style = i.style, i.style = ""
                            }
                        }
                    }(e))
                })), (e = function(e, t) {
                    Array.isArray(e) && e.forEach((function(e) {
                        var n = t(e);
                        l[n] || (l[n] = n)
                    }))
                })(i.adServer.additionalAdSlots, (function(e) {
                    return e.getSlotElementId()
                })), e(i.adServer.additionalAdSlotsElementIds, (function(e) {
                    return e
                })), e(a.get("modules.sticky.bumpingElements"), (function(e) {
                    return e
                }))
            }))
        }))
    }
    e.exports = {
        init: function(e, t) {
            a.get("modules.sticky.enabled") && a.get("adUnits").some((function(e) {
                return !!e.sticky
            })) && (v(e), o.addEventListener("resize", (function() {
                m(!0)
            }), {
                polledInMs: 30
            }), o.addEventListener("scroll", (function() {
                m()
            }), {
                polledInMs: 30
            }), function(e) {
                o.addEventListener(r.coreEvents.coreAdServerStart, (function() {
                    for (var t in c) {
                        var n = c[t];
                        d.getAdaptiveSubPlacements(t).forEach((function(t) {
                            var r = i.activeLots[t];
                            r && r.adSlot && n && n.adUnit && n.adUnit.sticky && e.addTargetingKeyValueToAdServer(t, "sn_stk", "vertical")
                        }))
                    }
                }))
            }(e))
        }
    }
}, function(e, t, n) {
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var r, o = n(2),
        a = n(0),
        s = n(1),
        d = n(4),
        c = n(3);

    function l(e, t) {
        return Array.isArray(t) ? !!t.some((function(t) {
            return e.adUnit === t.adUnit && e.placement === t.placement
        })) : "object" === i(t) && (t[e.placement] && t[e.placement].adUnit === e.adUnit)
    }

    function u() {
        0 === o.lazyLoad.lazyLoadLots.length ? (d.removeEventListener("resize", u), d.removeEventListener("scroll", u), s.debug("Lazy-load event listener deactivated."), o.lazyLoad.listenerActive = !1) : function() {
            for (var e = o.lazyLoad.lazyLoadLots.length - 1; e >= 0; e--) {
                var t = o.lazyLoad.lazyLoadLots[e],
                    n = t.lot,
                    i = n.placement;
                if (l(n, o.activeLots)) s.error("Trying to lazy load lot '" + n.adUnit + "': '" + i + "' which is already loaded. Removed lot from lazy load module."), o.lazyLoad.lazyLoadLots.splice(e, 1);
                else {
                    var a = r.getAbsoluteVerticalViewabilityDistanceForElementId(i),
                        d = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                        u = ~~(t.triggerMarginPercent * d / 100);
                    "mobile" === c.get("platform") && (u *= t.mobileScaling), a <= u && (s.debug("Lazy loading lot '" + n.adUnit + "': '" + i + "'."), o.lazyLoad.lazyLoadLots.splice(e, 1), r.startAuction([n]))
                }
            }
        }()
    }

    function g(e) {
        try {
            if ("object" !== i(e) || !e.adUnit || !e.placement) throw new TypeError("Expecting a minimum argument of: { placement: String, adUnit: String }.");
            if (l(e, o.lazyLoad.lazyLoadLots)) s.warn("Lot '" + e.adUnit + "': '" + e.placement + "' was already set to lazy load. Ignoring.");
            else {
                var t = Math.max(Number.parseInt(c.get("modules.lazyLoad.triggerMarginPercent")) || 100, 100);
                Number.isInteger(e.lazyLoad.triggerMarginPercent) && e.lazyLoad.triggerMarginPercent >= 100 && (t = e.lazyLoad.triggerMarginPercent);
                var n = Math.max(Number.parseInt(c.get("modules.lazyLoad.mobileScaling")) || 1, 1);
                Number.isInteger(e.lazyLoad.mobileScaling) && e.lazyLoad.mobileScaling >= 1 && (n = e.lazyLoad.mobileScaling), !1 === o.lazyLoad.listenerActive && (d.addEventListener("resize", u), d.addEventListener("scroll", u), s.debug("Lazy-load event listener activated."), o.lazyLoad.listenerActive = !0), delete e.lazyLoad, o.lazyLoad.lazyLoadLots.push({
                    lot: e,
                    triggerMarginPercent: t,
                    mobileScaling: n
                })
            }
            s.debug("Enabled lazy loading for lot '" + e.adUnit + "': '" + e.placement + "'."), u()
        } catch (e) {
            s.error("Lazy load error: ", e)
        }
    }
    e.exports = {
        init: function(e, t) {
            c.get("modules.lazyLoad.enabled") && (r = e, o.lazyLoad = {
                listenerActive: !1,
                lazyLoadLots: []
            }, d.addEventListener(a.coreEvents.coreAuctionStart, (function() {
                for (var e in o.auction.requestedLots) {
                    var t = o.auction.requestedLots[e];
                    t.lazyLoad && (s.debug("Auction lot (" + t.adUnit + ":" + e + ") is queued for lazy-loading. Removing from current auction..."), delete o.auction.requestedLots[e], g(t))
                }
            })))
        }
    }
}, function(e, t, n) {
    var i = n(2),
        r = n(0),
        o = n(4),
        a = n(3),
        s = [];
    e.exports = {
        init: function(e, t) {
            a.get("modules.videoPlayer.enabled") && (o.addEventListener(r.coreEvents.coreAuctionAdUnitsReady, (function() {
                var e = i.auction.adUnits || [],
                    t = i.auction.requestedLots;
                s = [], e.forEach((function(e) {
                    var n = t[e.code];
                    n && n.contentVideoUrl && s.push(n)
                }))
            })), function(e) {
                o.addEventListener(r.coreEvents.coreAdServerStart, (function() {
                    s.forEach((function(t) {
                        (i.activeLots[t.placement] || {}).adSlot && t.contentVideoUrl && e.addTargetingKeyValueToAdServer(t.placement, "sn_cv", "string" == typeof t.contentVideoUrl ? t.contentVideoUrl : "")
                    }))
                }))
            }(e))
        }
    }
}]);
window[window._snigelConfig.settings.adngin.objName] = window[window._snigelConfig.settings.adngin.objName] || {
    queue: [],
    metrics: {}
};
window[window._snigelConfig.settings.adngin.objName].config = {
    "elementPrefix": "adngin",
    "auction": {
        "autoRun": true
    },
    "adServer": {
        "autoCall": true,
        "policyViolationUrls": []
    },
    "bidders": {
        "rubicon": {
            "factor": 0,
            "currency": "usd"
        },
        "sovrn": {
            "factor": 0,
            "currency": "usd"
        },
        "openx": {
            "factor": 0,
            "currency": "eur"
        },
        "ix": {
            "factor": 0,
            "currency": "usd"
        },
        "conversant": {
            "factor": 0,
            "currency": "usd"
        },
        "onemobile": {
            "factor": 0,
            "currency": "usd"
        },
        "connectad": {
            "factor": 0,
            "currency": "usd"
        },
        "appnexus": {
            "factor": 0,
            "currency": "usd"
        },
        "smartadserver": {
            "factor": 0,
            "currency": "eur"
        },
        "pubmatic": {
            "factor": 0,
            "currency": "usd"
        },
        "triplelift": {
            "factor": 0,
            "currency": "usd"
        },
        "33across": {
            "factor": 0,
            "currency": "usd"
        },
        "sharethrough": {
            "factor": 0,
            "currency": "usd"
        },
        "adagio": {
            "factor": 0,
            "currency": "usd"
        },
        "onetag": {
            "factor": 0,
            "currency": "eur"
        },
        "amx": {
            "factor": 0,
            "currency": "usd"
        },
        "smilewanted": {
            "factor": 0,
            "currency": "eur"
        }
    },
    "bidding": {
        "enabled": true,
        "timeoutMs": 1250,
        "failsafeTimeoutMs": 3000,
        "adServerCurrency": "eur",
        "bidFloorEnabled": true,
        "floorCpm": 0.05,
        "defaultBidderCurrency": "usd"
    },
    "pbjsConfig": {
        "consentManagement": {
            "gdpr": {
                "cmpApi": "iab",
                "timeout": 200,
                "defaultGdprScope": true,
                "rules": [{
                    "purpose": "storage",
                    "enforcePurpose": true,
                    "enforceVendor": true
                }]
            },
            "usp": {
                "cmpApi": "iab",
                "timeout": 200
            }
        },
        "priceGranularity": "high",
        "bidderSequence": "random",
        "bidderTimeout": 1250,
        "maxRequestsPerOrigin": 6,
        "useBidCache": true,
        "cache": {
            "url": "https://prebid.adnxs.com/pbc/v1/cache"
        },
        "schain": {
            "validation": "strict",
            "config": {
                "ver": "1.0",
                "complete": 1,
                "nodes": [{
                    "asi": "snigelweb.com",
                    "sid": "7088",
                    "domain": "w3schools.com",
                    "hp": 1
                }]
            }
        },
        "enableSendAllBids": false,
        "targetingControls": {
            "alwaysIncludeDeals": true
        },
        "userSync": {
            "aliasSyncEnabled": true,
            "userIds": [{
                "name": "criteo",
                "storage": {
                    "type": "html5",
                    "name": "_criteo",
                    "expires": 180,
                    "refreshInSeconds": 28800
                }
            }, {
                "name": "pubCommonId",
                "storage": {
                    "type": "html5",
                    "name": "_pubCommonId",
                    "expires": 365,
                    "refreshInSeconds": 28800
                }
            }, {
                "name": "unifiedId",
                "storage": {
                    "type": "html5",
                    "name": "_unifiedId",
                    "expires": 60,
                    "refreshInSeconds": 28800
                },
                "params": {
                    "partner": "8p4qh9l"
                }
            }, {
                "name": "id5Id",
                "storage": {
                    "type": "html5",
                    "name": "id5id",
                    "expires": 180,
                    "refreshInSeconds": 28800
                },
                "params": {
                    "partner": 364
                }
            }, {
                "name": "identityLink",
                "storage": {
                    "type": "html5",
                    "name": "_identityLink",
                    "expires": 90,
                    "refreshInSeconds": 28800
                },
                "params": {
                    "pid": "107"
                }
            }],
            "syncEnabled": true,
            "auctionDelay": 50,
            "syncsPerBidder": 5,
            "syncDelay": 5000,
            "filterSettings": {
                "all": {
                    "bidders": "*",
                    "filter": "include"
                }
            }
        },
        "s2sConfig": {
            "bidders": [],
            "enabled": false,
            "endpoint": "//adserv-sgp1.snigelweb.com/bp/v1/openrtb2/auction",
            "syncEndpoint": "//adserv-sgp1.snigelweb.com/pbs/v1/cookie_sync",
            "timeout": 400,
            "accountId": "1"
        }
    },
    "modules": {
        "sticky": {
            "enabled": true,
            "bumpingElements": ["footer"]
        },
        "adaptive": {
            "enabled": false
        },
        "adhesive": {
            "enabled": false
        },
        "confiant": {
            "enabled": {
                "primitiveTargeting": {
                    "default": true,
                    "values": [{
                        "filterId": 11,
                        "value": true
                    }]
                }
            },
            "scanGpt": false,
            "scanPbjs": true,
            "gptScript": "/gpt/config.js",
            "staticUrl": "https://confiant-integrations.global.ssl.fastly.net/",
            "pbjsScript": "/prebid/config.js",
            "propertyId": "t_Qv_vWzcBDsyn934F1E0MWBb1c",
            "gptPbjsScript": "/gpt_and_prebid/config.js"
        },
        "lazyLoad": {
            "enabled": false,
            "mobileScaling": 5,
            "triggerMarginPercent": 100
        },
        "parallax": {
            "enabled": false
        },
        "adConsent": {
            "style": ".snigel-cmp-framework .sn-inner {background-color:#fffefe!important;}.snigel-cmp-framework .sn-b-def {border-color:#04aa6d!important;color:#04aa6d!important;}.snigel-cmp-framework .sn-b-def.sn-blue {color:#ffffff!important;background-color:#04aa6d!important;border-color:#04aa6d!important;}.snigel-cmp-framework .sn-selector ul li {color:#04aa6d!important;}.snigel-cmp-framework .sn-selector ul li:after {background-color:#04aa6d!important;}.snigel-cmp-framework .sn-footer-tab .sn-privacy a {color:#04aa6d!important;}.snigel-cmp-framework .sn-arrow:after,.snigel-cmp-framework .sn-arrow:before {background-color:#04aa6d!important;}.snigel-cmp-framework .sn-switch input:checked + span::before {background-color:#04aa6d!important;}#adconsent-usp-link {border: 1px solid #04aa6d!important;color:#04aa6d!important;}#adconsent-usp-banner-optout input:checked + .adconsent-usp-slider {background-color:#04aa6d!important;}#adconsent-usp-banner-btn {color:#ffffff;border: solid 1px #04aa6d!important;background-color:#04aa6d!important; }",
            "config": {
                "ccpa": {
                    "setUSPLink": "ccpa",
                    "setSignedLSPA": true,
                    "setPrivacyPolicy": "https://www.w3schools.com/about/about_privacy.asp"
                },
                "gdpr": {
                    "setLogo": "https://www.w3schools.com/images/w3schools_logo_500_04AA6D.png",
                    "setUiMode": 0,
                    "setPrivacyPolicy": "https://www.w3schools.com/about/about_privacy.asp",
                    "enableWelcomeText": true,
                    "reconsiderConsent": 48,
                    "enableWelcomeTitle": true,
                    "disableLegitimateInterest": false
                },
                "global": {
                    "setPublisherCC": "US",
                    "enableGoogleAnalytics": false
                }
            },
            "enabled": true
        },
        "adLabeling": {
            "label": "ADVERTISEMENT",
            "style": "color:#000000;font-size:12px;margin:0;text-align:center;",
            "enabled": true,
            "excludedAdUnits": ["adngin-try_it_leaderboard-0", "adngin-main_leaderboard-0", "adngin-main_leaderboard_courses-0", "adngin-try_it_leaderboard_courses-0", "div-gpt-ad-1428407818244-0", "div-gpt-ad-1422003450156-2", "snhb-w3schools_video-0", "adngin-video2-0"]
        },
        "videoPlayer": {
            "enabled": false
        },
        "interstitial": {
            "enabled": false
        },
        "smartRefresh": {
            "enabled": true
        },
        "reauctionResize": {
            "enabled": false,
            "reauctionAllActiveLots": false
        }
    },
    "filters": ["labels", "sizeMap"],
    "adUnits": [{
        "name": "video2",
        "bidders": [],
        "adUnitPath": "/22152718,16833175/w3schools_video2",
        "sizeMapping": {
            "banner": {
                "biddingSizes": [],
                "additionalSizes": [
                    [1, 1]
                ]
            }
        },
        "adUnitPathRegex": "",
        "adUnitPathOverride": false
    }, {
        "name": "bottom_left_courses",
        "bidders": [{
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "amx",
            "params": {
                "tagId": "c25pZ2VsLmNvbQ",
                "adUnitId": "w3_bottom_left_courses"
            },
            "objectTargeting": {
                "filterId": "83"
            }
        }, {
            "bidder": "adagio",
            "params": {
                "site": "w3schools-com",
                "placement": "w3_bottom_left_courses",
                "organizationId": "1060",
                "adUnitElementId": "adngin-bottom_left_courses-0"
            }
        }, {
            "bidder": "ix",
            "params": {
                "siteId": "677771"
            }
        }, {
            "bidder": "onemobile",
            "params": {
                "dcn": "8a9694b8017070f8309df8ed25b10036",
                "pos": "8a969938017979ae5eb6c491f5f50289"
            }
        }, {
            "bidder": "openx",
            "params": {
                "unit": "544079624",
                "delDomain": "snigel-d.openx.net"
            },
            "objectTargeting": {
                "filterId": "80"
            }
        }, {
            "bidder": "appnexus",
            "params": {
                "placementId": 21709730
            }
        }, {
            "bidder": "rubicon",
            "params": {
                "siteId": 181004,
                "zoneId": 2065388,
                "accountId": 14598
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true
        },
        "adUnitPath": "/22152718,16833175/w3schools_bottom_left_courses",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "max-width": 1239
                    },
                    "biddingSizes": [
                        [300, 250],
                        [336, 280]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "min-width": 1240
                    },
                    "biddingSizes": [
                        [970, 250],
                        [300, 250],
                        [336, 280]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }, {
            "intervalsSec": [360],
            "impressionLimit": 10,
            "enableOnViewable": false,
            "triggerOnViewable": false,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }, {
        "name": "bottom_right_courses",
        "bidders": [{
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "amx",
            "params": {
                "tagId": "c25pZ2VsLmNvbQ",
                "adUnitId": "w3_bottom_right_courses"
            },
            "objectTargeting": {
                "filterId": "83"
            }
        }, {
            "bidder": "adagio",
            "params": {
                "site": "w3schools-com",
                "placement": "w3_bottom_right_courses",
                "organizationId": "1060",
                "adUnitElementId": "adngin-bottom_right_courses-0"
            }
        }, {
            "bidder": "appnexus",
            "params": {
                "placementId": 21709731
            }
        }, {
            "bidder": "ix",
            "params": {
                "siteId": "677772"
            }
        }, {
            "bidder": "onemobile",
            "params": {
                "dcn": "8a9694b8017070f8309df8ed25b10036",
                "pos": "8a969434017979ae664dc49241a70261"
            }
        }, {
            "bidder": "openx",
            "params": {
                "unit": "544079625",
                "delDomain": "snigel-d.openx.net"
            },
            "objectTargeting": {
                "filterId": "80"
            }
        }, {
            "bidder": "rubicon",
            "params": {
                "siteId": 181004,
                "zoneId": 2065390,
                "accountId": 14598
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true,
            "sizeConstriction": false
        },
        "adUnitPath": "/22152718,16833175/w3schools_bottom_right_courses",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "min-width": 975
                    },
                    "biddingSizes": [
                        [300, 250],
                        [336, 280]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }, {
        "name": "main_leaderboard_courses",
        "bidders": [{
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "unruly",
            "params": {
                "siteId": 238401
            },
            "objectTargeting": {
                "filterId": "84"
            }
        }, {
            "bidder": "appnexus",
            "params": {
                "placementId": 21709728
            }
        }, {
            "bidder": "ix",
            "params": {
                "siteId": "677769"
            }
        }, {
            "bidder": "onemobile",
            "params": {
                "dcn": "8a9694b8017070f8309df8ed25b10036",
                "pos": "8a969434017979ae664dc49107990260"
            }
        }, {
            "bidder": "openx",
            "params": {
                "unit": "544079622",
                "delDomain": "snigel-d.openx.net"
            },
            "objectTargeting": {
                "filterId": "80"
            }
        }, {
            "bidder": "rubicon",
            "params": {
                "siteId": 181004,
                "zoneId": 2065384,
                "accountId": 14598
            }
        }, {
            "bidder": "amx",
            "params": {
                "tagId": "c25pZ2VsLmNvbQ",
                "adUnitId": "w3schools.com_main_leaderboard_courses"
            },
            "objectTargeting": {
                "filterId": "83"
            }
        }, {
            "bidder": "adagio",
            "params": {
                "site": "w3schools-com",
                "placement": "w3_main_leaderboard_courses",
                "organizationId": "1060",
                "adUnitElementId": "w3_main_leaderboard_courses"
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true,
            "sizeConstriction": false
        },
        "adUnitPath": "/22152718,16833175/w3schools_main_leaderboard_courses",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "max-width": 469
                    },
                    "biddingSizes": [
                        [320, 50]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 779,
                        "min-width": 470
                    },
                    "biddingSizes": [
                        [468, 60],
                        [320, 50]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 992,
                        "min-width": 780
                    },
                    "biddingSizes": [
                        [728, 90]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 1024,
                        "min-width": 993
                    },
                    "biddingSizes": [
                        [468, 60],
                        [320, 50]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "min-width": 1025
                    },
                    "biddingSizes": [
                        [728, 90]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }, {
        "name": "mid_content_courses",
        "bidders": [{
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "unruly",
            "params": {
                "siteId": 238403
            },
            "objectTargeting": {
                "filterId": "84"
            }
        }, {
            "bidder": "amx",
            "params": {
                "tagId": "c25pZ2VsLmNvbQ",
                "adUnitId": "w3_mid_content_courses"
            },
            "objectTargeting": {
                "filterId": "83"
            }
        }, {
            "bidder": "appnexus",
            "params": {
                "placementId": 21709729
            }
        }, {
            "bidder": "onemobile",
            "params": {
                "dcn": "8a9694b8017070f8309df8ed25b10036",
                "pos": "8a96917d017979ae6267c49174c9026b"
            }
        }, {
            "bidder": "ix",
            "params": {
                "siteId": "677770"
            }
        }, {
            "bidder": "openx",
            "params": {
                "unit": "544079623",
                "delDomain": "snigel-d.openx.net"
            },
            "objectTargeting": {
                "filterId": "80"
            }
        }, {
            "bidder": "rubicon",
            "params": {
                "siteId": 181004,
                "zoneId": 2065386,
                "accountId": 14598
            }
        }, {
            "bidder": "adagio",
            "params": {
                "site": "w3schools-com",
                "placement": "w3_mid_content_courses",
                "organizationId": "1060",
                "adUnitElementId": "w3_mid_content_courses"
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true,
            "sizeConstriction": false
        },
        "adUnitPath": "/22152718,16833175/w3schools_mid_content_courses",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "max-width": 469
                    },
                    "biddingSizes": [
                        [300, 250],
                        [336, 280],
                        [320, 50]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 779,
                        "min-width": 470
                    },
                    "biddingSizes": [
                        [300, 250],
                        [336, 280],
                        [320, 50],
                        [468, 60]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 992,
                        "min-width": 780
                    },
                    "biddingSizes": [
                        [728, 90],
                        [300, 250],
                        [336, 280]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 1024,
                        "min-width": 993
                    },
                    "biddingSizes": [
                        [300, 250],
                        [336, 280]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 1440,
                        "min-width": 1025
                    },
                    "biddingSizes": [
                        [300, 250],
                        [336, 280],
                        [728, 90]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "min-width": 1441
                    },
                    "biddingSizes": [
                        [728, 90],
                        [970, 250],
                        [970, 90],
                        [300, 250]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }, {
        "name": "sidebar_sticky_courses",
        "sticky": {
            "zIndex": 1,
            "topOffset": 0,
            "makeParentSticky": false,
            "minSpaceToNextAd": 0
        },
        "bidders": [{
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "unruly",
            "params": {
                "siteId": 238400
            },
            "objectTargeting": {
                "filterId": "84"
            }
        }, {
            "bidder": "amx",
            "params": {
                "tagId": "c25pZ2VsLmNvbQ",
                "adUnitId": "w3_sidebar_sticky_courses"
            },
            "objectTargeting": {
                "filterId": "83"
            }
        }, {
            "bidder": "appnexus",
            "params": {
                "placementId": 21709732
            }
        }, {
            "bidder": "ix",
            "params": {
                "siteId": "677773"
            }
        }, {
            "bidder": "onemobile",
            "params": {
                "dcn": "8a9694b8017070f8309df8ed25b10036",
                "pos": "8a969434017979ae664dc4929d750262"
            }
        }, {
            "bidder": "adagio",
            "params": {
                "site": "w3schools-com",
                "placement": "w3_sidebar_sticky_courses",
                "organizationId": "1060",
                "adUnitElementId": "adngin-sidebar_sticky_courses"
            }
        }, {
            "bidder": "openx",
            "params": {
                "unit": "544079626",
                "delDomain": "snigel-d.openx.net"
            },
            "objectTargeting": {
                "filterId": "80"
            }
        }, {
            "bidder": "rubicon",
            "params": {
                "siteId": 181004,
                "zoneId": 2065392,
                "accountId": 14598
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true,
            "sizeConstriction": false
        },
        "adUnitPath": "/22152718,16833175/w3schools_sidebar_sticky_courses",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "max-width": 1134,
                        "min-width": 993
                    },
                    "biddingSizes": [
                        [120, 600]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 1674,
                        "min-width": 1135
                    },
                    "biddingSizes": [
                        [120, 600],
                        [160, 600]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "min-width": 1675
                    },
                    "biddingSizes": [
                        [300, 600],
                        [160, 600]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }, {
            "intervalsSec": [360],
            "impressionLimit": 3,
            "enableOnViewable": false,
            "triggerOnViewable": false,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }, {
        "name": "sidebar_top_courses",
        "bidders": [{
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "unruly",
            "params": {
                "siteId": 238402
            },
            "objectTargeting": {
                "filterId": "84"
            }
        }, {
            "bidder": "amx",
            "params": {
                "tagId": "c25pZ2VsLmNvbQ",
                "adUnitId": "w3_sidebar_top_courses"
            },
            "objectTargeting": {
                "filterId": "83"
            }
        }, {
            "bidder": "adagio",
            "params": {
                "site": "w3schools-com",
                "placement": "w3_sidebar_top_courses",
                "organizationId": "1060",
                "adUnitElementId": "adngin-sidebar_top_courses-0"
            }
        }, {
            "bidder": "appnexus",
            "params": {
                "placementId": 21709733
            }
        }, {
            "bidder": "ix",
            "params": {
                "siteId": "677774"
            }
        }, {
            "bidder": "onemobile",
            "params": {
                "dcn": "8a9694b8017070f8309df8ed25b10036",
                "pos": "8a96917d017979ae6267c492f4ce026c"
            }
        }, {
            "bidder": "openx",
            "params": {
                "unit": "544079627",
                "delDomain": "snigel-d.openx.net"
            },
            "objectTargeting": {
                "filterId": "80"
            }
        }, {
            "bidder": "rubicon",
            "params": {
                "siteId": 181004,
                "zoneId": 2065394,
                "accountId": 14598
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true,
            "sizeConstriction": false
        },
        "adUnitPath": "/22152718,16833175/w3schools_sidebar_top_courses",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "max-width": 729
                    },
                    "biddingSizes": [
                        [320, 50]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 992,
                        "min-width": 730
                    },
                    "biddingSizes": [
                        [728, 90]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 1134,
                        "min-width": 993
                    },
                    "biddingSizes": [
                        [120, 600]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 1674,
                        "min-width": 1135
                    },
                    "biddingSizes": [
                        [120, 600],
                        [160, 600]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "min-width": 1675
                    },
                    "biddingSizes": [
                        [160, 600],
                        [300, 600]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }, {
            "intervalsSec": [360],
            "impressionLimit": 3,
            "enableOnViewable": false,
            "triggerOnViewable": false,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }, {
        "name": "try_it_leaderboard_courses",
        "bidders": [{
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "unruly",
            "params": {
                "siteId": 238404
            },
            "objectTargeting": {
                "filterId": "84"
            }
        }, {
            "bidder": "onetag",
            "params": {
                "pubId": "5f8e06c2cbd2faa"
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true,
            "sizeConstriction": false
        },
        "adUnitPath": "/22152718,16833175/w3schools_try_it_leaderboard_courses",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "max-width": 467
                    },
                    "biddingSizes": [
                        [320, 50]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 727,
                        "min-width": 467
                    },
                    "biddingSizes": [
                        [468, 60]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 975,
                        "min-width": 730
                    },
                    "biddingSizes": [
                        [728, 90]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "min-width": 976
                    },
                    "biddingSizes": [
                        [970, 90],
                        [728, 90]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [360],
            "impressionLimit": 3,
            "enableOnViewable": false,
            "triggerOnViewable": false,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }, {
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }, {
        "name": "main_leaderboard",
        "bidders": [{
            "bidder": "adagio",
            "params": {
                "site": "w3schools-com",
                "placement": "w3schools.com_main_leaderboard",
                "organizationId": "1060",
                "adUnitElementId": "w3schools.com_main_leaderboard"
            }
        }, {
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "smilewanted",
            "params": {
                "zoneId": "w3schools.com_hb_display"
            }
        }, {
            "bidder": "sharethrough",
            "params": {
                "pkey": "qSwaPRfYnKpExSLZYndRfVNM"
            },
            "objectTargeting": {
                "filterId": "44"
            }
        }, {
            "bidder": "emx_digital",
            "params": {
                "tagid": "122442"
            },
            "objectTargeting": {
                "filterId": "45"
            }
        }, {
            "bidder": "smartadserver",
            "params": {
                "pageId": 932544,
                "siteId": 219976,
                "formatId": 62368,
                "networkId": 2967
            },
            "objectTargeting": {
                "filterId": "65"
            }
        }, {
            "bidder": "onemobile",
            "params": {
                "dcn": "8a9694b8017070f8309df8ed25b10036",
                "pos": "sws_hb_w3schools_leader_728x90"
            }
        }, {
            "bidder": "33across",
            "params": {
                "siteId": "beuMI6FAar6QjTaKlId8sQ",
                "productId": "siab"
            },
            "objectTargeting": {
                "filterId": "56"
            }
        }, {
            "bidder": "pubmatic",
            "params": {
                "adSlot": "sws-hb_w3schools_Main_Leaderboard@728x90",
                "publisherId": "157369"
            },
            "objectTargeting": {
                "filterId": "59"
            }
        }, {
            "bidder": "openx",
            "params": {
                "unit": "539960990",
                "delDomain": "snigel-d.openx.net"
            },
            "objectTargeting": {
                "filterId": "80"
            }
        }, {
            "bidder": "triplelift",
            "params": {
                "inventoryCode": "w3schools-main_leaderboard"
            }
        }, {
            "bidder": "rubicon",
            "params": {
                "siteId": 181004,
                "zoneId": 914484,
                "accountId": 14598
            }
        }, {
            "bidder": "ix",
            "params": {
                "siteId": "277108"
            }
        }, {
            "bidder": "connectad",
            "params": {
                "siteId": 1011566,
                "networkId": 10047
            }
        }, {
            "bidder": "appnexus",
            "params": {
                "placementId": 13164162
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true
        },
        "adUnitPath": "/22152718,16833175/sws-hb//w3schools.com//main_leaderboard",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "max-width": 469
                    },
                    "biddingSizes": [
                        [320, 50]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 779,
                        "min-width": 470
                    },
                    "biddingSizes": [
                        [468, 60],
                        [320, 50]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 992,
                        "min-width": 780
                    },
                    "biddingSizes": [
                        [728, 90]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 1024,
                        "min-width": 993
                    },
                    "biddingSizes": [
                        [468, 60],
                        [320, 50]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 1440,
                        "min-width": 1025
                    },
                    "biddingSizes": [
                        [728, 90]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "min-width": 1441
                    },
                    "biddingSizes": [
                        [728, 90],
                        [970, 90]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [360],
            "impressionLimit": 7,
            "enableOnViewable": false,
            "triggerOnViewable": false,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }, {
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }, {
        "name": "sidebar_sticky",
        "sticky": {
            "zIndex": 1,
            "topOffset": 0,
            "makeParentSticky": false,
            "minSpaceToNextAd": 0
        },
        "bidders": [{
            "bidder": "adagio",
            "params": {
                "site": "w3schools-com",
                "placement": "w3schools.com_sidebar_sticky",
                "organizationId": "1060",
                "adUnitElementId": "w3schools.com_sidebar_sticky"
            }
        }, {
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "smilewanted",
            "params": {
                "zoneId": "w3schools.com_hb_display_4"
            }
        }, {
            "bidder": "unruly",
            "params": {
                "siteId": 238400
            },
            "objectTargeting": {
                "filterId": "84"
            }
        }, {
            "bidder": "emx_digital",
            "params": {
                "tagid": "122441"
            },
            "objectTargeting": {
                "filterId": "22"
            }
        }, {
            "bidder": "smartadserver",
            "params": {
                "pageId": 917874,
                "siteId": 219976,
                "formatId": 62362,
                "networkId": 2967
            },
            "objectTargeting": {
                "filterId": "22"
            }
        }, {
            "bidder": "onemobile",
            "params": {
                "dcn": "8a9694b8017070f8309df8ed25b10036",
                "pos": "sws_hb_w3schools_side_300x600"
            },
            "objectTargeting": {
                "filterId": "22"
            }
        }, {
            "bidder": "conversant",
            "params": {
                "site_id": "117726"
            },
            "objectTargeting": {
                "filterId": "43"
            }
        }, {
            "bidder": "33across",
            "params": {
                "siteId": "a-cFKuFAar6QjTaKlId8sQ",
                "productId": "siab"
            },
            "objectTargeting": {
                "filterId": "56"
            }
        }, {
            "bidder": "triplelift",
            "params": {
                "inventoryCode": "w3schools-sidebar_sticky"
            }
        }, {
            "bidder": "rubicon",
            "params": {
                "siteId": 181004,
                "zoneId": 883812,
                "accountId": 14598
            }
        }, {
            "bidder": "pubmatic",
            "params": {
                "adSlot": "sws-hb_w3schools_right_sidebar_2@160x600",
                "publisherId": "157369"
            },
            "objectTargeting": {
                "filterId": "59"
            }
        }, {
            "bidder": "openx",
            "params": {
                "unit": "539882512",
                "delDomain": "snigel-d.openx.net"
            },
            "objectTargeting": {
                "filterId": "80"
            }
        }, {
            "bidder": "ix",
            "params": {
                "siteId": "259558"
            }
        }, {
            "bidder": "connectad",
            "params": {
                "siteId": 1011567,
                "networkId": 10047
            }
        }, {
            "bidder": "appnexus",
            "params": {
                "placementId": 12987174
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true
        },
        "adUnitPath": "/22152718,16833175/sws-hb//w3schools.com//sidebar_sticky",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "max-width": 1134,
                        "min-width": 993
                    },
                    "biddingSizes": [
                        [120, 600]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 1674,
                        "min-width": 1135
                    },
                    "biddingSizes": [
                        [160, 600],
                        [120, 600]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "min-width": 1675
                    },
                    "biddingSizes": [
                        [160, 600],
                        [300, 600]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [360],
            "impressionLimit": 20,
            "enableOnViewable": false,
            "triggerOnViewable": false,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }, {
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }, {
        "name": "sidebar_top",
        "bidders": [{
            "bidder": "adagio",
            "params": {
                "site": "w3schools-com",
                "placement": "w3schools.com_sidebar_top",
                "organizationId": "1060",
                "adUnitElementId": "w3schools.com_sidebar_top"
            }
        }, {
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "smilewanted",
            "params": {
                "zoneId": "w3schools.com_hb_display_5"
            }
        }, {
            "bidder": "sharethrough",
            "params": {
                "pkey": "W4DqWva41ymo3DwcRAHNkHtd"
            },
            "objectTargeting": {
                "filterId": "44"
            }
        }, {
            "bidder": "emx_digital",
            "params": {
                "tagid": "122443"
            },
            "objectTargeting": {
                "filterId": "45"
            }
        }, {
            "bidder": "sovrn",
            "params": {
                "tagid": "565863"
            },
            "objectTargeting": {
                "filterId": "64"
            }
        }, {
            "bidder": "smartadserver",
            "params": {
                "pageId": 932545,
                "siteId": 219976,
                "formatId": 62362,
                "networkId": 2967
            },
            "objectTargeting": {
                "filterId": "65"
            }
        }, {
            "bidder": "onetag",
            "params": {
                "pubId": "5f8e06c2cbd2faa"
            }
        }, {
            "bidder": "onemobile",
            "params": {
                "dcn": "8a9694b8017070f8309df8ed25b10036",
                "pos": "sws_hb_w3schools_wide_300x600"
            }
        }, {
            "bidder": "33across",
            "params": {
                "siteId": "bhud6yFAar6QjTaKlId8sQ",
                "productId": "siab"
            },
            "objectTargeting": {
                "filterId": "56"
            }
        }, {
            "bidder": "triplelift",
            "params": {
                "inventoryCode": "w3schools-wide_skyscraper"
            }
        }, {
            "bidder": "rubicon",
            "params": {
                "siteId": 181004,
                "zoneId": 914486,
                "accountId": 14598
            }
        }, {
            "bidder": "pubmatic",
            "params": {
                "adSlot": "sws-hb_w3schools_Wide_Skyscraper@160x600",
                "publisherId": "157369"
            },
            "objectTargeting": {
                "filterId": "59"
            }
        }, {
            "bidder": "openx",
            "params": {
                "unit": "539960993",
                "delDomain": "snigel-d.openx.net"
            },
            "objectTargeting": {
                "filterId": "80"
            }
        }, {
            "bidder": "ix",
            "params": {
                "siteId": "277110"
            }
        }, {
            "bidder": "connectad",
            "params": {
                "siteId": 1011569,
                "networkId": 10047
            }
        }, {
            "bidder": "appnexus",
            "params": {
                "placementId": 13164163
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true
        },
        "adUnitPath": "/22152718,16833175/sws-hb//w3schools.com//wide_skyscraper",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "max-width": 729
                    },
                    "biddingSizes": [
                        [320, 50]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 992,
                        "min-width": 730
                    },
                    "biddingSizes": [
                        [728, 90]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 1134,
                        "min-width": 993
                    },
                    "biddingSizes": [
                        [120, 600]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 1674,
                        "min-width": 1135
                    },
                    "biddingSizes": [
                        [160, 600]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "min-width": 1675
                    },
                    "biddingSizes": [
                        [160, 600],
                        [300, 600]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [360],
            "impressionLimit": 20,
            "enableOnViewable": false,
            "triggerOnViewable": false,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }, {
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }, {
        "name": "try_it_leaderboard",
        "bidders": [{
            "bidder": "adagio",
            "params": {
                "site": "w3schools-com",
                "placement": "w3schools_try_it_leaderboard",
                "organizationId": "1060",
                "adUnitElementId": "w3schools_try_it_leaderboard"
            }
        }, {
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "unruly",
            "params": {
                "siteId": 238404
            },
            "objectTargeting": {
                "filterId": "84"
            }
        }, {
            "bidder": "sharethrough",
            "params": {
                "pkey": "QDVJeMCDiuG4S6vTEGqqmtpX"
            },
            "objectTargeting": {
                "filterId": "44"
            }
        }, {
            "bidder": "emx_digital",
            "params": {
                "tagid": "122447"
            },
            "objectTargeting": {
                "filterId": "45"
            }
        }, {
            "bidder": "sovrn",
            "params": {
                "tagid": "563928"
            },
            "objectTargeting": {
                "filterId": "64"
            }
        }, {
            "bidder": "smartadserver",
            "params": {
                "pageId": 935090,
                "siteId": 219976,
                "formatId": 62364,
                "networkId": 2967
            },
            "objectTargeting": {
                "filterId": "65"
            }
        }, {
            "bidder": "onetag",
            "params": {
                "pubId": "5f8e06c2cbd2faa"
            }
        }, {
            "bidder": "onemobile",
            "params": {
                "dcn": "8a9694b8017070f8309df8ed25b10036",
                "pos": "8a969548017474931fc795f05f6b0c72"
            }
        }, {
            "bidder": "33across",
            "params": {
                "siteId": "bud0kcFAar6QjTaKlId8sQ",
                "productId": "siab"
            },
            "objectTargeting": {
                "filterId": "56"
            }
        }, {
            "bidder": "pubmatic",
            "params": {
                "adSlot": "sws-hb_w3schools_try_it_pages_leaderboard@728x90",
                "publisherId": "157369"
            },
            "objectTargeting": {
                "filterId": "59"
            }
        }, {
            "bidder": "openx",
            "params": {
                "unit": "540001628",
                "delDomain": "snigel-d.openx.net"
            },
            "objectTargeting": {
                "filterId": "80"
            }
        }, {
            "bidder": "triplelift",
            "params": {
                "inventoryCode": "w3schools-try_it_leaderboard"
            }
        }, {
            "bidder": "rubicon",
            "params": {
                "siteId": 181004,
                "zoneId": 922576,
                "accountId": 14598
            }
        }, {
            "bidder": "ix",
            "params": {
                "siteId": "277113"
            }
        }, {
            "bidder": "conversant",
            "params": {
                "site_id": "124672"
            },
            "objectTargeting": {
                "filterId": "43"
            }
        }, {
            "bidder": "connectad",
            "params": {
                "siteId": 1011576,
                "networkId": 10047
            }
        }, {
            "bidder": "appnexus",
            "params": {
                "placementId": 13218673
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true
        },
        "adUnitPath": "/22152718,16833175/sws-hb//w3schools.com//try_it_leaderboard",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "max-width": 467
                    },
                    "biddingSizes": [
                        [320, 50]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 727,
                        "min-width": 468
                    },
                    "biddingSizes": [
                        [468, 60]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "min-width": 728
                    },
                    "biddingSizes": [
                        [728, 90]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [360],
            "impressionLimit": 20,
            "enableOnViewable": false,
            "triggerOnViewable": false,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }, {
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }, {
        "name": "bottom_left",
        "bidders": [{
            "bidder": "adagio",
            "params": {
                "site": "w3schools-com",
                "placement": "w3schools.com_bottom_left",
                "organizationId": "1060",
                "adUnitElementId": "w3schools.com_bottom_left"
            }
        }, {
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "smilewanted",
            "params": {
                "zoneId": "w3schools.com_hb_display_2"
            }
        }, {
            "bidder": "sharethrough",
            "params": {
                "pkey": "yQz3yLaGi7xNbt4ZBGx6fYeH"
            },
            "objectTargeting": {
                "filterId": "18"
            }
        }, {
            "bidder": "emx_digital",
            "params": {
                "tagid": "122445"
            },
            "objectTargeting": {
                "filterId": "18"
            }
        }, {
            "bidder": "smartadserver",
            "params": {
                "pageId": 932547,
                "siteId": 219976,
                "formatId": 62370,
                "networkId": 2967
            },
            "objectTargeting": {
                "filterId": "65"
            }
        }, {
            "bidder": "onemobile",
            "params": {
                "dcn": "8a9694b8017070f8309df8ed25b10036",
                "pos": "sws_hb_w3schools_bottom_970x250"
            }
        }, {
            "bidder": "triplelift",
            "params": {
                "inventoryCode": "w3schools-bottom_medium_rectangle"
            }
        }, {
            "bidder": "rubicon",
            "params": {
                "siteId": 181004,
                "zoneId": 914490,
                "accountId": 14598
            }
        }, {
            "bidder": "pubmatic",
            "params": {
                "adSlot": "sws-hb_w3schools_Bottom_BillboardMPU@970x250",
                "publisherId": "157369"
            },
            "objectTargeting": {
                "filterId": "59"
            }
        }, {
            "bidder": "openx",
            "params": {
                "unit": "539960998",
                "delDomain": "snigel-d.openx.net"
            },
            "objectTargeting": {
                "filterId": "80"
            }
        }, {
            "bidder": "ix",
            "params": {
                "siteId": "277112"
            }
        }, {
            "bidder": "connectad",
            "params": {
                "siteId": 1011573,
                "networkId": 10047
            }
        }, {
            "bidder": "appnexus",
            "params": {
                "placementId": 13164165
            }
        }, {
            "bidder": "33across",
            "params": {
                "siteId": "bnNnBAFAar6QjTaKlId8sQ",
                "productId": "siab"
            },
            "objectTargeting": {
                "filterId": "56"
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true
        },
        "adUnitPath": "/22152718,16833175/sws-hb//w3schools.com//bottom_medium_rectangle",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "max-width": 1239
                    },
                    "biddingSizes": [
                        [300, 250]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "min-width": 1240
                    },
                    "biddingSizes": [
                        [970, 250],
                        [300, 250]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [5910239413],
            "triggerOnUserActive": false
        }, {
            "intervalsSec": [360],
            "impressionLimit": 3,
            "enableOnViewable": false,
            "triggerOnViewable": false,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [5914180236],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }, {
        "name": "bottom_right",
        "bidders": [{
            "bidder": "adagio",
            "params": {
                "site": "w3schools-com",
                "placement": "w3schools.com_bottom_left",
                "organizationId": "1060",
                "adUnitElementId": "w3schools.com_bottom_left"
            }
        }, {
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "smilewanted",
            "params": {
                "zoneId": "w3schools.com_hb_display_3"
            }
        }, {
            "bidder": "sharethrough",
            "params": {
                "pkey": "LeeZ2TH9yYcYziKAciybTN5L"
            },
            "objectTargeting": {
                "filterId": "44"
            }
        }, {
            "bidder": "emx_digital",
            "params": {
                "tagid": "122446"
            },
            "objectTargeting": {
                "filterId": "45"
            }
        }, {
            "bidder": "sovrn",
            "params": {
                "tagid": "565881"
            },
            "objectTargeting": {
                "filterId": "64"
            }
        }, {
            "bidder": "smartadserver",
            "params": {
                "pageId": 932548,
                "siteId": 219976,
                "formatId": 62361,
                "networkId": 2967
            },
            "objectTargeting": {
                "filterId": "65"
            }
        }, {
            "bidder": "onemobile",
            "params": {
                "dcn": "8a9694b8017070f8309df8ed25b10036",
                "pos": "8a969548017474931fc795edccd80c71"
            }
        }, {
            "bidder": "33across",
            "params": {
                "siteId": "bqPB9YFAar6QjTaKlId8sQ",
                "productId": "siab"
            },
            "objectTargeting": {
                "filterId": "56"
            }
        }, {
            "bidder": "triplelift",
            "params": {
                "inventoryCode": "w3schools-right_bottom_medium_rectangle"
            }
        }, {
            "bidder": "rubicon",
            "params": {
                "siteId": 181004,
                "zoneId": 914492,
                "accountId": 14598
            }
        }, {
            "bidder": "pubmatic",
            "params": {
                "adSlot": "sws-hb_w3schools_Bottom_Right_MPU@300x250",
                "publisherId": "157369"
            },
            "objectTargeting": {
                "filterId": "59"
            }
        }, {
            "bidder": "openx",
            "params": {
                "unit": "539960999",
                "delDomain": "snigel-d.openx.net"
            },
            "objectTargeting": {
                "filterId": "80"
            }
        }, {
            "bidder": "ix",
            "params": {
                "siteId": "277111"
            }
        }, {
            "bidder": "conversant",
            "params": {
                "site_id": "117726"
            },
            "objectTargeting": {
                "filterId": "43"
            }
        }, {
            "bidder": "connectad",
            "params": {
                "siteId": 1011575,
                "networkId": 10047
            }
        }, {
            "bidder": "appnexus",
            "params": {
                "placementId": 13164166
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true
        },
        "adUnitPath": "/22152718,16833175/sws-hb//w3schools.com//right_bottom_medium_rectangle",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "min-width": 975
                    },
                    "biddingSizes": [
                        [300, 250]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }, {
            "intervalsSec": [360],
            "impressionLimit": 5,
            "enableOnViewable": false,
            "triggerOnViewable": false,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [5914180236],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }, {
        "name": "mid_content",
        "bidders": [{
            "bidder": "adagio",
            "params": {
                "site": "w3schools-com",
                "placement": "w3schools.com_mid_content",
                "organizationId": "1060",
                "adUnitElementId": "w3schools.com_mid_content"
            }
        }, {
            "bidder": "amazon",
            "params": {},
            "objectTargeting": {
                "filterId": "21"
            }
        }, {
            "bidder": "smilewanted",
            "params": {
                "zoneId": "w3schools.com_hb_display_1"
            }
        }, {
            "bidder": "unruly",
            "params": {
                "siteId": 238403
            },
            "objectTargeting": {
                "filterId": "84"
            }
        }, {
            "bidder": "sharethrough",
            "params": {
                "pkey": "zWrg6ypVT58Wt1pWbTwKqfz3"
            },
            "objectTargeting": {
                "filterId": "44"
            }
        }, {
            "bidder": "emx_digital",
            "params": {
                "tagid": "122444"
            },
            "objectTargeting": {
                "filterId": "45"
            }
        }, {
            "bidder": "smartadserver",
            "params": {
                "pageId": 932546,
                "siteId": 219976,
                "formatId": 62361,
                "networkId": 2967
            },
            "objectTargeting": {
                "filterId": "65"
            }
        }, {
            "bidder": "onemobile",
            "params": {
                "dcn": "8a9694b8017070f8309df8ed25b10036",
                "pos": "sws_hb_w3schools_mid_300x250"
            }
        }, {
            "bidder": "33across",
            "params": {
                "siteId": "bkPA-MFAar6QjTaKlId8sQ",
                "productId": "siab"
            },
            "objectTargeting": {
                "filterId": "56"
            }
        }, {
            "bidder": "pubmatic",
            "params": {
                "adSlot": "sws-hb_w3schools_Mid_Content@300x250",
                "publisherId": "157369"
            },
            "objectTargeting": {
                "filterId": "59"
            }
        }, {
            "bidder": "openx",
            "params": {
                "unit": "539960995",
                "delDomain": "snigel-d.openx.net"
            },
            "objectTargeting": {
                "filterId": "80"
            }
        }, {
            "bidder": "triplelift",
            "params": {
                "inventoryCode": "w3schools-mid_content"
            }
        }, {
            "bidder": "rubicon",
            "params": {
                "siteId": 181004,
                "zoneId": 914488,
                "accountId": 14598
            }
        }, {
            "bidder": "ix",
            "params": {
                "siteId": "277109"
            }
        }, {
            "bidder": "connectad",
            "params": {
                "siteId": 1011570,
                "networkId": 10047
            }
        }, {
            "bidder": "appnexus",
            "params": {
                "placementId": 13164164
            }
        }],
        "adaptive": {
            "enabled": false,
            "uniformGrouping": true,
            "sizeConstriction": false
        },
        "snConfig": {
            "video": false
        },
        "adUnitPath": "/22152718,16833175/sws-hb//w3schools.com//mid_content",
        "sizeMapping": {
            "banner": {
                "dynamicSizes": [{
                    "mediaQuery": {
                        "max-width": 469
                    },
                    "biddingSizes": [
                        [300, 250],
                        [320, 50],
                        [336, 280]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 779,
                        "min-width": 470
                    },
                    "biddingSizes": [
                        [300, 250],
                        [336, 280],
                        [468, 60],
                        [320, 50]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 992,
                        "min-width": 780
                    },
                    "biddingSizes": [
                        [728, 90],
                        [300, 250],
                        [336, 280]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 1024,
                        "min-width": 993
                    },
                    "biddingSizes": [
                        [300, 250],
                        [336, 280]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "max-width": 1440,
                        "min-width": 1025
                    },
                    "biddingSizes": [
                        [728, 90],
                        [300, 250],
                        [336, 280]
                    ],
                    "additionalSizes": []
                }, {
                    "mediaQuery": {
                        "min-width": 1441
                    },
                    "biddingSizes": [
                        [728, 90],
                        [970, 250],
                        [970, 90],
                        [300, 250]
                    ],
                    "additionalSizes": []
                }]
            }
        },
        "smartRefresh": [{
            "intervalsSec": [360],
            "impressionLimit": 10,
            "enableOnViewable": false,
            "triggerOnViewable": false,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }, {
            "intervalsSec": [30],
            "impressionLimit": 0,
            "enableOnViewable": true,
            "triggerOnViewable": true,
            "campaignIdBlacklist": [2675212261],
            "lineItemIdBlacklist": [],
            "triggerOnUserActive": false
        }],
        "adUnitPathRegex": ""
    }],
    "pbjsAnalytics": {
        "providers": [{
            "provider": "adagio"
        }]
    },
    "targeting": {
        "11": {
            "and": [{
                "or": ["mobile"]
            }]
        },
        "18": {
            "and": []
        },
        "21": {
            "and": [{
                "or": ["US", "CA", "AU", "SG", "DE", "GB", "NL", "AT", "SE", "FI", "BR", "SA", "CL", "JP", "HK", "AE", "NZ", "NO", "KW", "MC", "IT", "ES", "FR", "CH", "CZ", "PT", "BE", "IE", "DK", "SK", "LV", "EE", "IS", "BG", "HU", "LT", "LU", "MT", "RO", "SI", "MX", "GR", "HR", "CY", "KR", "PL", "LI"]
            }]
        },
        "22": {
            "and": [{
                "or": ["AT", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK", "TR", "AU", "BR", "JP", "MX", "CA", "US", "SG", "AL", "AD", "AM", "AZ", "BY", "GE", "KZ", "MD", "MC", "ME", "MK", "SM", "RS", "UA", "AR", "CL", "CO", "EG", "PE", "TW", "TH", "AE", "CN", "IL", "MY", "NZ", "PH", "RU", "SA", "ZA"]
            }]
        },
        "43": {
            "and": [{
                "or": ["US", "DE", "GB", "CA"]
            }]
        },
        "44": {
            "and": [{
                "or": ["US", "CA", "GB", "AU", "BR", "IT", "MX", "KR", "SG", "PE", "NZ", "CO", "IE", "AE"]
            }]
        },
        "45": {
            "and": [{
                "or": ["US", "CA", "DE", "GB", "BR", "SA", "AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DK", "EE", "ES", "FI", "FR", "FO", "GG", "GI", "HR", "HU", "IE", "IM", "IS", "JE", "LI", "LT", "LU", "MD", "LV", "MC", "IT", "GR", "ME", "MK", "MT", "NL", "NO", "RO", "PT", "PL", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA"]
            }]
        },
        "56": {
            "and": [{
                "or": ["US", "CA", "AU", "NZ"]
            }]
        },
        "59": {
            "and": [{
                "nor": ["AL", "BI", "BY", "CF", "CU", "IQ", "IR", "KP", "LB", "LY", "ME", "MK", "SD", "SO", "SY", "UA", "VE", "YE", "ZW", "SS"]
            }]
        },
        "64": {
            "and": [{
                "or": ["AR", "AT", "BE", "BR", "CA", "CL", "CO", "HR", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IL", "IT", "LV", "LT", "MX", "NL", "NO", "PE", "PL", "PT", "RO", "SK", "ZA", "ES", "SE", "CH", "TR", "GB", "US"]
            }]
        },
        "65": {
            "and": [{
                "nor": ["RU", "BG", "EG", "CO", "PE", "TR", "IL", "EC", "GR", "BR", "UA", "RS"]
            }]
        },
        "80": {
            "and": [{
                "nor": ["AF", "AX", "AL", "DZ", "AS", "AI", "AG", "AM", "AW", "AZ", "BS", "BH", "BB", "BZ", "BJ", "BM", "BO", "BA", "BW", "BN", "BG", "BI", "KH", "KY", "CF", "TD", "CN", "CG", "CD", "CI", "CW", "CY", "CZ", "DM", "EG", "SV", "GQ", "EE", "FO", "FJ", "GF", "PF", "GA", "GM", "GE", "GI", "GL", "GD", "GU", "GG", "GN", "GW", "GY", "HT", "VA", "HN", "IR", "IQ", "JM", "JO", "KE", "KI", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LU", "MK", "MG", "MW", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "FM", "MD", "MN", "ME", "MS", "MZ", "MM", "NR", "NP", "NI", "NE", "NF", "MP", "PS", "QA", "RE", "BL", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "SC", "SL", "SX", "SK", "SI", "SB", "SO", "SS", "LK", "SD", "SZ", "SY", "TZ", "TL", "TG", "TT", "TN", "TV", "UG", "UZ", "VU", "VE", "VG", "VI", "GH", "GP", "HU", "IS", "IM", "JE", "KW", "MO", "MV", "MC", "NC", "NU", "OM", "PA", "PG", "PY", "ST", "SR", "TJ", "TM", "TC", "YE", "ZM", "ZW", "NA", "PW", "RW", "SN", "TO", "UM", "WF", "AD", "AO", "BT", "IO", "BF", "CM", "CV", "KM", "CK", "DJ", "ER", "ET", "FK"]
            }]
        },
        "83": {
            "and": [{
                "nor": ["WF", "WS", "TL", "TK", "GU", "PW", "PF", "PG", "PN", "SB", "MH", "MP", "FJ", "FM", "VU", "NC", "NF", "NZ", "NR", "NU", "CK", "KI", "UM", "TV", "TO", "AS", "AU", "BD", "BN", "BH", "BT", "TM", "TJ", "JP", "GE", "OM", "JO", "HK", "PS", "IQ", "PK", "PH", "VN", "SA", "UZ", "MM", "MO", "MN", "MV", "MY", "IL", "IO", "NP", "CN", "CC", "CX", "SY", "KG", "KH", "KR", "KP", "KW", "KZ", "SG", "YE", "LB", "LA", "TW", "TR", "LK", "TH", "AE", "AF", "IR", "AM", "IN", "AZ", "ID", "QA"]
            }]
        },
        "84": {
            "and": [{
                "or": ["GB", "US"]
            }]
        }
    },
    "site": "w3schools.com",
    "version": "3863-1655117203930",
    "currencyRates": {
        "EUR": {
            "USD": 1.0578,
            "AUD": 1.4995,
            "NZD": 1.6515
        }
    },
    "build": "production-80",
    "id": "w3schools.com:3863-1655117203930-default",
    "environment": "production",
    "country": "IN",
    "region": "TG",
    "consentRegion": "noconsentregion",
    "configGeo": "default",
    "gdpr": false,
    "ccpa": false,
    "cfwConfigHit": true,
    "cfwCoreHit": true,
    "cfwUserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "cfwUuid": "64cd9539-508b-4510-8114-869ffee69344"
};