import { Dish } from '../types';
import { VERIFIED_IMAGES } from './media';

export const CUISINE_ITEMS: Dish[] = [
  {
    id: 'litti-chokha',
    name: 'Litti Chokha',
    hindiName: 'लिट्टी चोखा',
    originDistrict: 'bhojpur',
    category: 'Main Course',
    isVegetarian: true,
    giTag: false,
    image: VERIFIED_IMAGES.littiChokha,
    description: 'The defining culinary symbol of Bihar, beloved across the globe. Whole-wheat dough balls stuffed with spiced roasted gram flour (sattu) and slow-roasted over cow-dung cakes or charcoal embers, broken open, and submerged in golden desi ghee, served with smoky chokha.',
    ingredients: [
      'Stone-ground whole wheat flour',
      'Chana sattu (roasted Bengal gram flour)',
      'Kalonji (nigella seeds) & Ajwain (carom seeds)',
      'Raw mustard oil & Lemon juice',
      'Bharwa lal mirch ka masala (pickled red chili spices)',
      'Roasted eggplants, tomatoes, and boiled potatoes for Chokha',
      'Generous desi ghee'
    ],
    preparationMethod: 'Sattu is mixed with finely chopped ginger, garlic, green chilies, coriander, ajwain, kalonji, mustard oil, lemon juice, and pickle oil. The filling is sealed inside wheat dough balls. Traditionally, these are roasted directly over burning cow-dung embers (upla) until the exterior is blistered and cracked, dusted off, cracked open with hands, and dunked completely into warm melted desi ghee. Served alongside Chokha (roasted brinjal and tomatoes mashed with raw mustard oil, garlic, green chilies, and salt).',
    culturalContext: 'Ancient military ration of the Mauryan and Suri empires that required no water or perishable fats during long campaigns. Today it is a dish of democratic pride, shared equally in humble rural courtyards and five-star culinary banquets.'
  },
  {
    id: 'thekua',
    name: 'Thekua (Khajuria / Thokwa)',
    hindiName: 'ठेकुआ',
    originDistrict: 'patna',
    category: 'Traditional Prasad / Sweet',
    isVegetarian: true,
    giTag: false,
    image: VERIFIED_IMAGES.thekua,
    description: 'The sacred, immortal Prasad of Chhath Puja. A crispy, dense, melt-in-mouth cookie prepared with coarse whole wheat flour, dark country jaggery (gur), pure desi ghee, dried coconut slices, and green cardamom, pressed onto carved wooden stencils.',
    ingredients: [
      'Coarsely milled whole wheat flour (Mota Atta)',
      'Dark country jaggery (Gur) or refined sugar syrup',
      'Desi ghee (Moyen)',
      'Thinly sliced dried dry coconut (Sukha Nariyal)',
      'Green cardamom powder (Elaichi) & Fennel seeds (Saunf)',
      'Pure mustard oil or desi ghee for deep frying'
    ],
    preparationMethod: 'Wheat flour is rubbed with warm melted ghee until it holds shape when pressed. Jaggery syrup flavored with crushed cardamom, fennel, and coconut chips is gently incorporated to form a tight, stiff, crumbly dough. Portions are rolled into ovals and pressed onto a traditional carved wooden mold (Saancha) to imprint sacred floral and leaf patterns. These are deep-fried slowly over low wood flames until a rich reddish-brown hue and brittle crunch is achieved.',
    culturalContext: 'Central offering made to Lord Surya and Chhathi Maiya during Chhath Puja. Prepared under strict conditions of purity (Shuddhata) using newly harvested wheat and earthen clay stoves.'
  },
  {
    id: 'champaran-mutton',
    name: 'Champaran Ahuna (Handi) Mutton',
    hindiName: 'चंपारण अहुना मटन',
    originDistrict: 'west-champaran',
    category: 'Main Course (Non-Veg)',
    isVegetarian: false,
    giTag: false,
    image: VERIFIED_IMAGES.champaranMutton,
    description: 'The world-famous clay-pot stewed mutton that originated in Bettiah, Champaran. Marinated meat layered with whole peeled garlic pods and raw mustard oil, sealed inside an unglazed earthen handi with dough, and slow-cooked over smoldering wood embers.',
    ingredients: [
      'Tender fresh goat meat (Mutton) cut on the bone',
      'Whole unpeeled garlic bulbs (Pota Lahsun)',
      'Sliced red onions in equal ratio to meat',
      'Cold-pressed raw kachhi ghani mustard oil',
      'Whole crushed spices: Cinnamon, Black Cardamom, Cloves, Bay leaves',
      'Freshly ground ginger-garlic paste and crushed black peppercorns',
      'Sealing dough made of wheat flour'
    ],
    preparationMethod: 'Meat is marinated with sliced onions, mustard oil, whole spices, and entire intact bulbs of garlic. The mixture is placed in an unglazed earthenware pot (Ahuna), sealed airtight around the neck with wheat dough, and set upon dying coal embers. The pot is never stirred with a spoon; the cook periodically shakes the pot with wrapped cloths. As steam builds, meat braises in its own marrow juices and melted onion moisture for 60–90 minutes.',
    culturalContext: 'Pioneered by traditional cooks of Bettiah Raj and Champaran hunters. The clay pot imparts an earthy mineral sweetness, while whole garlic heads turn creamy like garlic butter inside the mouth.'
  },
  {
    id: 'silao-khaja',
    name: 'Silao Ka Khaja',
    hindiName: 'सिलाव का खाजा',
    originDistrict: 'nalanda',
    category: 'Sweet & Snack',
    isVegetarian: true,
    giTag: true,
    image: VERIFIED_IMAGES.silaoKhaja,
    description: 'A legendary 52-layer paper-thin crispy sweet with a Geographical Indication (GI) tag, crafted in the historic village of Silao between Nalanda and Rajgir. Light, flaky, and delicately sweetened.',
    ingredients: [
      'Refined wheat flour (Maida)',
      'Desi ghee or vegetable shortening (Moyen)',
      'Sugar syrup infused with green cardamom',
      'Local mineral water from the Rajgir springs'
    ],
    preparationMethod: 'Maida is kneaded into an elastic dough, rolled into gossamer-thin sheets, layered with ghee and starch paste, rolled into tight cylinders, and sliced diagonally into rectangular cakes. When fried gently in hot oil, the 52 layers separate and fan out like the pages of a book. They are briefly submerged in warm cardamom sugar syrup so the interior retains crisp airiness without becoming soggy.',
    culturalContext: 'Legend says Lord Buddha tasted Khaja while travelling from Rajgir to Nalanda and commended its delicate texture. Recognized with a GI Tag in 2018 for its heritage and unique reliance on local mineral-rich spring waters.'
  },
  {
    id: 'gaya-tilkut',
    name: 'Gaya Tilkut',
    hindiName: 'गया का तिलकुट',
    originDistrict: 'gaya',
    category: 'Seasonal Sweet',
    isVegetarian: true,
    giTag: false,
    image: VERIFIED_IMAGES.tilkut,
    description: 'A seasonal winter specialty from the lanes of Ramna in Gaya. Roasted white sesame seeds combined with boiling jaggery or sugar syrup, beaten vigorously with heavy wooden mallets until the sweet turns feather-light, soft, and brittle.',
    ingredients: [
      'Polished white sesame seeds (Safed Til)',
      'Dark winter sugarcane jaggery (Gur) or refined white sugar',
      'Green cardamom powder',
      'Water'
    ],
    preparationMethod: 'Sesame seeds are meticulously roasted until aromatic. Jaggery is boiled to a soft-ball consistency. The hot syrup is pulled and stretched repeatedly on a wall peg until it changes color and incorporates microscopic air pockets. Roasted til is folded in, and teams of two artisans rhythmically pound the hot mass with heavy wooden hammers (Musra) on flat stone slabs. The resulting disc is light enough to melt on the tongue.',
    culturalContext: 'Inextricably bound with the festival of Makar Sankranti (January 14) in Gaya, when pilgrims celebrate the northward journey of the sun (Uttarayan) with Dahi-Chura and Tilkut.'
  },
  {
    id: 'makhana-kheer',
    name: 'Mithila Makhana Kheer',
    hindiName: 'मिथिला मखाना खीर',
    originDistrict: 'madhubani',
    category: 'Dessert',
    isVegetarian: true,
    giTag: true,
    image: VERIFIED_IMAGES.makhanaKheer,
    description: 'The royal dessert of Mithila culture made with GI-tagged Mithila Makhana (Foxnuts). Popped lotus seeds slow-simmered in thickened whole milk, infused with green cardamom pods, saffron strands, and roasted dry fruits.',
    ingredients: [
      'Mithila Foxnuts / Gorgon nuts (Makhana)',
      'Full cream buffalo or cow milk',
      'Sugar or powdered rock sugar (Mishri)',
      'Green cardamom seeds (Elaichi)',
      'Saffron strands (Kesar)',
      'Toasted cashew nuts, raisins, and sliced almonds in pure cow ghee'
    ],
    preparationMethod: 'Half of the makhana is toasted in pure ghee until crunchy and kept whole, while the other half is coarsely crushed to thicken the milk. Milk is reduced to two-thirds volume in a heavy-bottomed kadhai. Crushed and whole makhana are added to absorb the sweet milk. Once the kheer thickens into a luscious velvety pudding, crushed cardamom, saffron bloomed in warm milk, and ghee-toasted nuts are folded in.',
    culturalContext: 'Makhana is regarded in Maithili culture as one of the four divine symbols (alongside Paan, Machh, and Pokhar). Served at wedding feasts, Kojagara Lakshmi festivals, and sacred family gatherings.'
  },
  {
    id: 'dal-pitha',
    name: 'Dal Pitha (Bhakosa)',
    hindiName: 'दाल पीठा',
    originDistrict: 'muzaffarpur',
    category: 'Breakfast / Snack',
    isVegetarian: true,
    giTag: false,
    image: '',
    description: 'Healthy steamed dumplings made from fresh rice flour stuffed with a spicy, aromatic mixture of soaked Bengal gram (chana dal), garlic, green chilies, and fresh coriander leaves.',
    ingredients: [
      'Fine rice flour (Chawal ka Atta)',
      'Soaked Bengal gram (Chana Dal)',
      'Fresh garlic cloves, ginger, and green chilies',
      'Cumin seeds (Jeera) & Hing (asafoetida)',
      'Turmeric powder & salt',
      'Fresh green coriander leaves'
    ],
    preparationMethod: 'Chana dal is soaked overnight and coarsely ground without water alongside garlic, green chillies, ginger, cumin, and spices. Rice flour is kneaded with warm water into a supple dough. Discs are shaped by hand, stuffed with spiced dal mixture, folded into half-moon crescents, and steamed over boiling water for 15 minutes. Often enjoyed freshly steamed or pan-tossed in mustard oil with curry leaves and mustard seeds.',
    culturalContext: 'Prepared in almost every Bihari household during winter mornings and on the festival of Poush Sankranti, serving as a wholesome, protein-rich, oil-free comfort food.'
  },
  {
    id: 'balushahi-sitamarhi',
    name: 'Runni Saidpur Balushahi',
    hindiName: 'रुन्नी सैदपुर बालूशाही',
    originDistrict: 'sitamarhi',
    category: 'Sweet',
    isVegetarian: true,
    giTag: false,
    image: '',
    description: 'The celebrated flaky, melt-in-mouth sweet from Runni Saidpur on the Muzaffarpur-Sitamarhi highway. Golden, deep-fried disks with multiple micro-layers that soak up warm sugar syrup with a crystalline crust.',
    ingredients: [
      'Refined flour (Maida)',
      'Pure desi ghee (Moyen)',
      'Curd (Dahi) & a pinch of baking soda',
      'Sugar syrup flavored with saffron and rose water'
    ],
    preparationMethod: 'Flour is very gently cut with chilled ghee and curd without over-kneading so that laminated gluten strands remain separate. Dough balls are depressed in the center and deep fried on the lowest flame in desi ghee for over 30 minutes until layered like puff pastry. Once golden, they are transferred into warm sugar syrup which penetrates deep into the porous crevices.',
    culturalContext: 'No journey between Muzaffarpur and Sitamarhi or Janakpur is complete without stopping at Runni Saidpur roadside confectioners to buy fresh boxes of Balushahi.'
  },
  {
    id: 'chana-ghugni',
    name: 'Bihari Chana Ghugni',
    hindiName: 'चना घुघनी',
    originDistrict: 'patna',
    category: 'Snack / Breakfast',
    isVegetarian: true,
    giTag: false,
    image: '',
    description: 'A spicy, tangy black chickpea curry tempered with cumin, whole dried red chillies, ginger juliennes, and amchur (dry mango powder), served alongside flattened beaten rice (Chuda) or hot puffed puris.',
    ingredients: [
      'Kala chana (small brown chickpeas) soaked overnight',
      'Onions, tomatoes, ginger, and garlic',
      'Roasted cumin powder & Coriander powder',
      'Kachhi Ghani mustard oil',
      'Amchur powder (dry mango powder) or Garam masala',
      'Fresh green chilies and julienned ginger for garnish'
    ],
    preparationMethod: 'Soaked chickpeas are slow-cooked with caramelized onions, tomato paste, and hand-ground spices in mustard oil until the masala coats each chickpea in a thick, semi-dry gravy. Garnished with raw onion rings, slit green chilies, and a squeeze of lime juice.',
    culturalContext: 'The quintessential breakfast across towns and railway platforms of Bihar, traditionally served on dried Sal leaf bowls (Dona) with crisp Chura Bhujia.'
  }
];
