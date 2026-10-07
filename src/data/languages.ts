import {
  LanguageProfile,
  ScriptProfile,
  LocalizedTopicText
} from '../types';

export const SCRIPTS_OF_BIHAR: ScriptProfile[] = [
  {
    id: 'devanagari',
    name: 'Devanagari',
    hindiName: 'देवनागरी',
    nativeSample: 'विद्यापति भनइ सुनु मतिमान',
    nativeSampleTranslation: 'Says Vidyapati, listen O wise and discerning mind',
    languagesAssociated: ['Hindi', 'Maithili', 'Bhojpuri', 'Magahi', 'Angika', 'Bajjika', 'Surjapuri'],
    historicalEra: 'Classical to Contemporary (Dominant pan-Indian Brahmic script since the medieval era)',
    statusToday: 'Primary official and everyday publication script across Bihar for modern editions and media',
    description:
      'Devanagari is a left-to-right abugida writing system characterized by its continuous horizontal headstroke (shirorekha). In contemporary Bihar, it serves as the universal publishing script for Hindi, modern Maithili, Bhojpuri, Magahi, and Angika literature and official school curricula.',
    culturalNote:
      'While traditional regional scripts like Kaithi and Tirhuta were historically favored for administrative and ritual writing, Devanagari unified printing presses across Patna, Darbhanga, and Varanasi from the late 19th century onward.',
    unicodeRange: 'U+0900 – U+097F',
    visualGlyphs: [
      { char: 'अ', roman: 'a', name: 'Hrasva A' },
      { char: 'क', roman: 'ka', name: 'Ka' },
      { char: 'म', roman: 'ma', name: 'Ma' },
      { char: 'र', roman: 'ra', name: 'Ra' },
      { char: 'स', roman: 'sa', name: 'Sa' }
    ]
  },
  {
    id: 'kaithi',
    name: 'Kaithi',
    hindiName: 'कैथी लिपि',
    nativeSample: '𑂍𑂶𑂟𑂲 𑂪𑂱𑂎𑂰𑂆 𑂥𑂱𑂯𑂰𑂩',
    nativeSampleTranslation: 'Kaithi Likhai Bihar (Historical court and commerce cursive script of Bihar)',
    languagesAssociated: ['Bhojpuri', 'Magahi', 'Maithili', 'Hindustani / Awadhi'],
    historicalEra: '16th Century to mid-20th Century (Official court script of Bihar during Mughal and British periods)',
    statusToday: 'Historical archival script; preserved in land registry records, family archives, and revived in cultural calligraphy',
    description:
      'Kaithi is a cursive Brahmic script historically named after the Kayastha scribal community. Unlike Devanagari, it omits the top horizontal hanging line, allowing swift, continuous reed-pen writing across legal deeds, village patwari land surveys, and commercial ledger books.',
    culturalNote:
      'Kaithi was officially recognized in British judicial administration in Bihar courts until the 1910s–1920s. Millions of historical land deeds (Khatiyan) preserved across Bihar collectorates remain authored in Kaithi.',
    unicodeRange: 'U+11080 – U+110CF (Standardized in Unicode 5.2, 2009)',
    visualGlyphs: [
      { char: '𑂍', roman: 'ka', name: 'Kaithi Ka' },
      { char: '𑂎', roman: 'kha', name: 'Kaithi Kha' },
      { char: '𑂏', roman: 'ga', name: 'Kaithi Ga' },
      { char: '𑂞', roman: 'ta', name: 'Kaithi Ta' },
      { char: '𑂩', roman: 'ra', name: 'Kaithi Ra' }
    ]
  },
  {
    id: 'tirhuta',
    name: 'Tirhuta / Mithilakshar',
    hindiName: 'तिरहुता / मिथिलाक्षर',
    nativeSample: '𑒧𑒱𑒟𑒱𑒪𑒰𑒏𑓂𑒭𑒩 𑒫𑒱𑒠𑓂𑒨𑒰𑒣𑒞𑒱',
    nativeSampleTranslation: 'Mithilakshar Vidyapati (Traditional writing system of Mithila manuscripts)',
    languagesAssociated: ['Maithili', 'Sanskrit'],
    historicalEra: '10th Century CE to Present (Palm-leaf manuscripts, copper plates, Panji genealogies)',
    statusToday: 'Ceremonial, cultural, and calligraphic use; digital revival in academic and font initiatives',
    description:
      'Tirhuta (also known as Mithilakshar) is the historic script of the Mithila region. Related to early Eastern Brahmic alphabets like Gaudi, it features distinctive angular ascenders and complex ligatures, historically scribed on palm leaves (patra) and handmade paper.',
    culturalNote:
      'Mithilakshar was the exclusive script of the venerable Panji Prabandha (genealogical records dating from 1326 CE) and classical Sanskrit treatises composed by Mithila scholars in logic (Nyaya) and philosophy.',
    unicodeRange: 'U+11480 – U+114DF (Standardized in Unicode 7.0, 2014)',
    visualGlyphs: [
      { char: '𑒏', roman: 'ka', name: 'Tirhuta Ka' },
      { char: '𑒐', roman: 'kha', name: 'Tirhuta Kha' },
      { char: '𑒑', roman: 'ga', name: 'Tirhuta Ga' },
      { char: '𑒧', roman: 'ma', name: 'Tirhuta Ma' },
      { char: '𑒩', roman: 'ra', name: 'Tirhuta Ra' }
    ]
  },
  {
    id: 'perso-arabic',
    name: 'Perso-Arabic (Nastaliq)',
    hindiName: 'फारसी-अरबी (नस्तलीक़)',
    nativeSample: 'سرفروشی کی تمنا اب ہمارے دل میں ہے',
    nativeSampleTranslation: 'Sarfaroshi ki tamanna ab hamare dil mein hai (Bismil Azimabadi, Patna, 1921)',
    languagesAssociated: ['Urdu', 'Persian (Historical)'],
    historicalEra: 'Medieval courtly administration to Contemporary literature and journalism',
    statusToday: 'Active publishing script for Urdu newspapers, literary anthologies, and madrasa curricula in Bihar',
    description:
      'Written from right to left in the fluid, hanging Nastaliq calligraphic style. In Bihar, it developed deep regional nuances through the bustling mushairas, sufi khanqahs, and printing presses of historic Azimabad (Patna).',
    culturalNote:
      'Patna’s Khuda Bakhsh Oriental Public Library preserves some of the world’s most celebrated Nastaliq and Naskh manuscripts, documenting centuries of Bihar’s Islamic, poetic, and administrative heritage.',
    unicodeRange: 'U+0600 – U+06FF',
    visualGlyphs: [
      { char: 'ا', roman: 'alif', name: 'Alif' },
      { char: 'ب', roman: 'be', name: 'Be' },
      { char: 'ج', roman: 'jeem', name: 'Jeem' },
      { char: 'د', roman: 'dal', name: 'Dal' },
      { char: 'ر', roman: 're', name: 'Re' }
    ]
  }
];

export const BIHAR_LANGUAGES: LanguageProfile[] = [
  // 1. MAITHILI
  {
    id: 'maithili',
    name: 'Maithili',
    localName: 'मैथिली (𑒧𑒶𑒟𑒱𑒪𑒲)',
    category: 'Constitutional Language',
    classification: 'Indo-Aryan (Eastern group / Bihari branch)',
    scholarlyClassificationNote:
      'Classified by George A. Grierson in the Linguistic Survey of India (Vol. V) as part of the Eastern Indo-Aryan group with Magahi and Bhojpuri. Recognized by Suniti Kumar Chatterji and the Sahitya Akademi as an independent literary language with documented continuity spanning over seven centuries.',
    officialStatus: 'Eighth Schedule Recognized Language (Constitution of India)',
    primaryRegions: ['Mithila', 'Kosi'],
    associatedDistricts: [
      'madhubani',
      'darbhanga',
      'samastipur',
      'sitamarhi',
      'saharsa',
      'supaul',
      'madhepura',
      'begusarai'
    ],
    traditionalScripts: ['Tirhuta / Mithilakshar', 'Kaithi', 'Devanagari'],
    primaryScript: 'Devanagari (predominant in modern printing); Tirhuta (ceremonial and calligraphic)',
    overview:
      'Maithili is the literary and cultural language of the Mithila region of northern Bihar and southeastern Nepal. Endowed with a written literary heritage dating from at least the 14th century, it was incorporated into the Eighth Schedule of the Constitution of India in 2003 (92nd Constitutional Amendment Act).',
    literaryTradition:
      'Maithili possesses one of the richest literary archives in northern India. Landmark milestones include the Varna Ratnakara of Jyotirishwar Thakur (ca. 1324 CE, considered the oldest preserved vernacular prose text in northern India), the immortal Radha-Krishna and Shiva lyrics of Mahakavi Vidyapati (14th–15th century), Chanda Jha’s 19th-century epic translation of the Ramayana, and modern Sahitya Akademi laureates such as Nagarjun (writing under the pen-name "Yatri"), Ramanath Jha, and Umanath Jha.',
    oralTraditions: [
      {
        title: 'Samdaun (Bridal Farewell Song)',
        hindiTitle: 'समदौन (विदाई गीत)',
        genre: 'Life-Cycle Ceremonial Song',
        culturalContext:
          'Sung by women during the departure of the bride from her natal home. The poignant melody expresses both the pain of separation and blessing for her new household, drawing imagery from Sita’s departure from Janakpur.',
        description: 'Melodic verse tradition capturing family parting and emotional farewells.',
        musicTrackId: 'samdaun-doli-uthalo'
      },
      {
        title: 'Nachari & Maheshvani',
        hindiTitle: 'नचारी एवं महेशवाणी',
        genre: 'Devotional Ballad',
        culturalContext:
          'Traditional devotional verses dedicated to Lord Shiva (Bholenath), popularized by Vidyapati. They describe Shiva’s ascetic, carefree life in folk household metaphors.',
        description: 'Vocal chants celebrating Lord Shiva as a domestic householder and cosmic ascetic.'
      },
      {
        title: 'Jhijhiya Songs',
        hindiTitle: 'झिझिया गीत',
        genre: 'Seasonal Autumn Song',
        culturalContext:
          'Sung during the Navratri season by women balancing clay pots with perforated holes and flickering earthen lamps on their heads, praying for rain and village safety.',
        description: 'Rhythmic choral songs accompanying the clay-lantern balance dance.'
      }
    ],
    notableFigures: [
      {
        name: 'Mahakavi Vidyapati',
        period: 'ca. 1352 – 1448 CE',
        role: 'Court Poet & Pioneer of Maithili Lyrics',
        personalityId: 'mahakavi-vidyapati',
        notableWorks: ['Padavali', 'Kirtilata', 'Goraksha Vijaya'],
        contribution:
          'Composed timeless devotional and romantic songs that established Maithili as a supreme literary medium across eastern India, influencing Chaitanya Mahaprabhu and Rabindranath Tagore.'
      },
      {
        name: 'Jyotirishwar Thakur',
        period: 'Early 14th Century CE',
        role: 'Prose Pioneer & Dramatist',
        notableWorks: ['Varna Ratnakara', 'Dhurta Samagama'],
        contribution:
          'Authored Varna Ratnakara, a comprehensive encyclopedic compendium of cultural terms, descriptions, and vernacular prose that remains a foundational milestone of Indo-Aryan literature.'
      },
      {
        name: 'Nagarjun (Baidyanath Mishra "Yatri")',
        period: '1911 – 1998 CE',
        role: 'Progressive Poet, Novelist & Activist',
        notableWorks: ['Patrahin Nagna Gachh', 'Chitra', 'Balchanma'],
        contribution:
          'Revolutionized Maithili poetry with radical social empathy, receiving the Sahitya Akademi Award in 1968 for his collection Patrahin Nagna Gachh.'
      }
    ],
    festivalConnections: [
      {
        festivalId: 'sama-chakeva',
        festivalName: 'Sama-Chakeva',
        role: 'Oral folk songs sung during November evenings celebrating sibling bonds and winter migratory birds.'
      },
      {
        festivalId: 'mithila-vivah-panchami',
        festivalName: 'Vivah Panchami',
        role: 'Ceremonial Maithili marriage hymns commemorating the union of Rama and Sita in Janakpur.'
      }
    ],
    musicTrackIds: ['samdaun-doli-uthalo', 'vidyapati-nachari-bhairavi'],
    samplePhrase: {
      text: 'अहाँक नाम की थिक? हम मिथिलाक संस्कृति सँ प्रेम करैत छी।',
      script: 'Devanagari (Traditional: 𑒁𑒯𑒰𑒁𑒏 𑒢𑒰𑒧 𑒏𑒲 𑒟𑒱𑒏?)',
      meaning: 'What is your name? I love the culture of Mithila.',
      context: 'Standard respectful greeting in Maithili conversation.'
    },
    sampleLiteraryPassage: {
      workTitle: 'Jai Jai Bhairavi (Bhairavi Vandana)',
      author: 'Mahakavi Vidyapati',
      originalText: 'जय जय भैरवि असुर भयावनि, पशुपति भामिनि माया।',
      script: 'Devanagari (Classical Mithilakshar)',
      translations: {
        en: 'Hail, all hail to Bhairavi, terrifying to demons, beloved consort of Pashupati, the embodiment of cosmic Maya.',
        hi: 'जय जय भैरवी, असुरों को भयभीत करने वाली, पशुपति (शिव) की अर्धांगिनी और पराशक्ति महामाया!',
        mai: 'जय जय भैरवि, असुर सभक नाश करनिहारि, पशुपति शिवक प्रिया आ जगतक मूल आधार माया!'
      },
      commentary:
        'Vidyapati’s iconic hymn invoking the Divine Mother, sung to inaugurate cultural and musical assemblies across Mithila.'
    },
    censusNote:
      'Census of India 2011 records approximately 13.58 million speakers in India who reported Maithili as their mother tongue (primarily concentrated in northern Bihar).',
    sources: [
      'Constitution of India, Eighth Schedule (92nd Amendment Act, 2003)',
      'Sahitya Akademi, National Academy of Letters (Maithili Recognition, 1965)',
      'Census of India 2011 (Language Table C-16)',
      'George A. Grierson, Linguistic Survey of India (Vol. V, Indo-Aryan Family, Eastern Group)'
    ]
  },

  // 2. BHOJPURI
  {
    id: 'bhojpuri',
    name: 'Bhojpuri',
    localName: 'भोजपुरी (𑂦𑂷𑂔𑂣𑂳𑂩𑂲)',
    category: 'Regional Literary Language',
    classification: 'Indo-Aryan (Eastern group / Bihari branch)',
    scholarlyClassificationNote:
      'Classified by George A. Grierson as the westernmost language of the Bihari group. Possesses a vast diaspora presence across Mauritius, Trinidad, Guyana, Suriname, and Fiji as a result of 19th-century indentured labor migrations.',
    officialStatus: 'Recognized Regional Literary Language',
    primaryRegions: ['Bhojpur', 'Saran', 'Tirhut'],
    associatedDistricts: [
      'bhojpur',
      'buxar',
      'rohtas',
      'kaimur',
      'saran',
      'siwan',
      'gopalganj',
      'west-champaran',
      'east-champaran'
    ],
    traditionalScripts: ['Kaithi', 'Devanagari'],
    primaryScript: 'Devanagari (predominant today); Kaithi (historical legal and mercantile script)',
    overview:
      'Bhojpuri is a major Indo-Aryan language spoken across western Bihar, eastern Uttar Pradesh, and the Terai of Nepal. Renowned for its theatrical traditions, vibrant folk songs, and the historical literature of migration, it holds deep cultural resonance across northern India and the global Indian diaspora.',
    literaryTradition:
      'Bhojpuri literature spans oral ballads dating to medieval folk heroes like Veer Kunwar Singh, moving theatrical verse by Bhikhari Thakur (whose plays addressed migration, women’s rights, and caste reform), Mahendra Misir’s lyrical Purvi compositions, and patriotic anthems like Manoranjan Prasad Sinha’s "Firangia" during the freedom movement.',
    oralTraditions: [
      {
        title: 'Bidesiya (The Migrant Separation Ballad)',
        hindiTitle: 'बिदेसिया',
        genre: 'Theatrical Folk Ballad',
        culturalContext:
          'Created by Bhikhari Thakur, representing the poignant emotional landscape of rural wives waiting for husbands who migrated to Kolkata or overseas sugar plantations.',
        description: 'Heartrending musical theatre reflecting rural labor migration and domestic separation.',
        musicTrackId: 'bhikhari-thakur-bidesiya'
      },
      {
        title: 'Kajari',
        hindiTitle: 'कजरी',
        genre: 'Monsoon Folk Song',
        culturalContext:
          'Sung by women during the monsoon rains (Shravan and Bhadrapad), capturing the longing for loved ones against the backdrop of dark clouds, swinging jhoolas, and greening fields.',
        description: 'Lyrical monsoon folk songs performed during rainy months.',
        musicTrackId: 'bhojpuri-kajari-barsan'
      },
      {
        title: 'Chhath Mahaparva Geet',
        hindiTitle: 'छठ गीत',
        genre: 'Solar Devotional Hymn',
        culturalContext:
          'Sung communally at riverbanks during the setting and rising sun offerings, characterized by bamboo daura motifs and pure agrarian metaphors.',
        description: 'Devotional hymns praising Surya and Chhathi Maiya.',
        musicTrackId: 'kelwa-ke-paat-par'
      }
    ],
    notableFigures: [
      {
        name: 'Bhikhari Thakur',
        period: '1887 – 1971 CE',
        role: 'Folk Playwright, Actor, Composer & Social Reformer',
        personalityId: 'bhikhari-thakur',
        notableWorks: ['Bidesiya', 'Beti Bechwa', 'Gabarghichor'],
        contribution:
          'Popularly revered as the "Shakespeare of Bhojpuri," he used rural opera (Naach) to challenge child marriage, caste oppression, and economic displacement.'
      },
      {
        name: 'Mahendra Misir',
        period: '1886 – 1946 CE',
        role: 'Composer & Master of Purvi Songs',
        notableWorks: ['Apne Balam Pardesi', 'Purvi Thumris'],
        contribution:
          'Elevated the Purvi folk genre into classical semi-classical concerts, widely recognized as the sovereign monarch of eastern melody.'
      }
    ],
    festivalConnections: [
      {
        festivalId: 'chhath-puja',
        festivalName: 'Chhath Puja',
        role: 'Primary medium for thousands of traditional devotional hymns sung by women at river ghats.'
      },
      {
        festivalId: 'sonepur-mela',
        festivalName: 'Sonepur Mela',
        role: 'Traditional stage for Bhojpuri folk theatre, folk nautanki, and open-air musical performances.'
      }
    ],
    musicTrackIds: ['kelwa-ke-paat-par', 'kaanch-hi-baans-ke-bahangiya', 'bhikhari-thakur-bidesiya', 'bhojpuri-kajari-barsan'],
    samplePhrase: {
      text: 'रउआ कइसन बानी? हम भोजपुरिया माटी के नमन करत बानी।',
      script: 'Devanagari (Historical: 𑂩𑂅𑂄 𑂍𑂅𑂮𑂢 𑂥𑂰𑂢𑂲?)',
      meaning: 'How are you? I pay my respects to the soil of Bhojpur.',
      context: 'Polite and respectful greeting in standard Bhojpuri.'
    },
    sampleLiteraryPassage: {
      workTitle: 'Bidesiya (Opening Stanza)',
      author: 'Bhikhari Thakur',
      originalText: 'पियवा गइले कलकतवा ए सजनी, कइसे कटे दिन-रात?',
      script: 'Devanagari',
      translations: {
        en: 'My beloved has departed for distant Kolkata, O dear companion; how will these endless days and nights pass?',
        hi: 'प्रियतम कलकत्ता चले गए हैं हे सखी, अब यह विरह के दिन-रात कैसे कटेंगे?',
        bho: 'पियवा गइले कलकतवा ए सजनी, कइसे कटे दिन-रात? हियरा में उठेला पीर भारी।'
      },
      commentary:
        'A foundational couplet from Bhikhari Thakur’s Bidesiya, encapsulating the economic and emotional reality of rural migration.'
    },
    censusNote:
      'Census of India 2011 records approximately 50.58 million speakers across India who reported Bhojpuri as their mother tongue (predominantly in western Bihar and eastern Uttar Pradesh).',
    sources: [
      'Census of India 2011 (Language Table C-16 / Mother Tongue Data)',
      'George A. Grierson, Linguistic Survey of India (Vol. V, Part II)',
      'Sangeet Natak Akademi Archives (Folk Theatre Traditions of Bihar)',
      'Department of Art, Culture and Youth, Government of Bihar'
    ]
  },

  // 3. MAGAHI
  {
    id: 'magahi',
    name: 'Magahi',
    localName: 'मगही (𑂧𑂏𑂯𑂲)',
    category: 'Regional Literary Language',
    classification: 'Indo-Aryan (Eastern group / Bihari branch)',
    scholarlyClassificationNote:
      'Spoken primarily in the ancient Magadh region. Linguistically linked to ancient Magadhi Prakrit, the liturgical language of early Buddhism and Jainism and the official court language of the Mauryan Empire, though modern Magahi represents a subsequent centuries-long linguistic evolution.',
    officialStatus: 'Recognized Regional Literary Language',
    primaryRegions: ['Magadh'],
    associatedDistricts: [
      'gaya',
      'patna',
      'nalanda',
      'nawada',
      'jehanabad',
      'arwal',
      'aurangabad',
      'sheikhpura'
    ],
    traditionalScripts: ['Kaithi', 'Devanagari'],
    primaryScript: 'Devanagari (predominant in modern printing); Kaithi (historical manuscripts and revenue records)',
    overview:
      'Magahi is the native language of the central Magadh region south of the Ganga. Carrying memories of Rajgir, Bodh Gaya, and ancient Pataliputra, it is celebrated for its warm, direct idioms, heroic oral epics like Lorikayan, and rich lifecycle folklore.',
    literaryTradition:
      'While historically rich in spoken oral cycles, modern Magahi literature gathered formal strength in the 20th century. Pioneers like Jayram Singh, Suresh Dubey "Saras", Ram Naresh Pathak, and magazines like "Magahi" and "Bihan" established a formal corpus of novels, short stories, and social poetry in Magadh.',
    oralTraditions: [
      {
        title: 'Lorikayan (The Ballad of Veer Lorik)',
        hindiTitle: 'लोरिकायन',
        genre: 'Heroic Oral Epic',
        culturalContext:
          'A monumental oral epic sung over several nights by folk bards (Ahir/Yaduvanshi singers), narrating the courage, honor, and love of the warrior Lorik across ancient Magadh.',
        description: 'Epic oral narrative celebrating courage, loyalty, and justice.'
      },
      {
        title: 'Magahi Sohar',
        hindiTitle: 'मगही सोहर',
        genre: 'Childbirth Blessing Song',
        culturalContext:
          'Sung by elder women upon the birth of an infant, invoking the blessings of the Sun God, mother nature, and family ancestors.',
        description: 'Ceremonial songs celebrating birth and maternal renewal.',
        musicTrackId: 'magahi-sohar-janam'
      },
      {
        title: 'Falgu Kinare Nirgun',
        hindiTitle: 'फल्गु तीरे निर्गुण',
        genre: 'Philosophical Mystical Song',
        culturalContext:
          'Meditative songs associated with the impermanence of mortal life, sung around the pilgrim ghats of Gaya and rural monasteries.',
        description: 'Devotional verses contemplating life, mortality, and liberation.',
        musicTrackId: 'magahi-falgu-nirgun'
      }
    ],
    notableFigures: [
      {
        name: 'Suresh Dubey "Saras"',
        period: '20th Century',
        role: 'Magahi Poet & Dramatist',
        notableWorks: ['Magahi Kavita Kunj', 'Kavyadhara'],
        contribution:
          'Pioneered modern Magahi verse by integrating rural agricultural life with contemporary literary forms.'
      },
      {
        name: 'Ram Naresh Pathak',
        period: '20th Century',
        role: 'Magahi Scholar & Folklorist',
        notableWorks: ['Magahi Lok Sahitya', 'Magahi Vyakaran'],
        contribution:
          'Documented oral folklore, proverbs, and grammatical structures of the Magadh region.'
      }
    ],
    festivalConnections: [
      {
        festivalId: 'pitrapaksha-mela',
        festivalName: 'Pitrapaksha Mela (Gaya)',
        role: 'Traditional oral chants and sacred narratives recited during sacred Pind Daan rituals along the Falgu.'
      },
      {
        festivalId: 'rajgir-mahotsav',
        festivalName: 'Rajgir Mahotsav',
        role: 'Platform for Magahi folk music, drama, and traditional poetry recitations.'
      }
    ],
    musicTrackIds: ['magahi-sohar-janam', 'magahi-falgu-nirgun'],
    samplePhrase: {
      text: 'अपने कइसन हथिन? मगध के धरती पर अहाँ के स्वागत हे।',
      script: 'Devanagari',
      meaning: 'How are you? You are cordially welcome to the sacred soil of Magadh.',
      context: 'Respectful everyday inquiry in Magahi.'
    },
    sampleLiteraryPassage: {
      workTitle: 'Lorikayan Folk Opening',
      author: 'Traditional Oral Bard',
      originalText: 'गौतम के धरती, जरासंध के राज, मगध के माटी में बोलेला आज।',
      script: 'Devanagari',
      translations: {
        en: 'The land of the Buddha, the ancient realm of Jarasandha; today the soil of Magadh speaks with pride.',
        hi: 'बुद्ध की पावन भूमि, जरासंध का प्राचीन राज्य; आज मगध की मिट्टी अपने गौरव का गान करती है।',
        mag: 'बुद्ध के पावन धरती, जरासंध के प्राचीन राज; आज मगध के माटी अपना मान बखाण करैत हे।'
      },
      commentary:
        'A traditional invocation honoring the deep historical memory embedded in the landscape of Magadh.'
    },
    censusNote:
      'Census of India 2011 records approximately 12.7 million speakers across India who reported Magahi as their mother tongue (chiefly in central and south Bihar).',
    sources: [
      'Census of India 2011 (Language Table C-16)',
      'George A. Grierson, Linguistic Survey of India (Vol. V, Indo-Aryan Family, Eastern Group)',
      'Magahi Academy, Patna, Government of Bihar'
    ]
  },

  // 4. ANGIKA
  {
    id: 'angika',
    name: 'Angika',
    localName: 'अंगिका (𑂃𑂁𑂏𑂱𑂍𑂰)',
    category: 'Regional Literary Language',
    classification: 'Indo-Aryan (Eastern group / Bihari branch)',
    scholarlyClassificationNote:
      'Associated with the ancient region of Anga (centered at Champanagar / modern Bhagalpur and Munger). Grierson classified it under Eastern Maithili, while regional scholars and writers maintain its distinctive morpho-syntax, vocabulary, and literary autonomy.',
    officialStatus: 'Recognized Regional Literary Language',
    primaryRegions: ['Anga'],
    associatedDistricts: ['bhagalpur', 'banka', 'munger', 'jamui', 'lakhisarai'],
    traditionalScripts: ['Kaithi', 'Devanagari'],
    primaryScript: 'Devanagari (predominant in modern printing); Kaithi (historical usage)',
    overview:
      'Angika is the native speech variety of the eastern Anga region of Bihar. Bound to the riverine bends of the Ganga near Sultanganj and Bhagalpur, it possesses a celebrated oral ballad tradition centered around the serpent goddess Bishahari and the chaste heroine Behula.',
    literaryTradition:
      'Modern Angika literature has developed through dedicated regional journals, poetry anthologies, and prose collections. Key figures include Anup Lal Mandal, Ramdev Jha, Naresh Pandey "Chakore", and the cultural patrons who transcribed the Behula-Bishahari narrative poetry into published form.',
    oralTraditions: [
      {
        title: 'Behula-Bishahari Gatha',
        hindiTitle: 'बिहुला-विषहरी गाथा',
        genre: 'Mythological Folk Ballad',
        culturalContext:
          'Sung during the Shravan Bishahari festival by traditional bards in accompaniment with the Dhak drum and Manjusha scroll displays, narrating Behula’s journey across celestial realms to revive her husband.',
        description: 'Vocal ballad tradition accompanying Manjusha scroll storytelling.',
        musicTrackId: 'anga-manjusha-behula'
      },
      {
        title: 'Khetihar Geet (Harvest Songs of Anga)',
        hindiTitle: 'खेतीहर गीत',
        genre: 'Agrarian Choral Song',
        culturalContext:
          'Rhythmic work songs sung during the transplantation and harvesting of the famous Katarni paddy and winter wheat crops.',
        description: 'Work songs sung in unison across the alluvial Gangetic fields.'
      }
    ],
    notableFigures: [
      {
        name: 'Naresh Pandey "Chakore"',
        period: '20th Century',
        role: 'Angika Poet & Cultural Archivist',
        notableWorks: ['Angika Lok Sahitya', 'Kavya Dhara'],
        contribution:
          'Promoted Angika literary consciousness through poetry, radio broadcasts, and documentation of oral epics.'
      },
      {
        name: 'Anup Lal Mandal',
        period: '1896 – 1983 CE',
        role: 'Novelist & Social Critic',
        notableWorks: ['Ghar-Angana', 'Meemansa'],
        contribution:
          'Brought rural realism and the everyday speech idioms of eastern Bihar into modern Indian narrative fiction.'
      }
    ],
    festivalConnections: [
      {
        festivalId: 'chhath-puja',
        festivalName: 'Bishahari Puja & Chhath (Anga)',
        role: 'The foundational ritual ceremony where Angika oral epics and Manjusha paintings are presented alongside Chhath solar hymns.'
      }
    ],
    musicTrackIds: ['anga-manjusha-behula'],
    samplePhrase: {
      text: 'अहाँ केंहे छी? अंग देश के पवित्र माटी पर अहाँ के बहुत-बहुत स्वागत छै।',
      script: 'Devanagari',
      meaning: 'How are you? You are warmly welcomed to the holy soil of the Anga country.',
      context: 'Polite greeting in Angika.'
    },
    sampleLiteraryPassage: {
      workTitle: 'Behula Gatha Invocation',
      author: 'Traditional Manjusha Bard',
      originalText: 'चंपा नगरी के चंपावती नदी तीरे, बिहुला गावे विषहरी के नाम।',
      script: 'Devanagari',
      translations: {
        en: 'Along the banks of the Champavati river in the city of Champa, Behula chants the name of Goddess Bishahari.',
        hi: 'चंपा नगरी की चंपावती नदी के तट पर, सती बिहुला देवी विषहरी के पावन नाम का गान करती हैं।',
        an: 'चंपा नगरी के चंपावती नदी तीरे, सती बिहुला विषहरी माय के पावन नाम गावे छै।'
      },
      commentary:
        'Opening lines of the Behula-Bishahari Gatha, historically recited in Bhagalpur to accompany Manjusha scroll painting displays.'
    },
    censusNote:
      'Census of India 2011 records approximately 743,000 speakers who specifically reported Angika as their mother tongue (primarily in Bhagalpur, Banka, and Munger divisions).',
    sources: [
      'Census of India 2011 (Language Table C-16)',
      'Angika Academy, Patna, Government of Bihar',
      'George A. Grierson, Linguistic Survey of India (Vol. V, Indo-Aryan Family)'
    ]
  },

  // 5. BAJJIKA
  {
    id: 'bajjika',
    name: 'Bajjika',
    localName: 'बज्जिका',
    category: 'Documented Speech Variety',
    classification: 'Indo-Aryan (Eastern group / Transitional variety)',
    scholarlyClassificationNote:
      'Classified by George A. Grierson as Western Maithili in the Linguistic Survey of India. Modern regional linguists and cultural proponents in Muzaffarpur and Vaishali consider it an autonomous speech variety functioning as a linguistic transition between Maithili and Bhojpuri.',
    officialStatus: 'Documented Speech Variety / Regional Variety',
    primaryRegions: ['Tirhut'],
    associatedDistricts: ['vaishali', 'muzaffarpur', 'sitamarhi', 'sheohar'],
    traditionalScripts: ['Devanagari', 'Kaithi (historical)'],
    primaryScript: 'Devanagari',
    overview:
      'Bajjika is the speech variety of the historic Licchavi republic region (Vaishali, Muzaffarpur, Sitamarhi, and Sheohar). Named after the ancient Vajjian confederacy, it is characterized by its gentle cadence, unique pronoun system, and rich repertoire of rural folktales.',
    literaryTradition:
      'Literature in Bajjika has grown significantly over the last half-century through local literary societies in Muzaffarpur. Noted writers have published novels, collections of rural poetry, and translations of classical texts.',
    oralTraditions: [
      {
        title: 'Vaishali Lok Gatha',
        hindiTitle: 'वैशाली लोक गाथा',
        genre: 'Historical Folk Legend',
        culturalContext:
          'Stories of the ancient Licchavi rulers, the dancer Amrapali, and Lord Mahavira, preserved in rural village memory.',
        description: 'Oral folktales commemorating ancient republican virtues.'
      },
      {
        title: 'Tirhut Vivah Geet',
        hindiTitle: 'तिरहुत विवाह गीत',
        genre: 'Wedding Ceremony Song',
        culturalContext:
          'Celebratory songs sung by women during turmeric application (Haldi) and wedding feasts in Tirhut villages.',
        description: 'Melodic nuptial songs sung by village women.'
      }
    ],
    notableFigures: [
      {
        name: 'Avadheshwar Arun',
        period: '20th Century',
        role: 'Linguist & Bajjika Scholar',
        notableWorks: ['Bajjika Bhasha aur Sahitya', 'Bajjika Vyakaran'],
        contribution:
          'Pioneered linguistic studies and compiled dictionaries documenting the grammar and idioms of Bajjika.'
      }
    ],
    festivalConnections: [
      {
        festivalId: 'buddha-purnima',
        festivalName: 'Buddha Purnima (Vaishali)',
        role: 'Commemorating the last sermon of Gautama Buddha at Kolhua with regional devotional songs.'
      }
    ],
    musicTrackIds: [],
    samplePhrase: {
      text: 'अहाँ कइसन बानी? वैशाली के पावन भूमि पर राउर स्वागत बा।',
      script: 'Devanagari',
      meaning: 'How are you? You are warmly welcomed to the sacred land of Vaishali.',
      context: 'Warm conversational greeting in Bajjika.'
    },
    censusNote:
      'Census of India 2011 records 1,326,712 speakers (approx 1.33 million) who reported Bajjika as their mother tongue, classified under the broader Hindi language census schedule, predominantly concentrated in Muzaffarpur, Vaishali, and Sitamarhi.',
    sources: [
      'Census of India 2011 (Language Table C-16 / Mother Tongue Data)',
      'George A. Grierson, Linguistic Survey of India (Vol. V, Western Maithili Classifications)',
      'Bajjika Sahitya Sammelan, Muzaffarpur'
    ]
  },

  // 6. URDU
  {
    id: 'urdu',
    name: 'Urdu',
    localName: 'اردو (उर्दू)',
    category: 'Official State Language',
    classification: 'Indo-Aryan (Central group / Hindustani standard with Perso-Arabic vocabulary)',
    scholarlyClassificationNote:
      'A major literary language of South Asia that developed from the Khariboli dialect of the Delhi-Agra region, enriched by Persian, Arabic, and regional Hindavi traditions. In Bihar, it has had an illustrious history since the Sultanate and Mughal eras.',
    officialStatus: 'Second Official Language of the State',
    primaryRegions: ['Magadh', 'Tirhut', 'Mithila', 'Purnia'],
    associatedDistricts: [
      'patna',
      'gaya',
      'muzaffarpur',
      'darbhanga',
      'bhagalpur',
      'siwan',
      'purnia',
      'katihar'
    ],
    traditionalScripts: ['Perso-Arabic (Nastaliq)'],
    primaryScript: 'Perso-Arabic (Nastaliq script)',
    overview:
      'Urdu is the second official language of Bihar, recognized in 1980 under the Bihar Official Language (Amendment) Act—making Bihar the first Indian state to accord Urdu official status. Bihar has produced legendary Urdu poets, freedom fighters, and institutions such as the Khuda Bakhsh Oriental Public Library.',
    literaryTradition:
      'Patna (historically Azimabad) was celebrated as a sister capital of Urdu poetry alongside Delhi and Lucknow. Masters like Shad Azimabadi, Bismil Azimabadi (author of the immortal patriotic anthem "Sarfaroshi ki Tamanna"), Kalimuddin Ahmad (revered literary critic), and Akhtar Orenvi created a profound literary corpus spanning ghazals, nazms, marsiyas, and literary theory.',
    oralTraditions: [
      {
        title: 'Mushaira & Dastangoi',
        hindiTitle: 'मुशायरा एवं दास्तानगोई',
        genre: 'Poetic Recitation & Oral Storytelling',
        culturalContext:
          'Nocturnal assemblies of poets and listeners held in courtyards, college auditoriums, and community halls across Patna, Gaya, and Darbhanga.',
        description: 'Living public performance culture of recited verse and heroic tales.'
      },
      {
        title: 'Sufiana Qawwali of Maner Sharif',
        hindiTitle: 'मनेर शरीफ की कव्वाली',
        genre: 'Sufi Devotional Music',
        culturalContext:
          'Sung at the 700-year-old dargah of Makhdum Yahya Maneri and Makhdum Shah Daulat, weaving Persian, Hindavi, and Urdu mystic couplets.',
        description: 'Choral sufi devotional music seeking spiritual ecstasy and unity.',
        musicTrackId: 'sufi-qawwali-maner-sharif'
      }
    ],
    notableFigures: [
      {
        name: 'Bismil Azimabadi',
        period: '1901 – 1978 CE',
        role: 'Freedom Fighter & Patriotic Poet',
        notableWorks: ['Sarfaroshi ki Tamanna'],
        contribution:
          'Authored the immortal poem "Sarfaroshi ki Tamanna" in Patna in 1921, which became the rallying anthem of Bhagat Singh, Ram Prasad Bismil, and the Indian freedom struggle.'
      },
      {
        name: 'Shad Azimabadi',
        period: '1846 – 1927 CE',
        role: 'Classical Urdu Ghazal Maestro',
        notableWorks: ['Kulliyat-e-Shad', 'Nawa-e-Watan'],
        contribution:
          'One of the foremost classical Urdu poets of his era, celebrated for his philosophical clarity, ethical warmth, and deep attachment to Patna.'
      }
    ],
    festivalConnections: [
      {
        festivalId: 'sufi-urs-maner',
        festivalName: 'Urs of Maner Sharif',
        role: 'Centuries-old annual spiritual assembly where Urdu and Hindavi Sufi kalam is sung with reverence.'
      }
    ],
    musicTrackIds: ['sufi-qawwali-maner-sharif'],
    samplePhrase: {
      text: 'آپ کا مزاج کیسا ہے؟ بہار کی ادبی روایت میں آپ کا خیر مقدم ہے۔',
      script: 'Perso-Arabic (Nastaliq: آپ کا مزاج کیسا ہے؟)',
      meaning: 'How are you? You are most welcome to the literary heritage of Bihar.',
      context: 'Refined and polite greeting in standard Urdu.'
    },
    sampleLiteraryPassage: {
      workTitle: 'Sarfaroshi ki Tamanna (Patna, 1921)',
      author: 'Bismil Azimabadi',
      originalText: 'سرفروشی کی تمنا اب ہمارے دل میں ہے، دیکھنا ہے زور کتنا بازوئے قاتل میں ہے۔',
      script: 'Perso-Arabic (Nastaliq)',
      translations: {
        en: 'The desire for self-sacrifice is now in our hearts; let us see how much strength remains in the arm of the oppressor.',
        hi: 'सरफ़रोशी की तमन्ना अब हमारे दिल में है, देखना है ज़ोर कितना बाज़ू-ए-क़ातिल में है।',
        ur: 'سرفروشی کی تمنا اب ہمارے دل میں ہے، دیکھنا ہے زور کتنا بازوئے قاتل میں ہے۔'
      },
      commentary:
        'Composed by Bismil Azimabadi in Patna in 1921, this poem became an immortal anthem of the Indian Independence Movement.'
    },
    censusNote:
      'Census of India 2011 records approximately 8.98 million speakers in Bihar who reported Urdu as their mother tongue (making it the second largest recorded mother tongue group in the state).',
    sources: [
      'Bihar Official Language (Amendment) Act, 1980 (Designating Urdu as Second Official Language)',
      'Census of India 2011 (Language Table C-16)',
      'Bihar Urdu Academy, Patna',
      'Khuda Bakhsh Oriental Public Library Records'
    ]
  },

  // 7. SURJAPURI
  {
    id: 'surjapuri',
    name: 'Surjapuri',
    localName: 'सुरजापुरी (সুরজাপুরী)',
    category: 'Documented Speech Variety',
    classification: 'Indo-Aryan (Eastern group / Kamatapuri-Maithili transition)',
    scholarlyClassificationNote:
      'Spoken in the northeastern district of Kishanganj and adjacent tehsils of Purnia and Katihar (historically known as the Surjapur pargana). It represents an intricate linguistic bridge sharing grammatical and lexical affinities with Maithili, Bengali, and Rajbanshi / Kamatapuri.',
    officialStatus: 'Documented Speech Variety / Regional Variety',
    primaryRegions: ['Purnia'],
    associatedDistricts: ['kishanganj', 'purnia', 'katihar', 'araria'],
    traditionalScripts: ['Devanagari', 'Bengali / Kaithi (historical)'],
    primaryScript: 'Devanagari',
    overview:
      'Surjapuri is the everyday mother tongue of the northeastern borderlands of Bihar along the Mahananda river basin. Reflecting the historical interactions of Bihar, Bengal, and the Himalayan foothills, it is celebrated for its soft cadence, rich proverbs, and tea-garden agricultural life.',
    literaryTradition:
      'Surjapuri has preserved a vibrant oral culture consisting of wedding songs, harvest chants, and folk riddles. In recent decades, cultural researchers and local writers in Kishanganj have documented its grammar, folktales, and community poetry.',
    oralTraditions: [
      {
        title: 'Mahananda Riverine Ballads',
        hindiTitle: 'महानंदा लोक गीत',
        genre: 'Riverine Folk Ballad',
        culturalContext:
          'Sung by boatmen and farming communities along the floodplains of the Mahananda and Mechi rivers.',
        description: 'Melodic songs reflecting the ebb and flow of river life.'
      }
    ],
    notableFigures: [
      {
        name: 'Regional Oral Custodians',
        period: 'Living Tradition',
        role: 'Community Elders & Folklorists',
        notableWorks: ['Surjapuri Lok Sahitya'],
        contribution:
          'Active cultural preservation efforts documenting local proverbs and wedding songs in the Surjapur region.'
      }
    ],
    festivalConnections: [],
    musicTrackIds: [],
    samplePhrase: {
      text: 'तुमरार हाल-चाल केमन आचे? सुरजापुरी माटीत आपनार स्वागत आचे।',
      script: 'Devanagari',
      meaning: 'How are you? You are welcomed to the soil of Surjapur.',
      context: 'Traditional community greeting in Surjapuri.'
    },
    censusNote:
      'Census of India 2011 records approximately 2.25 million speakers reporting Surjapuri as their mother tongue (concentrated mainly in Kishanganj, Purnia, and Katihar).',
    sources: [
      'Census of India 2011 (Language Table C-16 / Mother Tongue Data)',
      'Central Institute of Indian Languages (CIIL), Mysuru',
      'District Gazetteer of Purnea and Kishanganj'
    ]
  },

  // 8. HINDI
  {
    id: 'hindi',
    name: 'Hindi',
    localName: 'हिंदी (मानक हिंदी)',
    category: 'Official State Language',
    classification: 'Indo-Aryan (Central group / Standard literary Hindustani)',
    scholarlyClassificationNote:
      'Standard Hindi serves as the official state language of Bihar and the pan-Indian national link language. Bihar has contributed foundational pillars to modern Hindi prose, regional realism (Anchalikta), and epic poetry.',
    officialStatus: 'Principal Official Language of the State',
    primaryRegions: ['Statewide' as any],
    associatedDistricts: [
      'patna',
      'muzaffarpur',
      'bhojpur',
      'gaya',
      'bhagalpur',
      'purnia',
      'begusarai',
      'darbhanga'
    ],
    traditionalScripts: ['Devanagari'],
    primaryScript: 'Devanagari',
    overview:
      'Standard Hindi is the principal official language of the Government of Bihar, used in administration, the legislature, judiciary, education, and widespread journalism. Bihar is globally renowned as the birthplace of modern Hindi regional fiction, pioneering Hindi publishing houses, and monumental national poets.',
    literaryTradition:
      'The soil of Bihar has nurtured literary giants of Hindi literature: Rashtrakavi Ramdhari Singh Dinkar (whose fiery national epics Rashmirathi and Urvashi defined 20th-century poetry), Phanishwar Nath Renu (whose 1954 masterpiece Maila Anchal founded the Anchalik Upanyas movement), Acharya Shiv Pujan Sahay (author of Dehati Duniya), Devaki Nandan Khatri (pioneer of mystery fiction Chandrakanta), and Rambriksh Benipuri (fearless essayist and freedom fighter).',
    oralTraditions: [
      {
        title: 'Kavi Sammelan Tradition',
        hindiTitle: 'कवि सम्मेलन परंपरा',
        genre: 'Public Poetry Gathering',
        culturalContext:
          'Public poetry assemblies celebrated across Patna’s historic Gandhi Maidan, district libraries, and universities where thousands gather to listen to literary recitations.',
        description: 'Vibrant living tradition of public declamation and patriotic poetry.'
      }
    ],
    notableFigures: [
      {
        name: 'Ramdhari Singh Dinkar',
        period: '1908 – 1974 CE',
        role: 'Rashtrakavi (National Poet) & Essayist',
        personalityId: 'ramdhari-singh-dinkar',
        notableWorks: ['Rashmirathi', 'Urvashi', 'Sanskriti ke Char Adhyay'],
        contribution:
          'One of the greatest Hindi poets of modern India, awarded the Jnanpith Award (1972) and Padma Bhushan. His work combines fiery patriotic vigor with deep philosophical humanism.'
      },
      {
        name: 'Phanishwar Nath Renu',
        period: '1921 – 1977 CE',
        role: 'Novelist & Master of Regional Fiction',
        personalityId: 'phanishwar-nath-renu',
        notableWorks: ['Maila Anchal', 'Parti Parikatha', 'Mare Gaye Gulfam (Teesri Kasam)'],
        contribution:
          'Created the landmark novel Maila Anchal (1954), weaving the authentic sounds, folk songs, idioms, and social landscape of rural Purnia into the mainstream of world literature.'
      }
    ],
    festivalConnections: [],
    musicTrackIds: [],
    samplePhrase: {
      text: 'नमस्ते! बिहार की गौरवशाली ज्ञान एवं साहित्य परंपरा में आपका स्वागत है।',
      script: 'Devanagari',
      meaning: 'Greetings! Welcome to the glorious knowledge and literary heritage of Bihar.',
      context: 'Standard courteous greeting in formal Hindi.'
    },
    sampleLiteraryPassage: {
      workTitle: 'Rashmirathi (Canto III)',
      author: 'Ramdhari Singh Dinkar',
      originalText: 'वर्षों तक वन में घूम-घूम, बाधा-विघ्नों को चूम-चूम, सह धूप-घाम, पानी-पत्थर, पांडव आये कुछ और निखर।',
      script: 'Devanagari',
      translations: {
        en: 'Roaming the forests for years, braving hardships, enduring scorching heat, rain and stone, the Pandavas emerged all the more radiant.',
        hi: 'वर्षों तक वन में घूम-घूम, बाधा-विघ्नों को चूम-चूम, सह धूप-घाम, पानी-पत्थर, पांडव आये कुछ और निखर।'
      },
      commentary:
        'Dinkar’s legendary lines from Rashmirathi, symbolizing perseverance, resilience, and inner strength.'
    },
    censusNote:
      'Census of India 2011 reports Hindi as the language of official record and education across Bihar, with millions of respondents reporting regional speech varieties under the broader Hindi language umbrella.',
    sources: [
      'Official Language Act, Government of Bihar',
      'Sahitya Akademi, New Delhi',
      'Census of India 2011 (Language Table C-16)'
    ]
  }
];

export const TOPIC_LOCALIZATION_SAMPLES: Array<{
  id: string;
  topicTitle: string;
  englishExplanation: string;
  translations: LocalizedTopicText;
  culturalContext: string;
}> = [
  {
    id: 'chhath-prasad-blessing',
    topicTitle: 'Chhath Mahaparva Invocation',
    englishExplanation:
      'Demonstration of topic-level localization: Only this specific ritual verse changes when toggling languages, while the rest of the application remains unchanged.',
    translations: {
      en: 'O Sun God, seated upon your radiant chariot of seven horses, grant purity to our waters and health to our families.',
      hi: 'हे भगवान सूर्य, सात घोड़ों के तेजस्वी रथ पर विराजमान, हमारे जलों को पावन और परिवारों को आरोग्य प्रदान करें।',
      mai: 'हे आदित्य देव, सातहु घोड़ाक रथ पर सवार, हमर जल-पोखर केँ पवित्र आ परिवार केँ निरोग करू।',
      bho: 'ए सुरुज देव, सतरंग घोड़ा के रथ प असवार, हमनी के नदिया-पोखरा के निर्मल आ घरे-घरे सुख-समृद्धि दीं।'
    },
    culturalContext:
      'Chhath Puja prayer recited by devotees standing waist-deep in river waters at dawn.'
  },
  {
    id: 'vidyapati-bhairavi',
    topicTitle: 'Vidyapati Devotional Couplet',
    englishExplanation:
      'Topic-level translation showing how classical Maithili verse is rendered into modern Hindi and English without translating global UI.',
    translations: {
      en: 'Victory to the Divine Mother Bhairavi, who quells all fear in the universe and nurtures life with boundless compassion.',
      hi: 'जय जय माँ भैरवी, जो संसार के समस्त भयों का नाश करती हैं और अनंत करुणा से जीवन का पोषण करती हैं।',
      mai: 'जय जय भैरवि असुर भयावनि, पशुपति भामिनि माया, सहज दयालु जगदम्बा!'
    },
    culturalContext:
      'Opening invocatory verse composed by Mahakavi Vidyapati in 15th-century Mithila.'
  },
  {
    id: 'bhojpuri-migration-verse',
    topicTitle: 'Bhikhari Thakur Separation Stanza',
    englishExplanation:
      'Topic-level localized verse from the folk theater play Bidesiya.',
    translations: {
      en: 'My beloved has departed for distant lands across the great river; the season turns and the hearth waits for his return.',
      hi: 'प्रियतम सुदूर परदेस चले गए हैं; ऋतुएं बदल रही हैं और घर की दहलीज उनकी राह तक रही है।',
      bho: 'पियवा गइले कलकतवा ए सजनी, कइसे कटे दिन-रात? हियरा में उठेला पीर भारी।'
    },
    culturalContext:
      'Lines from Bhikhari Thakur’s Bidesiya, performed in rural folk theatre across western Bihar.'
  }
];
