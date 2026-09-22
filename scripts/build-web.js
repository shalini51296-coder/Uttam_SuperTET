// Safety check for the offline-only build: www/index.html must be fully
// self-contained (no CDN calls for CSS/fonts/JS), since the app is meant
// to work with zero internet access. The UI itself uses hand-written CSS
// and inline SVG icons, so there is nothing else to compile or copy here.
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "www", "index.html"), "utf8");

const banned = ["cdn.tailwindcss.com", "cdnjs.cloudflare.com", "fonts.googleapis.com", "unpkg.com"];
for (const bad of banned) {
  if (html.includes(bad)) throw new Error("www/index.html still references " + bad + " — the app must work fully offline.");
}

console.log("Offline-build check passed: www/index.html has no external CDN dependencies.");
