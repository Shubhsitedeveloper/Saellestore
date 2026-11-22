// Builds the store in two parts:
//  - index.html: the page, styles and the small "shop" script (product list, filters, basket,
//    product pages). It works on its own, so the list is usable at once and on any browser.
//  - store.js: the 3D store (three.js stays on its CDN). The page loads it behind the list and
//    falls back to the list if this browser can't run it.
import { build } from "esbuild";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";
const dir = path.dirname(fileURLToPath(import.meta.url));
const minify = !process.env.DEV;
// store.js reads the shop's live state through core-shim.js instead of bundling a second copy
const shim = { name: "core-shim", setup(b) { b.onResolve({ filter: /\/core\.js$/ }, (a) => (a.importer.endsWith("core-shim.js") ? undefined : { path: `${dir}/src/core-shim.js` })); } };
const store = await build({ entryPoints: [`${dir}/src/store.js`], bundle: true, format: "esm", write: false, minify, external: ["three", "three/addons/*"], target: "es2020", charset: "utf8", plugins: [shim] });
const sjs = store.outputFiles[0].text;
const hash = crypto.createHash("sha1").update(sjs).digest("hex").slice(0, 10);
fs.writeFileSync(`${dir}/store.js`, sjs);
const shop = await build({ entryPoints: [`${dir}/src/shop.js`], bundle: true, format: "esm", write: false, minify, target: "es2020", charset: "utf8" });
const js = shop.outputFiles[0].text.replace("__BUILD__", hash);
const shell = fs.readFileSync(`${dir}/src/shell.html`, "utf8");
const css = fs.readFileSync(`${dir}/src/ui.css`, "utf8");
const page = shell.replace("/*CSS*/", () => css).replace("/*APP*/", () => js.replace(/<\/script/g, "<\\/script"));
fs.writeFileSync(`${dir}/index.html`, `<!doctype html>\n<html lang="en">\n${page}</html>\n`);
console.log("index.html", (page.length / 1024).toFixed(0) + " KB,", "store.js", (sjs.length / 1024).toFixed(0) + " KB,", hash);
