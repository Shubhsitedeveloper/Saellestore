// SAELLE entry. The list, basket and product pages work at once; the 3D store loads behind them
// and plugs in when (and if) this browser can run it.
import * as core from "./core.js";
const { ui, S, buildList, syncCartDom, openList, params } = core;
window.__saelle = core;

buildList();
syncCartDom();

const loadScript = (src) => new Promise((res, rej) => { const s = document.createElement("script"); s.src = src; s.async = true; s.crossOrigin = "anonymous"; s.onload = res; s.onerror = () => rej(new Error("script " + src)); document.head.appendChild(s); });
function webglOK() {
  try { const c = document.createElement("canvas"); const gl = c.getContext("webgl2") || c.getContext("webgl"); if (!gl) return false; const ok = !gl.isContextLost(); gl.getExtension("WEBGL_lose_context")?.loseContext(); return ok; } catch (e) { return false; }
}
export function fallback(msg) {
  S.has3D = false;
  ui.nogl.textContent = msg || "Your browser could not open the 3D store, so here is everything on the shelves as a list.";
  ui.nogl.hidden = false; ui.intro.hidden = true; ui.hud.hidden = true;
  ui.list.classList.add("is-fallback");
  openList();
}
window.__saelleFallback = fallback;

async function load3D() {
  if (params.has("list")) throw new Error("list only");
  if (!webglOK()) throw new Error("no webgl");
  // gsap: first CDN, then a second one if that is blocked
  if (!window.gsap) await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js").catch(() => loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"));
  const url = new URL("store.js?v=__BUILD__", document.baseURI).href;
  let mod;
  if (window.HTMLScriptElement && HTMLScriptElement.supports && HTMLScriptElement.supports("importmap")) mod = await import(url);
  else {
    // Safari before 16.4 and other older browsers: teach them import maps first
    await loadScript("https://cdn.jsdelivr.net/npm/es-module-shims@1.8.3/dist/es-module-shims.js");
    mod = await window.importShim(url);
  }
  await mod.start();
}
// slow networks: say so after a while, and point at the list (which already works)
const slow = setTimeout(() => { if (ui.enter.disabled) ui.load.textContent = "Still loading the 3D store… you can browse the list meanwhile."; }, 20000);
load3D().then(() => clearTimeout(slow), (err) => {
  clearTimeout(slow);
  console.warn("3D store unavailable:", err && err.message);
  fallback(err && err.message === "list only" ? "Here is everything on the shelves." : undefined);
});
