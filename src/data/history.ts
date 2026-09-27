import { HistoricalEra, HistoricalEvent } from '../types';

export const HISTORICAL_ERAS: HistoricalEra[] = [
  // 1. PREHISTORY & EARLY ARCHAEOLOGY
  {
    id: 'prehistory-archaeology',
    title: 'Prehistory & Early Archaeology',
    hindiTitle: 'प्रागैतिहासिक काल एवं प्रारंभिक पुरातत्व',
    period: 'c. 2500 – 1000 BCE',
    startYearOrder: -2500,
    dateLabel: 'Late Stone Age to Neolithic / Chalcolithic',
    summary:
      'Archaeologically verified Neolithic and Chalcolithic settlements along the Ganga and its tributaries, characterized by bone tools, microliths, and early agrarian hearths.',
    hindiSummary:
      'गंगा और उसकी सहायक नदियों के कछार में नवपाषाण और ताम्रपाषाण कालीन बस्तियों के पुरातात्विक साक्ष्य, जो हड्डी के औजारों, सूक्ष्म पाषाणों और प्रारंभिक कृषि संस्कृति को दर्शाते हैं।',
    historicalGeography:
      'Riverine alluvial terraces of Saran, Vaishali, and the southern hilly fringes of Munger and Rohtas (not yet politically unified under modern boundaries).',
    keyThemes: [
      'Neolithic Bone Tool Technology',
      'Charred Cereal Agriculture',
      'Cyclopean Masonry',
      'Pre-Iron Riverine Settlements'
    ],
    survivingLandmarks: [
      'Chirand Archaeological Mound (Saran)',
      'Paisra Mesolithic Site (Munger)',
      'Cyclopean Wall of Rajgir (Nalanda)'
    ],
    relatedRegions: ['Saran', 'Magadh', 'Tirhut'],
    sources: [
      'Archaeological Survey of India (Excavation Reports on Chirand, Saran)',
      'Indian Council of Historical Research (Prehistory of the Middle Ganga Plain)',
      'B.P. Sinha, Archaeology & Art of India (Sundep, 1989)'
    ],
    coverImage: '/assets/images/barabar_caves_bihar_1789937792685.jpg',
    events: [
      {
        id: 'chirand-neolithic-settlement',
        title: 'Neolithic Bone Tool Horizon at Chirand',
        hindiTitle: 'चिरांद का नवपाषाण कालीन अस्थि-उपकरण स्थल',
        eraId: 'prehistory-archaeology',
        dateLabel: 'c. 2500 – 1500 BCE',
        approximateYear: 'c. 2000 BCE',
        location: 'Chirand (near Doriganj), Saran District',
        historicalRegion: 'Ganga-Ghaghara Confluence (Pre-Vajji Plain)',
        districtId: 'saran',
        keyActors: ['Neolithic Riverine Farming Communities'],
        description:
          'Excavations conducted by the Directorate of Archaeology and ASI revealed deep Neolithic strata at Chirand, yielding thousands of sophisticated bone tools (scrapers, needles, arrowheads carved from deer antler), charred remains of rice, barley, and wheat, and circular wattle-and-daub pit dwellings.',
        evidenceType: 'Archaeological Excavation',
        survivingEvidence:
          'Extensive collections of polished antler bone implements, terracotta spindle whorls, and grey-ware pottery curated in the Patna Museum and Bihar Museum.',
        whatRemainsToday:
          'The Chirand archaeological mound standing above the northern bank of the Ganga in Saran district, designated as a protected heritage site.',
        sources: [
          'Archaeological Survey of India, Indian Archaeology: A Review (1962–63 to 1970–71)',
          'Verma, B.S., Chirand Excavation Report (Directorate of Archaeology, Bihar)'
        ]
      },
      {
        id: 'rajgir-cyclopean-wall',
        title: 'Erection of the Cyclopean Wall of Rajgir',
        hindiTitle: 'राजगीर की विशाल साइक्लोपियन पाषाण प्राचीर',
        eraId: 'prehistory-archaeology',
        dateLabel: 'c. 1000 – 600 BCE',
        approximateYear: 'c. 800 BCE',
        location: 'Girivraja (Modern Rajgir), Nalanda District',
        historicalRegion: 'Ancient Magadha (Barabar-Rajgir Hill Basin)',
        districtId: 'nalanda',
        keyActors: ['Early Magadhan Chieftains & Guild Builders'],
        description:
          'A colossal, 40-kilometer perimeter of unmortared, undressed stone boulders encircling the ancient hill capital of Girivraja. Built to fortify the valley against invaders, it represents one of the oldest dry-stone monumental fortification works in South Asia.',
        evidenceType: 'Architectural Monument',
        survivingEvidence:
          'Continuous stone ramparts up to 4 meters high and 3 meters thick, visible along the ridges of the Vaibhara, Vipula, and Ratnagiri hills.',
        whatRemainsToday:
          'Substantial stretches of the ancient Cyclopean Wall running along the Rajgir ridge, maintained by the Archaeological Survey of India.',
        heritageSiteId: 'nalanda-ruins',
        sources: [
          'Archaeological Survey of India, Rajgir: ASI Archaeological Guide (A. Ghosh)',
          'Cunningham, Alexander, Archaeological Survey of India Reports (Vol. I & III)'
        ]
      }
    ]
  },

  // 2. MAHAJANAPADAS & THE FIRST REPUBLICS
  {
    id: 'mahajanapadas-republics',
    title: 'Mahajanapadas & Republican Assemblies',
    hindiTitle: 'महाजनपद काल एवं वैशाली का गणतंत्र',
    period: 'c. 600 – 400 BCE',
    startYearOrder: -600,
    dateLabel: 'Early Historic Period (Second Urbanization)',
    summary:
      'The rise of territorial states and oligarchical clan republics across the eastern Gangetic plain: Magadha south of the Ganga, the Vajji confederacy in the north, and Anga in the east.',
    hindiSummary:
      'पूर्वी गंगा के मैदान में महाजनपदों और गणराज्यों का उदय: गंगा के दक्षिण में मगध, उत्तर में वज्जि संघ (वैशाली), और पूर्व में अंग महाजनपद।',
    historicalGeography:
      'Divided among distinct polities: Magadha (capital Girivraja/Rajgir), Vajji Confederacy (capital Vaishali), Anga (capital Champa near Bhagalpur), and Videha (Mithila).',
    keyThemes: [
      'Gana-Sangha (Republican Assembly Governance)',
      'Northern Black Polished Ware (NBPW) Urbanization',
      'Magadhan Territorial Centralization',
      'Founding of Pataliputra Outpost'
    ],
    survivingLandmarks: [
      'Raja Vishal Ka Garh (Vaishali)',
      'Abhisheka Pushkarini Coronation Tank (Vaishali)',
      'Bimbisara Jail & Ajatashatru Stupa (Rajgir)'
    ],
    relatedRegions: ['Tirhut', 'Magadh', 'Anga', 'Mithila'],
    sources: [
      'Romila Thapar, From the Lineage to the State (Oxford University Press, 1984)',
      'Upinder Singh, A History of Ancient and Early Medieval India (Pearson, 2008)',
      'ASI Excavation Reports: Vaishali (K.P. Jayaswal Research Institute)'
    ],
    coverImage: '/assets/images/ashokan_pillar_vaishali_1789937849903.jpg',
    events: [
      {
        id: 'vaishali-licchavi-republic',
        title: 'The Vajji Confederacy & Sansthagara at Vaishali',
        hindiTitle: 'वैशाली में वज्जि महासंघ एवं संस्थागार की शासन प्रणाली',
        eraId: 'mahajanapadas-republics',
        dateLabel: 'c. 6th Century BCE',
        approximateYear: 'c. 550 BCE',
        location: 'Vaishali (Basarh)',
        historicalRegion: 'Vajji Confederacy (Tirhut Plain)',
        districtId: 'vaishali',
        keyActors: ['Licchavi Clan', 'Raja Chetaka', 'Vajji Gana-Sangha'],
        description:
          'The Licchavis of Vaishali headed the powerful eight-clan Vajji confederacy. Governed not by hereditary kingship but by an elected council of clan leaders meeting in the central Sansthagara (assembly hall), it is documented in Buddhist and Jaina canonical texts as an early model of deliberative democracy.',
        evidenceType: 'Archaeological Excavation',
        survivingEvidence:
          'The earthen defensive embankment and brick citadel of Raja Vishal Ka Garh, the sacred Abhisheka Pushkarini coronation tank, and NBPW pottery layers.',
        whatRemainsToday:
          'The protected archaeological mounds of Basarh and Kolhua in Vaishali, maintained as protected heritage by the ASI.',
        heritageSiteId: 'vaishali-ashokan-pillar',
        placeId: 'vaishali-republic',
        sources: [
          'Altekar, A.S., State and Government in Ancient India (Motilal Banarsidass)',
          'Sinha, B.P. & Roy, S.R., Vaishali Excavations 1958–1962 (K.P. Jayaswal Research Institute)'
        ]
      },
      {
        id: 'foundation-of-pataliputra-outpost',
        title: 'Ajatashatru Fortifies Pataligrama on the Ganga',
        hindiTitle: 'अजातशत्रु द्वारा पाटलिग्राम में सैन्य छावनी की स्थापना',
        eraId: 'mahajanapadas-republics',
        dateLabel: 'c. 490 BCE',
        approximateYear: 'c. 490 BCE',
        location: 'Pataligrama (Modern Patna)',
        historicalRegion: 'Border of Magadha and the Vajji Confederacy',
        districtId: 'patna',
        keyActors: ['Ajatashatru (Haryanka Dynasty)', 'Sunidha & Vassakara'],
        description:
          'During his extended conflict against the Licchavis of Vaishali, King Ajatashatru dispatched his ministers Sunidha and Vassakara to construct a fortified garrison at the village of Pataligrama, situated strategically at the confluence of the Son and Ganga rivers. This strategic outpost evolved into Pataliputra, imperial capital of northern India for centuries.',
        evidenceType: 'Contemporary Manuscript / Chronicle',
        survivingEvidence:
          'Passages in the Buddhist Digha Nikaya (Mahaparinibbana Sutta) recording the fortification and early brick and wooden palisade fragments excavated at Kumrahar and Bulandibagh.',
        whatRemainsToday:
          'Excavated Mauryan and pre-Mauryan timber palisade sections preserved in the Patna Museum and Kumrahar archaeological park.',
        sources: [
          'Digha Nikaya (Mahaparinibbana Sutta, trans. T.W. Rhys Davids)',
          'Waddell, L.A., Report on the Excavations at Pataliputra (Bengal Secretariat Press, 1903)'
        ]
      }
    ]
  },

  // 3. BUDDHA, MAHAVIRA & THE INTELLECTUAL AWAKENING
  {
    id: 'buddha-mahavira-awakening',
    title: 'Buddha, Mahavira & Intellectual Awakening',
    hindiTitle: 'बुद्ध, महावीर एवं वैचारिक जागरण',
    period: 'c. 6th – 5th Century BCE',
    startYearOrder: -560,
    dateLabel: 'Axial Age of Spiritual & Philosophical Exploration',
    summary:
      'The philosophical revolution that challenged ritual orthodoxy: Gautama Buddha attained supreme Enlightenment at Bodh Gaya; Lord Mahavira expounded Ahimsa across Magadha and attained Nirvana at Pavapuri.',
    hindiSummary:
      'वैचारिक और दार्शनिक क्रांति का युग: बोधगया में तथागत बुद्ध को संबोधि प्राप्त हुई; भगवान महावीर ने मगध व अंग में अहिंसा का संदेश देकर पावापुरी में निर्वाण प्राप्त किया।',
    historicalGeography:
      'Centered on Uruvela/Gaya, Rajagriha, Vaishali, Pavapuri, and Champapuri.',
    keyThemes: [
      'The Bodhi Enlightenment & Middle Way',
      'Jaina Doctrine of Ahimsa & Anekantavada',
      'The First Buddhist Council at Rajgir',
      'Establishment of the Bhikkhuni Sangha'
    ],
    survivingLandmarks: [
      'Mahabodhi Temple Complex (UNESCO World Heritage Site, Bodh Gaya)',
      'Vulture Peak / Gridhrakuta & Sattapani Cave (Rajgir)',
      'Jal Mandir & Samosharan (Pavapuri, Nalanda)',
      'Relic Stupa of Vaishali'
    ],
    relatedRegions: ['Magadh', 'Tirhut', 'Anga'],
    sources: [
      'Archaeological Survey of India (Mahabodhi Temple Dossier, UNESCO)',
      'Paul Dundas, The Jains (Routledge, 2002)',
      'Etienne Lamotte, History of Indian Buddhism (Peeters Press, 1988)'
    ],
    coverImage: '/assets/images/mahabodhi_temple_gaya_1789937719331.jpg',
    events: [
      {
        id: 'buddha-enlightenment-bodh-gaya',
        title: 'Siddhartha Gautama’s Enlightenment under the Bodhi Tree',
        hindiTitle: 'बोधगया में बोधिवृक्ष तले बुद्धत्व की प्राप्ति',
        eraId: 'buddha-mahavira-awakening',
        dateLabel: 'c. 528 BCE',
        approximateYear: 'c. 528 BCE',
        location: 'Uruvela (Modern Bodh Gaya), Gaya District',
        historicalRegion: 'Southern Magadha (Phalgu River Basin)',
        districtId: 'gaya',
        keyActors: ['Siddhartha Gautama (Gautama Buddha)', 'Sujata'],
        description:
          'After years of ascetic wandering along the Phalgu (Niranjana) river, Siddhartha Gautama accepted milk-rice from Sujata and entered deep meditation beneath a sacred Ficus religiosa tree, achieving supreme awakening (Samyak Sambodhi). He formulated the Four Noble Truths and the Eightfold Path.',
        evidenceType: 'Archaeological Excavation',
        survivingEvidence:
          'The Vajrasana (Diamond Throne) stone slab erected by Emperor Ashoka, the successive architectural layers of the Mahabodhi Temple, and sandstone railings dating from the 3rd to 1st century BCE.',
        whatRemainsToday:
          'The UNESCO World Heritage Mahabodhi Temple Complex, with its 55-meter spire and descendant Bodhi Tree, attracting pilgrims from around the world.',
        heritageSiteId: 'mahabodhi-temple',
        placeId: 'bodh-gaya',
        personalityId: 'buddha',
        sources: [
          'UNESCO World Heritage Centre, Mahabodhi Temple Complex Inscription (Criteria i, ii, iii, iv, vi, 2002)',
          'Cunningham, Alexander, Mahabodhi, or the Great Buddhist Temple Under the Bodhi Tree (W.H. Allen, 1892)'
        ]
      },
      {
        id: 'mahavira-nirvana-pavapuri',
        title: 'Lord Mahavira Expounds Ahimsa & Attains Nirvana',
        hindiTitle: 'भगवान महावीर द्वारा अहिंसा का प्रतिपादन एवं पावापुरी में निर्वाण',
        eraId: 'buddha-mahavira-awakening',
        dateLabel: 'c. 527 BCE',
        approximateYear: 'c. 527 BCE',
        location: 'Apapapuri (Modern Pavapuri), Nalanda District',
        historicalRegion: 'Central Magadha',
        districtId: 'nalanda',
        keyActors: ['Vardhamana Mahavira (24th Tirthankara)', 'King Hastipala'],
        description:
          'Vardhamana Mahavira, born into the Jnatrika clan of Kundagrama near Vaishali, spent over three decades walking barefoot across Magadha, Anga, and Videha expounding the philosophical tenets of Ahimsa (non-violence), Anekantavada (multi-faceted reality), and Aparigraha. He attained Nirvana at Pavapuri in the palace of King Hastipala.',
        evidenceType: 'Contemporary Manuscript / Chronicle',
        survivingEvidence:
          'Textual accounts in the Kalpa Sutra and Acharanga Sutra, medieval Jain inscriptions, and the venerated sacred water tank at Pavapuri.',
        whatRemainsToday:
          'The white marble Jal Mandir standing in the center of a lotus-filled lake at Pavapuri, visited annually during the Diwali festival of lamps.',
        heritageSiteId: 'pavapuri-jal-mandir',
        placeId: 'pavapuri',
        sources: [
          'Jacobi, Hermann, Gaina Sutras (Sacred Books of the East, Vol. XXII & XLV)',
          'Dundas, Paul, The Jains (Routledge, 2002)'
        ]
      },
      {
        id: 'first-buddhist-council-rajgir',
        title: 'The First Buddhist Council at Sattapani Cave',
        hindiTitle: 'सप्तपर्णी गुफा में प्रथम बौद्ध संगीति',
        eraId: 'buddha-mahavira-awakening',
        dateLabel: 'c. 483 BCE',
        approximateYear: 'c. 483 BCE',
        location: 'Sattapani (Saptaparni) Cave, Rajgir',
        historicalRegion: 'Magadha (Girivraja)',
        districtId: 'nalanda',
        keyActors: ['Mahakassapa', 'Ananda', 'Upali', 'King Ajatashatru'],
        description:
          'Convened immediately following the Mahaparinirvana of the Buddha under the patronage of King Ajatashatru, five hundred senior monks assembled inside the Sattapani cave on Vaibhara Hill. Venerable Upali recited the Vinaya Pitaka (monastic discipline) and Ananda recited the Sutta Pitaka (discourses), creating the foundational oral canon of Buddhism.',
        evidenceType: 'Archaeological Excavation',
        survivingEvidence:
          'The natural cave complex on the northern slope of Vaibhara Hill and early monastic stone platforms cleared during ASI surveys.',
        whatRemainsToday:
          'Sattapani Cave overlooking the Rajgir hot springs valley, protected by the Archaeological Survey of India.',
        sources: [
          'Vinaya Pitaka (Cullavagga, Chapter XI)',
          'ASI Archaeological Guide to Rajgir (A. Ghosh)'
        ]
      }
    ]
  },

  // 4. THE MAURYAN EMPIRE
  {
    id: 'mauryan-empire',
    title: 'The Mauryan Empire & Ashokan Dhamma',
    hindiTitle: 'मौर्य साम्राज्य एवं सम्राट अशोक का धम्म',
    period: 'c. 322 – 185 BCE',
    startYearOrder: -322,
    dateLabel: 'First Subcontinental Imperial State',
    summary:
      'Chandragupta Maurya and Chanakya established the first pan-Indian imperial administration centered at Pataliputra; Emperor Ashoka renounced warfare and inscribed moral edicts upon monolithic stone pillars.',
    hindiSummary:
      'पाटलिपुत्र से चंद्रगुप्त मौर्य और चाणक्य द्वारा भारत के प्रथम अखिल भारतीय साम्राज्य की स्थापना; सम्राट अशोक द्वारा कलिंग युद्धोपरांत युद्ध त्याग और स्तंभों पर धम्म संदेश का उत्कीर्णन।',
    historicalGeography:
      'Imperial capital at Pataliputra, with royal highway networks radiating across the subcontinent.',
    keyThemes: [
      'Pataliputra Wooden Palisade & 80-Pillared Hall',
      'Arthashastra Statecraft & Revenue Administration',
      'Monolithic Ashokan Pillars & Polished Stone Inscriptions',
      'Earliest Rock-Cut Cave Architecture at Barabar'
    ],
    survivingLandmarks: [
      'Kumrahar Pillared Hall Ruins (Patna)',
      'Kolhua Single Lion Pillar & Stupa (Vaishali)',
      'Lauriya Nandangarh & Rampurva Pillars (Champaran)',
      'Barabar & Nagarjuni Rock-Cut Caves (Jehanabad/Gaya)'
    ],
    relatedRegions: ['Magadh', 'Tirhut'],
    sources: [
      'Archaeological Survey of India (Excavation Reports at Kumrahar & Bulandibagh)',
      'Romila Thapar, Asoka and the Decline of the Mauryas (Oxford University Press, 1961)',
      'Upinder Singh, Political Violence in Ancient India (Harvard University Press, 2017)'
    ],
    coverImage: '/assets/images/barabar_caves_bihar_1789937792685.jpg',
    events: [
      {
        id: 'chandragupta-chanakya-pataliputra',
        title: 'Establishment of the Imperial Capital at Pataliputra',
        hindiTitle: 'पाटलिपुत्र में मौर्य साम्राज्य की स्थापना एवं अर्थशास्त्र',
        eraId: 'mauryan-empire',
        dateLabel: 'c. 322 BCE',
        approximateYear: 'c. 322 BCE',
        location: 'Pataliputra (Patna)',
        historicalRegion: 'Imperial Magadha',
        districtId: 'patna',
        keyActors: ['Chandragupta Maurya', 'Chanakya (Kautilya)', 'Megasthenes'],
        description:
          'Overthrowing the Nanda dynasty, Chandragupta Maurya unified the Gangetic plains into an expansive empire administered from Pataliputra. Greek ambassador Megasthenes described the capital as Palibothra: a sprawling city stretched nine miles along the Ganga, enclosed by a wooden palisade with 570 towers and 64 gates.',
        evidenceType: 'Archaeological Excavation',
        survivingEvidence:
          'Heavy sal-wood defensive palisade beams unearthed at Bulandibagh and Kumrahar during excavations by D.B. Spooner and L.A. Waddell.',
        whatRemainsToday:
          'Kumrahar Archaeological Park in Patna, preserving remnants of the Mauryan pillared hall and deep wooden palisades.',
        heritageSiteId: 'kumrahar-ruins',
        placeId: 'pataliputra-kumrahar',
        personalityId: 'chandragupta-maurya',
        sources: [
          'Spooner, D.B., Archaeological Survey of India Annual Report 1912–13',
          'McCrindle, J.W., Ancient India as Described by Megasthenes and Arrian (Calcutta, 1877)'
        ]
      },
      {
        id: 'ashoka-edicts-pillars-bihar',
        title: 'Ashoka Inscribes Pillars of Dhamma Across the Plain',
        hindiTitle: 'सम्राट अशोक के धम्म-स्तंभ एवं शिलालेख',
        eraId: 'mauryan-empire',
        dateLabel: 'c. 268 – 232 BCE',
        approximateYear: 'c. 250 BCE',
        location: 'Kolhua (Vaishali), Lauriya Nandangarh, Rampurva (Champaran)',
        historicalRegion: 'Tirhut & Champaran Royal Road',
        districtId: 'vaishali',
        keyActors: ['Emperor Ashoka (Devanampiya Piyadasi)'],
        description:
          'Following the Kalinga War, Emperor Ashoka renounced conquest by sword (dig-vijaya) in favor of conquest by righteousness (dhamma-vijaya). He quarried monolithic Chunar sandstone shafts, polished them to mirror-like luster, and inscribed Brahmi edicts enforcing non-violence, religious tolerance, and ethical governance.',
        evidenceType: 'Epigraphic Inscription',
        survivingEvidence:
          'The intact single-lion pillar of Kolhua, the complete inscribed 12-meter pillar of Lauriya Nandangarh, and the Rampurva capitals now housed in the National Museum and Rashtrapati Bhavan.',
        whatRemainsToday:
          'The Kolhua Ashokan Pillar overlooking the ancient relic stupa at Vaishali and the towering pillar of Lauriya Nandangarh in West Champaran.',
        heritageSiteId: 'vaishali-ashokan-pillar',
        placeId: 'vaishali-ashokan-pillar',
        personalityId: 'samrat-ashoka',
        sources: [
          'Hultzsch, E., Inscriptions of Asoka (Corpus Inscriptionum Indicarum, Vol. I, 1925)',
          'ASI Monument Dossiers (Kolhua, Lauriya Nandangarh)'
        ]
      },
      {
        id: 'barabar-caves-ajivika-dedication',
        title: 'Excavation of the Barabar Caves for the Ajivikas',
        hindiTitle: 'अशोक द्वारा आजीवक संतों को बराबर गुफाओं का समर्पण',
        eraId: 'mauryan-empire',
        dateLabel: 'c. 257 – 250 BCE',
        approximateYear: 'c. 257 BCE',
        location: 'Barabar Hills, Jehanabad / Gaya District',
        historicalRegion: 'Magadha Rock Hills',
        districtId: 'jehanabad',
        keyActors: ['Emperor Ashoka', 'Ajivika Ascetics'],
        description:
          'Emperor Ashoka excavated four rock-cut caves (Lomas Rishi, Sudama, Karan Chaupar, and Visva Zopri) into the solid granite of the Barabar Hills as monsoon retreats for ascetics of the heterodox Ajivika sect, demonstrating state patronage across diverse philosophical schools.',
        evidenceType: 'Architectural Monument',
        survivingEvidence:
          'Mirror-polished granite interior chambers, the arched chaitya facade of Lomas Rishi Cave, and original royal dedicatory Brahmi inscriptions on cave doorways.',
        whatRemainsToday:
          'The four Barabar Caves and nearby Nagarjuni Caves (dedicated by Ashoka’s grandson Dasharatha), preserved by the ASI.',
        heritageSiteId: 'barabar-caves',
        placeId: 'barabar-caves',
        sources: [
          'Archaeological Survey of India, Barabar Caves Heritage Dossier',
          'Basham, A.L., History and Doctrines of the Ajivikas (Luzac, 1951)'
        ]
      }
    ]
  },

  // 5. GUPTA ERA & CLASSICAL KNOWLEDGE
  {
    id: 'gupta-golden-age',
    title: 'The Imperial Guptas & Classical Sciences',
    hindiTitle: 'गुप्त साम्राज्य एवं शास्त्रीय विज्ञान का स्वर्णकाल',
    period: 'c. 319 – 550 CE',
    startYearOrder: 319,
    dateLabel: 'Classical Indo-Gangetic Era',
    summary:
      'Imperial consolidation originating in Magadha, marking watershed developments in mathematics and astronomy under Aryabhata, classical stone sculpture, and the founding of Nalanda Mahavihara.',
    hindiSummary:
      'मगध से उदित गुप्त साम्राज्य का काल; आर्यभट्ट द्वारा गणित व खगोलशास्त्र में युगांतरकारी शोध, शास्त्रीय पाषाण शिल्पकला, और नालंदा महाविहार की स्थापना।',
    historicalGeography:
      'Magadha plains centered on Pataliputra, with major intellectual workshops at Kusumpura (Patna) and Taregana.',
    keyThemes: [
      'Aryabhata & Mathematical Zero / Planetary Revolutions',
      'Foundation of Nalanda Monastic Complex',
      'Mundeshwari Temple Architecture',
      'Classical Sarnath-Magadha Sculpture Style'
    ],
    survivingLandmarks: [
      'Foundation Strata of Nalanda Monastery Site 1',
      'Mundeshwari Devi Temple (Kaimur, c. 635 CE inscription)',
      'Sultanganj Colossal Copper Buddha (found in Bhagalpur)'
    ],
    relatedRegions: ['Magadh', 'Bhojpur', 'Anga'],
    sources: [
      'Archaeological Survey of India (Excavations at Nalanda)',
      'Upinder Singh, A History of Ancient and Early Medieval India (Pearson)',
      'K.S. Shukla, Aryabhatiya of Aryabhata (Indian National Science Academy, 1976)'
    ],
    coverImage: '/assets/images/mundeshwari_temple_kaimur_1789937882692.jpg',
    events: [
      {
        id: 'aryabhata-astronomy-kusumpura',
        title: 'Aryabhata Authors the Aryabhatiya at Kusumpura',
        hindiTitle: 'कुसुमपुर में आर्यभट्ट द्वारा "आर्यभटीय" की रचना',
        eraId: 'gupta-golden-age',
        dateLabel: '499 CE',
        approximateYear: '499 CE',
        location: 'Kusumpura (Pataliputra / Taregana)',
        historicalRegion: 'Central Magadha',
        districtId: 'patna',
        keyActors: ['Aryabhata I'],
        description:
          'At the age of 23, astronomer and mathematician Aryabhata authored the foundational treatise Aryabhatiya at Kusumpura (Pataliputra). He introduced trigonometry, accurately calculated π (pi) to 3.1416, determined the Earth’s spherical shape and axial rotation, and scientifically explained solar and lunar eclipses.',
        evidenceType: 'Contemporary Manuscript / Chronicle',
        survivingEvidence:
          'Surviving palm-leaf copies and commentaries by Bhaskara I and Nilakantha Somayaji; astronomical tradition preserved at Taregana.',
        whatRemainsToday:
          'Taregana observatory memorial in Patna district, celebrated historically as Aryabhata’s observation site.',
        personalityId: 'aryabhata',
        sources: [
          'Shukla, K.S. & Sarma, K.V., Aryabhatiya of Aryabhata (Indian National Science Academy, New Delhi, 1976)',
          'Datta, B. & Singh, A.N., History of Hindu Mathematics (Asia Publishing House)'
        ]
      },
      {
        id: 'foundation-of-nalanda-mahavihara',
        title: 'Imperial Patronage Establishes Nalanda Mahavihara',
        hindiTitle: 'कुमारगुप्त प्रथम द्वारा नालंदा महाविहार की स्थापना',
        eraId: 'gupta-golden-age',
        dateLabel: 'c. 450 CE',
        approximateYear: 'c. 450 CE',
        location: 'Nalanda (Modern Bada Gaon)',
        historicalRegion: 'Central Magadha',
        districtId: 'nalanda',
        keyActors: ['Kumaragupta I (Shakraditya)'],
        description:
          'The monastic university of Nalanda was founded as a Buddhist Mahavihara during the reign of Gupta Emperor Kumaragupta I (referenced as Shakraditya by Xuanzang). Designed as an integrated campus of monasteries and lecture halls, it offered free residential instruction supported by royal endowments from surrounding villages.',
        evidenceType: 'Archaeological Excavation',
        survivingEvidence:
          'Successive architectural levels of Monastery Site 1 and Temple Site 3, Gupta seals, and baked-brick structural foundations.',
        whatRemainsToday:
          'The UNESCO World Heritage archaeological ruins of Nalanda, encompassing red-brick viharas, meditation cells, and votive stupas.',
        heritageSiteId: 'nalanda-ruins',
        placeId: 'nalanda-university',
        sources: [
          'Archaeological Survey of India, Nalanda: Excavation Reports & Site Guide (A. Ghosh)',
          'Beal, Samuel, Si-Yu-Ki: Buddhist Records of the Western World (Kegan Paul, 1884)'
        ]
      }
    ]
  },

  // 6. NALANDA, VIKRAMSHILA & THE PALA EMPIRE
  {
    id: 'pala-monastic-universities',
    title: 'The Pala Empire & International Mahaviharas',
    hindiTitle: 'पाल साम्राज्य एवं अंतरराष्ट्रीय महाविहार',
    period: 'c. 750 – 1161 CE',
    startYearOrder: 750,
    dateLabel: 'Golden Age of International Monastic Universities',
    summary:
      'Under the Pala dynasty, Bihar became the preeminent center of higher learning in Asia: Nalanda reached its zenith, Dharmapala founded Vikramshila, and scholars from China, Korea, and Tibet flocked to study philosophy, logic, and medicine.',
    hindiSummary:
      'पाल राजवंश के संरक्षण में बिहार एशिया का प्रमुख ज्ञान केंद्र बना: नालंदा अपने चरमोत्कर्ष पर पहुँचा, धर्मपाल ने विक्रमशिला की स्थापना की, और चीन, कोरिया व तिब्बत से विद्वान यहाँ दर्शन व चिकित्सा का अध्ययन करने आए।',
    historicalGeography:
      'Magadha and Anga regions, spanning Nalanda, Odantapuri (Bihar Sharif), and Vikramshila (Bhagalpur).',
    keyThemes: [
      'Xuanzang & Yijing’s Documented Scholarly Residencies',
      'Vikramshila Tantric & Logic Curriculum',
      'Kurkihar Metal Bronzes & Pala Sculpture',
      'Atisa Dipankara & The Transmission of Buddhism to Tibet'
    ],
    survivingLandmarks: [
      'Nalanda Mahavihara (UNESCO Site 1 to 11)',
      'Vikramshila University Ruins (Antichak, Bhagalpur)',
      'Kurkihar Bronze Hoard (curated in Patna Museum)'
    ],
    relatedRegions: ['Magadh', 'Anga'],
    sources: [
      'Archaeological Survey of India (Excavation Reports at Antichak, Vikramshila)',
      'Sanyal, Rajat, Epigraphy and the Pala Realm (Indian Historical Review, 2014)',
      'UNESCO World Heritage List (Archaeological Site of Nalanda Mahavihara, 2016)'
    ],
    coverImage: '/assets/images/vikramshila_ruins_bhagalpur_1789937817668.jpg',
    events: [
      {
        id: 'dharmapala-founds-vikramshila',
        title: 'King Dharmapala Establishes Vikramshila Mahavihara',
        hindiTitle: 'सम्राट धर्मपाल द्वारा विक्रमशिला महाविहार की स्थापना',
        eraId: 'pala-monastic-universities',
        dateLabel: 'c. 783 – 820 CE',
        approximateYear: 'c. 800 CE',
        location: 'Antichak, Bhagalpur District',
        historicalRegion: 'Ancient Anga Kingdom',
        districtId: 'bhagalpur',
        keyActors: ['Dharmapala (Pala Emperor)', 'Acharya Atisa Dipankara'],
        description:
          'Founded by Pala Emperor Dharmapala atop a bluff overlooking the Ganga, Vikramshila developed into one of Asia’s premier residential centers for advanced study in Buddhist logic (Nyaya), metaphysics, and Tantric philosophy. It housed over one hundred teachers and maintained celebrated scholars including Atisa Dipankara Srijnana.',
        evidenceType: 'Archaeological Excavation',
        survivingEvidence:
          'Excavated cruciform central stupa with terracotta plaques depicting Buddha, animals, and lay life; 208 monastic cells organized in a grand quadrangle.',
        whatRemainsToday:
          'The Vikramshila archaeological park at Antichak, managed by the Archaeological Survey of India with an on-site museum.',
        heritageSiteId: 'vikramshila-ruins',
        placeId: 'vikramshila-university',
        sources: [
          'Archaeological Survey of India, Excavations at Antichak (Vikramshila), Memoirs of the ASI',
          'Roerich, George, Biography of Dharmasvamin (Chag lo-tsa-ba Chos-rje-dpal) (K.P. Jayaswal Research Institute, 1959)'
        ]
      },
      {
        id: 'xuanzang-nalanda-studies',
        title: 'Xuanzang Spends Five Years at Nalanda Mahavihara',
        hindiTitle: 'युवान च्वांग (ह्वेनसांग) का नालंदा में अध्ययन एवं अध्यापन',
        eraId: 'pala-monastic-universities',
        dateLabel: '637 – 642 CE',
        approximateYear: '637 CE',
        location: 'Nalanda Mahavihara',
        historicalRegion: 'Central Magadha',
        districtId: 'nalanda',
        keyActors: ['Xuanzang (Hsuan-tsang)', 'Acharya Shilabhadra'],
        description:
          'Chinese pilgrim and scholar Xuanzang traveled over 10,000 kilometers along the Silk Road to reach Nalanda. He was accepted as a personal disciple by the octogenarian chancellor Shilabhadra, mastering Yogacara philosophy and Sanskrit logic before lecturing and copying hundreds of manuscripts to carry back to Chang’an.',
        evidenceType: 'Contemporary Manuscript / Chronicle',
        survivingEvidence:
          'Xuanzang’s eyewitness travelogue Datang Xiyu Ji (Great Tang Records on the Western Regions) and Huili’s biography of Xuanzang.',
        whatRemainsToday:
          'The Xuanzang Memorial Hall in Nalanda, co-established by the governments of India and China near the ancient excavation site.',
        heritageSiteId: 'nalanda-ruins',
        placeId: 'xuanzang-memorial',
        sources: [
          'Li Rongxi (trans.), The Great Tang Dynasty Record of the Western Regions (BDK English Tripitaka, 1996)',
          'Beal, Samuel, The Life of Hiuen-Tsiang by the Shaman Hwui Li (Trubner, 1911)'
        ]
      }
    ]
  },

  // 7. SHER SHAH SURI & MEDIEVAL REFORMS
  {
    id: 'sher-shah-suri-empire',
    title: 'Sher Shah Suri & The Sur Empire',
    hindiTitle: 'शेरशाह सूरी एवं सासाराम की वास्तुकला',
    period: '1540 – 1545 CE',
    startYearOrder: 1540,
    dateLabel: 'Administrative & Architectural Pinnacle',
    summary:
      'Sher Shah Suri ruled from Delhi and Sasaram, instituting administrative breakthroughs: standardizing the silver Rupiya, building the Grand Trunk Road network, establishing the Zabt land revenue system, and commissioning his monumental lake tomb at Sasaram.',
    hindiSummary:
      'सासाराम के शेरशाह सूरी का शासनकाल; चांदी के "रुपिया" का मानकीकरण, ग्रांड ट्रंक रोड (सड़क-ए-आज़म) का निर्माण, ज़ब्त भू-राजस्व प्रणाली, और सासाराम में जल-मकबरे का निर्माण।',
    historicalGeography:
      'Originating from Sasaram (Shahabad region), extending governance across northern India.',
    keyThemes: [
      'Introduction of the Standard Silver Rupiya (Precursor to Modern Rupee)',
      'Grand Trunk Road (Sadak-e-Azam) & Sarai Rest-house Network',
      'Zabt Agricultural Revenue Measurement',
      'Indo-Islamic Octagonal Floating Architecture'
    ],
    survivingLandmarks: [
      'Tomb of Sher Shah Suri (Sasaram, ASI National Monument)',
      'Rohtasgarh Hill Fortress (Rohtas)',
      'Tomb of Hasan Shah Suri (Sasaram)'
    ],
    relatedRegions: ['Bhojpur'],
    sources: [
      'Abbas Khan Sarwani, Tarikh-i-Sher Shahi (c. 1580 CE)',
      'Archaeological Survey of India (Sasaram Monument Records)',
      'Irfan Habib, Agrarian System of Mughal India (Oxford University Press)'
    ],
    coverImage: '/assets/images/sher_shah_suri_tomb_1789937780605.jpg',
    events: [
      {
        id: 'sher-shah-rupiya-currency-reform',
        title: 'Introduction of the Standard Silver Rupiya',
        hindiTitle: 'चांदी के मानक "रुपिया" सिक्के का प्रचलन',
        eraId: 'sher-shah-suri-empire',
        dateLabel: '1540 – 1542 CE',
        approximateYear: '1542 CE',
        location: 'Sasaram and Imperial Mints',
        historicalRegion: 'Sur Empire (Shahabad / Magadh)',
        districtId: 'rohtas',
        keyActors: ['Sher Shah Suri'],
        description:
          'Sher Shah completely reformed the chaotic medieval monetary system by introducing a tri-metallic currency standard. The core of this system was the Rupiya: a silver coin weighing 178 grains of pure silver (approximately 11.53 grams), alongside the copper Dam and gold Mohur. The term and weight ratio established the direct ancestor of modern Indian currency.',
        evidenceType: 'Numismatic Record',
        survivingEvidence:
          'Original silver Rupiya coins bearing the legend "Sher Shah Sultan Khalladallahu Mulkahu" preserved in the Reserve Bank of India Monetary Museum and Patna Museum.',
        whatRemainsToday:
          'The name and concept of the Indian Rupee (INR), originating directly from Sher Shah’s numismatic standard.',
        personalityId: 'sher-shah-suri',
        sources: [
          'Wright, H. Nelson, The Coinage and Metrology of the Sultans of Dehli (Oxford University Press, 1936)',
          'Sarwani, Abbas Khan, Tarikh-i-Sher Shahi (trans. B.P. Ambashthya, K.P. Jayaswal Research Institute)'
        ]
      },
      {
        id: 'sher-shah-tomb-sasaram',
        title: 'Construction of the Monumental Mausoleum at Sasaram',
        hindiTitle: 'सासाराम में कृत्रिम झील के मध्य भव्य अष्टकोणीय मकबरे का निर्माण',
        eraId: 'sher-shah-suri-empire',
        dateLabel: '1540 – 1545 CE',
        approximateYear: '1545 CE',
        location: 'Sasaram, Rohtas District',
        historicalRegion: 'Shahabad Plain',
        districtId: 'rohtas',
        keyActors: ['Sher Shah Suri', 'Mir Muhammad Aliwal Khan (Architect)'],
        description:
          'Designed by master builder Aliwal Khan, this 37-meter-high sandstone mausoleum rises from an octagonal stone plinth anchored in the center of an artificial square lake. Combining indigenous pillared chhatris with an immense stone dome that rivals the Gol Gumbaz, it represents the high-water mark of Afghan-Sur architecture in India.',
        evidenceType: 'Architectural Monument',
        survivingEvidence:
          'Intact three-tiered sandstone octagonal structure, decorative colored glazed tiles, and stone causeway bridge spanning the water reservoir.',
        whatRemainsToday:
          'The Tomb of Sher Shah Suri, maintained as a Monument of National Importance by the ASI.',
        heritageSiteId: 'sher-shah-suri-tomb',
        placeId: 'sher-shah-tomb',
        personalityId: 'sher-shah-suri',
        sources: [
          'Percy Brown, Indian Architecture (Islamic Period) (D.B. Taraporevala, 1942)',
          'ASI Archaeological Survey Reports, Vol. XI (Alexander Cunningham)'
        ]
      }
    ]
  },

  // 8. MUGHAL SUBAH OF BIHAR & AZIMABAD
  {
    id: 'mughal-subah-azimabad',
    title: 'Mughal Subah of Bihar & Azimabad',
    hindiTitle: 'मुगल सूबा-ए-बिहार एवं अज़ीमाबाद का वैभव',
    period: 'c. 1575 – 1764 CE',
    startYearOrder: 1575,
    dateLabel: 'Mughal Provincial Era & Azimabad Culture',
    summary:
      'Akbar constituted Bihar as one of the original 12 subahs (provinces) of the Mughal Empire; Prince Azim-us-Shan developed Patna into the cultural and commercial metropolis of Azimabad; Guru Gobind Singh was born in Patna.',
    hindiSummary:
      'अकबर द्वारा बिहार को 12 प्रमुख सूबों में शामिल करना; राजकुमार अज़ीम-उस-शान द्वारा पटना को "अज़ीमाबाद" के रूप में सांस्कृतिक व व्यापारिक केंद्र बनाना; पटना साहिब में गुरु गोविंद सिंह जी का प्रकाश पर्व।',
    historicalGeography:
      'Subah of Bihar, with capital at Patna (Azimabad), major fortresses at Rohtasgarh and Munger.',
    keyThemes: [
      'Raja Man Singh’s Subahdari at Rohtasgarh',
      'Birth of the Tenth Sikh Guru at Patna Sahib',
      'Azimabad Literary, Urdu, and Commercial Renaissance',
      'Maner Sharif Sufi Architecture'
    ],
    survivingLandmarks: [
      'Takht Sri Patna Sahib Gurudwara (Patna)',
      'Man Singh Palace Complex at Rohtasgarh Fort (Rohtas)',
      'Chhoti Dargah of Maner Sharif (Patna District)'
    ],
    relatedRegions: ['Magadh', 'Bhojpur'],
    sources: [
      'Abul Fazl, Ain-i-Akbari (trans. H. Blochmann, Asiatic Society of Bengal)',
      'Qeyamuddin Ahmad, The Making of Bihar: Studies in Medieval and Modern History (Patna, 1998)',
      'Khuda Bakhsh Oriental Public Library Historical Archives'
    ],
    coverImage: '/assets/images/patna_sahib_gurudwara_1789937861692.jpg',
    events: [
      {
        id: 'birth-of-guru-gobind-singh-patna',
        title: 'Birth of Guru Gobind Singh Ji at Patna',
        hindiTitle: 'तख्त श्री पटना साहिब में दशमेश गुरु गोविंद सिंह जी का प्राकट्य',
        eraId: 'mughal-subah-azimabad',
        dateLabel: 'December 22, 1666 CE',
        approximateYear: '1666 CE',
        location: 'Patna Sahib (Old Patna City)',
        historicalRegion: 'Mughal Subah of Bihar',
        districtId: 'patna',
        keyActors: ['Guru Gobind Singh Ji', 'Mata Gujri', 'Guru Tegh Bahadur Ji'],
        description:
          'The tenth Sikh Guru, Gobind Rai (later Guru Gobind Singh Ji), was born in Patna while his father, the ninth Guru Tegh Bahadur, was traveling on a spiritual tour through Assam and Bengal. He spent his early childhood along the banks of the Ganga in Patna before moving to Anandpur Sahib, creating an enduring spiritual bond between Bihar and the Sikh tradition.',
        evidenceType: 'Archival Document',
        survivingEvidence:
          'Sacred relics including the Guru’s childhood cradle, arrows, comb, and handwritten Hukamnamas preserved inside the inner sanctum of the Takht.',
        whatRemainsToday:
          'Takht Sri Harmandir Ji Patna Sahib, recognized as one of the Five Takhts (temporal seats) of Sikhism, attracting thousands of pilgrims worldwide.',
        heritageSiteId: 'patna-sahib',
        placeId: 'patna-sahib',
        personalityId: 'guru-gobind-singh',
        sources: [
          'Ganda Singh, The Sikhs and Sikhism (Patiala, 1959)',
          'Government of Bihar, 350th Prakash Parv Commemorative Monograph (Patna, 2017)'
        ]
      }
    ]
  },

  // 9. COLONIAL CONQUEST & THE 1857 UPRISING
  {
    id: 'colonial-rule-1857',
    title: 'Colonial Annexation & The 1857 Resistance',
    hindiTitle: 'औपनिवेशिक विस्तार एवं 1857 का महासंग्राम',
    period: '1764 – 1858 CE',
    startYearOrder: 1764,
    dateLabel: 'East India Company Rule & Armed Resistance',
    summary:
      'The 1764 Battle of Buxar ceded civil revenue rights to the British East India Company; nearly a century later, the 80-year-old chieftain Veer Kunwar Singh led the armed 1857 resistance across Shahabad and central India.',
    hindiSummary:
      '1764 में बक्सर के युद्ध के बाद ईस्ट इंडिया कंपनी को दीवानी अधिकार प्राप्त हुए; 1857 के प्रथम स्वतंत्रता संग्राम में 80 वर्षीय वीर कुंवर सिंह ने जगदीशपुर और शाहाबाद में ब्रिटिश सत्ता के विरुद्ध निर्णायक छापामार युद्ध लड़ा।',
    historicalGeography:
      'Buxar, Jagdishpur (Bhojpur), Arrah, Danapur Cantonment, and the Shahabad region.',
    keyThemes: [
      'Battle of Buxar & Treaty of Allahabad (1764)',
      '1770 Bengal Famine & Construction of Golghar (1786)',
      'Veer Kunwar Singh’s Guerrilla Campaign of 1857',
      'The Siege of Arrah House'
    ],
    survivingLandmarks: [
      'Golghar Granary (Patna)',
      'Jagdishpur Fort & Memorial (Bhojpur)',
      'Arrah House Monument (Bhojpur)',
      'Buxar War Memorial Field (Buxar)'
    ],
    relatedRegions: ['Bhojpur', 'Magadh'],
    sources: [
      'K.K. Datta, Biography of Kunwar Singh and Amar Singh (K.P. Jayaswal Research Institute, 1957)',
      'P.J. Marshall, The Making and Unmaking of Empires (Oxford University Press, 2005)',
      'Bihar State Archives (1857 Mutiny Records, Patna)'
    ],
    coverImage: '/assets/images/patna_golghar_granary_1789937770039.jpg',
    events: [
      {
        id: 'battle-of-buxar-1764',
        title: 'The Battle of Buxar & Grant of Diwani Rights',
        hindiTitle: 'बक्सर का निर्णायक युद्ध एवं दीवानी अधिकारों का हस्तांतरण',
        eraId: 'colonial-rule-1857',
        dateLabel: 'October 22, 1764 CE',
        approximateYear: '1764 CE',
        location: 'Buxar Plain, Buxar District',
        historicalRegion: 'Western Bihar Border',
        districtId: 'buxar',
        keyActors: ['Hector Munro (East India Company)', 'Mir Qasim', 'Shuja-ud-Daula', 'Shah Alam II'],
        description:
          'Forces of the British East India Company under Major Hector Munro defeated the combined armies of Mughal Emperor Shah Alam II, Nawab Shuja-ud-Daula of Awadh, and former Nawab Mir Qasim of Bengal. The resulting 1765 Treaty of Allahabad granted the Company the Diwani (right to collect revenue) of Bengal, Bihar, and Orissa, inaugurating colonial administrative subjugation.',
        evidenceType: 'Archival Document',
        survivingEvidence:
          'Original Treaty of Allahabad texts in the National Archives of India and the memorial obelisk marking the battlefield at Katkauli near Buxar.',
        whatRemainsToday:
          'The Battle of Buxar memorial site at Katkauli (Buxar), preserved as a historic landmark.',
        sources: [
          'Broome, Arthur, History of the Rise and Progress of the Bengal Army (W. Thacker, 1850)',
          'National Archives of India (Foreign and Political Department Records, 1765)'
        ]
      },
      {
        id: 'kunwar-singh-1857-uprising',
        title: 'Veer Kunwar Singh Leads the 1857 Resistance',
        hindiTitle: 'वीर कुंवर सिंह का 1857 स्वाधीनता संग्राम',
        eraId: 'colonial-rule-1857',
        dateLabel: 'July 1857 – April 1858 CE',
        approximateYear: '1857 CE',
        location: 'Jagdishpur and Arrah, Bhojpur District',
        historicalRegion: 'Shahabad District',
        districtId: 'bhojpur',
        keyActors: ['Veer Kunwar Singh', 'Amar Singh', 'Danapur Sepoys'],
        description:
          'When sepoy regiments mutinied at Danapur cantonment on July 25, 1857, they marched to Jagdishpur, where the 80-year-old zamindar Veer Kunwar Singh assumed military leadership. Employing brilliant guerrilla warfare, he liberated Arrah, crossed the Ganga, coordinated with Nana Saheb and Tatya Tope in central India, and recaptured Jagdishpur before succumbing to wounds on April 26, 1858.',
        evidenceType: 'Archival Document',
        survivingEvidence:
          'Official British dispatches of Commissioner William Tayler, Kunwar Singh’s original royal seal and sword in the Bihar Museum, and contemporary folk songs.',
        whatRemainsToday:
          'Veer Kunwar Singh Memorial Fort in Jagdishpur, Arrah House monument, and Bihar’s annual Vijayotsav celebrated on April 23.',
        personalityId: 'veer-kunwar-singh',
        sources: [
          'Datta, K.K., History of the Freedom Movement in Bihar (Vol. I, Government of Bihar, 1957)',
          'Sen, S.N., Eighteen Fifty-Seven (Publications Division, Government of India, 1957)'
        ]
      }
    ]
  },

  // 10. CHAMPARAN & THE NATIONAL FREEDOM STRUGGLE
  {
    id: 'champaran-national-movement',
    title: 'Champaran & The Freedom Movement',
    hindiTitle: 'चंपारण सत्याग्रह एवं राष्ट्रीय स्वाधीनता आंदोलन',
    period: '1917 – 1947 CE',
    startYearOrder: 1917,
    dateLabel: 'The Testing Ground of Satyagraha & Mass Awakening',
    summary:
      'Mahatma Gandhi launched his first Satyagraha in India in Champaran in 1917 against oppressive European indigo planters; Bihar subsequently emerged as a vanguard of peasant mobilization, Civil Disobedience, and the Quit India uprising.',
    hindiSummary:
      '1917 में महात्मा गांधी ने चंपारण की धरती से तीनकठिया प्रणाली के विरुद्ध भारत में अपना पहला सत्याग्रह प्रारंभ किया; स्वामी सहजानंद सरस्वती द्वारा किसान सभा आंदोलन और 1942 के भारत छोड़ो आंदोलन में सचिवालय गोलीकांड।',
    historicalGeography:
      'Champaran (Motihari and Bettiah), Patna (Sadaqat Ashram), Bihta (Kisan movement).',
    keyThemes: [
      '1917 Champaran Indigo Movement & Tinkathia Abolition',
      'Swami Sahajanand Saraswati & The All India Kisan Sabha',
      'August 11, 1942 Patna Secretariat Student Martyrdom',
      'Dr. Rajendra Prasad & Constitutional Leadership'
    ],
    survivingLandmarks: [
      'Shaheed Smarak (Martyrs’ Memorial, Patna Secretariat)',
      'Gandhi Sangrahalaya (Patna)',
      'Sadaqat Ashram (Patna)',
      'Gandhi Smarak Stambh (Motihari)'
    ],
    relatedRegions: ['Tirhut', 'Magadh'],
    sources: [
      'M.K. Gandhi, An Autobiography: The Story of My Experiments with Truth (Navajivan, 1927)',
      'Rajendra Prasad, Satyagraha in Champaran (Ganesan, Madras, 1922)',
      'K.K. Datta, History of the Freedom Movement in Bihar (Vols. I–III, Patna, 1957–1958)'
    ],
    coverImage: '/assets/images/kesaria_stupa_champaran_1789937806799.jpg',
    events: [
      {
        id: 'champaran-satyagraha-1917',
        title: 'The Champaran Satyagraha of 1917',
        hindiTitle: '1917 का ऐतिहासिक चंपारण सत्याग्रह',
        eraId: 'champaran-national-movement',
        dateLabel: 'April 1917 CE',
        approximateYear: '1917 CE',
        location: 'Motihari and Bettiah, Champaran',
        historicalRegion: 'Northwestern Gangetic Plain (Tirhut)',
        districtId: 'east-champaran',
        keyActors: ['Mahatma Gandhi', 'Raj Kumar Shukla', 'Dr. Rajendra Prasad', 'J.B. Kripalani'],
        description:
          'Persuaded by local farmer Raj Kumar Shukla at the 1916 Lucknow Congress, Mahatma Gandhi arrived in Champaran to investigate the oppressive Tinkathia system, under which tenant farmers were legally compelled by European planters to cultivate indigo on 3/20th of their land. Defying colonial magistrate expulsion orders, Gandhi recorded thousands of farmer depositions, compelling the government to pass the Champaran Agrarian Act of 1918.',
        evidenceType: 'Archival Document',
        survivingEvidence:
          'Original handwritten statements of Champaran ryots (farmers) preserved in the Bihar State Archives and National Archives of India.',
        whatRemainsToday:
          'The Gandhi Memorial Pillar in Motihari, Bhitiharwa Gandhi Ashram in West Champaran, and Gandhi Sangrahalaya in Patna.',
        personalityId: 'rajendra-prasad',
        placeId: 'champaran-landscape',
        sources: [
          'Prasad, Rajendra, Champaran me Mahatma Gandhi (Patna, 1919)',
          'Tendulkar, D.G., Gandhi in Champaran (Publications Division, 1957)'
        ]
      },
      {
        id: 'patna-secretariat-martyrs-1942',
        title: 'Patna Secretariat Firing & Student Martyrdom',
        hindiTitle: '11 अगस्त 1942: पटना सचिवालय गोलीकांड के अमर शहीद',
        eraId: 'champaran-national-movement',
        dateLabel: 'August 11, 1942 CE',
        approximateYear: '1942 CE',
        location: 'Old Secretariat, Patna',
        historicalRegion: 'Patna Capital',
        districtId: 'patna',
        keyActors: [
          'Umakant Prasad Sinha',
          'Ramanand Singh',
          'Satish Chandra Jha',
          'Jagpati Kumar',
          'Devipada Choudhury',
          'Rajendra Singh',
          'Ramgovind Singh'
        ],
        description:
          'During the height of the Quit India Movement, a massive non-violent procession of high school and college students marched to the Old Secretariat to hoist the Indian National Flag atop the building. British District Magistrate W.G. Archer ordered police to open fire, killing seven young students while they continuously held the tricolor aloft.',
        evidenceType: 'Archival Document',
        survivingEvidence:
          'Official inquiry reports of the Bihar Government and contemporary eyewitness press photographs preserved in the Bihar State Archives.',
        whatRemainsToday:
          'The Shaheed Smarak (Martyrs’ Memorial) standing opposite the Bihar Legislative Assembly in Patna, featuring life-size bronze statues of the seven students sculpted by Deviprasad Roy Chowdhury.',
        sources: [
          'Datta, K.K., History of the Freedom Movement in Bihar (Vol. III, Government of Bihar, 1958)',
          'Bihar State Archives, 1942 Secretariat Firing Records (Patna)'
        ]
      }
    ]
  },

  // 11. STATE FORMATION & CONSTITUTIONAL TRANSITION
  {
    id: 'state-formation-post-independence',
    title: 'State Formation & Constitutional Transition',
    hindiTitle: 'राज्य गठन एवं संवैधानिक विकास',
    period: '1912 – 1950 CE',
    startYearOrder: 1912,
    dateLabel: 'Administrative Separation & The Indian Republic',
    summary:
      'The administrative emergence of Bihar as a distinct province in 1912, separation from Odisha in 1936, and the swearing-in of Dr. Rajendra Prasad as the first President of the Republic of India in 1950.',
    hindiSummary:
      '1912 में बंगाल से पृथक होकर बिहार प्रांत का गठन (22 मार्च, बिहार दिवस); 1936 में ओडिशा का पृथक्करण; और 26 जनवरी 1950 को डॉ. राजेंद्र प्रसाद का स्वतंत्र भारत के प्रथम राष्ट्रपति के रूप में पदभार ग्रहण।',
    historicalGeography:
      'Province of Bihar and Orissa (1912–1936), Province of Bihar (1936–1950), and State of Bihar (from 1950).',
    keyThemes: [
      'Separation from Bengal Presidency (March 22, 1912 - Bihar Diwas)',
      'Patna High Court & Patna University Establishments (1916 & 1917)',
      '1936 Administrative Separation of Orissa',
      'Dr. Rajendra Prasad Elected First President of India'
    ],
    survivingLandmarks: [
      'Patna High Court Heritage Building (est. 1916)',
      'Patna Museum (est. 1917)',
      'Bihar Legislative Assembly Building (est. 1920)'
    ],
    relatedRegions: ['Magadh'],
    sources: [
      'Imperial Gazetteer of India: Provincial Series (Bengal and Bihar, 1909)',
      'Constituent Assembly of India Debates (Official Report, 1946–1950)',
      'Bihar State Archives (Gazette of India, Proclamation of March 22, 1912)'
    ],
    coverImage: '/assets/images/patna_golghar_granary_1789937770039.jpg',
    events: [
      {
        id: 'bihar-diwas-1912-separation',
        title: 'Creation of the Province of Bihar and Orissa',
        hindiTitle: '22 मार्च 1912: बिहार प्रांत का पृथक गठन (बिहार दिवस)',
        eraId: 'state-formation-post-independence',
        dateLabel: 'March 22, 1912 CE',
        approximateYear: '1912 CE',
        location: 'Patna and Calcutta',
        historicalRegion: 'New Province of Bihar and Orissa',
        districtId: 'patna',
        keyActors: ['Dr. Sachchidananda Sinha', 'Mahesh Narayan', 'Lord Hardinge'],
        description:
          'Following decades of intellectual advocacy led by Dr. Sachchidananda Sinha and Mahesh Narayan through publications like The Beharee, King George V issued the royal proclamation separating the non-Bengali territories from the Bengal Presidency. On March 22, 1912, the new Province of Bihar and Orissa came into official administrative existence, celebrated annually as Bihar Diwas.',
        evidenceType: 'Archival Document',
        survivingEvidence:
          'The original Government of India Gazette notification dated March 22, 1912, and historic legislative proceedings preserved in the Bihar State Archives.',
        whatRemainsToday:
          'Bihar Diwas observed as a state public holiday every March 22 with cultural assemblies at Gandhi Maidan.',
        sources: [
          'Sinha, Sachchidananda, Some Eminent Bihar Contemporaries (Himalaya Publications, 1944)',
          'Government of India, Notification No. 289, Home Department (March 22, 1912)'
        ]
      },
      {
        id: 'rajendra-prasad-first-president',
        title: 'Dr. Rajendra Prasad Sworn In as First President of India',
        hindiTitle: 'डॉ. राजेंद्र प्रसाद स्वतंत्र भारत के प्रथम राष्ट्रपति बने',
        eraId: 'state-formation-post-independence',
        dateLabel: 'January 26, 1950 CE',
        approximateYear: '1950 CE',
        location: 'Durbar Hall, New Delhi (Origin: Ziradei, Siwan)',
        historicalRegion: 'Saran / Siwan',
        districtId: 'siwan',
        keyActors: ['Dr. Rajendra Prasad', 'Dr. B.R. Ambedkar', 'Jawaharlal Nehru'],
        description:
          'Dr. Rajendra Prasad of Ziradei (Siwan district), who served as the President of the Constituent Assembly that drafted the Constitution of India, was unanimously elected the first President of the Republic of India on January 26, 1950. He remains the only Indian President to have served two full constitutional terms (1950–1962).',
        evidenceType: 'Archival Document',
        survivingEvidence:
          'The signed calligraphic original copy of the Constitution of India and Dr. Rajendra Prasad’s personal archives at Sadaqat Ashram, Patna.',
        whatRemainsToday:
          'Rajendra Smriti Sangrahalaya at Sadaqat Ashram in Patna and his ancestral birth home in Ziradei, Siwan.',
        personalityId: 'rajendra-prasad',
        sources: [
          'Constituent Assembly of India Debates, Vol. XII (January 24, 1950)',
          'Prasad, Rajendra, Atmakatha (Autobiography, Sahitya Sansar, 1946)'
        ]
      }
    ]
  },

  // 12. CONTEMPORARY BIHAR & REORGANIZATION
  {
    id: 'contemporary-bihar',
    title: 'Contemporary Bihar: Democracy & Revival',
    hindiTitle: 'समकालीन बिहार: जनतंत्र, पुनर्जागरण एवं विकास',
    period: '1974 – Present',
    startYearOrder: 1974,
    dateLabel: 'Democratic Renewal & Cultural Revival',
    summary:
      'The Total Revolution (JP Movement) of 1974 revitalized Indian democracy; the 2000 state bifurcation created Jharkhand; modern Bihar focuses on Nalanda University’s international revival, infrastructural river connectivity, and agricultural heritage protection.',
    hindiSummary:
      '1974 में जयप्रकाश नारायण के नेतृत्व में ऐतिहासिक संपूर्ण क्रांति आंदोलन; सन 2000 में झारखंड का पुनर्गठन; तथा अंतरराष्ट्रीय नालंदा विश्वविद्यालय का पुनरुद्धार और अवसंरचनात्मक विकास।',
    historicalGeography:
      'Present-day 38 administrative districts of Bihar following the Bihar Reorganisation Act of 2000.',
    keyThemes: [
      '1974 Total Revolution (Sampoorna Kranti) led by Jayaprakash Narayan',
      'Bihar Reorganisation Act of November 15, 2000 (Creation of Jharkhand)',
      'Nalanda International University Revival (2014–2024)',
      'Gangetic Bridge Infrastructure & Cultural Heritage Protections'
    ],
    survivingLandmarks: [
      'Gandhi Maidan (Patna, venue of the 1974 historic address)',
      'New Nalanda University International Campus (Rajgir)',
      'Digha–Sonpur & Mahatma Gandhi Setu Gangetic Crossings'
    ],
    relatedRegions: ['Magadh', 'Mithila', 'Bhojpur', 'Tirhut', 'Saran', 'Anga', 'Kosi', 'Purnia'],
    sources: [
      'Jayaprakash Narayan, Prison Diary (Popular Prakashan, 1977)',
      'Ministry of Law and Justice, The Bihar Reorganisation Act, 2000 (Act No. 30 of 2000)',
      'Ministry of External Affairs, Nalanda University Act, 2010'
    ],
    coverImage: '/assets/images/nalanda_university_ruins_1789937702654.jpg',
    events: [
      {
        id: 'total-revolution-jp-movement',
        title: 'Jayaprakash Narayan Proclaims Total Revolution',
        hindiTitle: 'गांधी मैदान में जयप्रकाश नारायण की "संपूर्ण क्रांति" का आह्वान',
        eraId: 'contemporary-bihar',
        dateLabel: 'June 5, 1974 CE',
        approximateYear: '1974 CE',
        location: 'Gandhi Maidan, Patna',
        historicalRegion: 'Patna Urban Center',
        districtId: 'patna',
        keyActors: ['Jayaprakash Narayan (Loknayak JP)'],
        description:
          'Before a mammoth gathering of hundreds of thousands at Patna’s Gandhi Maidan, freedom fighter Jayaprakash Narayan proclaimed the call for "Sampoorna Kranti" (Total Revolution), a non-violent mass movement against corruption, democratic backsliding, and authoritarianism. The movement reshaped post-independence Indian politics and established grassroots democratic accountability.',
        evidenceType: 'Contemporary Manuscript / Chronicle',
        survivingEvidence:
          'Audio recordings, transcripts, and documentary footage of the June 5 Gandhi Maidan speech preserved in the JP Memorial Museum and Nehru Memorial Museum & Library.',
        whatRemainsToday:
          'Loknayak Jayaprakash Narayan’s residence (Kadam Kuan) and the historic Gandhi Maidan in Patna.',
        personalityId: 'jayaprakash-narayan',
        sources: [
          'Narayan, Jayaprakash, Towards Total Revolution (4 vols., Popular Prakashan, 1978)',
          'Bimal Prasad, Radical Humanist to Sarvodaya: Life and Thought of Jayaprakash Narayan (Routledge)'
        ]
      },
      {
        id: 'nalanda-university-revival-2014-2024',
        title: 'International Revival of Nalanda University',
        hindiTitle: 'नालंदा अंतरराष्ट्रीय विश्वविद्यालय का ऐतिहासिक पुनरुद्धार',
        eraId: 'contemporary-bihar',
        dateLabel: '2014 – 2024 CE',
        approximateYear: '2014 CE',
        location: 'Rajgir, Nalanda District',
        historicalRegion: 'Magadha Academic Corridor',
        districtId: 'nalanda',
        keyActors: ['Government of India', 'East Asia Summit Member States'],
        description:
          'Endorsed by the East Asia Summit in 2007 and enacted through Parliament via the Nalanda University Act of 2010, the historic university was reborn as an international postgraduate institution of higher learning in Rajgir, near the ancient ruins. On June 19, 2024, the newly completed 455-acre net-zero sustainable campus was formally inaugurated.',
        evidenceType: 'Architectural Monument',
        survivingEvidence:
          'The newly constructed international campus designed with Vastu-compliant water bodies and decentralized solar power, documented in parliamentary records.',
        whatRemainsToday:
          'The operating Nalanda University campus at Rajgir, educating students from over 20 countries in Buddhist studies, ecology, and historical studies.',
        heritageSiteId: 'nalanda-ruins',
        placeId: 'nalanda-university',
        sources: [
          'Parliament of India, The Nalanda University Act, 2010 (Act No. 39 of 2010)',
          'Ministry of External Affairs, Press Release on the Inauguration of Nalanda University Campus (June 19, 2024)'
        ]
      }
    ]
  }
];

export const ALL_HISTORICAL_EVENTS: HistoricalEvent[] = HISTORICAL_ERAS.flatMap(
  era => era.events
);

export const getHistoricalEraById = (id: string): HistoricalEra | undefined =>
  HISTORICAL_ERAS.find(era => era.id === id);

export const getHistoricalEventById = (id: string): HistoricalEvent | undefined =>
  ALL_HISTORICAL_EVENTS.find(event => event.id === id);
