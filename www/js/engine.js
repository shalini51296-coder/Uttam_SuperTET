/* ===================================================================
   Super TET 2026 - question engine
   - seeded RNG (repeatable sets) + fresh random mocks
   - topic registry (computed generators, fact banks, passage groups)
   - BLUEPRINT copied from the UPESSC 2026 syllabus notice (guard rail)
   - validator that refuses to serve a paper that breaks the pattern
   Works in the browser and in Node (tools/validate.js).
   =================================================================== */
(function (g) {
'use strict';
const SUP = g.SUP = g.SUP || {};
const T = SUP.topics = {};
SUP.order = [];

/* ---------- exam rules (syllabus notice, points I-IV) ---------- */
SUP.EXAM = Object.freeze({ questions: 120, minutes: 120, correct: 3, wrong: -1, options: 4 });

/* ---------- RNG ---------- */
const hash = (s) => { let h = 2166136261 >>> 0; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function RNG(seed) {
  const f = mulberry32(seed >>> 0);
  const r = {
    next: f,
    int: (a, b) => a + Math.floor(f() * (b - a + 1)),
    pick: (arr) => arr[Math.floor(f() * arr.length)],
    chance: (p) => f() < p,
    shuffle: (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(f() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; },
    sample: (arr, n) => r.shuffle(arr).slice(0, n)
  };
  return r;
}
SUP.hash = hash; SUP.RNG = RNG;

/* ---------- bilingual helpers ---------- */
const P = (hi, en) => ({ hi: String(hi), en: String(en === undefined ? hi : en) });
const cell = (s) => { s = String(s).trim(); const i = s.indexOf('~'); return i < 0 ? P(s) : P(s.slice(0, i).trim(), s.slice(i + 1).trim()); };
function sub(tpl, m) {
  const t = cell(tpl); let hi = t.hi, en = t.en;
  Object.keys(m).forEach((k) => { const re = new RegExp('\\{' + k + '\\}', 'g'); hi = hi.replace(re, () => m[k].hi); en = en.replace(re, () => m[k].en); });
  return P(hi, en);
}
const nf = (x) => { const v = Math.round(x * 100) / 100; return String(Object.is(v, -0) ? 0 : v); };
const same = (a, b) => a.hi === b.hi || a.en === b.en;
SUP.P = P; SUP.cell = cell; SUP.nf = nf;

/* ---------- MCQ builder: shuffles options, tracks answer ---------- */
function mc(r, stem, correct, wrongs, extra) {
  const opts = [correct];
  for (const w of wrongs) { if (!opts.some((o) => same(o, w))) opts.push(w); }
  if (opts.length < 4) throw new Error('need 4 distinct options: ' + stem.en);
  const four = opts.slice(0, 4);
  const order = r.shuffle([0, 1, 2, 3]);
  const o = order.map((i) => four[i]);
  const q = {
    question_hi: stem.hi, question_en: stem.en,
    options_hi: o.map((x) => x.hi), options_en: o.map((x) => x.en),
    answer: order.indexOf(0),
    exp_hi: 'सही उत्तर: ' + correct.hi, exp_en: 'Correct answer: ' + correct.en
  };
  if (extra) {
    if (extra.exp) { q.exp_hi = extra.exp.hi; q.exp_en = extra.exp.en; }
    if (extra.passage) { q.passage_hi = extra.passage.hi; q.passage_en = extra.passage.en; }
  }
  return q;
}
SUP.mc = mc;

/* numeric distractors: plausible mistakes first, then near values */
function numWrongs(r, c, cands, o) {
  o = o || {};
  const isInt = o.int !== undefined ? o.int : Number.isInteger(c);
  const key = o.key || nf;
  const seen = new Set([key(c)]); const out = [];
  const add = (v) => {
    if (!isFinite(v)) return; if (isInt && !Number.isInteger(v)) return;
    if (o.min !== undefined && v < o.min) return; if (o.max !== undefined && v > o.max) return;
    const s = key(v); if (!seen.has(s)) { seen.add(s); out.push(v); }
  };
  r.shuffle(cands || []).forEach(add);
  let step = o.step || (isInt ? Math.max(1, Math.round(Math.abs(c) / 10)) : 0.5); let tries = 0;
  while (out.length < 3 && tries++ < 120) { add(c + r.int(1, 4) * step * (r.chance(0.5) ? 1 : -1)); if (tries > 60) step *= 2; }
  if (out.length < 3) throw new Error('numWrongs failed for ' + c);
  return r.shuffle(out).slice(0, 3);
}
function numMC(r, stem, c, cands, fmt, o, extra) {
  fmt = fmt || ((v) => P(nf(v)));
  return mc(r, stem, fmt(c), numWrongs(r, c, cands, o).map(fmt), extra);
}
SUP.numWrongs = numWrongs; SUP.numMC = numMC;

/* ---------- registration ---------- */
SUP.gen = (id, subject, hi, en, make) => { T[id] = { id, subject, hi, en, kind: 'gen', make }; SUP.order.push(id); };
SUP.def = (id, subject, hi, en, items) => { T[id] = { id, subject, hi, en, kind: 'bank', items }; SUP.order.push(id); };
SUP.group = (id, subject, hi, en, groups) => { T[id] = { id, subject, hi, en, kind: 'group', groups }; SUP.order.push(id); };

const lines = (text) => text.split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('//'));
const uniqBy = (arr, f) => { const s = new Set(); return arr.filter((x) => { const k = f(x); if (s.has(k)) return false; s.add(k); return true; }); };

/* MCQ lines:  question | correct | wrong1 | wrong2 | wrong3 | [explanation]
   every cell may be  hindi~english  (a single value is used for both languages) */
function parseMCQ(text) {
  return lines(text).filter((l) => l[0] !== '@').map((l) => {
    const c = l.split('|').map(cell);
    if (c.length < 5) throw new Error('MCQ line needs 5 cells: ' + l);
    return { q: c[0], a: c[1], w: [c[2], c[3], c[4]], e: c[5] || null };
  });
}
const buildMCQ = (r, it, passage) => mc(r, it.q, it.a, it.w, { exp: it.e || undefined, passage });
SUP.mcqItems = (text) => parseMCQ(text).map((it) => (r) => buildMCQ(r, it));

/* MAP table: rows  key | value ; f = ask value given key, r = ask key given value.
   Distractors always come from rows whose value differs from the correct one,
   so a many-to-one table can never produce two right answers. */
SUP.mapItems = (spec) => {
  const rows = lines(spec.rows).map((l) => { const c = l.split('|').map(cell); if (c.length < 2) throw new Error('MAP row: ' + l); return { k: c[0], v: c[1] }; });
  const fs = [].concat(spec.f || []), rs = [].concat(spec.r || []); const items = [];
  rows.forEach((row) => {
    if (fs.length) items.push((r) => {
      const pool = uniqBy(r.shuffle(rows.filter((x) => !same(x.v, row.v))), (x) => x.v.hi).filter((x, i, a) => a.findIndex((y) => y.v.en === x.v.en) === i).slice(0, 3);
      return mc(r, sub(r.pick(fs), { k: row.k, v: row.v }), row.v, pool.map((x) => x.v));
    });
    if (rs.length) items.push((r) => {
      const pool = uniqBy(r.shuffle(rows.filter((x) => !same(x.v, row.v) && !same(x.k, row.k))), (x) => x.k.hi).slice(0, 3);
      return mc(r, sub(r.pick(rs), { k: row.k, v: row.v }), row.k, pool.map((x) => x.k));
    });
  });
  return items;
};

/* ODD one out: lines  GroupName = item ; item ; item ...  (>=3 items per group) */
SUP.oddItems = (spec) => {
  const groups = lines(spec.text).map((l) => { const i = l.indexOf('='); return { name: cell(l.slice(0, i)), items: l.slice(i + 1).split(';').map(cell) }; });
  const items = [];
  groups.forEach((A) => { for (let v = 0; v < 2; v++) items.push((r) => {
    const B = r.pick(groups.filter((x) => x !== A));
    const three = r.sample(A.items, 3); const odd = r.pick(B.items);
    if (A.items.some((x) => same(x, odd))) throw new Error('overlap');
    return mc(r, cell(spec.q), odd, three, { exp: P('शेष तीनों ' + A.name.hi + ' हैं; ' + odd.hi + ' भिन्न है।', 'The other three are ' + A.name.en + '; ' + odd.en + ' is different.') });
  }); });
  return items;
};

/* passage groups: '@ passage' line then MCQ lines (\n inside passage = line break) */
SUP.groupItems = (text) => {
  const out = []; let cur = null;
  lines(text).forEach((l) => {
    if (l[0] === '@') { cur = { passage: cell(l.slice(1).replace(/\\n/g, '\n')), qs: [] }; out.push(cur); }
    else { const c = l.split('|').map(cell); if (c.length < 5) throw new Error('group line: ' + l); cur.qs.push({ q: c[0], a: c[1], w: [c[2], c[3], c[4]], e: c[5] || null }); }
  });
  return out;
};

/* ---------- BLUEPRINT (UPESSC notice: 120 Q, 120 min, +3 / -1) ---------- */
const HI = 14, SA = 8, EN = 8;                       // split of the 30 language marks (notice gives only the total)
const REASON = ['r.series', 'r.letter', 'r.coding', 'r.analogy', 'r.classify', 'r.direction', 'r.clock', 'r.calendar', 'r.blood', 'r.ineq', 'r.symbol', 'r.cube', 'r.venn', 'r.di', 'r.assert', 'r.binary', 'r.infer', 'r.group', 'r.puzzle'];
const MATHS = ['m.number', 'm.bodmas', 'm.decimal', 'm.place', 'm.fraction', 'm.interest', 'm.profit', 'm.percent', 'm.divis', 'm.factor', 'm.unitary', 'm.algebra', 'm.area', 'm.average', 'm.volume', 'm.ratio', 'm.identity', 'm.geometry', 'm.stats'];
SUP.blueprint = [
  { id: 'gk', group: 'gk', n: 25, bilingual: true, hi: 'सामान्य ज्ञान / समसामयिक घटनाएँ', en: 'General Knowledge & Current Affairs',
    syl_hi: 'अन्तर्राष्ट्रीय, राष्ट्रीय व प्रदेश से सम्बन्धित घटनाएँ, स्थान, व्यक्तित्व, रचनाएँ, पुरस्कार/खेल-कूद, भारतीय संस्कृति एवं कला', syl_en: 'International, national & UP affairs, places, personalities, works, awards/sports, Indian culture & art',
    parts: [{ fixed: [['gk.up', 5], ['gk.nat', 3], ['gk.world', 3], ['gk.pers', 3], ['gk.books', 3], ['gk.awards', 2], ['gk.sports', 3], ['gk.culture', 3]] }] },
  { id: 'reason', group: 'reason', n: 5, bilingual: true, hi: 'तार्किक ज्ञान', en: 'Reasoning',
    syl_hi: 'Analogies, Assertion-Reason, Binary logic, Classification, Clocks & Calendars, Coded inequalities, Coding-decoding, Critical reasoning, Series, Puzzles, Symbols, Venn, Dice & Cubes, Data interpretation, Direction, Grouping', syl_en: 'Analogies, assertion-reason, binary logic, classification, clocks & calendars, coded inequalities, coding-decoding, critical reasoning, series, puzzles, symbols, Venn, dice & cubes, data interpretation, direction, grouping',
    parts: [{ rot: { topics: REASON, n: 5 } }] },
  { id: 'hindi', group: 'lang', n: HI, bilingual: false, hi: 'हिन्दी', en: 'Hindi', syl_hi: 'व्याकरण एवं अपठित गद्यांश, पद्यांश', syl_en: 'Grammar, unseen prose & poetry',
    parts: [{ rot: { topics: ['hi.sandhi', 'hi.samas', 'hi.upsarg', 'hi.shabd', 'hi.vartani', 'hi.ling', 'hi.muhavare', 'hi.alankar', 'hi.sahitya'], n: HI - 5 } }, { fixed: [['hi.gady', 3], ['hi.pady', 2]] }] },
  { id: 'sanskrit', group: 'lang', n: SA, bilingual: false, hi: 'संस्कृत', en: 'Sanskrit', syl_hi: 'व्याकरण एवं अपठित गद्यांश, पद्यांश', syl_en: 'Grammar, unseen prose & verse',
    parts: [{ fixed: [['sa.shabd', 1], ['sa.dhatu', 1], ['sa.sandhi', 1], ['sa.samas', 1], ['sa.pratyay', 1], ['sa.karak', 1], ['sa.anuvad', 1], ['sa.subhashit', 1]] }] },
  { id: 'english', group: 'lang', n: EN, bilingual: false, hi: 'अंग्रेजी', en: 'English', syl_hi: 'Grammar, Comprehension', syl_en: 'Grammar, comprehension',
    parts: [{ fixed: [['en.grammar', 3], ['en.voice', 1], ['en.vocab', 1], ['en.compre', 3]] }] },
  { id: 'science', group: 'science', n: 8, bilingual: true, hi: 'विज्ञान', en: 'Science', syl_hi: 'दैनिक जीवन में विज्ञान, गति, बल, ऊर्जा, प्रकाश, ध्वनि, जीवों की दुनिया, मानव शरीर, स्वच्छता एवं पोषण, पर्यावरण एवं प्राकृतिक संसाधन, पदार्थ की अवस्थाएँ', syl_en: 'Daily-life science, motion, force, energy, light, sound, living world, human body, hygiene & nutrition, environment & resources, states of matter',
    parts: [{ rot: { topics: ['sci.motion', 'sci.light', 'sci.sound', 'sci.living', 'sci.body', 'sci.env', 'sci.matter', 'sci.daily'], n: 8 } }] },
  { id: 'maths', group: 'maths', n: 16, bilingual: true, hi: 'गणित', en: 'Mathematics', syl_hi: 'अंकीय क्षमता, संक्रियाएँ, दशमलव, स्थानीयमान, भिन्न, ब्याज, लाभ-हानि, प्रतिशत, विभाज्यता, गुणनखण्ड, ऐकिक नियम, बीजगणित, क्षेत्रफल, औसत, आयतन, अनुपात, सर्वसमिकाएँ, ज्यामिति, सांख्यिकी', syl_en: 'Numerical ability, operations, decimals, place value, fractions, interest, profit-loss, percentage, divisibility, factors, unitary method, algebra, area, average, volume, ratio, identities, geometry, statistics',
    parts: [{ rot: { topics: MATHS, n: 16 } }] },
  { id: 'evs', group: 'evs', n: 8, bilingual: true, hi: 'पर्यावरण एवं सामाजिक अध्ययन', en: 'Environment & Social Studies', syl_hi: 'पृथ्वी, नदियाँ, पर्वत, महासागर, प्राकृतिक सम्पदा, अक्षांश, सौरमण्डल, भारतीय भूगोल, स्वतंत्रता संग्राम, समाज सुधारक, संविधान, शासन व्यवस्था, यातायात एवं सड़क सुरक्षा, अर्थव्यवस्था, सांस्कृतिक विरासत, पर्यावरण संरक्षण, आपदा प्रबन्धन', syl_en: 'Earth, rivers, mountains, oceans, resources, latitudes, solar system, Indian geography, freedom struggle, reformers, constitution, governance, road safety, economy, heritage, conservation, disaster management',
    parts: [{ rot: { topics: ['evs.earth', 'evs.geo', 'evs.freedom', 'evs.reform', 'evs.const', 'evs.govt', 'evs.road', 'evs.econ', 'evs.heritage', 'evs.env', 'evs.disaster'], n: 8 } }] },
  { id: 'teaching', group: 'teaching', n: 8, bilingual: true, hi: 'शिक्षण कौशल', en: 'Teaching Skills', syl_hi: 'शिक्षण विधियाँ एवं कौशल, अधिगम सिद्धान्त, वर्तमान समाज एवं प्रारम्भिक शिक्षा, समावेशी शिक्षा, नवीन प्रयास, मूल्यांकन एवं मापन, आरम्भिक पठन कौशल, शैक्षिक प्रबन्धन एवं प्रशासन', syl_en: 'Methods & skills, learning theories, society & elementary education, inclusive education, new initiatives, assessment & measurement, early reading, management & administration',
    parts: [{ fixed: [['ts.methods', 1], ['ts.theories', 1], ['ts.society', 1], ['ts.inclusive', 1], ['ts.initiatives', 1], ['ts.assess', 1], ['ts.reading', 1], ['ts.admin', 1]] }] },
  { id: 'psych', group: 'psych', n: 8, bilingual: true, hi: 'बाल मनोविज्ञान', en: 'Child Psychology', syl_hi: 'वैयक्तिक भिन्नता, विकास को प्रभावित करने वाले कारक, सीखने की आवश्यकता की पहचान, पढ़ने का वातावरण, सीखने के सिद्धान्त, दिव्यांग छात्रों हेतु विशेष व्यवस्था', syl_en: 'Individual differences, factors of development, identifying learning needs, reading environment, theories of learning, provisions for children with disabilities',
    parts: [{ rot: { topics: ['psy.indiv', 'psy.dev', 'psy.needs', 'psy.env', 'psy.theories', 'psy.divyang'], n: 8 } }] },
  { id: 'it', group: 'it', n: 4, bilingual: true, hi: 'सूचना तकनीकी', en: 'Information Technology', syl_hi: 'कम्प्यूटर, इन्टरनेट, स्मार्टफोन, OER, शिक्षण में उपयोगी ऐप्स, डिजिटल शिक्षण सामग्री', syl_en: 'Computer, internet, smartphone, OER, educational apps, digital content',
    parts: [{ rot: { topics: ['it.basics', 'it.fullform', 'it.internet', 'it.ict', 'it.office'], n: 4 } }] },
  { id: 'life', group: 'life', n: 8, bilingual: true, hi: 'जीवन कौशल / प्रबन्धन एवं अभिवृत्ति', en: 'Life Skills / Management & Aptitude', syl_hi: 'व्यावसायिक आचरण एवं नीति, प्रेरणा, शिक्षक की भूमिका, संवैधानिक और मानवीय मूल्य, दण्ड एवं पुरस्कार व्यवस्था', syl_en: 'Professional conduct & ethics, motivation, teacher roles, constitutional & human values, reward & punishment',
    parts: [{ rot: { topics: ['ls.conduct', 'ls.motiv', 'ls.role', 'ls.values', 'ls.reward', 'ls.skills'], n: 8 } }] }
];
/* syllabus totals exactly as printed in the notice - independent of the split above */
SUP.syllabusGroups = [{ id: 'gk', n: 25 }, { id: 'reason', n: 5 }, { id: 'lang', n: 30 }, { id: 'science', n: 8 }, { id: 'maths', n: 16 }, { id: 'evs', n: 8 }, { id: 'teaching', n: 8 }, { id: 'psych', n: 8 }, { id: 'it', n: 4 }, { id: 'life', n: 8 }];
SUP.topicIds = () => { const s = []; SUP.blueprint.forEach((b) => b.parts.forEach((p) => (p.fixed ? p.fixed.map((x) => x[0]) : p.rot.topics).forEach((t) => { if (s.indexOf(t) < 0) s.push(t); }))); return s; };
SUP.subjectLabel = (id) => SUP.blueprint.find((b) => b.id === id);
SUP.topicLabel = (id) => T[id] ? P(T[id].hi, T[id].en) : P(id);

/* ---------- planning: which topics, how many, for set N (or random) ---------- */
SUP.plan = function (setIndex, r) {
  const out = [];
  SUP.blueprint.forEach((s) => s.parts.forEach((p) => {
    if (p.fixed) { p.fixed.forEach((x) => out.push({ sub: s.id, topic: x[0], n: x[1] })); return; }
    const L = p.rot.topics.length, n = p.rot.n;
    const start = setIndex ? ((setIndex - 1) * n) % L : r.int(0, L - 1);
    const cnt = {}; for (let i = 0; i < n; i++) { const t = p.rot.topics[(start + i) % L]; cnt[t] = (cnt[t] || 0) + 1; }
    Object.keys(cnt).forEach((t) => out.push({ sub: s.id, topic: t, n: cnt[t] }));
  }));
  return out;
};
const usageCache = [{}];
SUP.usageBefore = function (setIndex) {
  for (let k = usageCache.length; k < setIndex; k++) {
    const u = Object.assign({}, usageCache[k - 1]);
    SUP.plan(k, null).forEach((p) => { u[p.topic] = (u[p.topic] || 0) + p.n; });
    usageCache[k] = u;
  }
  return usageCache[setIndex - 1];
};

/* ---------- producing questions from a topic ---------- */
const qkey = (q) => q.question_hi + '§' + q.question_en + '§' + q.options_en[q.answer];
const perms = {};
const permOf = (key, len) => perms[key] || (perms[key] = RNG(hash('perm:' + key)).shuffle(Array.from({ length: len }, (_, i) => i)));

function produce(t, n, r, cursor, used) {
  const out = [];
  if (t.kind === 'gen') {
    for (let i = 0; i < n; i++) {
      let q = null;
      for (let tries = 0; tries < 120 && !q; tries++) {
        let c; try { c = t.make(r); } catch (e) { continue; }
        const k = qkey(c); if (used.has(k)) continue; used.add(k); q = c;
      }
      if (!q) throw new Error('generator exhausted: ' + t.id);
      out.push(q);
    }
  } else if (t.kind === 'bank') {
    const L = t.items.length, perm = permOf(t.id, L);
    let idx = cursor != null ? cursor : r.int(0, L - 1), guard = 0;
    while (out.length < n && guard++ < L + n + 40) {
      const item = t.items[perm[idx % L]]; idx++;
      let q; try { q = item(r); } catch (e) { continue; }
      const k = qkey(q); if (used.has(k)) continue; used.add(k); out.push(q);
    }
    if (out.length < n) throw new Error('bank exhausted: ' + t.id);
  } else {
    const G = t.groups, gp = permOf(t.id + ':g', G.length);
    const gi = cursor != null ? Math.floor(cursor / n) : r.int(0, G.length * 3);
    const grp = G[gp[gi % G.length]], cycle = Math.floor(gi / G.length);
    const qs = permOf(t.id + ':q:' + (gi % G.length), grp.qs.length).map((i) => grp.qs[i]);
    for (let i = 0; i < n; i++) {
      const it = qs[(cycle * n + i) % qs.length]; const q = buildMCQ(r, it, grp.passage);
      used.add(qkey(q)); out.push(q);
    }
  }
  return out;
}
SUP.produce = produce;

/* ---------- assemble one paper ---------- */
function assemble(setIndex, fixed, r, seed) {
  const plan = SUP.plan(fixed ? setIndex : null, r);
  const usage = fixed ? SUP.usageBefore(setIndex) : null;
  const used = new Set(), questions = [];
  plan.forEach((p) => {
    const t = T[p.topic]; if (!t) throw new Error('topic not registered: ' + p.topic);
    produce(t, p.n, r, fixed ? (usage[p.topic] || 0) : null, used).forEach((q) => {
      q.subject = p.sub; q.topic = p.topic; questions.push(q);
    });
  });
  const sections = [];
  questions.forEach((q, i) => {
    q.no = i + 1; q.id = (fixed ? 'S' + setIndex : 'F' + seed) + '-Q' + (i + 1);
    let s = sections[sections.length - 1];
    if (!s || s.id !== q.subject) { s = { id: q.subject, start: i, count: 0 }; sections.push(s); }
    s.count++;
  });
  return { id: fixed ? 'SET-' + setIndex : 'FRESH-' + seed.toString(36).toUpperCase(), set: fixed ? setIndex : null, seed, exam: SUP.EXAM, questions, sections, plan };
}

SUP.generate = function (o) {
  o = o || {};
  const fixed = Number.isInteger(o.set);
  const seed = fixed ? hash('SUPTET/' + o.set) : ((o.seed != null ? o.seed : Math.floor(Math.random() * 4294967296)) >>> 0);
  let last = '';
  for (let attempt = 0; attempt < 8; attempt++) {
    try {
      const test = assemble(o.set, fixed, RNG((seed + attempt * 0x9E3779B1) >>> 0), seed);
      const v = SUP.validate(test);
      if (v.ok) { test.integrity = v; return test; }
      last = v.errors.join('; ');
    } catch (e) { last = e.message; }
  }
  throw new Error('Could not build a valid paper: ' + last);
};

/* ---------- guard rail ---------- */
SUP.validate = function (test) {
  const E = SUP.EXAM, errs = [], qs = test.questions;
  const bpSum = SUP.blueprint.reduce((a, b) => a + b.n, 0);
  if (bpSum !== E.questions) errs.push('blueprint totals ' + bpSum + ' != ' + E.questions);
  SUP.syllabusGroups.forEach((sg) => {
    const tot = SUP.blueprint.filter((b) => b.group === sg.id).reduce((a, b) => a + b.n, 0);
    if (tot !== sg.n) errs.push('syllabus group ' + sg.id + ': blueprint ' + tot + ' != notice ' + sg.n);
  });
  if (qs.length !== E.questions) errs.push('paper has ' + qs.length + ' questions, expected ' + E.questions);
  if (test.exam.minutes !== 120 || test.exam.correct !== 3 || test.exam.wrong !== -1) errs.push('marking scheme altered');
  SUP.blueprint.forEach((b) => { const c = qs.filter((q) => q.subject === b.id).length; if (c !== b.n) errs.push(b.id + ': ' + c + ' questions, expected ' + b.n); });
  let pos = 0; SUP.blueprint.forEach((b) => { const sec = test.sections[pos]; if (!sec || sec.id !== b.id) errs.push('section order broken at ' + b.id); pos++; });
  const keys = new Set(), stems = new Set(), ans = [0, 0, 0, 0];
  qs.forEach((q) => {
    const bp = SUP.subjectLabel(q.subject);
    if (!q.question_hi || !q.question_en) errs.push(q.id + ': empty stem');
    if (q.options_hi.length !== 4 || q.options_en.length !== 4) errs.push(q.id + ': needs 4 options');
    if (new Set(q.options_hi).size !== 4 || new Set(q.options_en).size !== 4) errs.push(q.id + ': duplicate options');
    if (!(q.answer >= 0 && q.answer <= 3)) errs.push(q.id + ': answer out of range'); else ans[q.answer]++;
    if (q.options_hi.some((x) => !x) || q.options_en.some((x) => !x)) errs.push(q.id + ': empty option');
    if (bp && bp.bilingual && q.question_hi === q.question_en) errs.push(q.id + ': not bilingual');
    const k = qkey(q); if (keys.has(k)) errs.push(q.id + ': duplicate question'); keys.add(k);
    const sk = q.question_en + '§' + (q.passage_en || ''); if (stems.has(sk)) errs.push(q.id + ': duplicate stem'); stems.add(sk);
  });
  const maxPos = Math.max.apply(null, ans);
  if (maxPos > qs.length * 0.42) errs.push('answer position skew ' + ans.join('/'));
  return { ok: errs.length === 0, errors: errs, answerPositions: ans };
};
})(typeof window !== 'undefined' ? window : globalThis);
