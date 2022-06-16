function E() {}
const tt = (t) => t;
function pt(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function et(t) {
  return t();
}
function X() {
  return Object.create(null);
}
function S(t) {
  t.forEach(et);
}
function K(t) {
  return typeof t == 'function';
}
function Ft(t, e) {
  return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let O;
function It(t, e) {
  return O || (O = document.createElement('a')), (O.href = e), t === O.href;
}
function yt(t) {
  return Object.keys(t).length === 0;
}
function gt(t, ...e) {
  if (t == null) return E;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Ht(t, e, n) {
  t.$$.on_destroy.push(gt(e, n));
}
function Wt(t, e, n, r) {
  if (t) {
    const s = nt(t, e, n, r);
    return t[0](s);
  }
}
function nt(t, e, n, r) {
  return t[1] && r ? pt(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function Gt(t, e, n, r) {
  if (t[2] && r) {
    const s = t[2](r(n));
    if (e.dirty === void 0) return s;
    if (typeof s == 'object') {
      const o = [],
        i = Math.max(e.dirty.length, s.length);
      for (let c = 0; c < i; c += 1) o[c] = e.dirty[c] | s[c];
      return o;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Jt(t, e, n, r, s, o) {
  if (s) {
    const i = nt(e, n, r, o);
    t.p(i, s);
  }
}
function Kt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let r = 0; r < n; r++) e[r] = -1;
    return e;
  }
  return -1;
}
const it = typeof window != 'undefined';
let rt = it ? () => window.performance.now() : () => Date.now(),
  Q = it ? (t) => requestAnimationFrame(t) : E;
const k = new Set();
function st(t) {
  k.forEach((e) => {
    e.c(t) || (k.delete(e), e.f());
  }),
    k.size !== 0 && Q(st);
}
function lt(t) {
  let e;
  return (
    k.size === 0 && Q(st),
    {
      promise: new Promise((n) => {
        k.add((e = { c: t, f: n }));
      }),
      abort() {
        k.delete(e);
      }
    }
  );
}
let F = !1;
function bt() {
  F = !0;
}
function xt() {
  F = !1;
}
function wt(t, e, n, r) {
  for (; t < e; ) {
    const s = t + ((e - t) >> 1);
    n(s) <= r ? (t = s + 1) : (e = s);
  }
  return t;
}
function $t(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === 'HEAD') {
    const l = [];
    for (let u = 0; u < e.length; u++) {
      const d = e[u];
      d.claim_order !== void 0 && l.push(d);
    }
    e = l;
  }
  const n = new Int32Array(e.length + 1),
    r = new Int32Array(e.length);
  n[0] = -1;
  let s = 0;
  for (let l = 0; l < e.length; l++) {
    const u = e[l].claim_order,
      d = (s > 0 && e[n[s]].claim_order <= u ? s + 1 : wt(1, s, (a) => e[n[a]].claim_order, u)) - 1;
    r[l] = n[d] + 1;
    const f = d + 1;
    (n[f] = l), (s = Math.max(f, s));
  }
  const o = [],
    i = [];
  let c = e.length - 1;
  for (let l = n[s] + 1; l != 0; l = r[l - 1]) {
    for (o.push(e[l - 1]); c >= l; c--) i.push(e[c]);
    c--;
  }
  for (; c >= 0; c--) i.push(e[c]);
  o.reverse(), i.sort((l, u) => l.claim_order - u.claim_order);
  for (let l = 0, u = 0; l < i.length; l++) {
    for (; u < o.length && i[l].claim_order >= o[u].claim_order; ) u++;
    const d = u < o.length ? o[u] : null;
    t.insertBefore(i[l], d);
  }
}
function vt(t, e) {
  t.appendChild(e);
}
function ct(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function kt(t) {
  const e = ot('style');
  return Et(ct(t), e), e.sheet;
}
function Et(t, e) {
  vt(t.head || t, e);
}
function St(t, e) {
  if (F) {
    for (
      $t(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null && t.actual_end_child.parentElement !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Qt(t, e, n) {
  F && !n ? St(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function Nt(t) {
  t.parentNode.removeChild(t);
}
function ot(t) {
  return document.createElement(t);
}
function U(t) {
  return document.createTextNode(t);
}
function Ut() {
  return U(' ');
}
function Vt() {
  return U('');
}
function Xt(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function Yt(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function Zt(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function jt(t) {
  return Array.from(t.childNodes);
}
function At(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function ut(t, e, n, r, s = !1) {
  At(t);
  const o = (() => {
    for (let i = t.claim_info.last_index; i < t.length; i++) {
      const c = t[i];
      if (e(c)) {
        const l = n(c);
        return l === void 0 ? t.splice(i, 1) : (t[i] = l), s || (t.claim_info.last_index = i), c;
      }
    }
    for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
      const c = t[i];
      if (e(c)) {
        const l = n(c);
        return (
          l === void 0 ? t.splice(i, 1) : (t[i] = l),
          s ? l === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = i),
          c
        );
      }
    }
    return r();
  })();
  return (o.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), o;
}
function Ct(t, e, n, r) {
  return ut(
    t,
    (s) => s.nodeName === e,
    (s) => {
      const o = [];
      for (let i = 0; i < s.attributes.length; i++) {
        const c = s.attributes[i];
        n[c.name] || o.push(c.name);
      }
      o.forEach((i) => s.removeAttribute(i));
    },
    () => r(e)
  );
}
function te(t, e, n) {
  return Ct(t, e, n, ot);
}
function Mt(t, e) {
  return ut(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const r = '' + e;
      if (n.data.startsWith(r)) {
        if (n.data.length !== r.length) return n.splitText(r.length);
      } else n.data = r;
    },
    () => U(e),
    !0
  );
}
function ee(t) {
  return Mt(t, ' ');
}
function ne(t, e) {
  (e = '' + e), t.wholeText !== e && (t.data = e);
}
function ie(t, e) {
  t.value = e == null ? '' : e;
}
function re(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? 'important' : '');
}
function se(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const r = t.options[n];
    if (r.__value === e) {
      r.selected = !0;
      return;
    }
  }
  t.selectedIndex = -1;
}
function le(t) {
  const e = t.querySelector(':checked') || t.options[0];
  return e && e.__value;
}
function ce(t, e, n) {
  t.classList[n ? 'add' : 'remove'](e);
}
function Rt(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const s = document.createEvent('CustomEvent');
  return s.initCustomEvent(t, n, r, e), s;
}
const z = new Map();
let B = 0;
function qt(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function Dt(t, e) {
  const n = { stylesheet: kt(e), rules: {} };
  return z.set(t, n), n;
}
function W(t, e, n, r, s, o, i, c = 0) {
  const l = 16.666 / r;
  let u = `{
`;
  for (let p = 0; p <= 1; p += l) {
    const g = e + (n - e) * o(p);
    u +=
      p * 100 +
      `%{${i(g, 1 - g)}}
`;
  }
  const d =
      u +
      `100% {${i(n, 1 - n)}}
}`,
    f = `__svelte_${qt(d)}_${c}`,
    a = ct(t),
    { stylesheet: h, rules: _ } = z.get(a) || Dt(a, t);
  _[f] || ((_[f] = !0), h.insertRule(`@keyframes ${f} ${d}`, h.cssRules.length));
  const y = t.style.animation || '';
  return (t.style.animation = `${y ? `${y}, ` : ''}${f} ${r}ms linear ${s}ms 1 both`), (B += 1), f;
}
function G(t, e) {
  const n = (t.style.animation || '').split(', '),
    r = n.filter(e ? (o) => o.indexOf(e) < 0 : (o) => o.indexOf('__svelte') === -1),
    s = n.length - r.length;
  s && ((t.style.animation = r.join(', ')), (B -= s), B || Ot());
}
function Ot() {
  Q(() => {
    B ||
      (z.forEach((t) => {
        const { stylesheet: e } = t;
        let n = e.cssRules.length;
        for (; n--; ) e.deleteRule(n);
        t.rules = {};
      }),
      z.clear());
  });
}
let M;
function A(t) {
  M = t;
}
function V() {
  if (!M) throw new Error('Function called outside component initialization');
  return M;
}
function oe(t) {
  V().$$.on_mount.push(t);
}
function ue(t) {
  V().$$.after_update.push(t);
}
function ae(t, e) {
  return V().$$.context.set(t, e), e;
}
const j = [],
  Y = [],
  L = [],
  Z = [],
  at = Promise.resolve();
let J = !1;
function ft() {
  J || ((J = !0), at.then(_t));
}
function fe() {
  return ft(), at;
}
function R(t) {
  L.push(t);
}
const H = new Set();
let P = 0;
function _t() {
  const t = M;
  do {
    for (; P < j.length; ) {
      const e = j[P];
      P++, A(e), Pt(e.$$);
    }
    for (A(null), j.length = 0, P = 0; Y.length; ) Y.pop()();
    for (let e = 0; e < L.length; e += 1) {
      const n = L[e];
      H.has(n) || (H.add(n), n());
    }
    L.length = 0;
  } while (j.length);
  for (; Z.length; ) Z.pop()();
  (J = !1), H.clear(), A(t);
}
function Pt(t) {
  if (t.fragment !== null) {
    t.update(), S(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(R);
  }
}
let N;
function dt() {
  return (
    N ||
      ((N = Promise.resolve()),
      N.then(() => {
        N = null;
      })),
    N
  );
}
function C(t, e, n) {
  t.dispatchEvent(Rt(`${e ? 'intro' : 'outro'}${n}`));
}
const T = new Set();
let v;
function _e() {
  v = { r: 0, c: [], p: v };
}
function de() {
  v.r || S(v.c), (v = v.p);
}
function ht(t, e) {
  t && t.i && (T.delete(t), t.i(e));
}
function Lt(t, e, n, r) {
  if (t && t.o) {
    if (T.has(t)) return;
    T.add(t),
      v.c.push(() => {
        T.delete(t), r && (n && t.d(1), r());
      }),
      t.o(e);
  }
}
const mt = { duration: 0 };
function he(t, e, n) {
  let r = e(t, n),
    s = !1,
    o,
    i,
    c = 0;
  function l() {
    o && G(t, o);
  }
  function u() {
    const { delay: f = 0, duration: a = 300, easing: h = tt, tick: _ = E, css: y } = r || mt;
    y && (o = W(t, 0, 1, a, f, h, y, c++)), _(0, 1);
    const p = rt() + f,
      g = p + a;
    i && i.abort(),
      (s = !0),
      R(() => C(t, !0, 'start')),
      (i = lt((b) => {
        if (s) {
          if (b >= g) return _(1, 0), C(t, !0, 'end'), l(), (s = !1);
          if (b >= p) {
            const x = h((b - p) / a);
            _(x, 1 - x);
          }
        }
        return s;
      }));
  }
  let d = !1;
  return {
    start() {
      d || ((d = !0), G(t), K(r) ? ((r = r()), dt().then(u)) : u());
    },
    invalidate() {
      d = !1;
    },
    end() {
      s && (l(), (s = !1));
    }
  };
}
function me(t, e, n, r) {
  let s = e(t, n),
    o = r ? 0 : 1,
    i = null,
    c = null,
    l = null;
  function u() {
    l && G(t, l);
  }
  function d(a, h) {
    const _ = a.b - o;
    return (
      (h *= Math.abs(_)),
      { a: o, b: a.b, d: _, duration: h, start: a.start, end: a.start + h, group: a.group }
    );
  }
  function f(a) {
    const { delay: h = 0, duration: _ = 300, easing: y = tt, tick: p = E, css: g } = s || mt,
      b = { start: rt() + h, b: a };
    a || ((b.group = v), (v.r += 1)),
      i || c
        ? (c = b)
        : (g && (u(), (l = W(t, o, a, _, h, y, g))),
          a && p(0, 1),
          (i = d(b, _)),
          R(() => C(t, a, 'start')),
          lt((x) => {
            if (
              (c &&
                x > c.start &&
                ((i = d(c, _)),
                (c = null),
                C(t, i.b, 'start'),
                g && (u(), (l = W(t, o, i.b, i.duration, 0, y, s.css)))),
              i)
            ) {
              if (x >= i.end)
                p((o = i.b), 1 - o),
                  C(t, i.b, 'end'),
                  c || (i.b ? u() : --i.group.r || S(i.group.c)),
                  (i = null);
              else if (x >= i.start) {
                const q = x - i.start;
                (o = i.a + i.d * y(q / i.duration)), p(o, 1 - o);
              }
            }
            return !!(i || c);
          }));
  }
  return {
    run(a) {
      K(s)
        ? dt().then(() => {
            (s = s()), f(a);
          })
        : f(a);
    },
    end() {
      u(), (i = c = null);
    }
  };
}
function pe(t, e) {
  t.d(1), e.delete(t.key);
}
function ye(t, e) {
  Lt(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function ge(t, e, n, r, s, o, i, c, l, u, d, f) {
  let a = t.length,
    h = o.length,
    _ = a;
  const y = {};
  for (; _--; ) y[t[_].key] = _;
  const p = [],
    g = new Map(),
    b = new Map();
  for (_ = h; _--; ) {
    const m = f(s, o, _),
      w = n(m);
    let $ = i.get(w);
    $ ? r && $.p(m, e) : (($ = u(w, m)), $.c()),
      g.set(w, (p[_] = $)),
      w in y && b.set(w, Math.abs(_ - y[w]));
  }
  const x = new Set(),
    q = new Set();
  function I(m) {
    ht(m, 1), m.m(c, d), i.set(m.key, m), (d = m.first), h--;
  }
  for (; a && h; ) {
    const m = p[h - 1],
      w = t[a - 1],
      $ = m.key,
      D = w.key;
    m === w
      ? ((d = m.first), a--, h--)
      : g.has(D)
      ? !i.has($) || x.has($)
        ? I(m)
        : q.has(D)
        ? a--
        : b.get($) > b.get(D)
        ? (q.add($), I(m))
        : (x.add(D), a--)
      : (l(w, i), a--);
  }
  for (; a--; ) {
    const m = t[a];
    g.has(m.key) || l(m, i);
  }
  for (; h; ) I(p[h - 1]);
  return p;
}
function be(t, e) {
  const n = {},
    r = {},
    s = { $$scope: 1 };
  let o = t.length;
  for (; o--; ) {
    const i = t[o],
      c = e[o];
    if (c) {
      for (const l in i) l in c || (r[l] = 1);
      for (const l in c) s[l] || ((n[l] = c[l]), (s[l] = 1));
      t[o] = c;
    } else for (const l in i) s[l] = 1;
  }
  for (const i in r) i in n || (n[i] = void 0);
  return n;
}
function xe(t) {
  return typeof t == 'object' && t !== null ? t : {};
}
function we(t) {
  t && t.c();
}
function $e(t, e) {
  t && t.l(e);
}
function Tt(t, e, n, r) {
  const { fragment: s, on_mount: o, on_destroy: i, after_update: c } = t.$$;
  s && s.m(e, n),
    r ||
      R(() => {
        const l = o.map(et).filter(K);
        i ? i.push(...l) : S(l), (t.$$.on_mount = []);
      }),
    c.forEach(R);
}
function zt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (S(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function Bt(t, e) {
  t.$$.dirty[0] === -1 && (j.push(t), ft(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ve(t, e, n, r, s, o, i, c = [-1]) {
  const l = M;
  A(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: null,
    props: o,
    update: E,
    not_equal: s,
    bound: X(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: X(),
    dirty: c,
    skip_bound: !1,
    root: e.target || l.$$.root
  });
  i && i(u.root);
  let d = !1;
  if (
    ((u.ctx = n
      ? n(t, e.props || {}, (f, a, ...h) => {
          const _ = h.length ? h[0] : a;
          return (
            u.ctx &&
              s(u.ctx[f], (u.ctx[f] = _)) &&
              (!u.skip_bound && u.bound[f] && u.bound[f](_), d && Bt(t, f)),
            a
          );
        })
      : []),
    u.update(),
    (d = !0),
    S(u.before_update),
    (u.fragment = r ? r(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      bt();
      const f = jt(e.target);
      u.fragment && u.fragment.l(f), f.forEach(Nt);
    } else u.fragment && u.fragment.c();
    e.intro && ht(t.$$.fragment), Tt(t, e.target, e.anchor, e.customElement), xt(), _t();
  }
  A(l);
}
class ke {
  $destroy() {
    zt(this, 1), (this.$destroy = E);
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      r.push(n),
      () => {
        const s = r.indexOf(n);
        s !== -1 && r.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set && !yt(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
export {
  xe as A,
  zt as B,
  pt as C,
  fe as D,
  E,
  Wt as F,
  Jt as G,
  Kt as H,
  Gt as I,
  St as J,
  tt as K,
  It as L,
  Xt as M,
  R as N,
  me as O,
  S as P,
  ie as Q,
  Yt as R,
  ke as S,
  ge as T,
  Ht as U,
  ye as V,
  se as W,
  pe as X,
  le as Y,
  ce as Z,
  he as _,
  jt as a,
  Zt as b,
  te as c,
  Nt as d,
  ot as e,
  re as f,
  Qt as g,
  Mt as h,
  ve as i,
  ne as j,
  Ut as k,
  Vt as l,
  ee as m,
  _e as n,
  Lt as o,
  de as p,
  ht as q,
  ae as r,
  Ft as s,
  U as t,
  ue as u,
  oe as v,
  we as w,
  $e as x,
  Tt as y,
  be as z
};
