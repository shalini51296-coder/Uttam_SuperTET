/* Science (class 12 level per the notice, tuned to primary-teacher recruitment): bilingual banks. */
(function (g) {
'use strict';
const SUP = g.SUP, M = SUP.mapItems, Q = SUP.mcqItems, P = SUP.P, nf = SUP.nf, numMC = SUP.numMC, cat = (...a) => [].concat(...a);
const D = (id, hi, en, items) => SUP.def(id, 'science', hi, en, items);
const R = (hi, en) => P(hi, en), num = (v) => P(nf(v)), un = (u) => (v) => P(nf(v) + ' ' + u);
const rep = (fn, n) => Array.from({ length: n }, () => fn);
const ex = (hi, en) => ({ exp: P(hi, en) });

/* numeric closures (answers computed) */
const N = {
  speed: (r) => { const s = r.int(2, 30), t = r.int(2, 12), d = s * t; return numMC(r, R(`एक वस्तु ${d} मी की दूरी ${t} सेकण्ड में तय करती है। उसकी चाल (मी/से) कितनी है?`, `An object covers ${d} m in ${t} s. What is its speed (m/s)?`), s, [s + 1, s - 1, s + 2, d - t, t], num, { int: true, min: 1 }, ex(`चाल = दूरी/समय = ${d}/${t} = ${s} मी/से`, `Speed = distance/time = ${d}/${t} = ${s} m/s`)); },
  vu: (r) => { const u = r.int(0, 10), a = r.int(2, 6), t = r.int(2, 8), v = u + a * t; return numMC(r, R(`एक वस्तु का प्रारम्भिक वेग ${u} मी/से तथा त्वरण ${a} मी/से² है। ${t} सेकण्ड बाद उसका वेग (मी/से) क्या होगा?`, `An object has initial velocity ${u} m/s and acceleration ${a} m/s². What is its velocity after ${t} s (m/s)?`), v, [v + a, v - a, u + a, a * t, v + 2], num, { int: true, min: 0 }, ex(`v = u + at = ${u} + ${a}×${t} = ${v}`, `v = u + at = ${u} + ${a}×${t} = ${v}`)); },
  force: (r) => { const m = r.int(2, 20), a = r.int(2, 9), F = m * a; return numMC(r, R(`${m} किग्रा द्रव्यमान की वस्तु में ${a} मी/से² त्वरण उत्पन्न करने हेतु कितना बल (न्यूटन) लगाना होगा?`, `What force (in newtons) is needed to give a ${m} kg object an acceleration of ${a} m/s²?`), F, [F + m, F - a, m + a, F * 2, F + a], un('N'), { int: true, min: 1 }, ex(`F = ma = ${m} × ${a} = ${F} N`, `F = ma = ${m} × ${a} = ${F} N`)); },
  work: (r) => { const F = r.int(2, 20), d = r.int(2, 15), W = F * d; return numMC(r, R(`${F} न्यूटन का बल किसी वस्तु को बल की दिशा में ${d} मी विस्थापित करता है। किया गया कार्य (जूल) कितना है?`, `A force of ${F} N moves an object ${d} m in its own direction. How much work (J) is done?`), W, [W + F, W - d, F + d, W * 2, W + d], un('J'), { int: true, min: 1 }, ex(`W = F × d = ${F} × ${d} = ${W} J`, `W = F × d = ${F} × ${d} = ${W} J`)); },
  ke: (r) => { const m = r.int(1, 10) * 2, v = r.int(2, 10), K = m * v * v / 2; return numMC(r, R(`${m} किग्रा द्रव्यमान की वस्तु ${v} मी/से के वेग से चल रही है। उसकी गतिज ऊर्जा (जूल) कितनी है?`, `A ${m} kg object moves with a velocity of ${v} m/s. What is its kinetic energy (J)?`), K, [K * 2, K / 2, m * v, K + m, m * v * v], un('J'), { int: true, min: 1 }, ex(`KE = ½mv² = ½ × ${m} × ${v}² = ${K} J`, `KE = ½mv² = ½ × ${m} × ${v}² = ${K} J`)); },
  pe: (r) => { const m = r.int(2, 15), h = r.int(2, 20), E = m * 10 * h; return numMC(r, R(`${m} किग्रा की वस्तु को ${h} मी की ऊँचाई पर रखने पर उसकी स्थितिज ऊर्जा (जूल) कितनी होगी? (g = 10 मी/से²)`, `What is the potential energy (J) of a ${m} kg object at a height of ${h} m? (g = 10 m/s²)`), E, [E / 2, E * 2, m * h, E + m, E + h], un('J'), { int: true, min: 1 }, ex(`PE = mgh = ${m} × 10 × ${h} = ${E} J`, `PE = mgh = ${m} × 10 × ${h} = ${E} J`)); },
  power: (r) => { const t = r.int(2, 10), P0 = r.int(2, 25) * 10, W = P0 * t; return numMC(r, R(`कोई मशीन ${t} सेकण्ड में ${W} जूल कार्य करती है। उसकी शक्ति (वाट) कितनी है?`, `A machine does ${W} J of work in ${t} s. What is its power (W)?`), P0, [P0 + 10, P0 - 10, P0 * 2, W - t, P0 / 2], un('W'), { int: true, min: 1 }, ex(`P = W/t = ${W}/${t} = ${P0} W`, `P = W/t = ${W}/${t} = ${P0} W`)); },
  s: (r) => { const a = r.int(1, 6) * 2, t = r.int(2, 8), d = a * t * t / 2; return numMC(r, R(`विरामावस्था से चलकर एक वस्तु ${a} मी/से² के एकसमान त्वरण से ${t} सेकण्ड में कितनी दूरी (मी) तय करेगी?`, `Starting from rest, how far (m) does an object travel in ${t} s with uniform acceleration ${a} m/s²?`), d, [d * 2, d / 2, a * t, d + a, d + t], un('m'), { int: true, min: 1 }, ex(`s = ½at² = ½ × ${a} × ${t}² = ${d} m`, `s = ½at² = ½ × ${a} × ${t}² = ${d} m`)); },
  mom: (r) => { const m = r.int(2, 20), v = r.int(2, 12), p = m * v; return numMC(r, R(`${m} किग्रा द्रव्यमान की वस्तु ${v} मी/से के वेग से गतिमान है। उसका संवेग (किग्रा·मी/से) कितना है?`, `A ${m} kg body moves with a velocity of ${v} m/s. What is its momentum (kg·m/s)?`), p, [p + m, p - v, m + v, p * 2, p / 2], num, { int: true, min: 1 }, ex(`p = mv = ${m} × ${v} = ${p}`, `p = mv = ${m} × ${v} = ${p}`)); }
};
const echo = (r) => { const t = r.pick([1, 2, 3, 4, 5, 6]) , d = 340 * t / 2; return numMC(r, R(`एक व्यक्ति ने पहाड़ी की ओर आवाज़ लगाई और ${t} सेकण्ड बाद प्रतिध्वनि सुनी। पहाड़ी कितनी दूर (मी) है? (ध्वनि की चाल = 340 मी/से)`, `A person shouts towards a cliff and hears the echo after ${t} s. How far (m) is the cliff? (speed of sound = 340 m/s)`), d, [d * 2, d / 2, 340 + t, d + 85, d - 85], un('m'), { int: true, min: 1 }, ex(`दूरी = (340 × ${t})/2 = ${d} मी`, `Distance = (340 × ${t})/2 = ${d} m`)); };
const thunder = (r) => { const t = r.int(2, 9), d = 340 * t; return numMC(r, R(`बिजली की चमक दिखने के ${t} सेकण्ड बाद गर्जन सुनाई दी। बिजली कितनी दूर (मी) गिरी? (ध्वनि की चाल = 340 मी/से; प्रकाश का समय नगण्य)`, `Thunder is heard ${t} s after the lightning flash. How far (m) did the lightning strike? (speed of sound = 340 m/s; ignore light travel time)`), d, [d / 2, d * 2, d + 340, d - 340, 340 + t], un('m'), { int: true, min: 1 }, ex(`दूरी = 340 × ${t} = ${d} मी`, `Distance = 340 × ${t} = ${d} m`)); };

/* ---- motion, force, energy ---- */
D('sci.motion', 'गति, बल एवं ऊर्जा', 'Motion, force & energy', cat(
  Object.values(N).flatMap((fn) => rep(fn, 3)),
  M({ f: '{k} का SI मात्रक है—~The SI unit of {k} is—', r: '{v} किस भौतिक राशि का SI मात्रक है?~{v} is the SI unit of which physical quantity?', rows: `
बल~force | न्यूटन~newton
कार्य~work | जूल~joule
शक्ति~power | वाट~watt
दाब~pressure | पास्कल~pascal
आवृत्ति~frequency | हर्ट्ज़~hertz
विद्युत धारा~electric current | ऐम्पियर~ampere
विद्युत प्रतिरोध~electrical resistance | ओम~ohm
विद्युत आवेश~electric charge | कूलॉम~coulomb
त्वरण~acceleration | मी/से²~m/s²
संवेग~momentum | किग्रा·मी/से~kg·m/s` }),
  Q(`
न्यूटन का प्रथम गति नियम किसे परिभाषित करता है?~Newton's first law of motion defines—|जड़त्व~Inertia|संवेग~Momentum|त्वरण~Acceleration|गुरुत्वाकर्षण~Gravitation
'प्रत्येक क्रिया की समान एवं विपरीत प्रतिक्रिया होती है' — यह न्यूटन का कौन-सा नियम है?~"Every action has an equal and opposite reaction" is Newton's—|तृतीय नियम~Third law|प्रथम नियम~First law|द्वितीय नियम~Second law|गुरुत्वाकर्षण नियम~Law of gravitation
निम्नलिखित में से सदिश राशि कौन-सी है?~Which of the following is a vector quantity?|वेग~Velocity|चाल~Speed|द्रव्यमान~Mass|ऊर्जा~Energy
निम्नलिखित में से अदिश राशि कौन-सी है?~Which of the following is a scalar quantity?|चाल~Speed|वेग~Velocity|बल~Force|विस्थापन~Displacement
पृथ्वी की सतह पर गुरुत्वीय त्वरण (g) का मान लगभग होता है—~The value of acceleration due to gravity (g) on the Earth's surface is approximately—|9.8 मी/से²~9.8 m/s²|98 मी/से²~98 m/s²|0.98 मी/से²~0.98 m/s²|6.67 मी/से²~6.67 m/s²
किसी वस्तु के गतिमान होने के कारण उसमें निहित ऊर्जा कहलाती है—~The energy possessed by a body due to its motion is called—|गतिज ऊर्जा~Kinetic energy|स्थितिज ऊर्जा~Potential energy|ऊष्मीय ऊर्जा~Heat energy|रासायनिक ऊर्जा~Chemical energy
ऊर्जा संरक्षण के नियमानुसार ऊर्जा—~According to the law of conservation of energy, energy—|न उत्पन्न की जा सकती है, न नष्ट~can be neither created nor destroyed|उत्पन्न की जा सकती है~can be created|नष्ट की जा सकती है~can be destroyed|सदैव घटती है~always decreases
किसी वस्तु द्वारा प्रारम्भिक बिन्दु से अन्तिम बिन्दु के बीच की न्यूनतम सीधी दूरी कहलाती है—~The shortest straight distance between the initial and final positions is—|विस्थापन~Displacement|दूरी~Distance|चाल~Speed|त्वरण~Acceleration
वृत्ताकार पथ पर एक पूरा चक्कर लगाने पर विस्थापन होता है—~After completing one full circle, the displacement is—|शून्य~Zero|परिधि के बराबर~Equal to the circumference|व्यास के बराबर~Equal to the diameter|त्रिज्या के बराबर~Equal to the radius
`)));

/* ---- light ---- */
D('sci.light', 'प्रकाश', 'Light', cat(
M({ f: '{k} — इसके लिए किसका उपयोग होता है?~Which is used for: {k}?', r: '{v} का उपयोग किस कार्य में होता है?~For which purpose is {v} used?', rows: `
वाहन के पीछे का यातायात देखने के लिए~seeing the traffic behind a vehicle | उत्तल दर्पण~a convex mirror
दाढ़ी बनाने के लिए~shaving | अवतल दर्पण~a concave mirror
टॉर्च/हेडलाइट के परावर्तक के रूप में~use as a torch/headlight reflector | अवतल दर्पण~a concave mirror
सूक्ष्म वस्तुओं को बड़ा देखने के लिए~magnifying small objects | उत्तल लेंस~a convex lens
निकट दृष्टि दोष के सुधार के लिए~correcting myopia | अवतल लेंस~a concave lens
दूर दृष्टि दोष के सुधार के लिए~correcting hypermetropia | उत्तल लेंस~a convex lens` }),
M({ f: '{k} का कारण है—~{k} is caused by—', r: '{v} के कारण कौन-सी घटना होती है?~Which phenomenon is caused by {v}?', rows: `
इन्द्रधनुष का बनना~formation of a rainbow | प्रकाश का विक्षेपण~dispersion of light
मृगमरीचिका~mirage | पूर्ण आन्तरिक परावर्तन~total internal reflection
तारों का टिमटिमाना~twinkling of stars | वायुमण्डलीय अपवर्तन~atmospheric refraction
आकाश का नीला दिखना~the blue colour of the sky | प्रकीर्णन~scattering
हीरे की चमक~sparkling of a diamond | पूर्ण आन्तरिक परावर्तन~total internal reflection
जल में रखी छड़ का मुड़ा दिखना~a stick appearing bent in water | अपवर्तन~refraction` }),
Q(`
निर्वात में प्रकाश की चाल लगभग होती है—~The speed of light in vacuum is approximately—|3 × 10⁸ मी/से~3 × 10⁸ m/s|3 × 10⁶ मी/से~3 × 10⁶ m/s|3 × 10¹⁰ मी/से~3 × 10¹⁰ m/s|3 × 10⁵ मी/से~3 × 10⁵ m/s
मानव नेत्र में प्रतिबिम्ब किस पर बनता है?~On which part of the human eye is the image formed?|रेटिना (दृष्टिपटल)~Retina|पुतली~Pupil|कॉर्निया~Cornea|आइरिस~Iris
नेत्र में प्रवेश करने वाले प्रकाश की मात्रा नियन्त्रित करने वाला भाग है—~The part that controls the amount of light entering the eye is the—|आइरिस (पुतली का पर्दा)~Iris|रेटिना~Retina|नेत्र लेंस~Eye lens|कॉर्निया~Cornea
सूर्य के प्रकाश के विक्षेपण से कितने रंग प्राप्त होते हैं?~How many colours are obtained by dispersion of sunlight?|7|5|6|8
प्रकाश के प्राथमिक रंग हैं—~The primary colours of light are—|लाल, हरा, नीला~Red, green, blue|लाल, पीला, नीला~Red, yellow, blue|पीला, हरा, नीला~Yellow, green, blue|लाल, हरा, पीला~Red, green, yellow
परावर्तन के नियम के अनुसार—~According to the law of reflection—|आपतन कोण = परावर्तन कोण~angle of incidence = angle of reflection|आपतन कोण > परावर्तन कोण~angle of incidence > angle of reflection|आपतन कोण < परावर्तन कोण~angle of incidence < angle of reflection|दोनों कोण सदैव 90° होते हैं~both angles are always 90°
समतल दर्पण द्वारा बना प्रतिबिम्ब होता है—~The image formed by a plane mirror is—|आभासी और सीधा, वस्तु के बराबर आकार का~virtual, erect and of the same size|वास्तविक और उल्टा~real and inverted|वास्तविक और छोटा~real and diminished|आभासी और बड़ा~virtual and magnified
निकट दृष्टि दोष में व्यक्ति को—~In myopia (short-sightedness) a person cannot see—|दूर की वस्तुएँ स्पष्ट नहीं दिखतीं~distant objects clearly|पास की वस्तुएँ स्पष्ट नहीं दिखतीं~near objects clearly|कोई रंग नहीं दिखता~any colours|कुछ भी नहीं दिखता~anything at all
सूर्य ग्रहण के समय कौन-सा खगोलीय पिण्ड पृथ्वी और सूर्य के बीच आता है?~During a solar eclipse which body comes between the Sun and the Earth?|चन्द्रमा~Moon|शुक्र~Venus|मंगल~Mars|बुध~Mercury
`)));

/* ---- sound ---- */
D('sci.sound', 'ध्वनि', 'Sound', cat(
  rep(echo, 4), rep(thunder, 4),
  Q(`
ध्वनि का तारत्व (पिच) निर्भर करता है—~The pitch of a sound depends on—|आवृत्ति पर~its frequency|आयाम पर~its amplitude|चाल पर~its speed|माध्यम के घनत्व पर~the density of the medium
ध्वनि की प्रबलता (तीव्रता) निर्भर करती है—~The loudness of a sound depends on—|आयाम पर~its amplitude|आवृत्ति पर~its frequency|तरंगदैर्घ्य पर~its wavelength|माध्यम के रंग पर~the colour of the medium
ध्वनि तरंगें किस प्रकार की तरंगें हैं?~Sound waves are—|अनुदैर्ध्य~longitudinal|अनुप्रस्थ~transverse|विद्युत-चुम्बकीय~electromagnetic|स्थिर~stationary
ध्वनि निम्न में से किस माध्यम में सबसे तेज चलती है?~In which medium does sound travel fastest?|ठोस~Solid|द्रव~Liquid|गैस~Gas|निर्वात~Vacuum
मानव कान द्वारा सुनी जा सकने वाली ध्वनि की आवृत्ति-परास है—~The audible frequency range for humans is—|20 Hz से 20,000 Hz~20 Hz to 20,000 Hz|2 Hz से 200 Hz~2 Hz to 200 Hz|200 Hz से 2 Hz~200 Hz to 2 Hz|20,000 Hz से 2,00,000 Hz~20,000 Hz to 2,00,000 Hz
20,000 Hz से अधिक आवृत्ति की ध्वनि कहलाती है—~Sound of frequency above 20,000 Hz is called—|पराश्रव्य (अल्ट्रासाउण्ड)~Ultrasound|अवश्रव्य (इन्फ्रासाउण्ड)~Infrasound|श्रव्य ध्वनि~Audible sound|कोलाहल~Noise
ध्वनि की प्रबलता की इकाई है—~The unit of loudness of sound is—|डेसीबल~Decibel|हर्ट्ज़~Hertz|वाट~Watt|पास्कल~Pascal
चमगादड़ अँधेरे में उड़ने के लिए किसका उपयोग करते हैं?~Bats use which of the following to fly in the dark?|पराश्रव्य तरंगों का~Ultrasonic waves|अवश्रव्य तरंगों का~Infrasonic waves|प्रकाश तरंगों का~Light waves|रेडियो तरंगों का~Radio waves
सोनार (SONAR) की कार्य-पद्धति किस पर आधारित है?~SONAR works on—|पराश्रव्य तरंगों के परावर्तन पर~reflection of ultrasonic waves|प्रकाश के अपवर्तन पर~refraction of light|रेडियो तरंगों पर~radio waves|X-किरणों पर~X-rays
ध्वनि निर्वात में क्यों नहीं चलती?~Why can sound not travel through a vacuum?|इसके संचरण के लिए माध्यम आवश्यक है~It needs a material medium|यह बहुत धीमी है~It is very slow|यह प्रकाश से तेज है~It is faster than light|यह विद्युत-चुम्बकीय है~It is electromagnetic
प्रतिध्वनि सुनने के लिए स्रोत और परावर्तक सतह के बीच न्यूनतम दूरी लगभग होनी चाहिए—~For hearing an echo, the minimum distance between the source and the reflector should be about—|17 मी~17 m|1.7 मी~1.7 m|170 मी~170 m|340 मी~340 m
`)));

/* ---- living world ---- */
D('sci.living', 'जीवों की दुनिया', 'World of living beings', cat(
M({ f: '{k} किस वर्ग का जीव है?~To which group does {k} belong?', r: '{v} वर्ग का उदाहरण कौन-सा है?~Which is an example of {v}?', rows: `
मेंढक~Frog | उभयचर~Amphibian
मगरमच्छ~Crocodile | सरीसृप~Reptile
साँप~Snake | सरीसृप~Reptile
व्हेल~Whale | स्तनधारी~Mammal
चमगादड़~Bat | स्तनधारी~Mammal
पेंगुइन~Penguin | पक्षी~Bird
तिलचट्टा~Cockroach | कीट~Insect
केंचुआ~Earthworm | ऐनेलिडा (खण्डित कृमि)~Annelida (segmented worm)
घोंघा~Snail | मोलस्क~Mollusca
स्टारफिश~Starfish | एकाइनोडर्मेटा~Echinodermata
हाइड्रा~Hydra | सीलेन्ट्रेटा (नाइडेरिया)~Coelenterata (Cnidaria)` }),
M({ f: '{k} में श्वसन किससे होता है?~{k} breathes through—', rows: `
मछली~Fish | गलफड़े~gills
केंचुआ~Earthworm | त्वचा~skin
तिलचट्टा~Cockroach | श्वास-नलिकाएँ (ट्रेकिया)~tracheae
मनुष्य~Human | फेफड़े~lungs
मेंढक (वयस्क)~Adult frog | फेफड़े और त्वचा~lungs and skin` }),
Q(`
पादप कोशिका में पाया जाने वाला, परन्तु जन्तु कोशिका में अनुपस्थित भाग है—~Which is present in plant cells but absent in animal cells?|कोशिका भित्ति~Cell wall|केन्द्रक~Nucleus|कोशिका झिल्ली~Cell membrane|माइटोकॉन्ड्रिया~Mitochondria
कोशिका का 'शक्ति-गृह' किसे कहा जाता है?~Which is called the 'powerhouse of the cell'?|माइटोकॉन्ड्रिया~Mitochondria|राइबोसोम~Ribosome|केन्द्रक~Nucleus|लाइसोसोम~Lysosome
कोशिका की खोज किसने की थी?~Who discovered the cell?|रॉबर्ट हुक~Robert Hooke|ल्यूवेनहॉक~Leeuwenhoek|डार्विन~Darwin|मेण्डल~Mendel
प्रकाश-संश्लेषण किस कोशिकांग में होता है?~In which organelle does photosynthesis occur?|हरितलवक (क्लोरोप्लास्ट)~Chloroplast|माइटोकॉन्ड्रिया~Mitochondria|राइबोसोम~Ribosome|गॉल्जीकाय~Golgi body
खाद्य श्रृंखला में उत्पादक कौन होते हैं?~Who are the producers in a food chain?|हरे पौधे~Green plants|शाकाहारी जन्तु~Herbivores|मांसाहारी जन्तु~Carnivores|अपघटक~Decomposers
मृत जीवों को अपघटित करने वाले जीव हैं—~Organisms that decompose dead matter are—|जीवाणु और कवक~Bacteria and fungi|हरे पौधे~Green plants|शाकाहारी~Herbivores|कीट~Insects
मनुष्य की कोशिका में गुणसूत्रों की संख्या होती है—~The number of chromosomes in a human cell is—|46|23|48|44
आनुवंशिकी (जेनेटिक्स) के जनक किसे माना जाता है?~Who is regarded as the father of genetics?|ग्रेगर जॉन मेण्डल~Gregor Johann Mendel|चार्ल्स डार्विन~Charles Darwin|लैमार्क~Lamarck|हुगो डी व्रीज~Hugo de Vries
`)));

/* ---- human body, health, nutrition ---- */
D('sci.body', 'मानव शरीर, स्वास्थ्य एवं पोषण', 'Human body, health & nutrition', cat(
M({ f: '{k} की कमी से होने वाला रोग है—~The deficiency of {k} causes—', r: '{v} रोग किसकी कमी से होता है?~{v} is caused by the deficiency of—', rows: `
विटामिन A~Vitamin A | रतौंधी~Night blindness
विटामिन B₁~Vitamin B1 | बेरी-बेरी~Beriberi
विटामिन C~Vitamin C | स्कर्वी~Scurvy
विटामिन D~Vitamin D | रिकेट्स~Rickets
विटामिन K~Vitamin K | रक्त का न जमना~Delayed blood clotting
आयोडीन~Iodine | घेंघा~Goitre
लौह तत्त्व (आयरन)~Iron | एनीमिया~Anaemia
नियासिन (विटामिन B₃)~Niacin (Vitamin B3) | पेलाग्रा~Pellagra` }),
M({ f: '{k} का मुख्य कार्य है—~The main function of the {k} is—', r: '{v} किस अंग का कार्य है?~{v} is the function of which organ?', rows: `
हृदय~heart | रक्त को पम्प करना~pumping blood
फेफड़े~lungs | गैसों का आदान-प्रदान~exchange of gases
वृक्क (गुर्दे)~kidneys | रक्त को छानकर मूत्र बनाना~filtering blood and forming urine
यकृत (लिवर)~liver | पित्त रस बनाना~producing bile
अग्न्याशय~pancreas | इन्सुलिन बनाना~producing insulin
मस्तिष्क~brain | शरीर की क्रियाओं का नियन्त्रण~controlling body activities
छोटी आँत~small intestine | पचे भोजन का अवशोषण~absorption of digested food` }),
Q(`
रक्त समूहों (ABO) की खोज किसने की?~Who discovered the ABO blood groups?|कार्ल लैण्डस्टीनर~Karl Landsteiner|एडवर्ड जेनर~Edward Jenner|लुई पाश्चर~Louis Pasteur|रॉबर्ट कोच~Robert Koch
सर्वग्राही (सार्वत्रिक) दाता रक्त समूह है—~The universal donor blood group is—|O|AB|A|B
सार्वत्रिक ग्राही रक्त समूह है—~The universal recipient blood group is—|AB|O|A|B
एक वयस्क मनुष्य में हड्डियों की संख्या होती है—~The number of bones in an adult human body is—|206|300|212|198
मनुष्य के शरीर की सबसे बड़ी ग्रन्थि है—~The largest gland in the human body is—|यकृत~Liver|अग्न्याशय~Pancreas|थायरॉइड~Thyroid|पीयूष ग्रन्थि~Pituitary
रक्त में ऑक्सीजन का वहन करने वाला वर्णक है—~The pigment that carries oxygen in blood is—|हीमोग्लोबिन~Haemoglobin|मेलानिन~Melanin|क्लोरोफिल~Chlorophyll|इन्सुलिन~Insulin
रक्त का थक्का जमाने में सहायक रक्त कणिकाएँ हैं—~Which blood cells help in clotting of blood?|प्लेटलेट्स (रक्त बिम्बाणु)~Platelets|लाल रक्त कणिकाएँ~Red blood cells|श्वेत रक्त कणिकाएँ~White blood cells|प्लाज्मा~Plasma
मानव हृदय में कक्षों की संख्या होती है—~The number of chambers in the human heart is—|चार~Four|दो~Two|तीन~Three|पाँच~Five
मनुष्य के शरीर का सामान्य ताप होता है—~The normal body temperature of a human is—|37°C (98.6°F)|35°C|40°C|32°C
सामान्य वयस्क में स्थायी दाँतों की संख्या होती है—~The number of permanent teeth in an adult is—|32|28|30|36
मनुष्य के शरीर की सबसे लम्बी हड्डी है—~The longest bone in the human body is—|फीमर (जाँघ की हड्डी)~Femur (thigh bone)|टिबिया~Tibia|ह्यूमरस~Humerus|रीढ़ की हड्डी~Spine
सन्तुलित आहार में सम्मिलित होते हैं—~A balanced diet contains—|सभी पोषक तत्त्व उचित मात्रा में~all nutrients in proper amounts|केवल प्रोटीन~only proteins|केवल कार्बोहाइड्रेट~only carbohydrates|केवल वसा~only fats
शरीर की वृद्धि एवं मरम्मत के लिए आवश्यक पोषक तत्त्व है—~The nutrient needed for growth and repair of the body is—|प्रोटीन~Protein|वसा~Fat|कार्बोहाइड्रेट~Carbohydrate|जल~Water
`)));

/* ---- environment & natural resources ---- */
D('sci.env', 'पर्यावरण एवं प्राकृतिक संसाधन', 'Environment & natural resources', cat(
M({ f: '{k} किससे सम्बन्धित है?~{k} is related to—', r: '{v} से कौन-सा समझौता/आन्दोलन सम्बन्धित है?~Which agreement/movement is related to {v}?', rows: `
मॉन्ट्रियल प्रोटोकॉल~Montreal Protocol | ओज़ोन परत को क्षति पहुँचाने वाले पदार्थों पर नियन्त्रण~controlling ozone-depleting substances
क्योटो प्रोटोकॉल~Kyoto Protocol | ग्रीनहाउस गैसों के उत्सर्जन में कमी~reducing greenhouse gas emissions
पेरिस समझौता (2015)~Paris Agreement (2015) | जलवायु परिवर्तन~climate change
रियो पृथ्वी सम्मेलन (1992)~Rio Earth Summit (1992) | पर्यावरण एवं सतत विकास~environment and sustainable development
चिपको आन्दोलन~Chipko Movement | वृक्षों की कटाई का विरोध~protection of trees from felling
रामसर सम्मेलन~Ramsar Convention | आर्द्रभूमियों का संरक्षण~conservation of wetlands` }),
Q(`
कोयला है—~Coal is—|अनवीकरणीय संसाधन~a non-renewable resource|नवीकरणीय संसाधन~a renewable resource|अक्षय ऊर्जा स्रोत~an inexhaustible energy source|जैविक खाद~an organic manure
सौर ऊर्जा है—~Solar energy is—|नवीकरणीय संसाधन~a renewable resource|अनवीकरणीय संसाधन~a non-renewable resource|जीवाश्म ईंधन~a fossil fuel|खनिज~a mineral
पेट्रोलियम है—~Petroleum is—|अनवीकरणीय संसाधन~a non-renewable resource|नवीकरणीय संसाधन~a renewable resource|अक्षय ऊर्जा स्रोत~an inexhaustible energy source|जैव ईंधन~a biofuel
पवन ऊर्जा है—~Wind energy is—|नवीकरणीय संसाधन~a renewable resource|अनवीकरणीय संसाधन~a non-renewable resource|जीवाश्म ईंधन~a fossil fuel|खनिज तेल~a mineral oil
ओज़ोन परत हमें किन हानिकारक किरणों से बचाती है?~The ozone layer protects us from harmful—|पराबैंगनी किरणों~ultraviolet rays|अवरक्त किरणों~infrared rays|रेडियो तरंगों~radio waves|ध्वनि तरंगों~sound waves
ओज़ोन परत का क्षरण मुख्यतः किन रसायनों के कारण होता है?~The ozone layer is depleted mainly by—|क्लोरोफ्लोरोकार्बन (CFC)~chlorofluorocarbons (CFCs)|कार्बन मोनोऑक्साइड~carbon monoxide|ऑक्सीजन~oxygen|नाइट्रोजन~nitrogen
मानवीय गतिविधियों से उत्सर्जित सबसे प्रमुख ग्रीनहाउस गैस है—~The main greenhouse gas emitted by human activities is—|कार्बन डाइऑक्साइड~carbon dioxide|ऑक्सीजन~oxygen|नाइट्रोजन~nitrogen|हीलियम~helium
अम्लीय वर्षा मुख्यतः किन गैसों के कारण होती है?~Acid rain is mainly caused by—|सल्फर डाइऑक्साइड और नाइट्रोजन के ऑक्साइड~sulphur dioxide and oxides of nitrogen|ऑक्सीजन और हाइड्रोजन~oxygen and hydrogen|हीलियम और नियॉन~helium and neon|केवल जलवाष्प~water vapour only
विश्व पर्यावरण दिवस कब मनाया जाता है?~When is World Environment Day observed?|5 जून~5 June|22 अप्रैल~22 April|22 मार्च~22 March|16 सितम्बर~16 September
अन्तर्राष्ट्रीय ओज़ोन दिवस कब मनाया जाता है?~When is International Ozone Day observed?|16 सितम्बर~16 September|5 जून~5 June|22 अप्रैल~22 April|21 मार्च~21 March
विश्व जल दिवस कब मनाया जाता है?~When is World Water Day observed?|22 मार्च~22 March|5 जून~5 June|22 मई~22 May|16 अक्टूबर~16 October
'चिपको आन्दोलन' किस राज्य से आरम्भ हुआ था (आज के राज्य के अनुसार)?~The Chipko Movement began in the present-day state of—|उत्तराखण्ड~Uttarakhand|राजस्थान~Rajasthan|कर्नाटक~Karnataka|केरल~Kerala
भारत में जैव विविधता के हॉटस्पॉट हैं—~Biodiversity hotspots in India include—|हिमालय और पश्चिमी घाट~the Himalaya and the Western Ghats|केवल गंगा का मैदान~only the Ganga plain|केवल थार मरुस्थल~only the Thar desert|केवल तटीय मैदान~only the coastal plains
प्रथम 'बायोस्फीयर रिजर्व' भारत में कहाँ स्थापित हुआ?~Where was India's first biosphere reserve established?|नीलगिरि~Nilgiri|सुन्दरबन~Sundarbans|मन्नार की खाड़ी~Gulf of Mannar|नन्दा देवी~Nanda Devi
जैव-निम्नीकरणीय (बायोडिग्रेडेबल) अपशिष्ट का उदाहरण है—~An example of biodegradable waste is—|सब्जियों के छिलके~vegetable peels|प्लास्टिक थैली~a plastic bag|काँच की बोतल~a glass bottle|एल्युमीनियम कैन~an aluminium can
`)));

/* ---- matter and its states ---- */
D('sci.matter', 'पदार्थ एवं पदार्थ की अवस्थाएँ', 'Matter & its states', cat(
M({ f: '{k} — यह परिवर्तन कहलाता है—~{k} — this change is called—', r: '{v} की प्रक्रिया है—~{v} is the process of—', rows: `
ठोस से द्रव में बदलना~solid to liquid | गलन (पिघलना)~melting
द्रव से गैस में बदलना~liquid to gas | वाष्पन~vaporisation
गैस से द्रव में बदलना~gas to liquid | संघनन~condensation
द्रव से ठोस में बदलना~liquid to solid | जमना (हिमीकरण)~freezing
ठोस से सीधे गैस में बदलना~solid directly to gas | ऊर्ध्वपातन~sublimation
गैस से सीधे ठोस में बदलना~gas directly to solid | निक्षेपण~deposition` }),
M({ f: '{k} का रासायनिक प्रतीक है—~The chemical symbol of {k} is—', r: '{v} किस तत्त्व का प्रतीक है?~{v} is the symbol of which element?', rows: `
सोडियम~Sodium | Na
पोटैशियम~Potassium | K
लोहा~Iron | Fe
ताँबा~Copper | Cu
चाँदी~Silver | Ag
सोना~Gold | Au
पारा~Mercury | Hg
सीसा~Lead | Pb
टिन~Tin | Sn
कैल्शियम~Calcium | Ca
जस्ता~Zinc | Zn
ऐलुमिनियम~Aluminium | Al` }),
M({ f: '{k} का रासायनिक सूत्र है—~The chemical formula of {k} is—', r: '{v} किस यौगिक का सूत्र है?~{v} is the formula of which compound?', rows: `
जल~Water | H₂O
कार्बन डाइऑक्साइड~Carbon dioxide | CO₂
खाने का नमक~Common salt | NaCl
अमोनिया~Ammonia | NH₃
मीथेन~Methane | CH₄
सल्फ्यूरिक अम्ल~Sulphuric acid | H₂SO₄
हाइड्रोक्लोरिक अम्ल~Hydrochloric acid | HCl
बेकिंग सोडा~Baking soda | NaHCO₃
चूना पत्थर~Limestone | CaCO₃` }),
M({ f: '{k} में पाया जाने वाला अम्ल है—~The acid present in {k} is—', r: '{v} किस पदार्थ में पाया जाता है?~In which of the following is {v} found?', rows: `
नींबू~lemon | सिट्रिक अम्ल~citric acid
सिरका~vinegar | ऐसीटिक अम्ल~acetic acid
दही~curd | लैक्टिक अम्ल~lactic acid
चींटी का डंक~ant sting | फॉर्मिक अम्ल~formic acid
इमली~tamarind | टार्टरिक अम्ल~tartaric acid` }),
M({ f: '{k} मिश्रधातु में मिलाए जाते हैं—~{k} is an alloy made of—', rows: `
पीतल~Brass | ताँबा और जस्ता~copper and zinc
काँसा~Bronze | ताँबा और टिन~copper and tin
स्टील~Steel | लोहा और कार्बन~iron and carbon
सोल्डर~Solder | सीसा और टिन~lead and tin` }),
Q(`
जल का क्वथनांक (सामान्य दाब पर) होता है—~The boiling point of water at normal pressure is—|100°C|90°C|110°C|0°C
जल का घनत्व किस ताप पर अधिकतम होता है?~At what temperature is the density of water maximum?|4°C|0°C|10°C|100°C
उदासीन विलयन का pH मान होता है—~The pH of a neutral solution is—|7|0|14|1
अम्ल नीले लिटमस को किस रंग में बदल देते हैं?~Acids turn blue litmus paper—|लाल~red|हरा~green|पीला~yellow|काला~black
पदार्थ की सबसे कम ऊर्जा वाली अवस्था है—~The state of matter with the least energy is—|ठोस~solid|द्रव~liquid|गैस~gas|प्लाज्मा~plasma
`)));

/* ---- science in daily life ---- */
D('sci.daily', 'दैनिक जीवन में विज्ञान', 'Science in daily life', cat(
M({ f: '{k} किसे मापता है/किसके काम आता है?~What does the {k} measure/do?', r: '{v} — इस कार्य के लिए कौन-सा यन्त्र उपयोगी है?~Which instrument is used for: {v}?', rows: `
बैरोमीटर~barometer | वायुदाब मापना~measuring atmospheric pressure
थर्मामीटर~thermometer | तापमान मापना~measuring temperature
ऐमीटर~ammeter | विद्युत धारा मापना~measuring electric current
वोल्टमीटर~voltmeter | विभवान्तर मापना~measuring potential difference
सिस्मोग्राफ~seismograph | भूकम्प तरंगें मापना~recording earthquake waves
स्पीडोमीटर~speedometer | वाहन की चाल बताना~showing the speed of a vehicle
ओडोमीटर~odometer | वाहन द्वारा तय की गई दूरी बताना~showing the distance travelled
लैक्टोमीटर~lactometer | दूध की शुद्धता जाँचना~testing the purity of milk
हाइग्रोमीटर~hygrometer | वायु की आर्द्रता मापना~measuring humidity of air` }),
M({ f: '{k} की खोज/आविष्कार किसने किया?~Who discovered/invented {k}?', r: '{v} ने किसकी खोज/आविष्कार किया?~What did {v} discover/invent?', rows: `
टेलीफोन~the telephone | ग्राहम बेल~Graham Bell
विद्युत बल्ब (व्यावहारिक)~the practical electric bulb | थॉमस एडिसन~Thomas Edison
रेडियम~radium | मैरी क्यूरी~Marie Curie
गुरुत्वाकर्षण का नियम~the law of gravitation | आइज़ैक न्यूटन~Isaac Newton
X-किरणें~X-rays | विल्हेल्म रॉन्टजन~Wilhelm Röntgen
पेनिसिलिन~penicillin | अलेक्जेण्डर फ्लेमिंग~Alexander Fleming
चेचक का टीका~the smallpox vaccine | एडवर्ड जेनर~Edward Jenner
रेडियो (वायरलेस)~wireless radio | मार्कोनी~Marconi
आवर्त सारणी~the periodic table | मेण्डलीफ~Mendeleev
न्यूट्रॉन~the neutron | जेम्स चैडविक~James Chadwick
इलेक्ट्रॉन~the electron | जे० जे० थॉमसन~J. J. Thomson` }),
M({ f: '{k} में ऊर्जा का रूपान्तरण होता है—~The energy conversion in {k} is—', rows: `
बैटरी (सेल)~a battery | रासायनिक से विद्युत~chemical to electrical
सौर सेल~a solar cell | प्रकाश से विद्युत~light to electrical
माइक्रोफोन~a microphone | ध्वनि से विद्युत~sound to electrical
लाउडस्पीकर~a loudspeaker | विद्युत से ध्वनि~electrical to sound
विद्युत हीटर~an electric heater | विद्युत से ऊष्मा~electrical to heat
विद्युत पंखा~an electric fan | विद्युत से यान्त्रिक~electrical to mechanical` }),
Q(`
बर्फ का पिघलना~Melting of ice एक—~Melting of ice is—|भौतिक परिवर्तन~a physical change|रासायनिक परिवर्तन~a chemical change|नाभिकीय अभिक्रिया~a nuclear reaction|कोई परिवर्तन नहीं~no change
दूध से दही जमना~Curdling of milk एक—~Curdling of milk is—|रासायनिक परिवर्तन~a chemical change|भौतिक परिवर्तन~a physical change|नाभिकीय अभिक्रिया~a nuclear reaction|कोई परिवर्तन नहीं~no change
लोहे में जंग लगना~Rusting of iron एक—~Rusting of iron is—|रासायनिक परिवर्तन~a chemical change|भौतिक परिवर्तन~a physical change|नाभिकीय अभिक्रिया~a nuclear reaction|कोई परिवर्तन नहीं~no change
कपूर का उड़ना (ऊर्ध्वपातन)~Sublimation of camphor एक—~Sublimation of camphor is—|भौतिक परिवर्तन~a physical change|रासायनिक परिवर्तन~a chemical change|नाभिकीय अभिक्रिया~a nuclear reaction|कोई परिवर्तन नहीं~no change
लकड़ी का जलना~Burning of wood एक—~Burning of wood is—|रासायनिक परिवर्तन~a chemical change|भौतिक परिवर्तन~a physical change|नाभिकीय अभिक्रिया~a nuclear reaction|कोई परिवर्तन नहीं~no change
पानी का भाप बनना~Evaporation of water एक—~Evaporation of water is—|भौतिक परिवर्तन~a physical change|रासायनिक परिवर्तन~a chemical change|नाभिकीय अभिक्रिया~a nuclear reaction|कोई परिवर्तन नहीं~no change
प्रेशर कुकर में भोजन जल्दी पकने का कारण है—~Food cooks faster in a pressure cooker because—|उच्च दाब पर जल का क्वथनांक बढ़ जाता है~the boiling point of water rises at higher pressure|जल का क्वथनांक घट जाता है~the boiling point of water falls|इसमें अधिक ऑक्सीजन होती है~it has more oxygen|इसमें भाप नहीं बनती~no steam is formed
बर्फ पर नमक छिड़कने से बर्फ पिघलने लगती है क्योंकि—~Sprinkling salt on ice melts it because—|हिमांक घट जाता है~the freezing point is lowered|हिमांक बढ़ जाता है~the freezing point is raised|नमक गर्म होता है~salt is hot|नमक जल में नहीं घुलता~salt does not dissolve
`)));

})(typeof window !== 'undefined' ? window : globalThis);
