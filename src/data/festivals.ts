import { Festival } from '../types';
import { VERIFIED_IMAGES } from './media';

export const FESTIVALS_DATA: Festival[] = [
  {
    id: 'chhath-puja',
    name: 'Chhath Puja (Surya Shashthi)',
    hindiName: 'छठ महापर्व (सूर्य षष्ठी)',
    slug: 'chhath-puja',
    timing: 'Kartik Shukla Shashthi (October/November) & Chaitra Shukla Shashthi (March/April)',
    monthGregorian: 'October / November & March / April',
    lunarTithi: 'Shukla Paksha Chaturthi to Saptami of Kartik & Chaitra months',
    season: 'autumn',
    traditionCategory: 'chhath',
    monthDisplay: 'OCT - NOV',
    monthIndex: 10,
    atmosphereQuote: 'In the pre-dawn mist along the Ganga, when millions stand chest-deep in water holding woven bamboo baskets towards the crimson horizon, there is neither priest nor caste—only human devotion offering gratitude to the cosmic sun.',
    regions: ['Magadh', 'Mithila', 'Bhojpur', 'Anga', 'Across Bihar and Global Bihari Diaspora'],
    associatedDistricts: ['patna', 'gaya', 'vaishali', 'muzaffarpur', 'bhojpur', 'bhagalpur', 'madhubani', 'aurangabad', 'nalanda', 'buxar'],
    prominence: 'The Supreme Mahaparva of Bihar — An Ancient Living Solar Tradition Celebrating Both Setting and Rising Sun',
    overview: 'The supreme festival (Mahaparva) of Bihar, observed with uncompromising purity, penance, and devotion over four rigorous days. Rooted in ancient Vedic reverence for Surya (the Sun) and Chhathi Maiya (Usha, the first light of dawn), it is a rare living tradition that worships the setting sun before worshipping the rising sun, symbolizing the cosmic cycle of life, renewal, and ecological gratitude.',
    description: 'Chhath is not a mere ritual; it is a four-day spiritual discipline of self-purification, family solidarity, and deep ecological harmony. The vratis (devotees, predominantly women) undertake a continuous 36-hour waterless fast while maintaining absolute cleanliness. The riverbanks and village ghats become egalitarian sanctuaries where social distinctions dissolve completely as everyone sweeps pathways, carries bamboo dauras, and stands side-by-side in sacred waters.',
    rituals: [
      'Day 1 - Nahay-Khay: Devotees bathe in sacred rivers or sanctified water, clean the household meticulously, and prepare a pure vegetarian meal of Kaddu-Bhat (bottle gourd cooked in pure cow ghee and Himalayan rock salt) served with Arwa rice in bronze or earthen utensils.',
      'Day 2 - Kharna (Lohanda): A day-long nirjala (waterless) fast. After sunset, the vrati prepares Rasiya (jaggery kheer made over mango wood fires in a brand-new earthen pot) and ghee-layered rotis. After offering this sacred prasad to the Sun God in solitary silence, the vrati partakes of it and commences an uninterrupted 36-hour fast without water.',
      'Day 3 - Sandhya Arghya: In the golden glow of late afternoon, families accompany the vrati in solemn barefoot processions to river ghats, carrying woven bamboo dauras and brass/bamboo soops loaded with Thekua, sugarcane stalks, coconuts, and wild fruits. Devotees stand waist-deep in the water to offer the first Arghya to the setting sun (Astaachalgami Surya).',
      'Day 4 - Usha Arghya & Parana: Long before dawn, devotees return to the riverbank under starlight. As the crimson rim of the Rising Sun (Usha) breaks across the water, offerings of raw milk and holy river water are made with devotional chants. The 36-hour fast concludes with Parana, drinking holy water and tasting ginger with jaggery.'
    ],
    ritualSequence: [
      {
        phase: 1,
        title: 'Nahay-Khay',
        hindiTitle: 'नहाय-खाय',
        dayTag: 'Day 1 • Purification',
        description: 'Bathing in sacred rivers followed by a simple, sanctified meal of bottle gourd (Kaddu) cooked in pure cow ghee with Himalayan rock salt and coarse sun-dried rice. Marks the beginning of complete mental and physical sanctification.',
        keyItems: ['Sacred river bath', 'Kaddu-Bhat', 'Earthen cooking vessels', 'Strict cleanliness']
      },
      {
        phase: 2,
        title: 'Kharna / Lohanda',
        hindiTitle: 'खरना / लोहंडा',
        dayTag: 'Day 2 • The Inner Penance',
        description: 'A day-long waterless fast. After sunset, the vrati prepares Rasiya (jaggery rice pudding) on a clay stove fuelled by mango wood. After silent oblations to Surya, the vrati eats and immediately enters the rigorous 36-hour waterless fast.',
        keyItems: ['Mango-wood earthen chulha', 'Rasiya (gur kheer)', 'Ghee rotis', 'Beginning of 36h Nirjala fast']
      },
      {
        phase: 3,
        title: 'Sandhya Arghya',
        hindiTitle: 'संध्या अर्घ्य (डूबते सूर्य की पूजा)',
        dayTag: 'Day 3 • Evening River Vigil',
        description: 'Procession to the river ghats carrying Daura and Soop filled with freshly baked Thekua and harvested crops. Devotees stand waist-deep in flowing water facing west, offering oblations to the setting sun in gratitude for life and sustenance.',
        keyItems: ['Bamboo Daura & Soop', 'Thekua prasad', 'Whole sugarcane stalks', 'Waist-deep river vigil']
      },
      {
        phase: 4,
        title: 'Usha Arghya & Parana',
        hindiTitle: 'उषा अर्घ्य एवं पारण (उगते सूर्य की पूजा)',
        dayTag: 'Day 4 • Dawn Awakening',
        description: 'Pre-dawn congregation at the ghats under lantern light. As the sun rises, milk and river water are poured in adoration to Usha. The grueling fast is broken with ginger and holy water, and the divine prasad is distributed freely to all.',
        keyItems: ['Pre-dawn ghat vigil', 'Raw milk Arghya', 'Ginger and prasad Parana', 'Universal blessings']
      }
    ],
    specialFoods: [
      'Thekua (traditional deep-fried cookie of whole wheat flour, jaggery, pure ghee, dry coconut, and crushed cardamom pressed onto carved wooden sanchas)',
      'Kaddu-Bhat (tender bottle gourd cooked with rock salt and cow ghee paired with unpolished rice)',
      'Rasiya (slow-simmered jaggery and milk kheer prepared in clay pots over mango wood flames)',
      'Kasar (sweet roasted rice flour and jaggery laddus made exclusively for Chhath offerings)'
    ],
    foodTraditions: [
      {
        name: 'Thekua (खजूर / ठकुआ)',
        hindiName: 'ठेकुआ (महाप्रसाद)',
        description: 'The defining culinary emblem of Chhath and Bihar. Made by kneading coarse whole wheat flour with reduced sugarcane jaggery (or sugar), fragrant green cardamom, fennel seeds, dry coconut flakes, and pure desi ghee. Pressed into intricate geometric and leaf motifs using hand-carved wooden moulds (Thapa/Sancha) and fried gently in pure cow ghee over clay stoves.',
        foodId: 'thekua',
        prasadContext: 'Treated with the highest degree of sanctity; never tasted during preparation.'
      },
      {
        name: 'Kaddu-Bhat (कद्दू-भात)',
        hindiName: 'कद्दू-भात',
        description: 'The ceremonial meal of Nahay-Khay. Fresh bottle gourd simmered slowly with rock salt (Sendha Namak), cumin, and pure ghee, accompanied by Arwa rice and chana dal. Represents digestive purification before the long fast.',
        foodId: 'kaddu-bhat',
        prasadContext: 'Eaten only after the entire home is washed and cleansed.'
      },
      {
        name: 'Rasiya & Ghee Roti (रसिया-रोटी)',
        hindiName: 'रसिया एवं घी की रोटी',
        description: 'A comforting, velvety pudding of freshly harvested rice simmered with full-cream milk and dark organic jaggery in unglazed clay pots. Served on sal-leaf plates alongside tender rotis slathered in warm ghee.',
        foodId: 'rasiya',
        prasadContext: 'Offered in total silence during the Kharna evening ritual.'
      }
    ],
    songsAndMusic: 'Chhath folk songs are the soul of the festival, passed down through women’s oral memory for centuries. Made immortal by Padma Bhushan Sharda Sinha, songs like "काँच ही बाँस के बहँगिया", "केलवा के पात पर उगेलन सुरुजमल", and "उ जे केरवा जे फरेला घवद से" resonate from every street, ghat, and household across Bihar during the four days.',
    musicTradition: {
      title: 'Geet of Chhathi Maiya',
      genre: 'Traditional Bhojpuri & Maithili Chhath Folk Geet',
      description: 'Sung collectively by women without instrumental accompaniment or with simple dholak rhythms, these songs narrate the dialogue between the devotee, the Sun God, and Chhathi Maiya, expressing prayers for family wellbeing, children, and bountiful harvest.',
      famousLines: 'काँच ही बाँस के बहँगिया, बहँगी लचकत जाए... बाट जे पूछेला बटोहिया, बहँगी केकरा के जाए? तू त आन्हर हउवे रे बटोहिया, बहँगी छठ माई के जाए...',
      oralTradition: 'Preserved by matriarchs through centuries of living oral transmission across rural courtyards.'
    },
    sacredPlaces: [
      {
        name: 'Patna Ganga Ghats (Collectorate, Digha, Mahendru & Gandhi Ghat)',
        hindiName: 'पटना गंगा घाट',
        districtId: 'patna',
        districtName: 'Patna',
        context: 'Miles of uninterrupted riverbanks illuminated by earthen diyas and welcoming millions of devotees simultaneously.'
      },
      {
        name: 'Deo Sun Temple (देव सूर्य मंदिर)',
        hindiName: 'देव सूर्य मंदिर',
        districtId: 'aurangabad',
        districtName: 'Aurangabad',
        context: 'An ancient stone temple uniquely facing West, renowned as one of the most auspicious pilgrimage sites for Chhath vows.'
      },
      {
        name: 'Baragaon Sun Temple & Surajpur Lake',
        hindiName: 'बड़ागांव सूर्य मंदिर (नालंदा)',
        districtId: 'nalanda',
        districtName: 'Nalanda',
        context: 'Historic lake and sun temple adjacent to ancient Nalanda ruins, revered since the Gupta era.'
      },
      {
        name: 'Ular Sun Temple (उलार सूर्य मंदिर)',
        hindiName: 'उलार सूर्य मंदिर',
        districtId: 'patna',
        districtName: 'Patna',
        context: 'Associated in regional tradition with the twelve ancient solar shrines (Ark Kshetras), featuring a historic holy tank where thousands congregate.'
      }
    ],
    originsHistory: 'Historically referenced in the Rigveda, where solar hymns venerate Savitr and Surya as the visual embodiment of cosmic truth. The epic Mahabharata recounts that Karna, King of Anga (modern Bhagalpur/Munger), stood waist-deep in the Ganga each midday to offer prayers to his father Surya. Queen Draupadi is also described as observing this penance in the forest to regain the lost kingdom of the Pandavas.',
    regionalVariation: 'Celebrated across all regions of Bihar, but with distinct local nuances: in Mithila, families often assemble around village pokharis (domestic lotus ponds) decorated with white rice-paste Aripan motifs, and songs feature gentle Maithili cadences; in Bhojpur and Saran, worship centers on the wide riverfronts of the Ganga and Gandak with resonant Bhojpuri folk geet; while in Magadh, historic sun temple kunds such as Deo (Aurangabad), Baragaon (Nalanda), and Ular (Patna) attract vast numbers for specific vows.',
    culturalSignificance: 'Chhath is uniquely democratic: there are no priestly intermediaries, no elaborate Sanskrit recitations required, and no temples necessary—the sanctum is the open sky and flowing water. Every devotee, rich or poor, prepares identical offerings in bamboo soops and cleans the public roads leading to the water.',
    significance: 'Celebrates solar energy, ecological water bodies, zero priest mediation (every individual prays directly to nature), and complete social equality on the ghats.',
    communityExperience: 'Entire villages and city neighborhoods mobilize weeks in advance. Volunteers sweep miles of approach roads barefoot, string fairy lights across alleys, set up community aid camps, and offer free milk and fruits to passing vratis.',
    image: VERIFIED_IMAGES.chhathPuja,
    source: 'Government of Bihar Culture Department & Bihar Tourism Cultural Registry',
    sourcesDetail: {
      primary: 'Department of Art, Culture and Youth, Government of Bihar — Intangible Cultural Heritage Dossier',
      secondary: 'Archaeological and Ethnographic Survey of Eastern India, Anthropological Survey of India',
      institutionalAuthority: 'Bihar State Tourism Development Corporation (BSTDC)'
    },
    multilingual: {
      title: {
        en: 'Chhath Puja (Surya Shashthi Mahaparva)',
        hi: 'छठ महापर्व (सूर्य षष्ठी)',
        bho: 'छठ मइया के महापर्ब',
        mai: 'छठि पावनि (सूर्य षष्ठी)'
      },
      tagline: {
        en: 'Where millions worship the setting sun and rising sun with equal devotion.',
        hi: 'जहाँ अस्त होते और उदय होते सूर्य दोनों को समान श्रद्धा से नमन किया जाता है।',
        bho: 'डूबत आउर उगत सुरुज के एकहि नेह से निहोरे वाला महापर्ब।',
        mai: 'अस्ताचल आ उदीयमान भास्करक पावन अनुष्ठान।'
      }
    }
  },
  {
    id: 'sama-chakeva',
    name: 'Sama-Chakeva',
    hindiName: 'सामा-चकेवा (मिथिला लोकपर्व)',
    slug: 'sama-chakeva',
    timing: 'Kartik Shukla Paksha to Kartik Purnima (November)',
    monthGregorian: 'November',
    lunarTithi: 'Shukla Paksha Saptami to Purnima of Kartik month',
    season: 'autumn',
    traditionCategory: 'folk',
    monthDisplay: 'NOV',
    monthIndex: 10,
    atmosphereQuote: 'Under the silver frost of Kartik moonlight, the daughters of Mithila sing to welcome the Himalayan winter birds, crafting clay sculptures of sibling devotion that are returned to the water at full moon.',
    regions: ['Mithila (Darbhanga, Madhubani, Samastipur, Sitamarhi)'],
    associatedDistricts: ['madhubani', 'darbhanga', 'samastipur', 'sitamarhi'],
    prominence: 'The Poetic Sister-Brother Folk Festival of Mithila Welcoming Migratory Birds',
    overview: 'A poignant and lyrical folk festival unique to the Mithila region, celebrating the enduring affection between brothers and sisters while celebrating the arrival of Himalayan winter migratory birds. Over eight nights leading to Kartik Purnima, young women sculpt miniature clay birds and gather in moonlit village courtyards to sing ancient Maithili ballads.',
    description: 'Sama-Chakeva is rooted in community storytelling, clay craftsmanship, and environmental sensitivity. Women sculpt clay figures of Sama (the female bird), Chakeva (her faithful mate), Charwak, and a wicked slanderous character named Chugla. Each night, girls walk with wicker baskets containing these figures balanced on their heads, placing them in open courtyards under the stars and singing songs of loyalty, sibling love, and bird migrations.',
    rituals: [
      'Clay Sculpting: Young girls dig alluvial clay from local riverbeds or pond banks to hand-model clay figures of Sama, Chakeva, Saptarshi (seven sages), Vrindavan, and Chugla, drying them in the winter sun.',
      'Nightly Courtyard Singing: Under the moonlight, women carry bamboo trays (Dala) bearing the clay birds to community courtyards, sitting in circles singing traditional Maithili songs that celebrate sibling protection.',
      'The Burning of Chugla: On Kartik Purnima night, the cotton moustache of the treacherous Chugla is ceremonially singed with glowing embers to symbolize the defeat of gossip and falsehood.',
      'Pond Immersion & Sibling Blessing: The clay birds are carried in joyful procession to village ponds and immersed, while brothers affectionately crush small clay remnants underfoot to ward off adversity for their sisters.'
    ],
    ritualSequence: [
      {
        phase: 1,
        title: 'Mitti ka Nirman (Clay Sculpting)',
        hindiTitle: 'माटी के मूर्ति निर्माण',
        dayTag: 'Days 1-2 • Artistic Crafting',
        description: 'Sisters sculpt fine clay into birds and characters representing Sama, Chakeva, the Seven Sages, and Chugla, decorating them with natural pigments and wheat grains.',
        keyItems: ['Alluvial river clay', 'Handmade bird sculptures', 'Bamboo Dala']
      },
      {
        phase: 2,
        title: 'Shubha Raat Geet (Moonlit Ballads)',
        hindiTitle: 'चाँदनी राति में गान',
        dayTag: 'Days 3-7 • Nocturnal Vigil',
        description: 'Every night after dinner, sisters gather in open courtyards with burning clay lamps, singing enchanting melodies that ask the night birds to bring peace and good fortune to their brothers.',
        keyItems: ['Earthen lamps', 'Wicker Dala on heads', 'Maithili folk ballads']
      },
      {
        phase: 3,
        title: 'Chugla Dahan & Visarjan',
        hindiTitle: 'चुगला दहन एवं विसर्जन',
        dayTag: 'Kartik Purnima • Final Farewell',
        description: 'On the full moon night, the slanderous Chugla’s moustache is burnt with jute stalks. The bird sculptures are fed puffed rice and gently immersed into village ponds to return home.',
        keyItems: ['Burnt jute stalks', 'Pond immersion', 'Brother-sister blessings']
      }
    ],
    specialFoods: [
      'Chura-Dahi with fresh winter date palm jaggery (Gur)',
      'Puffed rice laddoos (Murhi ka Ladoo)',
      'Mithila winter Tilkut and sesame sweets',
      'Freshly harvested seasonal sugarcane pieces'
    ],
    foodTraditions: [
      {
        name: 'Chura-Dahi & Gud (चूड़ा-दही एवं गुड़)',
        hindiName: 'चूड़ा-दही एवं नया गुड़',
        description: 'Crisp hand-pounded winter rice flakes paired with rich curd set in terracotta bowls and sweetened with fragrant sugarcane or date palm jaggery, shared among sisters and brothers after the ritual.',
        foodId: 'chura-dahi',
        prasadContext: 'Served as festive breakfast on Kartik Purnima.'
      }
    ],
    songsAndMusic: 'Sung in pure Maithili dialects, the ballads of Sama-Chakeva feature rich polyphonic melodies. Well-known lines include "गाम के अधिकारी, तोहे बड़ भारी" and "सामा चकेवा आब हे, पंसिया बहिन के घर आब हे", recounting the mythical journey of Princess Sama.',
    musicTradition: {
      title: 'Maithili Sama-Chakeva Geet',
      genre: 'Traditional Maithili Folk Songs',
      description: 'Lyrical antiphonal singing where groups of women exchange verses, creating a warm, resonant chorus that echoes through the quiet winter nights of Mithila.',
      famousLines: 'सामा चकेवा आब हे, बैसहु दलान पर आब हे... भाई के दुलारी बहिन गाबय, जुग जुग जिअ मोर भैया हे...',
      oralTradition: 'Practiced exclusively by women across generations in Mithila villages.'
    },
    sacredPlaces: [
      {
        name: 'Madhubani Rural Courtyards & Ponds',
        hindiName: 'मधुबनी ग्रामीण दालान एवं पोखरि',
        districtId: 'madhubani',
        districtName: 'Madhubani',
        context: 'Traditional Mithila home courtyards decorated with white rice-paste Aripan floor art.'
      },
      {
        name: 'Darbhanga Raj Lakefronts & Villages',
        hindiName: 'दरभंगा पोखरि तट',
        districtId: 'darbhanga',
        districtName: 'Darbhanga',
        context: 'Historic village water bodies where thousands of clay sculptures are immersed under the full moon.'
      }
    ],
    originsHistory: 'Derived from a legend recorded in the Skanda Purana: Sama, the daughter of Lord Krishna, was falsely accused of improper conduct by a court gossip named Chuda (Chugla). When a curse transformed her into a bird in the Himalayan forests, her devoted brother Samba underwent severe penance and restored her honor.',
    regionalVariation: 'Strictly concentrated within the Mithila cultural belt (Madhubani, Darbhanga, Samastipur, Sitamarhi) and adjacent Maithili-speaking border regions. While not traditionally observed in southern Magadh or western Bhojpur, in Mithila villages it remains a defining nocturnal winter folk ritual where young women sculpt clay birds and sing under Kartik moonlight.',
    culturalSignificance: 'Beyond mythology, Sama-Chakeva demonstrates an extraordinary early ecological awareness. Ancient Mithila welcomed Himalayan and Central Asian migratory birds arriving in the wetlands every November, celebrating their arrival as divine avian guests rather than game to be hunted.',
    significance: 'Originates from the Skanda Purana story of Krishna’s daughter Sama and her brother Samba who defended her honor against false slander. Highlights deep environmental consciousness regarding migratory bird species.',
    communityExperience: 'Entire villages are united as sisters move from courtyard to courtyard. Even in modern times, emigrant sisters return home or receive parcels of clay and bird motifs from Mithila.',
    image: VERIFIED_IMAGES.samaChakeva,
    source: 'Mithila Cultural Research Institute & Government of Bihar Tourism',
    sourcesDetail: {
      primary: 'Mithila Cultural Research Institute (Darbhanga) & Bihar Sangeet Natak Akademi',
      secondary: 'Folklore and Folk Traditions of North Bihar, Dr. Jayakanta Mishra',
      institutionalAuthority: 'Department of Culture, Government of Bihar'
    },
    multilingual: {
      title: {
        en: 'Sama-Chakeva Folk Festival',
        hi: 'सामा-चकेवा लोकपर्व',
        mai: 'सामा-चकेवा (मिथिलाक पावनि)'
      },
      tagline: {
        en: 'The moonlit folk festival of brother-sister bond and welcoming Himalayan birds.',
        hi: 'भाई-बहन के अटूट स्नेह और प्रवासी पक्षियों के स्वागत का मखमली लोकपर्व।',
        mai: 'भाई-बहिनक पावन नेह आ हिमालयक विहंगक स्वागतक लोकपर्व।'
      }
    }
  },
  {
    id: 'pitrapaksha-mela',
    name: 'Gaya Pitrapaksha Mahasangam',
    hindiName: 'गया पितृपक्ष महासंगम मेला',
    slug: 'gaya-pitrapaksha',
    timing: 'Bhadrapada Shukla Anant Chaturdashi to Ashwin Krishna Amavasya (September/October)',
    monthGregorian: 'September / October',
    lunarTithi: 'Krishna Paksha of Ashwin month (Pitru Paksha fortnight)',
    season: 'autumn',
    traditionCategory: 'hindu',
    monthDisplay: 'SEP - OCT',
    monthIndex: 8,
    atmosphereQuote: 'For fifteen sacred days, the world converges upon the sands of the Falgu, where pilgrims from across continents whisper the names of three generations of ancestors, sending forth prayers for eternal liberation.',
    regions: ['Magadh (Gaya) and global Hindu diaspora'],
    associatedDistricts: ['gaya'],
    prominence: 'The World’s Oldest and Largest Ancestral Remembrance Pilgrimage',
    overview: 'The pre-eminent ancestral remembrance gathering on earth, where hundreds of thousands of pilgrims from across India and around the globe journey to the holy city of Gaya in southern Bihar to perform Pind Daan rituals on the sandy banks of the sacred Falgu River and across the 45 historic Vedis for the peace and salvation of departed ancestors.',
    description: 'Sanctified in the Mahabharata, Garuda Purana, and Ramayana, Gaya is considered the paramount tirtha for ancestral oblations. The city transforms into an ancient spiritual encampment under the stewardship of the hereditary Gayawal Panda community. Pilgrims systematically visit sacred sites, offering pindas (sanctified rice and sesame balls) while chanting ancient Vedic mantras designed to release ancestral souls from karmic bonds.',
    rituals: [
      'Snan in the Sacred Falgu: Pilgrims take a ritual purification bath in the Falgu River (Antahsalila), whose waters flow beneath the sand bed.',
      'Pind Daan at 45 Ancient Vedis: Offering balls prepared from barley flour, black sesame seeds, honey, milk, and Ganga water at designated historical platforms.',
      'Charan Puja at Vishnupad Mandir: Laying tulsi leaves and pindas directly upon the 40-centimeter bas-relief footprint of Lord Vishnu embedded in solid granite rock.',
      'Sankalp at the Immortal Akshayavat: Concluding the pilgrimage beneath the immortal banyan tree, where legend recounts that Sita Devi blessed the tree for bearing witness to her truthful Pind Daan for King Dasharatha.'
    ],
    ritualSequence: [
      {
        phase: 1,
        title: 'Falgu Nadi Snan & Tarpan',
        hindiTitle: 'फल्गु नदी स्नान एवं तर्पण',
        dayTag: 'Opening Ritual',
        description: 'Purificatory bathing on the sands of the subterranean Falgu River, offering water through cupped hands with black sesame seeds (Kusha grass tarpan) to ancestors.',
        keyItems: ['Kusha grass ring', 'Black sesame seeds', 'Sacred water oblations']
      },
      {
        phase: 2,
        title: 'Vishnupad Footprint Offerings',
        hindiTitle: 'विष्णुपद पदचिह्न अर्पण',
        dayTag: 'Central Rite',
        description: 'Entering the sanctum of the 18th-century black basalt temple built by Queen Ahilyabai Holkar to place sacred pindas on the celestial Dharmashila footprint.',
        keyItems: ['Barley flour pindas', 'Tulsi leaves', 'Chandan paste']
      },
      {
        phase: 3,
        title: 'Akshayavat Final Ashirwad',
        hindiTitle: 'अक्षयवट मोक्ष संकल्प',
        dayTag: 'Concluding Blessings',
        description: 'Concluding prayers beneath the ancient Akshayavat banyan tree, where the Panda seals the pilgrimage with the traditional declaration: "Gaya Shraddha Safal Bhuyat" (May your Gaya Shraddha be fulfilled).',
        keyItems: ['Immortal banyan tree', 'Gayawal Panda blessing', 'Moksha resolution']
      }
    ],
    specialFoods: [
      'Pure Sattvic Pind Daan barley flour and sesame offerings',
      'Gaya Tilkut (beaten white sesame sweet cooked in raw sugar or jaggery)',
      'Gaya Anarsa (coarse rice flour cakes crusted with sesame seeds and stuffed with mawa)',
      'Traditional sattvic bhojan prepared without onion or garlic'
    ],
    foodTraditions: [
      {
        name: 'Gaya Tilkut & Anarsa (गया तिलकुट एवं अनरसा)',
        hindiName: 'गया तिलकुट',
        description: 'Renowned throughout India for its feather-light, flaky crispness. Master sweetmakers of Ramna and Tikari Road in Gaya repeatedly pound roasted sesame seeds with caramelized sugar or jaggery in stone mortars, creating a sweet that melts effortlessly on the tongue.',
        foodId: 'tilkut',
        prasadContext: 'Given as auspicious prasad to returning pilgrims.'
      }
    ],
    songsAndMusic: 'Continuous solemn chanting of Vedic Pitru Suktas from the Rigveda, accompanied by temple bells, conch shells (Shankha), and the recitation of ancestral genealogies (Vamshavali) preserved in ancient hand-bound registers by the Pandas.',
    sacredPlaces: [
      {
        name: 'Vishnupad Temple (विष्णुपद मंदिर)',
        hindiName: 'विष्णुपद मंदिर',
        districtId: 'gaya',
        districtName: 'Gaya',
        context: 'Granite temple enshrining the footprint of Lord Vishnu on Dharmashila.'
      },
      {
        name: 'Akshayavat Banyan Tree (अक्षयवट)',
        hindiName: 'अक्षयवट वृक्ष',
        districtId: 'gaya',
        districtName: 'Gaya',
        context: 'Ancient immortal tree where Lord Rama and Sita performed Pind Daan for Dasharatha.'
      },
      {
        name: 'Falgu River Banks (फल्गु नदी घाट)',
        hindiName: 'फल्गु नदी',
        districtId: 'gaya',
        districtName: 'Gaya',
        context: 'Subterranean holy river where pilgrims dig shallow pits to draw pure sacred water.'
      }
    ],
    originsHistory: 'Mentioned extensively in the Ramayana, where Sita performed Pind Daan using sand balls from the Falgu when Rama was away procuring supplies. Mentioned in the Mahabharata as Gayapuri, where the Pandavas visited during their exile.',
    regionalVariation: 'While Hindus perform ancestral Shraddha ceremonies nationwide, Gaya holds the unique Vedic designation as the paramount tirtha where ancestral souls obtain permanent liberation (Moksha). The ritual is uniquely anchored in Gaya’s geographical reality: the subterranean sands of the Falgu River, the 45 ancient Vedis, the basalt Vishnupad footprint, and the genealogical registry maintained over generations by the hereditary Gayawal Pandas.',
    culturalSignificance: 'A profound cultural manifestation of filial gratitude (Pitru Rin) transcending generations. Families trace lineage records spanning centuries, renewing an unbroken thread of memory across time.',
    significance: 'Sanctified in the Garuda Purana and Ramayana. It is believed that performing Pind Daan in Gaya frees ancestors from the cycle of rebirth and attains Moksha.',
    communityExperience: 'The district administration sets up tent cities, medical camps, and multi-lingual pilgrim assistance centers as over 500,000 visitors arrive from every state in India and over 30 countries.',
    image: VERIFIED_IMAGES.pitrapaksha,
    source: 'Gaya District Administration & Archaeological Survey of India',
    sourcesDetail: {
      primary: 'District Administration Gaya & Gayawal Panda Sabha Historical Records',
      secondary: 'The Sacred Complex in Hindu Gaya, Prof. L.P. Vidyarthi (1961)',
      institutionalAuthority: 'Bihar State Tourism Development Corporation'
    },
    multilingual: {
      title: {
        en: 'Gaya Pitrapaksha Mahasangam',
        hi: 'गया पितृपक्ष महासंगम',
        mag: 'गया पितरपख मेला'
      },
      tagline: {
        en: 'The eternal gathering for ancestral peace and liberation on the banks of Falgu.',
        hi: 'फल्गु के पावन तट पर पूर्वजों की शांति एवं मोक्ष का शाश्वत महासंगम।'
      }
    }
  },
  {
    id: 'sonepur-mela',
    name: 'Sonepur Harihar Kshetra Mela',
    hindiName: 'सोनपुर हरिहर क्षेत्र मेला (छत्तर मेला)',
    slug: 'sonepur-mela',
    timing: 'Kartik Purnima (November/December, lasting approximately 30 days)',
    monthGregorian: 'November / December',
    lunarTithi: 'Commences on Kartik Purnima (full moon of Kartik month)',
    season: 'autumn',
    traditionCategory: 'regional',
    monthDisplay: 'NOV - DEC',
    monthIndex: 10,
    atmosphereQuote: 'Where ancient trade routes met the sacred confluence, war elephants once stood where Marwari horses and folk dancers now gather beneath the winter stars of Saran.',
    regions: ['Saran, Vaishali, and across Northern India'],
    associatedDistricts: ['saran', 'vaishali', 'patna'],
    prominence: 'Asia’s Largest Rural Cattle, Pastoral & Cultural Carnival',
    overview: 'Asia’s largest rural livestock fair and folk carnival, held on the historic confluence of the sacred Ganga and Gandak (Narayani) rivers at Sonepur in Saran district. Commencing with a holy sunrise dip on Kartik Purnima, the fair sprawls over several square kilometers for an entire month, blending profound spiritual devotion with pastoral animal trading, rustic theatrical performances, circuses, and traditional handicrafts.',
    description: 'Known locally as the "Chhattar Mela", Sonepur carries millennia of documented history. Chandragupta Maurya, the founder of the Mauryan Empire, historically purchased war elephants and cavalry horses here for his imperial army. Today, while wildlife protection regulations have adapted animal trading, the mela remains a spectacle of rural India, where champion horses, pedigreed bullocks, and camels paraded beside bustling open-air bazaars selling everything from Madhubani paintings to brassware and farming implements.',
    rituals: [
      'Kartik Purnima Mahasnan: A sunrise holy dip at the confluence (Sangam) of the holy Ganga and Gandak rivers, believed to wash away sins and bring spiritual merit.',
      'Jalabhisheka at Baba Harihar Nath Temple: Offering holy Sangam water to Lord Harihar Nath—a rare composite deity uniting Lord Vishnu (Hari) and Lord Shiva (Har) in a single idol.',
      'Gajendra Moksha Puja: Commemorative prayer honoring the legendary rescue of the Elephant King from the cosmic crocodile at this very river confluence.',
      'Evening Ganga-Gandak Maha Aarti: Dazzling brass lamp aarti conducted on the river ghats as darkness settles over the fairgrounds.'
    ],
    ritualSequence: [
      {
        phase: 1,
        title: 'Kartik Purnima Sangam Snan',
        hindiTitle: 'कार्तिक पूर्णिमा संगम स्नान',
        dayTag: 'Day 1 • Sunrise Sacred Bath',
        description: 'Hundreds of thousands assemble on the riverbanks at 4:00 AM to bathe at the exact meeting point of the Gandak and Ganga rivers as the full moon sets.',
        keyItems: ['Gandak-Ganga confluence', 'Sunrise holy dip', 'Floating earthen lamps']
      },
      {
        phase: 2,
        title: 'Baba Harihar Nath Darshan',
        hindiTitle: 'बाबा हरिहर नाथ जलाभिषेक',
        dayTag: 'Spiritual Center',
        description: 'Devotees carry copper urns of river water to the historic temple originally believed to have been established by Lord Rama on his journey to Janakpur.',
        keyItems: ['Harihar composite murti', 'Bilva leaves and milk', 'Ancient sanctum']
      },
      {
        phase: 3,
        title: 'Pastoral Trade & Mela Carnival',
        hindiTitle: 'पशु मेला एवं लोक उत्सव',
        dayTag: 'Month-long Cultural Fair',
        description: 'Parades of Marwari horses, rural agricultural competitions, folk theater (Nautanki), and expansive bazaar lanes displaying regional rural craftsmanship.',
        keyItems: ['Marwari horses', 'Rustic bazaars', 'Bhojpuri theater', 'Folk dancers']
      }
    ],
    specialFoods: [
      'Gigantic crisp Mela Jalebis made on massive outdoor iron woks',
      'Rustic Litti Chokha roasted over open wood and cow-dung embers',
      'Sweet and spiced Makhana snacks and fresh winter sugarcane juice',
      'Gaja, Khaja, and traditional regional rural confectioneries'
    ],
    foodTraditions: [
      {
        name: 'Mela Jalebi & Litti Chokha (मेला जलेबी एवं लिट्टी-चोखा)',
        hindiName: 'सोनपुर मेला जलेबी',
        description: 'Enormous, spiraled jalebis fried golden brown in smoking hot ghee and steeped in saffron-scented syrup, served fresh alongside rustic Littis broken open and drenched in yellow ghee.',
        foodId: 'litti-chokha',
        prasadContext: 'The quintessential open-air culinary experience of Sonepur visitors.'
      }
    ],
    songsAndMusic: 'Vibrant Bhojpuri theatrical music, classical Shehnai recitations at the Harihar Nath temple, Birha folk songs sung by rural pastoralists, and contemporary cultural stage performances organized by the Department of Art and Culture.',
    sacredPlaces: [
      {
        name: 'Baba Harihar Nath Temple (बाबा हरिहरनाथ मंदिर)',
        hindiName: 'हरिहरनाथ मंदिर',
        districtId: 'saran',
        districtName: 'Saran',
        context: 'Ancient temple enshrining the composite Vishnu-Shiva deity.'
      },
      {
        name: 'Ganga-Gandak Sangam Ghats (संगम तट)',
        hindiName: 'गंगा-गंडक संगम घाट',
        districtId: 'saran',
        districtName: 'Saran',
        context: 'The mythological site of Gajendramoksha where the holy rivers meet.'
      }
    ],
    originsHistory: 'Originates in ancient Vedic lore described in the Bhagavata Purana (Gajendra Moksha legend). Historically attested during the Mauryan period, Mughal times (under Akbar and Jahangir for military elephant procurement), and the British Raj as the premier horse trading market of Northern India.',
    regionalVariation: 'Geographically situated in Saran district at the confluence of the Gandak and Ganga across from Patna, the fair functions as an expansive cultural bridge uniting North Bihar (Tirhut and Saran divisions) with South Bihar and the wider northern Indian pastoral belt. The dialect, folk theater (Nautanki), and culinary atmosphere are predominantly Bhojpuri and Magahi.',
    culturalSignificance: 'A rare living intersection of ancient mythology, agrarian economics, and rural folk entertainment where urban and rustic Bihar mingle freely for a month.',
    significance: 'Historical roots tracing back to Chandragupta Maurya who purchased war elephants and cavalry horses here. Celebrates the mythological Gajendramoksha legend where Lord Vishnu rescued the elephant king from a crocodile.',
    communityExperience: 'Generations of families pitch tents along the sandy riverbanks, treating the fair as an annual winter reunion. Artists, musicians, and traders travel from as far as Rajasthan, Punjab, and Bengal.',
    image: VERIFIED_IMAGES.sonepurMela,
    source: 'Department of Tourism, Government of Bihar & Saran District Administration',
    sourcesDetail: {
      primary: 'Saran District Gazetteers & Bihar State Tourism Development Corporation',
      secondary: 'The Great Cattle Fair of Sonepur: An Ethnographic Account, Bihar Cultural Society',
      institutionalAuthority: 'Sonepur Mela Authority, Government of Bihar'
    },
    multilingual: {
      title: {
        en: 'Sonepur Harihar Kshetra Mela',
        hi: 'सोनपुर हरिहर क्षेत्र मेला',
        bho: 'सोनपुर के छत्तर मेला'
      },
      tagline: {
        en: 'Where ancient mythology, pastoral trade, and rustic carnival converge on the river confluence.',
        hi: 'गंगा-गंडक संगम पर पौराणिक आस्था, पशु मेला और ग्रामीण उत्सव का अनूठा संगम।'
      }
    }
  },
  {
    id: 'makar-sankranti',
    name: 'Makar Sankranti (Til Sakraat)',
    hindiName: 'मकर संक्रांति (तिल संक्रांत / खिचड़ी)',
    slug: 'makar-sankranti',
    timing: 'January 14-15 (Poush / Magh transition)',
    monthGregorian: 'January',
    lunarTithi: 'Solar transition of the Sun into Makara (Capricorn) constellation',
    season: 'winter',
    traditionCategory: 'harvest',
    monthDisplay: 'JAN',
    monthIndex: 0,
    atmosphereQuote: 'The aroma of roasted sesame, crunchy jaggery Tilkut, and thick earthen-pot dahi signals the crisp dawn of Uttarayan, warming village verandas across Bihar.',
    regions: ['Statewide across all 38 districts of Bihar'],
    associatedDistricts: ['gaya', 'patna', 'nalanda', 'bhojpur', 'madhubani', 'bhagalpur'],
    prominence: 'The Great Harvest Festival of Solar Transition, Tilkut, and Sacred Hot Spring Baths',
    overview: 'A major harvest and solar festival celebrated with immense enthusiasm throughout Bihar to mark the auspicious transition of the Sun into the northern hemisphere (Uttarayan). Celebrated with early morning holy dips in the Ganga, Gandak, and the legendary natural thermal hot springs of Rajgir, followed by the festive consumption of Chura-Dahi, Gaya Tilkut, Lai, and evening community Khichdi.',
    description: 'In Bihar, Makar Sankranti is affectionately called "Til Sakraat" or "Khichdi". The day represents the culimination of winter harvests, welcoming longer days and new agricultural cycles. Families exchange gifts of newly harvested flattened rice (Chura), freshly churned curd (Dahi), and seasonal sesame delicacies. In the evening, the traditional culinary feast of Khichdi is prepared with four classical accompaniments known proverbially: "खिचड़ी के चार यार—दही, पापड़, घी, अचार".',
    rituals: [
      'Ganga & Hot Spring Snan: Thousands bathe at sunrise in the sacred Ganga at Patna, Buxar, and Sultanganj, or in the natural sulfur-rich thermal springs of Brahmakund at Rajgir.',
      'Surya Arghya & Dan: Offering sesame seeds, jaggery, and blankets to the needy as a gesture of gratitude and charity for winter protection.',
      'Dahi-Chura Feast: Midday banquet of thick earthen-pot curd, beaten rice flakes, fresh date-palm or sugarcane jaggery, and sesame tilkut.',
      'Kite Flying & Evening Khichdi: Colorful kites fill winter skies across Patna and Danapur, followed by a dinner of steaming moong-dal Khichdi seasoned with pure ghee and roasted chokha.'
    ],
    ritualSequence: [
      {
        phase: 1,
        title: 'Pratahkal Snan (Dawn Sacred Bath)',
        hindiTitle: 'प्रातःकाल गंगा एवं कुंड स्नान',
        dayTag: 'Dawn Vigil',
        description: 'Bathing in the brisk waters of sacred rivers or the 42°C natural thermal springs of Brahmakund in Rajgir hills, followed by solar chants.',
        keyItems: ['Brahmakund hot springs', 'Ganga bathing', 'Surya Gayatri mantra']
      },
      {
        phase: 2,
        title: 'Dahi-Chura & Tilkut Bhojan',
        hindiTitle: 'दही-चूड़ा एवं तिलकुट भोज',
        dayTag: 'Midday Harvest Feast',
        description: 'Every household gathers to enjoy freshly pounded winter Chura paired with thick Dahi, melting Gaya Tilkut, and puffed rice (Murmura/Ramdana) Lai.',
        keyItems: ['Terracotta curd pots', 'Katarni Chura', 'Gaya Tilkut', 'New jaggery']
      },
      {
        phase: 3,
        title: 'Sanjh Khichdi (The Four Companions)',
        hindiTitle: 'सांझ खिचड़ी भोज',
        dayTag: 'Evening Gathering',
        description: 'Community preparation of fragrant Khichdi served with its proverbially celebrated quartet: curd, crispy papad, pure cow ghee, and spicy mango/chili pickle.',
        keyItems: ['Moong dal khichdi', 'Desi ghee', 'Achar and papad', 'Alu-Baingan chokha']
      }
    ],
    specialFoods: [
      'Gaya Tilkut (crisp wafer of beaten sesame and jaggery)',
      'Katarni Chura with Mithila or Magadh Dahi in earthen pots',
      'Lai (puffed rice and Ramdana sweetened into crunchy spheres with jaggery)',
      'Desi Ghee Khichdi with Chokha and roasted papad'
    ],
    foodTraditions: [
      {
        name: 'Gaya Tilkut & Lai (तिलकुट एवं लाई)',
        hindiName: 'गया तिलकुट',
        description: 'Crisp, feather-layered confection prepared by master karigars pounding roasted sesame with hot molten jaggery or sugar, melting instantly on the palate.',
        foodId: 'tilkut',
        prasadContext: 'Mandatory seasonal sweet for Sankranti.'
      }
    ],
    songsAndMusic: 'Festive folk songs celebrating the arrival of harvest and the sun’s warmth, accompanied by family merriment and terrace music as kites fill the sky.',
    sacredPlaces: [
      {
        name: 'Rajgir Brahmakund Hot Springs (राजगीर ब्रह्मकुंड)',
        hindiName: 'ब्रह्मकुंड',
        districtId: 'nalanda',
        districtName: 'Nalanda',
        context: 'Ancient natural hot sulfur springs where hundreds of thousands bathe on Sankranti.'
      },
      {
        name: 'Patna Ganga Ghats (गांधी घाट, दीघा घाट)',
        hindiName: 'पटना गंगा तट',
        districtId: 'patna',
        districtName: 'Patna',
        context: 'Vibrant riverside bathing crowds and rooftop kite-flying gatherings.'
      }
    ],
    originsHistory: 'Rooted in Vedic astronomical observations of the winter solstice and the sun’s northward celestial movement (Uttarayan). Celebrated across ancient Magadh as an agrarian Thanksgiving festival.',
    regionalVariation: 'Marked by distinct culinary focal points across Bihar’s cultural territories: in Magadh (Gaya and Patna), the beaten sesame confectionery of Gaya Tilkut and the evening community Khichdi with its "four friends" (dahi, papad, ghee, achar) are mandatory; in Mithila, aromatic Katarni Chura with thick clay-pot curd and fresh date-palm jaggery leads the day; in Rajgir, celebration centers on early morning holy dips in the 42°C natural sulfur hot springs of Brahmakund.',
    culturalSignificance: 'Symbolizes warm social bonds, forgiveness of past grievances, and communal sharing of the new harvest across social strata.',
    significance: 'Marks the harvest season, solar transition into Capricorn (Makar), and community solidarity through shared seasonal cuisine.',
    communityExperience: 'Sankranti transcends all divisions: street corners are crowded with makeshift wood stoves where fresh Tilkut and Lai are hammered out, and families share plates across adjoining rooftops.',
    image: VERIFIED_IMAGES.tilkut,
    source: 'Bihar State Tourism Development Corporation & Ethnographic Records',
    sourcesDetail: {
      primary: 'Department of Art and Culture, Bihar Cultural Almanac',
      secondary: 'Folk Life and Festivities of Bihar, Dr. P.C. Roy Choudhury',
      institutionalAuthority: 'Bihar State Tourism Development Corporation'
    },
    multilingual: {
      title: {
        en: 'Makar Sankranti (Til Sakraat)',
        hi: 'मकर संक्रांति (तिल संक्रांत / खिचड़ी)',
        bho: 'खिचड़ी / तिल सकरात',
        mai: 'तिल संक्रांत'
      },
      tagline: {
        en: 'The golden harvest of sesame, churned curd, and the sun’s northward journey.',
        hi: 'तिल, गुड़, दही-चूड़ा और सूर्य के उत्तरायण का पावन लोकपर्व।'
      }
    }
  },
  {
    id: 'prakash-parv',
    name: 'Prakash Parv (Guru Gobind Singh Jayanti)',
    hindiName: 'प्रकाश पर्व (गुरु गोविंद सिंह जी का जन्मोत्सव)',
    slug: 'prakash-parv',
    timing: 'Poush Shukla Saptami (December / January)',
    monthGregorian: 'December / January',
    lunarTithi: 'Shukla Saptami of Poush month in the Nanakshahi / Hindu calendar',
    season: 'winter',
    traditionCategory: 'sikh',
    monthDisplay: 'DEC - JAN',
    monthIndex: 11,
    atmosphereQuote: 'Patna City echoes with sacred shabad kirtan and martial drumbeats as hundreds of thousands from across the globe return to the birthplace of the tenth Sikh Guru.',
    regions: ['Patna (Takht Sri Patna Sahib) and worldwide Sikh sangats'],
    associatedDistricts: ['patna'],
    prominence: 'The Sacred Birthplace Celebration of the Tenth Sikh Guru at Takht Sri Patna Sahib',
    overview: 'The momentous birth anniversary celebration of Guru Gobind Singh Ji, the tenth Sikh Guru, philosopher, poet, and warrior, born on December 22, 1666, in the ancient city of Patna. Centered at Takht Sri Harimandir Ji Patna Sahib—one of the five Takhts (temporal seats) of Sikhism—the festival draws hundreds of thousands of devotees from across India and worldwide.',
    description: 'During Prakash Parv, the historic neighborhood of Patna Sahib (old Patna City) transforms into a city of lights and devotion. Continuous recitation of Guru Granth Sahib (Akhand Path), daily morning processions (Prabhat Pheris) echoing with cymbals and shabads, and an awe-inspiring Nagar Kirtan with martial Gatka demonstrations wind through decorated city gates. Giant community kitchens (Guru ka Langar) serve warm meals to all visitors 24 hours a day without discrimination.',
    rituals: [
      'Akhand Path: Non-stop 48-hour continuous reading of the holy Sri Guru Granth Sahib Ji by devout pathis.',
      'Prabhat Pheri: Early morning devotional walks through narrow historic alleys chanting sacred hymns.',
      'Grand Nagar Kirtan: Colossal ceremonial procession led by the Panj Pyare (Five Beloved Ones) guarding the Palki Sahib carrying the holy scripture, accompanied by brass bands and school contingents.',
      'Gatka Martial Displays: Spectacular demonstrations of traditional Sikh martial arts using swords, shields, and wooden sticks.',
      '24/7 Guru Ka Langar: Round-the-clock voluntary community kitchens serving nourishing food to over 100,000 pilgrims daily.'
    ],
    ritualSequence: [
      {
        phase: 1,
        title: 'Prabhat Pheriyan (Morning Hymns)',
        hindiTitle: 'प्रभात फेरियां',
        dayTag: 'Days Leading to Jayanti',
        description: 'Pre-dawn processions traversing ancient Patna streets singing shabads like "वाहो वाहो गोबिंद सिंघ आपे गुर चेला" in the winter fog.',
        keyItems: ['Devotional cymbals', 'Traditional dholak', 'Winter pre-dawn march']
      },
      {
        phase: 2,
        title: 'Maha Nagar Kirtan',
        hindiTitle: 'महान नगर कीर्तन',
        dayTag: 'Eve of Prakash Parv',
        description: 'Magnificent multi-kilometer procession from Gurdwara Gai Ghat to Takht Patna Sahib, featuring sword displays and floral canopies.',
        keyItems: ['Panj Pyare in saffron robes', 'Golden Palki Sahib', 'Gatka martial artists']
      },
      {
        phase: 3,
        title: 'Prakash Divas & Shabad Kirtan',
        hindiTitle: 'प्रकाश दिवस एवं शबद कीर्तन',
        dayTag: 'Main Day Vigil',
        description: 'Nightlong devotional musical recitations by renowned Ragis inside the marble sanctum, concluding with the distribution of Karah Prasad.',
        keyItems: ['Marble sanctum', 'Continuous Raga kirtan', 'Karah Prasad']
      }
    ],
    specialFoods: [
      'Karah Prasad (sacred semolina/wheat flour halwa prepared with equal parts flour, pure desi ghee, and sugar)',
      'Guru ka Langar (dal makhani, warm rotis, mixed vegetables, and fragrant rice kheer served round the clock)'
    ],
    foodTraditions: [
      {
        name: 'Karah Prasad (कड़ाह प्रसाद)',
        hindiName: 'कड़ाह प्रसाद',
        description: 'Warm, golden sanctified pudding kneaded with pure clarified butter, whole wheat flour, and sugar while reciting sacred scriptures, served warm by hand to every devotee entering the sanctum.',
        foodId: 'karah-prasad',
        prasadContext: 'Offered directly after the conclusion of Ardas.'
      }
    ],
    songsAndMusic: 'Exquisite Gurbani Kirtan performed in classical Indian ragas by renowned Hazuri Ragis, accompanied by harmonium, tabla, and traditional stringed rabab instruments, filling the marble halls with peace.',
    sacredPlaces: [
      {
        name: 'Takht Sri Patna Sahib (तख्त श्री हरमंदिर जी पटना साहिब)',
        hindiName: 'तख्त श्री पटना साहिब',
        districtId: 'patna',
        districtName: 'Patna',
        context: 'One of the five Takhts of Sikhism, marking the exact birthplace of Guru Gobind Singh Ji.'
      },
      {
        name: 'Gurdwara Bal Leela Maini Sangat (गुरुद्वारा बाल लीला)',
        hindiName: 'गुरुद्वारा बाल लीला',
        districtId: 'patna',
        districtName: 'Patna',
        context: 'Where the child Guru spent his early childhood playing with local companions.'
      },
      {
        name: 'Gurdwara Guru Ka Bagh (गुरुद्वारा गुरु का बाग)',
        hindiName: 'गुरु का बाग',
        districtId: 'patna',
        districtName: 'Patna',
        context: 'Historic garden visited by Guru Tegh Bahadur Ji upon returning to Patna.'
      }
    ],
    originsHistory: 'Commemorates the birth of Gobind Rai (later Guru Gobind Singh) in Patna in 1666 to Guru Tegh Bahadur Ji and Mata Gujri. The Guru spent his formative childhood years in Patna before moving to Anandpur Sahib in Punjab.',
    regionalVariation: 'Centered in the historical quarters of Patna City (Patna Sahib), the celebration carries a unique local syncretic flavor where local Bihari Hindu, Muslim, and Sikh communities jointly offer warm drinking water and flower showers to passing Prabhat Pheris, and district administrative authorities erect monumental tent cities across Gandhi Maidan and Bypass.',
    culturalSignificance: 'A historic testament to Bihar’s foundational role in Sikh spiritual heritage. Showcases the profound tradition of universal service (Seva) and hospitality.',
    significance: 'Commemorates the birth anniversary of the tenth Sikh Guru at Takht Sri Patna Sahib, celebrated with monumental Nagar Kirtan and universal Langar.',
    communityExperience: 'The Bihar Government and Patna district authorities erect massive temporary tent cities (tent cities at Gandhi Maidan and Bypass) to accommodate hundreds of thousands of overseas and national pilgrims, providing free transport and citywide welcome centers.',
    image: VERIFIED_IMAGES.patnaSahib,
    source: 'Takht Sri Harimandir Ji Prabandhak Committee & Bihar State Tourism Development Corporation',
    sourcesDetail: {
      primary: 'Takht Sri Patna Sahib Prabandhak Committee Archives',
      secondary: 'The Sikh Heritage of Bihar, Department of Art and Culture, Government of Bihar',
      institutionalAuthority: 'Bihar State Tourism Development Corporation'
    },
    multilingual: {
      title: {
        en: 'Prakash Parv (Guru Gobind Singh Jayanti)',
        hi: 'प्रकाश पर्व (गुरु गोविंद सिंह जी का जन्मोत्सव)'
      },
      tagline: {
        en: 'The sacred birthplace celebration of universal valor, compassion, and divine light in Patna.',
        hi: 'पटना साहिब की पावन धरा पर दशमेश पिता के अवतरण का आलौकिक प्रकाशोत्सव।'
      }
    }
  },
  {
    id: 'buddha-purnima',
    name: 'Buddha Purnima (Vaishakha Purnima)',
    hindiName: 'बुद्ध पूर्णिमा (वैशाख पूर्णिमा / बुद्ध जयंती)',
    slug: 'buddha-purnima',
    timing: 'Vaishakha Purnima (May)',
    monthGregorian: 'May',
    lunarTithi: 'Purnima (full moon night) of Vaishakha month',
    season: 'summer',
    traditionCategory: 'buddhist',
    monthDisplay: 'MAY',
    monthIndex: 4,
    atmosphereQuote: 'Chants in Pali, Tibetan, Sinhala, and Japanese weave together under the rustling leaves of the sacred pipal tree, celebrating the light that touched the world twenty-five centuries ago.',
    regions: ['Bodh Gaya (Gaya), Vaishali, Rajgir, Nalanda, and global Buddhist community'],
    associatedDistricts: ['gaya', 'vaishali', 'nalanda'],
    prominence: 'The Thrice-Blessed Day of Birth, Enlightenment, and Mahaparinirvana of the Buddha',
    overview: 'The most sacred day in the Buddhist calendar, celebrating the "Thrice-Blessed" events of Gautama Buddha’s life: his birth in Lumbini, his supreme Enlightenment beneath the sacred Bodhi Tree in Bodh Gaya, and his Mahaparinirvana in Kushinagar—all believed to have transpired on the same Vaishakha Purnima full moon night. Bodh Gaya becomes the epicenter of global Buddhist pilgrimage.',
    description: 'Tens of thousands of monks, nuns, and lay practitioners from Sri Lanka, Thailand, Myanmar, Tibet, Japan, Vietnam, Bhutan, and around the globe assemble at the UNESCO World Heritage Mahabodhi Temple. Clad in robes of saffron, maroon, and white, devotees carry colorful Buddhist prayer flags, light thousands of butter lamps around the diamond throne (Vajrasana), and engage in silent meditation, sutra chanting, and peace walks.',
    rituals: [
      'Bodhi Vriksha Puja: Devotees circumambulate the direct descendant of the sacred Bodhi Tree, pouring sanctified water and milk upon its roots and garlanding the stone railing.',
      'World Peace Chanting: Multi-tradition prayer recitations held simultaneously in Pali, Sanskrit, Tibetan, and Asian languages inside the Mahabodhi compound.',
      'Ceremonial Procession: Monks carrying the sacred relics of the Buddha in golden urns under ornate satin umbrellas through the streets of Bodh Gaya.',
      'Butter Lamp Illumination: Lighting over 100,000 brass butter lamps and earthen diyas, transforming the temple courtyard into a sea of golden light at twilight.'
    ],
    ritualSequence: [
      {
        phase: 1,
        title: 'Prabhat Shanti Yatra',
        hindiTitle: 'प्रभात शांति यात्रा',
        dayTag: 'Sunrise Procession',
        description: 'International monastic procession starting from the 80-foot Buddha statue to the Mahabodhi Mahavihara with chanting and incense.',
        keyItems: ['Monastic robes', 'International Buddhist flags', 'Chanting bowls']
      },
      {
        phase: 2,
        title: 'Vajrasana & Bodhi Tree Meditation',
        hindiTitle: 'वज्रासन एवं बोधि वृक्ष साधना',
        dayTag: 'Midday Contemplation',
        description: 'Silent and guided meditation beneath the fluttering leaves where Siddhartha Gautama attained supreme awakening 2,500 years ago.',
        keyItems: ['Bodhi leaves', 'Diamond Throne (Vajrasana)', 'Silent dhyana']
      },
      {
        phase: 3,
        title: 'Deepdaan & Sutta Chanting',
        hindiTitle: 'दीपदान एवं सूत्र पाठ',
        dayTag: 'Twilight Illumination',
        description: 'Consecration of thousands of butter lamps around the stone stupa while the Ratana Sutta and Mangala Sutta resonate across the night sky.',
        keyItems: ['Butter lamps', 'Pali sutta chanting', 'Golden stupa illumination']
      }
    ],
    specialFoods: [
      'Sujata Kheer (sweet condensed milk kheer cooked with fragrant rice and cardamom, commemorating the nourishing bowl offered by maiden Sujata)',
      'Vegetarian Sattvic Monastic Feast'
    ],
    foodTraditions: [
      {
        name: 'Sujata Kheer (सुजाता खीर)',
        hindiName: 'सुजाता खीर',
        description: 'Commemorates the historic offering by village maiden Sujata to the starving ascetic Gautama at Bakraur (across the Falgu River), providing him the physical vitality to achieve enlightenment beneath the Bodhi tree.',
        foodId: 'makhana-kheer',
        prasadContext: 'Distributed as sacred sweet prasad to all visitors.'
      }
    ],
    songsAndMusic: 'Pali Buddhist chanting (Buddham Saranam Gacchami), resonant gong beats, Tibetan monastic horn blasts (Dungchen), and tranquil bell chimes.',
    sacredPlaces: [
      {
        name: 'Mahabodhi Temple & Bodhi Tree (महाबोधि मंदिर)',
        hindiName: 'महाबोधि मंदिर',
        districtId: 'gaya',
        districtName: 'Gaya',
        context: 'UNESCO World Heritage monument where Buddha attained Enlightenment.'
      },
      {
        name: 'Sujata Kuti at Bakraur (सुजाता कुटी)',
        hindiName: 'सुजाता कुटी',
        districtId: 'gaya',
        districtName: 'Gaya',
        context: 'Ancient stupa commemorating Sujata’s offering of milk kheer.'
      },
      {
        name: 'Vaishali Relic Stupa (वैशाली बुद्ध अस्थि स्तूप)',
        hindiName: 'वैशाली स्तूप',
        districtId: 'vaishali',
        districtName: 'Vaishali',
        context: 'Where the Licchavis enshrined their original eighth portion of the Buddha’s relics.'
      }
    ],
    originsHistory: 'Historically documented in Buddhist canonical texts (Tripitaka) and the rock edicts of Emperor Ashoka, who visited Bodh Gaya in 260 BCE to worship the Bodhi Tree and establish the first commemorative shrine.',
    regionalVariation: 'While observed across Buddhist holy sites in Bihar—including the Licchavi relic stupa in Vaishali and the World Peace Pagoda in Rajgir—Bodh Gaya is the peerless global epicentre where international sanghas from Sri Lanka, Thailand, Myanmar, Tibet, Japan, and Bhutan bring their specific monastic traditions, chanting styles, and butter lamp ceremonies into unified harmony.',
    culturalSignificance: 'A living testament to Bihar’s gift of philosophical enlightenment, non-violence, and mindfulness to global civilization.',
    significance: 'The supreme celebration of the Buddha’s birth, enlightenment, and parinirvana, turning Bodh Gaya into a serene global sanctuary.',
    communityExperience: 'Monasteries representing twenty different nations open their doors, distributing free meals, bottled water, and blessings to local villagers and global travelers.',
    image: VERIFIED_IMAGES.mahabodhi,
    source: 'Bodhgaya Temple Management Committee (BTMC) & UNESCO World Heritage Centre',
    sourcesDetail: {
      primary: 'Bodhgaya Temple Management Committee (BTMC) Official Archives',
      secondary: 'The Mahabodhi Temple Complex at Bodh Gaya, UNESCO World Heritage Inscription 1056',
      institutionalAuthority: 'Department of Tourism, Government of Bihar'
    },
    multilingual: {
      title: {
        en: 'Buddha Purnima (Vaishakha Purnima)',
        hi: 'बुद्ध पूर्णिमा (वैशाख पूर्णिमा)'
      },
      tagline: {
        en: 'The eternal light of universal compassion and awakening beneath the Bodhi Tree.',
        hi: 'बोधि वृक्ष की पावन छाया में करुणा, प्रज्ञा और वैश्विक शांति का महादिवस।'
      }
    }
  },
  {
    id: 'rajgir-mahotsav',
    name: 'Rajgir Mahotsav & Heritage Festival',
    hindiName: 'राजगीर महोत्सव एवं विरासत उत्सव',
    slug: 'rajgir-mahotsav',
    timing: 'Last week of November / early December (Annual 3-day festival)',
    monthGregorian: 'November / December',
    lunarTithi: 'Annual cultural dates designated by the Department of Tourism',
    season: 'winter',
    traditionCategory: 'regional',
    monthDisplay: 'NOV - DEC',
    monthIndex: 10,
    atmosphereQuote: 'Nestled between seven ancient hills, classical ragas resonate across the stone valleys where Mahavira preached and Buddha meditated.',
    regions: ['Magadh (Nalanda, Rajgir)'],
    associatedDistricts: ['nalanda'],
    prominence: 'The Premier Classical Music, Dance & Living Heritage Celebration of Ancient Magadh',
    overview: 'An exquisite three-day winter cultural festival held in the ancient valley of Rajgir (Rajgriha, the ancient capital of the Magadha Empire). Set against the backdrop of the rugged Vaibhargiri and Ratnagiri hills, the festival gathers India’s foremost classical vocalists, instrumentalists, and classical dancers alongside traditional sports, crafts exhibitions, and regional culinary fairs.',
    description: 'Initiated in 1986 by Bihar Tourism, Rajgir Mahotsav celebrates the extraordinary syncretic legacy of the ancient royal valley where Lord Buddha delivered many of his most famous discourses and Lord Mahavira attained deep spiritual realizations. The open-air amphitheater is adorned with historic motifs, and the festival features unique traditional events such as horse-drawn carriage (Tonga) races, wrestling bouts (Dangal), and an expansive artisanal Gramshree Mela.',
    rituals: [
      'Lighting of the Inaugural Lamp: Ceremonial lamp lighting by cultural dignitaries and state leaders amidst Vedic and Buddhist chants.',
      'Classical Recitals Under the Stars: Evening performances by maestros of Hindustani classical music, Bharatanatyam, Kathak, Odissi, and folk ensembles.',
      'Traditional Tonga Race: Colorful horse-carriage races winding along the scenic foothills of Rajgir.',
      'Heritage Exploration Walks: Curated walking trails to Venuvana Bamboo Grove, Griddhakuta Peak (Vulture Peak), and the Cyclopean Stone Fortifications.'
    ],
    specialFoods: [
      'Silao Khaja (hundreds of micro-thin crisp pastry layers sweetened in light sugar syrup, carrying a prestigious GI Tag)',
      'Traditional Litti Chokha prepared with roasted sattu and wood-fire aroma',
      'Fresh winter sugarcane juice and roasted corn'
    ],
    foodTraditions: [
      {
        name: 'Silao Khaja (सिलाव का खाजा)',
        hindiName: 'सिलाव का खाजा (जी.आई. टैग)',
        description: 'Renowned crisp, multi-layered delicacy from the historic town of Silao between Nalanda and Rajgir. Prepared by skilled halwais layering refined wheat flour dough with ghee, frying it to a delicate golden translucence, and coating it in light sugar syrup.',
        foodId: 'silao-khaja',
        prasadContext: 'Protected with an official Geographical Indication (GI) Tag.'
      }
    ],
    songsAndMusic: 'Sublime evening ragas (Bhairav, Darbari, Yaman), Dhrupad and Khayal recitals, classical sitar, sarod, and bansuri concerts, as well as vibrant Maithili and Bhojpuri folk dance ensembles.',
    sacredPlaces: [
      {
        name: 'Venuvana Bamboo Grove (वेणुवन)',
        hindiName: 'वेणुवन',
        districtId: 'nalanda',
        districtName: 'Nalanda',
        context: 'Historic royal bamboo grove gifted by King Bimbisara to Lord Buddha.'
      },
      {
        name: 'Griddhakuta Hill (गृध्रकूट पर्वत)',
        hindiName: 'गृध्रकूट',
        districtId: 'nalanda',
        districtName: 'Nalanda',
        context: 'Vulture Peak where Buddha set in motion the second turning of the Wheel of Dharma.'
      }
    ],
    originsHistory: 'Historically inspired by the royal cultural councils hosted in Rajgriha by Kings Bimbisara and Ajatashatru in the 6th century BCE, where philosophers, poets, and musicians were patronized.',
    regionalVariation: 'Held against the rugged backdrop of the seven ancient hills of Rajgir in Nalanda district, the festival specifically blends national classical music and dance recitals with authentic Magadhan vernacular traditions, such as horse-drawn carriage (Tonga) competitions and rural wrestling (Dangal).',
    culturalSignificance: 'Celebrates the syncretic meeting point of Buddhism, Jainism, Hinduism, and Sufism woven into the historic landscape of Rajgir.',
    significance: 'Organized by Bihar Tourism to celebrate the rich syncretic heritage of Buddhism, Jainism, Hinduism, and Sikhism intertwined in the ancient capital of Magadh.',
    image: VERIFIED_IMAGES.nalanda,
    source: 'Bihar State Tourism Development Corporation (BSTDC)',
    sourcesDetail: {
      primary: 'Department of Tourism, Government of Bihar — Official Mahotsav Portal',
      secondary: 'Archaeological Gazetteer of Nalanda and Rajgir, ASI',
      institutionalAuthority: 'District Administration Nalanda'
    },
    multilingual: {
      title: {
        en: 'Rajgir Mahotsav & Heritage Festival',
        hi: 'राजगीर महोत्सव एवं सांस्कृतिक पर्व'
      },
      tagline: {
        en: 'Where ancient hills echo with the rhythm of classical ragas and civilizational heritage.',
        hi: 'प्राचीन मगध की सुरम्य वादियों में शास्त्रीय संगीत, नृत्य एवं कला का अनूठा उत्सव।'
      }
    }
  },
  {
    id: 'karam-parva',
    name: 'Karam / Karma Parva & Nature Worship',
    hindiName: 'करमा पर्व (प्रकृति एवं भाई-बहन का लोकपर्व)',
    slug: 'karam-parva',
    timing: 'Bhadrapada Shukla Ekadashi (August / September)',
    monthGregorian: 'August / September',
    lunarTithi: 'Shukla Ekadashi of Bhadrapada month',
    season: 'monsoon',
    traditionCategory: 'folk',
    monthDisplay: 'AUG - SEP',
    monthIndex: 7,
    atmosphereQuote: 'Beneath the monsoon clouds, the branch of the sacred Karam tree is adorned with woven grasses, as songs honoring nature and sibling protection ring through the green hills.',
    regions: ['Southern hills and plateau districts: Rohtas, Kaimur, Banka, Jamui'],
    associatedDistricts: ['rohtas', 'kaimur', 'banka', 'jamui'],
    prominence: 'The Sacred Monsoon Folk Festival of Forest Fertility, Karam Tree Worship, and Sibling Love',
    overview: 'An ancient, agrarian folk festival celebrating nature, harvest fertility, and sibling protection, observed across the undulating plateau and forest tracts of southern Bihar (Rohtas, Kaimur, Banka, and Jamui). Centered on the sacred Karam (Nauclea parvifolia) tree, the festival honors the interdependence between human communities, seasonal monsoon rains, and forest flora.',
    description: 'During Karma Parva, young women maintain a fast and ceremonially fetch branches of the Karam tree from the nearby forest. The branches are planted in the center of the village courtyard (Akhara) and decorated with wild flowers and germinated grain seedlings (Jawa). Throughout the night, youth dance in rhythmically swaying concentric circles to the beats of Mandar and Dhol drums, singing songs that recount the legend of Karma and Dharma.',
    rituals: [
      'Bringing the Karam Branch: Young men and women proceed to the forest singing devotional verses, cutting three branches from a healthy Karam tree with clean cuts that do not touch the bare ground.',
      'Installation in the Village Akhara: The branches are ceremonially planted in the village dancing ground and anointed with vermilion, milk, and flowers.',
      'Jawa Seedling Offerings: Girls offer tender, pale yellow germinated shoots of paddy, barley, and gram (Jawa) grown in bamboo baskets.',
      'Night-long Dancing & Singing: Villagers link arms and dance the Karma folk dance around the branches until dawn breaks, after which the branches are immersed in local streams.'
    ],
    specialFoods: [
      'Pitha (steamed rice-flour dumplings stuffed with spiced lentils or sweet jaggery)',
      'Traditional roasted Mahua and seasonal forest snacks',
      'Freshly prepared Arwa rice and country greens (Saag)'
    ],
    foodTraditions: [
      {
        name: 'Bihari Dal Pitha (दाल पीठा)',
        hindiName: 'दाल पीठा',
        description: 'Delicate steamed rice-flour dumplings stuffed with seasoned Bengal gram paste, garlic, green chilies, and coriander, cooked without oil in boiling water.',
        foodId: 'dal-pitha',
        prasadContext: 'Shared on the morning following Karma immersion.'
      }
    ],
    songsAndMusic: 'Exhilarating Karma folk songs set to the resonant beats of Mandar, Dhol, and Nagara percussion, characterized by call-and-response vocal choruses celebrating forest blooms and sibling loyalty.',
    sacredPlaces: [
      {
        name: 'Kaimur Hill Plateaus & Sacred Groves (कैमूर वन प्रांतर)',
        hindiName: 'कैमूर वन प्रांतर',
        districtId: 'kaimur',
        districtName: 'Kaimur',
        context: 'Ancient sandstone plateau groves and village akharas.'
      },
      {
        name: 'Rohtas Forest Valleys (रोहतास वन्य क्षेत्र)',
        hindiName: 'रोहतास वन घाटी',
        districtId: 'rohtas',
        districtName: 'Rohtas',
        context: 'Hilly villages celebrating ancestral nature-worship traditions.'
      }
    ],
    originsHistory: 'An indigenous folk tradition pre-dating written annals, chronicled in oral tribal and rural folklore. It celebrates the story of two brothers, Karma and Dharma, showing that sincere labor in harmony with nature brings prosperity while neglect leads to poverty.',
    regionalVariation: 'Exclusively centered in the hilly forest and undulating plateau districts of southern Bihar (Rohtas, Kaimur, Banka, and Jamui). Distinct from the alluvial plains festivals of North Bihar, the rituals here revolve around the sacred Karam tree branch, village akharas, germinated Jawa grains, and the resonant rhythm of Mandar percussion.',
    culturalSignificance: 'A profound environmental tradition reminding society that human wellbeing is inextricably bound to the preservation of green forests and water sources.',
    significance: 'Celebrates ecological balance, the sanctity of trees, agricultural germination, and family bonding in southern Bihar.',
    image: VERIFIED_IMAGES.sikkiCraft,
    source: 'Bihar Tribal & Folk Research Institute & State Folklore Archives',
    sourcesDetail: {
      primary: 'Bihar Tribal Research Institute Archives',
      secondary: 'Folk Cultures and Nature Rituals of Southern Bihar Plateau, ASI Journal',
      institutionalAuthority: 'Department of Culture, Government of Bihar'
    },
    multilingual: {
      title: {
        en: 'Karam / Karma Parva Nature Festival',
        hi: 'करमा पर्व (प्रकृति एवं करम वृक्ष उपासना)'
      },
      tagline: {
        en: 'The joyous rhythm of monsoon dancing, forest branches, and sibling bonds.',
        hi: 'करम वृक्ष की डाली, मांदर की थाप और भाई-बहन के प्रेम का अनूठा प्रकृति पर्व।'
      }
    }
  },
  {
    id: 'sufi-urs-maner',
    name: 'Sufi Urs of Maner & Bihar Sharif',
    hindiName: 'मनेर शरीफ एवं बिहार शरीफ सूफी उर्स',
    slug: 'sufi-urs-maner',
    timing: 'Shawwal / Annual Urs dates (Spring / March-April)',
    monthGregorian: 'March / April',
    lunarTithi: 'Annual Urs commemoration dates according to the Islamic Hijri calendar',
    season: 'spring',
    traditionCategory: 'sufi',
    monthDisplay: 'MAR - APR',
    monthIndex: 2,
    atmosphereQuote: 'In the amber-lit sandstone courtyards of Maner, devotional qawwalis transcend religious boundaries, continuing a 700-year legacy of spiritual peace along the river plains.',
    regions: ['Patna (Maner Sharif) and Nalanda (Bihar Sharif)'],
    associatedDistricts: ['patna', 'nalanda'],
    prominence: 'The 700-Year-Old Syncretic Sufi Pilgrimage and Qawwali Tradition of Bihar',
    overview: 'The revered annual Urs gatherings centered around the great Sufi sanctuaries of Bihar: Chhoti Dargah and Bari Dargah in Maner Sharif (Patna) and the Dargah of Hazrat Makhdoom Sharfuddin Yahya Maneri in Bihar Sharif (Nalanda). Devotees of all faiths gather to offer embroidered silk sheets (Chadar Poshi), listen to all-night Qawwali Mehfils, and participate in community feasts.',
    description: 'Bihar holds an illustrious place in medieval Sufism as the heartland of the Firdausiya and Suhrawardi orders. The architectural wonder of Chhoti Dargah at Maner, completed in 1616 with magnificent carved Chunar sandstone and a 50-foot dome over a tranquil tank, hosts an annual Urs where thousands assemble. The atmosphere is one of profound peace, where boundaries of caste and religion evaporate in shared devotional ecstasy and the distribution of the famous Maner ka Laddoo.',
    rituals: [
      'Ghusl & Sandalwood Rite: Ceremonial washing and anointing of the sacred tomb with pure rose water and sandalwood paste.',
      'Chadar Poshi Procession: Carrying large embroidered green and gold satin sheets accompanied by Sufi tambourines and naat poetry.',
      'Mehfil-e-Sama (Qawwali Night): Devotional singing by hereditary qawwals tracing centuries of mystic Persian, Urdu, and Bhojpuri verses of divine love.',
      'Langar & Tabarruk: Mass distribution of sweet delicacies and wholesome meals to all visiting pilgrims regardless of background.'
    ],
    specialFoods: [
      'Maner ka Motichoor Laddoo (historic ghee-fried tiny gram-flour pearls flavored with saffron and cardamom, made with local sweet well water)',
      'Traditional Sheer Khurma and Zarda Pulao',
      'Community Langar Nihaari and Naan'
    ],
    foodTraditions: [
      {
        name: 'Maner ka Laddoo (मनेर का लड्डू)',
        hindiName: 'मनेर का मोतीचूर लड्डू',
        description: 'World-famous orange-golden sweet crafted for centuries in the alleyways of Maner Sharif. Made from superfine gram-flour droplets fried in pure desi ghee and simmered in sugar syrup spiced with crushed cardamom and melon seeds.',
        foodId: 'maner-ladoo',
        prasadContext: 'Revered as the traditional sweet blessing (Tabarruk) of the shrine.'
      }
    ],
    songsAndMusic: 'Soul-stirring Sufi Qawwalis, kalam of Amir Khusrau and Hazrat Makhdoom, played with harmonium, dholak, and clapped hand rhythms in hypnotic cycles.',
    sacredPlaces: [
      {
        name: 'Chhoti Dargah of Maner Sharif (छोटी दरगाह, मनेर)',
        hindiName: 'छोटी दरगाह',
        districtId: 'patna',
        districtName: 'Patna',
        context: '17th-century Mughal sandstone masterpiece with grand dome and water tank.'
      },
      {
        name: 'Badi Dargah of Bihar Sharif (बड़ी दरगाह, बिहार शरीफ)',
        hindiName: 'बड़ी दरगाह',
        districtId: 'nalanda',
        districtName: 'Nalanda',
        context: 'Historic resting place of Hazrat Makhdoom Sharfuddin Yahya Maneri.'
      }
    ],
    originsHistory: 'Dates back to the 13th and 14th centuries CE, commemorating the spiritual lives of Makhdoom Yahya Maneri and his son Makhdoom Sharfuddin, whose letters (Maktubat-e-Sadi) influenced medieval Indian philosophy.',
    regionalVariation: 'Centered primarily in the ancient river port of Maner Sharif (Patna) and the medieval Islamic center of Bihar Sharif (Nalanda), uniting devotees of both Hindu and Muslim backgrounds across Central Bihar. The culinary hallmark is the famous orange-golden pure ghee Maner ka Motichoor Laddoo.',
    culturalSignificance: 'A cornerstone of Bihar’s syncretic Ganga-Jamuni tehzeeb, where Hindu and Muslim families jointly participate in prayers, music, and social service.',
    significance: 'Celebrates the 700-year syncretic Sufi tradition of love, spiritual harmony, and devotional qawwali in historical river towns.',
    image: VERIFIED_IMAGES.sherShahTomb, // Authentic heritage stone architecture fallback
    source: 'Bihar State Sunni Waqf Board & Department of Art and Culture',
    sourcesDetail: {
      primary: 'Dargah Committee Maner Sharif & Nalanda Historical Society',
      secondary: 'Sufism in Bihar: A Historical Study, Khuda Bakhsh Oriental Public Library',
      institutionalAuthority: 'Department of Tourism, Government of Bihar'
    },
    multilingual: {
      title: {
        en: 'Sufi Urs of Maner & Bihar Sharif',
        hi: 'मनेर एवं बिहार शरीफ सूफी उर्स'
      },
      tagline: {
        en: 'The 700-year harmony of devotional qawwali, sandstone heritage, and spiritual brotherhood.',
        hi: '700 वर्षों की गंगा-जमुनी तहज़ीब, सूफ़ी कव्वाली और आध्यात्मिक शांति का पावन उर्स।'
      }
    }
  },
  {
    id: 'mithila-vivah-panchami',
    name: 'Mithila Vivah Panchami',
    hindiName: 'मिथिला विवाह पंचमी (सीता-राम विवाहोत्सव)',
    slug: 'mithila-vivah-panchami',
    timing: 'Margashirsha Shukla Panchami (November / December)',
    monthGregorian: 'November / December',
    lunarTithi: 'Shukla Panchami of Margashirsha month',
    season: 'winter',
    traditionCategory: 'regional',
    monthDisplay: 'NOV - DEC',
    monthIndex: 11,
    atmosphereQuote: 'In Mithila, Rama is welcomed not as a distant god, but affectionately as the village son-in-law (Pahun), celebrated with witty songs and vibrant ritual wall paintings.',
    regions: ['Mithila (Madhubani, Sitamarhi, Darbhanga, Supaul) and border Janakpur'],
    associatedDistricts: ['sitamarhi', 'madhubani', 'darbhanga'],
    prominence: 'The Living Folk Celebration Welcoming Lord Rama as the Beloved Son-in-Law of Mithila',
    overview: 'The joyous celebration commemorating the sacred wedding of Princess Sita (Janaki, the beloved daughter of King Janaka of Mithila) and Prince Rama of Ayodhya. Observed throughout the Mithila cultural belt and neighboring Sitamarhi, the festival carries a unique cultural nuance: here Rama is not treated merely with awe, but with the warm, teasing familiarity reserved for a dear son-in-law (Pahun).',
    description: 'During Vivah Panchami, courtyards and temple verandas across Madhubani and Sitamarhi are washed and decorated with intricate rice-paste Aripan floor paintings. Women gather in colorful traditional sarees to perform traditional Maithili marriage rituals: singing humorous welcoming songs (Gali geet), presenting wedding trays with paan and makhana, and re-enacting the Jaimala garland exchange with festive jubilation.',
    rituals: [
      'Aripan Floor Art: Women draw auspicious geometric white rice-powder motifs (Swastik, Shankha, Lotus) in courtyards for wedding blessings.',
      'Baraat Re-enactment: Colorfully decorated processions carrying decorated palanquins, brass lamps, and music through village lanes.',
      'Kohbar & Jaimala Ceremony: Symbolic exchange of flower garlands in front of elaborately painted Kohbar folk murals.',
      'Maithili Wedding Singing: Women sing traditional songs such as Samdaun, Sohar, and humorous teasing verses welcoming the Ayodhya procession.'
    ],
    specialFoods: [
      'Makhana Kheer (slow-cooked foxnut and milk pudding topped with roasted almonds)',
      'Tarua (assorted seasonal vegetables dipped in spiced rice-gram batter and crisp-fried in mustard oil)',
      'Mithila Paan and Supari',
      'Traditional Til Sankranti sweets and freshly harvested seasonal winter crops'
    ],
    foodTraditions: [
      {
        name: 'Mithila Makhana Kheer & Tarua (मखाना खीर एवं तरुआ)',
        hindiName: 'मखाना खीर एवं तरुआ',
        description: 'Puffy popped lotus seeds simmered in reduced whole milk flavored with green cardamom and saffron, accompanied by a platter of crisp Tarua (crisp-fried slices of parwal, eggplant, and pumpkin flowers).',
        foodId: 'makhana-kheer',
        prasadContext: 'The signature celebratory banquet of Mithila festivals.'
      }
    ],
    songsAndMusic: 'Enchanting Maithili wedding ballads (Lagna Geet, Samdaun, and Maithili folk compositions of poet Vidyapati), characterized by sparkling lyrical humor and tender parental emotions.',
    sacredPlaces: [
      {
        name: 'Janaki Temple & Punaura Dham (पुनौरा धाम, सीतामढ़ी)',
        hindiName: 'पुनौरा धाम',
        districtId: 'sitamarhi',
        districtName: 'Sitamarhi',
        context: 'The sacred birthplace of Mother Sita where King Janaka ploughed the field.'
      },
      {
        name: 'Madhubani Traditional Village Courtyards',
        hindiName: 'मधुबनी ग्रामीण दालान',
        districtId: 'madhubani',
        districtName: 'Madhubani',
        context: 'Homes adorned with living Madhubani wall and floor art.'
      }
    ],
    originsHistory: 'Derived from the Ramayana of Valmiki and the Adhyatma Ramayana, recalling King Janaka’s Dhanush Yajna in Mithila where Rama stringed the mighty bow of Shiva (Pinaka) and won the hand of Sita.',
    regionalVariation: 'Deeply distinct from celebrations in Ayodhya: in the Mithila cultural sphere (Sitamarhi, Madhubani, Darbhanga, and border Janakpur), Lord Rama is not revered with formal awe, but humorously welcomed and teased as the village son-in-law (Pahun) with satirical Gali geet, Maithili Aripan floor motifs, and Kohbar bridal murals.',
    culturalSignificance: 'Illuminates the deep cultural veneration for daughters and women in Mithila tradition, where Sita is the daughter of the soil and Rama is an affectionate member of the extended family.',
    significance: 'Celebrates the legendary wedding of Sita and Rama through authentic Mithila folk rituals, Kohbar art, and traditional wedding songs.',
    image: VERIFIED_IMAGES.madhubani,
    source: 'Mithila Sanskritik Parishad & Department of Art and Culture, Bihar',
    sourcesDetail: {
      primary: 'Mithila Sanskritik Parishad & Sitamarhi District Archives',
      secondary: 'Mithila Traditions and Folklore, Bihar State Text Book Publishing',
      institutionalAuthority: 'Department of Culture, Government of Bihar'
    },
    multilingual: {
      title: {
        en: 'Mithila Vivah Panchami',
        hi: 'मिथिला विवाह पंचमी (सीता-राम विवाहोत्सव)',
        mai: 'सीता-राम विवाहोत्सव (विवाह पंचमी)'
      },
      tagline: {
        en: 'Where Rama is welcomed with loving folk songs as the beloved son-in-law of Mithila.',
        hi: 'जहाँ श्रीराम को दामाद (पाहुन) मानकर मंगल गीतों और कोहबर कला से सत्कार किया जाता है।'
      }
    }
  }
];

export const getFestivalById = (id: string): Festival | undefined => {
  return FESTIVALS_DATA.find(fest => fest.id === id);
};
