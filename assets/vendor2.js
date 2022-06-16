/*!
 * enquire.min.js
 */
/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!(function (e, t, n) {
  var i = window.matchMedia;
  "undefined" != typeof module && module.exports
    ? (module.exports = n(i))
    : "function" == typeof define && define.amd
    ? define(function () {
        return (t[e] = n(i));
      })
    : (t[e] = n(i));
})("enquire", this, function (e) {
  "use strict";
  function t(e, t) {
    var n,
      i = 0,
      o = e.length;
    for (i; o > i && ((n = t(e[i], i)), n !== !1); i++);
  }
  function n(e) {
    return "[object Array]" === Object.prototype.toString.apply(e);
  }
  function i(e) {
    return "function" == typeof e;
  }
  function o(e) {
    (this.options = e), !e.deferSetup && this.setup();
  }
  function r(t, n) {
    (this.query = t),
      (this.isUnconditional = n),
      (this.handlers = []),
      (this.mql = e(t));
    var i = this;
    (this.listener = function (e) {
      (i.mql = e), i.assess();
    }),
      this.mql.addListener(this.listener);
  }
  function s() {
    if (!e)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill"
      );
    (this.queries = {}), (this.browserIsIncapable = !e("only all").matches);
  }
  return (
    (o.prototype = {
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0);
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match();
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (e) {
        return this.options === e || this.options.match === e;
      },
    }),
    (r.prototype = {
      addHandler: function (e) {
        var t = new o(e);
        this.handlers.push(t), this.matches() && t.on();
      },
      removeHandler: function (e) {
        var n = this.handlers;
        t(n, function (t, i) {
          return t.equals(e) ? (t.destroy(), !n.splice(i, 1)) : void 0;
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        t(this.handlers, function (e) {
          e.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0);
      },
      assess: function () {
        var e = this.matches() ? "on" : "off";
        t(this.handlers, function (t) {
          t[e]();
        });
      },
    }),
    (s.prototype = {
      register: function (e, o, s) {
        var a = this.queries,
          l = s && this.browserIsIncapable;
        return (
          a[e] || (a[e] = new r(e, l)),
          i(o) && (o = { match: o }),
          n(o) || (o = [o]),
          t(o, function (t) {
            i(t) && (t = { match: t }), a[e].addHandler(t);
          }),
          this
        );
      },
      unregister: function (e, t) {
        var n = this.queries[e];
        return (
          n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])),
          this
        );
      },
    }),
    new s()
  );
})
/*!
 * jquery.min.js
 */,
  /*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
  !(function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
      var t = !!e && "length" in e && e.length,
        n = re.type(e);
      return (
        "function" !== n &&
        !re.isWindow(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && t > 0 && t - 1 in e))
      );
    }
    function i(e, t, n) {
      if (re.isFunction(t))
        return re.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        });
      if (t.nodeType)
        return re.grep(e, function (e) {
          return (e === t) !== n;
        });
      if ("string" == typeof t) {
        if (ve.test(t)) return re.filter(t, e, n);
        t = re.filter(t, e);
      }
      return re.grep(e, function (e) {
        return K.call(t, e) > -1 !== n;
      });
    }
    function o(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    function r(e) {
      var t = {};
      return (
        re.each(e.match(xe) || [], function (e, n) {
          t[n] = !0;
        }),
        t
      );
    }
    function s() {
      G.removeEventListener("DOMContentLoaded", s),
        e.removeEventListener("load", s),
        re.ready();
    }
    function a() {
      this.expando = re.expando + a.uid++;
    }
    function l(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((i = "data-" + t.replace(Ae, "-$&").toLowerCase()),
          (n = e.getAttribute(i)),
          "string" == typeof n)
        ) {
          try {
            n =
              "true" === n ||
              ("false" !== n &&
                ("null" === n
                  ? null
                  : +n + "" === n
                  ? +n
                  : $e.test(n)
                  ? re.parseJSON(n)
                  : n));
          } catch (e) {}
          Ee.set(e, t, n);
        } else n = void 0;
      return n;
    }
    function u(e, t, n, i) {
      var o,
        r = 1,
        s = 20,
        a = i
          ? function () {
              return i.cur();
            }
          : function () {
              return re.css(e, t, "");
            },
        l = a(),
        u = (n && n[3]) || (re.cssNumber[t] ? "" : "px"),
        c = (re.cssNumber[t] || ("px" !== u && +l)) && De.exec(re.css(e, t));
      if (c && c[3] !== u) {
        (u = u || c[3]), (n = n || []), (c = +l || 1);
        do (r = r || ".5"), (c /= r), re.style(e, t, c + u);
        while (r !== (r = a() / l) && 1 !== r && --s);
      }
      return (
        n &&
          ((c = +c || +l || 0),
          (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = u), (i.start = c), (i.end = o))),
        o
      );
    }
    function c(e, t) {
      var n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : [];
      return void 0 === t || (t && re.nodeName(e, t)) ? re.merge([e], n) : n;
    }
    function d(e, t) {
      for (var n = 0, i = e.length; i > n; n++)
        Ce.set(e[n], "globalEval", !t || Ce.get(t[n], "globalEval"));
    }
    function p(e, t, n, i, o) {
      for (
        var r,
          s,
          a,
          l,
          u,
          p,
          f = t.createDocumentFragment(),
          h = [],
          v = 0,
          g = e.length;
        g > v;
        v++
      )
        if (((r = e[v]), r || 0 === r))
          if ("object" === re.type(r)) re.merge(h, r.nodeType ? [r] : r);
          else if (_e.test(r)) {
            for (
              s = s || f.appendChild(t.createElement("div")),
                a = (Pe.exec(r) || ["", ""])[1].toLowerCase(),
                l = qe[a] || qe._default,
                s.innerHTML = l[1] + re.htmlPrefilter(r) + l[2],
                p = l[0];
              p--;

            )
              s = s.lastChild;
            re.merge(h, s.childNodes), (s = f.firstChild), (s.textContent = "");
          } else h.push(t.createTextNode(r));
      for (f.textContent = "", v = 0; (r = h[v++]); )
        if (i && re.inArray(r, i) > -1) o && o.push(r);
        else if (
          ((u = re.contains(r.ownerDocument, r)),
          (s = c(f.appendChild(r), "script")),
          u && d(s),
          n)
        )
          for (p = 0; (r = s[p++]); ) Le.test(r.type || "") && n.push(r);
      return f;
    }
    function f() {
      return !0;
    }
    function h() {
      return !1;
    }
    function v() {
      try {
        return G.activeElement;
      } catch (e) {}
    }
    function g(e, t, n, i, o, r) {
      var s, a;
      if ("object" == typeof t) {
        "string" != typeof n && ((i = i || n), (n = void 0));
        for (a in t) g(e, a, n, i, t[a], r);
        return e;
      }
      if (
        (null == i && null == o
          ? ((o = n), (i = n = void 0))
          : null == o &&
            ("string" == typeof n
              ? ((o = i), (i = void 0))
              : ((o = i), (i = n), (n = void 0))),
        o === !1)
      )
        o = h;
      else if (!o) return e;
      return (
        1 === r &&
          ((s = o),
          (o = function (e) {
            return re().off(e), s.apply(this, arguments);
          }),
          (o.guid = s.guid || (s.guid = re.guid++))),
        e.each(function () {
          re.event.add(this, t, o, i, n);
        })
      );
    }
    function m(e, t) {
      return re.nodeName(e, "table") &&
        re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
        ? e.getElementsByTagName("tbody")[0] ||
            e.appendChild(e.ownerDocument.createElement("tbody"))
        : e;
    }
    function y(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function w(e) {
      var t = Be.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function b(e, t) {
      var n, i, o, r, s, a, l, u;
      if (1 === t.nodeType) {
        if (
          Ce.hasData(e) &&
          ((r = Ce.access(e)), (s = Ce.set(t, r)), (u = r.events))
        ) {
          delete s.handle, (s.events = {});
          for (o in u)
            for (n = 0, i = u[o].length; i > n; n++)
              re.event.add(t, o, u[o][n]);
        }
        Ee.hasData(e) &&
          ((a = Ee.access(e)), (l = re.extend({}, a)), Ee.set(t, l));
      }
    }
    function x(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && He.test(e.type)
        ? (t.checked = e.checked)
        : ("input" !== n && "textarea" !== n) ||
          (t.defaultValue = e.defaultValue);
    }
    function k(e, t, n, i) {
      t = J.apply([], t);
      var o,
        r,
        s,
        a,
        l,
        u,
        d = 0,
        f = e.length,
        h = f - 1,
        v = t[0],
        g = re.isFunction(v);
      if (g || (f > 1 && "string" == typeof v && !ie.checkClone && We.test(v)))
        return e.each(function (o) {
          var r = e.eq(o);
          g && (t[0] = v.call(this, o, r.html())), k(r, t, n, i);
        });
      if (
        f &&
        ((o = p(t, e[0].ownerDocument, !1, e, i)),
        (r = o.firstChild),
        1 === o.childNodes.length && (o = r),
        r || i)
      ) {
        for (s = re.map(c(o, "script"), y), a = s.length; f > d; d++)
          (l = o),
            d !== h &&
              ((l = re.clone(l, !0, !0)), a && re.merge(s, c(l, "script"))),
            n.call(e[d], l, d);
        if (a)
          for (
            u = s[s.length - 1].ownerDocument, re.map(s, w), d = 0;
            a > d;
            d++
          )
            (l = s[d]),
              Le.test(l.type || "") &&
                !Ce.access(l, "globalEval") &&
                re.contains(u, l) &&
                (l.src
                  ? re._evalUrl && re._evalUrl(l.src)
                  : re.globalEval(l.textContent.replace(Ue, "")));
      }
      return e;
    }
    function T(e, t, n) {
      for (var i, o = t ? re.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
        n || 1 !== i.nodeType || re.cleanData(c(i)),
          i.parentNode &&
            (n && re.contains(i.ownerDocument, i) && d(c(i, "script")),
            i.parentNode.removeChild(i));
      return e;
    }
    function S(e, t) {
      var n = re(t.createElement(e)).appendTo(t.body),
        i = re.css(n[0], "display");
      return n.detach(), i;
    }
    function C(e) {
      var t = G,
        n = Ye[e];
      return (
        n ||
          ((n = S(e, t)),
          ("none" !== n && n) ||
            ((Xe = (
              Xe || re("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement)),
            (t = Xe[0].contentDocument),
            t.write(),
            t.close(),
            (n = S(e, t)),
            Xe.detach()),
          (Ye[e] = n)),
        n
      );
    }
    function E(e, t, n) {
      var i,
        o,
        r,
        s,
        a = e.style;
      return (
        (n = n || Qe(e)),
        (s = n ? n.getPropertyValue(t) || n[t] : void 0),
        ("" !== s && void 0 !== s) ||
          re.contains(e.ownerDocument, e) ||
          (s = re.style(e, t)),
        n &&
          !ie.pixelMarginRight() &&
          Ge.test(s) &&
          Ve.test(t) &&
          ((i = a.width),
          (o = a.minWidth),
          (r = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = r)),
        void 0 !== s ? s + "" : s
      );
    }
    function $(e, t) {
      return {
        get: function () {
          return e()
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
        },
      };
    }
    function A(e) {
      if (e in it) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--; )
        if (((e = nt[n] + t), e in it)) return e;
    }
    function j(e, t, n) {
      var i = De.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function D(e, t, n, i, o) {
      for (
        var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
          s = 0;
        4 > r;
        r += 2
      )
        "margin" === n && (s += re.css(e, n + Ne[r], !0, o)),
          i
            ? ("content" === n && (s -= re.css(e, "padding" + Ne[r], !0, o)),
              "margin" !== n &&
                (s -= re.css(e, "border" + Ne[r] + "Width", !0, o)))
            : ((s += re.css(e, "padding" + Ne[r], !0, o)),
              "padding" !== n &&
                (s += re.css(e, "border" + Ne[r] + "Width", !0, o)));
      return s;
    }
    function N(t, n, i) {
      var o = !0,
        r = "width" === n ? t.offsetWidth : t.offsetHeight,
        s = Qe(t),
        a = "border-box" === re.css(t, "boxSizing", !1, s);
      if (
        (G.msFullscreenElement &&
          e.top !== e &&
          t.getClientRects().length &&
          (r = Math.round(100 * t.getBoundingClientRect()[n])),
        0 >= r || null == r)
      ) {
        if (
          ((r = E(t, n, s)),
          (0 > r || null == r) && (r = t.style[n]),
          Ge.test(r))
        )
          return r;
        (o = a && (ie.boxSizingReliable() || r === t.style[n])),
          (r = parseFloat(r) || 0);
      }
      return r + D(t, n, i || (a ? "border" : "content"), o, s) + "px";
    }
    function O(e, t) {
      for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++)
        (i = e[s]),
          i.style &&
            ((r[s] = Ce.get(i, "olddisplay")),
            (n = i.style.display),
            t
              ? (r[s] || "none" !== n || (i.style.display = ""),
                "" === i.style.display &&
                  Oe(i) &&
                  (r[s] = Ce.access(i, "olddisplay", C(i.nodeName))))
              : ((o = Oe(i)),
                ("none" === n && o) ||
                  Ce.set(i, "olddisplay", o ? n : re.css(i, "display"))));
      for (s = 0; a > s; s++)
        (i = e[s]),
          i.style &&
            ((t && "none" !== i.style.display && "" !== i.style.display) ||
              (i.style.display = t ? r[s] || "" : "none"));
      return e;
    }
    function H(e, t, n, i, o) {
      return new H.prototype.init(e, t, n, i, o);
    }
    function P() {
      return (
        e.setTimeout(function () {
          ot = void 0;
        }),
        (ot = re.now())
      );
    }
    function L(e, t) {
      var n,
        i = 0,
        o = { height: e };
      for (t = t ? 1 : 0; 4 > i; i += 2 - t)
        (n = Ne[i]), (o["margin" + n] = o["padding" + n] = e);
      return t && (o.opacity = o.width = e), o;
    }
    function q(e, t, n) {
      for (
        var i,
          o = (I.tweeners[t] || []).concat(I.tweeners["*"]),
          r = 0,
          s = o.length;
        s > r;
        r++
      )
        if ((i = o[r].call(n, t, e))) return i;
    }
    function _(e, t, n) {
      var i,
        o,
        r,
        s,
        a,
        l,
        u,
        c,
        d = this,
        p = {},
        f = e.style,
        h = e.nodeType && Oe(e),
        v = Ce.get(e, "fxshow");
      n.queue ||
        ((a = re._queueHooks(e, "fx")),
        null == a.unqueued &&
          ((a.unqueued = 0),
          (l = a.empty.fire),
          (a.empty.fire = function () {
            a.unqueued || l();
          })),
        a.unqueued++,
        d.always(function () {
          d.always(function () {
            a.unqueued--, re.queue(e, "fx").length || a.empty.fire();
          });
        })),
        1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
          (u = re.css(e, "display")),
          (c = "none" === u ? Ce.get(e, "olddisplay") || C(e.nodeName) : u),
          "inline" === c &&
            "none" === re.css(e, "float") &&
            (f.display = "inline-block")),
        n.overflow &&
          ((f.overflow = "hidden"),
          d.always(function () {
            (f.overflow = n.overflow[0]),
              (f.overflowX = n.overflow[1]),
              (f.overflowY = n.overflow[2]);
          }));
      for (i in t)
        if (((o = t[i]), st.exec(o))) {
          if (
            (delete t[i],
            (r = r || "toggle" === o),
            o === (h ? "hide" : "show"))
          ) {
            if ("show" !== o || !v || void 0 === v[i]) continue;
            h = !0;
          }
          p[i] = (v && v[i]) || re.style(e, i);
        } else u = void 0;
      if (re.isEmptyObject(p))
        "inline" === ("none" === u ? C(e.nodeName) : u) && (f.display = u);
      else {
        v ? "hidden" in v && (h = v.hidden) : (v = Ce.access(e, "fxshow", {})),
          r && (v.hidden = !h),
          h
            ? re(e).show()
            : d.done(function () {
                re(e).hide();
              }),
          d.done(function () {
            var t;
            Ce.remove(e, "fxshow");
            for (t in p) re.style(e, t, p[t]);
          });
        for (i in p)
          (s = q(h ? v[i] : 0, i, d)),
            i in v ||
              ((v[i] = s.start),
              h &&
                ((s.end = s.start),
                (s.start = "width" === i || "height" === i ? 1 : 0)));
      }
    }
    function z(e, t) {
      var n, i, o, r, s;
      for (n in e)
        if (
          ((i = re.camelCase(n)),
          (o = t[i]),
          (r = e[n]),
          re.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
          n !== i && ((e[i] = r), delete e[n]),
          (s = re.cssHooks[i]),
          s && "expand" in s)
        ) {
          (r = s.expand(r)), delete e[i];
          for (n in r) n in e || ((e[n] = r[n]), (t[n] = o));
        } else t[i] = o;
    }
    function I(e, t, n) {
      var i,
        o,
        r = 0,
        s = I.prefilters.length,
        a = re.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (o) return !1;
          for (
            var t = ot || P(),
              n = Math.max(0, u.startTime + u.duration - t),
              i = n / u.duration || 0,
              r = 1 - i,
              s = 0,
              l = u.tweens.length;
            l > s;
            s++
          )
            u.tweens[s].run(r);
          return (
            a.notifyWith(e, [u, r, n]),
            1 > r && l ? n : (a.resolveWith(e, [u]), !1)
          );
        },
        u = a.promise({
          elem: e,
          props: re.extend({}, t),
          opts: re.extend(
            !0,
            { specialEasing: {}, easing: re.easing._default },
            n
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: ot || P(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var i = re.Tween(
              e,
              u.opts,
              t,
              n,
              u.opts.specialEasing[t] || u.opts.easing
            );
            return u.tweens.push(i), i;
          },
          stop: function (t) {
            var n = 0,
              i = t ? u.tweens.length : 0;
            if (o) return this;
            for (o = !0; i > n; n++) u.tweens[n].run(1);
            return (
              t
                ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
                : a.rejectWith(e, [u, t]),
              this
            );
          },
        }),
        c = u.props;
      for (z(c, u.opts.specialEasing); s > r; r++)
        if ((i = I.prefilters[r].call(u, e, c, u.opts)))
          return (
            re.isFunction(i.stop) &&
              (re._queueHooks(u.elem, u.opts.queue).stop = re.proxy(i.stop, i)),
            i
          );
      return (
        re.map(c, q, u),
        re.isFunction(u.opts.start) && u.opts.start.call(e, u),
        re.fx.timer(re.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
        u
          .progress(u.opts.progress)
          .done(u.opts.done, u.opts.complete)
          .fail(u.opts.fail)
          .always(u.opts.always)
      );
    }
    function F(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function M(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var i,
          o = 0,
          r = t.toLowerCase().match(xe) || [];
        if (re.isFunction(n))
          for (; (i = r[o++]); )
            "+" === i[0]
              ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
              : (e[i] = e[i] || []).push(n);
      };
    }
    function R(e, t, n, i) {
      function o(a) {
        var l;
        return (
          (r[a] = !0),
          re.each(e[a] || [], function (e, a) {
            var u = a(t, n, i);
            return "string" != typeof u || s || r[u]
              ? s
                ? !(l = u)
                : void 0
              : (t.dataTypes.unshift(u), o(u), !1);
          }),
          l
        );
      }
      var r = {},
        s = e === Et;
      return o(t.dataTypes[0]) || (!r["*"] && o("*"));
    }
    function W(e, t) {
      var n,
        i,
        o = re.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
      return i && re.extend(!0, e, i), e;
    }
    function B(e, t, n) {
      for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
        l.shift(),
          void 0 === i &&
            (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i)
        for (o in a)
          if (a[o] && a[o].test(i)) {
            l.unshift(o);
            break;
          }
      if (l[0] in n) r = l[0];
      else {
        for (o in n) {
          if (!l[0] || e.converters[o + " " + l[0]]) {
            r = o;
            break;
          }
          s || (s = o);
        }
        r = r || s;
      }
      return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0;
    }
    function U(e, t, n, i) {
      var o,
        r,
        s,
        a,
        l,
        u = {},
        c = e.dataTypes.slice();
      if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
      for (r = c.shift(); r; )
        if (
          (e.responseFields[r] && (n[e.responseFields[r]] = t),
          !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (l = r),
          (r = c.shift()))
        )
          if ("*" === r) r = l;
          else if ("*" !== l && l !== r) {
            if (((s = u[l + " " + r] || u["* " + r]), !s))
              for (o in u)
                if (
                  ((a = o.split(" ")),
                  a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]]))
                ) {
                  s === !0
                    ? (s = u[o])
                    : u[o] !== !0 && ((r = a[0]), c.unshift(a[1]));
                  break;
                }
            if (s !== !0)
              if (s && e.throws) t = s(t);
              else
                try {
                  t = s(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + l + " to " + r,
                  };
                }
          }
      return { state: "success", data: t };
    }
    function X(e, t, n, i) {
      var o;
      if (re.isArray(t))
        re.each(t, function (t, o) {
          n || Dt.test(e)
            ? i(e, o)
            : X(
                e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
                o,
                n,
                i
              );
        });
      else if (n || "object" !== re.type(t)) i(e, t);
      else for (o in t) X(e + "[" + o + "]", t[o], n, i);
    }
    function Y(e) {
      return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var V = [],
      G = e.document,
      Q = V.slice,
      J = V.concat,
      Z = V.push,
      K = V.indexOf,
      ee = {},
      te = ee.toString,
      ne = ee.hasOwnProperty,
      ie = {},
      oe = "2.2.3",
      re = function (e, t) {
        return new re.fn.init(e, t);
      },
      se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ae = /^-ms-/,
      le = /-([\da-z])/gi,
      ue = function (e, t) {
        return t.toUpperCase();
      };
    (re.fn = re.prototype =
      {
        jquery: oe,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function () {
          return Q.call(this);
        },
        get: function (e) {
          return null != e
            ? 0 > e
              ? this[e + this.length]
              : this[e]
            : Q.call(this);
        },
        pushStack: function (e) {
          var t = re.merge(this.constructor(), e);
          return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function (e) {
          return re.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            re.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(Q.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (0 > e ? t : 0);
          return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: Z,
        sort: V.sort,
        splice: V.splice,
      }),
      (re.extend = re.fn.extend =
        function () {
          var e,
            t,
            n,
            i,
            o,
            r,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
          for (
            "boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || re.isFunction(s) || (s = {}),
              a === l && ((s = this), a--);
            l > a;
            a++
          )
            if (null != (e = arguments[a]))
              for (t in e)
                (n = s[t]),
                  (i = e[t]),
                  s !== i &&
                    (u && i && (re.isPlainObject(i) || (o = re.isArray(i)))
                      ? (o
                          ? ((o = !1), (r = n && re.isArray(n) ? n : []))
                          : (r = n && re.isPlainObject(n) ? n : {}),
                        (s[t] = re.extend(u, r, i)))
                      : void 0 !== i && (s[t] = i));
          return s;
        }),
      re.extend({
        expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return "function" === re.type(e);
        },
        isArray: Array.isArray,
        isWindow: function (e) {
          return null != e && e === e.window;
        },
        isNumeric: function (e) {
          var t = e && e.toString();
          return !re.isArray(e) && t - parseFloat(t) + 1 >= 0;
        },
        isPlainObject: function (e) {
          var t;
          if ("object" !== re.type(e) || e.nodeType || re.isWindow(e))
            return !1;
          if (
            e.constructor &&
            !ne.call(e, "constructor") &&
            !ne.call(e.constructor.prototype || {}, "isPrototypeOf")
          )
            return !1;
          for (t in e);
          return void 0 === t || ne.call(e, t);
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        type: function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? ee[te.call(e)] || "object"
            : typeof e;
        },
        globalEval: function (e) {
          var t,
            n = eval;
          (e = re.trim(e)),
            e &&
              (1 === e.indexOf("use strict")
                ? ((t = G.createElement("script")),
                  (t.text = e),
                  G.head.appendChild(t).parentNode.removeChild(t))
                : n(e));
        },
        camelCase: function (e) {
          return e.replace(ae, "ms-").replace(le, ue);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t) {
          var i,
            o = 0;
          if (n(e))
            for (i = e.length; i > o && t.call(e[o], o, e[o]) !== !1; o++);
          else for (o in e) if (t.call(e[o], o, e[o]) === !1) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(se, "");
        },
        makeArray: function (e, t) {
          var i = t || [];
          return (
            null != e &&
              (n(Object(e))
                ? re.merge(i, "string" == typeof e ? [e] : e)
                : Z.call(i, e)),
            i
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : K.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, i = 0, o = e.length; n > i; i++)
            e[o++] = t[i];
          return (e.length = o), e;
        },
        grep: function (e, t, n) {
          for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++)
            (i = !t(e[r], r)), i !== a && o.push(e[r]);
          return o;
        },
        map: function (e, t, i) {
          var o,
            r,
            s = 0,
            a = [];
          if (n(e))
            for (o = e.length; o > s; s++)
              (r = t(e[s], s, i)), null != r && a.push(r);
          else for (s in e) (r = t(e[s], s, i)), null != r && a.push(r);
          return J.apply([], a);
        },
        guid: 1,
        proxy: function (e, t) {
          var n, i, o;
          return (
            "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
            re.isFunction(e)
              ? ((i = Q.call(arguments, 2)),
                (o = function () {
                  return e.apply(t || this, i.concat(Q.call(arguments)));
                }),
                (o.guid = e.guid = e.guid || re.guid++),
                o)
              : void 0
          );
        },
        now: Date.now,
        support: ie,
      }),
      "function" == typeof Symbol &&
        (re.fn[Symbol.iterator] = V[Symbol.iterator]),
      re.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          ee["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var ce = (function (e) {
      function t(e, t, n, i) {
        var o,
          r,
          s,
          a,
          l,
          u,
          d,
          f,
          h = t && t.ownerDocument,
          v = t ? t.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof e || !e || (1 !== v && 9 !== v && 11 !== v))
        )
          return n;
        if (
          !i &&
          ((t ? t.ownerDocument || t : F) !== O && N(t), (t = t || O), P)
        ) {
          if (11 !== v && (u = me.exec(e)))
            if ((o = u[1])) {
              if (9 === v) {
                if (!(s = t.getElementById(o))) return n;
                if (s.id === o) return n.push(s), n;
              } else if (
                h &&
                (s = h.getElementById(o)) &&
                z(t, s) &&
                s.id === o
              )
                return n.push(s), n;
            } else {
              if (u[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
              if (
                (o = u[3]) &&
                x.getElementsByClassName &&
                t.getElementsByClassName
              )
                return Z.apply(n, t.getElementsByClassName(o)), n;
            }
          if (x.qsa && !U[e + " "] && (!L || !L.test(e))) {
            if (1 !== v) (h = t), (f = e);
            else if ("object" !== t.nodeName.toLowerCase()) {
              for (
                (a = t.getAttribute("id"))
                  ? (a = a.replace(we, "\\$&"))
                  : t.setAttribute("id", (a = I)),
                  d = C(e),
                  r = d.length,
                  l = pe.test(a) ? "#" + a : "[id='" + a + "']";
                r--;

              )
                d[r] = l + " " + p(d[r]);
              (f = d.join(",")), (h = (ye.test(e) && c(t.parentNode)) || t);
            }
            if (f)
              try {
                return Z.apply(n, h.querySelectorAll(f)), n;
              } catch (e) {
              } finally {
                a === I && t.removeAttribute("id");
              }
          }
        }
        return $(e.replace(ae, "$1"), t, n, i);
      }
      function n() {
        function e(n, i) {
          return (
            t.push(n + " ") > k.cacheLength && delete e[t.shift()],
            (e[n + " "] = i)
          );
        }
        var t = [];
        return e;
      }
      function i(e) {
        return (e[I] = !0), e;
      }
      function o(e) {
        var t = O.createElement("div");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function r(e, t) {
        for (var n = e.split("|"), i = n.length; i--; ) k.attrHandle[n[i]] = t;
      }
      function s(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function a(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return "input" === n && t.type === e;
        };
      }
      function l(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function u(e) {
        return i(function (t) {
          return (
            (t = +t),
            i(function (n, i) {
              for (var o, r = e([], n.length, t), s = r.length; s--; )
                n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
            })
          );
        });
      }
      function c(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      function d() {}
      function p(e) {
        for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
        return i;
      }
      function f(e, t, n) {
        var i = t.dir,
          o = n && "parentNode" === i,
          r = R++;
        return t.first
          ? function (t, n, r) {
              for (; (t = t[i]); ) if (1 === t.nodeType || o) return e(t, n, r);
            }
          : function (t, n, s) {
              var a,
                l,
                u,
                c = [M, r];
              if (s) {
                for (; (t = t[i]); )
                  if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
              } else
                for (; (t = t[i]); )
                  if (1 === t.nodeType || o) {
                    if (
                      ((u = t[I] || (t[I] = {})),
                      (l = u[t.uniqueID] || (u[t.uniqueID] = {})),
                      (a = l[i]) && a[0] === M && a[1] === r)
                    )
                      return (c[2] = a[2]);
                    if (((l[i] = c), (c[2] = e(t, n, s)))) return !0;
                  }
            };
      }
      function h(e) {
        return e.length > 1
          ? function (t, n, i) {
              for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
              return !0;
            }
          : e[0];
      }
      function v(e, n, i) {
        for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
        return i;
      }
      function g(e, t, n, i, o) {
        for (var r, s = [], a = 0, l = e.length, u = null != t; l > a; a++)
          (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), u && t.push(a)));
        return s;
      }
      function m(e, t, n, o, r, s) {
        return (
          o && !o[I] && (o = m(o)),
          r && !r[I] && (r = m(r, s)),
          i(function (i, s, a, l) {
            var u,
              c,
              d,
              p = [],
              f = [],
              h = s.length,
              m = i || v(t || "*", a.nodeType ? [a] : a, []),
              y = !e || (!i && t) ? m : g(m, p, e, a, l),
              w = n ? (r || (i ? e : h || o) ? [] : s) : y;
            if ((n && n(y, w, a, l), o))
              for (u = g(w, f), o(u, [], a, l), c = u.length; c--; )
                (d = u[c]) && (w[f[c]] = !(y[f[c]] = d));
            if (i) {
              if (r || e) {
                if (r) {
                  for (u = [], c = w.length; c--; )
                    (d = w[c]) && u.push((y[c] = d));
                  r(null, (w = []), u, l);
                }
                for (c = w.length; c--; )
                  (d = w[c]) &&
                    (u = r ? ee(i, d) : p[c]) > -1 &&
                    (i[u] = !(s[u] = d));
              }
            } else (w = g(w === s ? w.splice(h, w.length) : w)), r ? r(null, s, w, l) : Z.apply(s, w);
          })
        );
      }
      function y(e) {
        for (
          var t,
            n,
            i,
            o = e.length,
            r = k.relative[e[0].type],
            s = r || k.relative[" "],
            a = r ? 1 : 0,
            l = f(
              function (e) {
                return e === t;
              },
              s,
              !0
            ),
            u = f(
              function (e) {
                return ee(t, e) > -1;
              },
              s,
              !0
            ),
            c = [
              function (e, n, i) {
                var o =
                  (!r && (i || n !== A)) ||
                  ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return (t = null), o;
              },
            ];
          o > a;
          a++
        )
          if ((n = k.relative[e[a].type])) c = [f(h(c), n)];
          else {
            if (((n = k.filter[e[a].type].apply(null, e[a].matches)), n[I])) {
              for (i = ++a; o > i && !k.relative[e[i].type]; i++);
              return m(
                a > 1 && h(c),
                a > 1 &&
                  p(
                    e
                      .slice(0, a - 1)
                      .concat({ value: " " === e[a - 2].type ? "*" : "" })
                  ).replace(ae, "$1"),
                n,
                i > a && y(e.slice(a, i)),
                o > i && y((e = e.slice(i))),
                o > i && p(e)
              );
            }
            c.push(n);
          }
        return h(c);
      }
      function w(e, n) {
        var o = n.length > 0,
          r = e.length > 0,
          s = function (i, s, a, l, u) {
            var c,
              d,
              p,
              f = 0,
              h = "0",
              v = i && [],
              m = [],
              y = A,
              w = i || (r && k.find.TAG("*", u)),
              b = (M += null == y ? 1 : Math.random() || 0.1),
              x = w.length;
            for (
              u && (A = s === O || s || u);
              h !== x && null != (c = w[h]);
              h++
            ) {
              if (r && c) {
                for (
                  d = 0, s || c.ownerDocument === O || (N(c), (a = !P));
                  (p = e[d++]);

                )
                  if (p(c, s || O, a)) {
                    l.push(c);
                    break;
                  }
                u && (M = b);
              }
              o && ((c = !p && c) && f--, i && v.push(c));
            }
            if (((f += h), o && h !== f)) {
              for (d = 0; (p = n[d++]); ) p(v, m, s, a);
              if (i) {
                if (f > 0) for (; h--; ) v[h] || m[h] || (m[h] = Q.call(l));
                m = g(m);
              }
              Z.apply(l, m),
                u && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l);
            }
            return u && ((M = b), (A = y)), v;
          };
        return o ? i(s) : s;
      }
      var b,
        x,
        k,
        T,
        S,
        C,
        E,
        $,
        A,
        j,
        D,
        N,
        O,
        H,
        P,
        L,
        q,
        _,
        z,
        I = "sizzle" + 1 * new Date(),
        F = e.document,
        M = 0,
        R = 0,
        W = n(),
        B = n(),
        U = n(),
        X = function (e, t) {
          return e === t && (D = !0), 0;
        },
        Y = 1 << 31,
        V = {}.hasOwnProperty,
        G = [],
        Q = G.pop,
        J = G.push,
        Z = G.push,
        K = G.slice,
        ee = function (e, t) {
          for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
          return -1;
        },
        te =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        oe =
          "\\[" +
          ne +
          "*(" +
          ie +
          ")(?:" +
          ne +
          "*([*^$|!~]?=)" +
          ne +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          ie +
          "))|)" +
          ne +
          "*\\]",
        re =
          ":(" +
          ie +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          oe +
          ")*)|.*)\\)|)",
        se = new RegExp(ne + "+", "g"),
        ae = new RegExp(
          "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
          "g"
        ),
        le = new RegExp("^" + ne + "*," + ne + "*"),
        ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        de = new RegExp(re),
        pe = new RegExp("^" + ie + "$"),
        fe = {
          ID: new RegExp("^#(" + ie + ")"),
          CLASS: new RegExp("^\\.(" + ie + ")"),
          TAG: new RegExp("^(" + ie + "|[*])"),
          ATTR: new RegExp("^" + oe),
          PSEUDO: new RegExp("^" + re),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ne +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ne +
              "*(?:([+-]|)" +
              ne +
              "*(\\d+)|))" +
              ne +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + te + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              ne +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ne +
              "*((?:-\\d)?\\d*)" +
              ne +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        he = /^(?:input|select|textarea|button)$/i,
        ve = /^h\d$/i,
        ge = /^[^{]+\{\s*\[native \w/,
        me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ye = /[+~]/,
        we = /'|\\/g,
        be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        xe = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i !== i || n
            ? t
            : 0 > i
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        },
        ke = function () {
          N();
        };
      try {
        Z.apply((G = K.call(F.childNodes)), F.childNodes),
          G[F.childNodes.length].nodeType;
      } catch (e) {
        Z = {
          apply: G.length
            ? function (e, t) {
                J.apply(e, K.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              },
        };
      }
      (x = t.support = {}),
        (S = t.isXML =
          function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
          }),
        (N = t.setDocument =
          function (e) {
            var t,
              n,
              i = e ? e.ownerDocument || e : F;
            return i !== O && 9 === i.nodeType && i.documentElement
              ? ((O = i),
                (H = O.documentElement),
                (P = !S(O)),
                (n = O.defaultView) &&
                  n.top !== n &&
                  (n.addEventListener
                    ? n.addEventListener("unload", ke, !1)
                    : n.attachEvent && n.attachEvent("onunload", ke)),
                (x.attributes = o(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (x.getElementsByTagName = o(function (e) {
                  return (
                    e.appendChild(O.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (x.getElementsByClassName = ge.test(O.getElementsByClassName)),
                (x.getById = o(function (e) {
                  return (
                    (H.appendChild(e).id = I),
                    !O.getElementsByName || !O.getElementsByName(I).length
                  );
                })),
                x.getById
                  ? ((k.find.ID = function (e, t) {
                      if ("undefined" != typeof t.getElementById && P) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }),
                    (k.filter.ID = function (e) {
                      var t = e.replace(be, xe);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }))
                  : (delete k.find.ID,
                    (k.filter.ID = function (e) {
                      var t = e.replace(be, xe);
                      return function (e) {
                        var n =
                          "undefined" != typeof e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    })),
                (k.find.TAG = x.getElementsByTagName
                  ? function (e, t) {
                      return "undefined" != typeof t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : x.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return r;
                    }),
                (k.find.CLASS =
                  x.getElementsByClassName &&
                  function (e, t) {
                    return "undefined" != typeof t.getElementsByClassName && P
                      ? t.getElementsByClassName(e)
                      : void 0;
                  }),
                (q = []),
                (L = []),
                (x.qsa = ge.test(O.querySelectorAll)) &&
                  (o(function (e) {
                    (H.appendChild(e).innerHTML =
                      "<a id='" +
                      I +
                      "'></a><select id='" +
                      I +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        L.push("[*^$]=" + ne + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        L.push("\\[" + ne + "*(?:value|" + te + ")"),
                      e.querySelectorAll("[id~=" + I + "-]").length ||
                        L.push("~="),
                      e.querySelectorAll(":checked").length ||
                        L.push(":checked"),
                      e.querySelectorAll("a#" + I + "+*").length ||
                        L.push(".#.+[+~]");
                  }),
                  o(function (e) {
                    var t = O.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        L.push("name" + ne + "*[*^$|!~]?="),
                      e.querySelectorAll(":enabled").length ||
                        L.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      L.push(",.*:");
                  })),
                (x.matchesSelector = ge.test(
                  (_ =
                    H.matches ||
                    H.webkitMatchesSelector ||
                    H.mozMatchesSelector ||
                    H.oMatchesSelector ||
                    H.msMatchesSelector)
                )) &&
                  o(function (e) {
                    (x.disconnectedMatch = _.call(e, "div")),
                      _.call(e, "[s!='']:x"),
                      q.push("!=", re);
                  }),
                (L = L.length && new RegExp(L.join("|"))),
                (q = q.length && new RegExp(q.join("|"))),
                (t = ge.test(H.compareDocumentPosition)),
                (z =
                  t || ge.test(H.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          i = t && t.parentNode;
                        return (
                          e === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (X = t
                  ? function (e, t) {
                      if (e === t) return (D = !0), 0;
                      var n =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return n
                        ? n
                        : ((n =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1),
                          1 & n ||
                          (!x.sortDetached &&
                            t.compareDocumentPosition(e) === n)
                            ? e === O || (e.ownerDocument === F && z(F, e))
                              ? -1
                              : t === O || (t.ownerDocument === F && z(F, t))
                              ? 1
                              : j
                              ? ee(j, e) - ee(j, t)
                              : 0
                            : 4 & n
                            ? -1
                            : 1);
                    }
                  : function (e, t) {
                      if (e === t) return (D = !0), 0;
                      var n,
                        i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        a = [e],
                        l = [t];
                      if (!o || !r)
                        return e === O
                          ? -1
                          : t === O
                          ? 1
                          : o
                          ? -1
                          : r
                          ? 1
                          : j
                          ? ee(j, e) - ee(j, t)
                          : 0;
                      if (o === r) return s(e, t);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (n = t; (n = n.parentNode); ) l.unshift(n);
                      for (; a[i] === l[i]; ) i++;
                      return i
                        ? s(a[i], l[i])
                        : a[i] === F
                        ? -1
                        : l[i] === F
                        ? 1
                        : 0;
                    }),
                O)
              : O;
          }),
        (t.matches = function (e, n) {
          return t(e, null, null, n);
        }),
        (t.matchesSelector = function (e, n) {
          if (
            ((e.ownerDocument || e) !== O && N(e),
            (n = n.replace(ce, "='$1']")),
            x.matchesSelector &&
              P &&
              !U[n + " "] &&
              (!q || !q.test(n)) &&
              (!L || !L.test(n)))
          )
            try {
              var i = _.call(e, n);
              if (
                i ||
                x.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return i;
            } catch (e) {}
          return t(n, O, null, [e]).length > 0;
        }),
        (t.contains = function (e, t) {
          return (e.ownerDocument || e) !== O && N(e), z(e, t);
        }),
        (t.attr = function (e, t) {
          (e.ownerDocument || e) !== O && N(e);
          var n = k.attrHandle[t.toLowerCase()],
            i =
              n && V.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
          return void 0 !== i
            ? i
            : x.attributes || !P
            ? e.getAttribute(t)
            : (i = e.getAttributeNode(t)) && i.specified
            ? i.value
            : null;
        }),
        (t.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (t.uniqueSort = function (e) {
          var t,
            n = [],
            i = 0,
            o = 0;
          if (
            ((D = !x.detectDuplicates),
            (j = !x.sortStable && e.slice(0)),
            e.sort(X),
            D)
          ) {
            for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
            for (; i--; ) e.splice(n[i], 1);
          }
          return (j = null), e;
        }),
        (T = t.getText =
          function (e) {
            var t,
              n = "",
              i = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += T(t);
            return n;
          }),
        (k = t.selectors =
          {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(be, xe)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || t.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && t.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return fe.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        de.test(n) &&
                        (t = C(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(be, xe).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = W[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                    W(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          ("undefined" != typeof e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, n, i) {
                return function (o) {
                  var r = t.attr(o, e);
                  return null == r
                    ? "!=" === n
                    : !n ||
                        ((r += ""),
                        "=" === n
                          ? r === i
                          : "!=" === n
                          ? r !== i
                          : "^=" === n
                          ? i && 0 === r.indexOf(i)
                          : "*=" === n
                          ? i && r.indexOf(i) > -1
                          : "$=" === n
                          ? i && r.slice(-i.length) === i
                          : "~=" === n
                          ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1
                          : "|=" === n &&
                            (r === i || r.slice(0, i.length + 1) === i + "-"));
                };
              },
              CHILD: function (e, t, n, i, o) {
                var r = "nth" !== e.slice(0, 3),
                  s = "last" !== e.slice(-4),
                  a = "of-type" === t;
                return 1 === i && 0 === o
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, l) {
                      var u,
                        c,
                        d,
                        p,
                        f,
                        h,
                        v = r !== s ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        m = a && t.nodeName.toLowerCase(),
                        y = !l && !a,
                        w = !1;
                      if (g) {
                        if (r) {
                          for (; v; ) {
                            for (p = t; (p = p[v]); )
                              if (
                                a
                                  ? p.nodeName.toLowerCase() === m
                                  : 1 === p.nodeType
                              )
                                return !1;
                            h = v = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [s ? g.firstChild : g.lastChild]), s && y)) {
                          for (
                            p = g,
                              d = p[I] || (p[I] = {}),
                              c = d[p.uniqueID] || (d[p.uniqueID] = {}),
                              u = c[e] || [],
                              f = u[0] === M && u[1],
                              w = f && u[2],
                              p = f && g.childNodes[f];
                            (p = (++f && p && p[v]) || (w = f = 0) || h.pop());

                          )
                            if (1 === p.nodeType && ++w && p === t) {
                              c[e] = [M, f, w];
                              break;
                            }
                        } else if (
                          (y &&
                            ((p = t),
                            (d = p[I] || (p[I] = {})),
                            (c = d[p.uniqueID] || (d[p.uniqueID] = {})),
                            (u = c[e] || []),
                            (f = u[0] === M && u[1]),
                            (w = f)),
                          w === !1)
                        )
                          for (
                            ;
                            (p =
                              (++f && p && p[v]) || (w = f = 0) || h.pop()) &&
                            ((a
                              ? p.nodeName.toLowerCase() !== m
                              : 1 !== p.nodeType) ||
                              !++w ||
                              (y &&
                                ((d = p[I] || (p[I] = {})),
                                (c = d[p.uniqueID] || (d[p.uniqueID] = {})),
                                (c[e] = [M, w])),
                              p !== t));

                          );
                        return (w -= o), w === i || (w % i === 0 && w / i >= 0);
                      }
                    };
              },
              PSEUDO: function (e, n) {
                var o,
                  r =
                    k.pseudos[e] ||
                    k.setFilters[e.toLowerCase()] ||
                    t.error("unsupported pseudo: " + e);
                return r[I]
                  ? r(n)
                  : r.length > 1
                  ? ((o = [e, e, "", n]),
                    k.setFilters.hasOwnProperty(e.toLowerCase())
                      ? i(function (e, t) {
                          for (var i, o = r(e, n), s = o.length; s--; )
                            (i = ee(e, o[s])), (e[i] = !(t[i] = o[s]));
                        })
                      : function (e) {
                          return r(e, 0, o);
                        })
                  : r;
              },
            },
            pseudos: {
              not: i(function (e) {
                var t = [],
                  n = [],
                  o = E(e.replace(ae, "$1"));
                return o[I]
                  ? i(function (e, t, n, i) {
                      for (var r, s = o(e, null, i, []), a = e.length; a--; )
                        (r = s[a]) && (e[a] = !(t[a] = r));
                    })
                  : function (e, i, r) {
                      return (
                        (t[0] = e), o(t, null, r, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: i(function (e) {
                return function (n) {
                  return t(e, n).length > 0;
                };
              }),
              contains: i(function (e) {
                return (
                  (e = e.replace(be, xe)),
                  function (t) {
                    return (
                      (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    );
                  }
                );
              }),
              lang: i(function (e) {
                return (
                  pe.test(e || "") || t.error("unsupported lang: " + e),
                  (e = e.replace(be, xe).toLowerCase()),
                  function (t) {
                    var n;
                    do
                      if (
                        (n = P
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()),
                          n === e || 0 === n.indexOf(e + "-")
                        );
                    while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === H;
              },
              focus: function (e) {
                return (
                  e === O.activeElement &&
                  (!O.hasFocus || O.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: function (e) {
                return e.disabled === !1;
              },
              disabled: function (e) {
                return e.disabled === !0;
              },
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !k.pseudos.empty(e);
              },
              header: function (e) {
                return ve.test(e.nodeName);
              },
              input: function (e) {
                return he.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: u(function () {
                return [0];
              }),
              last: u(function (e, t) {
                return [t - 1];
              }),
              eq: u(function (e, t, n) {
                return [0 > n ? n + t : n];
              }),
              even: u(function (e, t) {
                for (var n = 0; t > n; n += 2) e.push(n);
                return e;
              }),
              odd: u(function (e, t) {
                for (var n = 1; t > n; n += 2) e.push(n);
                return e;
              }),
              lt: u(function (e, t, n) {
                for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
                return e;
              }),
              gt: u(function (e, t, n) {
                for (var i = 0 > n ? n + t : n; ++i < t; ) e.push(i);
                return e;
              }),
            },
          }),
        (k.pseudos.nth = k.pseudos.eq);
      for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        k.pseudos[b] = a(b);
      for (b in { submit: !0, reset: !0 }) k.pseudos[b] = l(b);
      return (
        (d.prototype = k.filters = k.pseudos),
        (k.setFilters = new d()),
        (C = t.tokenize =
          function (e, n) {
            var i,
              o,
              r,
              s,
              a,
              l,
              u,
              c = B[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], u = k.preFilter; a; ) {
              (i && !(o = le.exec(a))) ||
                (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
                (i = !1),
                (o = ue.exec(a)) &&
                  ((i = o.shift()),
                  r.push({ value: i, type: o[0].replace(ae, " ") }),
                  (a = a.slice(i.length)));
              for (s in k.filter)
                !(o = fe[s].exec(a)) ||
                  (u[s] && !(o = u[s](o))) ||
                  ((i = o.shift()),
                  r.push({ value: i, type: s, matches: o }),
                  (a = a.slice(i.length)));
              if (!i) break;
            }
            return n ? a.length : a ? t.error(e) : B(e, l).slice(0);
          }),
        (E = t.compile =
          function (e, t) {
            var n,
              i = [],
              o = [],
              r = U[e + " "];
            if (!r) {
              for (t || (t = C(e)), n = t.length; n--; )
                (r = y(t[n])), r[I] ? i.push(r) : o.push(r);
              (r = U(e, w(o, i))), (r.selector = e);
            }
            return r;
          }),
        ($ = t.select =
          function (e, t, n, i) {
            var o,
              r,
              s,
              a,
              l,
              u = "function" == typeof e && e,
              d = !i && C((e = u.selector || e));
            if (((n = n || []), 1 === d.length)) {
              if (
                ((r = d[0] = d[0].slice(0)),
                r.length > 2 &&
                  "ID" === (s = r[0]).type &&
                  x.getById &&
                  9 === t.nodeType &&
                  P &&
                  k.relative[r[1].type])
              ) {
                if (
                  ((t = (k.find.ID(s.matches[0].replace(be, xe), t) || [])[0]),
                  !t)
                )
                  return n;
                u && (t = t.parentNode), (e = e.slice(r.shift().value.length));
              }
              for (
                o = fe.needsContext.test(e) ? 0 : r.length;
                o-- && ((s = r[o]), !k.relative[(a = s.type)]);

              )
                if (
                  (l = k.find[a]) &&
                  (i = l(
                    s.matches[0].replace(be, xe),
                    (ye.test(r[0].type) && c(t.parentNode)) || t
                  ))
                ) {
                  if ((r.splice(o, 1), (e = i.length && p(r)), !e))
                    return Z.apply(n, i), n;
                  break;
                }
            }
            return (
              (u || E(e, d))(
                i,
                t,
                !P,
                n,
                !t || (ye.test(e) && c(t.parentNode)) || t
              ),
              n
            );
          }),
        (x.sortStable = I.split("").sort(X).join("") === I),
        (x.detectDuplicates = !!D),
        N(),
        (x.sortDetached = o(function (e) {
          return 1 & e.compareDocumentPosition(O.createElement("div"));
        })),
        o(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          r("type|href|height|width", function (e, t, n) {
            return n
              ? void 0
              : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (x.attributes &&
          o(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          r("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase()
              ? void 0
              : e.defaultValue;
          }),
        o(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          r(te, function (e, t, n) {
            var i;
            return n
              ? void 0
              : e[t] === !0
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
          }),
        t
      );
    })(e);
    (re.find = ce),
      (re.expr = ce.selectors),
      (re.expr[":"] = re.expr.pseudos),
      (re.uniqueSort = re.unique = ce.uniqueSort),
      (re.text = ce.getText),
      (re.isXMLDoc = ce.isXML),
      (re.contains = ce.contains);
    var de = function (e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (o && re(e).is(n)) break;
            i.push(e);
          }
        return i;
      },
      pe = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      fe = re.expr.match.needsContext,
      he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      ve = /^.[^:#\[\.,]*$/;
    (re.filter = function (e, t, n) {
      var i = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? re.find.matchesSelector(i, e)
            ? [i]
            : []
          : re.find.matches(
              e,
              re.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      re.fn.extend({
        find: function (e) {
          var t,
            n = this.length,
            i = [],
            o = this;
          if ("string" != typeof e)
            return this.pushStack(
              re(e).filter(function () {
                for (t = 0; n > t; t++) if (re.contains(o[t], this)) return !0;
              })
            );
          for (t = 0; n > t; t++) re.find(e, o[t], i);
          return (
            (i = this.pushStack(n > 1 ? re.unique(i) : i)),
            (i.selector = this.selector ? this.selector + " " + e : e),
            i
          );
        },
        filter: function (e) {
          return this.pushStack(i(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(i(this, e || [], !0));
        },
        is: function (e) {
          return !!i(
            this,
            "string" == typeof e && fe.test(e) ? re(e) : e || [],
            !1
          ).length;
        },
      });
    var ge,
      me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ye = (re.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || ge), "string" == typeof e)) {
          if (
            ((i =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : me.exec(e)),
            !i || (!i[1] && t))
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof re ? t[0] : t),
              re.merge(
                this,
                re.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : G,
                  !0
                )
              ),
              he.test(i[1]) && re.isPlainObject(t))
            )
              for (i in t)
                re.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (o = G.getElementById(i[2])),
            o && o.parentNode && ((this.length = 1), (this[0] = o)),
            (this.context = G),
            (this.selector = e),
            this
          );
        }
        return e.nodeType
          ? ((this.context = this[0] = e), (this.length = 1), this)
          : re.isFunction(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(re)
          : (void 0 !== e.selector &&
              ((this.selector = e.selector), (this.context = e.context)),
            re.makeArray(e, this));
      });
    (ye.prototype = re.fn), (ge = re(G));
    var we = /^(?:parents|prev(?:Until|All))/,
      be = { children: !0, contents: !0, next: !0, prev: !0 };
    re.fn.extend({
      has: function (e) {
        var t = re(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; n > e; e++) if (re.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            i = 0,
            o = this.length,
            r = [],
            s =
              fe.test(e) || "string" != typeof e ? re(e, t || this.context) : 0;
          o > i;
          i++
        )
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && re.find.matchesSelector(n, e))
            ) {
              r.push(n);
              break;
            }
        return this.pushStack(r.length > 1 ? re.uniqueSort(r) : r);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? K.call(re(e), this[0])
            : K.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      re.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return de(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return de(e, "parentNode", n);
          },
          next: function (e) {
            return o(e, "nextSibling");
          },
          prev: function (e) {
            return o(e, "previousSibling");
          },
          nextAll: function (e) {
            return de(e, "nextSibling");
          },
          prevAll: function (e) {
            return de(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return de(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return de(e, "previousSibling", n);
          },
          siblings: function (e) {
            return pe((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return pe(e.firstChild);
          },
          contents: function (e) {
            return e.contentDocument || re.merge([], e.childNodes);
          },
        },
        function (e, t) {
          re.fn[e] = function (n, i) {
            var o = re.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (i = n),
              i && "string" == typeof i && (o = re.filter(i, o)),
              this.length > 1 &&
                (be[e] || re.uniqueSort(o), we.test(e) && o.reverse()),
              this.pushStack(o)
            );
          };
        }
      );
    var xe = /\S+/g;
    (re.Callbacks = function (e) {
      e = "string" == typeof e ? r(e) : re.extend({}, e);
      var t,
        n,
        i,
        o,
        s = [],
        a = [],
        l = -1,
        u = function () {
          for (o = e.once, i = t = !0; a.length; l = -1)
            for (n = a.shift(); ++l < s.length; )
              s[l].apply(n[0], n[1]) === !1 &&
                e.stopOnFalse &&
                ((l = s.length), (n = !1));
          e.memory || (n = !1), (t = !1), o && (s = n ? [] : "");
        },
        c = {
          add: function () {
            return (
              s &&
                (n && !t && ((l = s.length - 1), a.push(n)),
                (function t(n) {
                  re.each(n, function (n, i) {
                    re.isFunction(i)
                      ? (e.unique && c.has(i)) || s.push(i)
                      : i && i.length && "string" !== re.type(i) && t(i);
                  });
                })(arguments),
                n && !t && u()),
              this
            );
          },
          remove: function () {
            return (
              re.each(arguments, function (e, t) {
                for (var n; (n = re.inArray(t, s, n)) > -1; )
                  s.splice(n, 1), l >= n && l--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? re.inArray(e, s) > -1 : s.length > 0;
          },
          empty: function () {
            return s && (s = []), this;
          },
          disable: function () {
            return (o = a = []), (s = n = ""), this;
          },
          disabled: function () {
            return !s;
          },
          lock: function () {
            return (o = a = []), n || (s = n = ""), this;
          },
          locked: function () {
            return !!o;
          },
          fireWith: function (e, n) {
            return (
              o ||
                ((n = n || []),
                (n = [e, n.slice ? n.slice() : n]),
                a.push(n),
                t || u()),
              this
            );
          },
          fire: function () {
            return c.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          },
        };
      return c;
    }),
      re.extend({
        Deferred: function (e) {
          var t = [
              ["resolve", "done", re.Callbacks("once memory"), "resolved"],
              ["reject", "fail", re.Callbacks("once memory"), "rejected"],
              ["notify", "progress", re.Callbacks("memory")],
            ],
            n = "pending",
            i = {
              state: function () {
                return n;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              then: function () {
                var e = arguments;
                return re
                  .Deferred(function (n) {
                    re.each(t, function (t, r) {
                      var s = re.isFunction(e[t]) && e[t];
                      o[r[1]](function () {
                        var e = s && s.apply(this, arguments);
                        e && re.isFunction(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[r[0] + "With"](
                              this === i ? n.promise() : this,
                              s ? [e] : arguments
                            );
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? re.extend(e, i) : i;
              },
            },
            o = {};
          return (
            (i.pipe = i.then),
            re.each(t, function (e, r) {
              var s = r[2],
                a = r[3];
              (i[r[1]] = s.add),
                a &&
                  s.add(
                    function () {
                      n = a;
                    },
                    t[1 ^ e][2].disable,
                    t[2][2].lock
                  ),
                (o[r[0]] = function () {
                  return (
                    o[r[0] + "With"](this === o ? i : this, arguments), this
                  );
                }),
                (o[r[0] + "With"] = s.fireWith);
            }),
            i.promise(o),
            e && e.call(o, o),
            o
          );
        },
        when: function (e) {
          var t,
            n,
            i,
            o = 0,
            r = Q.call(arguments),
            s = r.length,
            a = 1 !== s || (e && re.isFunction(e.promise)) ? s : 0,
            l = 1 === a ? e : re.Deferred(),
            u = function (e, n, i) {
              return function (o) {
                (n[e] = this),
                  (i[e] = arguments.length > 1 ? Q.call(arguments) : o),
                  i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
              };
            };
          if (s > 1)
            for (
              t = new Array(s), n = new Array(s), i = new Array(s);
              s > o;
              o++
            )
              r[o] && re.isFunction(r[o].promise)
                ? r[o]
                    .promise()
                    .progress(u(o, n, t))
                    .done(u(o, i, r))
                    .fail(l.reject)
                : --a;
          return a || l.resolveWith(i, r), l.promise();
        },
      });
    var ke;
    (re.fn.ready = function (e) {
      return re.ready.promise().done(e), this;
    }),
      re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? re.readyWait++ : re.ready(!0);
        },
        ready: function (e) {
          (e === !0 ? --re.readyWait : re.isReady) ||
            ((re.isReady = !0),
            (e !== !0 && --re.readyWait > 0) ||
              (ke.resolveWith(G, [re]),
              re.fn.triggerHandler &&
                (re(G).triggerHandler("ready"), re(G).off("ready"))));
        },
      }),
      (re.ready.promise = function (t) {
        return (
          ke ||
            ((ke = re.Deferred()),
            "complete" === G.readyState ||
            ("loading" !== G.readyState && !G.documentElement.doScroll)
              ? e.setTimeout(re.ready)
              : (G.addEventListener("DOMContentLoaded", s),
                e.addEventListener("load", s))),
          ke.promise(t)
        );
      }),
      re.ready.promise();
    var Te = function (e, t, n, i, o, r, s) {
        var a = 0,
          l = e.length,
          u = null == n;
        if ("object" === re.type(n)) {
          o = !0;
          for (a in n) Te(e, t, a, n[a], !0, r, s);
        } else if (
          void 0 !== i &&
          ((o = !0),
          re.isFunction(i) || (s = !0),
          u &&
            (s
              ? (t.call(e, i), (t = null))
              : ((u = t),
                (t = function (e, t, n) {
                  return u.call(re(e), n);
                }))),
          t)
        )
          for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : r;
      },
      Se = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
    (a.uid = 1),
      (a.prototype = {
        register: function (e, t) {
          var n = t || {};
          return (
            e.nodeType
              ? (e[this.expando] = n)
              : Object.defineProperty(e, this.expando, {
                  value: n,
                  writable: !0,
                  configurable: !0,
                }),
            e[this.expando]
          );
        },
        cache: function (e) {
          if (!Se(e)) return {};
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              Se(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var i,
            o = this.cache(e);
          if ("string" == typeof t) o[t] = n;
          else for (i in t) o[i] = t[i];
          return o;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][t];
        },
        access: function (e, t, n) {
          var i;
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? ((i = this.get(e, t)),
              void 0 !== i ? i : this.get(e, re.camelCase(t)))
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            i,
            o,
            r = e[this.expando];
          if (void 0 !== r) {
            if (void 0 === t) this.register(e);
            else {
              re.isArray(t)
                ? (i = t.concat(t.map(re.camelCase)))
                : ((o = re.camelCase(t)),
                  t in r
                    ? (i = [t, o])
                    : ((i = o), (i = i in r ? [i] : i.match(xe) || []))),
                (n = i.length);
              for (; n--; ) delete r[i[n]];
            }
            (void 0 === t || re.isEmptyObject(r)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !re.isEmptyObject(t);
        },
      });
    var Ce = new a(),
      Ee = new a(),
      $e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Ae = /[A-Z]/g;
    re.extend({
      hasData: function (e) {
        return Ee.hasData(e) || Ce.hasData(e);
      },
      data: function (e, t, n) {
        return Ee.access(e, t, n);
      },
      removeData: function (e, t) {
        Ee.remove(e, t);
      },
      _data: function (e, t, n) {
        return Ce.access(e, t, n);
      },
      _removeData: function (e, t) {
        Ce.remove(e, t);
      },
    }),
      re.fn.extend({
        data: function (e, t) {
          var n,
            i,
            o,
            r = this[0],
            s = r && r.attributes;
          if (void 0 === e) {
            if (
              this.length &&
              ((o = Ee.get(r)), 1 === r.nodeType && !Ce.get(r, "hasDataAttrs"))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  ((i = s[n].name),
                  0 === i.indexOf("data-") &&
                    ((i = re.camelCase(i.slice(5))), l(r, i, o[i])));
              Ce.set(r, "hasDataAttrs", !0);
            }
            return o;
          }
          return "object" == typeof e
            ? this.each(function () {
                Ee.set(this, e);
              })
            : Te(
                this,
                function (t) {
                  var n, i;
                  if (r && void 0 === t) {
                    if (
                      ((n =
                        Ee.get(r, e) ||
                        Ee.get(r, e.replace(Ae, "-$&").toLowerCase())),
                      void 0 !== n)
                    )
                      return n;
                    if (
                      ((i = re.camelCase(e)), (n = Ee.get(r, i)), void 0 !== n)
                    )
                      return n;
                    if (((n = l(r, i, void 0)), void 0 !== n)) return n;
                  } else
                    (i = re.camelCase(e)),
                      this.each(function () {
                        var n = Ee.get(this, i);
                        Ee.set(this, i, t),
                          e.indexOf("-") > -1 &&
                            void 0 !== n &&
                            Ee.set(this, e, t);
                      });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            Ee.remove(this, e);
          });
        },
      }),
      re.extend({
        queue: function (e, t, n) {
          var i;
          return e
            ? ((t = (t || "fx") + "queue"),
              (i = Ce.get(e, t)),
              n &&
                (!i || re.isArray(n)
                  ? (i = Ce.access(e, t, re.makeArray(n)))
                  : i.push(n)),
              i || [])
            : void 0;
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = re.queue(e, t),
            i = n.length,
            o = n.shift(),
            r = re._queueHooks(e, t),
            s = function () {
              re.dequeue(e, t);
            };
          "inprogress" === o && ((o = n.shift()), i--),
            o &&
              ("fx" === t && n.unshift("inprogress"),
              delete r.stop,
              o.call(e, s, r)),
            !i && r && r.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            Ce.get(e, n) ||
            Ce.access(e, n, {
              empty: re.Callbacks("once memory").add(function () {
                Ce.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      re.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? re.queue(this[0], e)
              : void 0 === t
              ? this
              : this.each(function () {
                  var n = re.queue(this, e, t);
                  re._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            re.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            i = 1,
            o = re.Deferred(),
            r = this,
            s = this.length,
            a = function () {
              --i || o.resolveWith(r, [r]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            s--;

          )
            (n = Ce.get(r[s], e + "queueHooks")),
              n && n.empty && (i++, n.empty.add(a));
          return a(), o.promise(t);
        },
      });
    var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      De = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
      Ne = ["Top", "Right", "Bottom", "Left"],
      Oe = function (e, t) {
        return (
          (e = t || e),
          "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
        );
      },
      He = /^(?:checkbox|radio)$/i,
      Pe = /<([\w:-]+)/,
      Le = /^$|\/(?:java|ecma)script/i,
      qe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (qe.optgroup = qe.option),
      (qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead),
      (qe.th = qe.td);
    var _e = /<|&#?\w+;/;
    !(function () {
      var e = G.createDocumentFragment(),
        t = e.appendChild(G.createElement("div")),
        n = G.createElement("input");
      n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        (ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.innerHTML = "<textarea>x</textarea>"),
        (ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
    })();
    var ze = /^key/,
      Ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Fe = /^([^.]*)(?:\.(.+)|)/;
    (re.event = {
      global: {},
      add: function (e, t, n, i, o) {
        var r,
          s,
          a,
          l,
          u,
          c,
          d,
          p,
          f,
          h,
          v,
          g = Ce.get(e);
        if (g)
          for (
            n.handler && ((r = n), (n = r.handler), (o = r.selector)),
              n.guid || (n.guid = re.guid++),
              (l = g.events) || (l = g.events = {}),
              (s = g.handle) ||
                (s = g.handle =
                  function (t) {
                    return "undefined" != typeof re &&
                      re.event.triggered !== t.type
                      ? re.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              t = (t || "").match(xe) || [""],
              u = t.length;
            u--;

          )
            (a = Fe.exec(t[u]) || []),
              (f = v = a[1]),
              (h = (a[2] || "").split(".").sort()),
              f &&
                ((d = re.event.special[f] || {}),
                (f = (o ? d.delegateType : d.bindType) || f),
                (d = re.event.special[f] || {}),
                (c = re.extend(
                  {
                    type: f,
                    origType: v,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && re.expr.match.needsContext.test(o),
                    namespace: h.join("."),
                  },
                  r
                )),
                (p = l[f]) ||
                  ((p = l[f] = []),
                  (p.delegateCount = 0),
                  (d.setup && d.setup.call(e, i, h, s) !== !1) ||
                    (e.addEventListener && e.addEventListener(f, s))),
                d.add &&
                  (d.add.call(e, c),
                  c.handler.guid || (c.handler.guid = n.guid)),
                o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                (re.event.global[f] = !0));
      },
      remove: function (e, t, n, i, o) {
        var r,
          s,
          a,
          l,
          u,
          c,
          d,
          p,
          f,
          h,
          v,
          g = Ce.hasData(e) && Ce.get(e);
        if (g && (l = g.events)) {
          for (t = (t || "").match(xe) || [""], u = t.length; u--; )
            if (
              ((a = Fe.exec(t[u]) || []),
              (f = v = a[1]),
              (h = (a[2] || "").split(".").sort()),
              f)
            ) {
              for (
                d = re.event.special[f] || {},
                  f = (i ? d.delegateType : d.bindType) || f,
                  p = l[f] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  s = r = p.length;
                r--;

              )
                (c = p[r]),
                  (!o && v !== c.origType) ||
                    (n && n.guid !== c.guid) ||
                    (a && !a.test(c.namespace)) ||
                    (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                    (p.splice(r, 1),
                    c.selector && p.delegateCount--,
                    d.remove && d.remove.call(e, c));
              s &&
                !p.length &&
                ((d.teardown && d.teardown.call(e, h, g.handle) !== !1) ||
                  re.removeEvent(e, f, g.handle),
                delete l[f]);
            } else for (f in l) re.event.remove(e, f + t[u], n, i, !0);
          re.isEmptyObject(l) && Ce.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        e = re.event.fix(e);
        var t,
          n,
          i,
          o,
          r,
          s = [],
          a = Q.call(arguments),
          l = (Ce.get(this, "events") || {})[e.type] || [],
          u = re.event.special[e.type] || {};
        if (
          ((a[0] = e),
          (e.delegateTarget = this),
          !u.preDispatch || u.preDispatch.call(this, e) !== !1)
        ) {
          for (
            s = re.event.handlers.call(this, e, l), t = 0;
            (o = s[t++]) && !e.isPropagationStopped();

          )
            for (
              e.currentTarget = o.elem, n = 0;
              (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();

            )
              (e.rnamespace && !e.rnamespace.test(r.namespace)) ||
                ((e.handleObj = r),
                (e.data = r.data),
                (i = (
                  (re.event.special[r.origType] || {}).handle || r.handler
                ).apply(o.elem, a)),
                void 0 !== i &&
                  (e.result = i) === !1 &&
                  (e.preventDefault(), e.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function (e, t) {
        var n,
          i,
          o,
          r,
          s = [],
          a = t.delegateCount,
          l = e.target;
        if (
          a &&
          l.nodeType &&
          ("click" !== e.type || isNaN(e.button) || e.button < 1)
        )
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
              for (i = [], n = 0; a > n; n++)
                (r = t[n]),
                  (o = r.selector + " "),
                  void 0 === i[o] &&
                    (i[o] = r.needsContext
                      ? re(o, this).index(l) > -1
                      : re.find(o, this, null, [l]).length),
                  i[o] && i.push(r);
              i.length && s.push({ elem: l, handlers: i });
            }
        return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return (
            null == e.which &&
              (e.which = null != t.charCode ? t.charCode : t.keyCode),
            e
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (e, t) {
          var n,
            i,
            o,
            r = t.button;
          return (
            null == e.pageX &&
              null != t.clientX &&
              ((n = e.target.ownerDocument || G),
              (i = n.documentElement),
              (o = n.body),
              (e.pageX =
                t.clientX +
                ((i && i.scrollLeft) || (o && o.scrollLeft) || 0) -
                ((i && i.clientLeft) || (o && o.clientLeft) || 0)),
              (e.pageY =
                t.clientY +
                ((i && i.scrollTop) || (o && o.scrollTop) || 0) -
                ((i && i.clientTop) || (o && o.clientTop) || 0))),
            e.which ||
              void 0 === r ||
              (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
            e
          );
        },
      },
      fix: function (e) {
        if (e[re.expando]) return e;
        var t,
          n,
          i,
          o = e.type,
          r = e,
          s = this.fixHooks[o];
        for (
          s ||
            (this.fixHooks[o] = s =
              Ie.test(o) ? this.mouseHooks : ze.test(o) ? this.keyHooks : {}),
            i = s.props ? this.props.concat(s.props) : this.props,
            e = new re.Event(r),
            t = i.length;
          t--;

        )
          (n = i[t]), (e[n] = r[n]);
        return (
          e.target || (e.target = G),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          s.filter ? s.filter(e, r) : e
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            return this !== v() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === v() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type &&
              this.click &&
              re.nodeName(this, "input")
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (e) {
            return re.nodeName(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (re.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (re.Event = function (e, t) {
        return this instanceof re.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && e.returnValue === !1)
                    ? f
                    : h))
              : (this.type = e),
            t && re.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || re.now()),
            void (this[re.expando] = !0))
          : new re.Event(e, t);
      }),
      (re.Event.prototype = {
        constructor: re.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = f), e && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = f), e && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = f),
            e && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      re.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                i = this,
                o = e.relatedTarget,
                r = e.handleObj;
              return (
                (o && (o === i || re.contains(i, o))) ||
                  ((e.type = r.origType),
                  (n = r.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        }
      ),
      re.fn.extend({
        on: function (e, t, n, i) {
          return g(this, e, t, n, i);
        },
        one: function (e, t, n, i) {
          return g(this, e, t, n, i, 1);
        },
        off: function (e, t, n) {
          var i, o;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              re(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (o in e) this.off(o, t, e[o]);
            return this;
          }
          return (
            (t !== !1 && "function" != typeof t) || ((n = t), (t = void 0)),
            n === !1 && (n = h),
            this.each(function () {
              re.event.remove(this, e, n, t);
            })
          );
        },
      });
    var Me =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      Re = /<script|<style|<link/i,
      We = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Be = /^true\/(.*)/,
      Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    re.extend({
      htmlPrefilter: function (e) {
        return e.replace(Me, "<$1></$2>");
      },
      clone: function (e, t, n) {
        var i,
          o,
          r,
          s,
          a = e.cloneNode(!0),
          l = re.contains(e.ownerDocument, e);
        if (
          !(
            ie.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            re.isXMLDoc(e)
          )
        )
          for (s = c(a), r = c(e), i = 0, o = r.length; o > i; i++)
            x(r[i], s[i]);
        if (t)
          if (n)
            for (r = r || c(e), s = s || c(a), i = 0, o = r.length; o > i; i++)
              b(r[i], s[i]);
          else b(e, a);
        return (
          (s = c(a, "script")), s.length > 0 && d(s, !l && c(e, "script")), a
        );
      },
      cleanData: function (e) {
        for (
          var t, n, i, o = re.event.special, r = 0;
          void 0 !== (n = e[r]);
          r++
        )
          if (Se(n)) {
            if ((t = n[Ce.expando])) {
              if (t.events)
                for (i in t.events)
                  o[i] ? re.event.remove(n, i) : re.removeEvent(n, i, t.handle);
              n[Ce.expando] = void 0;
            }
            n[Ee.expando] && (n[Ee.expando] = void 0);
          }
      },
    }),
      re.fn.extend({
        domManip: k,
        detach: function (e) {
          return T(this, e, !0);
        },
        remove: function (e) {
          return T(this, e);
        },
        text: function (e) {
          return Te(
            this,
            function (e) {
              return void 0 === e
                ? re.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return k(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = m(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function () {
          return k(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = m(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return k(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return k(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (re.cleanData(c(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return re.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return Te(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !Re.test(e) &&
                !qe[(Pe.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = re.htmlPrefilter(e);
                try {
                  for (; i > n; n++)
                    (t = this[n] || {}),
                      1 === t.nodeType &&
                        (re.cleanData(c(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = [];
          return k(
            this,
            arguments,
            function (t) {
              var n = this.parentNode;
              re.inArray(this, e) < 0 &&
                (re.cleanData(c(this)), n && n.replaceChild(t, this));
            },
            e
          );
        },
      }),
      re.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          re.fn[e] = function (e) {
            for (var n, i = [], o = re(e), r = o.length - 1, s = 0; r >= s; s++)
              (n = s === r ? this : this.clone(!0)),
                re(o[s])[t](n),
                Z.apply(i, n.get());
            return this.pushStack(i);
          };
        }
      );
    var Xe,
      Ye = { HTML: "block", BODY: "block" },
      Ve = /^margin/,
      Ge = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
      Qe = function (t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      },
      Je = function (e, t, n, i) {
        var o,
          r,
          s = {};
        for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
        o = n.apply(e, i || []);
        for (r in t) e.style[r] = s[r];
        return o;
      },
      Ze = G.documentElement;
    !(function () {
      function t() {
        (a.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (a.innerHTML = ""),
          Ze.appendChild(s);
        var t = e.getComputedStyle(a);
        (n = "1%" !== t.top),
          (r = "2px" === t.marginLeft),
          (i = "4px" === t.width),
          (a.style.marginRight = "50%"),
          (o = "4px" === t.marginRight),
          Ze.removeChild(s);
      }
      var n,
        i,
        o,
        r,
        s = G.createElement("div"),
        a = G.createElement("div");
      a.style &&
        ((a.style.backgroundClip = "content-box"),
        (a.cloneNode(!0).style.backgroundClip = ""),
        (ie.clearCloneStyle = "content-box" === a.style.backgroundClip),
        (s.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        s.appendChild(a),
        re.extend(ie, {
          pixelPosition: function () {
            return t(), n;
          },
          boxSizingReliable: function () {
            return null == i && t(), i;
          },
          pixelMarginRight: function () {
            return null == i && t(), o;
          },
          reliableMarginLeft: function () {
            return null == i && t(), r;
          },
          reliableMarginRight: function () {
            var t,
              n = a.appendChild(G.createElement("div"));
            return (
              (n.style.cssText = a.style.cssText =
                "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (n.style.marginRight = n.style.width = "0"),
              (a.style.width = "1px"),
              Ze.appendChild(s),
              (t = !parseFloat(e.getComputedStyle(n).marginRight)),
              Ze.removeChild(s),
              a.removeChild(n),
              t
            );
          },
        }));
    })();
    var Ke = /^(none|table(?!-c[ea]).+)/,
      et = { position: "absolute", visibility: "hidden", display: "block" },
      tt = { letterSpacing: "0", fontWeight: "400" },
      nt = ["Webkit", "O", "Moz", "ms"],
      it = G.createElement("div").style;
    re.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = E(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            r,
            s,
            a = re.camelCase(t),
            l = e.style;
          return (
            (t = re.cssProps[a] || (re.cssProps[a] = A(a) || a)),
            (s = re.cssHooks[t] || re.cssHooks[a]),
            void 0 === n
              ? s && "get" in s && void 0 !== (o = s.get(e, !1, i))
                ? o
                : l[t]
              : ((r = typeof n),
                "string" === r &&
                  (o = De.exec(n)) &&
                  o[1] &&
                  ((n = u(e, t, o)), (r = "number")),
                void (
                  null != n &&
                  n === n &&
                  ("number" === r &&
                    (n += (o && o[3]) || (re.cssNumber[a] ? "" : "px")),
                  ie.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (l[t] = "inherit"),
                  (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                    (l[t] = n))
                ))
          );
        }
      },
      css: function (e, t, n, i) {
        var o,
          r,
          s,
          a = re.camelCase(t);
        return (
          (t = re.cssProps[a] || (re.cssProps[a] = A(a) || a)),
          (s = re.cssHooks[t] || re.cssHooks[a]),
          s && "get" in s && (o = s.get(e, !0, n)),
          void 0 === o && (o = E(e, t, i)),
          "normal" === o && t in tt && (o = tt[t]),
          "" === n || n
            ? ((r = parseFloat(o)), n === !0 || isFinite(r) ? r || 0 : o)
            : o
        );
      },
    }),
      re.each(["height", "width"], function (e, t) {
        re.cssHooks[t] = {
          get: function (e, n, i) {
            return n
              ? Ke.test(re.css(e, "display")) && 0 === e.offsetWidth
                ? Je(e, et, function () {
                    return N(e, t, i);
                  })
                : N(e, t, i)
              : void 0;
          },
          set: function (e, n, i) {
            var o,
              r = i && Qe(e),
              s =
                i &&
                D(e, t, i, "border-box" === re.css(e, "boxSizing", !1, r), r);
            return (
              s &&
                (o = De.exec(n)) &&
                "px" !== (o[3] || "px") &&
                ((e.style[t] = n), (n = re.css(e, t))),
              j(e, n, s)
            );
          },
        };
      }),
      (re.cssHooks.marginLeft = $(ie.reliableMarginLeft, function (e, t) {
        return t
          ? (parseFloat(E(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                Je(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          : void 0;
      })),
      (re.cssHooks.marginRight = $(ie.reliableMarginRight, function (e, t) {
        return t
          ? Je(e, { display: "inline-block" }, E, [e, "marginRight"])
          : void 0;
      })),
      re.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (re.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
              4 > i;
              i++
            )
              o[e + Ne[i] + t] = r[i] || r[i - 2] || r[0];
            return o;
          },
        }),
          Ve.test(e) || (re.cssHooks[e + t].set = j);
      }),
      re.fn.extend({
        css: function (e, t) {
          return Te(
            this,
            function (e, t, n) {
              var i,
                o,
                r = {},
                s = 0;
              if (re.isArray(t)) {
                for (i = Qe(e), o = t.length; o > s; s++)
                  r[t[s]] = re.css(e, t[s], !1, i);
                return r;
              }
              return void 0 !== n ? re.style(e, t, n) : re.css(e, t);
            },
            e,
            t,
            arguments.length > 1
          );
        },
        show: function () {
          return O(this, !0);
        },
        hide: function () {
          return O(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                Oe(this) ? re(this).show() : re(this).hide();
              });
        },
      }),
      (re.Tween = H),
      (H.prototype = {
        constructor: H,
        init: function (e, t, n, i, o, r) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = o || re.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = r || (re.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = H.propHooks[this.prop];
          return e && e.get ? e.get(this) : H.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = H.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  re.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : H.propHooks._default.set(this),
            this
          );
        },
      }),
      (H.prototype.init.prototype = H.prototype),
      (H.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : ((t = re.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
          },
          set: function (e) {
            re.fx.step[e.prop]
              ? re.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (null == e.elem.style[re.cssProps[e.prop]] &&
                  !re.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : re.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }),
      (H.propHooks.scrollTop = H.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (re.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (re.fx = H.prototype.init),
      (re.fx.step = {});
    var ot,
      rt,
      st = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;
    (re.Animation = re.extend(I, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return u(n.elem, e, De.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        re.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(xe));
        for (var n, i = 0, o = e.length; o > i; i++)
          (n = e[i]),
            (I.tweeners[n] = I.tweeners[n] || []),
            I.tweeners[n].unshift(t);
      },
      prefilters: [_],
      prefilter: function (e, t) {
        t ? I.prefilters.unshift(e) : I.prefilters.push(e);
      },
    })),
      (re.speed = function (e, t, n) {
        var i =
          e && "object" == typeof e
            ? re.extend({}, e)
            : {
                complete: n || (!n && t) || (re.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !re.isFunction(t) && t),
              };
        return (
          (i.duration = re.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in re.fx.speeds
            ? re.fx.speeds[i.duration]
            : re.fx.speeds._default),
          (null != i.queue && i.queue !== !0) || (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            re.isFunction(i.old) && i.old.call(this),
              i.queue && re.dequeue(this, i.queue);
          }),
          i
        );
      }),
      re.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(Oe)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, i);
        },
        animate: function (e, t, n, i) {
          var o = re.isEmptyObject(e),
            r = re.speed(t, n, i),
            s = function () {
              var t = I(this, re.extend({}, e), r);
              (o || Ce.get(this, "finish")) && t.stop(!0);
            };
          return (
            (s.finish = s),
            o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
          );
        },
        stop: function (e, t, n) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(n);
          };
          return (
            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                o = null != e && e + "queueHooks",
                r = re.timers,
                s = Ce.get(this);
              if (o) s[o] && s[o].stop && i(s[o]);
              else for (o in s) s[o] && s[o].stop && at.test(o) && i(s[o]);
              for (o = r.length; o--; )
                r[o].elem !== this ||
                  (null != e && r[o].queue !== e) ||
                  (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
              (!t && n) || re.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            e !== !1 && (e = e || "fx"),
            this.each(function () {
              var t,
                n = Ce.get(this),
                i = n[e + "queue"],
                o = n[e + "queueHooks"],
                r = re.timers,
                s = i ? i.length : 0;
              for (
                n.finish = !0,
                  re.queue(this, e, []),
                  o && o.stop && o.stop.call(this, !0),
                  t = r.length;
                t--;

              )
                r[t].elem === this &&
                  r[t].queue === e &&
                  (r[t].anim.stop(!0), r.splice(t, 1));
              for (t = 0; s > t; t++)
                i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      re.each(["toggle", "show", "hide"], function (e, t) {
        var n = re.fn[t];
        re.fn[t] = function (e, i, o) {
          return null == e || "boolean" == typeof e
            ? n.apply(this, arguments)
            : this.animate(L(t, !0), e, i, o);
        };
      }),
      re.each(
        {
          slideDown: L("show"),
          slideUp: L("hide"),
          slideToggle: L("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          re.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i);
          };
        }
      ),
      (re.timers = []),
      (re.fx.tick = function () {
        var e,
          t = 0,
          n = re.timers;
        for (ot = re.now(); t < n.length; t++)
          (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
        n.length || re.fx.stop(), (ot = void 0);
      }),
      (re.fx.timer = function (e) {
        re.timers.push(e), e() ? re.fx.start() : re.timers.pop();
      }),
      (re.fx.interval = 13),
      (re.fx.start = function () {
        rt || (rt = e.setInterval(re.fx.tick, re.fx.interval));
      }),
      (re.fx.stop = function () {
        e.clearInterval(rt), (rt = null);
      }),
      (re.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (re.fn.delay = function (t, n) {
        return (
          (t = re.fx ? re.fx.speeds[t] || t : t),
          (n = n || "fx"),
          this.queue(n, function (n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function () {
              e.clearTimeout(o);
            };
          })
        );
      }),
      (function () {
        var e = G.createElement("input"),
          t = G.createElement("select"),
          n = t.appendChild(G.createElement("option"));
        (e.type = "checkbox"),
          (ie.checkOn = "" !== e.value),
          (ie.optSelected = n.selected),
          (t.disabled = !0),
          (ie.optDisabled = !n.disabled),
          (e = G.createElement("input")),
          (e.value = "t"),
          (e.type = "radio"),
          (ie.radioValue = "t" === e.value);
      })();
    var lt,
      ut = re.expr.attrHandle;
    re.fn.extend({
      attr: function (e, t) {
        return Te(this, re.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          re.removeAttr(this, e);
        });
      },
    }),
      re.extend({
        attr: function (e, t, n) {
          var i,
            o,
            r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return "undefined" == typeof e.getAttribute
              ? re.prop(e, t, n)
              : ((1 === r && re.isXMLDoc(e)) ||
                  ((t = t.toLowerCase()),
                  (o =
                    re.attrHooks[t] ||
                    (re.expr.match.bool.test(t) ? lt : void 0))),
                void 0 !== n
                  ? null === n
                    ? void re.removeAttr(e, t)
                    : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ""), n)
                  : o && "get" in o && null !== (i = o.get(e, t))
                  ? i
                  : ((i = re.find.attr(e, t)), null == i ? void 0 : i));
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!ie.radioValue && "radio" === t && re.nodeName(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            i,
            o = 0,
            r = t && t.match(xe);
          if (r && 1 === e.nodeType)
            for (; (n = r[o++]); )
              (i = re.propFix[n] || n),
                re.expr.match.bool.test(n) && (e[i] = !1),
                e.removeAttribute(n);
        },
      }),
      (lt = {
        set: function (e, t, n) {
          return t === !1 ? re.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      re.each(re.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ut[t] || re.find.attr;
        ut[t] = function (e, t, i) {
          var o, r;
          return (
            i ||
              ((r = ut[t]),
              (ut[t] = o),
              (o = null != n(e, t, i) ? t.toLowerCase() : null),
              (ut[t] = r)),
            o
          );
        };
      });
    var ct = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;
    re.fn.extend({
      prop: function (e, t) {
        return Te(this, re.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[re.propFix[e] || e];
        });
      },
    }),
      re.extend({
        prop: function (e, t, n) {
          var i,
            o,
            r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return (
              (1 === r && re.isXMLDoc(e)) ||
                ((t = re.propFix[t] || t), (o = re.propHooks[t])),
              void 0 !== n
                ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e[t] = n)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = re.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : ct.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      ie.optSelected ||
        (re.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      re.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          re.propFix[this.toLowerCase()] = this;
        }
      );
    var pt = /[\t\r\n\f]/g;
    re.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (re.isFunction(e))
          return this.each(function (t) {
            re(this).addClass(e.call(this, t, F(this)));
          });
        if ("string" == typeof e && e)
          for (t = e.match(xe) || []; (n = this[l++]); )
            if (
              ((o = F(n)),
              (i = 1 === n.nodeType && (" " + o + " ").replace(pt, " ")))
            ) {
              for (s = 0; (r = t[s++]); )
                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              (a = re.trim(i)), o !== a && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (re.isFunction(e))
          return this.each(function (t) {
            re(this).removeClass(e.call(this, t, F(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match(xe) || []; (n = this[l++]); )
            if (
              ((o = F(n)),
              (i = 1 === n.nodeType && (" " + o + " ").replace(pt, " ")))
            ) {
              for (s = 0; (r = t[s++]); )
                for (; i.indexOf(" " + r + " ") > -1; )
                  i = i.replace(" " + r + " ", " ");
              (a = re.trim(i)), o !== a && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : re.isFunction(e)
          ? this.each(function (n) {
              re(this).toggleClass(e.call(this, n, F(this), t), t);
            })
          : this.each(function () {
              var t, i, o, r;
              if ("string" === n)
                for (i = 0, o = re(this), r = e.match(xe) || []; (t = r[i++]); )
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = F(this)),
                  t && Ce.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || e === !1 ? "" : Ce.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (
            1 === n.nodeType &&
            (" " + F(n) + " ").replace(pt, " ").indexOf(t) > -1
          )
            return !0;
        return !1;
      },
    });
    var ft = /\r/g,
      ht = /[\x20\t\r\n\f]+/g;
    re.fn.extend({
      val: function (e) {
        var t,
          n,
          i,
          o = this[0];
        return arguments.length
          ? ((i = re.isFunction(e)),
            this.each(function (n) {
              var o;
              1 === this.nodeType &&
                ((o = i ? e.call(this, n, re(this).val()) : e),
                null == o
                  ? (o = "")
                  : "number" == typeof o
                  ? (o += "")
                  : re.isArray(o) &&
                    (o = re.map(o, function (e) {
                      return null == e ? "" : e + "";
                    })),
                (t =
                  re.valHooks[this.type] ||
                  re.valHooks[this.nodeName.toLowerCase()]),
                (t && "set" in t && void 0 !== t.set(this, o, "value")) ||
                  (this.value = o));
            }))
          : o
          ? ((t = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()]),
            t && "get" in t && void 0 !== (n = t.get(o, "value"))
              ? n
              : ((n = o.value),
                "string" == typeof n ? n.replace(ft, "") : null == n ? "" : n))
          : void 0;
      },
    }),
      re.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = re.find.attr(e, "value");
              return null != t ? t : re.trim(re.text(e)).replace(ht, " ");
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  n,
                  i = e.options,
                  o = e.selectedIndex,
                  r = "select-one" === e.type || 0 > o,
                  s = r ? null : [],
                  a = r ? o + 1 : i.length,
                  l = 0 > o ? a : r ? o : 0;
                a > l;
                l++
              )
                if (
                  ((n = i[l]),
                  (n.selected || l === o) &&
                    (ie.optDisabled
                      ? !n.disabled
                      : null === n.getAttribute("disabled")) &&
                    (!n.parentNode.disabled ||
                      !re.nodeName(n.parentNode, "optgroup")))
                ) {
                  if (((t = re(n).val()), r)) return t;
                  s.push(t);
                }
              return s;
            },
            set: function (e, t) {
              for (
                var n, i, o = e.options, r = re.makeArray(t), s = o.length;
                s--;

              )
                (i = o[s]),
                  (i.selected =
                    re.inArray(re.valHooks.option.get(i), r) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), r;
            },
          },
        },
      }),
      re.each(["radio", "checkbox"], function () {
        (re.valHooks[this] = {
          set: function (e, t) {
            return re.isArray(t)
              ? (e.checked = re.inArray(re(e).val(), t) > -1)
              : void 0;
          },
        }),
          ie.checkOn ||
            (re.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      });
    var vt = /^(?:focusinfocus|focusoutblur)$/;
    re.extend(re.event, {
      trigger: function (t, n, i, o) {
        var r,
          s,
          a,
          l,
          u,
          c,
          d,
          p = [i || G],
          f = ne.call(t, "type") ? t.type : t,
          h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((s = a = i = i || G),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !vt.test(f + re.event.triggered) &&
            (f.indexOf(".") > -1 &&
              ((h = f.split(".")), (f = h.shift()), h.sort()),
            (u = f.indexOf(":") < 0 && "on" + f),
            (t = t[re.expando]
              ? t
              : new re.Event(f, "object" == typeof t && t)),
            (t.isTrigger = o ? 2 : 3),
            (t.namespace = h.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = i),
            (n = null == n ? [t] : re.makeArray(n, [t])),
            (d = re.event.special[f] || {}),
            o || !d.trigger || d.trigger.apply(i, n) !== !1))
        ) {
          if (!o && !d.noBubble && !re.isWindow(i)) {
            for (
              l = d.delegateType || f, vt.test(l + f) || (s = s.parentNode);
              s;
              s = s.parentNode
            )
              p.push(s), (a = s);
            a === (i.ownerDocument || G) &&
              p.push(a.defaultView || a.parentWindow || e);
          }
          for (r = 0; (s = p[r++]) && !t.isPropagationStopped(); )
            (t.type = r > 1 ? l : d.bindType || f),
              (c = (Ce.get(s, "events") || {})[t.type] && Ce.get(s, "handle")),
              c && c.apply(s, n),
              (c = u && s[u]),
              c &&
                c.apply &&
                Se(s) &&
                ((t.result = c.apply(s, n)),
                t.result === !1 && t.preventDefault());
          return (
            (t.type = f),
            o ||
              t.isDefaultPrevented() ||
              (d._default && d._default.apply(p.pop(), n) !== !1) ||
              !Se(i) ||
              (u &&
                re.isFunction(i[f]) &&
                !re.isWindow(i) &&
                ((a = i[u]),
                a && (i[u] = null),
                (re.event.triggered = f),
                i[f](),
                (re.event.triggered = void 0),
                a && (i[u] = a))),
            t.result
          );
        }
      },
      simulate: function (e, t, n) {
        var i = re.extend(new re.Event(), n, { type: e, isSimulated: !0 });
        re.event.trigger(i, null, t),
          i.isDefaultPrevented() && n.preventDefault();
      },
    }),
      re.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            re.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          return n ? re.event.trigger(e, t, n, !0) : void 0;
        },
      }),
      re.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (e, t) {
          re.fn[t] = function (e, n) {
            return arguments.length > 0
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        }
      ),
      re.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      (ie.focusin = "onfocusin" in e),
      ie.focusin ||
        re.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = function (e) {
            re.event.simulate(t, e.target, re.event.fix(e));
          };
          re.event.special[t] = {
            setup: function () {
              var i = this.ownerDocument || this,
                o = Ce.access(i, t);
              o || i.addEventListener(e, n, !0), Ce.access(i, t, (o || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                o = Ce.access(i, t) - 1;
              o
                ? Ce.access(i, t, o)
                : (i.removeEventListener(e, n, !0), Ce.remove(i, t));
            },
          };
        });
    var gt = e.location,
      mt = re.now(),
      yt = /\?/;
    (re.parseJSON = function (e) {
      return JSON.parse(e + "");
    }),
      (re.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
          n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
          n = void 0;
        }
        return (
          (n && !n.getElementsByTagName("parsererror").length) ||
            re.error("Invalid XML: " + t),
          n
        );
      });
    var wt = /#.*$/,
      bt = /([?&])_=[^&]*/,
      xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Tt = /^(?:GET|HEAD)$/,
      St = /^\/\//,
      Ct = {},
      Et = {},
      $t = "*/".concat("*"),
      At = G.createElement("a");
    (At.href = gt.href),
      re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: gt.href,
          type: "GET",
          isLocal: kt.test(gt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": $t,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": re.parseJSON,
            "text xml": re.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? W(W(e, re.ajaxSettings), t) : W(re.ajaxSettings, e);
        },
        ajaxPrefilter: M(Ct),
        ajaxTransport: M(Et),
        ajax: function (t, n) {
          function i(t, n, i, a) {
            var u,
              d,
              y,
              w,
              x,
              T = n;
            2 !== b &&
              ((b = 2),
              l && e.clearTimeout(l),
              (o = void 0),
              (s = a || ""),
              (k.readyState = t > 0 ? 4 : 0),
              (u = (t >= 200 && 300 > t) || 304 === t),
              i && (w = B(p, k, i)),
              (w = U(p, w, k, u)),
              u
                ? (p.ifModified &&
                    ((x = k.getResponseHeader("Last-Modified")),
                    x && (re.lastModified[r] = x),
                    (x = k.getResponseHeader("etag")),
                    x && (re.etag[r] = x)),
                  204 === t || "HEAD" === p.type
                    ? (T = "nocontent")
                    : 304 === t
                    ? (T = "notmodified")
                    : ((T = w.state), (d = w.data), (y = w.error), (u = !y)))
                : ((y = T), (!t && T) || ((T = "error"), 0 > t && (t = 0))),
              (k.status = t),
              (k.statusText = (n || T) + ""),
              u ? v.resolveWith(f, [d, T, k]) : v.rejectWith(f, [k, T, y]),
              k.statusCode(m),
              (m = void 0),
              c &&
                h.trigger(u ? "ajaxSuccess" : "ajaxError", [k, p, u ? d : y]),
              g.fireWith(f, [k, T]),
              c &&
                (h.trigger("ajaxComplete", [k, p]),
                --re.active || re.event.trigger("ajaxStop")));
          }
          "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
          var o,
            r,
            s,
            a,
            l,
            u,
            c,
            d,
            p = re.ajaxSetup({}, n),
            f = p.context || p,
            h = p.context && (f.nodeType || f.jquery) ? re(f) : re.event,
            v = re.Deferred(),
            g = re.Callbacks("once memory"),
            m = p.statusCode || {},
            y = {},
            w = {},
            b = 0,
            x = "canceled",
            k = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (2 === b) {
                  if (!a)
                    for (a = {}; (t = xt.exec(s)); )
                      a[t[1].toLowerCase()] = t[2];
                  t = a[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return 2 === b ? s : null;
              },
              setRequestHeader: function (e, t) {
                var n = e.toLowerCase();
                return b || ((e = w[n] = w[n] || e), (y[e] = t)), this;
              },
              overrideMimeType: function (e) {
                return b || (p.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (2 > b) for (t in e) m[t] = [m[t], e[t]];
                  else k.always(e[k.status]);
                return this;
              },
              abort: function (e) {
                var t = e || x;
                return o && o.abort(t), i(0, t), this;
              },
            };
          if (
            ((v.promise(k).complete = g.add),
            (k.success = k.done),
            (k.error = k.fail),
            (p.url = ((t || p.url || gt.href) + "")
              .replace(wt, "")
              .replace(St, gt.protocol + "//")),
            (p.type = n.method || n.type || p.method || p.type),
            (p.dataTypes = re
              .trim(p.dataType || "*")
              .toLowerCase()
              .match(xe) || [""]),
            null == p.crossDomain)
          ) {
            u = G.createElement("a");
            try {
              (u.href = p.url),
                (u.href = u.href),
                (p.crossDomain =
                  At.protocol + "//" + At.host != u.protocol + "//" + u.host);
            } catch (e) {
              p.crossDomain = !0;
            }
          }
          if (
            (p.data &&
              p.processData &&
              "string" != typeof p.data &&
              (p.data = re.param(p.data, p.traditional)),
            R(Ct, p, n, k),
            2 === b)
          )
            return k;
          (c = re.event && p.global),
            c && 0 === re.active++ && re.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Tt.test(p.type)),
            (r = p.url),
            p.hasContent ||
              (p.data &&
                ((r = p.url += (yt.test(r) ? "&" : "?") + p.data),
                delete p.data),
              p.cache === !1 &&
                (p.url = bt.test(r)
                  ? r.replace(bt, "$1_=" + mt++)
                  : r + (yt.test(r) ? "&" : "?") + "_=" + mt++)),
            p.ifModified &&
              (re.lastModified[r] &&
                k.setRequestHeader("If-Modified-Since", re.lastModified[r]),
              re.etag[r] && k.setRequestHeader("If-None-Match", re.etag[r])),
            ((p.data && p.hasContent && p.contentType !== !1) ||
              n.contentType) &&
              k.setRequestHeader("Content-Type", p.contentType),
            k.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
                : p.accepts["*"]
            );
          for (d in p.headers) k.setRequestHeader(d, p.headers[d]);
          if (p.beforeSend && (p.beforeSend.call(f, k, p) === !1 || 2 === b))
            return k.abort();
          x = "abort";
          for (d in { success: 1, error: 1, complete: 1 }) k[d](p[d]);
          if ((o = R(Et, p, n, k))) {
            if (
              ((k.readyState = 1), c && h.trigger("ajaxSend", [k, p]), 2 === b)
            )
              return k;
            p.async &&
              p.timeout > 0 &&
              (l = e.setTimeout(function () {
                k.abort("timeout");
              }, p.timeout));
            try {
              (b = 1), o.send(y, i);
            } catch (e) {
              if (!(2 > b)) throw e;
              i(-1, e);
            }
          } else i(-1, "No Transport");
          return k;
        },
        getJSON: function (e, t, n) {
          return re.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return re.get(e, void 0, t, "script");
        },
      }),
      re.each(["get", "post"], function (e, t) {
        re[t] = function (e, n, i, o) {
          return (
            re.isFunction(n) && ((o = o || i), (i = n), (n = void 0)),
            re.ajax(
              re.extend(
                { url: e, type: t, dataType: o, data: n, success: i },
                re.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      (re._evalUrl = function (e) {
        return re.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      re.fn.extend({
        wrapAll: function (e) {
          var t;
          return re.isFunction(e)
            ? this.each(function (t) {
                re(this).wrapAll(e.call(this, t));
              })
            : (this[0] &&
                ((t = re(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (e) {
          return re.isFunction(e)
            ? this.each(function (t) {
                re(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = re(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = re.isFunction(e);
          return this.each(function (n) {
            re(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              re.nodeName(this, "body") ||
                re(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (re.expr.filters.hidden = function (e) {
        return !re.expr.filters.visible(e);
      }),
      (re.expr.filters.visible = function (e) {
        return (
          e.offsetWidth > 0 ||
          e.offsetHeight > 0 ||
          e.getClientRects().length > 0
        );
      });
    var jt = /%20/g,
      Dt = /\[\]$/,
      Nt = /\r?\n/g,
      Ot = /^(?:submit|button|image|reset|file)$/i,
      Ht = /^(?:input|select|textarea|keygen)/i;
    (re.param = function (e, t) {
      var n,
        i = [],
        o = function (e, t) {
          (t = re.isFunction(t) ? t() : null == t ? "" : t),
            (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional),
        re.isArray(e) || (e.jquery && !re.isPlainObject(e)))
      )
        re.each(e, function () {
          o(this.name, this.value);
        });
      else for (n in e) X(n, e[n], t, o);
      return i.join("&").replace(jt, "+");
    }),
      re.fn.extend({
        serialize: function () {
          return re.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = re.prop(this, "elements");
            return e ? re.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !re(this).is(":disabled") &&
                Ht.test(this.nodeName) &&
                !Ot.test(e) &&
                (this.checked || !He.test(e))
              );
            })
            .map(function (e, t) {
              var n = re(this).val();
              return null == n
                ? null
                : re.isArray(n)
                ? re.map(n, function (e) {
                    return { name: t.name, value: e.replace(Nt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(Nt, "\r\n") };
            })
            .get();
        },
      }),
      (re.ajaxSettings.xhr = function () {
        try {
          return new e.XMLHttpRequest();
        } catch (e) {}
      });
    var Pt = { 0: 200, 1223: 204 },
      Lt = re.ajaxSettings.xhr();
    (ie.cors = !!Lt && "withCredentials" in Lt),
      (ie.ajax = Lt = !!Lt),
      re.ajaxTransport(function (t) {
        var n, i;
        return ie.cors || (Lt && !t.crossDomain)
          ? {
              send: function (o, r) {
                var s,
                  a = t.xhr();
                if (
                  (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    o["X-Requested-With"] ||
                    (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                (n = function (e) {
                  return function () {
                    n &&
                      ((n =
                        i =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.onreadystatechange =
                          null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                        ? "number" != typeof a.status
                          ? r(0, "error")
                          : r(a.status, a.statusText)
                        : r(
                            Pt[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = n()),
                  (i = a.onerror = n("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          e.setTimeout(function () {
                            n && i();
                          });
                      }),
                  (n = n("abort"));
                try {
                  a.send((t.hasContent && t.data) || null);
                } catch (e) {
                  if (n) throw e;
                }
              },
              abort: function () {
                n && n();
              },
            }
          : void 0;
      }),
      re.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return re.globalEval(e), e;
          },
        },
      }),
      re.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      re.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var t, n;
          return {
            send: function (i, o) {
              (t = re("<script>")
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  "load error",
                  (n = function (e) {
                    t.remove(),
                      (n = null),
                      e && o("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                G.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var qt = [],
      _t = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = qt.pop() || re.expando + "_" + mt++;
        return (this[e] = !0), e;
      },
    }),
      re.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o,
          r,
          s,
          a =
            t.jsonp !== !1 &&
            (_t.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                0 ===
                  (t.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                _t.test(t.data) &&
                "data");
        return a || "jsonp" === t.dataTypes[0]
          ? ((o = t.jsonpCallback =
              re.isFunction(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
            a
              ? (t[a] = t[a].replace(_t, "$1" + o))
              : t.jsonp !== !1 &&
                (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            (t.converters["script json"] = function () {
              return s || re.error(o + " was not called"), s[0];
            }),
            (t.dataTypes[0] = "json"),
            (r = e[o]),
            (e[o] = function () {
              s = arguments;
            }),
            i.always(function () {
              void 0 === r ? re(e).removeProp(o) : (e[o] = r),
                t[o] && ((t.jsonpCallback = n.jsonpCallback), qt.push(o)),
                s && re.isFunction(r) && r(s[0]),
                (s = r = void 0);
            }),
            "script")
          : void 0;
      }),
      (re.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((n = t), (t = !1)), (t = t || G);
        var i = he.exec(e),
          o = !n && [];
        return i
          ? [t.createElement(i[1])]
          : ((i = p([e], t, o)),
            o && o.length && re(o).remove(),
            re.merge([], i.childNodes));
      });
    var zt = re.fn.load;
    (re.fn.load = function (e, t, n) {
      if ("string" != typeof e && zt) return zt.apply(this, arguments);
      var i,
        o,
        r,
        s = this,
        a = e.indexOf(" ");
      return (
        a > -1 && ((i = re.trim(e.slice(a))), (e = e.slice(0, a))),
        re.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (o = "POST"),
        s.length > 0 &&
          re
            .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
            .done(function (e) {
              (r = arguments),
                s.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, r || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
      re.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          re.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      (re.expr.filters.animated = function (e) {
        return re.grep(re.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (re.offset = {
        setOffset: function (e, t, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            u,
            c = re.css(e, "position"),
            d = re(e),
            p = {};
          "static" === c && (e.style.position = "relative"),
            (a = d.offset()),
            (r = re.css(e, "top")),
            (l = re.css(e, "left")),
            (u =
              ("absolute" === c || "fixed" === c) &&
              (r + l).indexOf("auto") > -1),
            u
              ? ((i = d.position()), (s = i.top), (o = i.left))
              : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
            re.isFunction(t) && (t = t.call(e, n, re.extend({}, a))),
            null != t.top && (p.top = t.top - a.top + s),
            null != t.left && (p.left = t.left - a.left + o),
            "using" in t ? t.using.call(e, p) : d.css(p);
        },
      }),
      re.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  re.offset.setOffset(this, e, t);
                });
          var t,
            n,
            i = this[0],
            o = { top: 0, left: 0 },
            r = i && i.ownerDocument;
          return r
            ? ((t = r.documentElement),
              re.contains(t, i)
                ? ((o = i.getBoundingClientRect()),
                  (n = Y(r)),
                  {
                    top: o.top + n.pageYOffset - t.clientTop,
                    left: o.left + n.pageXOffset - t.clientLeft,
                  })
                : o)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n = this[0],
              i = { top: 0, left: 0 };
            return (
              "fixed" === re.css(n, "position")
                ? (t = n.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  re.nodeName(e[0], "html") || (i = e.offset()),
                  (i.top += re.css(e[0], "borderTopWidth", !0)),
                  (i.left += re.css(e[0], "borderLeftWidth", !0))),
              {
                top: t.top - i.top - re.css(n, "marginTop", !0),
                left: t.left - i.left - re.css(n, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === re.css(e, "position");

            )
              e = e.offsetParent;
            return e || Ze;
          });
        },
      }),
      re.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, t) {
          var n = "pageYOffset" === t;
          re.fn[e] = function (i) {
            return Te(
              this,
              function (e, i, o) {
                var r = Y(e);
                return void 0 === o
                  ? r
                    ? r[t]
                    : e[i]
                  : void (r
                      ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
                      : (e[i] = o));
              },
              e,
              i,
              arguments.length
            );
          };
        }
      ),
      re.each(["top", "left"], function (e, t) {
        re.cssHooks[t] = $(ie.pixelPosition, function (e, n) {
          return n
            ? ((n = E(e, t)), Ge.test(n) ? re(e).position()[t] + "px" : n)
            : void 0;
        });
      }),
      re.each({ Height: "height", Width: "width" }, function (e, t) {
        re.each(
          { padding: "inner" + e, content: t, "": "outer" + e },
          function (n, i) {
            re.fn[i] = function (i, o) {
              var r = arguments.length && (n || "boolean" != typeof i),
                s = n || (i === !0 || o === !0 ? "margin" : "border");
              return Te(
                this,
                function (t, n, i) {
                  var o;
                  return re.isWindow(t)
                    ? t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                    ? ((o = t.documentElement),
                      Math.max(
                        t.body["scroll" + e],
                        o["scroll" + e],
                        t.body["offset" + e],
                        o["offset" + e],
                        o["client" + e]
                      ))
                    : void 0 === i
                    ? re.css(t, n, s)
                    : re.style(t, n, i, s);
                },
                t,
                r ? i : void 0,
                r,
                null
              );
            };
          }
        );
      }),
      re.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        size: function () {
          return this.length;
        },
      }),
      (re.fn.andSelf = re.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return re;
        });
    var It = e.jQuery,
      Ft = e.$;
    return (
      (re.noConflict = function (t) {
        return (
          e.$ === re && (e.$ = Ft), t && e.jQuery === re && (e.jQuery = It), re
        );
      }),
      t || (e.jQuery = e.$ = re),
      re
    );
  })
  /*!
   * jquery.zoom.min.js
   */,
  /*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
  (function (e) {
    var t = {
      url: !1,
      callback: !1,
      target: !1,
      duration: 120,
      on: "mouseover",
      touch: !0,
      onZoomIn: !1,
      onZoomOut: !1,
      magnify: 1,
    };
    (e.zoom = function (t, n, i, o) {
      var r,
        s,
        a,
        l,
        u,
        c,
        d,
        p = e(t),
        f = p.css("position"),
        h = e(n);
      return (
        (t.style.position = /(absolute|fixed)/.test(f) ? f : "relative"),
        (t.style.overflow = "hidden"),
        (i.style.width = i.style.height = ""),
        e(i)
          .addClass("zoomImg")
          .css({
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            width: i.width * o,
            height: i.height * o,
            border: "none",
            maxWidth: "none",
            maxHeight: "none",
          })
          .appendTo(t),
        {
          init: function () {
            (s = p.outerWidth()),
              (r = p.outerHeight()),
              n === t
                ? ((l = s), (a = r))
                : ((l = h.outerWidth()), (a = h.outerHeight())),
              (u = (i.width - s) / l),
              (c = (i.height - r) / a),
              (d = h.offset());
          },
          move: function (e) {
            var t = e.pageX - d.left,
              n = e.pageY - d.top;
            (n = Math.max(Math.min(n, a), 0)),
              (t = Math.max(Math.min(t, l), 0)),
              (i.style.left = t * -u + "px"),
              (i.style.top = n * -c + "px");
          },
        }
      );
    }),
      (e.fn.zoom = function (n) {
        return this.each(function () {
          var i = e.extend({}, t, n || {}),
            o = (i.target && e(i.target)[0]) || this,
            r = this,
            s = e(r),
            a = document.createElement("img"),
            l = e(a),
            u = "mousemove.zoom",
            c = !1,
            d = !1;
          if (!i.url) {
            var p = r.querySelector("img");
            if (
              (p &&
                (i.url = p.getAttribute("data-src") || p.currentSrc || p.src),
              !i.url)
            )
              return;
          }
          s.one(
            "zoom.destroy",
            function (e, t) {
              s.off(".zoom"),
                (o.style.position = e),
                (o.style.overflow = t),
                (a.onload = null),
                l.remove();
            }.bind(this, o.style.position, o.style.overflow)
          ),
            (a.onload = function () {
              function t(t) {
                p.init(),
                  p.move(t),
                  l
                    .stop()
                    .fadeTo(
                      e.support.opacity ? i.duration : 0,
                      1,
                      !!e.isFunction(i.onZoomIn) && i.onZoomIn.call(a)
                    );
              }
              function n() {
                l.stop().fadeTo(
                  i.duration,
                  0,
                  !!e.isFunction(i.onZoomOut) && i.onZoomOut.call(a)
                );
              }
              var p = e.zoom(o, r, a, i.magnify);
              "grab" === i.on
                ? s.on("mousedown.zoom", function (i) {
                    1 === i.which &&
                      (e(document).one("mouseup.zoom", function () {
                        n(), e(document).off(u, p.move);
                      }),
                      t(i),
                      e(document).on(u, p.move),
                      i.preventDefault());
                  })
                : "click" === i.on
                ? s.on("click.zoom", function (i) {
                    return c
                      ? void 0
                      : ((c = !0),
                        t(i),
                        e(document).on(u, p.move),
                        e(document).one("click.zoom", function () {
                          n(), (c = !1), e(document).off(u, p.move);
                        }),
                        !1);
                  })
                : "toggle" === i.on
                ? s.on("click.zoom", function (e) {
                    c ? n() : t(e), (c = !c);
                  })
                : "mouseover" === i.on &&
                  (p.init(),
                  s
                    .on("mouseenter.zoom", t)
                    .on("mouseleave.zoom", n)
                    .on(u, p.move)),
                i.touch &&
                  s
                    .on("touchstart.zoom", function (e) {
                      e.preventDefault(),
                        d
                          ? ((d = !1), n())
                          : ((d = !0),
                            t(
                              e.originalEvent.touches[0] ||
                                e.originalEvent.changedTouches[0]
                            ));
                    })
                    .on("touchmove.zoom", function (e) {
                      e.preventDefault(),
                        p.move(
                          e.originalEvent.touches[0] ||
                            e.originalEvent.changedTouches[0]
                        );
                    })
                    .on("touchend.zoom", function (e) {
                      e.preventDefault(), d && ((d = !1), n());
                    }),
                e.isFunction(i.callback) && i.callback.call(a);
            }),
            a.setAttribute("role", "presentation"),
            (a.alt = ""),
            (a.src = i.url);
        });
      }),
      (e.fn.zoom.defaults = t);
  })(window.jQuery),
  function () {
    function e(e, t) {
      for (var n = -1, i = t.length, o = e.length; ++n < i; ) e[o + n] = t[n];
      return e;
    }
    function t(e, t, n) {
      for (var i = -1, o = e.length; ++i < o; ) {
        var r = e[i],
          s = t(r);
        if (null != s && (a === le ? s === s : n(s, a)))
          var a = s,
            l = r;
      }
      return l;
    }
    function n(e, t, n) {
      var i;
      return (
        n(e, function (e, n, o) {
          return t(e, n, o) ? ((i = e), !1) : void 0;
        }),
        i
      );
    }
    function i(e, t, n, i, o) {
      return (
        o(e, function (e, o, r) {
          n = i ? ((i = !1), e) : t(n, e, o, r);
        }),
        n
      );
    }
    function o(e, t) {
      return T(t, function (t) {
        return e[t];
      });
    }
    function r(e) {
      return e && e.Object === Object ? e : null;
    }
    function s(e) {
      return fe[e];
    }
    function a(e) {
      var t = !1;
      if (null != e && "function" != typeof e.toString)
        try {
          t = !!(e + "");
        } catch (e) {}
      return t;
    }
    function l(e, t) {
      return (
        (e = "number" == typeof e || pe.test(e) ? +e : -1),
        e > -1 && 0 == e % 1 && (null == t ? 9007199254740991 : t) > e
      );
    }
    function u(e) {
      if (Z(e) && !Re(e)) {
        if (e instanceof c) return e;
        if (Se.call(e, "__wrapped__")) {
          var t = new c(e.__wrapped__, e.__chain__);
          return (t.__actions__ = A(e.__actions__)), t;
        }
      }
      return new c(e);
    }
    function c(e, t) {
      (this.__wrapped__ = e), (this.__actions__ = []), (this.__chain__ = !!t);
    }
    function d(e, t, n, i) {
      var o;
      return (
        (o = e === le) ||
          ((o = Te[n]),
          (o = (e === o || (e !== e && o !== o)) && !Se.call(i, n))),
        o ? t : e
      );
    }
    function p(e) {
      return J(e) ? De(e) : {};
    }
    function f(e, t, n) {
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return setTimeout(function () {
        e.apply(le, n);
      }, t);
    }
    function h(e, t) {
      var n = !0;
      return (
        Le(e, function (e, i, o) {
          return (n = !!t(e, i, o));
        }),
        n
      );
    }
    function v(e, t) {
      var n = [];
      return (
        Le(e, function (e, i, o) {
          t(e, i, o) && n.push(e);
        }),
        n
      );
    }
    function g(t, n, i, o) {
      o || (o = []);
      for (var r = -1, s = t.length; ++r < s; ) {
        var a = t[r];
        n > 0 && Z(a) && V(a) && (i || Re(a) || Y(a))
          ? n > 1
            ? g(a, n - 1, i, o)
            : e(o, a)
          : i || (o[o.length] = a);
      }
      return o;
    }
    function m(e, t) {
      return e && qe(e, t, ie);
    }
    function y(e, t) {
      return v(t, function (t) {
        return G(e[t]);
      });
    }
    function w(e, t, n, i, o) {
      return (
        e === t ||
        (null == e || null == t || (!J(e) && !Z(t))
          ? e !== e && t !== t
          : b(e, t, w, n, i, o))
      );
    }
    function b(e, t, n, i, o, r) {
      var s = Re(e),
        l = Re(t),
        u = "[object Array]",
        c = "[object Array]";
      s ||
        ((u = Ee.call(e)),
        "[object Arguments]" == u && (u = "[object Object]")),
        l ||
          ((c = Ee.call(t)),
          "[object Arguments]" == c && (c = "[object Object]"));
      var d = "[object Object]" == u && !a(e),
        l = "[object Object]" == c && !a(t);
      return !(c = u == c) || s || d
        ? 2 & o ||
          ((u = d && Se.call(e, "__wrapped__")),
          (l = l && Se.call(t, "__wrapped__")),
          !u && !l)
          ? !!c &&
            (r || (r = []),
            (u = M(r, function (t) {
              return t[0] === e;
            })) && u[1]
              ? u[1] == t
              : (r.push([e, t]),
                (t = (s ? L : _)(e, t, n, i, o, r)),
                r.pop(),
                t))
          : n(u ? e.value() : e, l ? t.value() : t, i, o, r)
        : q(e, t, u);
    }
    function x(e) {
      var t = typeof e;
      return "function" == t ? e : null == e ? se : ("object" == t ? S : E)(e);
    }
    function k(e) {
      e = null == e ? e : Object(e);
      var t,
        n = [];
      for (t in e) n.push(t);
      return n;
    }
    function T(e, t) {
      var n = -1,
        i = V(e) ? Array(e.length) : [];
      return (
        Le(e, function (e, o, r) {
          i[++n] = t(e, o, r);
        }),
        i
      );
    }
    function S(e) {
      var t = ie(e);
      return function (n) {
        var i = t.length;
        if (null == n) return !i;
        for (n = Object(n); i--; ) {
          var o = t[i];
          if (!(o in n && w(e[o], n[o], le, 3))) return !1;
        }
        return !0;
      };
    }
    function C(e, t) {
      return (
        (e = Object(e)),
        W(
          t,
          function (t, n) {
            return n in e && (t[n] = e[n]), t;
          },
          {}
        )
      );
    }
    function E(e) {
      return function (t) {
        return null == t ? le : t[e];
      };
    }
    function $(e, t, n) {
      var i = -1,
        o = e.length;
      for (
        0 > t && (t = -t > o ? 0 : o + t),
          n = n > o ? o : n,
          0 > n && (n += o),
          o = t > n ? 0 : (n - t) >>> 0,
          t >>>= 0,
          n = Array(o);
        ++i < o;

      )
        n[i] = e[i + t];
      return n;
    }
    function A(e) {
      return $(e, 0, e.length);
    }
    function j(e, t) {
      var n;
      return (
        Le(e, function (e, i, o) {
          return (n = t(e, i, o)), !n;
        }),
        !!n
      );
    }
    function D(t, n) {
      return W(
        n,
        function (t, n) {
          return n.func.apply(n.thisArg, e([t], n.args));
        },
        t
      );
    }
    function N(e, t, n, i) {
      n || (n = {});
      for (var o = -1, r = t.length; ++o < r; ) {
        var s = t[o],
          a = i ? i(n[s], e[s], s, n, e) : e[s],
          l = n,
          u = l[s];
        (Se.call(l, s) &&
          (u === a || (u !== u && a !== a)) &&
          (a !== le || s in l)) ||
          (l[s] = a);
      }
      return n;
    }
    function O(e) {
      return U(function (t, n) {
        var i = -1,
          o = n.length,
          r = o > 1 ? n[o - 1] : le,
          r = "function" == typeof r ? (o--, r) : le;
        for (t = Object(t); ++i < o; ) {
          var s = n[i];
          s && e(t, s, i, r);
        }
        return t;
      });
    }
    function H(e) {
      return function () {
        var t = arguments,
          n = p(e.prototype),
          t = e.apply(n, t);
        return J(t) ? t : n;
      };
    }
    function P(e, t, n) {
      function i() {
        for (
          var r = -1,
            s = arguments.length,
            a = -1,
            l = n.length,
            u = Array(l + s),
            c = this && this !== xe && this instanceof i ? o : e;
          ++a < l;

        )
          u[a] = n[a];
        for (; s--; ) u[a++] = arguments[++r];
        return c.apply(t, u);
      }
      if ("function" != typeof e) throw new TypeError("Expected a function");
      var o = H(e);
      return i;
    }
    function L(e, t, n, i, o, r) {
      var s = -1,
        a = 1 & o,
        l = e.length,
        u = t.length;
      if (l != u && !(2 & o && u > l)) return !1;
      for (u = !0; ++s < l; ) {
        var c = e[s],
          d = t[s];
        if (void 0 !== le) {
          u = !1;
          break;
        }
        if (a) {
          if (
            !j(t, function (e) {
              return c === e || n(c, e, i, o, r);
            })
          ) {
            u = !1;
            break;
          }
        } else if (c !== d && !n(c, d, i, o, r)) {
          u = !1;
          break;
        }
      }
      return u;
    }
    function q(e, t, n) {
      switch (n) {
        case "[object Boolean]":
        case "[object Date]":
          return +e == +t;
        case "[object Error]":
          return e.name == t.name && e.message == t.message;
        case "[object Number]":
          return e != +e ? t != +t : e == +t;
        case "[object RegExp]":
        case "[object String]":
          return e == t + "";
      }
      return !1;
    }
    function _(e, t, n, i, o, r) {
      var s = 2 & o,
        a = ie(e),
        l = a.length,
        u = ie(t).length;
      if (l != u && !s) return !1;
      for (var c = l; c--; ) {
        var d = a[c];
        if (!(s ? d in t : Se.call(t, d))) return !1;
      }
      for (u = !0; ++c < l; ) {
        var d = a[c],
          p = e[d],
          f = t[d];
        if (void 0 !== le || (p !== f && !n(p, f, i, o, r))) {
          u = !1;
          break;
        }
        s || (s = "constructor" == d);
      }
      return (
        u &&
          !s &&
          ((n = e.constructor),
          (i = t.constructor),
          n != i &&
            "constructor" in e &&
            "constructor" in t &&
            !(
              "function" == typeof n &&
              n instanceof n &&
              "function" == typeof i &&
              i instanceof i
            ) &&
            (u = !1)),
        u
      );
    }
    function z(e) {
      var t = e ? e.length : le;
      if (Q(t) && (Re(e) || ee(e) || Y(e))) {
        e = String;
        for (var n = -1, i = Array(t); ++n < t; ) i[n] = e(n);
        t = i;
      } else t = null;
      return t;
    }
    function I(e) {
      var t = e && e.constructor,
        t = (G(t) && t.prototype) || Te;
      return e === t;
    }
    function F(e) {
      return e ? e[0] : le;
    }
    function M(e, t) {
      return n(e, x(t), Le);
    }
    function R(e, t) {
      return Le(e, "function" == typeof t ? t : se);
    }
    function W(e, t, n) {
      return i(e, x(t), n, 3 > arguments.length, Le);
    }
    function B(e, t) {
      var n;
      if ("function" != typeof t) throw new TypeError("Expected a function");
      return (
        (e = We(e)),
        function () {
          return (
            0 < --e && (n = t.apply(this, arguments)), 1 >= e && (t = le), n
          );
        }
      );
    }
    function U(e) {
      var t;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        (t = Pe(t === le ? e.length - 1 : We(t), 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Pe(n.length - t, 0), r = Array(o);
            ++i < o;

          )
            r[i] = n[t + i];
          for (o = Array(t + 1), i = -1; ++i < t; ) o[i] = n[i];
          return (o[t] = r), e.apply(this, o);
        }
      );
    }
    function X(e, t) {
      return e > t;
    }
    function Y(e) {
      return (
        Z(e) &&
        V(e) &&
        Se.call(e, "callee") &&
        (!Ne.call(e, "callee") || "[object Arguments]" == Ee.call(e))
      );
    }
    function V(e) {
      return null != e && !("function" == typeof e && G(e)) && Q(_e(e));
    }
    function G(e) {
      return (
        (e = J(e) ? Ee.call(e) : ""),
        "[object Function]" == e || "[object GeneratorFunction]" == e
      );
    }
    function Q(e) {
      return (
        "number" == typeof e && e > -1 && 0 == e % 1 && 9007199254740991 >= e
      );
    }
    function J(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t);
    }
    function Z(e) {
      return !!e && "object" == typeof e;
    }
    function K(e) {
      return "number" == typeof e || (Z(e) && "[object Number]" == Ee.call(e));
    }
    function ee(e) {
      return (
        "string" == typeof e ||
        (!Re(e) && Z(e) && "[object String]" == Ee.call(e))
      );
    }
    function te(e, t) {
      return t > e;
    }
    function ne(e) {
      return "string" == typeof e ? e : null == e ? "" : e + "";
    }
    function ie(e) {
      var t = I(e);
      if (!t && !V(e)) return He(Object(e));
      var n,
        i = z(e),
        o = !!i,
        i = i || [],
        r = i.length;
      for (n in e)
        !Se.call(e, n) ||
          (o && ("length" == n || l(n, r))) ||
          (t && "constructor" == n) ||
          i.push(n);
      return i;
    }
    function oe(e) {
      for (
        var t = -1,
          n = I(e),
          i = k(e),
          o = i.length,
          r = z(e),
          s = !!r,
          r = r || [],
          a = r.length;
        ++t < o;

      ) {
        var u = i[t];
        (s && ("length" == u || l(u, a))) ||
          ("constructor" == u && (n || !Se.call(e, u))) ||
          r.push(u);
      }
      return r;
    }
    function re(e) {
      return e ? o(e, ie(e)) : [];
    }
    function se(e) {
      return e;
    }
    function ae(t, n, i) {
      var o = ie(n),
        r = y(n, o);
      null != i ||
        (J(n) && (r.length || !o.length)) ||
        ((i = n), (n = t), (t = this), (r = y(n, ie(n))));
      var s = !(J(i) && "chain" in i) || i.chain,
        a = G(t);
      return (
        Le(r, function (i) {
          var o = n[i];
          (t[i] = o),
            a &&
              (t.prototype[i] = function () {
                var n = this.__chain__;
                if (s || n) {
                  var i = t(this.__wrapped__);
                  return (
                    (i.__actions__ = A(this.__actions__)).push({
                      func: o,
                      args: arguments,
                      thisArg: t,
                    }),
                    (i.__chain__ = n),
                    i
                  );
                }
                return o.apply(t, e([this.value()], arguments));
              });
        }),
        t
      );
    }
    var le,
      ue = 1 / 0,
      ce = /[&<>"'`]/g,
      de = RegExp(ce.source),
      pe = /^(?:0|[1-9]\d*)$/,
      fe = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "`": "&#96;",
      },
      he = { function: !0, object: !0 },
      ve = he[typeof exports] && exports && !exports.nodeType ? exports : le,
      ge = he[typeof module] && module && !module.nodeType ? module : le,
      me = ge && ge.exports === ve ? ve : le,
      ye = r(he[typeof self] && self),
      we = r(he[typeof window] && window),
      be = r(he[typeof this] && this),
      xe =
        r(ve && ge && "object" == typeof global && global) ||
        (we !== (be && be.window) && we) ||
        ye ||
        be ||
        Function("return this")(),
      ke = Array.prototype,
      Te = Object.prototype,
      Se = Te.hasOwnProperty,
      Ce = 0,
      Ee = Te.toString,
      $e = xe._,
      Ae = xe.Reflect,
      je = Ae ? Ae.f : le,
      De = Object.create,
      Ne = Te.propertyIsEnumerable,
      Oe = xe.isFinite,
      He = Object.keys,
      Pe = Math.max,
      Le = (function (e, t) {
        return function (n, i) {
          if (null == n) return n;
          if (!V(n)) return e(n, i);
          for (
            var o = n.length, r = t ? o : -1, s = Object(n);
            (t ? r-- : ++r < o) && !1 !== i(s[r], r, s);

          );
          return n;
        };
      })(m),
      qe = (function (e) {
        return function (t, n, i) {
          var o = -1,
            r = Object(t);
          i = i(t);
          for (var s = i.length; s--; ) {
            var a = i[e ? s : ++o];
            if (!1 === n(r[a], a, r)) break;
          }
          return t;
        };
      })();
    je &&
      !Ne.call({ valueOf: 1 }, "valueOf") &&
      (k = function (e) {
        e = je(e);
        for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
        return n;
      });
    var _e = E("length"),
      ze = U(function (t, n) {
        return (
          Re(t) || (t = null == t ? [] : [Object(t)]), g(n, 1), e(A(t), re)
        );
      }),
      Ie = U(function (e, t, n) {
        return P(e, t, n);
      }),
      Fe = U(function (e, t) {
        return f(e, 1, t);
      }),
      Me = U(function (e, t, n) {
        return f(e, Be(t) || 0, n);
      }),
      Re = Array.isArray,
      We = Number,
      Be = Number,
      Ue = O(function (e, t) {
        N(t, ie(t), e);
      }),
      Xe = O(function (e, t) {
        N(t, oe(t), e);
      }),
      Ye = O(function (e, t, n, i) {
        N(t, oe(t), e, i);
      }),
      Ve = U(function (e) {
        return e.push(le, d), Ye.apply(le, e);
      }),
      Ge = U(function (e, t) {
        return null == e ? {} : C(e, g(t, 1));
      }),
      Qe = x;
    (c.prototype = p(u.prototype)),
      (c.prototype.constructor = c),
      (u.assignIn = Xe),
      (u.before = B),
      (u.bind = Ie),
      (u.chain = function (e) {
        return (e = u(e)), (e.__chain__ = !0), e;
      }),
      (u.compact = function (e) {
        return v(e, Boolean);
      }),
      (u.concat = ze),
      (u.create = function (e, t) {
        var n = p(e);
        return t ? Ue(n, t) : n;
      }),
      (u.defaults = Ve),
      (u.defer = Fe),
      (u.delay = Me),
      (u.filter = function (e, t) {
        return v(e, x(t));
      }),
      (u.flatten = function (e) {
        return e && e.length ? g(e, 1) : [];
      }),
      (u.flattenDeep = function (e) {
        return e && e.length ? g(e, ue) : [];
      }),
      (u.iteratee = Qe),
      (u.keys = ie),
      (u.map = function (e, t) {
        return T(e, x(t));
      }),
      (u.matches = function (e) {
        return S(Ue({}, e));
      }),
      (u.mixin = ae),
      (u.negate = function (e) {
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return function () {
          return !e.apply(this, arguments);
        };
      }),
      (u.once = function (e) {
        return B(2, e);
      }),
      (u.pick = Ge),
      (u.slice = function (e, t, n) {
        var i = e ? e.length : 0;
        return (n = n === le ? i : +n), i ? $(e, null == t ? 0 : +t, n) : [];
      }),
      (u.sortBy = function (e, t) {
        var n = 0;
        return (
          (t = x(t)),
          T(
            T(e, function (e, i, o) {
              return { c: e, b: n++, a: t(e, i, o) };
            }).sort(function (e, t) {
              var n;
              e: {
                n = e.a;
                var i = t.a;
                if (n !== i) {
                  var o = null === n,
                    r = n === le,
                    s = n === n,
                    a = null === i,
                    l = i === le,
                    u = i === i;
                  if ((n > i && !a) || !s || (o && !l && u) || (r && u)) {
                    n = 1;
                    break e;
                  }
                  if ((i > n && !o) || !u || (a && !r && s) || (l && s)) {
                    n = -1;
                    break e;
                  }
                }
                n = 0;
              }
              return n || e.b - t.b;
            }),
            E("c")
          )
        );
      }),
      (u.tap = function (e, t) {
        return t(e), e;
      }),
      (u.thru = function (e, t) {
        return t(e);
      }),
      (u.toArray = function (e) {
        return V(e) ? (e.length ? A(e) : []) : re(e);
      }),
      (u.values = re),
      (u.extend = Xe),
      ae(u, u),
      (u.clone = function (e) {
        return J(e) ? (Re(e) ? A(e) : N(e, ie(e))) : e;
      }),
      (u.escape = function (e) {
        return (e = ne(e)) && de.test(e) ? e.replace(ce, s) : e;
      }),
      (u.every = function (e, t, n) {
        return (t = n ? le : t), h(e, x(t));
      }),
      (u.find = M),
      (u.forEach = R),
      (u.has = function (e, t) {
        return null != e && Se.call(e, t);
      }),
      (u.head = F),
      (u.identity = se),
      (u.indexOf = function (e, t, n) {
        var i = e ? e.length : 0;
        (n = "number" == typeof n ? (0 > n ? Pe(i + n, 0) : n) : 0),
          (n = (n || 0) - 1);
        for (var o = t === t; ++n < i; ) {
          var r = e[n];
          if (o ? r === t : r !== r) return n;
        }
        return -1;
      }),
      (u.isArguments = Y),
      (u.isArray = Re),
      (u.isBoolean = function (e) {
        return (
          !0 === e || !1 === e || (Z(e) && "[object Boolean]" == Ee.call(e))
        );
      }),
      (u.isDate = function (e) {
        return Z(e) && "[object Date]" == Ee.call(e);
      }),
      (u.isEmpty = function (e) {
        if (V(e) && (Re(e) || ee(e) || G(e.splice) || Y(e))) return !e.length;
        for (var t in e) if (Se.call(e, t)) return !1;
        return !0;
      }),
      (u.isEqual = function (e, t) {
        return w(e, t);
      }),
      (u.isFinite = function (e) {
        return "number" == typeof e && Oe(e);
      }),
      (u.isFunction = G),
      (u.isNaN = function (e) {
        return K(e) && e != +e;
      }),
      (u.isNull = function (e) {
        return null === e;
      }),
      (u.isNumber = K),
      (u.isObject = J),
      (u.isRegExp = function (e) {
        return J(e) && "[object RegExp]" == Ee.call(e);
      }),
      (u.isString = ee),
      (u.isUndefined = function (e) {
        return e === le;
      }),
      (u.last = function (e) {
        var t = e ? e.length : 0;
        return t ? e[t - 1] : le;
      }),
      (u.max = function (e) {
        return e && e.length ? t(e, se, X) : le;
      }),
      (u.min = function (e) {
        return e && e.length ? t(e, se, te) : le;
      }),
      (u.noConflict = function () {
        return xe._ === this && (xe._ = $e), this;
      }),
      (u.noop = function () {}),
      (u.reduce = W),
      (u.result = function (e, t, n) {
        return (
          (t = null == e ? le : e[t]), t === le && (t = n), G(t) ? t.call(e) : t
        );
      }),
      (u.size = function (e) {
        return null == e ? 0 : ((e = V(e) ? e : ie(e)), e.length);
      }),
      (u.some = function (e, t, n) {
        return (t = n ? le : t), j(e, x(t));
      }),
      (u.uniqueId = function (e) {
        var t = ++Ce;
        return ne(e) + t;
      }),
      (u.each = R),
      (u.first = F),
      ae(
        u,
        (function () {
          var e = {};
          return (
            m(u, function (t, n) {
              Se.call(u.prototype, n) || (e[n] = t);
            }),
            e
          );
        })(),
        { chain: !1 }
      ),
      (u.VERSION = "4.5.1"),
      Le(
        "pop join replace reverse split push shift sort splice unshift".split(
          " "
        ),
        function (e) {
          var t = (/^(?:replace|split)$/.test(e) ? String.prototype : ke)[e],
            n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
            i = /^(?:pop|join|replace|shift)$/.test(e);
          u.prototype[e] = function () {
            var e = arguments;
            return i && !this.__chain__
              ? t.apply(this.value(), e)
              : this[n](function (n) {
                  return t.apply(n, e);
                });
          };
        }
      ),
      (u.prototype.toJSON =
        u.prototype.valueOf =
        u.prototype.value =
          function () {
            return D(this.__wrapped__, this.__actions__);
          }),
      ((we || ye || {})._ = u),
      "function" == typeof define && "object" == typeof define.amd && define.amd
        ? define(function () {
            return u;
          })
        : ve && ge
        ? (me && ((ge.exports = u)._ = u), (ve._ = u))
        : (xe._ = u);
  }.call(this)
  /*!
   * mobile-sniff.min.js
   */,
  !(function () {
    window.mobileCheck = function () {
      var e = !1;
      return (
        (function (t) {
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            t
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              t.substr(0, 4)
            )) &&
            (e = !0);
        })(navigator.userAgent || navigator.vendor || window.opera),
        e
      );
    };
  })()
  /*!
   * modernizr.min.js
   */,
  /*! modernizr 3.3.1 (Custom Build) | MIT *
   * https://modernizr.com/download/?-csstransforms-flexbox-svg-setclasses !*/
  !(function (e, t, n) {
    function i(e, t) {
      return typeof e === t;
    }
    function o() {
      var e, t, n, o, r, s, a;
      for (var l in w)
        if (w.hasOwnProperty(l)) {
          if (
            ((e = []),
            (t = w[l]),
            t.name &&
              (e.push(t.name.toLowerCase()),
              t.options && t.options.aliases && t.options.aliases.length))
          )
            for (n = 0; n < t.options.aliases.length; n++)
              e.push(t.options.aliases[n].toLowerCase());
          for (
            o = i(t.fn, "function") ? t.fn() : t.fn, r = 0;
            r < e.length;
            r++
          )
            (s = e[r]),
              (a = s.split(".")),
              1 === a.length
                ? (x[a[0]] = o)
                : (!x[a[0]] ||
                    x[a[0]] instanceof Boolean ||
                    (x[a[0]] = new Boolean(x[a[0]])),
                  (x[a[0]][a[1]] = o)),
              y.push((o ? "" : "no-") + a.join("-"));
        }
    }
    function r(e) {
      var t = k.className,
        n = x._config.classPrefix || "";
      if ((T && (t = t.baseVal), x._config.enableJSClass)) {
        var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
        t = t.replace(i, "$1" + n + "js$2");
      }
      x._config.enableClasses &&
        ((t += " " + n + e.join(" " + n)),
        T ? (k.className.baseVal = t) : (k.className = t));
    }
    function s(e, t) {
      return !!~("" + e).indexOf(t);
    }
    function a() {
      return "function" != typeof t.createElement
        ? t.createElement(arguments[0])
        : T
        ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
        : t.createElement.apply(t, arguments);
    }
    function l(e) {
      return e
        .replace(/([a-z])-([a-z])/g, function (e, t, n) {
          return t + n.toUpperCase();
        })
        .replace(/^-/, "");
    }
    function u(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }
    function c(e, t, n) {
      var o;
      for (var r in e)
        if (e[r] in t)
          return n === !1
            ? e[r]
            : ((o = t[e[r]]), i(o, "function") ? u(o, n || t) : o);
      return !1;
    }
    function d(e) {
      return e
        .replace(/([A-Z])/g, function (e, t) {
          return "-" + t.toLowerCase();
        })
        .replace(/^ms-/, "-ms-");
    }
    function p() {
      var e = t.body;
      return e || ((e = a(T ? "svg" : "body")), (e.fake = !0)), e;
    }
    function f(e, n, i, o) {
      var r,
        s,
        l,
        u,
        c = "modernizr",
        d = a("div"),
        f = p();
      if (parseInt(i, 10))
        for (; i--; )
          (l = a("div")), (l.id = o ? o[i] : c + (i + 1)), d.appendChild(l);
      return (
        (r = a("style")),
        (r.type = "text/css"),
        (r.id = "s" + c),
        (f.fake ? f : d).appendChild(r),
        f.appendChild(d),
        r.styleSheet
          ? (r.styleSheet.cssText = e)
          : r.appendChild(t.createTextNode(e)),
        (d.id = c),
        f.fake &&
          ((f.style.background = ""),
          (f.style.overflow = "hidden"),
          (u = k.style.overflow),
          (k.style.overflow = "hidden"),
          k.appendChild(f)),
        (s = n(d, e)),
        f.fake
          ? (f.parentNode.removeChild(f),
            (k.style.overflow = u),
            k.offsetHeight)
          : d.parentNode.removeChild(d),
        !!s
      );
    }
    function h(t, i) {
      var o = t.length;
      if ("CSS" in e && "supports" in e.CSS) {
        for (; o--; ) if (e.CSS.supports(d(t[o]), i)) return !0;
        return !1;
      }
      if ("CSSSupportsRule" in e) {
        for (var r = []; o--; ) r.push("(" + d(t[o]) + ":" + i + ")");
        return (
          (r = r.join(" or ")),
          f(
            "@supports (" + r + ") { #modernizr { position: absolute; } }",
            function (e) {
              return "absolute" == getComputedStyle(e, null).position;
            }
          )
        );
      }
      return n;
    }
    function v(e, t, o, r) {
      function u() {
        d && (delete A.style, delete A.modElem);
      }
      if (((r = !i(r, "undefined") && r), !i(o, "undefined"))) {
        var c = h(e, o);
        if (!i(c, "undefined")) return c;
      }
      for (
        var d, p, f, v, g, m = ["modernizr", "tspan", "samp"];
        !A.style && m.length;

      )
        (d = !0), (A.modElem = a(m.shift())), (A.style = A.modElem.style);
      for (f = e.length, p = 0; f > p; p++)
        if (
          ((v = e[p]),
          (g = A.style[v]),
          s(v, "-") && (v = l(v)),
          A.style[v] !== n)
        ) {
          if (r || i(o, "undefined")) return u(), "pfx" != t || v;
          try {
            A.style[v] = o;
          } catch (e) {}
          if (A.style[v] != g) return u(), "pfx" != t || v;
        }
      return u(), !1;
    }
    function g(e, t, n, o, r) {
      var s = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + C.join(s + " ") + s).split(" ");
      return i(t, "string") || i(t, "undefined")
        ? v(a, t, o, r)
        : ((a = (e + " " + E.join(s + " ") + s).split(" ")), c(a, t, n));
    }
    function m(e, t, i) {
      return g(e, n, n, t, i);
    }
    var y = [],
      w = [],
      b = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0,
        },
        _q: [],
        on: function (e, t) {
          var n = this;
          setTimeout(function () {
            t(n[e]);
          }, 0);
        },
        addTest: function (e, t, n) {
          w.push({ name: e, fn: t, options: n });
        },
        addAsyncTest: function (e) {
          w.push({ name: null, fn: e });
        },
      },
      x = function () {};
    (x.prototype = b),
      (x = new x()),
      x.addTest(
        "svg",
        !!t.createElementNS &&
          !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
      );
    var k = t.documentElement,
      T = "svg" === k.nodeName.toLowerCase(),
      S = "Moz O ms Webkit",
      C = b._config.usePrefixes ? S.split(" ") : [];
    b._cssomPrefixes = C;
    var E = b._config.usePrefixes ? S.toLowerCase().split(" ") : [];
    b._domPrefixes = E;
    var $ = { elem: a("modernizr") };
    x._q.push(function () {
      delete $.elem;
    });
    var A = { style: $.elem.style };
    x._q.unshift(function () {
      delete A.style;
    }),
      (b.testAllProps = g),
      (b.testAllProps = m),
      x.addTest("flexbox", m("flexBasis", "1px", !0)),
      x.addTest("csstransforms", function () {
        return (
          -1 === navigator.userAgent.indexOf("Android 2.") &&
          m("transform", "scale(1)", !0)
        );
      }),
      o(),
      r(y),
      delete b.addTest,
      delete b.addAsyncTest;
    for (var j = 0; j < x._q.length; j++) x._q[j]();
    e.Modernizr = x;
  })(window, document)
  /*!
   * prepare-transition.min.js
   */,
  /* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
  !(function (e) {
    e.fn.prepareTransition = function () {
      return this.each(function () {
        var t = e(this);
        t.one(
          "TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",
          function () {
            t.removeClass("is-transitioning");
          }
        );
        var n = [
            "transition-duration",
            "-moz-transition-duration",
            "-webkit-transition-duration",
            "-o-transition-duration",
          ],
          i = 0;
        e.each(n, function (e, n) {
          i || (i = parseFloat(t.css(n)));
        }),
          0 != i && (t.addClass("is-transitioning"), t[0].offsetWidth);
      });
    };
  })(jQuery)
  /*!
   * slick-slim.min.js
   */,
  !(function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (e) {
    "use strict";
    var t = window.Slick || {};
    (t = (function () {
      function t(t, i) {
        var o,
          r = this;
        (r.defaults = {
          accessibility: !0,
          appendArrows: e(t),
          appendDots: e(t),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button type="button" data-role="none" class="slick-prev" aria-label="Previous slide" tabindex="0" role="button">Previous slide</button>',
          nextArrow:
            '<button type="button" data-role="none" class="slick-next" aria-label="Next slide" tabindex="0" role="button">Next slide</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          cssEase: "ease",
          customPaging: function (t, n) {
            return e(
              '<button type="button" data-role="none" role="button" tabindex="0" />'
            ).text("Slide " + (n + 1));
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          initialSlide: 0,
          lazyLoad: !0,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          e.extend(r, r.initials),
          (r.activeBreakpoint = null),
          (r.animType = null),
          (r.animProp = null),
          (r.breakpoints = []),
          (r.breakpointSettings = []),
          (r.cssTransitions = !1),
          (r.focussed = !1),
          (r.interrupted = !1),
          (r.hidden = "hidden"),
          (r.paused = !0),
          (r.positionProp = null),
          (r.respondTo = null),
          (r.rowCount = 1),
          (r.shouldClick = !0),
          (r.$slider = e(t)),
          (r.$slidesCache = null),
          (r.transformType = null),
          (r.transitionType = null),
          (r.visibilityChange = "visibilitychange"),
          (r.windowWidth = 0),
          (r.windowTimer = null),
          (o = e(t).data("slick") || {}),
          (r.options = e.extend({}, r.defaults, i, o)),
          (r.currentSlide = r.options.initialSlide),
          (r.originalSettings = r.options),
          "undefined" != typeof document.mozHidden
            ? ((r.hidden = "mozHidden"),
              (r.visibilityChange = "mozvisibilitychange"))
            : "undefined" != typeof document.webkitHidden &&
              ((r.hidden = "webkitHidden"),
              (r.visibilityChange = "webkitvisibilitychange")),
          (r.autoPlay = e.proxy(r.autoPlay, r)),
          (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
          (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
          (r.changeSlide = e.proxy(r.changeSlide, r)),
          (r.clickHandler = e.proxy(r.clickHandler, r)),
          (r.selectHandler = e.proxy(r.selectHandler, r)),
          (r.setPosition = e.proxy(r.setPosition, r)),
          (r.swipeHandler = e.proxy(r.swipeHandler, r)),
          (r.dragHandler = e.proxy(r.dragHandler, r)),
          (r.keyHandler = e.proxy(r.keyHandler, r)),
          (r.instanceUid = n++),
          (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          r.init(!0);
      }
      var n = 0;
      return t;
    })()),
      (t.prototype.activateADA = function () {
        var e = this;
        e.$slides
          .add(e.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          e.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
      }),
      (t.prototype.animateSlide = function (t, n) {
        var i = {},
          o = this;
        o.options.rtl === !0 && (t = -t),
          o.transformsEnabled === !1
            ? o.$slideTrack.animate(
                { left: t },
                o.options.speed,
                o.options.easing,
                n
              )
            : o.cssTransitions === !1
            ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft),
              e({ animStart: o.currentLeft }).animate(
                { animStart: t },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function (e) {
                    (e = Math.ceil(e)),
                      (i[o.animType] = "translate(" + e + "px, 0px)"),
                      o.$slideTrack.css(i);
                  },
                  complete: function () {
                    n && n.call();
                  },
                }
              ))
            : (o.applyTransition(),
              (t = Math.ceil(t)),
              (i[o.animType] = "translate3d(" + t + "px, 0px, 0px)"),
              o.$slideTrack.css(i),
              n &&
                setTimeout(function () {
                  o.disableTransition(), n.call();
                }, o.options.speed));
      }),
      (t.prototype.getNavTarget = function () {
        var t = this,
          n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)), n;
      }),
      (t.prototype.asNavFor = function (t) {
        var n = this,
          i = n.getNavTarget();
        null !== i &&
          "object" == typeof i &&
          i.each(function () {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0);
          });
      }),
      (t.prototype.applyTransition = function (e) {
        var t = this,
          n = {};
        t.options.fade === !1
          ? (n[t.transitionType] =
              t.transformType +
              " " +
              t.options.speed +
              "ms " +
              t.options.cssEase)
          : (n[t.transitionType] =
              "opacity " + t.options.speed + "ms " + t.options.cssEase),
          t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ));
      }),
      (t.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer);
      }),
      (t.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || e.slideHandler(t);
      }),
      (t.prototype.buildArrows = function () {
        var t = this;
        t.options.arrows === !0 &&
          ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
          (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
          t.slideCount > t.options.slidesToShow
            ? (t.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.htmlExpr.test(t.options.prevArrow) &&
                t.$prevArrow.prependTo(t.options.appendArrows),
              t.htmlExpr.test(t.options.nextArrow) &&
                t.$nextArrow.appendTo(t.options.appendArrows),
              t.options.infinite !== !0 &&
                t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : t.$prevArrow
                .add(t.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (t.prototype.buildDots = function () {
        var t,
          n,
          i = this;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
          for (
            i.$slider.addClass("slick-dotted"),
              n = e("<ul />").addClass(i.options.dotsClass),
              t = 0;
            t <= i.getDotCount();
            t += 1
          )
            n.append(
              e("<li />").append(i.options.customPaging.call(this, i, t))
            );
          (i.$dots = n.appendTo(i.options.appendDots)),
            i.$dots
              .find("li")
              .first()
              .addClass("slick-active")
              .attr("aria-hidden", "false");
        }
      }),
      (t.prototype.buildOut = function () {
        var t = this;
        (t.$slides = t.$slider
          .children(t.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, n) {
            e(n)
              .attr("data-slick-index", t)
              .data("originalStyling", e(n).attr("style") || "");
          }),
          t.$slider.addClass("slick-slider"),
          (t.$slideTrack =
            0 === t.slideCount
              ? e('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack
            .wrap('<div aria-live="polite" class="slick-list"/>')
            .parent()),
          t.$slideTrack.css("opacity", 0),
          t.options.swipeToSlide === !0 && (t.options.slidesToScroll = 1),
          e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          t.options.draggable === !0 && t.$list.addClass("draggable");
      }),
      (t.prototype.buildRows = function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        if (
          ((i = document.createDocumentFragment()),
          (r = a.$slider.children()),
          a.options.rows > 1)
        ) {
          for (
            s = a.options.slidesPerRow * a.options.rows,
              o = Math.ceil(r.length / s),
              e = 0;
            e < o;
            e++
          ) {
            var l = document.createElement("div");
            for (t = 0; t < a.options.rows; t++) {
              var u = document.createElement("div");
              for (n = 0; n < a.options.slidesPerRow; n++) {
                var c = e * s + (t * a.options.slidesPerRow + n);
                r.get(c) && u.appendChild(r.get(c));
              }
              l.appendChild(u);
            }
            i.appendChild(l);
          }
          a.$slider.empty().append(i),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (t.prototype.changeSlide = function (t, n) {
        var i,
          o,
          r,
          s = this,
          a = e(t.currentTarget);
        switch (
          (a.is("a") && t.preventDefault(),
          a.is("li") || (a = a.closest("li")),
          (r = s.slideCount % s.options.slidesToScroll !== 0),
          (i = r
            ? 0
            : (s.slideCount - s.currentSlide) % s.options.slidesToScroll),
          t.data.message)
        ) {
          case "previous":
            (o =
              0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i),
              s.slideCount > s.options.slidesToShow &&
                s.slideHandler(s.currentSlide - o, !1, n);
            break;
          case "next":
            (o = 0 === i ? s.options.slidesToScroll : i),
              s.slideCount > s.options.slidesToShow &&
                s.slideHandler(s.currentSlide + o, !1, n);
            break;
          case "index":
            var l =
              0 === t.data.index
                ? 0
                : t.data.index || a.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(l), !1, n),
              a.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (t.prototype.checkNavigable = function (e) {
        var t,
          n,
          i = this;
        if (((t = i.getNavigableIndexes()), (n = 0), e > t[t.length - 1]))
          e = t[t.length - 1];
        else
          for (var o in t) {
            if (e < t[o]) {
              e = n;
              break;
            }
            n = t[o];
          }
        return e;
      }),
      (t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots &&
          null !== t.$dots &&
          e("li", t.$dots)
            .off("click.slick", t.changeSlide)
            .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
            .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
          t.$slider.off("focus.slick blur.slick"),
          t.options.arrows === !0 &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)),
          t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
          t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
          t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
          t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
          t.$list.off("click.slick", t.clickHandler),
          e(document).off(t.visibilityChange, t.visibility),
          t.cleanUpSlideEvents(),
          t.options.accessibility === !0 &&
            t.$list.off("keydown.slick", t.keyHandler),
          t.options.focusOnSelect === !0 &&
            e(t.$slideTrack).children().off("click.slick", t.selectHandler),
          e(window).off(
            "orientationchange.slick.slick-" + t.instanceUid,
            t.orientationChange
          ),
          e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
          e("[draggable!=true]", t.$slideTrack).off(
            "dragstart",
            t.preventDefault
          ),
          e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition),
          e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
          t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.cleanUpRows = function () {
        var e,
          t = this;
        t.options.rows > 1 &&
          ((e = t.$slides.children().children()),
          e.removeAttr("style"),
          t.$slider.empty().append(e));
      }),
      (t.prototype.clickHandler = function (e) {
        var t = this;
        t.shouldClick === !1 &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault());
      }),
      (t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(),
          (n.touchObject = {}),
          n.cleanUpEvents(),
          e(".slick-cloned", n.$slider).detach(),
          n.$dots && n.$dots.remove(),
          n.$prevArrow &&
            n.$prevArrow.length &&
            (n.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
          n.$nextArrow &&
            n.$nextArrow.length &&
            (n.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
          n.$slides &&
            (n.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                e(this).attr("style", e(this).data("originalStyling"));
              }),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.detach(),
            n.$list.detach(),
            n.$slider.append(n.$slides)),
          n.cleanUpRows(),
          n.$slider.removeClass("slick-slider"),
          n.$slider.removeClass("slick-initialized"),
          n.$slider.removeClass("slick-dotted"),
          (n.unslicked = !0),
          t || n.$slider.trigger("destroy", [n]);
      }),
      (t.prototype.disableTransition = function (e) {
        var t = this,
          n = {};
        (n[t.transitionType] = ""),
          t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.fadeSlide = function (e, t) {
        var n = this;
        n.cssTransitions === !1
          ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
            n.$slides
              .eq(e)
              .animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
            t &&
              setTimeout(function () {
                n.disableTransition(e), t.call();
              }, n.options.speed));
      }),
      (t.prototype.fadeSlideOut = function (e) {
        var t = this;
        t.cssTransitions === !1
          ? t.$slides
              .eq(e)
              .animate(
                { opacity: 0, zIndex: t.options.zIndex - 2 },
                t.options.speed,
                t.options.easing
              )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
      }),
      (t.prototype.filterSlides = t.prototype.slickFilter =
        function (e) {
          var t = this;
          null !== e &&
            ((t.$slidesCache = t.$slides),
            t.unload(),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slidesCache.filter(e).appendTo(t.$slideTrack),
            t.reinit());
        }),
      (t.prototype.focusHandler = function () {
        var t = this;
        t.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function () {
              t.options.pauseOnFocus &&
                ((t.focussed = i.is(":focus")), t.autoPlay());
            }, 0);
          });
      }),
      (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
        function () {
          var e = this;
          return e.currentSlide;
        }),
      (t.prototype.getDotCount = function () {
        for (var e = this, t = 0, n = 0, i = 0; t < e.slideCount; )
          ++i,
            (t = n + e.options.slidesToScroll),
            (n +=
              e.options.slidesToScroll <= e.options.slidesToShow
                ? e.options.slidesToScroll
                : e.options.slidesToShow);
        return i - 1;
      }),
      (t.prototype.getLeft = function (e) {
        var t,
          n,
          i = this,
          o = 0;
        return (
          (i.slideOffset = 0),
          (n = i.$slides.first().outerHeight(!0)),
          i.slideCount > i.options.slidesToShow &&
            ((i.slideOffset = i.slideWidth * i.options.slidesToShow * -1),
            (o = n * i.options.slidesToShow * -1)),
          i.slideCount % i.options.slidesToScroll !== 0 &&
            e + i.options.slidesToScroll > i.slideCount &&
            i.slideCount > i.options.slidesToShow &&
            (e > i.slideCount
              ? ((i.slideOffset =
                  (i.options.slidesToShow - (e - i.slideCount)) *
                  i.slideWidth *
                  -1),
                (o = (i.options.slidesToShow - (e - i.slideCount)) * n * -1))
              : ((i.slideOffset =
                  (i.slideCount % i.options.slidesToScroll) *
                  i.slideWidth *
                  -1),
                (o = (i.slideCount % i.options.slidesToScroll) * n * -1))),
          i.slideCount <= i.options.slidesToShow &&
            ((i.slideOffset = 0), (o = 0)),
          (t = e * i.slideWidth * -1 + i.slideOffset)
        );
      }),
      (t.prototype.getOption = t.prototype.slickGetOption =
        function (e) {
          var t = this;
          return t.options[e];
        }),
      (t.prototype.getNavigableIndexes = function () {
        var e,
          t = this,
          n = 0,
          i = 0,
          o = [];
        for (
          n = t.options.slidesToScroll * -1,
            i = t.options.slidesToScroll * -1,
            e = 2 * t.slideCount;
          n < e;

        )
          o.push(n),
            (n = i + t.options.slidesToScroll),
            (i +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow);
        return o;
      }),
      (t.prototype.getSlick = function () {
        return this;
      }),
      (t.prototype.getSlideCount = function () {
        var t,
          n,
          i,
          o = this;
        return (
          (i = 0),
          o.options.swipeToSlide === !0
            ? (o.$slideTrack.find(".slick-slide").each(function (t, r) {
                if (r.offsetLeft - i + e(r).outerWidth() / 2 > o.swipeLeft * -1)
                  return (n = r), !1;
              }),
              (t =
                Math.abs(e(n).attr("data-slick-index") - o.currentSlide) || 1))
            : o.options.slidesToScroll
        );
      }),
      (t.prototype.goTo = t.prototype.slickGoTo =
        function (e, t) {
          var n = this;
          n.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
        }),
      (t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") ||
          (e(n.$slider).addClass("slick-initialized"),
          n.buildRows(),
          n.buildOut(),
          n.setProps(),
          n.startLoad(),
          n.loadSlider(),
          n.initializeEvents(),
          n.updateDots(),
          n.focusHandler()),
          t && n.$slider.trigger("init", [n]),
          n.options.accessibility === !0 && n.initADA(),
          n.options.autoplay && ((n.paused = !1), n.autoPlay());
      }),
      (t.prototype.initADA = function () {
        var t,
          n,
          i,
          o = this;
        o.$slides.not(o.$slideTrack.find(".slick-cloned")).each(function (r) {
          e(this).attr("role", "option");
          var s = Math.floor(r / o.options.slidesToShow);
          o.options.dots === !0 &&
            ((n = "" + o.instanceUid + s),
            (i = n),
            t === n && (n = "" + n + r),
            e(this)
              .attr("id", "slickSlide" + n)
              .attr("role", "tabpanel")
              .attr("aria-labelledby", "slickDot" + i),
            (t = "" + o.instanceUid + s));
        }),
          null !== o.$dots &&
            o.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (t) {
                e(this).attr({
                  role: "tab",
                  "aria-selected": "false",
                  "aria-controls": "slickSlide" + o.instanceUid + t,
                  id: "slickDot" + o.instanceUid + t,
                });
              })
              .first()
              .attr("aria-selected", "true"),
          o.activateADA();
      }),
      (t.prototype.initArrowEvents = function () {
        var e = this;
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, e.changeSlide),
          e.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, e.changeSlide));
      }),
      (t.prototype.updateADA = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots.find("li").attr("aria-selected", "false"),
          e.$dots.find(".slick-active").attr("aria-selected", "true")),
          e.activateADA();
      }),
      (t.prototype.initArrowEvents = function () {
        var e = this;
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, e.changeSlide),
          e.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, e.changeSlide));
      }),
      (t.prototype.initDotEvents = function () {
        var t = this;
        t.options.dots === !0 &&
          t.slideCount > t.options.slidesToShow &&
          e("li", t.$dots).on(
            "click.slick",
            { message: "index" },
            t.changeSlide
          ),
          t.options.dots === !0 &&
            t.options.pauseOnDotsHover === !0 &&
            e("li", t.$dots)
              .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
              .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover &&
          (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
          t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
      }),
      (t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.initSlideEvents(),
          t.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on("click.slick", t.clickHandler),
          e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
          t.options.accessibility === !0 &&
            t.$list.on("keydown.slick", t.keyHandler),
          t.options.focusOnSelect === !0 &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          e(window).on(
            "orientationchange.slick.slick-" + t.instanceUid,
            e.proxy(t.orientationChange, t)
          ),
          e(window).on(
            "resize.slick.slick-" + t.instanceUid,
            e.proxy(t.resize, t)
          ),
          e("[draggable!=true]", t.$slideTrack).on(
            "dragstart",
            t.preventDefault
          ),
          e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
          e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (t.prototype.initUI = function () {
        var e = this;
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          e.options.dots === !0 &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.show();
      }),
      (t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === e.keyCode && t.options.accessibility === !0
            ? t.changeSlide({
                data: { message: t.options.rtl === !0 ? "next" : "previous" },
              })
            : 39 === e.keyCode &&
              t.options.accessibility === !0 &&
              t.changeSlide({
                data: { message: t.options.rtl === !0 ? "previous" : "next" },
              }));
      }),
      (t.prototype.lazyLoad = function () {
        function t(t) {
          e("img[data-lazy]", t).each(function () {
            var t = e(this),
              n = e(this).attr("data-lazy"),
              i = document.createElement("img");
            (i.onload = function () {
              t.animate({ opacity: 0 }, 100, function () {
                t.attr("src", n).animate({ opacity: 1 }, 200, function () {
                  t.removeAttr("data-lazy").removeClass("slick-loading");
                }),
                  s.$slider.trigger("lazyLoaded", [s, t, n]);
              });
            }),
              (i.onerror = function () {
                t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  s.$slider.trigger("lazyLoadError", [s, t, n]);
              }),
              (i.src = n);
          });
        }
        var n,
          i,
          o,
          r,
          s = this;
        (o = s.options.slidesToShow),
          (r = Math.ceil(o + s.options.slidesToShow)),
          s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++),
          (n = s.$slider.find(".slick-slide").slice(o, r)),
          t(n),
          s.slideCount <= s.options.slidesToShow
            ? ((i = s.$slider.find(".slick-slide")), t(i))
            : s.currentSlide >= s.slideCount - s.options.slidesToShow
            ? ((i = s.$slider
                .find(".slick-cloned")
                .slice(0, s.options.slidesToShow)),
              t(i))
            : 0 === s.currentSlide &&
              ((i = s.$slider
                .find(".slick-cloned")
                .slice(s.options.slidesToShow * -1)),
              t(i));
      }),
      (t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass("slick-loading"),
          e.initUI();
      }),
      (t.prototype.next = t.prototype.slickNext =
        function () {
          var e = this;
          e.changeSlide({ data: { message: "next" } });
        }),
      (t.prototype.orientationChange = function () {
        var e = this;
        e.setPosition();
      }),
      (t.prototype.pause = t.prototype.slickPause =
        function () {
          var e = this;
          e.autoPlayClear(), (e.paused = !0);
        }),
      (t.prototype.play = t.prototype.slickPlay =
        function () {
          var e = this;
          e.autoPlay(),
            (e.options.autoplay = !0),
            (e.paused = !1),
            (e.focussed = !1),
            (e.interrupted = !1);
        }),
      (t.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked ||
          (t.$slider.trigger("afterChange", [t, e]),
          (t.animating = !1),
          t.setPosition(),
          (t.swipeLeft = null),
          t.options.autoplay && t.autoPlay(),
          t.options.accessibility === !0 && t.updateADA());
      }),
      (t.prototype.prev = t.prototype.slickPrev =
        function () {
          var e = this;
          e.changeSlide({ data: { message: "previous" } });
        }),
      (t.prototype.preventDefault = function (e) {
        e.preventDefault();
      }),
      (t.prototype.refresh = function (t) {
        var n,
          i,
          o = this;
        (i = o.slideCount - o.options.slidesToShow),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (n = o.currentSlide),
          o.destroy(!0),
          e.extend(o, o.initials, { currentSlide: n }),
          o.init(),
          t || o.changeSlide({ data: { message: "index", index: n } }, !1);
      }),
      (t.prototype.reinit = function () {
        var t = this;
        (t.$slides = t.$slideTrack
          .children(t.options.slide)
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.cleanUpSlideEvents(),
          t.initSlideEvents(),
          t.options.focusOnSelect === !0 &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          t.setPosition(),
          t.focusHandler(),
          (t.paused = !t.options.autoplay),
          t.autoPlay(),
          t.$slider.trigger("reInit", [t]);
      }),
      (t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
          (t.windowDelay = window.setTimeout(function () {
            (t.windowWidth = e(window).width()), t.unslicked || t.setPosition();
          }, 50)));
      }),
      (t.prototype.setCSS = function (e) {
        var t,
          n,
          i = this,
          o = {};
        i.options.rtl === !0 && (e = -e),
          (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (o[i.positionProp] = e),
          i.transformsEnabled === !1
            ? i.$slideTrack.css(o)
            : ((o = {}),
              i.cssTransitions === !1
                ? ((o[i.animType] = "translate(" + t + ", " + n + ")"),
                  i.$slideTrack.css(o))
                : ((o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
                  i.$slideTrack.css(o)));
      }),
      (t.prototype.setDimensions = function () {
        var e = this;
        (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
          e.$slideTrack.width(
            Math.ceil(
              e.slideWidth * e.$slideTrack.children(".slick-slide").length
            )
          );
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }),
      (t.prototype.setFade = function () {
        var t,
          n = this;
        n.$slides.each(function (i, o) {
          (t = n.slideWidth * i * -1),
            n.options.rtl === !0
              ? e(o).css({
                  position: "relative",
                  right: t,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                })
              : e(o).css({
                  position: "relative",
                  left: t,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          n.$slides
            .eq(n.currentSlide)
            .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
      }),
      (t.prototype.setOption = t.prototype.slickSetOption =
        function () {
          var t,
            n,
            i,
            o = this,
            r = !1;
          "object" === e.type(arguments[0])
            ? ((t = arguments[0]), (r = arguments[1]), (i = "multiple"))
            : "string" === e.type(arguments[0]) &&
              ((t = arguments[0]),
              (n = arguments[1]),
              (r = arguments[2]),
              "undefined" != typeof arguments[1] && (i = "single")),
            "single" === i
              ? (o.options[t] = n)
              : "multiple" === i &&
                e.each(t, function (e, t) {
                  o.options[e] = t;
                }),
            r && (o.unload(), o.reinit());
        }),
      (t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(),
          e.options.fade === !1
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger("setPosition", [e]);
      }),
      (t.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = "left"),
          e.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            (e.options.useCSS === !0 && (e.cssTransitions = !0)),
          e.options.fade &&
            ("number" == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = "OTransform"),
            (e.transformType = "-o-transform"),
            (e.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = "MozTransform"),
            (e.transformType = "-moz-transform"),
            (e.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = "webkitTransform"),
            (e.transformType = "-webkit-transform"),
            (e.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = "msTransform"),
            (e.transformType = "-ms-transform"),
            (e.transitionType = "msTransition"),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            e.animType !== !1 &&
            ((e.animType = "transform"),
            (e.transformType = "transform"),
            (e.transitionType = "transition")),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && e.animType !== !1);
      }),
      (t.prototype.setSlideClasses = function (e) {
        var t,
          n,
          i,
          o = this;
        (t = o.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
          o.$slides.eq(e).addClass("slick-current"),
          e >= 0 && e <= o.slideCount - o.options.slidesToShow
            ? o.$slides
                .slice(e, e + o.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : t.length <= o.options.slidesToShow
            ? t.addClass("slick-active").attr("aria-hidden", "false")
            : ((i = o.slideCount % o.options.slidesToShow),
              (n = o.options.slidesToShow + e),
              o.options.slidesToShow == o.options.slidesToScroll &&
              o.slideCount - e < o.options.slidesToShow
                ? t
                    .slice(n - (o.options.slidesToShow - i), n + i)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : t
                    .slice(n, n + o.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
          o.options.lazyLoad === !0 && o.lazyLoad();
      }),
      (t.prototype.setupInfinite = function () {
        var t,
          n,
          i,
          o = this;
        if (
          o.options.fade === !1 &&
          ((n = null), o.slideCount > o.options.slidesToShow)
        ) {
          for (
            i = o.options.slidesToShow, t = o.slideCount;
            t > o.slideCount - i;
            t -= 1
          )
            (n = t - 1),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass("slick-cloned");
          for (t = 0; t < i; t += 1)
            (n = t),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass("slick-cloned");
          o.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              e(this).attr("id", "");
            });
        }
      }),
      (t.prototype.interrupt = function (e) {
        var t = this;
        e || t.autoPlay(), (t.interrupted = e);
      }),
      (t.prototype.selectHandler = function (t) {
        var n = this,
          i = e(t.target).is(".slick-slide")
            ? e(t.target)
            : e(t.target).parents(".slick-slide"),
          o = parseInt(i.attr("data-slick-index"));
        return (
          o || (o = 0),
          n.slideCount <= n.options.slidesToShow
            ? (n.setSlideClasses(o), void n.asNavFor(o))
            : void n.slideHandler(o)
        );
      }),
      (t.prototype.slideHandler = function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l = null,
          u = this;
        if (
          ((t = t || !1),
          (u.animating !== !0 || u.options.waitForAnimate !== !0) &&
            !(
              (u.options.fade === !0 && u.currentSlide === e) ||
              u.slideCount <= u.options.slidesToShow
            ))
        )
          return (
            t === !1 && u.asNavFor(e),
            (i = e),
            (l = u.getLeft(i)),
            (s = u.getLeft(u.currentSlide)),
            (u.currentLeft = null === u.swipeLeft ? s : u.swipeLeft),
            u.options.autoplay && clearInterval(u.autoPlayTimer),
            (o =
              i < 0
                ? u.slideCount % u.options.slidesToScroll !== 0
                  ? u.slideCount - (u.slideCount % u.options.slidesToScroll)
                  : u.slideCount + i
                : i >= u.slideCount
                ? u.slideCount % u.options.slidesToScroll !== 0
                  ? 0
                  : i - u.slideCount
                : i),
            (u.animating = !0),
            u.$slider.trigger("beforeChange", [u, u.currentSlide, o]),
            (r = u.currentSlide),
            (u.currentSlide = o),
            u.setSlideClasses(u.currentSlide),
            u.options.asNavFor &&
              ((a = u.getNavTarget()),
              (a = a.slick("getSlick")),
              a.slideCount <= a.options.slidesToShow &&
                a.setSlideClasses(u.currentSlide)),
            u.updateDots(),
            u.options.fade === !0
              ? void (n !== !0
                  ? (u.fadeSlideOut(r),
                    u.fadeSlide(o, function () {
                      u.postSlide(o);
                    }))
                  : u.postSlide(o))
              : void (n !== !0
                  ? u.animateSlide(l, function () {
                      u.postSlide(o);
                    })
                  : u.postSlide(o))
          );
      }),
      (t.prototype.startLoad = function () {
        var e = this;
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          e.options.dots === !0 &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass("slick-loading");
      }),
      (t.prototype.swipeDirection = function () {
        var e,
          t,
          n,
          i,
          o = this;
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (n = Math.atan2(t, e)),
          (i = Math.round((180 * n) / Math.PI)),
          i < 0 && (i = 360 - Math.abs(i)),
          i <= 45 && i >= 0
            ? o.options.rtl === !1
              ? "left"
              : "right"
            : i <= 360 && i >= 315
            ? o.options.rtl === !1
              ? "left"
              : "right"
            : i >= 135 && i <= 225
            ? o.options.rtl === !1
              ? "right"
              : "left"
            : "vertical"
        );
      }),
      (t.prototype.swipeEnd = function (e) {
        var t,
          n,
          i = this;
        if (
          ((i.dragging = !1),
          (i.interrupted = !1),
          (i.shouldClick = !(i.touchObject.swipeLength > 10)),
          void 0 === i.touchObject.curX)
        )
          return !1;
        if (
          (i.touchObject.edgeHit === !0 &&
            i.$slider.trigger("edge", [i, i.swipeDirection()]),
          i.touchObject.swipeLength >= i.touchObject.minSwipe)
        ) {
          switch ((n = i.swipeDirection())) {
            case "left":
            case "down":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                : i.currentSlide + i.getSlideCount()),
                (i.currentDirection = 0);
              break;
            case "right":
            case "up":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                : i.currentSlide - i.getSlideCount()),
                (i.currentDirection = 1);
          }
          "vertical" != n &&
            (i.slideHandler(t),
            (i.touchObject = {}),
            i.$slider.trigger("swipe", [i, n]));
        } else
          i.touchObject.startX !== i.touchObject.curX &&
            (i.slideHandler(i.currentSlide), (i.touchObject = {}));
      }),
      (t.prototype.swipeHandler = function (e) {
        var t = this;
        if (
          !(
            t.options.swipe === !1 ||
            ("ontouchend" in document && t.options.swipe === !1) ||
            (t.options.draggable === !1 && e.type.indexOf("mouse") !== -1)
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (t.prototype.swipeMove = function (e) {
        var t,
          n,
          i,
          o,
          r,
          s = this;
        return (
          (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!s.dragging || (r && 1 !== r.length)) &&
            ((t = s.getLeft(s.currentSlide)),
            (s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
            (s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
            (s.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))
            )),
            (n = s.swipeDirection()),
            "vertical" !== n
              ? (void 0 !== e.originalEvent &&
                  s.touchObject.swipeLength > 4 &&
                  e.preventDefault(),
                (o =
                  (s.options.rtl === !1 ? 1 : -1) *
                  (s.touchObject.curX > s.touchObject.startX ? 1 : -1)),
                s.options.verticalSwiping === !0 &&
                  (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
                (i = s.touchObject.swipeLength),
                (s.touchObject.edgeHit = !1),
                (s.swipeLeft = t + i * o),
                s.options.fade !== !0 &&
                  s.options.touchMove !== !1 &&
                  (s.animating === !0
                    ? ((s.swipeLeft = null), !1)
                    : void s.setCSS(s.swipeLeft)))
              : void 0)
        );
      }),
      (t.prototype.swipeStart = function (e) {
        var t,
          n = this;
        return (
          (n.interrupted = !0),
          1 !== n.touchObject.fingerCount ||
          n.slideCount <= n.options.slidesToShow
            ? ((n.touchObject = {}), !1)
            : (void 0 !== e.originalEvent &&
                void 0 !== e.originalEvent.touches &&
                (t = e.originalEvent.touches[0]),
              (n.touchObject.startX = n.touchObject.curX =
                void 0 !== t ? t.pageX : e.clientX),
              (n.touchObject.startY = n.touchObject.curY =
                void 0 !== t ? t.pageY : e.clientY),
              void (n.dragging = !0))
        );
      }),
      (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
        function () {
          var e = this;
          null !== e.$slidesCache &&
            (e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.appendTo(e.$slideTrack),
            e.reinit());
        }),
      (t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.htmlExpr.test(t.options.prevArrow) &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            t.htmlExpr.test(t.options.nextArrow) &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy();
      }),
      (t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots.find("li").removeClass("slick-active"),
          e.$dots
            .find("li")
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay &&
          (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
      }),
      (e.fn.slick = function () {
        var e,
          n,
          i = this,
          o = arguments[0],
          r = Array.prototype.slice.call(arguments, 1),
          s = i.length;
        for (e = 0; e < s; e++)
          if (
            ("object" == typeof o || "undefined" == typeof o
              ? (i[e].slick = new t(i[e], o))
              : (n = i[e].slick[o].apply(i[e].slick, r)),
            "undefined" != typeof n)
          )
            return n;
        return i;
      });
  })
  /*!
   * jquery.ba-throttle-debounce.min.js
   */,
  /*
   * jQuery throttle / debounce - v1.1 - 3/7/2010
   * http://benalman.com/projects/jquery-throttle-debounce-plugin/
   *
   * Copyright (c) 2010 "Cowboy" Ben Alman
   * Dual licensed under the MIT and GPL licenses.
   * http://benalman.com/about/license/
   */
  (function (e, t) {
    var n,
      i = e.jQuery || e.Cowboy || (e.Cowboy = {});
    (i.throttle = n =
      function (e, n, o, r) {
        function s() {
          function i() {
            (l = +new Date()), o.apply(u, d);
          }
          function s() {
            a = t;
          }
          var u = this,
            c = +new Date() - l,
            d = arguments;
          r && !a && i(),
            a && clearTimeout(a),
            r === t && c > e
              ? i()
              : n !== !0 && (a = setTimeout(r ? s : i, r === t ? e - c : e));
        }
        var a,
          l = 0;
        return (
          "boolean" != typeof n && ((r = o), (o = n), (n = t)),
          i.guid && (s.guid = o.guid = o.guid || i.guid++),
          s
        );
      }),
      (i.debounce = function (e, i, o) {
        return o === t ? n(e, i, !1) : n(e, o, i !== !1);
      });
  })(this)
  /*!
   * body-scroll-lock.js
   */,
  /*! Body Scroll Lock: https://github.com/willmcpo/body-scroll-lock */
  !(function (e, t) {
    if ("function" == typeof define && define.amd) define(["exports"], t);
    else if ("undefined" != typeof exports) t(exports);
    else {
      var n = {};
      t(n), (e.bodyScrollLock = n);
    }
  })(this, function (e) {
    "use strict";
    function t(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = !1;
    if ("undefined" != typeof window) {
      var i = {
        get passive() {
          n = !0;
        },
      };
      window.addEventListener("testPassive", null, i),
        window.removeEventListener("testPassive", null, i);
    }
    var o =
        "undefined" != typeof window &&
        window.navigator &&
        window.navigator.platform &&
        /iP(ad|hone|od)/.test(window.navigator.platform),
      r = [],
      s = !1,
      a = -1,
      l = void 0,
      u = void 0,
      c = function (e) {
        return r.some(function (t) {
          return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
        });
      },
      d = function (e) {
        var t = e || window.event;
        return (
          !!c(t.target) ||
          1 < t.touches.length ||
          (t.preventDefault && t.preventDefault(), !1)
        );
      },
      p = function () {
        setTimeout(function () {
          void 0 !== u &&
            ((document.body.style.paddingRight = u), (u = void 0)),
            void 0 !== l && ((document.body.style.overflow = l), (l = void 0));
        });
      };
    (e.disableBodyScroll = function (e, i) {
      if (o) {
        if (!e)
          return void console.error(
            "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
          );
        if (
          e &&
          !r.some(function (t) {
            return t.targetElement === e;
          })
        ) {
          var p = { targetElement: e, options: i || {} };
          (r = [].concat(t(r), [p])),
            (e.ontouchstart = function (e) {
              1 === e.targetTouches.length && (a = e.targetTouches[0].clientY);
            }),
            (e.ontouchmove = function (t) {
              var n, i, o, r;
              1 === t.targetTouches.length &&
                ((i = e),
                (r = (n = t).targetTouches[0].clientY - a),
                !c(n.target) &&
                  (i && 0 === i.scrollTop && 0 < r
                    ? d(n)
                    : (o = i) &&
                      o.scrollHeight - o.scrollTop <= o.clientHeight &&
                      r < 0
                    ? d(n)
                    : n.stopPropagation()));
            }),
            s ||
              (document.addEventListener(
                "touchmove",
                d,
                n ? { passive: !1 } : void 0
              ),
              (s = !0));
        }
      } else {
        (h = i),
          setTimeout(function () {
            if (void 0 === u) {
              var e = !!h && !0 === h.reserveScrollBarGap,
                t = window.innerWidth - document.documentElement.clientWidth;
              e &&
                0 < t &&
                ((u = document.body.style.paddingRight),
                (document.body.style.paddingRight = t + "px"));
            }
            void 0 === l &&
              ((l = document.body.style.overflow),
              (document.body.style.overflow = "hidden"));
          });
        var f = { targetElement: e, options: i || {} };
        r = [].concat(t(r), [f]);
      }
      var h;
    }),
      (e.clearAllBodyScrollLocks = function () {
        o
          ? (r.forEach(function (e) {
              (e.targetElement.ontouchstart = null),
                (e.targetElement.ontouchmove = null);
            }),
            s &&
              (document.removeEventListener(
                "touchmove",
                d,
                n ? { passive: !1 } : void 0
              ),
              (s = !1)),
            (r = []),
            (a = -1))
          : (p(), (r = []));
      }),
      (e.enableBodyScroll = function (e) {
        if (o) {
          if (!e)
            return void console.error(
              "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
            );
          (e.ontouchstart = null),
            (e.ontouchmove = null),
            (r = r.filter(function (t) {
              return t.targetElement !== e;
            })),
            s &&
              0 === r.length &&
              (document.removeEventListener(
                "touchmove",
                d,
                n ? { passive: !1 } : void 0
              ),
              (s = !1));
        } else
          (r = r.filter(function (t) {
            return t.targetElement !== e;
          })).length || p();
      });
  });
