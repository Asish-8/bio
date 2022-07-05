! function() {
    "use strict";
    var c, e;
    (e = c = c || {})[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Debug = 2] = "Debug";
    var i = ["color: #fff;", "background: #ff8f1c;", "display: inline-block;", "padding: 1px 4px;", "border-radius: 3px;"].join(" "),
        u = (s.Log = function(e, t) {
            if (!(s.LOGLEVEL < e)) {
                var o = c[e].toUpperCase(),
                    r = window.navigator.userAgent,
                    n = 0 < r.indexOf("MSIE ") || 0 < r.indexOf("Trident/");
                window.console && (n ? console.log("[PubTag] " + o + ": " + t) : console.log("%cPubTag", i, o + ": " + t))
            }
        }, s.Debug = function(e) {
            s.Log(c.Debug, e)
        }, s.Warning = function(e) {
            s.Log(c.Warning, e)
        }, s.Error = function(e) {
            s.Log(c.Error, e)
        }, s.LOGLEVEL = c.Error, s);

    function s() {}

    function l(e) {
        u.LOGLEVEL = e
    }
    var p = (t.getHighestAccessibleWindow = function(e) {
        var t = e,
            o = !1;
        try {
            for (; t.parent.document !== t.document;) {
                if (!t.parent.document) {
                    o = !0;
                    break
                }
                t = t.parent
            }
        } catch (e) {
            o = !0
        }
        return {
            topFrame: t,
            err: o
        }
    }, t.getHighestAccessibleUrl = function(e) {
        var t = e.topFrame;
        if (!e.err) return t.location.href;
        try {
            var o = t.top.location.href;
            if (o) return o
        } catch (e) {}
        try {
            var r = t.location.ancestorOrigins;
            if (r) return r[r.length - 1]
        } catch (e) {}
        return t.document.referrer
    }, t.inIframe = function() {
        try {
            return window.self !== window.top
        } catch (e) {
            return !0
        }
    }, t);

    function t() {}

    function n(e) {
        try {
            return JSON.parse(e)
        } catch (e) {
            return
        }
    }
    var d = (o.prototype.getCMPFrame = function() {
        for (var e, t = this.currentWindow, o = 0; o < 10; ++o) {
            try {
                t.frames.__uspapiLocator && (e = t)
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent
        }
        return e
    }, o.prototype.hasCallerFunctionInWindow = function() {
        return "function" == typeof this.currentWindow.__uspapi
    }, o.prototype.readyToRetrieve = function() {
        return this.hasCallerFunctionInWindow() || void 0 !== this.getCMPFrame()
    }, o.prototype.retrieveConsent = function(o) {
        var r = this,
            n = !1,
            i = window.setTimeout(function() {
                n = !0, r.logger("Timeout: Unable to resolve CCPA consent after " + r.timeout + "ms"), o(void 0)
            }, this.timeout);
        this.executeCommand("getUSPData", 1, function(e, t) {
            n || (clearTimeout(i), t ? (r.logger("CCPA consent retrieved"), r.processResponseData(e, o)) : (r.logger("Error retrieving CCPA consent data from CMP"), o(void 0)))
        })
    }, o.prototype.processResponseData = function(e, t) {
        e ? t(e) : (this.logger("Unable to read CCPA consent data from CMP"), t(void 0))
    }, o.prototype.executeCommand = function(e, t, o) {
        var i = this;
        if (!this.hasCallerFunctionInWindow()) {
            this.logger("No CCPA CMP defined on current frame");
            var s = this.getCMPFrame();
            this.currentWindow.__uspapi = function(e, t, o) {
                if (!s) return i.logger("CCPA CMP not found in any frame"), void o({
                    msg: "CCPA CMP not found in any frame"
                }, !1);
                var r = Math.random().toString(10),
                    n = {
                        __uspapiCall: {
                            command: e,
                            parameter: t,
                            callId: r
                        }
                    };
                i.uspapiCallbacks[r] = o, s.postMessage(n, "*")
            }, this.currentWindow.addEventListener("message", function(e) {
                var t = "string" == typeof e.data ? n(e.data) : e.data;
                if (t && t.__uspapiReturn && t.__uspapiReturn.callId && t.__uspapiReturn.returnValue) {
                    var o = t.__uspapiReturn;
                    i.uspapiCallbacks && i.uspapiCallbacks[o.callId] && (i.uspapiCallbacks[o.callId](o.returnValue, o.success), delete i.uspapiCallbacks[o.callId])
                }
            }, !1)
        }
        this.currentWindow.__uspapi(e, t, o)
    }, o.prototype.hasUserOptOut = function(e) {
        return !(!e || !e.uspString || "1YNY" === e.uspString.toUpperCase() || "1YNN" === e.uspString.toUpperCase() || "1YN-" === e.uspString.toUpperCase() || "1-N-" === e.uspString.toUpperCase() || "1---" === e.uspString)
    }, o);

    function o(e, t, o) {
        void 0 === o && (o = function(e) {}), this.uspapiCallbacks = {}, this.currentWindow = e, this.timeout = t.uspApiTimeout, this.logger = o
    }
    var f = (r.prototype.getReadyToRetrieveProvider = function() {
        return this.tcfv2ConsentProvider.hasCallerFunctionInFrame() ? this.tcfv2ConsentProvider : this.tcfv1ConsentProvider.hasCallerFunctionInFrame() ? this.tcfv1ConsentProvider : void 0 !== this.tcfv2ConsentProvider.getCMPFrame() ? this.tcfv2ConsentProvider : void 0 !== this.tcfv1ConsentProvider.getCMPFrame() ? this.tcfv1ConsentProvider : void 0
    }, r.prototype.retrieveConsentForPassback = function(e) {
        var t = this.getReadyToRetrieveProvider();
        void 0 === t && (this.logger("No compatible GDPR privacy provider found"), e(void 0)), t === this.tcfv1ConsentProvider ? this.tcfv1ConsentProvider.retrieveConsentForPassback(e) : t === this.tcfv2ConsentProvider && this.tcfv2ConsentProvider.retrieveConsent(e)
    }, r.prototype.retrieveConsent = function(e) {
        var t = this.getReadyToRetrieveProvider();
        void 0 === t && (this.logger("No compatible GDPR privacy provider found"), e(void 0)), null == t || t.retrieveConsent(e)
    }, r.prototype.readyToRetrieve = function() {
        return this.tcfv2ConsentProvider.readyToRetrieve() || this.tcfv1ConsentProvider.readyToRetrieve()
    }, r);

    function r(e, t, o) {
        void 0 === o && (o = function(e) {}), this.tcfv1ConsentProvider = e, this.tcfv2ConsentProvider = t, this.logger = o
    }
    var h = (a.prototype.getCMPFrame = function() {
        for (var e, t = this.currentWindow, o = 0; o < 10; ++o) {
            try {
                t.frames.__cmpLocator && (e = t)
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent
        }
        return e
    }, a.prototype.hasCallerFunctionInFrame = function() {
        return "function" == typeof this.currentWindow.__cmp
    }, a.prototype.readyToRetrieve = function() {
        return this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
    }, a.prototype.pingWithTimeout = function(r, e, t, o) {
        function n(e, t) {
            i.logger(t), clearTimeout(e), o()
        }
        var i = this;
        return window.setTimeout(function() {
            var o = window.setTimeout(function() {
                n(r, "Timeout: Unable to get ping return after " + e + "ms")
            }, e);
            i.executeCommand("ping", null, function(e, t) {
                clearTimeout(o), t ? (i.logger("GDPR CMP ping returned"), !0 !== e.cmpLoaded && n(r, "GDPR ping returned cmpLoaded which is not true"), i.logger("GDPR ping returned cmpLoaded which is true")) : n(r, "Error sending ping to GDPR CMP")
            })
        }, t)
    }, a.prototype.retrieveConsent = function(e) {
        this.executeRetrieveConsent("getConsentData", null, e)
    }, a.prototype.retrieveConsentForPassback = function(e) {
        this.executeRetrieveConsent("getVendorConsents", [91], e)
    }, a.prototype.executeRetrieveConsent = function(e, t, o) {
        var r = this,
            n = !1,
            i = window.setTimeout(function() {
                n = !0, r.logger("Timeout: Unable to resolve GDPR consent after " + r.timeout + "ms"), o(void 0)
            }, this.timeout),
            s = !1 !== this.cmpAutoDetect ? this.pingWithTimeout(i, this.pingTimeout, this.pingDelay, function() {
                n = !0, r.logger("Timeout: Unable to ping GDPR API after " + r.pingTimeout + "ms"), o(void 0)
            }) : void 0;
        this.executeCommand(e, t, function(e, t) {
            clearTimeout(s), n || (clearTimeout(i), t ? (r.logger("GDPR consent retrieved"), r.processConsentData(e, o)) : (r.logger("Error retrieving GDPR consent data from CMP"), o(void 0)))
        })
    }, a.prototype.processConsentData = function(e, t) {
        if (e) {
            var o = {};
            void 0 !== e.consentData && (o.consentData = e.consentData), void 0 !== e.gdprApplies && (o.gdprApplies = !!e.gdprApplies), t(o)
        } else this.logger("Unable to read GDPR consent data from CMP"), t(void 0)
    }, a.prototype.executeCommand = function(e, t, o) {
        var i = this;
        if (!this.hasCallerFunctionInFrame()) {
            this.logger("No GDPR CMP defined on current frame");
            var s = this.getCMPFrame();
            this.currentWindow.__cmp = function(e, t, o) {
                if (!s) return i.logger("GDPR CMP not found in any frame"), void o({
                    msg: "GDPR CMP not found in any frame"
                }, !1);
                var r = Math.random().toString(10),
                    n = {
                        __cmpCall: {
                            command: e,
                            parameter: t,
                            callId: r
                        }
                    };
                i.cmpCallbacks[r] = o, s.postMessage(n, "*")
            }, this.currentWindow.addEventListener("message", function(e) {
                var t = "string" == typeof e.data ? n(e.data) : e.data;
                if (t && t.__cmpReturn && t.__cmpReturn.callId && t.__cmpReturn.returnValue) {
                    var o = t.__cmpReturn;
                    i.cmpCallbacks && i.cmpCallbacks[o.callId] && (i.cmpCallbacks[o.callId](o.returnValue, o.success), delete i.cmpCallbacks[o.callId])
                }
            }, !1)
        }
        this.currentWindow.__cmp(e, t, o)
    }, a);

    function a(e, t, o) {
        void 0 === o && (o = function(e) {}), this.cmpCallbacks = {}, this.currentWindow = e, this.timeout = t.tcfTimeout, this.pingTimeout = t.tcfPingTimeout, this.pingDelay = t.tcfPingDelay, this.cmpAutoDetect = t.cmpAutoDetect, this.logger = o
    }
    var v = (g.prototype.getCMPFrame = function() {
        for (var e, t = this.currentWindow, o = 0; o < 10; ++o) {
            try {
                t.frames.__tcfapiLocator && (e = t)
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent
        }
        return e
    }, g.prototype.hasCallerFunctionInFrame = function() {
        return "function" == typeof this.currentWindow.__tcfapi
    }, g.prototype.readyToRetrieve = function() {
        return this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
    }, g.prototype.pingWithTimeout = function(o, e, t, r) {
        function n(e, t) {
            i.logger(t), clearTimeout(e), r()
        }
        var i = this;
        return window.setTimeout(function() {
            var t = window.setTimeout(function() {
                n(o, "Timeout: Unable to get TCFv2 ping return after " + e + "ms")
            }, e);
            i.executeCommand("ping", 2, function(e) {
                clearTimeout(t), i.logger("TCFv2 CMP ping returned in ms"), "error" === e.cmpStatus ? n(o, "Error status on ping to TCFv2 CMP") : !0 !== e.cmpLoaded ? n(o, "TCFv2 ping returned cmpLoaded = false") : i.logger("TCFv2 ping returned cmpLoaded = true")
            })
        }, t)
    }, g.prototype.retrieveConsent = function(o) {
        var r = this,
            n = !1,
            i = window.setTimeout(function() {
                n = !0, r.logger("Timeout: Unable to resolve TCFv2 consent after " + r.timeout + "ms"), o(void 0)
            }, this.timeout),
            s = !1 !== this.cmpAutoDetect ? this.pingWithTimeout(i, this.pingTimeout, this.pingDelay, function() {
                n = !0, r.logger("Timeout: Unable to ping TCFv2 API after " + r.pingTimeout + "ms"), o(void 0)
            }) : void 0;
        this.executeCommand("getTCData", 2, function(e, t) {
            clearTimeout(s), n || (clearTimeout(i), t ? (r.logger("TCFv2 consent retrieved in ms"), r.processResponseData(e, o)) : (r.logger("Error retrieving TCFv2 consent data from CMP"), o(void 0)))
        }, [91])
    }, g.prototype.processResponseData = function(e, t) {
        var o, r;
        if (e) {
            var n = {};
            void 0 !== e.tcString && (n.consentData = e.tcString), void 0 !== e.gdprApplies && (n.gdprApplies = !!e.gdprApplies), n.version = e.tcfPolicyVersion ? e.tcfPolicyVersion : 2, n.purposes = null === (o = null == e ? void 0 : e.purpose) || void 0 === o ? void 0 : o.consents, n.vendorConsents = null === (r = null == e ? void 0 : e.vendor) || void 0 === r ? void 0 : r.consents, t(n)
        } else this.logger("Unable to read GDPR consent data from CMP"), t(void 0)
    }, g.prototype.executeCommand = function(e, t, o, r) {
        var s = this;
        if (!this.hasCallerFunctionInFrame()) {
            this.logger("No TCFv2 CMP defined on current frame");
            var a = this.getCMPFrame();
            this.currentWindow.__tcfapi = function(e, t, o, r) {
                if (!a) return s.logger("TCFv2 CMP not found in any frame"), void o({
                    msg: "TCFv2 CMP not found in any frame"
                }, !1);
                var n = Math.random().toString(10),
                    i = {
                        __tcfapiCall: {
                            command: e,
                            version: t,
                            parameter: r,
                            callId: n
                        }
                    };
                s.cmpCallbacks[n] = o, a.postMessage(i, "*")
            }, this.currentWindow.addEventListener("message", function(e) {
                var t = "string" == typeof e.data ? n(e.data) : e.data;
                if (t && t.__tcfapiReturn && t.__tcfapiReturn.callId && t.__tcfapiReturn.returnValue) {
                    var o = t.__tcfapiReturn;
                    s.cmpCallbacks && s.cmpCallbacks[o.callId] && "function" == typeof s.cmpCallbacks[o.callId] && (s.cmpCallbacks[o.callId](o.returnValue, o.success), delete s.cmpCallbacks[o.callId])
                }
            }, !1)
        }
        this.currentWindow.__tcfapi(e, t, o, r)
    }, g);

    function g(e, t, o) {
        void 0 === o && (o = function(e) {}), this.cmpCallbacks = {}, this.currentWindow = e, this.timeout = t.tcfTimeout, this.pingTimeout = t.tcfPingTimeout, this.pingDelay = t.tcfPingDelay, this.cmpAutoDetect = t.cmpAutoDetect, this.logger = o
    }
    var m = (y.prototype.checkLocalStorage = function(e) {
        if (!this.localStorage) return !1;
        var t = this.CHECK_STORAGE_KEY;
        try {
            return this.localStorage.setItem(t, t), this.localStorage.removeItem(t), !!this.checkTcfPurposeOne(e) || (u.Debug("Purpose One not granted"), !1)
        } catch (e) {
            return !1
        }
    }, y.prototype.checkTcfPurposeOne = function(e) {
        return !e || !e.purposes || !0 === e.purposes[1]
    }, y.prototype.removeItem = function(e) {
        this.localStorageEnabled && (this.localStorage.removeItem(e), this.localStorage.removeItem(e + this.EXPIRE_SUFFIX))
    }, y.prototype.getItem = function(e, t) {
        if (!this.localStorageEnabled) return null;
        var o = (new Date).getTime(),
            r = this.localStorage.getItem(e + this.EXPIRE_SUFFIX),
            n = r ? parseInt(r, 10) : -1;
        return -1 !== n && n < o || t && (-1 === n || t < n - o) ? (this.removeItem(e), null) : this.localStorage.getItem(e)
    }, y.prototype.setItem = function(e, t, o) {
        if (this.localStorageEnabled) try {
            if (this.localStorage.setItem(e, t), o) {
                var r = (new Date).getTime() + o;
                this.localStorage.setItem(e + this.EXPIRE_SUFFIX, r.toString())
            }
        } catch (e) {}
    }, y.prototype.getAllItemsByPrefix = function(e) {
        var t = [];
        if (this.localStorageEnabled)
            for (var o in localStorage) 0 === o.indexOf(e) && t.push(o);
        return t
    }, y);

    function y(e, t) {
        this.EXPIRE_SUFFIX = "_expires", this.CHECK_STORAGE_KEY = "criteo_localstorage_check", this.localStorage = function(e) {
            try {
                return e.localStorage
            } catch (e) {
                return
            }
        }(e || window), this.localStorageEnabled = this.checkLocalStorage(t)
    }
    var C = (_.prototype.checkTcfPurposeOne = function(e) {
        return !e || !e.purposes || !0 === e.purposes[1]
    }, _.prototype.setCookie = function(e, t, o, r, n) {
        void 0 === n && (n = !1);
        var i = r || document,
            s = i.location.hostname,
            a = new Date;
        a.setTime(a.getTime() + 60 * o * 60 * 1e3);
        var c = "expires=" + a.toUTCString();
        if (!n) return this.setCookieString(e, t, c, void 0, i), s;
        for (var u = s.split("."), l = 1; l < u.length; ++l) {
            var p = u.slice(u.length - l - 1, u.length).join(".");
            if (!(-1 < this.publicTopTlds.indexOf(p))) try {
                this.setCookieString(e, t, c, p, i);
                var d = this.getCookie(e, r);
                if (d && d === t) return p
            } catch (e) {}
        }
        return s
    }, _.prototype.deleteCookie = function(e, t, o) {
        void 0 === o && (o = !1), this.setCookie(e, "", 0, t, o)
    }, _.prototype.getCookie = function(e, t) {
        if (this.cookiesEnabled)
            for (var o = 0, r = (t || document).cookie.split(";"); o < r.length; o++) {
                var n = r[o],
                    i = n.substr(0, n.indexOf("=")).replace(/^\s+|\s+$/g, ""),
                    s = n.substr(n.indexOf("=") + 1);
                if (i === e) return decodeURIComponent(s)
            }
    }, _.prototype.setCookieString = function(e, t, o, r, n) {
        if (this.cookiesEnabled) {
            var i = e + "=" + encodeURIComponent(t) + ";" + o + ";";
            r && "" !== r && (i += "domain=." + r + ";"), n.cookie = i + "path=/"
        }
    }, _);

    function _(e) {
        this.publicTopTlds = ["co.id", "co.il", "co.jp", "co.kr", "co.nz", "co.th", "co.uk", "com.au", "com.br", "com.mx", "com.my", "com.pl", "com.sg", "com.tr", "com.vn"], this.cookiesEnabled = this.checkTcfPurposeOne(e)
    }
    var w = (b.prototype.initializeServices = function() {
        var r = this;
        this.initializing = !0, this.retrievePrivacyConsent(function(e, t) {
            var o = {
                localStorageHelper: new m(r.topFrame, t),
                gdprConsent: t,
                ccpaConsentProvider: r.ccpaConsentProvider,
                ccpaConsent: e,
                cookieHelper: new C(t)
            };
            r.services = o, r.initialized = !0, r.initializing = !1, r.postInitiliazeServicesCallbacks.forEach(function(e) {
                e(o)
            })
        })
    }, b.prototype.getServicesAsync = function(e) {
        this.initialized ? e(this.services) : (this.postInitiliazeServicesCallbacks.push(e), this.initializing || this.initializeServices())
    }, b.prototype.retrievePrivacyConsent = function(t) {
        var e = this.tcfCompatibleConsentProvider.readyToRetrieve(),
            o = this.ccpaConsentProvider.readyToRetrieve();
        e || o || t(void 0, void 0);
        var r, n, i = [];
        e && i.push(f), o && i.push(d), e && this.tcfCompatibleConsentProvider.retrieveConsent(function(e) {
            i.splice(i.indexOf(f), 1), 0 === i.length ? t(n, e) : r = e
        }), o && this.ccpaConsentProvider.retrieveConsent(function(e) {
            i.splice(i.indexOf(d), 1), 0 === i.length ? t(e, r) : n = e
        })
    }, b);

    function b(e, t, o, r) {
        this.initializing = !1, this.initialized = !1, this.postInitiliazeServicesCallbacks = [], this.topFrame = e || window;
        var n, i = (n = r, {
            uspApiTimeout: parseInt("50", 10),
            tcfTimeout: parseInt("10000", 10),
            tcfPingTimeout: Math.min(parseInt("10000", 10), parseInt("50", 10)),
            tcfPingDelay: Math.min(parseInt("10000", 10), parseInt("1000", 10)),
            cmpAutoDetect: null == n ? void 0 : n.cmpAutoDetect
        });
        this.ccpaConsentProvider = t || new d(window, i, u.Warning);
        var s = new h(window, i, u.Warning),
            a = new v(window, i, u.Warning);
        this.tcfCompatibleConsentProvider = o || new f(s, a, u.Warning), this.initializeServices()
    }

    function S(t, o) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
            return void 0 !== o ? o : t
        }
    }

    function A(e) {
        var t = {},
            o = e.split("?");
        if (1 < o.length)
            for (var r = 0, n = o[1].split("&"); r < n.length; r++) {
                var i = n[r].split("=");
                t[S(i[0])] = S(i[1])
            }
        return t
    }
    var P = function(e, t) {
        return (P = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            })(e, t)
    };

    function I(e, t) {
        function o() {
            this.constructor = e
        }
        P(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    }
    var D, T, E, O;
    (T = D = D || {})[T.None = 0] = "None", T[T.Cookie = 1] = "Cookie", T[T.LocalStorage = 2] = "LocalStorage", T[T.Delegation = 4] = "Delegation", (O = E = E || {})[O.Unknown = 0] = "Unknown", O[O.Deactivated = 1] = "Deactivated", O[O.Activated = 2] = "Activated";
    var k = (F.prototype.getSid = function() {
        return this.userDataHandlers.sid().fromAllStorages()
    }, F.prototype.getIdCpy = function() {
        return this.userDataHandlers.idCpy().fromAllStorages()
    }, F.prototype.getLocalWebId = function() {
        return this.userDataHandlers.localWebId().fromAllStorages()
    }, F.prototype.getOptOut = function() {
        return this.userDataHandlers.optOut().fromAllStorages()
    }, F.prototype.getBundle = function() {
        return this.userDataHandlers.bundle().fromAllStorages()
    }, F);

    function F(e) {
        this.userDataHandlers = e
    }
    var R = (M.fromUserIdentificationData = function(e) {
        return new M(e.value, e.origin)
    }, M.fromValue = function(e) {
        return new M(e, D.None)
    }, M.prototype.hasValue = function() {
        return "" !== String(this.value) && null !== this.value && void 0 !== this.value
    }, M);

    function M(e, t) {
        this.value = e, this.origin = t
    }
    var U, W = (I(H, U = R), H.prototype.hasValue = function() {
        return "" !== String(this.value) && null !== this.value && void 0 !== this.value
    }, H.prototype.saveOnAllStorages = function() {
        if (this.hasValue()) {
            var e = "boolean" == typeof this.value ? this.value ? "1" : "0" : String(this.value);
            this.storageAdapter.writeToAllStorages(this.storageKey, e, this.expirationTimeHours)
        }
    }, H.prototype.toJSON = function() {
        return {
            value: this.value,
            origin: this.origin
        }
    }, H);

    function H(e, t, o, r, n) {
        var i = U.call(this, o, r) || this;
        return i.storageKey = e, i.expirationTimeHours = t, i.storageAdapter = n, i
    }
    var L = (N.prototype.sid = function() {
        return this.createGuid(N.SID_COOKIE_NAME)
    }, N.prototype.idCpy = function() {
        return this.createGuid(N.IDCPY_COOKIE_NAME)
    }, N.prototype.localWebId = function() {
        return this.createGuid(N.LWID_COOKIE_NAME)
    }, N.prototype.optOut = function() {
        return new x(Boolean, N.OPTOUT_COOKIE_NAME, N.OPTOUT_RETENTION_TIME_HOUR, this.storageAdapter)
    }, N.prototype.bundle = function() {
        return this.createGuid(N.BUNDLE_COOKIE_NAME)
    }, N.prototype.createGuid = function(e) {
        return new x(String, e, N.GUID_RETENTION_TIME_HOUR, this.storageAdapter)
    }, N.SID_COOKIE_NAME = "cto_sid", N.IDCPY_COOKIE_NAME = "cto_idcpy", N.LWID_COOKIE_NAME = "cto_lwid", N.OPTOUT_COOKIE_NAME = "cto_optout", N.BUNDLE_COOKIE_NAME = "cto_bundle", N.GUID_RETENTION_TIME_HOUR = 9360, N.OPTOUT_RETENTION_TIME_HOUR = 43200, N);

    function N(e) {
        this.storageAdapter = e
    }
    var x = (G.prototype.fromAllStorages = function() {
        var e = this.storageAdapter.readFromAllStorages(this.storageKey),
            t = "boolean" == typeof(new this.type).valueOf() ? "1" === e.value : e.value;
        return this.create(t, e.origin)
    }, G.prototype.fromValue = function(e) {
        return this.create(e, D.None)
    }, G.prototype.removeFromAllStorages = function() {
        this.storageAdapter.removeFromAllStorages(this.storageKey)
    }, G.prototype.create = function(e, t) {
        return new W(this.storageKey, this.expirationTimeHours, e, t, this.storageAdapter)
    }, G);

    function G(e, t, o, r) {
        this.type = e, this.storageKey = t, this.expirationTimeHours = o, this.storageAdapter = r
    }
    var V = (q.prototype.getSyncframeListener = function(o, r) {
        var n = this;
        return function(e) {
            if (!n.discardMessageFromOtherFrames(e) || n.window.criteo_syncframe_state.ForceSyncframeMessageHandling) {
                var t = e.data;
                (null == t ? void 0 : t.requestId) === o && (e.stopImmediatePropagation(), n.handleSyncframeResponse(t, r), n.window.criteo_syncframe_state.firstSyncframeCompleted = !0, n.window.criteo_syncframe_state.syncframeRequested = !1, n.tryUnqueueAppendSyncframeRequests())
            }
        }
    }, q.prototype.userBundleHasAlreadyBeenRetrieved = function() {
        return this.userDataHandlers.bundle().fromAllStorages().hasValue()
    }, q.prototype.canDropSyncframe = function() {
        return !this.window.criteo_syncframe_state.syncframeRequested
    }, q.prototype.discardMessageFromOtherFrames = function(e) {
        return !e.data || e.origin != this.syncframeOrigin
    }, q.prototype.appendGumIframeIfDoesNotExist = function(e, t, o) {
        var r, n = this;
        !0 === (null === (r = this.window.criteo_syncframe_state) || void 0 === r ? void 0 : r.firstSyncframeCompleted) || this.userBundleHasAlreadyBeenRetrieved() || this.canDropSyncframe() ? this.appendGumIframe(e, t, o) : this.queueAppendSyncframeRequest(function() {
            return n.appendGumIframeIfDoesNotExist(e, t, o)
        })
    }, q.prototype.doOnCompletedDom = function(e) {
        var t = this;
        if (this.window.addEventListener)
            if ("complete" === this.document.readyState) e();
            else {
                var o = function() {
                    t.window.removeEventListener("load", o), t.document.removeEventListener("DOMContentLoaded", o), e()
                };
                this.window.addEventListener("load", o, !1), this.document.addEventListener("DOMContentLoaded", o, !1)
            }
    }, q.prototype.appendGumIframe = function(e, t, o) {
        t();
        var r = e();
        if (this.consentAllowsSyncframeToBeDropped(r.consent)) {
            this.window.addEventListener("message", this.getSyncframeListener(r.requestId, o), !0);
            var n = this.createIFrame(r);
            this.document.body.appendChild(n), this.window.criteo_syncframe_state.syncframeRequested = !0
        } else this.handleSyncframeResponse({}, o)
    }, q.prototype.consentAllowsSyncframeToBeDropped = function(e) {
        var t;
        return 2 !== (null == e ? void 0 : e.gdprVersion) || !0 !== (null == e ? void 0 : e.gdprApplies) || !0 === (null === (t = null == e ? void 0 : e.vendorConsents) || void 0 === t ? void 0 : t[this.criteoGlobalVendorListId])
    }, q.prototype.queueAppendSyncframeRequest = function(e) {
        void 0 !== this.window.criteo_syncframe_state.appendSyncframeRequestQueue && this.window.criteo_syncframe_state.appendSyncframeRequestQueue.push(e)
    }, q.prototype.tryUnqueueAppendSyncframeRequests = function() {
        for (var e, t, o = null === (e = this.window.criteo_syncframe_state.appendSyncframeRequestQueue) || void 0 === e ? void 0 : e.shift(); void 0 !== o;) o(), o = null === (t = this.window.criteo_syncframe_state.appendSyncframeRequestQueue) || void 0 === t ? void 0 : t.shift()
    }, q.prototype.createIFrame = function(e) {
        var t, o = this.document.createElement("iframe"),
            r = {
                uid: e.uid,
                lwid: e.localWebId,
                bundle: e.bundle,
                optout: e.optoutCookie,
                sid: e.secureIdCookie,
                tld: e.topLevelDomain,
                topUrl: e.topUrl,
                version: "string" == typeof e.version ? null === (t = e.version) || void 0 === t ? void 0 : t.replace(/\./g, "_") : e.version,
                cw: e.canWriteCookie,
                lsw: e.canWriteLocalStorage,
                origin: e.origin,
                pm: e.privateMode,
                rtusCallerId: e.rtusCallerId,
                requestId: e.requestId
            },
            n = [];
        return n.push("origin=" + e.origin), n.push("topUrl=" + e.topUrl), e.consent && (void 0 !== e.consent.gdprApplies && n.push("gdpr=" + (e.consent.gdprApplies ? 1 : 0)), void 0 !== e.consent.consentData && n.push("gdpr_consent=" + e.consent.consentData), void 0 !== e.consent.uspString && n.push("us_privacy=" + e.consent.uspString)), e.isDebug && n.push("debug=1"), o.src = this.syncframeEndpoint + "?" + n.join("&") + "#" + JSON.stringify(r), o.width = "0", o.height = "0", o.frameBorder = "0", o.style.borderWidth = "0px", o.style.margin = "0px", o.style.display = "none", o.title = "Criteo GUM iframe", o
    }, q);

    function q(e, t, o) {
        this.syncframeOrigin = o, this.criteoGlobalVendorListId = 91, this.window = e, this.document = e.document, this.userDataHandlers = new L(t), this.syncframeEndpoint = (null != o ? o : "https://gum.criteo.com") + "/syncframe", this.window.criteo_syncframe_state || (this.window.criteo_syncframe_state = {
            syncframeRequested: !1
        }), this.window.criteo_syncframe_state.appendSyncframeRequestQueue || (this.window.criteo_syncframe_state.appendSyncframeRequestQueue = [])
    }
    var K, z = (I(j, K = V), j.prototype.handleSyncframeResponse = function(e, t) {
        var o;
        if (e.optout) this.userDataHandlers.idCpy().removeFromAllStorages(), this.userDataHandlers.sid().removeFromAllStorages(), this.userDataHandlers.bundle().removeFromAllStorages(), this.userDataHandlers.optOut().fromValue(!0).saveOnAllStorages(), null === (o = null == t ? void 0 : t.resolve) || void 0 === o || o.call(t, "");
        else {
            if (e.uid && this.userDataHandlers.idCpy().fromValue(e.uid).saveOnAllStorages(), e.callbacks)
                for (var r = 0, n = "string" == typeof e.callbacks ? [e.callbacks] : e.callbacks; r < n.length; r++) {
                    var i = n[r],
                        s = this.document.createElement("img");
                    s.style.display = "none", s.width = 1, s.height = 1, s.setAttribute("data-owner", "criteo-tag"), s.src = i
                } else e.bundle && this.userDataHandlers.bundle().fromValue(e.bundle).saveOnAllStorages();
            e.removeSid ? this.userDataHandlers.sid().removeFromAllStorages() : e.sid && this.userDataHandlers.sid().fromValue(e.sid).saveOnAllStorages(), (null == t ? void 0 : t.resolve) && t.resolve(e.bundle ? e.bundle : "")
        }
    }, j.prototype.appendGumIFrameOnCompletedDomIfItDoesNotExist = function(e, t) {
        function o() {
            return r.appendGumIframeIfDoesNotExist(function() {
                return r.createSyncframeRequest(e(), n)
            }, function() {}, {
                resolve: t
            })
        }
        var r = this,
            n = Math.random().toString();
        this.adapter.isPubTagIds ? o() : this.doOnCompletedDom(o)
    }, j.prototype.createSyncframeRequest = function(e, t) {
        return {
            uid: this.userDataHandlers.idCpy().fromAllStorages().toJSON(),
            localWebId: this.userDataHandlers.localWebId().fromAllStorages().toJSON(),
            bundle: this.userDataHandlers.bundle().fromAllStorages().toJSON(),
            optoutCookie: this.userDataHandlers.optOut().fromAllStorages().toJSON(),
            secureIdCookie: this.userDataHandlers.sid().fromAllStorages().toJSON(),
            topLevelDomain: e.topLevelDomain,
            topUrl: e.topUrl,
            version: e.version,
            canWriteCookie: e.canWriteCookie,
            canWriteLocalStorage: e.canWriteLocalStorage,
            origin: this.adapter.isPubTagIds ? "publishertagids" : "publishertag",
            privateMode: void 0,
            consent: e.consent,
            rtusCallerId: void 0,
            isDebug: this.adapter.isDebug,
            requestId: t
        }
    }, j.prototype.fetchUserData = function() {
        return new k(this.userDataHandlers)
    }, j);

    function j(e, t) {
        var o = K.call(this, t, e.storageAdapter, "https://gum.criteo.com") || this;
        return o.adapter = e, o
    }
    var B = (Y.prototype.synchronizeCriteoUid = function(o, e) {
        var r = this;
        this.syncframe.appendGumIFrameOnCompletedDomIfItDoesNotExist(function() {
            return {
                topLevelDomain: r.getTld(),
                topUrl: encodeURIComponent((e = r.topUrl, (t = document.createElement("a")).href = e, {
                    protocol: t.protocol,
                    host: t.host,
                    hostname: t.hostname,
                    pathname: "/" === t.pathname[0] ? t.pathname.slice(1) : t.pathname,
                    search: t.search,
                    href: t.href
                }).hostname),
                version: 123,
                canWriteCookie: r.canWriteCookies,
                canWriteLocalStorage: r.localStorageHelper.localStorageEnabled,
                consent: {
                    gdprApplies: null == o ? void 0 : o.gdprApplies,
                    consentData: null == o ? void 0 : o.consentData || "",
                    gdprVersion: null == o ? void 0 : o.version,
                    vendorConsents: null == o ? void 0 : o.vendorConsents,
                    uspString: void 0,
                    ccpaVersion: void 0
                }
            };
            var e, t
        }, e)
    }, Y.prototype.checkCookiesAreWriteable = function() {
        var e = "cto_writeable";
        this.cookieHelper.setCookie(e, "1", 1, this.topDoc, !0);
        var t = "1" === this.cookieHelper.getCookie(e, this.topDoc);
        return this.cookieHelper.deleteCookie(e, this.topDoc, !0), t
    }, Y.prototype.writeOnAllStorages = function(e, t, o) {
        this.localStorageHelper.setItem(e, t), this.cookieHelper.setCookie(e, t, o, this.topDoc, !0)
    }, Y.prototype.getFromAllStorages = function(e) {
        var t = this.cookieHelper.getCookie(e, this.topDoc),
            o = this.localStorageHelper.getItem(e) || void 0;
        return {
            value: t || o,
            origin: (t && D.Cookie) | (o && D.LocalStorage)
        }
    }, Y.prototype.deleteFromAllStorage = function(e) {
        this.cookieHelper.deleteCookie(e, this.topDoc, !0), this.localStorageHelper.removeItem(e)
    }, Y.prototype.getTld = function() {
        var e = this.cookieHelper.setCookie(Y.TLD_TEST_COOKIE_NAME, "test", 1, this.topDoc, !0);
        return this.cookieHelper.deleteCookie(Y.TLD_TEST_COOKIE_NAME, this.topDoc, !0), e
    }, Y.prototype.fetchUserData = function() {
        return this.syncframe.fetchUserData()
    }, Y.TLD_TEST_COOKIE_NAME = "cto_pub_test_tld", Y);

    function Y(e, t, o, r, n, i) {
        var s = this;
        this.topDoc = o.document, this.cookieHelper = e, this.localStorageHelper = t, this.canWriteCookies = this.checkCookiesAreWriteable(), this.topUrl = n, this.syncframe = new z({
            storageAdapter: {
                readFromAllStorages: function(e) {
                    var t = s.getFromAllStorages(e);
                    return {
                        value: t.value,
                        origin: t.origin
                    }
                },
                writeToAllStorages: function(e, t, o) {
                    s.writeOnAllStorages(e, t, o)
                },
                removeFromAllStorages: function(e) {
                    s.deleteFromAllStorage(e)
                }
            },
            isPubTagIds: null != i && i,
            isDebug: r
        }, o)
    }

    function J(e) {
        window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(e)
    }
    var X = (Q.VERSION = 123, Q);

    function Q(e) {
        var t;
        void 0 === e && (e = null === (t = window.Criteo_identitytag_123 || window.Criteo) || void 0 === t ? void 0 : t.config);
        var i = p.getHighestAccessibleWindow(window),
            s = p.getHighestAccessibleUrl(i),
            o = new w(i.topFrame, void 0, void 0, e),
            a = "1" === A(s).pbt_debug || !1;
        a && l(c.Debug), o.getServicesAsync(function(o) {
            var e, t;
            if (!(null === (e = o.ccpaConsentProvider) || void 0 === e ? void 0 : e.hasUserOptOut(o.ccpaConsent))) {
                var r = new B(o.cookieHelper, o.localStorageHelper, i.topFrame, a, s, !0),
                    n = new Promise(function(t, e) {
                        r.synchronizeCriteoUid(o.gdprConsent, function(e) {
                            u.Debug("Resolving GPT ESP Promise"), t(e)
                        })
                    });
                t = n, J(function() {
                    window.googletag.encryptedSignalProviders || (window.googletag.encryptedSignalProviders = []), u.Debug("Promise set for GPT ESP"), window.googletag.encryptedSignalProviders.push({
                        id: "esp.criteo.com",
                        collectorFunction: function() {
                            return u.Debug("Returning Promise to GPT"), t
                        }
                    })
                })
            }
        }), u.Debug("Publisher Tag loaded")
    }
    var $ = (Z.prototype.synchronizeCriteoUid = function(e, t, o, r) {
        var n, i = (null === (n = this.cookieSynchronizerFactory) || void 0 === n ? void 0 : n.call(this)) || new B(t, e, this.highestAccessibleWindowStruct.topFrame, this.debugMode, this.highestAccessibleUrl, !1),
            s = i.fetchUserData();
        o(s.getIdCpy().value, s.getOptOut().value, s.getSid().value, s.getBundle().value), i.synchronizeCriteoUid(r)
    }, Z.prototype.getServicesAndSyncCriteoUid = function(o) {
        var r = this;
        void 0 === o && (o = function(e, t, o, r) {}), this.serviceProvider.getServicesAsync(function(e) {
            var t;
            (null === (t = e.ccpaConsentProvider) || void 0 === t ? void 0 : t.hasUserOptOut(e.ccpaConsent)) || r.synchronizeCriteoUid(e.localStorageHelper, e.cookieHelper, o, e.gdprConsent)
        })
    }, Z.setIdentities = function() {
        return 42
    }, Z);

    function Z(e, t, o, r, n) {
        this.highestAccessibleWindowStruct = p.getHighestAccessibleWindow(t), this.highestAccessibleUrl = p.getHighestAccessibleUrl(this.highestAccessibleWindowStruct);
        var i = A(this.highestAccessibleUrl);
        this.debugMode = "1" === i.pbt_debug || !1, this.debugMode && l(c.Debug), this.cookieSynchronizerFactory = o, this.serviceProvider = r || new w(this.highestAccessibleWindowStruct.topFrame, void 0, void 0, n)
    }
    var ee = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    var te, oe = (function(e, t) {
            var o;
            o = function() {
                function c(e) {
                    return "function" == typeof e
                }
                var o = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    r = 0,
                    t = void 0,
                    n = void 0,
                    s = function(e, t) {
                        d[r] = e, d[r + 1] = t, 2 === (r += 2) && (n ? n(f) : y())
                    };
                var e = "undefined" != typeof window ? window : void 0,
                    i = e || {},
                    a = i.MutationObserver || i.WebKitMutationObserver,
                    u = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                    l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function p() {
                    var e = setTimeout;
                    return function() {
                        return e(f, 1)
                    }
                }
                var d = new Array(1e3);

                function f() {
                    for (var e = 0; e < r; e += 2) {
                        (0, d[e])(d[e + 1]), d[e] = void 0, d[e + 1] = void 0
                    }
                    r = 0
                }
                var h, v, g, m, y = void 0;

                function C(e, t) {
                    var o = this,
                        r = new this.constructor(b);
                    void 0 === r[w] && W(r);
                    var n = o._state;
                    if (n) {
                        var i = arguments[n - 1];
                        s(function() {
                            return M(n, r, i, o._result)
                        })
                    } else F(o, r, e, t);
                    return r
                }

                function _(e) {
                    if (e && "object" == typeof e && e.constructor === this) return e;
                    var t = new this(b);
                    return T(t, e), t
                }
                y = u ? function() {
                    return process.nextTick(f)
                } : a ? (v = 0, g = new a(f), m = document.createTextNode(""), g.observe(m, {
                    characterData: !0
                }), function() {
                    m.data = v = ++v % 2
                }) : l ? ((h = new MessageChannel).port1.onmessage = f, function() {
                    return h.port2.postMessage(0)
                }) : (void 0 === e ? function() {
                    try {
                        var e = Function("return this")().require("vertx");
                        return void 0 !== (t = e.runOnLoop || e.runOnContext) ? function() {
                            t(f)
                        } : p()
                    } catch (e) {
                        return p()
                    }
                } : p)();
                var w = Math.random().toString(36).substring(2);

                function b() {}
                var S = void 0,
                    A = 1,
                    P = 2;

                function I(e, r, n) {
                    s(function(t) {
                        var o = !1,
                            e = function(e, t, o, r) {
                                try {
                                    e.call(t, o, r)
                                } catch (e) {
                                    return e
                                }
                            }(n, r, function(e) {
                                o || (o = !0, (r !== e ? T : O)(t, e))
                            }, function(e) {
                                o || (o = !0, k(t, e))
                            }, t._label);
                        !o && e && (o = !0, k(t, e))
                    }, e)
                }

                function D(e, t, o) {
                    var r, n;
                    t.constructor === e.constructor && o === C && t.constructor.resolve === _ ? (r = e, (n = t)._state === A ? O(r, n._result) : n._state === P ? k(r, n._result) : F(n, void 0, function(e) {
                        return T(r, e)
                    }, function(e) {
                        return k(r, e)
                    })) : void 0 === o ? O(e, t) : c(o) ? I(e, t, o) : O(e, t)
                }

                function T(t, e) {
                    if (t === e) k(t, new TypeError("You cannot resolve a promise with itself"));
                    else if (n = typeof(r = e), null === r || "object" != n && "function" != n) O(t, e);
                    else {
                        var o = void 0;
                        try {
                            o = e.then
                        } catch (e) {
                            return void k(t, e)
                        }
                        D(t, e, o)
                    }
                    var r, n
                }

                function E(e) {
                    e._onerror && e._onerror(e._result), R(e)
                }

                function O(e, t) {
                    e._state === S && (e._result = t, e._state = A, 0 !== e._subscribers.length && s(R, e))
                }

                function k(e, t) {
                    e._state === S && (e._state = P, e._result = t, s(E, e))
                }

                function F(e, t, o, r) {
                    var n = e._subscribers,
                        i = n.length;
                    e._onerror = null, n[i] = t, n[i + A] = o, n[i + P] = r, 0 === i && e._state && s(R, e)
                }

                function R(e) {
                    var t = e._subscribers,
                        o = e._state;
                    if (0 !== t.length) {
                        for (var r = void 0, n = void 0, i = e._result, s = 0; s < t.length; s += 3) r = t[s], n = t[s + o], r ? M(o, r, n, i) : n(i);
                        e._subscribers.length = 0
                    }
                }

                function M(e, t, o, r) {
                    var n = c(o),
                        i = void 0,
                        s = void 0,
                        a = !0;
                    if (n) {
                        try {
                            i = o(r)
                        } catch (e) {
                            a = !1, s = e
                        }
                        if (t === i) return void k(t, new TypeError("A promises callback cannot return that same promise."))
                    } else i = r;
                    t._state !== S || (n && a ? T(t, i) : !1 === a ? k(t, s) : e === A ? O(t, i) : e === P && k(t, i))
                }
                var U = 0;

                function W(e) {
                    e[w] = U++, e._state = void 0, e._result = void 0, e._subscribers = []
                }
                var H = (L.prototype._enumerate = function(e) {
                    for (var t = 0; this._state === S && t < e.length; t++) this._eachEntry(e[t], t)
                }, L.prototype._eachEntry = function(t, e) {
                    var o = this._instanceConstructor,
                        r = o.resolve;
                    if (r === _) {
                        var n = void 0,
                            i = void 0,
                            s = !1;
                        try {
                            n = t.then
                        } catch (e) {
                            s = !0, i = e
                        }
                        if (n === C && t._state !== S) this._settledAt(t._state, e, t._result);
                        else if ("function" != typeof n) this._remaining--, this._result[e] = t;
                        else if (o === N) {
                            var a = new o(b);
                            s ? k(a, i) : D(a, t, n), this._willSettleAt(a, e)
                        } else this._willSettleAt(new o(function(e) {
                            return e(t)
                        }), e)
                    } else this._willSettleAt(r(t), e)
                }, L.prototype._settledAt = function(e, t, o) {
                    var r = this.promise;
                    r._state === S && (this._remaining--, e === P ? k(r, o) : this._result[t] = o), 0 === this._remaining && O(r, this._result)
                }, L.prototype._willSettleAt = function(e, t) {
                    var o = this;
                    F(e, void 0, function(e) {
                        return o._settledAt(A, t, e)
                    }, function(e) {
                        return o._settledAt(P, t, e)
                    })
                }, L);

                function L(e, t) {
                    this._instanceConstructor = e, this.promise = new e(b), this.promise[w] || W(this.promise), o(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? O(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && O(this.promise, this._result))) : k(this.promise, new Error("Array Methods must be provided an Array"))
                }
                var N = (x.prototype.catch = function(e) {
                    return this.then(null, e)
                }, x.prototype.finally = function(t) {
                    var o = this.constructor;
                    return c(t) ? this.then(function(e) {
                        return o.resolve(t()).then(function() {
                            return e
                        })
                    }, function(e) {
                        return o.resolve(t()).then(function() {
                            throw e
                        })
                    }) : this.then(t, t)
                }, x);

                function x(e) {
                    this[w] = U++, this._result = this._state = void 0, this._subscribers = [], b !== e && ("function" != typeof e && function() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(), this instanceof x ? function(t, e) {
                        try {
                            e(function(e) {
                                T(t, e)
                            }, function(e) {
                                k(t, e)
                            })
                        } catch (e) {
                            k(t, e)
                        }
                    }(this, e) : function() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                }
                return N.prototype.then = C, N.all = function(e) {
                    return new H(this, e).promise
                }, N.race = function(n) {
                    var i = this;
                    return o(n) ? new i(function(e, t) {
                        for (var o = n.length, r = 0; r < o; r++) i.resolve(n[r]).then(e, t)
                    }) : new i(function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    })
                }, N.resolve = _, N.reject = function(e) {
                    var t = new this(b);
                    return k(t, e), t
                }, N._setScheduler = function(e) {
                    n = e
                }, N._setAsap = function(e) {
                    s = e
                }, N._asap = s, N.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== ee) e = ee;
                    else if ("undefined" != typeof self) e = self;
                    else try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var t = e.Promise;
                    if (t) {
                        var o = null;
                        try {
                            o = Object.prototype.toString.call(t.resolve())
                        } catch (e) {}
                        if ("[object Promise]" === o && !t.cast) return
                    }
                    e.Promise = N
                }, N.Promise = N
            }, e.exports = o()
        }(te = {
            exports: {}
        }, te.exports), te.exports).polyfill,
        re = (ne.LoadPolyfills = function() {
            ne.DefineIsArray(), ne.DefineIndexOf(), ne.DefineFilter(), ne.DefinePromise()
        }, ne.DefinePromise = function() {
            window.Promise || oe()
        }, ne.DefineIsArray = function() {
            Array.isArray || (Array.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            })
        }, ne.DefineIndexOf = function() {
            Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
                if (void 0 === t && (t = 0), void 0 === this) throw new TypeError("'this' is null or not defined");
                var o = this.length;
                if (0 === o) return -1;
                if (o <= t) return -1;
                for (var r = Math.max(0 <= t ? t : o - Math.abs(t), 0); r < o;) {
                    if (r in this && this[r] === e) return r;
                    r++
                }
                return -1
            })
        }, ne.DefineFilter = function() {
            Array.prototype.filter || (Array.prototype.filter = function(e) {
                if (void 0 === this || void 0 === this) throw new TypeError;
                var t = this.length;
                if ("function" != typeof e) throw new TypeError;
                for (var o = [], r = 2 <= arguments.length ? arguments[1] : void 0, n = 0; n < t; n++)
                    if (n in this) {
                        var i = this[n];
                        e.call(r, i, n, this) && o.push(i)
                    }
                return o
            })
        }, ne);

    function ne() {}

    function ie(e) {
        function t() {
            try {
                return o.apply(this, arguments)
            } catch (e) {
                u.Error("Exception caught: " + e.toString())
            }
        }
        var o = e;
        for (var r in t.prototype = o.prototype, o) o.hasOwnProperty(r) && (t[r] = o[r]);
        return t
    }
    window.criteo_pubtag || (re.LoadPolyfills(), window.criteo_pubtag = new X, window.criteo_identitytag_123 = window.criteo_pubtag), window.Criteo = function e(t) {
        for (var o in t)
            if (o in t) {
                var r = t[o];
                "function" == typeof r ? t[o] = ie(r) : "object" == typeof r && (t[o] = e(r))
            }
        return t
    }({
        SetIdentities: $.setIdentities
    }), window.Criteo_identitytag_123 = window.Criteo
}();