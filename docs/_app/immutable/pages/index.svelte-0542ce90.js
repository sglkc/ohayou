import {
  K as at,
  S as he,
  i as pe,
  s as me,
  e as w,
  k as I,
  t as V,
  c as _,
  a as y,
  d as m,
  m as U,
  h as H,
  b as u,
  L as Ce,
  g as j,
  J as s,
  M,
  j as te,
  N as re,
  O as oe,
  P as le,
  E as ue,
  Q as A,
  R as Ee,
  l as Q,
  n as de,
  T as ye,
  p as fe,
  q as Y,
  o as X,
  U as rt,
  V as it,
  W as qe,
  X as Pe,
  Y as nt,
  Z as Ve,
  w as ge,
  x as we,
  y as _e,
  B as ve,
  _ as He
} from '../chunks/index-80122dc9.js';
import { w as ot } from '../chunks/index-3bceaad5.js';
function lt(l) {
  const t = l - 1;
  return t * t * t + 1;
}
function Ae(l, { delay: t = 0, duration: e = 400, easing: o = at } = {}) {
  const n = +getComputedStyle(l).opacity;
  return { delay: t, duration: e, easing: o, css: (a) => `opacity: ${a * n}` };
}
function ae(l, { delay: t = 0, duration: e = 400, easing: o = lt } = {}) {
  const n = getComputedStyle(l),
    a = +n.opacity,
    i = parseFloat(n.height),
    r = parseFloat(n.paddingTop),
    f = parseFloat(n.paddingBottom),
    g = parseFloat(n.marginTop),
    p = parseFloat(n.marginBottom),
    c = parseFloat(n.borderTopWidth),
    d = parseFloat(n.borderBottomWidth);
  return {
    delay: t,
    duration: e,
    easing: o,
    css: (h) =>
      `overflow: hidden;opacity: ${Math.min(h * 20, 1) * a};height: ${h * i}px;padding-top: ${
        h * r
      }px;padding-bottom: ${h * f}px;margin-top: ${h * g}px;margin-bottom: ${
        h * p
      }px;border-top-width: ${h * c}px;border-bottom-width: ${h * d}px;`
  };
}
function st(
  l,
  { delay: t = 0, duration: e = 400, easing: o = lt, start: n = 0, opacity: a = 0 } = {}
) {
  const i = getComputedStyle(l),
    r = +i.opacity,
    f = i.transform === 'none' ? '' : i.transform,
    g = 1 - n,
    p = r * (1 - a);
  return {
    delay: t,
    duration: e,
    easing: o,
    css: (c, d) => `
			transform: ${f} scale(${1 - g * d});
			opacity: ${r - p * d}
		`
  };
}
const ct = localStorage != null && localStorage.bookmarks ? JSON.parse(localStorage.bookmarks) : [],
  ut =
    localStorage != null && localStorage.searchEngines
      ? JSON.parse(localStorage.searchEngines)
      : { default: 0, engines: [{ id: 0, name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=' }] },
  ke = ot(ct),
  xe = ot(ut);
ke.subscribe((l) => {
  localStorage.bookmarks = JSON.stringify(l);
});
xe.subscribe((l) => {
  localStorage.searchEngines = JSON.stringify(l);
});
function Ye(l, t, e) {
  const o = l.slice();
  return (o[17] = t[e]), (o[19] = e), o;
}
function Je(l, t) {
  let e,
    o,
    n,
    a,
    i,
    r,
    f,
    g,
    p,
    c,
    d = t[17].name + '',
    h,
    b,
    x,
    v,
    E,
    N,
    k,
    S,
    F;
  function C() {
    return t[9](t[19]);
  }
  function q() {
    return t[10](t[17]);
  }
  return {
    key: l,
    first: null,
    c() {
      (e = w('div')),
        (o = w('button')),
        (n = w('i')),
        (a = I()),
        (i = w('a')),
        (r = w('img')),
        (p = I()),
        (c = w('p')),
        (h = V(d)),
        (x = I()),
        (v = w('button')),
        (E = w('i')),
        this.h();
    },
    l(R) {
      e = _(R, 'DIV', { class: !0 });
      var O = y(e);
      o = _(O, 'BUTTON', { class: !0 });
      var P = y(o);
      (n = _(P, 'I', { class: !0 })),
        y(n).forEach(m),
        P.forEach(m),
        (a = U(O)),
        (i = _(O, 'A', { href: !0 }));
      var T = y(i);
      (r = _(T, 'IMG', { class: !0, src: !0, alt: !0, width: !0, height: !0 })),
        (p = U(T)),
        (c = _(T, 'P', { class: !0 }));
      var D = y(c);
      (h = H(D, d)), D.forEach(m), T.forEach(m), (x = U(O)), (v = _(O, 'BUTTON', { class: !0 }));
      var G = y(v);
      (E = _(G, 'I', { class: !0 })), y(E).forEach(m), G.forEach(m), O.forEach(m), this.h();
    },
    h() {
      u(n, 'class', 'fa fa-close text-red-500'),
        u(
          o,
          'class',
          'invisible group-hover:visible absolute z-10 -top-3 left-0 scale-90 sm:scale-75 p-1 px-2.5 rounded-full bg-white/75'
        ),
        u(r, 'class', 'mx-auto mb-2 rounded'),
        Ce(r.src, (f = t[17].icon)) || u(r, 'src', f),
        u(r, 'alt', (g = t[17].name)),
        u(r, 'width', '32'),
        u(r, 'height', '32'),
        u(c, 'class', 'text-sm max-w-[8ch] truncate'),
        u(i, 'href', (b = t[17].url)),
        u(E, 'class', 'fa fa-pencil'),
        u(
          v,
          'class',
          'invisible group-hover:visible absolute z-10 -top-3 right-0 scale-90 sm:scale-75 p-1 px-2.5 rounded-full bg-white/75'
        ),
        u(
          e,
          'class',
          'w-[93px] h-[84px] relative group p-3 rounded hover:scale-110 transition-transform'
        ),
        (this.first = e);
    },
    m(R, O) {
      j(R, e, O),
        s(e, o),
        s(o, n),
        s(e, a),
        s(e, i),
        s(i, r),
        s(i, p),
        s(i, c),
        s(c, h),
        s(e, x),
        s(e, v),
        s(v, E),
        (k = !0),
        S || ((F = [M(o, 'click', C), M(v, 'click', q)]), (S = !0));
    },
    p(R, O) {
      (t = R),
        (!k || (O & 1 && !Ce(r.src, (f = t[17].icon)))) && u(r, 'src', f),
        (!k || (O & 1 && g !== (g = t[17].name))) && u(r, 'alt', g),
        (!k || O & 1) && d !== (d = t[17].name + '') && te(h, d),
        (!k || (O & 1 && b !== (b = t[17].url))) && u(i, 'href', b);
    },
    i(R) {
      k ||
        (re(() => {
          N || (N = oe(e, Ae, { duration: 200 }, !0)), N.run(1);
        }),
        (k = !0));
    },
    o(R) {
      N || (N = oe(e, Ae, { duration: 200 }, !1)), N.run(0), (k = !1);
    },
    d(R) {
      R && m(e), R && N && N.end(), (S = !1), le(F);
    }
  };
}
function We(l) {
  let t, e, o, n, a, i, r;
  return {
    c() {
      (t = w('button')), (e = w('i')), (o = I()), (n = w('p')), (a = V('New')), this.h();
    },
    l(f) {
      t = _(f, 'BUTTON', { class: !0 });
      var g = y(t);
      (e = _(g, 'I', { class: !0 })), y(e).forEach(m), (o = U(g)), (n = _(g, 'P', { class: !0 }));
      var p = y(n);
      (a = H(p, 'New')), p.forEach(m), g.forEach(m), this.h();
    },
    h() {
      u(e, 'class', 'fa fa-plus-square text-white fa-2x mx-auto mb-2'),
        u(n, 'class', 'text-sm'),
        u(
          t,
          'class',
          'w-[93px] h-[84px] p-3 rounded hover:scale-110 transition-opacity opacity-25 hover:opacity-100'
        );
    },
    m(f, g) {
      j(f, t, g), s(t, e), s(t, o), s(t, n), s(n, a), i || ((r = M(t, 'click', l[11])), (i = !0));
    },
    p: ue,
    d(f) {
      f && m(t), (i = !1), r();
    }
  };
}
function Xe(l) {
  let t, e, o, n, a, i, r, f, g, p, c, d, h, b, x, v;
  return {
    c() {
      (t = w('form')),
        (e = w('div')),
        (o = w('input')),
        (n = I()),
        (a = w('input')),
        (i = I()),
        (r = w('input')),
        (f = I()),
        (g = w('input')),
        (p = I()),
        (c = w('button')),
        (d = w('i')),
        this.h();
    },
    l(E) {
      t = _(E, 'FORM', { class: !0, autocomplete: !0 });
      var N = y(t);
      e = _(N, 'DIV', { class: !0 });
      var k = y(e);
      (o = _(k, 'INPUT', { type: !0 })),
        (n = U(k)),
        (a = _(k, 'INPUT', { class: !0, type: !0, placeholder: !0 })),
        (i = U(k)),
        (r = _(k, 'INPUT', { class: !0, type: !0, placeholder: !0 })),
        (f = U(k)),
        (g = _(k, 'INPUT', { class: !0, type: !0, placeholder: !0 })),
        k.forEach(m),
        (p = U(N)),
        (c = _(N, 'BUTTON', { class: !0, type: !0 }));
      var S = y(c);
      (d = _(S, 'I', { class: !0 })), y(d).forEach(m), S.forEach(m), N.forEach(m), this.h();
    },
    h() {
      u(o, 'type', 'hidden'),
        u(
          a,
          'class',
          'bg-white/80 p-2 rounded-tl border-l-2 border-t-2 border-blue-400 invalid:border-red-400 outline-0'
        ),
        u(a, 'type', 'text'),
        u(a, 'placeholder', 'Name*'),
        (a.required = !0),
        u(
          r,
          'class',
          'bg-white/80 p-2 border-l-2 border-blue-400 invalid:border-red-400 outline-0'
        ),
        u(r, 'type', 'url'),
        u(r, 'placeholder', 'URL*'),
        (r.required = !0),
        u(g, 'class', 'bg-white/80 p-2 rounded-bl border-l-2 border-b-2 border-blue-400 outline-0'),
        u(g, 'type', 'url'),
        u(g, 'placeholder', 'Icon URL'),
        u(e, 'class', 'flex flex-col'),
        u(d, 'class', 'fa fa-angle-right fa-2x text-white'),
        u(c, 'class', 'bg-blue-400 px-4 rounded-r border-2 border-blue-400'),
        u(c, 'type', 'submit'),
        u(t, 'class', 'mt-5 flex rounded text-xs w-fit mx-auto'),
        u(t, 'autocomplete', 'off');
    },
    m(E, N) {
      j(E, t, N),
        s(t, e),
        s(e, o),
        A(o, l[5]),
        s(e, n),
        s(e, a),
        A(a, l[2]),
        s(e, i),
        s(e, r),
        A(r, l[3]),
        s(e, f),
        s(e, g),
        A(g, l[4]),
        s(t, p),
        s(t, c),
        s(c, d),
        (b = !0),
        x ||
          ((v = [
            M(o, 'input', l[12]),
            M(a, 'input', l[13]),
            M(r, 'input', l[14]),
            M(g, 'input', l[15]),
            M(t, 'submit', Ee(l[6]))
          ]),
          (x = !0));
    },
    p(E, N) {
      N & 32 && A(o, E[5]),
        N & 4 && a.value !== E[2] && A(a, E[2]),
        N & 8 && A(r, E[3]),
        N & 16 && A(g, E[4]);
    },
    i(E) {
      b ||
        (re(() => {
          h || (h = oe(t, ae, {}, !0)), h.run(1);
        }),
        (b = !0));
    },
    o(E) {
      h || (h = oe(t, ae, {}, !1)), h.run(0), (b = !1);
    },
    d(E) {
      E && m(t), E && h && h.end(), (x = !1), le(v);
    }
  };
}
function dt(l) {
  let t,
    e = [],
    o = new Map(),
    n,
    a,
    i,
    r,
    f = l[0];
  const g = (d) => d[17].id;
  for (let d = 0; d < f.length; d += 1) {
    let h = Ye(l, f, d),
      b = g(h);
    o.set(b, (e[d] = Je(b, h)));
  }
  let p = l[0].length < 8 && We(l),
    c = l[1] && Xe(l);
  return {
    c() {
      t = w('div');
      for (let d = 0; d < e.length; d += 1) e[d].c();
      (n = I()), p && p.c(), (a = I()), c && c.c(), (i = Q()), this.h();
    },
    l(d) {
      t = _(d, 'DIV', { class: !0 });
      var h = y(t);
      for (let b = 0; b < e.length; b += 1) e[b].l(h);
      (n = U(h)), p && p.l(h), h.forEach(m), (a = U(d)), c && c.l(d), (i = Q()), this.h();
    },
    h() {
      u(t, 'class', 'grid grid-cols-4 gap-2 font-sans text-center select-none');
    },
    m(d, h) {
      j(d, t, h);
      for (let b = 0; b < e.length; b += 1) e[b].m(t, null);
      s(t, n), p && p.m(t, null), j(d, a, h), c && c.m(d, h), j(d, i, h), (r = !0);
    },
    p(d, [h]) {
      h & 385 && ((f = d[0]), de(), (e = ye(e, h, g, 1, d, f, o, t, it, Je, n, Ye)), fe()),
        d[0].length < 8
          ? p
            ? p.p(d, h)
            : ((p = We(d)), p.c(), p.m(t, null))
          : p && (p.d(1), (p = null)),
        d[1]
          ? c
            ? (c.p(d, h), h & 2 && Y(c, 1))
            : ((c = Xe(d)), c.c(), Y(c, 1), c.m(i.parentNode, i))
          : c &&
            (de(),
            X(c, 1, 1, () => {
              c = null;
            }),
            fe());
    },
    i(d) {
      if (!r) {
        for (let h = 0; h < f.length; h += 1) Y(e[h]);
        Y(c), (r = !0);
      }
    },
    o(d) {
      for (let h = 0; h < e.length; h += 1) X(e[h]);
      X(c), (r = !1);
    },
    d(d) {
      d && m(t);
      for (let h = 0; h < e.length; h += 1) e[h].d();
      p && p.d(), d && m(a), c && c.d(d), d && m(i);
    }
  };
}
function ft(l, t, e) {
  let o;
  rt(l, ke, (S) => e(16, (o = S)));
  let n = o,
    a = !1,
    i = '',
    r = 'http://',
    f = '',
    g = 0;
  function p(S) {
    const F = `https://s2.googleusercontent.com/s2/favicons?domain=${r}&sz=32`,
      C = g != null ? g : n.length;
    e(0, (n[C] = { id: C, name: i, url: r, icon: f || F }), n),
      e(1, (a = !1)),
      e(2, (i = '')),
      e(3, (r = 'http://')),
      e(4, (f = ''));
  }
  function c(S) {
    n.splice(S, 1), e(0, n);
  }
  function d(S) {
    e(1, (a = !0)), e(2, (i = S.name)), e(3, (r = S.url)), e(4, (f = S.icon)), e(5, (g = S.id));
  }
  const h = (S) => c(S),
    b = (S) => d(S),
    x = () => e(1, (a = !a));
  function v() {
    (g = this.value), e(5, g);
  }
  function E() {
    (i = this.value), e(2, i);
  }
  function N() {
    (r = this.value), e(3, r);
  }
  function k() {
    (f = this.value), e(4, f);
  }
  return (
    (l.$$.update = () => {
      l.$$.dirty & 1 && ke.set(n);
    }),
    [n, a, i, r, f, g, p, c, d, h, b, x, v, E, N, k]
  );
}
class ht extends he {
  constructor(t) {
    super(), pe(this, t, ft, dt, me, {});
  }
}
function Ge(l, t, e) {
  const o = l.slice();
  return (o[24] = t[e]), (o[26] = e), o;
}
function Ke(l, t, e) {
  const o = l.slice();
  return (o[24] = t[e]), (o[26] = e), o;
}
function Qe(l) {
  let t,
    e,
    o,
    n,
    a,
    i,
    r = [],
    f = new Map(),
    g,
    p,
    c,
    d,
    h,
    b,
    x,
    v,
    E,
    N,
    k,
    S,
    F,
    C,
    q,
    R,
    O,
    P,
    T,
    D = [],
    G = new Map(),
    $,
    J,
    ee,
    W,
    ie,
    be,
    Te,
    ne = l[0].engines;
  const Ne = (z) => z[26];
  for (let z = 0; z < ne.length; z += 1) {
    let B = Ke(l, ne, z),
      L = Ne(B);
    f.set(L, (r[z] = Ze(L, B)));
  }
  let se = l[0].engines;
  const Se = (z) => z[26];
  for (let z = 0; z < se.length; z += 1) {
    let B = Ge(l, se, z),
      L = Se(B);
    G.set(L, (D[z] = et(L, B)));
  }
  return {
    c() {
      (t = w('form')),
        (e = w('div')),
        (o = w('span')),
        (n = V('Select default search engine')),
        (a = I()),
        (i = w('select'));
      for (let z = 0; z < r.length; z += 1) r[z].c();
      (g = I()),
        (p = w('div')),
        (c = w('table')),
        (d = w('thead')),
        (h = w('tr')),
        (b = w('th')),
        (x = V('#')),
        (v = I()),
        (E = w('th')),
        (N = V('Name')),
        (k = I()),
        (S = w('th')),
        (F = V('URL')),
        (C = I()),
        (q = w('th')),
        (R = w('button')),
        (O = w('i')),
        (P = I()),
        (T = w('tbody'));
      for (let z = 0; z < D.length; z += 1) D[z].c();
      ($ = I()),
        (J = w('small')),
        (ee = V('* Search query will be inserted at the end of URL')),
        this.h();
    },
    l(z) {
      t = _(z, 'FORM', { class: !0, autocomplete: !0 });
      var B = y(t);
      e = _(B, 'DIV', { class: !0 });
      var L = y(e);
      o = _(L, 'SPAN', { class: !0 });
      var ze = y(o);
      (n = H(ze, 'Select default search engine')),
        ze.forEach(m),
        (a = U(L)),
        (i = _(L, 'SELECT', { class: !0 }));
      var Ie = y(i);
      for (let Z = 0; Z < r.length; Z += 1) r[Z].l(Ie);
      Ie.forEach(m), L.forEach(m), (g = U(B)), (p = _(B, 'DIV', { class: !0 }));
      var Ue = y(p);
      c = _(Ue, 'TABLE', { class: !0 });
      var ce = y(c);
      d = _(ce, 'THEAD', { class: !0 });
      var Be = y(d);
      h = _(Be, 'TR', {});
      var K = y(h);
      b = _(K, 'TH', { class: !0 });
      var Oe = y(b);
      (x = H(Oe, '#')), Oe.forEach(m), (v = U(K)), (E = _(K, 'TH', {}));
      var De = y(E);
      (N = H(De, 'Name')), De.forEach(m), (k = U(K)), (S = _(K, 'TH', {}));
      var Re = y(S);
      (F = H(Re, 'URL')), Re.forEach(m), (C = U(K)), (q = _(K, 'TH', { class: !0 }));
      var Me = y(q);
      R = _(Me, 'BUTTON', { type: !0 });
      var je = y(R);
      (O = _(je, 'I', { class: !0 })),
        y(O).forEach(m),
        je.forEach(m),
        Me.forEach(m),
        K.forEach(m),
        Be.forEach(m),
        (P = U(ce)),
        (T = _(ce, 'TBODY', {}));
      var Fe = y(T);
      for (let Z = 0; Z < D.length; Z += 1) D[Z].l(Fe);
      Fe.forEach(m), ce.forEach(m), Ue.forEach(m), ($ = U(B)), (J = _(B, 'SMALL', { class: !0 }));
      var Le = y(J);
      (ee = H(Le, '* Search query will be inserted at the end of URL')),
        Le.forEach(m),
        B.forEach(m),
        this.h();
    },
    h() {
      u(o, 'class', 'text-sm my-auto'),
        u(
          i,
          'class',
          'px-2 py-1 text-sm text-gray-700 bg-slate-100 border-2 border-solid border-gray-300 rounded focus:border-blue-400 focus:outline-none'
        ),
        l[0].default === void 0 && re(() => l[14].call(i)),
        u(e, 'class', 'pb-2 flex justify-between'),
        u(b, 'class', 'py-2 px-1 text-center'),
        u(O, 'class', 'fa fa-plus mx-auto'),
        u(R, 'type', 'button'),
        u(q, 'class', 'text-right'),
        u(d, 'class', 'font-medium'),
        u(c, 'class', 'min-w-full text-left border-1 text-sm text-gray-700'),
        u(p, 'class', 'max-h-48 overflow-y-auto'),
        u(J, 'class', 'text-xs font-extralight'),
        u(t, 'class', 'px-4 py-2 bg-sky-200/50 rounded mx-2 mt-3'),
        u(t, 'autocomplete', 'off');
    },
    m(z, B) {
      j(z, t, B), s(t, e), s(e, o), s(o, n), s(e, a), s(e, i);
      for (let L = 0; L < r.length; L += 1) r[L].m(i, null);
      qe(i, l[0].default),
        s(t, g),
        s(t, p),
        s(p, c),
        s(c, d),
        s(d, h),
        s(h, b),
        s(b, x),
        s(h, v),
        s(h, E),
        s(E, N),
        s(h, k),
        s(h, S),
        s(S, F),
        s(h, C),
        s(h, q),
        s(q, R),
        s(R, O),
        s(c, P),
        s(c, T);
      for (let L = 0; L < D.length; L += 1) D[L].m(T, null);
      s(t, $),
        s(t, J),
        s(J, ee),
        (ie = !0),
        be ||
          ((Te = [M(i, 'change', l[14]), M(R, 'click', l[8]), M(t, 'submit', Ee(l[9]))]),
          (be = !0));
    },
    p(z, B) {
      B & 1 && ((ne = z[0].engines), (r = ye(r, B, Ne, 1, z, ne, f, i, Pe, Ze, null, Ke))),
        B & 1 && qe(i, z[0].default),
        B & 3151 && ((se = z[0].engines), (D = ye(D, B, Se, 1, z, se, G, T, Pe, et, null, Ge)));
    },
    i(z) {
      ie ||
        (re(() => {
          W || (W = oe(t, ae, {}, !0)), W.run(1);
        }),
        (ie = !0));
    },
    o(z) {
      W || (W = oe(t, ae, {}, !1)), W.run(0), (ie = !1);
    },
    d(z) {
      z && m(t);
      for (let B = 0; B < r.length; B += 1) r[B].d();
      for (let B = 0; B < D.length; B += 1) D[B].d();
      z && W && W.end(), (be = !1), le(Te);
    }
  };
}
function Ze(l, t) {
  let e,
    o = t[24].name + '',
    n,
    a;
  return {
    key: l,
    first: null,
    c() {
      (e = w('option')), (n = V(o)), this.h();
    },
    l(i) {
      e = _(i, 'OPTION', {});
      var r = y(e);
      (n = H(r, o)), r.forEach(m), this.h();
    },
    h() {
      (e.__value = a = t[26]), (e.value = e.__value), (this.first = e);
    },
    m(i, r) {
      j(i, e, r), s(e, n);
    },
    p(i, r) {
      (t = i),
        r & 1 && o !== (o = t[24].name + '') && te(n, o),
        r & 1 && a !== (a = t[26]) && ((e.__value = a), (e.value = e.__value));
    },
    d(i) {
      i && m(e);
    }
  };
}
function pt(l) {
  let t,
    e,
    o = l[26] + 1 + '',
    n,
    a,
    i,
    r,
    f = l[24].name + '',
    g,
    p,
    c,
    d = l[24].url + '',
    h,
    b,
    x,
    v,
    E,
    N,
    k,
    S,
    F,
    C,
    q;
  function R() {
    return l[20](l[24]);
  }
  function O() {
    return l[21](l[26]);
  }
  return {
    c() {
      (t = w('tr')),
        (e = w('td')),
        (n = V(o)),
        (a = V('.')),
        (i = I()),
        (r = w('td')),
        (g = V(f)),
        (p = I()),
        (c = w('td')),
        (h = V(d)),
        (b = I()),
        (x = w('td')),
        (v = w('button')),
        (E = w('i')),
        (N = I()),
        (k = w('button')),
        (S = w('i')),
        (F = I()),
        this.h();
    },
    l(P) {
      t = _(P, 'TR', {});
      var T = y(t);
      e = _(T, 'TD', { class: !0 });
      var D = y(e);
      (n = H(D, o)), (a = H(D, '.')), D.forEach(m), (i = U(T)), (r = _(T, 'TD', {}));
      var G = y(r);
      (g = H(G, f)), G.forEach(m), (p = U(T)), (c = _(T, 'TD', { class: !0 }));
      var $ = y(c);
      (h = H($, d)), $.forEach(m), (b = U(T)), (x = _(T, 'TD', { class: !0 }));
      var J = y(x);
      v = _(J, 'BUTTON', { class: !0, type: !0 });
      var ee = y(v);
      (E = _(ee, 'I', { class: !0 })),
        y(E).forEach(m),
        ee.forEach(m),
        (N = U(J)),
        (k = _(J, 'BUTTON', { type: !0 }));
      var W = y(k);
      (S = _(W, 'I', { class: !0 })),
        y(S).forEach(m),
        W.forEach(m),
        J.forEach(m),
        (F = U(T)),
        T.forEach(m),
        this.h();
    },
    h() {
      u(e, 'class', 'py-2 text-center'),
        u(c, 'class', 'max-w-[12ch] truncate'),
        u(E, 'class', 'fa fa-pencil'),
        u(v, 'class', 'mx-1'),
        u(v, 'type', 'button'),
        u(S, 'class', 'fa fa-trash'),
        u(k, 'type', 'button'),
        u(x, 'class', 'text-right');
    },
    m(P, T) {
      j(P, t, T),
        s(t, e),
        s(e, n),
        s(e, a),
        s(t, i),
        s(t, r),
        s(r, g),
        s(t, p),
        s(t, c),
        s(c, h),
        s(t, b),
        s(t, x),
        s(x, v),
        s(v, E),
        s(x, N),
        s(x, k),
        s(k, S),
        s(t, F),
        C || ((q = [M(v, 'click', R), M(k, 'click', O)]), (C = !0));
    },
    p(P, T) {
      (l = P),
        T & 1 && o !== (o = l[26] + 1 + '') && te(n, o),
        T & 1 && f !== (f = l[24].name + '') && te(g, f),
        T & 1 && d !== (d = l[24].url + '') && te(h, d);
    },
    d(P) {
      P && m(t), (C = !1), le(q);
    }
  };
}
function mt(l) {
  let t,
    e,
    o,
    n,
    a,
    i,
    r,
    f,
    g,
    p,
    c,
    d,
    h,
    b,
    x,
    v = !l[6] && $e(l);
  function E() {
    return l[19](l[26]);
  }
  return {
    c() {
      (t = w('tr')),
        v && v.c(),
        (e = I()),
        (o = w('td')),
        (n = w('input')),
        (i = I()),
        (r = w('td')),
        (f = w('button')),
        (g = w('i')),
        (p = I()),
        (c = w('button')),
        (d = w('i')),
        (h = I()),
        this.h();
    },
    l(N) {
      t = _(N, 'TR', { class: !0 });
      var k = y(t);
      v && v.l(k), (e = U(k)), (o = _(k, 'TD', { colspan: !0 }));
      var S = y(o);
      (n = _(S, 'INPUT', { class: !0, type: !0, size: !0, placeholder: !0 })),
        S.forEach(m),
        (i = U(k)),
        (r = _(k, 'TD', { class: !0 }));
      var F = y(r);
      f = _(F, 'BUTTON', { class: !0, type: !0 });
      var C = y(f);
      (g = _(C, 'I', { class: !0 })),
        y(g).forEach(m),
        C.forEach(m),
        (p = U(F)),
        (c = _(F, 'BUTTON', { type: !0 }));
      var q = y(c);
      (d = _(q, 'I', { class: !0 })),
        y(d).forEach(m),
        q.forEach(m),
        F.forEach(m),
        (h = U(k)),
        k.forEach(m),
        this.h();
    },
    h() {
      u(
        n,
        'class',
        'p-1 bg-slate-100 rounded outline-0 border-2 border-slate-300 invalid:border-red-400'
      ),
        u(n, 'type', 'url'),
        u(n, 'size', '12'),
        u(n, 'placeholder', 'URL*'),
        (n.required = !0),
        Ve(n, 'min-w-full', l[6]),
        u(o, 'colspan', (a = l[6] ? '3' : '1')),
        u(g, 'class', 'fa fa-check'),
        u(f, 'class', 'mx-1'),
        u(f, 'type', 'submit'),
        u(d, 'class', 'fa fa-trash'),
        u(c, 'type', 'button'),
        u(r, 'class', 'text-right'),
        u(t, 'class', 'text-gray-700 relative');
    },
    m(N, k) {
      j(N, t, k),
        v && v.m(t, null),
        s(t, e),
        s(t, o),
        s(o, n),
        A(n, l[3]),
        s(t, i),
        s(t, r),
        s(r, f),
        s(f, g),
        s(r, p),
        s(r, c),
        s(c, d),
        s(t, h),
        b ||
          ((x = [
            M(n, 'input', l[16]),
            M(n, 'focus', l[17]),
            M(n, 'blur', l[18]),
            M(c, 'click', E)
          ]),
          (b = !0));
    },
    p(N, k) {
      (l = N),
        l[6] ? v && (v.d(1), (v = null)) : v ? v.p(l, k) : ((v = $e(l)), v.c(), v.m(t, e)),
        k & 8 && A(n, l[3]),
        k & 64 && Ve(n, 'min-w-full', l[6]),
        k & 64 && a !== (a = l[6] ? '3' : '1') && u(o, 'colspan', a);
    },
    d(N) {
      N && m(t), v && v.d(), (b = !1), le(x);
    }
  };
}
function $e(l) {
  let t,
    e = l[26] + 1 + '',
    o,
    n,
    a,
    i,
    r,
    f,
    g;
  return {
    c() {
      (t = w('td')), (o = V(e)), (n = V('.')), (a = I()), (i = w('td')), (r = w('input')), this.h();
    },
    l(p) {
      t = _(p, 'TD', { class: !0 });
      var c = y(t);
      (o = H(c, e)), (n = H(c, '.')), c.forEach(m), (a = U(p)), (i = _(p, 'TD', { class: !0 }));
      var d = y(i);
      (r = _(d, 'INPUT', { class: !0, type: !0, size: !0, placeholder: !0 })),
        d.forEach(m),
        this.h();
    },
    h() {
      u(t, 'class', 'py-2 text-center'),
        u(
          r,
          'class',
          'p-1 bg-slate-100 rounded outline-0 border-2 border-slate-300 invalid:border-red-400'
        ),
        u(r, 'type', 'text'),
        u(r, 'size', '6'),
        u(r, 'placeholder', 'Name*'),
        (r.required = !0),
        u(i, 'class', 'max-w-xs');
    },
    m(p, c) {
      j(p, t, c),
        s(t, o),
        s(t, n),
        j(p, a, c),
        j(p, i, c),
        s(i, r),
        A(r, l[2]),
        f || ((g = M(r, 'input', l[15])), (f = !0));
    },
    p(p, c) {
      c & 1 && e !== (e = p[26] + 1 + '') && te(o, e), c & 4 && r.value !== p[2] && A(r, p[2]);
    },
    d(p) {
      p && m(t), p && m(a), p && m(i), (f = !1), g();
    }
  };
}
function et(l, t) {
  let e, o;
  function n(r, f) {
    return r[1] === r[26] ? mt : pt;
  }
  let a = n(t),
    i = a(t);
  return {
    key: l,
    first: null,
    c() {
      (e = Q()), i.c(), (o = Q()), this.h();
    },
    l(r) {
      (e = Q()), i.l(r), (o = Q()), this.h();
    },
    h() {
      this.first = e;
    },
    m(r, f) {
      j(r, e, f), i.m(r, f), j(r, o, f);
    },
    p(r, f) {
      (t = r),
        a === (a = n(t)) && i
          ? i.p(t, f)
          : (i.d(1), (i = a(t)), i && (i.c(), i.m(o.parentNode, o)));
    },
    d(r) {
      r && m(e), i.d(r), r && m(o);
    }
  };
}
function bt(l) {
  let t,
    e,
    o,
    n,
    a,
    i,
    r,
    f,
    g,
    p,
    c,
    d,
    h,
    b = l[4] && Qe(l);
  return {
    c() {
      (t = w('div')),
        (e = w('form')),
        (o = w('input')),
        (n = I()),
        (a = w('button')),
        (i = w('i')),
        (r = I()),
        (f = w('button')),
        (g = w('i')),
        (p = I()),
        b && b.c(),
        this.h();
    },
    l(x) {
      t = _(x, 'DIV', { class: !0 });
      var v = y(t);
      e = _(v, 'FORM', { class: !0, autocomplete: !0 });
      var E = y(e);
      (o = _(E, 'INPUT', { class: !0, type: !0, placeholder: !0 })),
        (n = U(E)),
        (a = _(E, 'BUTTON', { class: !0, type: !0 }));
      var N = y(a);
      (i = _(N, 'I', { class: !0 })),
        y(i).forEach(m),
        N.forEach(m),
        (r = U(E)),
        (f = _(E, 'BUTTON', { class: !0, type: !0 }));
      var k = y(f);
      (g = _(k, 'I', { class: !0 })),
        y(g).forEach(m),
        k.forEach(m),
        E.forEach(m),
        (p = U(v)),
        b && b.l(v),
        v.forEach(m),
        this.h();
    },
    h() {
      u(o, 'class', 'bg-white/75 focus:bg-white rounded-l-md p-2 max-w-[70vw]'),
        u(o, 'type', 'text'),
        u(o, 'placeholder', 'Where would you like to go?'),
        u(i, 'class', 'fa fa-gear text-black/50'),
        u(a, 'class', 'bg-white/75 hover:bg-white/90 px-3 transition-colors'),
        u(a, 'type', 'button'),
        u(g, 'class', 'fa fa-search'),
        u(f, 'class', 'bg-white/75 hover:bg-white rounded-r-md px-4 transition-colors'),
        u(f, 'type', 'submit'),
        u(e, 'class', 'flex justify-center font-serif'),
        u(e, 'autocomplete', 'off'),
        u(t, 'class', 'flex flex-col justify-center');
    },
    m(x, v) {
      j(x, t, v),
        s(t, e),
        s(e, o),
        A(o, l[5]),
        s(e, n),
        s(e, a),
        s(a, i),
        s(e, r),
        s(e, f),
        s(f, g),
        s(t, p),
        b && b.m(t, null),
        (c = !0),
        d ||
          ((h = [M(o, 'input', l[12]), M(a, 'click', l[13]), M(e, 'submit', Ee(l[7]))]), (d = !0));
    },
    p(x, [v]) {
      v & 32 && o.value !== x[5] && A(o, x[5]),
        x[4]
          ? b
            ? (b.p(x, v), v & 16 && Y(b, 1))
            : ((b = Qe(x)), b.c(), Y(b, 1), b.m(t, null))
          : b &&
            (de(),
            X(b, 1, 1, () => {
              b = null;
            }),
            fe());
    },
    i(x) {
      c || (Y(b), (c = !0));
    },
    o(x) {
      X(b), (c = !1);
    },
    d(x) {
      x && m(t), b && b.d(), (d = !1), le(h);
    }
  };
}
function gt(l, t, e) {
  let o, n;
  rt(l, xe, (T) => e(23, (n = T)));
  let a = n,
    i,
    r = '',
    f = 'https://',
    g = !1,
    p = '',
    c = !1;
  async function d(T) {
    if (!p.length) return;
    const D = encodeURIComponent(p);
    window.open(o.url + D, '_self');
  }
  function h() {
    const T = a.engines.length || 0;
    e(0, (a.engines[T] = { id: T, name: '', url: '' }), a), e(1, (i = T));
  }
  function b(T) {
    const D = i != null ? i : a.engines.length;
    e(0, (a.engines[D] = { id: D, name: r, url: f }), a),
      e(1, (i = void 0)),
      e(2, (r = '')),
      e(3, (f = 'https://'));
  }
  function x(T) {
    a.engines.splice(T, 1), e(0, a);
  }
  function v(T) {
    e(1, (i = T.id)), e(2, (r = T.name)), e(3, (f = T.url));
  }
  function E() {
    (p = this.value), e(5, p);
  }
  const N = () => e(4, (g = !g));
  function k() {
    (a.default = nt(this)), e(0, a);
  }
  function S() {
    (r = this.value), e(2, r);
  }
  function F() {
    (f = this.value), e(3, f);
  }
  const C = () => e(6, (c = !0)),
    q = () => e(6, (c = !1)),
    R = (T) => x(T),
    O = (T) => v(T),
    P = (T) => x(T);
  return (
    (l.$$.update = () => {
      l.$$.dirty & 1 && xe.set(a), l.$$.dirty & 1 && (o = a.engines[a.default]);
    }),
    [a, i, r, f, g, p, c, d, h, b, x, v, E, N, k, S, F, C, q, R, O, P]
  );
}
class wt extends he {
  constructor(t) {
    super(), pe(this, t, gt, bt, me, {});
  }
}
function _t(l) {
  let t, e, o, n, a, i;
  return {
    c() {
      (t = w('div')),
        (e = w('h1')),
        (o = V('\u304A\u306F\u3088\u3046\uFF01')),
        (n = I()),
        (a = w('h1')),
        (i = V('\u304A\u306F\u3088\u3046\uFF01')),
        this.h();
    },
    l(r) {
      t = _(r, 'DIV', { class: !0 });
      var f = y(t);
      e = _(f, 'H1', { class: !0 });
      var g = y(e);
      (o = H(g, '\u304A\u306F\u3088\u3046\uFF01')),
        g.forEach(m),
        (n = U(f)),
        (a = _(f, 'H1', { class: !0 }));
      var p = y(a);
      (i = H(p, '\u304A\u306F\u3088\u3046\uFF01')), p.forEach(m), f.forEach(m), this.h();
    },
    h() {
      u(e, 'class', 'select-none text-slate-600'),
        u(a, 'class', 'h-0 relative -top-16 left-1 text-white'),
        u(
          t,
          'class',
          'mb-6 text-center text-6xl font-serif font-bold hover:text-7xl transition-[font-size]'
        );
    },
    m(r, f) {
      j(r, t, f), s(t, e), s(e, o), s(t, n), s(t, a), s(a, i);
    },
    p: ue,
    i: ue,
    o: ue,
    d(r) {
      r && m(t);
    }
  };
}
class vt extends he {
  constructor(t) {
    super(), pe(this, t, null, _t, me, {});
  }
}
function tt(l) {
  let t, e, o, n, a, i, r, f, g, p, c, d, h;
  return (
    (e = new vt({})),
    (i = new wt({})),
    (c = new ht({})),
    {
      c() {
        (t = w('div')),
          ge(e.$$.fragment),
          (n = I()),
          (a = w('div')),
          ge(i.$$.fragment),
          (r = I()),
          (f = w('hr')),
          (g = I()),
          (p = w('div')),
          ge(c.$$.fragment),
          this.h();
      },
      l(b) {
        t = _(b, 'DIV', {});
        var x = y(t);
        we(e.$$.fragment, x), x.forEach(m), (n = U(b)), (a = _(b, 'DIV', {}));
        var v = y(a);
        we(i.$$.fragment, v),
          (r = U(v)),
          (f = _(v, 'HR', { class: !0 })),
          (g = U(v)),
          (p = _(v, 'DIV', { class: !0 }));
        var E = y(p);
        we(c.$$.fragment, E), E.forEach(m), v.forEach(m), this.h();
      },
      h() {
        u(f, 'class', 'mb-5 border-0'), u(p, 'class', 'mx-auto w-fit');
      },
      m(b, x) {
        j(b, t, x),
          _e(e, t, null),
          j(b, n, x),
          j(b, a, x),
          _e(i, a, null),
          s(a, r),
          s(a, f),
          s(a, g),
          s(a, p),
          _e(c, p, null),
          (h = !0);
      },
      i(b) {
        h ||
          (Y(e.$$.fragment, b),
          o ||
            re(() => {
              (o = He(t, st, { delay: 50 })), o.start();
            }),
          Y(i.$$.fragment, b),
          Y(c.$$.fragment, b),
          d ||
            re(() => {
              (d = He(a, ae, { delay: 750 })), d.start();
            }),
          (h = !0));
      },
      o(b) {
        X(e.$$.fragment, b), X(i.$$.fragment, b), X(c.$$.fragment, b), (h = !1);
      },
      d(b) {
        b && m(t), ve(e), b && m(n), b && m(a), ve(i), ve(c);
      }
    }
  );
}
function yt(l) {
  let t,
    e,
    o = l[0] && tt();
  return {
    c() {
      o && o.c(), (t = Q());
    },
    l(n) {
      o && o.l(n), (t = Q());
    },
    m(n, a) {
      o && o.m(n, a), j(n, t, a), (e = !0);
    },
    p(n, [a]) {
      n[0]
        ? o
          ? a & 1 && Y(o, 1)
          : ((o = tt()), o.c(), Y(o, 1), o.m(t.parentNode, t))
        : o &&
          (de(),
          X(o, 1, 1, () => {
            o = null;
          }),
          fe());
    },
    i(n) {
      e || (Y(o), (e = !0));
    },
    o(n) {
      X(o), (e = !1);
    },
    d(n) {
      o && o.d(n), n && m(t);
    }
  };
}
function kt(l, t, e) {
  let o = !1;
  return setTimeout(() => e(0, (o = !0)), 250), [o];
}
class Tt extends he {
  constructor(t) {
    super(), pe(this, t, kt, yt, me, {});
  }
}
export { Tt as default };
