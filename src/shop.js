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
  // the 3D store is gone: its buttons ("see it on the shelf", the 3D checkout) go with it
  for (const k of ["show", "checkout", "add", "pause"]) delete core.listHooks[k];
  core.syncList();
  ui.noglMsg.textContent = msg || "The 3D store could not open on this browser, so here is everything on the shelves as a list.";
  ui.nogl.hidden = false; ui.intro.hidden = true; ui.hud.hidden = true;
  ui.list.classList.add("is-fallback");
  openList();
}
window.__saelleFallback = fallback;
ui.retry.addEventListener("click", () => { const u = new URL(location.href); u.searchParams.delete("list"); u.searchParams.set("t", Date.now().toString(36)); location.href = u.href; });

async function load3D() {
  if (params.has("list")) throw new Error("list only");
  if (!webglOK()) throw new Error("no webgl");
  // three.js and GSAP ship inside store.js on this same site, so no outside CDN can block the 3D store
  const url = new URL("store.js?v=__BUILD__", document.baseURI).href;
  let mod, tries = 0;
  for (;;) {
    try { mod = await import(tries ? url + "&r=" + tries : url); break; }
    catch (e) { if (++tries > 2 || !navigator.onLine) throw e; await new Promise(r => setTimeout(r, 1500 * tries)); } // flaky network: try again
  }
  await mod.start();
}
// slow networks: say so after a while, and point at the list (which already works)
const slow = setTimeout(() => { if (ui.enter.disabled) ui.load.textContent = "Still loading the 3D store… you can browse the list meanwhile."; }, 20000);
load3D().then(() => clearTimeout(slow), (err) => {
  clearTimeout(slow);
  console.warn("3D store unavailable:", err && err.message);
  const m = err && err.message;
  if (m === "no webgl") ui.retry.hidden = true; // nothing to retry: this browser has no 3D graphics
  fallback(m === "list only" ? "Here is everything on the shelves. The 3D walk-in store is one tap away." : m === "no webgl" ? "This browser has 3D graphics turned off, so here is everything on the shelves as a list." : undefined);
});
