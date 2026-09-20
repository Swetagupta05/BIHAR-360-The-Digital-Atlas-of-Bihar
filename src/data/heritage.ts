import { HeritageSite } from '../types';
import { VERIFIED_IMAGES } from './media';

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
    }
  }
];
