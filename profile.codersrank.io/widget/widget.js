/**
 * Codersrank Summary Widget 0.9.13
 * undefined
 * https://github.com/codersrank-org/summary-widget#readme
 *
 * Copyright 2020-2022 CodersRank Ltd.
 *
 * Released under the MIT License
 *
 * Released on: August 25, 2022
 */

! function(e) {
    "function" == typeof define && define.amd ? define(e) : e()
}((function() {
    "use strict";

    function e(e, a) {
        for (var r = 0; r < a.length; r++) {
            var t = a[r];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
        }
    }

    function a() {
        return (a = Object.assign || function(e) {
            for (var a = 1; a < arguments.length; a++) {
                var r = arguments[a];
                for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
            }
            return e
        }).apply(this, arguments)
    }

    function r(e, a) {
        e.prototype = Object.create(a.prototype), e.prototype.constructor = e, e.__proto__ = a
    }

    function t(e) {
        return (t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function n(e, a) {
        return (n = Object.setPrototypeOf || function(e, a) {
            return e.__proto__ = a, e
        })(e, a)
    }

    function i() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function o(e, a, r) {
        return (o = i() ? Reflect.construct : function(e, a, r) {
            var t = [null];
            t.push.apply(t, a);
            var i = new(Function.bind.apply(e, t));
            return r && n(i, r.prototype), i
        }).apply(null, arguments)
    }

    function s(e) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (s = function(e) {
            if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
            var r;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== a) {
                if (a.has(e)) return a.get(e);
                a.set(e, i)
            }

            function i() {
                return o(e, arguments, t(this).constructor)
            }
            return i.prototype = Object.create(e.prototype, {
                constructor: {
                    value: i,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n(i, e)
        })(e)
    }
    var d = {};

    function c(e) {
        return Math.round(10 * e) / 10
    }
    var l = window.Intl && window.Intl.NumberFormat ? Intl.NumberFormat("en", {
        minimumFractionDigits: 1
    }) : {
        format: function(e) {
            return e
        }
    };
    var m = function(e) {
            var a = void 0 === e ? {} : e,
                r = a.data,
                t = a.username,
                n = a.layout,
                i = a.badgesData,
                o = a.badgesLayout,
                s = a.showAvatar,
                d = a.showHeader,
                m = a.loading,
                u = a.branding,
                g = r && ("not_found" === r.status || "generated" === r.status),
                h = m || g,
                b = r.first_name,
                y = r.last_name,
                f = r.avatar_url,
                v = r.total_users,
                p = r.position,
                k = r.total_score;
            if (g) return "";
            var w, x = [b, y].filter((function(e) {
                    return !!e
                })).join(" "),
                z = Math.min(Math.max(Math.ceil(p / v * 100), 1), 100),
                _ = m || g ? "div" : "a";
            return "\n    <" + _ + " " + (m || g ? "" : 'href="https://profile.codersrank.io/user/' + t + '?utm_source=users&utm_medium=banner&utm_campaign=embedded_widget" rel="noreferrer noopener" target="_blank" title="Visit ' + t + "'s CodersRank profile\"") + ' class="codersrank-summary codersrank-summary-' + n + " codersrank-summary-badges-" + o + " " + (h ? " codersrank-summary-placeholder" : "") + '">\n    ' + (m ? '<div class="codersrank-summary-preloader"></div>' : "") + "\n    " + (!m && g ? '\n      <div class="codersrank-summary-not-found">User not found</div>\n    ' : "") + "\n    " + (d ? '\n    <div class="codersrank-summary-head' + (i.length ? "" : " codersrank-summary-head-only") + '">\n      ' + (s ? '\n      <div class="codersrank-summary-avatar" ' + (f ? 'style="background-image: url(' + f + ')"' : "") + "></div>\n      " : "") + '\n      <div class="codersrank-summary-head-content">\n        <div class="codersrank-summary-head-name">' + (x || t) + '</div>\n        <div class="codersrank-summary-head-rank"><b>Top ' + z + '%</b> in Worldwide</div>\n        <div class="codersrank-summary-head-rank"><b>' + (w = k, (l.format ? l.format(c(w)) : c(w)) + "</b> CodersRank score</div>\n      </div>\n    </div>\n    ") : "") + "\n    " + (i.length ? '\n    <div class="codersrank-summary-badges">\n      ' + i.map((function(e) {
                return "v1" === e.version ? '\n        <div class="codersrank-summary-badge codersrank-summary-badge-v1">\n          <div class="codersrank-summary-badge-rank">Top ' + e.rank + '</div>\n          <div class="codersrank-summary-badge-technology">\n            <div class="codersrank-summary-badge-technology-logo">\n              <img src="https://icon-widget.codersrank.io/api/' + encodeURIComponent(e.language) + '"/>\n            </div>\n            <span class="codersrank-summary-badge-name">' + e.language + '</span>\n          </div>\n          <div class="codersrank-summary-badge-location">' + e.location + "</div>\n        </div>\n      " : "v2" === e.version && "Seniority" === e.badgeFamily ? '\n        <div class="codersrank-summary-badge codersrank-summary-badge-v2 codersrank-summary-badge-' + e.badgeFamily.toLowerCase() + '">\n          <div class="codersrank-summary-badge-image">\n            <img src="https://profile.codersrank.io/static/badgesV2/' + e.badgeFamily + "/" + e.badgeType + '.svg" />\n          </div>\n          <div class="codersrank-summary-badge-label">' + (e.badgeType.split("").map((function(e, a) {
                    return e === e.toUpperCase() && 0 !== a ? " " + e : e
                })).join("") + '</div>\n          <div class="codersrank-summary-badge-technology">\n            <div class="codersrank-summary-badge-technology-logo">\n              <img src="https://icon-widget.codersrank.io/api/') + encodeURIComponent(e.language) + '"/>\n            </div>\n            <span class="codersrank-summary-badge-name">' + e.language + "</span>\n          </div>\n        </div>\n      " : "v2" === e.version && "Streak" === e.badgeFamily ? '\n        <div class="codersrank-summary-badge codersrank-summary-badge-v2 codersrank-summary-badge-' + e.badgeFamily.toLowerCase() + '">\n          <div class="codersrank-summary-badge-image">\n            <img src="https://profile.codersrank.io/static/badgesV2/' + e.badgeFamily + "/" + e.badgeType + '.svg" />\n          </div>\n          <div class="codersrank-summary-badge-days">days</div>\n          <div class="codersrank-summary-badge-label">' + function(e) {
                    return e.split("").map((function(e, a) {
                        return e === e.toUpperCase() && 0 !== a ? " " + e : e
                    })).join("")
                }(e.badgeType) + "</div>\n        </div>\n      " : ""
            })).join("") + "\n    </div>\n    " : "") + "\n  </" + _ + ">\n  " + (u ? '\n  <div class="codersrank-summary-branding">\n    <a href="https://codersrank.io" target="_blank" rel="noopener noreferrer">\n      <span>Powered by </span>\n      <svg xmlns="http://www.w3.org/2000/svg" width="258" height="39" viewBox="0 0 258 39"><path fill="#19223C" d="M71.358 27.687A8.076 8.076 0 0 1 69 21.999c0-2.122.846-4.162 2.358-5.687a8.022 8.022 0 0 1 2.664-1.688 8.175 8.175 0 0 1 3.126-.543 8.298 8.298 0 0 1 4.723 1.339 7.155 7.155 0 0 1 2.895 3.791H80.12a3 3 0 0 0-1.182-1.283 3.106 3.106 0 0 0-1.713-.427 4.128 4.128 0 0 0-1.694.264 4.046 4.046 0 0 0-1.43.926 5.197 5.197 0 0 0-1.133 3.234c0 1.17.399 2.309 1.134 3.234.403.405.89.72 1.43.926a4.128 4.128 0 0 0 1.693.264c.586.039 1.17-.087 1.684-.364a3.01 3.01 0 0 0 1.211-1.198h4.571a7.156 7.156 0 0 1-2.895 3.792 8.298 8.298 0 0 1-4.723 1.338 8.173 8.173 0 0 1-3.085-.557 8.02 8.02 0 0 1-2.629-1.673zM88.652 27.687a8.076 8.076 0 0 1-2.359-5.688c0-2.122.846-4.162 2.359-5.687a8.57 8.57 0 0 1 5.79-2.238c2.15 0 4.221.8 5.79 2.238a8.076 8.076 0 0 1 2.358 5.687 8.076 8.076 0 0 1-2.359 5.688 8.491 8.491 0 0 1-5.79 2.266 8.491 8.491 0 0 1-5.79-2.266zm8.837-2.454A5.197 5.197 0 0 0 98.623 22c0-1.17-.4-2.308-1.134-3.234a4.398 4.398 0 0 0-3.048-1.219c-1.14 0-2.234.438-3.047 1.22a5.197 5.197 0 0 0-1.134 3.233c0 1.171.399 2.309 1.134 3.234a4.398 4.398 0 0 0 3.047 1.219c1.14 0 2.235-.438 3.048-1.219zM110.592 14.304a9.126 9.126 0 0 1 6.247 2.156 7.73 7.73 0 0 1 1.8 2.546 7.573 7.573 0 0 1 0 6.06 7.73 7.73 0 0 1-1.8 2.546 9.049 9.049 0 0 1-6.247 2.156h-5.561V14.304h5.561zm-1.752 12.64h1.752a4.596 4.596 0 0 0 1.903-.295 4.504 4.504 0 0 0 1.602-1.044 4.909 4.909 0 0 0 1.295-3.569 4.909 4.909 0 0 0-1.295-3.568 4.504 4.504 0 0 0-1.602-1.044 4.595 4.595 0 0 0-1.903-.294h-1.752v9.813zM131.313 14.23v2.9h-5.714v3.345h5.104v2.9H125.6v3.568h5.714v2.9h-9.599V14.23zM138.55 23.746v6.022h-3.885V14.304h6.247a6.19 6.19 0 0 1 4.266 1.413c.486.418.874.933 1.137 1.51.263.578.395 1.204.387 1.836a4.752 4.752 0 0 1-.838 2.602 4.578 4.578 0 0 1-2.743 1.784l3.885 6.32h-4.418l-3.58-6.023h-.458zm0-6.616v3.717h2.362c.253.01.505-.03.742-.12.236-.09.45-.226.63-.4.175-.178.312-.388.404-.617.091-.23.135-.475.128-.722a1.819 1.819 0 0 0-.128-.721 1.854 1.854 0 0 0-.405-.617 1.833 1.833 0 0 0-.63-.4 1.87 1.87 0 0 0-.741-.12h-2.362zM155.158 17.055a1.86 1.86 0 0 0-1.22.372c-.159.138-.284.311-.363.505-.08.193-.111.402-.093.61a1.528 1.528 0 0 0 .457 1.115c.32.31.712.539 1.143.67l1.523.445 1.676.52 1.524.744c.487.317.881.753 1.143 1.264.31.6.466 1.262.457 1.933a4.227 4.227 0 0 1-.45 1.859 4.333 4.333 0 0 1-1.226 1.487 6.424 6.424 0 0 1-4.343 1.412 6.899 6.899 0 0 1-4.342-1.263 4.331 4.331 0 0 1-1.278-1.588 4.223 4.223 0 0 1-.398-1.981h4.114c-.012.253.032.507.128.742.097.236.244.449.431.625a1.87 1.87 0 0 0 1.421.492c.475.02.94-.14 1.296-.447a1.382 1.382 0 0 0 .457-1.115 1.455 1.455 0 0 0-.457-1.115 2.986 2.986 0 0 0-1.143-.669l-1.524-.446-1.676-.52-1.523-.744a3.148 3.148 0 0 1-1.143-1.264 4 4 0 0 1-.305-1.859 4.15 4.15 0 0 1 .407-1.944 4.258 4.258 0 0 1 1.27-1.55 6.582 6.582 0 0 1 4.19-1.338 6.982 6.982 0 0 1 4.113 1.115 4.33 4.33 0 0 1 1.278 1.588c.292.62.428 1.299.398 1.98h-4.19a2.056 2.056 0 0 0-.533-1.263 1.611 1.611 0 0 0-1.22-.372zM168.261 23.746v6.022h-3.885V14.304h6.247a6.19 6.19 0 0 1 4.266 1.413c.486.418.874.933 1.137 1.51.263.578.395 1.204.387 1.836a4.752 4.752 0 0 1-.838 2.602 4.578 4.578 0 0 1-2.743 1.784l3.885 6.32H172.3l-3.58-6.023h-.458zm0-6.616v3.717h2.362c.253.01.505-.03.742-.12.236-.09.45-.226.63-.4.175-.178.312-.388.404-.617.091-.23.135-.475.128-.722a1.819 1.819 0 0 0-.128-.721 1.854 1.854 0 0 0-.405-.617 1.833 1.833 0 0 0-.63-.4 1.87 1.87 0 0 0-.741-.12h-2.362zM189.592 29.768l-.914-2.602h-5.714l-.914 2.602h-4.114l5.485-15.538h4.723l5.485 15.538h-4.037zm-5.638-5.501h3.733l-1.828-5.428-1.905 5.428zM205.972 14.23h3.885v15.538h-3.885l-6.476-9.813v9.813h-3.885V14.23h3.885l6.476 9.814zM217.093 29.768h-3.885V14.304h3.885v6.766l5.257-6.766h5.104l-6.552 7.732 6.552 7.732h-4.952l-5.333-6.84zM232.863 27.761a1.98 1.98 0 0 1-.5 1.253 2.07 2.07 0 0 1-1.197.664 2.1 2.1 0 0 1-1.359-.222 2.024 2.024 0 0 1-.91-1.01 1.962 1.962 0 0 1-.054-1.342c.141-.44.433-.82.827-1.076a2.096 2.096 0 0 1 2.583.246c.201.194.359.426.464.682.105.256.154.53.146.805z"></path> <path fill="#67a4ac" d="M235.301 29.768V14.304h3.885v15.464zM244.062 27.687a8.076 8.076 0 0 1-2.358-5.688c0-2.122.846-4.162 2.358-5.687a8.57 8.57 0 0 1 5.79-2.238c2.151 0 4.222.8 5.79 2.238A8.076 8.076 0 0 1 258 21.999a8.076 8.076 0 0 1-2.358 5.688 8.491 8.491 0 0 1-5.79 2.266 8.491 8.491 0 0 1-5.79-2.266zm8.837-2.454A5.197 5.197 0 0 0 254.033 22c0-1.17-.399-2.308-1.134-3.234a4.398 4.398 0 0 0-3.047-1.219c-1.14 0-2.235.438-3.047 1.22a5.197 5.197 0 0 0-1.134 3.233c0 1.171.399 2.309 1.134 3.234a4.398 4.398 0 0 0 3.047 1.219c1.14 0 2.235-.438 3.047-1.219z"></path> <path d="M33.25.054L2.147 19.634C.682 20.52-.034 21.512.001 22.611v2.98c.035 1.1.768 2.075 2.2 2.926l15.393 8.885a.726.726 0 0 0 1.047-.373l3.456-8.352-7.33-4.15a1.317 1.317 0 0 1-.514-.477 1.346 1.346 0 0 1 .461-1.864l13.457-8.247L33.72.427a.324.324 0 0 0-.103-.36.31.31 0 0 0-.369-.013z" fill="#19223c"></path> <path d="M58.8 10.961L43.618 1.757a.726.726 0 0 0-1.047.32l-3.56 8.352 7.225 4.31c.208.113.381.282.502.488a1.347 1.347 0 0 1 0 1.363 1.318 1.318 0 0 1-.502.49l-13.561 7.98-5.76 13.407a.323.323 0 0 0 .026.452.312.312 0 0 0 .445-.026l9.949-6.012 3.927 5.64a.947.947 0 0 0 .785.425h9.425a.932.932 0 0 0 .832-.506.97.97 0 0 0-.047-.984l-6.388-9.79 12.933-7.82c1.466-.887 2.199-1.88 2.199-2.98V13.94c0-1.1-.733-2.092-2.2-2.979z" fill="#67a4ac"></path></svg>\n    </a>\n  </div>\n  ' : "") + "\n"
        },
        u = {
            first_name: "Placeholder",
            last_name: "Name",
            avatar_url: "",
            country: "Placeholder",
            total_users: 100,
            position: 1,
            total_score: 5e3,
            badges: [{
                language: "HTML",
                visibility: "highlighted",
                rank: 1,
                location_name: "World",
                version: "v1"
            }, {
                language: "JavaScript",
                visibility: "highlighted",
                rank: 1,
                location_name: "World",
                version: "v1"
            }, {
                language: "CSS",
                visibility: "highlighted",
                rank: 1,
                location_name: "World",
                version: "v1"
            }]
        },
        g = function(t) {
            function n() {
                var e;
                return (e = t.call(this) || this).shadowEl = e.attachShadow({
                    mode: "closed"
                }), e.tempDiv = document.createElement("div"), e.stylesEl = document.createElement("style"), e.stylesEl.textContent = ":host{--bg-color:#edf1f3;--border:none;--border-radius:4px;--header-padding:8px;--header-bg-color:#72a0a8;--header-text-color:#fff;--avatar-size:80px;--name-font-size:inherit;--name-font-weight:bold;--rank-font-size:inherit;--preloader-color:#72a0a8;--badges-padding:8px;--badge-border-radius:4px;--badge-bg-color:#fff;--badge-box-shadow:0px 1px 2px rgba(23, 36, 50, 0.3);--badge-border:none;--badge-margin:8px;--badge-padding:4px;--badge-text-color:#000;--badge-rank-font-size:0.85em;--badge-rank-font-weight:bold;--badge-icon-size:24px;--badge-technology-font-weight:600;--badge-technology-font-size:inherit;--badge-label-font-weight:600;--badge-label-font-size:12px;--badge-location-font-size:0.85em;--badge-location-font-weight:normal;--branding-text-color:inherit;width:100%;display:block}.codersrank-summary{position:relative;line-height:1.5;background-color:var(--bg-color);border-radius:var(--border-radius);border:var(--border);position:relative;display:block;letter-spacing:0;text-decoration:none;text-transform:none;font-variant:none;font-style:normal;font-weight:400;text-shadow:none}.codersrank-summary-head{background-color:var(--header-bg-color);color:var(--header-text-color);display:flex;align-items:center;justify-content:space-between;padding:var(--header-padding);border-radius:var(--border-radius) var(--border-radius) 0 0;text-align:left}.codersrank-summary-head-content{width:100%;flex-shrink:10;min-width:0}.codersrank-summary-head-name{font-size:var(--name-font-size);font-weight:var(--name-font-weight)}.codersrank-summary-head-rank{font-size:var(--rank-font-size)}.codersrank-summary-head-only{border-radius:var(--border-radius)}.codersrank-summary-avatar{width:var(--avatar-size);height:var(--avatar-size);border-radius:50%;background-size:cover;background-position:center;flex-shrink:0;margin-right:10px}.codersrank-summary-badges{padding:var(--badges-padding)}.codersrank-summary-badge{padding:var(--badge-padding);width:100%;flex-shrink:10;min-width:0;border-radius:var(--badge-border-radius);box-shadow:var(--badge-box-shadow);border:var(--badge-border);text-align:center;color:var(--badge-text-color);background-color:var(--badge-bg-color);display:flex;flex-direction:column;box-sizing:border-box;justify-content:space-between}.codersrank-summary-horizontal .codersrank-summary-badges{display:flex}.codersrank-summary-horizontal .codersrank-summary-badge+.codersrank-summary-badge{margin-left:var(--badge-margin)}.codersrank-summary-vertical .codersrank-summary-avatar{margin-right:0}.codersrank-summary-vertical .codersrank-summary-head{justify-content:center;flex-wrap:wrap;text-align:center}.codersrank-summary-vertical .codersrank-summary-badge+.codersrank-summary-badge{margin-top:var(--badge-margin)}.codersrank-summary-badge-rank{font-size:var(--badge-rank-font-size);font-weight:var(--badge-rank-font-weight)}.codersrank-summary-badge-location{line-height:1.2;font-size:var(--badge-location-font-size);font-weight:var(--badge-location-font-weight);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.codersrank-summary-badge-technology{margin:8px 0;display:flex;align-items:center;justify-content:center;font-size:var(--badge-technology-font-size);font-weight:var(--badge-technology-font-weight)}.codersrank-summary-badge-technology-logo{width:var(--badge-icon-size);height:var(--badge-icon-size);margin-right:6px;display:flex;justify-content:center;align-items:center}.codersrank-summary-badge-technology img{max-width:var(--badge-icon-size);max-height:var(--badge-icon-size)}.codersrank-summary-badge-icon{font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;border-radius:4px}.codersrank-summary-badge-name{flex-shrink:10;min-width:0;overflow:hidden;text-overflow:ellipsis}.codersrank-summary-badges-vertical .codersrank-summary-badge-technology{flex-direction:column;justify-content:center;align-items:center}.codersrank-summary-badges-vertical .codersrank-summary-badge-technology-logo{margin-right:0;margin-bottom:2px}.codersrank-summary-badge-seniority .codersrank-summary-badge-image,.codersrank-summary-badge-streak .codersrank-summary-badge-image{height:32px;display:flex;align-items:center;justify-content:center}.codersrank-summary-badge-seniority .codersrank-summary-badge-image img,.codersrank-summary-badge-streak .codersrank-summary-badge-image img{width:auto;height:100%}.codersrank-summary-badge-streak .codersrank-summary-badge-image{height:40px}.codersrank-summary-badge-seniority .codersrank-summary-badge-label,.codersrank-summary-badge-streak .codersrank-summary-badge-label{margin:8px 0;font-size:var(--badge-label-font-size);font-weight:var(--badge-label-font-weight);line-height:1.25}.codersrank-summary-badge-seniority .codersrank-summary-badge-technology{margin:0}.codersrank-summary-badge-streak .codersrank-summary-badge-days{text-transform:uppercase;font-size:var(--badge-label-font-size);opacity:.75;margin-top:4px;margin-bottom:auto}.codersrank-summary-placeholder{pointer-events:none}.codersrank-summary-placeholder .codersrank-summary-badges,.codersrank-summary-placeholder .codersrank-summary-head{visibility:hidden;opacity:0}.codersrank-summary-preloader{position:absolute;left:50%;top:50%;width:32px;height:32px;margin:-16px 0 0 -16px;border:3px solid var(--preloader-color);border-left-color:transparent;border-bottom-color:transparent;border-radius:50%;box-sizing:border-box;-webkit-animation:preloader 1s infinite linear;animation:preloader 1s infinite linear}.codersrank-summary-branding{justify-content:flex-end;align-items:center;font-size:12px;color:var(--branding-text-color);display:flex;margin-top:.5em}.codersrank-summary-branding a{opacity:.5;display:flex;align-items:center;color:inherit;text-decoration:none;transition-duration:.2s;position:relative;z-index:1;transform:translate3d(0,0,0)}.codersrank-summary-branding a:hover{opacity:1}.codersrank-summary-branding span{margin-right:4px}.codersrank-summary-branding svg{height:16px;width:auto}@-webkit-keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}", e.shadowEl.appendChild(e.stylesEl), e.onResize = e.onResize.bind(function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)), e.mounted = !1, e.state = 0, e.data = null, e.width = 0, e
            }
            r(n, t);
            var i, o, s, c = n.prototype;
            return c.render = function() {
                var e = this.username,
                    r = this.mounted,
                    t = this.state,
                    n = this.shadowEl,
                    i = this.data,
                    o = this.layout,
                    s = this.badgesData,
                    d = this.badgesLayout,
                    c = this.showAvatar,
                    l = this.showHeader,
                    g = this.branding,
                    h = {
                        username: e,
                        data: i || u,
                        layout: o,
                        badgesData: s,
                        badgesLayout: d,
                        showAvatar: c,
                        showHeader: l,
                        branding: g
                    };
                if (e && r) {
                    3 === t ? this.tempDiv.innerHTML = m(h) : 2 === t ? this.tempDiv.innerHTML = "" : 0 !== t && 1 !== t || (this.tempDiv.innerHTML = function(e) {
                        return m(a({}, e, {
                            loading: !0
                        }))
                    }(h));
                    var b = n.querySelector(".codersrank-summary"),
                        y = n.querySelector(".codersrank-summary-branding");
                    b && b.parentNode.removeChild(b), y && y.parentNode.removeChild(y), b = this.tempDiv.querySelector(".codersrank-summary"), y = this.tempDiv.querySelector(".codersrank-summary-branding"), b && (this.widgetEl = b, n.appendChild(b), y && n.appendChild(y))
                }
            }, c.loadAndRender = function() {
                var e = this,
                    r = this.username,
                    t = this.id;
                this.state = 1, this.render(),
                    function(e, r) {
                        if (d[e]) return Promise.resolve(d[e]);
                        if (r && d[r]) return Promise.resolve(d[r]);
                        var t = "https://api.codersrank.io/v2/users/" + (e || r) + "/";
                        r && (t += "?get_by=id");
                        var n = "https://api.codersrank.io/v2/users/" + (e || r) + "/badges";
                        return r && (n += "?get_by=id"), Promise.all([fetch(t, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then((function(e) {
                            return e.json()
                        })), fetch(n, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then((function(e) {
                            return e.json()
                        }))]).then((function(t) {
                            var n = a({}, t[0], t[1]);
                            return r ? d[r] = n : d[e] = n, n
                        })).catch((function(e) {
                            return console.error(e), Promise.reject(e)
                        }))
                    }(r, t).then((function(a) {
                        e.data = a, e.state = 3, e.render()
                    })).catch((function() {
                        e.state = 2, e.render()
                    }))
            }, c.onResize = function() {
                if (this.widgetEl) {
                    this.width = this.offsetWidth;
                    var e = this.layout,
                        a = this.badgesLayout;
                    "horizontal" === e ? this.widgetEl.classList.remove("codersrank-summary-vertical") : this.widgetEl.classList.remove("codersrank-summary-horizontal"), "horizontal" === a ? this.widgetEl.classList.remove("codersrank-summary-badges-vertical") : this.widgetEl.classList.remove("codersrank-summary-badges-horizontal"), this.widgetEl.classList.add("codersrank-summary-" + e), this.widgetEl.classList.add("codersrank-summary-badges-" + a)
                }
            }, c.attributeChangedCallback = function() {
                this.mounted && this.loadAndRender()
            }, c.connectedCallback = function() {
                window.addEventListener("resize", this.onResize), this.width = this.offsetWidth, this.mounted = !0, this.loadAndRender()
            }, c.disconnectedCallback = function() {
                window.removeEventListener("resize", this.onResize), this.mounted = !1
            }, i = n, s = [{
                key: "observedAttributes",
                get: function() {
                    return ["username", "logos", "grid", "max-items"]
                }
            }], (o = [{
                key: "id",
                get: function() {
                    return this.getAttribute("id")
                },
                set: function(e) {
                    this.setAttribute("id", e)
                }
            }, {
                key: "username",
                get: function() {
                    return this.getAttribute("username")
                },
                set: function(e) {
                    this.setAttribute("username", e)
                }
            }, {
                key: "layout",
                get: function() {
                    var e = this.getAttribute("layout");
                    return "vertical" === e ? "vertical" : "horizontal" === e ? "horizontal" : this.width < this.minWidth ? "vertical" : "horizontal"
                },
                set: function(e) {
                    this.setAttribute("layout", e)
                }
            }, {
                key: "badges",
                get: function() {
                    var e = this.getAttribute("badges");
                    return null !== e && "" !== e ? parseInt(e, 10) : 3
                },
                set: function(e) {
                    this.setAttribute("badges", e)
                }
            }, {
                key: "badgesData",
                get: function() {
                    return function(e) {
                        var a = e.data,
                            r = e.badges,
                            t = e.loading,
                            n = a || u;
                        t && (n = u);
                        var i = (n.badges || []).filter((function(e) {
                            return "highlighted" === e.visibility
                        })).map((function(e) {
                            var a = e.language,
                                r = e.rank,
                                t = e.location_name,
                                n = e.version,
                                i = e.badgeFamily,
                                o = e.badgeType,
                                s = e.values;
                            return {
                                language: a || s.language,
                                rank: r,
                                location: t,
                                version: n,
                                badgeFamily: i,
                                badgeType: o
                            }
                        })).slice(0, r);
                        return i.sort((function(e, a) {
                            return "v1" === a.version && "v2" === e.version ? -1 : 0
                        })), i.filter((function(e) {
                            return "v2" !== e.version || "Seniority" === e.badgeFamily || "Streak" === e.badgeFamily
                        }))
                    }({
                        data: this.data,
                        badges: this.badges,
                        loading: 1 === this.state
                    })
                }
            }, {
                key: "badgesLayout",
                get: function() {
                    var e = this.width,
                        a = this.badgesData,
                        r = this.layout,
                        t = this.badgeMinWidth,
                        n = (e - 16 - 8 * (a.length - 1)) / a.length,
                        i = "horizontal";
                    return "horizontal" === r && n < t ? i = "vertical" : "horizontal" === r && n >= 380 && (i = "horizontal-wide"), i
                }
            }, {
                key: "showAvatar",
                get: function() {
                    return "false" !== this.getAttribute("show-avatar")
                },
                set: function(e) {
                    this.setAttribute("show-avatar", e)
                }
            }, {
                key: "show-avatar",
                set: function(e) {
                    this.setAttribute("show-avatar", e)
                }
            }, {
                key: "showHeader",
                get: function() {
                    return "false" !== this.getAttribute("show-header")
                },
                set: function(e) {
                    this.setAttribute("show-header", e)
                }
            }, {
                key: "show-head",
                set: function(e) {
                    this.setAttribute("show-header", e)
                }
            }, {
                key: "minWidth",
                get: function() {
                    var e = parseInt(this.getAttribute("min-width"), 10);
                    return e && !Number.isNaN(e) || (e = 300), e
                },
                set: function(e) {
                    this.setAttribute("min-width", e)
                }
            }, {
                key: "min-width",
                set: function(e) {
                    this.setAttribute("min-width", e)
                }
            }, {
                key: "badgeMinWidth",
                get: function() {
                    var e = parseInt(this.getAttribute("badge-min-width"), 10);
                    return e && !Number.isNaN(e) || (e = 100), e
                },
                set: function(e) {
                    this.setAttribute("badge-min-width", e)
                }
            }, {
                key: "badge-min-width",
                set: function(e) {
                    this.setAttribute("badge-min-width", e)
                }
            }, {
                key: "branding",
                get: function() {
                    return "false" !== this.getAttribute("branding")
                },
                set: function(e) {
                    this.setAttribute("branding", e)
                }
            }]) && e(i.prototype, o), s && e(i, s), n
        }(s(HTMLElement)),
        h = function(e) {
            function a() {
                return e.apply(this, arguments) || this
            }
            return r(a, e), a
        }(g);
    window.customElements && !window.customElements.get("codersrank-summary") && window.customElements.define("codersrank-summary", g), window.customElements && !window.customElements.get("codersrank-widget") && window.customElements.define("codersrank-widget", h)
}));
//# sourceMappingURL=codersrank-summary.min.js.map