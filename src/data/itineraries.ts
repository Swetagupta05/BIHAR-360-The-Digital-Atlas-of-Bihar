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
