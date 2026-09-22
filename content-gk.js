/* General Knowledge & Current Affairs banks.
   Only long-settled facts (verified, stable) are used. Fast-changing "current affairs"
   go into the separate, editable file www/js/current-affairs.js (see README). */
(function (g) {
'use strict';
const SUP = g.SUP, M = SUP.mapItems, Q = SUP.mcqItems, O = SUP.oddItems, cat = (...a) => [].concat(...a);

/* ============ 1. UTTAR PRADESH ============ */
SUP.def('gk.up', 'gk', 'उत्तर प्रदेश', 'Uttar Pradesh', cat(
M({ f: '{k} किस उद्योग/उत्पाद के लिए प्रसिद्ध है?~For which industry/product is {k} famous?', r: '{v} के लिए उत्तर प्रदेश का कौन-सा नगर प्रसिद्ध है?~Which city of Uttar Pradesh is famous for {v}?', rows: `
फिरोजाबाद~Firozabad | काँच (चूड़ी) उद्योग~Glass and bangle industry
मुरादाबाद~Moradabad | पीतल हस्तशिल्प~Brassware
भदोही~Bhadohi | कालीन~Carpets
कन्नौज~Kannauj | इत्र~Perfume (attar)
अलीगढ़~Aligarh | ताला उद्योग~Lock industry
खुर्जा~Khurja | चीनी मिट्टी के बर्तन~Ceramic pottery
सहारनपुर~Saharanpur | काष्ठ शिल्प~Wood carving
वाराणसी~Varanasi | बनारसी साड़ी~Banarasi sarees
लखनऊ~Lucknow | चिकनकारी~Chikankari embroidery
रामपुर~Rampur | रामपुरी चाकू~Rampuri knives
मेरठ~Meerut | खेल का सामान~Sports goods
बरेली~Bareilly | जरदोजी कढ़ाई~Zardozi embroidery
कानपुर~Kanpur | चमड़ा उद्योग~Leather industry` }),
M({ f: '{k} उत्तर प्रदेश के किस जनपद में स्थित है?~In which district of Uttar Pradesh is {k} located?', r: 'उत्तर प्रदेश के {v} जनपद में कौन-सा उद्यान/अभयारण्य स्थित है?~Which park/sanctuary is located in {v} district of Uttar Pradesh?', rows: `
दुधवा राष्ट्रीय उद्यान~Dudhwa National Park | लखीमपुर खीरी~Lakhimpur Kheri
पीलीभीत टाइगर रिजर्व~Pilibhit Tiger Reserve | पीलीभीत~Pilibhit
चन्द्रप्रभा वन्यजीव अभयारण्य~Chandraprabha Wildlife Sanctuary | चन्दौली~Chandauli
सोहागी बरवा अभयारण्य~Sohagi Barwa Sanctuary | महराजगंज~Maharajganj
ओखला पक्षी विहार~Okhla Bird Sanctuary | गौतम बुद्ध नगर~Gautam Buddh Nagar
बखिरा पक्षी विहार~Bakhira Bird Sanctuary | संत कबीर नगर~Sant Kabir Nagar
सुरहा ताल पक्षी विहार~Surha Tal Bird Sanctuary | बलिया~Ballia
समसपुर पक्षी विहार~Samaspur Bird Sanctuary | रायबरेली~Raebareli
नवाबगंज पक्षी विहार~Nawabganj Bird Sanctuary | उन्नाव~Unnao
सांडी पक्षी विहार~Sandi Bird Sanctuary | हरदोई~Hardoi` }),
M({ f: '{k} किस नदी के तट पर स्थित है?~{k} is situated on the bank of which river?', r: '{v} नदी के तट पर उत्तर प्रदेश का कौन-सा नगर स्थित है?~Which city of Uttar Pradesh lies on the bank of the {v}?', rows: `
लखनऊ~Lucknow | गोमती~Gomti
जौनपुर~Jaunpur | गोमती~Gomti
कानपुर~Kanpur | गंगा~Ganga
वाराणसी~Varanasi | गंगा~Ganga
आगरा~Agra | यमुना~Yamuna
मथुरा~Mathura | यमुना~Yamuna
अयोध्या~Ayodhya | सरयू~Saryu
गोरखपुर~Gorakhpur | राप्ती~Rapti
बरेली~Bareilly | रामगंगा~Ramganga` }),
M({ f: '{k} किससे संबंधित है?~With whom/what is {k} associated?', r: '{v} से कौन-सा स्थान/घटना संबंधित है?~Which place/event is associated with {v}?', rows: `
फतेहपुर सीकरी~Fatehpur Sikri | अकबर~Akbar
बड़ा इमामबाड़ा (लखनऊ)~Bara Imambara (Lucknow) | आसफ़ुद्दौला~Asaf-ud-Daula
ताजमहल~Taj Mahal | शाहजहाँ~Shah Jahan
झाँसी का किला~Jhansi Fort | रानी लक्ष्मीबाई~Rani Lakshmibai
सारनाथ~Sarnath | बुद्ध का प्रथम उपदेश~Buddha's first sermon
कुशीनगर~Kushinagar | बुद्ध का महापरिनिर्वाण~Mahaparinirvana of Buddha
` }),
M({ f: '{k} है—~{k} is—', rows: `
उत्तर प्रदेश का राजकीय पशु~The state animal of Uttar Pradesh | बारहसिंगा~Barasingha (swamp deer)
उत्तर प्रदेश का राजकीय पक्षी~The state bird of Uttar Pradesh | सारस क्रेन~Sarus crane
उत्तर प्रदेश का राजकीय वृक्ष~The state tree of Uttar Pradesh | अशोक~Ashoka
उत्तर प्रदेश का राजकीय पुष्प~The state flower of Uttar Pradesh | पलाश (टेसू)~Palash (flame of the forest)` }),
M({ f: '{k} कहाँ स्थित है?~Where is {k} located?', r: '{v} में कौन-सा संस्थान स्थित है?~Which institute is located in {v}?', rows: `
भारतीय पशु चिकित्सा अनुसंधान संस्थान~Indian Veterinary Research Institute | इज्जतनगर (बरेली)~Izatnagar (Bareilly)
केन्द्रीय औषधि अनुसंधान संस्थान (CDRI)~Central Drug Research Institute | लखनऊ~Lucknow
राष्ट्रीय वनस्पति अनुसंधान संस्थान~National Botanical Research Institute | लखनऊ~Lucknow
भारतीय दलहन अनुसंधान संस्थान~Indian Institute of Pulses Research | कानपुर~Kanpur
काशी हिन्दू विश्वविद्यालय~Banaras Hindu University | वाराणसी~Varanasi
अलीगढ़ मुस्लिम विश्वविद्यालय~Aligarh Muslim University | अलीगढ़~Aligarh
भारतीय प्रौद्योगिकी संस्थान (IIT)~IIT | कानपुर~Kanpur` }),
Q(`
उत्तर प्रदेश के प्रथम मुख्यमंत्री कौन थे?~Who was the first Chief Minister of Uttar Pradesh? | गोविन्द बल्लभ पंत~Govind Ballabh Pant | सम्पूर्णानन्द~Sampurnanand | चन्द्रभानु गुप्त~Chandra Bhanu Gupta | कमलापति त्रिपाठी~Kamlapati Tripathi
उत्तर प्रदेश की प्रथम महिला मुख्यमंत्री कौन थीं?~Who was the first woman Chief Minister of Uttar Pradesh? | सुचेता कृपलानी~Sucheta Kripalani | सरोजिनी नायडू~Sarojini Naidu | विजयलक्ष्मी पण्डित~Vijaya Lakshmi Pandit | इन्दिरा गाँधी~Indira Gandhi
उत्तर प्रदेश के प्रथम राज्यपाल कौन थे?~Who was the first Governor of Uttar Pradesh? | सरोजिनी नायडू~Sarojini Naidu | विजयलक्ष्मी पण्डित~Vijaya Lakshmi Pandit | के० एम० मुंशी~K. M. Munshi | सुचेता कृपलानी~Sucheta Kripalani
उत्तर प्रदेश में जनपदों (जिलों) की संख्या है—~The number of districts in Uttar Pradesh is— | 75 | 70 | 72 | 80
उत्तर प्रदेश में मण्डलों की संख्या है—~The number of divisions in Uttar Pradesh is— | 18 | 16 | 20 | 22
उत्तर प्रदेश विधानसभा में कुल सदस्य संख्या है—~The total strength of the Uttar Pradesh Legislative Assembly is— | 403 | 400 | 404 | 425
उत्तर प्रदेश से लोकसभा में कितने सदस्य चुने जाते हैं?~How many members does Uttar Pradesh send to the Lok Sabha? | 80 | 71 | 85 | 75
उत्तर प्रदेश विधान परिषद् के सदस्यों की संख्या है—~The strength of the Uttar Pradesh Legislative Council is— | 100 | 99 | 90 | 108
क्षेत्रफल की दृष्टि से उत्तर प्रदेश का सबसे बड़ा जनपद कौन-सा है?~Which is the largest district of Uttar Pradesh by area? | लखीमपुर खीरी~Lakhimpur Kheri | सोनभद्र~Sonbhadra | बहराइच~Bahraich | हरदोई~Hardoi
इलाहाबाद उच्च न्यायालय की खण्डपीठ (बेंच) कहाँ स्थित है?~Where is the bench of the Allahabad High Court located? | लखनऊ~Lucknow | कानपुर~Kanpur | वाराणसी~Varanasi | गोरखपुर~Gorakhpur
उत्तर प्रदेश का पुराना नाम 'संयुक्त प्रान्त' बदलकर उत्तर प्रदेश किस वर्ष किया गया?~In which year was 'United Provinces' renamed Uttar Pradesh? | 1950 | 1947 | 1937 | 1956
उत्तराखण्ड राज्य का गठन उत्तर प्रदेश से अलग होकर किस वर्ष हुआ?~In which year was Uttarakhand carved out of Uttar Pradesh? | 2000 | 1996 | 2002 | 1999
वर्ष 2018 में इलाहाबाद का नाम बदलकर क्या किया गया?~What was Allahabad renamed in 2018? | प्रयागराज~Prayagraj | काशी~Kashi | अयोध्या~Ayodhya | प्रयाग नगर~Prayag Nagar
भारत के राष्ट्रीय चिह्न (सिंह स्तम्भ) का स्रोत उत्तर प्रदेश के किस स्थान का अशोक स्तम्भ है?~The national emblem is adapted from the Ashoka pillar at which place in Uttar Pradesh? | सारनाथ~Sarnath | कौशाम्बी~Kaushambi | श्रावस्ती~Shravasti | कुशीनगर~Kushinagar
चौरी-चौरा कांड किस वर्ष हुआ था?~In which year did the Chauri Chaura incident occur? | 1922 | 1919 | 1930 | 1942
काकोरी ट्रेन एक्शन किस वर्ष हुआ था?~In which year did the Kakori train action take place? | 1925 | 1921 | 1930 | 1928
उत्तर प्रदेश की राजभाषा कौन-सी है?~What is the official language of Uttar Pradesh? | हिन्दी~Hindi | अवधी~Awadhi | ब्रज~Braj | भोजपुरी~Bhojpuri
पूर्वांचल एक्सप्रेसवे किन नगरों को जोड़ता है?~Which cities does the Purvanchal Expressway connect? | लखनऊ–गाजीपुर~Lucknow–Ghazipur | आगरा–लखनऊ~Agra–Lucknow | नोएडा–आगरा~Noida–Agra | मेरठ–प्रयागराज~Meerut–Prayagraj
`)));

/* ============ 2. INDIA - national ============ */
SUP.def('gk.nat', 'gk', 'भारत — राष्ट्रीय', 'India — National', cat(
M({ f: '{k} की राजधानी है—~The capital of {k} is—', r: '{v} किस राज्य/केन्द्रशासित प्रदेश की राजधानी है?~{v} is the capital of which State/UT?', rows: `
अरुणाचल प्रदेश~Arunachal Pradesh | ईटानगर~Itanagar
असम~Assam | दिसपुर~Dispur
बिहार~Bihar | पटना~Patna
छत्तीसगढ़~Chhattisgarh | रायपुर~Raipur
गोवा~Goa | पणजी~Panaji
गुजरात~Gujarat | गांधीनगर~Gandhinagar
हिमाचल प्रदेश~Himachal Pradesh | शिमला~Shimla
झारखण्ड~Jharkhand | राँची~Ranchi
कर्नाटक~Karnataka | बेंगलुरु~Bengaluru
केरल~Kerala | तिरुवनन्तपुरम~Thiruvananthapuram
मध्य प्रदेश~Madhya Pradesh | भोपाल~Bhopal
महाराष्ट्र~Maharashtra | मुम्बई~Mumbai
मणिपुर~Manipur | इम्फाल~Imphal
मेघालय~Meghalaya | शिलांग~Shillong
मिजोरम~Mizoram | आइजोल~Aizawl
नागालैण्ड~Nagaland | कोहिमा~Kohima
ओडिशा~Odisha | भुवनेश्वर~Bhubaneswar
राजस्थान~Rajasthan | जयपुर~Jaipur
सिक्किम~Sikkim | गंगटोक~Gangtok
तमिलनाडु~Tamil Nadu | चेन्नई~Chennai
तेलंगाना~Telangana | हैदराबाद~Hyderabad
त्रिपुरा~Tripura | अगरतला~Agartala
पश्चिम बंगाल~West Bengal | कोलकाता~Kolkata
लद्दाख~Ladakh | लेह~Leh
लक्षद्वीप~Lakshadweep | कवरत्ती~Kavaratti` }),
M({ f: '{k} कब मनाया जाता है?~On which date is {k} observed?', r: '{v} को कौन-सा दिवस मनाया जाता है?~Which day is observed on {v}?', rows: `
राष्ट्रीय युवा दिवस~National Youth Day | 12 जनवरी~12 January
गणतंत्र दिवस~Republic Day | 26 जनवरी~26 January
राष्ट्रीय विज्ञान दिवस~National Science Day | 28 फरवरी~28 February
अंतर्राष्ट्रीय महिला दिवस~International Women's Day | 8 मार्च~8 March
विश्व स्वास्थ्य दिवस~World Health Day | 7 अप्रैल~7 April
पृथ्वी दिवस~Earth Day | 22 अप्रैल~22 April
अंतर्राष्ट्रीय श्रमिक दिवस~International Labour Day | 1 मई~1 May
विश्व पर्यावरण दिवस~World Environment Day | 5 जून~5 June
अंतर्राष्ट्रीय योग दिवस~International Yoga Day | 21 जून~21 June
राष्ट्रीय चिकित्सक दिवस~National Doctors' Day | 1 जुलाई~1 July
कारगिल विजय दिवस~Kargil Vijay Diwas | 26 जुलाई~26 July
राष्ट्रीय खेल दिवस~National Sports Day | 29 अगस्त~29 August
शिक्षक दिवस~Teachers' Day | 5 सितम्बर~5 September
हिन्दी दिवस~Hindi Diwas | 14 सितम्बर~14 September
अभियन्ता (इंजीनियर) दिवस~Engineers' Day | 15 सितम्बर~15 September
गाँधी जयन्ती~Gandhi Jayanti | 2 अक्टूबर~2 October
राष्ट्रीय एकता दिवस~National Unity Day | 31 अक्टूबर~31 October
बाल दिवस (भारत)~Children's Day (India) | 14 नवम्बर~14 November
संविधान दिवस~Constitution Day | 26 नवम्बर~26 November
नौसेना दिवस~Navy Day | 4 दिसम्बर~4 December
मानवाधिकार दिवस~Human Rights Day | 10 दिसम्बर~10 December
राष्ट्रीय गणित दिवस~National Mathematics Day | 22 दिसम्बर~22 December
राष्ट्रीय मतदाता दिवस~National Voters' Day | 25 जनवरी~25 January
वायुसेना दिवस~Air Force Day | 8 अक्टूबर~8 October` }),
M({ f: '{k} — किस वर्ष?~{k} — in which year?', r: '{v} में कौन-सी घटना/उपलब्धि हुई?~Which event/achievement took place in {v}?', rows: `
भारत का प्रथम उपग्रह 'आर्यभट्ट'~India's first satellite Aryabhata | 1975
पोखरण-I (प्रथम परमाणु परीक्षण)~Pokhran-I (first nuclear test) | 1974
भारत का प्रथम मंगल अभियान (मंगलयान) प्रक्षेपण~Launch of India's Mars Orbiter Mission | 2013
चन्द्रयान-3 की चन्द्रमा पर सफल लैंडिंग~Chandrayaan-3 soft landing on the Moon | 2023
राकेश शर्मा की अन्तरिक्ष यात्रा~Rakesh Sharma's space flight | 1984
भारत में GST लागू हुआ~GST implemented in India | 2017
राष्ट्रीय शिक्षा नीति (NEP)~National Education Policy (NEP) | 2020
शिक्षा का अधिकार अधिनियम लागू हुआ~Right to Education Act came into force | 2010
सूचना का अधिकार अधिनियम~Right to Information Act | 2005
वन्दे भारत एक्सप्रेस की पहली सेवा~First Vande Bharat Express service | 2019
नया संसद भवन उद्घाटन~Inauguration of the new Parliament building | 2023
जी-20 शिखर सम्मेलन नई दिल्ली में~G20 Summit in New Delhi | 2023` }),
Q(`
भारत के प्रथम राष्ट्रपति कौन थे?~Who was the first President of India? | डॉ० राजेन्द्र प्रसाद~Dr Rajendra Prasad | डॉ० एस० राधाकृष्णन~Dr S. Radhakrishnan | डॉ० जाकिर हुसैन~Dr Zakir Husain | सरदार पटेल~Sardar Patel
भारत की प्रथम महिला राष्ट्रपति कौन थीं?~Who was the first woman President of India? | प्रतिभा पाटिल~Pratibha Patil | द्रौपदी मुर्मू~Droupadi Murmu | सरोजिनी नायडू~Sarojini Naidu | इन्दिरा गाँधी~Indira Gandhi
भारत के प्रथम उपराष्ट्रपति कौन थे?~Who was the first Vice-President of India? | डॉ० एस० राधाकृष्णन~Dr S. Radhakrishnan | डॉ० जाकिर हुसैन~Dr Zakir Husain | वी० वी० गिरि~V. V. Giri | गोपाल स्वरूप पाठक~Gopal Swarup Pathak
लोकसभा के प्रथम अध्यक्ष कौन थे?~Who was the first Speaker of the Lok Sabha? | जी० वी० मावलंकर~G. V. Mavalankar | अनन्तशयनम् अय्यंगार~M. Ananthasayanam Ayyangar | हुकुम सिंह~Hukam Singh | बलराम जाखड़~Balram Jakhar
स्वतंत्र भारत के प्रथम प्रधानमंत्री कौन थे?~Who was the first Prime Minister of independent India? | जवाहरलाल नेहरू~Jawaharlal Nehru | सरदार पटेल~Sardar Patel | लाल बहादुर शास्त्री~Lal Bahadur Shastri | गुलजारीलाल नन्दा~Gulzarilal Nanda
एवरेस्ट पर चढ़ने वाली प्रथम भारतीय महिला कौन हैं?~Who was the first Indian woman to climb Mount Everest? | बछेन्द्री पाल~Bachendri Pal | संतोष यादव~Santosh Yadav | प्रेमलता अग्रवाल~Premlata Agarwal | अरुणिमा सिन्हा~Arunima Sinha
भारत की प्रथम महिला IPS अधिकारी कौन थीं?~Who was India's first woman IPS officer? | किरण बेदी~Kiran Bedi | मीरा कुमार~Meira Kumar | अन्ना राजम मल्होत्रा~Anna Rajam Malhotra | अरुणा आसफ़ अली~Aruna Asaf Ali
भारत के प्रथम फील्ड मार्शल कौन थे?~Who was the first Field Marshal of India? | सैम मानेकशॉ~Sam Manekshaw | के० एम० करियप्पा~K. M. Cariappa | टी० एन० रैना~T. N. Raina | अर्जन सिंह~Arjan Singh
'मिसाइल मैन ऑफ इंडिया' के नाम से किन्हें जाना जाता है?~Who is known as the 'Missile Man of India'? | डॉ० ए० पी० जे० अब्दुल कलाम~Dr A. P. J. Abdul Kalam | डॉ० विक्रम साराभाई~Dr Vikram Sarabhai | डॉ० होमी भाभा~Dr Homi Bhabha | डॉ० सतीश धवन~Dr Satish Dhawan
भारतीय अन्तरिक्ष कार्यक्रम के जनक किन्हें माना जाता है?~Who is regarded as the father of the Indian space programme? | डॉ० विक्रम साराभाई~Dr Vikram Sarabhai | डॉ० होमी भाभा~Dr Homi Bhabha | डॉ० सी० वी० रमन~Dr C. V. Raman | डॉ० ए० पी० जे० अब्दुल कलाम~Dr A. P. J. Abdul Kalam
भारत में 'हरित क्रान्ति' के जनक कौन माने जाते हैं?~Who is called the father of the Green Revolution in India? | एम० एस० स्वामीनाथन~M. S. Swaminathan | वर्गीज कुरियन~Verghese Kurien | नॉर्मन बोरलॉग~Norman Borlaug | बी० पी० पाल~B. P. Pal
भारत में 'श्वेत क्रान्ति' के जनक कौन माने जाते हैं?~Who is called the father of the White Revolution in India? | वर्गीज कुरियन~Verghese Kurien | एम० एस० स्वामीनाथन~M. S. Swaminathan | विक्रम साराभाई~Vikram Sarabhai | जगजीवन राम~Jagjivan Ram
भारत के राष्ट्रीय पशु, पक्षी और फल का सही क्रम है—~Which is the correct order of India's national animal, bird and fruit? | बाघ, मोर, आम~Tiger, Peacock, Mango | शेर, मोर, केला~Lion, Peacock, Banana | बाघ, सारस, आम~Tiger, Sarus crane, Mango | हाथी, मोर, आम~Elephant, Peacock, Mango
भारत का राष्ट्रीय पुष्प कौन-सा है?~Which is the national flower of India? | कमल~Lotus | गुलाब~Rose | गेंदा~Marigold | चमेली~Jasmine
भारत के राष्ट्रीय गान 'जन गण मन' के रचयिता कौन हैं?~Who wrote the national anthem 'Jana Gana Mana'? | रवीन्द्रनाथ टैगोर~Rabindranath Tagore | बंकिमचन्द्र चट्टोपाध्याय~Bankim Chandra Chatterjee | इकबाल~Iqbal | सुब्रमण्यम भारती~Subramania Bharati
भारत के राष्ट्रीय गीत 'वन्दे मातरम्' के रचयिता कौन हैं?~Who wrote the national song 'Vande Mataram'? | बंकिमचन्द्र चट्टोपाध्याय~Bankim Chandra Chatterjee | रवीन्द्रनाथ टैगोर~Rabindranath Tagore | मैथिलीशरण गुप्त~Maithili Sharan Gupta | प्रेमचन्द~Premchand
भारतीय राष्ट्रीय ध्वज में केसरिया, सफेद और हरे रंग की पट्टियाँ ऊपर से नीचे किस क्रम में हैं?~In what order are the stripes on India's national flag from top to bottom? | केसरिया, सफेद, हरा~Saffron, White, Green | सफेद, केसरिया, हरा~White, Saffron, Green | हरा, सफेद, केसरिया~Green, White, Saffron | केसरिया, हरा, सफेद~Saffron, Green, White
राष्ट्रीय ध्वज के मध्य में स्थित अशोक चक्र में कितनी तीलियाँ (आरे) होती हैं?~How many spokes does the Ashoka Chakra in the national flag have? | 24 | 12 | 16 | 32
भारत का सबसे ऊँचा पर्वत शिखर (भारतीय नियंत्रण में) कौन-सा है?~Which is the highest peak in India (under Indian administration)? | कंचनजंघा~Kangchenjunga | नन्दा देवी~Nanda Devi | माउंट एवरेस्ट~Mount Everest | K2
`)));

/* ============ 3. WORLD ============ */
SUP.def('gk.world', 'gk', 'विश्व', 'World', cat(
M({ f: '{k} की राजधानी है—~The capital of {k} is—', r: '{v} किस देश की राजधानी है?~{v} is the capital of which country?', rows: `
जापान~Japan | टोक्यो~Tokyo
फ्रांस~France | पेरिस~Paris
जर्मनी~Germany | बर्लिन~Berlin
इटली~Italy | रोम~Rome
मिस्र~Egypt | काहिरा~Cairo
ऑस्ट्रेलिया~Australia | कैनबरा~Canberra
कनाडा~Canada | ओटावा~Ottawa
ब्राज़ील~Brazil | ब्रासीलिया~Brasília
तुर्किये (तुर्की)~Türkiye (Turkey) | अंकारा~Ankara
नेपाल~Nepal | काठमांडू~Kathmandu
भूटान~Bhutan | थिम्पू~Thimphu
बांग्लादेश~Bangladesh | ढाका~Dhaka
पाकिस्तान~Pakistan | इस्लामाबाद~Islamabad
अफगानिस्तान~Afghanistan | काबुल~Kabul
चीन~China | बीजिंग~Beijing
दक्षिण कोरिया~South Korea | सियोल~Seoul
थाईलैण्ड~Thailand | बैंकॉक~Bangkok
ईरान~Iran | तेहरान~Tehran
सऊदी अरब~Saudi Arabia | रियाद~Riyadh
संयुक्त अरब अमीरात~United Arab Emirates | अबू धाबी~Abu Dhabi
रूस~Russia | मॉस्को~Moscow
स्पेन~Spain | मैड्रिड~Madrid
यूनान (ग्रीस)~Greece | एथेंस~Athens
स्विट्ज़रलैण्ड~Switzerland | बर्न~Bern
केन्या~Kenya | नैरोबी~Nairobi
नाइजीरिया~Nigeria | अबुजा~Abuja
क्यूबा~Cuba | हवाना~Havana
मालदीव~Maldives | माले~Malé
वियतनाम~Vietnam | हनोई~Hanoi
मलेशिया~Malaysia | कुआलालम्पुर~Kuala Lumpur
न्यूज़ीलैण्ड~New Zealand | वेलिंगटन~Wellington
अमेरिका (USA)~USA | वाशिंगटन डी० सी०~Washington D.C.` }),
M({ f: '{k} की मुद्रा (करेंसी) है—~The currency of {k} is—', r: '{v} किस देश की मुद्रा है?~{v} is the currency of which country?', rows: `
जापान~Japan | येन~Yen
ब्रिटेन~United Kingdom | पाउण्ड स्टर्लिंग~Pound sterling
चीन~China | युआन (रेनमिनबी)~Yuan (Renminbi)
रूस~Russia | रूबल~Ruble
बांग्लादेश~Bangladesh | टका~Taka
सऊदी अरब~Saudi Arabia | रियाल~Riyal
संयुक्त अरब अमीरात~UAE | दिरहम~Dirham
स्विट्ज़रलैण्ड~Switzerland | स्विस फ्रैंक~Swiss franc
दक्षिण कोरिया~South Korea | वॉन~Won
थाईलैण्ड~Thailand | थाई बाट~Thai baht
मलेशिया~Malaysia | रिंगिट~Ringgit
दक्षिण अफ्रीका~South Africa | रैण्ड~Rand
वियतनाम~Vietnam | डोंग~Dong
भूटान~Bhutan | नगुल्त्रम~Ngultrum
म्यांमार~Myanmar | क्यात~Kyat
अफगानिस्तान~Afghanistan | अफगानी~Afghani
ब्राज़ील~Brazil | रियल~Real
इण्डोनेशिया~Indonesia | रुपिया~Rupiah` }),
M({ f: '{k} का मुख्यालय कहाँ है?~Where is the headquarters of {k}?', r: '{v} में किस अन्तर्राष्ट्रीय संगठन का मुख्यालय है?~Which international organisation has its headquarters in {v}?', rows: `
संयुक्त राष्ट्र संघ (UNO)~United Nations | न्यूयॉर्क~New York
यूनेस्को (UNESCO)~UNESCO | पेरिस~Paris
विश्व स्वास्थ्य संगठन (WHO)~World Health Organization | जिनेवा~Geneva
विश्व व्यापार संगठन (WTO)~World Trade Organization | जिनेवा~Geneva
अन्तर्राष्ट्रीय मुद्रा कोष (IMF)~International Monetary Fund | वाशिंगटन डी० सी०~Washington D.C.
यूनिसेफ (UNICEF)~UNICEF | न्यूयॉर्क~New York
खाद्य एवं कृषि संगठन (FAO)~Food and Agriculture Organization | रोम~Rome
अन्तर्राष्ट्रीय न्यायालय (ICJ)~International Court of Justice | द हेग~The Hague
इण्टरपोल (Interpol)~Interpol | लियों~Lyon
नाटो (NATO)~NATO | ब्रुसेल्स~Brussels
ओपेक (OPEC)~OPEC | वियना~Vienna
संयुक्त राष्ट्र पर्यावरण कार्यक्रम (UNEP)~UNEP | नैरोबी~Nairobi
सार्क (SAARC) सचिवालय~SAARC Secretariat | काठमांडू~Kathmandu
आसियान (ASEAN) सचिवालय~ASEAN Secretariat | जकार्ता~Jakarta
अन्तर्राष्ट्रीय श्रम संगठन (ILO)~International Labour Organization | जिनेवा~Geneva
अन्तर्राष्ट्रीय परमाणु ऊर्जा एजेंसी (IAEA)~IAEA | वियना~Vienna` }),
M({ f: '{k} है—~{k} is—', rows: `
विश्व की सबसे लम्बी नदी (परम्परागत मान्यता)~The longest river in the world (conventional view) | नील~Nile
विश्व का सबसे बड़ा महासागर~The largest ocean in the world | प्रशान्त महासागर~Pacific Ocean
विश्व का सबसे बड़ा गर्म मरुस्थल~The largest hot desert in the world | सहारा~Sahara
विश्व की सबसे ऊँची पर्वत चोटी~The highest mountain peak in the world | माउंट एवरेस्ट~Mount Everest
क्षेत्रफल की दृष्टि से विश्व का सबसे बड़ा देश~The largest country in the world by area | रूस~Russia
क्षेत्रफल की दृष्टि से विश्व का सबसे छोटा देश~The smallest country in the world by area | वेटिकन सिटी~Vatican City
विश्व का सबसे बड़ा महाद्वीप~The largest continent in the world | एशिया~Asia
महासागरों का सबसे गहरा स्थान~The deepest point of the oceans | मारियाना गर्त~Mariana Trench
विश्व का सबसे बड़ा द्वीप~The largest island in the world | ग्रीनलैण्ड~Greenland
विश्व का सबसे ऊँचा जलप्रपात~The highest waterfall in the world | एंजेल जलप्रपात~Angel Falls
विश्व का सबसे बड़ा वर्षावन~The largest rainforest in the world | अमेज़न~Amazon
विश्व की सबसे ऊँची इमारत (बुर्ज़ खलीफा) स्थित है—~The world's tallest building, Burj Khalifa, is located in | दुबई~Dubai` }),
M({ f: '{k} किस नाम से जाना जाता है?~By what name is {k} known?', r: '{v} किसका उपनाम है?~{v} is the popular name of—', rows: `
जयपुर~Jaipur | गुलाबी नगर~Pink City
जोधपुर~Jodhpur | नीला नगर (ब्लू सिटी)~Blue City
उदयपुर~Udaipur | झीलों का शहर~City of Lakes
कोलकाता~Kolkata | आनन्द का शहर~City of Joy
बेंगलुरु~Bengaluru | भारत की सिलिकॉन वैली~Silicon Valley of India
कोच्चि~Kochi | अरब सागर की रानी~Queen of the Arabian Sea
जापान~Japan | उगते सूर्य का देश~Land of the Rising Sun
भूटान~Bhutan | थण्डर ड्रैगन की भूमि~Land of the Thunder Dragon
नॉर्वे~Norway | मध्यरात्रि के सूर्य का देश~Land of the Midnight Sun
फिनलैण्ड~Finland | हजार झीलों का देश~Land of a Thousand Lakes
न्यूयॉर्क~New York | बिग एप्पल~The Big Apple
रोम~Rome | अनन्त नगर (इटर्नल सिटी)~The Eternal City
वेनिस~Venice | नहरों का शहर~City of Canals` })
));

/* ============ 4. PERSONALITIES ============ */
SUP.def('gk.pers', 'gk', 'व्यक्तित्व', 'Personalities', cat(
M({ f: '{k} किस नाम/उपाधि से प्रसिद्ध हैं?~By which title/epithet is {k} known?', r: '"{v}" के नाम से कौन प्रसिद्ध हैं?~Who is known as "{v}"?', rows: `
सरदार वल्लभभाई पटेल~Sardar Vallabhbhai Patel | लौह पुरुष~Iron Man of India
बाल गंगाधर तिलक~Bal Gangadhar Tilak | लोकमान्य~Lokmanya
सुभाषचन्द्र बोस~Subhas Chandra Bose | नेताजी~Netaji
चित्तरंजन दास~Chittaranjan Das | देशबन्धु~Deshbandhu
लाला लाजपत राय~Lala Lajpat Rai | पंजाब केसरी~Punjab Kesari
रवीन्द्रनाथ टैगोर~Rabindranath Tagore | गुरुदेव~Gurudev
सरोजिनी नायडू~Sarojini Naidu | भारत कोकिला~Nightingale of India
खान अब्दुल गफ्फार खाँ~Khan Abdul Ghaffar Khan | सीमान्त गाँधी~Frontier Gandhi
राजा राममोहन राय~Raja Ram Mohan Roy | भारतीय पुनर्जागरण के जनक~Father of the Indian Renaissance
भीमराव अम्बेडकर~B. R. Ambedkar | भारतीय संविधान के जनक~Father of the Indian Constitution
धुन्डिराज गोविन्द फालके~Dadasaheb Phalke | भारतीय सिनेमा के जनक~Father of Indian Cinema
होमी जहाँगीर भाभा~Homi J. Bhabha | भारतीय परमाणु कार्यक्रम के जनक~Father of the Indian Nuclear Programme
पंडित जवाहरलाल नेहरू~Pt Jawaharlal Nehru | चाचा नेहरू~Chacha Nehru` }),
M({ f: '{k} किसने लिखा/कहा?~Who wrote/said {k}?', r: '"{v}" के रचयिता/प्रवर्तक कौन हैं?~Who is the author/originator of "{v}"?', rows: `
'स्वराज्य मेरा जन्मसिद्ध अधिकार है'~"Swaraj is my birthright" | बाल गंगाधर तिलक~Bal Gangadhar Tilak
'तुम मुझे खून दो, मैं तुम्हें आजादी दूँगा'~"Give me blood and I shall give you freedom" | सुभाषचन्द्र बोस~Subhas Chandra Bose
'करो या मरो'~"Do or Die" | महात्मा गाँधी~Mahatma Gandhi
'दिल्ली चलो'~"Delhi Chalo" | सुभाषचन्द्र बोस~Subhas Chandra Bose
'उठो, जागो और तब तक न रुको जब तक लक्ष्य प्राप्त न हो'~"Arise, awake and stop not till the goal is reached" | स्वामी विवेकानन्द~Swami Vivekananda
'वेदों की ओर लौटो'~"Go back to the Vedas" | स्वामी दयानन्द सरस्वती~Swami Dayananda Saraswati
'वन्दे मातरम्' गीत~The song 'Vande Mataram' | बंकिमचन्द्र चट्टोपाध्याय~Bankim Chandra Chatterjee
'सारे जहाँ से अच्छा हिन्दोस्ताँ हमारा'~'Saare Jahan Se Accha' | मुहम्मद इकबाल~Muhammad Iqbal` }),
M({ f: '{k} का सम्बन्ध किस खोज/क्षेत्र से है?~With which discovery/field is {k} associated?', r: '{v} से कौन वैज्ञानिक/व्यक्ति संबंधित है?~Which scientist/person is associated with {v}?', rows: `
सी० वी० रमन~C. V. Raman | प्रकाश का प्रकीर्णन (रमन प्रभाव)~Scattering of light (Raman effect)
जगदीशचन्द्र बोस~J. C. Bose | पौधों में संवेदनशीलता (क्रेस्कोग्राफ)~Plant sensitivity (crescograph)
श्रीनिवास रामानुजन~Srinivasa Ramanujan | संख्या सिद्धान्त एवं गणित~Number theory and mathematics
आर्यभट~Aryabhata | आर्यभटीय (गणित एवं खगोल)~Aryabhatiya (mathematics and astronomy)
चरक~Charaka | आयुर्वेद (चरक संहिता)~Ayurveda (Charaka Samhita)
सुश्रुत~Sushruta | शल्य चिकित्सा~Surgery
सत्येन्द्र नाथ बोस~S. N. Bose | बोस-आइंस्टीन सांख्यिकी~Bose-Einstein statistics
सुब्रह्मण्यन चन्द्रशेखर~S. Chandrasekhar | चन्द्रशेखर सीमा~Chandrasekhar limit` }),
Q(`
'भारत रत्न' से सम्मानित होने वाले प्रथम खिलाड़ी कौन हैं?~Who was the first sportsperson to receive the Bharat Ratna? | सचिन तेंदुलकर~Sachin Tendulkar | ध्यानचन्द~Dhyan Chand | कपिल देव~Kapil Dev | विश्वनाथन आनन्द~Viswanathan Anand
'सत्यमेव जयते' किस उपनिषद् से लिया गया है?~From which Upanishad is 'Satyameva Jayate' taken? | मुण्डकोपनिषद्~Mundaka Upanishad | कठोपनिषद्~Katha Upanishad | छान्दोग्य उपनिषद्~Chandogya Upanishad | ईशोपनिषद्~Isha Upanishad
महात्मा गाँधी का जन्म स्थान कौन-सा है?~Where was Mahatma Gandhi born? | पोरबन्दर~Porbandar | राजकोट~Rajkot | अहमदाबाद~Ahmedabad | वर्धा~Wardha
रानी लक्ष्मीबाई का जन्म किस नगर में हुआ था?~In which city was Rani Lakshmibai born? | वाराणसी~Varanasi | झाँसी~Jhansi | कानपुर~Kanpur | ग्वालियर~Gwalior
मंगल पाण्डे किस नगर की सैनिक छावनी से सम्बन्धित थे जहाँ 1857 में उन्होंने विद्रोह किया?~Mangal Pandey revolted in 1857 at which cantonment? | बैरकपुर~Barrackpore | मेरठ~Meerut | झाँसी~Jhansi | दिल्ली~Delhi
'मदर टेरेसा' को शान्ति का नोबेल पुरस्कार किस वर्ष मिला?~In which year did Mother Teresa receive the Nobel Peace Prize? | 1979 | 1971 | 1985 | 1990
रवीन्द्रनाथ टैगोर को नोबेल पुरस्कार किस कृति पर प्राप्त हुआ?~For which work did Rabindranath Tagore receive the Nobel Prize? | गीतांजलि~Gitanjali | गोरा~Gora | घरे-बाइरे~Ghare-Baire | चोखेर बाली~Chokher Bali
`)));

/* ============ 5. BOOKS & AUTHORS ============ */
SUP.def('gk.books', 'gk', 'पुस्तकें एवं रचनाएँ', 'Books & Authors', cat(
M({ f: '"{k}" के लेखक/रचयिता कौन हैं?~Who is the author of "{k}"?', r: '{v} की रचना कौन-सी है?~Which of the following is a work of {v}?', rows: `
गोदान~Godaan | प्रेमचन्द~Premchand
कामायनी~Kamayani | जयशंकर प्रसाद~Jaishankar Prasad
मधुशाला~Madhushala | हरिवंशराय बच्चन~Harivansh Rai Bachchan
रश्मिरथी~Rashmirathi | रामधारी सिंह 'दिनकर'~Ramdhari Singh 'Dinkar'
साकेत~Saket | मैथिलीशरण गुप्त~Maithili Sharan Gupta
अन्धा युग~Andha Yug | धर्मवीर भारती~Dharamvir Bharati
मैला आँचल~Maila Anchal | फणीश्वरनाथ 'रेणु'~Phanishwar Nath 'Renu'
राग दरबारी~Raag Darbari | श्रीलाल शुक्ल~Shrilal Shukla
चन्द्रकान्ता~Chandrakanta | देवकीनन्दन खत्री~Devaki Nandan Khatri
रामचरितमानस~Ramcharitmanas | तुलसीदास~Tulsidas
सूरसागर~Sursagar | सूरदास~Surdas
पद्मावत~Padmavat | मलिक मुहम्मद जायसी~Malik Muhammad Jayasi
आनन्दमठ~Anandamath | बंकिमचन्द्र चट्टोपाध्याय~Bankim Chandra Chatterjee
गीतांजलि~Gitanjali | रवीन्द्रनाथ टैगोर~Rabindranath Tagore
द डिस्कवरी ऑफ इण्डिया~The Discovery of India | जवाहरलाल नेहरू~Jawaharlal Nehru
माई एक्सपेरिमेंट्स विद ट्रुथ~My Experiments with Truth | महात्मा गाँधी~Mahatma Gandhi
विंग्स ऑफ फायर~Wings of Fire | ए० पी० जे० अब्दुल कलाम~A. P. J. Abdul Kalam
अर्थशास्त्र~Arthashastra | कौटिल्य (चाणक्य)~Kautilya (Chanakya)
राजतरंगिणी~Rajatarangini | कल्हण~Kalhana
हर्षचरित~Harshacharita | बाणभट्ट~Banabhatta
अभिज्ञानशाकुन्तलम्~Abhijnanashakuntalam | कालिदास~Kalidasa
मेघदूतम्~Meghaduta | कालिदास~Kalidasa
मृच्छकटिकम्~Mrichchhakatika | शूद्रक~Shudraka
मुद्राराक्षस~Mudrarakshasa | विशाखदत्त~Vishakhadatta
अष्टाध्यायी~Ashtadhyayi | पाणिनि~Panini
पंचतन्त्र~Panchatantra | विष्णु शर्मा~Vishnu Sharma
गीतगोविन्द~Gita Govinda | जयदेव~Jayadeva
अकबरनामा~Akbarnama | अबुल फजल~Abul Fazl
बाबरनामा~Baburnama | बाबर~Babur
इण्डिका~Indica | मेगस्थनीज~Megasthenes
किताब-उल-हिन्द~Kitab-ul-Hind | अलबरूनी~Al-Biruni
गुलिवर्स ट्रैवल्स~Gulliver's Travels | जोनाथन स्विफ्ट~Jonathan Swift
एनिमल फार्म~Animal Farm | जॉर्ज ऑरवेल~George Orwell
दास कैपिटल~Das Kapital | कार्ल मार्क्स~Karl Marx
ओरिजिन ऑफ स्पीशीज़~On the Origin of Species | चार्ल्स डार्विन~Charles Darwin
ए ब्रीफ हिस्ट्री ऑफ टाइम~A Brief History of Time | स्टीफन हॉकिंग~Stephen Hawking
द गॉड ऑफ स्मॉल थिंग्स~The God of Small Things | अरुंधति रॉय~Arundhati Roy
मालगुडी डेज़~Malgudi Days | आर० के० नारायण~R. K. Narayan
ट्रेन टू पाकिस्तान~Train to Pakistan | खुशवन्त सिंह~Khushwant Singh
मिडनाइट्स चिल्ड्रन~Midnight's Children | सलमान रुश्दी~Salman Rushdie
पैराडाइज़ लॉस्ट~Paradise Lost | जॉन मिल्टन~John Milton` }),
M({ f: '{k} के रचयिता कौन हैं?~Who is the author of {k}?', rows: `
बुद्धचरितम्~Buddhacharita | अश्वघोष~Ashvaghosha
रघुवंशम्~Raghuvamsha | कालिदास~Kalidasa
कुमारसम्भवम्~Kumarasambhava | कालिदास~Kalidasa
कादम्बरी~Kadambari | बाणभट्ट~Banabhatta
किरातार्जुनीयम्~Kiratarjuniya | भारवि~Bharavi
शिशुपालवधम्~Shishupalavadha | माघ~Magha` }),
Q(`
'द एक्सीडेण्टल प्राइम मिनिस्टर' पुस्तक के लेखक कौन हैं?~Who is the author of 'The Accidental Prime Minister'? | संजय बारू~Sanjaya Baru | कुलदीप नैयर~Kuldip Nayar | करन थापर~Karan Thapar | अरुण शौरी~Arun Shourie
'एग्ज़ाम वॉरियर्स' पुस्तक के लेखक कौन हैं?~Who is the author of 'Exam Warriors'? | नरेन्द्र मोदी~Narendra Modi | प्रणब मुखर्जी~Pranab Mukherjee | अमिताभ घोष~Amitav Ghosh | ए० पी० जे० अब्दुल कलाम~A. P. J. Abdul Kalam
`)));

/* ============ 6. AWARDS ============ */
SUP.def('gk.awards', 'gk', 'पुरस्कार एवं सम्मान', 'Awards & Honours', cat(
M({ f: '{k} किस क्षेत्र में दिया जाता है?~In which field is the {k} given?', r: '{v} के क्षेत्र में कौन-सा पुरस्कार दिया जाता है?~Which award is given in the field of {v}?', rows: `
ज्ञानपीठ पुरस्कार~Jnanpith Award | भारतीय भाषाओं का साहित्य~Literature in Indian languages
दादासाहब फाल्के पुरस्कार~Dadasaheb Phalke Award | भारतीय सिनेमा~Indian cinema
अर्जुन पुरस्कार~Arjuna Award | खेल (उत्कृष्ट प्रदर्शन)~Sports (outstanding performance)
द्रोणाचार्य पुरस्कार~Dronacharya Award | खेल प्रशिक्षण (कोचिंग)~Sports coaching
रैमन मैग्सेसे पुरस्कार~Ramon Magsaysay Award | एशिया में लोकसेवा~Public service in Asia
बुकर पुरस्कार~Booker Prize | अंग्रेजी कथा साहित्य~Fiction in English
पुलित्जर पुरस्कार~Pulitzer Prize | पत्रकारिता एवं साहित्य (अमेरिका)~Journalism and letters (USA)
अबेल पुरस्कार~Abel Prize | गणित~Mathematics
ट्यूरिंग पुरस्कार~Turing Award | कम्प्यूटर विज्ञान~Computer science
ऑस्कर पुरस्कार~Academy (Oscar) Award | फिल्म~Films
कलिंग पुरस्कार (यूनेस्को)~Kalinga Prize (UNESCO) | विज्ञान का लोकप्रियकरण~Popularisation of science
शान्ति स्वरूप भटनागर पुरस्कार~Shanti Swarup Bhatnagar Prize | विज्ञान एवं प्रौद्योगिकी~Science and technology
परमवीर चक्र~Param Vir Chakra | युद्धकाल में सर्वोच्च वीरता~Highest gallantry in wartime
अशोक चक्र~Ashoka Chakra | शान्तिकाल में सर्वोच्च वीरता~Highest gallantry in peacetime
सरस्वती सम्मान~Saraswati Samman | भारतीय भाषाओं में साहित्य~Literature in Indian languages` }),
M({ f: '{k} ने नोबेल पुरस्कार किस क्षेत्र में प्राप्त किया?~In which field did {k} win the Nobel Prize?', r: '{v} के क्षेत्र में नोबेल पुरस्कार भारत से जुड़े किस व्यक्ति को मिला?~Which India-linked person won the Nobel Prize in {v}?', rows: `
रवीन्द्रनाथ टैगोर~Rabindranath Tagore | साहित्य~Literature
सी० वी० रमन~C. V. Raman | भौतिकी~Physics
हरगोबिन्द खुराना~Har Gobind Khorana | चिकित्सा (शरीर क्रिया विज्ञान)~Physiology or Medicine
मदर टेरेसा~Mother Teresa | शान्ति~Peace
अमर्त्य सेन~Amartya Sen | अर्थशास्त्र~Economics
वेंकटरमन रामकृष्णन~Venkatraman Ramakrishnan | रसायन विज्ञान~Chemistry
कैलाश सत्यार्थी~Kailash Satyarthi | शान्ति~Peace
अभिजीत बनर्जी~Abhijit Banerjee | अर्थशास्त्र~Economics` }),
M({ f: '{k} को भारत रत्न किस वर्ष प्रदान किया गया?~In which year was {k} awarded the Bharat Ratna?', r: '{v} में भारत रत्न से किसे सम्मानित किया गया?~Who was awarded the Bharat Ratna in {v}?', rows: `
डॉ० एस० राधाकृष्णन~Dr S. Radhakrishnan | 1954
जवाहरलाल नेहरू~Jawaharlal Nehru | 1955
डॉ० राजेन्द्र प्रसाद~Dr Rajendra Prasad | 1962
डॉ० भीमराव अम्बेडकर~Dr B. R. Ambedkar | 1990
सरदार वल्लभभाई पटेल~Sardar Vallabhbhai Patel | 1991
सत्यजित राय~Satyajit Ray | 1992
डॉ० ए० पी० जे० अब्दुल कलाम~Dr A. P. J. Abdul Kalam | 1997
लता मंगेशकर~Lata Mangeshkar | 2001
सचिन तेंदुलकर~Sachin Tendulkar | 2014
अटल बिहारी वाजपेयी~Atal Bihari Vajpayee | 2015
प्रणब मुखर्जी~Pranab Mukherjee | 2019
एम० एस० स्वामीनाथन~M. S. Swaminathan | 2024` }),
Q(`
ज्ञानपीठ पुरस्कार पाने वाले प्रथम साहित्यकार कौन थे?~Who was the first recipient of the Jnanpith Award? | जी० शंकर कुरुप~G. Sankara Kurup | हरिवंशराय बच्चन~Harivansh Rai Bachchan | महादेवी वर्मा~Mahadevi Verma | अमृता प्रीतम~Amrita Pritam
दादासाहब फाल्के पुरस्कार पाने वाली प्रथम कलाकार कौन थीं?~Who was the first recipient of the Dadasaheb Phalke Award? | देविका रानी~Devika Rani | नर्गिस~Nargis | मधुबाला~Madhubala | लता मंगेशकर~Lata Mangeshkar
'खेल रत्न' पुरस्कार का वर्तमान नाम क्या है?~What is the present name of the Khel Ratna Award? | मेजर ध्यानचन्द खेल रत्न पुरस्कार~Major Dhyan Chand Khel Ratna Award | राजीव गाँधी खेल रत्न पुरस्कार~Rajiv Gandhi Khel Ratna Award | अर्जुन खेल रत्न पुरस्कार~Arjuna Khel Ratna Award | सरदार पटेल खेल रत्न पुरस्कार~Sardar Patel Khel Ratna Award
भारत का सर्वोच्च नागरिक सम्मान कौन-सा है?~Which is India's highest civilian honour? | भारत रत्न~Bharat Ratna | पद्म विभूषण~Padma Vibhushan | पद्म भूषण~Padma Bhushan | पद्म श्री~Padma Shri
पद्म पुरस्कारों का सही आरोही क्रम (निम्न से उच्च) है—~Which is the correct ascending order of the Padma awards? | पद्म श्री, पद्म भूषण, पद्म विभूषण~Padma Shri, Padma Bhushan, Padma Vibhushan | पद्म भूषण, पद्म श्री, पद्म विभूषण~Padma Bhushan, Padma Shri, Padma Vibhushan | पद्म विभूषण, पद्म भूषण, पद्म श्री~Padma Vibhushan, Padma Bhushan, Padma Shri | पद्म श्री, पद्म विभूषण, पद्म भूषण~Padma Shri, Padma Vibhushan, Padma Bhushan
`)));

/* ============ 7. SPORTS ============ */
SUP.def('gk.sports', 'gk', 'खेल-कूद', 'Sports', cat(
M({ f: '{k} किस खेल से संबंधित है?~{k} is related to which sport?', r: '{v} खेल से कौन-सी ट्रॉफी/शब्दावली संबंधित है?~Which trophy/term is related to {v}?', rows: `
रणजी ट्रॉफी~Ranji Trophy | क्रिकेट~Cricket
दलीप ट्रॉफी~Duleep Trophy | क्रिकेट~Cricket
डूरण्ड कप~Durand Cup | फुटबॉल~Football
सन्तोष ट्रॉफी~Santosh Trophy | फुटबॉल~Football
थॉमस कप~Thomas Cup | बैडमिण्टन~Badminton
डेविस कप~Davis Cup | टेनिस~Tennis
बीटन कप~Beighton Cup | हॉकी~Hockey
राइडर कप~Ryder Cup | गोल्फ~Golf
बुली~Bully | हॉकी~Hockey
गूगली~Googly | क्रिकेट~Cricket
गैम्बिट~Gambit | शतरंज~Chess
ड्यूस~Deuce | टेनिस~Tennis
बर्डी~Birdie | गोल्फ~Golf
स्क्रम~Scrum | रग्बी~Rugby
स्लैम डंक~Slam dunk | बास्केटबॉल~Basketball
पोमेल हॉर्स~Pommel horse | जिम्नास्टिक्स~Gymnastics
पक~Puck | आइस हॉकी~Ice hockey` }),
M({ f: '{k} का सम्बन्ध किस खेल से है?~{k} is associated with which sport?', r: '{v} खेल से कौन-सा खिलाड़ी संबंधित है?~Which player is associated with {v}?', rows: `
सचिन तेंदुलकर~Sachin Tendulkar | क्रिकेट~Cricket
पी० वी० सिन्धु~P. V. Sindhu | बैडमिण्टन~Badminton
मैरी कॉम~Mary Kom | मुक्केबाजी~Boxing
नीरज चोपड़ा~Neeraj Chopra | भाला फेंक~Javelin throw
अभिनव बिन्द्रा~Abhinav Bindra | निशानेबाजी~Shooting
सुनील छेत्री~Sunil Chhetri | फुटबॉल~Football
विश्वनाथन आनन्द~Viswanathan Anand | शतरंज~Chess
सानिया मिर्जा~Sania Mirza | टेनिस~Tennis
ध्यानचन्द~Dhyan Chand | हॉकी~Hockey
मिल्खा सिंह~Milkha Singh | एथलेटिक्स (धावक)~Athletics (sprinter)
मीराबाई चानू~Mirabai Chanu | भारोत्तोलन~Weightlifting
सुशील कुमार~Sushil Kumar | कुश्ती~Wrestling
सौरभ चौधरी~Saurabh Chaudhary | निशानेबाजी~Shooting
डी० गुकेश~D. Gukesh | शतरंज~Chess` }),
M({ f: '{k} का आयोजन किस देश/नगर में हुआ?~Where was {k} held?', r: '{v} में किस आयोजन का आतिथ्य हुआ?~Which event was hosted by {v}?', rows: `
ओलम्पिक 2008~Olympics 2008 | बीजिंग~Beijing
ओलम्पिक 2012~Olympics 2012 | लन्दन~London
ओलम्पिक 2016~Olympics 2016 | रियो डी जेनेरियो~Rio de Janeiro
ओलम्पिक 2020 (2021 में आयोजित)~Olympics 2020 (held in 2021) | टोक्यो~Tokyo
ओलम्पिक 2024~Olympics 2024 | पेरिस~Paris
राष्ट्रमण्डल खेल 2010~Commonwealth Games 2010 | नई दिल्ली~New Delhi
राष्ट्रमण्डल खेल 2018~Commonwealth Games 2018 | गोल्ड कोस्ट~Gold Coast
राष्ट्रमण्डल खेल 2022~Commonwealth Games 2022 | बर्मिंघम~Birmingham
फीफा विश्व कप 2018~FIFA World Cup 2018 | रूस~Russia
फीफा विश्व कप 2022~FIFA World Cup 2022 | कतर~Qatar
एशियाई खेल 2018~Asian Games 2018 | जकार्ता (इण्डोनेशिया)~Jakarta (Indonesia)` }),
M({ f: '{k} में एक टीम में कितने खिलाड़ी (मैदान पर) होते हैं?~How many players from one team play at a time in {k}?', rows: `
क्रिकेट~Cricket | 11
हॉकी~Hockey | 11
बास्केटबॉल~Basketball | 5
वॉलीबॉल~Volleyball | 6
कबड्डी~Kabaddi | 7
पोलो~Polo | 4` }),
M({ f: '{k} खेल का स्थल (स्टेडियम) किस नगर में है?~In which city is {k} located?', r: '{v} में कौन-सा स्टेडियम स्थित है?~Which stadium is located in {v}?', rows: `
ईडन गार्डन्स~Eden Gardens | कोलकाता~Kolkata
वानखेड़े स्टेडियम~Wankhede Stadium | मुम्बई~Mumbai
एम० ए० चिदम्बरम स्टेडियम (चेपॉक)~M. A. Chidambaram Stadium (Chepauk) | चेन्नई~Chennai
एम० चिन्नास्वामी स्टेडियम~M. Chinnaswamy Stadium | बेंगलुरु~Bengaluru
नरेन्द्र मोदी स्टेडियम (मोटेरा)~Narendra Modi Stadium (Motera) | अहमदाबाद~Ahmedabad
ग्रीन पार्क स्टेडियम~Green Park Stadium | कानपुर~Kanpur
एकाना स्टेडियम~Ekana Stadium | लखनऊ~Lucknow` }),
Q(`
पेरिस ओलम्पिक 2024 में भारत ने कुल कितने पदक जीते?~How many medals did India win at the Paris Olympics 2024? | 6 | 7 | 5 | 8
टोक्यो ओलम्पिक 2020 में भाला फेंक में भारत के लिए स्वर्ण पदक किसने जीता?~Who won India's gold medal in javelin throw at the Tokyo Olympics? | नीरज चोपड़ा~Neeraj Chopra | अभिनव बिन्द्रा~Abhinav Bindra | बजरंग पुनिया~Bajrang Punia | रवि दहिया~Ravi Dahiya
भारत ने पुरुष क्रिकेट का पहला विश्व कप (50 ओवर) किस वर्ष जीता?~In which year did India win its first men's ODI Cricket World Cup? | 1983 | 1975 | 1987 | 2011
भारत ने टी-20 क्रिकेट विश्व कप 2024 का फाइनल किस देश को हराकर जीता?~Which team did India beat in the 2024 T20 World Cup final? | दक्षिण अफ्रीका~South Africa | इंग्लैण्ड~England | ऑस्ट्रेलिया~Australia | न्यूज़ीलैण्ड~New Zealand
ओलम्पिक खेलों में व्यक्तिगत स्वर्ण जीतने वाले प्रथम भारतीय कौन हैं?~Who was the first Indian to win an individual Olympic gold medal? | अभिनव बिन्द्रा~Abhinav Bindra | सुशील कुमार~Sushil Kumar | विजेन्दर सिंह~Vijender Singh | राज्यवर्धन सिंह राठौड़~Rajyavardhan Singh Rathore
ओलम्पिक के छल्लों (रिंग) की संख्या कितनी होती है?~How many rings are there in the Olympic symbol? | 5 | 4 | 6 | 7
ओलम्पिक खेल प्रत्येक कितने वर्ष बाद आयोजित होते हैं?~After how many years are the Olympic Games held? | 4 | 2 | 3 | 5
राष्ट्रीय खेल हॉकी के जादूगर किसे कहा जाता है?~Who is known as the 'Wizard of Hockey'? | ध्यानचन्द~Dhyan Chand | बलबीर सिंह~Balbir Singh | धनराज पिल्लै~Dhanraj Pillay | मेजर रूप सिंह~Roop Singh
शतरंज में विश्व चैम्पियन बनने वाले सबसे कम उम्र के खिलाड़ी (2024) कौन बने?~Who became the youngest world chess champion in 2024? | डी० गुकेश~D. Gukesh | आर० प्रज्ञानानन्द~R. Praggnanandhaa | विश्वनाथन आनन्द~Viswanathan Anand | मैग्नस कार्लसन~Magnus Carlsen
`)));

/* ============ 8. CULTURE, ART & HERITAGE ============ */
SUP.def('gk.culture', 'gk', 'भारतीय संस्कृति एवं कला', 'Indian Culture & Art', cat(
M({ f: '{k} किस राज्य/क्षेत्र का नृत्य है?~{k} belongs to which State/region?', r: '{v} का प्रमुख नृत्य कौन-सा है?~Which is a famous dance of {v}?', rows: `
कथकली~Kathakali | केरल~Kerala
भरतनाट्यम~Bharatanatyam | तमिलनाडु~Tamil Nadu
कुचिपुड़ी~Kuchipudi | आन्ध्र प्रदेश~Andhra Pradesh
ओडिसी~Odissi | ओडिशा~Odisha
मणिपुरी~Manipuri | मणिपुर~Manipur
मोहिनीअट्टम~Mohiniyattam | केरल~Kerala
सत्रिया~Sattriya | असम~Assam
गरबा~Garba | गुजरात~Gujarat
बिहू~Bihu | असम~Assam
भाँगड़ा~Bhangra | पंजाब~Punjab
घूमर~Ghoomar | राजस्थान~Rajasthan
लावणी~Lavani | महाराष्ट्र~Maharashtra
यक्षगान~Yakshagana | कर्नाटक~Karnataka
चरकुला~Charkula | उत्तर प्रदेश (ब्रज)~Uttar Pradesh (Braj)
पण्डवानी~Pandavani | छत्तीसगढ़~Chhattisgarh` }),
M({ f: '{k} किस वाद्य/कला के लिए प्रसिद्ध हैं?~For which instrument/art is {k} famous?', r: '{v} के वादन/कला में कौन प्रसिद्ध हैं?~Who is famous in {v}?', rows: `
पण्डित रविशंकर~Pt Ravi Shankar | सितार~Sitar
उस्ताद अमजद अली खाँ~Ustad Amjad Ali Khan | सरोद~Sarod
उस्ताद जाकिर हुसैन~Ustad Zakir Hussain | तबला~Tabla
पण्डित शिवकुमार शर्मा~Pt Shivkumar Sharma | सन्तूर~Santoor
उस्ताद बिस्मिल्ला खाँ~Ustad Bismillah Khan | शहनाई~Shehnai
पण्डित हरिप्रसाद चौरसिया~Pt Hariprasad Chaurasia | बाँसुरी~Flute
पण्डित रामनारायण~Pt Ram Narayan | सारंगी~Sarangi` }),
M({ f: '{k} किस राज्य की प्रसिद्ध चित्रकला/लोककला है?~{k} is the folk art/painting of which State?', r: '{v} की प्रसिद्ध चित्रकला कौन-सी है?~Which painting style is famous in {v}?', rows: `
मधुबनी~Madhubani | बिहार~Bihar
वारली~Warli | महाराष्ट्र~Maharashtra
पट्टचित्र~Pattachitra | ओडिशा~Odisha
कलमकारी~Kalamkari | आन्ध्र प्रदेश~Andhra Pradesh
तंजौर चित्रकला~Tanjore painting | तमिलनाडु~Tamil Nadu
फड़ चित्रकला~Phad painting | राजस्थान~Rajasthan
गोण्ड चित्रकला~Gond painting | मध्य प्रदेश~Madhya Pradesh` }),
M({ f: '{k} कहाँ स्थित है?~Where is {k} located?', r: '{v} में कौन-सा स्मारक/मन्दिर स्थित है?~Which monument/temple is located in {v}?', rows: `
कोणार्क सूर्य मन्दिर~Konark Sun Temple | ओडिशा~Odisha
खजुराहो के मन्दिर~Khajuraho temples | मध्य प्रदेश~Madhya Pradesh
साँची स्तूप~Sanchi Stupa | मध्य प्रदेश~Madhya Pradesh
मीनाक्षी मन्दिर~Meenakshi Temple | मदुरै (तमिलनाडु)~Madurai (Tamil Nadu)
बृहदेश्वर मन्दिर~Brihadeeswara Temple | तंजावुर (तमिलनाडु)~Thanjavur (Tamil Nadu)
सोमनाथ मन्दिर~Somnath Temple | गुजरात~Gujarat
स्वर्ण मन्दिर (हरमन्दिर साहिब)~Golden Temple (Harmandir Sahib) | अमृतसर~Amritsar
जगन्नाथ मन्दिर~Jagannath Temple | पुरी (ओडिशा)~Puri (Odisha)
हम्पी~Hampi | कर्नाटक~Karnataka
महाबोधि मन्दिर~Mahabodhi Temple | बोधगया (बिहार)~Bodh Gaya (Bihar)
काजीरंगा राष्ट्रीय उद्यान~Kaziranga National Park | असम~Assam
जन्तर-मन्तर (वेधशाला)~Jantar Mantar (observatory) | जयपुर~Jaipur
कैलाश मन्दिर~Kailasa Temple | एलोरा (महाराष्ट्र)~Ellora (Maharashtra)` }),
M({ f: '{k} किस राज्य का प्रमुख पर्व है?~{k} is a major festival of which State?', r: '{v} का प्रमुख पर्व कौन-सा है?~Which is a major festival of {v}?', rows: `
ओणम~Onam | केरल~Kerala
पोंगल~Pongal | तमिलनाडु~Tamil Nadu
बैसाखी~Baisakhi | पंजाब~Punjab
दुर्गा पूजा~Durga Puja | पश्चिम बंगाल~West Bengal
गणेश चतुर्थी~Ganesh Chaturthi | महाराष्ट्र~Maharashtra
रथ यात्रा~Rath Yatra | ओडिशा (पुरी)~Odisha (Puri)
हॉर्नबिल महोत्सव~Hornbill Festival | नागालैण्ड~Nagaland
लोहड़ी~Lohri | पंजाब~Punjab` }),
Q(`
'कुम्भ मेला' को यूनेस्को की अमूर्त सांस्कृतिक विरासत सूची में किस वर्ष शामिल किया गया?~In which year was the Kumbh Mela inscribed on UNESCO's Intangible Cultural Heritage list? | 2017 | 2013 | 2010 | 2020
मिर्जापुर किस लोकगायन शैली के लिए प्रसिद्ध है?~Mirzapur is famous for which folk-singing style? | कजरी~Kajri | नकटा~Nakta | पँवारा~Pawara | बिरहा~Birha
भारत में कितने शास्त्रीय नृत्य संगीत नाटक अकादमी द्वारा मान्यता प्राप्त हैं?~How many classical dances are recognised by the Sangeet Natak Akademi? | 8 | 6 | 7 | 10
भारत का सबसे प्राचीन वेद कौन-सा है?~Which is the oldest Veda of India? | ऋग्वेद~Rigveda | यजुर्वेद~Yajurveda | सामवेद~Samaveda | अथर्ववेद~Atharvaveda
ताजमहल की गणना किसमें की जाती है?~The Taj Mahal is included in— | यूनेस्को विश्व धरोहर स्थल~UNESCO World Heritage Sites | सात आश्चर्यों की प्राचीन सूची~Ancient Seven Wonders | राष्ट्रीय उद्यान~National Parks | अभयारण्य~Sanctuaries
कथक नृत्य का सम्बन्ध मुख्यतः किस क्षेत्र से है?~Kathak is chiefly associated with which region? | उत्तर भारत~North India | दक्षिण भारत~South India | पूर्वोत्तर भारत~North-East India | पश्चिमी भारत (गुजरात)~Western India (Gujarat)
`)));

})(typeof window !== 'undefined' ? window : globalThis);
