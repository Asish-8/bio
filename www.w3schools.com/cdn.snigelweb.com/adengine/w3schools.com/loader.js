! function(e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
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
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var i in e) t.d(o, i, function(n) {
                return e[n]
            }.bind(null, i));
        return o
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 2)
}([function(e) {
    e.exports = JSON.parse('{"site":"w3schools.com","version":"3863-1655117203930","settings":{"adconsent":{"load":true,"objName":"adconsent","url":"//cdn.snigelweb.com/adconsent/adconsent.js"},"pbjs":{"load":true,"objName":"pbjs","url":"//cdn.snigelweb.com/prebid/5.20.2/prebid.js"},"gpt":{"load":true,"objName":"googletag","url":"//securepubads.g.doubleclick.net/tag/js/gpt.js"},"adngin":{"load":true,"objName":"adngin","url":"https://adengine.snigelweb.com"},"apstag":{"load":true,"objName":"apstag","url":"//c.amazon-adsystem.com/aax2/apstag.js"},"scripts":[{"url":"//boot.pbstck.com/v1/tag/6b8021b6-6874-4ef7-a983-9bb3141ccb5c","freq":5,"name":"pubstack"},{"url":"//cdn.snigelweb.com/argus/argus.js","freq":100,"name":"argus"}]}}')
}, function(e, n, t) {
    "use strict";

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(e) {
            return o(e)
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : o(e)
        })(e)
    }! function(e, n, t, o, r, a) {
        var s = e._snigelConfig;
        if (s) try {
            t = s.settings.adconsent.objName
        } catch (e) {}
        var c = void 0,
            u = "__" + t;
        try {
            a = localStorage
        } catch (e) {}
        var l, d = e.performance,
            f = d && d.now ? function() {
                return Math.floor(d.now())
            } : function() {
                return 0
            };

        function p(e) {
            if (window.argus) {
                var n = 1 === e.length && e[0] instanceof Error ? {
                    stack: e[0].stack
                } : {
                    log: e,
                    stack: (new Error).stack
                };
                window.argus.cmd.push((function() {
                    window.argus.queueError("adconsent", n)
                }))
            }
        }! function() {
            if ("function" === i(e.CustomEvent)) return !1;

            function t(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: c
                };
                var o = n.createEvent("CustomEvent");
                return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
            }
            t.prototype = e.Event.prototype, e.CustomEvent = t
        }();
        try {
            var g = function(n, t, o, i) {
                    e.console[n] && j.level >= t && console[n].apply(console, function(e, n, t) {
                        return e = [].slice.call(e), n && e.unshift(n), e.unshift("display: inline-block; color: #fff; background: " + t + "; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cAdConsent"), e
                    }(o, n.toUpperCase() + ":", i))
                },
                v = function(e, n) {
                    return {
                        region: e,
                        loaded: !1,
                        applies: c,
                        version: n,
                        status: "stub"
                    }
                },
                m = function(n) {
                    return function(t, o, i) {
                        e[n](t, c, i, o)
                    }
                },
                b = function(e, n, t) {
                    return !n || n === e.version || (C(t, null, !1), k("Wrong framework version detected: " + n), !1)
                },
                y = function(e, n, t) {
                    var o = N.applies ? c : N.applies,
                        i = {
                            tcString: c,
                            tcfPolicyVersion: 2,
                            cmpId: 229,
                            cmpVersion: 68,
                            gdprApplies: o,
                            eventStatus: !1 === o ? "tcloaded" : c,
                            cmpStatus: N.status,
                            listenerId: n,
                            isServiceSpecific: !0,
                            useNonStandardStacks: !1,
                            publisherCC: L.publisherCC,
                            purposeOneTreatment: !1
                        };
                    k("Sending TCData structure:", i, t), C(t, i, !0)
                },
                h = function(e, n, t, o, i) {
                    e.queue.push({
                        command: n,
                        version: t,
                        parameter: o,
                        callback: i
                    })
                },
                w = function(t, o, r) {
                    if (r) {
                        var a = t + "Locator";
                        ! function t() {
                            if (!e.frames[a]) {
                                var o = n.body;
                                if (o) {
                                    var i = n.createElement("iframe");
                                    i.style.display = "none", i.name = a, o.appendChild(i)
                                } else setTimeout(t, 5)
                            }
                        }();
                        var s = function(n) {
                            var o = n.data,
                                i = "string" == typeof o;
                            try {
                                var r = (i ? JSON.parse(o) : o)[t + "Call"];
                                r && e[t](r.command, r.version, (function(e, o) {
                                    try {
                                        if (n && n.source && n.source.postMessage) {
                                            var a = {};
                                            a[t + "Return"] = {
                                                returnValue: e,
                                                success: o === c || o,
                                                callId: r.callId
                                            }, n.source.postMessage(i ? JSON.stringify(a) : a, "*")
                                        }
                                    } catch (e) {}
                                }), r.parameter)
                            } catch (e) {}
                        }
                    }
                    "function" !== i(e[t]) && (e[t] = function(n, i, r, a) {
                        var s = e[t];
                        if (s.queue) {
                            for (var c in o)
                                if (n === c) {
                                    var u = !0;
                                    (0, o[c])(s, n, i, r, a);
                                    break
                                }
                            u || h(s, n, i, a, r)
                        } else s(n, i, r, a)
                    }, e[t].queue = [], r && (e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s)))
                },
                C = function(e, n, t) {
                    e && "function" == typeof e && setTimeout((function() {
                        e(n, t)
                    }), 0)
                },
                E = function(n, t, o, i, a) {
                    if (x.region === c)
                        if (I[a]) {
                            for (var s in A) {
                                var u = A[s];
                                u.applies = u.region == a, u.applies ? G = s : (u.loaded = !0, u.status = "loaded")
                            }
                            x.region = a, q("Configured consent region " + I[a]),
                                function() {
                                    if (1 !== x.region && S.processListeners(y), 2 !== x.region) {
                                        var n = e[r],
                                            t = n.queue;
                                        if (t) {
                                            n.queue = [];
                                            for (var o = 0; o < t.length; o++) {
                                                var i = t[o];
                                                n(i.command, i.version, i.callback, i.parameter)
                                            }
                                        }
                                    }
                                }()
                        } else T("Incorrect consent region " + a)
                },
                _ = m(u);
            _.gdpr = m("__tcfapi");
            var S = _.gdpr;
            S.listenerId = 1, S.tcfListeners = [], S.addEventListener = function(e, n, t) {
                if (b(N, e, n)) {
                    k("Adding event listener " + S.listenerId, n);
                    var o = {
                        id: S.listenerId++,
                        callback: n || function() {}
                    };
                    S.tcfListeners.push(o), t(null, o.id, o.callback)
                }
            }, S.removeEventListener = function(e, n, t, o, i) {
                if (b(N, t, o)) {
                    k("Removing event listener " + i);
                    for (var r = 0; r < S.tcfListeners.length; r++)
                        if (S.tcfListeners[r].id == i) return S.tcfListeners.splice(r, 1), void C(o, !0);
                    O("Couldn't find listener id " + i + "."), C(o, !1)
                }
            }, S.getTCData = function(e, n, t, o) {
                b(N, t, o) && y(0, 0, o)
            }, S.processListeners = function(e) {
                for (var n = S.tcfListeners.slice(), t = 0; t < n.length; t++) e(null, n[t].id, n[t].callback)
            }, _.ccpa = m(r), _.version = 68, _.cmpId = 229, _.cfg = {
                apiBaseUrl: "https://cdn.snigelweb.com/adconsent/68",
                publisherCC: "US"
            };
            var L = _.cfg;
            _.log = {
                levels: {
                    off: 0,
                    error: 1,
                    warning: 2,
                    info: 3,
                    debug: 4
                },
                level: 2,
                error: function() {
                    p(arguments), g("error", 1, arguments, "#ff0000")
                },
                warn: function() {
                    g("warn", 2, arguments, "#ffe600")
                },
                info: function() {
                    g("info", 3, arguments, "#3b88a3")
                },
                debug: function() {
                    g("debug", 4, arguments, "#808080")
                }
            };
            var j = _.log,
                k = j.debug,
                q = j.info,
                O = j.warn,
                T = j.error;
            _.consent = {
                regions: {
                    0: "NONE",
                    1: "GDPR",
                    2: "CCPA"
                },
                region: c,
                api: {
                    __tcfapi: v(1, 2),
                    __uspapi: v(2, 1)
                }
            };
            var x = _.consent,
                I = x.regions,
                A = x.api,
                N = A.__tcfapi,
                M = A[r];
            _.analytics = {
                enabled: !1,
                callback: c,
                send: function(e) {
                    P.sendEvent(I[x.region], e, f())
                },
                sendEvent: function(n, t, o) {
                    q("Sending analytics event action" + (P.enabled ? "" : " disabled") + ": " + n + ", label: " + t + ", value: " + o), P.enabled && (P.callback || function(n) {
                        e.gtag ? gtag("event", n.action, {
                            event_category: n.category,
                            event_label: n.label,
                            event_value: n.value
                        }) : e.ga ? ga("send", {
                            hitType: "event",
                            eventCategory: n.category,
                            eventAction: n.action,
                            eventLabel: n.label,
                            eventValue: n.value,
                            nonInteraction: n.nonInteraction
                        }) : O("Unable to find Google Analytics module (gtag or ga).")
                    })({
                        category: "AdConsent",
                        action: n,
                        label: t || n,
                        value: o || 0,
                        nonInteraction: !0
                    })
                }
            };
            var P = _.analytics,
                D = P.send;
            _.event = {
                fired: {},
                dispatchCustomEvent: function(e, t, o) {
                    o && R[e] || (R[e] = !0, k("Emitting custom event " + e + " with details: ", t), n.dispatchEvent(new CustomEvent(e, t)))
                },
                dispatchCustomEventConsent: function(e, n) {
                    var t = {
                        0: "N/A",
                        1: "NoConsent",
                        2: "PartialConsent",
                        3: "FullConsent"
                    };
                    D(t[n]), 1 == x.region && 0 != e && D("Publisher" + t[e]), B.dispatchCustomEvent("cmpConsentAvailable", {
                        detail: {
                            consentSummary: {
                                mapping: {
                                    0: "not available",
                                    1: "no consent",
                                    2: "partial consent",
                                    3: "full consent"
                                },
                                publisherConsent: e,
                                vendorsConsent: n,
                                gdprApplies: N.applies,
                                uspApplies: M.applies
                            }
                        }
                    })
                }
            };
            var B = _.event,
                R = B.fired,
                V = (l = e.location.search) ? l.replace(/^\?/, "").split("&").reduce((function(e, n) {
                    var t = n.split("="),
                        o = t[0],
                        i = t.length > 1 ? t[1] : c;
                    return /\[\]$/.test(o) ? (e[o = o.replace("[]", "")] = e[o] || [], e[o].push(i)) : e[o] = i || "", e
                }), {}) : {},
                U = ("true" == V.sn_debug ? "debug" : null) || ("true" == V.adconsent_debug ? "debug" : null) || V.adconsent_log;
            if (j.level = j.levels[U] || j.level, e[t]) return void T("Stub is tried to load again!");
            if (e.__tcfapi || e[r]) return void O("A cmp is already registered in the system. AdConsent is stopping.");
            e[t] = _;
            var G = c,
                J = !1;
            w("__tcfapi", {
                ping: function(e, n, t, o) {
                    var i = {
                        gdprApplies: N.applies,
                        cmpLoaded: N.loaded,
                        cmpStatus: N.status,
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 68,
                        cmpId: 229,
                        gvlVersion: c,
                        tcfPolicyVersion: 2
                    };
                    C(o, i, !0)
                },
                getTCData: S.getTCData,
                addEventListener: function(e, n, t, o, i) {
                    S.addEventListener(t, o, y)
                },
                removeEventListener: S.removeEventListener
            }, !0), w(r, {
                getUSPData: function(e, n, t, o, i) {
                    !1 === M.applies ? b(M, t, o) && C(o, {
                        version: 1,
                        uspString: "1---"
                    }, !0) : h(e, n, t, i, o)
                }
            }, !0), w(u, {
                start: function t(o, i, r, s, u) {
                    if (x.region !== c) {
                        if (!J)
                            if (J = !0, 0 == x.region) B.dispatchCustomEventConsent(3, 3);
                            else if (G) {
                            var l = n.createElement("script");
                            l.type = "text/javascript", l.async = !0, l.charset = "utf-8", l.src = _.cfg.apiBaseUrl + "/adconsent" + G + ".js", n.head.appendChild(l)
                        }
                    } else ! function(n) {
                        var t = null;
                        if (a) {
                            var o = a.getItem("snconsent_geo");
                            if (o) {
                                var i = a.getItem("snconsent_geo_exp");
                                if (i) try {
                                    parseInt(i) >= (new Date).getTime() && (t = JSON.parse(e.atob(o)))
                                } catch (e) {}
                            }
                        }
                        if (t) n(t);
                        else {
                            var r = new XMLHttpRequest;
                            r.open("GET", "https://pro.ip-api.com/json/?fields=57354&key=33arzTfj1gigDqW"), r.timeout = 5e3, r.onload = function() {
                                var t = r.responseText.toLowerCase();
                                a && (a.setItem("snconsent_geo", e.btoa(t)), a.setItem("snconsent_geo_exp", (new Date).getTime() + 36e5)), n(JSON.parse(t))
                            }, r.onerror = r.ontimeout = function() {
                                n(null)
                            }, r.send()
                        }
                    }((function(e) {
                        var n = e ? e.countrycode : null;
                        "us" === n && "california" === e.regionname ? E(0, 0, 0, 0, 2) : -1 !== "at be bg hr cy cz dk ee fi fr de gr hu is ie it lv li lt lu mt nl no pl pt ro sk si es se gb".indexOf(n) ? E(0, 0, 0, 0, 1) : (n || (D("ErrorGeotargeting"), T("Geotargeting failed")), E(0, 0, 0, 0, 0)), t()
                    }))
                },
                setPublisherCC: function(e, n, t, o, i) {
                    "string" != typeof i || 2 != i.length ? C(o, {
                        message: "Invalid publisher country code detected. Ignoring call."
                    }, !1) : (L.publisherCC = i.toUpperCase(), C(o, null, !0))
                },
                setConsentRegion: E,
                enableGoogleAnalytics: function(e, n, t, o, i) {
                    P.enabled = i === c || !!i, P.callback = o
                }
            })
        } catch (e) {
            if (p(e), s && s.passThroughException) throw e;
            console.error(e)
        }
    }(window, document, "adconsent", 0, "__uspapi")
}, function(e, n, t) {
    "use strict";
    t.r(n);
    var o = t(0),
        i = JSON.parse(window.sessionStorage.getItem("snSessionOverrides"));

    function r(e, n, t) {
        var o = function() {
                var o = e.getElementById("sn-session-override-warnings");
                o || ((o = e.createElement("div")).id = "sn-session-override-warnings", o.setAttribute("style", "background: darkred; position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000000; padding: 0.25em; color: white; font-family: monospace; font-size: small;"), o.innerHTML = "(!) Session overrides:", o.addEventListener("mouseover", (function() {
                    this.style.opacity = "0.20"
                })), o.addEventListener("mouseout", (function() {
                    this.style.opacity = "1"
                })), e.body.appendChild(o)), o.innerHTML += " (" + n + ":" + t + ")"
            },
            i = e.readyState;
        if ("interactive" === i || "complete" === i) o();
        else {
            e.addEventListener("DOMContentLoaded", (function n() {
                e.removeEventListener("DOMContentLoaded", n, !1), o()
            }), !1)
        }
    }! function() {
        if (window._snigelConfig = window._snigelConfig || {}, null !== i)
            for (var e in i) {
                var n = i[e];
                o.settings[e].url = n.url, o.settings[e].overrideBranch = n.branch, console.warn("Override detected. Loading '" + e + "' branch '" + n.branch + "'."), r(document, e, n.branch)
            }
        for (var t in o) _snigelConfig[t] = o[t]
    }();
    t(1);
    var a = window._snigelConfig;
    try {
        ! function() {
            var e = {
                    scripts: [{
                        name: "adconsent",
                        skipLoadOnExists: !0,
                        onLoad: {
                            emitEvent: "adnginLoaderReady",
                            scripts: [{
                                name: "pbjs",
                                obj: {
                                    que: []
                                },
                                queue: "que",
                                path: "?v=" + escape(a.version)
                            }, {
                                name: "apstag",
                                obj: {
                                    init: function() {
                                        this._Q.push(["i", arguments])
                                    },
                                    fetchBids: function() {
                                        this._Q.push(["f", arguments])
                                    },
                                    setDisplayBids: function() {},
                                    targetingKeys: function() {
                                        return []
                                    },
                                    _Q: []
                                }
                            }, {
                                name: "gpt",
                                obj: {
                                    cmd: []
                                },
                                queue: "cmd"
                            }, {
                                name: "adsbygoogle",
                                obj: []
                            }, {
                                name: "adngin",
                                obj: {
                                    queue: [],
                                    metrics: {
                                        timing: {}
                                    }
                                },
                                queue: "queue",
                                path: "/" + escape(a.site) + "/" + escape(a.version) + "/adngin.js"
                            }, {
                                name: "scripts",
                                argus: {
                                    obj: {
                                        cmd: []
                                    },
                                    queue: "cmd"
                                }
                            }]
                        }
                    }]
                },
                n = window.performance,
                t = n && n.now ? function() {
                    return Math.floor(n.now())
                } : function() {
                    return -1
                };

            function o(e, o) {
                var i = function(e) {
                    if (n && n.getEntriesByType)
                        for (var t = 0; t < n.getEntriesByType("resource").length; t++) {
                            var o = n.getEntriesByType("resource")[t];
                            if (e(o.name)) return o
                        }
                    return {
                        startTime: -1,
                        responseEnd: -1
                    }
                }(o);
                l[e] = l[e] || {}, l[e].requested = [Math.floor(i.startTime)], l[e].loaded = [Math.floor(i.responseEnd)], l[e].ready = [t()]
            }

            function i(e, n, i) {
                var r = document.createElement("script");
                r.type = "text/javascript", r.async = !0, r.onload = function() {
                    o(e, (function(e) {
                        return -1 !== e.indexOf(n.toLowerCase())
                    })), window._snigelConfig.resources[e].loaded = !0, "function" == typeof i && i()
                }, l[e] = l[e] || {}, l[e].queued = [t()], window._snigelConfig = window._snigelConfig || {}, window._snigelConfig.resources = window._snigelConfig.resources || {}, window._snigelConfig.resources[e] = {
                    scriptElement: r,
                    loaded: !1
                }, r.src = n, document.head.appendChild(r)
            }

            function r(e, n, t) {
                e.scripts.forEach((function(e) {
                    var o = a.settings[e.name];
                    o && (Array.isArray(o) || !0 !== o.load || n(o.objName, e), e.onLoad && e.onLoad.scripts && t(e.onLoad))
                }))
            }

            function s(e, n) {
                var t = n.obj;
                if (t)
                    if (window[e]) {
                        var o = window[e];
                        for (var i in t) o[i] = o[i] || t[i]
                    } else window[e] = t
            }

            function c(e, n) {
                n.queue && window[e][n.queue].push((function() {
                    l[n.name] = l[n.name] || {}, l[n.name].apiReady = [t()]
                }))
            }(window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1, window.snigelPubConf = window.snigelPubConf || {},
                function e(n) {
                    r(n, s, e)
                }(e);
            var u = window[a.settings.adngin.objName],
                l = u.metrics.timing;
            o("loader", (function(e) {
                    return /.*snigel.*loader.js$/i.test(e)
                })),
                function e(n) {
                    r(n, c, e)
                }(e),
                function e(n) {
                    if (void 0 === n) return !1;
                    n.emitEvent && (window.dispatchEvent(new CustomEvent(n.emitEvent)), u[n.emitEvent] = !0, l.loader[n.emitEvent] = [t()]), n.hasOwnProperty("scripts") && n.scripts.forEach((function(n) {
                        var t = a.settings[n.name];
                        if (t)
                            if (Array.isArray(t)) t.forEach((function(e) {
                                if (!e.freq || Math.floor(100 * Math.random()) < e.freq) {
                                    var t = e.name,
                                        o = n[t] || {};
                                    s(t, o), c(t, o), i(e.name || e.url, e.url)
                                }
                            }));
                            else {
                                var o = void 0 !== window[t.objName];
                                !0 === t.load && (!1 === o || !0 === o && !0 !== n.skipLoadOnExists) ? function(e, n) {
                                    var t = window._snigelConfig.settings[e.name].queryParameters,
                                        o = a.settings[e.name].url + (e.path || "") + (t ? "?" + t : "");
                                    i(e.name, o, n)
                                }(n, (function() {
                                    e(n.onLoad)
                                })) : e(n.onLoad)
                            }
                    }))
                }(e)
        }()
    } catch (e) {
        if (!0 === a.passThroughException) throw e;
        console.error(e)
    }
}]);