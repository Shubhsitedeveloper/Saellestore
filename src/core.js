// SAELLE: everything that works without 3D. Basket state, the product list (search, categories, filters,
// sort), the product page, sound preferences. Loads instantly; the 3D store plugs into it when ready.
import { PRODUCTS, BY_ID, SECTIONS, SEC_BY_ID, DETAILS, PRICE_BANDS, fmt } from "./data.js";

export const params = new URLSearchParams(location.search);
export const $ = (s, r = document) => r.querySelector(s);
export const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
export const COARSE = matchMedia("(pointer: coarse)").matches;
export const LOW = params.has("low") || (!params.has("high") && (COARSE || innerWidth < 820 || (navigator.hardwareConcurrency || 8) <= 4));
export const FIXED = params.has("fixed"); // test runs: no adaptive quality

export const ui = {
  canvas: $("#st-canvas"), intro: $("#st-intro"), enter: $("#st-enter"), load: $("#st-load"), loadBar: $("#st-load-bar"),
  hud: $("#st-hud"), where: $("#st-where"), tourBtn: $("#st-tour"), cartBtn: $("#st-cart"), cartCount: $("#st-cart-count"), cartSum: $("#st-cart-sum"),
  toast: $("#st-toast"), toastText: $("#st-toast-text"), bar: $("#st-bar"), barImg: $("#st-bar-img"), barKick: $("#st-bar-kick"), barName: $("#st-bar-name"),
  barSpec: $("#st-bar-spec"), barPrice: $("#st-bar-price"), barAdd: $("#st-bar-add"), barMore: $("#st-bar-more"), hint: $("#st-hint"), dots: $("#st-dots"), tip: $("#st-tip"),
  slip: $("#st-slip"), slipList: $("#st-slip-list"), slipSub: $("#st-slip-sub"), slipTotal: $("#st-slip-total"), slipTax: $("#st-slip-tax"), slipCount: $("#st-slip-count"),
  slipClose: $("#st-slip-close"), slipForm: $("#st-slip-form"), slipName: $("#st-name"), slipHead: $("#st-slip-head"), slipDone: $("#st-slip-done"),
  slipAgain: $("#st-slip-again"), slipEmpty: $("#st-slip-empty"), slipOrder: $("#st-slip-order"), slipDate: $("#st-slip-date"), slipThanks: $("#st-slip-thanks"),
  confetti: $("#st-confetti"), joy: $("#st-joy"), joyKnob: $("#st-joy-knob"), listBtn: $("#st-list-btn"), list: $("#st-list"), listClose: $("#st-list-close"),
  listBody: $("#st-list-body"), introList: $("#st-intro-list"), nogl: $("#st-nogl"), noglMsg: $("#st-nogl-msg"), retry: $("#st-retry"),
  listSearch: $("#st-q"), listChips: $("#st-chips"), listPrice: $("#st-price"), listSort: $("#st-sort"), listCount: $("#st-count"), listEmpty: $("#st-list-empty"),
  listSum: $("#st-list-sum"), listPay: $("#st-list-pay"),
  pd: $("#st-pd"), pdImg: $("#st-pd-img"), pdArt: $("#st-pd-art"), pdKick: $("#st-pd-kick"), pdName: $("#st-pd-name"), pdSpec: $("#st-pd-spec"), pdPrice: $("#st-pd-price"),
  pdDesc: $("#st-pd-desc"), pdUse: $("#st-pd-use"), pdKey: $("#st-pd-key"), pdAdd: $("#st-pd-add"), pdShelf: $("#st-pd-shelf"), pdMedia: $("#st-pd-media"), pdPrev: $("#st-pd-prev"), pdNext: $("#st-pd-next"), pdPos: $("#st-pd-pos"), pdPair: $("#st-pd-pair"), pdClose: $("#st-pd-close"),
  sound: [...document.querySelectorAll("[data-sound-toggle]")], sr: $("#st-sr"), skip: $("#st-skip"),
};

// ---------------- basket state (shared with the 3D store) ----------------
const KEY = "saelle-basket";
export const S = { basket: [], thumbs: {}, has3D: false };
// product photos are rendered ahead of time and ship with the site, so the list has pictures at once, on any browser
for (const p of PRODUCTS) S.thumbs[p.id] = `assets/thumbs/${p.id}-s.jpg`;
const bigShot = (id) => `assets/thumbs/${id}.jpg`;
// a picture that fails to load gives way to the colour study of the pack
const imgFallback = (img, sw) => { img.onerror = () => { img.hidden = true; if (sw) sw.hidden = false; }; };
try {
  // merge duplicates and keep whole quantities 1..99, whatever an older version saved
  const raw = JSON.parse(localStorage.getItem(KEY) || "[]"), m = new Map();
  if (Array.isArray(raw)) for (const i of raw) { if (!i || !Object.hasOwn(BY_ID, i.id)) continue; const q = Math.floor(Number(i.q)); if (!(q > 0)) continue; m.set(i.id, Math.min(99, (m.get(i.id) || 0) + q)); }
  S.basket = [...m].map(([id, q]) => ({ id, q }));
} catch (e) { S.basket = []; }
export const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S.basket)); } catch (e) {} };
export const qtyOf = id => (S.basket.find(i => i.id === id) || {}).q || 0;
export const totals = () => ({ n: S.basket.reduce((a, i) => a + i.q, 0), sum: S.basket.reduce((a, i) => a + BY_ID[i.id].price * i.q, 0) });
// the 3D store fills these in: add(id), remove(id), pause(on), preview(id) -> Promise<url>, show(id), checkout()
export const listHooks = {};

// ---------------- sound: off by default, remembered, synthesised (no files to load) ----------------
const SKEY = "saelle-sound";
export const sound = {
  on: (() => { try { return localStorage.getItem(SKEY) === "on"; } catch (e) { return false; } })(),
  ctx: null,
  set(v) {
    this.on = !!v;
    try { localStorage.setItem(SKEY, this.on ? "on" : "off"); } catch (e) {}
    for (const b of ui.sound) { b.setAttribute("aria-pressed", String(this.on)); b.dataset.on = this.on ? "1" : "0"; const t = b.querySelector("[data-sound-label]"); if (t) t.textContent = this.on ? "Sound on" : "Sound off"; }
    if (this.on) this.play("tap");
  },
  play(name) {
    if (!this.on) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      const c = this.ctx || (this.ctx = new AC()); if (c.state === "suspended") c.resume();
      const t0 = c.currentTime, out = c.createGain(); out.gain.value = 0.07; out.connect(c.destination);
      const tone = (f, at, dur, type = "sine", vol = 1) => { const o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.value = f; g.gain.setValueAtTime(0, t0 + at); g.gain.linearRampToValueAtTime(vol, t0 + at + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur); o.connect(g); g.connect(out); o.start(t0 + at); o.stop(t0 + at + dur + 0.02); };
      if (name === "tap") tone(1320, 0, 0.06, "sine", 0.5);
      else if (name === "add") { tone(660, 0, 0.16); tone(990, 0.07, 0.22); }
      else if (name === "land") tone(220, 0, 0.12, "triangle", 0.8);
      else if (name === "pay") { tone(784, 0, 0.5); tone(988, 0.12, 0.5); tone(1319, 0.24, 0.8); }
      else if (name === "door") { const n = c.createBufferSource(), len = c.sampleRate * 0.9, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / len) * 0.5; n.buffer = buf; const f = c.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 500; n.connect(f); f.connect(out); n.start(t0); }
    } catch (e) { /* audio is decoration only */ }
  },
};
for (const b of ui.sound) b.addEventListener("click", () => sound.set(!sound.on));
// one quiet line for screen readers (the same text twice in a row still gets read)
let srT = 0;
// a tiny tick under the finger on phones that support it
export function buzz(ms = 10) { if (COARSE && !REDUCED && navigator.vibrate) try { navigator.vibrate(ms); } catch (e) {} }
export function announce(text) { clearTimeout(srT); ui.sr.textContent = ""; srT = setTimeout(() => { ui.sr.textContent = text; }, 60); }
sound.set(sound.on);

// ---------------- list: search, categories, price, sort ----------------
const filt = { q: "", sec: "all", price: "all", sort: "featured" };
const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
function artFor(p, el) {
  // until the 3D renders arrive (or without 3D at all): a colour study of the pack
  const L = p.look || {}; const a = L.glass || L.body || L.cream || "#f1e2da", b = L.liquid || L.cap || L.text || "#c9a46a";
  el.style.setProperty("--a", a); el.style.setProperty("--b", b);
  el.dataset.kind = p.kind;
}
export function buildList() {
  // category chips
  ui.listChips.innerHTML = "";
  for (const s of [{ id: "all", name: "All" }, ...SECTIONS]) {
    const b = document.createElement("button"); b.type = "button"; b.className = "st-chip"; b.dataset.sec = s.id;
    b.textContent = s.name; b.setAttribute("aria-pressed", String(filt.sec === s.id));
    b.addEventListener("click", () => { filt.sec = s.id; for (const c of ui.listChips.children) c.setAttribute("aria-pressed", String(c.dataset.sec === s.id)); renderList(); sound.play("tap"); });
    ui.listChips.appendChild(b);
  }
  ui.listPrice.innerHTML = PRICE_BANDS.map(p => `<option value="${p.id}">${p.label}</option>`).join("");
  ui.listSearch.addEventListener("input", () => { filt.q = ui.listSearch.value; renderList(); });
  ui.listPrice.addEventListener("change", () => { filt.price = ui.listPrice.value; renderList(); });
  ui.listSort.addEventListener("change", () => { filt.sort = ui.listSort.value; renderList(); });
  $("#st-reset").addEventListener("click", resetFilters);
  renderList();
}
function resetFilters() {
  Object.assign(filt, { q: "", sec: "all", price: "all", sort: "featured" });
  ui.listSearch.value = ""; ui.listPrice.value = "all"; ui.listSort.value = "featured";
  for (const c of ui.listChips.children) c.setAttribute("aria-pressed", String(c.dataset.sec === "all"));
  renderList();
}
// words people type for things the shelves name differently ("sec:" means a whole section)
const ALIAS = { perfume: "sec:scent", perfumes: "sec:scent", scent: "sec:scent", cologne: "sec:scent", attar: "sec:scent", fragrance: "sec:scent", makeup: "sec:colour", "make-up": "sec:colour", skincare: "sec:skin", face: "sec:skin",
  lipstick: "lip", lips: "lip", moisturiser: "cream|moistur|hydrat", moisturizer: "cream|moistur|hydrat", sunscreen: "spf", sunblock: "spf", eyes: "eye|mascara|lash", lashes: "mascara|lash", wash: "cleans", cleanser: "cleans", kajal: "eye|mascara" };
const HAY = {};
const hay = (p) => HAY[p.id] || (HAY[p.id] = { name: norm(`${p.name} ${p.kind}`), all: norm(`${p.name} ${p.note} ${p.size} ${p.kind} ${SEC_BY_ID[p.sec].name} ${(DETAILS[p.id] || []).join(" ")}`) });
const esc = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// a word matches the start of a word in the product's text ("rose" finds "rosewater", "spf" doesn't find "crispfresh")
const wordRe = (w) => new RegExp("(^|[^a-z0-9])" + esc(w));
function wordHit(p, w, field) {
  const h = hay(p)[field];
  if (wordRe(w).test(h)) return true;
  if (w.length > 3 && w.endsWith("s") && wordRe(w.slice(0, -1)).test(h)) return true;
  const al = Object.prototype.hasOwnProperty.call(ALIAS, w) ? ALIAS[w] : null; if (!al) return false;
  if (al.startsWith("sec:")) return p.sec === al.slice(4);
  return al.split("|").some(a => wordRe(a).test(h));
}
// every word must match, so "rose serum" finds rose serums, not everything rose
const matches = (p, words) => words.every(w => wordHit(p, w, "all"));
const score = (p, words) => words.reduce((s, w) => s + (wordHit(p, w, "name") ? 2 : 0), 0);
let lastQ = null;
export function renderList() {
  const words = norm(filt.q.trim()).split(/\s+/).filter(Boolean), band = PRICE_BANDS.find(b => b.id === filt.price) || PRICE_BANDS[0];
  const base = PRODUCTS.filter(p => band.test(p) && (!words.length || matches(p, words)));
  // how many each category chip would show with the current search and price
  for (const chip of ui.listChips.children) { const n = chip.dataset.sec === "all" ? base.length : base.filter(p => p.sec === chip.dataset.sec).length; let k = chip.querySelector(".st-chip__n"); if (!k) { k = document.createElement("span"); k.className = "st-chip__n"; chip.appendChild(k); } k.textContent = n; chip.classList.toggle("is-empty", !n); }
  let list = base.filter(p => filt.sec === "all" || p.sec === filt.sec);
  // typing re-draws the grid on every key: no entrance stagger then, it would flicker
  ui.listBody.classList.toggle("is-typing", lastQ !== null && lastQ !== filt.q); lastQ = filt.q;
  if (words.length && filt.sort === "featured") list = list.map((p, i) => [p, score(p, words), i]).sort((a, b) => b[1] - a[1] || a[2] - b[2]).map(x => x[0]); // best matches first
  if (filt.sort === "low") list = list.slice().sort((a, b) => a.price - b.price);
  else if (filt.sort === "high") list = list.slice().sort((a, b) => b.price - a.price);
  else if (filt.sort === "name") list = list.slice().sort((a, b) => a.name.localeCompare(b.name));
  ui.listBody.innerHTML = "";
  list.forEach((p, i) => {
    const li = document.createElement("li"); li.className = "st-card"; li.style.setProperty("--i", Math.min(i, 12));
    li.innerHTML = `<button type="button" class="st-card__open"><span class="st-card__art"><img alt="" loading="lazy" hidden><span class="st-card__swatch" aria-hidden="true"></span></span><span class="st-card__kick"></span><span class="st-card__name"></span><span class="st-card__note"></span></button>
      <div class="st-card__buy"><strong></strong><button type="button" class="st-btn st-btn--ghost st-card__add" data-id=""><span>Add</span></button></div>`;
    const open = li.querySelector(".st-card__open");
    open.setAttribute("aria-label", `${p.name}, ${fmt(p.price)}. Details`);
    li.querySelector(".st-card__kick").textContent = SEC_BY_ID[p.sec].name + (p.hero ? " · New" : "");
    li.querySelector(".st-card__name").textContent = p.name;
    li.querySelector(".st-card__note").textContent = `${p.size} · ${p.note}`;
    li.querySelector("strong").textContent = fmt(p.price);
    const img = li.querySelector("img"); const sw = li.querySelector(".st-card__swatch"); artFor(p, sw);
    imgFallback(img, sw); img.decoding = "async";
    if (S.thumbs[p.id]) { img.src = S.thumbs[p.id]; img.hidden = false; sw.hidden = true; }
    open.addEventListener("click", () => openDetail(p.id, open));
    const b = li.querySelector(".st-card__add"); b.dataset.id = p.id;
    b.addEventListener("click", () => addFromList(p.id));
    ui.listBody.appendChild(li);
  });
  ui.listCount.textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
  ui.listEmpty.hidden = list.length > 0;
  syncList();
}
export function setThumbs(t) {
  Object.assign(S.thumbs, t);
  ui.listBody.querySelectorAll(".st-card").forEach(li => { const id = li.querySelector(".st-card__add").dataset.id; const img = li.querySelector("img"); if (S.thumbs[id] && img.hidden) { img.src = S.thumbs[id]; img.hidden = false; li.querySelector(".st-card__swatch").hidden = true; } });
}
function addFromList(id) {
  if (listHooks.add && S.has3D) listHooks.add(id); else { domAdd(id); sound.play("add"); }
  syncList(); syncDetail();
}
export function domAdd(id) {
  const ex = S.basket.find(i => i.id === id);
  if (ex && ex.q >= 99) return;
  if (ex) ex.q++; else S.basket.push({ id, q: 1 });
  save(); syncCartDom();
}
export function syncCartDom() { const t = totals(); ui.cartCount.textContent = t.n; ui.cartSum.textContent = t.n ? fmt(t.sum) : "Basket"; syncListSum(); }
function syncListSum() {
  const t = totals();
  ui.listSum.textContent = t.n ? `${t.n} item${t.n === 1 ? "" : "s"} · ${fmt(t.sum)}` : "Basket is empty";
  ui.listPay.hidden = !t.n || !listHooks.checkout || !S.has3D;
}
export function syncList() {
  ui.listBody.querySelectorAll(".st-card__add").forEach(b => { const q = qtyOf(b.dataset.id); b.querySelector("span").textContent = q ? `Added · ${q}` : "Add"; b.classList.toggle("is-added", !!q); b.setAttribute("aria-label", q ? `Add one more, ${q} in basket` : "Add to basket"); });
  syncListSum();
}
ui.listPay.addEventListener("click", () => { closeList(); listHooks.checkout && listHooks.checkout(); });

let listOpener = null;
export function openList() {
  if (!ui.list.hidden) return;
  listOpener = document.activeElement;
  ui.list.hidden = false; ui.hud.inert = true; ui.dots.inert = true; ui.intro.inert = true; ui.skip.inert = true;
  requestAnimationFrame(() => ui.list.classList.add("is-on"));
  listHooks.pause && listHooks.pause(true);
  ui.listSearch.focus({ preventScroll: true });
}
export function closeList() {
  if (!S.has3D) return; // without 3D the list is the store
  ui.list.classList.remove("is-on"); ui.hud.inert = false; ui.dots.inert = false; ui.intro.inert = false; ui.skip.inert = false;
  listHooks.pause && listHooks.pause(false);
  setTimeout(() => { ui.list.hidden = true; }, 300);
  if (listOpener && listOpener.isConnected && listOpener !== document.body && !listOpener.closest("[inert],[hidden]")) listOpener.focus({ preventScroll: true });
  else if (ui.list.contains(document.activeElement)) document.activeElement.blur(); // keys go back to walking
}
ui.listBtn.addEventListener("click", openList);
ui.introList.addEventListener("click", openList);
ui.skip.addEventListener("click", openList);
ui.listClose.addEventListener("click", closeList);

// ---------------- product page: large preview, description, how to use, ingredients ----------------
let pdId = null, pdOpener = null, pdToken = 0;
// the render's own backdrop colour fills the space around it, so a wide panel shows the whole pack
ui.pdImg.addEventListener("error", () => { ui.pdImg.hidden = true; ui.pdArt.hidden = false; });
ui.pdImg.addEventListener("load", () => {
  try { const cv = document.createElement("canvas"); cv.width = cv.height = 1; const x = cv.getContext("2d"); x.drawImage(ui.pdImg, 2, 2, 6, 6, 0, 0, 1, 1); const d = x.getImageData(0, 0, 1, 1).data; ui.pdMedia.style.setProperty("--shot-bg", `rgb(${d[0]},${d[1]},${d[2]})`); ui.pdMedia.classList.add("has-bg"); } catch (e) { ui.pdMedia.classList.remove("has-bg"); }
});
export function openDetail(id, opener) {
  const p = BY_ID[id]; if (!p) return;
  pdId = id; pdOpener = opener || document.activeElement;
  const d = DETAILS[id] || [p.note, "", ""];
  ui.pdKick.textContent = `${SEC_BY_ID[p.sec].n} · ${SEC_BY_ID[p.sec].name}` + (p.hero ? " · New" : "");
  ui.pdName.textContent = p.name; ui.pdSpec.textContent = p.size; ui.pdPrice.textContent = fmt(p.price);
  ui.pdDesc.textContent = d[0]; ui.pdUse.textContent = d[1];
  ui.pdKey.innerHTML = ""; for (const k of (d[2] || "").split(/,\s*/).filter(Boolean)) { const li = document.createElement("li"); li.textContent = k; ui.pdKey.appendChild(li); }
  // step through the products in the order the list shows them (or all of them)
  const order = pdOrder(); const at = order.indexOf(id);
  ui.pdPos.textContent = `${at + 1} / ${order.length}`; ui.pdPrev.disabled = ui.pdNext.disabled = order.length < 2;
  // three others from the same section, nearest in price first
  ui.pdPair.innerHTML = "";
  PRODUCTS.filter(o => o.sec === p.sec && o.id !== id).sort((a, b) => Math.abs(a.price - p.price) - Math.abs(b.price - p.price)).slice(0, 3).forEach(o => {
    const li = document.createElement("li"); const b = document.createElement("button"); b.type = "button"; b.className = "st-pd__mini";
    b.innerHTML = `<span class="st-pd__mini-art"><img alt="" hidden><span class="st-card__swatch" aria-hidden="true"></span></span><span class="st-pd__mini-name"></span><span class="st-pd__mini-price"></span>`;
    b.querySelector(".st-pd__mini-name").textContent = o.name; b.querySelector(".st-pd__mini-price").textContent = fmt(o.price);
    b.setAttribute("aria-label", `${o.name}, ${fmt(o.price)}. Details`);
    const sw = b.querySelector(".st-card__swatch"); artFor(o, sw);
    if (S.thumbs[o.id]) { const im = b.querySelector("img"); imgFallback(im, sw); im.src = S.thumbs[o.id]; im.hidden = false; sw.hidden = true; }
    b.addEventListener("click", () => { openDetail(o.id, pdOpener); ui.pd.querySelector(".st-pd__card").scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" }); if (!ui.pd.contains(document.activeElement)) ui.pdClose.focus({ preventScroll: true }); });
    li.appendChild(b); ui.pdPair.appendChild(li);
  });
  { const L = p.look || {}; ui.pdMedia.style.setProperty("--tint", L.glass || L.body || L.cream || "#f3e6df"); }
  ui.pdUse.parentElement.hidden = !d[1]; ui.pdKey.parentElement.hidden = !d[2];
  artFor(p, ui.pdArt);
  const small = S.thumbs[id];
  ui.pdMedia.classList.remove("has-bg");
  if (small) { ui.pdImg.src = small; ui.pdImg.hidden = false; ui.pdArt.hidden = true; } else { ui.pdImg.hidden = true; ui.pdArt.hidden = false; }
  // then the large photo, swapped in once it has loaded
  const tok = ++pdToken; const big = new Image();
  big.onload = () => { if (tok === pdToken) { ui.pdImg.src = big.src; ui.pdImg.hidden = false; ui.pdArt.hidden = true; } };
  big.src = bigShot(id);
  ui.pdShelf.hidden = !(listHooks.show && S.has3D);
  syncDetail();
  ui.pdMedia.classList.remove("is-in"); void ui.pdMedia.offsetWidth; ui.pdMedia.classList.add("is-in");
  if (ui.pd.hidden || !ui.pd.classList.contains("is-on")) {
    ui.pd.hidden = false; requestAnimationFrame(() => ui.pd.classList.add("is-on"));
    setTimeout(() => ui.pdClose.focus({ preventScroll: true }), 30);
  }
  announce(`${p.name}, ${fmt(p.price)}`);
}
function syncDetail() {
  if (!pdId) return;
  const q = qtyOf(pdId);
  ui.pdAdd.querySelector("span").textContent = q ? `Add another · ${q} in basket` : "Add to basket";
}
export function closeDetail() {
  if (ui.pd.hidden) return;
  ui.pd.classList.remove("is-on"); pdId = null; pdToken++;
  setTimeout(() => { if (!pdId) ui.pd.hidden = true; }, 220);
  if (pdOpener && pdOpener.isConnected && pdOpener !== document.body && !pdOpener.closest("[inert]")) pdOpener.focus({ preventScroll: true });
  else if (ui.pd.contains(document.activeElement)) document.activeElement.blur();
}
function pdOrder() {
  // the list's current order when the list is open, otherwise every product
  const ids = !ui.list.hidden ? [...ui.listBody.querySelectorAll(".st-card__add")].map(b => b.dataset.id) : [];
  return ids.includes(pdId) ? ids : PRODUCTS.map(p => p.id);
}
function stepDetail(dir) { if (!pdId) return; const o = pdOrder(); const i = o.indexOf(pdId); openDetail(o[(i + dir + o.length) % o.length], pdOpener); }
ui.pdPrev.addEventListener("click", () => stepDetail(-1));
ui.pdNext.addEventListener("click", () => stepDetail(1));
ui.pd.addEventListener("keydown", (e) => { if (e.target.closest("input, select, textarea")) return; if (e.key === "ArrowLeft") { e.preventDefault(); stepDetail(-1); } else if (e.key === "ArrowRight") { e.preventDefault(); stepDetail(1); } });
// swipe the picture sideways on a phone to see the next product
{ let sx = 0, sy = 0, on = false;
  ui.pdMedia.addEventListener("touchstart", (e) => { const t = e.touches[0]; sx = t.clientX; sy = t.clientY; on = e.touches.length === 1; }, { passive: true });
  ui.pdMedia.addEventListener("touchend", (e) => { if (!on) return; on = false; const t = e.changedTouches[0]; const dx = t.clientX - sx, dy = t.clientY - sy; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) stepDetail(dx < 0 ? 1 : -1); }, { passive: true });
}
export const detailOpen = () => !ui.pd.hidden && ui.pd.classList.contains("is-on");
ui.pdAdd.addEventListener("click", () => { if (pdId) addFromList(pdId); });
ui.pdClose.addEventListener("click", closeDetail);
ui.pd.addEventListener("click", (e) => { if (e.target === ui.pd) closeDetail(); });
ui.pdShelf.addEventListener("click", () => { const id = pdId; closeDetail(); closeList(); if (listHooks.show) listHooks.show(id); });
addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (detailOpen()) { e.stopImmediatePropagation(); closeDetail(); }
  else if (!ui.list.hidden && S.has3D) { e.stopImmediatePropagation(); closeList(); }
}, true);
// keep Tab inside the product page (and the list) while it is open
const trap = (root) => (e) => {
  if (e.key !== "Tab") return;
  const f = [...root.querySelectorAll("button, [href], input, select")].filter(x => !x.disabled && !x.closest("[hidden]") && !x.closest("[inert]") && x.offsetParent !== null);
  if (!f.length) return; const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  else if (!root.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
};
ui.pd.addEventListener("keydown", trap(ui.pd));
ui.list.addEventListener("keydown", (e) => { if (!detailOpen()) trap(ui.list)(e); });
export { PRODUCTS, BY_ID, SECTIONS, SEC_BY_ID, fmt };
