/*! @amzn/apswebapstaglibrary - apstag - v8.0.1 - 2022-06-06 15:56:03 */ ! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 26)
}([function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t) {
        try {
            var e = parseInt(t, 10);
            if (!isNaN(e)) return !(e <= 0) && (100 <= e || 100 * Math.random() <= e)
        } catch (t) {}
        return !1
    }

    function i(t, e) {
        var n = parseInt(e, 10),
            r = [],
            o = 0;
        if (!u(t)) return r;
        if (isNaN(n) || n < 1) return [t];
        for (var i = t.length; o < i;) {
            var c = o;
            o += n, r.push(t.slice(c, o))
        }
        return r
    }

    function c() {
        return "".concat(Math.round(1e12 * Math.random())).concat(Date.now())
    }

    function a(t) {
        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Array(t), r = 0; r < t; r++) n[r] = e[Math.floor(Math.random() * e.length)];
        return n.join("")
    }

    function s(t) {
        return "object" === r(t) && null !== t
    }

    function u(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function d(t, e) {
        return s(t) && void 0 !== t[e] && "" !== t[e]
    }

    function l() {
        var t = "amzn_lsTest";
        try {
            return window.localStorage.setItem(t, t), window.localStorage.removeItem(t), !0
        } catch (t) {
            return !1
        }
    }

    function f(t, e) {
        return -1 !== t.indexOf(e)
    }

    function b() {
        return document.cookie.split("; ").map((function(t) {
            return t.split("=")
        }))
    }

    function p(t) {
        var e = new Date;
        return e.setDate(e.getDate() + t), e.toUTCString()
    }

    function m(t) {
        try {
            var e = t.innerWidth || t.document.documentElement.clientWidth || t.document.body.clientWidth,
                n = t.innerHeight || t.document.documentElement.clientHeight || t.document.body.clientHeight;
            return "".concat(e, "x").concat(n)
        } catch (t) {}
        return "x"
    }

    function g(t, e) {
        return decodeURIComponent(t).split("?")[0].split("#")[0] === decodeURIComponent(e).split("?")[0].split("#")[0]
    }

    function h(t) {
        var e = Object.keys(t);
        return e.filter((function(e) {
            return t[e]
        })).length === e.length
    }
    n.d(e, "n", (function() {
        return o
    })), n.d(e, "c", (function() {
        return i
    })), n.d(e, "e", (function() {
        return c
    })), n.d(e, "f", (function() {
        return a
    })), n.d(e, "l", (function() {
        return s
    })), n.d(e, "k", (function() {
        return u
    })), n.d(e, "m", (function() {
        return d
    })), n.d(e, "i", (function() {
        return l
    })), n.d(e, "j", (function() {
        return f
    })), n.d(e, "d", (function() {
        return b
    })), n.d(e, "g", (function() {
        return p
    })), n.d(e, "h", (function() {
        return m
    })), n.d(e, "b", (function() {
        return g
    })), n.d(e, "a", (function() {
        return h
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return u
    })), n.d(e, "c", (function() {
        return d
    })), n.d(e, "d", (function() {
        return l
    })), n.d(e, "a", (function() {
        return f
    }));
    e = n(0);
    var r = n(3),
        o = n(2),
        i = n(6),
        c = n(7),
        a = Object(e.n)(10),
        s = [];

    function u(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
        try {
            (n || Object(i.d)("errors")) && console.error(t);
            var u = {
                ts: Date.now(),
                url: encodeURIComponent(Object(c.g)(window)),
                r: encodeURIComponent(Object(c.h)(window)),
                _type: "apsLibraryError",
                e: {
                    et: t.name,
                    el: e,
                    msg: t.message
                }
            };
            return s.push(u), o.a.dispatch({
                type: "LOG_ERROR",
                error: u
            }), !!a && (Object(r.b)(u), !0)
        } catch (t) {
            console.error(t)
        }
        return !1
    }

    function d(t, e, n) {
        var r = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
        return u({
            name: e,
            message: "".concat(t, " was of type '").concat(e, "' instead of '").concat(n, "'")
        }, "TypeError-".concat(t), r)
    }

    function l(t, e) {
        return function() {
            try {
                return t.apply(null, arguments)
            } catch (t) {
                return u(t, e, !0), null
            }
        }
    }

    function f(t) {
        (1 < arguments.length && void 0 !== arguments[1] && arguments[1] || Object(i.d)("errors")) && console.warn(t)
    }!0 === Object(i.c)("exposeErrors") && (window.apstagErrors = s)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return f
    }));
    var r, o = n(4),
        i = n(0);
    e = n(6);

    function c(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function a(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(n), !0).forEach((function(e) {
                s(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function s(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function u(t) {
        return function(t) {
            if (Array.isArray(t)) return d(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || function(t, e) {
            if (t) {
                if ("string" == typeof t) return d(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(t, e) : void 0
            }
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function l() {
        var t, e, n, r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                AAXReqs: [],
                aaxViewabilityEnabled: !1,
                bidConfigs: {},
                bidReqs: {},
                bsPixels: {},
                cfg: {
                    v: -1,
                    CSM_JS: "//c.amazon-adsystem.com/aax2/csm.js.gz",
                    CSM_RTB_COMMUNICATOR_JS: "//c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js",
                    DEBUG_APP_HTML: "//c.amazon-adsystem.com/aax2/debugApp.html",
                    DEBUG_APP_HTML_V2: "//c.amazon-adsystem.com/aax2/debug_app_v2.html",
                    DEFAULT_TIMEOUT: 2e3,
                    DTB_PATH: "/e/dtb",
                    TEST_PATH_FREQUENCY: 0,
                    TEST_BID_ENDPOINT: null,
                    TEST_PATH_LATENCY_SAMPLE_RATE: null,
                    PIXEL_PATH: "/x/px/",
                    LATENCY_SAMPLING_RATE: 1,
                    COOKIE_MATCH_DELAY: 0,
                    MAX_SLOTS_PER_REQUEST: 1,
                    CF_ROUTING_RATE: 100,
                    SLOT_RENDER_SAMPLING_RATE: 1,
                    FEATURE_SAMPLING_RATE: 1,
                    CONFIG_CALL_ENABLED: !1,
                    LIB_CONFIG_PATH: "/cdn/prod/config"
                },
                cmpFired: !1,
                config: {
                    pubID: ""
                },
                displayAdServer: {
                    noBidSlotIDs: [],
                    shouldSampleRender: !1,
                    slotRenderEndedSet: !1
                },
                errors: [],
                eventLog: [],
                experiments: {},
                gamSlotFetchLog: [],
                gamSlotRenderPixel: {
                    aaxReqOffset: 0,
                    gamSlotFetchLogOffset: 0
                },
                hosts: {
                    DEFAULT_AAX_BID_HOST: "aax.amazon-adsystem.com",
                    DEFAULT_AAX_PIXEL_HOST: "aax.amazon-adsystem.com"
                },
                identityState: {},
                libraryLoadCallLatency: 0,
                Q: [],
                slotBids: {},
                sync917: !1,
                targetingKeys: {},
                tcfParseTime: 0,
                outstream: {
                    renderStart: 0,
                    shouldSample: !1
                }
            },
            c = 1 < arguments.length ? arguments[1] : void 0;
        return {
            AAXReqs: function(t, e) {
                switch (e.type) {
                    case "RECORD_AAX_REQUEST":
                        return [].concat(u(t), [e.data]);
                    case "RECORD_AAX_REQ_PROP":
                        return t.map((function(t) {
                            return (t = a({}, t)).bidReqID === e.bidReqID && (t[e.key] = e.value), t
                        }));
                    default:
                        return u(t)
                }
            }(r.AAXReqs, c),
            aaxViewabilityEnabled: (e = r.aaxViewabilityEnabled, "SET_VIEWABILITY" !== (n = c).type ? e : n.viewability),
            bidConfigs: (e = r.bidConfigs, "RECORD_ORIGINAL_BID_CONFIG" !== (n = c).type ? a({}, e) : a(a({}, e), {}, s({}, n.bidConfig.bidReqID, n.bidConfig))),
            bidReqs: function(t, e) {
                var n;
                switch (e.type) {
                    case "ADD_CHUNKED_REQUESTS":
                        return a(a({}, t), {}, s({}, e.fid, a(a({}, t[e.fid]), {}, {
                            networkReqs: new Array(e.numChunks)
                        })));
                    case "NEW_FETCH_BID_REQUEST":
                        return a(a({}, t), {}, s({}, e.fid, {
                            pto: e.pto,
                            hasCallbackExecuted: !1,
                            networkReqs: []
                        }));
                    case "RECORD_CALLBACK":
                        return a(a({}, t), {}, s({}, e.fid, a(a({}, t[e.fid]), {}, {
                            hasCallbackExecuted: !0
                        })));
                    case "RECORD_NETWORK_EXCHANGE":
                        var r = t[e.fid].networkReqs;
                        return r[e.networkID] = a(a({}, r[e.networkID]), {}, (s(n = {}, "".concat(e.exchangeType, "Time"), e.timestamp), s(n, "inFlight", "request" === e.exchangeType), n)), a(a({}, t), {}, s({}, e.fid, a(a({}, t[e.fid]), {}, {
                            networkReqs: r
                        })));
                    case "RECORD_TIMEOUT":
                        return a(a({}, t), {}, s({}, e.fid, a(a({}, t[e.fid]), {}, {
                            networkReqs: t[e.fid].networkReqs.map((function(t) {
                                return t.inFlight ? a(a({}, t), {}, {
                                    timeOut: e.timeOut
                                }) : t
                            }))
                        })));
                    default:
                        return a({}, t)
                }
            }(r.bidReqs, c),
            bsPixels: (e = r.bsPixels, "RECORD_BID_INFO_SENT" !== (n = c).type ? a({}, e) : a(a({}, e), {}, s({}, n.bidInfo.iid, n.bidInfo.state))),
            cfg: (e = r.cfg, "SET_CFG" !== (n = c).type ? a({}, e) : a(a({}, e), n.cfg)),
            cmpFired: (e = r.cmpFired, "CMP_FIRED" === c.type || e),
            config: (n = r.config, "SET_CONFIG" !== (e = c).type ? a({}, n) : a(a({}, e.config), {}, {
                gdpr: a({
                    cmpTimeout: e.defaultCmpTimeout
                }, e.config.gdpr),
                isSelfServePub: void 0 !== e.config.pubID && 5 <= e.config.pubID.length
            })),
            displayAdServer: function(t, e) {
                switch (e.type) {
                    case "SLOT_RENDER_ENDED_SET":
                        return a(a({}, t), {}, {
                            slotRenderEndedSet: !0
                        });
                    case "NO_BID_ON_ADSERVER_SLOTS":
                        return a(a({}, t), {}, {
                            noBidSlotIDs: t.noBidSlotIDs.concat(e.slotIDs)
                        });
                    case "REQUESTED_BID_FOR_ADSERVER_SLOTS":
                        return a(a({}, t), {}, {
                            noBidSlotIDs: t.noBidSlotIDs.filter((function(t) {
                                return !Object(i.j)(e.slotIDs, t)
                            }))
                        });
                    case "SHOULD_SAMPLE_SLOT_RENDER":
                        return a(a({}, t), {}, {
                            shouldSampleRender: e.value
                        });
                    default:
                        return a(a({}, t), {}, {
                            noBidSlotIDs: u(t.noBidSlotIDs)
                        })
                }
            }(r.displayAdServer, c),
            errors: (n = r.errors, "LOG_ERROR" !== (e = c).type ? u(n) : [].concat(u(n), [a({}, e.error)])),
            eventLog: (n = r.eventLog, "LOG_EVENT" !== (e = c).type ? u(n) : [].concat(u(n), [a({}, e.event)])),
            experiments: function(t, e) {
                switch (e.type) {
                    case "SHOULD_CHUNK_REQUESTS":
                        return a({
                            chunkRequests: !0 === t.shouldSampleLatency && e.value
                        }, t);
                    case "SHOULD_CF_ROUTE":
                        return a(a({}, t), {}, {
                            shouldCFRoute: e.value
                        });
                    case "SHOULD_SAMPLE_LATENCY":
                        return a(a({}, t), {}, {
                            shouldSampleLatency: e.value
                        });
                    case "SHOULD_SAMPLE_FEATURES":
                        return a(a({}, t), {}, {
                            shouldSampleFeatures: e.value
                        });
                    case "SHOULD_USE_TEST_BID_ENDPOINT":
                        return a(a({}, t), {}, {
                            shouldUseTestBidEndpoint: e.value
                        });
                    default:
                        return a({}, t)
                }
            }(r.experiments, c),
            gamSlotFetchLog: (n = r.gamSlotFetchLog, "LOG_GAM_EVENT" !== (e = c).type ? u(n) : [].concat(u(n), [a({}, e.event)])),
            gamSlotRenderPixel: (n = r.gamSlotRenderPixel, "UPDATE_RENDER_OFFSETS" !== (e = c).type ? a({}, n) : a(a({}, n), e.offsets)),
            hosts: (n = r.hosts, "SET_HOST" !== (e = c).type ? a({}, n) : a(a({}, n), {}, s({}, e.hostName, e.hostValue))),
            identityState: (n = r.identityState, "RECORD_IDENTITY_STATE" !== (e = c).type ? n : a(a({}, n), {}, s({}, e.vendor, Object(i.m)(n, e.vendor) ? n[e.vendor] : e.identityState))),
            libraryLoadCallLatency: (n = r.libraryLoadCallLatency, "RECORD_LIBRARY_LOAD_CALL_LATENCY" !== (e = c).type ? n : e.latency),
            Q: (n = r.Q, "SET_Q" !== (e = c).type ? u(n) : u(e.Q)),
            slotBids: function(t, e) {
                switch (e.type) {
                    case "BID_STATE_CHANGE":
                        return a(a({}, t), {}, s({}, e.slotID, t[e.slotID].map((function(t) {
                            return t._targetingSetID === e._targetingSetID && (t.bidState = e.bidState, e.bidState === o.c.rendered ? t.timing.renderTime = e.ts : e.bidState === o.c.set && t.timing.setAtTimes.push(e.ts)), t
                        }))));
                    case "UPDATE_BID_INFO_PROP":
                        return void 0 === t[e.slotID] || t[e.slotID].filter((function(t) {
                            return t.matchesBidCacheId(e.iid)
                        })).length < 1 ? a({}, t) : a(a({}, t), {}, s({}, e.slotID, t[e.slotID].map((function(t) {
                            return t.matchesBidCacheId(e.iid) && (t[e.key] = e.value), t
                        }))));
                    case "UPDATE_SLOT_BIDS":
                        return a(a({}, t), e.bids.reduce((function(e, n) {
                            return Object(i.m)(e, n.slotID) ? e[n.slotID] = [].concat(u(e[n.slotID]), [n]) : Object(i.m)(t, n.slotID) ? e[n.slotID] = [].concat(u(t[n.slotID]), [n]) : e[n.slotID] = [n], e
                        }), {}));
                    default:
                        return a({}, t)
                }
            }(r.slotBids, c),
            sync917: (n = r.sync917, "SET_SYNC_917" !== (e = c).type ? n : e.value),
            targetingKeys: (t = r.targetingKeys, "UPDATE_SLOT_BIDS" !== (n = c).type ? a({}, t) : a(a({}, t), n.bids.reduce((function(e, n) {
                return Object(i.m)(t, n.slotID) ? e[n.slotID] = [].concat(u(t[n.slotID]), u((n.bidConfig.targeting || o.i).filter((function(e) {
                    return -1 === t[n.slotID].indexOf(e)
                })))) : e[n.slotID] = n.bidConfig.targeting || o.i, e
            }), {}))),
            tcfParseTime: (e = r.tcfParseTime, "RECORD_TCF_PARSE_TIME" !== (n = c).type ? e : n.time),
            outstream: function(t, e) {
                switch (e.type) {
                    case "RECORD_OUTSTREAM_RENDER_START_TIME":
                        return a(a({}, t), {}, {
                            renderStart: e.time
                        });
                    case "OUTSTREAM_SHOULD_SAMPLE":
                        return a(a({}, t), {}, {
                            shouldSample: e.shouldSample
                        });
                    default:
                        return t
                }
            }(r.outstream, c)
        }
    }
    var f = {
        getState: function() {
            return r
        },
        dispatch: function(t) {
            r = l(r, t)
        }
    };
    (f = Object(e.d)("redux") && Object(i.i)() && Object(i.m)(window, "__REDUX_DEVTOOLS_EXTENSION__") ? window.__REDUX_DEVTOOLS_EXTENSION__(l) : f).dispatch({
        type: "NOOP"
    })
}, function(t, e, n) {
    "use strict";
    n.d(e, "f", (function() {
        return p
    })), n.d(e, "c", (function() {
        return S
    })), n.d(e, "d", (function() {
        return v
    })), n.d(e, "b", (function() {
        return _
    })), n.d(e, "a", (function() {
        return E
    })), n.d(e, "g", (function() {
        return T
    })), n.d(e, "e", (function() {
        return I
    }));
    var r = n(4),
        o = n(2),
        i = n(6),
        c = n(0),
        a = n(1),
        s = n(7),
        u = n(12),
        d = n(8),
        l = [],
        f = !1,
        b = [];

    function p(t) {
        var e = new Image;
        return e.src = t, b.push(e), e
    }!0 === Object(i.c)("exposePixels") && (window.apstagPixelQueue = l, window.apstagPixelsSent = b);
    var m, g = {
            adServer: [],
            ampAdContext: [],
            appended: [],
            AaxSlotSizes: [],
            bidRender: [],
            bidRenderState: [],
            bidType: [],
            "blockedBidders-fetchBids": [],
            "blockedBidders-init": [],
            ccpa: [],
            cmpVar: [],
            creativeSize: [],
            deals: [],
            fetchBids: [],
            fifFlow: [],
            customFloor: [],
            gdpr: [],
            id: [],
            idRemap: [],
            iframe: [],
            renderFootprint: [],
            resizeIframe: [],
            schain: [],
            simplerGpt: [],
            slots: [],
            slotType: [],
            targeting: [],
            tcfVar: [],
            unusedDeal: [],
            useSafeFrames: [],
            library: [],
            trustToken: []
        },
        h = [],
        O = !1;

    function y() {
        O && (clearTimeout(m), O = !1), Object(c.c)(h, 5).forEach((function(t) {
            _({
                _type: "featureUsage",
                p: t,
                u: Object(s.g)(window)
            })
        })), h = []
    }

    function j() {
        O || (O = !0, m = setTimeout(y, 2e3))
    }

    function S(t, e) {
        try {
            return !!o.a.getState().experiments.shouldSampleFeatures && (void 0 !== g[t] && !Object(c.j)(g[t], e) && (g[t].push(e), h.push({
                cat: t,
                feat: e
            }), f && j(), !0))
        } catch (t) {
            return Object(a.b)(t, "sendFeaturePixel"), !1
        }
    }

    function v() {
        try {
            var t, e, n, r = o.a.getState().libraryLoadCallLatency,
                i = Object(u.c)(window, new RegExp("aax2/apstag.js"));
            null === i && 0 === r || (t = Object(u.e)(window, "navigationStart"), e = {
                _type: "libLatency",
                pid: d.b,
                ns: t
            }, null !== i && (e.fs = Object(u.a)(i, "fetchStart"), e.re = Object(u.a)(i, "responseEnd"), null !== (n = Object(u.f)(i)) && (e.c = n ? 1 : 0)), 0 !== r && (e.tcc = r), _(e))
        } catch (t) {
            Object(a.b)(t, "sendInitLatencyPixel")
        }
    }

    function w(t) {
        try {
            var e;
            return f ? (e = function() {
                try {
                    var t = o.a.getState(),
                        e = t.cfg.PIXEL_PATH,
                        n = t.hosts.DEFAULT_AAX_PIXEL_HOST,
                        c = Object(i.c)("pixelHost", n);
                    return "".concat(r.t).concat(c).concat(e)
                } catch (t) {
                    return Object(a.b)(t, "buildPixelBaseUrl"), ""
                }
            }(), void 0 === t.bidId ? e += "p/PH/" : e += "".concat(t.bidId, "/"), p(e += function(t) {
                try {
                    t._tl = "aps-tag";
                    var e = o.a.getState(),
                        n = null,
                        i = "";
                    Object(c.m)(e, "config") && Object(c.m)(e.config, "pubID") && "" !== e.config.pubID && (n = e.config.isSelfServePub, i = e.config.pubID), null !== n && (n ? (t.src = r.u, t.pubid = i) : t.src = i), t.lv = r.l;
                    var s = function(t) {
                        try {
                            return t.replace(/\\.{1}/g, "")
                        } catch (t) {
                            return Object(a.b)(t, "escapeJsonForAax"), ""
                        }
                    }(JSON.stringify(t));
                    return encodeURIComponent(s)
                } catch (t) {
                    return Object(a.b)(t, "objectToUrlPath"), ""
                }
            }(t.payload))) : (l.push(t), !1)
        } catch (t) {
            return Object(a.b)(t, "sendPixel"), !1
        }
    }

    function _(t) {
        return w({
            payload: t
        })
    }

    function E(t, e) {
        return w({
            payload: e,
            bidId: t
        })
    }

    function T() {
        try {
            if (f) return;
            f = !0, l.forEach(w), 0 < h.length && j()
        } catch (t) {
            Object(a.b)(t, "sendPixels")
        }
    }

    function I(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
        try {
            return w({
                payload: {
                    _type: "outstreamRender",
                    bi: e,
                    loc: t,
                    lt: n
                }
            })
        } catch (t) {
            return Object(a.b)(t, "outstreamPixel"), !1
        }
    }!0 === Object(i.c)("exposePixels") && (window.apstagFeaturePixelQueue = h)
}, function(t, e, n) {
    "use strict";
    n.d(e, "i", (function() {
        return s
    })), n.d(e, "y", (function() {
        return u
    })), n.d(e, "c", (function() {
        return r
    })), n.d(e, "h", (function() {
        return d
    })), n.d(e, "x", (function() {
        return l
    })), n.d(e, "f", (function() {
        return f
    })), n.d(e, "g", (function() {
        return b
    })), n.d(e, "d", (function() {
        return p
    })), n.d(e, "q", (function() {
        return m
    })), n.d(e, "o", (function() {
        return g
    })), n.d(e, "e", (function() {
        return h
    })), n.d(e, "m", (function() {
        return O
    })), n.d(e, "p", (function() {
        return o
    })), n.d(e, "n", (function() {
        return i
    })), n.d(e, "w", (function() {
        return y
    })), n.d(e, "j", (function() {
        return c
    })), n.d(e, "v", (function() {
        return a
    })), n.d(e, "u", (function() {
        return j
    })), n.d(e, "l", (function() {
        return S
    })), n.d(e, "t", (function() {
        return v
    })), n.d(e, "b", (function() {
        return w
    })), n.d(e, "k", (function() {
        return _
    })), n.d(e, "a", (function() {
        return E
    })), n.d(e, "s", (function() {
        return T
    })), n.d(e, "r", (function() {
        return I
    })), n.d(e, "A", (function() {
        return D
    })), n.d(e, "z", (function() {
        return A
    }));
    var r, o, i, c, a, s = ["amznbid", "amzniid", "amznsz", "amznp"],
        u = ["amznbid", "amzniid", "amznp", "r_amznbid", "r_amzniid", "r_amznp"],
        d = ((n = r = r || {}).new = "NEW", n.exposed = "EXPOSED", n.set = "SET", n.rendered = "RENDERED", "apstagDebug"),
        l = ["redux", "fake_bids", "verbose", "console", "console_v2", "errors"],
        f = "apstagDebugHeight",
        b = "apstagDEBUG",
        p = "apstagCfg",
        m = 0,
        g = 0,
        h = "apstagCxMEnabled",
        O = "apstagLiveRampTimestamp",
        y = ((e = o = o || {}).amznbid = "testBid", e.amzniid = "testImpression", e.amznp = "testP", e.crid = "testCrid", (i = i || {}).video = "v", ["amznbid", "amznp"]),
        j = ((n = c = c || {}).__apsid = "ck", n.__aps_id_p = "ckp", n.aps_ext_917 = "st", (e = a = a || {}).noRequest = "0", e.bidInFlight = "1", e.noBid = "2", "600"),
        S = "8.0.1",
        v = "https://",
        w = "".concat(v, "aax.amazon-adsystem.com/e/dtb/vast?"),
        _ = "function" == typeof XMLHttpRequest && void 0 !== (new XMLHttpRequest).withCredentials,
        E = "apstagLOADED",
        T = 13,
        I = 1e4,
        D = /^1[NY\-]{3}$/,
        A = '<!DOCTYPE html>\n <html>\n     <head>\n         <title>APS Video Ads</title>\n         <script src="https://dcqi4aodgg8tv.cloudfront.net/apsvideoplayersdk/latest/apsvid.js"><\/script>\n     </head>\n     <body>\n         <div id="amazon-ads-container" style="height: 100%; width: 100%; position: absolute;">\n         </div>\n         <script type="text/javascript">\n           const adsContainer = document.querySelector("#amazon-ads-container")\n           const amazonVideoAds = new window.AmazonVideoAds(adsContainer);\n           window.adsM;\n\n           function addListeners(adsM, amazonVideoAds) {\n            adsM.addListener(amazonVideoAds.eventNames.AdVideoPlayerEvents.COMPLETED, (e) => {\n              window.top.postMessage({"apsVideoPlayer": true, "event": "completed"}, window.top.location.origin);\n            })\n            adsM.addListener(amazonVideoAds.eventNames.AdVideoPlayerEvents.LOADED, (e) => {\n              window.top.postMessage({"apsVideoPlayer": true, "event": "loaded"}, window.top.location.origin);\n            })\n        }\n \n           window.requestAndPlay = () => {\n             amazonVideoAds.fetchAds("$$apstagVastTag$$")\n               .then(adsManager => {\n \n                 adsM = adsManager;\n \n                 adsM.init({\n                    fullscreen: true,\n                    muted: true,\n                    volume: .3,\n                    autoplay: false,\n                    controls: false,\n                    preload: "auto"\n                 })\n\n                 addListeners(adsM, amazonVideoAds);\n                 adsM.startAds(2000, {shouldVideoRemainAfterPlay: true});\n                 \n               })\n               .catch(function(err) {\n                 console.log("apstag failed to get APS ads manager", err);\n               });\n           }\n \n          requestAndPlay();\n\n         <\/script>\n     </body>\n </html>'
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return T
    })), n.d(e, "b", (function() {
        return I
    }));
    var r = n(0),
        o = n(14),
        i = n(1);

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function u(t, e, n) {
        return e && s(t.prototype, e), n && s(t, n), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }

    function d(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && function(t, e) {
            (Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }(t, e)
    }

    function l(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = b(t);
            n = e ? (n = b(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === c(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return f(r)
        }
    }

    function f(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function b(t) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function p(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var m = function() {
            d(e, o.c);
            var t = l(e);

            function e(n) {
                var o;
                return a(this, e), p(f(o = t.call(this, n.targetId, Object(r.m)(n, "invCode") ? n.invCode : Object(r.m)(n, "tagId") ? n.tagId : n.targetId)), "rawSlot", void 0), p(f(o), "mediaType", "display"), o.rawSlot = n, o
            }
            return u(e, [{
                key: "reportError",
                value: function(t, e) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    Object(i.b)(t, "ApnSlot-".concat(e), n)
                }
            }, {
                key: "sizes",
                get: function() {
                    try {
                        return this.rawSlot.sizes
                    } catch (t) {
                        return this.reportError(t, "sizes"), []
                    }
                }
            }, {
                key: "initKeywords",
                value: function() {
                    try {
                        Object(r.m)(this.rawSlot, "keywords") || (this.rawSlot.keywords = {})
                    } catch (t) {
                        this.reportError(t, "initKeywords")
                    }
                }
            }, {
                key: "setTargeting",
                value: function(t, e) {
                    try {
                        this.initKeywords(), this.rawSlot.keywords[t] = e
                    } catch (t) {
                        this.reportError(t, "setTargeting")
                    }
                }
            }, {
                key: "getTargeting",
                value: function(t) {
                    try {
                        return this.initKeywords(), Object(r.m)(this.rawSlot.keywords, t) ? [this.rawSlot.keywords[t]] : []
                    } catch (t) {
                        return this.reportError(t, "getTargeting"), []
                    }
                }
            }, {
                key: "clearTargeting",
                value: function(t) {
                    try {
                        this.initKeywords(), delete this.rawSlot.keywords[t]
                    } catch (t) {
                        this.reportError(t, "clearTargeting")
                    }
                }
            }]), e
        }(),
        g = function() {
            d(e, o.b);
            var t = l(e);

            function e() {
                var n;
                a(this, e);
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                return p(f(n = t.call.apply(t, [this].concat(o))), "isSupported", !0), n
            }
            return u(e, [{
                key: "reportError",
                value: function(t, e) {
                    Object(i.b)(t, "AppNexusAdServer-".concat(e))
                }
            }, {
                key: "cmdQueuePush",
                value: function(t) {
                    try {
                        window.apntag.anq.push(t)
                    } catch (t) {
                        this.reportError(t, "cmdQueuePush")
                    }
                }
            }, {
                key: "setTargeting",
                value: function(t, e) {
                    try {
                        if (!Object(r.m)(window, "apntag") || !Object(r.m)(window.apntag, "requests")) return;
                        Object(r.m)(window.apntag.requests, "keywords") || (window.apntag.requests.keywords = {}), window.apntag.requests.keywords[t] = e
                    } catch (t) {
                        this.reportError(t, "setTargeting")
                    }
                }
            }, {
                key: "getTargeting",
                value: function(t) {
                    try {
                        if (!Object(r.m)(window, "apntag") || !Object(r.m)(window.apntag, "requests")) return [];
                        Object(r.m)(window.apntag.requests, "keywords") || (window.apntag.requests.keywords = {});
                        var e = window.apntag.requests.keywords[t];
                        return void 0 === e ? [] : [e]
                    } catch (t) {
                        return this.reportError(t, "getTargeting"), []
                    }
                }
            }, {
                key: "clearTargeting",
                value: function(t) {
                    try {
                        Object(r.m)(window, "apntag") && Object(r.m)(window.apntag, "requests") && Object(r.m)(window.apntag.requests, "keywords") && delete window.apntag.requests.keywords[t]
                    } catch (t) {
                        this.reportError(t, "clearTargeting")
                    }
                }
            }, {
                key: "hasAdServerObjectLoaded",
                value: function() {
                    try {
                        return Object(r.m)(window, "apntag") && Object(r.m)(window.apntag, "loaded") && !0 === window.apntag.loaded
                    } catch (t) {
                        return this.reportError(t, "hasAdServerObjectLoaded"), !1
                    }
                }
            }, {
                key: "isCommandQueueDefined",
                value: function() {
                    try {
                        return Object(r.m)(window, "apntag") && Object(r.m)(window.apntag, "anq")
                    } catch (t) {
                        return this.reportError(t, "isCommandQueueDefined"), !1
                    }
                }
            }, {
                key: "getSlots",
                value: function() {
                    try {
                        var t = [];
                        return Object(r.m)(window, "apntag") && Object(r.m)(window.apntag, "requests") && Object(r.m)(window.apntag.requests, "tags") && Object(r.l)(window.apntag.requests.tags) && Object.keys(window.apntag.requests.tags).forEach((function(e) {
                            e = window.apntag.requests.tags[e], t.push(new m(e))
                        })), t
                    } catch (t) {
                        return this.reportError(t, "getSlots"), []
                    }
                }
            }]), e
        }(),
        h = n(17);

    function O(t) {
        return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function y(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function j(t, e) {
        return (j = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function S(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function v(t) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function w(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var _ = function(t) {
            var e = o;
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t && j(e, t);
            var n = function(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(t);
                    n = e ? (n = v(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
                    if (n && ("object" === O(n) || "function" == typeof n)) return n;
                    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                    return S(r)
                }
            }(o);

            function o() {
                var t = this,
                    e = o;
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c];
                return w(S(t = n.call.apply(n, [this].concat(i))), "isSupported", !0), w(S(t), "needNewBidObject", !0), t
            }
            return e = o, (t = [{
                key: "reportError",
                value: function(t, e) {
                    Object(i.b)(t, "SmartAdServer-".concat(e))
                }
            }, {
                key: "cmdQueuePush",
                value: function(t) {
                    try {
                        window.sas.cmd.push(t)
                    } catch (t) {
                        this.reportError(t, "cmdQueuePush")
                    }
                }
            }, {
                key: "hasAdServerObjectLoaded",
                value: function() {
                    try {
                        return Object(r.m)(window, "sas") && Object(r.m)(window.sas, "__smartLoaded") && !0 === window.sas.__smartLoaded
                    } catch (t) {
                        return this.reportError(t, "hasAdServerObjectLoaded"), !1
                    }
                }
            }, {
                key: "isCommandQueueDefined",
                value: function() {
                    try {
                        return Object(r.m)(window, "sas") && Object(r.m)(window.sas, "cmd")
                    } catch (t) {
                        return this.reportError(t, "isCommandQueueDefined"), !1
                    }
                }
            }]) && y(e.prototype, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), o
        }(o.b),
        E = n(3),
        T = new o.b;

    function I(t) {
        try {
            switch (t) {
                case "appnexus":
                    Object(E.c)("adServer", t), T = new g;
                    break;
                case "googletag":
                    Object(E.c)("adServer", t), T = new h.a;
                    break;
                case "sas":
                    Object(E.c)("adServer", t), T = new _;
                    break;
                default:
                    "string" == typeof t ? Object(E.c)("adServer", "invalid-".concat(t)) : Object(E.c)("adServer", "none"), T = new o.b
            }
        } catch (t) {
            Object(i.b)(t, "setDisplayAdServer")
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return d
    })), n.d(e, "b", (function() {
        return g
    })), n.d(e, "d", (function() {
        return _
    })), n.d(e, "c", (function() {
        return T
    })), n.d(e, "e", (function() {
        return D
    }));
    var r = n(2),
        o = n(0),
        i = n(4),
        c = n(9),
        a = n(3),
        s = n(1),
        u = ["getLog", "getState"];

    function d(t, e, n) {
        try {
            switch (Object(o.j)(u, t) && (Object(s.b)(new Error("Debug call made: ".concat(t)), "debugPublicApi-call-".concat(t)), u = u.filter((function(e) {
                return e !== t
            }))), t) {
                case "getLog":
                    return r.a.getState().eventLog;
                case "getState":
                    return r.a.getState();
                case "enable":
                    return E("fake_bids", !0), "DEBUG MODE ENABLED";
                case "disable":
                    return E("fake_bids", !1), "DEBUG MODE DISABLED";
                case "enableConsole":
                    return g(!1, "command"), "Debug console enabled";
                case "enableConsoleV2":
                    return g(!0, "command"), "Debug console v2 enabled";
                case "disableConsole":
                    try {
                        E("console", !1), E("console_v2", !1), null !== l && document.body.removeChild(l), m = !1, Object(o.i)() && window.localStorage.removeItem(i.f)
                    } catch (e) {
                        Object(s.b)(e, "disableDebugConsole", !0)
                    }
                    return "Debug console disabled";
                case "setDebug":
                    return (E(e, n) ? "Set debug mode '" : "Failed to set debug mode '").concat(e, "' to '").concat(n, "'");
                default:
                    return "unknown debug argument"
            }
        } catch (e) {
            return Object(s.b)(e, "debugPublicApi", !0), "error"
        }
    }
    var l, f, b, p, m = !1;

    function g() {
        var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            e = 1 < arguments.length ? arguments[1] : void 0;
        try {
            if (E(t ? "console_v2" : "console", !0), m) return;
            var n = {
                url: t ? r.a.getState().cfg.DEBUG_APP_HTML_V2 : r.a.getState().cfg.DEBUG_APP_HTML,
                onload: h,
                onerror: function() {
                    return Object(s.b)(new Error("Error Loading Debug Console"), "enableDebugConsole-".concat(t ? "v2" : "v1", "-onerror"), !0)
                }
            };
            Object(c.d)(n), setTimeout((function() {
                try {
                    var n = {
                        _type: "debugLoad",
                        mode: t ? 2 : 1
                    };
                    Object(o.m)(r.a.getState().config, "pubID") && (n.src = r.a.getState().config.pubID), null !== e && (n.method = e), Object(a.b)(n)
                } catch (n) {
                    Object(s.b)(n, "enableDebugConsole-setTimeout", !0)
                }
            }), 5e3)
        } catch (n) {
            Object(s.b)(n, "enableDebugConsole", !0)
        }
    }

    function h(t) {
        try {
            var e = t.responseText,
                n = (l = document.createElement("div"), f = document.createElement("div"), b = document.createElement("iframe"), 200);
            _("console_v2") && (n = 330), Object(o.i)() && null !== window.localStorage.getItem(i.f) && (n = parseInt(window.localStorage.getItem(i.f), 10)), (isNaN(n) || n > window.innerHeight) && (n = 200), l.style.background = "#eaeded", l.style.zIndex = "2147483647", l.style.bottom = "0", l.style.position = "fixed !important", l.style.display = "block !important", l.style.left = "0", l.style.right = "0", l.style.height = "".concat(n, "px"), f.style.cursor = "row-resize", f.style.height = "2px", f.style.position = "absolute", f.style.top = "0", f.style.left = "0", f.style.right = "0", f.style.backgroundColor = "RGBA(0,0,0,0)", l.appendChild(f), b.frameBorder = "0", b.marginHeight = "0", b.marginWidth = "0", b.scrolling = "no", b.id = "apstag-debug-iframe", b.src = "about:blank", b.style.display = "block", b.style.width = "100%", b.style.height = "".concat(n, "px"), l.appendChild(b), document.body.appendChild(l), null !== b.contentDocument && (b.contentDocument.open(), b.contentDocument.write(e), b.contentDocument.close()), f.addEventListener("mousedown", j)
        } catch (t) {
            Object(s.b)(t, "renderDebugConsole", !0)
        }
    }

    function O(t) {
        try {
            var e = window.innerHeight - t.clientY;
            return e < 200 && (e = 200), l.style.height = "".concat(e, "px"), b.style.height = "".concat(e, "px"), e
        } catch (t) {
            return Object(s.b)(t, "resizeDebugConsole", !0), 200
        }
    }

    function y(t) {
        try {
            return t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), t.cancelBubble = !0, t.returnValue = !1
        } catch (t) {
            return Object(s.b)(t, "preventEvent", !0), !1
        }
    }

    function j() {
        try {
            void 0 === p && ((p = document.createElement("div")).style.position = "fixed", p.style.left = "0", p.style.right = "0", p.style.top = "0", p.style.bottom = "0", p.style.zIndex = "9999999999"), l.appendChild(p), window.addEventListener("mouseup", v), window.addEventListener("mousemove", S)
        } catch (t) {
            Object(s.b)(t, "resizeBarMouseDownListener", !0)
        }
    }

    function S(t) {
        try {
            return O(t), y(t)
        } catch (t) {
            return Object(s.b)(t, "resizeBarMouseMoveListener", !0), !1
        }
    }

    function v(t) {
        try {
            null !== p && l.removeChild(p), window.removeEventListener("mousemove", S), window.removeEventListener("mouseup", v);
            var e = O(t);
            return Object(o.i)() && window.localStorage.setItem(i.f, "".concat(e)), y(t)
        } catch (t) {
            return Object(s.b)(t, "resizeBarMouseUpListener", !0), !1
        }
    }

    function w() {
        try {
            if (!Object(o.i)()) return [];
            var t = window.localStorage.getItem(i.h),
                e = (null === t || "false" === t ? t = "[]" : "true" === t && (t = '["fake_bids"]'), []);
            try {
                e = JSON.parse(t)
            } catch (t) {}
            return (e = Object(o.k)(e) ? e : []).filter((function(t) {
                return Object(o.j)(i.x, t)
            }))
        } catch (t) {
            return Object(s.b)(t, "getCurrentDebugArray"), []
        }
    }

    function _(t) {
        try {
            return Object(o.j)(w(), t)
        } catch (t) {
            return Object(s.b)(t, "isDebugEnabled"), !1
        }
    }

    function E(t, e) {
        try {
            if (!Object(o.i)()) return;
            if (-1 === i.x.indexOf(t)) return;
            var n = w();
            return e && -1 === n.indexOf(t) ? n.push(t) : e || (n = n.filter((function(e) {
                return e !== t
            }))), 0 === n.length ? window.localStorage.removeItem(i.h) : window.localStorage.setItem(i.h, JSON.stringify(n)), D(), 1
        } catch (e) {
            return void Object(s.b)(e, "setDebugMode")
        }
    }

    function T(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        try {
            if (Object(o.m)(window, i.g) && Object(o.m)(window[i.g], t)) return window[i.g][t]
        } catch (t) {
            Object(s.b)(t, "getDebugValue")
        }
        return e
    }
    var I = [];

    function D() {
        try {
            w().filter((function(t) {
                return -1 === I.indexOf(t)
            })).forEach((function(t) {
                Object(s.b)(new Error("Debug method enabled: ".concat(t)), "debugPublicApi-enabled-".concat(t), !0), I.push(t)
            }))
        } catch (t) {
            Object(s.b)(t, "pixelDebugModes")
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "c", (function() {
        return d
    })), n.d(e, "j", (function() {
        return l
    })), n.d(e, "g", (function() {
        return f
    })), n.d(e, "h", (function() {
        return b
    })), n.d(e, "d", (function() {
        return p
    })), n.d(e, "e", (function() {
        return m
    })), n.d(e, "f", (function() {
        return g
    })), n.d(e, "i", (function() {
        return O
    })), n.d(e, "b", (function() {
        return y
    })), n.d(e, "a", (function() {
        return j
    })), n.d(e, "k", (function() {
        return S
    }));
    var r = n(6),
        o = n(0),
        i = n(1),
        c = n(4),
        a = n(2),
        s = n(3);

    function u(t) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function d(t) {
        try {
            return t.split("_").pop()
        } catch (t) {
            return Object(i.b)(t, "getAmpAmznBidValue"), ""
        }
    }

    function l(t) {
        try {
            return !Object(o.m)(t, "slots")
        } catch (t) {
            return Object(i.b)(t, "isAAXPunt"), !0
        }
    }

    function f(t) {
        try {
            var e, n = Object(r.c)("url");
            if (null !== n) return encodeURIComponent(n);
            try {
                S(t, !1) ? (Object(s.c)("ampAdContext", "getCurrentUrl"), e = null, t.context && (e = t.context.canonicalUrl || t.context.sourceUrl)) : e = t.top.location.href
            } catch (t) {
                e = null
            }
            if (null === e || !e || void 0 === e) {
                e = "";
                try {
                    t.top !== t.self && (e = t.document.referrer)
                } catch (t) {}
            }
            return encodeURIComponent(e)
        } catch (t) {
            return Object(i.b)(t, "getCurrentUrl"), ""
        }
    }

    function b(t) {
        try {
            var e, n = "",
                o = Object(r.c)("url");
            if (null !== o) return encodeURIComponent(o);
            try {
                try {
                    e = S(t, !1) ? (Object(s.c)("ampAdContext", "getReferrerUrl"), (t.context || t.top.document).referrer) : t.top.document.referrer
                } catch (n) {
                    e = t.document.referrer
                }
                n = encodeURIComponent(e)
            } catch (n) {}
            return n
        } catch (n) {
            return Object(i.b)(n, "getReferrerUrl"), ""
        }
    }

    function p() {
        try {
            var t = {
                cookiesParams: ""
            };
            return Object(o.d)().forEach((function(e) {
                e[0] in c.j && ("aps_ext_917" === e[0] ? t.fb = e[1] : t.cookiesParams += "&".concat(c.j[e[0]], "=").concat(e[1]))
            })), t.fb || a.a.getState().sync917 || a.a.dispatch({
                type: "SET_SYNC_917",
                value: !0
            }), t
        } catch (t) {
            return Object(i.b)(t, "getApsFirstPartyCookies"), {
                cookiesParams: ""
            }
        }
    }

    function m(t) {
        try {
            var e = a.a.getState().config.blockedBidders,
                n = (Object(o.m)(t, "blockedBidders") && Object(o.k)(t.blockedBidders) && (e = t.blockedBidders), "");
            return Object(o.k)(e) ? JSON.stringify(e) : n
        } catch (t) {
            return Object(i.b)(t, "getBlockedBidders", !0), ""
        }
    }

    function g() {
        try {
            if (!Object(o.i)()) return c.q;
            var t = a.a.getState();
            return Object(o.m)(t, "cfg") && Object(o.m)(t.cfg, "v") && -1 !== t.cfg.v ? t.cfg.v : null
        } catch (t) {
            return Object(i.b)(t, "getCfgVersion"), null
        }
    }

    function h(t) {
        try {
            if (-1 === ["string", "number"].indexOf(u(t))) return !1;
            var e = Math.floor(Number(t));
            if (e > c.o) return e
        } catch (t) {
            Object(i.b)(t, "parseTimeout", !0)
        }
        return !1
    }

    function O(t, e) {
        try {
            var n = h(t.timeout);
            return !1 === (n = !1 === n ? h(e.config.bidTimeout) : n) ? h(e.cfg.DEFAULT_TIMEOUT) : n
        } catch (t) {
            return Object(i.b)(t, "getTimeout", !0), 2e3
        }
    }

    function y(t, e) {
        var n, r = !1;

        function o(e) {
            if (!r) try {
                t(e)
            } catch (e) {
                Object(i.b)(e, "executeFunctionOnceWithTimeout-wrappedFunction", !0)
            }
            clearTimeout(n), r = !0
        }
        try {
            return n = setTimeout(o, e, !0), o.bind(null, !1)
        } catch (e) {
            return Object(i.b)(e, "executeFunctionOnceWithTimeout", !0),
                function() {}
        }
    }

    function j(t) {
        var e = !1;
        return function(n) {
            if (!e) try {
                t(n)
            } catch (n) {
                Object(i.b)(n, "executeFunctionOnceWithTimeout-wrappedFunction", !0)
            }
            e = !0
        }
    }

    function S(t, e) {
        try {
            var n = e ? t.AMP_CONTEXT_DATA : t.context;
            return Boolean(n && Object(o.m)(n, "tagName") && "AMP-AD" === n.tagName)
        } catch (t) {
            return Object(i.b)(t, "isInAmpAd"), !1
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return S
    })), n.d(e, "b", (function() {
        return v
    })), n.d(e, "h", (function() {
        return w
    })), n.d(e, "d", (function() {
        return _
    })), n.d(e, "g", (function() {
        return E
    })), n.d(e, "c", (function() {
        return T
    })), n.d(e, "f", (function() {
        return I
    })), n.d(e, "e", (function() {
        return D
    }));
    var r = n(2),
        o = n(6),
        i = n(4),
        c = n(0),
        a = n(9),
        s = n(1),
        u = n(7),
        d = n(11),
        l = n(3),
        f = n(10),
        b = n(13);

    function p(t) {
        return function(t) {
            if (Array.isArray(t)) return O(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || h(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function g(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? m(Object(n), !0).forEach((function(e) {
                j(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function h(t, e) {
        if (t) {
            if ("string" == typeof t) return O(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? O(t, e) : void 0
        }
    }

    function O(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function y(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function j(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var S = function() {
            function t(e) {
                if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
                j(this, "bidConfig", void 0), j(this, "bidState", i.c.new), j(this, "_targetingSetID", void 0), j(this, "timing", {
                    setAtTimes: []
                }), j(this, "pixelSent", !1), j(this, "useSafeFrames", !1), j(this, "bidReqID", ""), j(this, "host", void 0), j(this, "ev", void 0), j(this, "cfe", void 0), j(this, "isAmp", !1), j(this, "doc", void 0), j(this, "inheritSize", void 0), this.bidConfig = e, this._targetingSetID = Object(c.e)(), r.a.getState().config.useSafeFrames && (this.useSafeFrames = !0), this.useSafeFrames && Object(c.m)(e, "targeting") && e.targeting.push("amznhost"), Object(c.m)(e, "meta") ? Object(c.k)(e.meta) || (this.reportError({
                    name: "TypeError",
                    message: "'meta' is not an 'array': ".concat(JSON.stringify(e.meta))
                }, "constructor-meta"), e.meta = []) : e.meta = [];
                try {
                    var n = "d",
                        o = ("video" !== this.bidConfig.mediaType && "v" !== this.bidConfig.mediaType || (n = "v"), []);
                    Object(c.m)(this.bidConfig, "amzndeals") && (Object(l.c)("bidType", "".concat(n, "-amzndeals")), o = this.bidConfig.amzndeals.map((function(t) {
                        return "".concat(t, "amzniid")
                    }))), this.bidConfig.targeting.filter((function(t) {
                        return -1 !== t.indexOf("amzniid") && !Object(c.j)(o, t)
                    })).forEach((function(t) {
                        return Object(l.c)("bidType", "".concat(n, "-").concat(t))
                    })), Object(c.m)(this.bidConfig, "fif") && "1" === this.bidConfig.fif ? Object(l.c)("bidRender", "friendly") : Object(l.c)("bidRender", "unfriendly")
                } catch (e) {
                    this.reportError(e, "pixeling")
                }
            }
            var e, n;
            return e = t, (n = [{
                key: "reportError",
                value: function(t, e) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    Object(s.b)(t, "Bid-".concat(e), n)
                }
            }, {
                key: "mediaType",
                get: function() {
                    var t = "d";
                    return "video" !== this.bidConfig.mediaType && "v" !== this.bidConfig.mediaType && "v" !== this.bidConfig.mediaType_sp ? t : "video"
                }
            }, {
                key: "targeting",
                get: function() {
                    var t = this;
                    try {
                        return this.bidConfig.targeting.map((function(e) {
                            return "amznhost" === e ? [e, encodeURIComponent(t.host)] : Object(c.m)(t.bidConfig, e) && Object(c.k)(t.bidConfig[e]) ? [e, encodeURIComponent(t.bidConfig[e].join(","))] : Object(c.m)(t.bidConfig, e) ? [e, encodeURIComponent(t.bidConfig[e])] : [e, ""]
                        })).map((function(t) {
                            var e = (t = function(t, e) {
                                return function(t) {
                                    if (Array.isArray(t)) return t
                                }(t) || function(t, e) {
                                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                    if (null != n) {
                                        var r, o, i = [],
                                            c = !0,
                                            a = !1;
                                        try {
                                            for (n = n.call(t); !(c = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); c = !0);
                                        } catch (t) {
                                            a = !0, o = t
                                        } finally {
                                            try {
                                                c || null == n.return || n.return()
                                            } finally {
                                                if (a) throw o
                                            }
                                        }
                                        return i
                                    }
                                }(t, e) || h(t, e) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }(t, 2))[0];
                            t = t[1];
                            return "&".concat(e, "=").concat(t)
                        })).join("")
                    } catch (t) {
                        return this.reportError(t, "targeting"), ""
                    }
                }
            }, {
                key: "bidObject",
                get: function() {
                    try {
                        var t = {
                            slotID: this.bidConfig.slotID,
                            amzniid: this.bidConfig.amzniid,
                            amznbid: this.bidConfig.amznbid,
                            amznp: this.bidConfig.amznp,
                            amznsz: this.bidConfig.amznsz,
                            size: this.bidConfig.amznsz
                        };
                        return "video" === this.mediaType && (t.mediaType = "video", t.qsParams = this.targeting, t.encodedQsParams = encodeURIComponent(this.targeting), t.r_amznbid = this.bidConfig.r_amznbid, t.r_amzniid = this.bidConfig.r_amzniid, t.r_amznp = this.bidConfig.r_amznp), this.useSafeFrames && (t.amznhost = this.host), t
                    } catch (t) {
                        return this.reportError(t, "bidObject", !0), {
                            slotID: "",
                            amzniid: "error",
                            amznbid: "error",
                            amznp: "error",
                            amznsz: "error",
                            size: "error"
                        }
                    }
                }
            }, {
                key: "newBidObject",
                get: function() {
                    var t = this;
                    try {
                        var e = {
                                slotID: this.bidConfig.slotID,
                                size: this.bidConfig.amznsz,
                                mediaType: this.mediaType,
                                targeting: {},
                                helpers: {
                                    targetingKeys: this.bidConfig.targeting,
                                    qsParams: function() {
                                        return t.targeting
                                    },
                                    encodedQsParams: function() {
                                        return encodeURIComponent(t.targeting)
                                    }
                                }
                            },
                            n = ["slotID", "size", "mediaType"];
                        return this.bidConfig.meta.filter((function(t) {
                            return -1 === n.indexOf(t)
                        })).forEach((function(n) {
                            e[n] = t.bidConfig[n]
                        })), this.bidConfig.targeting.forEach((function(n) {
                            e.targeting[n] = "amznhost" === n ? t.host : t.bidConfig[n]
                        })), void 0 !== this.slotID && -1 !== this.slotID.indexOf("_") && (e.sasTargeting = e.helpers.targetingKeys.map((function(n) {
                            return "".concat(n, "_").concat(t.slotID.split("_")[1], "=").concat(e.targeting[n])
                        })).join(";")), e
                    } catch (t) {
                        return this.reportError(t, "newBidObject", !0), {
                            slotID: "",
                            size: "",
                            mediaType: "d",
                            targeting: {},
                            helpers: {
                                targetingKeys: [],
                                qsParams: function() {
                                    return ""
                                },
                                encodedQsParams: function() {
                                    return ""
                                }
                            }
                        }
                    }
                }
            }, {
                key: "slotID",
                get: function() {
                    try {
                        return this.bidConfig.slotID
                    } catch (t) {
                        return this.reportError(t, "slotID"), ""
                    }
                }
            }, {
                key: "matchesBidCacheId",
                value: function(t) {
                    var e = this;
                    try {
                        return this.bidConfig.targeting.reduce((function(n, r) {
                            return n || -1 !== r.indexOf("amzniid") && e.bidConfig[r] === t
                        }), !1)
                    } catch (t) {
                        return this.reportError(t, "matchesBidCacheId"), !1
                    }
                }
            }]) && y(e.prototype, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }(),
        v = Object(c.f)(i.s);

    function w(t) {
        var e = "validateSupplyChainObject",
            n = !1;

        function r(t, r) {
            return Object(s.b)({
                name: "TypeError",
                message: r
            }, "".concat(e, "-").concat(t), !0), !(n = !0)
        }
        try {
            return Object(c.l)(t) ? (Object(c.m)(t, "complete") ? -1 === [1, 0].indexOf(t.complete) && r("schain-complete-type", "The `schain.complete` property must be a `1` or `0`") : r("schain-complete", "The `schain.complete` property must be provided"), Object(c.m)(t, "ver") ? Object(f.b)(t.ver, ["string"]) || r("schain-ver-type", "The `schain.ver` property must be a string") : r("schain-ver", "The `schain.ver` property must be provided"), Object(c.m)(t, "nodes") ? Object(c.k)(t.nodes) ? t.nodes.reduce((function(t, e) {
                return Object(c.l)(e) ? (Object(c.m)(e, "asi") ? Object(f.b)(e.asi, ["string"]) || r("schain-node-asi-type", "All `schain.nodes` items must have an `asi` property of type `string`") : r("schain-node-asi", "All `schain.nodes` items must have an `asi` property"), Object(c.m)(e, "sid") ? Object(f.b)(e.sid, ["string"]) || r("schain-node-sid-type", "All `schain.nodes` items must have an `sid` property of type `string`") : r("schain-node-sid", "All `schain.nodes` items must have an `sid` property"), Object(c.m)(e, "hp") ? -1 === [1, 0].indexOf(e.hp) && r("schain-node-hp-type", "All `schain.nodes` items must have an `hp` property which is `1` or `0`") : r("schain-node-hp", "All `schain.nodes` items must have an `hp` property"), Object(f.b)(e.rid, ["string", "undefined"]) || r("schain-node-rid-type", "If provided, the `rid` property on an `schain.nodes` item must be of type `string`"), Object(f.b)(e.name, ["string", "undefined"]) || r("schain-node-name-type", "If provided, the `name` property on an `schain.nodes` item must be of type `string`"), Object(f.b)(e.domain, ["string", "undefined"]) || r("schain-node-domain-type", "If provided, the `domain` property on an `schain.nodes` item must be of type `string`"), t && !n) : r("schain-node-type", "All `schain.nodes` items must be objects")
            }), !n) : r("schain-nodes-type", "The `schain.nodes` property must be an `Array`") : r("schain-nodes", "The `schain.nodes` property must be provided")) : r("schain", "The `schain` value must be an object")
        } catch (t) {
            return Object(s.b)(t, e, !0), !1
        }
    }

    function _(t, e, n, d) {
        try {
            var f, m = r.a.getState(),
                h = {},
                O = Object(o.c)("host", m.hosts.DEFAULT_AAX_BID_HOST),
                y = m.cfg.DTB_PATH,
                j = "bid",
                S = (m.experiments.shouldUseTestBidEndpoint && null !== m.cfg.TEST_BID_ENDPOINT && (j = m.cfg.TEST_BID_ENDPOINT), {
                    src: m.config.pubID,
                    u: Object(u.g)(window),
                    pr: Object(u.h)(window),
                    pid: v,
                    cb: t.bidReqID,
                    ws: Object(c.h)(window),
                    v: i.l,
                    t: e,
                    slots: function(t) {
                        try {
                            return Object(a.c)(t.map((function(t) {
                                var e;
                                if (Object(c.m)(t, "mediaType") && "video" === t.mediaType) e = t.aaxSlot;
                                else {
                                    if (!(Object(c.m)(t, "sizes") && 0 < t.sizes.length && Object(c.m)(t, "slotID"))) return Object(s.b)({
                                        name: "SlotError",
                                        message: "There was an error with the configuration for this slot: ".concat(JSON.stringify(t.rawSlot))
                                    }, "buildSlotsUrlParam-invalidSlot", !0), {
                                        id: "ERROR",
                                        mt: i.n.video,
                                        error: !0
                                    };
                                    var n = t.aaxSlot;
                                    Object(c.m)(t, "slotName") && t.slotName !== t.slotID ? (Object(l.c)("idRemap", "y"), n.sd = t.slotID, n.sn = t.slotName) : Object(l.c)("idRemap", "n"), e = n
                                }
                                return e
                            })).filter((function(t) {
                                return !0 !== t.error
                            })))
                        } catch (t) {
                            return Object(s.b)(t, "buildSlotsUrlParam", !0), ""
                        }
                    }(t.validSlots),
                    pj: function(t, e) {
                        try {
                            var n = Object(c.l)(t.config.params) ? t.config.params : {},
                                r = Object(c.l)(e.params) ? e.params : {},
                                o = g(g({}, n), r);
                            return 0 === Object.keys(o).length ? "" : Object(a.c)(o)
                        } catch (t) {
                            return Object(s.b)(t, "getBidParams", !0), ""
                        }
                    }(m, t),
                    cfgv: Object(u.f)(),
                    bb: Object(u.e)(t),
                    schain: function(t) {
                        try {
                            var e;
                            return Object(c.m)(t.config, "schain") ? (e = t.config.schain, encodeURIComponent(["".concat(e.ver, ",").concat(e.complete)].concat(p(e.nodes.map((function(t) {
                                return ["asi", "sid", "hp", "rid", "name", "domain"].map((function(e) {
                                    return Object(c.m)(t, e) ? t[e] : ""
                                })).map((function(t) {
                                    return encodeURIComponent(t)
                                })).map((function(t) {
                                    return t.replace(/\!/g, "%21")
                                })).join(",")
                            })))).join("!"))) : ""
                        } catch (t) {
                            return Object(s.b)(t, "getSupplyChainObject", !0), ""
                        }
                    }(m)
                });
            if ("[]" === S.slots || "" === S.slots) throw new Error("No slots available for bid request");
            r.a.dispatch({
                type: "RECORD_AAX_REQUEST",
                data: {
                    bidConfig: t,
                    bidReqID: t.bidReqID,
                    timeout: e,
                    ws: S.ws,
                    url: S.u,
                    rqTs: Date.now()
                }
            }), m.experiments.chunkRequests && (f = t.bidReqID.split("-"), r.a.dispatch({
                type: "RECORD_NETWORK_EXCHANGE",
                fid: f[0],
                networkID: parseInt(f[1], 10),
                timestamp: Date.now(),
                exchangeType: "request"
            })), m.config.isSelfServePub && (S.pubid = S.src, S.src = 600);
            var w = Object(u.d)(),
                _ = (w.fb && (h[917] = w.fb, S[i.j.aps_ext_917] = Object(a.c)(h)), Object(o.c)("bidParams")),
                E = (Object(c.l)(_) && (S = g(g({}, S), _)), Object(c.l)(n) && (Object(c.m)(n, "enabled") && (S.gdpre = encodeURIComponent(n.enabled)), Object(c.m)(n, "consent") && (S.gdprc = encodeURIComponent(n.consent)), Object(c.m)(n, "log") && (S.gdprl = Object(a.c)(n.log))), Object(c.m)(m.config, "useSafeFrames") && m.config.useSafeFrames && (S.sf = "1"), Object(b.b)()),
                T = (E && (Object(l.c)("id", "bidReq-attachToken"), d.ids.at = E), S.vm = d && 0 !== Object.keys(d.ids).length ? Object(a.c)({
                    ids: d.ids,
                    md: d.md
                }) : "", Object.keys(S).filter((function(t) {
                    return Object(c.m)(S, t) && "undefined" !== S[t] && "" !== S[t] && null !== S[t]
                })).map((function(t) {
                    return "".concat(t, "=").concat(S[t])
                })).join("&")),
                I = (w.cookiesParams && (T += w.cookiesParams), "".concat(i.t).concat(O).concat(y, "/").concat(j, "?").concat(T));
            return r.a.dispatch({
                type: "RECORD_AAX_REQ_PROP",
                bidReqID: t.bidReqID,
                key: "urlLength",
                value: I.length
            }), I
        } catch (t) {
            return Object(s.b)(t, "buildBidUrl", !0), ""
        }
    }

    function E(t, e) {
        try {
            return Object(c.m)(t, "config") && Object(c.m)(t.config, "deals") && !0 === t.config.deals || !0 === e.needNewBidObject
        } catch (t) {
            return Object(s.b)(t, "isNewBidObjectRequired"), !1
        }
    }

    function T(t, e, n) {
        try {
            var r = t.map(d.c),
                o = e.slots.filter(d.d).map(d.c).filter((function(t) {
                    return !Object(c.j)(r, t)
                })),
                a = n ? i.v.bidInFlight : i.v.noBid;
            return t.concat(o.map((function(t) {
                return new S({
                    size: "0x0",
                    crid: "",
                    slotID: t,
                    mediaType: "d",
                    meta: ["slotID", "mediaType", "size"],
                    amznbid: a,
                    amzniid: "",
                    amznp: a,
                    amznsz: "0x0",
                    targeting: ["amzniid", "amznbid", "amznp", "amznsz"]
                })
            })))
        } catch (e) {
            return Object(s.b)(e, "addStateTrackingBidsToRealBids"), t
        }
    }

    function I(t) {
        try {
            if (Object(c.j)(r.a.getState().displayAdServer.noBidSlotIDs, t.slotID)) return !1;
            var e = r.a.getState().AAXReqs.filter((function(e) {
                return e.bidReqID === t.bidReqID
            }))[0];
            return !(Object(c.m)(e, "rqTs") && Date.now() - e.rqTs > 24e4) && (!(Object(c.m)(e, "url") && !Object(c.b)(e.url, Object(u.g)(window))) && t.bidState !== i.c.rendered)
        } catch (e) {
            return Object(s.b)(e, "isBidEligible"), !1
        }
    }

    function D(t) {
        try {
            var e = t.map(d.c),
                n = r.a.getState();
            return Object.keys(n.slotBids).filter((function(t) {
                return Object(c.j)(e, t)
            })).reduce((function(t, e) {
                var o = n.slotBids[e].filter((function(t) {
                    return t.bidState === i.c.new
                })).filter(I);
                return 0 < o.length && (o = o[o.length - 1], r.a.dispatch({
                    type: "BID_STATE_CHANGE",
                    slotID: e,
                    _targetingSetID: o._targetingSetID,
                    bidState: i.c.exposed
                }), t[e] = o), t
            }), {})
        } catch (t) {
            return Object(s.b)(t, "getNewSlotBidsAndExposeForRequestedSlots"), {}
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "d", (function() {
        return i
    })), n.d(e, "b", (function() {
        return c
    })), n.d(e, "a", (function() {
        return a
    })), n.d(e, "c", (function() {
        return s
    }));
    var r = n(1);

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t) {
        var e, n = t.url,
            i = t.onload,
            c = t.onerror,
            a = t.ontimeout,
            s = t.withCredentials,
            u = void 0 === (u = t.body) ? null : u,
            d = void 0 === (e = t.headers) ? null : e,
            l = (t = void 0 === (e = t.trustTokenParameter) ? null : e, new window.XMLHttpRequest);
        try {
            if ("" === n) return void(void 0 !== c && c.call(l, "error"));
            l.onload = i.bind(null, l), void 0 !== c && (l.onerror = c), void 0 !== a && (l.ontimeout = a), void 0 !== s && (l.withCredentials = s);
            var f = null !== u ? "POST" : "GET";
            l.open(f, n), null !== d && "object" === o(d) && Object.keys(d).forEach((function(t) {
                l.setRequestHeader(t, d[t])
            }));
            try {
                null !== t && "object" === o(t) && window.location === window.parent.location && l.setTrustToken(t)
            } catch (t) {
                Object(r.b)(t, "setTrustToken")
            }
            l.send(u)
        } catch (t) {
            void 0 !== c && c.call(l, "error"), Object(r.b)(t, "xhrRequest")
        }
    }

    function c(t, e, n, o) {
        try {
            if (void 0 === n && (n = document), void 0 === t) return "function" == typeof e && e(!0), !1;
            var i = n.getElementsByTagName("script")[0] || n.body.firstChild,
                c = n.createElement("script");
            if (c.type = "text/javascript", c.async = !0, c.src = t, e && a(c, e), a(c, o || function() {
                    Object(r.b)(new Error("Error Loading Script Tag"), "loadScriptTag-onerror")
                }, [], "onerror"), null !== i.parentNode) return i.parentNode.insertBefore(c, i), !0
        } catch (t) {
            Object(r.b)(t, "loadScriptTag", !0)
        }
        return !1
    }

    function a(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
            o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "onload";
        try {
            return "function" == typeof e && (t[o] = function() {
                e.apply(null, n)
            }, !0)
        } catch (t) {
            return Object(r.b)(t, "addCallbackFunction"), !1
        }
    }

    function s(t) {
        try {
            return encodeURIComponent(JSON.stringify(t))
        } catch (t) {
            return Object(r.b)(t, "objToUrlParam"), ""
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    })), n.d(e, "b", (function() {
        return a
    }));
    var r = n(1),
        o = n(0);

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c(t) {
        try {
            return function(t) {
                try {
                    if (!a(t, ["number", "string"])) return !1;
                    if (isNaN(t)) return !1;
                    if ("number" == typeof t) return !0;
                    var e = parseInt(t, 10);
                    return !isNaN(e)
                } catch (t) {
                    return Object(r.b)(t, "isNumber"), !0
                }
            }(t) || void 0 === t
        } catch (t) {
            return Object(r.b)(t, "isNumberOrUndefined"), !0
        }
    }

    function a(t, e) {
        try {
            return Object(o.j)(e, i(t))
        } catch (t) {
            return Object(r.b)(t, "isVarOfTypes"), !0
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return i
    })), n.d(e, "a", (function() {
        return c
    })), n.d(e, "d", (function() {
        return a
    })), n.d(e, "c", (function() {
        return s
    }));
    var r = n(1),
        o = n(0);

    function i(t) {
        var e = [];
        try {
            t.hasAdServerObjectLoaded() && (e = t.getSlots())
        } catch (t) {
            Object(r.b)(t, "getDisplayAdServerSlots")
        }
        return e
    }

    function c(t) {
        try {
            return Object(o.m)(t, "sizes") && Object(o.k)(t.sizes) && 0 !== t.sizes.length
        } catch (t) {
            return Object(r.b)(t, "doesSlotHaveSizes"), !1
        }
    }

    function a(t) {
        try {
            return "video" !== t.mediaType
        } catch (t) {
            return Object(r.b)(t, "isDisplaySlot"), !0
        }
    }

    function s(t) {
        try {
            return t.slotID
        } catch (t) {
            return Object(r.b)(t, "getSlotID"), ""
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    })), n.d(e, "c", (function() {
        return o
    })), n.d(e, "b", (function() {
        return i
    })), n.d(e, "e", (function() {
        return c
    })), n.d(e, "f", (function() {
        return a
    })), n.d(e, "d", (function() {
        return s
    }));

    function r(t, e) {
        try {
            return "number" != typeof t[e] ? 0 : Math.round(t[e])
        } catch (t) {
            return 0
        }
    }

    function o(t, e) {
        try {
            var n = i(t, e)[0];
            if (void 0 !== n) return n
        } catch (t) {}
        return null
    }

    function i(t, e) {
        try {
            return t.performance.getEntriesByType("resource").filter((function(t) {
                return e.test(t.name)
            }))
        } catch (t) {
            return []
        }
    }

    function c(t, e) {
        try {
            var n = t.performance.timing[e];
            return void 0 === n ? 0 : n
        } catch (t) {
            return 0
        }
    }

    function a(t) {
        try {
            if (0 === ["redirectStart", "redirectEnd", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "secureConnectionStart"].reduce((function(e, n) {
                    return e + r(t, n)
                }), 0)) return null;
            var e = r(t, "fetchStart");
            return ["domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd"].reduce((function(n, o) {
                return n && r(t, o) === e
            }), !0)
        } catch (t) {
            return null
        }
    }

    function s() {
        try {
            var t = window.performance.timeOrigin;
            return void 0 === t ? window.performance.timing.navigationStart : t
        } catch (t) {
            return 0
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "c", (function() {
        return m
    })), n.d(e, "b", (function() {
        return O
    })), n.d(e, "a", (function() {
        return y
    })), n.d(e, "e", (function() {
        return S
    })), n.d(e, "d", (function() {
        return v
    }));
    var r = n(1),
        o = n(15),
        i = n(9),
        c = n(3),
        a = n(2),
        s = n(7),
        u = n(0);

    function d(t) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var l = ["email"],
        f = /@/,
        b = /^[0-9a-fA-F]{64}$/,
        p = "noconsent",
        m = function(t) {
            return b.test(t || "")
        };

    function g(t) {
        return t === p ? "AMZN-NoCookieConsent" : "AMZN-Token"
    }

    function h(t, e, n) {
        t = 0 < arguments.length && void 0 !== t ? t : "", e = 1 < arguments.length && void 0 !== e ? e : 0, n = 2 < arguments.length && void 0 !== n ? n : "token";
        try {
            var o = new Date(e).toUTCString();
            document.cookie = "".concat(g(n), "=").concat(t, "; expires=").concat(o, "; path=/;")
        } catch (t) {
            Object(r.b)(t, "setAmznToken-".concat(n), !0)
        }
    }

    function O() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "token";
        try {
            var e = Object(u.d)().filter((function(e) {
                return e[0] === g(t)
            }));
            return 0 === e.length ? "" : e[0][1]
        } catch (e) {
            return Object(r.b)(e, "getAmznToken-".concat(t), !0), ""
        }
    }

    function y(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "api";
        try {
            if (void 0 !== t && "function" != typeof t) throw new Error("Callback function must be a function, ".concat(d(t), " provided"));
            "function" != typeof t && (t = function() {}), h(), h("", 0, "noconsent"), Object(c.c)("id", "d-".concat(e))
        } catch (t) {
            Object(r.b)(t, "deleteIdentity", !0)
        }
        t()
    }

    function j(t, e, n, o) {
        try {
            e = Object(s.a)(e);
            var d, l = a.a.getState().config;
            if (!Object(u.m)(l, "pubID")) throw new Error("apstag.init must be called before ID functions");
            var f = {
                url: "https://tk.amazon-adsystem.com/envelope",
                onload: function(t) {
                    try {
                        if (t.readyState === XMLHttpRequest.DONE && 200 === t.status) {
                            if ("string" != typeof(d = JSON.parse(t.responseText)).AIPToken || "number" != typeof d.cookieExpiry) return e(), void Object(r.b)(new Error("Invalid AIPES response"), "callAipes-response");
                            "" === d.AIPToken ? (Object(c.c)("id", "endReqAipes-tokenEmpty"), h("1", d.cookieExpiry, p)) : (Object(c.c)("id", "endReqAipes-tokenAvailable"), Object(c.g)(), n && h(d.AIPToken, d.cookieExpiry))
                        } else t.readyState === XMLHttpRequest.DONE && Object(r.b)(new Error("AIPES response code: ".concat(t.status)), "callAipes-onload", !0)
                    } catch (t) {
                        Object(r.b)(t, "callAipes-onload", !0)
                    }
                    e(n ? null : d)
                },
                onerror: function() {
                    Object(r.b)(new Error("AIPES response code: ".concat(this.status)), "callAipes-onerror", !0), e()
                },
                ontimeout: function() {
                    Object(r.b)(new Error("AIPES request timeout"), "callAipes-ontimeout", !0), e()
                },
                headers: {
                    "Content-Type": "application/json"
                },
                body: function(t, e, n) {
                    try {
                        var o = {
                            publisherId: e.pubID,
                            hashedRecords: t.hashedRecords
                        };
                        return n.enabled ? (o.gdpr = 1, void 0 !== n.consent && (o.gdprConsent = n.consent)) : 0 === n.enabled && (o.gdpr = 0), void 0 !== t.ttl && (o.ttl = t.ttl), JSON.stringify(o)
                    } catch (t) {
                        return Object(r.b)(t, "buildAipesBody", !0), ""
                    }
                }(t, l, o)
            };
            Object(c.c)("id", "startReqAipes"), Object(i.d)(f)
        } catch (t) {
            Object(r.b)(t, "callAipes", !0), e()
        }
    }

    function S(t, e, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "api";
        "function" != typeof e && (e = function() {}), "boolean" != typeof n && (n = !0);
        try {
            if (!Object(u.l)(t)) throw new Error("'tokenConfig' must be an object, ".concat("object" === d(t) ? "null" : d(t), " provided"));
            if (t.optOut) return void y(e, "u-oo");
            if (y((function() {}), "u"), Object(c.c)("id", "u-".concat(i)), ! function(t) {
                    try {
                        var e = [];
                        return !Object(u.m)(t, "gdpr") || Object(u.l)(t.gdpr) && !Object(u.k)(t.gdpr) ? Object(u.m)(t, "gdpr") && (Object(u.m)(t.gdpr, "enabled") && -1 === [!0, !1].indexOf(t.gdpr.enabled) && e.push("`gdpr.enabled` must be a boolean"), Object(u.m)(t.gdpr, "consent") && "string" != typeof t.gdpr.consent && e.push("'gdpr.consent' must be a valid IAB-formatted string")) : e.push("`gdpr` must be an Object"), Object(u.m)(t, "optOut") && -1 === [!0, !1].indexOf(t.optOut) && e.push("'optOut' must be a boolean"), Object(u.m)(t, "hashedRecords") && Object(u.k)(t.hashedRecords) ? 1 !== t.hashedRecords.length ? e.push("'hashedRecords' must contain exactly one item") : t.hashedRecords.forEach((function(t) {
                            Object(u.m)(t, "type") && -1 !== l.indexOf(t.type) || e.push("'type' must be 'email' in item '".concat(JSON.stringify(t), "'")), Object(u.m)(t, "encrypted") && "boolean" != typeof t.encrypted && e.push("'encrypted' must be a boolean in item '".concat(JSON.stringify(t), "'")), Object(u.m)(t, "record") && "string" == typeof t.record ? t.encrypted || b.test(t.record) ? t.encrypted && f.test(t.record) && e.push("'record' must NOT be an un-hashed, un-encrypted email") : e.push("'record' must be a SHA256 hash in item '".concat(JSON.stringify(t), "'")) : e.push("'record' must be a string in item '".concat(JSON.stringify(t), "'"))
                        })) : e.push("'hashedRecords' must be an array"), Object(u.m)(t, "ttl") && ("number" != typeof t.ttl || isNaN(t.ttl) || t.ttl <= 0 || t.ttl % 1 != 0) && e.push("'ttl' must be a positive integer"), 0 < e.length ? void Object(r.b)({
                            name: "TokenConfigValidationError",
                            message: "There was an issue with the TokenConfig provided ".concat(JSON.stringify(t), ":\n") + e.map((function(t) {
                                return "- ".concat(t)
                            })).join("\n")
                        }, "validateTokenConfig-invalid", !0) : 1
                    } catch (t) {
                        return void Object(r.b)(t, "validateTokenConfig", !0)
                    }
                }(t)) return void e();
            Object(o.a)(t.gdpr, j.bind(null, t, e, n))
        } catch (t) {
            Object(r.b)(t, "updateIdentity", !0), e()
        }
    }

    function v(t, e, n) {
        "function" != typeof e && (e = function() {}), "boolean" != typeof n && (n = !0);
        try {
            if (!Object(u.l)(t)) throw new Error("'tokenConfig' must be an object, ".concat("object" === d(t) ? "null" : d(t), " provided"));
            if (t.optOut) return void y(e, "r-oo");
            if ("" !== O("noconsent")) return void e();
            if ("" !== O()) return e(), void Object(c.c)("id", "r-noop");
            S(t, e, n, "r")
        } catch (t) {
            Object(r.b)(t, "renewIdentity", !0), e()
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return g
    })), n.d(e, "c", (function() {
        return h
    })), n.d(e, "a", (function() {
        return S
    }));
    var r = n(0),
        o = n(1),
        i = n(3);

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function s() {
        return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t)););
                return t
            }(t, e);
            if (r) return (r = Object.getOwnPropertyDescriptor(r, e)).get ? r.get.call(arguments.length < 3 ? t : n) : r.value
        }).apply(this, arguments)
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function l(t) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function f(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function b(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function p(t, e, n) {
        return e && b(t.prototype, e), n && b(t, n), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }

    function m(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var g = function() {
            function t() {
                f(this, t), m(this, "isSupported", !1), m(this, "needNewBidObject", !1)
            }
            return p(t, [{
                key: "cmdQueuePush",
                value: function(t) {}
            }, {
                key: "slotRenderEndedEvent",
                value: function(t) {}
            }, {
                key: "setTargeting",
                value: function(t, e) {}
            }, {
                key: "getTargeting",
                value: function(t) {
                    return []
                }
            }, {
                key: "clearTargeting",
                value: function(t, e) {}
            }, {
                key: "hasAdServerObjectLoaded",
                value: function() {
                    return !1
                }
            }, {
                key: "isCommandQueueDefined",
                value: function() {
                    return !1
                }
            }, {
                key: "getSlots",
                value: function() {
                    return []
                }
            }]), t
        }(),
        h = function() {
            function t(e, n, r) {
                f(this, t), m(this, "mediaType", "display"), m(this, "slotID", void 0), m(this, "slotName", void 0), m(this, "slotParams", void 0), m(this, "rawSlot", void 0), this.slotID = e, this.slotName = n, this.slotParams = r
            }
            return p(t, [{
                key: "reportError",
                value: function(t, e) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    Object(o.b)(t, "Slot-".concat(e), n)
                }
            }, {
                key: "sizes",
                get: function() {
                    return []
                }
            }, {
                key: "floor",
                get: function() {}
            }, {
                key: "slotConfig",
                get: function() {
                    try {
                        return {
                            slotID: this.slotID,
                            slotName: this.slotName,
                            sizes: this.sizes
                        }
                    } catch (t) {
                        return this.reportError(t, "slotConfig"), {
                            slotID: "",
                            slotName: "",
                            sizes: []
                        }
                    }
                }
            }, {
                key: "aaxSlotParams",
                get: function() {
                    var t = this;
                    try {
                        return Object(r.m)(this, "slotParams") && Object(r.l)(this.slotParams) ? Object.keys(this.slotParams).filter((function(e) {
                            return function t(e) {
                                try {
                                    return Object(r.k)(e) ? 0 < e.length && e.reduce((function(e, n) {
                                        return e && t(n)
                                    }), !0) : "string" == typeof e && 0 < e.length
                                } catch (e) {
                                    return Object(o.b)(e, "validateSlotParamValue"), !1
                                }
                            }(t.slotParams[e])
                        })).reduce((function(e, n) {
                            return e[n] = t.slotParams[n], e
                        }), {}) : void 0
                    } catch (t) {
                        return this.reportError(t, "aaxSlotParams"), this.slotParams
                    }
                }
            }, {
                key: "aaxSlot",
                get: function() {
                    try {
                        Object(i.c)("slotType", "display");
                        var t = {
                            sd: this.slotID,
                            s: this.sizes.filter(r.k).map((function(t) {
                                return t.join("x")
                            })),
                            kv: this.aaxSlotParams
                        };
                        return this.slotID !== this.slotName && (t.sn = this.slotName), this.floor && (t.fc = this.floor.currency, t.fp = this.floor.value), t
                    } catch (t) {
                        return this.reportError(t, "aaxSlot"), {
                            sd: "",
                            s: [],
                            kv: {}
                        }
                    }
                }
            }, {
                key: "setTargeting",
                value: function(t, e) {}
            }, {
                key: "getTargeting",
                value: function(t) {
                    return []
                }
            }, {
                key: "clearTargeting",
                value: function(t) {}
            }, {
                key: "isValid",
                value: function() {
                    function t(t, e) {
                        return "There was an issue with the configuration for this slot: ".concat(JSON.stringify(e), "\n") + t.map((function(t) {
                            return "- ".concat(t)
                        })).join("\n")
                    }
                    try {
                        var e, n, o, i = [],
                            c = [];
                        return void 0 === this.slotID ? i.push("'slotID' must be provided and a string") : "string" != typeof this.slotID && c.push("'slotID' must be a string"), "display" === this.mediaType && 0 === this.sizes.length && i.push("'sizes' must have at least 1 valid item"), Object(r.m)(this.rawSlot, "floor") && Object(r.l)(this.rawSlot.floor) && (n = (e = this.rawSlot.floor).currency, o = e.value, "USD" !== n && c.push("'floor' currency only supports USD"), v(o) || c.push("'floor' value must be a positive integer")), 0 < i.length ? (this.reportError({
                            name: "SlotValidationError",
                            message: t([].concat(i, c), this.rawSlot)
                        }, "validation-error", !0), !1) : (0 < c.length && this.reportError({
                            name: "SlotValidationError",
                            message: t(c, this.rawSlot)
                        }, "validation-warn", !0), !0)
                    } catch (t) {
                        return this.reportError(t, "isValid", !0), !0
                    }
                }
            }]), t
        }(),
        O = [],
        y = /^[0-9]+x[0-9]+$/,
        j = /^[0-9]+$/,
        S = function() {
            var t = b,
                e = h;
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e && u(t, e);
            var n = function(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(t);
                    n = e ? (n = l(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
                    if (n && ("object" === c(n) || "function" == typeof n)) return n;
                    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                    return d(r)
                }
            }(b);

            function b(t) {
                var e;
                f(this, b), m(d(e = n.call(this, t.slotID, t.slotName, t.slotParams)), "rawSlot", void 0), m(d(e), "hasReportedWorkingInvalidSizeError", !1), e.mediaType = "video" === t.mediaType ? "video" : "display", e.rawSlot = function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? a(Object(n), !0).forEach((function(e) {
                            m(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({}, t);
                try {
                    Object(r.m)(e.rawSlot, "sizes") && Object(r.k)(e.rawSlot.sizes) && (e.rawSlot.sizes = e.rawSlot.sizes.filter((function(t) {
                        return "fluid" !== t
                    })))
                } catch (t) {
                    e.reportError(t, "sizeFilter")
                }
                return e
            }
            return p(b, [{
                key: "reportError",
                value: function(t, e) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    Object(o.b)(t, "AaxSlot-".concat(e), n)
                }
            }, {
                key: "aaxSlot",
                get: function() {
                    try {
                        var t;
                        return "video" === this.rawSlot.mediaType ? (Object(i.c)("slotType", "video"), t = {
                            id: this.slotID,
                            mt: "v",
                            kv: this.aaxSlotParams
                        }, 0 < this.sizes.length && (t.s = this.sizes.filter(r.k).map((function(t) {
                            return t.join("x")
                        }))), this.floor && (t.fc = this.floor.currency, t.fp = this.floor.value), t) : s(l(b.prototype), "aaxSlot", this)
                    } catch (t) {
                        return this.reportError(t, "aaxSlot"), {
                            sd: "",
                            s: []
                        }
                    }
                }
            }, {
                key: "sizes",
                get: function() {
                    try {
                        var t, e, n = [];
                        return Object(r.m)(this.rawSlot, "sizes") && Object(r.k)(this.rawSlot.sizes) && (t = "2d", !(0 < (e = this.rawSlot.sizes).length) || Object(r.k)(e[0]) || "string" == typeof e[0] && y.test(e[0]) || (t = "1d", e = [e]), n = e.filter((function(e) {
                            var n = t,
                                c = e;

                            function a(t) {
                                t = JSON.stringify(t), -1 === O.indexOf(t) && (O.push(t), Object(o.b)({
                                    name: "AaxSlot-InvalidSize",
                                    message: "Invalid Slot Size: ".concat(JSON.stringify(c))
                                }, "isValidSize-invalid"))
                            }
                            try {
                                return "string" == typeof c && y.test(c) ? (Object(i.c)("AaxSlotSizes", "".concat(n, "-compiled")), !0) : Object(r.k)(c) && 1 !== c.length ? (2 < c.length && a(c), c.slice(0, 2).reduce((function(t, e) {
                                    return t && ("number" == typeof e || "string" == typeof e) && !("string" == typeof e && !j.test(e)) && ("string" == typeof e ? Object(i.c)("AaxSlotSizes", "".concat(n, "-string")) : Object(i.c)("AaxSlotSizes", "".concat(n, "-number")), !0)
                                }), !0)) : (a(c), !1)
                            } catch (e) {
                                return Object(o.b)(e, "isValidSize"), !0
                            }
                        })).map((function(t) {
                            return Object(r.k)(t) ? t : t.split("x").map((function(t) {
                                return parseInt(t, 10)
                            }))
                        }))), n
                    } catch (e) {
                        return this.reportError(e, "sizes"), []
                    }
                }
            }, {
                key: "floor",
                get: function() {
                    var t;
                    try {
                        Object(r.m)(this.rawSlot, "floor") && "USD" === this.rawSlot.floor.currency && v(this.rawSlot.floor.value) ? (t = this.rawSlot.floor, Object(i.c)("customFloor", "y")) : Object(i.c)("customFloor", "n")
                    } catch (t) {
                        this.reportError(t, "floor")
                    }
                    return t
                }
            }]), b
        }();

    function v(t) {
        return "number" == typeof t && 0 < t && t % 1 == 0
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return f
    })), n.d(e, "b", (function() {
        return h
    })), n.d(e, "c", (function() {
        return O
    }));
    var r = n(1),
        o = n(3),
        i = n(0);

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? a(Object(n), !0).forEach((function(e) {
                var r, o;
                r = t, o = n[e = e], e in r ? Object.defineProperty(r, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[e] = o
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var u = Number.isInteger || function(t) {
            return "number" == typeof t && isFinite(t) && Math.floor(t) === t
        },
        d = "__cmp",
        l = "__tcfapi";

    function f(t, e) {
        var n = !1,
            a = {
                log: {
                    status: "no-status"
                }
            },
            f = 50,
            b = "global-func-error";

        function p() {
            n || (n = !0, e(s(s({}, a), {}, {
                log: s({}, a.log)
            })))
        }
        e = Object(r.d)(e, "GdprCallback");
        var m = "null";

        function g(t, e) {
            try {
                if (!e || !Object(i.l)(t)) return a.log.status = "".concat(m, "-error"), void p();
                a.log.status = "".concat(m, "-success"), Object(i.m)(t, "tcString") ? a.consent = t.tcString : Object(i.m)(t, "consentData") && (a.consent = t.consentData), a.enabled = t.gdprApplies ? 1 : 0, 0 === a.enabled && delete a.consent, a.gdprApplies = t.gdprApplies, p()
            } catch (t) {
                a.log.status = "func-error", p(), Object(r.b)(t, "cmpCallback-".concat(m), !0)
            }
        }
        try {
            if (!1 === (t = Object(i.l)(t) ? s({}, t) : {}).enabled || 0 === t.enabled ? (a.log.status = "explicit-no-gdpr", a.enabled = 0) : !0 === t.enabled || 1 === t.enabled ? (a.log.status = Object(i.m)(t, "consent") ? "explicit-consent-passed" : "explicit-no-consent-passed", a.enabled = 1, a.consent = t.consent) : Object(i.m)(t, "enabled") && (a.log.status = Object(i.m)(t, "consent") ? "malformed-with-consent" : "malformed-without-consent", a.consent = t.consent, u(t.enabled) ? a.enabled = t.enabled : a.enabled = 1), Object(i.m)(t, "enabled") && (a.log.enabled = t.enabled), Object(i.m)(t, "cmpTimeout") && u(t.cmpTimeout) && (f = t.cmpTimeout, a.log.cmpTimeout = f), void 0 !== a.enabled) return Object(o.c)("gdpr", "pub-api"), Object(i.m)(a, "consent") && "string" != typeof a.consent && (delete a.consent, Object(r.b)(new Error("Invalid consent: must be string, given ".concat(c(a.consent))), "getGdprConfig-pub-consent-invalid", !0)), void p()
        } catch (t) {
            Object(r.b)(t, "getGdprConfig-parseConfig", !0)
        }
        try {
            if (Object(i.m)(window, l) && "function" == typeof window[l]) m = "tcfv2";
            else {
                if (!Object(i.m)(window, d) || "function" != typeof window[d]) return Object(o.c)("gdpr", "no-cmp"), a.log.status = "no-cmp", void p();
                m = "cmp"
            }
            Object(o.c)("gdpr", m), setTimeout((function() {
                a.log.status = "".concat(m, "-timeout"), p()
            }), f), b = "".concat(m, "-internal-error"), "cmp" === m ? window[d]("getConsentData", null, g) : window[l]("getTCData", 2, g)
        } catch (t) {
            a.log.status = b, p(), Object(r.b)(t, "getGdprConfig-".concat(b), !0)
        }
    }

    function b(t) {
        for (var e = [], n = -1; 0 <= (n = t.indexOf("1", n + 1));) e.push(n + 1);
        return e
    }

    function p(t) {
        for (var e = [], n = parseInt(g(t, 12), 2), r = 0; r < n; r++) {
            var o = parseInt(g(t, 1), 2),
                i = parseInt(g(t, 16), 2);
            if (e.push(i), o)
                for (var c = parseInt(g(t, 16), 2), a = i + 1; a <= c; a++) e.push(a)
        }
        return e
    }

    function m(t) {
        var e = parseInt(g(t, 16), 2);
        return parseInt(g(t, 1), 2) ? p(t) : b(g(t, e))
    }

    function g(t, e) {
        var n = t.bits.substr(t.index, e);
        return t.index += e, n
    }

    function h(t) {
        try {
            if (!t) return !1;
            var e = function(t) {
                try {
                    for (var e = (t = (t = t.replace(/-/g, "+")).replace(/_/g, "/")).split(".")[0], n = window.atob(e), o = "", i = 0; i < n.length; i++) o += ("0000000" + n.charCodeAt(i).toString(2)).substr(-8);
                    return o
                } catch (t) {
                    return Object(r.b)(t, "TCFToBinary", !0), ""
                }
            }(t);
            if (e.length < 230) return !1;
            var n = {},
                o = {
                    bits: e,
                    index: 0
                };
            return n.version = parseInt(g(o, 6), 2), 2 === n.version && (n.created = parseInt(g(o, 36), 2), n.lastUpdated = parseInt(g(o, 36), 2), n.cmpId = parseInt(g(o, 12), 2), n.cmpVersion = parseInt(g(o, 12), 2), n.consentScreen = parseInt(g(o, 6), 2), n.consentLanguage = String.fromCharCode(parseInt(g(o, 6), 2) + 65) + String.fromCharCode(parseInt(g(o, 6), 2) + 65), n.vendorListVersion = parseInt(g(o, 12), 2), n.tcfPolicyVersion = parseInt(g(o, 6), 2), n.isServiceSpecific = "1" === g(o, 1), n.useNonStandardStacks = "1" === g(o, 1), n.specialFeatureOptIns = b(g(o, 12)), n.purposesConsent = b(g(o, 24)), n.purposesLITransparency = b(g(o, 24)), n.purposeOneTreatment = "1" === g(o, 1), n.publisherCC = String.fromCharCode(parseInt(g(o, 6), 2) + 65) + String.fromCharCode(parseInt(g(o, 6), 2) + 65), n.vendorConsents = m(o), n.vendorLegitimateInterests = m(o), n.publisherRestrictions = function(t) {
                for (var e = parseInt(g(t, 12), 2), n = [], r = 0; r < e; r++) {
                    var o = parseInt(g(t, 6), 2),
                        i = parseInt(g(t, 2), 2);
                    n.push({
                        purposeId: o,
                        restrictionType: i,
                        vendorIds: p(t)
                    })
                }
                return n
            }(o), n)
        } catch (t) {
            return Object(r.b)(t, "parseTCFString", !0), !1
        }
    }

    function O(t, e) {
        if (!t) return !!window.apstag && !window.apstag.isGDPRRegion && !0 !== e;
        if (window.apstag && !window.apstag.isGDPRRegion && !1 === e) return !0;
        if (2 !== t.version) return !1;
        if (t.useNonStandardStacks) return !1;
        if (!t.isServiceSpecific) return !1;
        if (t.vendorListVersion < 51) return !1;
        if (0 === (e = t.publisherRestrictions.filter((function(t) {
                return 1 === t.purposeId && 0 <= t.vendorIds.indexOf(793)
            }))).length) return y(t);
        switch (e[0].restrictionType) {
            case 0:
            case 2:
                return !1;
            default:
                return y(t)
        }
    }

    function y(t) {
        return !(!Object(i.m)(t, "vendorConsents") || !Object(i.m)(t, "purposesConsent")) && 0 <= t.vendorConsents.indexOf(793) && 0 <= t.purposesConsent.indexOf(1)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "d", (function() {
        return a
    })), n.d(e, "c", (function() {
        return s
    })), n.d(e, "b", (function() {
        return u
    })), n.d(e, "g", (function() {
        return f
    })), n.d(e, "a", (function() {
        return h
    })), n.d(e, "e", (function() {
        return O
    })), n.d(e, "f", (function() {
        return y
    }));
    var r = n(1),
        o = n(0),
        i = n(3),
        c = n(2);

    function a(t, e) {
        try {
            if (Object(o.m)(e, "slotID")) {
                var n = e.slotID,
                    i = t.getElementById(n);
                if (i instanceof HTMLDivElement) return i
            }
        } catch (t) {
            Object(r.b)(t, "getVideoDivElement-outstream")
        }
    }

    function s(t, e) {
        try {
            Object(o.m)(t, "bidID") && (e += "b=".concat(t.bidID)), Object(o.m)(t, "pp") && (e += "&pp=".concat(t.pp)), e += "&rnd=".concat(Object(o.e)())
        } catch (t) {
            Object(r.b)(t, "constructVastTag")
        }
        return e
    }

    function u(t, e) {
        try {
            return e.replace("$$apstagVastTag$$", t)
        } catch (t) {
            return Object(r.b)(t, "constructVastTag"), ""
        }
    }
    var d = {
            started: !1,
            completed: !1,
            loaded: !1,
            isPaused: !1
        },
        l = {
            root: null,
            rootMargin: "0px",
            threshold: .5
        };

    function f(t, e, n) {
        try {
            var o;
            window.addEventListener("message", (function(t) {
                b(t, n)
            })), window.IntersectionObserver ? (o = new window.IntersectionObserver((function(n) {
                n.forEach((function(n) {
                    .5 < n.intersectionRatio && e.contentWindow && (p(e, t), o.disconnect())
                }))
            }), l)).observe(t) : Object(r.b)({
                name: "IntersectionObserver",
                message: "IntersectionObserver not supported "
            }, "startVideoAndHandlePlayback")
        } catch (t) {
            Object(r.b)(t, "startVideoAndHandlePlayback")
        }
    }

    function b(t, e) {
        if (t.origin === window.top.location.origin && !0 === t.data.apsVideoPlayer) switch (t.data.event) {
            case "completed":
                d.completed = !0;
                break;
            case "loaded":
                var n;
                d.loaded = !0, c.a.getState().outstream.shouldSample && (n = Date.now() - c.a.getState().outstream.renderStart, Object(i.e)("loaded", e, n))
        }
    }

    function p(t, e) {
        try {
            null !== t.contentDocument && Object(o.j)(["complete", "interactive"], t.contentDocument.readyState) ? g(t, e) : null !== t.contentDocument && "uninitialized" !== t.contentDocument.readyState ? t.contentDocument.addEventListener("DOMContentLoaded", (function() {
                g(t, e)
            })) : t.addEventListener("load", (function() {
                g(t, e)
            })), setTimeout(g, 1e3, !0)
        } catch (t) {
            Object(r.b)(t, "loadVideoAd")
        }
    }

    function m(t, e) {
        try {
            var n;
            window.IntersectionObserver && (n = new window.IntersectionObserver((function(e) {
                e.forEach((function(e) {
                    d.completed && n.disconnect(), e.intersectionRatio < .5 && !d.isPaused ? t.contentWindow && t.contentWindow.adsM && (t.contentWindow.adsM.pause(), d.isPaused = !0) : d.isPaused && t.contentWindow && t.contentWindow.adsM && (t.contentWindow.adsM.play(), d.isPaused = !1)
                }))
            }), {
                threshold: .5
            })).observe(e)
        } catch (e) {
            Object(r.b)(e, "handleAutoPauseAndPlay")
        }
    }

    function g(t, e) {
        t.contentWindow && !d.started && (d.started = !0, function(t, e, n) {
            var r = Number(new Date) + (e || 2e3);
            return n = n || 100, new Promise((function e(o, i) {
                var c = t();
                c ? o(c) : Number(new Date) < r ? setTimeout(e, n, o, i) : i(new Error("apsVideoPlayer timed out"))
            }))
        }((function() {
            return d.loaded
        }), 3e4, 100).then((function() {
            t.contentWindow && t.contentWindow.adsM && (t.contentWindow.adsM.play(), m(t, e))
        })).catch((function() {
            m(t, e), Object(r.b)({
                name: "VideoPlayerTimeout",
                message: "video player took more than 30 seconds to load"
            }, "startAd")
        })))
    }

    function h(t, e) {
        try {
            e && e.appendChild(t)
        } catch (t) {
            Object(r.b)(t, "_appendDivElement")
        }
    }

    function O(t, e) {
        try {
            t.appendChild(e)
        } catch (t) {
            Object(r.b)(t, "_insertVideoIframeInsideDiv")
        }
    }

    function y(t) {
        var e = document.createElement("div");
        return e.style.width = "".concat(t[0], "px"), e.style.height = "".concat(t[1], "px"), e.style.margin = "0 auto", e.id = "apsVideoDiv-".concat(Object(o.e)()), e
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return m
    })), n.d(e, "a", (function() {
        return g
    }));
    var r = n(0),
        o = n(14),
        i = n(1);

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function u(t, e, n) {
        return e && s(t.prototype, e), n && s(t, n), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }

    function d(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && function(t, e) {
            (Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }(t, e)
    }

    function l(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = b(t);
            n = e ? (n = b(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === c(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return f(r)
        }
    }

    function f(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function b(t) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function p(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var m = function() {
            d(e, o.c);
            var t = l(e);

            function e(n) {
                var r;
                return a(this, e), p(f(r = t.call(this, n.getSlotElementId(), n.getAdUnitPath())), "rawSlot", void 0), p(f(r), "mediaType", "display"), r.rawSlot = n, r
            }
            return u(e, [{
                key: "reportError",
                value: function(t, e) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    Object(i.b)(t, "GptSlot-".concat(e), n)
                }
            }, {
                key: "sizes",
                get: function() {
                    try {
                        var t = Object(r.h)(window).split("x").map((function(t) {
                                return Number(t)
                            })),
                            e = this.rawSlot.getSizes(t[0], t[1]);
                        return null === e ? [] : e.filter((function(t) {
                            return "fluid" !== t
                        })).map((function(t) {
                            return [t.getWidth(), t.getHeight()]
                        }))
                    } catch (t) {
                        return this.reportError(t, "sizes"), []
                    }
                }
            }, {
                key: "setTargeting",
                value: function(t, e) {
                    try {
                        this.rawSlot.setTargeting(t, e)
                    } catch (t) {
                        this.reportError(t, "setTargeting")
                    }
                }
            }, {
                key: "getTargeting",
                value: function(t) {
                    try {
                        return this.rawSlot.getTargeting(t)
                    } catch (t) {
                        return this.reportError(t, "getTargeting"), []
                    }
                }
            }, {
                key: "clearTargeting",
                value: function(t) {
                    try {
                        this.rawSlot.clearTargeting(t)
                    } catch (t) {
                        this.reportError(t, "clearTargeting")
                    }
                }
            }]), e
        }(),
        g = function() {
            d(e, o.b);
            var t = l(e);

            function e() {
                var n;
                a(this, e);
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                return p(f(n = t.call.apply(t, [this].concat(o))), "isSupported", !0), n
            }
            return u(e, [{
                key: "reportError",
                value: function(t, e) {
                    Object(i.b)(t, "GoogletagAdServer-".concat(e))
                }
            }, {
                key: "cmdQueuePush",
                value: function(t) {
                    try {
                        window.googletag.cmd.push(t)
                    } catch (t) {
                        this.reportError(t, "cmdQueuePush")
                    }
                }
            }, {
                key: "slotRenderEndedEvent",
                value: function(t) {
                    try {
                        window.googletag.pubads().addEventListener("slotRenderEnded", (function(e) {
                            e = new m(e.slot), t(e)
                        }))
                    } catch (t) {
                        this.reportError(t, "slotRenderEndedEvent")
                    }
                }
            }, {
                key: "setTargeting",
                value: function(t, e) {
                    try {
                        window.googletag.pubads().setTargeting(t, e)
                    } catch (t) {
                        this.reportError(t, "setTargeting")
                    }
                }
            }, {
                key: "getTargeting",
                value: function(t) {
                    try {
                        return window.googletag.pubads().getTargeting(t) || []
                    } catch (t) {
                        return this.reportError(t, "getTargeting"), []
                    }
                }
            }, {
                key: "clearTargeting",
                value: function(t) {
                    try {
                        window.googletag.pubads().clearTargeting(t)
                    } catch (t) {
                        this.reportError(t, "clearTargeting")
                    }
                }
            }, {
                key: "hasAdServerObjectLoaded",
                value: function() {
                    try {
                        return Object(r.m)(window, "googletag") && Object(r.m)(window.googletag, "apiReady") && !0 === window.googletag.apiReady
                    } catch (t) {
                        return this.reportError(t, "hasAdServerObjectLoaded"), !1
                    }
                }
            }, {
                key: "isCommandQueueDefined",
                value: function() {
                    try {
                        return Object(r.m)(window, "googletag") && Object(r.m)(window.googletag, "cmd")
                    } catch (t) {
                        return this.reportError(t, "isCommandQueueDefined"), !1
                    }
                }
            }, {
                key: "getSlots",
                value: function() {
                    try {
                        return window.googletag.pubads().getSlots().map((function(t) {
                            return new m(t)
                        }))
                    } catch (t) {
                        return this.reportError(t, "getSlots"), []
                    }
                }
            }]), e
        }()
}, function(t, e, n) {
    "use strict";
    n.d(e, "c", (function() {
        return i
    })), n.d(e, "a", (function() {
        return c
    })), n.d(e, "b", (function() {
        return a
    }));
    var r = n(1),
        o = n(0);

    function i(t) {
        try {
            return !(!Object(o.m)(t, "$sf") || !Object(o.m)(t.$sf, "ext"))
        } catch (t) {
            return Object(r.b)(t, "isSafeFrame"), !1
        }
    }

    function c(t, e) {
        try {
            var n = e.innerWidth,
                o = e.innerHeight,
                i = parseInt(t[0], 10),
                c = parseInt(t[1], 10),
                a = i - n,
                s = c - o,
                u = e.sfAPI || e.$sf.ext;
            u && (n === i && o === c || (u.register(i, c), u.expand({
                r: a,
                b: s,
                push: !0
            })))
        } catch (t) {
            Object(r.b)(t, "expandSf")
        }
    }

    function a(t) {
        try {
            return 1 === t.innerWidth && 1 === t.innerHeight
        } catch (t) {
            return Object(r.b)(t, "is1x1Creative"), !1
        }
    }
}, function(r, t, e) {
    "use strict";
    e.d(t, "b", (function() {
        return a
    })), e.d(t, "d", (function() {
        return s
    })), e.d(t, "c", (function() {
        return u
    })), e.d(t, "a", (function() {
        return d
    }));
    var n = e(9),
        b = e(1),
        c = e(22),
        f = e(4),
        p = e(2),
        m = e(0),
        i = e(3),
        g = e(15),
        o = e(23);

    function a() {
        var r = p.a.getState().experiments.shouldSampleLatency,
            o = Date.now(),
            t = Object(c.a)(window.location, window.top.location);
        if (null !== t) {
            var e = {
                url: t,
                withCredentials: !0,
                onload: function t(e) {
                    if (200 === e.status) try {
                        p.a.dispatch({
                            type: "RECORD_LIBRARY_LOAD_CALL_LATENCY",
                            latency: Date.now() - o
                        }), r && setTimeout(i.d, 1e3);
                        var n = JSON.parse(e.response);
                        eval(n["3pvendor"]), Object(g.a)(p.a.getState().config.gdpr, (function(t) {
                            var e;
                            t && (e = Object(g.b)(t.consent), Object(m.i)() && Object(g.c)(e, t.gdprApplies) && window.localStorage.setItem(f.e, "1"))
                        }))
                    } catch (t) {
                        Object(b.b)(t, "load3PLibraryConfig-onload", !0)
                    }
                },
                onerror: function(t) {
                    t = new Error("".concat(t.type, ": ").concat(t.loaded, " bytes transferred")), Object(b.b)(t, "load3PLibraryConfig-onerror", !0)
                }
            };
            try {
                Object(n.d)(e)
            } catch (t) {
                Object(b.b)(t, "load3PLibraryConfig", !0)
            }
            r && setTimeout(i.d, 1e3)
        }
    }

    function s() {
        return Object(m.m)(window, "creativeVendorLibraryLoaded") && !0 === window.creativeVendorLibraryLoaded || Object(m.m)(window, "confiant")
    }

    function u() {
        var t = {
            renderTimes: {}
        };
        window.addEventListener("message", (function(e) {
            Object(o.a)(t, e)
        }))
    }

    function y(t) {
        if (t) try {
            var e, n = JSON.parse(window.atob(decodeURIComponent(t))),
                r = {
                    id: n.envelope,
                    newGen: 2
                };
            return Object(m.m)(n, "timestamp") && (!(e = window.localStorage.getItem(f.m)) || e < n.timestamp ? (r.newGen = 1, window.localStorage.setItem(f.m, n.timestamp)) : r.newGen = 0), r
        } catch (e) {
            return {
                id: decodeURIComponent(t),
                newGen: 2
            }
        }
        return !1
    }

    function d(t) {
        try {
            if (t) {
                var e = Object(g.b)(t.consent),
                    n = Date.now(),
                    r = Object(g.c)(e, t.gdprApplies);
                if (p.a.dispatch({
                        type: "RECORD_TCF_PARSE_TIME",
                        time: Date.now() - n
                    }), r) {
                    var o = {
                        ids: {}
                    };
                    if ("1" !== window.localStorage.getItem(f.e)) return o;
                    var i, c, a = window.localStorage.getItem("id5id"),
                        s = (a && (o.ids.id5 = JSON.parse(decodeURIComponent(a)).universal_uid), window.localStorage.getItem("_pubcid")),
                        u = (s && (o.ids.pubcommon = s), !1),
                        d = (window.localStorage._lr_env ? u = y(window.localStorage._lr_env) : 0 <= window.document.cookie.indexOf("_lr_env=") ? (i = window.document.cookie.match("(^|;)*\\s*_lr_env\\s*=\\s*([^;]+)")) && (u = y(i.pop())) : window.localStorage.idl_env ? u = y(window.localStorage.idl_env) : 0 <= window.document.cookie.indexOf("idl_env=") && (c = window.document.cookie.match("(^|;)*\\s*idl_env\\s*=\\s*([^;]+)")) && (u = y(c.pop())), u && (o.ids.liveRamp = u.id, Object(m.m)(u, "newGen") && (o.md = {
                            liveRamp: u.newGen
                        })), window.localStorage.getItem("hadronId") || window.localStorage.getItem("auHadronId")),
                        l = (d && (o.ids.audigent = d), window.localStorage.getItem("panoramaId"));
                    return l && (o.ids.lotame = l), o
                }
            }
        } catch (t) {
            Object(b.b)(t, "getIdentityConfig", !0)
        }
        return {
            ids: {}
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return void 0 !== t.amzniid
    }

    function o(t) {
        return void 0 !== t.kvMap
    }
    n.d(e, "b", (function() {
        return r
    })), n.d(e, "a", (function() {
        return o
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return c
    })), n.d(e, "a", (function() {
        return a
    }));
    var r = n(4),
        o = n(0),
        i = n(1);

    function c(t) {
        try {
            return Object(o.m)(t, "debug")
        } catch (t) {
            return Object(i.b)(t, "isApstagLibrary"), !1
        }
    }

    function a(t) {
        try {
            return !!Object(o.m)(t, r.a) && !0 === t[r.a]
        } catch (t) {
            return Object(i.b)(t, "hasApstagJsLoaded"), !1
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(2),
        o = n(1),
        i = n(6),
        c = n(4);

    function a(t, e) {
        try {
            var n, a = r.a.getState(),
                s = a.config,
                u = Object(i.c)("host", a.hosts.DEFAULT_AAX_BID_HOST),
                d = a.cfg.LIB_CONFIG_PATH;
            try {
                if (0 <= ["http:", "https:"].indexOf(t.protocol)) n = t.protocol + "//" + t.hostname;
                else {
                    if (!(0 <= ["http:", "https:"].indexOf(e.protocol))) return null;
                    n = e.protocol + "//" + e.hostname
                }
            } catch (t) {
                if (t instanceof window.DOMException) return null;
                throw t
            }
            var l = {
                src: s.isSelfServePub ? c.u : s.pubID,
                u: encodeURIComponent(n)
            };
            if (s.isSelfServePub && (l.pubid = s.pubID), !l.src) return null;
            var f = Object.keys(l).map((function(t) {
                return "".concat(t, "=").concat(l[t])
            })).join("&");
            return "".concat(c.t).concat(u).concat(d, "?").concat(f)
        } catch (t) {
            return Object(o.b)(t, "buildLibraryConfigUrl", !0), null
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(0),
        o = n(7),
        i = n(8),
        c = n(3);

    function a(t, e) {
        var n, a, s, u, d, l;
        Object(r.l)(e.data) ? (Object(r.m)(e.data, "bidInfo") && (Object(r.m)(e.data.bidInfo, "src") ? (n = e.data.bidInfo.src, n = new URL(n).searchParams.get("b")) : Object(r.m)(e.data.bidInfo, "jsonp") && (d = e.data.bidInfo.jsonp, n = JSON.parse(d.substr(17, d.length - 20)).amzniid)), Object(r.m)(e.data, "renderData") && (a = (d = e.data.renderData).id, (Object(r.m)(d, "renderStart") || Object(r.m)(d, "renderEnd")) && (l = d.renderStart, d = d.renderEnd, l ? (t.renderTimes[a] = {
            timeStamp: l
        }, n && (t.renderTimes[a].bidId = n)) : d && Object(r.m)(t.renderTimes, a) && 0 !== t.renderTimes[a].timeStamp && (l = d - t.renderTimes[a].timeStamp, d = {
            _type: "iframeRender",
            c: "dtb",
            pid: i.b,
            crt: l
        }, (n = t.renderTimes[a].bidId ? t.renderTimes[a].bidId : n) ? Object(c.a)(n, d) : Object(c.b)(d)))), Object(r.m)(e.data, "blockData") && (l = e.data.blockData.blockInfo, t = {
            _type: "malwareBlock",
            c: "dtb",
            tpbr: 1,
            pid: i.b,
            info: l
        }, n ? Object(c.a)(n, t) : Object(c.b)(t)), Object(r.m)(e.data, "creativeFormatPixel") && (d = (a = (a = e).data.creativeFormatPixel).vendorId, l = void 0 === (l = a.pixelData) ? {} : l, d && ("creativeFormatBidPixel" === a.type && (u = {
            _type: "creativeFormatBidPixel",
            cfbp: 1,
            c: "dtb",
            vendorId: d
        }, (s = void 0 === (s = l.bi) ? "" : s) && (u.bi = s), Object(c.b)(u)), "creativeFormatImpressionPixel" === a.type && (s = l.bi, a = void 0 === (u = l.ii) ? "" : u, u = {
            _type: "creativeFormatImpressionPixel",
            cfip: 1,
            c: "dtb",
            vendorId: d,
            bp: void 0 === (u = l.bp) ? 0 : u,
            bpc: void 0 === (d = l.bpc) ? "USD" : d
        }, (l = void 0 === s ? "" : s) && (u.bi = l), a && (u.ii = a), Object(c.b)(u))))) : e.data && "adBlocked" === e.data && (n = {
            _type: "adBlockedPixel",
            c: "dtb",
            pid: i.b,
            abc: 1,
            u: Object(o.g)(window)
        }, Object(c.b)(n))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(3),
        o = n(1);

    function i(t) {
        try {
            if (!1 !== window.apstag.isGDPRRegion || "function" != typeof document.hasTrustToken) return void Object(r.c)("trustToken", "notSupported");
            t.trustTokenParameter = {
                type: "send-redemption-record",
                issuers: ["https://www.amazon.com"],
                refreshPolicy: "none",
                includeTimestampHeader: !0,
                signRequestData: "headers-only",
                additionalSigningData: "additional_signing_data"
            }, Object(r.c)("trustToken", "supported"), document.hasTrustToken("https://www.amazon.com").then((function(t) {
                t && Object(r.c)("trustToken", "present")
            })).catch((function() {
                Object(r.c)("trustToken", "absent")
            }))
        } catch (t) {
            Object(o.b)(t, "trustToken")
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return h
    })), (e = r = r || {}).LOCAL_STORAGE = "LOCAL", e.CSS_SELECTOR = "CSS", e.URL = "URL", (o = o || {}).EMAIL = "email";
    var r, o, i = n(4),
        c = n(1),
        a = n(13);

    function s(t, e) {
        var n, r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!r) {
            if (Array.isArray(t) || (r = function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t)) || e && t && "number" == typeof t.length) return r && (t = r), n = 0, {
                s: e = function() {},
                n: function() {
                    return n >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[n++]
                    }
                },
                e: function(t) {
                    throw t
                },
                f: e
            };
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, i = !0,
            c = !1;
        return {
            s: function() {
                r = r.call(t)
            },
            n: function() {
                var t = r.next();
                return i = t.done, t
            },
            e: function(t) {
                c = !0, o = t
            },
            f: function() {
                try {
                    i || null == r.return || r.return()
                } finally {
                    if (c) throw o
                }
            }
        }
    }

    function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function d(t) {
        return t instanceof window.HTMLInputElement || t instanceof window.HTMLTextAreaElement ? t.value : t.innerText
    }
    var l = "",
        f = function(t, e) {
            return "string" == typeof t && (e === o.EMAIL ? /\S+@\S+\.\S+/.test(t) || Object(a.c)(t) : 0 < t.trim().length)
        },
        b = function(t, e) {
            if (1 === (t = window.document.querySelectorAll(t)).length) {
                var n = d(t[0]);
                if (f(n, e)) return n
            }
            if (1 < t.length) {
                var r, o = null,
                    i = s(t);
                try {
                    for (i.s(); !(r = i.n()).done;) {
                        var c = d(r.value);
                        if (f(c, e)) {
                            if (null !== o && ("string" != typeof o || o !== c)) return l;
                            o = c
                        }
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                if ("string" == typeof o) return o
            }
            return l
        };

    function p(t, e) {
        var n, r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!r) {
            if (Array.isArray(t) || (r = function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return m(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(t, e) : void 0
                    }
                }(t)) || e && t && "number" == typeof t.length) return r && (t = r), n = 0, {
                s: e = function() {},
                n: function() {
                    return n >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[n++]
                    }
                },
                e: function(t) {
                    throw t
                },
                f: e
            };
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, i = !0,
            c = !1;
        return {
            s: function() {
                r = r.call(t)
            },
            n: function() {
                var t = r.next();
                return i = t.done, t
            },
            e: function(t) {
                c = !0, o = t
            },
            f: function() {
                try {
                    i || null == r.return || r.return()
                } finally {
                    if (c) throw o
                }
            }
        }
    }

    function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function g(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function h(t) {
        var e = window.apstag.sha256;
        if ("function" == typeof e)
            if ("1" === window.localStorage.getItem(i.e)) try {
                ! function() {
                    var t, e, n, o, i, a, s, u, d, m, h = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        O = 1 < arguments.length ? arguments[1] : void 0,
                        y = (t = h.methods || [], g(a = {}, r.LOCAL_STORAGE, 5), g(a, r.URL, 4), g(a, r.CSS_SELECTOR, 3), e = a, n = {}, t.forEach((function(t) {
                            n[t.method] = (n[t.method] || 0) + 1, t.priority = n[t.method]
                        })), t.sort((function(t, n) {
                            return t.method === n.method ? (t.priority || 0) > (n.priority || 0) ? 1 : -1 : e[t.method] > e[n.method] ? -1 : 1
                        })), p(h.methods || []));
                    try {
                        for (y.s(); !(i = y.n()).done;) {
                            var j = i.value,
                                S = j.method,
                                v = j.target,
                                w = j.type,
                                _ = l;
                            switch (S) {
                                case r.LOCAL_STORAGE:
                                    _ = function(t, e) {
                                        return (t = window.localStorage.getItem(t)) && f(t, e) ? t : l
                                    }(v, w);
                                    break;
                                case r.URL:
                                    _ = function(t, e) {
                                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : window.location.href;
                                        if (t = t.replace(/[\[\]]/g, "\\$&"), t = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(n), !Array.isArray(t) || "string" != typeof t[2] || 0 === t[2].length) return l;
                                        n = t[2].replace(/\+/g, " ");
                                        try {
                                            n = decodeURIComponent(n)
                                        } catch (t) {
                                            Object(c.b)(new Error("decodeURIComponent has attempted parsing an invalid string: ".concat(n)), "retrieveUrl", !0)
                                        }
                                        return f(n, e) ? n : l
                                    }(v, w);
                                    break;
                                case r.CSS_SELECTOR:
                                    o = j
                            }
                            if (0 < _.length) return void O({
                                value: _,
                                type: w
                            })
                        }
                    } catch (t) {
                        y.e(t)
                    } finally {
                        y.f()
                    }
                    o && "string" == typeof o.event && "string" == typeof o.eventTarget ? (s = (a = o).event, u = a.eventTarget, d = a.target, m = a.type, window.addEventListener(s, (function t(e) {
                        var n, r, o, i, c, a;
                        n = (e = {
                            e: e,
                            event: s,
                            eventTarget: u,
                            target: d,
                            type: m,
                            onDone: O,
                            listener: t
                        }).e, r = e.eventTarget, o = e.target, i = e.type, c = e.onDone, a = e.listener, e = e.event, "window" === r || n.target && "function" == typeof n.target.matches && n.target.matches(r) ? (n = b(o, i), "function" == typeof a && window.removeEventListener(e, a), c(!(n.length < 1) && {
                            value: n,
                            type: i
                        })) : c(!1)
                    }))) : O(!1)
                }(t, (function(t) {
                    !1 !== t && Object(a.e)({
                        hashedRecords: [{
                            type: t.type,
                            record: Object(a.c)(t.value) ? t.value : e(t.value)
                        }]
                    })
                }))
            } catch (t) {
                Object(c.b)(t, "retrieveRecords-retrieve", !0)
            } else Object(c.b)(new Error("GDPR consent not present/valid"), "retrieveRecords", !0);
            else Object(c.b)(new Error("SHA256 hashing library has not been loaded in which is required"), "retrieveRecords", !0)
    }
}, function(t, e, n) {
    t.exports = n(27)
}, function(e, n, t) {
    "use strict";
    t.r(n);
    var o = t(15),
        h = t(2),
        w = t(7),
        O = t(0),
        y = t(11),
        f = t(6),
        j = t(4),
        c = t(12),
        _ = t(18),
        E = t(16),
        v = t(3),
        S = t(1),
        T = t(9),
        I = t(17),
        r = t(21),
        p = t(5),
        m = t(8),
        D = t(14),
        i = t(20),
        A = t(10),
        a = t(19),
        s = t(13),
        u = t(24),
        d = t(25);

    function l(t) {
        return P(t) || C(t) || R(t) || b()
    }

    function b() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function R(t, e) {
        if (t) {
            if ("string" == typeof t) return k(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(t, e) : void 0
        }
    }

    function C(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }

    function P(t) {
        if (Array.isArray(t)) return k(t)
    }

    function k(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function z(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function x(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? z(Object(n), !0).forEach((function(e) {
                L(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function L(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function g(t) {
        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    try {
        var B = Object(r.b)(window.apstag);
        if (B) Object(S.b)(new Error("apstag has already loaded - preventing duplicate load"), "apstag-duplicateLoad", !0);
        else {
            Object(r.a)(window) && Object(S.b)(new Error("apstag was loaded and then destroyed"), "apstag-destroyReload", !0), window.apstagLOADED = !0;
            var N = Object(c.e)(window, "navigationStart"),
                q = (Object(v.c)("library", "apstag-".concat(j.l)), "ls"),
                F = Object(f.d)("console") || function() {
                    try {
                        return -1 !== window.location.href.indexOf("amzn_debug_console=1") && (q = "url", !0)
                    } catch (t) {
                        return !1
                    }
                }(),
                U = Object(f.d)("console_v2") || function() {
                    try {
                        return -1 !== window.location.href.indexOf("amzn_debug_console=2") && (q = "url", !0)
                    } catch (t) {
                        return !1
                    }
                }(),
                M;

            function H(t) {
                try {
                    t.ts = Date.now(), h.a.dispatch({
                        type: "LOG_EVENT",
                        event: t
                    })
                } catch (t) {
                    Object(S.b)(t, "_logEvent")
                }
            }

            function V(t) {
                function e(t) {
                    try {
                        var e;
                        h.a.getState().cmpFired || (h.a.dispatch({
                            type: "CMP_FIRED"
                        }), (e = document.createElement("iframe")).style.display = "none", e.src = t, document.body.appendChild(e))
                    } catch (t) {
                        Object(S.b)(t, "_doCookieMatch-ready")
                    }
                }
                try {
                    "loading" === document.readyState ? document.addEventListener && document.addEventListener("DOMContentLoaded", (function() {
                        e(t)
                    }), !1) : e(t)
                } catch (t) {
                    Object(S.b)(t, "_doCookieMatch")
                }
            }

            function G(t) {
                try {
                    var e = h.a.getState().cfg.COOKIE_MATCH_DELAY;
                    setTimeout((function() {
                        try {
                            Object(O.m)(t, "cmp") ? V(t.cmp) : Object(O.m)(t, "cmpjs") && Object(T.b)(t.cmpjs)
                        } catch (t) {
                            Object(S.b)(t, "_tryCookieMatch-setTimeout")
                        }
                    }), e)
                } catch (t) {
                    Object(S.b)(t, "_tryCookieMatch")
                }
            }

            function Q(t) {
                try {
                    return !h.a.getState().experiments.chunkRequests || 0 === h.a.getState().bidReqs[t.split("-")[0]].networkReqs.filter((function(t) {
                        return t.inFlight
                    })).length
                } catch (t) {
                    return Object(S.b)(t, "_isRequestComplete"), 1
                }
            }

            function X(t, e) {
                try {
                    !h.a.getState().bidReqs[t].hasCallbackExecuted && Q(t) && (h.a.dispatch({
                        type: "RECORD_CALLBACK",
                        fid: t
                    }), e())
                } catch (t) {
                    Object(S.b)(t, "_checkAndCallCallback")
                }
            }

            function J(t) {
                try {
                    h.a.getState().experiments.chunkRequests && h.a.dispatch({
                        type: "RECORD_NETWORK_EXCHANGE",
                        fid: t[0],
                        timestamp: Date.now(),
                        exchangeType: "response",
                        networkID: parseInt(t[1], 10)
                    })
                } catch (t) {
                    Object(S.b)(t, "_recordResponse")
                }
            }

            function K(t, r, e) {
                var o = e.split("-"),
                    n = {
                        url: t,
                        withCredentials: !0,
                        onload: function t(e) {
                            try {
                                J(o);
                                var n = e.responseText;
                                eval(n), X(o[0], r)
                            } catch (t) {
                                Object(S.b)(t, "_xhrBid-onload", !0)
                            }
                        },
                        onerror: function() {
                            try {
                                J(o), X(o[0], r)
                            } catch (t) {
                                Object(S.b)(t, "_xhrBid-onerror", !0)
                            }
                        }
                    };
                Object(u.a)(n);
                try {
                    Object(T.d)(n)
                } catch (t) {
                    Object(S.b)(t, "_xhrBid", !0), J(o), X(o[0], r)
                }
            }

            function W(t) {
                try {
                    var e = new Date;
                    return e.setTime(e.getTime() + 1e3 * t), e.toUTCString()
                } catch (t) {
                    return Object(S.b)(t, "_getCookieExpiry"), "Thu, 01 Jan 1970 00:00:00 GMT"
                }
            }

            function Y(t) {
                try {
                    Object(O.m)(t, "cr") && t.cr.forEach((function(t) {
                        document.cookie = "".concat(t.k, "=").concat(t.v, ";expires=").concat(-1 !== t.exp ? W(t.exp) : Object(O.g)(365), ";path=/;")
                    }))
                } catch (t) {
                    Object(S.b)(t, "_setFirstPartyCookies")
                }
            }

            function $(t) {
                try {
                    var e;
                    Object(O.m)(t, "cb") && (h.a.dispatch({
                        type: "RECORD_AAX_REQ_PROP",
                        bidReqID: t.cb,
                        key: "resTs",
                        value: Date.now()
                    }), e = new RegExp("e/dtb/bid.*cb=".concat(t.cb)), h.a.dispatch({
                        type: "RECORD_AAX_REQ_PROP",
                        bidReqID: t.cb,
                        key: "perf",
                        value: Object(c.c)(window, e)
                    })), Object(O.m)(t, "cfg") && h.a.dispatch({
                        type: "SET_CFG",
                        cfg: t.cfg
                    }), kt(t)
                } catch (t) {
                    Object(S.b)(t, "_doOnAaxResponse", !0)
                }
            }

            function Z(t) {
                try {
                    if (G(t), Y(t), Object(O.m)(t, "cfg") && localStorage.setItem(j.d, JSON.stringify(t.cfg)), Object(O.m)(t, "st") && Object(O.j)(t.st, 917) && h.a.getState().sync917) {
                        h.a.dispatch({
                            type: "SET_SYNC_917",
                            value: !1
                        });
                        try {
                            ht()
                        } catch (t) {
                            Object(S.b)(t, "__error-doFbSync__")
                        }
                    }
                    tt(t), Object(w.j)(t) || Object(v.g)()
                } catch (t) {
                    Object(S.b)(t, "_doAfterAaxResponse", !0)
                }
            }

            function tt(t) {
                try {
                    var e;
                    Object(O.m)(t, "fp") && (e = t.fp, Object(O.m)(e, "length") && e.forEach((function(t) {
                        var e = t.d || 0;
                        setTimeout((function() {
                            Object(v.f)(t.s)
                        }), e)
                    })))
                } catch (t) {
                    Object(S.b)(t, "fireAAXPixels")
                }
            }

            function et() {
                try {
                    h.a.getState().Q.forEach((function(t) {
                        var e = "init";
                        switch (t[0]) {
                            case "i":
                                e = "init";
                                break;
                            case "f":
                                e = "fetchBids";
                                break;
                            case "di":
                                e = "deleteId";
                                break;
                            case "ri":
                                e = "renewId";
                                break;
                            case "ui":
                                e = "updateId";
                                break;
                            default:
                                return
                        }
                        window.apstag[e].apply(null, t[1])
                    }))
                } catch (t) {
                    Object(S.b)(t, "_QHandler", !0)
                }
            }

            function nt(t) {
                try {
                    Object(O.l)(t) || (Object(S.c)("init.config", g(t), "object"), t = {
                        pubID: "err"
                    }), Object(A.b)(t.pubID, ["string", "number"]) ? "number" == typeof t.pubID && (t.pubID = "".concat(t.pubID)) : Object(S.c)("init.config.pubID", g(t.pubID), "string"), Object(A.b)(t.adServer, ["undefined", "string"]) || Object(S.c)("init.config.adServer", g(t.adServer), "string"), Object(A.a)(t.bidTimeout) || ("string" == typeof t.bidTimeout ? Object(S.b)({
                        name: "string-".concat(t.bidTimeout),
                        message: "init.config.bidTimeout was a non-numeric string '".concat(t.bidTimeout, "'")
                    }, "TypeError-init.config.bidTimeout", !0) : Object(S.c)("init.config.bidTimeout", g(t.bidTimeout), "number")), Object(A.b)(t.gdpr, ["undefined", "object"]) ? "object" === g(t.gdpr) && (Object(A.a)(t.gdpr.cmpTimeout) || (Object(A.b)(t.gdpr.cmpTimeout, ["string", "undefined"]) ? Object(S.b)({
                        name: "string-".concat(t.bidTimeout),
                        message: "init.config.gdpr.cmpTimeout was a non-numeric string '".concat(t.gdpr.cmpTimeout, "'")
                    }, "TypeError-init.config.gdpr.cmpTimeout", !0) : Object(S.c)("init.config.gdpr.cmpTimeout", g(t.gdpr.cmpTimeout), "number"))) : Object(S.c)("init.config.gdpr", g(t.gdpr), "object"), Object(O.m)(t, "params") && !Object(O.l)(t.params) ? Object(S.c)("init.config.params", g(t.params), "object") : Object(O.m)(t, "params") && Object.keys(t.params).forEach((function(e) {
                        return !(!Object(O.m)(t, "params") || "string" != typeof t.params[e] && "number" != typeof t.params[e] && (Object(O.k)(t.params[e]) ? !t.params[e].reduce((function(t, e) {
                            return t && ("string" == typeof e || "number" == typeof e)
                        }), !0) && (Object(S.b)({
                            name: "non-string array item",
                            message: "'init.config.params.".concat(e, " contains a non-string item")
                        }, "TypeError-init.config.params.".concat(e), !0), 1) : (Object(S.c)("init.config.params.".concat(e), g(t.params[e]), "string' or 'array"), 1)))
                    })), Object(O.m)(t, "params") && Object(O.m)(t.params, "us_privacy") && "string" == typeof t.params.us_privacy && j.A.test(t.params.us_privacy) ? Object(v.c)("ccpa", "y") : Object(O.m)(t, "params") && Object(O.m)(t.params, "us_privacy") ? Object(v.c)("ccpa", "i") : Object(v.c)("ccpa", "n"), Object(O.m)(t, "blockedBidders") && !Object(O.k)(t.blockedBidders) ? Object(S.c)("init.config.blockedBidders", g(t.blockedBidders), "array") : Object(O.m)(t, "blockedBidders") && Object(O.k)(t.blockedBidders) && (t.blockedBidders.reduce((function(t, e) {
                        return t && ("string" == typeof e || "number" == typeof e)
                    }), !0) || Object(S.b)({
                        name: "non-string array item",
                        message: "'init.config.blockedBidders contains a non-string item"
                    }, "TypeError-init.config.blockedBidders", !0)), Object(O.m)(t, "blockedBidders") ? Object(v.c)("blockedBidders-init", "y") : Object(v.c)("blockedBidders-init", "n"), Object(A.b)(t.simplerGPT, ["undefined", "boolean"]) || Object(S.c)("init.config.simplerGPT", g(t.simplerGPT), "boolean"), t.simplerGPT ? Object(v.c)("simplerGpt", "y") : Object(v.c)("simplerGpt", "n"), Object(A.b)(t.deals, ["undefined", "boolean"]) || Object(S.c)("init.config.deals", g(t.deals), "boolean"), t.deals ? Object(v.c)("deals", "y") : Object(v.c)("deals", "n"), Object(A.b)(t.schain, ["undefined", "object"]) && null !== t.schain ? Object(O.m)(t, "schain") && !Object(m.h)(t.schain) && delete t.schain : (Object(S.c)("init.config.schain", g(t.schain), "object"), delete t.schain), Object(O.m)(t, "schain") ? Object(v.c)("schain", "y") : Object(v.c)("schain", "n"), Object(A.b)(t.useSafeFrames, ["undefined", "boolean"]) || (Object(S.c)("init.config.useSafeFrames", g(t.useSafeFrames), "boolean"), delete t.useSafeFrames), t.useSafeFrames ? Object(v.c)("useSafeFrames", "y") : Object(v.c)("useSafeFrames", "n")
                } catch (e) {
                    Object(S.b)(e, "_validateAndStoreConfig-validateConfig")
                }
                try {
                    var e = h.a.getState().config;
                    Object(O.m)(e, "pubID") && Object(O.m)(t, "pubID") && e.pubID !== t.pubID && Object(S.b)(new Error("`apstag.init` was called multiple times with different pubIDs (".concat(e.pubID, " then ").concat(t.pubID, ")")), "_validateAndStoreConfig-diffPubId", !0), h.a.dispatch({
                        type: "SET_CONFIG",
                        config: t,
                        defaultCmpTimeout: h.a.getState().cfg.GDPR_CMP_TIMEOUT
                    })
                } catch (e) {
                    Object(S.b)(e, "_validateAndStoreConfig", !0)
                }
            }

            function rt(t) {
                try {
                    var e = t.slotID,
                        n = !1;
                    if (Object(O.m)(t.bidConfig, "amznbid") && "o_" === t.bidConfig.amznbid.slice(0, 2) && (n = !0), Object(O.m)(t.bidConfig, "mediaType") && "v" === t.bidConfig.mediaType && !1 === n) return;
                    if (!window.IntersectionObserver && n) return void Object(S.b)({
                        name: "IntersectionObserver",
                        message: "IntersectionObserver not supported "
                    }, "_safeApplySlotTargeting");
                    if (!p.a.hasAdServerObjectLoaded()) return void Object(S.a)("displayAdServer Object hasn't been defined", !0);
                    if (!p.a.isCommandQueueDefined()) return void Object(S.a)("displayAdServer Object's cmd queue hasn't been defined", !0);
                    p.a.hasAdServerObjectLoaded() ? null !== ot(e) ? pt(t) : Object(S.a)("".concat(e, " isn't defined when trying to set amazon bid!")) : p.a.cmdQueuePush((function() {
                        rt(t)
                    }))
                } catch (t) {
                    Object(S.b)(t, "_safeApplySlotTargeting", !0)
                }
            }

            function ot(t) {
                var e = null;
                try {
                    e = Object(y.b)(p.a).filter((function(e) {
                        return e.slotID === t
                    }))[0] || null
                } catch (e) {
                    Object(S.b)(e, "_getAdServerSlot")
                }
                return e
            }

            function it(t) {
                try {
                    var e = h.a.getState().targetingKeys[t.slotID];
                    p.a.hasAdServerObjectLoaded() && Object(O.k)(e) && e.forEach((function(e) {
                        return 0 < t.getTargeting(e).length && t.clearTargeting(e)
                    }))
                } catch (e) {
                    Object(S.b)(e, "_clearTargetingFromSlot", !0)
                }
            }

            function ct(t) {
                try {
                    var e;
                    !Object(O.m)(h.a.getState().slotBids, t.slotID) || (e = h.a.getState().slotBids[t.slotID].filter((function(t) {
                        return t.bidState === j.c.set
                    }))[0]) && e.bidState === j.c.set && h.a.dispatch({
                        type: "BID_STATE_CHANGE",
                        slotID: t.slotID,
                        _targetingSetID: e._targetingSetID,
                        bidState: j.c.exposed
                    })
                } catch (t) {
                    Object(S.b)(t, "_clearBidSetOnSlot", !0)
                }
            }

            function at(t, e) {
                try {
                    return t.map((function(t) {
                        return Object(O.j)(e, t)
                    })).filter((function(t) {
                        return t
                    })).length === t.length
                } catch (t) {
                    return void Object(S.b)(t, "_hasAllItemsInArray")
                }
            }

            function st() {
                var t = {};
                try {
                    Object.keys(h.a.getState().slotBids).forEach((function(e) {
                        var n = h.a.getState().slotBids[e].filter(m.f);
                        0 < n.length && (t[e] = n.map((function(t) {
                            var e = h.a.getState().AAXReqs.filter((function(e) {
                                    return e.bidReqID === t.bidReqID
                                })),
                                n = 0;
                            return 0 < e.length ? n = e[0].rqTs : (e = h.a.getState().AAXReqs.map((function(t) {
                                return t.bidReqID
                            })).join(", "), Object(S.b)({
                                name: "BidError",
                                message: "Request not found: ".concat(t.bidReqID, " not found in ").concat(e)
                            }, "_getCurrentSlotBids-noRequest")), {
                                rqTs: n,
                                bid: t
                            }
                        })).reduce((function(t, e) {
                            return t.rqTs > e.rqTs ? t : e
                        })).bid)
                    }))
                } catch (t) {
                    Object(S.b)(t, "_getCurrentSlotBids", !0)
                }
                return t
            }

            function ut(t, e) {
                try {
                    return Object(O.k)(h.a.getState().targetingKeys[t]) ? e ? ["amzniid_sp"] : h.a.getState().targetingKeys[t].filter((function(t) {
                        return -1 < t.indexOf("amzniid") && t.indexOf("amzniid_sp") < 0
                    })) : ["amzniid"]
                } catch (t) {
                    return Object(S.b)(t, "_getAllBidIdKeys"), []
                }
            }

            function dt(t, e) {
                var n, r;
                try {
                    var o = h.a.getState().slotBids;
                    Object.keys(o).forEach((function(i) {
                        o[i].forEach((function(o) {
                            ut(i, e).forEach((function(e) {
                                o.bidConfig[e] === t && (n = o, "amzniid_sp" === e ? r = "sp" : "amzniid" !== e && (r = e.substr(0, e.indexOf("amzniid"))))
                            }))
                        }))
                    }))
                } catch (t) {
                    Object(S.b)(t, "_findSlotBidByBidID", !0)
                }
                return {
                    slotBid: n,
                    dealId: r
                }
            }

            function lt(t, e, n) {
                var r = "";
                try {
                    e.bidConfig[n + "amzniid"] === t && (r = n.split("_").pop().trim())
                } catch (t) {
                    Object(S.b)(t, "_getPMPBidSize")
                }
                return r
            }

            function bt(t) {
                try {
                    if (void 0 === t.slots) return [];
                    var e = {};
                    return t.slots.forEach((function(t) {
                        "video" !== t.mediaType && "v" !== t.mediaType && "v" !== t.mediaType_sp ? e[t.slotID] = new m.a(t) : (0 <= t.slotID.indexOf("rsv-") && (t = {
                            slotID: t.slotID.substring(4),
                            r_amznbid: t.amznbid,
                            r_amzniid: t.amzniid,
                            r_amznp: t.amznp,
                            mediaType: "video",
                            targeting: ["r_amznbid", "r_amzniid", "r_amznp"],
                            amznsz: t.amznsz,
                            size: t.size,
                            crid: t.crid,
                            meta: t.meta
                        }), Object(O.m)(e, t.slotID) ? t.targeting.forEach((function(n) {
                            e[t.slotID].bidConfig[n] = t[n], -1 === e[t.slotID].bidConfig.targeting.indexOf(n) && e[t.slotID].bidConfig.targeting.push(n)
                        })) : e[t.slotID] = new m.a(t))
                    })), Object.keys(e).map((function(t) {
                        return e[t]
                    }))
                } catch (t) {
                    return Object(S.b)(t, "_mergeVideoBids"), []
                }
            }

            function ft(t) {
                var e = bt(t),
                    n = [];
                try {
                    n = e.map((function(e) {
                        return e.bidReqID = t.cb, e.host = t.host, e.ev = t.ev, e.cfe = t.cfe, e
                    }))
                } catch (e) {
                    Object(S.b)(e, "_convertAaxResponse")
                }
                return n
            }

            function pt(t) {
                try {
                    var e = t.slotID,
                        n = t._targetingSetID;
                    if (t.bidState === j.c.set) return;
                    var r, o = ot(e);
                    null !== o && (ct(o), r = t.newBidObject, Object.keys(r.targeting).forEach((function(t) {
                        return o.setTargeting(t, r.targeting[t])
                    })), h.a.dispatch({
                        type: "BID_STATE_CHANGE",
                        slotID: e,
                        _targetingSetID: n,
                        bidState: j.c.set,
                        ts: Date.now()
                    }))
                } catch (t) {
                    Object(S.b)(t, "_applyTargetingToAdServerSlot", !0)
                }
            }

            function mt(t) {
                try {
                    var e = st();
                    t.forEach((function(t) {
                        e[t] && rt(e[t])
                    }))
                } catch (t) {
                    Object(S.b)(t, "_applySuppliedSlotBidsToAdServerObject", !0)
                }
            }

            function gt() {
                try {
                    var t = st();
                    Object.keys(t).forEach((function(e) {
                        return rt(t[e])
                    }))
                } catch (t) {
                    Object(S.b)(t, "_applyAllCurrentSlotBidsTargetingToAdServerObject", !0)
                }
            }

            function yt(t) {
                try {
                    t ? (Object(v.c)("targeting", "setDisplayBids-list"), mt(t)) : (Object(v.c)("targeting", "setDisplayBids-all"), gt()), h.a.getState().displayAdServer.slotRenderEndedSet || (p.a.cmdQueuePush((function() {
                        try {
                            p.a.slotRenderEndedEvent((function(t) {
                                try {
                                    it(t), ct(t)
                                } catch (t) {
                                    Object(S.b)(t, "_applySlotTargeting-cmdQueue-slotCb", !0)
                                }
                            }))
                        } catch (t) {
                            Object(S.b)(t, "_applySlotTargeting-cmdQueue", !0)
                        }
                    })), h.a.dispatch({
                        type: "SLOT_RENDER_ENDED_SET"
                    }))
                } catch (t) {
                    Object(S.b)(t, "_applySlotTargeting", !0)
                }
            }

            function ht() {
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    e = "1881141382166183";

                function n(t) {
                    try {
                        var e = JSON.parse(t),
                            n = e.fbToken,
                            r = new Date(parseInt(e.expAfter, 10)).toUTCString();
                        document.cookie = "aps_ext_917=".concat(n, "; expires=").concat(r)
                    } catch (t) {
                        Object(S.b)(t, "_doFbSync-setFbCookie")
                    }
                }

                function r(e) {
                    try {
                        ! function(t, e, n) {
                            try {
                                var r = function(t, e) {
                                        try {
                                            return "".concat("https://www.facebook.com/audiencenetwork/token/update", "?partner=").concat(encodeURIComponent(t), "&vr_token=").concat(encodeURIComponent(e))
                                        } catch (t) {
                                            return Object(S.b)(t, "_doFbSync-getUpdateUrl"), ""
                                        }
                                    }(t, e),
                                    o = n;
                                try {
                                    var i = {
                                        url: r,
                                        withCredentials: !0,
                                        onload: function(t) {
                                            return o(t.responseText)
                                        }
                                    };
                                    Object(T.d)(i)
                                } catch (t) {
                                    Object(S.b)(t, "_doFbSync-sendTokenRequest")
                                }
                            } catch (t) {
                                Object(S.b)(t, "_doFbSync-getV4Token")
                            }
                        }(e, function() {
                            try {
                                for (var e = "VR_", n = 0; n < 197; ++n) e += t.charAt(Math.floor(Math.random() * t.length));
                                return e
                            } catch (e) {
                                return Object(S.b)(e, "_doFbSync-getVrToken"), ""
                            }
                        }(), n)
                    } catch (e) {
                        Object(S.b)(e, "_doFbSync-getTokenResponse")
                    }
                }
                try {
                    "complete" === document.readyState ? r(e) : window.addEventListener("load", (function() {
                        r(e)
                    }))
                } catch (e) {
                    Object(S.b)(e, "_doFbSync")
                }
            }

            function Ot(t, e) {
                function n() {
                    if (!o)
                        if (20 <= i++) Object(S.b)({
                            name: "LoopError",
                            message: "Too many attempts to append to document.body"
                        }, "_safeDocumentBodyAppendChild-callback-loops", !0);
                        else {
                            try {
                                if (t && t.body && null !== t.body && "function" == typeof t.body.appendChild) return t.body.appendChild(e), r(), void(o = !0)
                            } catch (t) {
                                Object(S.b)(t, "_safeDocumentBodyAppendChild-callback")
                            }
                            setTimeout(n, 100)
                        }
                }
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {},
                    o = !1,
                    i = 0;
                try {
                    "complete" === t.readyState || "interactive" === t.readyState ? (Object(v.c)("appended", "sync"), n()) : (Object(v.c)("appended", "async"), t.addEventListener("DOMContentLoaded", n))
                } catch (t) {
                    Object(S.b)(t, "_safeDocumentBodyAppendChild")
                }
            }

            function jt(t) {
                try {
                    var e = "".concat(t.host).concat(h.a.getState().cfg.DTB_PATH, "/imp"),
                        n = "".concat(t.host).concat(h.a.getState().cfg.DTB_PATH, "/adm");
                    return t.cfe || t.isAmp || t.isSf ? n : e
                } catch (t) {
                    return Object(S.b)(t, "determineCreativeFetchEndpoint"), ""
                }
            }

            function vt(t) {
                try {
                    var e, n = "?b=".concat(t.bidID, "&rnd=").concat(Object(O.e)());
                    return Object(O.m)(t, "pp") && (n += "&pp=".concat(t.pp)), Object(O.m)(t, "amznp") && (n += "&p=".concat(t.amznp)), Object(O.m)(t, "crID") && (n += "&crid=".concat(t.crID)), Object(O.m)(t, "isSharedPMP") && !0 === t.isSharedPMP && (n += "&sp=true"), Object(a.d)() && (n += "&ep=%7B%22ce%22%3A%221%22%7D"), e = jt(t), (t.fif ? "".concat(e, "j") : "".concat(e, "i")).concat(n)
                } catch (t) {
                    return Object(S.b)(t, "_creativeURL"), ""
                }
            }

            function St(t) {
                try {
                    var e = t.doc.createElement("iframe");
                    return e.frameBorder = "0", e.marginHeight = "0", e.marginWidth = "0", e.style.marginTop = "0", e.style.marginLeft = "0", e.scrolling = "no", t.inheritSize ? (e.style.width = "100%", e.style.height = "100%") : (e.style.width = "".concat(t.sizes[0], "px"), e.style.height = "".concat(t.sizes[1], "px")), e
                } catch (t) {
                    return Object(S.b)(t, "_baseIframe"), window.document.createElement("iframe")
                }
            }

            function wt(t) {
                try {
                    if (Object(O.m)(t, "bidType")) {
                        var e, n = t.kvMap;
                        switch (t.bidType) {
                            case "sharedPMP":
                                return {
                                    bidID: n.amzniid_sp[0],
                                    pp: n.amznbid_sp[0],
                                    sizes: n.amznsz_sp[0].split("x"),
                                    amznp: n.amznp_sp[0],
                                    inheritSize: t.inheritSize,
                                    isSharedPMP: t.isSharedPMP
                                };
                            case "preferredPMP":
                                if (Object(i.a)(t) && Object(O.m)(t, "amzndeal")) return e = t.amzndeal.split("_").pop().trim(), {
                                    bidID: n["".concat(t.amzndeal, "amzniid")][0],
                                    sizes: ie(e)
                                };
                                break;
                            case "openAuction":
                                if (Object(i.a)(t)) return {
                                    bidID: n.amzniid[0],
                                    pp: Object(w.c)(n.amznbid[0]),
                                    amznp: n.amznp[0],
                                    inheritSize: t.inheritSize,
                                    sizes: n.amznsz[0].split("x")
                                };
                                if (Object(i.b)(t)) return {
                                    bidID: t.amzniid,
                                    pp: Object(w.c)(t.amznbid),
                                    amznp: t.amznp,
                                    sizes: t.amznsz.split("x")
                                };
                                break;
                            default:
                                Object(S.b)({
                                    name: "Invalid AMP Bid Type: ".concat(t.bidType),
                                    message: "No valid AMP bid type"
                                }, "getAmpAdData-invalidBidType")
                        }
                    }
                } catch (t) {
                    Object(S.b)(t, "getAmpAdData")
                }
                return {
                    bidID: "ERROR",
                    sizes: []
                }
            }

            function _t(t, e) {
                try {
                    var n = null;
                    if (void 0 !== e && (Object(O.m)(e, "ampEnv") && e.ampEnv || Object(O.m)(e, "sfEnv") && e.sfEnv) && (n = e, Object(O.m)(e, "bidType") && "sharedPMP" === e.bidType ? n.isSharedPMP = !0 : n.isSharedPMP = !1, n.document = t, n.amznhost = n.kvMap.amznhost[0]), re(t) && ((n = t).bidType = "openAuction", n.ampEnv = !0), null === n) return void Object(S.b)(new Error("Invalid AMP parameters"), "_renderAmpImpression-invalidParams", !0);
                    var r = wt(n);
                    if ("ERROR" === r.bidID) return;
                    if (r.doc = n.document, r.host = n.amznhost.replace("http://", "https://"), r.adID = "amznad".concat(Object(O.e)()), r.isAmp = n.ampEnv, r.isSf = Object(_.c)(window), h.a.getState().aaxViewabilityEnabled) return void se(r, r.doc);
                    Tt(r)
                } catch (t) {
                    Object(S.b)(t, "_renderAmpImpression")
                }
            }

            function Et(t) {
                var e, n = "unknown";

                function r(r) {
                    try {
                        if (r && (t.hasTimedOut = !0), r && !t.hasRendered && Object(S.b)({
                                name: "RenderTimeout",
                                message: "renderAd was called from timeout. fifFlowMethod: ".concat(n)
                            }, "__loadAdIntoFriendlyIframe-renderAd-timeout-isOutstream:".concat(t.isOutstream)), null === e.contentDocument) return void Object(S.b)({
                            name: "NoDocument",
                            message: "iframe.contentDocument was null inside renderAd. isFromTimeout: ".concat(r, ". fifFlowMethod: ").concat(n)
                        }, "__loadAdIntoFriendlyIframe-renderAd-noDocument-isOutstream:".concat(t.isOutstream), !0);
                        if (t.hasRendered && !t.hasTimedOut) return void Object(S.b)({
                            name: "DupeRender",
                            message: "Render was called twice"
                        }, "__loadAdIntoFriendlyIframe-renderAd-rerender-isOutstream:".concat(t.isOutstream), !0);
                        if (t.hasRendered) return;
                        t.hasRendered = !0, e.contentDocument.open(), e.contentDocument.write(t.html), e.contentDocument.close()
                    } catch (r) {
                        Object(S.b)(r, "__loadAdIntoFriendlyIframe-renderAd-isOutstream:".concat(t.isOutstream))
                    }
                }

                function o() {
                    var o = r.bind(null, !1);
                    try {
                        n = null !== e.contentDocument && Object(O.j)(["complete", "interactive"], e.contentDocument.readyState) ? (o(), "doc-ready") : null !== e.contentDocument && "uninitialized" !== e.contentDocument.readyState ? (e.contentDocument.addEventListener("DOMContentLoaded", o), "dom-listener") : (e.addEventListener("load", o), "iframe-listener"), Object(v.c)("fifFlow", n), setTimeout(r, 1e3, !0)
                    } catch (o) {
                        Object(S.b)(o, "_loadAdIntoFriendlyIframe-setAttributes-isOutstream:".concat(t.isOutstream))
                    }
                }
                try {
                    if (Object(v.c)("iframe", "friendly"), void 0 === t.html) throw new Error("No HTML available for ad, most likely the creative has expired");
                    if (t = x({
                            hasRendered: !1,
                            hasTimedOut: !1
                        }, t), (e = St(t)).id = "apstag-f-iframe-".concat(Object(O.e)()), t.isOutstream) try {
                        var i = Object(E.d)(document, t);
                        if (void 0 === i) throw new Error("gpt video div element is undefined");
                        i && i.firstElementChild && (i.firstElementChild.style.display = "none");
                        var c = Object(E.f)(t.sizes);
                        return Object(E.a)(c, i), Object(E.e)(c, e), o(), void Object(E.g)(c, e, t.bidID)
                    } catch (o) {
                        Object(S.b)(o, "_loadAdIntoFriendlyIframe-outstream", !0)
                    } else Ot(t.doc, e, o)
                } catch (o) {
                    Object(S.b)(o, "_loadAdIntoFriendlyIframe", !0)
                }
            }

            function Tt(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                        states: {
                            csmLoaded: !1,
                            iframeLoaded: !1,
                            shouldRunViewability: !1
                        }
                    },
                    n = 2 < arguments.length ? arguments[2] : void 0;
                try {
                    Object(v.c)("iframe", "unfriendly");
                    var r, o = St(t);
                    o.id = t.adID, o.setAttribute("sandbox", "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"), Object(f.d)("fake_bids") ? (r = '<body style="background-color: #FF9900;">'.concat(50 < parseInt(t.sizes[1], 10) ? "<h3>apstag Test Creative</h3>" : "", "<h4>amzniid - ").concat(t.bidID, " | amznbid: ").concat(t.pp, " | size: ").concat(t.sizes.join("x"), "</h4></body>"), o.src = "javascript:'".concat(r, "'")) : o.src = vt(t), (t.isAmp && t.isSf && Object(_.b)(window) || t.isSf && !t.isAmp && !t.inheritSize) && Object(_.a)(t.sizes, window), Ot(t.doc, o), (e.iframe = o).onload = function() {
                        e.states.iframeLoaded = !0, n && n()
                    }
                } catch (t) {
                    Object(S.b)(t, "_loadAdIntoUnfriendlyIframe", !0)
                }
            }

            function It(t) {
                var e, n = t.states,
                    r = t.doc,
                    o = t.bidID;
                t = t.iframe;
                try {
                    if (Object(O.a)(n)) return;
                    n.shouldRunViewability = !1, Object(O.m)(window, "amzncsm") ? e = window.amzncsm : void 0 !== r && null !== r.defaultView && Object(O.m)(r.defaultView, "amzncsm") && (e = r.defaultView.amzncsm), void 0 !== r && void 0 !== e && Object(O.m)(e, "rmD") && (e.host = Object(f.c)("host", h.a.getState().hosts.DEFAULT_AAX_PIXEL_HOST), e.rmD(t, o, r.defaultView, r, h.a.getState().config.pubID))
                } catch (t) {
                    Object(S.b)(t, "_triggerViewability")
                }
            }

            function Dt(t, e) {
                return function(n) {
                    try {
                        var r = Object(m.e)(e.slots),
                            o = Object.keys(r),
                            i = [],
                            c = (n && (h.a.dispatch({
                                type: "RECORD_AAX_REQ_PROP",
                                bidReqID: e.bidReqID,
                                key: "timedOutAt",
                                value: Date.now()
                            }), h.a.getState().experiments.chunkRequests && h.a.dispatch({
                                type: "RECORD_TIMEOUT",
                                fid: e.bidReqID,
                                timeOut: Date.now()
                            })), o.forEach((function(t) {
                                Object(O.m)(r, t) && (t = r[t], Object(m.g)(h.a.getState(), p.a) || Object(O.m)(t.bidConfig, "amznbid") ? Object(O.m)(t.bidConfig, "amznp") || (t.bidConfig.amznp = "") : (Object(v.c)("unusedDeal", t.mediaType), "video" !== t.mediaType && (t.bidConfig.targeting.unshift("amznsz"), t.bidConfig.amznsz = "0x0"), t.bidConfig.targeting.unshift("amzniid", "amznbid", "amznp"), t.bidConfig.amzniid = "", t.bidConfig.amznbid = j.v.noBid, t.bidConfig.amznp = j.v.noBid), i.push(t))
                            })), p.a.isSupported && (i = Object(m.c)(i, e, n)), {
                                fromTimeout: n
                            }),
                            a = Object(m.g)(h.a.getState(), p.a);
                        try {
                            t(i.map((function(t) {
                                return a ? t.newBidObject : t.bidObject
                            })), c)
                        } catch (o) {
                            console.error(o)
                        }
                    } catch (o) {
                        Object(S.b)(o, "_bidCallbackHandler", !0);
                        try {
                            t([], {
                                fromTimeout: n,
                                fromError: !0
                            })
                        } catch (o) {
                            console.error(o)
                        }
                    }
                }
            }

            function At(t, e) {
                try {
                    var n, r;
                    e.inheritSize ? Object(v.c)("creativeSize", "inherited") : (r = t.defaultView && t.defaultView.frameElement ? (n = t.defaultView.frameElement, "defaultView") : (n = window.frameElement, "frameElement"), Object(v.c)("resizeIframe", r), Object(v.c)("creativeSize", "resized"), null !== n ? (n.style.width = "".concat(e.sizes[0], "px"), n.style.height = "".concat(e.sizes[1], "px")) : Object(S.b)({
                        name: "FrameNotFound",
                        message: "'win' is 'null'. Method used: ".concat(r)
                    }, "_resizeIframe-win"))
                } catch (t) {
                    Object(S.b)(t, "_resizeIframe")
                }
            }

            function Rt(t) {
                try {
                    return "".concat(t[0], "x").concat(t[1])
                } catch (t) {
                    return Object(S.b)(t, "_sizeArrayToSring"), "x"
                }
            }

            function Ct(t) {
                try {
                    return 1 === t.length ? Rt(t[0]) : Rt(t[Math.floor(t.length * Math.random())])
                } catch (t) {
                    return Object(S.b)(t, "_pickRandomSizeForMockBid", !0), ""
                }
            }

            function Pt(t) {
                try {
                    var e, n = Object(f.c)("host", h.a.getState().hosts.DEFAULT_AAX_BID_HOST),
                        r = Object(w.g)(window),
                        o = t.bidReqID,
                        i = Object(O.h)(window),
                        c = Object(f.c)("testBidTimeout", 200);
                    h.a.dispatch({
                        type: "RECORD_AAX_REQUEST",
                        data: {
                            bidConfig: t,
                            timeout: c,
                            bidReqID: o,
                            ws: i,
                            url: r,
                            rqTs: Date.now()
                        }
                    }), e = t.slots.map((function(t) {
                        var e = Ct(t.sizes),
                            n = (e = "testDeal".concat(Object(O.e)(), "_").concat(e), "testDealIi-".concat(Object(O.e)())),
                            r = Ct(t.sizes);
                        L(r = {
                            slotID: t.slotID,
                            crid: "".concat(j.p.crid, "-").concat(Object(O.e)()),
                            size: r,
                            amzniid: "".concat(j.p.amzniid, "-").concat(Object(O.e)()),
                            amznbid: j.p.amznbid,
                            amznp: j.p.amznp,
                            amznsz: r,
                            amzniid_sp: "".concat(j.p.amzniid, "-").concat(Object(O.e)()),
                            amznbid_sp: "".concat(j.p.amznbid, "SP"),
                            amznp_sp: "".concat(j.p.amznp, "SP"),
                            amznsz_sp: Ct(t.sizes),
                            amzndeals: [e]
                        }, "".concat(e, "amzniid"), n), L(r, "mediaType", "d"), L(r, "meta", ["slotID", "mediaType", "size"]), L(r, "targeting", ["amzniid", "amznbid", "amznp", "amznsz", "amzniid_sp", "amznbid_sp", "amznp_sp", "amznsz_sp", "amzndeal_sp", "amzndeals", "".concat(e, "amzniid")]), n = r;
                        return "video" === t.mediaType && (n.mediaType = "video", n.amznbid = "v_".concat(n.amznbid)), n
                    })), setTimeout((function() {
                        window.apstag.bids({
                            slots: e,
                            host: n,
                            status: "ok",
                            cb: o
                        })
                    }), c)
                } catch (t) {
                    Object(S.b)(t, "_doMockBid", !0)
                }
            }

            function kt(t) {
                try {
                    var e, n, r, o = h.a.getState().AAXReqs.filter((function(e) {
                        return e.bidReqID === t.cb
                    }))[0];
                    o && o.bidConfig && o.bidConfig.slots && (e = o.bidConfig.slots.filter(y.d).map((function(t) {
                        return t.slotID
                    })), n = Object(O.m)(t, "slots") ? t.slots.map((function(t) {
                        return t.slotID
                    })) : [], r = e.filter((function(t) {
                        return !Object(O.j)(n, t)
                    })), h.a.dispatch({
                        type: "NO_BID_ON_ADSERVER_SLOTS",
                        slotIDs: r
                    }), p.a.hasAdServerObjectLoaded() ? Lt() : p.a.isCommandQueueDefined() && p.a.cmdQueuePush((function() {
                        Lt()
                    })))
                } catch (e) {
                    Object(S.b)(e, "_determineNoBidStateForAdServerObject")
                }
            }

            function zt(t) {
                return Object(O.j)(h.a.getState().AAXReqs.filter((function(t) {
                    return !t.resTs
                })).map((function(t) {
                    return t.bidConfig.slots
                })).reduce((function(t, e) {
                    return t.concat(e)
                }), []).map(y.c), t)
            }

            function xt(t) {
                try {
                    var e = t.getTargeting("amznbid");
                    return 0 < e.length && 2 < e[0].length
                } catch (t) {
                    return Object(S.b)(t, "_isRealAmznbidTargetingSetOnSlot"), 1
                }
            }

            function Lt() {
                try {
                    p.a.hasAdServerObjectLoaded() && "1" === p.a.getTargeting("amznbid")[0] && Nt(), Object(y.b)(p.a).forEach((function(t) {
                        !Object(O.j)(h.a.getState().displayAdServer.noBidSlotIDs, t.slotID) || zt(t.slotID) || xt(t) || "2" === t.getTargeting("amznbid")[0] || Bt("noBid", t)
                    }))
                } catch (t) {
                    Object(S.b)(t, "_applyNoBidFromAAXState")
                }
            }

            function Bt(t, e) {
                j.w.forEach((function(n) {
                    return e.setTargeting(n, j.v[t])
                }))
            }

            function Nt() {
                j.w.forEach((function(t) {
                    return p.a.clearTargeting(t)
                }))
            }

            function qt(t) {
                try {
                    var e = {
                        _type: "dupePixel",
                        dd: Date.now() - t.timing.renderTime
                    };
                    Object(v.a)(t.bidConfig.amzniid, e)
                } catch (t) {
                    Object(S.b)(t, "_sendDupeBidPixel")
                }
            }
            Object(O.i)() && (!(M = localStorage.getItem(j.d)) || null !== (M = JSON.parse(M)) && h.a.dispatch({
                type: "SET_CFG",
                cfg: M
            })), Object(a.c)();
            var Ft = 0,
                Ut;

            function Mt() {
                try {
                    if (!Object(O.m)(window, "googletag") || !Object(O.m)(window.googletag, "cmd")) return void(++Ft < 5 && setTimeout(Mt, 100));
                    (new I.a).cmdQueuePush((function() {
                        try {
                            window.googletag.pubads().addEventListener("slotRequested", (function(t) {
                                try {
                                    var e = t.slot;
                                    h.a.dispatch({
                                        type: "LOG_GAM_EVENT",
                                        event: x(x({}, new I.b(e).slotConfig), {}, {
                                            ts: Date.now(),
                                            targeting: e.getTargetingMap()
                                        })
                                    })
                                } catch (t) {
                                    Object(S.b)(t, "_initializeSlotRequestedEventListener-cmdQueue-listener")
                                }
                            }))
                        } catch (t) {
                            Object(S.b)(t, "_initializeSlotRequestedEventListener-cmdQueue")
                        }
                    }))
                } catch (t) {
                    Object(S.b)(t, "_initializeSlotRequestedEventListener")
                }
            }

            function Ht(t) {
                try {
                    var e = t.AAXReqs.slice(t.gamSlotRenderPixel.aaxReqOffset).reduce((function(t, e) {
                            return t.concat(e.bidConfig.slots)
                        }), []).map((function(t) {
                            return x(x({}, t), {}, {
                                type: "a"
                            })
                        })).filter((function(t) {
                            return "video" !== t.mediaType
                        })),
                        n = t.gamSlotFetchLog.slice(t.gamSlotRenderPixel.gamSlotFetchLogOffset).map((function(t) {
                            return x(x({}, t), {}, {
                                type: "g"
                            })
                        })),
                        r = [].concat(l(e), l(n)).reduce((function(t, e) {
                            return void 0 === t[e.slotID] && (t[e.slotID] = {
                                sd: e.slotID,
                                a: {
                                    c: 0
                                },
                                g: {
                                    c: 0
                                }
                            }), t[e.slotID][e.type].c++, t[e.slotID][e.type].s = e.sizes, t[e.slotID][e.type].sn = e.slotName || "", t
                        }), {});
                    return Object.keys(r).map((function(t) {
                        return r[t]
                    })).filter((function(t) {
                        return 0 !== t.a.c || 0 !== t.g.c
                    }))
                } catch (t) {
                    return Object(S.b)(t, "getSlotFetchCounts"), []
                }
            }

            function Vt() {
                try {
                    var t = h.a.getState(),
                        e = Ht(t);
                    0 < Object.keys(e).length && (Object(O.c)(e, 5).forEach((function(e) {
                        e = {
                            slots: e,
                            pid: m.b,
                            url: Object(w.g)(window).split("?")[0],
                            ws: Object(O.h)(window),
                            pubid: t.config.pubID,
                            _type: "slotRenders"
                        }, Object(v.b)(e)
                    })), h.a.dispatch({
                        type: "UPDATE_RENDER_OFFSETS",
                        offsets: {
                            aaxReqOffset: t.AAXReqs.length,
                            gamSlotFetchLogOffset: t.gamSlotFetchLog.length
                        }
                    }))
                } catch (e) {
                    Object(S.b)(e, "sendDisplayAdServerRenderPixel")
                }
            }

            function Gt() {
                setInterval((function() {
                    Vt()
                }), 5e3)
            }

            function Qt() {
                try {
                    setTimeout((function() {
                        try {
                            var t = Wt().filter((function(t) {
                                    return !Object(O.m)(h.a.getState().bsPixels, t.iid) || t.state !== h.a.getState().bsPixels[t.iid]
                                })),
                                e = (t && t.length && 0 < t.length && (t.forEach((function(t) {
                                    return Object(v.a)(t.iid, Jt(t))
                                })), Xt(t)), {
                                    fetchStart: "a",
                                    domainLookupStart: "b",
                                    domainLookupEnd: "c",
                                    connectStart: "d",
                                    secureConnectionStart: "e",
                                    connectEnd: "f",
                                    requestStart: "g",
                                    responseStart: "h",
                                    responseEnd: "i"
                                });
                            Object.keys(h.a.getState().slotBids).forEach((function(t) {
                                h.a.getState().slotBids[t].forEach((function(n) {
                                    var r, o, i;
                                    !Object(O.m)(n.bidConfig, "amzniid") || n.pixelSent || "object" === g(r = h.a.getState().AAXReqs.filter((function(t) {
                                        return t.bidReqID === n.bidReqID
                                    }))[0]) && null !== r && (o = r.rqTs - Object(c.d)(), i = {
                                        pid: m.b,
                                        ns: r.bidConfig.validSlots.length,
                                        fid: n.bidReqID,
                                        fbrq: r.rqTs,
                                        _type: "latencyBd"
                                    }, "object" === g(r.perf) && null !== r.perf && Object.keys(e).forEach((function(t) {
                                        Object(O.m)(r, "perf") && 0 !== Object(c.a)(r.perf, t) && (i[e[t]] = Object(c.a)(r.perf, t) - o)
                                    })), i.j = r.resTs - r.rqTs, Object(v.a)(n.bidConfig.amzniid, i), h.a.dispatch({
                                        type: "UPDATE_BID_INFO_PROP",
                                        slotID: t,
                                        iid: n.bidConfig.amzniid,
                                        key: "pixelSent",
                                        value: !0
                                    }))
                                }))
                            })), Qt()
                        } catch (t) {
                            Object(S.b)(t, "_sendBidsSetOnDFPPixel-timeout")
                        }
                    }), 5e3)
                } catch (t) {
                    Object(S.b)(t, "_sendBidsSetOnDFPPixel")
                }
            }

            function Xt(t) {
                t.forEach((function(t) {
                    return h.a.dispatch({
                        type: "RECORD_BID_INFO_SENT",
                        bidInfo: t
                    })
                }))
            }

            function Jt(t) {
                try {
                    var e = Kt(t.fid),
                        n = {
                            status: t.state,
                            pubid: h.a.getState().config.pubID,
                            _type: "bidSetPixel",
                            toa: Object(O.m)(e.req, "timedOutAt") ? e.req.timedOutAt : 0,
                            fbrq: e.req.rqTs,
                            pto: e.req.timeout,
                            ns: e.req.bidConfig.validSlots.length,
                            bla: e.req.resTs - e.req.rqTs,
                            reqindex: e.index,
                            fid: t.fid,
                            tbs: 0,
                            c: "dtb"
                        },
                        r = (h.a.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION && (n.eid = h.a.getState().experiments.chunkRequests ? 2 : 1, n.fbindex = e.fbIndex, n.fbns = h.a.getState().bidConfigs[parseInt(t.fid.split("-")[0], 10)].slots.length), h.a.getState().experiments),
                        o = (Object(O.m)(r, "shouldUseTestBidEndpoint") && (n.tbs = r.shouldUseTestBidEndpoint ? 2 : 1), t.delta && (n.delay = t.delta), e.req.perf);
                    return void 0 !== o && (n.ul = e.req.urlLength, n.es = Object(c.a)(o, "encodedBodySize")), 0 < Object.keys(h.a.getState().identityState).length && (n.ids = JSON.stringify(h.a.getState().identityState)), 0 < h.a.getState().tcfParseTime && (n.tpt = h.a.getState().tcfParseTime), n
                } catch (t) {
                    return Object(S.b)(t, "_mapBidInfoToPixel"), {
                        _type: "bidSetPixel",
                        status: -1,
                        pubid: "",
                        toa: 0,
                        fbrq: 0,
                        pto: 0,
                        ns: 0,
                        bla: 0,
                        reqindex: 0,
                        fid: "",
                        tbs: 0,
                        c: "dtb"
                    }
                }
            }

            function Kt(t) {
                var e = h.a.getState().AAXReqs.filter((function(e) {
                        return e.bidReqID === t
                    }))[0],
                    n = h.a.getState().AAXReqs.indexOf(e) + 1;
                return (e = {
                    req: e,
                    index: n,
                    fbIndex: n
                }).index = h.a.getState().AAXReqs.indexOf(e.req) + 1, h.a.getState().experiments.chunkRequests && (e.fbIndex = h.a.getState().AAXReqs.filter((function(t) {
                    return -1 === t.bidReqID.indexOf("-") || "0" === t.bidReqID.split("-")[1]
                })).map((function(t) {
                    return t.bidReqID.split("-")[0]
                })).indexOf(t.split("-")[0]) + 1), e
            }

            function Wt() {
                try {
                    var t = te(),
                        e = [];
                    return null === t || Object.keys(h.a.getState().slotBids).forEach((function(n) {
                        "video" !== h.a.getState().slotBids[n][0].bidConfig.mediaType && h.a.getState().slotBids[n].filter((function(t) {
                            return Object(O.m)(t.bidConfig, "amzniid")
                        })).forEach((function(r) {
                            var o, i, c;
                            null !== t && (o = {
                                state: -1,
                                slotID: n,
                                iid: r.bidConfig.amzniid,
                                fid: r.bidReqID
                            }, c = [], i = [], n in t && (c = t[n].fetchedAt.filter((function(t) {
                                return t.AAXReqInfo && t.AAXReqInfo.bidReqID === r.bidReqID
                            })), i = t[n].targetedAt.filter((function(t) {
                                return t.targeting === r.bidConfig.amzniid
                            }))), 0 < c.length ? 0 < c.length && i.length >= c.length && c.slice(c.length - 1)[0].ts > i.slice(c.length - 1)[0].ts ? 1 === t[n].fetchWithIID.filter((function(t) {
                                return t === r.bidConfig.amzniid
                            })).length ? o.state = 1 : o.state = 4 : Object(O.j)(t[n].fetchWithIID, r.bidConfig.amzniid) ? o.state = 3 : o.state = 2 : o.state = 0, 1 !== o.state && 2 !== o.state || (c = Yt(i = h.a.getState().AAXReqs.filter((function(t) {
                                return t.bidReqID === r.bidReqID
                            }))[0].resTs, t[n].fetchedAt, 2 === o.state)) && Object(O.m)(c, "ts") && (o.delta = i - c.ts), e.push(o))
                        }))
                    })), e
                } catch (t) {
                    return Object(S.b)(t, "_getBidSetInfo"), []
                }
            }

            function Yt(t, e, n) {
                var r = e.map((function(e) {
                    return e = t - e.ts, !n && e <= 0 ? -e : n && 0 <= e ? e : null
                }));
                return e[$t(r)]
            }

            function $t(t) {
                for (var e = -1, n = -1, r = 0; r < t.length; r++) null !== t[r] && (-1 === n || t[r] < e) && (e = t[n = r]);
                return n
            }

            function Zt(t, e) {
                return h.a.getState().AAXReqs.filter((function(t) {
                    return Object(O.j)(t.bidConfig.slots.map((function(t) {
                        return t.slotID
                    })), e)
                }))[t]
            }

            function te() {
                try {
                    if (!p.a.hasAdServerObjectLoaded()) return null;
                    var t = h.a.getState().gamSlotFetchLog.reduce((function(t, e) {
                        Object(O.m)(t, e.slotID) || (t[e.slotID] = {
                            fetchedAt: [],
                            targetedAt: []
                        });
                        var n = t[e.slotID];
                        return n.fetchedAt.push({
                            ts: e.ts,
                            AAXReqInfo: Zt(n.fetchedAt.length, e.slotID)
                        }), Object(O.m)(e.targeting, "amzniid") && 0 < e.targeting.amzniid.length ? n.targetedAt.push({
                            ts: e.ts - 1,
                            targeting: e.targeting.amzniid[0]
                        }) : n.targetedAt.push({
                            ts: e.ts - 1,
                            targeting: ""
                        }), t
                    }), {});
                    return Object.keys(t).forEach((function(e) {
                        var n;
                        Object(O.m)(t, e) && ((n = t[e]).fetchWithIID = n.fetchedAt.map((function(t) {
                            return (t = Yt(t.ts, n.targetedAt, !0)) ? t.targeting : 0
                        })), t[e] = n)
                    })), t
                } catch (t) {
                    return Object(S.b)(t, "_getDFPSlotFetches"), null
                }
            }

            function ee() {
                try {
                    p.a.hasAdServerObjectLoaded() ? Bt("noRequest", p.a) : p.a.isCommandQueueDefined() && p.a.cmdQueuePush((function() {
                        Bt("noRequest", p.a)
                    }))
                } catch (t) {
                    Object(S.b)(t, "_applyNoRequestToAAXState")
                }
            }

            function ne(t) {
                try {
                    h.a.dispatch({
                        type: "REQUESTED_BID_FOR_ADSERVER_SLOTS",
                        slotIDs: t
                    }), p.a.isCommandQueueDefined() && p.a.cmdQueuePush((function() {
                        try {
                            var e = Object(y.b)(p.a);
                            "0" === p.a.getTargeting("amznbid")[0] && Nt(), at(t.filter((function(t) {
                                return void 0 !== t
                            })), e.map((function(t) {
                                return t.slotID
                            }))) ? e.forEach((function(e) {
                                Object(O.j)(t, e.slotID) && !xt(e) && Bt("bidInFlight", e)
                            })) : p.a.cmdQueuePush((function() {
                                try {
                                    Bt("bidInFlight", p.a)
                                } catch (t) {
                                    Object(S.b)(t, "_setRequestToAAXInFlightState-cmdQueue-cmdQueue")
                                }
                            }))
                        } catch (e) {
                            Object(S.b)(e, "_setRequestToAAXInFlightState-cmdQueue")
                        }
                    }))
                } catch (t) {
                    Object(S.b)(t, "_setRequestToAAXInFlightState")
                }
            }

            function re(t) {
                try {
                    return Object(O.m)(t, "type") && !(t instanceof Document) && "amp" === t.type
                } catch (t) {
                    return Object(S.b)(t, "_isLegacyAmpCreative"), !1
                }
            }

            function oe(t, e) {
                try {
                    return void 0 !== e && Object(O.m)(e, "ampEnv") && e.ampEnv || re(t)
                } catch (t) {
                    return void Object(S.b)(t, "_isAmpImpression")
                }
            }

            function ie(t) {
                return t.split("x")
            }

            function ce(t, e, n) {
                try {
                    Object(v.g)()
                } catch (t) {
                    Object(S.b)(t, "_renderImp-pixels")
                }
                try {
                    var r = void 0 === n ? "0.0.0" : n.cv;
                    if (oe(t, n) && Object(w.k)(window, !0)) return re(t) ? Object(v.c)("renderFootprint", "amp") : Object(v.c)("renderFootprint", "multi-amp-".concat(r)), void _t(t, n);
                    if (Object(_.c)(window) && void 0 !== n && Object(O.m)(n, "kvMap") && Object(O.m)(n.kvMap, "amznhost")) return Object(v.c)("renderFootprint", "multi-sf-".concat(r)), void _t(t, n);
                    var o, i = !1,
                        c = ("string" == typeof e && 0 === e.indexOf("sp|") && (e = e.substring(3), i = !0), e || t.amzniid),
                        a = dt(c, i),
                        s = a.slotBid,
                        u = a.dealId,
                        d = !1;
                    if (void 0 !== n && Object(O.m)(n, "bidType") && "outstream" === n.bidType && (d = !0), s) {
                        if (o = u && 1 <= u.length ? ie("sp" === u ? s.bidConfig.amznsz_sp : lt(c, s, u)) : ie(s.bidConfig.amznsz), 1 === arguments.length) return Object(v.c)("renderFootprint", "JSONp"), void Et({
                            doc: s.doc,
                            bidID: s.bidConfig.amzniid,
                            sizes: o,
                            html: t.html,
                            inheritSize: s.inheritSize || !1,
                            isOutstream: d
                        });
                        Object(v.c)("bidRenderState", s.bidState);
                        var l, f, b = i ? "sharedpmp" : "open",
                            p = (void 0 !== n ? Object(v.c)("renderFootprint", "multi-".concat(b, "-").concat(r)) : Object(v.c)("renderFootprint", "standard-".concat(b, "-").concat(r)), s.bidState === j.c.rendered && qt(s), h.a.dispatch({
                                type: "BID_STATE_CHANGE",
                                slotID: s.slotID,
                                _targetingSetID: s._targetingSetID,
                                bidState: j.c.rendered,
                                ts: Date.now()
                            }), s.host),
                            m = s.bidConfig.slotID,
                            g = "amznad".concat(Math.round(1e6 * Math.random())),
                            y = {
                                bidID: c,
                                doc: t,
                                slotID: m,
                                pp: ae("amznbid", s, u),
                                host: p,
                                adID: g,
                                sizes: o,
                                amznp: ae("amznp", s, u),
                                crID: ae("crid", s, u),
                                fif: !1,
                                dealId: u,
                                isSharedPMP: i,
                                cfe: s.cfe,
                                isOutstream: d,
                                inheritSize: Object(O.l)(n) && Object(O.m)(n, "inheritSize") && !0 === n.inheritSize
                            };
                        "1" === s.bidConfig.fif && !1 === d ? (y.fif = !0, h.a.dispatch({
                            type: "UPDATE_BID_INFO_PROP",
                            slotID: s.slotID,
                            iid: e,
                            key: "doc",
                            value: t
                        }), h.a.dispatch({
                            type: "UPDATE_BID_INFO_PROP",
                            slotID: s.slotID,
                            iid: e,
                            key: "inheritSize",
                            value: y.inheritSize
                        }), Object(T.b)(vt(y), (function() {}), document, (function() {
                            return Object(S.b)(new Error("Error Loading JSONP Render Callback"), "renderImp-fif-callback-load", !0)
                        }))) : d ? (h.a.dispatch({
                            type: "OUTSTREAM_SHOULD_SAMPLE",
                            shouldSample: Object(O.n)(10)
                        }), h.a.getState().outstream.shouldSample && (Object(v.e)("renderImp", y.bidID), h.a.dispatch({
                            type: "RECORD_OUTSTREAM_RENDER_START_TIME",
                            time: Date.now()
                        })), l = Object(E.c)(y, j.b), f = Object(E.b)(l, j.z), y.html = f, Et(y)) : h.a.getState().aaxViewabilityEnabled ? se(y, t) : Tt(y), d || At(t, y)
                    } else Object(S.b)(new Error("Invalid bid ID tried to render"), "_renderImp-invalidId", !0)
                } catch (t) {
                    Object(S.b)(t, "_renderImp", !0)
                }
            }

            function ae(t, e, n) {
                try {
                    var r, o = "";
                    return void 0 !== n && 1 <= n.length ? (r = "".concat(t, "_sp"), "sp" === n && Object(O.m)(e.bidConfig, r) && (o = e.bidConfig[r])) : Object(O.m)(e.bidConfig, t) && (o = e.bidConfig[t]), o
                } catch (t) {
                    return Object(S.b)(t, "_getProperBidInfoValue"), ""
                }
            }

            function se(t, e) {
                try {
                    var n = e.createElement("script"),
                        r = (n.type = "text/javascript", n.async = !0, {
                            doc: e,
                            bidID: t.bidID,
                            states: {
                                csmLoaded: !1,
                                iframeLoaded: !1,
                                shouldRunViewability: !0
                            }
                        }),
                        o = It.bind(null, r);
                    Object(T.a)(n, (function() {
                        r.states.csmLoaded = !0, o()
                    }));
                    try {
                        n.addEventListener("error", (function(t) {
                            return Object(v.b)({
                                _type: "csm_fail",
                                ts: Date.now(),
                                msg: t.message
                            })
                        }))
                    } catch (t) {
                        Object(S.b)(t, "_loadViewabilityAd-csm")
                    }
                    Tt(t, r, o), n.src = h.a.getState().cfg.CSM_JS, Ot(e, n)
                } catch (t) {
                    Object(S.b)(t, "_loadViewabilityAd")
                }
            }

            function ue(t) {
                try {
                    $(t), Object(O.m)(t, "slots") && (h.a.dispatch({
                        type: "UPDATE_SLOT_BIDS",
                        bids: ft(t)
                    }), Object(O.m)(t, "ev") && h.a.dispatch({
                        type: "SET_VIEWABILITY",
                        viewability: t.ev
                    }), Object(O.m)(t, "cfn") && h.a.dispatch({
                        type: "SET_CFG",
                        cfg: {
                            CSM_JS: "//" === t.cfn.substring(0, 2) ? t.cfn : "//c.amazon-adsystem.com/".concat(t.cfn)
                        }
                    })), Z(t)
                } catch (t) {
                    Object(S.b)(t, "_bids", !0)
                }
            }

            function de() {
                return "number" == typeof h.a.getState().cfg.MAX_SLOTS_PER_REQUEST && 0 < h.a.getState().cfg.MAX_SLOTS_PER_REQUEST
            }

            function le(t, e) {
                try {
                    Object(o.a)(h.a.getState().config.gdpr, (function(n) {
                        var r = Object(a.a)(n);
                        be(t, e, n, r)
                    }))
                } catch (t) {
                    Object(S.b)(t, "_getConfigsAndFetchBids", !0)
                }
            }

            function be(t, e, n, r) {
                try {
                    Object(A.b)(e, ["function", "undefined"]) || Object(S.c)("fetchBids.callback", g(e), "function"), "function" != typeof e && (e = function() {}), Object(O.l)(t) || (Object(S.c)("fetchBids.bidConfig", g(t), "object"), t = {}), Object(A.a)(t.timeout) || ("string" == typeof t.timeout ? Object(S.b)({
                        name: "string-".concat(t.timeout),
                        message: "fetchBids.bidConfig.timeout was a non-numeric string '".concat(t.timeout, "'")
                    }, "TypeError-fetchBids.bidConfig.timeout", !0) : Object(S.c)("fetchBids.bidConfig.timeout", g(t.timeout), "number")), Object(O.m)(t, "params") && !Object(O.l)(t.params) ? Object(S.c)("fetchBids.bidConfig.params", g(t.params), "object") : Object(O.m)(t, "params") && Object(O.l)(t.params) && Object.keys(t.params).forEach((function(e) {
                        return !(void 0 === t.params || "string" != typeof t.params[e] && "number" != typeof t.params[e] && (Object(O.k)(t.params[e]) ? !t.params[e].reduce((function(t, e) {
                            return t && ("string" == typeof e || "number" == typeof e)
                        }), !0) && (Object(S.b)({
                            name: "non-string array item",
                            message: "'fetchBids.bidConfig.params.".concat(e, " contains a non-string item")
                        }, "TypeError-fetchBids.bidConfig.params.".concat(e), !0), 1) : (Object(S.c)("fetchBids.bidConfig.params.".concat(e), g(t.params[e]), "string' or 'array"), 1)))
                    })), Object(O.m)(t, "blockedBidders") && !Object(O.k)(t.blockedBidders) ? Object(S.c)("fetchBids.bidConfig.blockedBidders", g(t.blockedBidders), "array") : Object(O.m)(t, "blockedBidders") && Object(O.k)(t.blockedBidders) && (t.blockedBidders.reduce((function(t, e) {
                        return t && ("string" == typeof e || "number" == typeof e)
                    }), !0) || Object(S.b)({
                        name: "non-string array item",
                        message: "'fetchBids.bidConfig.blockedBidders contains a non-string item"
                    }, "TypeError-fetchBids.bidConfig.blockedBidders", !0)), Object(O.m)(t, "blockedBidders") ? Object(v.c)("blockedBidders-fetchBids", "y") : Object(v.c)("blockedBidders-fetchBids", "n"), Object(O.m)(t, "slots") && !Object(O.k)(t.slots) && Object(S.c)("fetchBids.bidConfig.slots", g(t.slots), "array")
                } catch (o) {
                    Object(S.b)(o, "_fetchBids-validation", !0)
                }
                var o = h.a.getState().config.simplerGPT,
                    i = x(x({}, t), {}, {
                        bidReqID: "".concat(h.a.getState().AAXReqs.length),
                        slots: [],
                        validSlots: [],
                        networkReqs: []
                    }),
                    c = !1;
                try {
                    !0 === o && (!Object(O.m)(t, "slots") || Object(O.m)(t, "slots") && Object(O.k)(t.slots) && 0 < t.slots.length && Object(O.m)(t.slots[0], "getSlotElementId")) ? 0 === Object(y.b)(p.a).length ? (Object(S.b)(new Error("fetchBids was called in simplerGPT mode before any slots were defined in GPT"), "_fetchBids-simplerGpt-NoSlots", !0), c = !0, i.slots = []) : (t.slots ? (Object(v.c)("slots", "gpt-provided"), i.slots = t.slots.map((function(t) {
                        return new I.b(t)
                    }))) : (Object(v.c)("slots", "gpt-fetch"), i.slots = Object(y.b)(p.a)), i.slots = i.slots.filter(y.a), 0 === i.slots.length && (Object(S.b)(new Error("No GPT slots provided to apstag.fetchBids() had valid sizes"), "_fetchBids-simplerGpt-NoValidSizes", !0), c = !0)) : Object(O.m)(t, "slots") && Object(O.k)(t.slots) && (o ? Object(v.c)("slots", "gpt-aps") : Object(v.c)("slots", "aps"), i.slots = t.slots.map((function(t) {
                        return new D.a(t)
                    }))), i.validSlots = i.slots.filter((function(t) {
                        return t.isValid()
                    }))
                } catch (o) {
                    Object(S.b)(o, "_fetchBids-getSlots", !0)
                }
                var a = Object(w.i)(i, h.a.getState());
                try {
                    e = Object(w.b)(Dt(e, i), a)
                } catch (o) {
                    Object(S.b)(o, "_fetchBids-wrapCallback", !0)
                }
                try {
                    if (0 === i.validSlots.length) return !1 === c && Object(S.b)(new Error("No valid slots provided to apstag.fetchBids"), "_fetchBids-noSlots", !0), void setTimeout(e.bind(null, []), 10);
                    try {
                        var s = 1 === i.slots.length ? "single" : "multi",
                            u = Date.now() - N <= j.r ? "onload" : "ondelay",
                            d = h.a.getState().AAXReqs.reduce((function(t, e) {
                                return e.bidConfig.slots.forEach((function(e) {
                                    Object(O.j)(t, e.slotID) || t.push(e.slotID)
                                })), t
                            }), []);
                        i.slots.map((function(t) {
                            return t.slotID
                        })).map((function(t) {
                            return Object(O.j)(d, t)
                        })).map((function(t) {
                            return t ? "refresh" : "initial"
                        })).filter((function(t, e, n) {
                            return n.indexOf(t) === e
                        })).forEach((function(t) {
                            return Object(v.c)("fetchBids", "".concat(s, "-").concat(u, "-").concat(t))
                        }))
                    } catch (o) {
                        Object(S.b)(o, "_fetchBids-feature")
                    }
                    if (ne(i.slots.filter(y.d).map(y.c)), h.a.dispatch({
                            type: "NEW_FETCH_BID_REQUEST",
                            fid: i.bidReqID,
                            pto: a
                        }), h.a.dispatch({
                            type: "RECORD_ORIGINAL_BID_CONFIG",
                            bidConfig: i
                        }), Object(f.d)("fake_bids")) Pt(i);
                    else if (j.k)
                        if (h.a.dispatch({
                                type: "SHOULD_CHUNK_REQUESTS",
                                value: Object(O.n)(h.a.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION)
                            }), h.a.getState().experiments.chunkRequests && de()) {
                            for (var l = fe(i), b = 0; b < l.length; b++) l[b].bidReqID = "".concat(i.bidReqID, "-").concat(b);
                            h.a.dispatch({
                                type: "ADD_CHUNKED_REQUESTS",
                                fid: i.bidReqID,
                                numChunks: l.length
                            }), l.forEach((function(t) {
                                K(Object(m.d)(t, a, n, r), e, t.bidReqID)
                            }))
                        } else K(Object(m.d)(i, a, n, r), e, i.bidReqID);
                    else Object(T.b)(Object(m.d)(i, a, n, r), e)
                } catch (o) {
                    Object(S.b)(o, "_fetchBids", !0)
                }
            }

            function fe(t) {
                try {
                    for (var e = Math.ceil(t.validSlots.length / h.a.getState().cfg.MAX_SLOTS_PER_REQUEST), n = new Array(e), r = 0; r < e; r++) {
                        var o = r * h.a.getState().cfg.MAX_SLOTS_PER_REQUEST;
                        n[r] = {
                            slots: t.validSlots.slice(o, o + h.a.getState().cfg.MAX_SLOTS_PER_REQUEST)
                        }
                    }
                    return n.map((function(e) {
                        return x(x({}, t), e)
                    }))
                } catch (e) {
                    return Object(S.b)(e, "chunkConfig", !0), []
                }
            }

            function pe(t) {
                try {
                    Object(O.m)(h.a.getState().config, "adServer") ? p.a.isSupported ? (yt(t), Lt()) : Object(S.b)(new Error("apstag.setDisplayBids called with unsupported ad server: ".concat(h.a.getState().config.adServer)), "_setDisplayBids-invalidAdServer", !0) : Object(S.b)(new Error("apstag.setDisplayBids called without specifying ad server"), "_setDisplayBids-noAdServer", !0)
                } catch (t) {
                    Object(S.b)(t, "_setDisplayBids", !0)
                }
            }

            function me(t, e) {
                try {
                    nt(t), Object(p.b)(t.adServer), ee(), Object(a.b)()
                } catch (t) {
                    Object(S.b)(t, "_init")
                }
                "function" == typeof e && e()
            }

            function ge() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "display",
                    e = h.a.getState();
                try {
                    switch (t) {
                        case "display":
                            return Object(v.c)("targeting", "targetingKeys-display"), e.config.useSafeFrames ? [].concat(l(j.i), ["amznhost"]) : j.i;
                        case "video":
                            return Object(v.c)("targeting", "targetingKeys-video"), e.config.useSafeFrames ? [].concat(l(j.y), ["amznhost"]) : j.y;
                        default:
                            if (Object(m.g)(h.a.getState(), p.a)) {
                                if (Object(v.c)("targeting", "targetingKeys-newBid"), Object(O.k)(h.a.getState().targetingKeys[t])) return h.a.getState().targetingKeys[t]
                            } else Object(v.c)("targeting", "targetingKeys-invalid");
                            return []
                    }
                } catch (t) {
                    return Object(S.b)(t, "_targetingKeys", !0), []
                }
            }

            function ye() {
                try {
                    return h.a.getState().AAXReqs.reduce((function(t, e) {
                        return e.bidConfig.slots.reduce((function(t, e) {
                            return t[e.slotID] = e.slotName, t
                        }), t)
                    }), {})
                } catch (t) {
                    return Object(S.b)(t, "_getSlotIdToNameMapping", !0), {}
                }
            }

            function he(t, e) {
                var n = e;
                return function() {
                    return H({
                        method: t,
                        args: arguments
                    }), n.apply(void 0, arguments)
                }
            }
            try {
                Object(O.m)(window, "apstag") && Object(O.m)(window.apstag, "_Q") && 0 < window.apstag._Q.length && h.a.dispatch({
                    type: "SET_Q",
                    Q: window.apstag._Q
                })
            } catch (t) {
                Object(S.b)(t, "apstag-storeQ", !0)
            }
            window.apstag = (Ut = {
                punt: ue,
                init: me,
                debug: f.a,
                _getSlotIdToNameMapping: ye,
                targetingKeys: ge,
                fetchBids: le,
                setDisplayBids: pe,
                renderImp: ce,
                bids: ue,
                deleteId: s.a,
                updateId: s.e,
                renewId: s.d,
                dpa: s.a,
                upa: s.e,
                rpa: s.d,
                thirdPartyData: {},
                isGDPRRegion: !1,
                rr: d.a
            }, Object.keys(Ut).forEach((function(t) {
                "function" == typeof Ut[t] && (Ut[t] = he(t, Ut[t]), Ut[t] = Object(S.d)(Ut[t], t))
            })), U ? Object(f.b)(!0, q) : F && Object(f.b)(!1, q), !0 === Object(f.c)("exposeApi") && (Ut._api = {
                _getBidSetInfo: Wt,
                _applyTargetingToGPTSlot: pt,
                dispatch: h.a.dispatch,
                _clearTargetingFromGPTSlot: it,
                _clearBidSetOnSlot: ct,
                _doFbSync: ht,
                _getCurrentSlotBids: st,
                _creativeURL: vt,
                getSlotFetchCounts: Ht,
                buildBidUrl: m.d
            }), Ut);
            try {
                var Oe, je = (h.a.dispatch({
                    type: "SHOULD_SAMPLE_FEATURES",
                    value: Object(O.n)(h.a.getState().cfg.FEATURE_SAMPLING_RATE)
                }), h.a.dispatch({
                    type: "SHOULD_CF_ROUTE",
                    value: Object(O.n)(h.a.getState().cfg.CF_ROUTING_RATE)
                }), h.a.getState().experiments.shouldCFRoute && h.a.dispatch({
                    type: "SET_HOST",
                    hostName: "DEFAULT_AAX_BID_HOST",
                    hostValue: "c.amazon-adsystem.com"
                }), h.a.dispatch({
                    type: "SHOULD_SAMPLE_LATENCY",
                    value: Object(O.n)(h.a.getState().cfg.LATENCY_SAMPLING_RATE)
                }), null !== h.a.getState().cfg.TEST_BID_ENDPOINT && (Oe = Object(O.n)(h.a.getState().cfg.TEST_PATH_FREQUENCY), h.a.dispatch({
                    type: "SHOULD_USE_TEST_BID_ENDPOINT",
                    value: Oe
                }), Oe && null !== h.a.getState().cfg.TEST_PATH_LATENCY_SAMPLE_RATE && h.a.dispatch({
                    type: "SHOULD_SAMPLE_LATENCY",
                    value: Object(O.n)(h.a.getState().cfg.TEST_PATH_LATENCY_SAMPLE_RATE)
                })), h.a.dispatch({
                    type: "SHOULD_SAMPLE_SLOT_RENDER",
                    value: Object(O.n)(h.a.getState().cfg.SLOT_RENDER_SAMPLING_RATE)
                }), h.a.getState());
                (je.experiments.shouldSampleLatency || je.displayAdServer.shouldSampleRender) && Mt(), je.displayAdServer.shouldSampleRender && Gt(), je.experiments.shouldSampleLatency && Qt()
            } catch (t) {
                Object(S.b)(t, "apstag-sampleLatency")
            }
            try {
                et()
            } catch (t) {
                Object(S.b)(t, "apstag-doLast")
            }
            if (!Object(w.k)(window, !0)) try {
                var ve = function(t) {
                    t && "object" !== g(t) || (t = "Request Timeout or Error"), Object(S.b)({
                        message: "csm-rtb-comm-js loading failed",
                        name: t
                    }, "__csm-rtb-comm-js__")
                };
                Object(T.d)({
                    url: h.a.getState().cfg.CSM_RTB_COMMUNICATOR_JS,
                    onload: function t(e) {
                        e.readyState === XMLHttpRequest.DONE && 200 === e.status ? eval(e.responseText) : ve(JSON.stringify({
                            status: e.statusText,
                            response: e.responseXML
                        }))
                    },
                    onerror: ve,
                    ontimeout: ve
                })
            } catch (t) {
                Object(S.b)(t, "__load-csm-rtb-comm-js__")
            }
            Object(f.e)()
        }
    } catch (t) {
        Object(S.b)(t, "apstag")
    }
}]);
//# sourceMappingURL=apstag.js.map