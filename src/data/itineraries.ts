import { CuratedJourney, JourneyTheme } from '../types';
import { VERIFIED_IMAGES } from './media';

// Backwards compatibility interfaces
export interface ItineraryStop {
  district: string;
  placeName: string;
  highlight: string;
  duration: string;
}

export interface TravelCircuit {
  id: string;
  title: string;
  hindiTitle: string;
  days: number;
  theme: string;
  overview: string;
  stops: ItineraryStop[];
  bestSeason: string;
  practicalTips: string[];
}

export const TRAVEL_CIRCUITS: TravelCircuit[] = [
  {
    id: 'buddhist-circuit',
    title: 'Sacred Buddhist Pilgrimage Circuit',
    hindiTitle: 'बौद्ध तीर्थ परिपथ',
    days: 5,
    theme: 'Spiritual Enlightenment & Monastic Heritage',
    overview: 'Follow the footsteps of the Tathagata from the place of enlightenment at Bodh Gaya to the royal monsoon retreats of Rajgir, the intellectual glories of Nalanda, and his final discourse in Vaishali.',
    bestSeason: 'October to March',
    stops: [
      { district: 'Gaya', placeName: 'Mahabodhi Temple & Bodhi Tree', highlight: 'Sit in silent meditation where Siddhartha became the Buddha beneath the sacred Bodhi Tree.', duration: 'Day 1' },
      { district: 'Nalanda', placeName: 'Rajgir (Vulture Peak & Venuvana)', highlight: 'Ascend the aerial ropeway to Vishwa Shanti Stupa and meditate at Griddhakuta Peak.', duration: 'Day 2' },
      { district: 'Nalanda', placeName: 'Nalanda Mahavihara Ruins', highlight: 'Walk the brick corridors of the 1,500-year-old university and examine the stupa of Sariputra.', duration: 'Day 3' },
      { district: 'Vaishali', placeName: 'Kolhua Ashokan Pillar & Relic Stupa', highlight: 'View the intact monolithic Ashokan Pillar and Buddha relic stupa where sacred ashes were buried.', duration: 'Day 4' },
      { district: 'East Champaran', placeName: 'Kesaria Buddhist Stupa', highlight: 'Marvel at one of the tallest ancient brick stupas in the world overlooking agricultural plains.', duration: 'Day 5' }
    ],
    practicalTips: [
      'Dress modestly with shoulders and knees covered in all Buddhist shrines.',
      'Gaya International Airport offers direct charter flights from Thailand, Myanmar, and Sri Lanka during the winter pilgrimage season.',
      'Hire verified ASI guides at Nalanda and Bodh Gaya for deep architectural context.'
    ]
  },
  {
    id: 'jain-circuit',
    title: 'Tirthankara Jain Pilgrimage Trail',
    hindiTitle: 'जैन तीर्थंकर परिपथ',
    days: 4,
    theme: 'Non-Violence & Spiritual Nirvana',
    overview: 'A holy journey through the consecrated sites of the 24th Tirthankara Lord Mahavira and 12th Tirthankara Vasupujya across Bihar’s tranquil hills and white marble island temples.',
    bestSeason: 'November to February',
    stops: [
      { district: 'Nalanda', placeName: 'Pawapuri Jal Mandir', highlight: 'White marble lotus pond temple marking the holy spot of Lord Mahavira’s Mahaparinirvana.', duration: 'Day 1' },
      { district: 'Vaishali', placeName: 'Kundalpur Vaishali', highlight: 'Ancestral birthplace shrine of Lord Mahavira with sacred memorial gardens.', duration: 'Day 2' },
      { district: 'Jamui', placeName: 'Lachhuar Jain Temples', highlight: 'Scenic pilgrimage complex where Lord Mahavira spent years in deep ascetic meditation.', duration: 'Day 3' },
      { district: 'Banka', placeName: 'Mandar Hill Summit Temples', highlight: 'Climb or ropeway to the sacred granite summit where 12th Tirthankara Vasupujya attained liberation.', duration: 'Day 4' }
    ],
    practicalTips: [
      'Pure Jain vegetarian food and dharamshala accommodations are readily available at Pawapuri and Lachhuar.',
      'Early morning prayers at Jal Mandir present ethereal reflections of white marble in lotus waters.'
    ]
  },
  {
    id: 'heritage-forts-circuit',
    title: 'Imperial Forts & Ancient Temples Trail',
    hindiTitle: 'ऐतिहासिक दुर्ग एवं मंदिर परिपथ',
    days: 4,
    theme: 'Architecture, Dynasties & Stone Masonry',
    overview: 'Explore the oldest surviving rock-cut granite caves in India, Sher Shah Suri’s floating red sandstone marvel, the cliff-top plateau fort of Rohtasgarh, and India’s oldest operational stone temple.',
    bestSeason: 'October to February',
    stops: [
      { district: 'Jehanabad', placeName: 'Barabar Caves', highlight: 'Echoing polished granite chambers carved under Emperor Ashoka in 261 BCE.', duration: 'Day 1' },
      { district: 'Rohtas', placeName: 'Tomb of Sher Shah Suri', highlight: '122-foot Indo-Islamic island tomb resting serenely on an artificial lake in Sasaram.', duration: 'Day 2' },
      { district: 'Rohtas', placeName: 'Rohtasgarh Fort & Plateau', highlight: 'Scale the 1,500-foot sandstone fortress overlooking the Son river valley.', duration: 'Day 3' },
      { district: 'Kaimur', placeName: 'Maa Mundeshwari Temple & Waterfalls', highlight: 'Offer prayers at India’s oldest functional temple (108 CE) and visit Telhar Kund waterfall.', duration: 'Day 4' }
    ],
    practicalTips: [
      'Carry sturdy trekking shoes for climbing Rohtasgarh Fort and Mundeshwari Hill.',
      'Sasaram is well-connected by express trains along the Delhi-Howrah Grand Chord line.'
    ]
  },
  {
    id: 'mithila-art-circuit',
    title: 'Mithila Cultural & Artisan Heritage Trail',
    hindiTitle: 'मिथिला कला एवं संस्कृति परिपथ',
    days: 3,
    theme: 'Folk Painting, Royal Palaces & Makhana Harvest',
    overview: 'Immerse yourself in the living art villages of Madhubani, explore the opulent palaces of Raj Darbhanga, and visit the sacred birthplace of Goddess Sita at Punaura Dham.',
    bestSeason: 'October to March',
    stops: [
      { district: 'Darbhanga', placeName: 'Raj Darbhanga Fort & Shyama Mai Mandir', highlight: 'Gaze at the red brick royal palaces and hear Darbhanga Dhrupad classical music.', duration: 'Day 1' },
      { district: 'Madhubani', placeName: 'Jitwarpur & Ranti Artisan Villages', highlight: 'Sit in the courtyards of national award-winning master painters and watch natural dye preparation.', duration: 'Day 2' },
      { district: 'Sitamarhi', placeName: 'Punaura Dham (Janaki Janmabhoomi)', highlight: 'Visit the sacred tank and temple marking the spot where King Janaka discovered infant Sita.', duration: 'Day 3' }
    ],
    practicalTips: [
      'Darbhanga Airport connects directly with major Indian metros (Delhi, Mumbai, Bengaluru).',
      'You can purchase authentic Madhubani paintings directly from women master artisans in Jitwarpur without middlemen.'
    ]
  },
  {
    id: 'wildlife-eco-circuit',
    title: 'Wild Bihar Eco-Tourism & Wetlands Circuit',
    hindiTitle: 'पर्यावरण एवं वन्यजीव परिपथ',
    days: 4,
    theme: 'Tigers, River Dolphins, Hot Springs & Bird Sanctuaries',
    overview: 'Discover the rich biodiversity of Bihar from the sub-Himalayan tiger jungles of Valmiki to the Gangetic river dolphin sanctuary and mineral hot springs of Munger.',
    bestSeason: 'November to March',
    stops: [
      { district: 'West Champaran', placeName: 'Valmiki National Park & Tiger Reserve', highlight: 'Jeep safari through dense Sal forests and canopied grasslands along the Gandak River.', duration: 'Day 1 & 2' },
      { district: 'Begusarai', placeName: 'Kanwar Lake Bird Sanctuary (Ramsar)', highlight: 'Boat through Asia’s largest freshwater oxbow lake spotting migratory winter waterfowl.', duration: 'Day 3' },
      { district: 'Bhagalpur & Munger', placeName: 'Vikramshila Dolphin Sanctuary & Bhimbandh', highlight: 'Spot surfacing Gangetic dolphins in the river and take a mineral bath in natural hot springs.', duration: 'Day 4' }
    ],
    practicalTips: [
      'Book Valmiki Tiger Reserve forest rest houses and safaris in advance via the Bihar Eco-Tourism portal.',
      'Carry binoculars and a high-zoom camera for bird-watching at Kanwar Lake and dolphin spotting in Bhagalpur.'
    ]
  }
];

// Curated 10 Editorial Journeys of Bihar 360
export const CURATED_JOURNEYS: CuratedJourney[] = [
  {
    id: 'buddhist-awakening-trail',
    title: "The Awakening Trail: Following the Buddha's Footsteps",
    hindiTitle: "बोधिसत्व पथ: भगवान बुद्ध के पदचिह्न",
    tagline: "From ascetic search to Supreme Enlightenment and the monastic universities of Magadha.",
    hindiTagline: "कठिन तपस्या से संबोधि और मगध के महान महाविहारों तक की पावन यात्रा।",
    theme: 'spiritual',
    themeLabel: 'Spiritual & Philosophical',
    themeColor: '#C85A32',
    durationDays: 5,
    totalStops: 5,
    districts: ['gaya', 'nalanda', 'vaishali', 'east-champaran'],
    districtNames: ['Gaya', 'Nalanda', 'Vaishali', 'East Champaran'],
    regions: ['Magadh', 'Tirhut'],
    bestSeason: 'October to March (Crisp mornings, cool temple courtyards)',
    pace: 'Moderate',
    heroImage: VERIFIED_IMAGES.mahabodhi,
    storyNarrative:
      "This is not merely a tour of stone stupas—it is the geographic choreography of a spiritual revolution that transformed Asian civilization. Over twenty-five centuries ago, Prince Siddhartha renounced royalty, fasted upon the crags of Dungeshwari, and sat beneath the sacred Ficus religiosa at Uruvela until dawn broke over human suffering. The trail traces this profound awakening: from the sacred Bodhi Tree to the royal bamboo groves of Rajgir, the towering monastic towers of Nalanda where Xuanzang studied, the mango groves of Vaishali where the sangha welcomed women, and the monumental brick stupa of Kesaria pointing towards the Himalaya.",
    whyThisRoute:
      "Connects the four most consequential Buddhist archaeological landscapes in the subcontinent within a single contiguous corridor.",
    stops: [
      {
        stopNumber: 1,
        dayNumber: 1,
        placeName: 'Mahabodhi Temple & The Sacred Bodhi Tree',
        hindiPlaceName: 'महाबोधि मंदिर एवं पवित्र बोधि वृक्ष',
        districtId: 'gaya',
        districtName: 'Gaya',
        region: 'Magadh',
        headline: 'The Vajrasana: Where Siddhartha became the Buddha',
        narrative:
          'Step into the sacred enclosure surrounding the 55-metre pyramidal Mahabodhi temple. Here sits the fourth-generation descendant of the ficus religiosa under which Siddhartha Gautama meditated for 49 days. Walk the Animeshlocha stupa and the Chankramana (cloister walk) adorned with nineteen lotus carvings marking his footsteps in meditation.',
        whatToExperience: [
          'Dawn circumambulation alongside monks chanting Pali suttas',
          'The diamond throne (Vajrasana) carved under Emperor Ashoka',
          'Meditation courtyards shaded by sacred peepal leaves'
        ],
        culinaryHighlight: {
          dishName: 'Gaya Tilkut & Anarsa',
          description: 'Winter confection of hand-beaten sesame and jaggery roasted on wood-fired bhattis across Ramna Road.',
          foodId: 'gaya-tilkut'
        },
        musicRecommendation: {
          trackId: 'magahi-falgu-nirgun',
          title: 'Magahi Nirgun on the Banks of Falgu',
          genre: 'Spiritual / Devotional',
          artist: 'Traditional Magadhi Singers'
        },
        languageSpoken: 'Magahi (मगही) and administrative Hindi',
        historicalContext: 'UNESCO World Heritage site; architectural core dates from the late Gupta period (5th–6th century CE) over Ashokan foundations.',
        practicalTips: 'Smartphones and digital cameras are not allowed inside the inner sanctum. Dedicated lockers available at the security gate.',
        travelTransit: 'Direct flights to Gaya International Airport; Gaya Junction is 14 km away.',
        image: VERIFIED_IMAGES.mahabodhi
      },
      {
        stopNumber: 2,
        dayNumber: 2,
        placeName: 'Rajgir: Griddhakuta (Vulture Peak) & Venuvana',
        hindiPlaceName: 'राजगीर: गृद्धकूट पर्वत एवं वेणुवन',
        districtId: 'nalanda',
        districtName: 'Nalanda',
        region: 'Magadh',
        headline: 'The Mountain Retreats of the Tathagata',
        narrative:
          'Surrounded by five ringed hills of quartzite rock, ancient Rajagriha was King Bimbisara’s mountain capital. At Griddhakuta Peak, the Buddha delivered the Heart Sutra and Lotus Sutra to gathered disciples. Below lies Venuvana, the serene royal bamboo garden presented by King Bimbisara to the early Sangha for monsoon retreats.',
        whatToExperience: [
          'Aerial ropeway ascent to the white Japanese Vishwa Shanti Stupa',
          'Stone steps leading to the stone cave cells of Shariputra and Ananda on Griddhakuta',
          'The ancient Cyclopean Wall spanning 40 kilometres of hilltops'
        ],
        culinaryHighlight: {
          dishName: 'Silao Khaja',
          description: 'Crisp multi-layered sweet pastry made of wheat flour and sugar syrup, celebrated in Magadha culinary heritage.',
          foodId: 'silao-khaja'
        },
        musicRecommendation: {
          trackId: 'magahi-sohar-janam',
          title: 'Magahi Flute & Folk Echoes',
          genre: 'Folk / Regional',
          artist: 'Folk Ensemble of Rajgir'
        },
        languageSpoken: 'Magahi (मगही)',
        historicalContext: '6th century BCE capital of Magadha; site of the First Buddhist Council convened at Saptaparni Cave after the Mahaparinirvana.',
        practicalTips: 'Climb Griddhakuta early in the morning before midday heat; the aerial ropeway operates 9:00 AM to 5:00 PM.',
        travelTransit: '68 km north-east of Gaya via scenic NH 120 (approx. 1.5 hours drive).',
        image: VERIFIED_IMAGES.barabarCaves
      },
      {
        stopNumber: 3,
        dayNumber: 3,
        placeName: 'Nalanda Mahavihara Ancient University Ruins',
        hindiPlaceName: 'नालंदा महाविहार के प्राचीन ध्वंसावशेष',
        districtId: 'nalanda',
        districtName: 'Nalanda',
        region: 'Magadh',
        headline: 'The Epicentre of Ancient Buddhist Scholarship',
        narrative:
          'Founded under the Gupta emperor Kumaragupta I in the 5th century CE, Nalanda was the ancient world’s greatest residential university, housing 10,000 monks and scholars from China, Korea, Japan, Tibet, Sumatra, and Persia. Stroll through the burnt-red brick chaityas, monastic dormitories, and the dramatic Stupa 3 with preserved stucco figures of Bodhisattvas.',
        whatToExperience: [
          'Archaeological excavations spanning 11 monasteries and 6 temples',
          'Sariputra Stupa with its multi-layered construction periods',
          'The ASI Nalanda Museum holding bronze sculptures, seals, and terracotta plaques'
        ],
        culinaryHighlight: {
          dishName: 'Sattu Ghol & Makuni',
          description: 'Roasted gram flour drink seasoned with black salt, roasted cumin, green chillies, and lemon juice.',
          foodId: 'sattu-sharbat'
        },
        musicRecommendation: {
          trackId: 'darbhanga-dhrupad-darbari',
          title: 'Dhrupad Meditation in Darbari',
          genre: 'Classical / Raga',
          artist: 'Darbhanga Tradition'
        },
        languageSpoken: 'Magahi (मगही)',
        historicalContext: 'UNESCO World Heritage site; sacked in the late 12th century CE; chronicled in detail by 7th-century Chinese pilgrim Xuanzang.',
        practicalTips: 'Book an authorized ASI guide at the entry gate; allocate at least 2.5 to 3 hours to absorb the architectural layout.',
        travelTransit: '15 km north-east of Rajgir along SH 78 (approx. 25 minutes drive).',
        image: VERIFIED_IMAGES.nalanda
      },
      {
        stopNumber: 4,
        dayNumber: 4,
        placeName: 'Kolhua & Vaishali Relic Stupa',
        hindiPlaceName: 'कोल्हुआ एवं वैशाली धातु स्तूप',
        districtId: 'vaishali',
        districtName: 'Vaishali',
        region: 'Tirhut',
        headline: 'The Republic Where Women Entered the Sangha',
        narrative:
          'Cross the Ganga northwards into the realm of the ancient Licchavis. At Kolhua stands an exceptionally preserved polished sandstone Ashokan Pillar crowned by a solitary seated lion facing north towards the Buddha’s final journey to Kushinagar. Nearby lies the Ramkund (monkey tank) and the ancient mud-brick Relic Stupa where the Licchavis enshrined their eighth share of the Buddha’s cremated remains.',
        whatToExperience: [
          'The complete monolithic 11-metre Ashokan Pillar and brick stupa complex',
          'The relic stupa where archaeological excavations uncovered the soapstone casket',
          'Abhishek Pushkarini (Coronation Tank) where 7,707 elected Licchavi rajas were anointed'
        ],
        culinaryHighlight: {
          dishName: 'Chana Ghugni with Poori',
          description: 'Slow-cooked spiced Bengal gram infused with ginger, cumin, and mustard oil, served with crisp fried pooris.',
          foodId: 'chana-ghugni'
        },
        musicRecommendation: {
          trackId: 'bhikhari-thakur-bidesiya',
          title: 'Echoes of the North Plains',
          genre: 'Folk Ballad',
          artist: 'Tirhut Folk Troupe'
        },
        languageSpoken: 'Bajjika (बज्जिका) and Hindi',
        historicalContext: 'Ancient capital of the Vajjian confederacy; the Buddha accepted amrapali’s mango grove here and delivered his last monsoon sermon.',
        practicalTips: 'Combine with a stop at the Vaishali Archaeological Museum to see the terracotta figurines and ancient punch-marked coins.',
        travelTransit: '85 km north-west of Nalanda via Patna and Mahatma Gandhi Setu / JP Ganga Path (approx. 2.5 hours).',
        image: VERIFIED_IMAGES.ashokanPillar
      },
      {
        stopNumber: 5,
        dayNumber: 5,
        placeName: 'Kesaria Stupa: The Monumental Cylinder',
        hindiPlaceName: 'केसरिया स्तूप: विशालकाय बौद्ध स्तूप',
        districtId: 'east-champaran',
        districtName: 'East Champaran',
        region: 'Tirhut',
        headline: 'One of the Worlds Largest Ancient Brick Stupas',
        narrative:
          'Rising 104 feet into the open blue skies of Champaran, the Kesaria Stupa stands taller than the famous Borobudur in Java. Built during the Pala period over earlier Licchavi and Mauryan platforms, this multi-tiered polygonal brick monument commemorates the spot where the Buddha bestowed his alms-bowl upon the weeping citizens of Vaishali before departing towards Kushinagar.',
        whatToExperience: [
          'Ascending circular brick terraces punctuated by terracotta Buddha alcoves',
          'Vistas of surrounding Champaran agricultural plains from the base perimeter',
          'Remains of ancient circumambulatory pathways carved into alluvial loam'
        ],
        culinaryHighlight: {
          dishName: 'Champaran Handi Mutton or Ahuna Kathal',
          description: 'Clay-pot slow cooking sealed with dough, spiced with whole garlic bulbs and mustard oil cooked over wood charcoal.',
          foodId: 'champaran-mutton'
        },
        musicRecommendation: {
          trackId: 'bhojpuri-kajari-barsan',
          title: 'Champaran Folk Echoes',
          genre: 'Folk / Terai',
          artist: 'Bhojpuri Heritage Ensemble'
        },
        languageSpoken: 'Bhojpuri (भोजपुरी)',
        historicalContext: 'Excavated systematically by ASI in 1998; original core dated to the 3rd century BCE, expanded substantially around 8th century CE.',
        practicalTips: 'Early morning light offers spectacular photographic angles. Combine with Motihari Gandhi Memorial.',
        travelTransit: '55 km north-west of Vaishali via NH 722 (approx. 1.5 hours drive).',
        image: VERIFIED_IMAGES.kesariaStupa
      }
    ],
    culinaryTraditions: ['Gaya Tilkut & Anarsa', 'Silao Khaja', 'Sattu Sharbat', 'Champaran Ahuna Handi', 'Chana Ghugni'],
    craftTraditions: ['Stone carving of Bodh Gaya', 'Brassware of Nalanda', 'Bamboo crafts of Vaishali'],
    connectedEras: ['Mahajanapadas (c. 600–300 BCE)', 'Mauryan Period (c. 322–185 BCE)', 'Gupta & Classical Era (c. 319–550 CE)', 'Pala Era (c. 750–1174 CE)'],
    travelAdvisories: [
      'Dress respectfully covering shoulders and legs at all Buddhist shrines.',
      'Winter months (November to February) are optimal for pleasant outdoor exploring.',
      'Bodh Gaya and Nalanda offer excellent government tourist lodges (Hotel Tathagat Vihar & Hotel Tathagat).'
    ],
    sources: ['Archaeological Survey of India (ASI) reports', 'Xuanzang: Buddhist Records of the Western World', 'UNESCO World Heritage Centre dossiers']
  },
  {
    id: 'mauryan-imperial-echoes',
    title: 'Imperial Echoes: The Mauryan & Guptan Capitals',
    hindiTitle: 'मौर्य साम्राज्य की गूँज: पाटलिपुत्र से बराबर तक',
    tagline: 'Rock edicts, polished mirror caves, and the seat of India’s first pan-subcontinental empire.',
    hindiTagline: 'अशोक के शिलास्तंभ, दर्पण जैसी चमकीली गुफाएँ और प्राचीन भारत की राजधानी।',
    theme: 'history',
    themeLabel: 'Ancient Empires & Capitals',
    themeColor: '#2C5D75',
    durationDays: 4,
    totalStops: 4,
    districts: ['patna', 'jehanabad', 'nalanda', 'vaishali'],
    districtNames: ['Patna', 'Jehanabad', 'Nalanda', 'Vaishali'],
    regions: ['Magadh', 'Tirhut'],
    bestSeason: 'October to February',
    pace: 'Moderate',
    heroImage: VERIFIED_IMAGES.barabarCaves,
    storyNarrative:
      "Beneath the busy urban lanes of modern Patna lies Pataliputra—the city founded by King Ajatashatru and transformed by Chandragupta Maurya and Emperor Ashoka into the greatest metropolis of classical Asia. From this riverside seat, Ashoka renounced conquest by sword and inscribed his compassionate edicts on stone. This journey takes you deep into the heart of early Indian statecraft: from the monumental 80-pillar hypostyle hall of Kumhrar to the mirror-polished granite chambers of the Barabar Caves, carved in 261 BCE for the Ajivika ascetics.",
    whyThisRoute:
      "Explores the tangible stone masonry, urban planning, and philosophical patronage that defined India's classical golden age.",
    stops: [
      {
        stopNumber: 1,
        dayNumber: 1,
        placeName: 'Kumhrar & Bihar Museum: The Pataliputra Throne',
        hindiPlaceName: 'कुम्हरार एवं बिहार संग्रहालय (पटना)',
        districtId: 'patna',
        districtName: 'Patna',
        region: 'Magadh',
        headline: 'Remnants of the 80-Pillar Mauryan Assembly Hall',
        narrative:
          'Begin at Kumhrar, where early 20th-century excavations led by D.B. Spooner unearthed the blackened timber platforms and monolithic sandstone pillars of the Mauryan royal assembly hall. Proceed to the world-class Bihar Museum on Bailey Road to view the breathtaking Didarganj Yakshi, carved in 3rd century BCE polished Chunar sandstone with impossible luminescent radiance.',
        whatToExperience: [
          'The excavated brick trenches and preserved pillar base of Kumhrar',
          'The Didarganj Yakshi and Mauryan terracotta galleries at Bihar Museum',
          'Evening walk along the historic Ganga Ghats near Patna University'
        ],
        culinaryHighlight: {
          dishName: 'Authentic Bihari Litti Chokha',
          description: 'Whole wheat dough balls stuffed with roasted gram flour (sattu), baked on cowdung ash, submerged in pure desi ghee.',
          foodId: 'litti-chokha'
        },
        musicRecommendation: {
          trackId: 'takht-patna-sahib-gurbani',
          title: 'Spiritual Resonance of Old Patna',
          genre: 'Devotional / Classical',
          artist: 'Harmandir Sahib Raagis'
        },
        languageSpoken: 'Magahi (मगही) and Hindi',
        historicalContext: 'Capital of the Mauryan and Gupta empires; described by Greek ambassador Megasthenes as Palibothra, stretching 9 miles along the river.',
        practicalTips: 'Bihar Museum is closed on Mondays. Allocate at least 3 hours for the museum galleries.',
        travelTransit: 'Patna Junction and Patna Airport (Jay Prakash Narayan) provide excellent connectivity.',
        image: VERIFIED_IMAGES.golghar
      },
      {
        stopNumber: 2,
        dayNumber: 2,
        placeName: 'Barabar Caves: Echoes in Polished Granite',
        hindiPlaceName: 'बराबर गुफाएँ: शीशे जैसी चमकीली प्राचीन गुफाएँ',
        districtId: 'jehanabad',
        districtName: 'Jehanabad',
        region: 'Magadh',
        headline: 'The Earliest Rock-Cut Caves in the Indian Subcontinent',
        narrative:
          'Trek into the dramatic gneiss granite ridge of the Barabar Hills. Commissioned by Emperor Ashoka in his 12th regnal year (261 BCE) for the Ajivika ascetic sect, these caves are legendary for their mathematical symmetry and extraordinary glass-like polish. In Lomas Rishi Cave, gaze at the carved chaitya arch featuring a frieze of sculpted elephants paying homage to stupas.',
        whatToExperience: [
          'The eerie acoustic reverberation inside the circular sanctum of Sudama Cave',
          'Ashoka’s Brahmi inscriptions carved into the entrance doorways',
          'The unfinished yet magnificent facade of Lomas Rishi Cave'
        ],
        culinaryHighlight: {
          dishName: 'Dal Pitha & Chokha',
          description: 'Steamed rice flour dumplings stuffed with spiced chana dal paste, served with roasted tomato and brinjal dip.',
          foodId: 'dal-pitha'
        },
        musicRecommendation: {
          trackId: 'magahi-falgu-nirgun',
          title: 'Resonant Acoustic Drone',
          genre: 'Meditative / Ancient',
          artist: 'Folk Instrumentalist of Jehanabad'
        },
        languageSpoken: 'Magahi (मगही)',
        historicalContext: 'Inscribed by Emperor Ashoka; served as the inspiration for the fictional Marabar Caves in E.M. Forster’s A Passage to India.',
        practicalTips: 'Carry drinking water and a pocket flashlight to observe the Brahmi script inscriptions closely.',
        travelTransit: '42 km south of Patna via NH 22 and Bela-Barabar road (approx. 1.5 hours drive).',
        image: VERIFIED_IMAGES.barabarCaves
      },
      {
        stopNumber: 3,
        dayNumber: 3,
        placeName: 'Rajgir Cyclopean Wall & Bimbisara Jail',
        hindiPlaceName: 'राजगीर साइक्लोपियन दीवार एवं बिंबिसार कारागार',
        districtId: 'nalanda',
        districtName: 'Nalanda',
        region: 'Magadh',
        headline: 'Pre-Mauryan Stone Defences of Old Magadha',
        narrative:
          'Before Pataliputra, kings ruled from the natural fortress of Rajagriha. Inspect the Cyclopean Wall—a monumental 40-kilometre pre-Mauryan rampart built of dry undressed quartzite boulders measuring up to 4 metres thick. Visit the excavated stone foundations of Bimbisara’s Jail, where the captured king chose a cell that allowed him to gaze upon the Buddha walking upon Griddhakuta.',
        whatToExperience: [
          'Walking atop surviving sections of the 2,500-year-old Cyclopean Wall',
          'The ancient chariot wheel marks etched permanently into solid rock at Sonbhandar',
          'The twin rock-cut caves of Sonbhandar with ancient shell-script inscriptions'
        ],
        culinaryHighlight: {
          dishName: 'Silao Khaja & Kheer',
          description: 'Flaky regional pastry celebrated since Buddhist antiquity, crisp and light as air.',
          foodId: 'silao-khaja'
        },
        musicRecommendation: {
          trackId: 'darbhanga-dhrupad-darbari',
          title: 'Imperial Court Raga',
          genre: 'Dhrupad / Classical',
          artist: 'Mallik Family of Bihar'
        },
        languageSpoken: 'Magahi (मगही)',
        historicalContext: 'Built in the 6th–5th century BCE; one of the oldest dry-stone masonry fortifications surviving on earth.',
        practicalTips: 'Combine with an evening visit to the natural sulfur hot springs at Brahma Kund.',
        travelTransit: '50 km east of Barabar Caves via Gaya-Rajgir highway (approx. 1.2 hours).',
        image: VERIFIED_IMAGES.nalanda
      },
      {
        stopNumber: 4,
        dayNumber: 4,
        placeName: 'Kolhua Monolithic Lion Pillar',
        hindiPlaceName: 'कोल्हुआ का अखण्ड मौर्य सिंह स्तंभ',
        districtId: 'vaishali',
        districtName: 'Vaishali',
        region: 'Tirhut',
        headline: 'The Only Complete Intact Ashokan Pillar with Capital',
        narrative:
          'Conclude the imperial circuit at Kolhua, where Emperor Ashoka erected an 11-metre single block of buff Chunar sandstone crowned with an inverted lotus and a fierce seated lion. Unlike many other pillars damaged by centuries, this monument remains standing intact in its original archaeological landscape beside the brick stupa built by the Licchavis.',
        whatToExperience: [
          'Gazing at the glassy Chunar mirror polish still intact on the lower shaft',
          'The adjacent brick votive stupas and ancient monastery foundations',
          'Reading the chronological timeline of Ashokan edicts in the site pavilion'
        ],
        culinaryHighlight: {
          dishName: 'Malpua & Kheer',
          description: 'Golden fried sweet pancakes soaked in fragrant cardamom sugar syrup, paired with thick condensed milk kheer.',
          foodId: 'malpua-bihar'
        },
        musicRecommendation: {
          trackId: 'bhikhari-thakur-bidesiya',
          title: 'Ballads of the Gangetic Plain',
          genre: 'Folk / Historic',
          artist: 'Traditional Folk Singers'
        },
        languageSpoken: 'Bajjika (बज्जिका) and Hindi',
        historicalContext: 'Erected c. 250 BCE; marks the northern royal road connecting Pataliputra with Nepal and the Himalayan foothills.',
        practicalTips: 'The monument is beautifully illuminated at dusk. Photography permits are included in the regular ASI entry ticket.',
        travelTransit: 'Return drive to Patna via the magnificent Digha-Sonpur rail-road bridge (approx. 1 hour).',
        image: VERIFIED_IMAGES.ashokanPillar
      }
    ],
    culinaryTraditions: ['Litti Chokha with Desi Ghee', 'Dal Pitha', 'Silao Khaja', 'Malpua', 'Sattu Makuni'],
    craftTraditions: ['Chunar sandstone masonry', 'Stone carving', 'Terracotta pottery'],
    connectedEras: ['Mahajanapadas (c. 600–300 BCE)', 'Mauryan Period (c. 322–185 BCE)', 'Gupta Golden Age (c. 319–550 CE)'],
    travelAdvisories: [
      'Hire an ASI authorized archaeologist guide at Barabar Caves for comprehensive context on the Ajivika sects.',
      'Wear rubber-soled walking shoes for climbing the quartzite rock surfaces at Barabar and Rajgir.'
    ],
    sources: ['ASI Archaeological Memoir No. 34', 'Romila Thapar: Ashoka and the Decline of the Mauryas', 'Megasthenes: Indica']
  },
  {
    id: 'mithila-living-art-culture',
    title: 'Mithila: Sacred Waters, Poetry & Living Art',
    hindiTitle: 'मिथिला: पावन पोखरि, विद्यापति की कविता और जीवंत कला',
    tagline: 'Courtyards of master women painters, royal pond palaces, and the verses of Vidyapati.',
    hindiTagline: 'मधुबनी की चित्रकार स्त्रियाँ, दरभंगा के राजमहल और मखाना-मछली की समृद्ध संस्कृति।',
    theme: 'arts',
    themeLabel: 'Art & Craft Traditions',
    themeColor: '#B44D28',
    durationDays: 4,
    totalStops: 4,
    districts: ['darbhanga', 'madhubani', 'sitamarhi'],
    districtNames: ['Darbhanga', 'Madhubani', 'Sitamarhi'],
    regions: ['Mithila'],
    bestSeason: 'October to March (Ideal for village courtyard visits and pleasant weather)',
    pace: 'Relaxed',
    heroImage: VERIFIED_IMAGES.madhubani,
    storyNarrative:
      "Mithila is not merely a region on a map—it is an unbroken civilizational consciousness defined by sacred ponds (pokharis), sweet mango orchards, philosophical debates, and the divine verses of Vidyapati. In the mud-and-bamboo courtyards of Jitwarpur and Ranti, generations of women have transformed crushed rice paste, soot, cow dung, and juice of palash flowers into cosmic diagrams of Kohbar and sacred epics. This journey takes you into the royal heritage of Darbhanga Raj, the living artist villages of Madhubani, and the sacred soil of Sita’s birth at Punaura Dham.",
    whyThisRoute:
      "Provides direct, ethical access to GI-tagged folk traditions, women artisan collectives, and one of India's oldest continuous living art styles.",
    stops: [
      {
        stopNumber: 1,
        dayNumber: 1,
        placeName: 'Darbhanga Raj Palaces & Shyama Mai Temple',
        hindiPlaceName: 'दरभंगा राज किला एवं श्यामा माई मंदिर',
        districtId: 'darbhanga',
        districtName: 'Darbhanga',
        region: 'Mithila',
        headline: 'Palatial Splendour and Classical Dhrupad Tradition',
        narrative:
          'Arrive in Darbhanga, the cultural capital of Mithila. Tour the historic red-brick Raj Darbhanga complex including the Anand Bagh Palace, Nargona Palace, and the sacred Shyama Mai Mandir built over the royal funeral pyres of the Khandavala dynasty. In the evening, listen to the profound resonances of Darbhanga Dhrupad—the ancient musical tradition patronized by the Maharaja.',
        whatToExperience: [
          'Gazing at the red-brick bastions of the Darbhanga Fort inspired by Delhi’s Red Fort',
          'The serene waters of Harahi Pokhar reflecting twilight temple diyas',
          'Visiting the Kameshwar Singh Sanskrit University library with palm-leaf manuscripts'
        ],
        culinaryHighlight: {
          dishName: 'Mithila Makhana Kheer & Machh-Bhaat',
          description: 'Popped lotus seed pudding simmered slowly in creamy milk with green cardamom, followed by mustard gravy Rohu fish.',
          foodId: 'makhana-kheer'
        },
        musicRecommendation: {
          trackId: 'darbhanga-dhrupad-darbari',
          title: 'Darbhanga Mallik Dhrupad in Raga Darbari',
          genre: 'Dhrupad / Classical',
          artist: 'Mallik Gharana Maestros'
        },
        languageSpoken: 'Maithili (मैथिली)',
        historicalContext: 'Seat of the Khandavala rulers (1557–1947 CE); historic fountainhead of Sanskrit scholarship, Navya-Nyaya, and Maithili literature.',
        practicalTips: 'Darbhanga Airport (DIB) connects directly with Delhi, Mumbai, and Bengaluru.',
        travelTransit: 'Direct flights to Darbhanga Airport or express trains to Darbhanga Junction.',
        image: VERIFIED_IMAGES.makhanaKheer
      },
      {
        stopNumber: 2,
        dayNumber: 2,
        placeName: 'Jitwarpur & Ranti Master Artisan Villages',
        hindiPlaceName: 'जितवारपुर एवं रांटी: विश्वविख्यात चित्रकार गाँव',
        districtId: 'madhubani',
        districtName: 'Madhubani',
        region: 'Mithila',
        headline: 'Where Mud Walls Are Canvases of the Gods',
        narrative:
          'Drive north into Jitwarpur and Ranti, the twin villages that produced Padma Shri awardees Jagdamba Devi, Sita Devi, Ganga Devi, and Baua Devi. Walk into open village courtyards where women artists sketch freehand with bamboo twigs and nib-pens without using rulers or preliminary erasures. Learn the five distinct styles: Kachni (fine hatching), Bharni (vibrant colour fills), Godna (tattoo motifs), Tantrik, and Gobar.',
        whatToExperience: [
          'Sitting with national award-winning master painters in their home verandahs',
          'Observing the extraction of natural pigments from haritaki, turmeric, indigo, and katha',
          'Purchasing authentic GI-certified hand-signed artworks directly from the creators'
        ],
        culinaryHighlight: {
          dishName: 'Bihari Khichdi with Chokha & Papad',
          description: 'Aromatic Gobindobhog rice and roasted moong dal khichdi drizzled with mustard oil and paired with roasted red chilli.',
          foodId: 'bihari-khichdi'
        },
        musicRecommendation: {
          trackId: 'samdaun-doli-uthalo',
          title: 'Mithila Samdaun: Songs of Departure',
          genre: 'Folk / Lifecycle',
          artist: 'Maithil Women Collective'
        },
        languageSpoken: 'Maithili (मैथिली) in Devanagari and Tirhuta script traditions',
        historicalContext: 'Granted Geographical Indication (GI) tag in 2007; dates to the mythological wedding of Rama and Sita in King Janaka’s court.',
        practicalTips: 'Carry cash to pay women artisans directly; negotiate with respect for their extraordinary labour and heritage.',
        travelTransit: '35 km north-east of Darbhanga via NH 527 (approx. 50 minutes drive).',
        image: VERIFIED_IMAGES.madhubani
      },
      {
        stopNumber: 3,
        dayNumber: 3,
        placeName: 'Saurath Sabha & Uchchaith Bhagwati',
        hindiPlaceName: 'सौराठ सभा एवं उच्चैठ भगवती मंदिर',
        districtId: 'madhubani',
        districtName: 'Madhubani',
        region: 'Mithila',
        headline: 'Ancient Genealogical Assemblies and Kalidasa’s Shrine',
        narrative:
          'Visit Saurath, a mango grove village renowned for seven centuries for the Saurath Sabha—an annual assembly where genealogists (Panjikars) consult centuries-old palm-leaf genealogical scrolls (Panji Prabandha) to verify matrimonial alliances. Continue to Uchchaith Bhagwati, an ancient shakti peeth situated near a hillock where tradition says Mahakavi Kalidasa received the blessing of intellect from Goddess Durga.',
        whatToExperience: [
          'Examining ancient Bhojpatra and hand-scripted genealogies preserved by village elders',
          'The tranquil temple pond and sanctum of Goddess Durga at Uchchaith',
          'Watching local artisans weave golden Sikki grass into ceremonial containers'
        ],
        culinaryHighlight: {
          dishName: 'Dahi Chura with Gur & Tilkut',
          description: 'Thick creamy earthen-pot curd served with flattened winter rice and organic jaggery.',
          foodId: 'dahi-chura'
        },
        musicRecommendation: {
          trackId: 'vidyapati-nachari-bhairavi',
          title: 'Vidyapati Nachari: Shiva Devotional',
          genre: 'Devotional / Classical',
          artist: 'Traditional Maithili Singer'
        },
        languageSpoken: 'Maithili (मैथिली)',
        historicalContext: 'Panji system established under Raja Hari Singh Deva of the Karnata dynasty in 1326 CE.',
        practicalTips: 'The best time to witness the Sikki grass craft demonstration is during early afternoon.',
        travelTransit: '14 km north-west of Madhubani town via Madhubani-Rahika road (approx. 30 minutes).',
        image: VERIFIED_IMAGES.sikkiCraft
      },
      {
        stopNumber: 4,
        dayNumber: 4,
        placeName: 'Punaura Dham & Janaki Temple: Sita’s Cradle',
        hindiPlaceName: 'पुनौरा धाम एवं जानकी मंदिर (सीतामढ़ी)',
        districtId: 'sitamarhi',
        districtName: 'Sitamarhi',
        region: 'Mithila',
        headline: 'The Sacred Furrow Where Janaka Discovered Sita',
        narrative:
          'Conclude in Sitamarhi at Punaura Dham, the revered site where King Janaka plowed the soil during a severe drought and discovered infant Sita nestled inside an earthen furrow. Walk around the Punaura Sarovar and visit the sacred Janaki Mandir, where pilgrims offer lotus flowers and chant Maithili hymns celebrating Sita as the queen and moral anchor of Mithila.',
        whatToExperience: [
          'Circumambulation of the holy Punaura Sarovar water tank',
          'The marble temple complex depicting the agricultural ploughing episode from Ramayana',
          'Sampling traditional Balushahi at local sweetmakers around Sitamarhi market'
        ],
        culinaryHighlight: {
          dishName: 'Sitamarhi Balushahi',
          description: 'Flaky deep-fried dough balls with a soft, syrup-soaked honeycomb interior, celebrated throughout North Bihar.',
          foodId: 'balushahi-sitamarhi'
        },
        musicRecommendation: {
          trackId: 'samdaun-doli-uthalo',
          title: 'Songs of Sita and Brotherly Love',
          genre: 'Folk / Festival',
          artist: 'Mithila Women Folk Choir'
        },
        languageSpoken: 'Maithili (मैथिली) and Bajjika (बज्जिका)',
        historicalContext: 'Regarded since ancient times as the epicenter of Janaka’s Videha kingdom.',
        practicalTips: 'Pair with a short drive to the Indo-Nepal border town of Janakpur (requires valid photo ID for Indian citizens).',
        travelTransit: '65 km west of Madhubani via NH 527C (approx. 1.8 hours drive).',
        image: VERIFIED_IMAGES.samaChakeva
      }
    ],
    culinaryTraditions: ['Mithila Makhana Kheer', 'Machh-Bhaat', 'Sitamarhi Balushahi', 'Dahi Chura', 'Tilkut'],
    craftTraditions: ['Madhubani Painting (GI)', 'Sikki Grass Weaving (GI)', 'Sujani Embroidery', 'Bhojpatra Scripting'],
    connectedEras: ['Videha & Early Historic Mithila', 'Karnata Dynasty (1097–1324 CE)', 'Oiniwar Dynasty & Vidyapati (14th–15th CE)', 'Darbhanga Raj (1557–1947 CE)'],
    travelAdvisories: [
      'Darbhanga Airport has daily non-stop flights from Delhi, Bengaluru, and Mumbai.',
      'Always purchase artwork directly from the artists to support rural women artisans directly.',
      'Winter evenings can be chilly; carry light woollens from November to February.'
    ],
    sources: ['Mithila Research Institute Bulletin', 'Dr. Jyotindra Jain: Ganga Devi: Tradition and Expression in Mithila Painting', 'Census of India: Handicrafts of Bihar']
  },
  {
    id: 'sher-shah-fortress-trail',
    title: "The Grand Afghan & Fortress Trail: Sher Shah's Realm",
    hindiTitle: "शेरशाह का गौरव: सासाराम और रोहतासगढ़ का दुर्ग पथ",
    tagline: 'Floating sandstone domes, the 1,500-foot Rohtas cliff fortress, and medieval engineering.',
    hindiTagline: 'पानी पर तैरता लाल बलुआ पत्थर का मकबरा और कैमूर की पहाड़ियों पर बसा अभेद्य रोहतास दुर्ग।',
    theme: 'architecture',
    themeLabel: 'Medieval Forts & Architecture',
    themeColor: '#7D4E38',
    durationDays: 4,
    totalStops: 4,
    districts: ['rohtas', 'kaimur', 'buxar', 'patna'],
    districtNames: ['Rohtas', 'Kaimur', 'Buxar', 'Patna'],
    regions: ['Bhojpur', 'Magadh'],
    bestSeason: 'November to February (Mild sun, clear skies over Kaimur hills)',
    pace: 'Expedition',
    heroImage: VERIFIED_IMAGES.sherShahTomb,
    storyNarrative:
      "Far from the courts of Delhi and Agra, the military genius who humbled the Mughal Emperor Humayun, built the Grand Trunk Road, and introduced the silver Rupiya originated from the rugged limestone hills of south-west Bihar. Sher Shah Suri’s legacy is carved in monumental sandstone: an octagonal tomb rising 122 feet from the center of an artificial lake in Sasaram, and the immense clifftop citadel of Rohtasgarh spanning 28 miles of plateau. This journey is a thrilling expedition across fortresses, ancient battlefields, and India’s oldest functional temple.",
    whyThisRoute:
      "Combines supreme medieval Indo-Islamic engineering with dramatic hiking landscapes and sacred rock architecture.",
    stops: [
      {
        stopNumber: 1,
        dayNumber: 1,
        placeName: 'Tomb of Sher Shah Suri & Hasan Khan Suri',
        hindiPlaceName: 'शेरशाह सूरी का मकबरा एवं हसन खाँ का रौज़ा (सासाराम)',
        districtId: 'rohtas',
        districtName: 'Rohtas',
        region: 'Bhojpur',
        headline: 'The Floating Red Sandstone Wonder of Sasaram',
        narrative:
          'Arrive in Sasaram and stand before the majestic tomb of Sher Shah Suri, constructed between 1540 and 1545 CE by master architect Aliwal Khan. Rising from a stepped stone plinth in the middle of a square artificial lake, this three-tiered octagonal monument spans a dome wider than the Taj Mahal. Walk across the arched stone causeway and observe the calligraphic Quranic bands and ornate glazed ceramic tile remnants.',
        whatToExperience: [
          'Walking the causeway connecting the lake shore to the island tomb',
          'Gazing up into the 122-foot high central octagonal dome chamber',
          'Visiting the nearby Tomb of Hasan Khan Suri (Sher Shah’s father) known as Sukha Rauza'
        ],
        culinaryHighlight: {
          dishName: 'Bihari Sattu Paratha with Baingan Bharta',
          description: 'Flaky griddled whole wheat flatbread stuffed with roasted chana flour, chopped garlic, green chilli, and pickle oil.',
          foodId: 'sattu-makuni'
        },
        musicRecommendation: {
          trackId: 'dumraon-shehnai-bhairavi',
          title: 'Shehnai Raga Bhairavi',
          genre: 'Classical Wind Instrument',
          artist: 'Bismillah Khan Style'
        },
        languageSpoken: 'Bhojpuri (भोजपुरी)',
        historicalContext: 'Architectural masterpiece designed by Aliwal Khan; transition between Lodi style and Mughal monumentalism.',
        practicalTips: 'The reflection of the tomb in the lake waters is most breathtaking during late afternoon golden hour.',
        travelTransit: 'Sasaram Junction is a major railway hub on the Grand Chord line (Delhi–Kolkata).',
        image: VERIFIED_IMAGES.sherShahTomb
      },
      {
        stopNumber: 2,
        dayNumber: 2,
        placeName: 'Rohtasgarh Fort & Plateau Citadel',
        hindiPlaceName: 'रोहतासगढ़ दुर्ग एवं कैमूर पठार',
        districtId: 'rohtas',
        districtName: 'Rohtas',
        region: 'Bhojpur',
        headline: 'One of the Most Formidable Clifftop Fortresses in Asia',
        narrative:
          'Ascend the Kaimur hills to Rohtasgarh, a jaw-dropping citadel perched 1,500 feet above the Son River valley. Spanning an incredible perimeter of nearly 28 miles, this cliff stronghold was captured by Sher Shah in 1538 and later served as Raja Man Singh’s gubernatorial seat. Explore the Aina Mahal palace, the Rohtasan temple, the hanging execution gate, and the Jama Masjid built with golden sandstone.',
        whatToExperience: [
          'Hiking up the scenic ancient stone pathway to the fortress plateau',
          'Panoramic views of the winding Son River and forest canyons from the ramparts',
          'The palatial multi-storeyed quarters of Raja Man Singh’s Aina Mahal'
        ],
        culinaryHighlight: {
          dishName: 'Kaimur Chana Ghugni & Pua',
          description: 'Spicy black gram curry paired with traditional sweet wheat-flour fritters.',
          foodId: 'chana-ghugni'
        },
        musicRecommendation: {
          trackId: 'bhikhari-thakur-bidesiya',
          title: 'Bhojpuri Birha: The Warrior Ballad',
          genre: 'Folk / Epic',
          artist: 'Bhojpuri Folk Troupe'
        },
        languageSpoken: 'Bhojpuri (भोजपुरी)',
        historicalContext: 'Named after Prince Rohitashva of the Solar dynasty; fortified consecutively by Harishchandra, Sher Shah Suri, and Mughals.',
        practicalTips: 'Trek requires moderate fitness. Carry sturdy hiking shoes, water, and lunch as on-site food stalls are limited.',
        travelTransit: '45 km south of Sasaram via Akbarpur village; base of trek reached by private taxi.',
        image: VERIFIED_IMAGES.rohtasgarh
      },
      {
        stopNumber: 3,
        dayNumber: 3,
        placeName: 'Maa Mundeshwari Temple & Telhar Kund',
        hindiPlaceName: 'माँ मुंडेश्वरी देवी मंदिर एवं तेलहाड़ कुंड (कैमूर)',
        districtId: 'kaimur',
        districtName: 'Kaimur',
        region: 'Bhojpur',
        headline: 'Indias Oldest Functioning Stone Temple (108 CE)',
        narrative:
          'Drive west into Kaimur district to ascend the 600-foot Pavra Hill. At its crest stands the octagonal stone shrine of Maa Mundeshwari. Inscriptions verified by the Archaeological Survey of India date its worship to 108 CE under the Gupta/Kushan era, making it the oldest continuous worshipping temple in India. The sanctum holds a rare four-faced Shiva lingam alongside the Devi idol. Afterwards, witness the 80-metre plunge of Telhar Kund waterfall.',
        whatToExperience: [
          'Examining the rare octagonal stone architecture and Nagara relief carvings',
          'Witnessing the centuries-old non-lethal symbolic Ahimsa sacrifice ritual',
          'The scenic emerald pool and dramatic cliffs of Telhar Kund waterfall'
        ],
        culinaryHighlight: {
          dishName: 'Bihari Thekua & Chura',
          description: 'Crisp whole wheat biscuits pressed with wooden dies and deep-fried in pure ghee with fennel and dry coconut.',
          foodId: 'thekua'
        },
        musicRecommendation: {
          trackId: 'kelwa-ke-paat-par',
          title: 'Ancient Devi Vandana',
          genre: 'Devotional / Classical',
          artist: 'Folk Choral Ensemble'
        },
        languageSpoken: 'Bhojpuri (भोजपुरी)',
        historicalContext: 'ASI dated stone inscription from 108 CE; unique Nagara octagonal plan with intricately carved door guardians.',
        practicalTips: 'Paved stone stairs and a vehicle road lead to the hill summit. Temple is peaceful in the early morning.',
        travelTransit: '55 km north-west of Rohtasgarh via Bhabua and Mohania (approx. 1.5 hours drive).',
        image: VERIFIED_IMAGES.mundeshwari
      },
      {
        stopNumber: 4,
        dayNumber: 4,
        placeName: 'Maner Sharif & Chausa Battlefield',
        hindiPlaceName: 'मनेर शरीफ की बड़ी दरगाह एवं चौसा युद्धस्थल',
        districtId: 'patna',
        districtName: 'Patna',
        region: 'Magadh',
        headline: 'Sufi Sanctuary of Makhdum Shah Daulat',
        narrative:
          'Travel along the Ganga river road passing Chausa (where Sher Shah’s forces routed Humayun in 1539) to arrive at Maner Sharif. Here rests the magnificent sandstone mausoleum of Sufi saint Makhdum Daulat, built in 1616 by Ibrahim Khan. The monument features exquisite filigree jali stone carvings, arched verandahs, and verses from the Quran carved into glowing yellow Chunar stone.',
        whatToExperience: [
          'The grand stepwell tank (bavari) fronting the Badi Dargah complex',
          'Intricate stone tracery ceilings carved with lotus motifs and calligraphy',
          'Tasting the famous Maner Laddu made from pure gram flour and fragrant sugar syrup'
        ],
        culinaryHighlight: {
          dishName: 'World-Famous Maner Ka Laddu',
          description: 'Melt-in-mouth golden boondi laddus fried in pure ghee, scented with saffron and dry fruits, prepared along the Maner highway.',
          foodId: 'malpua-bihar'
        },
        musicRecommendation: {
          trackId: 'sufi-qawwali-maner-sharif',
          title: 'Sufi Qawwali at Maner Sharif',
          genre: 'Sufi / Devotional',
          artist: 'Dargah Qawwals'
        },
        languageSpoken: 'Magahi (मगही), Bhojpuri, and Urdu',
        historicalContext: 'Spiritual hub of the Firdausiya Sufi silsila; architectural jewel constructed under Mughal Emperor Jahangir.',
        practicalTips: 'Headscarves required inside the dargah complex. Buy laddus directly from the heritage confectioners near the main gate.',
        travelTransit: '30 km west of Patna on NH 922 (approx. 45 minutes drive).',
        image: VERIFIED_IMAGES.golghar
      }
    ],
    culinaryTraditions: ['Maner Ka Laddu', 'Sattu Paratha', 'Chana Ghugni', 'Bihari Thekua', 'Ahuna Mutton'],
    craftTraditions: ['Sandstone filigree carving', 'Wood-fired terracotta', 'Brassware of Sasaram'],
    connectedEras: ['Sultanate & Suri Empire (1540–1555 CE)', 'Mughal Subah of Bihar (1576–1707 CE)', 'Kushan & Gupta Period'],
    travelAdvisories: [
      'Rohtasgarh Fort trek requires 3 to 4 hours of walking; start before 8:00 AM.',
      'Sasaram railway station provides direct fast train connectivity to Varanasi (2 hours) and Patna (2.5 hours).'
    ],
    sources: ['Abul Fazl: Akbarnama', 'ASI Architectural Surveys of Rohtas District', 'Dr. Subhash Parihar: Medieval Architecture of Bihar']
  },
  {
    id: 'champaran-freedom-trail',
    title: 'Champaran: The Soil Where Gandhi Discovered Satyagraha',
    hindiTitle: 'चंपारण: जहाँ गाँधी को मिला सत्याग्रह का मार्ग',
    tagline: 'Indigo plantations, village ashrams, and the birthplace of Indias freedom movement.',
    hindiTagline: 'नील के खेत, भितिहरवा आश्रम और भारत के स्वतंत्रता संग्राम की पहली प्रयोगशाला।',
    theme: 'freedom',
    themeLabel: 'Freedom Struggle & Gandhi',
    themeColor: '#3E6550',
    durationDays: 3,
    totalStops: 3,
    districts: ['east-champaran', 'west-champaran'],
    districtNames: ['East Champaran', 'West Champaran'],
    regions: ['Tirhut'],
    bestSeason: 'November to February (Pleasant winter weather, green fields)',
    pace: 'Relaxed',
    heroImage: VERIFIED_IMAGES.kesariaStupa,
    storyNarrative:
      "In April 1917, a quiet Gujarati lawyer stepped off the train at Motihari railway station following the persistent appeals of a local indigo cultivator, Raj Kumar Shukla. What began as an enquiry into the oppressive Tinkathia system—which forced farmers to plant indigo on three-twentieths of their fertile lands—became the crucible of Satyagraha. Here, Gandhi declared his civil disobedience in an open British courtroom, walked from hut to hut recording farmer testimonies, and established village schools. This journey walks in the footsteps of that transformative moral campaign across Champaran’s rural heartland.",
    whyThisRoute:
      "A moving pilgrimage to the exact geographic epicenter where non-violent mass resistance was born in modern India.",
    stops: [
      {
        stopNumber: 1,
        dayNumber: 1,
        placeName: 'Gandhi Memorial & Courtroom: Motihari',
        hindiPlaceName: 'गाँधी स्मारक एवं ऐतिहासिक कचहरी (मोतिहारी)',
        districtId: 'east-champaran',
        districtName: 'East Champaran',
        region: 'Tirhut',
        headline: 'Where Gandhi Defied the British Raj in 1917',
        narrative:
          'Arrive in Motihari, headquarters of East Champaran. Visit the historic district courtroom where on April 18, 1917, Mohandas Karamchand Gandhi refused to leave Champaran, stating he was obeying the higher law of our being, the voice of conscience. Tour the Gandhi Memorial complex featuring a 48-foot stone stupa monument designed by Nand Lal Bose, and inspect original letters, telegrams, and photographs from the Satyagraha.',
        whatToExperience: [
          'The historical courtroom chamber where Gandhi recorded his statement',
          'The museum gallery showcasing photographs of Raj Kumar Shukla, Dr. Rajendra Prasad, and J.B. Kripalani',
          'Visiting the birthplace of British author George Orwell in Motihari'
        ],
        culinaryHighlight: {
          dishName: 'Authentic Champaran Ahuna Mutton / Kathal',
          description: 'Legendary clay handi cooked over low coal embers, seasoned with raw mustard oil, whole garlic pods, and crushed ginger.',
          foodId: 'champaran-mutton'
        },
        musicRecommendation: {
          trackId: 'bhojpuri-kajari-barsan',
          title: 'Champaran Lokgeet & Swarajya Ballad',
          genre: 'Folk / Freedom',
          artist: 'Folk Collective of Motihari'
        },
        languageSpoken: 'Bhojpuri (भोजपुरी)',
        historicalContext: '1917 Champaran Satyagraha; led to the abolition of the colonial Tinkathia agrarian servitude system.',
        practicalTips: 'Motihari (Bapudham Motihari railway station) is well connected by express trains from Delhi and Patna.',
        travelTransit: '150 km north of Patna via NH 722 through Muzaffarpur (approx. 3.5 hours drive).',
        image: VERIFIED_IMAGES.champaranMutton
      },
      {
        stopNumber: 2,
        dayNumber: 2,
        placeName: 'Bhitiharwa Ashram & Kasturba Memorial',
        hindiPlaceName: 'भितिहरवा आश्रम एवं कस्तूरबा गाँधी स्मृति (गौनाहा)',
        districtId: 'west-champaran',
        districtName: 'West Champaran',
        region: 'Tirhut',
        headline: 'The Village School and Straw-Thatched Hermitage',
        narrative:
          'Travel deep into the rural interior of West Champaran to Bhitiharwa village near Gaunaha. In November 1917, Gandhi founded an ashram and basic primary school here to educate rural children and teach sanitation. See the preserved wooden cottage where Kasturba Gandhi resided, the original spinning wheel (charkha), the bell used to call village students, and the tranquil open-air prayer grounds.',
        whatToExperience: [
          'The humble mud-plastered prayer room preserved with Gandhi’s personal articles',
          'Sitting beneath the banyan tree where village panchayats were addressed',
          'Interacting with local weavers keeping traditional khadi spinning alive'
        ],
        culinaryHighlight: {
          dishName: 'Bihari Litti with Baingan-Tamatar Chokha',
          description: 'Earthy wood-smoked wheat littis brushed with pure butter, paired with fire-roasted eggplant mash.',
          foodId: 'litti-chokha'
        },
        musicRecommendation: {
          trackId: 'contemporary-bihar-sharda-tribute',
          title: 'Vaishnav Jan To Tene Kahiye',
          genre: 'Devotional / Freedom',
          artist: 'Acoustic Ashram Choir'
        },
        languageSpoken: 'Bhojpuri (भोजपुरी) and Tharu dialects',
        historicalContext: 'One of the earliest constructive work ashrams established by Mahatma Gandhi in India.',
        practicalTips: 'Carry drinking water and snacks. Combine with a visit to the nearby historical Ashokan pillar at Rampurva.',
        travelTransit: '65 km north-west of Motihari via Bettiah and Gaunaha road (approx. 1.8 hours drive).',
        image: VERIFIED_IMAGES.ashokanPillar
      },
      {
        stopNumber: 3,
        dayNumber: 3,
        placeName: 'Valmiki National Park & Tiger Reserve',
        hindiPlaceName: 'वाल्मीकि राष्ट्रीय उद्यान एवं व्याघ्र अभयारण्य',
        districtId: 'west-champaran',
        districtName: 'West Champaran',
        region: 'Tirhut',
        headline: 'Sub-Himalayan Sal Jungles on the Gandak Border',
        narrative:
          'Conclude the journey in the wild northern reaches of West Champaran where the Gangetic plains meet the Shivalik foothills of Nepal. Valmiki Tiger Reserve spans over 800 square kilometers of virgin sal forests, canopied elephant corridors, and meandering Gandak river streams. Spot royal Bengal tigers, Indian leopards, rhinos wandering from Chitwan, and over 250 species of avifauna.',
        whatToExperience: [
          'Early morning 4x4 open-jeep forest safari through the Madanpur and Manguraha ranges',
          'Boating along the Gandak River at Triveni Sangam with views of the Nepal hills',
          'Visiting the ancient Valmiki Ashram situated in the riverine forest clearing'
        ],
        culinaryHighlight: {
          dishName: 'Tharu Village Roasted Corn & Fish Curry',
          description: 'Fresh Gandak river fish cooked with wild coriander, mustard seeds, and steamed local basmati rice.',
          foodId: 'mithila-machh-bhaat'
        },
        musicRecommendation: {
          trackId: 'karam-mandar-geet',
          title: 'Forest Drums and Terai Folk Songs',
          genre: 'Folk / Forest',
          artist: 'Tharu Cultural Troupe'
        },
        languageSpoken: 'Bhojpuri, Tharu, and Hindi',
        historicalContext: 'Bihars only National Park and Tiger Reserve; contiguous with Nepals Chitwan National Park.',
        practicalTips: 'Safaris and eco-hut cottages must be reserved via the Bihar Eco-Tourism department website.',
        travelTransit: '80 km north of Bettiah via Bagaha and Valmikinagar road (approx. 2.2 hours drive).',
        image: VERIFIED_IMAGES.kesariaStupa
      }
    ],
    culinaryTraditions: ['Champaran Ahuna Handi Mutton/Kathal', 'Litti Chokha', 'Tinkathia Organic Rice', 'Terai River Fish'],
    craftTraditions: ['Khadi cotton spinning', 'Tharu grass and bamboo weaving', 'Moonj basketry'],
    connectedEras: ['Colonial & Freedom Movement (1917–1947 CE)', 'Ancient Terai Settlements'],
    travelAdvisories: [
      'Valmiki Tiger Reserve safaris operate from October to May; park remains closed during monsoon.',
      'Book forest rest houses in Valmikinagar well in advance for weekend trips.'
    ],
    sources: ['M.K. Gandhi: An Autobiography (The Story of My Experiments with Truth)', 'Dr. Rajendra Prasad: Satyagraha in Champaran', 'Bihar Forest Department Reports']
  },
  {
    id: 'anga-silk-university-route',
    title: 'The Silk, River & University Route of Anga',
    hindiTitle: 'अंग की स्वर्णिम यात्रा: तसर सिल्क, विक्रमशिला और गंगा',
    tagline: 'Ancient Mahaviharas, legendary Tussar weavers, and river dolphin sanctuaries.',
    hindiTagline: 'कर्ण की नगरी, भागलपुरी तसर के करघे और गंगा की गोद में विक्रमशिला महाविहार।',
    theme: 'history',
    themeLabel: 'Living Arts & Ancient Capitals',
    themeColor: '#2C5D75',
    durationDays: 3,
    totalStops: 3,
    districts: ['munger', 'bhagalpur'],
    districtNames: ['Munger', 'Bhagalpur'],
    regions: ['Anga'],
    bestSeason: 'October to March (Pleasant river breezes along the Ganga)',
    pace: 'Moderate',
    heroImage: VERIFIED_IMAGES.vikramshila,
    storyNarrative:
      "In the Mahabharata, the heroic archer Karna was crowned king of Anga along the northern loop of the sacred Ganga. In the medieval centuries, Emperor Dharmapala founded Vikramshila here—the great university of Tantric Buddhism that produced Atisha Dipankara, who carried Buddhist teachings across the Himalayas into Tibet. Alongside this intellectual legacy grew the legendary Tussar silk weaving clusters of Nathnagar and Champanagar, where cocoons are spun into golden fabric, and women paint the serpent ballad of Behula in Manjusha art. This journey takes you along the northern river curve of Eastern Bihar.",
    whyThisRoute:
      "Explores the neglected architectural glories of the Pala Empire paired with living textile artisan clusters and Gangetic dolphin ecology.",
    stops: [
      {
        stopNumber: 1,
        dayNumber: 1,
        placeName: 'Munger Fort & Bihar School of Yoga',
        hindiPlaceName: 'मुंगेर का ऐतिहासिक दुर्ग एवं बिहार योग विद्यालय',
        districtId: 'munger',
        districtName: 'Munger',
        region: 'Anga',
        headline: 'River Fortress of Mir Qasim and World Capital of Yoga',
        narrative:
          'Arrive in historic Munger, built on a rocky promontory overlooking the northward bend of the Ganga. Walk the colossal stone ramparts of Munger Fort, held successively by the Palas, Delhi Sultans, and Nawab Mir Qasim, who established a famous firearms ordnance factory here in 1762. Visit the world-renowned Bihar Yoga Bharati (Ganga Darshan), founded by Swami Satyananda Saraswati, which draws spiritual seekers from every continent.',
        whatToExperience: [
          'Walking the battlements of Munger Fort overlooking the sweeping curve of the Ganga',
          'Visiting the peaceful campus and meditation gardens of the Bihar School of Yoga',
          'Sampling Munger’s roasted gram flour and winter delicacies at the historic bazaar'
        ],
        culinaryHighlight: {
          dishName: 'Munger Dal Puri & Kheer',
          description: 'Crisp deep-fried flatbreads stuffed with spiced chana dal mash, paired with slow-cooked rice kheer.',
          foodId: 'dal-pitha'
        },
        musicRecommendation: {
          trackId: 'anga-manjusha-behula',
          title: 'Ballad of Behula and Bishahari',
          genre: 'Folk / Ballad',
          artist: 'Traditional Angika Singers'
        },
        languageSpoken: 'Angika (अंगिका)',
        historicalContext: 'Strategic river bastion fortified by Mir Qasim; site of the historic 1763 battle against the British East India Company.',
        practicalTips: 'Munger is connected by rail via Jamalpur Junction (8 km), a premier historic railway junction.',
        travelTransit: '170 km east of Patna via NH 33 along the southern bank of the Ganga (approx. 4 hours drive).',
        image: VERIFIED_IMAGES.rohtasgarh
      },
      {
        stopNumber: 2,
        dayNumber: 2,
        placeName: 'Nathnagar Tussar Silk Looms & Manjusha Studios',
        hindiPlaceName: 'नाथनगर तसर सिल्क हथकरघा एवं मंजूषा कला (भागलपुर)',
        districtId: 'bhagalpur',
        districtName: 'Bhagalpur',
        region: 'Anga',
        headline: 'The Silk City of India and the Behula Legend',
        narrative:
          'Drive east into Bhagalpur, globally famous as the Silk City for over a millennium. Tour the weaver lanes of Nathnagar and Champanagar, where over 25,000 handlooms produce exquisite Bhagalpuri Tussar, Mulberry, and Eri silk sarees. Afterwards, visit master artists of Manjusha art—an ancient scroll and box painting tradition executed on jute and paper using only three sacred colours (pink, green, yellow) depicting the triumph of Behula over snake-goddess Bishahari.',
        whatToExperience: [
          'Watching the traditional reeling of raw Tussar silk yarn from wild cocoons',
          'Observing master weavers operating jacquard handlooms in family workshops',
          'Interacting with state-awardee Manjusha painters creating narrative temple scrolls'
        ],
        culinaryHighlight: {
          dishName: 'Bhagalpuri Katarni Chura & Dahi with Chini',
          description: 'Aromatic GI-tagged short-grain Katarni beaten rice served with earthen-pot thick buffalo curd and raw cane sugar.',
          foodId: 'dahi-chura'
        },
        musicRecommendation: {
          trackId: 'anga-manjusha-behula',
          title: 'Angika Manjusha Gayan',
          genre: 'Folk / Ritual',
          artist: 'Folk Troupe of Champanagar'
        },
        languageSpoken: 'Angika (अंगिका)',
        historicalContext: 'Bhagalpur silk has held a Geographical Indication (GI) tag since 2008; referenced in Megasthenes and Chinese travelogues.',
        practicalTips: 'Purchase silk fabrics and sarees directly from registered weaver cooperative societies in Nathnagar for certified purity.',
        travelTransit: '60 km east of Munger along NH 33 (approx. 1.5 hours drive).',
        image: VERIFIED_IMAGES.bhagalpuriSilk
      },
      {
        stopNumber: 3,
        dayNumber: 3,
        placeName: 'Vikramshila Mahavihara Ancient Ruins',
        hindiPlaceName: 'विक्रमशिला महाविहार के प्राचीन ध्वंसावशेष (अंतिचक)',
        districtId: 'bhagalpur',
        districtName: 'Bhagalpur',
        region: 'Anga',
        headline: 'The Great Tantric Buddhist University of the Palas',
        narrative:
          'Conclude at Antichak village near Kahalgaon, where the colossal ruins of Vikramshila Mahavihara lie in peaceful riverine surroundings. Established by King Dharmapala in the late 8th century CE, this university flourished with 160 professors and thousands of scholars. Walk through the cruciform central stupa adorned with sculpted terracotta plaques depicting Buddha, Bodhisattvas, and scenes of daily life, and visit the excavated Tibetan guest hostel.',
        whatToExperience: [
          'The massive cruciform brick stupa rising at the center of the monastic quadrangle',
          'Terracotta plaque bas-reliefs illustrating folklore, ascetics, and animal fables',
          'The on-site ASI Archaeological Museum housing stone sculptures of Vajrayana deities'
        ],
        culinaryHighlight: {
          dishName: 'Traditional Dal Puri & Aloo-Dam',
          description: 'Crisp puffed bread stuffed with spicy roasted lentils, served with slow-cooked potato gravy and sweet tomato chutney.',
          foodId: 'dal-pitha'
        },
        musicRecommendation: {
          trackId: 'darbhanga-dhrupad-darbari',
          title: 'Ancient Buddhist Bell Resonance',
          genre: 'Meditative / Instrumental',
          artist: 'Eastern Classical Ensemble'
        },
        languageSpoken: 'Angika (अंगिका) and Hindi',
        historicalContext: 'Premier center of Vajrayana Buddhism from 8th to 12th century CE; birthplace of Atisha Dipankara’s Tibetan mission.',
        practicalTips: 'Kahalgaon is the closest railway station (13 km); hire a taxi from Bhagalpur for a comfortable day-trip.',
        travelTransit: '45 km east of Bhagalpur town via NH 80 (approx. 1.2 hours drive).',
        image: VERIFIED_IMAGES.vikramshila
      }
    ],
    culinaryTraditions: ['Katarni Chura Dahi (GI)', 'Munger Dal Puri', 'Tussar Country Sweets', 'Ganga River Fish'],
    craftTraditions: ['Bhagalpuri Tussar Silk (GI)', 'Manjusha Painting (GI)', 'Eri and Matka silk spinning'],
    connectedEras: ['Mahajanapadas (Kingdom of Anga)', 'Pala Imperial Era (c. 750–1174 CE)', 'Nawabi & Colonial Era'],
    travelAdvisories: [
      'Bhagalpur Junction is well-served by trains from Kolkata (5 hours) and Patna (4.5 hours).',
      'Hire a local boat at Kahalgaon Ghat for spectacular sunsets over the three granite islands in the Ganga.'
    ],
    sources: ['ASI Excavation Reports: Vikramshila', 'Dr. B.P. Sinha: Comprehensive History of Bihar', 'Taranatha: History of Buddhism in India']
  },
  {
    id: 'culinary-odyssey-bihar',
    title: 'The Great Flavour & Culinary Odyssey of Bihar',
    hindiTitle: 'बिहार का महास्वाद परिपथ: लिट्टी से तिलकुट और मखाना तक',
    tagline: 'Clay oven roasting, sweet water lotus seeds, wood-smoked meats, and winter sesame sweets.',
    hindiTagline: 'उपलों पर सिकी लिट्टी, 52 परतों का सिलाव खाजा और गया का सौंधा तिलकुट।',
    theme: 'food',
    themeLabel: 'Flavours & Culinary Heritage',
    themeColor: '#D97706',
    durationDays: 4,
    totalStops: 4,
    districts: ['patna', 'nalanda', 'gaya', 'madhubani'],
    districtNames: ['Patna', 'Nalanda', 'Gaya', 'Madhubani'],
    regions: ['Magadh', 'Mithila'],
    bestSeason: 'November to February (Winter harvest brings authentic tilkut, fresh jaggery, and winter vegetables)',
    pace: 'Relaxed',
    heroImage: VERIFIED_IMAGES.littiChokha,
    storyNarrative:
      "Bihar’s culinary universe is one of the oldest and most misunderstood food cultures in India. It is an extraordinary geography of slow earth-baking, ancient dry roasting, wood ash ember cooking, and delicate seasonal sweets developed across three millennia of agrarian and monastic life. From the smoky charcoal roasted littis on the Patna riverfront to the 52 wafer-thin layers of GI-tagged Silao Khaja, the beaten sesame crunch of Gaya Tilkut roasted on wood fires, and the royal lotus seed harvests of Mithila, this journey is an authentic celebration of pure taste, history, and seasonal wisdom.",
    whyThisRoute:
      "Curated specifically for culinary travelers seeking verified, deeply researched food traditions directly from origin kitchens.",
    stops: [
      {
        stopNumber: 1,
        dayNumber: 1,
        placeName: 'Old Patna: Litti Chokha & Sattu Traditions',
        hindiPlaceName: 'पुराना पटना: लिट्टी-चोखा और सत्तू का स्वाद',
        districtId: 'patna',
        districtName: 'Patna',
        region: 'Magadh',
        headline: 'The Heartland of Sattu and Cowdung Ember Roasting',
        narrative:
          'Begin on the historic streets of Patna, where street stalls and heritage eateries prepare Bihar’s signature dish: Litti Chokha. Watch masters knead whole wheat dough balls, pack them with roasted gram flour (sattu) spiked with ajwain, kalonji, crushed green chilli, garlic, and mango pickle brine, then roast them gently on cowdung embers until charred to perfection before dipping them in pure desi ghee.',
        whatToExperience: [
          'Tasting freshly baked littis paired with baingan-tamatar chokha and spicy green chutney',
          'Drinking cooling chilled earthen glasses of Sattu Sharbat flavored with black salt and mint',
          'Visiting the century-old sweet shops of Ashok Rajpath for Chandrakala and Khaja'
        ],
        culinaryHighlight: {
          dishName: 'Authentic Bihari Litti Chokha',
          description: 'Whole wheat dough baked on cowdung ash, stuffed with roasted sattu and drenched in pure melted desi ghee.',
          foodId: 'litti-chokha'
        },
        musicRecommendation: {
          trackId: 'bhojpuri-kajari-barsan',
          title: 'Songs of the Gangetic Harvest',
          genre: 'Folk / Everyday',
          artist: 'Bihari Folk Ensemble'
        },
        languageSpoken: 'Magahi (मगही) and Hindi',
        historicalContext: 'Sattu has sustained traveling armies, pilgrims, and farmers across northern India since Vedic times.',
        practicalTips: 'Maurya Lok complex and Ashok Rajpath offer the most reliable traditional vendors.',
        travelTransit: 'Centrally located in Patna; best explored by cycle-rickshaw or walking.',
        image: VERIFIED_IMAGES.littiChokha
      },
      {
        stopNumber: 2,
        dayNumber: 2,
        placeName: 'Silao: The 52-Layer Sweet Heritage',
        hindiPlaceName: 'सिलाव: 52 परतों का जीआई-टैग खाजा (नालंदा)',
        districtId: 'nalanda',
        districtName: 'Nalanda',
        region: 'Magadh',
        headline: 'The Ancient GI-Tagged Multi-Layered Crisp Pastry',
        narrative:
          'Drive south into Nalanda district to the ancient settlement of Silao, located between Rajgir and Nalanda. Silao Khaja has been awarded the prestigious Geographical Indication (GI) tag for its unique texture: fifty-two razor-thin, crispy layers of refined wheat flour and ghee, lightly dipped in sugar syrup. Local folklore connects its origin to Lord Buddha’s travels through Magadha.',
        whatToExperience: [
          'Watching master sweetmakers roll and stretch dozens of micro-thin dough layers by hand',
          'Tasting piping hot, fresh Khaja straight from the wood-fired boiling ghee kadhais',
          'Purchasing assorted varieties including sweet Khaja, salty salty Khaja, and sugar-free Khaja'
        ],
        culinaryHighlight: {
          dishName: 'GI-Tagged Silao Khaja',
          description: 'Delicate multi-layered crisp golden pastry prepared using the sweet mineral water of Silao.',
          foodId: 'silao-khaja'
        },
        musicRecommendation: {
          trackId: 'magahi-sohar-janam',
          title: 'Magahi Festive Tunes',
          genre: 'Folk / Sweet',
          artist: 'Nalanda Folk Group'
        },
        languageSpoken: 'Magahi (मगही)',
        historicalContext: 'Granted GI Tag No. 433 in 2018; documented in ancient texts as a celebratory offering in Magadha.',
        practicalTips: 'Buy Khaja in tin boxes to keep them crisp and prevent moisture from softening the layers.',
        travelTransit: '85 km south of Patna along NH 20 (approx. 2 hours drive).',
        image: VERIFIED_IMAGES.silaoKhaja
      },
      {
        stopNumber: 3,
        dayNumber: 3,
        placeName: 'Ramna Road: The Winter Tilkut Bhattis of Gaya',
        hindiPlaceName: 'रमना रोड: गया की ऐतिहासिक तिलकुट भट्ठियाँ',
        districtId: 'gaya',
        districtName: 'Gaya',
        region: 'Magadh',
        headline: 'Hand-Beaten Sesame Confections of Old Gaya',
        narrative:
          'Arrive in ancient Gaya during the winter season and follow the intoxicating aroma of toasted sesame seeds to Ramna Road and Tekari Road. Here, master karigars gather around glowing charcoal ovens. They boil sugar or cane jaggery syrup into a thick taffy, pull it vigorously by hand, fold in fragrant white sesame seeds, and rhythmically beat the mass with wooden mallets until it expands into a feather-light, melt-in-mouth confection.',
        whatToExperience: [
          'Observing the hypnotic two-man rhythmic wooden mallet beating technique',
          'Tasting fresh, warm Gur (jaggery) Tilkut straight from the marble cutting slab',
          'Sampling Gaya Anarsa—rice flour and sesame patties stuffed with sweetened mawa'
        ],
        culinaryHighlight: {
          dishName: 'Gaya Gur Tilkut & Anarsa',
          description: 'Wood-fired hand-beaten sesame crisp confection prepared exclusively during the winter months.',
          foodId: 'gaya-tilkut'
        },
        musicRecommendation: {
          trackId: 'magahi-falgu-nirgun',
          title: 'Falgu Winter Melody',
          genre: 'Folk / Seasonal',
          artist: 'Gaya Heritage Singers'
        },
        languageSpoken: 'Magahi (मगही)',
        historicalContext: 'Gaya’s dry winter climate and skilled karigar guilds have produced world-famous sesame sweets for centuries.',
        practicalTips: 'Visit between 9:00 AM and 12:00 noon to watch the fresh batches being beaten and sliced.',
        travelTransit: '70 km south-west of Silao via Hisua and Nawada (approx. 1.5 hours drive).',
        image: VERIFIED_IMAGES.tilkut
      },
      {
        stopNumber: 4,
        dayNumber: 4,
        placeName: 'Mithila Makhana Ponds & Feast: Madhubani',
        hindiPlaceName: 'मिथिला मखाना पोखरि एवं पारंपरिक भोज',
        districtId: 'madhubani',
        districtName: 'Madhubani',
        region: 'Mithila',
        headline: 'Foxnuts from Earthen Ponds and the Traditional Maithil Feast',
        narrative:
          'Conclude in the water-rich plains of Mithila, the source of over 85% of India’s Makhana (foxnuts/Euryale ferox). Visit a village pokhari (pond) to see Mallah fishermen dive into knee-deep mud to harvest thorny water lily seeds. Watch the intense hand-roasting and manual popping of the seeds. Conclude with a traditional Maithil feast served on banana leaves featuring Makhana Kheer, spiced Parwal, and freshly prepared Rohu fish in mustard gravy.',
        whatToExperience: [
          'Witnessing the artisanal manual seed-popping process performed over earthen wood bhattis',
          'Savouring a ceremonial Maithil Bhoj served on broad fresh banana leaves',
          'Tasting slow-simmered Makhana Kheer flavoured with whole green cardamom and saffron'
        ],
        culinaryHighlight: {
          dishName: 'Mithila Makhana Kheer (GI)',
          description: 'Creamy slow-simmered milk pudding studded with freshly popped local foxnuts, raisins, and roasted almonds.',
          foodId: 'makhana-kheer'
        },
        musicRecommendation: {
          trackId: 'vidyapati-nachari-bhairavi',
          title: 'Maithili Culinary & Wedding Songs',
          genre: 'Folk / Celebration',
          artist: 'Mithila Singers'
        },
        languageSpoken: 'Maithili (मैथिली)',
        historicalContext: 'Mithila Makhana was awarded the prestigious Geographical Indication (GI) tag in 2022.',
        practicalTips: 'Makhana harvest takes place from August to October; freshly popped foxnuts are available year-round.',
        travelTransit: '140 km north of Gaya via Patna and Darbhanga highway (approx. 4 hours).',
        image: VERIFIED_IMAGES.makhanaKheer
      }
    ],
    culinaryTraditions: ['Litti Chokha', 'Silao Khaja (GI)', 'Gaya Tilkut', 'Mithila Makhana (GI)', 'Dal Pitha', 'Maner Laddu'],
    craftTraditions: ['Clay pottery for Ahuna handi', 'Earthen pot curd setting', 'Handmade bamboo seed sieves'],
    connectedEras: ['Ancient Magadha Food Culture', 'Medieval Sweet Guilds', 'Living Rural Heritage'],
    travelAdvisories: [
      'Winter season (December to January) is mandatory to taste fresh wood-fired Gaya Tilkut.',
      'Always drink bottled or filtered water when enjoying street food trails.'
    ],
    sources: ['GI Registry of India: Silao Khaja & Mithila Makhana dossiers', 'K.T. Achaya: Indian Food: A Historical Companion', 'Bihar State Tourism Food Records']
  },
  {
    id: 'gangetic-wild-waters-wetlands',
    title: 'Wild Waters & Wetlands: Gangetic Ecology Expedition',
    hindiTitle: 'गंगा की लहरें और आद्रभूमि: बिहार का प्राकृतिक पर्यावरण पथ',
    tagline: 'Freshwater dolphins, Asia’s largest oxbow wetland, and migrating winter avifauna.',
    hindiTagline: 'गंगा डॉल्फिन का अभयारण्य, एशिया की सबसे बड़ी गोखुर झील काबरताल और मुंगेर के गर्म सोते।',
    theme: 'nature',
    themeLabel: 'Rivers & Landscapes',
    themeColor: '#107C41',
    durationDays: 3,
    totalStops: 3,
    districts: ['patna', 'begusarai', 'bhagalpur'],
    districtNames: ['Patna', 'Begusarai', 'Bhagalpur'],
    regions: ['Magadh', 'Mithila', 'Anga'],
    bestSeason: 'November to March (Tens of thousands of migratory waterfowl arrive at Kanwar Lake)',
    pace: 'Moderate',
    heroImage: VERIFIED_IMAGES.vikramshila,
    storyNarrative:
      "Bihar is fundamentally a creation of the great Ganga and its Himalayan tributaries—the Gandak, Ghaghara, Kosi, and Bagmati. While famous for history and spirituality, the state harbors spectacular ecological refuges. Asia’s largest freshwater oxbow lake at Kabartal (Kanwar Lake Ramsar site) hosts over 100 species of migratory birds from Central Asia and Siberia. Along the 60-kilometer stretch between Sultanganj and Kahalgaon lies India’s only protected habitat for the endangered Gangetic River Dolphin (*Platanista gangetica*). This journey reveals the untamed natural heartbeat of the Gangetic floodplains.",
    whyThisRoute:
      "Designed for eco-travelers, bird-watchers, and conservation enthusiasts seeking uncommercialized natural habitats.",
    stops: [
      {
        stopNumber: 1,
        dayNumber: 1,
        placeName: 'Ganga Confluence & Digha Ghat Cruise: Patna',
        hindiPlaceName: 'गंगा संगम एवं दीघा घाट रिवर फ्रंट (पटना)',
        districtId: 'patna',
        districtName: 'Patna',
        region: 'Magadh',
        headline: 'The Grand River Artery and Marine Drive',
        narrative:
          'Begin on the expansive Patna Riverfront at Gandhi Ghat or Digha. Board the Bihar Tourism river cruise to witness the majestic meeting of waters where the Gandak and Son join the mighty Ganga. Watch local fishermen navigate traditional wooden boats, observe evening Ganga Aarti illuminated by thousand brass lamps, and gaze across the riverine sandbars (diyaras) that form the fertile agricultural core of the valley.',
        whatToExperience: [
          'Sunset river cruise along the Patna Marine Drive (JP Ganga Path)',
          'Observing the ceremonial evening Ganga Aarti at Gandhi Ghat',
          'Walking the revitalized 6-kilometre riverfront promenade connecting heritage ghats'
        ],
        culinaryHighlight: {
          dishName: 'Bihari Sattu Ghol & Roasted Peanuts',
          description: 'Savory roasted gram flour beverage with lemon juice, mint, and cumin enjoyed along the river promenade.',
          foodId: 'sattu-sharbat'
        },
        musicRecommendation: {
          trackId: 'kelwa-ke-paat-par',
          title: 'Ganga Ghat Twilight Chants',
          genre: 'Devotional / River',
          artist: 'Patna Ghat Collective'
        },
        languageSpoken: 'Magahi (मगही) and Bhojpuri',
        historicalContext: 'The Ganga at Pataliputra has served as India’s primary trade and naval highway since Emperor Chandragupta Maurya.',
        practicalTips: 'River cruises operate daily at 4:30 PM from Gandhi Ghat managed by BSTDC.',
        travelTransit: 'Central Patna ghats accessible via auto-rickshaw or taxi.',
        image: VERIFIED_IMAGES.golghar
      },
      {
        stopNumber: 2,
        dayNumber: 2,
        placeName: 'Kanwar Lake (Kabartal) Bird Sanctuary: Ramsar Site',
        hindiPlaceName: 'काबरताल (कंवर झील) पक्षी अभयारण्य (बेगूसराय)',
        districtId: 'begusarai',
        districtName: 'Begusarai',
        region: 'Mithila',
        headline: 'Asia’s Largest Freshwater Oxbow Wetland',
        narrative:
          'Travel east to Begusarai district to explore Kabartal, designated as Bihar’s first Ramsar Wetland of International Importance. Formed by the historic shifting meanders of the Gandak river, this vast 2,620-hectare lake ecosystem transforms every winter into a bustling haven for over 20,000 migratory waterfowl from Siberia, Mongolia, and the Tibetan plateau. Board an unmotorized wooden boat with a local boatman through floating lotus mats.',
        whatToExperience: [
          'Dawn birdwatching for Bar-headed Geese, Northern Pintails, and Red-crested Pochards',
          'Gliding through blooming lotus marshes and reed-fringed water channels in wooden dinghies',
          'Visiting the ancient Jaimangla Garh temple located on an island hillock inside the wetland'
        ],
        culinaryHighlight: {
          dishName: 'Begusarai Chura-Dahi & Fresh Water Singhara',
          description: 'Crispy winter water chestnuts (singhara) paired with fresh buffalo milk curd and roasted flaxseed chutney.',
          foodId: 'dahi-chura'
        },
        musicRecommendation: {
          trackId: 'anga-manjusha-behula',
          title: 'River Boatman Songs (Bhatiyali)',
          genre: 'Folk / Waterways',
          artist: 'Kabartal Boatmen'
        },
        languageSpoken: 'Maithili (मैथिली) and Angika',
        historicalContext: 'Declared a Ramsar site in 2020; critical wintering ground on the Central Asian Flyway for threatened avifauna.',
        practicalTips: 'Carry high-powered binoculars and a telephoto lens (300mm+); hire a local boatman early in the morning at Jaimangla Garh.',
        travelTransit: '125 km east of Patna via NH 31 (approx. 3 hours drive to Begusarai town, then 22 km to Kabartal).',
        image: VERIFIED_IMAGES.barabarCaves
      },
      {
        stopNumber: 3,
        dayNumber: 3,
        placeName: 'Vikramshila Gangetic Dolphin Sanctuary',
        hindiPlaceName: 'विक्रमशिला गंगा डॉल्फिन अभयारण्य (भागलपुर)',
        districtId: 'bhagalpur',
        districtName: 'Bhagalpur',
        region: 'Anga',
        headline: 'Protected Waters of the National Aquatic Animal',
        narrative:
          'Continue downstream along the Ganga to Bhagalpur. Here, a 60-kilometer river stretch between Sultanganj and Kahalgaon constitutes the Vikramshila Gangetic Dolphin Sanctuary—the only protected riverine reserve for the Gangetic River Dolphin (*Susu*) in India. Take an unmotorized traditional wooden country boat at sunrise from Kahalgaon or Barari Ghat to watch these blind, echolocating freshwater mammals surface for breath alongside Indian Smooth-coated Otters.',
        whatToExperience: [
          'Spotting surfacing Gangetic River Dolphins around the granite island outcrops of Kahalgaon',
          'Watching Indian Skimmers, Osprey, and migratory River Terns dive for river fish',
          'Sunset over the three sacred granite islands of Kahalgaon jutting out of the swirling river'
        ],
        culinaryHighlight: {
          dishName: 'Bhagalpuri Katarni Chura & Tilkut',
          description: 'Sweet, highly aromatic native Katarni beaten rice served with farm fresh curd and roasted sesame sweets.',
          foodId: 'dahi-chura'
        },
        musicRecommendation: {
          trackId: 'anga-manjusha-behula',
          title: 'Hymn of the Sacred River Ganga',
          genre: 'Spiritual / Folk',
          artist: 'Anga Heritage Troupe'
        },
        languageSpoken: 'Angika (अंगिका)',
        historicalContext: 'Established in 1991; sanctuary protects approximately 300 Gangetic dolphins, India’s national aquatic animal.',
        practicalTips: 'Motorized speedboats are strictly banned in the sanctuary to protect dolphins from propeller strikes; always travel with certified manual boatmen.',
        travelTransit: '70 km east of Begusarai along NH 31 and Mokama-Bhagalpur highway (approx. 2 hours drive).',
        image: VERIFIED_IMAGES.vikramshila
      }
    ],
    culinaryTraditions: ['Begusarai Singhara & Chura-Dahi', 'Patna Sattu Ghol', 'Katarni Chura (GI)', 'Riverine Vegetable Curries'],
    craftTraditions: ['Reed and bamboo basket weaving', 'Handmade wooden fishing dinghies', 'Jute rope braiding'],
    connectedEras: ['Natural Fluvial Evolution of the Gangetic Plain', 'Ramsar Conservation Era'],
    travelAdvisories: [
      'Strictly avoid single-use plastics around water bodies and wetlands.',
      'Silence is essential when observing dolphins; do not attempt to feed or touch wildlife.'
    ],
    sources: ['Wildlife Institute of India (WII) Dolphin Census Reports', 'Ramsar Information Sheet: Kabartal Wetland', 'Bihar Forest and Environment Department']
  },
  {
    id: 'living-crafts-handloom-trail',
    title: 'Living Crafts: From Looms to Mud Walls',
    hindiTitle: 'जीवंत शिल्प यात्रा: करघों से भित्तिचित्रों तक',
    tagline: 'Mithila painting, Sujani kantha quilts, Tussar silk, and golden Sikki grass.',
    hindiTagline: 'मधुबनी का आँगन, मुजफ्फरपुर की सुजनी, भागलपुर का तसर और मिथिला की सुनहरी सिक्की।',
    theme: 'arts',
    themeLabel: 'Living Arts & Crafts',
    themeColor: '#B44D28',
    durationDays: 4,
    totalStops: 4,
    districts: ['madhubani', 'muzaffarpur', 'bhagalpur', 'patna'],
    districtNames: ['Madhubani', 'Muzaffarpur', 'Bhagalpur', 'Patna'],
    regions: ['Mithila', 'Tirhut', 'Anga', 'Magadh'],
    bestSeason: 'October to March (Pleasant weather for open-air artisan workshops)',
    pace: 'Moderate',
    heroImage: VERIFIED_IMAGES.madhubani,
    storyNarrative:
      "Bihar is home to one of India’s most dense concentrations of Geographical Indication (GI) tagged handmade craft traditions. Crucially, these crafts are living cultural expressions nurtured primarily by women within rural domestic spaces. From the cosmic mud-wall compositions of Mithila to the delicate recycled fabric narrative quilts of Sujani in Muzaffarpur, the golden wild wetland grass (Sikki) woven into bridal boxes, and the shimmering Tussar silks of Bhagalpur, this journey connects you directly with the master artisans who keep these ancient tactile memories alive.",
    whyThisRoute:
      "An unmediated deep dive into authentic folk craftsmanship, supporting women's craft collectives without middlemen.",
    stops: [
      {
        stopNumber: 1,
        dayNumber: 1,
        placeName: 'Jitwarpur & Ranti: The Epicenter of Mithila Art',
        hindiPlaceName: 'जितवारपुर एवं रांटी: मिथिला चित्रकला का गढ़',
        districtId: 'madhubani',
        districtName: 'Madhubani',
        region: 'Mithila',
        headline: 'Natural Pigments, Bamboo Pens, and Living Wall Canvases',
        narrative:
          'Begin in Jitwarpur and Ranti, villages designated as National Craft Villages. Sit with women painters in their open verandahs and observe how they prepare natural colours: black from kerosene soot and cowdung, yellow from turmeric and lime, blue from wild indigo, and green from crushed leaves of the sem creeper. Try your hand at drawing fine Kachni line work using a split bamboo twig.',
        whatToExperience: [
          'Hands-on workshop with a master artisan on natural pigment extraction',
          'Studying the intricate symbols of the Kohbar (lotus, fish, turtle, bamboo) representing fertility',
          'Visiting the Mithila Art Institute training the next generation of women artists'
        ],
        culinaryHighlight: {
          dishName: 'Mithila Makhana Kheer & Tilkut',
          description: 'Fragrant sweet dish prepared from fresh popped lotus seeds simmered in cardamom milk.',
          foodId: 'makhana-kheer'
        },
        musicRecommendation: {
          trackId: 'samdaun-doli-uthalo',
          title: 'Maithili Bridal Song (Samdaun)',
          genre: 'Folk / Lifecycle',
          artist: 'Village Women Collective'
        },
        languageSpoken: 'Maithili (मैथिली)',
        historicalContext: 'Practiced for centuries as temporary wall art (Aripan/Kohbar); brought to international fame following the 1934 Bihar earthquake.',
        practicalTips: 'Carry a sturdy cardboard tube if you plan to purchase large paper paintings.',
        travelTransit: 'Reached via Darbhanga Airport (35 km) or Madhubani railway station (5 km).',
        image: VERIFIED_IMAGES.madhubani
      },
      {
        stopNumber: 2,
        dayNumber: 2,
        placeName: 'Bhusra Village: Sujani Kantha Embroidery Collective',
        hindiPlaceName: 'भुसरा गाँव: सुजनी कशीदाकारी महिला समिति (मुजफ्फरपुर)',
        districtId: 'muzaffarpur',
        districtName: 'Muzaffarpur',
        region: 'Tirhut',
        headline: 'Narrative Quilting and Women’s Empowerment',
        narrative:
          'Drive west into Muzaffarpur district to visit Bhusra village, the epicenter of Sujani embroidery. Historically crafted by mothers who quilted layers of discarded old saris with fine running stitches to create soft blankets for newborn babies, Sujani has evolved into a powerful narrative art form. Women embroider evocative contemporary stories of girl-child education, domestic rights, and village life using red, yellow, and blue cotton threads.',
        whatToExperience: [
          'Meeting the Bhusra Mahila Vikas Samiti women’s cooperative',
          'Watching the fine running stitch technique applied to tussar silk and fine cotton',
          'Purchasing authentic GI-certified Sujani wall hangings, dupattas, and bedspreads'
        ],
        culinaryHighlight: {
          dishName: 'Muzaffarpur Shahi Litchi Juice / Litti Chokha',
          description: 'Seasonal Shahi Litchi fruit or wholesome sattu stuffed litti with spicy tomato chutney.',
          foodId: 'litti-chokha'
        },
        musicRecommendation: {
          trackId: 'bhikhari-thakur-bidesiya',
          title: 'Echoes of the Women’s Courtyard',
          genre: 'Folk / Narrative',
          artist: 'Tirhut Women Troupe'
        },
        languageSpoken: 'Bajjika (बज्जिका) and Hindi',
        historicalContext: 'Granted GI Tag in 2006; historically rooted in maternal ritual blankets celebrating birth.',
        practicalTips: 'Inform the Mahila Samiti a day in advance for a warm village reception and demonstration.',
        travelTransit: '80 km south-west of Madhubani via Darbhanga and NH 27 (approx. 2 hours drive).',
        image: VERIFIED_IMAGES.sujani
      },
      {
        stopNumber: 3,
        dayNumber: 3,
        placeName: 'Nathnagar: Bhagalpuri Tussar Handloom Weaving',
        hindiPlaceName: 'नाथनगर: भागलपुरी तसर सिल्क हथकरघा',
        districtId: 'bhagalpur',
        districtName: 'Bhagalpur',
        region: 'Anga',
        headline: 'Weaving Golden Cocoons into Imperial Textiles',
        narrative:
          'Cross south-east into Bhagalpur to discover why this ancient city has been called the Silk City for over a millennium. In the bustling weaver lanes of Nathnagar, meet traditional Ansari and Hindu weaver families operating handlooms. Learn the full journey of wild Tussar silk: from boiling the oak and asan tree cocoons to spinning the coarse, textured golden yarn and weaving it with vegetable-dyed patterns.',
        whatToExperience: [
          'Touring home-based pit looms and fly-shuttle handlooms in Nathnagar',
          'Feeling the tactile difference between raw Tussar, spun Eri silk, and Matka silk',
          'Purchasing authentic handloom silk sarees, stoles, and dress fabrics directly from weavers'
        ],
        culinaryHighlight: {
          dishName: 'Katarni Chura with Dahi & Jaggery',
          description: 'Aromatic GI-tagged short-grain Katarni beaten rice served with thick sweet curd.',
          foodId: 'dahi-chura'
        },
        musicRecommendation: {
          trackId: 'anga-manjusha-behula',
          title: 'Weavers Song and Behula Lore',
          genre: 'Folk / Anga',
          artist: 'Champanagar Weavers Choir'
        },
        languageSpoken: 'Angika (अंगिका) and Urdu',
        historicalContext: 'Bhagalpuri Tussar received GI status in 2008; exported across the Silk Route since antiquity.',
        practicalTips: 'Look for the Silk Mark and Handloom Mark tags on silk textiles to guarantee authentic handloom origin.',
        travelTransit: '160 km south-east of Muzaffarpur via Mokama bridge and NH 33 (approx. 4 hours drive).',
        image: VERIFIED_IMAGES.bhagalpuriSilk
      },
      {
        stopNumber: 4,
        dayNumber: 4,
        placeName: 'Upendra Maharathi Sansthan: Patna Craft Museum',
        hindiPlaceName: 'उपेंद्र महारथी शिल्प अनुसंधान संस्थान (पटना)',
        districtId: 'patna',
        districtName: 'Patna',
        region: 'Magadh',
        headline: 'The Apex Institute of Bihar’s Master Crafts',
        narrative:
          'Conclude in Patna at the Upendra Maharathi Shilp Anusandhan Sansthan in Patliputra Colony. Named after visionary artist Upendra Maharathi, this prestigious government institute houses working design studios and a master crafts museum showcasing Sikki grass crafts, stone carving, terracotta, bamboo arts, papier-mâché, and Tikuli glass art (an ancient craft of miniature paintings executed on glass discs).',
        whatToExperience: [
          'Observing the creation of Tikuli art—gold foil engraving on lacquer-coated wood/glass',
          'The stunning gallery of golden Sikki grass figures and woven containers',
          'The state craft emporium offering authenticated master-craft items at fixed prices'
        ],
        culinaryHighlight: {
          dishName: 'Litti Chokha & Khaja Platter',
          description: 'Celebratory platter of roasted litti with baingan chokha, followed by flaky sweet khaja.',
          foodId: 'litti-chokha'
        },
        musicRecommendation: {
          trackId: 'contemporary-bihar-sharda-tribute',
          title: 'Tribute to Bihar’s Living Traditions',
          genre: 'Folk / Fusion',
          artist: 'Bihar Sangeet Natak Akademi'
        },
        languageSpoken: 'Magahi (मगही) and Hindi',
        historicalContext: 'Founded to revive, standardize, and provide ethical global markets for Bihar’s indigenous folk arts.',
        practicalTips: 'The institute is open 10:00 AM to 5:00 PM; closed on Sundays and government holidays.',
        travelTransit: '210 km west of Bhagalpur via NH 33 (approx. 5 hours) or 3.5 hours by fast train to Patna.',
        image: VERIFIED_IMAGES.sikkiCraft
      }
    ],
    culinaryTraditions: ['Makhana Kheer (GI)', 'Shahi Litchi (GI)', 'Katarni Chura (GI)', 'Litti Chokha', 'Tilkut'],
    craftTraditions: ['Madhubani Painting (GI)', 'Sujani Embroidery (GI)', 'Bhagalpuri Tussar (GI)', 'Sikki Grass (GI)', 'Tikuli Art'],
    connectedEras: ['Vedic & Epic Mithila', 'Colonial Artisan Guilds', 'Post-Independence Craft Revival'],
    travelAdvisories: [
      'Carry cash when visiting rural artisan hamlets as UPI connectivity can occasionally be patchy.',
      'Respect the privacy of women artisans and always request permission before filming in domestic spaces.'
    ],
    sources: ['Upendra Maharathi Shilp Anusandhan Sansthan archives', 'GI Registry of India: Handloom & Handicraft Dossiers', 'Crafts Council of India']
  },
  {
    id: 'tirthankara-jain-sanctuary',
    title: 'The Tirthankara Sanctuary Trail (Sacred Jain Circuit)',
    hindiTitle: 'तीर्थंकर निर्वाण पथ: पावापुरी से मंदार पर्वत तक',
    tagline: 'White marble lotus waters, Mahavira’s birthplace, and sacred granite hills.',
    hindiTagline: 'पावापुरी का जल मंदिर, भगवान महावीर की जन्मभूमि कुंडलपुर और मंदार पर्वत का पावन शिखर।',
    theme: 'spiritual',
    themeLabel: 'Spiritual & Philosophical',
    themeColor: '#C85A32',
    durationDays: 4,
    totalStops: 4,
    districts: ['vaishali', 'nalanda', 'jamui', 'banka'],
    districtNames: ['Vaishali', 'Nalanda', 'Jamui', 'Banka'],
    regions: ['Tirhut', 'Magadh', 'Anga'],
    bestSeason: 'November to February (Cool, clear mornings for hill climbs)',
    pace: 'Moderate',
    heroImage: VERIFIED_IMAGES.barabarCaves,
    storyNarrative:
      "Bihar is the sacred birthplace of Jainism's paramount philosophical light: the 24th Tirthankara Lord Mahavira was born into the royal Licchavi lineage at Kundalpur (Vaishali) and attained Mahaparinirvana at Pawapuri in Nalanda. Furthermore, the 12th Tirthankara Vasupujya attained all five auspicious Kalyanaks in this land. This trail is an intensely tranquil pilgrimage through white marble island temples resting on lotus ponds, secluded forest hermitage hills in Jamui where Mahavira practiced severe ascetic tapasya, and the granite monolith of Mandar Hill.",
    whyThisRoute:
      "Visits the holiest Jain tirthas in eastern India, offering pristine dharamshalas, pure satvik food, and meditative solace.",
    stops: [
      {
        stopNumber: 1,
        dayNumber: 1,
        placeName: 'Kundalpur & Basokund: Mahavira’s Birthplace',
        hindiPlaceName: 'कुंडलपुर एवं बासोकुंड: भगवान महावीर की जन्मभूमि (वैशाली)',
        districtId: 'vaishali',
        districtName: 'Vaishali',
        region: 'Tirhut',
        headline: 'The Sacred Soil Where Lord Mahavira Was Born',
        narrative:
          'Begin in Vaishali at Kundalpur (Basokund), revered as the birthplace of the 24th Tirthankara Lord Mahavira, born as Prince Vardhamana to King Siddhartha and Queen Trishala in 599 BCE. Visit the beautiful Digambara and Shvetambara Jain temple complexes, the memorial stupa, and the sacred garden pavilion commemorating the prince’s renunciation of worldly wealth.',
        whatToExperience: [
          'Prayers in the white marble sanctum of the Mahavira Birthplace Temple',
          'Walking the tranquil manicured pilgrimage gardens of Basokund',
          'Visiting the nearby ancient archaeological Coronation Tank of the Licchavis'
        ],
        culinaryHighlight: {
          dishName: 'Satvik Dal Pitha & Sweet Rice',
          description: 'Steamed rice flour dumplings stuffed with mild spiced chana dal without onion or garlic.',
          foodId: 'dal-pitha'
        },
        musicRecommendation: {
          trackId: 'dumraon-shehnai-bhairavi',
          title: 'Navkar Mantra Chants in Raag Bhairavi',
          genre: 'Devotional / Chants',
          artist: 'Jain Choral Troupe'
        },
        languageSpoken: 'Bajjika (बज्जिका) and Hindi',
        historicalContext: 'Lord Mahavira was born into the royal Jnatrika kshatriya clan of the Licchavi confederacy in the 6th century BCE.',
        practicalTips: 'Pure satvik Jain vegetarian food (Bhojanalaya) is available within the temple guest house.',
        travelTransit: '45 km north of Patna across the Mahatma Gandhi Setu bridge (approx. 1.2 hours drive).',
        image: VERIFIED_IMAGES.ashokanPillar
      },
      {
        stopNumber: 2,
        dayNumber: 2,
        placeName: 'Pawapuri Jal Mandir: The Nirvana Lotus Shrine',
        hindiPlaceName: 'पावापुरी जल मंदिर: कमल सरोवर पर श्वेत संगमरमर का तीर्थ',
        districtId: 'nalanda',
        districtName: 'Nalanda',
        region: 'Magadh',
        headline: 'Where Lord Mahavira Attained Final Liberation (527 BCE)',
        narrative:
          'Drive south into Nalanda district to Pawapuri (the sinless town). At the center of an enormous water tank filled with pink and white lotus blossoms stands the breathtaking white marble Jal Mandir. Accessible via a long 600-foot stone causeway, this shrine marks the sacred cremation spot of Lord Mahavira. Tradition holds that the demand for his holy ashes was so immense that thousands of devotees scooped away the soil, creating this expansive lake.',
        whatToExperience: [
          'Walking the red stone causeway surrounded by blooming lotus waters',
          'Gazing at the footprint impressions (Charan Paduka) of Lord Mahavira in the inner sanctum',
          'Visiting the nearby Gaon Mandir (Samosharan) where Mahavira delivered his final sermon'
        ],
        culinaryHighlight: {
          dishName: 'Silao Khaja & Satvik Halwa',
          description: 'Crisp multi-layered sweet pastry prepared fresh in nearby Silao.',
          foodId: 'silao-khaja'
        },
        musicRecommendation: {
          trackId: 'vidyapati-nachari-bhairavi',
          title: 'Meditative Temple Chants',
          genre: 'Devotional / Classical',
          artist: 'Pawapuri Temple Choir'
        },
        languageSpoken: 'Magahi (मगही)',
        historicalContext: 'One of the five greatest Jain pilgrimage sites on earth; rebuilt in marble by King Nandivardhana.',
        practicalTips: 'Dawn and dusk prayers feature glowing oil lamps reflected in the lotus lake. Remove all leather items before entering the causeway.',
        travelTransit: '85 km south of Vaishali via Patna and Bihar Sharif (approx. 2.5 hours drive).',
        image: VERIFIED_IMAGES.nalanda
      },
      {
        stopNumber: 3,
        dayNumber: 3,
        placeName: 'Lachhuar & Kakandi: Tapobhumi Shrines of Jamui',
        hindiPlaceName: 'लछुआड़ एवं काकंदी: भगवान महावीर की तपोभूमि (जमुई)',
        districtId: 'jamui',
        districtName: 'Jamui',
        region: 'Magadh',
        headline: 'Forest Hermitage Where Mahavira Undertook Severe Penance',
        narrative:
          'Journey east into the scenic forested hills of Jamui district to Lachhuar and the nearby Kshatriyakund hills. Believed by many Jain traditions to be the true location of Mahavira’s early forest tapasya, this secluded mountain valley is home to an expansive dharamshala and ancient stone temples holding black and white marble idols of the Tirthankaras dating to the early medieval period.',
        whatToExperience: [
          'Trekking the serene hill trail leading to the ancient Kshatriyakund shrine',
          'Prayers in the secluded stone sanctums amidst tranquil Sal forest surroundings',
          'Observing ancient carved stone pillars and Chaumukhi Tirthankara sculptures'
        ],
        culinaryHighlight: {
          dishName: 'Pure Satvik Khichdi & Achar',
          description: 'Wholesome moong dal and rice khichdi prepared without root vegetables in the community dharamshala.',
          foodId: 'bihari-khichdi'
        },
        musicRecommendation: {
          trackId: 'karam-mandar-geet',
          title: 'Forest Silence & Meditation Sounds',
          genre: 'Meditative / Forest',
          artist: 'Acoustic Flute Ensemble'
        },
        languageSpoken: 'Magahi (मगही) and Angika',
        historicalContext: 'Sacred landscape documented in the ancient Jain Kalpasutra as the hermitage of Lord Mahavira.',
        practicalTips: 'Lachhuar offers clean, well-managed dharamshalas for pilgrims with advance booking.',
        travelTransit: '75 km south-east of Pawapuri via Nawada and Jamui road (approx. 2 hours drive).',
        image: VERIFIED_IMAGES.barabarCaves
      },
      {
        stopNumber: 4,
        dayNumber: 4,
        placeName: 'Mandar Hill: Monolith of Tirthankara Vasupujya',
        hindiPlaceName: 'मंदार पर्वत: 12वें तीर्थंकर वासुपूज्य की निर्वाण स्थली (बाँका)',
        districtId: 'banka',
        districtName: 'Banka',
        region: 'Anga',
        headline: 'Granite Peak of Nirvana and the Samudra Manthan Myth',
        narrative:
          'Conclude at the dramatic 700-foot granite monolith of Mandar Hill in Banka district. Sacred to both Jains and Hindus (legend holds it was the churning rod during Samudra Manthan), the summit marks the holy Nirvana spot of the 12th Tirthankara Vasupujya. Ascend the rock-cut steps or take the scenic aerial ropeway to the summit temple housing the white marble footprints of Lord Vasupujya.',
        whatToExperience: [
          'Ascending Mandar Hill via the modern aerial cable car ropeway or stone rock stairs',
          'Praying at the summit Jain temple offering panoramic views of the Banka and Anga plains',
          'Examining rock-cut Gupta inscriptions, relief sculptures, and the sacred Paapharni water tank'
        ],
        culinaryHighlight: {
          dishName: 'Banka Pedakiya & Sweet Kheer',
          description: 'Crisp half-moon pastry stuffed with sweetened mawa, dry coconut, and cardamom.',
          foodId: 'malpua-bihar'
        },
        musicRecommendation: {
          trackId: 'anga-manjusha-behula',
          title: 'Mandar Summit Devotional Chimes',
          genre: 'Devotional / Instrumental',
          artist: 'Banka Temple Ensemble'
        },
        languageSpoken: 'Angika (अंगिका)',
        historicalContext: '12th Tirthankara Vasupujya attained his Garbha, Janma, Diksha, Kevalgyana, and Moksha Kalyanaks in this region.',
        practicalTips: 'The passenger ropeway operates from 9:00 AM to 5:00 PM; carry drinking water for the summit climb.',
        travelTransit: '80 km east of Jamui via Deoghar-Banka highway (approx. 2 hours drive).',
        image: VERIFIED_IMAGES.rohtasgarh
      }
    ],
    culinaryTraditions: ['Pure Satvik Jain Cuisine', 'Silao Khaja (GI)', 'Banka Pedakiya', 'Dal Pitha (Satvik)'],
    craftTraditions: ['White marble stone polishing', 'Bronze bell casting', 'Terracotta lamps'],
    connectedEras: ['Mahajanapadas & Early Historic Jainism (6th century BCE)', 'Pala Period Jain Sculpture'],
    travelAdvisories: [
      'Strictly observe satvik dietary guidelines (no root vegetables, onions, or garlic) in temple dining halls.',
      'Wear modest, respectful attire with shoulders and knees covered in all Jain shrines.'
    ],
    sources: ['Acharya Hemachandra: Trishashtishalakapurushacharitra', 'ASI Archaeological Survey Reports: Mandar Hill & Pawapuri', 'Jain Tirth Vandana Sangraha']
  }
];

// Discovery categories for filter tabs
export const JOURNEY_CATEGORIES: { id: JourneyTheme | 'all'; label: string; hindiLabel: string; count: number }[] = [
  { id: 'all', label: 'All Stories', hindiLabel: 'सभी यात्राएँ', count: 10 },
  { id: 'spiritual', label: 'Spiritual & Philosophical', hindiLabel: 'अध्यात्म एवं दर्शन', count: 2 },
  { id: 'history', label: 'Empires & Ancient Capitals', hindiLabel: 'साम्राज्य एवं प्राचीन राजधानियाँ', count: 2 },
  { id: 'arts', label: 'Living Arts & Crafts', hindiLabel: 'हस्तशिल्प एवं लोककला', count: 2 },
  { id: 'food', label: 'Flavours & Culinary Heritage', hindiLabel: 'स्वाद एवं खानपान', count: 1 },
  { id: 'freedom', label: 'Freedom Struggle & Gandhi', hindiLabel: 'स्वतंत्रता संग्राम एवं गाँधी', count: 1 },
  { id: 'architecture', label: 'Forts & Medieval Architecture', hindiLabel: 'दुर्ग एवं मध्यकालीन स्थापत्य', count: 1 },
  { id: 'nature', label: 'Rivers & Gangetic Ecology', hindiLabel: 'नदियाँ एवं प्राकृतिक पर्यावरण', count: 1 }
];

// Hub cities for custom journey builder
export const GATEWAY_HUBS = [
  {
    id: 'patna',
    name: 'Patna (Pataliputra)',
    hindiName: 'पटना (पाटलिपुत्र)',
    tag: 'Capital & Premier Air/Rail Hub',
    description: 'Central transit gateway with Patna Airport (PAT), 5 major railway stations, and expressways in all directions.',
    connections: ['Gaya', 'Nalanda', 'Vaishali', 'Rohtas', 'Begusarai']
  },
  {
    id: 'gaya',
    name: 'Gaya & Bodh Gaya',
    hindiName: 'गया एवं बोधगया',
    tag: 'International Buddhist Gateway',
    description: 'Gaya International Airport (GAY) with seasonal flights from SE Asia, and Grand Chord railway line.',
    connections: ['Nalanda', 'Rajgir', 'Jehanabad', 'Rohtas']
  },
  {
    id: 'darbhanga',
    name: 'Darbhanga & Madhubani',
    hindiName: 'दरभंगा एवं मधुबनी',
    tag: 'Mithila & North Bihar Gateway',
    description: 'Darbhanga Airport (DIB) with daily non-stop flights to Delhi, Mumbai, and Bengaluru.',
    connections: ['Madhubani', 'Sitamarhi', 'Muzaffarpur', 'Samastipur']
  },
  {
    id: 'bhagalpur',
    name: 'Bhagalpur & Munger',
    hindiName: 'भागलपुर एवं मुंगेर',
    tag: 'Eastern Bihar & Anga Gateway',
    description: 'Direct rail links from Kolkata and Patna along the southern bank of the Ganga.',
    connections: ['Munger', 'Banka', 'Begusarai', 'Katihar']
  },
  {
    id: 'champaran',
    name: 'Motihari & Bettiah',
    hindiName: 'मोतिहारी एवं बेतिया',
    tag: 'North-West & Terai Gateway',
    description: 'Bapudham Motihari rail hub with direct road links to Valmiki Tiger Reserve and Nepal border.',
    connections: ['East Champaran', 'West Champaran', 'Vaishali', 'Gopalganj']
  }
];
