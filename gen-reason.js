/* Reasoning generators - every answer is computed (or comes from a logically fixed form), never guessed.
   Topic list follows the UPESSC notice: analogies, assertion-reason, binary logic, classification,
   clocks & calendars, coded inequalities, coding-decoding, critical reasoning, series, puzzles,
   symbols & notations, Venn/dice/cubes, data interpretation, direction sense, grouping, inference, letter series. */
(function (g) {
'use strict';
const SUP = g.SUP, P = SUP.P, nf = SUP.nf, numMC = SUP.numMC, mc = SUP.mc;
const R = (hi, en) => P(hi, en), num = (v) => P(nf(v)), ex = (hi, en) => ({ exp: P(hi, en) });
const G = (id, hi, en, vs) => SUP.gen(id, 'reason', hi, en, (r) => r.pick(vs)(r));
const AL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', ch = (i) => AL[((i % 26) + 26) % 26], ix = (c) => AL.indexOf(c);
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const shiftWord = (w, k) => w.split('').map((c) => ch(ix(c) + k)).join('');
const WORDS = ['CAT', 'DOG', 'PEN', 'BOOK', 'TEACH', 'SCHOOL', 'CLASS', 'MATHS', 'LEARN', 'STUDY', 'PAPER', 'TABLE', 'WATER', 'LIGHT', 'PLANT', 'RIVER', 'EARTH', 'CHILD', 'MARKS', 'GRADE'];
const strWrongs = (r, c, cands) => { const seen = new Set([c]), out = []; r.shuffle(cands).forEach((x) => { if (!seen.has(x) && out.length < 3) { seen.add(x); out.push(x); } }); if (out.length < 3) throw new Error('strWrongs'); return out; };
const strMC = (r, stem, c, cands, e) => mc(r, stem, P(c), strWrongs(r, c, cands).map((x) => P(x)), e);

/* ---------- series ---------- */
G('r.series', 'संख्या श्रृंखला', 'Number series', [
  (r) => { const a = r.int(2, 30), d = r.int(2, 9), t = [0, 1, 2, 3, 4].map((i) => a + i * d), c = a + 5 * d; return numMC(r, R(`श्रृंखला में अगली संख्या ज्ञात कीजिए: ${t.join(', ')}, ?`, `Find the next number in the series: ${t.join(', ')}, ?`), c, [c + 1, c - 1, c + d, c - d], num, { int: true }, ex(`प्रत्येक पद में ${d} जुड़ता है → ${c}`, `Each term adds ${d} → ${c}`)); },
  (r) => { const a = r.int(1, 5), k = r.pick([2, 3, 4]), t = [0, 1, 2, 3, 4].map((i) => a * Math.pow(k, i)), c = a * Math.pow(k, 5); return numMC(r, R(`श्रृंखला में अगली संख्या ज्ञात कीजिए: ${t.join(', ')}, ?`, `Find the next number in the series: ${t.join(', ')}, ?`), c, [c + k, c - k, t[4] * (k + 1), t[4] + t[3]], num, { int: true }, ex(`प्रत्येक पद को ${k} से गुणा किया जाता है → ${c}`, `Each term is multiplied by ${k} → ${c}`)); },
  (r) => { const n = r.int(2, 8), c0 = r.pick([0, 1, -1, 2]), t = [0, 1, 2, 3, 4].map((i) => (n + i) * (n + i) + c0), c = (n + 5) * (n + 5) + c0; return numMC(r, R(`श्रृंखला में अगली संख्या ज्ञात कीजिए: ${t.join(', ')}, ?`, `Find the next number in the series: ${t.join(', ')}, ?`), c, [c + 1, c - 1, c + 2, c - 2, c + 10], num, { int: true }, ex(`पद क्रमागत संख्याओं के वर्ग ${c0 ? (c0 > 0 ? '+ ' + c0 : '− ' + (-c0)) : ''} हैं → ${c}`, `Terms are squares of consecutive numbers ${c0 ? (c0 > 0 ? '+ ' + c0 : '− ' + (-c0)) : ''} → ${c}`)); },
  (r) => { const a = r.int(1, 12), d = r.int(1, 4), e = r.int(1, 3); const t = [a]; let s = d; for (let i = 0; i < 4; i++) { t.push(t[i] + s); s += e; } const c = t[4] + s; return numMC(r, R(`श्रृंखला में अगली संख्या ज्ञात कीजिए: ${t.join(', ')}, ?`, `Find the next number in the series: ${t.join(', ')}, ?`), c, [c + 1, c - 1, c + e, c - e], num, { int: true }, ex(`अन्तर ${d}, ${d + e}, ${d + 2 * e}, ... बढ़ते हैं; अगला अन्तर ${s} → ${c}`, `Differences grow: ${d}, ${d + e}, ${d + 2 * e}, ...; next difference ${s} → ${c}`)); },
  (r) => { const a = r.int(2, 20), p = r.int(2, 6), b = r.int(30, 60), q = r.int(2, 7), t = [a, b, a + p, b + q, a + 2 * p, b + 2 * q], c = a + 3 * p; return numMC(r, R(`श्रृंखला में अगली संख्या ज्ञात कीजिए: ${t.join(', ')}, ?`, `Find the next number in the series: ${t.join(', ')}, ?`), c, [c + 1, c - 1, b + 3 * q, c + p], num, { int: true }, ex(`यह दो श्रृंखलाओं का मेल है; विषम स्थान के पदों में ${p} जुड़ता है → ${c}`, `Two interleaved series; odd-position terms add ${p} → ${c}`)); },
  (r) => { const a = r.int(2, 9), d = r.int(2, 9), t = [a, a + d, a + 2 * d, a + 3 * d, a + 4 * d], m = 1 + r.int(1, 3), c = t[m]; const s = t.map((x, i) => (i === m ? '?' : x)); return numMC(r, R(`श्रृंखला में लुप्त संख्या ज्ञात कीजिए: ${s.join(', ')}`, `Find the missing number: ${s.join(', ')}`), c, [c + 1, c - 1, c + d, c - d], num, { int: true }); }
]);

/* ---------- letter series ---------- */
G('r.letter', 'अक्षर श्रृंखला', 'Letter series', [
  (r) => { const s = r.int(0, 8), k = r.int(2, 4), t = [0, 1, 2, 3].map((i) => ch(s + i * k)), c = ch(s + 4 * k); return strMC(r, R(`अगला अक्षर ज्ञात कीजिए: ${t.join(', ')}, ?`, `Find the next letter: ${t.join(', ')}, ?`), c, [ch(s + 4 * k + 1), ch(s + 4 * k - 1), ch(s + 5 * k), ch(s + 3 * k + 1)], ex(`प्रत्येक अक्षर ${k} स्थान आगे है → ${c}`, `Each letter is ${k} places ahead → ${c}`)); },
  (r) => { const s = r.int(0, 7), t = [0, 1, 2].map((i) => ch(s + i) + ch(25 - s - i)), c = ch(s + 3) + ch(25 - s - 3); return strMC(r, R(`अगला युग्म ज्ञात कीजिए: ${t.join(', ')}, ?`, `Find the next pair: ${t.join(', ')}, ?`), c, [ch(s + 3) + ch(25 - s - 2), ch(s + 4) + ch(25 - s - 3), ch(s + 2) + ch(25 - s - 3), ch(s + 3) + ch(25 - s - 4)], ex(`पहला अक्षर आगे बढ़ता है, दूसरा पीछे → ${c}`, `First letter moves forward, second backward → ${c}`)); },
  (r) => { const s = r.int(0, 6), t = [0, 1, 2].map((i) => ch(s + 2 * i) + ch(s + 2 * i + 1)), c = ch(s + 6) + ch(s + 7); return strMC(r, R(`अगला युग्म ज्ञात कीजिए: ${t.join(', ')}, ?`, `Find the next pair: ${t.join(', ')}, ?`), c, [ch(s + 5) + ch(s + 6), ch(s + 7) + ch(s + 8), ch(s + 6) + ch(s + 8), ch(s + 6) + ch(s + 6)], ex(`प्रत्येक युग्म में क्रमागत अक्षर हैं और अगला युग्म 2 स्थान आगे है → ${c}`, `Each pair has consecutive letters and the next pair starts 2 places ahead → ${c}`)); },
  (r) => { const s = r.int(0, 5), t = [s, s + 1, s + 3, s + 6].map(ch), c = ch(s + 10); return strMC(r, R(`अगला अक्षर ज्ञात कीजिए: ${t.join(', ')}, ?`, `Find the next letter: ${t.join(', ')}, ?`), c, [ch(s + 9), ch(s + 11), ch(s + 8), ch(s + 12)], ex(`अन्तर 1, 2, 3, 4 बढ़ते हैं → ${c}`, `Gaps increase 1, 2, 3, 4 → ${c}`)); }
]);

/* ---------- coding-decoding ---------- */
G('r.coding', 'कूट लेखन-कूट वाचन', 'Coding-decoding', [
  (r) => { const w1 = r.pick(WORDS); let w2 = r.pick(WORDS); if (w2 === w1) w2 = WORDS[(WORDS.indexOf(w1) + 1) % WORDS.length]; const k = r.int(1, 5), c = shiftWord(w2, k); return strMC(r, R(`एक कूट भाषा में ${w1} को ${shiftWord(w1, k)} लिखा जाता है। उसी कूट में ${w2} को कैसे लिखा जाएगा?`, `In a certain code ${w1} is written as ${shiftWord(w1, k)}. How will ${w2} be written in that code?`), c, [shiftWord(w2, k + 1), shiftWord(w2, k - 1), shiftWord(w2, -k), shiftWord(w2, k + 2)], ex(`प्रत्येक अक्षर ${k} स्थान आगे → ${c}`, `Each letter is moved ${k} places forward → ${c}`)); },
  (r) => { const w = r.pick(WORDS), c = w.split('').map((x) => ch(25 - ix(x))).join(''); return strMC(r, R(`एक कूट में A को Z, B को Y, C को X ... लिखा जाता है। उसी कूट में ${w} को कैसे लिखा जाएगा?`, `In a code A is written as Z, B as Y, C as X, and so on. How is ${w} written in this code?`), c, [shiftWord(w, 1), shiftWord(w, -1), c.split('').reverse().join(''), shiftWord(c, 1)], ex(`प्रत्येक अक्षर की जगह उसका विपरीत अक्षर (A↔Z) → ${c}`, `Each letter is replaced by its opposite (A↔Z) → ${c}`)); },
  (r) => { const w = r.pick(WORDS), v = w.split('').reduce((a, x) => a + ix(x) + 1, 0); return numMC(r, R(`यदि A=1, B=2, C=3, ... Z=26 हो, तो ${w} के अक्षरों के मानों का योग कितना होगा?`, `If A=1, B=2, C=3, ... Z=26, what is the sum of the values of the letters of ${w}?`), v, [v + 1, v - 1, v + 2, v - 2, v + 10], num, { int: true, min: 1 }, ex(`प्रत्येक अक्षर का स्थान-मान जोड़ने पर ${v}`, `Adding the position value of each letter gives ${v}`)); },
  (r) => { const w = r.pick(WORDS), k = r.pick([1, 2, 3]), enc = w.split('').map((x, i) => ch(ix(x) + (i % 2 ? -k : k))).join(''); const w2 = r.pick(WORDS.filter((x) => x !== w)); const c = w2.split('').map((x, i) => ch(ix(x) + (i % 2 ? -k : k))).join(''); return strMC(r, R(`किसी कूट में ${w} को ${enc} लिखा जाता है, तो ${w2} को कैसे लिखा जाएगा?`, `If ${w} is coded as ${enc}, how is ${w2} coded?`), c, [shiftWord(w2, k), shiftWord(w2, -k), w2.split('').map((x, i) => ch(ix(x) + (i % 2 ? k : -k))).join(''), shiftWord(w2, 1)], ex(`विषम स्थान के अक्षर +${k}, सम स्थान के −${k} → ${c}`, `Odd-position letters +${k}, even-position −${k} → ${c}`)); }
]);

/* ---------- analogies (computed + fixed-form word analogies) ---------- */
const ANALOGY_WORDS = SUP.mcqItems(`
डॉक्टर : अस्पताल :: शिक्षक : ?~Doctor : Hospital :: Teacher : ? | विद्यालय~School | बाजार~Market | न्यायालय~Court | खेत~Field
पक्षी : घोंसला :: मधुमक्खी : ?~Bird : Nest :: Bee : ? | छत्ता~Hive | बिल~Burrow | अस्तबल~Stable | माँद~Den
आँख : देखना :: कान : ?~Eye : See :: Ear : ? | सुनना~Hear | बोलना~Speak | सूँघना~Smell | चखना~Taste
कलम : लिखना :: चाकू : ?~Pen : Write :: Knife : ? | काटना~Cut | सिलना~Stitch | खोदना~Dig | तौलना~Weigh
थर्मामीटर : तापमान :: घड़ी : ?~Thermometer : Temperature :: Clock : ? | समय~Time | गति~Speed | दूरी~Distance | भार~Weight
भारत : नई दिल्ली :: जापान : ?~India : New Delhi :: Japan : ? | टोक्यो~Tokyo | बीजिंग~Beijing | सियोल~Seoul | ओसाका~Osaka
घोड़ा : अस्तबल :: गाय : ?~Horse : Stable :: Cow : ? | गौशाला~Cowshed | तालाब~Pond | बाड़ा~Kennel | पिंजरा~Cage
मछली : जल :: पक्षी : ?~Fish : Water :: Bird : ? | वायु (आकाश)~Air (sky) | भूमि~Land | वृक्ष~Tree | घास~Grass
चित्रकार : चित्र :: कवि : ?~Painter : Painting :: Poet : ? | कविता~Poem | कथा~Story | नाटक~Play | उपन्यास~Novel
विटामिन C : नींबू :: विटामिन D : ?~Vitamin C : Lemon :: Vitamin D : ? | सूर्य का प्रकाश~Sunlight | गाजर~Carrot | दूध~Milk | अंडा~Egg
`);
G('r.analogy', 'सादृश्य (अनुरूपता)', 'Analogies', [
  (r) => { const f = r.pick([[(n) => n * n, 'वर्ग', 'square'], [(n) => n * n * n, 'घन', 'cube'], [(n) => n * n + 1, 'वर्ग + 1', 'square + 1'], [(n) => 2 * n + 1, '2n + 1', '2n + 1'], [(n) => n * (n + 1), 'n(n+1)', 'n(n+1)']]); const a = r.int(2, 7); let b = r.int(2, 9); if (b === a) b = a + 1; const c = f[0](b); return numMC(r, R(`सम्बन्ध पहचानकर पूरा कीजिए: ${a} : ${f[0](a)} :: ${b} : ?`, `Identify the relation and complete: ${a} : ${f[0](a)} :: ${b} : ?`), c, [c + b, c - b, c + 1, c - 1, f[0](b + 1)], num, { int: true }, ex(`संबंध: ${f[1]} → ${b} का परिणाम ${c}`, `Relation: ${f[2]} → for ${b} the result is ${c}`)); },
  (r) => { const k = r.int(1, 3), s = r.int(0, 8), w = [s, s + 2, s + 4].map(ch).join(''), t = [s + 6, s + 8, s + 10].map(ch).join(''), c = shiftWord(t, k); return strMC(r, R(`सम्बन्ध पहचानकर पूरा कीजिए: ${w} : ${shiftWord(w, k)} :: ${t} : ?`, `Identify the relation and complete: ${w} : ${shiftWord(w, k)} :: ${t} : ?`), c, [shiftWord(t, k + 1), shiftWord(t, k - 1), shiftWord(t, -k), shiftWord(t, k + 2)], ex(`प्रत्येक अक्षर ${k} स्थान आगे → ${c}`, `Each letter moves ${k} places ahead → ${c}`)); },
  (r) => r.pick(ANALOGY_WORDS)(r),
  (r) => r.pick(ANALOGY_WORDS)(r)
]);

/* ---------- classification (odd one out) ---------- */
const ODD = SUP.oddItems({ q: 'निम्नलिखित में से विषम (अलग) कौन-सा है?~Which of the following is the odd one out?', text: `
फल~Fruits = आम~Mango; सेब~Apple; केला~Banana; अंगूर~Grapes; पपीता~Papaya
सब्जियाँ~Vegetables = आलू~Potato; गोभी~Cauliflower; बैंगन~Brinjal; पालक~Spinach; भिण्डी~Okra
नदियाँ~Rivers = गंगा~Ganga; यमुना~Yamuna; गोदावरी~Godavari; कावेरी~Kaveri; नर्मदा~Narmada
वाद्य यंत्र~Musical instruments = सितार~Sitar; तबला~Tabla; बाँसुरी~Flute; सारंगी~Sarangi; शहनाई~Shehnai
पक्षी~Birds = मोर~Peacock; तोता~Parrot; कोयल~Cuckoo; कबूतर~Pigeon; गौरैया~Sparrow
ग्रह~Planets = मंगल~Mars; शुक्र~Venus; बृहस्पति~Jupiter; शनि~Saturn; बुध~Mercury
धातुएँ~Metals = लोहा~Iron; ताँबा~Copper; सोना~Gold; चाँदी~Silver; जस्ता~Zinc
भाषाएँ~Languages = हिन्दी~Hindi; तमिल~Tamil; बंगाली~Bengali; मराठी~Marathi; तेलुगु~Telugu
वाहन~Vehicles = साइकिल~Bicycle; बस~Bus; रेलगाड़ी~Train; ट्रक~Truck; जहाज~Ship
` });
G('r.classify', 'वर्गीकरण', 'Classification', [
  (r) => { const k = r.int(3, 9), m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((x) => x * k), three = r.sample(m, 3); let o; do { o = r.int(10, 11 * k); } while (o % k === 0); const all = r.shuffle(three.concat([o])); return mc(r, R('विषम (अलग) संख्या चुनिए।', 'Choose the odd number out.'), num(o), three.map(num), ex(`शेष तीनों संख्याएँ ${k} की गुणज हैं; ${o} नहीं है।`, `The other three are multiples of ${k}; ${o} is not.`)); },
  (r) => { const pr = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], oc = [21, 27, 33, 39, 45, 51, 57, 63, 77, 91]; const three = r.sample(pr, 3), o = r.pick(oc); return mc(r, R('विषम (अलग) संख्या चुनिए।', 'Choose the odd number out.'), num(o), three.map(num), ex(`${o} अभाज्य नहीं है, शेष तीनों अभाज्य हैं।`, `${o} is composite; the other three are prime.`)); },
  (r) => { const sq = [16, 25, 36, 49, 64, 81, 100, 121, 144, 169], ns = [18, 27, 40, 50, 60, 72, 80, 90, 120, 150]; const three = r.sample(sq, 3), o = r.pick(ns); return mc(r, R('विषम (अलग) संख्या चुनिए।', 'Choose the odd number out.'), num(o), three.map(num), ex(`शेष तीनों पूर्ण वर्ग हैं; ${o} पूर्ण वर्ग नहीं है।`, `The other three are perfect squares; ${o} is not.`)); },
  (r) => r.pick(ODD)(r),
  (r) => r.pick(ODD)(r)
]);

/* ---------- direction sense ---------- */
const DIRS = [['उत्तर', 'North'], ['पूर्व', 'East'], ['दक्षिण', 'South'], ['पश्चिम', 'West']];
const dP = (i) => R(DIRS[((i % 4) + 4) % 4][0], DIRS[((i % 4) + 4) % 4][1]);
G('r.direction', 'दिशा ज्ञान', 'Direction sense', [
  (r) => { const t = r.pick([[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15]]), k = r.int(1, 3), a = t[0] * k, b = t[1] * k, c = t[2] * k; const d1 = r.int(0, 3), d2 = (d1 + (r.chance(0.5) ? 1 : 3)) % 4; return numMC(r, R(`एक व्यक्ति ${dP(d1).hi} की ओर ${a} किमी चलता है, फिर बाएँ/दाएँ मुड़कर ${dP(d2).hi} की ओर ${b} किमी चलता है। वह प्रारम्भिक बिन्दु से कितनी दूरी पर है?`, `A person walks ${a} km towards ${dP(d1).en}, then turns and walks ${b} km towards ${dP(d2).en}. How far is he from the starting point?`), c, [a + b, Math.abs(a - b), c + k, c - k], (v) => P(nf(v) + ' किमी', nf(v) + ' km'), { int: true, min: 1 }, ex(`पाइथागोरस: √(${a}² + ${b}²) = ${c}`, `Pythagoras: √(${a}² + ${b}²) = ${c}`)); },
  (r) => { let d = r.int(0, 3); const start = d, steps = []; const n = r.int(2, 4); for (let i = 0; i < n; i++) { const m = r.pick([['दाएँ', 'right', 1], ['बाएँ', 'left', 3], ['पीछे (180°)', 'about-turn', 2]]); steps.push(m); d = (d + m[2]) % 4; } const txt = steps.map((m) => `${m[0]}`).join(' → '), tx = steps.map((m) => m[1]).join(' → '); return mc(r, R(`एक व्यक्ति ${dP(start).hi} की ओर मुख किए खड़ा है। वह क्रमशः ${txt} मुड़ता है। अब उसका मुख किस दिशा में है?`, `A person is facing ${dP(start).en}. He turns ${tx} in that order. Which direction is he facing now?`), dP(d), [0, 1, 2, 3].filter((x) => x !== d).map(dP), ex(`प्रत्येक मोड़ के बाद दिशा बदलते हुए अन्तिम दिशा ${dP(d).hi} है।`, `Tracking each turn, the final direction is ${dP(d).en}.`)); },
  (r) => { const a = r.int(2, 9) * 5, b = r.int(2, 9) * 5; const d = r.int(0, 3), back = (d + 2) % 4; return mc(r, R(`राहुल अपने घर से ${dP(d).hi} की ओर ${a} मी और फिर ${dP(back).hi} की ओर ${b} मी चलता है। घर के सापेक्ष वह किस दिशा में है?`, `Rahul walks ${a} m towards ${dP(d).en} from his house and then ${b} m towards ${dP(back).en}. In which direction is he relative to his house?`), a === b ? R('घर पर ही', 'At the house itself') : (a > b ? dP(d) : dP(back)), a === b ? [dP(0), dP(1), dP(2)] : [0, 1, 2, 3].filter((x) => x !== (a > b ? d : back)).map(dP), ex(`दो विपरीत दिशाओं में चलने पर अधिक दूरी वाली दिशा में शेष विस्थापन होता है।`, `Walking in opposite directions, the net displacement lies in the direction of the longer walk.`)); }
]);

/* ---------- clocks ---------- */
G('r.clock', 'घड़ी', 'Clocks', [
  (r) => { const h = r.int(1, 11), m = r.int(0, 29) * 2; let a = Math.abs(30 * h - 5.5 * m) % 360; if (a > 180) a = 360 - a; const f = (v) => P(nf(v) + '°'); const hh = h, mm = String(m).padStart(2, '0'); return numMC(r, R(`घड़ी में ${hh}:${mm} बजे घंटे और मिनट की सुइयों के बीच छोटा कोण कितना होगा?`, `What is the smaller angle between the hour and minute hands at ${hh}:${mm}?`), a, [360 - a, Math.abs(30 * h - 6 * m), Math.abs(30 * h - 6 * m) + 15, a + 15, a - 15, 90], f, { int: Number.isInteger(a), min: 0, max: 180, key: nf }, ex(`कोण = |30h − 5.5m| = |${30 * h} − ${5.5 * m}| = ${nf(Math.abs(30 * h - 5.5 * m))}° (छोटा कोण ${nf(a)}°)`, `Angle = |30h − 5.5m| = |${30 * h} − ${5.5 * m}| = ${nf(Math.abs(30 * h - 5.5 * m))}° (smaller angle ${nf(a)}°)`)); },
  (r) => SUP.mc(r, R('12 घंटे में घड़ी की घंटे और मिनट की सुइयाँ कितनी बार एक-दूसरे को ढकती (एक ही स्थान पर आती) हैं?', 'How many times in 12 hours do the hour and minute hands of a clock coincide?'), num(11), [num(12), num(10), num(13)], ex('12 घंटे में सुइयाँ 11 बार मिलती हैं।', 'In 12 hours the hands coincide 11 times.')),
  (r) => SUP.mc(r, R('एक दिन (24 घंटे) में घड़ी की सुइयाँ कितनी बार परस्पर समकोण बनाती हैं?', 'How many times in a day (24 hours) do the hands of a clock make a right angle?'), num(44), [num(22), num(24), num(48)], ex('12 घंटे में 22 बार, अतः 24 घंटे में 44 बार।', '22 times in 12 hours, so 44 times in 24 hours.')),
  (r) => { const h = r.int(1, 12), m = r.pick([0, 15, 30, 45]); const mh = (12 - h) % 12, mm = m === 0 ? 0 : 60 - m; let hh = 11 - h; hh = ((hh % 12) + 12) % 12; const outT = m === 0 ? `${mh === 0 ? 12 : mh}:00` : `${hh === 0 ? 12 : hh}:${String(mm).padStart(2, '0')}`; const inT = `${h}:${String(m).padStart(2, '0')}`; const cands = [`${h === 12 ? 1 : h + 1}:${String(mm).padStart(2, '0')}`, `${(h + 5) % 12 || 12}:${String(m).padStart(2, '0')}`, `${(h + 6) % 12 || 12}:${String(m).padStart(2, '0')}`, `${(hh + 1) % 12 || 12}:${String(mm).padStart(2, '0')}`, `${(hh + 11) % 12 || 12}:${String(mm).padStart(2, '0')}`]; return strMC(r, R(`दर्पण में किसी घड़ी का प्रतिबिम्ब ${inT} का दिखाई देता है। वास्तविक समय क्या है?`, `The image of a clock in a mirror shows ${inT}. What is the actual time?`), outT, cands, ex(`वास्तविक समय = 11:60 − दर्पण समय → ${outT}`, `Actual time = 11:60 − mirror time → ${outT}`)); }
]);

/* ---------- calendar ---------- */
const DAYS = [['रविवार', 'Sunday'], ['सोमवार', 'Monday'], ['मंगलवार', 'Tuesday'], ['बुधवार', 'Wednesday'], ['बृहस्पतिवार', 'Thursday'], ['शुक्रवार', 'Friday'], ['शनिवार', 'Saturday']];
const dayP = (i) => R(DAYS[((i % 7) + 7) % 7][0], DAYS[((i % 7) + 7) % 7][1]);
const MON = [['जनवरी', 'January'], ['फरवरी', 'February'], ['मार्च', 'March'], ['अप्रैल', 'April'], ['मई', 'May'], ['जून', 'June'], ['जुलाई', 'July'], ['अगस्त', 'August'], ['सितम्बर', 'September'], ['अक्टूबर', 'October'], ['नवम्बर', 'November'], ['दिसम्बर', 'December']];
const isLeap = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
G('r.calendar', 'कैलेण्डर', 'Calendar', [
  (r) => { const y = r.int(2001, 2035), m1 = r.int(0, 11), d1 = r.int(1, 28), m2 = r.int(0, 11), d2 = r.int(1, 28); if (m1 === m2 && d1 === d2) throw new Error('same'); const w1 = new Date(Date.UTC(y, m1, d1)).getUTCDay(), w2 = new Date(Date.UTC(y, m2, d2)).getUTCDay(); return mc(r, R(`यदि ${d1} ${MON[m1][0]} ${y} को ${DAYS[w1][0]} था, तो उसी वर्ष ${d2} ${MON[m2][0]} को कौन-सा दिन होगा?`, `If ${d1} ${MON[m1][1]} ${y} was a ${DAYS[w1][1]}, what day of the week will ${d2} ${MON[m2][1]} of the same year be?`), dayP(w2), [0, 1, 2, 3, 4, 5, 6].filter((x) => x !== w2).map(dayP).slice(0, 3), ex(`दोनों तिथियों के बीच के दिनों को 7 से भाग देने पर शेष जोड़ने से ${DAYS[w2][0]}`, `Adding the remainder of the day-gap ÷ 7 gives ${DAYS[w2][1]}`)); },
  (r) => { const w = r.int(0, 6), n = r.int(20, 200), a = (w + n) % 7; return mc(r, R(`यदि आज ${DAYS[w][0]} है, तो ${n} दिन बाद कौन-सा दिन होगा?`, `If today is ${DAYS[w][1]}, what day will it be after ${n} days?`), dayP(a), [0, 1, 2, 3, 4, 5, 6].filter((x) => x !== a).map(dayP).slice(0, 3), ex(`${n} ÷ 7 का शेषफल ${n % 7}; ${DAYS[w][0]} + ${n % 7} = ${DAYS[a][0]}`, `${n} ÷ 7 leaves ${n % 7}; ${DAYS[w][1]} + ${n % 7} = ${DAYS[a][1]}`)); },
  (r) => { const leap = r.pick([1904, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2400]), non = r.sample([1900, 2100, 2200, 2001, 2002, 2003, 2006, 2010, 2014, 2018, 2021, 2022, 2023, 2025, 1800, 1700], 3); return mc(r, R('निम्नलिखित में से कौन-सा वर्ष अधिवर्ष (लीप ईयर) है?', 'Which of the following is a leap year?'), num(leap), non.map(num), ex(`${leap} चार से (शताब्दी हो तो 400 से) विभाज्य है।`, `${leap} is divisible by 4 (by 400 if a century year).`)); },
  (r) => { const c = r.pick([[100, 5], [200, 3], [300, 1], [400, 0]]); return numMC(r, R(`${c[0]} वर्षों में विषम दिनों की संख्या कितनी होती है?`, `How many odd days are there in ${c[0]} years?`), c[1], [0, 1, 2, 3, 4, 5, 6].filter((x) => x !== c[1]), num, { min: 0, max: 6, int: true }); }
]);

/* ---------- blood relations ---------- */
const NAMES = [['राम', 'Ram'], ['श्याम', 'Shyam'], ['सीता', 'Sita'], ['गीता', 'Geeta'], ['मोहन', 'Mohan'], ['रीना', 'Reena'], ['अजय', 'Ajay'], ['नेहा', 'Neha'], ['विजय', 'Vijay'], ['पूजा', 'Pooja']];
const REL = { bua: ['बुआ', 'Paternal aunt (father\'s sister)'], mama: ['मामा', 'Maternal uncle (mother\'s brother)'], chacha: ['चाचा', 'Paternal uncle (father\'s brother)'], mausi: ['मौसी', 'Maternal aunt (mother\'s sister)'], dada: ['दादा', 'Paternal grandfather'], nana: ['नाना', 'Maternal grandfather'], dadi: ['दादी', 'Paternal grandmother'], nani: ['नानी', 'Maternal grandmother'], bhanja: ['भांजा/भांजी', 'Nephew/niece (sister\'s child)'], bhatija: ['भतीजा/भतीजी', 'Nephew/niece (brother\'s child)'], bhai: ['भाई', 'Brother'], pita: ['पिता', 'Father'], mata: ['माता', 'Mother'], beta: ['पुत्र', 'Son'], sasur: ['ससुर', 'Father-in-law'], pati: ['पति', 'Husband'], patni: ['पत्नी', 'Wife'], sala: ['साला/साली', 'Brother-in-law (wife\'s sibling)'], nanad: ['ननद/जेठ/देवर', 'Husband\'s sibling'], cousin: ['चचेरा/ममेरा भाई-बहन', 'Cousin'] };
const relP = (k) => R(REL[k][0], REL[k][1]);
G('r.blood', 'रक्त सम्बन्ध', 'Blood relations', [
  (r) => { const [A, B, C] = r.sample(NAMES, 3); return mc(r, R(`${A[0]}, ${B[0]} का पिता है। ${C[0]}, ${A[0]} की बहन है। ${C[0]} का ${B[0]} से क्या सम्बन्ध है?`, `${A[1]} is the father of ${B[1]}. ${C[1]} is the sister of ${A[1]}. How is ${C[1]} related to ${B[1]}?`), relP('bua'), ['mama', 'mausi', 'chacha'].map(relP), ex(`पिता की बहन = बुआ`, `Father's sister = paternal aunt`)); },
  (r) => { const [A, B, C] = r.sample(NAMES, 3); return mc(r, R(`${A[0]}, ${B[0]} की माता है। ${C[0]}, ${A[0]} का भाई है। ${C[0]} का ${B[0]} से क्या सम्बन्ध है?`, `${A[1]} is the mother of ${B[1]}. ${C[1]} is the brother of ${A[1]}. How is ${C[1]} related to ${B[1]}?`), relP('mama'), ['chacha', 'bua', 'dada'].map(relP), ex(`माता का भाई = मामा`, `Mother's brother = maternal uncle`)); },
  (r) => { const [A, B, C] = r.sample(NAMES, 3); return mc(r, R(`${A[0]}, ${B[0]} का पिता है। ${C[0]}, ${A[0]} का पिता है। ${C[0]} का ${B[0]} से क्या सम्बन्ध है?`, `${A[1]} is the father of ${B[1]}. ${C[1]} is the father of ${A[1]}. How is ${C[1]} related to ${B[1]}?`), relP('dada'), ['nana', 'chacha', 'pita'].map(relP), ex(`पिता का पिता = दादा`, `Father's father = paternal grandfather`)); },
  (r) => { const [A, B, C] = r.sample(NAMES, 3); return mc(r, R(`${A[0]}, ${B[0]} की माता है। ${C[0]}, ${A[0]} की माता है। ${C[0]} का ${B[0]} से क्या सम्बन्ध है?`, `${A[1]} is the mother of ${B[1]}. ${C[1]} is the mother of ${A[1]}. How is ${C[1]} related to ${B[1]}?`), relP('nani'), ['dadi', 'mausi', 'mata'].map(relP), ex(`माता की माता = नानी`, `Mother's mother = maternal grandmother`)); },
  (r) => { const [A, B, C] = r.sample(NAMES, 3); return mc(r, R(`${A[0]}, ${B[0]} का भाई है। ${C[0]}, ${B[0]} की माता है। ${A[0]} का ${C[0]} से क्या सम्बन्ध है?`, `${A[1]} is the brother of ${B[1]}. ${C[1]} is the mother of ${B[1]}. How is ${A[1]} related to ${C[1]}?`), relP('beta'), ['bhai', 'pita', 'bhatija'].map(relP), ex(`${A[0]} और ${B[0]} भाई हैं तथा ${C[0]} उनकी माता है, अतः ${A[0]} उसका पुत्र है।`, `${A[1]} and ${B[1]} are siblings and ${C[1]} is their mother, so ${A[1]} is her son.`)); },
  (r) => { const [A, B, C] = r.sample(NAMES, 3); return mc(r, R(`${A[0]} की बहन का पुत्र ${B[0]} है और ${C[0]} ${B[0]} की माता है, तो ${A[0]} का ${B[0]} से क्या सम्बन्ध है?`, `${B[1]} is the son of ${A[1]}'s sister. How is ${A[1]} related to ${B[1]}?`), relP('mama'), ['chacha', 'bua', 'mausi'].map(relP), ex(`बहन का पुत्र → ${A[0]} उसका मामा है।`, `Sister's son → ${A[1]} is his maternal uncle.`)); }
]);

/* ---------- coded inequalities ---------- */
const IMP = { '>': ['>', '≥'], '≥': ['≥'], '=': ['=', '≥', '≤'], '<': ['<', '≤'], '≤': ['≤'] };
const INV = { '>': '<', '≥': '≤', '=': '=', '<': '>', '≤': '≥' };
function derive(rels, i, j) { // chain rels[k] between var k and k+1
  if (i === j) return '='; if (i > j) { const d = derive(rels, j, i); return d ? INV[d] : null; }
  const seg = rels.slice(i, j), up = seg.every((x) => x === '>' || x === '≥' || x === '='), down = seg.every((x) => x === '<' || x === '≤' || x === '=');
  if (up) return seg.includes('>') ? '>' : seg.includes('≥') ? '≥' : '=';
  if (down) return seg.includes('<') ? '<' : seg.includes('≤') ? '≤' : '=';
  return null;
}
const OPT4 = [R('केवल निष्कर्ष I सही है', 'Only conclusion I follows'), R('केवल निष्कर्ष II सही है', 'Only conclusion II follows'), R('दोनों निष्कर्ष I और II सही हैं', 'Both conclusions I and II follow'), R('न तो I और न ही II सही है', 'Neither conclusion I nor II follows')];
function ineqQ(r, coded) {
  const V = r.sample(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T'], 4), sy = ['>', '≥', '<', '≤', '='];
  let rels;
  for (let t = 0; t < 30; t++) { rels = [0, 1, 2].map(() => r.pick(sy)); if (derive(rels, 0, 3) || r.chance(0.3)) break; }
  const code = r.shuffle(['@', '#', '$', '%', '&']), map = {}; sy.forEach((s, i) => (map[s] = code[i]));
  const show = (rel) => (coded ? map[rel] : rel);
  const stmt = V.map((v, i) => (i < 3 ? v + ' ' + show(rels[i]) + ' ' : v)).join('');
  const pair = () => { const i = r.int(0, 3); let j = r.int(0, 3); while (j === i) j = r.int(0, 3); return [i, j, r.pick(sy)]; };
  const c1 = pair(); let c2 = pair(); for (let t = 0; t < 20 && c2.join() === c1.join(); t++) c2 = pair();
  const follows = (c) => { const d = derive(rels, c[0], c[1]); return !!d && IMP[d].includes(c[2]); };
  const f1 = follows(c1), f2 = follows(c2), ans = f1 && f2 ? 2 : f1 ? 0 : f2 ? 1 : 3;
  const cs = (c) => V[c[0]] + ' ' + show(c[2]) + ' ' + V[c[1]];
  let key = ''; if (coded) key = sy.map((s) => `${map[s]} = ${s}`).join(', ');
  const hi = coded ? `यदि ${key} हो, तो कथन: ${stmt} में निष्कर्ष I: ${cs(c1)}, निष्कर्ष II: ${cs(c2)} में से कौन-सा/से सही है?` : `कथन: ${stmt}\nनिष्कर्ष I: ${cs(c1)}\nनिष्कर्ष II: ${cs(c2)}\nकौन-सा निष्कर्ष सही है?`;
  const en = coded ? `If ${key}, then given the statement ${stmt}, which of conclusions I: ${cs(c1)}, II: ${cs(c2)} follows?` : `Statement: ${stmt}\nConclusion I: ${cs(c1)}\nConclusion II: ${cs(c2)}\nWhich conclusion follows?`;
  const decoded = V.map((v, i) => (i < 3 ? v + ' ' + rels[i] + ' ' : v)).join('');
  return mc(r, R(hi, en), OPT4[ans], OPT4.filter((_, i) => i !== ans), ex(`कथन (खोलने पर): ${decoded}। I ${f1 ? 'सही' : 'गलत'}, II ${f2 ? 'सही' : 'गलत'}।`, `Statement decoded: ${decoded}. I ${f1 ? 'follows' : 'does not follow'}, II ${f2 ? 'follows' : 'does not follow'}.`));
}
G('r.ineq', 'कूट असमिकाएँ', 'Coded inequalities', [(r) => ineqQ(r, false), (r) => ineqQ(r, true), (r) => ineqQ(r, true)]);

/* ---------- symbols & notations ---------- */
const OPS = ['+', '−', '×', '÷'];
function evalOps(nums, ops) {
  const n = nums.slice(), o = ops.slice();
  for (let i = 0; i < o.length;) { if (o[i] === '×' || o[i] === '÷') { const v = o[i] === '×' ? n[i] * n[i + 1] : n[i] / n[i + 1]; n.splice(i, 2, v); o.splice(i, 1); } else i++; }
  let v = n[0]; o.forEach((op, i) => { v = op === '+' ? v + n[i + 1] : v - n[i + 1]; }); return v;
}
G('r.symbol', 'चिह्न एवं संकेत', 'Symbols & notations', [
  (r) => { for (let t = 0; t < 60; t++) { const perm = r.shuffle(OPS); if (perm.every((p, i) => p === OPS[i])) continue; const map = {}; OPS.forEach((s, i) => (map[s] = perm[i])); const shown = [r.pick(OPS), r.pick(OPS), r.pick(OPS)], nums = [r.int(2, 12), r.int(2, 12), r.int(2, 12), r.int(2, 12)]; const real = shown.map((s) => map[s]); const v = evalOps(nums, real); if (!Number.isInteger(v) || Math.abs(v) > 200) continue; const ltr = (() => { let a = nums[0]; real.forEach((op, i) => { const b = nums[i + 1]; a = op === '+' ? a + b : op === '−' ? a - b : op === '×' ? a * b : a / b; }); return a; })(); const expr = nums.map((x, i) => (i < 3 ? x + ' ' + shown[i] + ' ' : String(x))).join(''); const rule = OPS.map((s) => `'${s}' → '${map[s]}'`).join(', '); return numMC(r, R(`यदि चिह्नों का अर्थ इस प्रकार बदल दिया जाए: ${rule}, तो ${expr} का मान क्या होगा?`, `If the signs are interchanged as: ${rule}, what is the value of ${expr}?`), v, [ltr, v + 1, v - 1, v + 2, -v], num, { int: true }, ex(`चिह्न बदलकर: ${nums.map((x, i) => (i < 3 ? x + ' ' + real[i] + ' ' : x)).join('')} = ${v} (BODMAS से)`, `After substitution: ${nums.map((x, i) => (i < 3 ? x + ' ' + real[i] + ' ' : x)).join('')} = ${v} (by BODMAS)`)); } throw new Error('symbol retry'); },
  (r) => { const a = r.int(2, 9), b = r.int(2, 9); const f = r.pick([[(x, y) => x * y + x, 'a ★ b = a×b + a'], [(x, y) => x * x - y, 'a ★ b = a² − b'], [(x, y) => x + 2 * y, 'a ★ b = a + 2b'], [(x, y) => (x + y) * y, 'a ★ b = (a + b) × b']]); const c = f[0](a, b); return numMC(r, R(`यदि ${f[1]} हो, तो ${a} ★ ${b} का मान क्या होगा?`, `If ${f[1]}, what is the value of ${a} ★ ${b}?`), c, [c + 1, c - 1, c + a, c - b, f[0](b, a)], num, { int: true }); }
]);

/* ---------- cubes & dice ---------- */
G('r.cube', 'घन एवं पासा', 'Cubes & dice', [
  (r) => { const n = r.int(3, 8), q = r.pick([['3', 8, 'तीन', 'three'], ['2', 12 * (n - 2), 'दो', 'two'], ['1', 6 * (n - 2) * (n - 2), 'एक', 'one'], ['0', Math.pow(n - 2, 3), 'कोई भी नहीं', 'no']]); const c = q[1]; return numMC(r, R(`${n} सेमी भुजा के एक ठोस घन के सभी फलकों पर रंग करके उसे 1 सेमी भुजा वाले छोटे घनों में काटा गया। कितने छोटे घनों के ${q[2]} फलक रंगीन होंगे?`, `A solid cube of side ${n} cm is painted on all faces and cut into 1 cm cubes. How many small cubes have ${q[3]} face(s) painted?`), c, [c + n, c - n, c * 2, (n - 2) * 6, 8 + 12 * (n - 2)], num, { int: true, min: 0 }, ex(`सूत्र: 3 फलक → 8; 2 फलक → 12(n−2); 1 फलक → 6(n−2)²; 0 फलक → (n−2)³`, `Formula: 3 faces → 8; 2 faces → 12(n−2); 1 face → 6(n−2)²; 0 faces → (n−2)³`)); },
  (r) => { const b = r.pick([1, 2, 3, 4, 5]), k = r.int(2, 5), a = b * k, c = k * k * k; return numMC(r, R(`${a} सेमी भुजा वाले घन को ${b} सेमी भुजा वाले कितने छोटे घनों में काटा जा सकता है?`, `How many cubes of side ${b} cm can be cut from a cube of side ${a} cm?`), c, [k * k, c + k, c - k, 6 * k * k, k * 3], num, { int: true, min: 1 }, ex(`(${a}/${b})³ = ${c}`, `(${a}/${b})³ = ${c}`)); },
  (r) => { const p = r.pick([[1, 6], [2, 5], [3, 4]]), flip = r.chance(0.5), a = flip ? p[1] : p[0], c = flip ? p[0] : p[1]; return numMC(r, R(`एक सामान्य पासे में आमने-सामने के फलकों का योग 7 होता है। जिस फलक पर ${a} है, उसके ठीक विपरीत फलक पर कौन-सी संख्या होगी?`, `In a standard die, opposite faces add up to 7. Which number is on the face opposite to ${a}?`), c, [1, 2, 3, 4, 5, 6], num, { int: true, min: 1, max: 6 }, ex(`7 − ${a} = ${c}`, `7 − ${a} = ${c}`)); },
  (r) => { const e = r.int(2, 9); const pick = r.pick([['फलकों', 'faces', 6], ['किनारों (कोरों)', 'edges', 12], ['शीर्षों', 'vertices', 8]]); return numMC(r, R(`एक घन में ${pick[0]} की संख्या कितनी होती है?`, `How many ${pick[1]} does a cube have?`), pick[2], [6, 8, 12, 4, 10].filter((x) => x !== pick[2]), num, { int: true }); }
]);

/* ---------- Venn diagrams / sets ---------- */
const VENN_TXT = SUP.mcqItems(`
कुत्ता, बिल्ली, जानवर — इन तीनों का सही वेन आरेख कौन-सा है?~Which Venn diagram best represents Dog, Cat, Animal? | एक बड़े वृत्त के भीतर दो अलग-अलग वृत्त~Two separate circles inside one large circle | तीन अलग-अलग वृत्त~Three separate circles | दो प्रतिच्छेदी वृत्त, बड़े वृत्त के बाहर~Two intersecting circles outside a large circle | तीन संकेन्द्री वृत्त~Three concentric circles
माता, महिला, डॉक्टर — इनका सही वेन आरेख कौन-सा है?~Which Venn diagram best represents Mother, Woman, Doctor? | महिला के वृत्त में माता का वृत्त पूरा तथा डॉक्टर का वृत्त आंशिक रूप से~Mother circle wholly inside Woman; Doctor circle partly overlapping both | तीनों वृत्त अलग-अलग~Three separate circles | तीनों संकेन्द्री वृत्त~Three concentric circles | माता और डॉक्टर के वृत्त एक-दूसरे में समाहित, महिला बाहर~Mother and Doctor contained in each other, Woman outside
वर्ग, आयत, चतुर्भुज — इनका सही वेन आरेख कौन-सा है?~Which Venn diagram best represents Square, Rectangle, Quadrilateral? | संकेन्द्री वृत्त (वर्ग ⊂ आयत ⊂ चतुर्भुज)~Concentric circles (Square ⊂ Rectangle ⊂ Quadrilateral) | तीन अलग-अलग वृत्त~Three separate circles | दो प्रतिच्छेदी वृत्त और तीसरा बाहर~Two intersecting circles and a third outside | आयत और वर्ग अलग, चतुर्भुज उनके भीतर~Rectangle and Square separate, Quadrilateral inside both
सेब, फल, सब्जी — इनका सही वेन आरेख कौन-सा है?~Which Venn diagram best represents Apple, Fruit, Vegetable? | फल के भीतर सेब का वृत्त; सब्जी का वृत्त अलग~Apple circle inside Fruit; Vegetable circle separate | तीनों वृत्त प्रतिच्छेदी~All three circles intersecting | सेब के भीतर फल और सब्जी~Fruit and Vegetable inside Apple | तीनों संकेन्द्री~Three concentric circles
`);
G('r.venn', 'वेन आरेख', 'Venn diagrams', [
  (r) => { const N = r.int(4, 12) * 10, a = r.int(2, 5) * 5 + 10, b = r.int(2, 5) * 5 + 10, both = r.int(2, 5) * 5; if (both >= a || both >= b || a + b - both >= N) throw new Error('bad'); const nei = N - (a + b - both); const q = r.pick([0, 1, 2]); const ans = q === 0 ? nei : q === 1 ? a - both : a + b - both; const lab = [['दोनों में से किसी को नहीं', 'neither'], ['केवल क्रिकेट को', 'only cricket'], ['कम से कम एक को', 'at least one']][q]; return numMC(r, R(`एक कक्षा के ${N} विद्यार्थियों में से ${a} क्रिकेट, ${b} फुटबॉल तथा ${both} दोनों खेल पसन्द करते हैं। कितने विद्यार्थी ${lab[0]} पसन्द करते हैं?`, `Of ${N} students in a class, ${a} like cricket, ${b} like football and ${both} like both. How many like ${lab[1]}?`), ans, [ans + 5, ans - 5, a + b, N - a, a - both + b - both], num, { int: true, min: 0 }, ex(`n(A∪B) = ${a} + ${b} − ${both} = ${a + b - both}; केवल क्रिकेट = ${a - both}; कोई नहीं = ${nei}`, `n(A∪B) = ${a} + ${b} − ${both} = ${a + b - both}; only cricket = ${a - both}; neither = ${nei}`)); },
  (r) => r.pick(VENN_TXT)(r),
  (r) => { const a = r.int(20, 50), b = r.int(15, 45), u = r.int(Math.max(a, b) + 1, a + b - 1), c = a + b - u; return numMC(r, R(`n(A) = ${a}, n(B) = ${b} और n(A∪B) = ${u} हो, तो n(A∩B) कितना होगा?`, `If n(A) = ${a}, n(B) = ${b} and n(A∪B) = ${u}, find n(A∩B).`), c, [c + 1, c - 1, a + b, u - a], num, { int: true, min: 0 }, ex(`n(A∩B) = ${a} + ${b} − ${u} = ${c}`, `n(A∩B) = ${a} + ${b} − ${u} = ${c}`)); }
]);

/* ---------- data interpretation ---------- */
G('r.di', 'आँकड़ा निर्वचन', 'Data interpretation', [
  (r) => { const L = ['P', 'Q', 'R', 'S', 'T']; const v = L.map(() => r.int(4, 18) * 5); const s = v.reduce((a, b) => a + b, 0); const t = L.map((l, i) => `${l} = ${v[i]}`).join(', '); const type = r.int(0, 3); if (type === 0) return numMC(r, R(`पाँच विद्यालयों में विद्यार्थियों की संख्या: ${t}। कुल विद्यार्थी कितने हैं?`, `Number of students in five schools: ${t}. What is the total number of students?`), s, [s + 5, s - 5, s + 10, s - 10], num, { int: true }); if (type === 1) { const mx = Math.max(...v), mn = Math.min(...v); if (mx === mn) throw new Error('flat'); return numMC(r, R(`पाँच विद्यालयों में विद्यार्थियों की संख्या: ${t}। सबसे अधिक और सबसे कम विद्यार्थियों वाले विद्यालयों का अन्तर कितना है?`, `Number of students in five schools: ${t}. What is the difference between the highest and lowest?`), mx - mn, [mx - mn + 5, mx - mn - 5, mx + mn, mx - mn + 10], num, { int: true, min: 1 }); } if (type === 2) { const avg = s / 5; if (!Number.isInteger(avg)) throw new Error('avg'); return numMC(r, R(`पाँच विद्यालयों में विद्यार्थियों की संख्या: ${t}। औसत संख्या कितनी है?`, `Number of students in five schools: ${t}. What is the average number of students?`), avg, [avg + 1, avg - 1, avg + 5, avg - 5], num, { int: true }); } const i = r.int(0, 4), p = v[i] * 100 / s; if (!Number.isInteger(p)) throw new Error('pct'); return numMC(r, R(`पाँच विद्यालयों में विद्यार्थियों की संख्या: ${t}। विद्यालय ${L[i]} में कुल विद्यार्थियों का कितना प्रतिशत है?`, `Number of students in five schools: ${t}. What percentage of the total is in school ${L[i]}?`), p, [p + 5, p - 5, p + 2, p - 2], (x) => P(nf(x) + '%'), { int: true, min: 1 }); },
  (r) => { const y = [2019, 2020, 2021, 2022]; const v = y.map(() => r.int(8, 30) * 10); const t = y.map((a, i) => `${a}: ${v[i]}`).join(', '); const i = r.int(1, 3), inc = v[i] - v[i - 1]; if (inc === 0) throw new Error('flat'); return numMC(r, R(`एक विद्यालय में वर्षवार नामांकन — ${t}। ${y[i - 1]} से ${y[i]} में नामांकन में कितना परिवर्तन (वृद्धि/कमी का परिमाण) हुआ?`, `Year-wise enrolment in a school — ${t}. By how much did enrolment change from ${y[i - 1]} to ${y[i]} (magnitude)?`), Math.abs(inc), [Math.abs(inc) + 10, Math.abs(inc) + 20, Math.abs(inc) - 10, v[i]], num, { int: true, min: 1 }); }
]);

/* ---------- assertion & reason ---------- */
const AR_OPT = [R('A और R दोनों सत्य हैं और R, A की सही व्याख्या है', 'Both A and R are true and R is the correct explanation of A'), R('A और R दोनों सत्य हैं, परन्तु R, A की सही व्याख्या नहीं है', 'Both A and R are true but R is not the correct explanation of A'), R('A सत्य है, परन्तु R असत्य है', 'A is true but R is false'), R('A असत्य है, परन्तु R सत्य है', 'A is false but R is true')];
const AR = [
  ['सूर्य पूर्व में उदय होता है।', 'The Sun rises in the east.', 'पृथ्वी अपनी धुरी पर पश्चिम से पूर्व की ओर घूमती है।', 'The Earth rotates on its axis from west to east.', 0],
  ['ऊँचे पर्वतों पर पानी कम तापमान पर उबलता है।', 'Water boils at a lower temperature on high mountains.', 'ऊँचाई बढ़ने पर वायुदाब घटता है।', 'Atmospheric pressure decreases with altitude.', 0],
  ['आकाश नीला दिखाई देता है।', 'The sky appears blue.', 'नीले प्रकाश का वायुमण्डल में प्रकीर्णन अधिक होता है।', 'Blue light is scattered more by the atmosphere.', 0],
  ['चाकू की धार तेज रखी जाती है।', 'A knife is kept sharp.', 'कम क्षेत्रफल पर लगाया गया बल अधिक दाब उत्पन्न करता है।', 'Force applied on a smaller area produces greater pressure.', 0],
  ['बिजली चमकने के बाद बादलों की गड़गड़ाहट सुनाई देती है।', 'Thunder is heard after lightning is seen.', 'प्रकाश की चाल ध्वनि की चाल से बहुत अधिक है।', 'The speed of light is much greater than the speed of sound.', 0],
  ['बर्फ पानी पर तैरती है।', 'Ice floats on water.', 'बर्फ का घनत्व पानी से कम होता है।', 'Ice has a lower density than water.', 0],
  ['ध्वनि निर्वात में नहीं चल सकती।', 'Sound cannot travel through a vacuum.', 'ध्वनि के संचरण के लिए माध्यम आवश्यक है।', 'Sound needs a material medium to travel.', 0],
  ['पृथ्वी पर ऋतुएँ बदलती हैं।', 'Seasons change on Earth.', 'पृथ्वी का अक्ष झुका हुआ है और वह सूर्य की परिक्रमा करती है।', 'The Earth\'s axis is tilted and it revolves around the Sun.', 0],
  ['पृथ्वी पर दिन और रात होते हैं।', 'Day and night occur on Earth.', 'पृथ्वी सूर्य की परिक्रमा करती है।', 'The Earth revolves around the Sun.', 1],
  ['पौधे हरे दिखाई देते हैं।', 'Plants appear green.', 'पौधे प्रकाश-संश्लेषण करते हैं।', 'Plants carry out photosynthesis.', 1],
  ['हीरा बहुत कठोर होता है।', 'Diamond is very hard.', 'हीरा विद्युत का अच्छा चालक है।', 'Diamond is a good conductor of electricity.', 2],
  ['सोडियम को मिट्टी के तेल में रखा जाता है।', 'Sodium is stored in kerosene.', 'सोडियम हवा और नमी से तीव्र अभिक्रिया करता है।', 'Sodium reacts vigorously with air and moisture.', 0],
  ['व्हेल एक मछली है।', 'A whale is a fish.', 'व्हेल जल में रहती है।', 'A whale lives in water.', 3],
  ['चन्द्रमा पर वायुमण्डल है।', 'The Moon has a dense atmosphere.', 'चन्द्रमा का गुरुत्वीय बल पृथ्वी से कम है।', 'The Moon\'s gravity is weaker than the Earth\'s.', 3],
  ['सर्दियों में गहरे रंग के कपड़े अधिक गर्म लगते हैं।', 'Dark-coloured clothes feel warmer in sunlight.', 'गहरे रंग अधिक ऊष्मा अवशोषित करते हैं।', 'Dark colours absorb more heat.', 0],
  ['भारत में गणतंत्र दिवस 26 जनवरी को मनाया जाता है।', 'India celebrates Republic Day on 26 January.', 'भारत का संविधान 26 जनवरी 1950 को लागू हुआ।', 'The Constitution of India came into effect on 26 January 1950.', 0]
];
G('r.assert', 'कथन एवं कारण', 'Assertion & Reason', [(r) => { const it = r.pick(AR); return mc(r, R(`कथन (A): ${it[0]}\nकारण (R): ${it[2]}\nसही विकल्प चुनिए।`, `Assertion (A): ${it[1]}\nReason (R): ${it[3]}\nChoose the correct option.`), AR_OPT[it[4]], AR_OPT.filter((_, i) => i !== it[4]), ex(AR_OPT[it[4]].hi, AR_OPT[it[4]].en)); }]);

/* ---------- binary logic ---------- */
G('r.binary', 'बाइनरी तर्क', 'Binary logic', [
  (r) => { const n = r.int(9, 63), bin = n.toString(2); return numMC(r, R(`बाइनरी संख्या ${bin} का दशमलव मान क्या है?`, `What is the decimal value of the binary number ${bin}?`), n, [n + 1, n - 1, n + 2, n - 2, n * 2], num, { int: true, min: 1 }, ex(`${bin}₂ = ${n}`, `${bin}₂ = ${n}`)); },
  (r) => { const n = r.int(9, 63), c = n.toString(2); const flip = (s, i) => s.slice(0, i) + (s[i] === '0' ? '1' : '0') + s.slice(i + 1); return strMC(r, R(`दशमलव संख्या ${n} का बाइनरी रूप क्या है?`, `What is the binary form of the decimal number ${n}?`), c, [flip(c, c.length - 1), flip(c, c.length - 2), flip(c, 0), flip(c, Math.floor(c.length / 2))], ex(`${n} को बार-बार 2 से भाग देकर शेषफल उल्टे क्रम में लिखने पर ${c}`, `Repeated division of ${n} by 2, reading remainders bottom-up, gives ${c}`)); },
  (r) => { const g = r.pick([['AND', 1, '(1, 1)'], ['OR', 0, '(0, 0)'], ['NAND', 0, '(1, 1)'], ['NOR', 1, '(0, 0)']]); const all = ['(0, 0)', '(0, 1)', '(1, 0)', '(1, 1)']; return mc(r, R(`किस इनपुट युग्म (A, B) पर ${g[0]} गेट का आउटपुट ${g[1]} प्राप्त होता है (केवल एक ही युग्म सही है)?`, `For which input pair (A, B) does a ${g[0]} gate give output ${g[1]} (only one pair is correct)?`), P(g[2]), all.filter((x) => x !== g[2]).map((x) => P(x)), ex(`${g[0]} गेट का सत्यमान सारणी अनुसार`, `As per the truth table of the ${g[0]} gate`)); }
]);

/* ---------- critical reasoning / inference (syllogisms) ---------- */
const NOUNS = [['पुस्तकें', 'books'], ['कलमें', 'pens'], ['फूल', 'flowers'], ['पेड़', 'trees'], ['पक्षी', 'birds'], ['डॉक्टर', 'doctors'], ['शिक्षक', 'teachers'], ['छात्र', 'students'], ['पत्थर', 'stones'], ['मेजें', 'tables'], ['कुर्सियाँ', 'chairs'], ['बिल्लियाँ', 'cats'], ['कुत्ते', 'dogs'], ['नदियाँ', 'rivers']];
const FORMS = [
  [(x, y, z) => [`सभी ${x[0]} ${y[0]} हैं। सभी ${y[0]} ${z[0]} हैं।`, `All ${x[1]} are ${y[1]}. All ${y[1]} are ${z[1]}.`], (x, y, z) => [`सभी ${x[0]} ${z[0]} हैं।`, `All ${x[1]} are ${z[1]}.`], (x, y, z) => [`सभी ${z[0]} ${x[0]} हैं।`, `All ${z[1]} are ${x[1]}.`], 0],
  [(x, y, z) => [`कुछ ${x[0]} ${y[0]} हैं। सभी ${y[0]} ${z[0]} हैं।`, `Some ${x[1]} are ${y[1]}. All ${y[1]} are ${z[1]}.`], (x, y, z) => [`कुछ ${x[0]} ${z[0]} हैं।`, `Some ${x[1]} are ${z[1]}.`], (x, y, z) => [`सभी ${x[0]} ${z[0]} हैं।`, `All ${x[1]} are ${z[1]}.`], 0],
  [(x, y, z) => [`सभी ${x[0]} ${y[0]} हैं। कोई ${y[0]} ${z[0]} नहीं है।`, `All ${x[1]} are ${y[1]}. No ${y[1]} is a ${z[1].replace(/s$/, '')}.`], (x, y, z) => [`कोई ${x[0]} ${z[0]} नहीं है।`, `No ${x[1]} is a ${z[1].replace(/s$/, '')}.`], (x, y, z) => [`कुछ ${z[0]} ${x[0]} हैं।`, `Some ${z[1]} are ${x[1]}.`], 0],
  [(x, y, z) => [`कुछ ${x[0]} ${y[0]} हैं। कुछ ${y[0]} ${z[0]} हैं।`, `Some ${x[1]} are ${y[1]}. Some ${y[1]} are ${z[1]}.`], (x, y, z) => [`कुछ ${x[0]} ${z[0]} हैं।`, `Some ${x[1]} are ${z[1]}.`], (x, y, z) => [`कुछ ${z[0]} ${x[0]} हैं।`, `Some ${z[1]} are ${x[1]}.`], 3],
  [(x, y, z) => [`सभी ${x[0]} ${y[0]} हैं। कुछ ${y[0]} ${z[0]} हैं।`, `All ${x[1]} are ${y[1]}. Some ${y[1]} are ${z[1]}.`], (x, y, z) => [`कुछ ${x[0]} ${z[0]} हैं।`, `Some ${x[1]} are ${z[1]}.`], (x, y, z) => [`कुछ ${z[0]} ${y[0]} हैं।`, `Some ${z[1]} are ${y[1]}.`], 1],
  [(x, y, z) => [`कोई ${x[0]} ${y[0]} नहीं है। सभी ${y[0]} ${z[0]} हैं।`, `No ${x[1]} is a ${y[1].replace(/s$/, '')}. All ${y[1]} are ${z[1]}.`], (x, y, z) => [`कोई ${x[0]} ${z[0]} नहीं है।`, `No ${x[1]} is a ${z[1].replace(/s$/, '')}.`], (x, y, z) => [`कुछ ${z[0]} ${x[0]} नहीं हैं।`, `Some ${z[1]} are not ${x[1]}.`], 1],
  [(x, y, z) => [`सभी ${x[0]} ${y[0]} हैं। सभी ${z[0]} ${y[0]} हैं।`, `All ${x[1]} are ${y[1]}. All ${z[1]} are ${y[1]}.`], (x, y, z) => [`सभी ${x[0]} ${z[0]} हैं।`, `All ${x[1]} are ${z[1]}.`], (x, y, z) => [`कुछ ${x[0]} ${z[0]} हैं।`, `Some ${x[1]} are ${z[1]}.`], 3],
  [(x, y, z) => [`कुछ ${x[0]} ${y[0]} हैं। कोई ${y[0]} ${z[0]} नहीं है।`, `Some ${x[1]} are ${y[1]}. No ${y[1]} is a ${z[1].replace(/s$/, '')}.`], (x, y, z) => [`कुछ ${x[0]} ${z[0]} नहीं हैं।`, `Some ${x[1]} are not ${z[1]}.`], (x, y, z) => [`कोई ${x[0]} ${z[0]} नहीं है।`, `No ${x[1]} is a ${z[1].replace(/s$/, '')}.`], 0]
];
G('r.infer', 'निष्कर्ष एवं आलोचनात्मक तर्क', 'Inference & critical reasoning', [(r) => {
  const [x, y, z] = r.sample(NOUNS, 3), f = r.pick(FORMS), st = f[0](x, y, z), c1 = f[1](x, y, z), c2 = f[2](x, y, z), ans = f[3];
  return mc(r, R(`कथन: ${st[0]}\nनिष्कर्ष I: ${c1[0]}\nनिष्कर्ष II: ${c2[0]}\nकौन-सा/से निष्कर्ष तार्किक रूप से सही है/हैं?`, `Statements: ${st[1]}\nConclusion I: ${c1[1]}\nConclusion II: ${c2[1]}\nWhich conclusion(s) logically follow(s)?`), OPT4[ans], OPT4.filter((_, i) => i !== ans), ex('वेन आरेख बनाकर जाँचने पर उपरोक्त विकल्प सही है।', 'Checking with Venn diagrams gives the option above.'));
}]);

/* ---------- grouping & selection ---------- */
const C = (n, k) => { let v = 1; for (let i = 1; i <= k; i++) v = v * (n - k + i) / i; return Math.round(v); };
G('r.group', 'समूहीकरण एवं चयन', 'Grouping & selection', [
  (r) => { const p = r.int(3, 20), q = r.int(3, 20), c = p + q - 1; return numMC(r, R(`एक पंक्ति में अजय बाएँ से ${p}वें और दाएँ से ${q}वें स्थान पर है। पंक्ति में कुल कितने व्यक्ति हैं?`, `In a row, Ajay is ${p}th from the left and ${q}th from the right. How many persons are in the row?`), c, [p + q, p + q - 2, p + q + 1, Math.abs(p - q)], num, { int: true, min: 1 }, ex(`कुल = ${p} + ${q} − 1 = ${c}`, `Total = ${p} + ${q} − 1 = ${c}`)); },
  (r) => { const a = r.int(5, 25), b = r.int(5, 25), c = a + b - 1; return numMC(r, R(`एक कक्षा में रीना का रैंक ऊपर से ${a}वाँ तथा नीचे से ${b}वाँ है। कक्षा में कुल कितने विद्यार्थी हैं?`, `In a class, Reena ranks ${a}th from the top and ${b}th from the bottom. How many students are there in the class?`), c, [a + b, a + b - 2, c + 2, c - 2], num, { int: true, min: 1 }, ex(`कुल = ${a} + ${b} − 1 = ${c}`, `Total = ${a} + ${b} − 1 = ${c}`)); },
  (r) => { const n = r.int(5, 10), k = r.int(2, 3), c = C(n, k); return numMC(r, R(`${n} विद्यार्थियों में से ${k} की एक समिति कितने प्रकार से चुनी जा सकती है?`, `In how many ways can a committee of ${k} be chosen from ${n} students?`), c, [n * (n - 1), n * k, c + n, c - 1, n * (n - 1) * (n - 2)], num, { int: true, min: 1 }, ex(`${n}C${k} = ${c}`, `${n}C${k} = ${c}`)); },
  (r) => { const m = r.int(3, 5), w = r.int(2, 4), c = C(m + w, 3) - C(m, 3); return numMC(r, R(`${m} पुरुषों और ${w} महिलाओं में से 3 सदस्यों की एक समिति बनानी है जिसमें कम से कम एक महिला हो। कितने प्रकार से बन सकती है?`, `A committee of 3 is to be formed from ${m} men and ${w} women with at least one woman. In how many ways is this possible?`), c, [C(m + w, 3), C(w, 1) * C(m, 2), c + 5, c - 5, C(m, 3)], num, { int: true, min: 1 }, ex(`कुल − (केवल पुरुष) = ${C(m + w, 3)} − ${C(m, 3)} = ${c}`, `Total − (all men) = ${C(m + w, 3)} − ${C(m, 3)} = ${c}`)); }
]);

/* ---------- puzzles (ordering) ---------- */
G('r.puzzle', 'पहेलियाँ', 'Puzzles', [(r) => {
  const L = r.shuffle(['P', 'Q', 'R', 'S', 'T']), n = 5; const stH = []; const stE = [];
  for (let i = 0; i < n - 1; i++) { stH.push(`${L[i]}, ${L[i + 1]} से लम्बा है`); stE.push(`${L[i]} is taller than ${L[i + 1]}`); }
  const order = r.shuffle([...Array(n - 1).keys()]); const h = order.map((i) => stH[i]).join('; '), e = order.map((i) => stE[i]).join('; ');
  const q = r.pick([[0, 'सबसे लम्बा', 'tallest'], [4, 'सबसे छोटा', 'shortest'], [2, 'बीच का (तीसरा)', 'middle (third)'], [1, 'दूसरा सबसे लम्बा', 'second tallest']]); const ans = L[q[0]];
  return mc(r, R(`पाँच मित्र P, Q, R, S, T की लम्बाई अलग-अलग है। ${h}। ${q[1]} कौन है?`, `Five friends P, Q, R, S, T have different heights. ${e}. Who is the ${q[2]}?`), P(ans), L.filter((x) => x !== ans).slice(0, 3).map((x) => P(x)), ex(`घटते क्रम में: ${L.join(' > ')}`, `In decreasing order: ${L.join(' > ')}`));
}]);

})(typeof window !== 'undefined' ? window : globalThis);
