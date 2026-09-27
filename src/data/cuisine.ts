import {
  Dish,
  CulinaryRegion,
  CulinaryRegionProfile,
  CulinaryIngredient,
  CulinarySeasonProfile
} from '../types';
import { VERIFIED_IMAGES } from './media';

export const CUISINE_ITEMS: Dish[] = [
  // 1. Litti Chokha
  {
    id: 'litti-chokha',
    name: 'Litti Chokha',
    hindiName: 'लिट्टी चोखा',
    region: 'Bhojpur',
    originDistrict: 'bhojpur',
    districts: ['bhojpur', 'patna', 'buxar', 'rohtas'],
    districtNames: ['Bhojpur (Ara)', 'Patna', 'Buxar', 'Rohtas'],
    category: 'Staple & Main Course',
    isVegetarian: true,
    giTag: false,
    image: VERIFIED_IMAGES.littiChokha,
    imageSource: 'Cultural Documentation Visual Asset',
    isSignature: true,
    description:
      'Whole-wheat dough balls filled with roasted gram flour (sattu) spiced with carom, nigella seeds, garlic, and pickled mustard oil, traditionally baked over dying cow-dung cake or wood embers, then cracked open and submerged in pure desi ghee, served with smoky mashed eggplant and tomato chokha.',
    ingredients: [
      'Stone-ground whole wheat flour',
      'Chana sattu (roasted Bengal gram flour)',
      'Ajwain (carom seeds) & Mangrail / Kalonji (nigella seeds)',
      'Kachhi ghani mustard oil & lemon juice',
      'Pickled red chili masala (Bharwa mirch ka masala)',
      'Fire-roasted brinjal (eggplant) and ripe tomatoes',
      'Boiled potatoes, raw garlic juliennes, and green chilies',
      'Desi ghee for dipping'
    ],
    preparationMethod:
      'Sattu is tossed with finely minced ginger, garlic, green chilies, coriander, carom seeds, nigella seeds, raw mustard oil, lemon juice, and spicy pickle brine until it holds together loosely. Stuffed inside soft wheat dough spheres, the balls are placed directly upon glowing embers until charred, blistered, and cracked. They are brushed clean with a cotton cloth, hand-cracked, and immersed into warm melted ghee. Accompanied by chokha—charred eggplant and tomatoes mashed by hand with raw mustard oil, minced garlic, and salt.',
    culturalContext:
      'Historically sustained travelers, pastoralists, and soldiers because sattu requires no refrigeration and whole-wheat roasted balls remain preserved for days. Over centuries it has remained an egalitarian food, shared identically across rural threshing floors and urban homes.',
    whenEaten: 'Lunch, dinner, travel rations, and outdoor winter gatherings.',
    season: 'Year-round',
    sources: [
      'Department of Tourism, Government of Bihar',
      'Anthropological Survey of India (Food Habits of Eastern India)',
      'ICAR Research Complex for Eastern Region, Patna'
    ]
  },

  // 2. Thekua (Chhath Prasad)
  {
    id: 'thekua',
    name: 'Thekua (Khajuria / Thokwa)',
    hindiName: 'ठेकुआ',
    region: 'Statewide',
    originDistrict: 'patna',
    districts: ['patna', 'gaya', 'muzaffarpur', 'saran', 'madhubani'],
    districtNames: ['Statewide across all 38 districts'],
    category: 'Ritual Offering / Sacred Sweet',
    isVegetarian: true,
    giTag: false,
    image: VERIFIED_IMAGES.thekua,
    imageSource: 'Cultural Documentation Visual Asset',
    isSignature: true,
    description:
      'The sacred, traditional Prasad of Chhath Puja. A dense, crisp-crusted sweet made from coarse stone-milled wheat flour, unrefined dark sugarcane jaggery (gur), pure cow ghee, coconut slivers, and green cardamom, pressed onto carved wooden molds.',
    ingredients: [
      'Coarsely stone-milled whole wheat flour (Mota Atta)',
      'Dark country jaggery (Gur) dissolved in water',
      'Desi cow ghee for dough shortening (Moyen)',
      'Thinly slivered dry coconut (Sukha Nariyal)',
      'Fennel seeds (Saunf) & green cardamom powder',
      'Desi ghee or pure oil for slow deep-frying'
    ],
    preparationMethod:
      'Wheat flour is rubbed with warm melted ghee until it binds when squeezed in the palm. Warm jaggery syrup flavored with crushed fennel, cardamom, and coconut chips is sprinkled in gradually to produce a stiff, crumbly dough. Portions are hand-pressed onto a traditional wooden stencil (Saancha) carved with auspicious sun, leaf, and floral motifs, then fried very slowly in ghee over low flame until deep reddish-brown.',
    culturalContext:
      'The primary offering presented to Surya and Chhathi Maiya during the evening and dawn Arghya of Chhath Puja. Prepared under strict ritual conditions of cleanliness (Pavitrata) on dedicated earthen stoves using mango wood firewood.',
    whenEaten: 'Prepared primarily during Chhath Puja offerings, and carried as sacred Prasad; also prepared for travel provisions.',
    season: 'Festive Seasons',
    festivalConnections: ['chhath-puja'],
    festivalNames: ['Chhath Puja Mahaparva'],
    sources: [
      'Bihar State Archives & Bihar Sangeet Natak Akademi (Folk Traditions of Chhath)',
      'Indira Gandhi National Centre for the Arts (IGNCA) Heritage Documentation'
    ]
  },

  // 3. Champaran Ahuna Handi Mutton
  {
    id: 'champaran-mutton',
    name: 'Champaran Ahuna (Handi) Mutton',
    hindiName: 'चंपारण अहुना (हांडी) मटन',
    region: 'Tirhut',
    originDistrict: 'east-champaran',
    districts: ['east-champaran', 'west-champaran'],
    districtNames: ['East Champaran (Motihari / Ghorasahan)', 'West Champaran (Bettiah)'],
    category: 'Staple & Main Course',
    isVegetarian: false,
    giTag: false,
    image: VERIFIED_IMAGES.champaranMutton,
    imageSource: 'Cultural Documentation Visual Asset',
    isSignature: true,
    description:
      'A slow-cooked mutton preparation from Champaran, closely associated with Ghorasahan, Motihari, and Bettiah. Tender goat meat marinated with sliced onions, raw mustard oil, whole spices, and entire intact bulbs of garlic, sealed inside an unglazed clay handi with wheat dough and simmered over embers.',
    ingredients: [
      'Fresh goat meat on the bone',
      'Whole intact garlic bulbs (Pota Lahsun)',
      'Thinly sliced red onions (equal in weight to meat)',
      'Cold-pressed raw mustard oil (Kachhi Ghani)',
      'Whole crushed spices: black cardamom, cloves, cinnamon, bay leaves',
      'Freshly ground dry red chilies and black pepper',
      'Wheat flour dough for sealing handi neck'
    ],
    preparationMethod:
      'Meat is thoroughly tossed with raw mustard oil, onions, whole garlic bulbs, and crushed spices without added water. Placed inside an unglazed earthenware handi, the rim is sealed airtight with wet wheat dough and placed over glowing wood embers. The pot is never stirred with a ladle; the cook periodically lifts and rotates the sealed handi so the meat braises evenly in its own steam and melting onion juices for 60 to 90 minutes.',
    culturalContext:
      'Developed in the rural communities and estates of Champaran (with Ghorasahan widely cited as an early center). The unglazed earthenware walls allow slow, indirect heat transfer while whole garlic bulbs soften into sweet aromatics.',
    whenEaten: 'Festive lunches, celebratory feasts, and Sunday family gatherings.',
    season: 'Year-round',
    sources: [
      'Government of Bihar (District Profiles of East & West Champaran)',
      'Department of Tourism, Government of Bihar'
    ]
  },

  // 4. Silao Ka Khaja (GI Tagged)
  {
    id: 'silao-khaja',
    name: 'Silao Ka Khaja',
    hindiName: 'सिलाव का खाजा',
    region: 'Magadh',
    originDistrict: 'nalanda',
    districts: ['nalanda'],
    districtNames: ['Nalanda (Silao & Rajgir)'],
    category: 'Sweet & Confection',
    isVegetarian: true,
    giTag: true,
    image: VERIFIED_IMAGES.silaoKhaja,
    imageSource: 'Cultural Documentation Visual Asset',
    isSignature: true,
    description:
      'A multi-layered, delicate crispy confection from the historic village of Silao, situated between Rajgir and Nalanda. Awarded the Geographical Indication (GI) tag for its distinctive flaky stratification and light sweetness.',
    ingredients: [
      'Refined wheat flour (Maida)',
      'Ghee or shortening for layering (Moyen)',
      'Sugar syrup infused with green cardamom',
      'Local water of Silao-Rajgir valley'
    ],
    preparationMethod:
      'Wheat dough is rolled into transparently thin sheets, brushed with ghee and starch paste, rolled into tight multi-fold rolls, and cut into rectangular cakes. When fried slowly in warm ghee, multiple thin layers (traditionally 12 to 16 crisp strata as documented in its GI registration) separate cleanly. They are briefly dipped into light cardamom-scented sugar syrup so the crisp exterior remains brittle while inner folds carry delicate sweetness.',
    culturalContext:
      'Documented for centuries along the Rajgir-Nalanda pilgrimage corridor. Awarded a Geographical Indication (GI) Tag in December 2018 (registered under Application No. 555) in recognition of its linkage to the local water chemistry and traditional multi-fold artisanal technique of Silao halwais.',
    whenEaten: 'Festive gift-giving, wedding return tokens, and pilgrimage sweet.',
    season: 'Year-round',
    sources: [
      'Geographical Indications Registry, Government of India (GI Application No. 555, Registered 2018)',
      'Bihar State Tourism Development Corporation'
    ]
  },

  // 5. Gaya Tilkut
  {
    id: 'gaya-tilkut',
    name: 'Gaya Tilkut',
    hindiName: 'गया का तिलकुट',
    region: 'Magadh',
    originDistrict: 'gaya',
    districts: ['gaya'],
    districtNames: ['Gaya (Ramna & Tekari Road)'],
    category: 'Seasonal Sweet',
    isVegetarian: true,
    giTag: false,
    image: VERIFIED_IMAGES.tilkut,
    imageSource: 'Cultural Documentation Visual Asset',
    isSignature: true,
    description:
      'A winter specialty from the narrow lanes of Ramna in Gaya. Roasted white sesame seeds combined with pulled jaggery or sugar syrup, rhythmically hand-pounded with heavy wooden mallets until it forms a brittle, feather-light, melt-in-the-mouth wafer.',
    ingredients: [
      'Cleaned and roasted white sesame seeds (Safed Til)',
      'Winter sugarcane jaggery (Gur) or refined sugar syrup',
      'Green cardamom powder',
      'Pure water'
    ],
    preparationMethod:
      'Sesame seeds are roasted to a fragrant golden pop. Boiling jaggery syrup is repeatedly pulled and folded over an iron wall hook until it aerates, turns pale, and develops a fibrous texture. The roasted sesame is folded into the hot pulled syrup, transferred onto stone slabs, and rhythmically beaten by paired artisans using heavy wooden hammers (Musra) until it flattens into crisp, layered, crumbly discs.',
    culturalContext:
      'Closely associated with the celebration of Makar Sankranti (January 14) across Magadh, marking solar transit into Capricorn. Customarily prepared and enjoyed during the winter months and on festive occasions.',
    whenEaten: 'Makar Sankranti and the peak winter months (December through February).',
    season: 'Winter',
    festivalConnections: ['makar-sankranti'],
    festivalNames: ['Makar Sankranti Mahaparva'],
    sources: [
      'District Gazetteer of Gaya',
      'Department of Tourism, Government of Bihar (Gaya Heritage Directory)'
    ]
  },

  // 6. Mithila Makhana Kheer
  {
    id: 'makhana-kheer',
    name: 'Mithila Makhana Kheer',
    hindiName: 'मिथिला मखाना खीर',
    region: 'Mithila',
    originDistrict: 'madhubani',
    districts: ['madhubani', 'darbhanga', 'samastipur'],
    districtNames: ['Madhubani', 'Darbhanga', 'Samastipur'],
    category: 'Dessert & Sacred Offering',
    isVegetarian: true,
    giTag: false,
    image: VERIFIED_IMAGES.makhanaKheer,
    imageSource: 'Cultural Documentation Visual Asset',
    isSignature: true,
    description:
      'A slow-simmered dessert of Mithila prepared from GI-tagged Mithila Makhana (Application No. 696). Popped gorgon seeds are toasted in ghee, partially crushed to thicken whole milk, and flavored with saffron, cardamom, and roasted dry fruits.',
    ingredients: [
      'GI-tagged Mithila Makhana (Foxnuts / Gorgon nuts)',
      'Full cream milk',
      'Sugar or unrefined rock candy (Mishri)',
      'Green cardamom seeds',
      'Saffron strands (Kesar)',
      'Cashews and almonds lightly toasted in pure cow ghee'
    ],
    preparationMethod:
      'Fresh makhana is toasted in desi ghee until crisp. One portion is retained whole for texture, while the remainder is coarsely crushed. Milk is reduced over low flame in a heavy kadhai until it reaches two-thirds volume. The makhana is stirred in, simmering gently as it swells and absorbs the sweetened milk into a rich, velvety pudding. Finished with crushed cardamom and saffron-infused milk.',
    culturalContext:
      'Makhana is celebrated in Mithila as one of the four traditional markers of auspicious life (Paan, Machh, Pokhar, and Makhana). Prepared during the Kojagara festival, sacred household rituals, and wedding feasts.',
    whenEaten: 'Kojagara festival, family feasts, and religious fasts.',
    season: 'Year-round',
    festivalConnections: ['kojagara-puja'],
    festivalNames: ['Kojagara Lakshmi Puja (Mithila)'],
    sources: [
      'Geographical Indications Registry (GI Tag: Mithila Makhana, Application No. 696, Registered 2022)',
      'ICAR - National Research Centre for Makhana, Darbhanga'
    ]
  },

  // 7. Dal Pitha (Bhakosa / Bagia)
  {
    id: 'dal-pitha',
    name: 'Dal Pitha (Bagia / Bhakosa)',
    hindiName: 'दाल पीठा (बगिया / भकोसा)',
    region: 'Tirhut',
    originDistrict: 'muzaffarpur',
    districts: ['muzaffarpur', 'vaishali', 'patna', 'samastipur'],
    districtNames: ['Muzaffarpur', 'Vaishali', 'Patna', 'Samastipur'],
    category: 'Breakfast & Winter Staple',
    isVegetarian: true,
    giTag: false,
    image: '',
    isSignature: true,
    description:
      'Steamed dumplings made from rice flour dough, stuffed with a coarse mixture of soaked chana dal (Bengal gram), fresh garlic, green chilies, cumin seeds, and asafoetida. Known as Bagia in Mithila and Bhakosa/Pitha across Tirhut and Bhojpur.',
    ingredients: [
      'Stone-milled rice flour (Chawal ka Atta)',
      'Soaked Bengal gram (Chana Dal)',
      'Fresh garlic cloves, green chilies, and ginger',
      'Roasted cumin seeds (Jeera) & Hing (asafoetida)',
      'Turmeric, freshly chopped coriander, and salt'
    ],
    preparationMethod:
      'Chana dal is ground coarsely with garlic, green chilies, ginger, and spices without adding water. Rice flour is kneaded with warm water into a soft pliable dough. Flattened into round discs, each is filled with the seasoned raw dal paste, folded into half-moon crescents, and steamed over boiling water for 15–18 minutes. Eaten piping hot or lightly pan-tossed in mustard oil with mustard seeds.',
    culturalContext:
      'Customary winter breakfast prepared especially during Poush Sankranti using newly harvested winter rice and pulses. Represents Bihar’s traditional oil-free steaming methods.',
    whenEaten: 'Winter mornings, Poush Sankranti, and domestic breakfasts.',
    season: 'Winter',
    festivalConnections: ['makar-sankranti'],
    festivalNames: ['Makar Sankranti / Poush Sankranti'],
    sources: [
      'Bihar Agricultural University (Regional Home Science Documentation)',
      'Department of Tourism, Government of Bihar'
    ]
  },

  // 8. Sattu Sharbat (Namkeen & Meetha)
  {
    id: 'sattu-sharbat',
    name: 'Sattu Sharbat (Namkeen & Meetha)',
    hindiName: 'सत्तू शरबत (नमकीन एवं मीठा)',
    region: 'Bhojpur',
    originDistrict: 'bhojpur',
    districts: ['bhojpur', 'patna', 'buxar', 'saran', 'gaya'],
    districtNames: ['Bhojpur', 'Patna', 'Buxar', 'Saran', 'Gaya'],
    category: 'Traditional Beverage & Sustenance',
    isVegetarian: true,
    giTag: false,
    image: '',
    isSignature: true,
    description:
      'A traditional beverage of Bihar made from stone-ground roasted gram flour (chana sattu) dissolved in earthen-pitcher water, served either savory with roasted cumin, black salt, green chili, and lemon, or sweet with crushed country jaggery.',
    ingredients: [
      'Pure chana sattu (roasted Bengal gram flour)',
      'Earthen pitcher water (Matka paani)',
      'Black salt (Kala namak) & roasted cumin powder (Bhuna jeera)',
      'Fresh lemon juice',
      'Finely chopped green chilies, mint leaves, and red onion (optional)',
      'Or dark sugarcane jaggery (for meetha version)'
    ],
    preparationMethod:
      'Three to four tablespoons of fresh roasted sattu are whisked into cold water until smooth. For the savory version, freshly roasted cumin powder, black salt, mint, and lemon juice are stirred in. For the sweet version, melted jaggery and a pinch of black salt are incorporated. Consumed fresh.',
    culturalContext:
      'Documented across centuries as an everyday agrarian staple. Observed prominently on Jur Sital / Mesha Sankranti in April, marking the onset of the summer agricultural season when sattu preparations are customary.',
    whenEaten: 'Morning breakfast, summer midday beverage, and farm-labor sustenance.',
    season: 'Summer',
    sources: [
      'National Institute of Nutrition (Nutritional Profile of Roasted Gram Sattu)',
      'Department of Agriculture, Government of Bihar'
    ]
  },

  // 9. Dahi Chura (Curd & Flattened Rice)
  {
    id: 'dahi-chura',
    name: 'Dahi Chura',
    hindiName: 'दही चूड़ा',
    region: 'Statewide',
    originDistrict: 'patna',
    districts: ['patna', 'madhubani', 'darbhanga', 'muzaffarpur', 'gaya'],
    districtNames: ['Statewide (Patna, Mithila, Magadh)'],
    category: 'Breakfast & Ritual Staple',
    isVegetarian: true,
    giTag: false,
    image: '',
    isSignature: true,
    description:
      'A harvest meal combining beaten flattened rice (chura) with clay-pot set curd (dahi), sweetened with winter jaggery or accompanied by roasted tilkut and a side of potato-cauliflower subzi or pickled chili.',
    ingredients: [
      'Aromatic flattened rice (Katarani or local Chura)',
      'Thick earthenware-set curd (Matka Dahi)',
      'Dark country jaggery (Gur) or cane sugar',
      'Gaya Tilkut (during Makar Sankranti)',
      'Savory accompaniment: Aloo Gobhi subzi or red stuffed pickle'
    ],
    preparationMethod:
      'Flattened rice is rinsed lightly with water and allowed to soften for a minute without turning mushy. It is layered with generous ladles of fresh thick curd and topped with crushed dark jaggery or a piece of flaky tilkut. Mixed gently with a spoon or clean fingers.',
    culturalContext:
      'The definitive ceremonial meal of Makar Sankranti across Bihar, celebrating the arrival of the winter paddy harvest. Also widely served for everyday morning meals.',
    whenEaten: 'Makar Sankranti morning meal, domestic breakfasts, and festive occasions.',
    season: 'Winter',
    festivalConnections: ['makar-sankranti'],
    festivalNames: ['Makar Sankranti Mahaparva'],
    sources: [
      'Department of Agriculture, Government of Bihar (Katarani Rice Documentation)',
      'Bihar State Tourism Development Corporation'
    ]
  },

  // 10. Malpua / Pua
  {
    id: 'malpua-bihar',
    name: 'Bihari Malpua',
    hindiName: 'मालपुआ',
    region: 'Bhojpur',
    originDistrict: 'patna',
    districts: ['patna', 'bhojpur', 'gaya', 'darbhanga'],
    districtNames: ['Patna', 'Bhojpur', 'Gaya', 'Darbhanga'],
    category: 'Festive Sweet',
    isVegetarian: true,
    giTag: false,
    image: '',
    isSignature: true,
    description:
      'A festive sweet pancake prepared during Holi and celebratory gatherings. Made from a batter of wheat flour, mashed ripe bananas, milk, crushed green cardamom, and fennel seeds, fried gently in desi ghee and soaked in warm cardamom sugar syrup.',
    ingredients: [
      'Whole wheat flour or maida',
      'Ripe mashed bananas (Kela)',
      'Thick warm milk',
      'Fennel seeds (Saunf) & crushed green cardamom (Elaichi)',
      'Desi ghee for frying',
      'Cardamom-infused sugar syrup'
    ],
    preparationMethod:
      'Flour, mashed banana, fennel seeds, and milk are whisked into a smooth flowing batter and allowed to rest. Ladles of batter are dropped into shallow pans of medium-hot ghee, where the edges frill while the center remains tender. Once golden, the pua is transferred to warm sugar syrup for two minutes.',
    culturalContext:
      'Widely associated with the Holi / Phagua festival in Bihar, when families visit neighboring households to share freshly prepared malpua alongside savory dahi vada.',
    whenEaten: 'Holi festival, festive dinners, and wedding celebrations.',
    season: 'Festive Seasons',
    festivalConnections: ['makar-sankranti'],
    festivalNames: ['Holi / Phagua Celebration'],
    sources: [
      'Bihar Sangeet Natak Akademi (Folk Celebrations of Phagua)',
      'Department of Tourism, Government of Bihar'
    ]
  },

  // 11. Gaya Anarsa
  {
    id: 'anarsa-gaya',
    name: 'Gaya Anarsa',
    hindiName: 'गया का अनरसा',
    region: 'Magadh',
    originDistrict: 'gaya',
    districts: ['gaya'],
    districtNames: ['Gaya (Ramna)'],
    category: 'Traditional Confection',
    isVegetarian: true,
    giTag: false,
    image: '',
    isSignature: true,
    description:
      'A traditional rice-based sweet confection crafted in the lanes of Gaya. Made from aged rice soaked for days, powdered, mixed with jaggery or sugar into a pliable dough, stuffed with mawa (khoya) flavored with cardamom, coated with white sesame seeds, and fried to golden perfection.',
    ingredients: [
      'Aged rice soaked for 3 days and shade-dried',
      'Dark country jaggery (Gur) or fine sugar',
      'Mawa (khoya) mixed with cardamom powder for filling',
      'White sesame seeds (Safed Til) for crust',
      'Pure desi ghee for frying'
    ],
    preparationMethod:
      'Rice is soaked in water for three days with daily water changes, then shade-dried and pounded into fine flour. Combined with warm jaggery to form dough, it is rested for fermentation. Small dough balls are flattened, stuffed with a small ball of cardamom-scented khoya, rolled in white sesame seeds, and deep-fried on slow flame until the sesame crust is crunchy and fragrant.',
    culturalContext:
      'Traditionally prepared during Adhik Maas (Purushottam Maas or Malmaas) and monsoon festivals. Documented as an enduring traditional confection of the Magadh region.',
    whenEaten: 'Adhik Maas (Malmaas), monsoon festive gatherings, and pilgrim visits.',
    season: 'Monsoon',
    sources: [
      'District Gazetteer of Gaya (Confectionery Heritage)',
      'Department of Tourism, Government of Bihar'
    ]
  },

  // 12. Bihari Khichdi & Chokha
  {
    id: 'bihari-khichdi',
    name: 'Bihari Khichdi & Chokha',
    hindiName: 'बिहारी खिचड़ी एवं चोखा',
    region: 'Statewide',
    originDistrict: 'patna',
    districts: ['patna', 'gaya', 'saran', 'muzaffarpur', 'madhubani'],
    districtNames: ['Statewide across all 38 districts'],
    category: 'Ritual Staple & Comfort Food',
    isVegetarian: true,
    giTag: false,
    image: '',
    isSignature: true,
    description:
      'The traditional Saturday and Makar Sankranti meal of Bihar. A pot of rice and roasted moong or urad dal, tempered with whole cumin, asafoetida, and dry red chilies, traditionally accompanied by the "Chaar Yaar" (Four Friends): Chokha, Papad, Ghee, and Achar.',
    ingredients: [
      'Short-grain winter rice (Arwa chawal)',
      'Dry-roasted yellow moong dal or split urad dal',
      'Turmeric, cumin seeds, and asafoetida (Hing)',
      'Desi ghee for generous tempering',
      'Chaar Yaar: Roasted potato/eggplant chokha, papad, desi ghee, and spicy mango/chili pickle'
    ],
    preparationMethod:
      'Lentils are dry-roasted in a kadhai until fragrant and combined with washed rice in a heavy pot with water, turmeric, and salt. Simmered until velvety and soft. Poured over with a bubbling tadka of desi ghee, cumin, whole red chilies, and asafoetida. Served immediately alongside chokha, roasted papad, a spoonful of pickle, and a generous dollop of ghee.',
    culturalContext:
      'Documented in the popular Bihari folk idiom: "Khichdi ke chaar yaar — Chokha, Papad, Ghee, Achar" (or Dahi). Consumed widely every Saturday and during Makar Sankranti celebrations.',
    whenEaten: 'Saturday lunches, Makar Sankranti festival, and rainy afternoons.',
    season: 'Winter',
    festivalConnections: ['makar-sankranti'],
    festivalNames: ['Makar Sankranti Mahaparva'],
    sources: [
      'Bihar Agricultural University Culinary Studies',
      'Department of Tourism, Government of Bihar'
    ]
  },

  // 13. Runni Saidpur Balushahi
  {
    id: 'balushahi-sitamarhi',
    name: 'Runni Saidpur Balushahi',
    hindiName: 'रुन्नी सैदपुर बालूशाही',
    region: 'Tirhut',
    originDistrict: 'sitamarhi',
    districts: ['sitamarhi', 'muzaffarpur'],
    districtNames: ['Sitamarhi (Runni Saidpur)', 'Muzaffarpur'],
    category: 'Sweet & Confection',
    isVegetarian: true,
    giTag: false,
    image: '',
    isSignature: false,
    description:
      'A celebrated confection from the wayside sweet-makers of Runni Saidpur on the Muzaffarpur-Sitamarhi highway. Golden, multi-laminated discs with a flaky, micro-creviced texture that absorbs warm sugar syrup while maintaining a delicate crystalline crust.',
    ingredients: [
      'Refined wheat flour (Maida)',
      'Desi ghee for shortening (Moyen)',
      'Fresh curd (Dahi) & a pinch of baking soda',
      'Warm sugar syrup scented with saffron and cardamom'
    ],
    preparationMethod:
      'Flour is gently folded with chilled ghee and curd without overworking the gluten, ensuring laminated layers remain distinct. Portions are rolled, lightly depressed in the center, and deep-fried over the lowest possible flame in ghee for 25 to 30 minutes until layered like puff pastry. Placed in warm sugar syrup which fills the inner crevices.',
    culturalContext:
      'Travelers journeying between Muzaffarpur, Sitamarhi, and the Nepal border traditionally pause at Runni Saidpur to purchase freshly packaged earthen pots of warm Balushahi.',
    whenEaten: 'Travel refreshment, wedding gifts, and festive celebrations.',
    season: 'Year-round',
    sources: [
      'District Gazetteer of Sitamarhi',
      'Bihar State Tourism Development Corporation'
    ]
  },

  // 14. Bihari Chana Ghugni
  {
    id: 'chana-ghugni',
    name: 'Bihari Chana Ghugni',
    hindiName: 'चना घुघनी',
    region: 'Statewide',
    originDistrict: 'patna',
    districts: ['patna', 'bhojpur', 'gaya', 'bhagalpur', 'saran'],
    districtNames: ['Statewide across Bihar'],
    category: 'Snack & Breakfast',
    isVegetarian: true,
    giTag: false,
    image: '',
    isSignature: false,
    description:
      'A spiced, semi-dry brown chickpea curry tempered with cumin, whole dried red chilies, ginger juliennes, and amchur (dry mango powder), served alongside flattened beaten rice (Chura) or hot puffed puris.',
    ingredients: [
      'Kala chana (small brown chickpeas) soaked overnight',
      'Finely sliced red onions, tomatoes, ginger, and garlic',
      'Roasted cumin powder, coriander, and amchur powder',
      'Kachhi Ghani raw mustard oil',
      'Fresh green chilies and julienned ginger for garnish'
    ],
    preparationMethod:
      'Soaked chickpeas are slow-cooked with caramelized onions, garlic, and freshly pounded spices in raw mustard oil until the gravy reduces into a thick masala coating each chickpea. Finished with ginger matchsticks, chopped green chilies, and a squeeze of lime juice.',
    culturalContext:
      'The morning and evening staple across railway tea stalls, market bazaars, and domestic courtyards, traditionally served in dried Sal leaf bowls (Dona) with crisp roasted chura.',
    whenEaten: 'Morning breakfast and dusk snacks with tea.',
    season: 'Year-round',
    sources: [
      'National Institute of Agricultural Marketing Regional Surveys',
      'Folklore of Bihar Street Food Traditions'
    ]
  },

  // 15. Sattu Makuni (Stuffed Paratha)
  {
    id: 'sattu-makuni',
    name: 'Sattu Makuni (Stuffed Paratha)',
    hindiName: 'सत्तू मकुनी (पराठा)',
    region: 'Bhojpur',
    originDistrict: 'bhojpur',
    districts: ['bhojpur', 'saran', 'patna', 'rohtas'],
    districtNames: ['Bhojpur (Ara)', 'Saran', 'Patna', 'Rohtas'],
    category: 'Staple & Main Course',
    isVegetarian: true,
    giTag: false,
    image: '',
    isSignature: false,
    description:
      'A pan-roasted whole-wheat flatbread stuffed with spiced sattu. The dough is rolled thin and roasted on an iron tawa with drops of mustard oil or ghee until blistered and golden, eaten alongside baingan chokha or tangy mango pickle.',
    ingredients: [
      'Stone-ground whole wheat flour',
      'Chana sattu (roasted Bengal gram flour)',
      'Ajwain (carom seeds) & Kalonji (nigella seeds)',
      'Minced garlic, green chilies, and fresh coriander',
      'Mustard oil & lemon juice',
      'Ghee or mustard oil for tawa roasting'
    ],
    preparationMethod:
      'Seasoned sattu filling is encased in soft wheat dough, gently rolled with a rolling pin without piercing the crust, and roasted on a smoking cast-iron tawa, brushed with ghee or mustard oil until both surfaces puff and display light golden speckles.',
    culturalContext:
      'Everyday home dinner and train journey companion. Highly valued for remaining fresh and soft throughout 24-hour rail journeys across India.',
    whenEaten: 'Home dinners, travel lunchboxes, and winter mornings.',
    season: 'Year-round',
    sources: [
      'Bihar Agricultural University Culinary Studies',
      'Saran Cultural Documentation Project'
    ]
  },

  // 16. Mithila Machh Bhaat (Freshwater River Fish & Rice)
  {
    id: 'mithila-machh-bhaat',
    name: 'Mithila Machh Bhaat',
    hindiName: 'मिथिला माछ भात',
    region: 'Mithila',
    originDistrict: 'madhubani',
    districts: ['madhubani', 'darbhanga', 'samastipur'],
    districtNames: ['Madhubani', 'Darbhanga', 'Samastipur'],
    category: 'Staple & Main Course',
    isVegetarian: false,
    giTag: false,
    image: '',
    isSignature: false,
    description:
      'Freshwater pond fish (such as Rohu or Catla) cooked in a pungent golden mustard-seed, turmeric, and dried mango (amchur) gravy, paired with hot steamed fine rice (bhaat). A cornerstone of Maithil festive and domestic hospitality.',
    ingredients: [
      'Fresh freshwater river/pond fish cutlets (Rohu / Katla)',
      'Yellow and black mustard seeds ground to fine paste (Sorse baata)',
      'Pure mustard oil for shallow frying and gravy',
      'Panch phoron (five-spice blend) & whole green chilies',
      'Turmeric, coriander powder, and amchur (dry mango powder)',
      'Aromatic steamed local white rice (Bhaat)'
    ],
    preparationMethod:
      'Fish steaks are rubbed with turmeric, salt, and mustard oil, then lightly fried in smoking mustard oil. In the same oil, panch phoron is bloomed, followed by freshly ground mustard paste, turmeric, and water to form a bright golden curry. The fish is simmered gently until tender without breaking. Served over steaming mounds of rice.',
    culturalContext:
      'In Maithil Brahmin and broader Mithila cultural tradition, freshwater fish is considered auspicious (Shubh) and a symbol of fertility, prosperity, and ecological harmony with Mithila’s thousands of village ponds (Pokhar).',
    whenEaten: 'Celebratory family gatherings, weddings, and weekend feasts.',
    season: 'Year-round',
    sources: [
      'Anthropological Survey of India (Mithila Cultural Complex)',
      'Mithila Research Institute, Darbhanga'
    ]
  }
];

export const CULINARY_REGIONS: CulinaryRegionProfile[] = [
  {
    id: 'Bhojpur',
    name: 'Bhojpur & Western Plains',
    hindiName: 'भोजपुर एवं शाहाबाद',
    districts: ['bhojpur', 'buxar', 'rohtas', 'kaimur'],
    flavorProfile: 'Earthy, wood-smoked, hearty rustic staples, roasted sattu, pungent raw mustard oil, and carom-nigella spices.',
    narrative:
      'The agricultural heartland along the Son and Ganga rivers, Bhojpur is a historic center of sattu and litti preparations. Here, food is built for resilience: high-protein roasted gram flour, sun-dried stuffed pickles, and fire-roasted eggplant chokha that sustained farmers through long days in fertile alluvial fields.',
    signatureDishes: ['litti-chokha', 'sattu-sharbat', 'sattu-makuni', 'malpua-bihar']
  },
  {
    id: 'Magadh',
    name: 'Magadh & Central Plateau Border',
    hindiName: 'मगध अंचल',
    districts: ['gaya', 'nalanda', 'patna', 'jehanabad', 'nawada'],
    flavorProfile: 'Traditional confections, pounded sesame sweets, multi-layered pastries, and seasonal jaggery rituals.',
    narrative:
      'Home to the historic imperial capitals of Rajgir and Pataliputra, Magadh boasts sophisticated confectionary traditions nurtured over generations. From the delicately layered crispy GI-tagged Khaja of Silao to the feather-light pounded sesame Tilkut and traditional Anarsa of Gaya, Magadhan food reflects agricultural timing alongside artisan confectionary skill.',
    signatureDishes: ['silao-khaja', 'gaya-tilkut', 'anarsa-gaya', 'thekua']
  },
  {
    id: 'Mithila',
    name: 'Mithila & Northern Floodplains',
    hindiName: 'मिथिला एवं तिरहुत',
    districts: ['madhubani', 'darbhanga', 'samastipur'],
    flavorProfile: 'Delicate wetland harvest, foxnuts, freshwater fish, mustard paste, aromatic rice, and creamy curds.',
    narrative:
      'Defined by the cultural balance of Paan (betel leaf), Machh (freshwater fish), Pokhar (communal ponds), and Makhana (gorgon nuts). Food in Mithila is celebrated in Maithili cultural traditions, domestic rituals, and ecological pond stewardship. The cuisine favors gentle mustard gravies, sun-dried lentil vadis, and slow-reduced Makhana Kheer.',
    signatureDishes: ['makhana-kheer', 'mithila-machh-bhaat', 'dahi-chura']
  },
  {
    id: 'Tirhut',
    name: 'Tirhut & Champaran Terai',
    hindiName: 'तिरहुत एवं चंपारण',
    districts: ['muzaffarpur', 'vaishali', 'west-champaran', 'east-champaran', 'sitamarhi'],
    flavorProfile: 'Earthen clay-pot braising, aromatic whole spices, steamed rice dumplings, and highway confectionary halts.',
    narrative:
      'Stretching from the terai foothills of Champaran down to the Gandak river, Tirhut’s food traditions are renowned for clay-pot sealed Ahuna mutton, light steamed Dal Pitha, and celebrated highway confections like Runni Saidpur Balushahi.',
    signatureDishes: ['champaran-mutton', 'dal-pitha', 'balushahi-sitamarhi']
  },
  {
    id: 'Saran',
    name: 'Saran & River Confluences',
    hindiName: 'सारण एवं गंगा-घाघरा दोआब',
    districts: ['saran', 'siwan', 'gopalganj'],
    flavorProfile: 'Riverine agricultural staples, winter mustard greens, rustic sattu parathas, and communal mela preparations.',
    narrative:
      'Situated at the fertile meeting of the Ganga, Gandak, and Ghaghra rivers, Saran’s culinary lineage is closely shared with Bhojpur. During the legendary Sonepur Fair, outdoor wood-fire kitchens feed pilgrims and tradespeople with batches of Litti Chokha, Malpua, and steaming Chana Ghugni.',
    signatureDishes: ['litti-chokha', 'sattu-makuni', 'thekua']
  },
  {
    id: 'Anga',
    name: 'Anga & Eastern River Plains',
    hindiName: 'अंग प्रदेश',
    districts: ['bhagalpur', 'banka', 'munger'],
    flavorProfile: 'Aromatic Katarni rice, mustard-pungent greens, river fish, and festive harvest preparations.',
    narrative:
      'The eastern region of Anga, centered around Bhagalpur, Banka, and Munger, is recognized for the GI-tagged Katarni aromatic rice and seasonal river bounties. Here, newly harvested rice and mustard gravies form the soul of everyday meals and regional celebrations.',
    signatureDishes: ['dahi-chura', 'chana-ghugni', 'bihari-khichdi']
  }
];

export const CULINARY_SEASONS: CulinarySeasonProfile[] = [
  {
    id: 'Winter',
    title: 'Winter (Hemant & Shishir)',
    hindiTitle: 'शीत ऋतु (हेमंत एवं शिशिर)',
    months: 'November – February',
    concept: 'Sesame confections, fresh sugarcane jaggery, newly harvested paddy, and steamed dumplings.',
    description:
      'As morning mists envelop the Gangetic plain, kitchens turn to traditional seasonal preparations. Pounded sesame Tilkut from Gaya, steamed Dal Pitha made from freshly milled rice flour, and Saturday Khichdi crowned with melting desi ghee take center stage.',
    featuredDishIds: ['gaya-tilkut', 'dal-pitha', 'dahi-chura', 'bihari-khichdi'],
    staples: ['Sesame (Til)', 'Sugarcane Jaggery (Gur)', 'New Paddy Rice', 'Mustard Greens (Sarson Saag)']
  },
  {
    id: 'Summer',
    title: 'Summer (Grishma)',
    hindiTitle: 'ग्रीष्म ऋतु',
    months: 'March – June',
    concept: 'Roasted gram flour drinks, earthen-pot water, and light seasonal preparations.',
    description:
      'With the fierce dry summer wind (Loo) sweeping across the plains, roasted gram flour (sattu) drinks mixed with water, black salt, cumin, and lemon are widely prepared across rural and urban homes, alongside light gourd curries and raw mango panna.',
    featuredDishIds: ['sattu-sharbat', 'sattu-makuni'],
    staples: ['Chana Sattu', 'Roasted Cumin', 'Mint & Raw Mango', 'Earthen Pot Water (Matka Paani)']
  },
  {
    id: 'Monsoon',
    title: 'Monsoon (Varsha & Shravan)',
    hindiTitle: 'वर्षा ऋतु एवं सावन',
    months: 'July – August',
    concept: 'Crisp hot fried snacks, spiced chickpea curries, roasted corn, and Adhik Maas confections.',
    description:
      'When monsoon rains break over the plains, the aroma of mustard oil fills village verandas. People gather for freshly fried kachauris, spicy Chana Ghugni served in Sal leaf donas, and traditional monsoon Anarsa.',
    featuredDishIds: ['chana-ghugni', 'anarsa-gaya'],
    staples: ['Kala Chana', 'Fresh Ginger', 'Mustard Oil', 'Roasted Corn (Bhutta)']
  },
  {
    id: 'Festive Seasons',
    title: 'Festive Harvest Cycles (Parv-Tyohar)',
    hindiTitle: 'पर्व-त्योहारों के पावन स्वाद',
    months: 'Throughout the Year',
    concept: 'Sacred Prasad, strict ritual cleanliness (Shuddhata), earthen stoves, and shared communal blessings.',
    description:
      'In Bihar, the most revered foods are not merely eaten; they belong to sacred vows. From the holy jaggery-wheat Thekua of Chhath Puja to the joyous Holi Malpua and Kojagara Makhana, food is an act of communal thanksgiving to nature and seasonal harvests.',
    featuredDishIds: ['thekua', 'malpua-bihar', 'makhana-kheer', 'dahi-chura'],
    staples: ['Coarse Wheat Atta', 'Pure Desi Ghee', 'Cardamom & Fennel', 'Mithila Makhana']
  }
];

export const CULINARY_INGREDIENTS: CulinaryIngredient[] = [
  {
    id: 'sattu',
    name: 'Chana Sattu (Roasted Gram Flour)',
    hindiName: 'चना सत्तू',
    tagline: 'The Democratic Backbone of Bihari Stamina',
    landscapeConnection: 'Dryland pulse farming in western Bihar → Village wood-fired sand roasters (Bhaad) → The daily traveler’s glass and tawa.',
    agriculturalSeason: 'Rabi harvest (March–April) pulse crop',
    stapleRegions: ['Bhojpur', 'Magadh', 'Saran', 'Statewide'],
    dishesUsedIn: ['Litti Chokha', 'Sattu Sharbat', 'Sattu Makuni'],
    culturalRole: 'Incorruptible, travel-ready protein that requires no cooking. Sustained agricultural laborers, students, and pilgrims across generations.',
    iconType: 'grain'
  },
  {
    id: 'makhana',
    name: 'Mithila Makhana (Foxnuts / Gorgon Nuts)',
    hindiName: 'मिथिला मखाना',
    tagline: 'The Sacred Jewel of the Northern Wetlands',
    landscapeConnection: 'Slow-moving oxbow lakes and perennial village ponds of Mithila → Nocturnal harvest from muddy lakebeds → Hand-roasting and rhythmic wooden popping.',
    agriculturalSeason: 'Wetland perennial crop harvested in late monsoon (August–September)',
    stapleRegions: ['Mithila (Madhubani, Darbhanga, Samastipur)'],
    dishesUsedIn: ['Mithila Makhana Kheer', 'Roasted Ghee Makhana', 'Fasting Sabzis'],
    culturalRole: 'Awarded a GI Tag in August 2022 (Application No. 696). Symbol of auspicious life, purity, and sacred rituals throughout North Bihar.',
    iconType: 'water'
  },
  {
    id: 'rice-chura',
    name: 'Aromatic Rice & Beaten Chura',
    hindiName: 'सुगंधित चावल एवं चूड़ा',
    tagline: 'Alluvial Floodplain Bounty',
    landscapeConnection: 'Flooded Gangetic silts and Kosi plains → Autumn paddy harvest → Pounded flat on traditional Dhenki or village mills.',
    agriculturalSeason: 'Kharif harvest (October–December)',
    stapleRegions: ['Statewide', 'Mithila', 'Anga'],
    dishesUsedIn: ['Dahi Chura', 'Dal Pitha', 'Bihari Khichdi', 'Anarsa'],
    culturalRole: 'Centerpiece of Makar Sankranti and daily domestic thalis. Celebrated through heritage varieties like GI-tagged Katarni rice.',
    iconType: 'plant'
  },
  {
    id: 'mustard-oil',
    name: 'Kachhi Ghani Mustard Oil',
    hindiName: 'कच्ची घानी सरसों तेल',
    tagline: 'The Pungent Soul of Every Kadhai',
    landscapeConnection: 'Yellow winter mustard blooms across the Gangetic plains → Cold-pressing in expellers → Golden cooking oil.',
    agriculturalSeason: 'Winter rabi crop harvested in February–March',
    stapleRegions: ['Statewide'],
    dishesUsedIn: ['Champaran Mutton', 'Litti Filling', 'Chokha', 'Mithila Machh Bhaat', 'Pickles'],
    culturalRole: 'Provides traditional flavor in pickles, distinctive pungency in raw chokha, and the high-smoke-point carrier for regional curries.',
    iconType: 'droplet'
  },
  {
    id: 'til-sesame',
    name: 'Sesame Seeds (Til)',
    hindiName: 'तिल (सफेद एवं काला)',
    tagline: 'Winter Tradition and Ceremonial Offerings',
    landscapeConnection: 'Autumn harvest → Sun-drying and dehulling → Hand-pounding in traditional confectionery workshops.',
    agriculturalSeason: 'Late Kharif crop harvested in November',
    stapleRegions: ['Magadh (Gaya)', 'Statewide'],
    dishesUsedIn: ['Gaya Tilkut', 'Anarsa Crust', 'Tilwa & Til Ladoo'],
    culturalRole: 'Customary offering for winter solar festivals, notably Makar Sankranti.',
    iconType: 'sparkles'
  },
  {
    id: 'gur-jaggery',
    name: 'Country Sugarcane Jaggery (Gur)',
    hindiName: 'देसी गन्ना गुड़',
    tagline: 'Unrefined Golden Nectar of Winter',
    landscapeConnection: 'Sugarcane fields of Champaran and central Bihar → Open-air iron boiling pans (Karahas) → Dark aromatic blocks.',
    agriculturalSeason: 'Winter cane crushing season (November–March)',
    stapleRegions: ['Statewide', 'Tirhut', 'Magadh'],
    dishesUsedIn: ['Thekua', 'Dahi Chura with Gur', 'Gaya Tilkut', 'Rasiya (Kheer)'],
    culturalRole: 'Natural unrefined sweetener used in sacred offerings, ensuring traditional purity in religious rites.',
    iconType: 'flame'
  }
];

export const EVERYDAY_MEAL_TRADITIONS = [
  {
    title: 'The Daily Bihari Thali',
    hindiTitle: 'दैनिक थाली: भात, दाल, भुजिया और चोखा',
    description:
      'At the heart of the home is the unhurried afternoon thali: steaming local rice (Bhaat), yellow lentils tempered with cumin and ghee, crisp pan-fried seasonal potato or pointed gourd (Bhujia), charred eggplant-tomato Chokha, and a dollop of spicy mango or red chili pickle.',
    culturalNote: 'Balanced, nutritious, and grounded in seasonal vegetable abundance.'
  },
  {
    title: 'Sattu on the Road',
    hindiTitle: 'सफर का साथी सत्तू',
    description:
      'For generations, workers, travelers, and students have moved across India with cloth bags of roasted chana sattu. Mixed with a cup of water, a pinch of salt, and a green chili on train platforms or bus stands, it is instant, complete nourishment without preservatives.',
    culturalNote: 'An ancient, natural ready-to-eat whole food documented across centuries of South Asian travel and agriculture.'
  },
  {
    title: 'Morning Chura-Ghugni at Railway Bazaars',
    hindiTitle: 'स्टेशन और चौक की चना-घुघनी',
    description:
      'From Patna Junction to rural weekly haats, daybreak begins with dry-spiced black chickpeas (Ghugni) ladled into dried Sal leaf donas over crisp flattened rice (Chura), topped with raw red onion and fresh coriander.',
    culturalNote: 'The soundtrack of Bihar’s morning commerce.'
  },
  {
    title: 'Seasonal Greens (Saag) & Makuni',
    hindiTitle: 'ऋतु अनुसार साग और मकुनी',
    description:
      'With each agricultural turn, local wild and cultivated greens—bathua, sarson, chana, khesari, and poi—are gathered and stir-fried with simple mustard oil and garlic, accompanied by thick whole-wheat sattu parathas (Makuni).',
    culturalNote: 'Deep ecological intimacy between field, forage, and kitchen.'
  }
];
