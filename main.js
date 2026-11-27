try {
  history.scrollRestoration = "manual";
} catch (e) {}
(() => {
  const n =
    performance.getEntriesByType &&
    performance.getEntriesByType("navigation")[0];
  if (n && n.type === "reload" && location.hash) {
    try {
      history.replaceState(null, "", location.pathname + location.search);
    } catch (e) {}
  }
  scrollTo(0, 0);
  addEventListener("load", () => {
    if (!location.hash) scrollTo(0, 0);
  });
  addEventListener("pageshow", (e) => {
    if (e.persisted && !location.hash) scrollTo(0, 0);
  });
})();

(() => {
  const A = "assets/",
    SV = "404";
  const IMGF = (f) =>
    /\.(png|jpe?g|webp|avif)$/i.test(f) ? encodeURI(f) : A + f + ".webp";
  const IMG = (p) => IMGF(p.img);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v)),
    $ = (s, r = document) => r.querySelector(s),
    $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const money = (n) =>
    "LE " +
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);
  const price = (p) => money(p.pr);
  const SZ = ["40", "41", "42", "43", "44", "45", "46"],
    AP = ["S", "L", "M", "XL"];
  const mk = (n, v, pr, leg, vals, base, img, h, type) => ({
    n,
    v,
    pr,
    leg,
    vals,
    base,
    img,
    h,
    type,
  });
  const P = {
    gc: mk(
      "GREY CREWNECK SWEATSHIRT",
      "404",
      899,
      "Size",
      AP,
      14000,
      "GREY CREWNECK SWEATSHIRT.png",
      533,
      "clothing",
    ),
    dj: mk(
      "DIRTY WASH BAGGY JEANS",
      "404",
      1499,
      "Size",
      AP,
      15000,
      "Dirty Wash Baggy Jeans.png",
      533,
      "clothing",
    ),
    bw: mk(
      "BLACK WIDE LEG SWEATPANTS",
      "404",
      699,
      "Size",
      AP,
      18000,
      "BLACK WIDE LEG SWEATPANTS.png",
      533,
      "clothing",
    ),
    cp: mk(
      "BLACK BAGGY CARGO PANTS",
      "404",
      999,
      "Size",
      AP,
      16000,
      "Black Baggy Cargo Pants.png",
      533,
      "clothing",
    ),
    bh: mk(
      "BURGUNDY OVERSIZED ZIP-UP HOODIE",
      "404",
      999,
      "Size",
      AP,
      17000,
      "Burgundy Oversized Zip-Up Hoodie.png",
      533,
      "clothing",
    ),
    ec: mk(
      "ESSENTIAL WHITE CAP",
      "404",
      499,
      "Size",
      ["One size"],
      12000,
      "ESSENTIAL WHITE CAP.jpeg",
      400,
      "cap",
    ),
    bt: mk(
      "BAGGY BLACK TRACK PANTS",
      "404",
      999,
      "Size",
      AP,
      13000,
      "Baggy Black Track Pants3.png",
      533,
      "clothing",
    ),
    gs: mk(
      "GREY BAGGY SWEATPANTS",
      "404",
      699,
      "Size",
      AP,
      9000,
      "GREY BAGGY SWEATPANTS2.jpg",
      533,
      "clothing",
    ),
    dk: mk(
      "DEEP VIOLET NIKE SB DUNK",
      SV,
      3499,
      "Shoe size",
      SZ,
      10000,
      "Deep Violet Nike SB Dunk2.png",
      400,
      "shoes",
    ),
    bb: mk(
      "404 BLACK KNITTED BEANIE",
      "404",
      499,
      "Size",
      ["One size"],
      11000,
      "404 BLACK KNITTED BEANIE.png",
      400,
      "cap",
    ),
  };
  P.gc.extra = [
    "GREY CREWNECK SWEATSHIRT2.png",
    "GREY CREWNECK SWEATSHIRT3.png",
    "GREY CREWNECK SWEATSHIRT4.png",
  ];
  P.dj.extra = [
    "Dirty Wash Baggy Jeans2.png",
    "Dirty Wash Baggy Jeans3.png",
    "Dirty Wash Baggy Jeans4.png",
    "Dirty Wash Baggy Jeans5.png",
  ];
  P.cp.extra = ["Black Baggy Cargo Pants2.png", "Black Baggy Cargo Pants3.png"];
  P.bh.extra = [
    "Burgundy Oversized Zip-Up Hoodie2.png",
    "Burgundy Oversized Zip-Up Hoodie3.png",
  ];
  P.ec.extra = [
    "ESSENTIAL WHITE CAP2.jpeg",
    "ESSENTIAL WHITE CAP3.jpeg",
    "ESSENTIAL WHITE CAP4.jpeg",
    "ESSENTIAL WHITE CAP5.jpeg",
  ];
  P.bt.extra = [
    "Baggy Black Track Pants2.jpeg",
    "Baggy Black Track Pants.jpeg",
  ];
  P.gs.extra = ["GREY BAGGY SWEATPANTS.jpeg", "GREY BAGGY SWEATPANTS3.jpg"];
  P.bw.extra = [
    "BLACK WIDE LEG SWEATPANTS1.png",
    "BLACK WIDE LEG SWEATPANTS2.png",
    "BLACK WIDE LEG SWEATPANTS3.png",
    "BLACK WIDE LEG SWEATPANTS4.png",
  ];
  P.dk.extra = ["Deep Violet Nike SB Dunk.jpeg"];
  P.bb.extra = [
    "404 BLACK KNITTED BEANIE1.png",
    "404 BLACK KNITTED BEANIE2.png",
    "404 BLACK KNITTED BEANIE3.png",
  ];
  const V = {};
  for (const k in P) {
    const p = P[k];
    p.vals.forEach((v, i) => (V[p.base + i] = { p, v }));
  }
  const KEY = "404-styling-bag-v1";
  const SHIP = 60,
    FREE = 1650;
  let bag = [];
  try {
    bag = (JSON.parse(localStorage.getItem(KEY)) || [])
      .filter(
        (e) =>
          Number.isSafeInteger(e.id) &&
          Number.isSafeInteger(e.quantity) &&
          e.quantity >= 1 &&
          e.quantity <= 20 &&
          V[e.id],
      )
      .slice(0, 50);
  } catch (e) {}
  const save = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify(bag));
    } catch (e) {}
  };
  const toast = (t) => {
    const s = $("#bag-status");
    s.textContent = t;
    s.classList.add("on");
    clearTimeout(toast.t);
    toast.t = setTimeout(() => s.classList.remove("on"), 2500);
  };
  const count = () =>
    $$("[data-cart-count]").forEach(
      (e) => (e.textContent = bag.reduce((a, b) => a + b.quantity, 0)),
    );
  const bagAdd = (ids) => {
    ids = ids.map(Number);
    if (ids.some((i) => !V[i])) throw Error("Please choose an available size.");
    ids.forEach((id) => {
      const e = bag.find((b) => b.id === id);
      e
        ? (e.quantity = Math.min(20, e.quantity + 1))
        : bag.push({ id, quantity: 1 });
    });
    save();
    renderBag();
    toast(ids.length > 1 ? "Look added to your cart" : "Added to your cart");
  };
  function renderBag() {
    count();
    $("#bag-dialog").classList.toggle("is-empty", !bag.length);
    const box = $("#bag-items"),
      tot = $("#bag-total"),
      cl = $("#clear-bag"),
      sp = $("#bag-ship");
    cl.disabled = !bag.length;
    if (!bag.length) {
      box.innerHTML = '<p class="bempty">Your cart is currently empty.</p>';
      tot.innerHTML = "";
      sp.innerHTML = "";
      return;
    }
    const s = bag.reduce((a, e) => a + V[e.id].p.pr * e.quantity, 0),
      left = FREE - s;
    sp.innerHTML =
      left > 0
        ? `<span>Add <b>${money(left)}</b> more for free shipping</span><div class="bbar"><i style="width:${Math.min(100, (s / FREE) * 100).toFixed(1)}%"></i></div>`
        : `<span><b>You’ve unlocked free shipping</b></span><div class="bbar"><i style="width:100%"></i></div>`;
    box.innerHTML = bag
      .map((e) => {
        const { p, v } = V[e.id];
        return `<div class="brow"><img src="${IMG(p)}" alt="${p.n}"><div><h3>${p.n}</h3><p>Size ${v} · ${price(p)}</p><div class="qty"><button data-dec="${e.id}" aria-label="Decrease quantity of ${p.n}">−</button><span aria-live="polite">${e.quantity}</span><button data-inc="${e.id}" aria-label="Increase quantity of ${p.n}">+</button></div></div><div class="br"><button data-rm="${e.id}" aria-label="Remove ${p.n}">×</button><span>${money(p.pr * e.quantity)}</span></div></div>`;
      })
      .join("");
    tot.innerHTML = `<span>Subtotal</span><b>${money(s)}</b>`;
  }
  const dlg = $("#bag-dialog");
  $("#open-bag").onclick = () => {
    renderBag();
    dlg.showModal();
  };
  $("#close-bag").onclick = () => dlg.close();
  dlg.addEventListener("click", (e) => {
    const r = dlg.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    ) {
      dlg.close();
      return;
    }
    const rm = e.target.closest("[data-rm]"),
      inc = e.target.closest("[data-inc]"),
      dec = e.target.closest("[data-dec]");
    if (rm) {
      bag = bag.filter((x) => x.id !== +rm.dataset.rm);
    } else if (inc) {
      const it = bag.find((x) => x.id === +inc.dataset.inc);
      if (it) it.quantity = Math.min(20, it.quantity + 1);
    } else if (dec) {
      const it = bag.find((x) => x.id === +dec.dataset.dec);
      if (it) {
        if (it.quantity <= 1) bag = bag.filter((x) => x !== it);
        else it.quantity--;
      }
    } else return;
    save();
    renderBag();
  });
  $("#clear-bag").onclick = () => {
    bag = [];
    save();
    renderBag();
    toast("Cart cleared");
  };
  renderBag();
  addEventListener("storage", (e) => {
    if (e.key !== KEY) return;
    try {
      bag = (JSON.parse(e.newValue) || []).filter((x) => V[x.id]);
    } catch (x) {
      bag = [];
    }
    renderBag();
  });
  const topB = $("#top");
  addEventListener("scroll", () => topB.classList.toggle("on", scrollY > 800), {
    passive: true,
  });
  const RMg = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const goTo = (el) => {
    if (el === 0) scrollTo({ top: 0, behavior: RMg ? "auto" : "smooth" });
    else el.scrollIntoView({ behavior: RMg ? "auto" : "smooth" });
  };
  topB.onclick = () => goTo(0);
  document.addEventListener("click", (e) => {
    if (!e.target.closest("[data-home]")) return;
    e.preventDefault();
    goTo(0);
  });
  const pg = $("#pgrid");
  pg.innerHTML = Object.entries(P)
    .map(
      ([k, p]) =>
        `<article class="card" data-type="${p.type}" data-k="${k}"><div class="pm"><button class="fav" data-fav aria-pressed="false" aria-label="Save ${p.n}"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2z"/></svg></button><img src="${IMG(p)}" loading="lazy" decoding="async" alt="${p.n}" width="400" height="${p.h}">${(p.extra || []).map((f) => `<img class="alt" src="${IMGF(f)}" loading="lazy" decoding="async" alt="" aria-hidden="true" width="400" height="${p.h}">`).join("")}<button class="qv" type="button" data-qv aria-label="Quick view: ${p.n}">Quick view</button></div><div class="pb"><h3><a href="#product-${k}">${p.n}</a></h3><span class="pp">${price(p)}</span></div></article>`,
    )
    .join("");
  const imgs = (k) => {
    const o = [{ t: IMG(P[k]), m: IMG(P[k]) }];
    (P[k].extra || []).forEach((f) => o.push({ t: IMGF(f), m: IMGF(f) }));
    return o;
  };
  const gal = (k) => {
    const g = imgs(k),
      p = P[k];
    return `<div class="gal" data-k="${k}"><div class="gm"><img src="${g[0].m}" alt="${p.n}"></div><div class="thw"><div class="ths">${g.map((x, i) => `<button type="button" class="th" data-thumb data-src="${x.m}" aria-current="${i ? "false" : "true"}" aria-label="Image ${i + 1} of ${g.length}"><img src="${x.t}" alt="" loading="lazy" decoding="async"></button>`).join("")}</div></div></div>`;
  };
  const sizes = (p, nm) =>
    `<div class="qvs"><span class="qvl">${p.leg}</span><div class="szs" role="radiogroup" aria-label="${p.leg}">${p.vals.map((v, n) => `<label class="sz"><input type="radio" name="${nm}" value="${p.base + n}"${n ? "" : " checked"}><span>${SL[v] || v}</span></label>`).join("")}</div></div>`;
  const SL = { S: "Small", M: "Medium", L: "Large", XL: "X-Large" };
  const PK = [
    [
      '<rect x="4" y="10" width="16" height="11" rx="1.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
      "Pay online by card, wallet or instalments &amp; save 50 EGP (tap ‘Pay online’ in your cart) · Cash on delivery also available",
    ],
    [
      '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
      "Inspect your order before you pay",
    ],
    [
      '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9"/>',
      "7-day exchange &amp; returns · Paid online? Refunded to your card or wallet within 3 days",
    ],
    [
      '<path d="M2 6h12v10H2zM14 9h4l3 3v4h-4"/><circle cx="6" cy="18" r="1.7"/><circle cx="17" cy="18" r="1.7"/>',
      "Free shipping on orders over 1,650 EGP",
    ],
  ];
  const DET = {
    clothing: [
      "made to layer over tees and hoodies all season.",
      "Cotton",
      "Male 184 cm, 70 kg wears M",
    ],
    shoes: ["built for everyday wear."],
    cap: ["a clean everyday cap that goes with every fit."],
  };
  const info = (k, nm, tag, extra, full) => {
    const p = P[k],
      d = DET[p.type];
    const more = full
      ? `<ul class="perks">${PK.map((x) => `<li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${x[0]}</svg><span>${x[1]}</span></li>`).join("")}</ul><div class="pdesc"><p><b>${p.n},</b> ${d[0]}</p>${d[1] ? `<ul><li><b>Fabric:</b> ${d[1]}</li><li><b>Model:</b> ${d[2]}</li></ul>` : ""}</div>`
      : "";
    return `<${tag} class="qvt">${p.n}</${tag}><p class="qvp">${price(p)}</p><p class="qvn"><u>Shipping</u> calculated at checkout.</p>${sizes(p, nm)}<p class="instk"><i></i>In stock, ready to ship</p><button class="qva" type="button" data-qadd>Add to cart</button>${more}${extra}`;
  };
  const qd = $("#qv-dialog"),
    qb = $("#qv-body");
  const openQV = (k) => {
    qb.innerHTML =
      gal(k) +
      `<div class="qvr">${info(k, "qv-size", "h2", `<a class="qvf" href="#product-${k}" data-full>View full details →</a>`)}</div>`;
    qd.showModal();
  };
  pg.addEventListener("click", (e) => {
    if (e.target.closest("[data-fav]")) return;
    const c = e.target.closest(".pm");
    if (!c) return;
    const k = c.closest(".card").dataset.k;
    if (e.target.closest("[data-qv]")) openQV(k);
    else location.hash = "product-" + k;
  });
  $("#close-qv").onclick = () => qd.close();
  qd.addEventListener("click", (e) => {
    const r = qd.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      return qd.close();
    if (e.target.closest("[data-full]")) qd.close();
  });
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-thumb]");
    if (t) {
      const g = t.closest(".gal");
      $(".gm img", g).src = t.dataset.src;
      $$("[data-thumb]", g).forEach((x) =>
        x.setAttribute("aria-current", x === t),
      );
      return;
    }
    const b = e.target.closest("[data-qadd]");
    if (!b) return;
    const root = b.closest("#pdp,#qv-dialog"),
      ck = root && $("input:checked", root);
    if (!ck) return;
    try {
      bagAdd([ck.value]);
      b.textContent = "Added to cart";
      setTimeout(() => (b.textContent = "Add to cart"), 1600);
    } catch (x) {
      b.textContent = x.message;
    }
  });
  const pdp = $("#pdp"),
    title0 = document.title;
  let pdpOpen = false,
    prevY = 0;
  addEventListener(
    "scroll",
    () => {
      if (!pdpOpen) prevY = scrollY;
    },
    { passive: true },
  );
  const showPDP = (k) => {
    pdpOpen = true;
    pdp.innerHTML = `<a class="pback" href="#products" data-pback>← Back to products</a><div class="pgd">${gal(k)}<div class="qvr">${info(k, "pd-size", "h1", "", 1)}</div></div>`;
    $("main").hidden = true;
    pdp.hidden = false;
    document.title = P[k].n + " — 404.eg";
    scrollTo({ top: 0, behavior: "instant" });
  };
  const hidePDP = (restore) => {
    if (!pdpOpen) return;
    pdpOpen = false;
    pdp.hidden = true;
    pdp.innerHTML = "";
    $("main").hidden = false;
    document.title = title0;
    if (restore) scrollTo({ top: prevY, behavior: "instant" });
  };
  const route = () => {
    const m = /^#product-(\w+)$/.exec(location.hash);
    if (m && P[m[1]]) showPDP(m[1]);
    else hidePDP(true);
  };
  document.addEventListener(
    "click",
    (e) => {
      if (!pdpOpen) return;
      const bk = e.target.closest("[data-pback]");
      if (bk) {
        e.preventDefault();
        hidePDP(true);
        try {
          history.replaceState(null, "", location.href.split("#")[0]);
        } catch (x) {}
        return;
      }
      const a = e.target.closest('a[href^="#"]');
      if (a && !a.getAttribute("href").startsWith("#product-")) hidePDP(false);
    },
    true,
  );
  addEventListener("hashchange", route);
  route();
  const cio = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          cio.unobserve(e.target);
        }
      }),
    { rootMargin: "0px 0px -8% 0px" },
  );
  $$(".card", pg).forEach((c) => cio.observe(c));
  const FAV = "404-saved-v1";
  let saved = new Set();
  try {
    saved = new Set(
      (JSON.parse(localStorage.getItem(FAV)) || []).filter((k) => P[k]),
    );
  } catch (e) {}
  const order = $$(".card", pg);
  let flt = "all",
    qry = "",
    srt = "default";
  const syncFav = () => {
    $("#saved-n").textContent = saved.size;
    order.forEach((c) => {
      const on = saved.has(c.dataset.k),
        b = $("[data-fav]", c);
      b.setAttribute("aria-pressed", on);
      b.setAttribute(
        "aria-label",
        (on ? "Remove from saved: " : "Save ") + P[c.dataset.k].n,
      );
    });
  };
  const CAT = {
    gc: "hoodie",
    bh: "hoodie",
    dj: "jeans",
    cp: "cargo",
    bw: "sweatpants",
    bt: "sweatpants",
    gs: "sweatpants",
    ec: "headwear",
    bb: "headwear",
    dk: "shoes",
  };
  const apply = () => {
    const ok = (c) => {
      const k = c.dataset.k,
        p = P[k];
      return (
        (flt === "all" || (flt === "saved" ? saved.has(k) : CAT[k] === flt)) &&
        p.n.toLowerCase().includes(qry)
      );
    };
    const list = order.filter(ok),
      s = [...list];
    if (srt === "az")
      s.sort((a, b) => P[a.dataset.k].n.localeCompare(P[b.dataset.k].n));
    else if (srt === "low")
      s.sort((a, b) => P[a.dataset.k].pr - P[b.dataset.k].pr);
    else if (srt === "high")
      s.sort((a, b) => P[b.dataset.k].pr - P[a.dataset.k].pr);
    order.forEach((c) => (c.hidden = !list.includes(c)));
    s.forEach((c) => {
      pg.appendChild(c);
      c.classList.add("in");
    });
    $("#empty").hidden = !!list.length;
    syncFav();
  };
  const setFilter = (f) => {
    flt = f;
    $$(".chip").forEach((c) =>
      c.setAttribute("aria-pressed", c.dataset.f === f),
    );
    apply();
  };
  $$(".chip").forEach((ch) =>
    ch.addEventListener("click", () => setFilter(ch.dataset.f)),
  );
  $("#q").addEventListener("input", (e) => {
    qry = e.target.value.trim().toLowerCase();
    apply();
  });
  pg.addEventListener("click", (e) => {
    const f = e.target.closest("[data-fav]");
    if (!f) return;
    const k = f.closest(".card").dataset.k;
    saved.has(k) ? saved.delete(k) : saved.add(k);
    try {
      localStorage.setItem(FAV, JSON.stringify([...saved]));
    } catch (x) {}
    if (flt === "saved") apply();
    else syncFav();
  });
  apply();
  (() => {
    const cs = $$(".card", pg).filter((c) => $("img.alt", c));
    if (!cs.length) return;
    const vis = new Set(),
      hov = new Set(),
      io = new IntersectionObserver(
        (es) =>
          es.forEach((e) =>
            e.isIntersecting ? vis.add(e.target) : vis.delete(e.target),
          ),
        { threshold: 0.3 },
      );
    cs.forEach((c) => {
      io.observe(c);
    });
    const idx = new Map(cs.map((c) => [c, 0]));
    setInterval(() => {
      if (document.hidden) return;
      cs.forEach((c) => {
        if (!vis.has(c) || hov.has(c)) return;
        const al = $$("img.alt", c),
          i = (idx.get(c) + 1) % (al.length + 1);
        idx.set(c, i);
        al.forEach((a, n) => a.classList.toggle("show", n === i - 1));
      });
    }, 5000);
  })();
  $("[data-collections]").addEventListener("click", () => {
    $("#q").value = "";
    qry = "";
    setFilter("all");
    goTo($("#products"));
  });
  const AK = "404-account-v1";
  let acct = null;
  try {
    acct = JSON.parse(localStorage.getItem(AK));
  } catch (e) {}
  const ad = $("#acc-dialog"),
    ab = $("#open-account");
  const h = (t) =>
    String(t).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const renderAcc = () => {
    ab.classList.remove("on");
    $("#acc-body").innerHTML =
      `<div class="atabs" role="tablist"><button type="button" role="tab" class="atab" aria-selected="true" data-tab="in">Sign in</button><button type="button" role="tab" class="atab" aria-selected="false" data-tab="log">Log in</button></div>
<form data-form="in" novalidate><label class="fl">Name<input name="n" autocomplete="name"></label><label class="fl">Email<input name="e" type="email" autocomplete="email"></label><label class="fl">Password<input name="p" type="password" autocomplete="new-password"></label><button class="abtn" type="submit">Sign in</button></form>
<form data-form="log" novalidate hidden><label class="fl">Email<input name="e" type="email" autocomplete="email"></label><label class="fl">Password<input name="p" type="password" autocomplete="current-password"></label><button class="abtn" type="submit">Log in</button></form>`;
  };
  ab.onclick = () => {
    renderAcc();
    ad.showModal();
  };
  $("#close-acc").onclick = () => ad.close();
  ad.addEventListener("click", (e) => {
    const r = ad.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      return ad.close();
    const t = e.target.closest("[data-tab]");
    if (!t) return;
    $$("[data-tab]", ad).forEach((x) =>
      x.setAttribute("aria-selected", x === t),
    );
    $$("[data-form]", ad).forEach(
      (f) => (f.hidden = f.dataset.form !== t.dataset.tab),
    );
  });
  ad.addEventListener("submit", (e) => e.preventDefault());
  renderAcc();
  const qi = $("#q"),
    qx = $("#qx");
  const syncQx = () => {
    qx.hidden = !qi.value;
  };
  qi.addEventListener("input", syncQx);
  qi.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && qi.value) {
      qi.value = "";
      qry = "";
      apply();
      syncQx();
    }
  });
  qx.addEventListener("click", () => {
    qi.value = "";
    qry = "";
    apply();
    syncQx();
    qi.focus();
  });
  $("#yr").textContent = new Date().getFullYear();
  let curNav = "";
  const setNav = (id) =>
    $$("[data-nav]").forEach((a) =>
      a.classList.toggle("act", a.dataset.nav === id),
    );
  const navIO = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          curNav = e.target.id;
          setNav(scrollY < 80 ? "home" : curNav);
        }
      }),
    { threshold: 0.35 },
  );
  addEventListener(
    "scroll",
    () => setNav(scrollY < 80 ? "home" : curNav || "home"),
    { passive: true },
  );
  navIO.observe($("#home"));
  navIO.observe($("#products"));
  /* ---- checkout ---- */
  const CO = $("#co"),
    ORDER_URL = "",
    WA = "",
    OK = "404-orders-v1";
  const GOV = [
    "Cairo",
    "Giza",
    "Alexandria",
    "Qalyubia",
    "Sharqia",
    "Dakahlia",
    "Gharbia",
    "Monufia",
    "Beheira",
    "Kafr El Sheikh",
    "Damietta",
    "Port Said",
    "Ismailia",
    "Suez",
    "North Sinai",
    "South Sinai",
    "Faiyum",
    "Beni Suef",
    "Minya",
    "Assiut",
    "Sohag",
    "Qena",
    "Luxor",
    "Aswan",
    "Red Sea",
    "New Valley",
    "Matrouh",
  ];
  const sub = () => bag.reduce((a, e) => a + V[e.id].p.pr * e.quantity, 0),
    shipFor = (s) => (s >= FREE ? 0 : SHIP);
  const lines = () =>
    bag.map((e) => {
      const { p, v } = V[e.id];
      return { n: p.n, size: v, q: e.quantity, pr: p.pr, img: IMG(p) };
    });
  const itemsHTML = (ls) =>
    ls
      .map(
        (l) =>
          `<div class="co-it"><img src="${l.img}" alt=""><div><h3>${h(l.n)}</h3><p>Size ${h(l.size)} · Qty ${l.q}</p></div><span>${money(l.pr * l.q)}</span></div>`,
      )
      .join("");
  const totalsHTML = (s, sh) =>
    `<div class="co-tots"><div class="co-line"><span>Subtotal</span><span>${money(s)}</span></div><div class="co-line"><span>Shipping</span><span>${sh ? money(sh) : "Free"}</span></div><div class="co-line co-tot"><span>Total</span><span>${money(s + sh)}</span></div></div>`;
  const fld = (n, l, t, ac, x = "") =>
    `<label class="fl co-f">${l}<input name="${n}" type="${t}" autocomplete="${ac}" ${x}><span class="co-err" aria-live="polite"></span></label>`;
  const CK = "404-customer-v1",
    draft = {},
    FIELDS = ["name", "phone", "email", "gov", "city", "addr", "note"];
  const loadCust = () => {
    let c = {};
    try {
      c = JSON.parse(localStorage.getItem(CK) || "{}") || {};
    } catch (x) {}
    return Object.assign(c, draft);
  };
  const renderCO = () => {
    if (!bag.length) {
      CO.innerHTML = `<a class="pback" href="#products">← Back to products</a><h1 class="co-h">Checkout</h1><p class="co-empty">Your cart is empty.</p><a class="co-sec" style="max-width:280px;margin-top:20px" href="#products">Continue shopping</a>`;
      return;
    }
    const s = sub(),
      sh = shipFor(s);
    CO.innerHTML = `<a class="pback" href="#products">← Back to products</a><h1 class="co-h">Checkout</h1><div class="co-g"><form id="co-form" novalidate><h2>Contact</h2>${fld("name", "Full name", "text", "name")}<div class="co-row">${fld("phone", "Phone", "tel", "tel", 'inputmode="tel" placeholder="01XXXXXXXXX"')}${fld("email", "Email (optional)", "email", "email")}</div><h2>Delivery</h2><div class="co-row"><label class="fl co-f">Governorate<select name="gov" autocomplete="address-level1"><option value="">Select</option>${GOV.map((g) => `<option>${g}</option>`).join("")}</select><span class="co-err" aria-live="polite"></span></label>${fld("city", "City / area", "text", "address-level2")}</div>${fld("addr", "Street address, building, apartment", "text", "street-address")}${fld("note", "Delivery notes (optional)", "text", "off")}<h2>Payment</h2><label class="co-pay"><input type="radio" name="pay" value="cod" checked><span><b>Cash on delivery</b><br>Inspect your order before you pay.</span></label><button class="co-place" type="submit">Place order · ${money(s + sh)}</button><p class="co-fine">Free shipping on orders over ${FREE.toLocaleString("en-US")} EGP · 7-day exchange &amp; returns.</p></form><details class="co-sum" id="co-sum" open><summary><h2>Order summary</h2><span>${money(s + sh)}</span></summary>${itemsHTML(lines())}${totalsHTML(s, sh)}${sh ? `<p class="co-fine">Add ${money(FREE - s)} more for free shipping.</p>` : ""}<button type="button" class="co-edit" data-coedit>Edit cart</button></details></div>`;
    const f = $("#co-form"),
      c = loadCust();
    FIELDS.forEach((n) => {
      if (c[n]) f.elements[n].value = c[n];
    });
    $("#co-sum").open = !matchMedia("(max-width:749px)").matches;
  };
  const orderText = (o) =>
    [
      "404.EG — ORDER " + o.id,
      "",
      o.customer.name + " · " + o.customer.phone,
      o.customer.address + ", " + o.customer.city + ", " + o.customer.gov,
      o.customer.note ? "Note: " + o.customer.note : "",
      "",
    ]
      .concat(
        o.items.map(
          (i) => `${i.n} · Size ${i.size} · Qty ${i.q} · ${money(i.pr * i.q)}`,
        ),
      )
      .concat([
        "",
        "Subtotal: " + money(o.subtotal),
        "Shipping: " + (o.shipping ? money(o.shipping) : "Free"),
        "Total: " + money(o.total) + " (cash on delivery)",
      ])
      .filter((x, i, a) => x !== "" || a[i - 1] !== "")
      .join("\n");
  const renderDone = (o, ls) => {
    const wa = WA
      ? `https://wa.me/${WA}?text=` + encodeURIComponent(orderText(o))
      : "";
    CO.innerHTML = `<div class="co-ok"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M7.5 12.5l3 3 6-7"/></svg><h1 class="co-h">Thank you, ${h(o.customer.name.split(" ")[0])}</h1><p>Order <b>${h(o.id)}</b> · pay <b>${money(o.total)}</b> in cash on delivery to ${h(o.customer.city)}, ${h(o.customer.gov)}.</p><p>We’ll contact you on <b>${h(o.customer.phone)}</b> to confirm delivery.</p><div class="co-sum">${itemsHTML(ls)}${totalsHTML(o.subtotal, o.shipping)}</div><div class="co-acts">${wa ? `<a class="co-place" style="margin-top:0" href="${wa}" target="_blank" rel="noopener">Send order on WhatsApp</a>` : ""}<a class="co-sec" href="#products">Continue shopping</a></div></div>`;
    scrollTo({ top: 0, behavior: "instant" });
  };
  CO.addEventListener("input", (e) => {
    const t = e.target;
    if (t.name && t.form && t.form.id === "co-form" && FIELDS.includes(t.name))
      draft[t.name] = t.value;
  });
  CO.addEventListener("click", (e) => {
    if (e.target.closest("[data-coedit]")) $("#open-bag").click();
  });
  CO.addEventListener("input", (e) => {
    const t = e.target;
    if (t.getAttribute && t.getAttribute("aria-invalid") === "true") {
      t.setAttribute("aria-invalid", "false");
      const m = t.parentElement.querySelector(".co-err");
      if (m) m.textContent = "";
    }
  });
  CO.addEventListener("submit", async (e) => {
    const f = e.target.closest("#co-form");
    if (!f) return;
    e.preventDefault();
    const g = (n) => f.elements[n].value.trim(),
      phone = g("phone")
        .replace(/[\s-]/g, "")
        .replace(/^\+?20/, "0");
    const chk = [
      ["name", g("name").length >= 2, "Please enter your full name."],
      [
        "phone",
        /^01[0125]\d{8}$/.test(phone),
        "Enter a valid Egyptian mobile number.",
      ],
      [
        "email",
        !g("email") || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(g("email")),
        "Please enter a valid email.",
      ],
      ["gov", !!g("gov"), "Select your governorate."],
      ["city", g("city").length >= 2, "Enter your city or area."],
      ["addr", g("addr").length >= 6, "Enter your full address."],
    ];
    let first = null;
    chk.forEach(([n, ok, msg]) => {
      const el = f.elements[n];
      el.setAttribute("aria-invalid", String(!ok));
      el.parentElement.querySelector(".co-err").textContent = ok ? "" : msg;
      if (!ok && !first) first = el;
    });
    if (first) {
      first.focus();
      return;
    }
    const btn = $(".co-place", f),
      bt = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Placing your order…";
    const ls = lines(),
      s = sub(),
      sh = shipFor(s);
    const o = {
      id: "404-" + Date.now().toString(36).toUpperCase().slice(-6),
      date: new Date().toISOString(),
      customer: {
        name: g("name"),
        phone,
        email: g("email"),
        gov: g("gov"),
        city: g("city"),
        address: g("addr"),
        note: g("note"),
      },
      payment: "Cash on delivery",
      items: ls.map(({ n, size, q, pr }) => ({ n, size, q, pr })),
      subtotal: s,
      shipping: sh,
      total: s + sh,
    };
    if (ORDER_URL) {
      try {
        const r = await fetch(ORDER_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(o),
        });
        if (!r.ok) throw 0;
      } catch (x) {
        btn.disabled = false;
        btn.textContent = bt;
        toast("Could not send your order. Please try again.");
        return;
      }
    }
    try {
      const a = JSON.parse(localStorage.getItem(OK) || "[]");
      a.unshift(o);
      localStorage.setItem(OK, JSON.stringify(a.slice(0, 20)));
    } catch (x) {}
    try {
      localStorage.setItem(
        CK,
        JSON.stringify({
          name: o.customer.name,
          phone,
          email: o.customer.email,
          gov: o.customer.gov,
          city: o.customer.city,
          addr: o.customer.address,
        }),
      );
    } catch (x) {}
    FIELDS.forEach((k) => delete draft[k]);
    bag = [];
    save();
    renderBag();
    renderDone(o, ls);
  });
  let coOpen = false;
  const coRoute = () => {
    if (location.hash === "#checkout") {
      coOpen = true;
      $("main").hidden = true;
      pdp.hidden = true;
      CO.hidden = false;
      renderCO();
      const h1 = $(".co-h", CO);
      if (h1) {
        h1.tabIndex = -1;
        h1.focus({ preventScroll: true });
      }
      document.title = "Checkout — 404.eg";
      scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    if (!coOpen) return;
    coOpen = false;
    CO.hidden = true;
    CO.innerHTML = "";
    if (!pdpOpen) {
      $("main").hidden = false;
      document.title = title0;
    }
    if (location.hash === "#products") $("#products").scrollIntoView();
  };
  $("#go-checkout").onclick = () => {
    dlg.close();
    if (location.hash === "#checkout") coRoute();
    else location.hash = "checkout";
  };
  dlg.addEventListener("close", () => {
    if (coOpen && $("#co-form")) renderCO();
  });
  addEventListener("hashchange", coRoute);
  coRoute();
})();

(() => {
  const T = "button:not(.fav):not(.nb):not(.fk):not(.hm):not(:disabled)";
  document.addEventListener(
    "pointerdown",
    (e) => {
      if (e.button > 0 || !e.target.closest) return;
      const b = e.target.closest(T);
      if (!b) return;
      if (getComputedStyle(b).position === "static")
        b.style.position = "relative";
      b.style.overflow = "hidden";
      const r = b.getBoundingClientRect(),
        d =
          Math.hypot(
            Math.max(e.clientX - r.left, r.right - e.clientX),
            Math.max(e.clientY - r.top, r.bottom - e.clientY),
          ) * 2,
        i = document.createElement("i");
      i.className = "rpl";
      i.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
      b.appendChild(i);
      setTimeout(() => i.remove(), 700);
    },
    { passive: true },
  );
})();

document.addEventListener("click", (e) => {
  const b = e.target.closest(".chip[data-f=saved]");
  if (!b) return;
  b.classList.remove("pop");
  void b.offsetWidth;
  b.classList.add("pop");
  setTimeout(() => b.classList.remove("pop"), 700);
});

(() => {
  const ann = document.querySelector(".ann"),
    mq = document.querySelector(".mq");
  if (!ann || !mq) return;
  const SLOW = 0.25;
  let rate = 1,
    goal = 1,
    raf = 0;
  const tick = () => {
    const a = mq.getAnimations().find((x) => x.animationName === "mq");
    if (!a) {
      raf = 0;
      return;
    }
    rate += (goal - rate) * 0.08;
    if (Math.abs(goal - rate) < 0.005) rate = goal;
    a.playbackRate = rate;
    raf = rate === goal ? 0 : requestAnimationFrame(tick);
  };
  const set = (g) => {
    goal = g;
    if (!raf) raf = requestAnimationFrame(tick);
  };
  ann.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "mouse") set(SLOW);
  });
  ann.addEventListener("pointerleave", () => set(1));
})();

(() => {
  const f = document.getElementById("ft-form");
  if (!f) return;
  const i = document.getElementById("ft-email"),
    m = document.getElementById("ft-msg");
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.value.trim());
    m.textContent = ok
      ? "Thanks — you’re on the list."
      : "Please enter a valid email.";
    if (ok) i.value = "";
  });
})();

(() => {
  const q = (s) => document.querySelector(s);
  document.addEventListener("click", (e) => {
    const sa = e.target.closest("[data-shopall]");
    if (sa) {
      q(".chip[data-f=all]").click();
      q("#products").scrollIntoView({ behavior: "smooth" });
      return;
    }
    const g = e.target.closest("[data-gocat]");
    if (g) {
      q(".chip[data-f=" + g.dataset.gocat + "]").click();
      q("#products").scrollIntoView({ behavior: "smooth" });
    }
  });
})();

(() => {
  const $ = (q, r = document) => r.querySelector(q),
    $$ = (q, r = document) => [...r.querySelectorAll(q)];
  const MS = 380,
    EASE = "cubic-bezier(.22,.8,.24,1)";
  let d = null;
  const clean = (s) => {
    if (s.done) return;
    s.done = true;
    $$(".gms", s.m).forEach((x) => x.remove());
    s.img.style.transition = s.img.style.transform = "";
    s.m.classList.remove("drag");
    if (d === s) d = null;
  };
  const move = (s, x, anim) =>
    [
      [s.img, 0],
      [s.prev, -1],
      [s.next, 1],
    ].forEach(([el, o]) => {
      el.style.transition = anim ? `transform ${MS}ms ${EASE}` : "none";
      el.style.transform = `translate3d(${o * s.w + x}px,0,0)`;
    });
  const side = (src) => {
    const i = new Image();
    i.src = src;
    i.alt = "";
    i.className = "gms";
    i.draggable = false;
    return i;
  };
  document.addEventListener("pointerdown", (e) => {
    const m = e.target.closest(".gm");
    if (
      !m ||
      d ||
      !e.isPrimary ||
      (e.pointerType === "mouse" && e.button !== 0)
    )
      return;
    const gal = m.closest(".gal"),
      th = $$("[data-thumb]", gal);
    if (th.length < 2) return;
    const i = Math.max(
        0,
        th.findIndex((x) => x.getAttribute("aria-current") === "true"),
      ),
      at = (k) => th[(i + k + th.length) % th.length];
    d = {
      m,
      img: $("img", m),
      th,
      at,
      id: e.pointerId,
      sx: e.clientX,
      sy: e.clientY,
      w: m.clientWidth,
      dx: 0,
      v: 0,
      lx: e.clientX,
      lt: e.timeStamp,
      on: false,
    };
    d.prev = side(at(-1).dataset.src);
    d.next = side(at(1).dataset.src);
  });
  document.addEventListener("pointermove", (e) => {
    const s = d;
    if (!s || s.end || e.pointerId !== s.id) return;
    let x = e.clientX - s.sx;
    const y = e.clientY - s.sy;
    if (!s.on) {
      if (Math.abs(x) < 5 && Math.abs(y) < 5) return;
      if (Math.abs(y) > Math.abs(x)) {
        d = null;
        return;
      }
      s.on = true;
      s.m.append(s.prev, s.next);
      s.m.classList.add("drag");
      try {
        s.m.setPointerCapture(s.id);
      } catch (_) {}
    }
    const dt = e.timeStamp - s.lt;
    if (dt > 0) {
      s.v = (e.clientX - s.lx) / dt;
      s.lx = e.clientX;
      s.lt = e.timeStamp;
    }
    s.dx = Math.max(-s.w, Math.min(s.w, x));
    move(s, s.dx, false);
  });
  const release = (e, cancel) => {
    const s = d;
    if (!s || s.end || e.pointerId !== s.id) return;
    if (!s.on) {
      d = null;
      return;
    }
    s.end = true;
    s.m.classList.remove("drag");
    const flick =
      Math.abs(s.v) > 0.4 && e.timeStamp - s.lt < 100 && s.v * s.dx > 0;
    const dir =
      !cancel && (Math.abs(s.dx) > s.w * 0.22 || flick)
        ? s.dx < 0
          ? 1
          : -1
        : 0;
    move(s, -dir * s.w, true);
    setTimeout(async () => {
      if (s.done) return;
      if (dir) {
        const n = s.at(dir);
        s.img.src = n.dataset.src;
        s.th.forEach((x) => x.setAttribute("aria-current", x === n));
        n.scrollIntoView({ block: "nearest", inline: "nearest" });
        const top = dir > 0 ? s.next : s.prev;
        top.style.transition = "none";
        top.style.transform = "none";
        s.img.style.transition = "none";
        s.img.style.transform = "";
        try {
          await s.img.decode();
        } catch (_) {}
      }
      clean(s);
    }, MS);
  };
  document.addEventListener("pointerup", (e) => release(e, false));
  document.addEventListener("pointercancel", (e) => release(e, true));
  document.addEventListener(
    "click",
    (e) => {
      if (d && e.target.closest("[data-thumb]")) clean(d);
    },
    true,
  );
  document.addEventListener("dragstart", (e) => {
    if (e.target.closest && e.target.closest(".gm")) e.preventDefault();
  });
})();

["selectstart", "dragstart", "contextmenu"].forEach((t) =>
  document.addEventListener(t, (e) => {
    const x = e.target;
    if (x.closest && x.closest("img,.gm,.pm")) e.preventDefault();
  }),
);
