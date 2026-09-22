/* Builds every item of every registered topic once and reports errors.  node tools/probe.js [topicPrefix] */
const path = require('path'), fs = require('fs');
const dir = path.join(__dirname, '..', 'www', 'js');
require(path.join(dir, 'engine.js'));
const files = fs.readdirSync(dir).filter(f => /^(gen|content)-.*\.js$/.test(f)).sort();
files.forEach(f => require(path.join(dir, f)));
const S = globalThis.SUP, pre = process.argv[2] || '';
let bad = 0;
Object.keys(S.topics).filter(id => id.startsWith(pre)).forEach(id => {
  const t = S.topics[id]; let n = 0, errs = [];
  if (t.kind === 'bank') t.items.forEach((it, i) => { try { const q = it(S.RNG(i + 7)); n++; if (q.options_en.length !== 4) errs.push('opts'); } catch (e) { errs.push(e.message.slice(0, 80)); } });
  else if (t.kind === 'group') t.groups.forEach(g => g.qs.forEach(q => { try { S.mc(S.RNG(3), q.q, q.a, q.w); n++; } catch (e) { errs.push(e.message.slice(0, 80)); } }));
  else { for (let i = 0; i < 50; i++) { try { t.make(S.RNG(i)); n++; } catch (e) {} } }
  if (errs.length) bad++;
  console.log(id.padEnd(16), t.kind.padEnd(6), String(n).padStart(4), errs.length ? 'ERR ' + errs.slice(0, 3).join(' | ') : '');
});
console.log('files:', files.join(', '), '| topics with errors:', bad);
