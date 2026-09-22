/* Information Technology + Life Skills/Management: bilingual banks. */
(function (g) {
'use strict';
const SUP = g.SUP, M = SUP.mapItems, Q = SUP.mcqItems, cat = (...a) => [].concat(...a);
const I = (id, hi, en, items) => SUP.def(id, 'it', hi, en, items);
const L = (id, hi, en, items) => SUP.def(id, 'life', hi, en, items);

/* ================= INFORMATION TECHNOLOGY ================= */
I('it.basics', 'कम्प्यूटर की मूल बातें', 'Computer basics', cat(
M({ f: '{k} है—~{k} is—', r: '{v} किसे कहते हैं?~What is {v} called?', rows: `
CPU~CPU | कम्प्यूटर का मस्तिष्क (केन्द्रीय संसाधन इकाई)~the "brain" of the computer (Central Processing Unit)
RAM~RAM | अस्थायी स्मृति (डेटा बन्द होने पर मिट जाता है)~temporary memory (data is lost when powered off)
ROM~ROM | स्थायी स्मृति (केवल पठनीय)~permanent, read-only memory
कीबोर्ड, माउस, स्कैनर~Keyboard, mouse, scanner | इनपुट युक्तियाँ~input devices
मॉनीटर, प्रिण्टर, स्पीकर~Monitor, printer, speaker | आउटपुट युक्तियाँ~output devices
हार्ड डिस्क, पेन ड्राइव~Hard disk, pen drive | द्वितीयक (स्थायी) संचयन युक्तियाँ~secondary (permanent) storage devices
ऑपरेटिंग सिस्टम~Operating system | हार्डवेयर एवं यूजर के बीच संपर्क कराने वाला मुख्य सॉफ्टवेयर~the main software that lets the user interact with hardware
एप्लिकेशन सॉफ्टवेयर~Application software | विशिष्ट कार्य हेतु उपयोगकर्ता द्वारा प्रयुक्त सॉफ्टवेयर~software used by the user for a specific task` }),
Q(`
कम्प्यूटर की कार्यप्रणाली का सही क्रम है—~The correct working cycle of a computer is—|इनपुट → प्रक्रमण → आउटपुट~Input → Processing → Output|आउटपुट → इनपुट → प्रक्रमण~Output → Input → Processing|प्रक्रमण → आउटपुट → इनपुट~Processing → Output → Input|इनपुट → आउटपुट → प्रक्रमण~Input → Output → Processing
1 बाइट में कितने बिट होते हैं?~How many bits are there in 1 byte?|8|4|16|2
'बिट' शब्द का पूर्ण रूप है—~The full form of 'bit' is—|बाइनरी डिजिट~binary digit|बाइनरी टर्म~binary term|बाइट इनफॉर्मेशन~byte information|बेसिक इनपुट टर्म~basic input term
हार्डवेयर का अर्थ है—~Hardware refers to—|कम्प्यूटर के भौतिक/स्पर्शनीय भाग~the physical, touchable parts of a computer|प्रोग्राम एवं निर्देश~programs and instructions|इण्टरनेट सेवाएँ~internet services|डेटा~data only
सॉफ्टवेयर का अर्थ है—~Software refers to—|प्रोग्रामों एवं निर्देशों का समूह~a set of programs and instructions|भौतिक कल-पुर्जे~physical parts|कीबोर्ड~keyboard|मॉनीटर~monitor
निम्नलिखित में कौन-सी प्राथमिक (मुख्य) मेमोरी है?~Which of the following is primary memory?|रैम (RAM)~RAM|हार्ड डिस्क~Hard disk|पेन ड्राइव~Pen drive|सीडी~CD
सिस्टम को चालू (बूट) करते समय सर्वप्रथम कौन-सा सॉफ्टवेयर सक्रिय होता है?~When the system boots, which software becomes active first?|ऑपरेटिंग सिस्टम~the operating system|वर्ड प्रोसेसर~word processor|ब्राउज़र~browser|गेम~a game
फाइल का 'विस्तार' (extension) क्या दर्शाता है?~What does a file's 'extension' indicate?|फाइल का प्रकार~the type of the file|फाइल का आकार~the size of the file|फाइल की तिथि~the date of the file|फाइल का स्वामी~the owner of the file
`)));

I('it.fullform', 'संक्षिप्त रूप (Full Forms)', 'Full forms', cat(
M({ f: '{k} का पूर्ण रूप है—~The full form of {k} is—', rows: `
CPU~CPU | Central Processing Unit
RAM~RAM | Random Access Memory
ROM~ROM | Read Only Memory
URL~URL | Uniform Resource Locator
HTTP~HTTP | Hyper Text Transfer Protocol
HTML~HTML | Hyper Text Markup Language
USB~USB | Universal Serial Bus
LAN~LAN | Local Area Network
WAN~WAN | Wide Area Network
WWW~WWW | World Wide Web
PDF~PDF | Portable Document Format
GUI~GUI | Graphical User Interface
CD-ROM~CD-ROM | Compact Disc Read Only Memory
DVD~DVD | Digital Versatile Disc
GB~GB | Gigabyte
MB~MB | Megabyte
KB~KB | Kilobyte
IP (address)~IP (address) | Internet Protocol
WiFi~WiFi | Wireless Fidelity
SIM~SIM | Subscriber Identity Module
ATM~ATM | Automated Teller Machine
OTP~OTP | One Time Password
ICT~ICT | Information and Communication Technology
OER~OER | Open Educational Resources
VLE~VLE | Virtual Learning Environment
DIKSHA~DIKSHA | Digital Infrastructure for Knowledge Sharing
SWAYAM~SWAYAM | Study Webs of Active Learning for Young Aspiring Minds
NCERT~NCERT | National Council of Educational Research and Training
NIOS~NIOS | National Institute of Open Schooling` })));

I('it.internet', 'इण्टरनेट एवं संचार', 'Internet & communication', cat(
M({ f: '{k} है—~{k} is—', r: '{v} किसे कहा जाता है?~What is {v} called?', rows: `
वेब ब्राउज़र~a web browser | इण्टरनेट पर वेबसाइट देखने का सॉफ्टवेयर~software used to view websites on the internet
सर्च इंजन~a search engine | इण्टरनेट पर जानकारी खोजने वाला उपकरण~a tool for finding information on the internet
ई-मेल~e-mail | इलेक्ट्रॉनिक माध्यम से संदेश भेजना~sending messages electronically
वेबसाइट~a website | परस्पर सम्बद्ध वेब पृष्ठों का समूह~a collection of related web pages
हाइपरलिंक~a hyperlink | एक वेब पृष्ठ से दूसरे पृष्ठ पर जाने की कड़ी~a link that takes you from one page to another
वाई-फाई~Wi-Fi | बिना तार के इण्टरनेट संपर्क की सुविधा~a facility for wireless internet connectivity
डाउनलोड~download | इण्टरनेट से फाइल कम्प्यूटर में लाना~bringing a file from the internet to one's computer
अपलोड~upload | कम्प्यूटर से फाइल इण्टरनेट पर भेजना~sending a file from a computer to the internet` }),
Q(`
स्पैम (Spam) किसे कहते हैं?~What is spam?|अवांछित/अनचाहे संदेश~unwanted, unsolicited messages|वांछित संदेश~desired messages|एक प्रोटोकॉल~a protocol|एक वायरस-रहित संदेश~a virus-free message
वेब पर 'गूगल' (Google) किसका उदाहरण है?~Google is an example of—|एक सर्च इंजन~a search engine|एक ऑपरेटिंग सिस्टम~an operating system|एक वायरस~a virus|एक हार्डवेयर~hardware
कम्प्यूटर वायरस से बचाव के लिए प्रयोग किया जाता है—~To protect against computer viruses one uses—|एण्टीवायरस सॉफ्टवेयर~antivirus software|वर्ड प्रोसेसर~a word processor|स्प्रेडशीट~a spreadsheet|प्रिण्टर~a printer
सुरक्षित ऑनलाइन व्यवहार में शामिल है—~Safe online behaviour includes—|अनजान लिंक न खोलना और पासवर्ड गोपनीय रखना~not opening unknown links and keeping passwords private|पासवर्ड सबको बताना~sharing passwords with everyone|हर लिंक खोलना~clicking every link|OTP सबको भेजना~sharing OTP with everyone
ई-मेल पते में '@' चिह्न के बाद क्या आता है?~In an e-mail address, what follows the '@' symbol?|डोमेन नाम~the domain name|उपयोगकर्ता का नाम~the username|पासवर्ड~the password|फाइल नाम~the file name
`)));

I('it.ict', 'शिक्षा में सूचना तकनीकी (ICT)', 'ICT in education', cat(
M({ f: '{k} किससे सम्बन्धित है?~{k} is related to—', r: '{v} से कौन-सा मंच/कार्यक्रम सम्बद्ध है?~Which platform/programme is related to {v}?', rows: `
दीक्षा (DIKSHA)~DIKSHA | शिक्षकों-विद्यार्थियों के लिए डिजिटल पाठ्य सामग्री का राष्ट्रीय मंच~a national digital content platform for teachers and students
स्वयं (SWAYAM)~SWAYAM | मुफ्त ऑनलाइन पाठ्यक्रम (MOOC) मंच~a free online course (MOOC) platform
ई-पाठशाला~e-Pathshala | NCERT की पाठ्यपुस्तकों एवं सामग्री का डिजिटल मंच~a digital platform for NCERT textbooks and material
स्वयंप्रभा (SWAYAM PRABHA)~SWAYAM PRABHA | शैक्षिक टीवी चैनलों का समूह~a group of educational DTH TV channels
राष्ट्रीय डिजिटल पुस्तकालय (NDL)~National Digital Library | शैक्षिक संसाधनों का विशाल डिजिटल संग्रह~a vast digital collection of educational resources
पीएम ई-विद्या~PM eVIDYA | कोविड काल में डिजिटल/ऑनलाइन शिक्षा हेतु एकीकृत पहल~an integrated initiative for digital/online education during COVID` }),
Q(`
ओ० ई० आर० (OER) का अर्थ है—~OER refers to—|मुफ्त उपलब्ध खुले शैक्षिक संसाधन~freely available open educational resources|केवल भुगतान वाले पाठ्यक्रम~only paid courses|केवल मुद्रित पुस्तकें~only printed books|केवल परीक्षा प्रश्नपत्र~only exam papers
कक्षा-शिक्षण में ICT के उपयोग का लाभ है—~The benefit of using ICT in classroom teaching is—|पाठ को रोचक, दृश्य-श्रव्य एवं सुगम बनाना~making lessons interesting, audio-visual and easier|समय नष्ट करना~wasting time|केवल मनोरंजन~mere entertainment|पढ़ाई रोकना~stopping studies
'ब्लेण्डेड लर्निंग' (Blended learning) का अर्थ है—~'Blended learning' means—|पारम्परिक कक्षा-शिक्षण और डिजिटल शिक्षण का सम्मिश्रण~a mix of traditional classroom and digital teaching|केवल ऑनलाइन शिक्षण~only online teaching|केवल पुस्तक पढ़ना~only reading books|कोई शिक्षण नहीं~no teaching
शिक्षण में उपयोगी ऐप्स का उदाहरण है—~An example of a useful teaching app is—|दीक्षा ऐप~the DIKSHA app|गेमिंग ऐप~a gaming app|शॉपिंग ऐप~a shopping app|टैक्सी बुकिंग ऐप~a taxi-booking app
प्रोजेक्टर/स्मार्ट बोर्ड के प्रयोग से शिक्षण में—~Using a projector/smart board in teaching—|दृश्य सामग्री के माध्यम से समझ बढ़ती है~understanding improves through visual material|समय बर्बाद होता है~time is wasted|कोई लाभ नहीं~there is no benefit|पढ़ाई बाधित होती है~teaching is disrupted
`)));

I('it.office', 'कार्यालय सॉफ्टवेयर एवं डिजिटल उपकरण', 'Office software & digital tools', cat(
M({ f: '{k} का मुख्य उपयोग है—~The main use of {k} is—', r: '{v} के लिए कौन-सा सॉफ्टवेयर उपयोगी है?~Which software is useful for {v}?', rows: `
वर्ड प्रोसेसर (जैसे MS Word)~a word processor (e.g. MS Word) | दस्तावेज़/पत्र टाइप करना~typing documents/letters
स्प्रेडशीट (जैसे MS Excel)~a spreadsheet (e.g. MS Excel) | सारणी एवं गणनाएँ करना~tables and calculations
प्रेजेण्टेशन सॉफ्टवेयर (जैसे MS PowerPoint)~presentation software (e.g. MS PowerPoint) | स्लाइड द्वारा प्रस्तुतीकरण बनाना~making slide presentations
पीडीएफ रीडर~a PDF reader | PDF फाइलें देखना~viewing PDF files
वीडियो कॉलिंग ऐप्स (जैसे Zoom, Google Meet)~video-calling apps (e.g. Zoom, Google Meet) | ऑनलाइन कक्षाएँ/बैठकें~online classes/meetings` }),
Q(`
स्प्रेडशीट में पंक्ति और स्तम्भ के प्रतिच्छेदन को क्या कहते हैं?~In a spreadsheet, the intersection of a row and column is called a—|सेल~cell|शीट~sheet|फॉर्मूला~formula|फोल्डर~folder
किसी फाइल को कम्प्यूटर में व्यवस्थित रखने वाला स्थान कहलाता है—~The place used to organise files in a computer is called a—|फोल्डर~folder|सेल~cell|पिक्सेल~pixel|ब्राउज़र~browser
डिजिटल दस्तावेज़ को सुरक्षित रखने के लिए क्या आवश्यक है?~What is necessary to keep a digital document secure?|नियमित बैकअप और पासवर्ड सुरक्षा~regular backup and password protection|इसे सार्वजनिक करना~making it public|इसे डिलीट करना~deleting it|कुछ नहीं~nothing
`)));

/* ================= LIFE SKILLS & MANAGEMENT ================= */
L('ls.conduct', 'व्यवसायिक आचरण एवं नीति', 'Professional conduct & ethics', Q(`
शिक्षक के लिए व्यावसायिक आचरण का प्रमुख गुण है—~A key professional-conduct trait for a teacher is—|समय की पाबन्दी, निष्पक्षता एवं ईमानदारी~punctuality, fairness and honesty|पक्षपात~favouritism|लापरवाही~carelessness|अनुशासनहीनता~indiscipline
कक्षा में सभी बच्चों के साथ शिक्षक का व्यवहार कैसा होना चाहिए?~How should a teacher's behaviour be with all children in class?|समान एवं निष्पक्ष~equal and impartial|कुछ के प्रति पक्षपाती~biased towards some|उपेक्षापूर्ण~neglectful|कठोर~harsh with all
पेशेवर नैतिकता (Professional ethics) का अर्थ है—~Professional ethics means—|अपने कार्यक्षेत्र में निर्धारित मूल्यों एवं आचार-संहिता का पालन~following the values and code of conduct set for one's profession|केवल वेतन प्राप्त करना~only drawing a salary|कानून तोड़ना~breaking rules|मनमाना व्यवहार~arbitrary behaviour
गोपनीयता (बच्चों के व्यक्तिगत विवरण की) बनाए रखना क्यों आवश्यक है?~Why is maintaining confidentiality of children's personal details important?|बच्चों के सम्मान एवं विश्वास की रक्षा के लिए~to protect children's dignity and trust|इससे कोई फर्क नहीं पड़ता~it does not matter|समय बचाने के लिए~to save time|अनिवार्य नहीं है~it is not required
शिक्षक की व्यावसायिक जवाबदेही में सम्मिलित है—~A teacher's professional accountability includes—|पाठ्यक्रम पूर्ण करना, मूल्यांकन ईमानदारी से करना~completing the syllabus and assessing honestly|केवल उपस्थिति दर्ज करना~only marking attendance|कक्षा छोड़ देना~leaving class|मनमाना अवकाश लेना~taking arbitrary leave
यदि किसी बच्चे के साथ अन्याय हो रहा हो, तो शिक्षक को—~If a child is being treated unfairly, the teacher should—|हस्तक्षेप कर बालक की सुरक्षा व सहायता करनी चाहिए~intervene to protect and help the child|अनदेखा करना चाहिए~ignore it|उसे और डाँटना चाहिए~scold the child further|कुछ नहीं करना चाहिए~do nothing
शिक्षक का आचरण बच्चों के लिए कैसा होना चाहिए?~A teacher's conduct should be, for children—|एक आदर्श उदाहरण~a role model|उपेक्षणीय~ignorable|अप्रासंगिक~irrelevant|कोई मायने नहीं रखता~of no consequence
`));

L('ls.motiv', 'अभिप्रेरणा (Motivation)', 'Motivation', cat(
M({ f: '{k} किसके प्रतिपादक हैं?~{k} is associated with—', r: '{v} के प्रतिपादक कौन हैं?~Who propounded {v}?', rows: `
आवश्यकता पदानुक्रम सिद्धान्त~the Hierarchy of Needs theory | अब्राहम मैस्लो~Abraham Maslow
मूल प्रवृत्ति सिद्धान्त (अभिप्रेरणा)~the Instinct theory of motivation | विलियम मैक्डूगल~William McDougall
उपलब्धि अभिप्रेरणा सिद्धान्त~Achievement Motivation theory | डेविड मैक्लीलैण्ड~David McClelland
द्वि-कारक सिद्धान्त (हर्ज़बर्ग)~Two-factor theory | फ्रेडरिक हर्ज़बर्ग~Frederick Herzberg
प्रेरक-चालक सिद्धान्त~Drive-reduction theory | क्लार्क हल~Clark Hull` }),
Q(`
अभिप्रेरणा के प्रकार हैं—~The types of motivation are—|आन्तरिक और बाह्य~intrinsic and extrinsic|केवल आन्तरिक~only intrinsic|केवल बाह्य~only extrinsic|कोई प्रकार नहीं~no types
आन्तरिक अभिप्रेरणा का उदाहरण है—~An example of intrinsic motivation is—|कार्य में स्वाभाविक रुचि से सीखना~learning out of natural interest in the task|पुरस्कार के लिए पढ़ना~studying for a reward|दण्ड के भय से पढ़ना~studying out of fear of punishment|अंकों के लिए पढ़ना~studying only for marks
पुरस्कार किस प्रकार की अभिप्रेरणा है?~Reward is what type of motivation?|धनात्मक एवं प्रत्यक्ष~positive and direct|ऋणात्मक~negative|अप्रासंगिक~irrelevant|तटस्थ~neutral
मैस्लो की आवश्यकता पदानुक्रम में सबसे ऊपर की आवश्यकता है—~At the top of Maslow's hierarchy of needs is—|आत्म-सिद्धि (सेल्फ एक्चुअलाइजेशन)~self-actualisation|शारीरिक आवश्यकता~physiological needs|सुरक्षा आवश्यकता~safety needs|सामाजिक आवश्यकता~social needs
कक्षा में बालकों को प्रेरित करने का उपयुक्त तरीका है—~A suitable way to motivate children in class is—|प्रशंसा, प्रोत्साहन एवं सफलता के अवसर देना~praise, encouragement and opportunities for success|भय दिखाना~instilling fear|तुलना करना~comparing them|उपेक्षा करना~ignoring them
भूख, प्यास जैसी अभिप्रेरणाएँ कहलाती हैं—~Motives like hunger and thirst are called—|जैविक (प्राथमिक) अभिप्रेरणा~biological (primary) motives|सामाजिक अभिप्रेरणा~social motives|उपलब्धि अभिप्रेरणा~achievement motivation|सौन्दर्यात्मक अभिप्रेरणा~aesthetic motivation
प्रशंसा एवं मान्यता (सम्मान) कैसी अभिप्रेरणा है?~Praise and recognition are what kind of motive?|सामाजिक अभिप्रेरणा~a social motive|जैविक अभिप्रेरणा~a biological motive|केवल शारीरिक~purely physical|कोई नहीं~none
`)));

L('ls.role', 'शिक्षण की भूमिका (सुविधा प्रदाता, अनुश्रवणकर्ता, नेतृत्वकर्ता आदि)', 'Roles of a teacher (facilitator, monitor, leader, etc.)', Q(`
आधुनिक शिक्षा में शिक्षक की भूमिका मुख्यतः किसकी है?~In modern education, the teacher's role is mainly that of a—|सुविधा प्रदाता (Facilitator)~facilitator|केवल सूचना-दाता~mere information-giver|केवल परीक्षक~mere examiner|केवल दण्डदाता~mere punisher
'सुविधा प्रदाता' (Facilitator) के रूप में शिक्षक—~As a facilitator, the teacher—|बालकों को स्वयं सीखने में सहायता करता है~helps children learn on their own|केवल व्याख्यान देता है~only lectures|सब कुछ स्वयं करता है~does everything himself|बालकों को निष्क्रिय रखता है~keeps children passive
'अनुश्रवणकर्ता' (Monitor) के रूप में शिक्षक का कार्य है—~As a monitor, the teacher's role is to—|बालकों की प्रगति का निरन्तर निरीक्षण करना~continuously observe children's progress|केवल परीक्षा लेना~only conduct exams|कक्षा से अनुपस्थित रहना~stay absent from class|कुछ न करना~do nothing
'नेतृत्वकर्ता' (Leader) के रूप में शिक्षक—~As a leader, the teacher—|कक्षा को दिशा एवं प्रेरणा देता है~gives the class direction and inspiration|तानाशाही व्यवहार करता है~behaves dictatorially|उपेक्षा करता है~is neglectful|कोई निर्णय नहीं लेता~takes no decisions
'मार्गदर्शक' (Guide) के रूप में शिक्षक की भूमिका है—~As a guide, the teacher's role is to—|बालक को सही राह दिखाना एवं समस्या-समाधान में सहायता करना~show the right path and help solve problems|केवल आदेश देना~only give orders|कठोर दण्ड देना~give harsh punishment|उपेक्षा करना~ignore
'परामर्शदाता' (Counsellor) के रूप में शिक्षक—~As a counsellor, the teacher—|बालकों की भावनात्मक/व्यक्तिगत समस्याओं में सहायता करता है~helps children with emotional/personal problems|केवल अंक देता है~only gives marks|केवल पढ़ाता है~only teaches subject matter|बालकों से दूरी रखता है~stays distant from children
शिक्षक की बहुआयामी भूमिका का मुख्य उद्देश्य है—~The main purpose of a teacher's multi-faceted role is—|बालक का सर्वांगीण विकास~the all-round development of the child|केवल परीक्षा परिणाम~only exam results|केवल अनुशासन~only discipline|केवल पाठ्यक्रम पूरा करना~only completing the syllabus
`));

L('ls.values', 'संवैधानिक और मानवीय मूल्य', 'Constitutional & human values', cat(
M({ f: '{k} किस संवैधानिक मूल्य से सम्बद्ध है?~{k} is related to which constitutional value?', r: '{v} मूल्य का उदाहरण है—~An example of the value of {v} is—', rows: `
सभी धर्मों के प्रति समान आदर~equal respect for all religions | पंथनिरपेक्षता~secularism
जाति, धर्म, लिंग के भेदभाव के बिना अवसर~opportunity without discrimination of caste, religion, gender | समानता~equality
अपने विचार व्यक्त करने का अधिकार (मर्यादा सहित)~the right to express one's views (with propriety) | स्वतन्त्रता~liberty
सभी नागरिकों को समान समझना एवं एक-दूसरे के प्रति सम्मान~treating all citizens equally and with mutual respect | बन्धुत्व (भाईचारा)~fraternity
शासन में जनता की भागीदारी~people's participation in governance | लोकतन्त्र~democracy` }),
Q(`
भारतीय संविधान की प्रस्तावना में उल्लिखित मूल्य हैं—~Values mentioned in the Preamble of the Indian Constitution include—|न्याय, स्वतन्त्रता, समानता और बन्धुत्व~justice, liberty, equality and fraternity|केवल स्वतन्त्रता~only liberty|केवल समानता~only equality|केवल न्याय~only justice
राष्ट्रीय एकता एवं अखण्डता को बढ़ावा देना किस दायित्व में आता है?~Promoting national unity and integrity falls under—|मौलिक कर्तव्य~Fundamental Duties|मौलिक अधिकार~Fundamental Rights|नीति निदेशक तत्त्व~Directive Principles|आपातकालीन उपबन्ध~Emergency provisions
कक्षा में मानवीय मूल्यों (जैसे सहानुभूति, ईमानदारी) का विकास किस प्रकार किया जा सकता है?~How can human values like empathy and honesty be developed in class?|आदर्श उदाहरण, कहानियों एवं सहभागी गतिविधियों से~through role modelling, stories and participatory activities|केवल व्याख्यान से~by lecturing only|दण्ड से~by punishment|उपेक्षा से~by neglect
'समानता' के मूल्य का अर्थ है—~The value of 'equality' means—|सबको समान अवसर एवं सम्मान~equal opportunity and respect for all|केवल धनी वर्ग को अवसर~opportunity only for the rich|कुछ को विशेषाधिकार~privileges for a few|भेदभाव~discrimination
संवैधानिक मूल्यों को कक्षा में पढ़ाने का उद्देश्य है—~The purpose of teaching constitutional values in class is—|उत्तरदायी एवं जागरूक नागरिक तैयार करना~preparing responsible, aware citizens|केवल परीक्षा पास कराना~only passing exams|समय व्यतीत करना~passing time|कोई विशेष उद्देश्य नहीं~no particular purpose
`)));

L('ls.reward', 'दण्ड एवं पुरस्कार व्यवस्था का प्रभावी प्रयोग', 'Effective use of reward & punishment', Q(`
बाल अधिकार एवं RTE अधिनियम के अनुसार बच्चों को शारीरिक दण्ड देना—~As per child rights and the RTE Act, physical punishment of children is—|पूर्णतः प्रतिबन्धित है~completely prohibited|कभी-कभी अनुमत है~sometimes allowed|शिक्षक के विवेक पर है~at the teacher's discretion|केवल गम्भीर गलती पर अनुमत है~allowed for serious mistakes only
सकारात्मक अनुशासन (Positive discipline) में शामिल है—~Positive discipline includes—|समझाना, प्रोत्साहन एवं उचित सीमाएँ निर्धारित करना~explaining, encouragement and setting fair limits|मारपीट~beating|अपमान करना~humiliation|कक्षा से बाहर निकालना~expelling from class
पुरस्कार का प्रभावी प्रयोग बालक में क्या विकसित करता है?~Effective use of reward develops in a child—|सकारात्मक व्यवहार एवं आत्मविश्वास~positive behaviour and self-confidence|भय~fear|द्वेष~resentment|आलस्य~laziness
अत्यधिक/अनुचित पुरस्कार का सम्भावित दुष्प्रभाव है—~A possible drawback of excessive/inappropriate reward is—|बालक केवल पुरस्कार के लिए कार्य करने लगे~the child may start working only for the reward|बालक अधिक मेहनती हो जाए~the child becomes more hardworking|कोई प्रभाव नहीं~no effect|बालक स्वतन्त्र सोचने लगे~the child becomes more independent-minded
शारीरिक दण्ड के स्थान पर उपयुक्त विकल्प है—~An appropriate alternative to physical punishment is—|संवाद, परामर्श एवं रचनात्मक परिणाम~dialogue, counselling and constructive consequences|कठोर डाँट~harsh scolding|सार्वजनिक अपमान~public humiliation|अंक काटना~deducting marks
दण्ड का सर्वाधिक उपयुक्त उद्देश्य होना चाहिए—~The most appropriate purpose of any consequence should be—|व्यवहार में सुधार, न कि प्रतिशोध~correcting behaviour, not revenge|प्रतिशोध लेना~taking revenge|भय उत्पन्न करना~instilling fear|अपमानित करना~humiliating
कक्षा में अनुशासन बनाए रखने का उत्तम तरीका है—~The best way to maintain classroom discipline is—|स्पष्ट नियम, सुसंगत व्यवहार एवं सम्मानजनक संवाद~clear rules, consistency and respectful communication|मौन भय~silent fear|अनदेखी~ignoring issues|कठोरता~harshness
`));

L('ls.skills', 'जीवन कौशल (सामान्य)', 'Life skills (general)', cat(
M({ f: 'WHO द्वारा सूचीबद्ध जीवन कौशलों में सम्मिलित है—~The life skills listed by WHO include—', r: '', rows: `
आत्म-जागरूकता~self-awareness | निर्णय लेने का कौशल~decision-making skill
सहानुभूति~empathy | समस्या-समाधान कौशल~problem-solving skill
प्रभावी संचार~effective communication | अन्तर्वैयक्तिक सम्बन्ध कौशल~interpersonal relationship skill
सृजनात्मक चिन्तन~creative thinking | आलोचनात्मक चिन्तन~critical thinking
भावनाओं से निपटना~coping with emotions | तनाव से निपटना~coping with stress` }),
Q(`
विश्व स्वास्थ्य संगठन (WHO) के अनुसार जीवन कौशलों की संख्या मानी जाती है—~According to WHO, the number of core life skills is generally—|10|5|8|12
'सहानुभूति' (Empathy) कौशल का अर्थ है—~The skill of 'empathy' means—|दूसरों की भावनाओं/परिस्थिति को समझना~understanding others' feelings/situation|दूसरों की उपेक्षा करना~ignoring others|केवल अपने बारे में सोचना~thinking only of oneself|द्वेष रखना~holding a grudge
'सहसम्बन्ध (अन्तर्वैयक्तिक सम्बन्ध) कौशल' का अर्थ है—~The skill of 'interpersonal relationships' means—|स्वस्थ एवं सकारात्मक सम्बन्ध बना पाना~being able to build healthy, positive relationships|अकेले रहना~staying alone|झगड़ा करना~quarrelling|असहयोग~non-cooperation
'समस्या-समाधान कौशल' किसमें सहायक है?~Problem-solving skill helps in—|कठिनाइयों का व्यवस्थित हल खोजने में~finding a systematic solution to difficulties|समस्याओं से बचने में~avoiding problems|समस्याएँ बढ़ाने में~increasing problems|कुछ न करने में~doing nothing
'आत्म-जागरूकता' कौशल का अर्थ है—~The skill of 'self-awareness' means—|अपनी शक्तियों, कमजोरियों एवं भावनाओं को समझना~understanding one's own strengths, weaknesses and emotions|दूसरों को जानना~knowing others|पैसे कमाना~earning money|पढ़ाई करना~studying
जीवन कौशल शिक्षा का मुख्य उद्देश्य है—~The main aim of life-skills education is—|दैनिक जीवन की चुनौतियों से प्रभावी ढंग से निपटने की योग्यता विकसित करना~developing the ability to effectively deal with everyday challenges|केवल अंक प्राप्त करना~only scoring marks|केवल पुस्तकें पढ़ना~only reading books|केवल परीक्षा उत्तीर्ण करना~only passing exams
'निर्णय लेने का कौशल' बालकों में क्यों विकसित करना चाहिए?~Why should decision-making skill be developed in children?|ताकि वे सोच-समझकर उचित विकल्प चुन सकें~so they can choose wisely after thinking things through|ताकि वे कभी निर्णय न लें~so they never decide anything|कोई कारण नहीं~no reason|केवल परीक्षा के लिए~only for exams
'तनाव प्रबन्धन' किसमें सहायक है?~Stress management helps in—|मानसिक सन्तुलन बनाए रखने में~maintaining mental balance|तनाव बढ़ाने में~increasing stress|समस्याएँ पैदा करने में~creating problems|कुछ न करने में~doing nothing
`)));

})(typeof window !== 'undefined' ? window : globalThis);
