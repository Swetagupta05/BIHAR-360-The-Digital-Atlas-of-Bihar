import { HeritageSite } from '../types';
import { VERIFIED_IMAGES } from './media';

export interface HeritageCategoryMeta {
  id: string;
  label: string;
  hindiLabel: string;
  count: number;
  description: string;
}

export interface HeritageTimelineEra {
  id: string;
  epoch: string;
  title: string;
  hindiTitle: string;
  tagline: string;
  narrative: string;
  siteIds: string[];
}

export const HERITAGE_CATEGORIES: HeritageCategoryMeta[] = [
  {
    id: 'all',
    label: 'All Monuments',
    hindiLabel: 'समस्त धरोहर',
    count: 11,
    description: 'The complete archaeological and sacred architectural registry of Bihar'
  },
  {
    id: 'ancient-universities',
    label: 'Ancient Universities',
    hindiLabel: 'प्राचीन महाविहार',
    count: 2,
    description: 'Premier residential universities that drew philosophers and scholars across Asia'
  },
  {
    id: 'sacred-shrines',
    label: 'Sacred Shrines & Living Temples',
    hindiLabel: 'पवित्र तीर्थ व मंदिर',
    count: 3,
    description: 'Centuries of continuous spiritual devotion across Buddhism, Hinduism, and Sikhism'
  },
  {
    id: 'mauryan-antiquity',
    label: 'Mauryan & Rock-Cut Antiquity',
    hindiLabel: 'मौर्यकालीन शैलकृत धरोहर',
    count: 2,
    description: '3rd-century BCE polished granite chambers and imperial Ashokan lion pillars'
  },
  {
    id: 'stupas-sanctuaries',
    label: 'Stupas & Votive Architecture',
    hindiLabel: 'स्तूप व चैत्य वास्तुकला',
    count: 1,
    description: 'Monumental brick stupas enshrining sacred relics along the Buddha’s path'
  },
  {
    id: 'citadels-mausoleums',
    label: 'Fortresses & Imperial Mausoleums',
    hindiLabel: 'किले व ऐतिहासिक मकबरे',
    count: 3,
    description: 'Plateau strongholds, floating sandstone domes, and acoustic granaries'
  }
];

export const HERITAGE_TIMELINE_ERAS: HeritageTimelineEra[] = [
  {
    id: 'mauryan',
    epoch: '3rd Century BCE (ca. 261 – 250 BCE)',
    title: 'Mauryan Imperial Monumentality & Rock-Cut Origins',
    hindiTitle: 'मौर्य साम्राज्य: पाषाण वास्तुकला का सूत्रपात',
    tagline: 'The dawn of stone architecture, monolithic polish, and imperial edicts under Emperor Ashoka',
    narrative: 'In the 3rd century BCE, the Maurya Empire transformed Pataliputra and its hinterlands into an architectural proving ground. Emperor Ashoka pioneered stone monumentality in India—quarrying Chunar sandstone for monolithic pillars with mirror polish and carving the first artificial rock-cut cave sanctuaries out of monolithic granite at Barabar for Ajivika ascetics.',
    siteIds: ['barabar-caves', 'kolhua-ashoka-pillar']
  },
  {
    id: 'classical',
    epoch: '1st – 2nd Century CE',
    title: 'Classical Temple Foundations & Epigraphic Antiquity',
    hindiTitle: 'आरंभिक शास्त्रीय मंदिर परंपरा',
    tagline: 'Octagonal stone sanctuaries and unbroken ritual devotion across two millennia',
    narrative: 'Following the Mauryan era, stone temple architecture took definitive form in the Gangetic foothills. An inscription in Brahmi script dated to 108 CE at Maa Mundeshwari confirms the establishment of octagonal sanctums with intricate river-goddess carvings, marking India’s oldest continuously functioning stone temple.',
    siteIds: ['mundeshwari-temple']
  },
  {
    id: 'pala-monastic',
    epoch: '5th – 12th Century CE',
    title: 'The Golden Age of Mahaviharas & Buddhist Universality',
    hindiTitle: 'महाविहारों का स्वर्ण युग',
    tagline: 'When international scholars gathered across Nalanda, Mahabodhi, and Vikramshila',
    narrative: 'Under Gupta and Pala imperial patronage, Bihar became the intellectual heart of Asia. Nalanda and Vikramshila grew into colossal monastic residential universities hosting tens of thousands of scholars from China, Korea, Tibet, and Sumatra. Meanwhile, the Mahabodhi Temple spire rose 55 meters above the sacred Bodhi tree, and Kesaria stupa towered across the northern plains.',
    siteIds: ['nalanda-mahavihara', 'mahabodhi-temple', 'vikramshila-mahavihara', 'kesaria-stupa']
  },
  {
    id: 'medieval-suri',
    epoch: '16th Century CE (1540 – 1590 CE)',
    title: 'Suri Imperial Engineering & Hill Fortresses',
    hindiTitle: 'सूरी साम्राज्य व दुर्ग वास्तुकला',
    tagline: 'Sher Shah Suri’s architectural audacity and plateau strongholds',
    narrative: 'In the 16th century, Sher Shah Suri ruled from Sasaram and transformed Indian infrastructure—constructing the Grand Trunk Road and standardizing the silver Rupee. His octagonal red sandstone mausoleum, floating in a 1,400-foot artificial lake, stands as one of India’s supreme Indo-Islamic achievements alongside the 42-square-kilometer Rohtasgarh cliff fortress.',
    siteIds: ['sher-shah-tomb', 'rohtasgarh-fort']
  },
  {
    id: 'modern-continuity',
    epoch: '17th – 21st Century CE',
    title: 'Living Shrines, Colonial Engineering & Global Preservation',
    hindiTitle: 'जीवंत परंपरा, औपनिवेशिक निर्माण व वैश्विक संरक्षण',
    tagline: 'Sacred gurdwaras, acoustic granaries, and UNESCO World Heritage conservation',
    narrative: 'From the sacred birthplace of Guru Gobind Singh Ji at Takht Sri Patna Sahib in 1666 to the pillar-less acoustic marvel of Golghar in 1786, Bihar’s built heritage continues to thrive. Today, the Archaeological Survey of India (ASI) and UNESCO protect these irreplaceable monuments as living legacies for humanity.',
    siteIds: ['takht-patna-sahib', 'golghar-patna']
  }
];

export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: 'nalanda-mahavihara',
    name: 'Nalanda Mahavihara Ruins',
    hindiName: 'नालंदा महाविहार',
    location: 'Nalanda District (near Rajgir)',
    districtId: 'nalanda',
    coordinates: { lat: 25.1357, lng: 85.4450 },
    period: '5th century CE to 13th century CE',
    dynasty: 'Gupta Empire & Pala Empire',
    category: 'Monastic University',
    isUnesco: true,
    image: VERIFIED_IMAGES.nalanda,
    description: 'The premier international residential university of the ancient world. At its peak, Nalanda accommodated over 10,000 monks and students and 2,000 renowned teachers from China, Korea, Japan, Tibet, Mongolia, and Sri Lanka.',
    architecture: 'Classical baked-brick architecture featuring 11 vast residential monasteries (viharas), each with monks’ cells surrounding central courtyards, subterranean drains, cooking hearths, and grand stepped shrines (chaityas) including Sariputra Stupa (Temple 3).',
    significance: 'UNESCO World Heritage Site. Served as the crucible where Mahayana and Vajrayana Buddhist philosophy, logic (Hetuvidya), grammar, medicine (Ayurveda), and astronomy were systematized before spreading across Asia.',
    keyFeatures: [
      'Sariputra Stupa (Temple No. 3) with nested architectural towers and stucco Buddha figures',
      'Nine-story library complex Dharmaganja (Ratnasagara, Ratnodadhi, and Ratnaranjaka)',
      'Monastery No. 1 containing well-preserved lecture platforms and monk cells',
      'Elaborate subterranean water management and drainage channels'
    ],
    visitorInfo: {
      timings: '9:00 AM – 5:00 PM (Daily)',
      entryFee: '₹50 for Indian nationals, ₹600 for foreigners, Free for children under 15',
      bestTime: 'October to March',
      nearestHub: 'Rajgir (12 km) or Patna Airport (85 km)'
    },
    museumDoc: {
      whyItMatters: 'Before Oxford, Bologna, or Paris existed, Nalanda conducted rigorous entrance examinations in Sanskrit logic, housing 9 million manuscripts and scholars who shaped the philosophical worldview of East and Central Asia.',
      storyNarrative: [
        'Founded in the 5th century CE under the patronage of Gupta Emperor Kumaragupta I, Nalanda Mahavihara grew into the ancient world’s most celebrated seat of higher learning. Royal endowments from over 100 surrounding agricultural villages sustained tuition, food, lodging, and medicines free of cost for all scholars.',
        'When Chinese monk-scholar Xuanzang journeyed across Central Asia and arrived here in 637 CE, he studied for years under the venerable abbot Silabhadra. Xuanzang recorded a rigorous intellectual sanctuary where bells rung from dawn to dusk to convene debates in grammar, Buddhist epistemology, Vedic literature, astronomy, and surgery.',
        'The heart of Nalanda was Dharmaganja ("The Treasury of Truth"), a sprawling library quarter comprising three monumental towers named Ratnasagara (Ocean of Jewels), Ratnodadhi (Sea of Jewels), and Ratnaranjaka (Jewel-Adorned). The surviving brick foundations reveal a masterwork of urban planning, acoustic lecture podiums, and self-cleaning water channels.'
      ],
      whatRemains: 'Extensive excavated ruins extending over 23 hectares (a fraction of its original extent). Highlights include 11 double-storey brick monasteries (viharas), each structured with an open courtyard flanked by cells, a well, and lecture niches; and 6 monumental temples (chaityas), dominated by the multi-layered Sariputra Stupa with sculpted stucco niches.',
      whyItMattersToday: 'Declared a UNESCO World Heritage Site in 2016 (Ref 1502). Nalanda stands as an immortal symbol of open intellectual inquiry, universal academic exchange, and Buddhist philosophical heritage.',
      lookCloser: [
        {
          title: 'Nested Stucco Towers of Temple 3',
          focus: 'Sculptural & Architectural Layering',
          description: 'Temple 3 was expanded in seven distinct construction phases over eight centuries. Excavations revealed beautiful 6th-century Gupta-era stucco panels depicting the Buddha and Bodhisattvas hidden inside outer structural shells.'
        },
        {
          title: 'Subterranean Brick Drainage Engineering',
          focus: 'Hydraulic Urbanism',
          description: 'Each monastery was engineered with inclined covered terracotta conduits and stone catchpits that channeled rainwater away from foundation walls into designated percolation ponds.'
        },
        {
          title: 'Monastery 1 Lecture Dais & Granary Wells',
          focus: 'Monastic Daily Life',
          description: 'A stone seat placed against the courtyard wall indicates where the senior Acharya sat while lecturing to junior monks seated on stepped masonry benches.'
        }
      ],
      sources: {
        primary: 'Archaeological Survey of India (Excavation Reports & Memoir 66)',
        secondary: 'Travels of Xuanzang (Datang Xiyu Ji) & UNESCO World Heritage Centre',
        designation: 'UNESCO World Heritage Site (Ref 1502, Inscribed 2016)',
        surveyId: 'ASI-BR-01'
      },
      unescoDetails: {
        refNumber: '1502',
        inscriptionYear: 2016,
        criteria: 'Criteria (iv) and (vi)'
      },
      timelineEra: 'Pala-Buddhist',
      historicalPeriodYear: '5th – 13th Century CE',
      relatedSiteIds: ['vikramshila-mahavihara', 'mahabodhi-temple', 'barabar-caves']
    }
  },
  {
    id: 'mahabodhi-temple',
    name: 'Mahabodhi Temple Complex',
    hindiName: 'महाबोधि मंदिर परिसर',
    location: 'Bodh Gaya, Gaya District',
    districtId: 'gaya',
    coordinates: { lat: 24.6960, lng: 84.9914 },
    period: '3rd century BCE (Ashoka) / 5th–6th century CE (present shikhara)',
    dynasty: 'Maurya, Kushana, & Gupta Empires',
    category: 'Spiritual Monument',
    isUnesco: true,
    image: VERIFIED_IMAGES.mahabodhi,
    description: 'The holiest shrine in Buddhism marking the exact spot where Prince Siddhartha Gautama attained supreme enlightenment (Bodhi) beneath the sacred Bodhi Tree in 528 BCE to become the Buddha.',
    architecture: 'One of the oldest surviving monumental brick structures in India, rising 55 meters (180 feet) as a pyramidal shikhara with four smaller corner towers, decorated with niches, chaitya arches, and carved relief sculptures.',
    significance: 'UNESCO World Heritage Site. Encloses the sacred Bodhi Tree (direct descendant of the original Ficus religiosa) and the Vajrasana (Diamond Throne) placed by Emperor Ashoka.',
    keyFeatures: [
      'Sacred Bodhi Tree where Buddha meditated under continuous mindfulness',
      'Vajrasana (Diamond Throne) sandstone slab marking the navel of the earth',
      'Animesh Lochan Chaitya where Buddha stood gazing unblinkingly at the tree for seven days',
      'Chankramana (Jewel Walk) where lotus flowers miraculously blossomed under Buddha’s steps',
      'Muchalinda Lake where the serpent king protected the Buddha from monsoon storms'
    ],
    visitorInfo: {
      timings: '5:00 AM – 9:00 PM (Daily)',
      entryFee: 'Free entry (mobile phones restricted, camera pass ₹100)',
      bestTime: 'October to March (during prayer festivals)',
      nearestHub: 'Gaya International Airport (12 km) or Gaya Junction (16 km)'
    },
    museumDoc: {
      whyItMatters: 'The epicenter of Buddhist civilization worldwide. For over 2,500 years, pilgrims from Sri Lanka, Burma, Thailand, Japan, and Tibet have converged upon this sanctuary where Siddhartha Gautama conquered Mara and reached Awakening.',
      storyNarrative: [
        'In 528 BCE, after six years of rigorous ascetic practices along the Falgu (Neranjara) river, Siddhartha Gautama sat on a grass mat beneath a Ficus religiosa tree, resolving not to rise until he understood the cause of suffering. At dawn, under the morning star, he attained Supreme Awakening.',
        'Two and a half centuries later, Emperor Ashoka visited Bodh Gaya, established the Vajrasana (Diamond Throne) of polished sandstone at the foot of the tree, and built the first shrine. During the Gupta era (5th–6th century CE), the present 55-meter monumental brick temple was erected, establishing an enduring prototype for brick temple spires across India and Southeast Asia.',
        'The site survived centuries of political transitions, lovingly maintained by Burmese and Sri Lankan royal missions before extensive restorative documentation was completed by Sir Alexander Cunningham in the late 19th century.'
      ],
      whatRemains: 'The grand 55-meter grand pyramidal brick shikhara flanked by four subsidiary corner spires; the sacred Bodhi Tree in the western courtyard; the sandstone Ashokan Vajrasana; ancient sandstone and granite carved railings (vedika) from the Shunga and Gupta periods; and the seven sacred spots of Buddha’s post-enlightenment contemplation.',
      whyItMattersToday: 'Inscribed as a UNESCO World Heritage Site in 2002 (Ref 1056). It remains a vibrant living shrine where monks in saffron, maroon, and white chant in Pali and Tibetan under the Bodhi tree leaves around the clock.',
      lookCloser: [
        {
          title: 'The Vajrasana (Ashoka’s Diamond Throne)',
          focus: 'Epigraphic & Polished Sandstone',
          description: 'A 7-foot polished Chunar sandstone slab decorated with acanthus and honeysuckle motifs and carved geese, positioned exactly between the temple and the sacred tree trunk.'
        },
        {
          title: 'Ancient Vedika Railing Panels',
          focus: 'Early Buddhist Narrative Bas-Relief',
          description: 'The surrounding stone railing features carved roundels depicting Surya the Sun God in a four-horse chariot, Lakshmi with elephants, centaurs, and floral medallions.'
        },
        {
          title: 'Animesh Lochan Chaitya & Chankramana',
          focus: 'The Seven Contemplation Stations',
          description: 'The Jewel Walk features 19 carved stone lotus flowers commemorating where lotus blooms are traditionally said to have sprung beneath the Buddha’s pacing footsteps.'
        }
      ],
      sources: {
        primary: 'UNESCO World Heritage Centre (Advisory Body Evaluation Ref 1056)',
        secondary: 'Mahabodhi by Alexander Cunningham (1892) & ASI Monograph',
        designation: 'UNESCO World Heritage Site (Ref 1056, Inscribed 2002)',
        surveyId: 'ASI-BR-02'
      },
      unescoDetails: {
        refNumber: '1056',
        inscriptionYear: 2002,
        criteria: 'Criteria (i), (ii), (iii), (iv), and (vi)'
      },
      timelineEra: 'Pala-Buddhist',
      historicalPeriodYear: '3rd c. BCE (Vajrasana) / 5th–6th c. CE (Spire)',
      relatedSiteIds: ['nalanda-mahavihara', 'barabar-caves', 'kesaria-stupa']
    }
  },
  {
    id: 'barabar-caves',
    name: 'Barabar Caves (Lomas Rishi & Sudama)',
    hindiName: 'बराबर की गुफाएं',
    location: 'Jehanabad District',
    districtId: 'jehanabad',
    coordinates: { lat: 25.0064, lng: 85.0628 },
    period: '3rd century BCE (ca. 261 BCE)',
    dynasty: 'Mauryan Empire (Emperor Ashoka and King Dasharatha)',
    category: 'Rock-Cut Architecture',
    isUnesco: false,
    image: VERIFIED_IMAGES.barabarCaves,
    description: 'The oldest surviving rock-cut caves in India, carved out of colossal monolithic granite boulders with glass-like mirror polish (Mauryan polish) dedicated to the ancient Ajivika ascetics.',
    architecture: 'Hollowed out of solid granite, featuring an arched entryway replicating wooden timber framing (the earliest Indian chaitya arch) leading into an elliptical domed chamber that produces extraordinary sonic reverberation.',
    significance: 'Inspired the "Marabar Caves" in E.M. Forster’s masterpiece "A Passage to India". Represent the genesis of Indian rock-cut architecture that culminated in Ajanta and Ellora.',
    keyFeatures: [
      'Lomas Rishi Cave with its intricately carved elephant frieze above the ogee portal arch',
      'Sudama Cave bearing Ashokan dedication inscriptions in Brahmi script',
      'Karan Chaupar Cave and Visva Zopri Cave',
      'Astonishing acoustic resonance where whispers echo for several seconds'
    ],
    visitorInfo: {
      timings: 'Sunrise to Sunset',
      entryFee: 'Free entry',
      bestTime: 'November to February',
      nearestHub: 'Jehanabad (31 km) or Gaya (40 km)'
    },
    museumDoc: {
      whyItMatters: 'The undisputed birthplace of Indian rock-cut architecture. Created around 261 BCE, these caves display the fabled "Mauryan polish"—glass-smooth granite surfaces that reflect light like obsidian mirrors after more than 2,280 years.',
      storyNarrative: [
        'High on the desolate granite hills of Jehanabad, Emperor Ashoka in his 12th and 19th regnal years commissioned royal stonecutters to chisel directly into colossal plutonic boulders. The caves were not dedicated to Buddhists or Hindus, but gifted to the ascetics of the Ajivika sect, led by Makkhali Gosala, demonstrating Mauryan imperial pluralism.',
        'The exterior of Lomas Rishi Cave preserves the earliest stone depiction of the iconic "chaitya arch"—painstakingly carved to mimic bent bamboo and wooden thatch joinery, crowned by a processional frieze of elephants honoring stupas.',
        'Step across the threshold into Sudama or Lomas Rishi, and you enter a completely sealed, mirror-polished circular sanctuary. The granite walls act as an elliptical acoustic resonator: a single chanted syllable reverberates and hums in rolling waves through the stone chamber for up to six seconds.'
      ],
      whatRemains: 'Four major caves at Barabar (Sudama, Lomas Rishi, Karan Chaupar, Visva Zopri) and three at nearby Nagarjuni hill (Gopi, Mirza Mandi, Vadathika). The interior granite chambers are astonishingly intact, complete with Emperor Ashoka’s and King Dasharatha’s royal Brahmi dedication inscriptions.',
      whyItMattersToday: 'Monuments of National Importance protected by the ASI. They are international case studies in acoustic rock engineering and the direct ancestors of Ajanta, Ellora, and Karle caves.',
      lookCloser: [
        {
          title: 'The Mauryan Glass-Like Granite Polish',
          focus: 'Pre-Christian Era Metallurgy & Masonry',
          description: 'How 3rd-century BCE artisans polished crystalline metamorphic granite to a mirror-like sheen without modern abrasives remains one of antiquity’s engineering wonders.'
        },
        {
          title: 'Lomas Rishi Elephant Procession Frieze',
          focus: 'The Earliest Chaitya Archway',
          description: 'A frieze of elephants moving towards a central stupa carved in high relief above the entrance represents the direct transition from timber architecture to permanent stone sculpture.'
        },
        {
          title: 'Acoustic Resonant Ellipse of Sudama',
          focus: 'Archaic Sonic Physics',
          description: 'The circular vaulted ceiling was intentionally curved to produce parabolic reverberation, amplifying ascetic vocal meditation chants across the subterranean granite.'
        }
      ],
      sources: {
        primary: 'Archaeological Survey of India (Epigraphia Indica Vol. II)',
        secondary: 'Asoka and the Decline of the Mauryas by Romila Thapar & E.M. Forster Archive',
        designation: 'ASI Protected Monument of National Importance',
        surveyId: 'ASI-BR-03'
      },
      timelineEra: 'Mauryan',
      historicalPeriodYear: 'ca. 261 BCE (3rd Century BCE)',
      relatedSiteIds: ['kolhua-ashoka-pillar', 'mahabodhi-temple', 'nalanda-mahavihara']
    }
  },
  {
    id: 'vikramshila-mahavihara',
    name: 'Vikramshila Mahavihara',
    hindiName: 'विक्रमशिला विश्वविद्यालय',
    location: 'Antichak, Bhagalpur District',
    districtId: 'bhagalpur',
    coordinates: { lat: 25.3340, lng: 87.2882 },
    period: 'Late 8th century to 12th century CE',
    dynasty: 'Pala Dynasty (Emperor Dharmapala)',
    category: 'Monastic University',
    isUnesco: false,
    image: VERIFIED_IMAGES.vikramshila,
    description: 'One of the two most important centers of Buddhist learning in India alongside Nalanda, founded by King Dharmapala in response to a perceived decline in Nalanda’s scholarly discipline.',
    architecture: 'Centered around a colossal cruciform brick stupa rising in two terraces decorated with terracotta plaques depicting Buddha, Bodhisattvas, animals, and folklore, surrounded by 208 monastic cells.',
    significance: 'Foremost seat of Tantrik Buddhist philosophy (Vajrayana) in Asia. Renowned teacher Atisa Dipankara Srijnana set out from Vikramshila to Tibet to revive Buddhism in the 11th century.',
    keyFeatures: [
      'Colossal two-terraced cruciform stupa in the center of the vast quadrangle',
      'Archaeological Museum at Antichak with Pala bronze sculptures and terracotta reliefs',
      'Remains of central library where manuscript illumination was practiced',
      'Living testimony to Buddhist-Tibetan cultural diplomacy'
    ],
    visitorInfo: {
      timings: '9:00 AM – 5:00 PM (Friday closed for museum)',
      entryFee: '₹25 for Indian nationals, ₹300 for foreigners',
      bestTime: 'October to February',
      nearestHub: 'Kahalgaon (13 km) or Bhagalpur (40 km)'
    },
    museumDoc: {
      whyItMatters: 'Founded by the great Pala Emperor Dharmapala in the late 8th century, Vikramshila was the intellectual powerhouse of Tantric Buddhism (Vajrayana) and the direct alma mater of Atisa Dipankara, who reformed Tibetan Buddhism.',
      storyNarrative: [
        'Perched on an elevated bluff overlooking the northward bend of the holy Ganga in ancient Angadesha, Vikramshila was conceived as an imperial state university. While Nalanda emphasized classical Mahayana logic and grammar, Vikramshila became the world capital for esoteric Vajrayana metaphysics, astrology, and philosophical debate.',
        'At its height, the university hosted over 1,000 monks and masters. It was administered by six "Gatekeeper Scholars" (Dvara Panditas)—formidable philosophers who interrogated visiting candidates at each gate before granting admission.',
        'The great master Atisa Dipankara Srijnana presided as Chancellor here before accepting the royal invitation of the King of Guge to cross the Himalayas in 1042 CE, founding the Kadampa tradition that transformed Buddhist practice across Tibet, Mongolia, and Bhutan.'
      ],
      whatRemains: 'A grand central quadrangle spanning 330 meters on each side containing 208 monastic cells, each with an arched bed niche and verandah; at the center towers the colossal two-tier cruciform brick stupa with terracotta plaques; alongside an excavated library building with underground air-cooling ducts.',
      whyItMattersToday: 'Protected by the Archaeological Survey of India. A key anchor of the Pan-Asian Buddhist Circuit that connects India with Himalayan and East Asian living scholarship.',
      lookCloser: [
        {
          title: 'The Cruciform Terraced Stupa Plan',
          focus: 'Monumental Pala Terracotta Architecture',
          description: 'Unlike circular early stupas, Vikramshila’s central shrine is a cruciform stepped pyramid rising in two terraces, allowing circumambulation at different heights.'
        },
        {
          title: 'Terracotta Narrative Plaques in Situ',
          focus: 'Folk Art & Iconography of the 9th Century',
          description: 'Hundreds of terracotta plaques adorning the lower terrace depict deities alongside scenes of everyday 9th-century life: archers, musicians, dancers, snakes, and Panchatantra fables.'
        },
        {
          title: 'Air-Cooled Monastic Library Conduits',
          focus: 'Manuscript Preservation Engineering',
          description: 'Excavated library foundations show subterranean water conduits and stone air ducts engineered to maintain low humidity to preserve fragile palm-leaf manuscripts.'
        }
      ],
      sources: {
        primary: 'Archaeological Survey of India (Antichak Excavation Reports 1971–1981)',
        secondary: 'Taranatha’s History of Buddhism in India & ASI Bhagalpur Circle',
        designation: 'ASI Protected Monument of National Importance',
        surveyId: 'ASI-BR-04'
      },
      timelineEra: 'Pala-Buddhist',
      historicalPeriodYear: 'Late 8th – 12th Century CE',
      relatedSiteIds: ['nalanda-mahavihara', 'kesaria-stupa', 'mahabodhi-temple']
    }
  },
  {
    id: 'sher-shah-tomb',
    name: 'Tomb of Sher Shah Suri',
    hindiName: 'शेर शाह सूरी का मकबरा',
    location: 'Sasaram, Rohtas District',
    districtId: 'rohtas',
    coordinates: { lat: 24.9511, lng: 84.0139 },
    period: '1540–1545 CE',
    dynasty: 'Suri Dynasty',
    category: 'Indo-Islamic Mausoleum',
    isUnesco: false,
    image: VERIFIED_IMAGES.sherShahTomb,
    description: 'Regarded by architectural historians as one of the finest masterpieces of Indo-Islamic architecture in India, celebrated as the "Second Taj Mahal of India" or the "Precursor to Mughal Grandeur".',
    architecture: 'An octagonal red sandstone mausoleum rising 122 feet (37 meters) in three tiers, crowned by a massive 22-meter dome, perched majestically on a square stone plinth in the middle of a vast artificial lake.',
    significance: 'Built by Sher Shah Suri, the visionary Afghan emperor who created the Grand Trunk Road (Sadak-e-Azam), introduced the standard silver "Rupiya", and reformed land revenue systems.',
    keyFeatures: [
      'Stepped causeway bridge spanning the water to the island tomb platform',
      'Octagonal domed pavilions (chhatris) punctuating the lower terraces',
      'Mirrored reflections in the surrounding reservoir waters',
      'Intricate calligraphic inscriptions and carved stone lattices (jalis)'
    ],
    visitorInfo: {
      timings: '6:00 AM – 6:00 PM (Daily)',
      entryFee: '₹25 for Indian nationals, ₹300 for foreigners',
      bestTime: 'October to March',
      nearestHub: 'Sasaram Railway Station (2 km)'
    },
    museumDoc: {
      whyItMatters: 'A triumph of pre-Mughal geometry and water engineering. Rising out of a 1,400-foot artificial lake, its 22-meter dome was the largest dome in northern India when built in 1545 CE, surpassing earlier Sultanate achievements.',
      storyNarrative: [
        'Before establishing his empire across Delhi, Farid Khan—bestowed the title "Sher Shah" for slaying a tiger in the jungles of Rohtas—served as governor of Bihar. In his brief five-year reign (1540–1545), he unified northern India, built the Grand Trunk Road, introduced the silver Rupiya (predecessor of modern rupee currencies), and established an equitable land survey system.',
        'Sher Shah commissioned architect Aliwal Khan to design an eternal resting place in his ancestral home of Sasaram. The architect designed an octagonal island mausoleum floating in the center of a 1,400-foot square reservoir, accessible only by a stepped causeway bridge.',
        'The mausoleum rises 122 feet in three tiered octagonal levels of red Chunar sandstone, punctuated by domed chhatris, stone brackets, and pierced geometric screens. The structure is so balanced that Percy Brown called it "one of the best designed and most dignified buildings in India, having an appearance of great strength combined with beauty."'
      ],
      whatRemains: 'Completely preserved and protected monument. The wide stone causeway, the vast 30-acre artificial lake with stepped ghats, the grand plinth with corner kiosks, and the lofty interior burial hall holding the cenotaph of Sher Shah Suri and 24 companions.',
      whyItMattersToday: 'Protected by ASI as Monument of National Importance (N-BR-49) on India’s UNESCO Tentative List. It is celebrated globally by architectural historians as the stylistic bridge connecting Sultanate solidity with Mughal grace.',
      lookCloser: [
        {
          title: 'The 22-Meter Unsupported Sandstone Dome',
          focus: 'Pre-Mughal Vaulting Physics',
          description: 'The colossal central dome spans 22 meters without interior pillars, engineered using concentric corbelled courses of dressed sandstone locked by a monumental kalasha finial.'
        },
        {
          title: 'Octagonal Terrace Geometry & Chhatris',
          focus: 'Visual Scaling & Perspective',
          description: 'Each of the three octagonal terraces recedes at mathematically precise angles, crowned by 24 domed chhatri kiosks that create an optical illusion of greater height when viewed from the shore.'
        },
        {
          title: 'The Mirror Water Moat Defense',
          focus: 'Hydraulic Symbolism & Climate Control',
          description: 'The surrounding reservoir kept the sandstone tomb chambers cool during blistering Gangetic summers while serving as a poetic water barrier reflecting the dome on calm dawns.'
        }
      ],
      sources: {
        primary: 'Archaeological Survey of India (Monument No. N-BR-49)',
        secondary: 'Indian Architecture (Islamic Period) by Percy Brown & UNESCO Tentative List Dossier',
        designation: 'ASI Monument of National Importance (UNESCO Tentative List)',
        surveyId: 'ASI-BR-05'
      },
      timelineEra: 'Medieval',
      historicalPeriodYear: '1540 – 1545 CE',
      relatedSiteIds: ['rohtasgarh-fort', 'golghar-patna', 'mundeshwari-temple']
    }
  },
  {
    id: 'kesaria-stupa',
    name: 'Kesaria Buddhist Stupa',
    hindiName: 'केसरिया बौद्ध स्तूप',
    location: 'East Champaran District',
    districtId: 'east-champaran',
    coordinates: { lat: 26.3572, lng: 84.8778 },
    period: '6th–7th century CE (Maurya-Gupta foundation)',
    dynasty: 'Maurya to Pala Dynasties',
    category: 'Buddhist Stupa',
    isUnesco: false,
    image: VERIFIED_IMAGES.kesariaStupa,
    description: 'One of the tallest ancient Buddhist stupas in the world, rising 104 feet (31.7 meters), standing taller than the famous Borobudur stupa in Java, Indonesia.',
    architecture: 'A multi-terraced circular brick stupa with a circumference of nearly 1,400 feet, featuring cells that enshrine life-size terracotta statues of the seated Buddha with different mudras.',
    significance: 'Believed to be the ancient spot (Kessaputta) where Lord Buddha, on his final journey to Kushinagar, presented his sacred begging bowl to the Licchavis of Vaishali who wept at his departure.',
    keyFeatures: [
      'Towering multi-terraced brick stupa emerging from the flat agricultural plains',
      'Life-size niche figures of Lord Buddha in Bhumisparsha and Dhyana mudra',
      'Excavations by ASI revealing concentric polygonal brick walls'
    ],
    visitorInfo: {
      timings: 'Sunrise to Sunset',
      entryFee: 'Free entry',
      bestTime: 'October to March',
      nearestHub: 'Motihari (35 km) or Muzaffarpur (55 km)'
    },
    museumDoc: {
      whyItMatters: 'Rising 104 feet above the northern plains of Champaran, Kesaria is one of the tallest ancient Buddhist stupas on earth—standing taller than the central stupa of Borobudur in Java and serving as the ancient site where Buddha gifted his begging bowl to the Licchavis.',
      storyNarrative: [
        'Buddhist texts record that on his final pilgrimage toward Kushinagar to attain Mahaparinirvana, Lord Buddha passed through Vaishali. The devoted citizens of the Licchavi republic followed him in tears. At Kessaputta (ancient Kesaria), to console them, the Buddha miraculously created a vast river to halt their procession and presented them his sacred alms bowl as a farewell relic.',
        'To enshrine this sacred moment, the Licchavis raised a commemorative stupa. Archaeological excavations by the ASI in 1998 confirmed that beneath its present 6th–7th century brick envelope lies an ancient Mauryan core, proving that the site was venerated continuously across dynasties.',
        'Before the devastating 1934 Bihar earthquake sheared its crowning pinnacle, the stupa was estimated to stand over 123 feet tall. Today its colossal 1,400-foot circular brick circumference rises like a sacred hill out of emerald sugarcane fields.'
      ],
      whatRemains: 'The excavated northern and eastern terraces displaying concentric circular brick tiers with recessed chambers. Over 40 life-size brick-and-terracotta Buddha statues in Bhumisparsha and Dhyana mudras survive inside open prayer niches along the terraces.',
      whyItMattersToday: 'Protected by the ASI. It represents a vital monument on the sacred Buddhist Pilgrimage Highway linking Vaishali with Kushinagar.',
      lookCloser: [
        {
          title: 'The Circular Stepped Circumambulation Tiers',
          focus: 'Monumental Brick Stupa Engineering',
          description: 'Each ascending circular terrace was constructed with concentric polygonal brick walls packed with clay, engineered to withstand seismic shifts and monsoon floods.'
        },
        {
          title: 'Terracotta Buddha Icons in Niches',
          focus: 'Late Gupta to Early Pala Sculpture',
          description: 'The seated Buddha statues display serene spiritual expressions with webbed fingers (Jala-anguli-hasta), curly hair, and elongated earlobes characteristic of classical canonical iconography.'
        },
        {
          title: 'The Pre-Ashokan Foundation Core',
          focus: 'Archaeological Stratigraphy',
          description: 'Trench excavations revealed that the colossal medieval stupa encases an earlier earthen and brick mound dating back to the 3rd century BCE.'
        }
      ],
      sources: {
        primary: 'Archaeological Survey of India (Excavation Reports by K.K. Muhammed, 1998)',
        secondary: 'Travels of Xuanzang & District Gazetteer of Champaran',
        designation: 'ASI Protected Monument of National Importance',
        surveyId: 'ASI-BR-06'
      },
      timelineEra: 'Pala-Buddhist',
      historicalPeriodYear: '6th – 7th Century CE (3rd c. BCE Core)',
      relatedSiteIds: ['kolhua-ashoka-pillar', 'nalanda-mahavihara', 'vikramshila-mahavihara']
    }
  },
  {
    id: 'mundeshwari-temple',
    name: 'Maa Mundeshwari Devi Temple',
    hindiName: 'माँ मुंडेश्वरी देवी मंदिर',
    location: 'Kaimur District (near Bhabua)',
    districtId: 'kaimur',
    coordinates: { lat: 25.0234, lng: 83.5855 },
    period: '108 CE (Gupta / Saka Inscription)',
    dynasty: 'Saka / Early Gupta Era',
    category: 'Ancient Hindu Temple',
    isUnesco: false,
    image: VERIFIED_IMAGES.mundeshwari,
    description: 'Recognized by the Archaeological Survey of India (ASI) as the oldest surviving operational Hindu temple in India, where rituals and worship have continued uninterrupted for over 1,900 years.',
    architecture: 'Rare octagonal (Ashtakon) stone temple built of carved sandstone blocks, featuring carved door jambs adorned with dvarapalas, Ganga and Yamuna river goddesses, and a four-faced Shiva lingam.',
    significance: 'Dated precisely to 108 CE based on an inscription found at the site. Practicing a unique bloodless symbolic sacrifice (Ahimsa Bali) where goats are momentarily brought before the deity and revived.',
    keyFeatures: [
      'Rare octagonal stone sanctum plan',
      'Chaturmukha (four-faced) Shiva lingam in the central mandapa',
      'Idol of Mother Mundeshwari depicted riding a buffalo (Mahishasuramardini form)',
      'Ancient Brahmi and Gupta script inscriptions'
    ],
    visitorInfo: {
      timings: '6:00 AM – 7:00 PM (Daily)',
      entryFee: 'Free entry',
      bestTime: 'October to March (Navratri is festive)',
      nearestHub: 'Bhabua Road (Mohania) Station (25 km)'
    },
    museumDoc: {
      whyItMatters: 'Verified by an inscription dated to the 30th year of the Saka Era (108 CE), Maa Mundeshwari is India’s oldest continuously functional stone temple—unbroken daily worship has been conducted here for over nineteen centuries.',
      storyNarrative: [
        'Perched 600 feet above the fertile plains on the summit of Pawoora Hill in the Kaimur range, this sanctuary predates the classical Gupta stone temples of Deogarh and Bhitargaon. Epigraphists discovered a stone tablet at the site recording that during the reign of a regional king, the temple of Viniteswara and Mandaleswara was patronized with oil for perpetual lamps.',
        'The temple architecture represents an extraordinary transitional moment in Indian stone masonry: instead of square sanctums that later became standard, Mundeshwari is built on an octagonal plan (Ashtakon), featuring four cardinal entrances with intricately carved door frames.',
        'A living testament to ancient non-violent traditions, the temple practices "Ahimsa Bali" (bloodless sacrifice). Devotees bring a young male goat before the goddess; the priest casts sacred akshat (rice grains) and mantras, causing the animal to fall into a peaceful swoon. Flowers and holy water are sprinkled, the goat stands up unhurt, and is released alive.'
      ],
      whatRemains: 'The carved octagonal sandstone sanctum with its stone sikhara preserved up to the roof level; the four-faced (Chaturmukha) Shiva lingam at the center; the ten-armed Mother Mundeshwari image; exquisitely sculpted door lintels depicting Ganga, Yamuna, dvarapalas, and floral vines.',
      whyItMattersToday: 'Protected by the ASI. Recognized internationally as an archaeological touchstone for the dating of pre-Gupta stone carving and early Shaiva-Shakta syncretism.',
      lookCloser: [
        {
          title: 'The Rare Octagonal (Ashtakon) Floor Plan',
          focus: 'Vedic Geometric Sanctum',
          description: 'Built of dry-masonry sandstone blocks fitted together with precision without mortar, the eight-sided plan is extremely rare in early Indian temple architecture.'
        },
        {
          title: 'Ganga & Yamuna Door Jamb Carvings',
          focus: 'Iconographic Transition to Temple Portals',
          description: 'The entrance jambs feature the sacred river goddesses Ganga on a Makara and Yamuna on a Kurma, serving as ritual purification markers for entering pilgrims.'
        },
        {
          title: 'The 108 CE Brahmi Inscription Tablet',
          focus: 'Epigraphic Chronology',
          description: 'The fragmented stone slab discovered by ASI epigraphist Dr. R.D. Banerji records endowments in the 30th year of a sovereign era, conclusively dating the shrine to antiquity.'
        }
      ],
      sources: {
        primary: 'Archaeological Survey of India (Epigraphia Indica & Annual Report 1903–04)',
        secondary: 'ASI Patna Circle Records & Bihar State Religious Trust Board',
        designation: 'ASI Protected Monument of National Importance',
        surveyId: 'ASI-BR-07'
      },
      timelineEra: 'Classical',
      historicalPeriodYear: '108 CE (1st – 2nd Century CE)',
      relatedSiteIds: ['sher-shah-tomb', 'rohtasgarh-fort', 'barabar-caves']
    }
  },
  {
    id: 'rohtasgarh-fort',
    name: 'Rohtasgarh Fort',
    hindiName: 'रोहतासगढ़ किला',
    location: 'Kaimur Hills, Rohtas District',
    districtId: 'rohtas',
    coordinates: { lat: 24.6300, lng: 83.9100 },
    period: '7th century CE to 16th century CE',
    dynasty: 'Raja Harishchandra Lineage, Suri, and Mughal Empires',
    category: 'Hill Fortress',
    isUnesco: false,
    image: VERIFIED_IMAGES.rohtasgarh,
    description: 'One of the largest, strongest, and most picturesque hill fortresses in Asia, sprawling across 42 square kilometers atop a sheer 1,500-foot sandstone plateau overlooking the Son River.',
    architecture: 'Natural cliff fortifications reinforced with battlements, massive stone bastions, Rajput and Mughal palaces (Man Singh Palace), Jama Masjid, and temples surrounded by dense teak forests.',
    significance: 'Historic refuge for Mughal Emperor Shah Jahan during his rebellion against father Jahangir. Rebuilt by Raja Man Singh (Mughal governor of Bihar and Bengal).',
    keyFeatures: [
      'Man Singh Palace with ornate courtyards, elephant brackets, and jharokhas',
      'Aina Mahal (Mirror Palace) and Takht-i-Badshahi royal audience throne',
      'Hathiya Pol (Elephant Gate) flanked by life-size elephant sculptures',
      'Breathtaking cliff-edge views looking down 1,500 feet into the Son River valley'
    ],
    visitorInfo: {
      timings: '6:00 AM – 5:00 PM',
      entryFee: 'Free entry',
      bestTime: 'October to February',
      nearestHub: 'Sasaram (45 km)'
    },
    museumDoc: {
      whyItMatters: 'Spanning 42 square kilometers atop an impregnable 1,500-foot sandstone plateau, Rohtasgarh is one of the largest hill fortresses in the world, serving as a strategic citadel for legendary rulers from Raja Harishchandra to Sher Shah Suri and Raja Man Singh.',
      storyNarrative: [
        'Legend attributes the foundation of this mountain citadel to Prince Rohitasva, son of the truth-telling king Harishchandra. Geographically blessed with sheer 1,500-foot vertical cliffs on all sides, the fort controlled the strategic crossing points of the Son River valley between Bengal and the Delhi Sultanate.',
        'In 1538 CE, Sher Shah Suri captured Rohtasgarh using an ingenious military ruse: requesting shelter for his royal women, he sent soldiers concealed in covered palanquins (dolis) who captured the gates from within. The fort then became the secure base where Sher Shah deposited his treasury while conquering Delhi.',
        'When Akbar appointed the formidable Kachwaha ruler Raja Man Singh as Subahdar of Bihar and Bengal in 1589, Man Singh selected Rohtasgarh as his viceregal headquarters, building a magnificent multi-storey palace with Persian and Rajasthani flourishes that still crowns the summit.'
      ],
      whatRemains: 'Extensive stone ramparts spanning 45 km of cliff edge; the sprawling Man Singh Palace complex with Aina Mahal, Takht-i-Badshahi, and Shahi Masjid; Hathiya Pol with its stone elephants; ancient stepwells, reservoirs, and isolated Shaiva temples.',
      whyItMattersToday: 'Protected by the ASI. One of Eastern India’s most monumental medieval mountain citadels, set amidst the forested wilderness of the Kaimur plateau.',
      lookCloser: [
        {
          title: 'Hathiya Pol (The Elephant Gate)',
          focus: 'Monumental Fort Ingress',
          description: 'Guarded by high-relief stone elephants flanking the main archway, the gate was engineered with double dog-leg turns to prevent war elephants from ramming doors.'
        },
        {
          title: 'Man Singh Palace (Kachwaha Architecture)',
          focus: 'Rajput-Mughal Synthesis',
          description: 'Features fluted pillars, stone jharokhas overlooking dizzying gorges, and delicate bracket carvings of floral scrolls and heraldic lions.'
        },
        {
          title: 'The Sheer 1,500-Foot Natural Escarpment',
          focus: 'Topographic Defensive Strategy',
          description: 'Except for three steep footpaths, the entire 42-sq-km perimeter consists of vertical sandstone cliffs, rendering siege artillery obsolete.'
        }
      ],
      sources: {
        primary: 'Archaeological Survey of India (Patna Circle)',
        secondary: 'Akbarnama by Abul Fazl & District Gazetteer of Shahabad (1906)',
        designation: 'ASI Protected Monument of National Importance',
        surveyId: 'ASI-BR-08'
      },
      timelineEra: 'Medieval',
      historicalPeriodYear: '7th – 16th Century CE',
      relatedSiteIds: ['sher-shah-tomb', 'mundeshwari-temple', 'barabar-caves']
    }
  },
  {
    id: 'kolhua-ashoka-pillar',
    name: 'Kolhua Ashokan Pillar & Stupa',
    hindiName: 'कोल्हुआ अशोक स्तंभ एवं स्तूप',
    location: 'Vaishali District',
    districtId: 'vaishali',
    coordinates: { lat: 26.0125, lng: 85.1102 },
    period: '3rd century BCE (ca. 250 BCE)',
    dynasty: 'Mauryan Empire (Emperor Ashoka)',
    category: 'Monolithic Pillar & Stupa',
    isUnesco: false,
    image: VERIFIED_IMAGES.ashokanPillar,
    description: 'One of the best preserved of all Ashokan pillars in India, standing intact with its monolithic polished sandstone shaft crowned by an impressive seated lion facing north toward Buddha’s last journey.',
    architecture: 'Monolithic polished Chunar sandstone shaft rising 11 meters (36 feet), topped by an inverted lotus bell capital, square abacus, and a muscular seated lion carved in high relief.',
    significance: 'Marks the sacred spot where Lord Buddha delivered his last sermon before his Mahaparinirvana and where the monkey king offered a bowl of honey to the Buddha.',
    keyFeatures: [
      'Intact Ashokan Pillar with seated single lion capital with luminous Mauryan mirror polish',
      'Ananda Stupa commemorating Buddha’s beloved chief disciple Ananda',
      'Markata Hrada (Monkey Tank) excavated in antiquity by monkeys',
      'Excavated brick monasteries with monk cells and assembly courtyards'
    ],
    visitorInfo: {
      timings: '6:00 AM – 6:00 PM (Daily)',
      entryFee: '₹25 for Indian nationals, ₹300 for foreigners',
      bestTime: 'October to March',
      nearestHub: 'Hajipur (35 km) or Patna (55 km)'
    },
    museumDoc: {
      whyItMatters: 'Unlike the famous quadruple lions of Sarnath, the Kolhua pillar stands in situ with its single lion facing strictly North—gazing in mourning in the direction of Kushinagar where the Buddha journeyed to attain Mahaparinirvana.',
      storyNarrative: [
        'Vaishali held a revered place in Buddha’s heart: it was the capital of the Licchavi republic—the world’s first recorded democracy—and the city where the Buddha admitted women into the monastic order (Sangha) at the request of his foster mother Mahapajapati Gotami.',
        'At Kolhua, ancient Buddhist tradition records the miracle of Markata Hrada: a troop of monkeys dug a tank for the Buddha and offered him a bowl filled with wild honey. Near this tank, the Buddha announced his impending demise within three months.',
        'Two centuries later, Emperor Ashoka arrived on royal pilgrimage, raising this monolithic 11-meter pillar of polished Chunar sandstone alongside an adjoining brick stupa that encloses the sacred relics of the Buddha’s beloved disciple Ananda.'
      ],
      whatRemains: 'An exceptionally complete monument: the monolithic 36-foot sandstone pillar with inverted lotus capital and lion intact; the massive circular brick Ananda Stupa; the excavated Markata Hrada tank; and ancient brick monastic dormitories with brick votive stupas.',
      whyItMattersToday: 'Protected by the ASI. It represents one of the few places in India where an Ashokan pillar stands in its original sacred archaeological landscape without having been relocated or damaged.',
      lookCloser: [
        {
          title: 'The North-Facing Solitary Lion Capital',
          focus: 'Iconographic Directionality',
          description: 'The single lion is carved with muscular haunches and a roaring mouth, oriented precisely toward the northern road to Kushinagar to symbolize the Dhamma proclamation.'
        },
        {
          title: 'Mauryan Sandstone Surface Lustre',
          focus: 'Chunar Monolithic Quarries',
          description: 'Carved from a single block of buff-colored Chunar sandstone brought hundreds of miles up the Ganga, exhibiting the glass-smooth polish characteristic of the 3rd century BCE.'
        },
        {
          title: 'The Ananda Relic Stupa Stratigraphy',
          focus: 'Early Brick Monastic Architecture',
          description: 'Surrounding the pillar are dozens of miniature votive stupas left by pilgrims over centuries, creating an outdoor open-air sculptural gallery.'
        }
      ],
      sources: {
        primary: 'Archaeological Survey of India (Excavations at Vaishali 1958–1962 by A.S. Altekar)',
        secondary: 'Buddhist Records of the Western World (Faxian and Xuanzang)',
        designation: 'ASI Protected Monument of National Importance',
        surveyId: 'ASI-BR-09'
      },
      timelineEra: 'Mauryan',
      historicalPeriodYear: '3rd Century BCE (ca. 250 BCE)',
      relatedSiteIds: ['barabar-caves', 'kesaria-stupa', 'nalanda-mahavihara']
    }
  },
  {
    id: 'takht-patna-sahib',
    name: 'Takht Sri Harmandir Ji Patna Sahib',
    hindiName: 'तख्त श्री हरिमंदिर जी पटना साहिब',
    location: 'Old Patna (Patna City)',
    districtId: 'patna',
    coordinates: { lat: 25.5941, lng: 85.2281 },
    period: '1839 (Present Gurudwara by Maharaja Ranjit Singh)',
    dynasty: 'Sikh Empire patronage on 1666 Birthplace',
    category: 'Spiritual Takht',
    isUnesco: false,
    image: VERIFIED_IMAGES.patnaSahib,
    description: 'One of the five sacred Takhts (Seats of Spiritual Authority) of Sikhism, commemorating the birthplace of Guru Gobind Singh Ji (the Tenth Sikh Guru) in 1666 CE.',
    architecture: 'Gleaming white marble Gurudwara featuring gilded fluted domes, spacious marbled parikrama courtyards, stained glass floral artwork, and continuous 24/7 Guru Ka Langar serving thousands of pilgrims.',
    significance: 'Preserves sacred personal relics of Guru Gobind Singh Ji, including his childhood golden cradle (Pangura Sahib), arrows, sacred daggers, and handwritten copies of Guru Granth Sahib.',
    keyFeatures: [
      'Sacred birth chamber of the Tenth Guru',
      'Historic relics including the holy book with Guru Gobind Singh Ji’s seal',
      'Continuous community kitchen (Guru Ka Langar) feeding all without distinction of caste or creed',
      'Scenic location in historic Patna City along ancient trade lanes'
    ],
    visitorInfo: {
      timings: 'Open 24 Hours (Daily)',
      entryFee: 'Free entry (Head covering mandatory)',
      bestTime: 'Year-round, especially during Prakash Parv (December/January)',
      nearestHub: 'Patna Sahib Railway Station (1.5 km) or Patna Junction (10 km)'
    },
    museumDoc: {
      whyItMatters: 'One of the supreme Takhts (Thrones of Spiritual Authority) in Sikhism worldwide. It marks the sanctified birthplace of Guru Gobind Singh Ji—warrior-poet, philosopher, and creator of the Khalsa—who spent his early childhood on the banks of the Ganga.',
      storyNarrative: [
        'In 1666 CE, while the Ninth Sikh Guru, Guru Tegh Bahadur Ji, was traveling through Assam and Bengal, his wife Mata Gujri stayed in the welcoming home of Salis Rai Johri in Patna City along the Ganga riverfront. Here, on December 22, 1666, Gobind Rai (later Guru Gobind Singh Ji) was born.',
        'The young Gobind spent his first six years playing with children of all communities along the ghats of Patna, learning horseback riding, archery, Persian, and Sanskrit. Before departing for Anandpur Sahib, his mother preserved his cradle and personal items at the site.',
        'In the 1830s, Maharaja Ranjit Singh of the Sikh Empire commissioned master artisans to rebuild the sanctum into a magnificent marble gurdwara. Today, the Gurudwara stands as an enduring pillar of interfaith harmony, universal fraternity, and spiritual devotion in Bihar.'
      ],
      whatRemains: 'The grand white marble multi-tier gurdwara complex with fluted domes; the sanctum sanctorum (Janmasthan); the historic museum gallery housing Guru Gobind Singh Ji’s childhood gold-plated cradle (Pangura Sahib), four sacred arrows, a small dagger, and signed Guru Granth Sahib manuscripts; and the round-the-clock Langar hall.',
      whyItMattersToday: 'One of Sikhism’s five Takhts. During the 350th Prakash Parv celebrations, hundreds of thousands of pilgrims from the United States, Canada, the United Kingdom, and Punjab gathered here in profound devotion.',
      lookCloser: [
        {
          title: 'The Pangura Sahib (Golden Childhood Cradle)',
          focus: 'Sacred Relic Preservation',
          description: 'A cradle preserved with original wood and later enveloped in ornate beaten gold leaf, representing the loving memories of Mata Gujri.'
        },
        {
          title: 'Signed Hukamnamas and Manuscripts',
          focus: 'Epigraphic Calligraphy',
          description: 'Sacred handwritten letters (Hukamnamas) and manuscripts bearing Guru Gobind Singh Ji’s distinctive signature in Gurmukhi script.'
        },
        {
          title: 'Traditional Marble Inlay and Floral Jharokhas',
          focus: 'Sikh Sacred Architecture',
          description: 'The central darbar hall features pure Makrana marble floors with lapis lazuli and carnelian floral inlays and gold-leaf ceilings.'
        }
      ],
      sources: {
        primary: 'Takht Sri Harmandir Ji Patna Sahib Prabandhak Committee Archives',
        secondary: 'Mahan Kosh by Bhai Kahn Singh Nabha & Bihar State Tourism Board',
        designation: 'Supreme Takht of Sikh Authority (Historic Monument)',
        surveyId: 'PATNA-TAkHT-01'
      },
      timelineEra: 'Modern',
      historicalPeriodYear: '1666 Birthplace / 1839 Present Structure',
      relatedSiteIds: ['golghar-patna', 'nalanda-mahavihara', 'barabar-caves']
    }
  },
  {
    id: 'golghar-patna',
    name: 'Golghar Granary',
    hindiName: 'गोलघर (विशाल अन्नागार)',
    location: 'Patna City, Patna District',
    districtId: 'patna',
    coordinates: { lat: 25.6207, lng: 85.1432 },
    period: '1786 CE',
    dynasty: 'British Colonial Era (Captain John Garstin)',
    category: 'Colonial Architecture',
    isUnesco: false,
    image: VERIFIED_IMAGES.golghar,
    description: 'An iconic 29-meter-tall beehive-shaped granary built in 1786 without a single interior pillar, designed to store 137,000 tons of grain following the catastrophic famine of 1770.',
    architecture: 'Pillar-less beehive masonry dome with walls 3.6 meters thick at the base, encircled by twin spiral staircases of 145 steps each that wind up to an open apex ventilation hole.',
    significance: 'Celebrated for its extraordinary acoustic properties (the whispering gallery effect) and as an enduring civic symbol of Patna overlooking the Gandhi Maidan and Ganga riverfront.',
    keyFeatures: [
      'Colossal beehive dome standing 29 meters high completely without internal pillars',
      'Dual exterior spiral staircases designed for grain porters to ascend and descend',
      'Whispering gallery acoustic echo where soft sounds resonate across the dome',
      'Panoramic 360-degree viewing terrace overlooking Patna and the Ganga'
    ],
    visitorInfo: {
      timings: '10:00 AM – 5:00 PM (Daily)',
      entryFee: '₹20 for Indian nationals, ₹100 for foreigners',
      bestTime: 'October to March',
      nearestHub: 'Patna Junction (2 km) or Patna Airport (7 km)'
    },
    museumDoc: {
      whyItMatters: 'Constructed in 1786 in the wake of the devastating famine of 1770, Golghar is an audacious marvel of structural engineering—a 29-meter-high beehive masonry vault built completely without interior pillars.',
      storyNarrative: [
        'Following the horrific 1770 famine that wiped out one-third of the population of Bengal and Bihar, the British administration commissioned military engineer Captain John Garstin to build a colossal public granary to prevent future starvation.',
        'Garstin designed a unique beehive structure with a base circumference of 125 meters and walls 3.6 meters thick. Grain bags were to be carried up one exterior spiral staircase of 145 steps, emptied into an opening at the very top, and the empty porters would descend via the second spiral staircase—ensuring non-conflicting traffic flow.',
        'In an ironic historical quirk, the heavy doors at the bottom were designed to open inward: when the granary was filled, the internal pressure of 137,000 tons of grain prevented the doors from being opened, leading it to serve primarily as a landmark and acoustic curiosity.'
      ],
      whatRemains: 'Completely preserved masonry monument and manicured civic garden. The 29-meter dome, twin spiral staircases, top observation platform, and bottom entry vaults.',
      whyItMattersToday: 'Protected by the ASI and Government of Bihar. It is Patna’s most recognized civic icon, offering sweeping views of the Ganga and city skyline.',
      lookCloser: [
        {
          title: 'The Pillar-Less Vaulting Geometry',
          focus: 'Acoustic & Masonry Physics',
          description: 'The dome’s parabolic curve carries all compressive loads directly down to the 3.6-meter-thick stone foundation, eliminating the need for supportive columns.'
        },
        {
          title: 'The Twin Helical Staircases',
          focus: '18th-Century Labor Logistics',
          description: 'A continuous spiral of 145 sandstone steps ascending in a double helix, designed so that descending workers would never collide with ascending carriers.'
        },
        {
          title: 'The Whispering Gallery Effect',
          focus: 'Sonic Resonance',
          description: 'A whisper uttered near the inner masonry wall travels clearly along the curvature to be heard crisply on the opposite side 30 meters away.'
        }
      ],
      sources: {
        primary: 'Archaeological Survey of India & Bihar State Archives',
        secondary: 'Patna District Gazetteer (L.S.S. O’Malley, 1907)',
        designation: 'State Protected Monument (ASI Heritage List)',
        surveyId: 'PATNA-GOLGHAR-01'
      },
      timelineEra: 'Modern',
      historicalPeriodYear: '1786 CE (Late 18th Century)',
      relatedSiteIds: ['takht-patna-sahib', 'sher-shah-tomb', 'barabar-caves']
    }
  }
];

export function getHeritageSiteById(id: string): HeritageSite | undefined {
  return HERITAGE_SITES.find(site => site.id === id);
}

export function getHeritageSitesByDistrict(districtId: string): HeritageSite[] {
  return HERITAGE_SITES.filter(site => site.districtId === districtId);
}
