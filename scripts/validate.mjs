import { readFile } from "node:fs/promises";
import vm from "node:vm";

const html = await readFile("prototype/current/index.html", "utf8");
const scriptMatches = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
if (scriptMatches.length !== 1) {
  throw new Error(`Expected one inline script block; found ${scriptMatches.length}`);
}
new vm.Script(scriptMatches[0][1]);

const required = [
  "Arcade POS",
  "Playhouse POS",
  "Massage Chairs POS",
  "Owner-only aggregate management dashboard",
  "Scoped to active register",
  "Multi-business Management Dashboard",
  "No live payment",
];
const missing = required.filter((value) => !html.includes(value));
if (missing.length) {
  throw new Error(`Missing required content: ${missing.join(", ")}`);
}

const secretLike = /(api[_-]?key|password|token|connection string|private key)/i.test(html);
if (secretLike) {
  throw new Error("Secret-like content detected in prototype/current/index.html");
}

console.log(`HTML_BYTES ${Buffer.byteLength(html)}`);
console.log("INLINE_JS_SYNTAX_PASS");
console.log("REQUIRED_SCOPE_CONTENT_PASS");
console.log("SECRET_SCAN_PASS");
