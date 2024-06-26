parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++) try {
        f(t[c])
    } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "clu1": [function(require, module, exports) {

    }, {
        "./../font/Calibre-Semibold.woff": [
            ["Calibre-Semibold.21cc3335.woff", "ojuo"], "ojuo"
        ],
        "./../font/Calibre-Semibold.ttf": [
            ["Calibre-Semibold.2c27f793.ttf", "rzCz"], "rzCz"
        ],
        "./../font/Calibre-Semibold.svg": [
            ["Calibre-Semibold.320db03b.svg", "u7ET"], "u7ET"
        ],
        "./../font/Calibre-Medium.woff": [
            ["Calibre-Medium.bb31c6b1.woff", "t3eK"], "t3eK"
        ],
        "./../font/Calibre-Medium.ttf": [
            ["Calibre-Medium.cb484263.ttf", "LVc2"], "LVc2"
        ],
        "./../font/Calibre-Regular.woff": [
            ["Calibre-Regular.0e30637c.woff", "ktK6"], "ktK6"
        ],
        "./../font/Calibre-Regular.ttf": [
            ["Calibre-Regular.ad23bcd8.ttf", "GVeT"], "GVeT"
        ],
        "/opt/build/repo/src/img/png/map.png": [
            ["map.5acc89ab.png", "GcZG"], "GcZG"
        ],
        "/opt/build/repo/src/img/png/me.png": [
            ["me.ac1763cf.png", "AlZO"], "AlZO"
        ],
        "./../img/svg/home-bg.svg": [
            ["home-bg.19753168.svg", "LI0O"], "LI0O"
        ]
    }],
    "Focm": [function(require, module, exports) {
        "use strict";
        require("/sass/main.scss");
        var e = gsap.timeline({
            paused: !0,
            reversed: !0
        });
        e.to(".box", {
            height: "100vh",
            duration: .3,
            transformOrigin: "bottom",
            stagger: .2
        }), e.to(".nav-main__content", {
            opacity: "1",
            visibility: "visible",
            yPercent: -5,
            duration: .3,
            transformOrigin: "bottom",
            stagger: .2
        });
        var t = document.querySelector(".nav-icon");
        t.onclick = function() {
            e.reversed() ? (this.classList.add("nav-anim"), e.play(), document.body.classList.add("noScroll")) : (this.classList.remove("nav-anim"), e.reverse(), document.body.classList.remove("noScroll"))
        };
        var n = document.querySelectorAll(".list__item a");
        n.forEach(function(n) {
            n.addEventListener("click", function() {
                document.body.classList.remove("noScroll"), e.reverse(), t.classList.remove("nav-anim")
            })
        });
        var o = document.querySelectorAll("#projects .project-box"),
            r = document.querySelectorAll("#projects .project-box__link");

        function a(e) {
            var t = e.querySelector("#projects .project-box__link");
            t.classList.remove("shaky"), setTimeout(function() {
                t.classList.add("shaky")
            }, 200)
        }
        o.forEach(function(e) {
            e.onclick = function() {
                return a(e)
            }
        });
        var c = document.querySelector("q"),
            i = 6e3;

        function s() {
            fetch("https://gist.githubusercontent.com/tiapnn/ca5f70fc803eef6c02ded745ad624c71/raw/9b2c6f5440785d7b62ee04953d5a779c3ed8b166/programming-quotes.json").then(function(e) {
                return e.json()
            }).then(function(e) {
                return setInterval(function() {
                    return u(e.data)
                }, i)
            })
        }

        function u(e) {
            var t = l(e);
            f(), d(t)
        }

        function l(e) {
            return e[Math.floor(Math.random() * e.length)]
        }

        function d(e) {
            setTimeout(function() {
                c.innerHTML = e.quote, c.cite = e.source
            }, 300)
        }

        function f() {
            c.removeEventListener("transitionend", m), c.addEventListener("transitionend", m), c.classList.remove("fade")
        }

        function m() {
            c.removeEventListener("transitionend", m), c.classList.add("fade")
        }
        s();
        var v = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.hash,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 350;
            try {
                window.matchMedia("(max-width: 426px)").matches && (t = 250);
                var n = document.querySelector(e).offsetTop;
                window.scrollTo(0, n - t)
            } catch (o) {
                location.hash = ""
            }
        };
        document.addEventListener("DOMContentLoaded", function() {
            v()
        }), window.onhashchange = function() {
            v()
        }, document.querySelectorAll('a[href^="#"]').forEach(function(e) {
            e.onclick = function(e) {
                var t = e.target;
                e.preventDefault(), v(t.attributes.href.value)
            }
        });
        var h = "Nice to see you around here! Send me a message if you want to reuse my portfolio template or you want explanations of any features! Cheers!";
        console.group("Hey developer!"), console.log(h), console.log("%cMattia P - tiapnn@yahoo.it", "font-size:20px"), console.log("%c🍝🥘", "font-size:100px"), console.groupEnd();
    }, {
        "/sass/main.scss": "clu1"
    }]
}, {}, ["Focm"], null)
//# sourceMappingURL=src.4d99e326.js.map