! function() {
    "use strict";
    var t = function() {
        return function() {
            try {
                if (window.top.location.href) return !0
            } catch (t) {
                return !1
            }
        }() ? window.top : window.self
    };
    t().navigator.userAgent.match(/(MSIE|Trident)/) || fetch("https://script.4dex.io/adagio.js").then((function(t) {
        return t.text()
    })).then((function(n) {
        var o = t();
        o.localStorage.getItem("adagioScript") || (o.ADAGIO = o.ADAGIO || {}, o.ADAGIO.late = !0, Function(n)()), o.localStorage.setItem("adagioScript", n)
    })).catch((function(t) {
        console.log(t)
    }))
}();