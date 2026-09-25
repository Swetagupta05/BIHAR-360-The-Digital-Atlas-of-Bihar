import { LandscapePlace, RiverDetail } from '../types';

export interface LandscapeSystemStep {
  id: string;
  stepNumber: number;
  title: string;
  hindiTitle: string;
  tagline: string;
  narrative: string;
  keyElements: string[];
  districtExamples: string[];
}

export const BIHAR_LANDSCAPE_SYSTEMS: LandscapeSystemStep[] = [
  {
    id: 'rivers',
    stepNumber: 1,
    title: 'The Great Himalayan & Plateau Rivers',
    hindiTitle: 'महान नदियां एवं जलधाराएं',
    tagline: 'The arteries of silt, sand, and perennial life',
    narrative: 'Bihar is defined by water. The majestic Ganga enters from the west at Chausa (Buxar) and divides the state into two distinct geographic halves. From the high snowy Nepal Himalayas to the north descend the Gandak, Bagmati, and turbulent Kosi. From the ancient Vindhyan and Chota Nagpur plateau to the south flow the Son, Punpun, and Falgu.',
    keyElements: ['Perennial snowmelt rivers', 'Plateau peninsular tributaries', 'Silt-carrying alluvial floods', 'Dynamic shifting sandbars (Diaras)'],
    districtExamples: ['Buxar', 'Patna', 'Bhagalpur', 'Katihar', 'West Champaran', 'Rohtas']
  },
  {
    id: 'plains',
    stepNumber: 2,
    title: 'The Great Alluvial Plains',
    hindiTitle: 'विशाल जलोढ़ मैदान',
    tagline: 'Deep, nutrient-rich soil formed over millennia',
    narrative: 'Between the sub-Himalayan terai foothills in the north and the weathered southern crystalline plateaus lies one of the deepest alluvial basins on planet Earth. Deposited over hundreds of thousands of years, these silts create an undulating topography of upland terraces (Bhangar) and actively flooded river flats (Khadar).',
    keyElements: ['Khadar (new active alluvium)', 'Bhangar (older highland alluvium)', 'Tal depressions of Mokama', 'Fertile sand deposits'],
    districtExamples: ['Vaishali', 'Samastipur', 'Muzaffarpur', 'Begusarai', 'Bhojpur', 'Saran']
  },
  {
    id: 'agriculture',
    stepNumber: 3,
    title: 'Agricultural Heartland & Seasonal Rhythms',
    hindiTitle: 'कृषि भूमि एवं मौसमी चक्र',
    tagline: 'Centuries of agrarian abundance nurtured by seasonal floods',
    narrative: 'The fertile soils support intense agrarian life tuned to the monsoonal rhythm. The northern wetlands produce over 85% of India’s divine GI-tagged Makhana (fox nuts), alongside fragrant Shahi Litchis and Katarni rice. The central and southern plains harvest pulses in the vast post-monsoon Tal depressions and wheat across the Son canal grid.',
    keyElements: ['Makhana water cultivation', 'Shahi Litchi orchard belts', 'Winter Tal pulse harvesting', 'Diara riverbed cultivation'],
    districtExamples: ['Madhubani', 'Darbhanga', 'Muzaffarpur', 'Patna', 'Nalanda', 'Rohtas']
  },
  {
    id: 'settlements',
    stepNumber: 4,
    title: 'Historic Riparian Settlements',
    hindiTitle: 'नदी तटवर्ती बस्तियां एवं सभ्यता',
    tagline: 'Human settlements clustered along elevated natural levees',
    narrative: 'For three millennia, village communities positioned themselves on natural high ridges along riverbanks to escape floodwaters while harnessing the rich soil. These settlement clusters evolved into distinctive architectural vernaculars of terracotta-tiled roofs, mud-plaster courtyards, and communal sacred ponds (Pokharis).',
    keyElements: ['Elevated riverbank levees', 'Sacred community ponds (Pokharis)', 'Mud and thatch thermal courtyards', 'Riparian ghats and ferry points'],
    districtExamples: ['Sitamarhi', 'Siwan', 'Gopalganj', 'Saharsa', 'Khagaria', 'Purnia']
  },
  {
    id: 'forests',
    stepNumber: 5,
    title: 'Sub-Himalayan Terai & Plateau Forests',
    hindiTitle: 'तराई एवं पठारी वन',
    tagline: 'Pockets of biodiversity along borders and hill ranges',
    narrative: 'While the central plains are intensively cultivated, lush wilderness anchors the state’s borders. In West Champaran, the Valmiki landscape preserves primeval moist sal forests, bhabhar grasslands, and Bengal tigers contiguous with Nepal’s Chitwan. In the south, the Kaimur and Kharagpur hills preserve dry deciduous forests of mahua, tendu, and bamboo.',
    keyElements: ['Valmiki Sal moist canopy', 'Bhabhar & Terai grasslands', 'Kaimur Vindhyan dry deciduous', 'Thermal spring forest ecosystems'],
    districtExamples: ['West Champaran', 'Kaimur', 'Rohtas', 'Munger', 'Gaya', 'Nawada']
  },
  {
    id: 'wetlands',
    stepNumber: 6,
    title: 'Oxbow Lakes, Chaurs & Avian Flyways',
    hindiTitle: 'गोखुर झीलें, चौर एवं आर्द्रभूमियां',
    tagline: 'Invaluable freshwater sanctuaries on the Central Asian Flyway',
    narrative: 'As meandering rivers abandon older loops over centuries, they create crescent-shaped oxbow lakes (Mauns) and sprawling shallow seasonal swamps (Chaurs). Kabar Taal (Kanwar Lake) in Begusarai stands as Bihar’s first Ramsar wetland, hosting hundreds of thousands of wintering migratory birds flying south from Siberia and Mongolia.',
    keyElements: ['Ramsar wetland sanctuaries', 'Oxbow lakes (Mauns)', 'Seasonal vast swamps (Chaurs)', 'Central Asian Flyway waterfowl'],
    districtExamples: ['Begusarai', 'Darbhanga', 'Katihar', 'Saharsa', 'West Champaran', 'Bhagalpur']
  },
  {
    id: 'historical-cities',
    stepNumber: 7,
    title: 'Ancient Citadels & Sacred Capitals',
    hindiTitle: 'प्राचीन राजधानियां एवं ऐतिहासिक नगर',
    tagline: 'Where geography birthed the first empires and global philosophies',
    narrative: 'Bihar’s strategic river confluences and natural hill fortifications gave birth to world civilization. Pataliputra arose at the multi-river confluence of the Ganga, Son, and Gandak. Rajgir sat impregnable within seven natural quartzite peaks. Vaishali flourished as the world’s first republic along the Gandak, and Bodh Gaya nestled on the sandy banks of the sacred Falgu.',
    keyElements: ['Multi-river confluence defense (Jaldurga)', 'Ringed mountain fortifications (Giri-durga)', 'Ancient republican assemblies', 'World universities (Nalanda, Vikramshila)'],
    districtExamples: ['Patna', 'Nalanda', 'Gaya', 'Vaishali', 'Bhagalpur', 'Rohtas']
  }
];

export const BIHAR_RIVERS: RiverDetail[] = [
  {
    id: 'ganga',
    name: 'Ganga River',
    hindiName: 'गंगा नदी',
    origin: 'Gangotri Glacier (Uttarakhand); enters Bihar at Chausa near Buxar',
    confluence: 'Flows eastward 445 km through Bihar; exits at Sahebganj border into Bengal & the Bay of Bengal',
    lengthInBiharKm: 445,
    primaryDistricts: ['buxar', 'bhojpur', 'saran', 'patna', 'vaishali', 'samastipur', 'begusarai', 'lakhisarai', 'munger', 'khagaria', 'bhagalpur', 'katihar'],
    geographicRole: 'The master lifeline that bisects Bihar into North and South Bihar. It receives all northern Himalayan tributaries and southern peninsular rivers, depositing massive silts that sustain agriculture across 12 riverside districts.',
    culturalSignificance: 'Sacred river celebrated during Chhath Puja, Kartika Purnima, and Pitrapaksha. Historic ghats at Patna, Munger, Sultanganj, and Kahalgaon have witnessed millennia of trade, spiritual rituals, and monastic crossings.',
    keyPlacesAlong: ['Chausa Battlegrounds', 'Patna Digha & Gandhi Ghat', 'Munger Fort Kashtaharini Ghat', 'Sultanganj Ajgaibinath Temple', 'Vikramshila Dolphin Sanctuary', 'Manihari Ghat'],
    notableSpecies: ['Gangetic River Dolphin (Platanista gangetica)', 'Gharial (Gavialis gangeticus)', 'Indian Softshell Turtle', 'Hilsa fish'],
    historicalContext: 'Served as the royal marine thoroughfare for Mauryan navies, Buddhist missionary journeys, Sher Shah Suri’s river battles, and the Grand Trunk trade corridor.',
    image: '/assets/images/munger_fort_ganga_1789938550689.jpg',
    sources: [
      'Central Water Commission (CWC): Middle Ganga Basin Overview',
      'National Mission for Clean Ganga (NMCG): Bihar River Network',
      'Archaeological Survey of India (ASI): Riparian Heritage Monuments of Bihar'
    ]
  },
  {
    id: 'gandak',
    name: 'Gandak River (Narayani / Sadanira)',
    hindiName: 'गंडक नदी (नारायणी)',
    origin: 'Nhubine Himal Glacier in Nepal Himalayas; enters Bihar at Valmiki Nagar',
    confluence: 'Meets the Ganga at Sonepur (Saran) directly opposite Patna',
    lengthInBiharKm: 300,
    primaryDistricts: ['west-champaran', 'east-champaran', 'gopalganj', 'siwan', 'saran', 'muzaffarpur', 'vaishali'],
    geographicRole: 'A snow-fed Himalayan river that forms the natural western border of North Bihar. Supplies the major Gandak Barrage irrigation canal network watering Champaran, Gopalganj, and Saran.',
    culturalSignificance: 'Mentioned in the Shatapatha Brahmana as the ancient boundary between Kosala and Videha (Mithila). The confluence with the Ganga at Sonepur hosts the historic Harihar Kshetra Mela.',
    keyPlacesAlong: ['Valmiki Nagar Barrage & Tiger Reserve', 'Bettiah Raj wetlands', 'Rewa Ghat', 'Sonepur Harihar Kshetra Confluence', 'Hajipur Ghats'],
    notableSpecies: ['Mugger Crocodile', 'Gharial (breeding sanctuary)', 'Otters', 'Mahseer fish'],
    historicalContext: 'Followed by Gautama Buddha on his final journey from Rajgir through Vaishali toward Kushinagar; associated with the ancient mythological rescue of Gajendra Moksha at Sonepur.',
    image: '/assets/images/sonepur_cattle_fair_1789937950038.jpg',
    sources: [
      'Water Resources Department, Government of Bihar: Gandak Basin Project',
      'Wildlife Trust of India (WTI): Gandak Gharial Recovery Project',
      'Imperial Gazetteer of India: Champaran & Saran Rivers'
    ]
  },
  {
    id: 'kosi',
    name: 'Kosi River (Kausiki)',
    hindiName: 'कोशी नदी (कौशिकी)',
    origin: 'Tibet and Eastern Nepal Himalayas (confluence of Sun Kosi, Arun, and Tamur); enters Bihar at Bhimnagar near Supaul',
    confluence: 'Flows through North-Eastern Bihar; meets the Ganga near Kursela in Katihar district',
    lengthInBiharKm: 260,
    primaryDistricts: ['supaul', 'saharsa', 'madhepura', 'purnia', 'khagaria', 'katihar'],
    geographicRole: 'Notorious as the dynamic "Sorrow of Bihar", this braided braided river has migrated over 120 km westward across North Bihar over the past 250 years, continually depositing coarse sands and creating extensive seasonal chaurs.',
    culturalSignificance: 'Celebrated in the Mahabharata as the sacred river Kausiki associated with sage Vishvamitra. Modern floodplains are renowned for folk songs, Maithili river ballads, and rich freshwater fisheries.',
    keyPlacesAlong: ['Bhimnagar Kosi Barrage', 'Kupari Ghat', 'Nauhatta Floodplains', 'Mahishi Mandan Dham hinterland', 'Kursela Sangam Point'],
    notableSpecies: ['Smooth-coated Otter', 'Migratory Bar-headed Goose', 'Freshwater Catfish (Boal, Tengra)', 'Water Monitor Lizard'],
    historicalContext: 'Its historical shifting courses shaped the boundaries of ancient Anga, Mithila, and Pundravardhana, creating defensive aquatic barriers across Seemanchal.',
    image: '/assets/images/kishanganj_tea_garden_1789938508417.jpg',
    sources: [
      'National Institute of Hydrology (NIH): Morphology and Dynamics of Kosi River',
      'Water Resources Department, Government of Bihar: Kosi Basin Reports',
      'Survey of India Historical Cartography Records (1760–1960)'
    ]
  },
  {
    id: 'son',
    name: 'Son River (Sonbhadra)',
    hindiName: 'सोन नदी (सोनभद्र)',
    origin: 'Amarkantak Plateau in Madhya Pradesh; enters South-Western Bihar in Rohtas district',
    confluence: 'Flows north-eastward across South Bihar; joins the Ganga near Danapur/Maner in Patna district',
    lengthInBiharKm: 202,
    primaryDistricts: ['rohtas', 'aurangabad', 'bhojpur', 'arwal', 'patna'],
    geographicRole: 'The largest southern tributary of the Ganga in Bihar. Known for its wide sandy riverbed, golden silica sand used in construction across eastern India, and the historic 1874 Son Canal irrigation system.',
    culturalSignificance: 'Regarded as sacred since Vedic times. The historic Koilwar Bridge (Abdul Bari Bridge) built in 1862 was one of India’s earliest and longest rail-cum-road iron bridges.',
    keyPlacesAlong: ['Dehri-on-Sone Industrial Barrage', 'Indrapuri Barrage', 'Daudnagar Historic Fort', 'Koilwar Historic Iron Bridge', 'Maner Sharif Confluence'],
    notableSpecies: ['Golden Mahseer', 'Indian Peafowl along riparian scrubs', 'Freshwater river turtles'],
    historicalContext: 'In ancient times, the Son met the Ganga directly at Pataliputra, serving as the formidable western natural moat defending the imperial capital of Chandragupta Maurya and Ashoka.',
    image: '/assets/images/rohtasgarh_fort_plateau_1789937871440.jpg',
    sources: [
      'Rohtas District Gazetteer, Government of Bihar',
      'Ministry of Railways Historical Archives: The Koilwar Bridge over the Sone (1862)',
      'Central Ground Water Board (CGWB): Sone Sub-Basin Hydrogeology'
    ]
  },
  {
    id: 'punpun',
    name: 'Punpun River',
    hindiName: 'पुनपुन नदी',
    origin: 'Chota Nagpur plateau hills in Palamu district; enters Bihar in Aurangabad district',
    confluence: 'Flows parallel to the Son through Gaya and Patna districts; joins the Ganga at Fatuha',
    lengthInBiharKm: 200,
    primaryDistricts: ['aurangabad', 'gaya', 'jehanabad', 'patna'],
    geographicRole: 'A peninsular rainwater river of Magadh that recharges irrigation reservoirs and feeds agricultural channels across the southern plains before discharging into the Ganga.',
    culturalSignificance: 'Deeply revered in Hindu sacred geography. Mentioned in the Padma Purana and Vayu Purana as the mandatory first ritual bathing stop for pilgrims undertaking the ancestral Pitrapaksha pilgrimage before reaching Gaya.',
    keyPlacesAlong: ['Punpun Ghat Pilgrim Crossing', 'Fatuha Triveni Sangam', 'Jehanabad agrarian flats', 'Kinjar Ferry Point'],
    notableSpecies: ['Indigenous wetland fish', 'Pond herons', 'Cormorants'],
    historicalContext: 'Its banks served as the ancient rural transit route linking the imperial administrative center of Pataliputra with the monastic hills of Rajgir and sacred shrines of Gaya.',
    image: '/assets/images/patna_golghar_granary_1789937770039.jpg',
    sources: [
      'Vayu Purana & Gaya Mahatmya texts (Sacred Geography of Magadha)',
      'Patna District Gazetteer, Government of Bihar: Rivers of Patna',
      'Central Water Commission: Punpun Basin Monograph'
    ]
  },
  {
    id: 'falgu',
    name: 'Falgu River (Niranjana & Mohana Confluence)',
    hindiName: 'फल्गु नदी (निरंजना व मोहना)',
    origin: 'Formed 3 km north of Bodh Gaya by the confluence of the Lilajan (Niranjana) and Mohana rivers rising in Chota Nagpur hills',
    confluence: 'Flows past Gaya city, then splits into multiple underground spill channels (Dhadhar) in Jehanabad before dissipating into the Tal wetlands',
    lengthInBiharKm: 135,
    primaryDistricts: ['gaya', 'jehanabad'],
    geographicRole: 'Characterized by a unique subterranean flow. For most of the year, its wide sandy bed appears dry on the surface, but pure water flows continuously inches beneath the sand.',
    culturalSignificance: 'One of India’s holiest rivers. On the banks of its parent stream Niranjana, Siddhartha Gautama bathed before attaining supreme Buddhahood. At Gaya, pilgrims perform Pind Daan rituals along its sandy bed for ancestral liberation.',
    keyPlacesAlong: ['Bodh Gaya Sujata Kuti Ghat', 'Gaya Vishnupad Temple Ghats', 'Gayaji Rubber Dam (India’s largest rubber dam)', 'Pretshila Hill foot'],
    notableSpecies: ['Sandpiper birds', 'Riparian scrub birds', 'Freshwater burrowing fauna'],
    historicalContext: 'Associated with the legend of Sita’s curse in the Ramayana explaining its subterranean course; witness to 2,500 years of unbroken spiritual pilgrimages.',
    image: '/assets/images/mahabodhi_temple_gaya_1789937719331.jpg',
    sources: [
      'Water Resources Department, Government of Bihar: Gayaji Dam on Falgu River Project Documentation',
      'Gaya District Gazetteer: Historical and Sacred Geography of the Falgu',
      'Archaeological Survey of India (ASI): Ancient Bodh Gaya Excavations'
    ]
  },
  {
    id: 'bagmati',
    name: 'Bagmati River',
    hindiName: 'बागमती नदी',
    origin: 'Shivapuri hills in the Kathmandu Valley of Nepal; enters Bihar at Shorwatia in Sitamarhi district',
    confluence: 'Meanders through the heart of North Bihar; joins the Kosi/Kareh river system in Khagaria district',
    lengthInBiharKm: 394,
    primaryDistricts: ['sitamarhi', 'sheohar', 'muzaffarpur', 'darbhanga', 'samastipur', 'khagaria'],
    geographicRole: 'A major transboundary river that waters the fertile central Mithila plain. Highly prone to monsoon flooding, it creates extensive fertile silt deposits for vegetable and cereal crops.',
    culturalSignificance: 'Regarded as a sacred river in both Nepal and Bihar. Forms the mythological and agricultural landscape of Sitamarhi (the birthplace of Sita) and central Tirhut.',
    keyPlacesAlong: ['Dheng Railway Bridge', 'Riga Sugar Mills Basin', 'Hayaghat Floodplain', 'Kalyanpur Agricultural Levees'],
    notableSpecies: ['Gangetic freshwater fish', 'Asian Openbill Stork', 'Egrets', 'River terns'],
    historicalContext: 'Formed the traditional historical corridor connecting the Licchavi republic and Mithila kingdom with the Newar kingdoms of the Kathmandu Valley.',
    image: '/assets/images/madhubani_mithila_painting_1789937745005.jpg',
    sources: [
      'Joint Indo-Nepal Commission on Water Resources (JICWR): Bagmati Basin Records',
      'Sitamarhi District Gazetteer, Government of Bihar',
      'Bihar State Disaster Management Authority (BSDMA): River Hydrology Studies'
    ]
  },
  {
    id: 'mahananda',
    name: 'Mahananda River',
    hindiName: 'महानंदा नदी',
    origin: 'Mahaldhiram hills near Kurseong in the Darjeeling Himalayas; enters Bihar at Kishanganj',
    confluence: 'Flows through the eastern tip of Bihar (Kishanganj and Katihar); joins the Ganga in Malda district (West Bengal)',
    lengthInBiharKm: 180,
    primaryDistricts: ['kishanganj', 'purnia', 'katihar'],
    geographicRole: 'The easternmost river basin of Bihar. Waters the lush, high-rainfall Seemanchal tea gardens and pineapple plantations before joining the Lower Gangetic plain.',
    culturalSignificance: 'Marks the cultural confluence of Mithila, Surjapuri, and Bengali linguistic traditions. The river basin is celebrated for lush green landscapes and perennial stream fisheries.',
    keyPlacesAlong: ['Kishanganj Tea Garden Plains', 'Thakurganj Border Levees', 'Dighalbank Forest Foot', 'Barsoi Railway Confluence'],
    notableSpecies: ['Hill stream fish species', 'River terns', 'Kingfishers', 'Migratory wetland waders'],
    historicalContext: 'Historical boundary between the ancient kingdoms of Kamarupa (Assam), Pundravardhana (Bengal), and Anga (Bihar).',
    image: '/assets/images/kishanganj_tea_garden_1789938508417.jpg',
    sources: [
      'Purnea and Kishanganj District Gazetteers, Government of Bihar',
      'North Bengal & Eastern Bihar Hydrogeology Reports (Central Water Commission)',
      'Tea Board of India: Agro-climatic Features of Kishanganj Valley'
    ]
  }
];

export const BIHAR_LANDSCAPE_PLACES: LandscapePlace[] = [
  {
    id: 'valmiki-tiger-reserve',
    name: 'Valmiki National Park & Tiger Reserve',
    hindiName: 'वाल्मीकि राष्ट्रीय उद्यान एवं व्याघ्र अभयारण्य',
    tagline: 'Primeval sub-Himalayan sal forests, snow-fed rivers, and Bengal tiger corridors',
    category: 'Forests & Wildlife',
    districtId: 'west-champaran',
    districtName: 'West Champaran',
    coordinates: { lat: 27.3167, lng: 84.1833 },
    image: '/assets/images/valmiki_forest_champaran_1789938522457.jpg',
    imageCaption: 'Moist deciduous sal canopy and foothills along the Gandak River at Valmiki Nagar',
    intro: 'Located in the northwestern tip of Bihar against the border of Nepal, Valmiki is Bihar’s sole national park and premier Project Tiger sanctuary. Spanning nearly 900 square kilometers, it protects primeval moist sal forests, riverine grasslands, and the snow-fed waters of the Gandak River.',
    landscapeType: 'Sub-Himalayan Terai-Bhabhar Sal Forest & Riparian Grassland',
    whyItMatters: 'Contiguous with Nepal’s Royal Chitwan National Park and Parsa Wildlife Sanctuary, forming one of Asia’s most vital transboundary biodiversity corridors for large carnivores and endangered megafauna.',
    historyNarrative: 'Formerly the royal hunting grounds of the Bettiah Raj estate, the area was declared a Wildlife Sanctuary in 1978, a National Park in 1990, and became India’s 18th Project Tiger Reserve in 1990. Ancient folklore associates the forest with Maharshi Valmiki’s hermitage where the Ramayana was composed.',
    wildlifeAndEcology: 'Home to over 54 wild Bengal tigers (as per National Tiger Conservation Authority census), Indian leopard, one-horned rhinoceros (straying from Chitwan), wild gaur (bison), barking deer, sloth bear, and over 250 species of birds including the endangered Great Indian Hornbill.',
    thingsToSee: [
      'Valmiki Nagar Gandak Barrage and Triveni Sangam',
      'Dense Sal canopy drives through Kotraha and Madanpur ranges',
      'Kaleshwar Temple and ancient hermitage site',
      'Watchtowers overlooking the snowy foothills of the Nepal Himalayas'
    ],
    conservationStatus: 'National Park (1990) & Project Tiger Reserve (1990) • Protected by NTCA & Bihar Forest Dept',
    sources: [
      'National Tiger Conservation Authority (NTCA): Status of Tigers in India Report',
      'Department of Environment, Forest & Climate Change, Government of Bihar: Valmiki Tiger Reserve Management Plan',
      'Wildlife Institute of India (WII): Terai Arc Landscape Conservation Strategy'
    ],
    isFeatured: true,
    featuredRole: 'lead'
  },
  {
    id: 'vikramshila-dolphin-sanctuary',
    name: 'Vikramshila Gangetic Dolphin Sanctuary',
    hindiName: 'विक्रमशिला गंगा डॉल्फिन अभयारण्य',
    tagline: 'Asia’s only protected river sanctuary for the endangered Gangetic River Dolphin',
    category: 'Rivers & River Landscapes',
    districtId: 'bhagalpur',
    districtName: 'Bhagalpur',
    coordinates: { lat: 25.2635, lng: 87.2152 },
    image: '/assets/images/vikramshila_ruins_bhagalpur_1789937817668.jpg',
    imageCaption: 'The wide, meandering course of the sacred Ganga River near Kahalgaon and Sultanganj',
    intro: 'Designated in 1991, this sanctuary spans a 60-kilometer stretch of the perennial Ganga River from Sultanganj to Kahalgaon in Bhagalpur district. It is Asia’s only protected river reserve dedicated specifically to the conservation of India’s National Aquatic Animal, the Gangetic River Dolphin (Platanista gangetica), locally known as Soons.',
    landscapeType: 'Deep Riverine Alluvial Aquatic Ecosystem & Braided Sandbars',
    whyItMatters: 'Serves as the primary gene pool and reproductive sanctuary for nearly 500 blind Gangetic dolphins, which rely on echolocation to hunt in the silty, nutrient-rich waters of the middle Ganga.',
    historyNarrative: 'The river stretch was historically home to ancient maritime trading ports of the Anga kingdom and later the riverine gateway to Vikramshila Mahavihara. In 1991, under the Wildlife Protection Act, it was notified to stop gillnet poaching and preserve riverine ecology.',
    wildlifeAndEcology: 'Gangetic River Dolphin (Platanista gangetica, IUCN Endangered), Indian smooth-coated otter, gharial, mugger crocodile, and 135 species of river birds including the Indian skimmer, black-bellied tern, and greater adjutant stork.',
    thingsToSee: [
      'Boat safaris from Kahalgaon or Barari Ghat to spot surfacing dolphins',
      'Kahalgaon Granite River Islands (Bateshwar Sthan and rock sculptures)',
      'Sultanganj sacred north-flowing Ganga (Uttar-Vahini) and Ajgaibinath Temple',
      'Nearby excavation ruins of ancient Vikramshila University'
    ],
    conservationStatus: 'Protected River Sanctuary (Wildlife Protection Act 1972, Notified 1991)',
    sources: [
      'Zoological Survey of India (ZSI): Gangetic Dolphin Population Ecology in Bihar',
      'Ministry of Environment, Forest and Climate Change: National Aquatic Animal Conservation Plan',
      'Bhagalpur Forest Division Sanctuary Records'
    ],
    isFeatured: true,
    featuredRole: 'supporting'
  },
  {
    id: 'barabar-caves-geological',
    name: 'Barabar & Nagarjuni Granite Caves',
    hindiName: 'बराबर एवं नागार्जुनी शैलकृत गुफाएं',
    tagline: 'The world’s oldest surviving monolithic rock-cut sanctuaries (3rd Century BCE)',
    category: 'Caves & Geological Sites',
    districtId: 'jehanabad',
    districtName: 'Jehanabad',
    coordinates: { lat: 25.0069, lng: 85.0628 },
    image: '/assets/images/barabar_caves_bihar_1789937792685.jpg',
    imageCaption: 'Monolithic granite boulder chambers with mirror-polished interiors from the reign of Ashoka',
    intro: 'Rising dramatically from the flat alluvial plain of Jehanabad, the isolated Barabar and Nagarjuni hills consist of massive Precambrian granite monoliths. Inside these sheer volcanic rocks, 3rd-century BCE Mauryan craftsmen carved out seven subterranean cave sanctuaries with laser-like glass polish and acoustic resonance.',
    landscapeType: 'Precambrian Granite Monoliths & Semi-Arid Inselberg Outcrops',
    whyItMatters: 'The undisputed fountainhead of Indian rock-cut architecture, predating Ajanta, Ellora, and Karle by centuries. The mirrored interior walls produce an acoustic reverberation lasting several seconds.',
    historyNarrative: 'Inscribed with royal dedicatory edicts of Mauryan Emperor Ashoka (regnal year 12 and 19) and his grandson Dasharatha, dedicating these sanctuaries to the ancient ascetic Ajivika sect founded by Makkhali Gosala. Immortalized as the "Marabar Caves" in E.M. Forster’s classic novel *A Passage to India*.',
    cultureAndTraditions: 'Dedicated to Ajivika hermits who practiced severe contemplation. The Sudama cave and Lomas Rishi cave feature chaitya horseshoe arches imitating earlier wooden architecture.',
    thingsToSee: [
      'Lomas Rishi Cave with its sculpted elephant frieze',
      'Sudama Cave with its circular vaulted inner sanctum',
      'Karan Chaupar Cave featuring Ashoka’s 19th regnal year Brahmi inscription',
      'Siddheshwar Nath Shiva temple atop the highest granite crest'
    ],
    associatedHeritageId: 'barabar-caves',
    conservationStatus: 'Archaeological Survey of India (ASI) Protected Monument of National Importance',
    sources: [
      'Archaeological Survey of India (ASI): Reports of Cunningham and Beglar (Vol. VIII)',
      'E. Hultzsch: Inscriptions of Asoka (Corpus Inscriptionum Indicarum)',
      'Arthur L. Basham: History and Doctrines of the Ajivikas (Luzac & Co.)'
    ],
    isFeatured: true,
    featuredRole: 'supporting'
  },
  {
    id: 'kanwar-lake-kabar-taal',
    name: 'Kabar Taal / Kanwar Lake Ramsar Wetland',
    hindiName: 'काबर ताल / कंवर झील रामसर आर्द्रभूमि',
    tagline: 'Asia’s largest freshwater oxbow lake and Bihar’s first Ramsar site',
    category: 'Wetlands & Lakes',
    districtId: 'begusarai',
    districtName: 'Begusarai',
    coordinates: { lat: 25.6265, lng: 86.1436 },
    image: '/assets/images/begusarai_kanwar_lake_1789938536561.jpg',
    imageCaption: 'Expansive freshwater oxbow wetlands, floating macrophytes, and water bird refuge in Begusarai',
    intro: 'Spanning approximately 67 square kilometers in Begusarai district, Kabar Taal is a massive freshwater oxbow lake formed thousands of years ago when the meandering Gandak River shifted its course across the North Bihar plain. In July 2020, it was designated as Bihar’s first wetland of international importance under the Ramsar Convention.',
    landscapeType: 'Freshwater Oxbow Lake, Marshlands & Alluvial Floodplain Wetland',
    whyItMatters: 'A critical refuge on the Central Asian Flyway. During the winter months, over 58 species of migratory waterfowl fly over the Himalayas from Siberia, Russia, and Central Asia to forage in its nutrient-dense waters.',
    wildlifeAndEcology: 'Hosts over 106 resident bird species and 58 migratory species including the critically endangered White-rumped Vulture, Indian Vulture, Greater Spotted Eagle, and Baer’s Pochard. Rich in indigenous aquatic plants, lotus roots, and freshwater fish (Singhi, Magur, Rohu).',
    thingsToSee: [
      'Jaimangla Garh temple mound situated on a wooded island within the lake',
      'Sunrise birdwatching boats through the water lily channels',
      'Vast panoramic views of the water body from the northern embankment',
      'Traditional local fishing craft using woven bamboo gear'
    ],
    conservationStatus: 'Ramsar Site No. 2436 (Designated 21 July 2020) • Wildlife Sanctuary (1989)',
    sources: [
      'Ramsar Sites Information Service: Kabar Taal Wetland (Site No. 2436)',
      'Department of Environment, Forest & Climate Change, Bihar: Kabar Taal Integrated Management Plan',
      'Bombay Natural History Society (BNHS): Wetland Bird Census of Kabar Taal'
    ],
    isFeatured: true,
    featuredRole: 'panoramic'
  },
  {
    id: 'bodh-gaya-landscape',
    name: 'Bodh Gaya & The Sacred Falgu Valley',
    hindiName: 'बोधगया एवं पवित्र फल्गु घाटी',
    tagline: 'The supreme cradle of world Buddhism and the sacred Peepal tree',
    category: 'Sacred Landscapes',
    districtId: 'gaya',
    districtName: 'Gaya',
    coordinates: { lat: 24.6959, lng: 84.9914 },
    image: '/assets/images/mahabodhi_temple_gaya_1789937719331.jpg',
    imageCaption: 'The 50-meter pyramidal spire of the Mahabodhi Temple and the sacred Bodhi Tree',
    intro: 'Nestled along the sandy banks of the sacred Falgu (Niranjana) River, Bodh Gaya is the most venerated spiritual landscape in the Buddhist world. Beneath the sacred Bodhi Tree (Ficus religiosa), Siddhartha Gautama sat in deep meditation and attained supreme enlightenment in the 6th century BCE.',
    landscapeType: 'Riparian Alluvial Sand Valley & Sacred Grove Landscape',
    whyItMatters: 'Inscribed as a UNESCO World Heritage Site in 2002. Contains the Mahabodhi Temple, the diamond throne (Vajrasana) erected by Emperor Ashoka, and the direct living descendant of the original Bodhi Tree.',
    historyNarrative: 'After six years of rigorous penance in the Pragbodhi (Dungeshwari) caves across the river, Prince Siddhartha accepted a bowl of milk-rice from village maiden Sujata and sat beneath the peepal tree, vowing not to rise until truth was revealed. Ashoka visited in 260 BCE and erected the original shrine and stone railings.',
    cultureAndTraditions: 'Pilgrims from Sri Lanka, Thailand, Myanmar, Japan, Bhutan, and Tibet circumambulate the temple daily, filling the air with multilingual chants, butter lamps, and marigold offerings.',
    thingsToSee: [
      'The Sacred Bodhi Tree and the stone Diamond Throne (Vajrasana)',
      'The 50-meter pyramidal Mahabodhi Temple (UNESCO World Heritage Site)',
      'The Lotus Pond (Muchalinda Lake) where the Serpent King sheltered the Buddha',
      'Sujata Kuti and Stupa across the sandy bed of the Niranjana River'
    ],
    associatedPeopleIds: ['gautama-buddha', 'emperor-ashoka'],
    associatedHeritageId: 'mahabodhi-temple',
    sacredTradition: 'Buddhist',
    conservationStatus: 'UNESCO World Heritage Site (Ref 1056, Inscribed 2002)',
    sources: [
      'UNESCO World Heritage Centre: Mahabodhi Temple Complex at Bodh Gaya',
      'Alexander Cunningham: Mahabodhi, or the Great Buddhist Temple at Bodh-Gaya (1892)',
      'Bodhgaya Temple Management Committee (BTMC) Official Archives'
    ]
  },
  {
    id: 'rajgir-quartzite-hills',
    name: 'Rajgir Quartzite Hills & Hot Springs',
    hindiName: 'राजगीर की पंच पहाड़ियां एवं उष्ण जलकुंड',
    tagline: 'Ancient Rajagriha enclosed by seven weathered quartzite peaks and healing thermal springs',
    category: 'Hills & Rock Landscapes',
    districtId: 'nalanda',
    districtName: 'Nalanda',
    coordinates: { lat: 25.0267, lng: 85.4217 },
    image: '/assets/images/nalanda_university_ruins_1789937702654.jpg',
    imageCaption: 'The ancient quartzite ridge and valley that formed the natural fortress of Magadha',
    intro: 'Rajgir (ancient Rajagriha, "Home of Royalty") is situated in a dramatic natural amphitheater encircled by five to seven rugged quartzite hills: Ratnagiri, Vipulagiri, Vaibhargiri, Sonagiri, Udayagiri, and Gridhrakuta. Its unique geological fault lines produce mineral-rich natural thermal springs (Brahmakund).',
    landscapeType: 'Precambrian Folded Quartzite Ridge Amphitheater & Geothermal Springs',
    whyItMatters: 'The first imperial capital of the Magadhan Empire under Bimbisara and Ajatashatru. The natural mountain walls formed an impregnable fortress known as Giri-Vraja, fortified with a 40-kilometer Cyclopean dry-stone wall.',
    historyNarrative: 'Lord Buddha spent many rainy season retreats on Griddhakuta (Vulture’s Peak), preaching the Lotus Sutra and Heart Sutra. Lord Mahavira spent fourteen rainy seasons here. The first Buddhist Council was convened immediately after Buddha’s Parinirvana in the Saptaparni Cave atop Vaibhargiri Hill.',
    cultureAndTraditions: 'A tri-spiritual landscape revered by Buddhists, Jains (who have temples on all hilltops), and Hindus (who bathe in the sulfurous hot springs during the triennial Malmas Mela).',
    thingsToSee: [
      'Gridhrakuta (Vulture’s Peak) and the Japanese Peace Pagoda (Vishwa Shanti Stupa)',
      'Cyclopean Stone Wall (one of the oldest stone structures in India)',
      'Saptaparni Cave where the First Buddhist Council codified the Tripitaka',
      'Bimbisara’s Jail and the hot mineral springs of Brahmakund',
      'Pant (Rajgir) Wildlife Sanctuary with its dry deciduous forest'
    ],
    associatedPeopleIds: ['gautama-buddha', 'lord-mahavira'],
    associatedHeritageId: 'rajgir-ancient-ruins',
    sacredTradition: 'Multi-faith',
    conservationStatus: 'ASI Protected Monument & Pant Wildlife Sanctuary (1978)',
    sources: [
      'Archaeological Survey of India: Excavations at Rajgir (Memoirs of the ASI No. 58)',
      'D.C. Sircar: Inscriptions of Asoka and Early Buddhist Geographies',
      'Nalanda District Gazetteer, Government of Bihar'
    ]
  },
  {
    id: 'nalanda-monastic-landscape',
    name: 'Nalanda Mahavihara Ancient Ruins',
    hindiName: 'नालंदा महाविहार प्राचीन अवशेष',
    tagline: 'The ancient world’s greatest residential monastic university',
    category: 'Archaeological Landscapes',
    districtId: 'nalanda',
    districtName: 'Nalanda',
    coordinates: { lat: 25.1357, lng: 85.4439 },
    image: '/assets/images/nalanda_university_ruins_1789937702654.jpg',
    imageCaption: 'The monumental baked-brick votive stupas, monastic courtyards, and chaityas of Nalanda',
    intro: 'Set amid the fertile agricultural plains of central Bihar, the excavated ruins of Nalanda Mahavihara represent the world’s most celebrated ancient residential university. From the 5th to the 13th century CE, it flourished as a premier center of higher learning, housing 10,000 Buddhist scholar-monks and 2,000 teachers from across Asia.',
    landscapeType: 'Baked-Brick Archaeological Monumental Plain & Monastic Campus',
    whyItMatters: 'Inscribed as a UNESCO World Heritage Site in 2016. Its sophisticated architecture includes 11 massive monasteries, 6 monumental temples, meditation cells, drainage networks, and lecture halls.',
    historyNarrative: 'Patronized by the Gupta emperors, King Harshavardhana of Kannauj, and the Pala emperors of Bengal and Bihar. Visited in the 7th century CE by Chinese pilgrim-scholars Xuanzang (Hiuen Tsang) and Yijing, who left detailed eyewitness accounts of its multi-story libraries (Dharmaganja).',
    cultureAndTraditions: 'Pioneered formal curricula covering logic (Hetuvidya), Sanskrit grammar, astronomy, medicine (Ayurveda), metaphysics, and Buddhist philosophy that shaped Tibetan, Chinese, and East Asian thought.',
    thingsToSee: [
      'Temple No. 3: The monumental multi-tiered stupa with fine stucco sculptures',
      'Monastery Site 1: The great residential courtyard with monks’ cells and well',
      'Nalanda Archaeological Museum housing bronze icons and inscribed seals',
      'Xuanzang Memorial Hall built in memory of the 7th-century Chinese pilgrim'
    ],
    associatedPeopleIds: ['aryabhata', 'gautama-buddha'],
    associatedHeritageId: 'nalanda-mahavihara',
    conservationStatus: 'UNESCO World Heritage Site (Ref 1502, Inscribed 2016)',
    sources: [
      'UNESCO World Heritage Centre: Archaeological Site of Nalanda Mahavihara',
      'Xuanzang: The Great Tang Dynasty Record of the Western Regions (Trans. Li Rongxi)',
      'Archaeological Survey of India (ASI): Excavations at Nalanda (1915–1937)'
    ]
  },
  {
    id: 'vaishali-republican-landscape',
    name: 'Vaishali Ancient Republic & Relic Stupa',
    hindiName: 'वैशाली: विश्व का प्रथम गणराज्य एवं अस्थि स्तूप',
    tagline: 'Cradle of early democratic confederacy, Mahavira’s birthplace, and the Buddha’s last sermon',
    category: 'Archaeological Landscapes',
    districtId: 'vaishali',
    districtName: 'Vaishali',
    coordinates: { lat: 25.9877, lng: 85.1278 },
    image: '/assets/images/ashokan_pillar_vaishali_1789937849903.jpg',
    imageCaption: 'The monolithic polished Ashokan Lion Pillar overlooking the brick stupa complex at Kolhua',
    intro: 'Located in the fertile Gandak river basin north of Patna, Vaishali was the capital of the ancient Vajji confederacy—the world’s earliest documented participatory republic. Here, elected representatives met in the Santhagara assembly to debate state policies by majority consensus.',
    landscapeType: 'Riparian Alluvial Plains, Ancient Mounds & Sacred Ponds',
    whyItMatters: 'Birthplace of Lord Mahavira (at Kundagrama). In Kolhua stands a complete, uninjured monolithic polished chunar sandstone pillar erected by Ashoka, topped with a solitary lion facing north.',
    historyNarrative: 'Gautama Buddha visited Vaishali repeatedly, admitted the first Buddhist nuns into the Sangha upon the plea of Mahapajapati Gotami, and received the gift of mango groves from the royal courtesan Amrapali. The Buddha Relic Stupa excavated here in 1958 yielded a soapstone casket containing the genuine bone relics of the Buddha.',
    cultureAndTraditions: 'Revered in Buddhist texts for the miracle of the monkey offering a bowl of honey to the Buddha; sacred in Jain traditions as the homeland of Tirthankara Mahavira.',
    thingsToSee: [
      'Kolhua Ashokan Pillar: Intact polished column crowned with a single lion capital',
      'Ananda Stupa and the brick votive chaityas surrounding the pillar',
      'Buddha Relic Stupa where the sacred bone relics were excavated',
      'Abhisheka Pushkarni (Coronation Tank) where elected Licchavi chiefs were consecrated',
      'Raja Vishal Ka Garh: The ancient ramparts of the republican parliament'
    ],
    associatedPeopleIds: ['lord-mahavira', 'gautama-buddha', 'emperor-ashoka', 'amrapali'],
    associatedHeritageId: 'vaishali-kolhua',
    sacredTradition: 'Multi-faith',
    conservationStatus: 'ASI Protected Monument of National Importance',
    sources: [
      'A.S. Altekar: Report on Kumrahar and Vaisali Excavations (K.P. Jayaswal Research Institute)',
      'Archaeological Survey of India: Excavations at Vaisali (1958–1962)',
      'B.C. Law: Some Jaina Canonical Sutras on Vaisali'
    ]
  },
  {
    id: 'sasaram-rohtas-landscape',
    name: 'Sasaram & The Kaimur Escarpment',
    hindiName: 'सासाराम एवं कैमूर शैलमाला',
    tagline: 'Where the Indo-Gangetic plain meets the ancient sandstone plateau',
    category: 'Hills & Rock Landscapes',
    districtId: 'rohtas',
    districtName: 'Rohtas',
    coordinates: { lat: 24.9525, lng: 84.0152 },
    image: '/assets/images/sher_shah_suri_tomb_1789937780605.jpg',
    imageCaption: 'Sher Shah Suri’s monumental floating octagonal sandstone mausoleum surrounded by water',
    intro: 'Sasaram sits at the dramatic transition zone where the alluvial South Bihar plain collides with the rugged sandstone bluffs of the Kaimur Plateau. It is celebrated worldwide for the floating tomb of Sher Shah Suri and the massive ramparts of Rohtasgarh Fort perched 1,500 feet above the Son River valley.',
    landscapeType: 'Vindhyan Sandstone Escarpment, Plateau Waterfalls & Valley Basin',
    whyItMatters: 'Features Sher Shah Suri’s tomb, an architectural masterpiece of Indo-Islamic design rising 150 feet high from the center of an artificial square lake. Nearby Rohtasgarh is one of India’s most expansive hill fortresses.',
    historyNarrative: 'From this strategic stronghold, Sher Shah Suri rose to overthrow the Mughal Emperor Humayun, built the Grand Trunk Road, established the silver Rupiya, and commissioned his tomb, designed by architect Aliwal Khan between 1540 and 1545.',
    thingsToSee: [
      'Sher Shah Suri’s Tomb: Octagonal floating red sandstone mausoleum',
      'Tomb of Hasan Khan Suri (Sher Shah’s father, the "Sukha Maqbara")',
      'Rohtasgarh Fort with its 45-km fortified perimeter atop the plateau',
      'Dhua Kund and Manjhar Kund scenic waterfalls during monsoon'
    ],
    associatedPeopleIds: ['sher-shah-suri'],
    associatedHeritageId: 'sher-shah-suri-tomb',
    conservationStatus: 'ASI Protected Monument of National Importance (Tentative UNESCO List)',
    sources: [
      'Archaeological Survey of India (ASI): Monument Registry No. N-BR-57',
      'Percy Brown: Indian Architecture (Islamic Period)',
      'Rohtas District Gazetteer, Government of Bihar'
    ]
  },
  {
    id: 'kesaria-stupa-landscape',
    name: 'Kesaria Buddhist Stupa',
    hindiName: 'केसरिया बौद्ध स्तूप',
    tagline: 'The world’s tallest ancient brick stupa rising above the Gandak plains',
    category: 'Archaeological Landscapes',
    districtId: 'east-champaran',
    districtName: 'East Champaran',
    coordinates: { lat: 26.3533, lng: 84.8736 },
    image: '/assets/images/kesaria_stupa_champaran_1789937806799.jpg',
    imageCaption: 'The multi-tiered circular brick stupa rising 104 feet above the Champaran agricultural plain',
    intro: 'Rising 104 feet above the quiet agricultural plain of East Champaran, Kesaria is one of the tallest ancient stupas in the world—standing even taller than the celebrated Borobudur stupa in Java. Excavated by the ASI in 1998, it features multiple circular polygonal terraces holding terracotta Buddha niches.',
    landscapeType: 'Alluvial River Plain & Ancient Brick Terraced Tumulus',
    whyItMatters: 'Originally discovered in 1814 by Colonel Mackenzie and confirmed by Alexander Cunningham in 1861. The current monumental structure dates to the Pala period (8th century CE), built over an earlier Maurya-Gupta foundation.',
    historyNarrative: 'Identified as the site where Lord Buddha, on his final journey to Kushinagar, bade farewell to the sorrowing citizens of Vaishali, gifting them his alms bowl (begging bowl) as an eternal memorial.',
    thingsToSee: [
      'Multi-tiered polygonal brick terraces with life-sized stucco Buddha images in niches',
      'Vast panoramic views of the Champaran agricultural flatlands from the stupa base',
      'Archaeological excavation trenches revealing earlier Mauryan brick layers'
    ],
    associatedPeopleIds: ['gautama-buddha'],
    associatedHeritageId: 'kesaria-stupa',
    conservationStatus: 'Archaeological Survey of India (ASI) Protected Monument of National Importance',
    sources: [
      'Archaeological Survey of India (ASI): Excavation Reports at Kesaria (1998–2004)',
      'Alexander Cunningham: Archaeological Survey of India Report for the Year 1861–62',
      'East Champaran District Gazetteer'
    ]
  },
  {
    id: 'vikramshila-ancient-monastery',
    name: 'Vikramshila University Ruins & Ganga Bluffs',
    hindiName: 'विक्रमशिला महाविहार एवं गंगा कगार',
    tagline: 'Pala-era premier center of Tantric Buddhism and international scholarship',
    category: 'Archaeological Landscapes',
    districtId: 'bhagalpur',
    districtName: 'Bhagalpur',
    coordinates: { lat: 25.3283, lng: 87.2883 },
    image: '/assets/images/vikramshila_ruins_bhagalpur_1789937817668.jpg',
    imageCaption: 'The cross-shaped central stupa with terracotta plaques overlooking the Ganga river plain',
    intro: 'Perched on the elevated bluffs above the Ganga at Antichak in Bhagalpur district, Vikramshila was founded in the late 8th century CE by Pala Emperor Dharmapala. It rose to become ancient India’s foremost academic rival to Nalanda, renowned especially for Tantric philosophy and logic.',
    landscapeType: 'Elevated Alluvial River Terrace & Terracotta Cruciform Stupa',
    whyItMatters: 'Produced legendary scholars including Atisa Dipankara Shrijnana, who journeyed over the Himalayas to reform Buddhism in Tibet. Its central monument is a colossal cruciform brick stupa adorned with fine terracotta plaques.',
    historyNarrative: 'Governed by a council of eminent scholars headed by gate-keeper scholars (Dwara Panditas) who examined all incoming scholars before granting admission. Sacked in 1193 CE, its ruins were unearthed through systematic ASI excavations between 1972 and 1982.',
    thingsToSee: [
      'Colossal cruciform central stupa with two-tiered circumambulatory terraces',
      'Terracotta relief plaques depicting deities, ascetics, animals, and daily life',
      'Monastery cells with stone pillar bases surrounding a massive courtyard',
      'Vikramshila Archaeological Museum housing excavated Pala bronzes'
    ],
    associatedHeritageId: 'vikramshila-mahavihara',
    conservationStatus: 'ASI Protected Monument of National Importance',
    sources: [
      'Archaeological Survey of India: Excavations at Vikramshila (Antichak), 1972–1982',
      'Alaka Chattopadhyaya: Atisa and Tibet (Motilal Banarsidass)',
      'Bhagalpur District Gazetteer, Government of Bihar'
    ]
  },
  {
    id: 'mundeshwari-kaimur-hills',
    name: 'Mundeshwari Hill Temple & Forest Ridge',
    hindiName: 'मुंडेश्वरी देवी पहाड़ी मंदिर',
    tagline: 'India’s oldest surviving functional Hindu stone temple (108 CE)',
    category: 'Sacred Landscapes',
    districtId: 'kaimur',
    districtName: 'Kaimur',
    coordinates: { lat: 25.0315, lng: 83.5852 },
    image: '/assets/images/mundeshwari_temple_kaimur_1789937882692.jpg',
    imageCaption: 'Octagonal stone temple atop the 600-foot forested crest of Pavra Hill in Kaimur',
    intro: 'Perched at an elevation of 608 feet atop the isolated Pavra Hill in Kaimur district, Maa Mundeshwari Temple is verified by the Archaeological Survey of India as the oldest functional stone temple in India, with an unbroken tradition of worship dating to at least 108 CE.',
    landscapeType: 'Forested Isolated Vindhyan Hilltop & Ancient Stone Architecture',
    whyItMatters: 'Features an extremely rare octagonal plan built entirely of chiselled sandstone without mortar. Inscriptions in Brahmi script dated to the Gupta and Kushan eras confirm its extraordinary antiquity.',
    historyNarrative: 'An inscription of 108 CE recovered from the site mentions the reign of Mahasamanta Maharaja Udayasena. The sanctum enshrines an ancient four-faced stone Shiva Lingam and a revered stone murti of Goddess Mundeshwari riding a buffalo.',
    cultureAndTraditions: 'Celebrated for an ancient non-violent bloodless ritual: a live goat is brought before the sanctum, mantred sacred rice is sprinkled upon it until the goat falls unconscious, and after prayer the goat awakens unharmed and is released.',
    thingsToSee: [
      'Unique octagonal carved sandstone temple walls with nagara shikhara elements',
      'Ancient four-faced stone Mukhalingam and Maheshamardini deity',
      'Scenic panoramic vistas of the Kaimur hills and forests from Pavra hill crest',
      'Archaeological stone sculpture open-air display surrounding the temple'
    ],
    associatedHeritageId: 'mundeshwari-temple',
    sacredTradition: 'Hindu',
    conservationStatus: 'ASI Protected Monument of National Importance',
    sources: [
      'Archaeological Survey of India (ASI): Special Monograph on Mundeshwari Temple (2008)',
      'Epigraphia Indica, Vol. IX: Inscriptions of Mundeshwari',
      'Kaimur District Gazetteer, Government of Bihar'
    ]
  },
  {
    id: 'gehlaur-mountain-pass',
    name: 'Gehlaur Mountain Pass & Ridge',
    hindiName: 'गेहलौर घाटी एवं दशरथ मांझी मार्ग',
    tagline: 'The 360-foot mountain road carved single-handedly through solid quartzite stone',
    category: 'Hills & Rock Landscapes',
    districtId: 'gaya',
    districtName: 'Gaya',
    coordinates: { lat: 24.8692, lng: 85.1952 },
    image: '/assets/images/barabar_caves_bihar_1789937792685.jpg',
    imageCaption: 'The jagged quartzite ridge of Gehlaur and the 30-foot wide pass carved with hammer and chisel',
    intro: 'Gehlaur is a rugged quartzite mountain ridge near Wazirganj in Gaya district. Here, in an unparalleled demonstration of human love and indomitable resolve, a landless laborer named Dashrath Manjhi carved a 360-foot-long, 30-foot-wide road through the solid stone mountain using only a hammer and chisel over 22 years (1960–1982).',
    landscapeType: 'Weathered Quartzite Ridge & Arid Magadh Scrubland',
    whyItMatters: 'A monument to selfless human resolve. The pass reduced the travel distance between Atri and Wazirganj from 55 kilometers to just 15 kilometers, saving thousands of rural lives by providing timely access to hospitals.',
    historyNarrative: 'When Manjhi’s wife Falguni Devi slipped on the treacherous rocks and died due to lack of timely medical care, Manjhi resolved that no one else in his village would suffer. Working from dawn till dusk for over two decades, he pierced the mountain ridge that divided his community.',
    thingsToSee: [
      'The dramatic 360-foot carved mountain cleft (Dashrath Manjhi Marg)',
      'Dashrath Manjhi Memorial and Samadhi Sthal at Gehlaur',
      'Panoramic views of the rugged rocky hills of Magadha',
      'The original simple tools preserved in local memorial archives'
    ],
    associatedPeopleIds: ['dashrath-manjhi'],
    sources: [
      'Government of Bihar Official Memorial Gazette (2007)',
      'Gaya District Administration: Gehlaur Tourism and Rural Development Documentation',
      'Geological Survey of India (GSI): Geomorphology of Gaya Ridge Systems'
    ]
  },
  {
    id: 'sonepur-confluence',
    name: 'Sonepur & The Ganga-Gandak Confluence',
    hindiName: 'सोनपुर एवं गंगा-गंडक संगम (हरिहर क्षेत्र)',
    tagline: 'The sacred river confluence hosting Asia’s most historic rural cattle and cultural fair',
    category: 'Rivers & River Landscapes',
    districtId: 'saran',
    districtName: 'Saran',
    coordinates: { lat: 25.6983, lng: 85.1833 },
    image: '/assets/images/sonepur_cattle_fair_1789937950038.jpg',
    imageCaption: 'The sacred confluence of the snow-fed Gandak and holy Ganga at Harihar Kshetra, Sonepur',
    intro: 'Situated in Saran district directly across the Ganga from Patna, Sonepur marks the sacred geographic confluence (Sangam) of the Gandak and Ganga rivers. Celebrated as Harihar Kshetra, it hosts the world-famous Sonepur Mela on Kartika Purnima (November), Asia’s oldest and largest traditional cattle and cultural congregation.',
    landscapeType: 'Major River Confluence, Riparian Sandy Flats & Festive Grounds',
    whyItMatters: 'Historically connected to ancient military elephant trades patronized by Chandragupta Maurya and Emperor Akbar. The Harihar Nath temple at the confluence unites Shiva (Har) and Vishnu (Hari) in a single sanctum.',
    historyNarrative: 'According to Bhagavata mythology, this was the site of the prehistoric battle between the elephant king Gajendra and the crocodile (Grah), ended by Vishnu’s divine intervention. During the British era, horse traders journeyed here from Central Asia and Arabia.',
    cultureAndTraditions: 'A vibrant living cultural confluence where hundreds of thousands of pilgrims take a holy dip at dawn, followed by the buying and selling of cattle, horses, birds, and folk handicrafts.',
    thingsToSee: [
      'Harihar Nath Mahadev Temple at the confluence',
      'The vast riverfront bathing ghats during Kartika Purnima',
      'Traditional horse and cattle demonstration rings',
      'Folk music and theater pavilions during the annual month-long fair'
    ],
    sacredTradition: 'Hindu',
    sources: [
      'Saran District Gazetteer, Government of Bihar',
      'Bihar State Tourism Development Corporation (BSTDC): Sonepur Mela Documentation',
      'Imperial Gazetteer of India: Sonpur Fair'
    ]
  },
  {
    id: 'makhana-mithila-wetlands',
    name: 'Mithila Makhana Wetlands & Aquatic Plains',
    hindiName: 'मिथिला मखाना आर्द्रभूमि एवं कृषि क्षेत्र',
    tagline: 'The world capital of aquatic fox nut cultivation and sacred village ponds',
    category: 'Plains & Agricultural Landscapes',
    districtId: 'madhubani',
    districtName: 'Madhubani',
    coordinates: { lat: 26.3536, lng: 86.0734 },
    image: '/assets/images/madhubani_mithila_painting_1789937745005.jpg',
    imageCaption: 'Traditional lotus and makhana (Euryale ferox) wetland ponds across the Mithila plains',
    intro: 'The landscape of Mithila (Madhubani, Darbhanga, and Sitamarhi) is defined by thousands of interconnected community ponds (Pokharis), oxbow waters, and perennial water-logged chaurs. Over 85% of the world’s supply of Makhana (Gorgon nut / Fox nut, Euryale ferox) is harvested from these shallow ponds by traditional Mallah farming communities.',
    landscapeType: 'Freshwater Aquatic Wetlands, Village Pokharis & Alluvial Plains',
    whyItMatters: 'Mithila Makhana holds an official Geographical Indication (GI) tag. The cultivation is a remarkable zero-chemical agro-ecological system where farmers dive to the pond beds to hand-harvest thorny seeds, which are sun-dried and manually popped over clay wood-fires.',
    cultureAndTraditions: 'Makhana is sacred to Mithila culture: no wedding, Kojagara festival, or puja is complete without offering makhana, betel leaf (paan), and fish (machh).',
    thingsToSee: [
      'Traditional makhana harvesting demonstrations in rural Madhubani ponds',
      'Makhana seed drying courtyards and clay-pot popping workshops',
      'Traditional Mithila painting villages of Jitwarpur and Ranti',
      'Historic royal water tanks of Darbhanga Raj'
    ],
    associatedPeopleIds: ['gargi-vachaknavi', 'mahakavi-vidyapati', 'dulari-devi'],
    sources: [
      'Geographical Indications Registry of India: GI Tag No. 696 (Mithila Makhana)',
      'Indian Council of Agricultural Research (ICAR) - Research Centre for Makhana, Darbhanga',
      'Madhubani District Gazetteer'
    ]
  },
  {
    id: 'munger-kashtaharini-ganga',
    name: 'Munger Fort & Kashtaharini Ghat',
    hindiName: 'मुंगेर का ऐतिहासिक दुर्ग एवं कष्टहरिणी गंगा घाट',
    tagline: 'Where the Ganga sweeps northwards along ancient stone ramparts and natural hot springs',
    category: 'Rivers & River Landscapes',
    districtId: 'munger',
    districtName: 'Munger',
    coordinates: { lat: 25.3789, lng: 86.4735 },
    image: '/assets/images/munger_fort_ganga_1789938550689.jpg',
    imageCaption: 'The ancient stone bastions of Munger Fort directly fronting the sacred Ganga River',
    intro: 'Built on a rocky promontory overlooking a strategic northward bend (Uttar-Vahini) of the Ganga River, Munger Fort spans 222 acres. In antiquity, the river served as a formidable moat protecting this fortress, where the Bengal Nawabs, Mughals, and British East India Company battled for control of eastern India.',
    landscapeType: 'Rocky Riverine Promontory & Riparian Stone Fortification',
    whyItMatters: 'At Kashtaharini Ghat, the Ganga turns north, which Hindu tradition regards as intensely sacred. Here, sage Valmiki is said to have rested, and Lord Rama bathed on his return from Mithila.',
    historyNarrative: 'Nawab Mir Qasim made Munger his capital in 1762, establishing a renowned gun-manufacturing industry that still exists in artisanal forms. Nearby in the Kharagpur hills lies the Bhimbandh Wildlife Sanctuary, famous for natural hot sulfur springs.',
    thingsToSee: [
      'Kashtaharini Ghat on the north-flowing Ganga',
      'Munger Fort ancient stone ramparts, moat, and Karan Chaura mound',
      'Bihar School of Yoga (Ganga Darshan), globally acclaimed yogic academy',
      'Bhimbandh Wildlife Sanctuary hot thermal springs'
    ],
    associatedHeritageId: 'munger-fort',
    sources: [
      'Munger District Gazetteer, Government of Bihar',
      'Archaeological Survey of India: Ancient Monuments of Munger',
      'Imperial Gazetteer of India: Monghyr Town and Fort'
    ]
  },
  {
    id: 'bhimbandh-wildlife-sanctuary',
    name: 'Bhimbandh Wildlife Sanctuary & Thermal Springs',
    hindiName: 'भीमबांध वन्यजीव अभयारण्य एवं गर्म जलकुंड',
    tagline: 'Dense sal and mahua forests in the Kharagpur hills with natural geothermal springs',
    category: 'Forests & Wildlife',
    districtId: 'munger',
    districtName: 'Munger',
    coordinates: { lat: 25.0667, lng: 86.4000 },
    image: '/assets/images/rohtasgarh_fort_plateau_1789937871440.jpg',
    imageCaption: 'Rugged forested hills, crystalline streams, and geothermal springs of the Kharagpur range',
    intro: 'Encompassing 681 square kilometers in the Kharagpur hills of Munger district, Bhimbandh is one of Bihar’s largest wildlife sanctuaries. Renowned for its natural hot sulfur springs that maintain a steady temperature of 52°C to 65°C, the sanctuary is blanketed in dry and moist deciduous sal forests.',
    landscapeType: 'Folded Quartzite-Sandstone Hills, Thermal Springs & Deciduous Forest',
    whyItMatters: 'A vital wildlife habitat in South Bihar supporting leopards, sloth bears, chital, sambar deer, and Indian wild boars. The warm thermal waters create a unique microclimate along forest streams.',
    historyNarrative: 'Mythology links the site to the Pandava prince Bhima, who is said to have constructed a dam (bandh) here to hold the hot waters. The sanctuary was formally notified in 1976.',
    thingsToSee: [
      'The bubbling natural thermal springs of Bhimbandh',
      'Scenic forest canopy nature trails through the Kharagpur hills',
      'Rishikund and Sita Kund geothermal spring complexes nearby',
      'Wildlife watchtowers overlooking forest waterholes'
    ],
    conservationStatus: 'Wildlife Sanctuary (Notified 1976, Bihar Forest Dept)',
    sources: [
      'Department of Environment, Forest & Climate Change, Bihar: Bhimbandh Wildlife Sanctuary Plan',
      'Zoological Survey of India: Faunal Resources of Bhimbandh Sanctuary',
      'Munger District Gazetteer'
    ]
  },
  {
    id: 'takht-patna-sahib-landscape',
    name: 'Takht Sri Patna Sahib & The Urban Ganga',
    hindiName: 'तख्त श्री पटना साहिब एवं गंगा तट',
    tagline: 'The birthplace of the Tenth Sikh Guru overlooking the sacred riverfront of Patna',
    category: 'Sacred Landscapes',
    districtId: 'patna',
    districtName: 'Patna',
    coordinates: { lat: 25.5941, lng: 85.2269 },
    image: '/assets/images/patna_sahib_gurudwara_1789937861692.jpg',
    imageCaption: 'The marble facade of Takht Sri Patna Sahib on the banks of the Ganga in Patna City',
    intro: 'Situated in the historic core of Patna City along the southern levee of the Ganga, Takht Sri Harmandir Ji Patna Sahib is one of the five holy Takhts of Sikhism. Here, on December 22, 1666, Guru Gobind Singh Ji was born and spent his early childhood practicing archery along the riverbanks.',
    landscapeType: 'Urban Historic Riverfront Levee & Sacred Shrine Landscape',
    whyItMatters: 'Built by Maharaja Ranjit Singh in the 1830s to enshrine the birthplace of Guru Gobind Singh. Preserves sacred historical relics including the Guru’s childhood cradle (Panghura), golden sandals, four gold arrows, and handwritten scriptures.',
    cultureAndTraditions: 'A vibrant global pilgrimage center where thousands gather during Prakash Parv. The communal Langar operates 24 hours daily, serving free sanctified meals to all visitors regardless of religion or caste.',
    thingsToSee: [
      'The sacred Darbar Sahib and sanctum of the Tenth Guru',
      'Museum of authentic historical relics (Guru Gobind Singh’s arrows and weapons)',
      'Gurudwara Bal Leela (Maini Sangat) where the child Guru played',
      'Ganga riverfront ghats of Patna City'
    ],
    associatedPeopleIds: ['guru-gobind-singh'],
    associatedHeritageId: 'patna-sahib-gurudwara',
    sacredTradition: 'Sikh',
    conservationStatus: 'Protected Religious Heritage Institution • Prabandhak Committee Patna Sahib',
    sources: [
      'Takht Sri Harmandir Ji Patna Sahib Prabandhak Committee Official Records',
      'Maharaja Ranjit Singh Historical Monuments Trust',
      'Patna District Gazetteer, Government of Bihar'
    ]
  },
  {
    id: 'pawapuri-jal-mandir',
    name: 'Pawapuri Jal Mandir & Sacred Lotus Basin',
    hindiName: 'पावापुरी जल मंदिर एवं कमल सरोवर',
    tagline: 'The serene white marble shrine floating in a lotus tank where Lord Mahavira attained Nirvana',
    category: 'Sacred Landscapes',
    districtId: 'nalanda',
    districtName: 'Nalanda',
    coordinates: { lat: 25.0933, lng: 85.5342 },
    image: '/assets/images/nalanda_university_ruins_1789937702654.jpg',
    imageCaption: 'The marble Jal Mandir situated in the center of an artificial lotus-covered water reservoir',
    intro: 'Situated 19 kilometers from Rajgir in Nalanda district, Pawapuri (also known as Apapapuri, "the sinless city") is the sacred sanctuary where Lord Mahavira, the 24th Tirthankara of Jainism, delivered his final sermon and attained Mahaparinirvana in 527 BCE.',
    landscapeType: 'Artificial Lotus Reservoir & Sacred Marble Water Pavilion',
    whyItMatters: 'The central Jal Mandir is a pristine white marble temple situated like an open lotus flower in the middle of a sprawling 16-acre water reservoir filled with red and white water lilies, accessed by a 600-foot stone bridge.',
    historyNarrative: 'According to Jain tradition, when Lord Mahavira attained liberation and was cremated on Diwali night, the rush of kings and devotees to collect his sacred ashes was so vast that the very earth was scooped away, creating the massive water basin that surrounds the Jal Mandir today.',
    thingsToSee: [
      'The Jal Mandir floating on the lotus tank with Charan Paduka of Lord Mahavira',
      'Gaon Mandir (Samosharan Temple) where Mahavira delivered his final 48-hour sermon',
      'The 600-foot stone causeway leading across the water to the sanctum',
      'Annual Diwali Mahaparinirvana Mahotsav illuminated by thousands of clay lamps'
    ],
    associatedPeopleIds: ['lord-mahavira'],
    sacredTradition: 'Jain',
    conservationStatus: 'Protected Sacred Heritage Monument • Shwetambar & Digambar Jain Trusts',
    sources: [
      'Kalpa Sutra of Bhadrabahu (Sacred Books of the East)',
      'Nalanda District Gazetteer: Pawapuri Holy Heritage',
      'Bihar State Tourism Development Corporation (BSTDC): Jain Circuit Registry'
    ]
  },
  {
    id: 'maner-sharif-sufi',
    name: 'Maner Sharif Sufi Dargah & Lotus Tank',
    hindiName: 'मनेर शरीफ सूफी दरगाह एवं जलाशय',
    tagline: 'The oldest and most magnificent Mughal monument in Bihar',
    category: 'Sacred Landscapes',
    districtId: 'patna',
    districtName: 'Patna',
    coordinates: { lat: 25.6472, lng: 84.8764 },
    image: '/assets/images/patna_golghar_granary_1789937770039.jpg',
    imageCaption: 'Choti Dargah’s domed sandstone tomb, pierced jali screens, and vast tank in Maner',
    intro: 'Located 30 kilometers west of Patna near the ancient confluence of the Son and Ganga, Maner Sharif is the cradle of Sufism in eastern India. It is renowned for the Choti Dargah (tomb of Hazrat Makhdum Shah Daulat), completed in 1616 CE by Governor Ibrahim Khan Kakar under Mughal Emperor Jahangir.',
    landscapeType: 'Riparian Silt Plain, Elevated Sacred Terrace & Step-well Tank',
    whyItMatters: 'Considered the finest example of Mughal architecture in Bihar. Built of polished Chunar buff sandstone, it features a soaring hemispherical dome, four slender octagonal minarets, intricate carved stone jali screens, and calligraphic ceiling Qur’anic verses.',
    historyNarrative: 'Maner was celebrated as a center of philosophy and Arabic-Persian scholarship as early as the 13th century under the great Chishti and Firdausi saint Hazrat Makhdum Yahya Maneri (Badi Dargah). Renowned also for its traditional sweet, the Maner ka Laddu made from pure gram flour and clarified ghee.',
    thingsToSee: [
      'Choti Dargah: 1616 CE Mughal domed sandstone tomb with exquisite jali screens',
      'The vast ancient rectangular stone tank and pavilions fronting the shrine',
      'Badi Dargah: The ancient 13th-century resting place of Hazrat Makhdum Yahya Maneri',
      'Historic stone mosque and gateway carved with floral arabesques'
    ],
    sacredTradition: 'Sufi',
    conservationStatus: 'ASI Protected Monument of National Importance',
    sources: [
      'Archaeological Survey of India (ASI): Monuments of Patna District',
      'Qeyamuddin Ahmad: The Corpus of Arabic and Persian Inscriptions of Bihar',
      'Patna District Gazetteer: Heritage of Maner'
    ]
  }
];
