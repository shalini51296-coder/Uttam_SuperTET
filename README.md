# Super TET 2026 — Android app

UP Assistant Teacher (Super TET) 2026 mock-test series, packaged as an installable
Android app (works fully offline, no server, no login required).

## What's inside
- **Question engine** (`www/js/engine.js` + `content-*.js` + `gen-*.js`): 113 syllabus
  micro-topics across all 12 official UPESSC sections (GK, Reasoning, Hindi, Sanskrit,
  English, Science, Maths, Environment & Social Studies, Teaching Skills, Child
  Psychology, IT, Life Skills). Every paper it builds is checked by `SUP.validate()`
  against the official syllabus weightage, marking scheme (+3 / -1), and duplicate-free
  question rules before it's shown to the user.
- **App shell** (`www/index.html`): a self-contained UI — no Tailwind/Font Awesome/CDN
  dependency, just plain CSS and inline SVG icons, so it can never fail to load offline.
  Three modes:
  - **Mock Test** — 20 fixed, pre-validated full papers (120 Q / 120 min) + an
    unlimited "Fresh Random Test" button + an adaptive weak-topic retake.
  - **Subject-wise** — a 30-question focused quiz for any of the 12 subjects.
  - **Topic-wise** — a 15-question drill for any of the 113 micro-topics, searchable.
  Every attempt gets a scorecard (subject-wise bars + topic heatmap) and a full
  Solutions Review screen with explanations.

## Get the APK (about 10 minutes, no Android Studio needed)

1. Create a free account at github.com and make a **new private repository**.
2. Upload everything in this folder to it (Add file → Upload files).
   Important: the hidden `.github` folder must be uploaded too.
   If your browser skips it, use Add file → Create new file, type the name
   `.github/workflows/build-apk.yml`, and paste the contents of that file.
3. Open the **Actions** tab → **Build Android APK** → **Run workflow**.
4. After 4–8 minutes, open the finished run and download **Super-TET-2026-apk**
   from the *Artifacts* section (it is a .zip; unzip to get `Super-TET-2026.apk`).
5. Copy the APK to your phone, tap it, and allow "Install unknown apps" when asked.

## Adding or editing questions later
All content lives in `www/js/content-*.js` and `www/js/gen-*.js` as plain,
human-editable JavaScript — mostly pipe-delimited lines like:
```
प्रश्न हिन्दी में~Question in English | सही उत्तर~Correct | ग़लत१~Wrong1 | ग़लत२~Wrong2 | ग़लत३~Wrong3
```
Edit a file, run `node tools/probe.js` locally to check it still builds cleanly
(Node.js required), commit, and re-run the GitHub Action. It installs over the old
app and keeps saved local stats, because the signing key is fixed
(`signing/debug.keystore`). Keep the repository private.

## Notes
- The APK is debug-signed: perfect for installing on your own / your students'
  phones. Publishing on Google Play needs a proper release build (AAB).
- No login/accounts — all progress (test history, weak-topic tracking) is stored
  locally on the device via `localStorage`. Uninstalling the app or clearing its
  storage erases it.
