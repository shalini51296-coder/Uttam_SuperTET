/* Environment & Social Studies: bilingual banks. Only settled textbook facts. */
(function (g) {
'use strict';
const SUP = g.SUP, M = SUP.mapItems, Q = SUP.mcqItems, cat = (...a) => [].concat(...a);
const D = (id, hi, en, items) => SUP.def(id, 'evs', hi, en, items);

D('evs.earth', 'पृथ्वी, महाद्वीप, महासागर एवं सौरमण्डल', 'Earth, continents, oceans & solar system', cat(
M({ f: '{k} है—~{k} is—', rows: `
सौरमण्डल का सबसे बड़ा ग्रह~The largest planet of the solar system | बृहस्पति~Jupiter
सौरमण्डल का सबसे छोटा ग्रह~The smallest planet of the solar system | बुध~Mercury
सूर्य के सबसे निकट का ग्रह~The planet nearest to the Sun | बुध~Mercury
सबसे गर्म ग्रह~The hottest planet | शुक्र~Venus
'लाल ग्रह' कहलाने वाला ग्रह~The planet called the 'Red Planet' | मंगल~Mars
छल्लों के लिए प्रसिद्ध ग्रह~The planet famous for its rings | शनि~Saturn
पृथ्वी का एकमात्र प्राकृतिक उपग्रह~Earth's only natural satellite | चन्द्रमा~The Moon
विश्व का सबसे बड़ा महाद्वीप~The largest continent | एशिया~Asia
विश्व का सबसे छोटा महाद्वीप~The smallest continent | ऑस्ट्रेलिया~Australia
सबसे बड़ा महासागर~The largest ocean | प्रशान्त महासागर~Pacific Ocean
सबसे छोटा महासागर~The smallest ocean | आर्कटिक महासागर~Arctic Ocean
पृथ्वी की सबसे ऊपरी ठोस परत~The outermost solid layer of the Earth | भूपर्पटी~Crust
पृथ्वी का सर्वाधिक ऊष्ण एवं भारी केन्द्रीय भाग~The hot, dense central part of the Earth | क्रोड (कोर)~Core` }),
Q(`
पृथ्वी को अपनी धुरी पर एक चक्कर पूरा करने में लगभग कितना समय लगता है?~How long does the Earth take to complete one rotation on its axis?|24 घण्टे~24 hours|12 घण्टे~12 hours|365 दिन~365 days|30 दिन~30 days
पृथ्वी को सूर्य की एक परिक्रमा पूरी करने में लगभग कितना समय लगता है?~How long does the Earth take to complete one revolution around the Sun?|365¼ दिन~365¼ days|24 घण्टे~24 hours|30 दिन~30 days|180 दिन~180 days
भूमध्य रेखा का अक्षांश है—~The latitude of the Equator is—|0°|23½°|66½°|90°
कर्क रेखा का अक्षांश है—~The latitude of the Tropic of Cancer is—|23½° उत्तर~23½° N|23½° दक्षिण~23½° S|66½° उत्तर~66½° N|0°
शून्य देशान्तर रेखा (प्रधान याम्योत्तर) किस स्थान से गुजरती है?~The Prime Meridian (0° longitude) passes through—|ग्रीनविच~Greenwich|पेरिस~Paris|दिल्ली~Delhi|टोक्यो~Tokyo
भारत का मानक याम्योत्तर कितने देशान्तर पर है?~The Standard Meridian of India is at—|82½° पूर्व~82½° E|68° पूर्व~68° E|97° पूर्व~97° E|75° पश्चिम~75° W
भारत का मानक समय GMT से कितना आगे है?~Indian Standard Time is ahead of GMT by—|5 घण्टे 30 मिनट~5 hours 30 minutes|4 घण्टे~4 hours|6 घण्टे~6 hours|5 घण्टे~5 hours
विश्व में महाद्वीपों की संख्या कितनी मानी जाती है?~How many continents are there in the world?|7|5|6|8
सौरमण्डल में ग्रहों की संख्या कितनी है?~How many planets are there in the solar system?|8|9|7|10
सूर्यग्रहण किस तिथि को होता है?~A solar eclipse occurs on—|अमावस्या~a new-moon day|पूर्णिमा~a full-moon day|एकादशी~Ekadashi|अष्टमी~Ashtami
चन्द्रग्रहण किस तिथि को होता है?~A lunar eclipse occurs on—|पूर्णिमा~a full-moon day|अमावस्या~a new-moon day|एकादशी~Ekadashi|अष्टमी~Ashtami
कर्क रेखा भारत के कितने राज्यों से होकर गुजरती है?~Through how many Indian states does the Tropic of Cancer pass?|8|6|10|5
अन्तर्राष्ट्रीय तिथि रेखा किस देशान्तर के निकट है?~The International Date Line lies near the longitude—|180°|0°|90° पूर्व~90° E|90° पश्चिम~90° W
पृथ्वी के आन्तरिक भाग की तीन परतें क्रमशः हैं—~The three layers of the Earth's interior, from outside in, are—|भूपर्पटी, मैंटल, क्रोड~crust, mantle, core|मैंटल, क्रोड, भूपर्पटी~mantle, core, crust|क्रोड, मैंटल, भूपर्पटी~core, mantle, crust|भूपर्पटी, क्रोड, मैंटल~crust, core, mantle
सूर्य से प्रकाश को पृथ्वी तक पहुँचने में लगभग कितना समय लगता है?~Sunlight takes about how long to reach the Earth?|8 मिनट 20 सेकण्ड~8 minutes 20 seconds|8 सेकण्ड~8 seconds|1 घण्टा~1 hour|1 दिन~1 day
`)));

D('evs.geo', 'भारतीय भूगोल', 'Indian geography', cat(
M({ f: '{k} का उद्गम स्थल है—~The source of the {k} is—', r: '{v} से कौन-सी नदी निकलती है?~Which river rises from {v}?', rows: `
गंगा (भागीरथी)~Ganga (Bhagirathi) | गंगोत्री हिमनद~Gangotri glacier
यमुना~Yamuna | यमुनोत्री~Yamunotri
गोदावरी~Godavari | त्र्यम्बकेश्वर (नासिक)~Trimbakeshwar (Nashik)
कृष्णा~Krishna | महाबलेश्वर~Mahabaleshwar
कावेरी~Kaveri | ब्रह्मगिरि (तलकावेरी)~Brahmagiri (Talakaveri)
नर्मदा~Narmada | अमरकण्टक~Amarkantak
ताप्ती~Tapti | मुलताई (बैतूल)~Multai (Betul)
महानदी~Mahanadi | सिहावा (छत्तीसगढ़)~Sihawa (Chhattisgarh)` }),
M({ f: '{k} दर्रा किस राज्य/क्षेत्र में स्थित है?~In which State/region is the {k} pass located?', r: '{v} में कौन-सा दर्रा स्थित है?~Which pass is located in {v}?', rows: `
शिपकी ला~Shipki La | हिमाचल प्रदेश~Himachal Pradesh
रोहतांग~Rohtang | हिमाचल प्रदेश~Himachal Pradesh
बनिहाल~Banihal | जम्मू-कश्मीर~Jammu & Kashmir
बोमडिला~Bomdila | अरुणाचल प्रदेश~Arunachal Pradesh
खारदुंग ला~Khardung La | लद्दाख~Ladakh
पालघाट~Palghat Gap | केरल~Kerala
थाल घाट~Thal Ghat | महाराष्ट्र~Maharashtra` }),
M({ f: '{k} किस खनिज/संसाधन के लिए प्रसिद्ध है?~For which mineral/resource is {k} famous?', r: '{v} के लिए कौन-सा स्थान प्रसिद्ध है?~Which place is famous for {v}?', rows: `
कोलार~Kolar | सोना~gold
खेतड़ी~Khetri | ताँबा~copper
डिगबोई~Digboi | खनिज तेल~petroleum
झरिया~Jharia | कोयला~coal
कोडरमा~Koderma | अभ्रक~mica
बैलाडीला~Bailadila | लौह अयस्क~iron ore` }),
Q(`
क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन-सा है?~Which is the largest Indian state by area?|राजस्थान~Rajasthan|मध्य प्रदेश~Madhya Pradesh|महाराष्ट्र~Maharashtra|उत्तर प्रदेश~Uttar Pradesh
क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन-सा है?~Which is the smallest Indian state by area?|गोवा~Goa|सिक्किम~Sikkim|त्रिपुरा~Tripura|मणिपुर~Manipur
जनसंख्या की दृष्टि से भारत का सबसे बड़ा राज्य कौन-सा है?~Which is the most populous Indian state?|उत्तर प्रदेश~Uttar Pradesh|महाराष्ट्र~Maharashtra|बिहार~Bihar|पश्चिम बंगाल~West Bengal
भारत की सबसे लम्बी नदी (भारत में प्रवाह की दृष्टि से) कौन-सी है?~Which is the longest river of India (by course within India)?|गंगा~Ganga|ब्रह्मपुत्र~Brahmaputra|गोदावरी~Godavari|यमुना~Yamuna
भारत में सबसे लम्बी समुद्री तटरेखा वाला राज्य कौन-सा है?~Which state has the longest coastline in India?|गुजरात~Gujarat|तमिलनाडु~Tamil Nadu|आन्ध्र प्रदेश~Andhra Pradesh|केरल~Kerala
विश्व का सबसे बड़ा डेल्टा (गंगा-ब्रह्मपुत्र) कहलाता है—~The world's largest delta, formed by the Ganga-Brahmaputra, is the—|सुन्दरबन~Sundarbans|कृष्णा डेल्टा~Krishna delta|महानदी डेल्टा~Mahanadi delta|कावेरी डेल्टा~Kaveri delta
भारत में खारे पानी की सबसे बड़ी झील कौन-सी है?~Which is the largest brackish-water lagoon/lake in India?|चिल्का (ओडिशा)~Chilika (Odisha)|वुलर~Wular|डल~Dal|सांभर~Sambhar
थार मरुस्थल मुख्यतः किस राज्य में फैला है?~The Thar Desert is mainly in—|राजस्थान~Rajasthan|गुजरात~Gujarat|हरियाणा~Haryana|पंजाब~Punjab
कपास की खेती के लिए सर्वाधिक उपयुक्त मिट्टी है—~The soil most suitable for cotton is—|काली मिट्टी (रेगुर)~black soil (regur)|लाल मिट्टी~red soil|जलोढ़ मिट्टी~alluvial soil|लैटेराइट मिट्टी~laterite soil
भारत में सर्वाधिक वर्षा वाला स्थान (मौसिनराम) किस राज्य में है?~In which state is Mawsynram, one of the wettest places, located?|मेघालय~Meghalaya|असम~Assam|केरल~Kerala|अरुणाचल प्रदेश~Arunachal Pradesh
भारत की स्थल सीमा कितने देशों से लगती है?~With how many countries does India share a land border?|7|5|6|9
गंगा-यमुना का मैदान मुख्यतः किस प्रकार की मिट्टी से बना है?~The Ganga-Yamuna plain is mainly made of—|जलोढ़ मिट्टी~alluvial soil|काली मिट्टी~black soil|लाल मिट्टी~red soil|मरुस्थलीय मिट्टी~desert soil
`)));

D('evs.freedom', 'भारतीय स्वतंत्रता संग्राम', 'Indian freedom struggle', cat(
M({ f: '{k} किस वर्ष हुआ/हुई?~In which year did {k} take place?', r: '{v} में कौन-सी घटना हुई?~Which event took place in {v}?', rows: `
प्लासी का युद्ध~the Battle of Plassey | 1757
बक्सर का युद्ध~the Battle of Buxar | 1764
प्रथम स्वतंत्रता संग्राम (विद्रोह)~the Revolt (first war of independence) | 1857
भारतीय राष्ट्रीय काँग्रेस की स्थापना~founding of the Indian National Congress | 1885
बंगाल विभाजन~the Partition of Bengal | 1905
मुस्लिम लीग की स्थापना~founding of the Muslim League | 1906
लखनऊ समझौता~the Lucknow Pact | 1916
चम्पारण सत्याग्रह~the Champaran Satyagraha | 1917
जलियाँवाला बाग हत्याकाण्ड~the Jallianwala Bagh massacre | 1919
असहयोग आन्दोलन आरम्भ~start of the Non-Cooperation Movement | 1920
दाण्डी मार्च (नमक सत्याग्रह)~the Dandi March (Salt Satyagraha) | 1930
गाँधी-इरविन समझौता~the Gandhi-Irwin Pact | 1931
भारत छोड़ो आन्दोलन~the Quit India Movement | 1942
कैबिनेट मिशन~the Cabinet Mission | 1946
भारत की स्वतन्त्रता~India's independence | 1947` }),
M({ f: '{k} थे/थीं—~{k} was—', rows: `
भारतीय राष्ट्रीय काँग्रेस के प्रथम अध्यक्ष~the first President of the Indian National Congress | व्योमेशचन्द्र बनर्जी~W. C. Bonnerjee
काँग्रेस की प्रथम महिला अध्यक्ष~the first woman President of the Congress | एनी बेसेन्ट~Annie Besant
काँग्रेस की प्रथम भारतीय महिला अध्यक्ष~the first Indian woman President of the Congress | सरोजिनी नायडू~Sarojini Naidu
गाँधीजी के राजनीतिक गुरु~Gandhi's political guru | गोपाल कृष्ण गोखले~Gopal Krishna Gokhale
'भारत छोड़ो आन्दोलन' का नारा 'करो या मरो' देने वाले~the giver of the 'Do or Die' call in Quit India | महात्मा गाँधी~Mahatma Gandhi
आज़ाद हिन्द फौज का नेतृत्व करने वाले (1943)~the leader of the Indian National Army (1943) | सुभाषचन्द्र बोस~Subhas Chandra Bose
संविधान सभा के स्थायी अध्यक्ष~the permanent President of the Constituent Assembly | डॉ० राजेन्द्र प्रसाद~Dr Rajendra Prasad
भारत के अन्तिम वायसराय~the last Viceroy of India | लॉर्ड माउण्टबेटन~Lord Mountbatten` }),
Q(`
'साइमन कमीशन' भारत क्यों आया था?~Why did the Simon Commission come to India?|संवैधानिक सुधारों की समीक्षा के लिए~to review constitutional reforms|व्यापार के लिए~for trade|शिक्षा सुधार के लिए~for education reform|सेना के गठन के लिए~to form an army
भारत छोड़ो आन्दोलन कब आरम्भ हुआ?~When did the Quit India Movement begin?|8 अगस्त 1942~8 August 1942|26 जनवरी 1930~26 January 1930|15 अगस्त 1947~15 August 1947|13 अप्रैल 1919~13 April 1919
जलियाँवाला बाग हत्याकाण्ड किस नगर में हुआ था?~In which city did the Jallianwala Bagh massacre take place?|अमृतसर~Amritsar|लाहौर~Lahore|दिल्ली~Delhi|कानपुर~Kanpur
'काकोरी काण्ड' के क्रान्तिकारियों में सम्मिलित थे—~Which of these was among the Kakori revolutionaries?|रामप्रसाद बिस्मिल~Ram Prasad Bismil|लाला लाजपत राय~Lala Lajpat Rai|गोपाल कृष्ण गोखले~Gopal Krishna Gokhale|दादाभाई नौरोजी~Dadabhai Naoroji
1857 के विद्रोह की शुरुआत किस स्थान से हुई?~The Revolt of 1857 began at—|मेरठ~Meerut|झाँसी~Jhansi|कानपुर~Kanpur|लखनऊ~Lucknow
भारत को स्वतन्त्रता किस तिथि को मिली?~On which date did India become independent?|15 अगस्त 1947~15 August 1947|26 जनवरी 1950~26 January 1950|2 अक्टूबर 1947~2 October 1947|30 जनवरी 1948~30 January 1948
'दाण्डी मार्च' का उद्देश्य था—~The purpose of the Dandi March was—|नमक कानून का उल्लंघन~breaking the salt law|भूमि कर का विरोध~protesting land revenue|कपड़ों का बहिष्कार~boycotting cloth|संविधान बनाना~drafting the constitution
`)));

D('evs.reform', 'भारतीय समाज सुधारक', 'Indian social reformers', cat(
M({ f: '{k} ने किस संस्था की स्थापना की?~Which organisation did {k} found?', r: '{v} की स्थापना किसने की?~Who founded {v}?', rows: `
राजा राममोहन राय~Raja Ram Mohan Roy | ब्रह्म समाज (1828)~Brahmo Samaj (1828)
स्वामी दयानन्द सरस्वती~Swami Dayananda Saraswati | आर्य समाज (1875)~Arya Samaj (1875)
स्वामी विवेकानन्द~Swami Vivekananda | रामकृष्ण मिशन (1897)~Ramakrishna Mission (1897)
ज्योतिबा फुले~Jyotiba Phule | सत्यशोधक समाज (1873)~Satyashodhak Samaj (1873)
गोपाल कृष्ण गोखले~Gopal Krishna Gokhale | सर्वेण्ट्स ऑफ इण्डिया सोसायटी (1905)~Servants of India Society (1905)
आत्माराम पाण्डुरंग~Atmaram Pandurang | प्रार्थना समाज (1867)~Prarthana Samaj (1867)
श्री नारायण गुरु~Sri Narayana Guru | एस० एन० डी० पी० योगम् (1903)~SNDP Yogam (1903)
सर सैयद अहमद खान~Sir Syed Ahmad Khan | मुहम्मडन एंग्लो-ओरिएण्टल कॉलेज (अलीगढ़)~Muhammadan Anglo-Oriental College (Aligarh)` }),
Q(`
सती प्रथा पर कानूनी रोक किस वर्ष लगी?~In which year was Sati banned by law?|1829|1856|1872|1929
सती प्रथा उन्मूलन में गवर्नर-जनरल किसका प्रमुख योगदान था?~Which Governor-General was mainly responsible for abolishing Sati?|लॉर्ड विलियम बेंटिक~Lord William Bentinck|लॉर्ड कर्जन~Lord Curzon|लॉर्ड डलहौजी~Lord Dalhousie|लॉर्ड रिपन~Lord Ripon
विधवा पुनर्विवाह अधिनियम किस वर्ष पारित हुआ?~In which year was the Widow Remarriage Act passed?|1856|1829|1891|1929
विधवा पुनर्विवाह के प्रबल समर्थक कौन थे?~Who was a strong supporter of widow remarriage?|ईश्वरचन्द्र विद्यासागर~Ishwar Chandra Vidyasagar|बाल गंगाधर तिलक~Bal Gangadhar Tilak|दादाभाई नौरोजी~Dadabhai Naoroji|मदनमोहन मालवीय~Madan Mohan Malaviya
भारत में लड़कियों के लिए प्रथम विद्यालय (1848, पुणे) किसने खोला?~Who opened the first school for girls in India (Pune, 1848)?|ज्योतिबा फुले और सावित्रीबाई फुले~Jyotiba and Savitribai Phule|राजा राममोहन राय~Raja Ram Mohan Roy|दयानन्द सरस्वती~Dayananda Saraswati|एनी बेसेन्ट~Annie Besant
'सत्यार्थ प्रकाश' के रचयिता कौन हैं?~Who wrote 'Satyarth Prakash'?|स्वामी दयानन्द सरस्वती~Swami Dayananda Saraswati|स्वामी विवेकानन्द~Swami Vivekananda|राजा राममोहन राय~Raja Ram Mohan Roy|केशवचन्द्र सेन~Keshub Chandra Sen
शारदा अधिनियम (1929) किससे सम्बन्धित है?~The Sarda Act (1929) relates to—|बाल विवाह निषेध~prohibition of child marriage|सती प्रथा~Sati|विधवा विवाह~widow remarriage|दहेज~dowry
स्वामी विवेकानन्द ने शिकागो के विश्व धर्म सम्मेलन में भाग किस वर्ष लिया?~In which year did Swami Vivekananda address the Parliament of World's Religions in Chicago?|1893|1885|1905|1875
`)));

D('evs.const', 'भारतीय संविधान', 'Indian Constitution', cat(
M({ f: '{k} है—~{k} is—', rows: `
भारतीय संविधान लागू होने की तिथि~The date the Constitution came into force | 26 जनवरी 1950~26 January 1950
संविधान अंगीकृत किए जाने की तिथि~The date the Constitution was adopted | 26 नवम्बर 1949~26 November 1949
संविधान की प्रारूप समिति के अध्यक्ष~The Chairman of the Drafting Committee | डॉ० भीमराव अम्बेडकर~Dr B. R. Ambedkar
संविधान सभा के स्थायी अध्यक्ष~The permanent President of the Constituent Assembly | डॉ० राजेन्द्र प्रसाद~Dr Rajendra Prasad
मौलिक अधिकारों की संख्या~The number of Fundamental Rights | 6
मौलिक कर्तव्यों की संख्या (वर्तमान)~The present number of Fundamental Duties | 11
संविधान का वह भाग जिसमें मौलिक अधिकार हैं~The Part of the Constitution containing Fundamental Rights | भाग III~Part III
संविधान का वह भाग जिसमें नीति निदेशक तत्त्व हैं~The Part containing the Directive Principles | भाग IV~Part IV
मतदान की न्यूनतम आयु~The minimum voting age | 18 वर्ष~18 years
राष्ट्रपति पद हेतु न्यूनतम आयु~The minimum age for President | 35 वर्ष~35 years
लोकसभा सदस्य बनने की न्यूनतम आयु~The minimum age to be a Lok Sabha member | 25 वर्ष~25 years
राज्यसभा सदस्य बनने की न्यूनतम आयु~The minimum age to be a Rajya Sabha member | 30 वर्ष~30 years` }),
M({ f: 'अनुच्छेद {k} का सम्बन्ध है—~Article {k} relates to—', r: '{v} किस अनुच्छेद में वर्णित है?~In which Article is {v} provided?', rows: `
14 | विधि के समक्ष समता~equality before law
17 | अस्पृश्यता का अन्त~abolition of untouchability
21 | प्राण एवं दैहिक स्वतन्त्रता का संरक्षण~protection of life and personal liberty
21A | शिक्षा का अधिकार (6-14 वर्ष)~right to education (6-14 years)
32 | संवैधानिक उपचारों का अधिकार~right to constitutional remedies
51A | मौलिक कर्तव्य~fundamental duties
324 | निर्वाचन आयोग~the Election Commission
343 | संघ की राजभाषा~official language of the Union
352 | राष्ट्रीय आपातकाल~national emergency` }),
Q(`
भारतीय संविधान की प्रस्तावना का आरम्भ किन शब्दों से होता है?~The Preamble of the Indian Constitution begins with—|हम, भारत के लोग~We, the people of India|भारत एक सम्प्रभु राज्य है~India is a sovereign state|सत्यमेव जयते~Satyameva Jayate|जन गण मन~Jana Gana Mana
'पंथनिरपेक्ष' और 'समाजवादी' शब्द प्रस्तावना में किस संशोधन द्वारा जोड़े गए?~By which amendment were 'secular' and 'socialist' added to the Preamble?|42वाँ संशोधन~42nd Amendment|44वाँ संशोधन~44th Amendment|73वाँ संशोधन~73rd Amendment|86वाँ संशोधन~86th Amendment
डॉ० अम्बेडकर ने किस अनुच्छेद को संविधान की 'आत्मा' कहा?~Which Article did Dr Ambedkar call the 'soul' of the Constitution?|अनुच्छेद 32~Article 32|अनुच्छेद 14~Article 14|अनुच्छेद 19~Article 19|अनुच्छेद 21~Article 21
संविधान निर्माण में लगभग कितना समय लगा?~How long did it take to frame the Constitution?|2 वर्ष 11 माह 18 दिन~2 years 11 months 18 days|1 वर्ष~1 year|5 वर्ष~5 years|10 वर्ष~10 years
भारतीय संविधान में नीति निदेशक तत्त्व किस देश के संविधान से लिए गए हैं?~From which country's Constitution were the Directive Principles borrowed?|आयरलैण्ड~Ireland|अमेरिका~USA|ब्रिटेन~UK|कनाडा~Canada
मौलिक कर्तव्य किस संशोधन द्वारा जोड़े गए?~By which amendment were the Fundamental Duties added?|42वाँ~42nd|44वाँ~44th|61वाँ~61st|86वाँ~86th
भारत का संविधान किस प्रकार का है?~The Indian Constitution is—|लिखित और विश्व का सबसे लम्बा~written and the longest in the world|अलिखित~unwritten|केवल कठोर~only rigid|केवल लचीला~only flexible
`)));

D('evs.govt', 'हमारी शासन व्यवस्था', 'Our system of governance', cat(
M({ f: '{k} है—~{k} is—', rows: `
संसद के अंग~The parts of Parliament | राष्ट्रपति, लोकसभा और राज्यसभा~President, Lok Sabha and Rajya Sabha
राज्यसभा का पदेन सभापति~The ex-officio Chairman of the Rajya Sabha | उपराष्ट्रपति~the Vice-President
लोकसभा का कार्यकाल (सामान्यतः)~The normal term of the Lok Sabha | 5 वर्ष~5 years
राज्यसभा के सदस्य का कार्यकाल~The term of a Rajya Sabha member | 6 वर्ष~6 years
राष्ट्रपति का कार्यकाल~The term of the President | 5 वर्ष~5 years
सर्वोच्च न्यायालय के न्यायाधीशों की सेवानिवृत्ति आयु~The retirement age of Supreme Court judges | 65 वर्ष~65 years
सर्वोच्च न्यायालय का स्थान~The seat of the Supreme Court | नई दिल्ली~New Delhi
राज्य का संवैधानिक प्रमुख~The constitutional head of a State | राज्यपाल~the Governor
पंचायती राज सम्बन्धी संविधान संशोधन~The amendment relating to Panchayati Raj | 73वाँ संशोधन~73rd Amendment
नगरपालिकाओं सम्बन्धी संविधान संशोधन~The amendment relating to municipalities | 74वाँ संशोधन~74th Amendment
योजना आयोग का स्थान लेने वाली संस्था~The body that replaced the Planning Commission | नीति आयोग~NITI Aayog
भारत में प्रथम पंचायती राज कहाँ आरम्भ हुआ?~Where did Panchayati Raj first start in India? | नागौर (राजस्थान)~Nagaur (Rajasthan)` }),
Q(`
पंचायती राज की त्रिस्तरीय व्यवस्था का सही क्रम (नीचे से ऊपर) है—~The correct order (bottom to top) of the three-tier Panchayati Raj is—|ग्राम पंचायत, पंचायत समिति, जिला परिषद~Gram Panchayat, Panchayat Samiti, Zila Parishad|जिला परिषद, पंचायत समिति, ग्राम पंचायत~Zila Parishad, Panchayat Samiti, Gram Panchayat|पंचायत समिति, ग्राम पंचायत, जिला परिषद~Panchayat Samiti, Gram Panchayat, Zila Parishad|ग्राम सभा, जिला परिषद, ग्राम पंचायत~Gram Sabha, Zila Parishad, Gram Panchayat
धन विधेयक सर्वप्रथम किस सदन में प्रस्तुत किया जाता है?~In which House is a Money Bill first introduced?|लोकसभा~Lok Sabha|राज्यसभा~Rajya Sabha|दोनों में से किसी में~either House|संयुक्त बैठक में~a joint sitting
भारत का प्रधानमंत्री किसके प्रति उत्तरदायी होता है?~The Prime Minister of India is responsible to—|लोकसभा~the Lok Sabha|राज्यसभा~the Rajya Sabha|राज्यपाल~the Governor|सर्वोच्च न्यायालय~the Supreme Court
भारत में राष्ट्रपति का चुनाव कैसे होता है?~How is the President of India elected?|निर्वाचक मण्डल द्वारा अप्रत्यक्ष रूप से~indirectly by an electoral college|जनता द्वारा प्रत्यक्ष रूप से~directly by the people|प्रधानमंत्री द्वारा नामित~nominated by the Prime Minister|सर्वोच्च न्यायालय द्वारा~by the Supreme Court
शासन की तीन शाखाएँ कौन-सी हैं?~What are the three organs of government?|कार्यपालिका, विधायिका, न्यायपालिका~executive, legislature, judiciary|राष्ट्रपति, प्रधानमंत्री, राज्यपाल~President, Prime Minister, Governor|लोकसभा, राज्यसभा, विधानसभा~Lok Sabha, Rajya Sabha, Vidhan Sabha|सेना, पुलिस, न्यायालय~army, police, court
कानून बनाने का कार्य मुख्यतः कौन करता है?~Which organ mainly makes laws?|विधायिका~the legislature|कार्यपालिका~the executive|न्यायपालिका~the judiciary|पुलिस~the police
कानूनों की व्याख्या तथा न्याय प्रदान करने का कार्य किसका है?~Which organ interprets laws and delivers justice?|न्यायपालिका~the judiciary|विधायिका~the legislature|कार्यपालिका~the executive|निर्वाचन आयोग~the Election Commission
चुनाव कराने का दायित्व किस संस्था पर है?~Which body is responsible for conducting elections?|निर्वाचन आयोग~the Election Commission|संसद~Parliament|सर्वोच्च न्यायालय~the Supreme Court|नीति आयोग~NITI Aayog
'गाँव की संसद' किसे कहा जाता है?~Which body is called the 'Parliament of the village'?|ग्राम सभा~Gram Sabha|पंचायत समिति~Panchayat Samiti|जिला परिषद~Zila Parishad|विधानसभा~Vidhan Sabha
`)));

D('evs.road', 'यातायात एवं सड़क सुरक्षा', 'Traffic & road safety', Q(`
ट्रैफिक सिग्नल की लाल बत्ती का अर्थ है—~A red traffic light means—|रुकिए~stop|चलिए~go|सावधान रहिए~be careful|गति बढ़ाइए~speed up
ट्रैफिक सिग्नल की हरी बत्ती का अर्थ है—~A green traffic light means—|चलिए~go|रुकिए~stop|मुड़िए मत~do not turn|पार्किंग कीजिए~park
ट्रैफिक सिग्नल की पीली बत्ती का अर्थ है—~A yellow/amber traffic light means—|सावधान, रुकने/चलने के लिए तैयार रहिए~get ready to stop or go|तेज चलिए~drive fast|रुकिए ही नहीं~never stop|उलटे चलिए~reverse
सड़क पर पैदल यात्रियों के पार करने के लिए बनाई गई धारीदार पट्टी कहलाती है—~The striped crossing for pedestrians is called a—|ज़ेबरा क्रॉसिंग~zebra crossing|स्पीड ब्रेकर~speed breaker|डिवाइडर~divider|फुटओवर~kerb
त्रिभुजाकार यातायात चिह्न किस प्रकार के होते हैं?~Triangular road signs are—|चेतावनी सम्बन्धी~cautionary|आदेशात्मक~mandatory|सूचनात्मक~informatory|विज्ञापन~advertisements
लाल किनारे वाले गोलाकार चिह्न किस प्रकार के होते हैं?~Circular signs with a red border are—|निषेधात्मक~prohibitory|सूचनात्मक~informatory|चेतावनी~cautionary|पार्किंग~parking
दोपहिया वाहन चलाते समय क्या पहनना अनिवार्य है?~What must be worn while riding a two-wheeler?|हेलमेट~a helmet|चश्मा~glasses|दस्ताने~gloves|टोपी~a cap
कार में यात्रा करते समय सुरक्षा के लिए क्या लगाना चाहिए?~For safety in a car one should always fasten—|सीट बेल्ट~the seat belt|हैंडब्रेक~the handbrake|हॉर्न~the horn|वाइपर~the wiper
भारत में वाहन सड़क के किस ओर चलते हैं?~On which side of the road do vehicles drive in India?|बायीं ओर~the left|दायीं ओर~the right|बीच में~the middle|कहीं भी~anywhere
फुटपाथ न होने पर पैदल यात्री को सड़क के किस ओर चलना चाहिए?~Where there is no footpath, on which side of the road should pedestrians walk?|दायीं ओर (आते वाहनों के सामने)~the right, facing oncoming traffic|बायीं ओर~the left|बीच में~the middle|कहीं भी~anywhere
अखिल भारतीय आपातकालीन सहायता नम्बर कौन-सा है?~Which is the all-India emergency response number?|112|100|108|101
एम्बुलेंस सेवा हेतु सामान्यतः कौन-सा नम्बर है?~The common number for ambulance service is—|108|100|101|1098
अग्निशमन सेवा का नम्बर है—~The fire service number is—|101|100|102|108
बच्चों की सहायता हेतु चाइल्डलाइन का नम्बर है—~The Childline helpline number is—|1098|100|108|181
वाहन चलाते समय मोबाइल फोन का प्रयोग—~Using a mobile phone while driving is—|दुर्घटना का कारण बन सकता है और निषिद्ध है~dangerous and prohibited|सुरक्षित है~safe|अनिवार्य है~compulsory|लाभदायक है~beneficial
नशे की स्थिति में वाहन चलाना—~Driving under the influence of alcohol is—|कानूनन अपराध है~a legal offence|सुरक्षित है~safe|स्वीकार्य है~acceptable|अनिवार्य है~compulsory
गियर वाले वाहन के लिए ड्राइविंग लाइसेंस की न्यूनतम आयु है—~The minimum age for a licence for a geared vehicle is—|18 वर्ष~18 years|16 वर्ष~16 years|21 वर्ष~21 years|25 वर्ष~25 years
सड़क दुर्घटना में घायल की सहायता के लिए सबसे पहले क्या करना चाहिए?~What should one do first to help an accident victim?|एम्बुलेंस/पुलिस को सूचना देना~call an ambulance/police|घायल को वहीं छोड़ना~leave the victim|भीड़ लगाना~gather a crowd|वीडियो बनाना~record a video
स्कूल के पास वाहन की गति कैसी रखनी चाहिए?~How should vehicle speed be near a school?|धीमी~slow|तेज~fast|बहुत तेज~very fast|कोई सीमा नहीं~no limit
ओवरटेक करने से पहले चालक को क्या देखना चाहिए?~Before overtaking, a driver should check—|आगे-पीछे का यातायात और सड़क की स्थिति~traffic ahead and behind and the road condition|केवल हॉर्न~only the horn|केवल गति~only speed|कुछ नहीं~nothing
`));

D('evs.econ', 'भारतीय अर्थव्यवस्था एवं चुनौतियाँ', 'Indian economy & challenges', cat(
M({ f: '{k} किस वर्ष आरम्भ हुआ/हुई?~In which year did {k} start?', r: '{v} में क्या आरम्भ हुआ?~What began in {v}?', rows: `
प्रथम पंचवर्षीय योजना~the First Five-Year Plan | 1951
बैंकों का राष्ट्रीयकरण (14 बैंक)~nationalisation of 14 banks | 1969
नई आर्थिक नीति (उदारीकरण)~the New Economic Policy (liberalisation) | 1991
मनरेगा (MGNREGA)~MGNREGA | 2005
प्रधानमंत्री जन धन योजना~Pradhan Mantri Jan Dhan Yojana | 2014
स्वच्छ भारत अभियान~Swachh Bharat Abhiyan | 2014
डिजिटल इण्डिया कार्यक्रम~the Digital India programme | 2015
वस्तु एवं सेवा कर (GST)~Goods and Services Tax (GST) | 2017
आयुष्मान भारत योजना~the Ayushman Bharat scheme | 2018
नीति आयोग की स्थापना~the setting up of NITI Aayog | 2015` }),
M({ f: '{k} है—~{k} is—', rows: `
भारतीय रिज़र्व बैंक का मुख्यालय~The headquarters of the Reserve Bank of India | मुम्बई~Mumbai
भारत की अर्थव्यवस्था का प्रकार~The type of India's economy | मिश्रित अर्थव्यवस्था~mixed economy
कृषि क्षेत्र किस क्षेत्र में आता है?~In which sector does agriculture fall? | प्राथमिक क्षेत्र~the primary sector
उद्योग (विनिर्माण) किस क्षेत्र में आता है?~In which sector does manufacturing fall? | द्वितीयक क्षेत्र~the secondary sector
बैंकिंग, परिवहन और शिक्षा किस क्षेत्र में आते हैं?~In which sector do banking, transport and education fall? | तृतीयक (सेवा) क्षेत्र~the tertiary (service) sector
कृषि में 'प्रच्छन्न बेरोजगारी' का अर्थ~'Disguised unemployment' in agriculture means | आवश्यकता से अधिक लोगों का काम में लगा होना~more people working than needed` }),
Q(`
भारतीय रिज़र्व बैंक (RBI) की स्थापना किस वर्ष हुई?~In which year was the Reserve Bank of India established?|1935|1947|1949|1969
मुद्रास्फीति का अर्थ है—~Inflation means—|वस्तुओं के सामान्य मूल्य-स्तर में निरन्तर वृद्धि~a continuous rise in the general price level|कीमतों में गिरावट~a fall in prices|रोजगार में वृद्धि~a rise in employment|बचत में वृद्धि~a rise in savings
मनरेगा के अन्तर्गत ग्रामीण परिवारों को वर्ष में कितने दिन के रोजगार की गारण्टी दी गई है?~MGNREGA guarantees rural households how many days of work per year?|100 दिन~100 days|50 दिन~50 days|200 दिन~200 days|365 दिन~365 days
भारत की अर्थव्यवस्था में सर्वाधिक योगदान किस क्षेत्र का है?~Which sector contributes the most to India's GDP?|सेवा क्षेत्र~service sector|कृषि क्षेत्र~agriculture|उद्योग क्षेत्र~industry|खनन~mining
ग्रामीण विकास हेतु कृषि एवं ग्रामीण ऋण की शीर्ष संस्था है—~The apex institution for agricultural and rural credit is—|नाबार्ड (NABARD)~NABARD|सेबी~SEBI|इरडा~IRDAI|भारतीय स्टेट बैंक~State Bank of India
भारतीय शेयर बाजार के नियमन की संस्था है—~The regulator of the Indian securities market is—|सेबी (SEBI)~SEBI|नाबार्ड~NABARD|आरबीआई~RBI|नीति आयोग~NITI Aayog
भारत में पंचवर्षीय योजनाओं का अन्त किस वर्ष हुआ?~Indian five-year plans formally ended in which year?|2017|2012|2000|2020
'हरित क्रान्ति' का सम्बन्ध किससे है?~The Green Revolution is related to—|खाद्यान्न उत्पादन में वृद्धि~increase in foodgrain production|औद्योगिक विकास~industrial growth|शिक्षा~education|स्वास्थ्य~health
`)));

D('evs.heritage', 'हमारी सांस्कृतिक विरासत', 'Our cultural heritage', cat(
M({ f: '{k} का निर्माण किसने कराया/किस वंश ने कराया?~Who built {k}?', r: '{v} ने किसका निर्माण कराया?~What did {v} build?', rows: `
ताजमहल~the Taj Mahal | शाहजहाँ~Shah Jahan
लाल किला (दिल्ली)~the Red Fort (Delhi) | शाहजहाँ~Shah Jahan
बुलन्द दरवाजा~Buland Darwaza | अकबर~Akbar
हुमायूँ का मकबरा~Humayun's Tomb | हाजी बेगम (हुमायूँ की पत्नी)~Haji Begum (Humayun's wife)
चारमीनार~Charminar | मुहम्मद कुली कुतुबशाह~Muhammad Quli Qutb Shah
गोल गुम्बज~Gol Gumbaz | मुहम्मद आदिलशाह~Muhammad Adil Shah
कोणार्क सूर्य मन्दिर~Konark Sun Temple | नरसिंहदेव प्रथम (गंग वंश)~Narasimhadeva I (Ganga dynasty)
बृहदेश्वर मन्दिर~Brihadeeswara Temple | राजराज प्रथम (चोल)~Rajaraja I (Chola)
खजुराहो के मन्दिर~Khajuraho temples | चन्देल शासक~Chandela rulers
एलोरा का कैलाश मन्दिर~Kailasa Temple at Ellora | राष्ट्रकूट शासक~Rashtrakuta rulers
महाबलीपुरम के मन्दिर~Mahabalipuram temples | पल्लव शासक~Pallava rulers` }),
M({ f: '{k} किस वर्ष हुआ?~In which year did {k} occur?', rows: `
पानीपत का प्रथम युद्ध~the First Battle of Panipat | 1526
हल्दीघाटी का युद्ध~the Battle of Haldighati | 1576
शिवाजी का राज्याभिषेक~the coronation of Shivaji | 1674
कलिंग युद्ध (ई० पू०)~the Kalinga War (BCE) | 261
मौर्य साम्राज्य की स्थापना (ई० पू०)~founding of the Maurya Empire (BCE) | 322
अलेक्जेण्डर का भारत पर आक्रमण (ई० पू०)~Alexander's invasion of India (BCE) | 326` }),
Q(`
सिन्धु घाटी सभ्यता के प्रमुख स्थल हैं—~Major sites of the Indus Valley Civilisation are—|हड़प्पा और मोहनजोदड़ो~Harappa and Mohenjo-daro|हस्तिनापुर और कौशाम्बी~Hastinapur and Kaushambi|पाटलिपुत्र और वैशाली~Pataliputra and Vaishali|अयोध्या और मथुरा~Ayodhya and Mathura
सम्राट अशोक ने किस धर्म को अपनाया?~Which religion did Emperor Ashoka adopt?|बौद्ध धर्म~Buddhism|जैन धर्म~Jainism|इस्लाम~Islam|ईसाई धर्म~Christianity
भगवान बुद्ध ने अपना प्रथम उपदेश कहाँ दिया?~Where did Buddha deliver his first sermon?|सारनाथ~Sarnath|बोधगया~Bodh Gaya|लुम्बिनी~Lumbini|कुशीनगर~Kushinagar
गौतम बुद्ध का जन्म स्थान कौन-सा है?~Where was Gautama Buddha born?|लुम्बिनी~Lumbini|बोधगया~Bodh Gaya|सारनाथ~Sarnath|वैशाली~Vaishali
जैन धर्म के 24वें तीर्थंकर कौन थे?~Who was the 24th Tirthankara of Jainism?|महावीर स्वामी~Mahavira|पार्श्वनाथ~Parshvanatha|ऋषभदेव~Rishabhadeva|नेमिनाथ~Neminatha
भारतीय इतिहास में 'स्वर्ण युग' किस काल को कहा जाता है?~Which period is called the 'Golden Age' of Indian history?|गुप्त काल~the Gupta period|मौर्य काल~the Maurya period|मुगल काल~the Mughal period|चोल काल~the Chola period
शेरशाह सूरी ने किस मार्ग का निर्माण/पुनर्निर्माण कराया?~Which road did Sher Shah Suri build/renovate?|ग्राण्ड ट्रंक रोड~the Grand Trunk Road|राष्ट्रीय राजमार्ग-44~National Highway 44|रेशम मार्ग~the Silk Road|बंगाल-पंजाब एक्सप्रेसवे~the Bengal-Punjab expressway
वेदों की संख्या कितनी है?~How many Vedas are there?|4|3|5|6
कुतुबमीनार किस नगर में स्थित है?~In which city is the Qutb Minar located?|दिल्ली~Delhi|आगरा~Agra|जयपुर~Jaipur|लखनऊ~Lucknow
`)));

D('evs.env', 'पर्यावरण संरक्षण', 'Environmental conservation', cat(
M({ f: '{k} किस वर्ष पारित/आरम्भ हुआ?~In which year was {k} enacted/launched?', r: '{v} में क्या पारित/आरम्भ हुआ?~What was enacted/launched in {v}?', rows: `
वन्यजीव (संरक्षण) अधिनियम~the Wildlife (Protection) Act | 1972
जल (प्रदूषण निवारण एवं नियन्त्रण) अधिनियम~the Water (Prevention and Control of Pollution) Act | 1974
वायु (प्रदूषण निवारण एवं नियन्त्रण) अधिनियम~the Air (Prevention and Control of Pollution) Act | 1981
पर्यावरण (संरक्षण) अधिनियम~the Environment (Protection) Act | 1986
प्रोजेक्ट टाइगर~Project Tiger | 1973
राष्ट्रीय हरित अधिकरण (NGT) की स्थापना~the setting up of the National Green Tribunal | 2010` }),
M({ f: '{k} से किसका सम्बन्ध है?~With whom/what is {k} associated?', r: '{v} से कौन-सा आन्दोलन/संस्था जुड़ी है?~Which movement/institution is associated with {v}?', rows: `
चिपको आन्दोलन~the Chipko Movement | सुन्दरलाल बहुगुणा~Sunderlal Bahuguna
नर्मदा बचाओ आन्दोलन~the Narmada Bachao Andolan | मेधा पाटकर~Medha Patkar
खेजड़ली बलिदान (1730)~the Khejarli sacrifice (1730) | अमृता देवी बिश्नोई~Amrita Devi Bishnoi
जिम कॉर्बेट राष्ट्रीय उद्यान~Jim Corbett National Park | उत्तराखण्ड~Uttarakhand
काजीरंगा राष्ट्रीय उद्यान (एक सींग वाले गैंडे)~Kaziranga National Park (one-horned rhino) | असम~Assam
गिर राष्ट्रीय उद्यान (एशियाई सिंह)~Gir National Park (Asiatic lion) | गुजरात~Gujarat` }),
Q(`
'3R' सिद्धान्त में R क्या दर्शाते हैं?~What do the three R's stand for?|घटाना, पुनः उपयोग, पुनर्चक्रण~Reduce, Reuse, Recycle|पढ़ना, लिखना, गणित~Reading, Writing, Arithmetic|रोकना, हटाना, बदलना~Restrict, Remove, Replace|पुनः प्राप्त, पुनः उपयोग, पुनः निर्माण~Recover, Reuse, Rebuild
सतत विकास का अर्थ है—~Sustainable development means—|भावी पीढ़ियों की आवश्यकताओं को हानि पहुँचाए बिना वर्तमान का विकास~development that meets present needs without harming future generations|केवल औद्योगिक विकास~only industrial growth|केवल वनों की कटाई~only deforestation|विकास रोक देना~stopping development
प्लास्टिक कचरा पर्यावरण के लिए हानिकारक है क्योंकि—~Plastic waste is harmful because—|यह सैकड़ों वर्षों तक नष्ट नहीं होता~it does not decompose for hundreds of years|यह जल्दी सड़ जाता है~it decomposes quickly|यह खाद बनाता है~it makes compost|यह वायु को शुद्ध करता है~it purifies air
जैविक खेती में किसका प्रयोग किया जाता है?~Organic farming uses—|प्राकृतिक खाद (गोबर, कम्पोस्ट)~natural manure such as dung and compost|रासायनिक उर्वरक~chemical fertilisers|कीटनाशक~pesticides|हार्मोन~hormones
भारत का राष्ट्रीय पशु कौन-सा है?~Which is India's national animal?|बाघ~Tiger|सिंह~Lion|हाथी~Elephant|गैण्डा~Rhinoceros
विश्व वन्यजीव दिवस कब मनाया जाता है?~When is World Wildlife Day observed?|3 मार्च~3 March|5 जून~5 June|22 अप्रैल~22 April|1 दिसम्बर~1 December
वन महोत्सव किस माह में मनाया जाता है?~In which month is Van Mahotsav celebrated?|जुलाई~July|जनवरी~January|मार्च~March|दिसम्बर~December
कूड़े को गीले और सूखे कचरे में अलग करना क्यों आवश्यक है?~Why is it necessary to segregate wet and dry waste?|उचित निस्तारण और पुनर्चक्रण के लिए~for proper disposal and recycling|समय बर्बाद करने के लिए~to waste time|कचरा बढ़ाने के लिए~to increase waste|कोई कारण नहीं~no reason
`)));

D('evs.disaster', 'प्राकृतिक आपदा प्रबन्धन', 'Natural disaster management', cat(
Q(`
भारत में आपदा प्रबन्धन अधिनियम किस वर्ष पारित हुआ?~In which year was the Disaster Management Act passed in India?|2005|1995|2010|2015
राष्ट्रीय आपदा प्रबन्धन प्राधिकरण का संक्षिप्त नाम है—~The abbreviation of the National Disaster Management Authority is—|NDMA|NDRF|SDRF|NIDM
आपदा के समय राहत एवं बचाव कार्य करने वाला विशेष बल है—~The specialised force for rescue and relief in disasters is—|राष्ट्रीय आपदा प्रतिक्रिया बल (NDRF)~the National Disaster Response Force (NDRF)|सीमा सुरक्षा बल~the Border Security Force|रेलवे सुरक्षा बल~the Railway Protection Force|केन्द्रीय औद्योगिक सुरक्षा बल~the CISF
भूकम्प की तीव्रता मापने का पैमाना है—~The scale used to measure the magnitude of an earthquake is—|रिक्टर स्केल~Richter scale|केल्विन स्केल~Kelvin scale|बोफोर्ट स्केल~Beaufort scale|मरकैली स्केल~Mohs scale
भूकम्प की तरंगों को रिकॉर्ड करने वाला यन्त्र है—~The instrument recording earthquake waves is a—|सिस्मोग्राफ~seismograph|बैरोमीटर~barometer|थर्मामीटर~thermometer|एनीमोमीटर~anemometer
भूकम्प के समय भवन के भीतर होने पर क्या करना चाहिए?~What should you do if you are inside a building during an earthquake?|मजबूत मेज के नीचे बैठकर सिर को सुरक्षित रखें~take cover under a sturdy table and protect your head|लिफ्ट से नीचे जाएँ~use the lift|खिड़की के पास खड़े हों~stand near a window|दौड़कर सीढ़ियों पर भीड़ करें~rush to the stairs
भूकम्प के दौरान किसका प्रयोग नहीं करना चाहिए?~Which should not be used during an earthquake?|लिफ्ट~the lift|सीढ़ियाँ~the stairs|खुला मैदान~an open ground|मजबूत मेज~a sturdy table
सुनामी लहरें मुख्यतः किस कारण उत्पन्न होती हैं?~Tsunami waves are mainly caused by—|समुद्र के भीतर भूकम्प~undersea earthquakes|तेज हवा~strong winds|ज्वार-भाटा~tides|मानसून~the monsoon
भूकम्प के उद्गम स्थल के ठीक ऊपर पृथ्वी की सतह पर स्थित बिन्दु कहलाता है—~The point on the surface directly above the source of an earthquake is the—|अधिकेन्द्र (एपिसेंटर)~epicentre|फोकस~focus|क्रोड~core|मैंटल~mantle
बाढ़ की चेतावनी मिलने पर क्या करना चाहिए?~On receiving a flood warning one should—|ऊँचे सुरक्षित स्थान पर चले जाएँ~move to higher, safe ground|बहते पानी में उतरें~walk through flowing water|नदी किनारे जाएँ~go to the riverbank|बिजली के खम्भे पकड़ें~hold electric poles
चक्रवात की पूर्व चेतावनी देने वाली संस्था है—~The agency issuing cyclone warnings in India is—|भारत मौसम विज्ञान विभाग (IMD)~the India Meteorological Department (IMD)|इसरो~ISRO|नीति आयोग~NITI Aayog|डीआरडीओ~DRDO
भोपाल गैस त्रासदी किस वर्ष हुई?~In which year did the Bhopal gas tragedy occur?|1984|1975|1991|2004
भोपाल गैस त्रासदी में कौन-सी गैस रिसी थी?~Which gas leaked in the Bhopal gas tragedy?|मिथाइल आइसोसायनेट~methyl isocyanate|क्लोरीन~chlorine|अमोनिया~ammonia|कार्बन मोनोऑक्साइड~carbon monoxide
आपदा प्रबन्धन चक्र के चरण नहीं हैं—~Which is NOT a stage of the disaster management cycle?|आपदा को आमन्त्रित करना~inviting the disaster|शमन~mitigation|तैयारी~preparedness|पुनर्वास~rehabilitation
बिजली गिरने (आकाशीय बिजली) के समय सबसे सुरक्षित स्थान है—~The safest place during a lightning storm is—|पक्का भवन~a pucca building|खुला मैदान~an open field|अकेला ऊँचा पेड़~a tall lone tree|जलाशय~a water body
आग लगने पर अग्निशमन सेवा के लिए किस नम्बर पर फोन करना चाहिए?~Which number should be dialled for the fire service?|101|100|102|1098
अन्तर्राष्ट्रीय आपदा न्यूनीकरण दिवस कब मनाया जाता है?~When is the International Day for Disaster Risk Reduction observed?|13 अक्टूबर~13 October|5 जून~5 June|22 अप्रैल~22 April|1 दिसम्बर~1 December
प्राकृतिक आपदा का उदाहरण है—~An example of a natural disaster is—|भूकम्प~an earthquake|रासायनिक दुर्घटना~a chemical accident|रेल दुर्घटना~a train accident|आतंकवादी घटना~a terrorist attack
मानव-जनित आपदा का उदाहरण है—~An example of a man-made disaster is—|रासायनिक गैस रिसाव~a chemical gas leak|भूकम्प~an earthquake|सूखा~a drought|चक्रवात~a cyclone
प्राथमिक चिकित्सा (First Aid) बॉक्स में सामान्यतः क्या होता है?~What does a first-aid box usually contain?|पट्टी, एण्टीसेप्टिक, रुई~bandages, antiseptic, cotton|पुस्तकें~books|खिलौने~toys|भोजन~food
`)));

})(typeof window !== 'undefined' ? window : globalThis);
