/* Teaching skills & child psychology (D.El.Ed. level): bilingual banks. */
(function (g) {
'use strict';
const SUP = g.SUP, M = SUP.mapItems, Q = SUP.mcqItems, P = SUP.P, nf = SUP.nf, numMC = SUP.numMC, cat = (...a) => [].concat(...a);
const T = (id, hi, en, items) => SUP.def(id, 'teaching', hi, en, items);
const Y = (id, hi, en, items) => SUP.def(id, 'psych', hi, en, items);
const R = (hi, en) => P(hi, en), num = (v) => P(nf(v));
const IQ = (r) => { const ca = r.int(8, 15), q = r.pick([80, 90, 100, 110, 120, 130, 140]), ma = ca * q / 100; if (!Number.isInteger(ma)) throw new Error('nonint'); return numMC(r, R(`एक बालक की मानसिक आयु ${ma} वर्ष तथा जीवन आयु ${ca} वर्ष है। उसकी बुद्धि-लब्धि (IQ) कितनी होगी?`, `A child has mental age ${ma} years and chronological age ${ca} years. What is the IQ?`), q, [q + 10, q - 10, q + 20, q - 20, 100], num, { int: true, min: 40 }, { exp: R(`IQ = (MA/CA) × 100 = (${ma}/${ca}) × 100 = ${q}`, `IQ = (MA/CA) × 100 = (${ma}/${ca}) × 100 = ${q}`) }); };

/* ================= TEACHING SKILLS ================= */
T('ts.methods', 'शिक्षण की विधियाँ एवं कौशल', 'Teaching methods & skills', cat(
M({ f: '{k} के प्रतिपादक/सम्बद्ध हैं—~{k} is associated with—', r: '{v} से कौन-सी शिक्षण विधि/योजना सम्बद्ध है?~Which method/plan is associated with {v}?', rows: `
प्रोजेक्ट (योजना) विधि~the Project Method | किलपैट्रिक~W. H. Kilpatrick
डाल्टन योजना~the Dalton Plan | हेलेन पार्कहर्स्ट~Helen Parkhurst
मॉण्टेसरी पद्धति~the Montessori Method | मारिया मॉण्टेसरी~Maria Montessori
किण्डरगार्टन पद्धति~the Kindergarten system | फ्रोबेल~Friedrich Froebel
ह्यूरिस्टिक (अन्वेषण) विधि~the Heuristic Method | एच० ई० आर्मस्ट्रांग~H. E. Armstrong
बुनियादी शिक्षा (वर्धा योजना, 1937)~Basic Education (Wardha Scheme, 1937) | महात्मा गाँधी~Mahatma Gandhi
सूक्ष्म शिक्षण (माइक्रो टीचिंग)~Micro-teaching | एलन एवं ईव (स्टैनफोर्ड)~Allen and Eve (Stanford)
'करके सीखना' का सिद्धान्त~'Learning by doing' | जॉन डीवी~John Dewey` }),
M({ f: '{k} का अर्थ है—~{k} means—', rows: `
आगमन विधि~the Inductive method | विशिष्ट उदाहरणों से सामान्य नियम की ओर~from specific examples to a general rule
निगमन विधि~the Deductive method | सामान्य नियम से विशिष्ट उदाहरणों की ओर~from a general rule to specific examples
शिक्षण सूत्र 'ज्ञात से अज्ञात की ओर'~the maxim 'known to unknown' | पूर्वज्ञान से नए ज्ञान की ओर बढ़ना~moving from prior knowledge to new knowledge
शिक्षण सूत्र 'सरल से जटिल की ओर'~the maxim 'simple to complex' | पहले आसान, फिर कठिन विषयवस्तु पढ़ाना~teaching easy content before difficult content
शिक्षण सूत्र 'मूर्त से अमूर्त की ओर'~the maxim 'concrete to abstract' | पहले वास्तविक वस्तुएँ, फिर विचार समझाना~real objects first, then ideas` }),
Q(`
पाठ प्रस्तावना का मुख्य उद्देश्य है—~The main aim of introducing a lesson is—|पूर्वज्ञान जाँचकर बालकों को नई विषयवस्तु के लिए तैयार करना~to link prior knowledge and prepare children for new content|गृहकार्य देना~to assign homework|श्यामपट्ट भरना~to fill the blackboard|उपस्थिति लेना~to take attendance
सूक्ष्म शिक्षण की अवधि सामान्यतः होती है—~The usual duration of a micro-teaching lesson is—|5 से 10 मिनट~5 to 10 minutes|40 मिनट~40 minutes|1 घण्टा~1 hour|2 घण्टे~2 hours
शिक्षण की सर्वोत्तम विधि वह है जो—~The best teaching method is one that—|बालकों को सक्रिय रूप से भाग लेने का अवसर दे~involves children actively|केवल व्याख्यान दे~is only lecture|केवल रटवाए~promotes rote learning|केवल पुस्तक पढ़वाए~only reads the book
प्रश्न पूछने के कौशल में शिक्षक को चाहिए कि वह—~In questioning skill, the teacher should—|प्रश्न स्पष्ट, सरल और चिन्तन प्रेरक रखे~ask clear, simple, thought-provoking questions|केवल एक बालक से पूछे~ask only one child|उत्तर न सुने~not listen to answers|प्रश्न कठिन रखे~keep questions very hard
पुनर्बलन कौशल का अर्थ है—~Reinforcement skill means—|सही प्रतिक्रिया को प्रोत्साहित/पुरस्कृत करना~encouraging or rewarding correct responses|दण्ड देना~punishing|उपेक्षा करना~ignoring|अंक काटना~deducting marks
श्यामपट्ट का प्रयोग करते समय शिक्षक को—~While using the blackboard, the teacher should—|स्पष्ट, सुपाठ्य लिखना चाहिए और बालकों के दृश्य-क्षेत्र का ध्यान रखना चाहिए~write clearly and keep the class's line of sight in mind|छोटे अक्षरों में लिखना चाहिए~write in tiny letters|लिखते समय बोलना बन्द कर देना चाहिए~stop talking|श्यामपट्ट को ढके रखना चाहिए~keep it covered
शिक्षण एक—~Teaching is a—|अन्तःक्रियात्मक प्रक्रिया~interactive process|एकांगी प्रक्रिया~one-way process|केवल कक्षा तक सीमित प्रक्रिया~process limited to the classroom|यान्त्रिक प्रक्रिया~mechanical process
`)));

T('ts.theories', 'शिक्षण-अधिगम के सिद्धान्त', 'Principles of teaching-learning', cat(
M({ f: '{k} किस सिद्धान्त/अवधारणा के प्रतिपादक हैं?~{k} is associated with which theory/concept?', r: '{v} के प्रतिपादक कौन हैं?~Who propounded {v}?', rows: `
पावलोव~Pavlov | शास्त्रीय अनुबन्धन~classical conditioning
स्किनर~B. F. Skinner | क्रिया-प्रसूत (操作) अनुबन्धन~operant conditioning
थॉर्नडाइक~Thorndike | प्रयास एवं त्रुटि का सिद्धान्त~trial-and-error learning
कोहलर~Köhler | सूझ (अन्तर्दृष्टि) द्वारा सीखना~insight learning
बैण्डुरा~Bandura | सामाजिक अधिगम (अनुकरण)~social learning (observational learning)
पियाजे~Piaget | संज्ञानात्मक विकास का सिद्धान्त~cognitive development theory
वाइगोत्स्की~Vygotsky | निकटतम विकास का क्षेत्र (ZPD)~Zone of Proximal Development
ब्रूनर~Bruner | खोज अधिगम~discovery learning
गार्डनर~Howard Gardner | बहुबुद्धि सिद्धान्त~multiple intelligences
कोलबर्ग~Kohlberg | नैतिक विकास का सिद्धान्त~moral development theory
मैस्लो~Maslow | आवश्यकता पदानुक्रम~hierarchy of needs
एरिक्सन~Erikson | मनोसामाजिक विकास~psychosocial development` }),
Q(`
पियाजे के अनुसार 7 से 11 वर्ष की अवस्था कहलाती है—~According to Piaget, the stage from 7 to 11 years is—|मूर्त संक्रियात्मक अवस्था~concrete operational stage|पूर्व-संक्रियात्मक अवस्था~pre-operational stage|संवेदी-गामक अवस्था~sensorimotor stage|औपचारिक संक्रियात्मक अवस्था~formal operational stage
पियाजे के अनुसार जन्म से 2 वर्ष तक की अवस्था है—~According to Piaget, the stage from birth to 2 years is—|संवेदी-गामक~sensorimotor|पूर्व-संक्रियात्मक~pre-operational|मूर्त संक्रियात्मक~concrete operational|औपचारिक संक्रियात्मक~formal operational
थॉर्नडाइक के सीखने के मुख्य नियम हैं—~Thorndike's primary laws of learning are—|तत्परता, अभ्यास और प्रभाव~readiness, exercise and effect|प्रेरणा, रुचि और ध्यान~motivation, interest and attention|निरीक्षण, परीक्षण और निष्कर्ष~observation, test, conclusion|अनुकरण, अनुबन्धन और सूझ~imitation, conditioning, insight
ब्लूम के संशोधित वर्गीकरण में सर्वोच्च स्तर है—~The highest level in Bloom's revised taxonomy is—|सृजन~creating|याद रखना~remembering|समझना~understanding|लागू करना~applying
गार्डनर के बहुबुद्धि सिद्धान्त में बुद्धियों की मूल संख्या (लोकप्रिय रूप में) है—~The number of intelligences in Gardner's popular list is—|8|5|7|10
मैस्लो के पदानुक्रम में सबसे निचले स्तर की आवश्यकता है—~The lowest level need in Maslow's hierarchy is—|शारीरिक आवश्यकताएँ (भूख, प्यास)~physiological needs|सम्मान~esteem|आत्म-सिद्धि~self-actualisation|सुरक्षा~safety
कोलबर्ग के नैतिक विकास के स्तरों की संख्या है—~The number of levels in Kohlberg's moral development is—|तीन~three|दो~two|चार~four|पाँच~five
सीखने में 'पठार' (Plateau) का अर्थ है—~A 'plateau' in learning means—|सीखने की गति में अस्थायी ठहराव~a temporary halt in the rate of learning|सीखने की तीव्र वृद्धि~a sharp rise in learning|सीखना समाप्त~end of learning|विस्मृति~forgetting
अधिगम स्थानान्तरण का अर्थ है—~Transfer of learning means—|एक परिस्थिति में सीखे ज्ञान का दूसरी परिस्थिति में प्रयोग~using what is learnt in one situation in another|पुस्तकों का स्थानान्तरण~shifting books|शिक्षक का स्थानान्तरण~shifting teachers|विद्यालय बदलना~changing school
`)));

T('ts.society', 'भारतीय समाज एवं प्रारम्भिक शिक्षा', 'Indian society & elementary education', cat(
M({ f: '{k} किस वर्ष आरम्भ/लागू हुआ/हुई?~In which year did {k} begin/come into force?', r: '{v} में क्या आरम्भ/लागू हुआ?~What began/came into force in {v}?', rows: `
शिक्षा का अधिकार अधिनियम (RTE)~the Right to Education Act | 2010
सर्व शिक्षा अभियान~Sarva Shiksha Abhiyan | 2001
ऑपरेशन ब्लैकबोर्ड~Operation Blackboard | 1987
राष्ट्रीय शिक्षा नीति (NEP)~National Education Policy (NEP) | 2020
राष्ट्रीय पाठ्यचर्या की रूपरेखा (NCF)~National Curriculum Framework (NCF) | 2005
मध्याह्न भोजन योजना का आरम्भ~start of the Mid-Day Meal scheme | 1995
समग्र शिक्षा अभियान~Samagra Shiksha | 2018
निपुण भारत मिशन~NIPUN Bharat Mission | 2021
कस्तूरबा गाँधी बालिका विद्यालय योजना~Kasturba Gandhi Balika Vidyalaya scheme | 2004` }),
Q(`
RTE अधिनियम के अन्तर्गत निःशुल्क एवं अनिवार्य शिक्षा किस आयु-वर्ग के बालकों के लिए है?~Under the RTE Act free and compulsory education is for children aged—|6 से 14 वर्ष~6 to 14 years|3 से 6 वर्ष~3 to 6 years|5 से 18 वर्ष~5 to 18 years|14 से 18 वर्ष~14 to 18 years
शिक्षा का अधिकार संविधान के किस अनुच्छेद में सम्मिलित है?~The right to education is included in which Article?|अनुच्छेद 21A~Article 21A|अनुच्छेद 19~Article 19|अनुच्छेद 14~Article 14|अनुच्छेद 32~Article 32
RTE अधिनियम के अनुसार प्राथमिक स्तर पर शिक्षक-छात्र अनुपात है—~As per the RTE Act the pupil-teacher ratio at primary level is—|1 : 30|1 : 40|1 : 50|1 : 20
RTE अधिनियम में निजी विद्यालयों में कमजोर वर्ग के बच्चों के लिए कितने प्रतिशत स्थान आरक्षित हैं?~The RTE Act reserves what percentage of seats in private schools for weaker sections?|25%|10%|15%|50%
RTE अधिनियम के अनुसार बच्चों को दिया जाना निषिद्ध है—~The RTE Act prohibits—|शारीरिक दण्ड एवं मानसिक उत्पीड़न~physical punishment and mental harassment|पुरस्कार~rewards|खेल~games|गृहकार्य~homework
NEP 2020 में विद्यालयी शिक्षा की नई संरचना है—~The school structure proposed in NEP 2020 is—|5 + 3 + 3 + 4|10 + 2|8 + 4|6 + 3 + 3
NEP 2020 के अनुसार कम से कम कक्षा 5 तक शिक्षण का माध्यम होना चाहिए—~As per NEP 2020 the medium of instruction till at least Grade 5 should be—|मातृभाषा/घरेलू भाषा~the mother tongue/home language|केवल अंग्रेजी~English only|केवल संस्कृत~Sanskrit only|विदेशी भाषा~a foreign language
'बिना बोझ के शिक्षा' (Learning without Burden) रिपोर्ट किस समिति की है?~'Learning Without Burden' is the report of which committee?|यशपाल समिति~Yash Pal Committee|कोठारी आयोग~Kothari Commission|मुदालियर आयोग~Mudaliar Commission|राधाकृष्णन आयोग~Radhakrishnan Commission
10+2+3 शिक्षा संरचना की अनुशंसा किसने की?~Which commission recommended the 10+2+3 structure?|कोठारी आयोग (1964-66)~Kothari Commission (1964-66)|मुदालियर आयोग~Mudaliar Commission|हण्टर आयोग~Hunter Commission|सार्जेण्ट योजना~Sargent Plan
'भारत की नियति उसकी कक्षाओं में गढ़ी जा रही है' — यह कथन किस आयोग की रिपोर्ट में है?~"The destiny of India is now being shaped in her classrooms" is from the report of—|कोठारी आयोग~Kothari Commission|मुदालियर आयोग~Mudaliar Commission|राधाकृष्णन आयोग~Radhakrishnan Commission|हण्टर आयोग~Hunter Commission
विद्यालय प्रबन्धन समिति (SMC) में कम से कम कितने प्रतिशत सदस्य बच्चों के अभिभावक होते हैं?~At least what percentage of SMC members are parents/guardians of children?|75%|25%|50%|100%
`)));

T('ts.inclusive', 'समावेशी शिक्षा', 'Inclusive education', cat(
M({ f: '{k} का अर्थ/परिभाषा है—~{k} means—', rows: `
डिस्लेक्सिया~Dyslexia | पढ़ने में कठिनाई~difficulty in reading
डिस्ग्राफिया~Dysgraphia | लिखने में कठिनाई~difficulty in writing
डिस्कैल्कुलिया~Dyscalculia | गणितीय संक्रियाओं में कठिनाई~difficulty with mathematics
समावेशी शिक्षा~Inclusive education | सभी बच्चों को, विशेष आवश्यकता वाले बच्चों सहित, साथ-साथ शिक्षा~educating all children, including those with special needs, together
प्रतिभाशाली बालक~Gifted child | जिसकी बुद्धि-लब्धि 130 से अधिक हो~a child whose IQ is above 130
मन्दबुद्धि बालक~Intellectually disabled child | जिसकी बुद्धि-लब्धि 70 से कम हो~a child whose IQ is below 70` }),
Q(`
'सलमांका घोषणा (1994)' किससे सम्बन्धित है?~The Salamanca Statement (1994) relates to—|समावेशी शिक्षा~inclusive education|प्रौढ़ शिक्षा~adult education|तकनीकी शिक्षा~technical education|उच्च शिक्षा~higher education
भारतीय पुनर्वास परिषद् (RCI) का मुख्य कार्य है—~The main function of the Rehabilitation Council of India is—|विशेष शिक्षकों/पुनर्वास पेशेवरों के प्रशिक्षण का नियमन~regulating training of special educators and rehabilitation professionals|खेल आयोजित करना~organising sports|पुस्तकें छापना~publishing books|सड़कें बनाना~building roads
RPwD अधिनियम 2016 में मान्य दिव्यांगताओं की संख्या है—~The number of disabilities recognised under the RPwD Act 2016 is—|21|7|14|10
ब्रेल लिपि के जनक कौन हैं?~Who invented the Braille script?|लुई ब्रेल~Louis Braille|हेलेन केलर~Helen Keller|ग्राहम बेल~Graham Bell|मारिया मॉण्टेसरी~Maria Montessori
समावेशी कक्षा में शिक्षक को चाहिए कि वह—~In an inclusive classroom the teacher should—|प्रत्येक बालक की आवश्यकता के अनुसार शिक्षण विधि बदले~adapt teaching to each child's needs|विशेष बच्चों को अलग बैठाए~seat special children separately|उन्हें कक्षा से बाहर रखे~keep them out of class|सबके लिए एक ही गति रखे~use one pace for all
दृष्टिबाधित बालकों के लिए सर्वाधिक उपयुक्त शिक्षण सामग्री है—~The most suitable material for visually impaired children is—|ब्रेल पुस्तकें और श्रव्य सामग्री~Braille books and audio material|रंगीन चित्र~coloured pictures|वीडियो~videos|श्यामपट्ट पर लिखी सामग्री~blackboard writing
श्रवण बाधित बालकों की शिक्षा में सहायक है—~Which helps in educating hearing-impaired children?|सांकेतिक भाषा और श्रवण यन्त्र~sign language and hearing aids|केवल ऑडियो कैसेट~audio cassettes only|रेडियो~radio|संगीत~music
'पढ़ने-लिखने की विशिष्ट अधिगम अक्षमता' को कहते हैं—~A specific learning disability in reading and writing is—|डिस्लेक्सिया~dyslexia|ऑटिज्म~autism|मिर्गी~epilepsy|अस्थमा~asthma
समावेशी शिक्षा का मूल सिद्धान्त है—~The basic principle of inclusive education is—|सभी बच्चों को समान अवसर~equal opportunity for all children|केवल मेधावी बच्चों को अवसर~opportunity only for bright children|विशेष विद्यालय अनिवार्य~special schools compulsory|अलगाव~segregation
`)));

T('ts.initiatives', 'प्रारम्भिक शिक्षा के नवीन प्रयास', 'New initiatives in elementary education', cat(
M({ f: '{k} का उद्देश्य है—~The aim of {k} is—', r: '{v} किस योजना/कार्यक्रम का उद्देश्य है?~{v} is the aim of which scheme/programme?', rows: `
मध्याह्न भोजन (पीएम पोषण)~Mid-Day Meal (PM POSHAN) | नामांकन, उपस्थिति एवं बच्चों के पोषण में वृद्धि~improving enrolment, attendance and nutrition
सर्व शिक्षा अभियान~Sarva Shiksha Abhiyan | प्रारम्भिक शिक्षा का सार्वभौमीकरण~universalisation of elementary education
निपुण भारत मिशन~NIPUN Bharat Mission | कक्षा 3 तक बुनियादी साक्षरता एवं संख्या-ज्ञान~foundational literacy and numeracy by Grade 3
कस्तूरबा गाँधी बालिका विद्यालय~Kasturba Gandhi Balika Vidyalaya | वंचित वर्ग की बालिकाओं को आवासीय शिक्षा~residential schooling for girls from disadvantaged groups
दीक्षा (DIKSHA) पोर्टल~the DIKSHA portal | विद्यार्थियों-शिक्षकों को डिजिटल शिक्षण सामग्री~digital learning content for students and teachers
बेटी बचाओ बेटी पढ़ाओ~Beti Bachao Beti Padhao | बालिकाओं की सुरक्षा एवं शिक्षा~protection and education of the girl child
पढ़ें भारत बढ़ें भारत~Padhe Bharat Badhe Bharat | प्रारम्भिक कक्षाओं में पठन, लेखन एवं गणित कौशल~early reading, writing and arithmetic skills` }),
Q(`
'शाला सिद्धि' कार्यक्रम का उद्देश्य है—~The aim of the 'Shala Siddhi' programme is—|विद्यालय का स्व-मूल्यांकन एवं सुधार~school self-evaluation and improvement|शिक्षकों की भर्ती~recruiting teachers|मध्याह्न भोजन बाँटना~distributing mid-day meals|पुस्तकें छापना~printing books
मध्याह्न भोजन योजना का आरम्भ भारत में किस वर्ष हुआ?~In which year was the Mid-Day Meal scheme started in India?|1995|1985|2001|2009
स्वयं (SWAYAM) मंच किससे सम्बन्धित है?~SWAYAM is a platform for—|ऑनलाइन (मूक) पाठ्यक्रम~online (MOOC) courses|खेल प्रतियोगिता~sports|रोजगार मेला~job fairs|बैंकिंग~banking
'दीक्षा' पोर्टल पर पाठ्यपुस्तकों में दिए QR कोड का उपयोग किसलिए होता है?~Why are QR codes in textbooks scanned on DIKSHA?|संबंधित डिजिटल सामग्री तक पहुँचने के लिए~to access related digital content|पुस्तक खरीदने के लिए~to buy the book|उपस्थिति के लिए~for attendance|परीक्षा शुल्क के लिए~for exam fees
पीएम श्री (PM SHRI) विद्यालयों का उद्देश्य है—~PM SHRI schools aim to be—|NEP 2020 को लागू करने वाले आदर्श विद्यालय~model schools implementing NEP 2020|केवल निजी विद्यालय~only private schools|केवल सैन्य विद्यालय~only military schools|केवल आवासीय विद्यालय~only residential schools
'विद्यांजलि' कार्यक्रम किससे सम्बन्धित है?~The 'Vidyanjali' programme relates to—|विद्यालयों में स्वयंसेवकों/समुदाय की भागीदारी~volunteer and community participation in schools|बैंकिंग~banking|खेती~agriculture|परिवहन~transport
`)));

T('ts.assess', 'शैक्षिक मूल्यांकन एवं मापन', 'Educational assessment & measurement', cat(
  [IQ, IQ, IQ, IQ],
M({ f: '{k} का अर्थ है—~{k} means—', rows: `
रचनात्मक (निर्माणात्मक) मूल्यांकन~Formative assessment | शिक्षण के दौरान चलने वाला मूल्यांकन~assessment carried out during teaching
योगात्मक मूल्यांकन~Summative assessment | सत्र/इकाई के अन्त में किया जाने वाला मूल्यांकन~assessment at the end of a term/unit
निदानात्मक मूल्यांकन~Diagnostic assessment | सीखने की कठिनाइयों/कमियों की पहचान~identifying learning difficulties
परीक्षण की वैधता~Validity of a test | परीक्षण वही मापे जो उसे मापना चाहिए~a test measures what it is meant to measure
परीक्षण की विश्वसनीयता~Reliability of a test | बार-बार लेने पर समान परिणाम देना~giving consistent results on repeated use
सतत एवं व्यापक मूल्यांकन (CCE)~Continuous and Comprehensive Evaluation | बालक के सभी पक्षों का निरन्तर मूल्यांकन~continuous evaluation of all aspects of the child` }),
Q(`
मापन के चार स्तरों का सही क्रम (निम्न से उच्च) है—~The correct order of the four levels of measurement, lowest to highest, is—|नामित, क्रमित, अन्तरित, अनुपाती~nominal, ordinal, interval, ratio|अनुपाती, अन्तरित, क्रमित, नामित~ratio, interval, ordinal, nominal|क्रमित, नामित, अनुपाती, अन्तरित~ordinal, nominal, ratio, interval|अन्तरित, नामित, अनुपाती, क्रमित~interval, nominal, ratio, ordinal
'पोर्टफोलियो' मूल्यांकन में क्या होता है?~A portfolio in assessment contains—|बालक के कार्यों का संग्रह~a collection of the child's work|केवल परीक्षा-उत्तर~only exam answers|केवल उपस्थिति~only attendance|केवल फीस रसीद~only fee receipts
बुद्धि-लब्धि का सूत्र है—~The formula for IQ is—|(मानसिक आयु / जीवन आयु) × 100~(mental age / chronological age) × 100|(जीवन आयु / मानसिक आयु) × 100~(chronological age / mental age) × 100|मानसिक आयु × जीवन आयु~mental age × chronological age|मानसिक आयु − जीवन आयु~mental age − chronological age
मापन का सर्वश्रेष्ठ गुण जिसके बिना परीक्षण बेकार है—~The most essential quality of a test is—|वैधता~validity|लम्बाई~length|सुन्दरता~appearance|कठिनाई~difficulty
वस्तुनिष्ठ परीक्षण की विशेषता है—~A feature of an objective test is—|अंकन में परीक्षक का व्यक्तिगत प्रभाव नहीं पड़ता~scoring is free of examiner bias|अंकन परीक्षक की इच्छा पर~scoring depends on the examiner's wish|केवल निबन्धात्मक प्रश्न~only essay questions|कोई सही उत्तर नहीं~no correct answer
रूब्रिक (Rubric) का उपयोग किसलिए होता है?~What is a rubric used for?|मूल्यांकन के मानदण्ड स्पष्ट करने हेतु~to clarify assessment criteria|उपस्थिति लेने हेतु~to take attendance|पुस्तक छापने हेतु~to print books|भवन निर्माण हेतु~for construction
'माध्य, माध्यिका और बहुलक' किसके माप हैं?~Mean, median and mode are measures of—|केन्द्रीय प्रवृत्ति~central tendency|विचलन~dispersion|सह-सम्बन्ध~correlation|प्रतिशत~percentage
`)));

T('ts.reading', 'आरम्भिक पठन कौशल', 'Early reading skills', cat(
M({ f: '{k} का आशय है—~{k} refers to—', rows: `
ध्वन्यात्मक जागरूकता~Phonological/phonemic awareness | शब्दों में ध्वनियों को पहचानने और जोड़ने-तोड़ने की क्षमता~ability to hear, identify and manipulate sounds in words
डिकोडिंग~Decoding | अक्षर-ध्वनि सम्बन्ध द्वारा लिखित शब्द को पढ़ना~reading written words using letter-sound links
धाराप्रवाह पठन~Reading fluency | सही गति, शुद्धता और उचित भाव के साथ पढ़ना~reading with speed, accuracy and expression
बोध (Comprehension)~Comprehension | पढ़े हुए का अर्थ समझना~understanding what is read
शब्द भण्डार~Vocabulary | बालक द्वारा समझे/प्रयुक्त शब्दों का समूह~the set of words a child understands and uses
बड़ी पुस्तकें (Big books)~Big books | कक्षा में सामूहिक पठन हेतु बड़े आकार की चित्रयुक्त पुस्तकें~large illustrated books for shared reading` }),
Q(`
भाषा शिक्षण में कौशलों का स्वाभाविक क्रम है—~The natural order of language skills is—|सुनना, बोलना, पढ़ना, लिखना~listening, speaking, reading, writing|लिखना, पढ़ना, बोलना, सुनना~writing, reading, speaking, listening|पढ़ना, लिखना, सुनना, बोलना~reading, writing, listening, speaking|बोलना, लिखना, सुनना, पढ़ना~speaking, writing, listening, reading
प्रारम्भिक कक्षाओं में पढ़ना सिखाने की सबसे पहले आवश्यकता है—~The first requirement for teaching reading in early grades is—|मौखिक भाषा-विकास (सुनना-बोलना)~oral language development|व्याकरण के नियम~grammar rules|निबन्ध लेखन~essay writing|वर्तनी रटवाना~memorising spellings
'वाक्य विधि' में बालक को पहले क्या सिखाया जाता है?~In the 'sentence method', what is taught first?|पूरा वाक्य~the complete sentence|केवल अक्षर~only letters|केवल स्वर~only vowels|केवल व्यंजन~only consonants
फोनिक्स (Phonics) विधि किस पर आधारित है?~Phonics is based on—|अक्षर और उनकी ध्वनियों के सम्बन्ध पर~the relation between letters and their sounds|पूरे वाक्य के रटने पर~memorising whole sentences|चित्र देखकर अनुमान पर~guessing from pictures|लिखने के अभ्यास पर~writing practice only
बच्चों में पठन-रुचि जगाने के लिए सबसे उपयुक्त है—~The best way to build reading interest in children is—|कक्षा में पुस्तकालय/पठन कोना और कहानी-सत्र~a class library/reading corner and story sessions|केवल परीक्षा~exams only|दण्ड~punishment|रटाना~rote memorisation
पठन-बोध में सहायक प्रश्न हैं—~Questions that help reading comprehension are—|कहानी में आगे क्या होगा? क्यों हुआ?~What happens next? Why did it happen?|केवल तिथियाँ बताओ~only give dates|केवल रटी पंक्ति सुनाओ~only recite lines|कोई नहीं~none
`)));

T('ts.admin', 'शैक्षिक प्रबन्धन एवं प्रशासन', 'Educational management & administration', Q(`
विद्यालय के प्रशासन का प्रमुख कौन होता है?~Who heads a school's administration?|प्रधानाध्यापक~the Headmaster/Head Teacher|खण्ड शिक्षा अधिकारी~the Block Education Officer|जिलाधिकारी~the District Magistrate|पर्यवेक्षक~the supervisor
समय-सारणी बनाते समय ध्यान रखना चाहिए—~While preparing a timetable one should ensure—|कठिन विषय प्रारम्भिक कालांशों में और विषयों का सन्तुलन~difficult subjects in early periods and a balance of subjects|केवल एक विषय~only one subject|कोई खेल नहीं~no games|कोई अन्तराल नहीं~no break
विद्यालय प्रबन्धन समिति (SMC) का गठन किस अधिनियम के अन्तर्गत अनिवार्य है?~The SMC is mandatory under which Act?|शिक्षा का अधिकार अधिनियम~the RTE Act|मोटर वाहन अधिनियम~the Motor Vehicles Act|सूचना का अधिकार अधिनियम~the RTI Act|कारखाना अधिनियम~the Factories Act
प्रजातान्त्रिक नेतृत्व शैली में प्रधानाध्यापक—~In a democratic leadership style the head teacher—|सबकी सहभागिता से निर्णय लेता है~takes decisions with everyone's participation|अकेले निर्णय लेता है~decides alone|कोई निर्णय नहीं लेता~decides nothing|केवल आदेश देता है~only issues orders
विद्यालय में अभिलेखों (रजिस्टरों) का रख-रखाव क्यों आवश्यक है?~Why is maintaining school records necessary?|पारदर्शिता, जवाबदेही और योजना के लिए~for transparency, accountability and planning|केवल दिखावे के लिए~only for show|समय नष्ट करने के लिए~to waste time|कोई आवश्यकता नहीं~no need
शिक्षक-अभिभावक बैठक (PTM) का मुख्य उद्देश्य है—~The main purpose of a Parent-Teacher Meeting is—|बच्चे की प्रगति पर चर्चा एवं सहयोग~discussing the child's progress and cooperation|शिकायतें दर्ज करना~only lodging complaints|फीस वसूलना~collecting fees|अभिभावकों को डाँटना~scolding parents
शैक्षिक पर्यवेक्षण का उद्देश्य है—~The aim of educational supervision is—|शिक्षण की गुणवत्ता में रचनात्मक सुधार~constructive improvement in teaching quality|केवल दोष निकालना~only finding faults|शिक्षकों को दण्ड देना~punishing teachers|विद्यालय बन्द करना~closing schools
पाठ योजना (Lesson plan) बनाने से—~Preparing a lesson plan—|शिक्षण व्यवस्थित एवं उद्देश्यपूर्ण होता है~makes teaching organised and purposeful|समय नष्ट होता है~wastes time|बालक भ्रमित होते हैं~confuses students|कोई लाभ नहीं~has no benefit
कक्षा-कक्ष प्रबन्धन का सर्वोत्तम तरीका है—~The best way to manage a classroom is—|सकारात्मक अनुशासन और नियमों का सामूहिक निर्धारण~positive discipline with rules set together|कठोर दण्ड~harsh punishment|कक्षा को अनदेखा करना~ignoring the class|केवल डाँटना~only scolding
विद्यालय विकास योजना (SDP) कौन बनाता है?~Who prepares the School Development Plan?|प्रधानाध्यापक, शिक्षक एवं SMC मिलकर~the head teacher, teachers and SMC together|केवल जिलाधिकारी~only the District Magistrate|केवल विद्यार्थी~only students|केवल ठेकेदार~only contractors
`));

/* ================= CHILD PSYCHOLOGY ================= */
Y('psy.indiv', 'वैयक्तिक भिन्नता', 'Individual differences', cat(
  [IQ, IQ, IQ],
M({ f: '{k} किसके लिए प्रसिद्ध है/के प्रतिपादक हैं?~{k} is known for—', r: '{v} के प्रतिपादक/निर्माता कौन हैं?~Who is the propounder/creator of {v}?', rows: `
बुद्धि परीक्षण (1905)~the first intelligence test (1905) | बिने और साइमन~Binet and Simon
स्टैनफोर्ड-बिने परीक्षण~the Stanford-Binet test | टरमैन~Terman
मनोविश्लेषण सिद्धान्त (इड, ईगो, सुपर-ईगो)~psychoanalytic theory (id, ego, super-ego) | फ्रायड~Freud
अन्तर्मुखी-बहिर्मुखी व्यक्तित्व~introvert-extrovert personality | कार्ल युंग~Carl Jung
रोर्शा स्याही-धब्बा परीक्षण~the Rorschach inkblot test | हरमन रोर्शा~Hermann Rorschach
16 व्यक्तित्व कारक (16 PF)~16 Personality Factors | रेमण्ड कैटल~Raymond Cattell
'हेरेडिटरी जीनियस' पुस्तक~the book 'Hereditary Genius' | फ्रांसिस गाल्टन~Francis Galton` }),
Q(`
वैयक्तिक भिन्नताओं का मुख्य कारण है—~The main causes of individual differences are—|वंशानुक्रम और वातावरण~heredity and environment|केवल वातावरण~only environment|केवल वंशानुक्रम~only heredity|भाग्य~fate
वैयक्तिक भिन्नता को ध्यान में रखकर शिक्षक को चाहिए कि वह—~Keeping individual differences in mind, the teacher should—|विभिन्न विधियों एवं गतियों से शिक्षण करे~use varied methods and paces|सबके लिए एक ही विधि अपनाए~use one method for all|तेज बालकों की उपेक्षा करे~ignore bright children|पिछड़े बालकों को दण्ड दे~punish weak children
सामान्य बुद्धि-लब्धि का परास (लगभग) है—~The approximate range of normal IQ is—|90 से 110~90 to 110|50 से 70~50 to 70|130 से 150~130 to 150|110 से 130~110 to 130
जुड़वाँ बच्चों का अध्ययन किसकी सापेक्ष भूमिका जानने के लिए किया जाता है?~Twin studies are used to study the relative role of—|वंशानुक्रम एवं वातावरण~heredity and environment|शिक्षक एवं विद्यालय~teacher and school|भोजन एवं जल~food and water|खेल एवं संगीत~games and music
टी० ए० टी० (TAT) किस प्रकार का परीक्षण है?~TAT is a—|प्रक्षेपी परीक्षण~projective test|शारीरिक परीक्षण~physical test|उपलब्धि परीक्षण~achievement test|श्रवण परीक्षण~hearing test
रेवन का प्रोग्रेसिव मैट्रिसेज़ परीक्षण किस प्रकार का बुद्धि परीक्षण है?~Raven's Progressive Matrices is a—|अशाब्दिक~non-verbal test|शाब्दिक~verbal test|श्रवण~auditory test|क्रियात्मक शारीरिक~physical performance test
`)));

Y('psy.dev', 'बाल विकास को प्रभावित करने वाले कारक', 'Factors affecting child development', cat(
M({ f: '{k} अवस्था की आयु-सीमा (लगभग) है—~The approximate age range of {k} is—', r: '{v} आयु-वर्ग किस अवस्था का है?~Which stage has the age range {v}?', rows: `
शैशवावस्था~infancy | जन्म से 5-6 वर्ष~birth to 5-6 years
बाल्यावस्था~childhood | 6 से 12 वर्ष~6 to 12 years
किशोरावस्था~adolescence | 12 से 18 वर्ष~12 to 18 years` }),
Q(`
विकास का 'मस्तकाधोमुखी' सिद्धान्त बताता है कि विकास—~The cephalocaudal principle states that development proceeds—|सिर से पैरों की ओर होता है~from head to foot|पैरों से सिर की ओर~from foot to head|यादृच्छिक~randomly|केवल हाथों से~from the hands only
'निकट-दूर' (Proximodistal) सिद्धान्त का अर्थ है—~The proximodistal principle means development proceeds—|शरीर के केन्द्र से बाह्य अंगों की ओर~from the centre of the body outward|बाहर से केन्द्र की ओर~from the outside inward|सिर से पैर~from head to toe|कोई क्रम नहीं~in no order
किशोरावस्था को 'तूफान एवं तनाव की अवस्था' किसने कहा?~Who called adolescence a period of 'storm and stress'?|स्टेनली हॉल~Stanley Hall|पियाजे~Piaget|फ्रायड~Freud|स्किनर~Skinner
'वृद्धि' और 'विकास' में अन्तर है—~The difference between growth and development is—|वृद्धि मात्रात्मक और विकास गुणात्मक-मात्रात्मक दोनों~growth is quantitative while development is both qualitative and quantitative|वृद्धि गुणात्मक~growth is qualitative|दोनों समान हैं~both are the same|विकास केवल शरीर का~development is only bodily
बाल-विकास को प्रभावित करने वाला कारक है—~Which factor affects child development?|पोषण, परिवार, विद्यालय और वंशानुक्रम~nutrition, family, school and heredity|केवल विद्यालय~only school|केवल भाग्य~only luck|कोई नहीं~none
अन्तःस्रावी तन्त्र की 'मास्टर ग्रन्थि' कहलाती है—~The 'master gland' of the endocrine system is—|पीयूष (पिट्यूटरी)~pituitary|थायरॉइड~thyroid|अधिवृक्क~adrenal|अग्न्याशय~pancreas
एरिक्सन के अनुसार शैशवावस्था (0-1 वर्ष) का मनोसामाजिक संकट है—~According to Erikson, the psychosocial crisis of infancy is—|विश्वास बनाम अविश्वास~trust vs mistrust|पहल बनाम अपराध-बोध~initiative vs guilt|उद्यमिता बनाम हीनता~industry vs inferiority|पहचान बनाम भ्रान्ति~identity vs role confusion
बाल्यावस्था को 'टोली (गैंग) की आयु' क्यों कहा जाता है?~Why is childhood called the 'gang age'?|साथियों के समूह में रहने की प्रवृत्ति~the tendency to belong to peer groups|झगड़े की प्रवृत्ति~tendency to fight|अकेले रहने की प्रवृत्ति~tendency to be alone|पढ़ाई से दूरी~aversion to study
गर्भावस्था में माता का पोषण बच्चे के विकास को—~A mother's nutrition during pregnancy affects the child's development—|प्रभावित करता है~significantly|प्रभावित नहीं करता~not at all|केवल बाद में~only later|केवल खेल में~only in games
परिपक्वता (Maturation) का अर्थ है—~Maturation means—|आन्तरिक जैविक विकास जो अनुभव पर कम निर्भर है~internal biological unfolding largely independent of experience|सीखने का अभ्यास~practice of learning|बुद्धि परीक्षण~intelligence testing|शिक्षा~education
`)));

Y('psy.needs', 'सीखने की आवश्यकता की पहचान', 'Identifying learning needs', Q(`
बच्चों की सीखने की कठिनाइयों की पहचान का सर्वोत्तम साधन है—~The best means of identifying learning difficulties is—|निदानात्मक परीक्षण और सतत अवलोकन~diagnostic tests and continuous observation|केवल वार्षिक परीक्षा~only the annual exam|केवल अंक~only marks|अनुमान~guessing
प्रतिभाशाली बालकों के लिए उपयुक्त शैक्षिक व्यवस्था है—~The suitable provision for gifted children is—|संवर्धन एवं त्वरण कार्यक्रम~enrichment and acceleration programmes|उपेक्षा~neglect|दण्ड~punishment|अलगाव~isolation
पिछड़े बालकों की बुद्धि-लब्धि सामान्यतः होती है—~The IQ of backward children is generally—|70 से 90~70 to 90|110 से 120~110 to 120|130 से अधिक~above 130|50 से कम~below 50
सृजनात्मक बालकों की विशेषता है—~A characteristic of creative children is—|मौलिक एवं भिन्न ढंग से सोचना~thinking in original, divergent ways|केवल रटना~rote memorising|अनुकरण~mere imitation|भय~fear
समस्यात्मक बालक के व्यवहार सुधार हेतु शिक्षक को—~To improve a problem child's behaviour the teacher should—|कारण खोजकर सहानुभूतिपूर्वक मार्गदर्शन देना चाहिए~find the cause and guide sympathetically|कठोर दण्ड देना चाहिए~give harsh punishment|कक्षा से निकाल देना चाहिए~expel from class|उपेक्षा करनी चाहिए~ignore
बाल न्याय (JJ) अधिनियम में 'बालक' किसे माना गया है?~Under the Juvenile Justice Act, who is a 'child'?|18 वर्ष से कम आयु का व्यक्ति~a person below 18 years|14 वर्ष से कम~below 14 years|21 वर्ष से कम~below 21 years|16 वर्ष से कम~below 16 years
सीखने की आवश्यकता पहचानने में अभिभावकों से वार्ता—~Talking with parents in identifying learning needs is—|बच्चे की पृष्ठभूमि समझने में सहायक है~helpful in understanding the child's background|अनावश्यक है~unnecessary|हानिकारक है~harmful|प्रतिबन्धित है~prohibited
कक्षा में कोई बच्चा बार-बार अक्षर उलटकर लिखता है, तो शिक्षक को—~If a child repeatedly reverses letters, the teacher should—|सम्भावित अधिगम कठिनाई की जाँच कर उचित सहायता देनी चाहिए~check for a learning difficulty and give appropriate support|उसे दण्ड देना चाहिए~punish him|उसे कक्षा से निकाल देना चाहिए~send him out|उपेक्षा करनी चाहिए~ignore
विशेष आवश्यकता वाले बच्चे (CWSN) कहलाते हैं—~Children with Special Needs (CWSN) are—|जिन्हें सीखने में अतिरिक्त सहयोग/अनुकूलन चाहिए~children who need extra support or adaptation to learn|केवल दृष्टिहीन~only blind children|केवल मेधावी~only bright children|केवल शरारती~only naughty children
सीखने की गति धीमी होने पर बालक को—~If a child learns slowly, he should be—|अतिरिक्त अभ्यास और प्रोत्साहन मिलना चाहिए~given extra practice and encouragement|पीछे बैठाना चाहिए~seated at the back|डाँटना चाहिए~scolded|अनुत्तीर्ण घोषित करना चाहिए~declared failed
बच्चे के पूर्वज्ञान का पता लगाना क्यों आवश्यक है?~Why is it necessary to find out the child's prior knowledge?|आगे की शिक्षण योजना उसी पर आधारित होती है~further teaching is planned on it|समय काटने के लिए~to pass time|अंक देने के लिए~to give marks|कोई कारण नहीं~no reason
`));

Y('psy.env', 'सीखने के लिए वातावरण का सृजन', 'Creating an environment for learning', Q(`
कक्षा का सर्वोत्तम वातावरण वह है जो—~The best classroom environment is one that is—|भयमुक्त, सहयोगी और प्रोत्साहक हो~fear-free, cooperative and encouraging|डर पर आधारित हो~based on fear|शान्त परन्तु दमनकारी हो~silent but oppressive|प्रतिस्पर्धा से भरा हो~full of harsh competition
बच्चों को सीखने के लिए प्रेरित करने का सर्वोत्तम तरीका है—~The best way to motivate children to learn is—|रुचि एवं सफलता के अनुभव देना~providing interest and experiences of success|केवल दण्ड~punishment only|केवल परीक्षा~exams only|तुलना~comparing them with others
भाषा शिक्षण हेतु कक्षा में 'पठन कोना' बनाने का उद्देश्य है—~The aim of a 'reading corner' is—|पढ़ने की आदत और रुचि विकसित करना~to develop reading habit and interest|सजावट~decoration|भण्डारण~storage|दण्ड स्थल~a punishment place
समूह कार्य (Group work) का लाभ है—~A benefit of group work is—|सहयोग, संवाद एवं सहपाठी-अधिगम~cooperation, communication and peer learning|केवल शोर~only noise|प्रतिस्पर्धा~only competition|अलगाव~isolation
कक्षा में बैठक व्यवस्था ऐसी होनी चाहिए कि—~The seating arrangement should be such that—|सभी बच्चे शिक्षक और सामग्री देख सकें एवं आपस में संवाद कर सकें~all children can see the teacher and materials and interact|कुछ बच्चे पीछे छिपे रहें~some hide at the back|सब अलग-थलग रहें~everyone is isolated|केवल पंक्ति में रहें~rows only
बालक-केन्द्रित शिक्षा में मुख्य स्थान किसे दिया जाता है?~In child-centred education the central place is given to—|बालक की रुचि, आवश्यकता एवं अनुभव को~the child's interests, needs and experiences|पाठ्यपुस्तक को~the textbook|परीक्षा को~the exam|शिक्षक के आदेश को~the teacher's orders
शिक्षण में श्रव्य-दृश्य सामग्री का उपयोग—~Using audio-visual aids in teaching—|अधिगम को रोचक एवं स्थायी बनाता है~makes learning interesting and lasting|समय नष्ट करता है~wastes time|अनावश्यक है~is unnecessary|बाधा है~is an obstacle
बच्चों की गलतियों पर शिक्षक की प्रतिक्रिया कैसी होनी चाहिए?~How should a teacher react to children's mistakes?|गलतियों को सीखने के अवसर के रूप में लेकर सहायता करनी चाहिए~treat them as learning opportunities and help|उपहास करना चाहिए~ridicule|कठोर दण्ड देना चाहिए~punish harshly|सबके सामने डाँटना चाहिए~scold in public
सीखने के लिए भौतिक वातावरण में क्या आवश्यक है?~What is essential in the physical environment for learning?|पर्याप्त प्रकाश, हवा और स्वच्छता~adequate light, ventilation and cleanliness|केवल रंगीन दीवारें~only coloured walls|कोई नहीं~nothing|केवल फर्नीचर~only furniture
`));

Y('psy.theories', 'सीखने के सिद्धान्त एवं उनका कक्षा में उपयोग', 'Learning theories & classroom use', Q(`
शिक्षक द्वारा अच्छे कार्य पर प्रशंसा करना किस सिद्धान्त का प्रयोग है?~A teacher praising good work applies the principle of—|पुनर्बलन (स्किनर)~reinforcement (Skinner)|अनुकरण~imitation|सूझ~insight|पठार~plateau
बच्चों द्वारा शिक्षक के व्यवहार की नकल करना किस सिद्धान्त पर आधारित है?~Children copying a teacher's behaviour is based on—|सामाजिक अधिगम (बैण्डुरा)~social learning (Bandura)|शास्त्रीय अनुबन्धन~classical conditioning|प्रयास-त्रुटि~trial and error|परिपक्वता~maturation
घण्टी बजते ही बच्चों में लार/भूख का सम्बन्ध किस सिद्धान्त का उदाहरण है?~Associating a bell with food, as in Pavlov's dog, is an example of—|शास्त्रीय अनुबन्धन~classical conditioning|क्रिया-प्रसूत अनुबन्धन~operant conditioning|सूझ~insight|अनुकरण~imitation
समस्या को अचानक समझ लेना 'अहा अनुभव' किस सिद्धान्त से सम्बद्ध है?~The sudden 'aha' understanding of a problem is linked to—|सूझ का सिद्धान्त~insight learning|अनुबन्धन~conditioning|अनुकरण~imitation|प्रयास-त्रुटि~trial and error
'अभ्यास का नियम' कहता है कि—~The 'law of exercise' says that—|अभ्यास से सीखना दृढ़ होता है~practice strengthens learning|अभ्यास से हानि होती है~practice harms learning|अभ्यास व्यर्थ है~practice is useless|केवल रटना उचित है~only rote is right
किसी परिस्थिति में सीखा गया ज्ञान दूसरी में सहायक हो, तो यह—~If learning in one situation helps in another, it is—|धनात्मक अधिगम स्थानान्तरण~positive transfer of learning|ऋणात्मक स्थानान्तरण~negative transfer|शून्य स्थानान्तरण~zero transfer|विस्मृति~forgetting
सीखने में 'तत्परता' का अर्थ है—~'Readiness' in learning means—|सीखने के लिए शारीरिक-मानसिक रूप से तैयार होना~being physically and mentally prepared to learn|आराम करना~resting|खेलना~playing|सो जाना~sleeping
वाइगोत्स्की के अनुसार बच्चे अधिक सीखते हैं—~According to Vygotsky children learn more through—|सामाजिक अन्तःक्रिया और सहयोग से~social interaction and collaboration|अकेले रटकर~rote learning alone|दण्ड से~punishment|भय से~fear
रचनावादी (Constructivist) उपागम में बच्चा—~In the constructivist approach the child—|स्वयं अनुभवों से ज्ञान का निर्माण करता है~constructs knowledge from experience|केवल सुनता है~only listens|केवल नकल करता है~only copies|निष्क्रिय रहता है~stays passive
'करके सीखना' कक्षा में किस प्रकार सहायक है?~How does 'learning by doing' help?|सक्रिय सहभागिता से अधिगम स्थायी होता है~active involvement makes learning lasting|कक्षा शान्त रहती है~keeps the class silent|समय बचता है~saves time|परीक्षा सरल होती है~makes exams easy
`));

Y('psy.divyang', 'दिव्यांग छात्रों हेतु विशेष व्यवस्था', 'Special provisions for children with disabilities', cat(
M({ f: '{k} है—~{k} is—', rows: `
RPwD अधिनियम 2016 में मान्य दिव्यांगताओं की संख्या~The number of disabilities recognised in the RPwD Act 2016 | 21
सरकारी नौकरियों में दिव्यांगों के लिए आरक्षण (RPwD 2016)~Reservation for persons with benchmark disabilities in government jobs (RPwD 2016) | 4%
अन्तर्राष्ट्रीय दिव्यांगजन दिवस~International Day of Persons with Disabilities | 3 दिसम्बर~3 December
'सुगम्य भारत अभियान' का आरम्भ~Launch of the 'Accessible India Campaign' | 2015
'दिव्यांग' शब्द के प्रयोग की पहल~The initiative to use the word 'Divyang' | 2015` }),
Q(`
दिव्यांग बच्चों के लिए विद्यालय भवन में क्या सुविधा आवश्यक है?~Which facility is essential in schools for children with disabilities?|रैम्प एवं बाधारहित पहुँच~ramps and barrier-free access|केवल सीढ़ियाँ~only stairs|ऊँची दीवारें~high walls|कोई नहीं~none
दृष्टिबाधित बच्चों के लिए सहायक है—~Which helps visually impaired children?|ब्रेल एवं स्क्रीन-रीडर/ऑडियो पुस्तकें~Braille and screen-readers/audio books|चित्र पुस्तकें~picture books|श्यामपट्ट~blackboard|कार्टून~cartoons
श्रवणबाधित बच्चों के लिए शिक्षक को चाहिए कि वह—~For hearing-impaired children the teacher should—|बच्चे के सामने रहकर स्पष्ट होंठ-संचालन/संकेत भाषा का प्रयोग करे~face the child and use clear lip movement and sign language|पीठ करके बोले~speak with his back turned|बहुत धीमे बोले~whisper|तेज चिल्लाए~shout
बौद्धिक अक्षमता वाले बच्चों के शिक्षण में उपयुक्त है—~In teaching children with intellectual disability, the best approach is—|छोटे चरणों में, दोहराव एवं मूर्त सामग्री के साथ~small steps, repetition and concrete materials|केवल व्याख्यान~lectures|कठिन प्रश्न~difficult questions|उपेक्षा~neglect
RPwD अधिनियम 2016 के अनुसार निःशुल्क शिक्षा का अधिकार किन बच्चों को है (बेंचमार्क दिव्यांगता वाले)?~Under RPwD Act 2016, free education is guaranteed to benchmark-disability children aged—|6 से 18 वर्ष~6 to 18 years|6 से 14 वर्ष~6 to 14 years|3 से 6 वर्ष~3 to 6 years|18 से 25 वर्ष~18 to 25 years
आत्मकेन्द्रित (ऑटिज्म) बच्चों के लिए उपयुक्त है—~For children with autism it is suitable to provide—|संरचित दिनचर्या एवं दृश्य-सहायता~a structured routine and visual supports|अव्यवस्थित वातावरण~a chaotic environment|तेज शोर~loud noise|दण्ड~punishment
अस्थि-दिव्यांग बच्चे के लिए कक्षा में—~For a child with a locomotor disability the classroom should have—|सुगम बैठक व्यवस्था और सहायक उपकरण~accessible seating and assistive devices|ऊँची सीढ़ी~high stairs|कोई परिवर्तन नहीं~no change|अलग विद्यालय~a separate school
भारतीय पुनर्वास परिषद् अधिनियम किस वर्ष पारित हुआ?~In which year was the Rehabilitation Council of India Act passed?|1992|2016|1995|2009
`)));

})(typeof window !== 'undefined' ? window : globalThis);
