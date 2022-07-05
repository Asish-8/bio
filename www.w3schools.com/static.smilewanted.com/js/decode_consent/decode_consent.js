! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.sw_consent = t() : e.sw_consent = t()
}(self, (function() {
    return (() => {
        "use strict";
        var e = {
                186: function(e, t) {
                    var n = this && this.__values || function(e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                            n = t && e[t],
                            r = 0;
                        if (n) return n.call(e);
                        if (e && "number" == typeof e.length) return {
                            next: function() {
                                return e && r >= e.length && (e = void 0), {
                                    value: e && e[r++],
                                    done: !e
                                }
                            }
                        };
                        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                        function e() {}
                        return e.prototype.clone = function() {
                            var e = this,
                                t = new this.constructor;
                            return Object.keys(this).forEach((function(n) {
                                var r = e.deepClone(e[n]);
                                void 0 !== r && (t[n] = r)
                            })), t
                        }, e.prototype.deepClone = function(e) {
                            var t, r, o = typeof e;
                            if ("number" === o || "string" === o || "boolean" === o) return e;
                            if (null !== e && "object" === o) {
                                if ("function" == typeof e.clone) return e.clone();
                                if (e instanceof Date) return new Date(e.getTime());
                                if (void 0 !== e[Symbol.iterator]) {
                                    var s = [];
                                    try {
                                        for (var i = n(e), u = i.next(); !u.done; u = i.next()) {
                                            var c = u.value;
                                            s.push(this.deepClone(c))
                                        }
                                    } catch (e) {
                                        t = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            u && !u.done && (r = i.return) && r.call(i)
                                        } finally {
                                            if (t) throw t.error
                                        }
                                    }
                                    return e instanceof Array ? s : new e.constructor(s)
                                }
                                var a = {};
                                for (var p in e) e.hasOwnProperty(p) && (a[p] = this.deepClone(e[p]));
                                return a
                            }
                        }, e
                    }();
                    t.Cloneable = r
                },
                61: function(e, t, n) {
                    var r, o = this && this.__extends || (r = function(e, t) {
                            return (r = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                                })(e, t)
                        }, function(e, t) {
                            function n() {
                                this.constructor = e
                            }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        s = this && this.__awaiter || function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, s) {
                                function i(e) {
                                    try {
                                        c(r.next(e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }

                                function u(e) {
                                    try {
                                        c(r.throw(e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }

                                function c(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(i, u)
                                }
                                c((r = r.apply(e, t || [])).next())
                            }))
                        },
                        i = this && this.__generator || function(e, t) {
                            var n, r, o, s, i = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return s = {
                                next: u(0),
                                throw: u(1),
                                return: u(2)
                            }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                                return this
                            }), s;

                            function u(s) {
                                return function(u) {
                                    return function(s) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i;) try {
                                            if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;
                                            switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                                case 0:
                                                case 1:
                                                    o = s;
                                                    break;
                                                case 4:
                                                    return i.label++, {
                                                        value: s[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    i.label++, r = s[1], s = [0];
                                                    continue;
                                                case 7:
                                                    s = i.ops.pop(), i.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                        i = 0;
                                                        continue
                                                    }
                                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                        i.label = s[1];
                                                        break
                                                    }
                                                    if (6 === s[0] && i.label < o[1]) {
                                                        i.label = o[1], o = s;
                                                        break
                                                    }
                                                    if (o && i.label < o[2]) {
                                                        i.label = o[2], i.ops.push(s);
                                                        break
                                                    }
                                                    o[2] && i.ops.pop(), i.trys.pop();
                                                    continue
                                            }
                                            s = t.call(e, i)
                                        } catch (e) {
                                            s = [6, e], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & s[0]) throw s[1];
                                        return {
                                            value: s[0] ? s[1] : void 0,
                                            done: !0
                                        }
                                    }([s, u])
                                }
                            }
                        };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var u = n(186),
                        c = n(458),
                        a = n(56),
                        p = n(250),
                        d = function(e) {
                            function t(n) {
                                var r = e.call(this) || this;
                                r.isReady_ = !1, r.isLatest = !1;
                                var o = t.baseUrl;
                                if (r.lang_ = t.DEFAULT_LANGUAGE, r.isVendorList(n)) r.populate(n), r.readyPromise = Promise.resolve();
                                else {
                                    if (!o) throw new c.GVLError("must specify GVL.baseUrl before loading GVL json");
                                    if (n > 0) {
                                        var s = n;
                                        t.CACHE.has(s) ? (r.populate(t.CACHE.get(s)), r.readyPromise = Promise.resolve()) : (o += t.versionedFilename.replace("[VERSION]", s + ""), r.readyPromise = r.fetchJson(o))
                                    } else t.CACHE.has(t.LATEST_CACHE_KEY) ? (r.populate(t.CACHE.get(t.LATEST_CACHE_KEY)), r.readyPromise = Promise.resolve()) : (r.isLatest = !0, r.readyPromise = r.fetchJson(o + t.latestFilename))
                                }
                                return r
                            }
                            return o(t, e), Object.defineProperty(t, "baseUrl", {
                                get: function() {
                                    return this.baseUrl_
                                },
                                set: function(e) {
                                    if (/^https?:\/\/vendorlist\.consensu\.org\//.test(e)) throw new c.GVLError("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");
                                    e.length > 0 && "/" !== e[e.length - 1] && (e += "/"), this.baseUrl_ = e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.emptyLanguageCache = function(e) {
                                var n = !1;
                                return void 0 === e && t.LANGUAGE_CACHE.size > 0 ? (t.LANGUAGE_CACHE = new Map, n = !0) : "string" == typeof e && this.consentLanguages.has(e.toUpperCase()) && (t.LANGUAGE_CACHE.delete(e.toUpperCase()), n = !0), n
                            }, t.emptyCache = function(e) {
                                var n = !1;
                                return Number.isInteger(e) && e >= 0 ? (t.CACHE.delete(e), n = !0) : void 0 === e && (t.CACHE = new Map, n = !0), n
                            }, t.prototype.cacheLanguage = function() {
                                t.LANGUAGE_CACHE.has(this.lang_) || t.LANGUAGE_CACHE.set(this.lang_, {
                                    purposes: this.purposes,
                                    specialPurposes: this.specialPurposes,
                                    features: this.features,
                                    specialFeatures: this.specialFeatures,
                                    stacks: this.stacks
                                })
                            }, t.prototype.fetchJson = function(e) {
                                return s(this, void 0, void 0, (function() {
                                    var t, n;
                                    return i(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return r.trys.push([0, 2, , 3]), t = this.populate, [4, a.Json.fetch(e)];
                                            case 1:
                                                return t.apply(this, [r.sent()]), [3, 3];
                                            case 2:
                                                throw n = r.sent(), new c.GVLError(n.message);
                                            case 3:
                                                return [2]
                                        }
                                    }))
                                }))
                            }, t.prototype.getJson = function() {
                                return JSON.parse(JSON.stringify({
                                    gvlSpecificationVersion: this.gvlSpecificationVersion,
                                    vendorListVersion: this.vendorListVersion,
                                    tcfPolicyVersion: this.tcfPolicyVersion,
                                    lastUpdated: this.lastUpdated,
                                    purposes: this.purposes,
                                    specialPurposes: this.specialPurposes,
                                    features: this.features,
                                    specialFeatures: this.specialFeatures,
                                    stacks: this.stacks,
                                    vendors: this.fullVendorList
                                }))
                            }, t.prototype.changeLanguage = function(e) {
                                return s(this, void 0, void 0, (function() {
                                    var n, r, o, s, u;
                                    return i(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                if (n = e.toUpperCase(), !t.consentLanguages.has(n)) return [3, 6];
                                                if (n === this.lang_) return [3, 5];
                                                if (this.lang_ = n, !t.LANGUAGE_CACHE.has(n)) return [3, 1];
                                                for (o in r = t.LANGUAGE_CACHE.get(n)) r.hasOwnProperty(o) && (this[o] = r[o]);
                                                return [3, 5];
                                            case 1:
                                                s = t.baseUrl + t.languageFilename.replace("[LANG]", e), i.label = 2;
                                            case 2:
                                                return i.trys.push([2, 4, , 5]), [4, this.fetchJson(s)];
                                            case 3:
                                                return i.sent(), this.cacheLanguage(), [3, 5];
                                            case 4:
                                                throw u = i.sent(), new c.GVLError("unable to load language: " + u.message);
                                            case 5:
                                                return [3, 7];
                                            case 6:
                                                throw new c.GVLError("unsupported language " + e);
                                            case 7:
                                                return [2]
                                        }
                                    }))
                                }))
                            }, Object.defineProperty(t.prototype, "language", {
                                get: function() {
                                    return this.lang_
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.isVendorList = function(e) {
                                return void 0 !== e && void 0 !== e.vendors
                            }, t.prototype.populate = function(e) {
                                this.purposes = e.purposes, this.specialPurposes = e.specialPurposes, this.features = e.features, this.specialFeatures = e.specialFeatures, this.stacks = e.stacks, this.isVendorList(e) && (this.gvlSpecificationVersion = e.gvlSpecificationVersion, this.tcfPolicyVersion = e.tcfPolicyVersion, this.vendorListVersion = e.vendorListVersion, this.lastUpdated = e.lastUpdated, "string" == typeof this.lastUpdated && (this.lastUpdated = new Date(this.lastUpdated)), this.vendors_ = e.vendors, this.fullVendorList = e.vendors, this.mapVendors(), this.isReady_ = !0, this.isLatest && t.CACHE.set(t.LATEST_CACHE_KEY, this.getJson()), t.CACHE.has(this.vendorListVersion) || t.CACHE.set(this.vendorListVersion, this.getJson())), this.cacheLanguage()
                            }, t.prototype.mapVendors = function(e) {
                                var t = this;
                                this.byPurposeVendorMap = {}, this.bySpecialPurposeVendorMap = {}, this.byFeatureVendorMap = {}, this.bySpecialFeatureVendorMap = {}, Object.keys(this.purposes).forEach((function(e) {
                                    t.byPurposeVendorMap[e] = {
                                        legInt: new Set,
                                        consent: new Set,
                                        flexible: new Set
                                    }
                                })), Object.keys(this.specialPurposes).forEach((function(e) {
                                    t.bySpecialPurposeVendorMap[e] = new Set
                                })), Object.keys(this.features).forEach((function(e) {
                                    t.byFeatureVendorMap[e] = new Set
                                })), Object.keys(this.specialFeatures).forEach((function(e) {
                                    t.bySpecialFeatureVendorMap[e] = new Set
                                })), Array.isArray(e) || (e = Object.keys(this.fullVendorList).map((function(e) {
                                    return +e
                                }))), this.vendorIds = new Set(e), this.vendors_ = e.reduce((function(e, n) {
                                    var r = t.vendors_["" + n];
                                    return r && void 0 === r.deletedDate && (r.purposes.forEach((function(e) {
                                        t.byPurposeVendorMap[e + ""].consent.add(n)
                                    })), r.specialPurposes.forEach((function(e) {
                                        t.bySpecialPurposeVendorMap[e + ""].add(n)
                                    })), r.legIntPurposes.forEach((function(e) {
                                        t.byPurposeVendorMap[e + ""].legInt.add(n)
                                    })), r.flexiblePurposes && r.flexiblePurposes.forEach((function(e) {
                                        t.byPurposeVendorMap[e + ""].flexible.add(n)
                                    })), r.features.forEach((function(e) {
                                        t.byFeatureVendorMap[e + ""].add(n)
                                    })), r.specialFeatures.forEach((function(e) {
                                        t.bySpecialFeatureVendorMap[e + ""].add(n)
                                    })), e[n] = r), e
                                }), {})
                            }, t.prototype.getFilteredVendors = function(e, t, n, r) {
                                var o = this,
                                    s = e.charAt(0).toUpperCase() + e.slice(1),
                                    i = {};
                                return ("purpose" === e && n ? this["by" + s + "VendorMap"][t + ""][n] : this["by" + (r ? "Special" : "") + s + "VendorMap"][t + ""]).forEach((function(e) {
                                    i[e + ""] = o.vendors[e + ""]
                                })), i
                            }, t.prototype.getVendorsWithConsentPurpose = function(e) {
                                return this.getFilteredVendors("purpose", e, "consent")
                            }, t.prototype.getVendorsWithLegIntPurpose = function(e) {
                                return this.getFilteredVendors("purpose", e, "legInt")
                            }, t.prototype.getVendorsWithFlexiblePurpose = function(e) {
                                return this.getFilteredVendors("purpose", e, "flexible")
                            }, t.prototype.getVendorsWithSpecialPurpose = function(e) {
                                return this.getFilteredVendors("purpose", e, void 0, !0)
                            }, t.prototype.getVendorsWithFeature = function(e) {
                                return this.getFilteredVendors("feature", e)
                            }, t.prototype.getVendorsWithSpecialFeature = function(e) {
                                return this.getFilteredVendors("feature", e, void 0, !0)
                            }, Object.defineProperty(t.prototype, "vendors", {
                                get: function() {
                                    return this.vendors_
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.narrowVendorsTo = function(e) {
                                this.mapVendors(e)
                            }, Object.defineProperty(t.prototype, "isReady", {
                                get: function() {
                                    return this.isReady_
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.clone = function() {
                                return new t(this.getJson())
                            }, t.isInstanceOf = function(e) {
                                return "object" == typeof e && "function" == typeof e.narrowVendorsTo
                            }, t.LANGUAGE_CACHE = new Map, t.CACHE = new Map, t.LATEST_CACHE_KEY = 0, t.DEFAULT_LANGUAGE = "EN", t.consentLanguages = new p.ConsentLanguages, t.latestFilename = "vendor-list.json", t.versionedFilename = "archives/vendor-list-v[VERSION].json", t.languageFilename = "purposes-[LANG].json", t
                        }(u.Cloneable);
                    t.GVL = d
                },
                56: (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e() {}
                        return e.absCall = function(e, t, n, r) {
                            return new Promise((function(o, s) {
                                var i = new XMLHttpRequest;
                                i.withCredentials = n, i.addEventListener("load", (function() {
                                    if (i.readyState == XMLHttpRequest.DONE)
                                        if (i.status >= 200 && i.status < 300) {
                                            var e = i.response;
                                            if ("string" == typeof e) try {
                                                e = JSON.parse(e)
                                            } catch (e) {}
                                            o(e)
                                        } else s(new Error("HTTP Status: " + i.status + " response type: " + i.responseType))
                                })), i.addEventListener("error", (function() {
                                    s(new Error("error"))
                                })), i.addEventListener("abort", (function() {
                                    s(new Error("aborted"))
                                })), null === t ? i.open("GET", e, !0) : i.open("POST", e, !0), i.responseType = "json", i.timeout = r, i.ontimeout = function() {
                                    s(new Error("Timeout " + r + "ms " + e))
                                }, i.send(t)
                            }))
                        }, e.post = function(e, t, n, r) {
                            return void 0 === n && (n = !1), void 0 === r && (r = 0), this.absCall(e, JSON.stringify(t), n, r)
                        }, e.fetch = function(e, t, n) {
                            return void 0 === t && (t = !1), void 0 === n && (n = 0), this.absCall(e, null, t, n)
                        }, e
                    }();
                    t.Json = n
                },
                382: function(e, t, n) {
                    var r, o = this && this.__extends || (r = function(e, t) {
                        return (r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(e, t)
                    }, function(e, t) {
                        function n() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    });
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = n(186),
                        i = n(458),
                        u = n(61),
                        c = n(250),
                        a = function(e) {
                            function t(t) {
                                var n = e.call(this) || this;
                                return n.isServiceSpecific_ = !1, n.supportOOB_ = !0, n.useNonStandardStacks_ = !1, n.purposeOneTreatment_ = !1, n.publisherCountryCode_ = "AA", n.version_ = 2, n.consentScreen_ = 0, n.policyVersion_ = 2, n.consentLanguage_ = "EN", n.cmpId_ = 0, n.cmpVersion_ = 0, n.vendorListVersion_ = 0, n.numCustomPurposes_ = 0, n.specialFeatureOptins = new c.Vector, n.purposeConsents = new c.Vector, n.purposeLegitimateInterests = new c.Vector, n.publisherConsents = new c.Vector, n.publisherLegitimateInterests = new c.Vector, n.publisherCustomConsents = new c.Vector, n.publisherCustomLegitimateInterests = new c.Vector, n.vendorConsents = new c.Vector, n.vendorLegitimateInterests = new c.Vector, n.vendorsDisclosed = new c.Vector, n.vendorsAllowed = new c.Vector, n.publisherRestrictions = new c.PurposeRestrictionVector, t && (n.gvl = t), n.created = new Date, n.updated(), n
                            }
                            return o(t, e), Object.defineProperty(t.prototype, "gvl", {
                                get: function() {
                                    return this.gvl_
                                },
                                set: function(e) {
                                    u.GVL.isInstanceOf(e) || (e = new u.GVL(e)), this.gvl_ = e, this.publisherRestrictions.gvl = e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "cmpId", {
                                get: function() {
                                    return this.cmpId_
                                },
                                set: function(e) {
                                    if (!(Number.isInteger(+e) && e > 1)) throw new i.TCModelError("cmpId", e);
                                    this.cmpId_ = +e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "cmpVersion", {
                                get: function() {
                                    return this.cmpVersion_
                                },
                                set: function(e) {
                                    if (!(Number.isInteger(+e) && e > -1)) throw new i.TCModelError("cmpVersion", e);
                                    this.cmpVersion_ = +e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "consentScreen", {
                                get: function() {
                                    return this.consentScreen_
                                },
                                set: function(e) {
                                    if (!(Number.isInteger(+e) && e > -1)) throw new i.TCModelError("consentScreen", e);
                                    this.consentScreen_ = +e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "consentLanguage", {
                                get: function() {
                                    return this.consentLanguage_
                                },
                                set: function(e) {
                                    this.consentLanguage_ = e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "publisherCountryCode", {
                                get: function() {
                                    return this.publisherCountryCode_
                                },
                                set: function(e) {
                                    if (!/^([A-z]){2}$/.test(e)) throw new i.TCModelError("publisherCountryCode", e);
                                    this.publisherCountryCode_ = e.toUpperCase()
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "vendorListVersion", {
                                get: function() {
                                    return this.gvl ? this.gvl.vendorListVersion : this.vendorListVersion_
                                },
                                set: function(e) {
                                    if ((e = +e >> 0) < 0) throw new i.TCModelError("vendorListVersion", e);
                                    this.vendorListVersion_ = e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "policyVersion", {
                                get: function() {
                                    return this.gvl ? this.gvl.tcfPolicyVersion : this.policyVersion_
                                },
                                set: function(e) {
                                    if (this.policyVersion_ = parseInt(e, 10), this.policyVersion_ < 0) throw new i.TCModelError("policyVersion", e)
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "version", {
                                get: function() {
                                    return this.version_
                                },
                                set: function(e) {
                                    this.version_ = parseInt(e, 10)
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "isServiceSpecific", {
                                get: function() {
                                    return this.isServiceSpecific_
                                },
                                set: function(e) {
                                    this.isServiceSpecific_ = e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "useNonStandardStacks", {
                                get: function() {
                                    return this.useNonStandardStacks_
                                },
                                set: function(e) {
                                    this.useNonStandardStacks_ = e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "supportOOB", {
                                get: function() {
                                    return this.supportOOB_
                                },
                                set: function(e) {
                                    this.supportOOB_ = e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "purposeOneTreatment", {
                                get: function() {
                                    return this.purposeOneTreatment_
                                },
                                set: function(e) {
                                    this.purposeOneTreatment_ = e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.setAllVendorConsents = function() {
                                this.vendorConsents.set(this.gvl.vendors)
                            }, t.prototype.unsetAllVendorConsents = function() {
                                this.vendorConsents.empty()
                            }, t.prototype.setAllVendorsDisclosed = function() {
                                this.vendorsDisclosed.set(this.gvl.vendors)
                            }, t.prototype.unsetAllVendorsDisclosed = function() {
                                this.vendorsDisclosed.empty()
                            }, t.prototype.setAllVendorsAllowed = function() {
                                this.vendorsAllowed.set(this.gvl.vendors)
                            }, t.prototype.unsetAllVendorsAllowed = function() {
                                this.vendorsAllowed.empty()
                            }, t.prototype.setAllVendorLegitimateInterests = function() {
                                this.vendorLegitimateInterests.set(this.gvl.vendors)
                            }, t.prototype.unsetAllVendorLegitimateInterests = function() {
                                this.vendorLegitimateInterests.empty()
                            }, t.prototype.setAllPurposeConsents = function() {
                                this.purposeConsents.set(this.gvl.purposes)
                            }, t.prototype.unsetAllPurposeConsents = function() {
                                this.purposeConsents.empty()
                            }, t.prototype.setAllPurposeLegitimateInterests = function() {
                                this.purposeLegitimateInterests.set(this.gvl.purposes)
                            }, t.prototype.unsetAllPurposeLegitimateInterests = function() {
                                this.purposeLegitimateInterests.empty()
                            }, t.prototype.setAllSpecialFeatureOptins = function() {
                                this.specialFeatureOptins.set(this.gvl.specialFeatures)
                            }, t.prototype.unsetAllSpecialFeatureOptins = function() {
                                this.specialFeatureOptins.empty()
                            }, t.prototype.setAll = function() {
                                this.setAllVendorConsents(), this.setAllPurposeLegitimateInterests(), this.setAllSpecialFeatureOptins(), this.setAllPurposeConsents(), this.setAllVendorLegitimateInterests()
                            }, t.prototype.unsetAll = function() {
                                this.unsetAllVendorConsents(), this.unsetAllPurposeLegitimateInterests(), this.unsetAllSpecialFeatureOptins(), this.unsetAllPurposeConsents(), this.unsetAllVendorLegitimateInterests()
                            }, Object.defineProperty(t.prototype, "numCustomPurposes", {
                                get: function() {
                                    var e = this.numCustomPurposes_;
                                    if ("object" == typeof this.customPurposes) {
                                        var t = Object.keys(this.customPurposes).sort((function(e, t) {
                                            return +e - +t
                                        }));
                                        e = parseInt(t.pop(), 10)
                                    }
                                    return e
                                },
                                set: function(e) {
                                    if (this.numCustomPurposes_ = parseInt(e, 10), this.numCustomPurposes_ < 0) throw new i.TCModelError("numCustomPurposes", e)
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.updated = function() {
                                this.lastUpdated = new Date
                            }, t.consentLanguages = u.GVL.consentLanguages, t
                        }(s.Cloneable);
                    t.TCModel = a
                },
                381: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(170),
                        o = n(250),
                        s = n(82),
                        i = n(382),
                        u = function() {
                            function e() {}
                            return e.encode = function(e, t) {
                                var n, o, s = "";
                                return e = r.SemanticPreEncoder.process(e, t), (o = Array.isArray(null === (n = t) || void 0 === n ? void 0 : n.segments) ? t.segments : new r.SegmentSequence(e, t)["" + e.version]).forEach((function(t, n) {
                                    var i = "";
                                    n < o.length - 1 && (i = "."), s += r.SegmentEncoder.encode(e, t) + i
                                })), s
                            }, e.decode = function(e, t) {
                                var n = e.split("."),
                                    u = n.length;
                                t || (t = new i.TCModel);
                                for (var c = 0; c < u; c++) {
                                    var a = n[c],
                                        p = r.Base64Url.decode(a.charAt(0)).substr(0, r.BitLength.segmentType),
                                        d = o.SegmentIDs.ID_TO_KEY[s.IntEncoder.decode(p, r.BitLength.segmentType).toString()];
                                    r.SegmentEncoder.decode(a, t, d)
                                }
                                return t
                            }, e
                        }();
                    t.TCString = u
                },
                479: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(458),
                        o = function() {
                            function e() {}
                            return e.encode = function(e) {
                                if (!/^[0-1]+$/.test(e)) throw new r.EncodingError("Invalid bitField");
                                var t = e.length % this.LCM;
                                e += t ? "0".repeat(this.LCM - t) : "";
                                for (var n = "", o = 0; o < e.length; o += this.BASIS) n += this.DICT[parseInt(e.substr(o, this.BASIS), 2)];
                                return n
                            }, e.decode = function(e) {
                                if (!/^[A-Za-z0-9\-_]+$/.test(e)) throw new r.DecodingError("Invalidly encoded Base64URL string");
                                for (var t = "", n = 0; n < e.length; n++) {
                                    var o = this.REVERSE_DICT.get(e[n]).toString(2);
                                    t += "0".repeat(this.BASIS - o.length) + o
                                }
                                return t
                            }, e.DICT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", e.REVERSE_DICT = new Map([
                                ["A", 0],
                                ["B", 1],
                                ["C", 2],
                                ["D", 3],
                                ["E", 4],
                                ["F", 5],
                                ["G", 6],
                                ["H", 7],
                                ["I", 8],
                                ["J", 9],
                                ["K", 10],
                                ["L", 11],
                                ["M", 12],
                                ["N", 13],
                                ["O", 14],
                                ["P", 15],
                                ["Q", 16],
                                ["R", 17],
                                ["S", 18],
                                ["T", 19],
                                ["U", 20],
                                ["V", 21],
                                ["W", 22],
                                ["X", 23],
                                ["Y", 24],
                                ["Z", 25],
                                ["a", 26],
                                ["b", 27],
                                ["c", 28],
                                ["d", 29],
                                ["e", 30],
                                ["f", 31],
                                ["g", 32],
                                ["h", 33],
                                ["i", 34],
                                ["j", 35],
                                ["k", 36],
                                ["l", 37],
                                ["m", 38],
                                ["n", 39],
                                ["o", 40],
                                ["p", 41],
                                ["q", 42],
                                ["r", 43],
                                ["s", 44],
                                ["t", 45],
                                ["u", 46],
                                ["v", 47],
                                ["w", 48],
                                ["x", 49],
                                ["y", 50],
                                ["z", 51],
                                ["0", 52],
                                ["1", 53],
                                ["2", 54],
                                ["3", 55],
                                ["4", 56],
                                ["5", 57],
                                ["6", 58],
                                ["7", 59],
                                ["8", 60],
                                ["9", 61],
                                ["-", 62],
                                ["_", 63]
                            ]), e.BASIS = 6, e.LCM = 24, e
                        }();
                    t.Base64Url = o
                },
                219: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(250),
                        o = function() {
                            function e() {}
                            var t, n, o, s, i, u, c, a, p, d, l, f, h, g, v, y, b, m;
                            return t = r.Fields.cmpId, n = r.Fields.cmpVersion, o = r.Fields.consentLanguage, s = r.Fields.consentScreen, i = r.Fields.created, u = r.Fields.isServiceSpecific, c = r.Fields.lastUpdated, a = r.Fields.policyVersion, p = r.Fields.publisherCountryCode, d = r.Fields.publisherLegitimateInterests, l = r.Fields.publisherConsents, f = r.Fields.purposeConsents, h = r.Fields.purposeLegitimateInterests, g = r.Fields.purposeOneTreatment, v = r.Fields.specialFeatureOptins, y = r.Fields.useNonStandardStacks, b = r.Fields.vendorListVersion, m = r.Fields.version, e[t] = 12, e[n] = 12, e[o] = 12, e[s] = 6, e[i] = 36, e[u] = 1, e[c] = 36, e[a] = 6, e[p] = 12, e[d] = 24, e[l] = 24, e[f] = 24, e[h] = 24, e[g] = 1, e[v] = 12, e[y] = 1, e[b] = 12, e[m] = 6, e.anyBoolean = 1, e.encodingType = 1, e.maxId = 16, e.numCustomPurposes = 6, e.numEntries = 12, e.numRestrictions = 12, e.purposeId = 6, e.restrictionType = 2, e.segmentType = 3, e.singleOrRange = 1, e.vendorId = 16, e
                        }();
                    t.BitLength = o
                },
                314: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(479),
                        o = n(219),
                        s = n(836),
                        i = n(780),
                        u = n(458),
                        c = n(731),
                        a = n(250),
                        p = function() {
                            function e() {}
                            return e.encode = function(e, t) {
                                var n, i = this;
                                try {
                                    n = this.fieldSequence["" + e.version][t]
                                } catch (n) {
                                    throw new u.EncodingError("Unable to encode version: " + e.version + ", segment: " + t)
                                }
                                var p = "";
                                return t !== a.Segment.CORE && (p = s.IntEncoder.encode(a.SegmentIDs.KEY_TO_ID[t], o.BitLength.segmentType)), n.forEach((function(n) {
                                    var r = e[n],
                                        a = s.FieldEncoderMap[n],
                                        d = o.BitLength[n];
                                    void 0 === d && i.isPublisherCustom(n) && (d = +e[c.Fields.numCustomPurposes]);
                                    try {
                                        p += a.encode(r, d)
                                    } catch (e) {
                                        throw new u.EncodingError("Error encoding " + t + "->" + n + ": " + e.message)
                                    }
                                })), r.Base64Url.encode(p)
                            }, e.decode = function(e, t, n) {
                                var i = this,
                                    p = r.Base64Url.decode(e),
                                    d = 0;
                                return n === a.Segment.CORE && (t.version = s.IntEncoder.decode(p.substr(d, o.BitLength[c.Fields.version]), o.BitLength[c.Fields.version])), n !== a.Segment.CORE && (d += o.BitLength.segmentType), this.fieldSequence["" + t.version][n].forEach((function(e) {
                                    var n = s.FieldEncoderMap[e],
                                        r = o.BitLength[e];
                                    if (void 0 === r && i.isPublisherCustom(e) && (r = +t[c.Fields.numCustomPurposes]), 0 !== r) {
                                        var a = p.substr(d, r);
                                        if (n === s.VendorVectorEncoder ? t[e] = n.decode(a, t.version) : t[e] = n.decode(a, r), Number.isInteger(r)) d += r;
                                        else {
                                            if (!Number.isInteger(t[e].bitLength)) throw new u.DecodingError(e);
                                            d += t[e].bitLength
                                        }
                                    }
                                })), t
                            }, e.isPublisherCustom = function(e) {
                                return 0 === e.indexOf("publisherCustom")
                            }, e.fieldSequence = new i.FieldSequence, e
                        }();
                    t.SegmentEncoder = p
                },
                818: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(458),
                        o = n(250),
                        s = function() {
                            function e() {}
                            return e.process = function(e, t) {
                                var n, o, s = e.gvl;
                                if (!s) throw new r.EncodingError("Unable to encode TCModel without a GVL");
                                if (!s.isReady) throw new r.EncodingError("Unable to encode TCModel tcModel.gvl.readyPromise is not resolved");
                                (e = e.clone()).consentLanguage = s.language.toUpperCase(), (null === (n = t) || void 0 === n ? void 0 : n.version) > 0 && (null === (o = t) || void 0 === o ? void 0 : o.version) <= this.processor.length ? e.version = t.version : e.version = this.processor.length;
                                var i = e.version - 1;
                                if (!this.processor[i]) throw new r.EncodingError("Invalid version: " + e.version);
                                return this.processor[i](e, s)
                            }, e.processor = [function(e) {
                                return e
                            }, function(e, t) {
                                e.publisherRestrictions.gvl = t, e.purposeLegitimateInterests.unset(1);
                                var n = new Map;
                                return n.set("legIntPurposes", e.vendorLegitimateInterests), n.set("purposes", e.vendorConsents), n.forEach((function(n, r) {
                                    n.forEach((function(s, i) {
                                        if (s) {
                                            var u = t.vendors[i];
                                            if (!u || u.deletedDate) n.unset(i);
                                            else if (0 === u[r].length)
                                                if (e.isServiceSpecific)
                                                    if (0 === u.flexiblePurposes.length) n.unset(i);
                                                    else {
                                                        for (var c = e.publisherRestrictions.getRestrictions(i), a = !1, p = 0, d = c.length; p < d && !a; p++) a = c[p].restrictionType === o.RestrictionType.REQUIRE_CONSENT && "purposes" === r || c[p].restrictionType === o.RestrictionType.REQUIRE_LI && "legIntPurposes" === r;
                                                        a || n.unset(i)
                                                    }
                                            else n.unset(i)
                                        }
                                    }))
                                })), e.vendorsDisclosed.set(t.vendors), e
                            }], e
                        }();
                    t.SemanticPreEncoder = s
                },
                632: (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e() {}
                        return e.encode = function(e) {
                            return +e + ""
                        }, e.decode = function(e) {
                            return "1" === e
                        }, e
                    }();
                    t.BooleanEncoder = n
                },
                101: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(82),
                        o = n(458),
                        s = function() {
                            function e() {}
                            return e.encode = function(e, t) {
                                return r.IntEncoder.encode(Math.round(e.getTime() / 100), t)
                            }, e.decode = function(e, t) {
                                if (t !== e.length) throw new o.DecodingError("invalid bit length");
                                var n = new Date;
                                return n.setTime(100 * r.IntEncoder.decode(e, t)), n
                            }, e
                        }();
                    t.DateEncoder = s
                },
                286: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(250),
                        o = n(632),
                        s = n(101),
                        i = n(937),
                        u = n(82),
                        c = n(835),
                        a = n(889),
                        p = n(283),
                        d = function() {
                            function e() {}
                            var t, n, d, l, f, h, g, v, y, b, m, E, _, L, I, O, C, S, w, P, V, F, A, T, R, j;
                            return t = r.Fields.version, n = r.Fields.created, d = r.Fields.lastUpdated, l = r.Fields.cmpId, f = r.Fields.cmpVersion, h = r.Fields.consentScreen, g = r.Fields.consentLanguage, v = r.Fields.vendorListVersion, y = r.Fields.policyVersion, b = r.Fields.isServiceSpecific, m = r.Fields.useNonStandardStacks, E = r.Fields.specialFeatureOptins, _ = r.Fields.purposeConsents, L = r.Fields.purposeLegitimateInterests, I = r.Fields.purposeOneTreatment, O = r.Fields.publisherCountryCode, C = r.Fields.vendorConsents, S = r.Fields.vendorLegitimateInterests, w = r.Fields.publisherRestrictions, P = r.Fields.vendorsDisclosed, V = r.Fields.vendorsAllowed, F = r.Fields.publisherConsents, A = r.Fields.publisherLegitimateInterests, T = r.Fields.numCustomPurposes, R = r.Fields.publisherCustomConsents, j = r.Fields.publisherCustomLegitimateInterests, e[t] = u.IntEncoder, e[n] = s.DateEncoder, e[d] = s.DateEncoder, e[l] = u.IntEncoder, e[f] = u.IntEncoder, e[h] = u.IntEncoder, e[g] = c.LangEncoder, e[v] = u.IntEncoder, e[y] = u.IntEncoder, e[b] = o.BooleanEncoder, e[m] = o.BooleanEncoder, e[E] = i.FixedVectorEncoder, e[_] = i.FixedVectorEncoder, e[L] = i.FixedVectorEncoder, e[I] = o.BooleanEncoder, e[O] = c.LangEncoder, e[C] = p.VendorVectorEncoder, e[S] = p.VendorVectorEncoder, e[w] = a.PurposeRestrictionVectorEncoder, e.segmentType = u.IntEncoder, e[P] = p.VendorVectorEncoder, e[V] = p.VendorVectorEncoder, e[F] = i.FixedVectorEncoder, e[A] = i.FixedVectorEncoder, e[T] = u.IntEncoder, e[R] = i.FixedVectorEncoder, e[j] = i.FixedVectorEncoder, e
                        }();
                    t.FieldEncoderMap = d
                },
                937: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(632),
                        o = n(458),
                        s = n(250),
                        i = function() {
                            function e() {}
                            return e.encode = function(e, t) {
                                for (var n = "", o = 1; o <= t; o++) n += r.BooleanEncoder.encode(e.has(o));
                                return n
                            }, e.decode = function(e, t) {
                                if (e.length !== t) throw new o.DecodingError("bitfield encoding length mismatch");
                                for (var n = new s.Vector, i = 1; i <= t; i++) r.BooleanEncoder.decode(e[i - 1]) && n.set(i);
                                return n.bitLength = e.length, n
                            }, e
                        }();
                    t.FixedVectorEncoder = i
                },
                82: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(458),
                        o = function() {
                            function e() {}
                            return e.encode = function(e, t) {
                                var n;
                                if ("string" == typeof e && (e = parseInt(e, 10)), (n = e.toString(2)).length > t || e < 0) throw new r.EncodingError(e + " too large to encode into " + t);
                                return n.length < t && (n = "0".repeat(t - n.length) + n), n
                            }, e.decode = function(e, t) {
                                if (t !== e.length) throw new r.DecodingError("invalid bit length");
                                return parseInt(e, 2)
                            }, e
                        }();
                    t.IntEncoder = o
                },
                835: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(82),
                        o = n(458),
                        s = function() {
                            function e() {}
                            return e.encode = function(e, t) {
                                var n = (e = e.toUpperCase()).charCodeAt(0) - 65,
                                    s = e.charCodeAt(1) - 65;
                                if (n < 0 || n > 25 || s < 0 || s > 25) throw new o.EncodingError("invalid language code: " + e);
                                if (t % 2 == 1) throw new o.EncodingError("numBits must be even, " + t + " is not valid");
                                return t /= 2, r.IntEncoder.encode(n, t) + r.IntEncoder.encode(s, t)
                            }, e.decode = function(e, t) {
                                if (t !== e.length || e.length % 2) throw new o.DecodingError("invalid bit length for language");
                                var n = e.length / 2,
                                    s = r.IntEncoder.decode(e.slice(0, n), n) + 65,
                                    i = r.IntEncoder.decode(e.slice(n), n) + 65;
                                return String.fromCharCode(s) + String.fromCharCode(i)
                            }, e
                        }();
                    t.LangEncoder = s
                },
                889: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(219),
                        o = n(632),
                        s = n(458),
                        i = n(82),
                        u = n(250),
                        c = function() {
                            function e() {}
                            return e.encode = function(e) {
                                var t = i.IntEncoder.encode(e.numRestrictions, r.BitLength.numRestrictions);
                                return e.isEmpty() || e.getRestrictions().forEach((function(n) {
                                    t += i.IntEncoder.encode(n.purposeId, r.BitLength.purposeId), t += i.IntEncoder.encode(n.restrictionType, r.BitLength.restrictionType);
                                    for (var s = e.getVendors(n), u = s.length, c = 0, a = 0, p = "", d = 0; d < u; d++) {
                                        var l = s[d];
                                        if (0 === a && (c++, a = l), d === u - 1 || s[d + 1] > l + 1) {
                                            var f = !(l === a);
                                            p += o.BooleanEncoder.encode(f), p += i.IntEncoder.encode(a, r.BitLength.vendorId), f && (p += i.IntEncoder.encode(l, r.BitLength.vendorId)), a = 0
                                        }
                                    }
                                    t += i.IntEncoder.encode(c, r.BitLength.numEntries), t += p
                                })), t
                            }, e.decode = function(e) {
                                var t = 0,
                                    n = new u.PurposeRestrictionVector,
                                    c = i.IntEncoder.decode(e.substr(t, r.BitLength.numRestrictions), r.BitLength.numRestrictions);
                                t += r.BitLength.numRestrictions;
                                for (var a = 0; a < c; a++) {
                                    var p = i.IntEncoder.decode(e.substr(t, r.BitLength.purposeId), r.BitLength.purposeId);
                                    t += r.BitLength.purposeId;
                                    var d = i.IntEncoder.decode(e.substr(t, r.BitLength.restrictionType), r.BitLength.restrictionType);
                                    t += r.BitLength.restrictionType;
                                    var l = new u.PurposeRestriction(p, d),
                                        f = i.IntEncoder.decode(e.substr(t, r.BitLength.numEntries), r.BitLength.numEntries);
                                    t += r.BitLength.numEntries;
                                    for (var h = 0; h < f; h++) {
                                        var g = o.BooleanEncoder.decode(e.substr(t, r.BitLength.anyBoolean));
                                        t += r.BitLength.anyBoolean;
                                        var v = i.IntEncoder.decode(e.substr(t, r.BitLength.vendorId), r.BitLength.vendorId);
                                        if (t += r.BitLength.vendorId, g) {
                                            var y = i.IntEncoder.decode(e.substr(t, r.BitLength.vendorId), r.BitLength.vendorId);
                                            if (t += r.BitLength.vendorId, y < v) throw new s.DecodingError("Invalid RangeEntry: endVendorId " + y + " is less than " + v);
                                            for (var b = v; b <= y; b++) n.add(b, l)
                                        } else n.add(v, l)
                                    }
                                }
                                return n.bitLength = t, n
                            }, e
                        }();
                    t.PurposeRestrictionVectorEncoder = c
                },
                938: (e, t) => {
                    var n;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), (n = t.VectorEncodingType || (t.VectorEncodingType = {}))[n.FIELD = 0] = "FIELD", n[n.RANGE = 1] = "RANGE"
                },
                283: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(250),
                        o = n(170),
                        s = n(82),
                        i = n(632),
                        u = n(937),
                        c = n(938),
                        a = n(458),
                        p = function() {
                            function e() {}
                            return e.encode = function(e) {
                                var t, n = [],
                                    r = [],
                                    u = s.IntEncoder.encode(e.maxId, o.BitLength.maxId),
                                    a = "",
                                    p = o.BitLength.maxId + o.BitLength.encodingType,
                                    d = p + e.maxId,
                                    l = 2 * o.BitLength.vendorId + o.BitLength.singleOrRange + o.BitLength.numEntries,
                                    f = p + o.BitLength.numEntries;
                                return e.forEach((function(s, u) {
                                    a += i.BooleanEncoder.encode(s), (t = e.maxId > l && f < d) && s && (e.has(u + 1) ? 0 === r.length && (r.push(u), f += o.BitLength.singleOrRange, f += o.BitLength.vendorId) : (r.push(u), f += o.BitLength.vendorId, n.push(r), r = []))
                                })), t ? (u += c.VectorEncodingType.RANGE + "", u += this.buildRangeEncoding(n)) : (u += c.VectorEncodingType.FIELD + "", u += a), u
                            }, e.decode = function(e, t) {
                                var n, p = 0,
                                    d = s.IntEncoder.decode(e.substr(p, o.BitLength.maxId), o.BitLength.maxId);
                                p += o.BitLength.maxId;
                                var l = s.IntEncoder.decode(e.charAt(p), o.BitLength.encodingType);
                                if (p += o.BitLength.encodingType, l === c.VectorEncodingType.RANGE) {
                                    if (n = new r.Vector, 1 === t) {
                                        if ("1" === e.substr(p, 1)) throw new a.DecodingError("Unable to decode default consent=1");
                                        p++
                                    }
                                    var f = s.IntEncoder.decode(e.substr(p, o.BitLength.numEntries), o.BitLength.numEntries);
                                    p += o.BitLength.numEntries;
                                    for (var h = 0; h < f; h++) {
                                        var g = i.BooleanEncoder.decode(e.charAt(p));
                                        p += o.BitLength.singleOrRange;
                                        var v = s.IntEncoder.decode(e.substr(p, o.BitLength.vendorId), o.BitLength.vendorId);
                                        if (p += o.BitLength.vendorId, g) {
                                            var y = s.IntEncoder.decode(e.substr(p, o.BitLength.vendorId), o.BitLength.vendorId);
                                            p += o.BitLength.vendorId;
                                            for (var b = v; b <= y; b++) n.set(b)
                                        } else n.set(v)
                                    }
                                } else {
                                    var m = e.substr(p, d);
                                    p += d, n = u.FixedVectorEncoder.decode(m, d)
                                }
                                return n.bitLength = p, n
                            }, e.buildRangeEncoding = function(e) {
                                var t = e.length,
                                    n = s.IntEncoder.encode(t, o.BitLength.numEntries);
                                return e.forEach((function(e) {
                                    var t = 1 === e.length;
                                    n += i.BooleanEncoder.encode(!t), n += s.IntEncoder.encode(e[0], o.BitLength.vendorId), t || (n += s.IntEncoder.encode(e[1], o.BitLength.vendorId))
                                })), n
                            }, e
                        }();
                    t.VendorVectorEncoder = p
                },
                836: (e, t, n) => {
                    function r(e) {
                        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r(n(632)), r(n(101)), r(n(286)), r(n(937)), r(n(82)), r(n(835)), r(n(889)), r(n(938)), r(n(283))
                },
                170: (e, t, n) => {
                    function r(e) {
                        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r(n(479)), r(n(219)), r(n(314)), r(n(818)), r(n(836)), r(n(780))
                },
                14: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(250);
                    t.FieldSequence = function() {
                        var e, t;
                        this[1] = ((e = {})[r.Segment.CORE] = [r.Fields.version, r.Fields.created, r.Fields.lastUpdated, r.Fields.cmpId, r.Fields.cmpVersion, r.Fields.consentScreen, r.Fields.consentLanguage, r.Fields.vendorListVersion, r.Fields.purposeConsents, r.Fields.vendorConsents], e), this[2] = ((t = {})[r.Segment.CORE] = [r.Fields.version, r.Fields.created, r.Fields.lastUpdated, r.Fields.cmpId, r.Fields.cmpVersion, r.Fields.consentScreen, r.Fields.consentLanguage, r.Fields.vendorListVersion, r.Fields.policyVersion, r.Fields.isServiceSpecific, r.Fields.useNonStandardStacks, r.Fields.specialFeatureOptins, r.Fields.purposeConsents, r.Fields.purposeLegitimateInterests, r.Fields.purposeOneTreatment, r.Fields.publisherCountryCode, r.Fields.vendorConsents, r.Fields.vendorLegitimateInterests, r.Fields.publisherRestrictions], t[r.Segment.PUBLISHER_TC] = [r.Fields.publisherConsents, r.Fields.publisherLegitimateInterests, r.Fields.numCustomPurposes, r.Fields.publisherCustomConsents, r.Fields.publisherCustomLegitimateInterests], t[r.Segment.VENDORS_ALLOWED] = [r.Fields.vendorsAllowed], t[r.Segment.VENDORS_DISCLOSED] = [r.Fields.vendorsDisclosed], t)
                    }
                },
                333: (e, t, n) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(250);
                    t.SegmentSequence = function(e, t) {
                        if (this[1] = [r.Segment.CORE], this[2] = [r.Segment.CORE], 2 === e.version)
                            if (e.isServiceSpecific) this[2].push(r.Segment.PUBLISHER_TC);
                            else {
                                var n = !(!t || !t.isForVendors);
                                n && !0 !== e[r.Fields.supportOOB] || this[2].push(r.Segment.VENDORS_DISCLOSED), n && (e[r.Fields.supportOOB] && e[r.Fields.vendorsAllowed].size > 0 && this[2].push(r.Segment.VENDORS_ALLOWED), this[2].push(r.Segment.PUBLISHER_TC))
                            }
                    }
                },
                780: (e, t, n) => {
                    function r(e) {
                        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r(n(14)), r(n(333))
                },
                265: function(e, t) {
                    var n, r = this && this.__extends || (n = function(e, t) {
                        return (n = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(e, t)
                    }, function(e, t) {
                        function r() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    });
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = function(e) {
                        function t(t) {
                            var n = e.call(this, t) || this;
                            return n.name = "DecodingError", n
                        }
                        return r(t, e), t
                    }(Error);
                    t.DecodingError = o
                },
                181: function(e, t) {
                    var n, r = this && this.__extends || (n = function(e, t) {
                        return (n = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(e, t)
                    }, function(e, t) {
                        function r() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    });
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = function(e) {
                        function t(t) {
                            var n = e.call(this, t) || this;
                            return n.name = "EncodingError", n
                        }
                        return r(t, e), t
                    }(Error);
                    t.EncodingError = o
                },
                565: function(e, t) {
                    var n, r = this && this.__extends || (n = function(e, t) {
                        return (n = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(e, t)
                    }, function(e, t) {
                        function r() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    });
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = function(e) {
                        function t(t) {
                            var n = e.call(this, t) || this;
                            return n.name = "GVLError", n
                        }
                        return r(t, e), t
                    }(Error);
                    t.GVLError = o
                },
                995: function(e, t) {
                    var n, r = this && this.__extends || (n = function(e, t) {
                        return (n = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(e, t)
                    }, function(e, t) {
                        function r() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    });
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = function(e) {
                        function t(t, n, r) {
                            void 0 === r && (r = "");
                            var o = e.call(this, "invalid value " + n + " passed for " + t + " " + r) || this;
                            return o.name = "TCModelError", o
                        }
                        return r(t, e), t
                    }(Error);
                    t.TCModelError = o
                },
                458: (e, t, n) => {
                    function r(e) {
                        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r(n(265)), r(n(181)), r(n(565)), r(n(995))
                },
                88: (e, t, n) => {
                    function r(e) {
                        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r(n(170)), r(n(458)), r(n(250)), r(n(186)), r(n(61)), r(n(56)), r(n(382)), r(n(381))
                },
                867: function(e, t, n) {
                    var r, o = this && this.__extends || (r = function(e, t) {
                        return (r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(e, t)
                    }, function(e, t) {
                        function n() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    });
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = function(e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.root = null, t
                        }
                        return o(t, e), t.prototype.isEmpty = function() {
                            return !this.root
                        }, t.prototype.add = function(e) {
                            var t, n = {
                                value: e,
                                left: null,
                                right: null
                            };
                            if (this.isEmpty()) this.root = n;
                            else
                                for (t = this.root;;)
                                    if (e < t.value) {
                                        if (null === t.left) {
                                            t.left = n;
                                            break
                                        }
                                        t = t.left
                                    } else {
                                        if (!(e > t.value)) break;
                                        if (null === t.right) {
                                            t.right = n;
                                            break
                                        }
                                        t = t.right
                                    }
                        }, t.prototype.get = function() {
                            for (var e = [], t = this.root; t;)
                                if (t.left) {
                                    for (var n = t.left; n.right && n.right != t;) n = n.right;
                                    n.right == t ? (n.right = null, e.push(t.value), t = t.right) : (n.right = t, t = t.left)
                                } else e.push(t.value), t = t.right;
                            return e
                        }, t.prototype.contains = function(e) {
                            for (var t = !1, n = this.root; n;) {
                                if (n.value === e) {
                                    t = !0;
                                    break
                                }
                                e > n.value ? n = n.right : e < n.value && (n = n.left)
                            }
                            return t
                        }, t.prototype.min = function(e) {
                            var t;
                            for (void 0 === e && (e = this.root); e;) e.left ? e = e.left : (t = e.value, e = null);
                            return t
                        }, t.prototype.max = function(e) {
                            var t;
                            for (void 0 === e && (e = this.root); e;) e.right ? e = e.right : (t = e.value, e = null);
                            return t
                        }, t.prototype.remove = function(e, t) {
                            void 0 === t && (t = this.root);
                            for (var n = null, r = "left"; t;)
                                if (e < t.value) n = t, t = t.left, r = "left";
                                else if (e > t.value) n = t, t = t.right, r = "right";
                            else {
                                if (t.left || t.right)
                                    if (t.left)
                                        if (t.right) {
                                            var o = this.min(t.right);
                                            this.remove(o, t.right), t.value = o
                                        } else n ? n[r] = t.left : this.root = t.left;
                                else n ? n[r] = t.right : this.root = t.right;
                                else n ? n[r] = null : this.root = null;
                                t = null
                            }
                        }, t
                    }(n(186).Cloneable);
                    t.BinarySearchTree = s
                },
                301: (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e() {}
                        return e.prototype.has = function(t) {
                            return e.langSet.has(t)
                        }, e.prototype.forEach = function(t) {
                            e.langSet.forEach(t)
                        }, Object.defineProperty(e.prototype, "size", {
                            get: function() {
                                return e.langSet.size
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.langSet = new Set(["BG", "CA", "CS", "DA", "DE", "EL", "EN", "ES", "ET", "FI", "FR", "HR", "HU", "IT", "JA", "LT", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SK", "SL", "SV", "TR", "ZH"]), e
                    }();
                    t.ConsentLanguages = n
                },
                731: (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e() {}
                        return e.cmpId = "cmpId", e.cmpVersion = "cmpVersion", e.consentLanguage = "consentLanguage", e.consentScreen = "consentScreen", e.created = "created", e.supportOOB = "supportOOB", e.isServiceSpecific = "isServiceSpecific", e.lastUpdated = "lastUpdated", e.numCustomPurposes = "numCustomPurposes", e.policyVersion = "policyVersion", e.publisherCountryCode = "publisherCountryCode", e.publisherCustomConsents = "publisherCustomConsents", e.publisherCustomLegitimateInterests = "publisherCustomLegitimateInterests", e.publisherLegitimateInterests = "publisherLegitimateInterests", e.publisherConsents = "publisherConsents", e.publisherRestrictions = "publisherRestrictions", e.purposeConsents = "purposeConsents", e.purposeLegitimateInterests = "purposeLegitimateInterests", e.purposeOneTreatment = "purposeOneTreatment", e.specialFeatureOptins = "specialFeatureOptins", e.useNonStandardStacks = "useNonStandardStacks", e.vendorConsents = "vendorConsents", e.vendorLegitimateInterests = "vendorLegitimateInterests", e.vendorListVersion = "vendorListVersion", e.vendorsAllowed = "vendorsAllowed", e.vendorsDisclosed = "vendorsDisclosed", e.version = "version", e
                    }();
                    t.Fields = n
                },
                626: function(e, t, n) {
                    var r, o = this && this.__extends || (r = function(e, t) {
                        return (r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(e, t)
                    }, function(e, t) {
                        function n() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    });
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = n(186),
                        i = n(458),
                        u = n(473),
                        c = function(e) {
                            function t(t, n) {
                                var r = e.call(this) || this;
                                return void 0 !== t && (r.purposeId = t), void 0 !== n && (r.restrictionType = n), r
                            }
                            return o(t, e), t.unHash = function(e) {
                                var n = e.split(this.hashSeparator),
                                    r = new t;
                                if (2 !== n.length) throw new i.TCModelError("hash", e);
                                return r.purposeId = parseInt(n[0], 10), r.restrictionType = parseInt(n[1], 10), r
                            }, Object.defineProperty(t.prototype, "hash", {
                                get: function() {
                                    if (!this.isValid()) throw new Error("cannot hash invalid PurposeRestriction");
                                    return "" + this.purposeId + t.hashSeparator + this.restrictionType
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "purposeId", {
                                get: function() {
                                    return this.purposeId_
                                },
                                set: function(e) {
                                    this.purposeId_ = e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.isValid = function() {
                                return Number.isInteger(this.purposeId) && this.purposeId > 0 && (this.restrictionType === u.RestrictionType.NOT_ALLOWED || this.restrictionType === u.RestrictionType.REQUIRE_CONSENT || this.restrictionType === u.RestrictionType.REQUIRE_LI)
                            }, t.prototype.isSameAs = function(e) {
                                return this.purposeId === e.purposeId && this.restrictionType === e.restrictionType
                            }, t.hashSeparator = "-", t
                        }(s.Cloneable);
                    t.PurposeRestriction = c
                },
                96: function(e, t, n) {
                    var r, o = this && this.__extends || (r = function(e, t) {
                        return (r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(e, t)
                    }, function(e, t) {
                        function n() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    });
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = n(626),
                        i = n(867),
                        u = n(473),
                        c = function(e) {
                            function t() {
                                var t = null !== e && e.apply(this, arguments) || this;
                                return t.bitLength = 0, t.map = new Map, t
                            }
                            return o(t, e), t.prototype.has = function(e) {
                                return this.map.has(e)
                            }, t.prototype.isOkToHave = function(e, t, n) {
                                var r, o = !0;
                                if (null === (r = this.gvl) || void 0 === r ? void 0 : r.vendors) {
                                    var s = this.gvl.vendors[n];
                                    if (s)
                                        if (e === u.RestrictionType.NOT_ALLOWED) o = s.legIntPurposes.includes(t) || s.purposes.includes(t);
                                        else if (s.flexiblePurposes.length) switch (e) {
                                        case u.RestrictionType.REQUIRE_CONSENT:
                                            o = s.flexiblePurposes.includes(t) && s.legIntPurposes.includes(t);
                                            break;
                                        case u.RestrictionType.REQUIRE_LI:
                                            o = s.flexiblePurposes.includes(t) && s.purposes.includes(t)
                                    } else o = !1;
                                    else o = !1
                                }
                                return o
                            }, t.prototype.add = function(e, t) {
                                if (this.isOkToHave(t.restrictionType, t.purposeId, e)) {
                                    var n = t.hash;
                                    this.has(n) || (this.map.set(n, new i.BinarySearchTree), this.bitLength = 0), this.map.get(n).add(e)
                                }
                            }, t.prototype.getVendors = function(e) {
                                var t = [];
                                if (e) {
                                    var n = e.hash;
                                    this.has(n) && (t = this.map.get(n).get())
                                } else {
                                    var r = new Set;
                                    this.map.forEach((function(e) {
                                        e.get().forEach((function(e) {
                                            r.add(e)
                                        }))
                                    })), t = Array.from(r)
                                }
                                return t
                            }, t.prototype.getRestrictionType = function(e, t) {
                                var n;
                                return this.getRestrictions(e).forEach((function(e) {
                                    e.purposeId === t && (void 0 === n || n > e.restrictionType) && (n = e.restrictionType)
                                })), n
                            }, t.prototype.vendorHasRestriction = function(e, t) {
                                for (var n = !1, r = this.getRestrictions(e), o = 0; o < r.length && !n; o++) n = t.isSameAs(r[o]);
                                return n
                            }, t.prototype.getMaxVendorId = function() {
                                var e = 0;
                                return this.map.forEach((function(t) {
                                    e = Math.max(t.max(), e)
                                })), e
                            }, t.prototype.getRestrictions = function(e) {
                                var t = [];
                                return this.map.forEach((function(n, r) {
                                    e ? n.contains(e) && t.push(s.PurposeRestriction.unHash(r)) : t.push(s.PurposeRestriction.unHash(r))
                                })), t
                            }, t.prototype.getPurposes = function() {
                                var e = new Set;
                                return this.map.forEach((function(t, n) {
                                    e.add(s.PurposeRestriction.unHash(n).purposeId)
                                })), Array.from(e)
                            }, t.prototype.remove = function(e, t) {
                                var n = t.hash,
                                    r = this.map.get(n);
                                r && (r.remove(e), r.isEmpty() && (this.map.delete(n), this.bitLength = 0))
                            }, Object.defineProperty(t.prototype, "gvl", {
                                get: function() {
                                    return this.gvl_
                                },
                                set: function(e) {
                                    var t = this;
                                    this.gvl_ || (this.gvl_ = e, this.map.forEach((function(e, n) {
                                        var r = s.PurposeRestriction.unHash(n);
                                        e.get().forEach((function(n) {
                                            t.isOkToHave(r.restrictionType, r.purposeId, n) || e.remove(n)
                                        }))
                                    })))
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.isEmpty = function() {
                                return 0 === this.map.size
                            }, Object.defineProperty(t.prototype, "numRestrictions", {
                                get: function() {
                                    return this.map.size
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t
                        }(n(186).Cloneable);
                    t.PurposeRestrictionVector = c
                },
                473: (e, t) => {
                    var n;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), (n = t.RestrictionType || (t.RestrictionType = {}))[n.NOT_ALLOWED = 0] = "NOT_ALLOWED", n[n.REQUIRE_CONSENT = 1] = "REQUIRE_CONSENT", n[n.REQUIRE_LI = 2] = "REQUIRE_LI"
                },
                858: (e, t) => {
                    var n;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), (n = t.Segment || (t.Segment = {})).CORE = "core", n.VENDORS_DISCLOSED = "vendorsDisclosed", n.VENDORS_ALLOWED = "vendorsAllowed", n.PUBLISHER_TC = "publisherTC"
                },
                130: (e, t, n) => {
                    var r;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = n(858),
                        s = function() {
                            function e() {}
                            return e.ID_TO_KEY = [o.Segment.CORE, o.Segment.VENDORS_DISCLOSED, o.Segment.VENDORS_ALLOWED, o.Segment.PUBLISHER_TC], e.KEY_TO_ID = ((r = {})[o.Segment.CORE] = 0, r[o.Segment.VENDORS_DISCLOSED] = 1, r[o.Segment.VENDORS_ALLOWED] = 2, r[o.Segment.PUBLISHER_TC] = 3, r), e
                        }();
                    t.SegmentIDs = s
                },
                315: function(e, t, n) {
                    var r, o = this && this.__extends || (r = function(e, t) {
                            return (r = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                                })(e, t)
                        }, function(e, t) {
                            function n() {
                                this.constructor = e
                            }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        s = this && this.__generator || function(e, t) {
                            var n, r, o, s, i = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return s = {
                                next: u(0),
                                throw: u(1),
                                return: u(2)
                            }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                                return this
                            }), s;

                            function u(s) {
                                return function(u) {
                                    return function(s) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i;) try {
                                            if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;
                                            switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                                case 0:
                                                case 1:
                                                    o = s;
                                                    break;
                                                case 4:
                                                    return i.label++, {
                                                        value: s[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    i.label++, r = s[1], s = [0];
                                                    continue;
                                                case 7:
                                                    s = i.ops.pop(), i.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                        i = 0;
                                                        continue
                                                    }
                                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                        i.label = s[1];
                                                        break
                                                    }
                                                    if (6 === s[0] && i.label < o[1]) {
                                                        i.label = o[1], o = s;
                                                        break
                                                    }
                                                    if (o && i.label < o[2]) {
                                                        i.label = o[2], i.ops.push(s);
                                                        break
                                                    }
                                                    o[2] && i.ops.pop(), i.trys.pop();
                                                    continue
                                            }
                                            s = t.call(e, i)
                                        } catch (e) {
                                            s = [6, e], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & s[0]) throw s[1];
                                        return {
                                            value: s[0] ? s[1] : void 0,
                                            done: !0
                                        }
                                    }([s, u])
                                }
                            }
                        };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = n(186),
                        u = n(458),
                        c = function(e) {
                            function t() {
                                var t = null !== e && e.apply(this, arguments) || this;
                                return t.bitLength = 0, t.maxId_ = 0, t.set_ = new Set, t
                            }
                            return o(t, e), t.prototype[Symbol.iterator] = function() {
                                var e;
                                return s(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            e = 1, t.label = 1;
                                        case 1:
                                            return e <= this.maxId ? [4, [e, this.has(e)]] : [3, 4];
                                        case 2:
                                            t.sent(), t.label = 3;
                                        case 3:
                                            return e++, [3, 1];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }, t.prototype.values = function() {
                                return this.set_.values()
                            }, Object.defineProperty(t.prototype, "maxId", {
                                get: function() {
                                    return this.maxId_
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.has = function(e) {
                                return this.set_.has(e)
                            }, t.prototype.unset = function(e) {
                                var t = this;
                                Array.isArray(e) ? e.forEach((function(e) {
                                    return t.unset(e)
                                })) : "object" == typeof e ? this.unset(Object.keys(e).map((function(e) {
                                    return +e
                                }))) : (this.set_.delete(e), this.bitLength = 0, e === this.maxId && (this.maxId_ = 0, this.set_.forEach((function(e) {
                                    t.maxId_ = Math.max(t.maxId, e)
                                }))))
                            }, t.prototype.isIntMap = function(e) {
                                var t = this;
                                return "object" == typeof e && Object.keys(e).every((function(n) {
                                    var r = Number.isInteger(parseInt(n, 10));
                                    return (r = r && t.isValidNumber(e[n].id)) && void 0 !== e[n].name
                                }))
                            }, t.prototype.isValidNumber = function(e) {
                                return parseInt(e, 10) > 0
                            }, t.prototype.isSet = function(e) {
                                var t = !1;
                                return e instanceof Set && (t = Array.from(e).every(this.isValidNumber)), t
                            }, t.prototype.set = function(e) {
                                var t = this;
                                if (Array.isArray(e)) e.forEach((function(e) {
                                    return t.set(e)
                                }));
                                else if (this.isSet(e)) this.set(Array.from(e));
                                else if (this.isIntMap(e)) this.set(Object.keys(e).map((function(e) {
                                    return +e
                                })));
                                else {
                                    if (!this.isValidNumber(e)) throw new u.TCModelError("set()", e, "must be positive integer array, positive integer, Set<number>, or IntMap");
                                    this.set_.add(e), this.maxId_ = Math.max(this.maxId, e), this.bitLength = 0
                                }
                            }, t.prototype.empty = function() {
                                this.set_ = new Set
                            }, t.prototype.forEach = function(e) {
                                for (var t = 1; t <= this.maxId; t++) e(this.has(t), t)
                            }, Object.defineProperty(t.prototype, "size", {
                                get: function() {
                                    return this.set_.size
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.setAll = function(e) {
                                this.set(e)
                            }, t
                        }(i.Cloneable);
                    t.Vector = c
                },
                250: (e, t, n) => {
                    function r(e) {
                        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r(n(867)), r(n(301)), r(n(731)), r(n(626)), r(n(96)), r(n(473)), r(n(858)), r(n(130)), r(n(315))
                }
            },
            t = {};

        function n(r) {
            var o = t[r];
            if (void 0 !== o) return o.exports;
            var s = t[r] = {
                exports: {}
            };
            return e[r].call(s.exports, s, s.exports, n), s.exports
        }
        n.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return n.d(t, {
                a: t
            }), t
        }, n.d = (e, t) => {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        };
        var r = {};
        return (() => {
            n.r(r), n.d(r, {
                decode_consent: () => t,
                vendor_allowed: () => o,
                purpose_allowed: () => s
            });
            var e = n(88);

            function t(t) {
                try {
                    return e.TCString.decode(t)
                } catch (e) {
                    return !1
                }
            }

            function o(e, n) {
                let r = !1;
                const o = t(e);
                return o && o.vendorConsents.has(n) && (r = !0), r
            }

            function s(e, n) {
                let r = !1;
                const o = t(e);
                return o && o.purposeConsents.has(n) && (r = !0), r
            }
        })(), r
    })()
}));