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
  listBody: $("#st-list-body"), introList: $("#st-intro-list"), nogl: $("#st-nogl"),
  listSearch: $("#st-q"), listChips: $("#st-chips"), listPrice: $("#st-price"), listSort: $("#st-sort"), listCount: $("#st-count"), listEmpty: $("#st-list-empty"),
  listSum: $("#st-list-sum"), listPay: $("#st-list-pay"),
  pd: $("#st-pd"), pdImg: $("#st-pd-img"), pdArt: $("#st-pd-art"), pdKick: $("#st-pd-kick"), pdName: $("#st-pd-name"), pdSpec: $("#st-pd-spec"), pdPrice: $("#st-pd-price"),
  pdDesc: $("#st-pd-desc"), pdUse: $("#st-pd-use"), pdKey: $("#st-pd-key"), pdAdd: $("#st-pd-add"), pdShelf: $("#st-pd-shelf"), pdClose: $("#st-pd-close"),
  sound: [...document.querySelectorAll("[data-sound-toggle]")],
};

// ---------------- basket state (shared with the 3D store) ----------------
const KEY = "saelle-basket";
export const S = { basket: [], thumbs: {}, has3D: false };
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
export function renderList() {
  const q = norm(filt.q.trim()), band = PRICE_BANDS.find(b => b.id === filt.price) || PRICE_BANDS[0];
  let list = PRODUCTS.filter(p => (filt.sec === "all" || p.sec === filt.sec) && band.test(p) &&
    (!q || norm(`${p.name} ${p.note} ${SEC_BY_ID[p.sec].name} ${(DETAILS[p.id] || []).join(" ")}`).includes(q)));
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
  if (listHooks.add) listHooks.add(id); else { domAdd(id); sound.play("add"); }
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
  ui.listPay.hidden = !t.n || !listHooks.checkout;
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
  ui.list.hidden = false; ui.hud.inert = true; ui.dots.inert = true;
  requestAnimationFrame(() => ui.list.classList.add("is-on"));
  listHooks.pause && listHooks.pause(true);
  ui.listSearch.focus({ preventScroll: true });
}
export function closeList() {
  if (!S.has3D) return; // without 3D the list is the store
  ui.list.classList.remove("is-on"); ui.hud.inert = false; ui.dots.inert = false;
  listHooks.pause && listHooks.pause(false);
  setTimeout(() => { ui.list.hidden = true; }, 300);
  if (listOpener && listOpener.isConnected && !listOpener.closest("[inert],[hidden]")) listOpener.focus({ preventScroll: true });
}
ui.listBtn.addEventListener("click", openList);
ui.introList.addEventListener("click", openList);
ui.listClose.addEventListener("click", closeList);

// ---------------- product page: large preview, description, how to use, ingredients ----------------
let pdId = null, pdOpener = null, pdToken = 0;
export function openDetail(id, opener) {
  const p = BY_ID[id]; if (!p) return;
  pdId = id; pdOpener = opener || document.activeElement;
  const d = DETAILS[id] || [p.note, "", ""];
  ui.pdKick.textContent = `${SEC_BY_ID[p.sec].n} · ${SEC_BY_ID[p.sec].name}` + (p.hero ? " · New" : "");
  ui.pdName.textContent = p.name; ui.pdSpec.textContent = p.size; ui.pdPrice.textContent = fmt(p.price);
  ui.pdDesc.textContent = d[0]; ui.pdUse.textContent = d[1]; ui.pdKey.textContent = d[2];
  ui.pdUse.parentElement.hidden = !d[1]; ui.pdKey.parentElement.hidden = !d[2];
  artFor(p, ui.pdArt);
  const small = S.thumbs[id];
  if (small) { ui.pdImg.src = small; ui.pdImg.hidden = false; ui.pdArt.hidden = true; } else { ui.pdImg.hidden = true; ui.pdArt.hidden = false; }
  const tok = ++pdToken;
  if (listHooks.preview) listHooks.preview(id).then(url => { if (tok === pdToken && url) { ui.pdImg.src = url; ui.pdImg.hidden = false; ui.pdArt.hidden = true; } }).catch(() => {});
  ui.pdShelf.hidden = !listHooks.show;
  syncDetail();
  ui.pd.hidden = false; requestAnimationFrame(() => ui.pd.classList.add("is-on"));
  setTimeout(() => ui.pdClose.focus({ preventScroll: true }), 30);
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
  if (pdOpener && pdOpener.isConnected && !pdOpener.closest("[inert]")) pdOpener.focus({ preventScroll: true });
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
// keep Tab inside the product page while it is open
ui.pd.addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;
  const f = [...ui.pd.querySelectorAll("button:not([hidden]), [href], input")].filter(x => !x.closest("[hidden]"));
  if (!f.length) return; const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
export { PRODUCTS, BY_ID, SECTIONS, SEC_BY_ID, fmt };
