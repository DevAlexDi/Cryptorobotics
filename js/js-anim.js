$(function () {
    ParallaxScroll.init()
});
var ParallaxScroll = {
    showLogs: !1
    , round: 1e3
    , init: function () {
        return this._log("init"), this._inited ? (this._log("Already Inited"), void(this._inited = !0)) : (this._requestAnimationFrame = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
                window.setTimeout(a, 1e3 / 60)
            }
        }(), void this._onScroll(!0))
    }
    , _inited: !1
    , _properties: ["x", "y", "z", "rotateX", "rotateY", "rotateZ", "scaleX", "scaleY", "scaleZ", "scale"]
    , _requestAnimationFrame: null
    , _log: function (a) {
        this.showLogs && console.log("Parallax Scroll / " + a)
    }
    , _onScroll: function (a) {
        var b = $(document).scrollTop()
            , c = $(window).height();
        this._log("onScroll " + b), $("[data-parallax]").each($.proxy(function (d, e) {
            var f = $(e)
                , g = []
                , h = !1
                , i = f.data("style");
            void 0 == i && (i = f.attr("style") || "", f.data("style", i));
            var k, j = [f.data("parallax")];
            for (k = 2; f.data("parallax" + k); k++) j.push(f.data("parallax-" + k));
            var l = j.length;
            for (k = 0; k < l; k++) {
                var m = j[k]
                    , n = m["from-scroll"];
                void 0 == n && (n = Math.max(0, $(e).offset().top - c)), n |= 0;
                var o = m.distance
                    , p = m["to-scroll"];
                void 0 == o && void 0 == p && (o = c), o = Math.max(0 | o, 1);
                var q = m.easing
                    , r = m["easing-return"];
                if (void 0 != q && $.easing && $.easing[q] || (q = null), void 0 != r && $.easing && $.easing[r] || (r = q), q) {
                    var s = m.duration;
                    void 0 == s && (s = o), s = Math.max(0 | s, 1);
                    var t = m["duration-return"];
                    void 0 == t && (t = s), o = 1;
                    var u = f.data("current-time");
                    void 0 == u && (u = 0)
                }
                void 0 == p && (p = n + o), p |= 0;
                var v = m.smoothness;
                void 0 == v && (v = 30), v |= 0, (a || 0 == v) && (v = 1), v |= 0;
                var w = b;
                w = Math.max(w, n), w = Math.min(w, p), q && (void 0 == f.data("sens") && f.data("sens", "back"), w > n && ("back" == f.data("sens") ? (u = 1, f.data("sens", "go")) : u++), w < p && ("go" == f.data("sens") ? (u = 1, f.data("sens", "back")) : u++), a && (u = s), f.data("current-time", u)), this._properties.map($.proxy(function (a) {
                    var b = 0
                        , c = m[a];
                    if (void 0 != c) {
                        "scale" == a || "scaleX" == a || "scaleY" == a || "scaleZ" == a ? b = 1 : c |= 0;
                        var d = f.data("_" + a);
                        void 0 == d && (d = b);
                        var e = (c - b) * ((w - n) / (p - n)) + b
                            , i = d + (e - d) / v;
                        if (q && u > 0 && u <= s) {
                            var j = b;
                            "back" == f.data("sens") && (j = c, c = -c, q = r, s = t), i = $.easing[q](null, u, j, c, s)
                        }
                        i = Math.ceil(i * this.round) / this.round, i == d && e == c && (i = c), g[a] || (g[a] = 0), g[a] += i, d != g[a] && (f.data("_" + a, g[a]), h = !0)
                    }
                }, this))
            }
            if (h) {
                if (void 0 != g.z) {
                    var x = m.perspective;
                    void 0 == x && (x = 800);
                    var y = f.parent();
                    y.data("style") || y.data("style", y.attr("style") || ""), y.attr("style", "perspective:" + x + "px; -webkit-perspective:" + x + "px; " + y.data("style"))
                }
                void 0 == g.scaleX && (g.scaleX = 1), void 0 == g.scaleY && (g.scaleY = 1), void 0 == g.scaleZ && (g.scaleZ = 1), void 0 != g.scale && (g.scaleX *= g.scale, g.scaleY *= g.scale, g.scaleZ *= g.scale);
                var z = "translate3d(" + (g.x ? g.x : 0) + "px, " + (g.y ? g.y : 0) + "px, " + (g.z ? g.z : 0) + "px)"
                    , A = "rotateX(" + (g.rotateX ? g.rotateX : 0) + "deg) rotateY(" + (g.rotateY ? g.rotateY : 0) + "deg) rotateZ(" + (g.rotateZ ? g.rotateZ : 0) + "deg)"
                    , B = "scaleX(" + g.scaleX + ") scaleY(" + g.scaleY + ") scaleZ(" + g.scaleZ + ")"
                    , C = z + " " + A + " " + B + ";";
                this._log(C), f.attr("style", "transform:" + C + " -webkit-transform:" + C + " " + i)
            }
        }, this)), window.requestAnimationFrame ? window.requestAnimationFrame($.proxy(this._onScroll, this, !1)) : this._requestAnimationFrame($.proxy(this._onScroll, this, !1))
    }
};