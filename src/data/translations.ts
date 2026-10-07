/**
 * BIHAR 360 — Canonical UI Localization Dictionary
 * Deterministic translations for application navigation, homepage editorial sections,
 * state symbols, and global footer.
 */

import { resolveTranslationLanguage } from './interfaceLanguages';

export type Language = 'en' | 'hi' | string;

export interface NavTranslations {
  brandSubtitle: string;
  explore: string;
  districts: string;
  historyHeritage: string;
  history: string;
  heritage: string;
  cultureTraditions: string;
  arts: string;
  cuisine: string;
  festivals: string;
  music: string;
  languages: string;
  personalities: string;
  placesNature: string;
  places: string;
  journeys: string;
  map: string;
  askBihar: string;
  search: string;
  searchPlaceholderMobile: string;
  quiz: string;
  bookmarks: string;
  themeDark: string;
  themeLight: string;
  allDistrictsCount: string;
}

export interface HeroTranslations {
  eyebrow: string;
  title: string;
  hindiTitle: string;
  description: string;
  exploreBtn: string;
  districtsBtn: string;
  stripGanga: string;
  stripDistricts: string;
  stripHistory: string;
  scrollPrompt: string;
}

export interface GlimpseTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  nalandaTag: string;
  nalandaEra: string;
  nalandaTitle: string;
  nalandaDesc: string;
  littiTag: string;
  littiTitle: string;
  littiDesc: string;
  mithilaTag: string;
  mithilaTitle: string;
  mithilaDesc: string;
  valmikiTag: string;
  valmikiTitle: string;
  valmikiDesc: string;
  mungerTag: string;
  mungerTitle: string;
  mungerDesc: string;
}

export interface HistoryTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  viewAllBtn: string;
  visualBadge: string;
  visualTitle: string;
  visualDesc: string;
  readMoreBtn: string;
  epochs: {
    era: string;
    title: string;
    hindiTitle: string;
    description: string;
  }[];
}

export interface MusicTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  verifiedBadge: string;
  selectedLabel: string;
  performerLabel: string;
  listenRecording: string;
  pauseAudio: string;
  exploreArchive: string;
  listen: string;
  playing: string;
}

export interface CuisineTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  viewAllBtn: string;
  actionText: string;
  items: {
    name: string;
    hindiName: string;
    origin: string;
    badge: string;
    description: string;
  }[];
}

export interface FestivalsTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  chhathBadge: string;
  chhathSub: string;
  chhathTitle: string;
  chhathDesc: string;
  chhathAction: string;
  sonepurBadge: string;
  sonepurTitle: string;
  sonepurDesc: string;
  samaBadge: string;
  samaTitle: string;
  samaDesc: string;
  exploreAllBtn: string;
}

export interface ArtsTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  viewAllBtn: string;
  mithilaBadge: string;
  mithilaRegion: string;
  mithilaTitle: string;
  mithilaHindi: string;
  mithilaDesc: string;
  mithilaAction: string;
  items: {
    name: string;
    hindiName: string;
    region: string;
    badge: string;
    description: string;
    actionText: string;
  }[];
}

export interface PeopleTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  viewAllBtn: string;
  actionText: string;
  thinkers: {
    name: string;
    hindiName: string;
    title: string;
    era: string;
    district: string;
    quote: string;
    story: string;
  }[];
}

export interface PlacesTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  viewAllBtn: string;
  actionText: string;
  destinations: {
    name: string;
    hindiName: string;
    location: string;
    tag: string;
    description: string;
  }[];
}

export interface DistrictsSectionTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  exploreAllBtn: string;
  divisionSuffix: string;
  hqPrefix: string;
  exploreDossier: string;
  bookmarkAdd: string;
  bookmarkRemove: string;
  verifiedLandmark: string;
  culturalIdentity: string;
  bannerTitle: string;
  bannerDesc: string;
  bannerBtn: string;
}

export interface ClosingCtaTranslations {
  eyebrow: string;
  headingPart1: string;
  headingHindi: string;
  description: string;
  startBtn: string;
  quizBtn: string;
  guideBtn: string;
}

export interface SymbolsTranslations {
  title: string;
  treeLabel: string;
  treeValue: string;
  birdLabel: string;
  birdValue: string;
  animalLabel: string;
  animalValue: string;
  flowerLabel: string;
  flowerValue: string;
  fishLabel: string;
  fishValue: string;
}

export interface FooterTranslations {
  brandDesc: string;
  divisionsTitle: string;
  divisions: string[];
  traditionsTitle: string;
  traditions: string[];
  referenceTitle: string;
  referenceDesc: string;
  copyright: string;
}

export interface AppUiTranslations {
  nav: NavTranslations;
  hero: HeroTranslations;
  glimpse: GlimpseTranslations;
  history: HistoryTranslations;
  music: MusicTranslations;
  cuisine: CuisineTranslations;
  festivals: FestivalsTranslations;
  arts: ArtsTranslations;
  people: PeopleTranslations;
  places: PlacesTranslations;
  districts: DistrictsSectionTranslations;
  closingCta: ClosingCtaTranslations;
  symbols: SymbolsTranslations;
  footer: FooterTranslations;
}

const rawUiTranslations: Record<'en' | 'hi', AppUiTranslations> = {
  en: {
    nav: {
      brandSubtitle: 'हर ज़िले की अपनी कहानी है',
      explore: 'Explore',
      districts: 'Districts (38)',
      historyHeritage: 'History & Heritage',
      history: 'Bihar Through Time (History)',
      heritage: 'Monuments & Heritage',
      cultureTraditions: 'Culture & Traditions',
      arts: 'Folk Arts & Crafts',
      cuisine: 'Cuisine & Flavors',
      festivals: 'Festivals & Chhath',
      music: 'Hear Bihar (Music & Sound)',
      languages: 'Languages & Voices',
      personalities: 'Notable Personalities',
      placesNature: 'Places & Nature',
      places: 'Landscapes & Places',
      journeys: 'Journeys Through Bihar',
      map: 'Interactive Map',
      askBihar: 'Ask Bihar',
      search: 'Search',
      searchPlaceholderMobile: 'Discover Bihar (Search Atlas)',
      quiz: 'Quiz',
      bookmarks: 'Saved Bookmarks',
      themeDark: 'Switch to light mode (☀️)',
      themeLight: 'Switch to dark mode (🌙)',
      allDistrictsCount: 'All 38 Districts'
    },
    hero: {
      eyebrow: 'The Digital Atlas & Cultural Memory of Bihar',
      title: 'BIHAR 360',
      hindiTitle: 'हर ज़िले की अपनी कहानी है।',
      description: 'Bihar is a living story of sacred rivers, resilient people, monumental heritage, soulful food, cosmic festivals, ancient languages, art, and timeless memory.',
      exploreBtn: 'Explore Bihar',
      districtsBtn: 'Discover the 38 Districts',
      stripGanga: 'Sacred Ganga Basin',
      stripDistricts: '38 Distinctive Districts',
      stripHistory: '3,000+ Years of History',
      scrollPrompt: 'Scroll to explore'
    },
    glimpse: {
      eyebrow: 'Visual Vignettes & Living Moments',
      title: 'एक नज़र में बिहार',
      subtitle: 'A Glimpse of Bihar',
      description: 'A civilizational continuum where riverbanks hold ancient Vedic chants, clay hearths bake rations shared for millennia, and earthen courtyards turn women into visual philosophers.',
      nalandaTag: 'Monumental Heritage',
      nalandaEra: '5th Century CE',
      nalandaTitle: 'Nalanda Mahavihara',
      nalandaDesc: 'Where 10,000 monks and international scholars gathered beneath arched red-brick libraries to decode astronomy, medicine, logic, and the nature of consciousness.',
      littiTag: 'Gastronomic Soul',
      littiTitle: 'The Hearth & Litti Chokha',
      littiDesc: 'Slow-roasted on earthen embers and drowned in golden desi ghee—an ancient ration turned culinary pride.',
      mithilaTag: 'Living Pigments',
      mithilaTitle: 'Mithila Sacred Painting',
      mithilaDesc: 'Etched on mud walls with bamboo twigs and soot, immortalizing Vedic ceremonies and the flora of North Bihar.',
      valmikiTag: 'Sub-Himalayan Wilderness',
      valmikiTitle: 'Valmiki Sal Forests & Gandak River',
      valmikiDesc: 'Where the Himalayan foothills touch Bihar—sheltering Royal Bengal tigers and the ancient hermitage of sage Valmiki.',
      mungerTag: 'The Northward Flow',
      mungerTitle: 'Munger Fort & Uttar-Vahini Ganga',
      mungerDesc: 'Where the holy Ganga turns northward, creating a sacred riverfront defended by ancient stone citadels.'
    },
    history: {
      eyebrow: 'Epochs of Civilizational Thought',
      title: 'बिहार — समय के पार',
      subtitle: 'Bihar Through Time',
      viewAllBtn: 'Explore Bihar’s full history',
      visualBadge: 'Sanctuary of Awakening',
      visualTitle: 'Mahabodhi Temple Complex',
      visualDesc: 'UNESCO World Heritage site enclosing the sacred Bodhi Tree and the Diamond Throne (Vajrasana) placed by Emperor Ashoka in the 3rd century BCE.',
      readMoreBtn: 'Explore Bihar’s history →',
      epochs: [
        {
          era: '6th Century BCE',
          title: 'Vedic Republics & The Licchavi',
          hindiTitle: 'वैशाली एवं विश्व का प्रथम गणतंत्र',
          description: 'Vaishali establishes the world’s first recorded democratic assembly (Sansthagara) under the Licchavis.'
        },
        {
          era: '528 BCE',
          title: 'The Great Awakening: Buddha & Mahavira',
          hindiTitle: 'बोधगया में बुद्धत्व एवं महावीर का अहिंसा संदेश',
          description: 'Siddhartha Gautama attains supreme Enlightenment under the Bodhi Tree in Gaya; Lord Mahavira codifies Ahimsa.'
        },
        {
          era: '322 – 185 BCE',
          title: 'The Maurya Empire & Ashoka’s Dhamma',
          hindiTitle: 'मौर्य साम्राज्य एवं पाटलिपुत्र की आभा',
          description: 'Chandragupta and Chanakya govern India from Pataliputra; Emperor Ashoka renounces war and erects edicts of compassion.'
        },
        {
          era: '5th – 12th Century CE',
          title: 'Nalanda & Vikramshila Golden Age',
          hindiTitle: 'नालंदा व विक्रमशिला का विश्व ज्ञान केंद्र',
          description: 'Global epicenters of philosophy, logic, medicine, and mathematics that drew scholars across Asia for seven centuries.'
        },
        {
          era: '16th Century CE',
          title: 'Medieval Reforms & Sher Shah Suri',
          hindiTitle: 'शेरशाह सूरी एवं सासाराम की वास्तुकला',
          description: 'Reformed currency with the silver Rupiya, laid the Grand Trunk Road, and raised the colossal floating octagonal mausoleum.'
        },
        {
          era: '1917 – 1974 CE',
          title: 'Champaran to the Total Revolution',
          hindiTitle: 'चंपारण सत्याग्रह से जेपी आंदोलन तक',
          description: 'Mahatma Gandhi tests Satyagraha on Champaran soil in 1917; Jayaprakash Narayan launches the fight for democracy in 1974.'
        }
      ]
    },
    music: {
      eyebrow: 'Acoustic Landscape & Regional Languages',
      title: 'सुनिए बिहार को',
      subtitle: 'Listen to Bihar',
      description: 'The vocal resonance of four sister languages—Maithili, Bhojpuri, Magahi, and Angika—sung into temple courtyards, harvest fields, and sacred riverbanks.',
      verifiedBadge: 'Verified Audio Heritage',
      selectedLabel: 'Selected:',
      performerLabel: 'Performer:',
      listenRecording: 'Listen to Recording',
      pauseAudio: 'Pause Audio',
      exploreArchive: 'Explore Full Music Archive',
      listen: 'Listen',
      playing: 'Playing'
    },
    cuisine: {
      eyebrow: 'Gastronomic Wisdom & Regional Terroir',
      title: 'स्वाद से पहचानिए बिहार',
      subtitle: 'Taste Bihar',
      viewAllBtn: 'Explore all Bihari culinary traditions',
      actionText: 'View recipe & roots',
      items: [
        {
          name: 'Litti Chokha',
          hindiName: 'लिट्टी चोखा',
          origin: 'Bhojpur & Magadh',
          badge: 'Signature Dish',
          description: 'Hand-shaped whole-wheat globes filled with spiced roasted sattu, baked over smoldering cow-dung embers, cracked open, and dipped into warm desi ghee.'
        },
        {
          name: 'Sacred Thekua',
          hindiName: 'पवित्र ठेकुआ',
          origin: 'All Bihar (Chhath Prasad)',
          badge: 'Chhath Mahaparva Prasad',
          description: 'Crisp, fragrant cookies sculpted from coarse whole-wheat flour, dark jaggery, cardamom, and coconut chips, pressed on carved wooden molds.'
        },
        {
          name: 'Mithila Makhana',
          hindiName: 'मिथिला मखाना',
          origin: 'Darbhanga & Madhubani',
          badge: 'GI Tagged Heritage',
          description: 'Aquatic fox nuts cultivated in the deep perennial lotus wetlands of Mithila, roasted and popped into delicate culinary pearls.'
        },
        {
          name: 'Silao Khaja',
          hindiName: 'सिलाव का खाजा',
          origin: 'Nalanda (Silao)',
          badge: 'GI Tagged (52 Layers)',
          description: 'Multi-layered, whisper-crisp golden pastry prepared in Silao since the Buddhist era, layered with pure ghee and dipped in clear sugar syrup.'
        },
        {
          name: 'Gaya Tilkut',
          hindiName: 'गया का तिलकुट',
          origin: 'Gaya (Ramna Road)',
          badge: 'Winter Artisan Sweet',
          description: 'Hand-pounded roasted white sesame seeds and melted winter sugarcane jaggery beaten rhythmically into feather-light, brittle discs.'
        }
      ]
    },
    festivals: {
      eyebrow: 'Sacred Rhythms & Elemental Devotion',
      title: 'जब बिहार उत्सव बन जाता है',
      subtitle: 'Festivals & Living Traditions',
      description: 'Where nature is not conquered, but worshipped directly. In Bihar, sacred celebrations transcend social division—kneeling in reverence to water, sun, and seasonal migratory life.',
      chhathBadge: 'The Supreme Mahaparva',
      chhathSub: 'कार्तिक शुक्ल षष्ठी',
      chhathTitle: 'Chhath Puja: The Sun & The River',
      chhathDesc: 'The only Vedic festival in the world that bows in gratitude to both the setting sun and the rising dawn. Millions stand waist-deep in the cool currents of the Ganga, Gandak, and Koshi. No priest mediates. No altar separates. Just human gratitude before the celestial source of all life.',
      chhathAction: 'Read the four sacred days of Chhath',
      sonepurBadge: 'Confluence Carnival • Saran',
      sonepurTitle: 'Sonepur Harihar Kshetra Mela',
      sonepurDesc: 'Asia’s largest rural fair where Marwari horses, folk theaters, and pilgrims gather where the Gandak embraces the Ganga.',
      samaBadge: 'Winter Courtyard Ritual • Mithila',
      samaTitle: 'Sama-Chakeva: The Migratory Bond',
      samaDesc: 'Young sisters mold clay birds under winter moonlight, singing ancient Maithili folk melodies to welcome birds from the Himalayas.',
      exploreAllBtn: 'Explore all festivals →'
    },
    arts: {
      eyebrow: 'Living Traditions & Indigenous Crafts',
      title: 'बिहार की जीवित कला',
      subtitle: 'Living Arts of Bihar',
      viewAllBtn: 'Discover Bihar’s folk arts',
      mithilaBadge: 'GI Tag #31 Heritage',
      mithilaRegion: 'Mithila Cultural Sphere',
      mithilaTitle: 'Mithila (Madhubani) Painting',
      mithilaHindi: 'मिथिला चित्रकला — दीवारों से वैश्विक कैनवास तक',
      mithilaDesc: 'Originally created by women on the freshly plastered mud walls of bridal chambers (Kohbar) using crushed rice paste, lamp soot, and natural plant dyes. Every motif—fish for fertility, peacocks for beauty, lotus for purity—carries philosophical meaning.',
      mithilaAction: 'Explore techniques & styles',
      items: [
        {
          name: 'Mithila / Madhubani Painting',
          hindiName: 'मिथिला (मधुबनी) चित्रकला',
          region: 'Madhubani & Darbhanga (Mithila)',
          badge: 'GI Tag #31',
          description: 'Drawn freehand using twigs, matchsticks, and natural pigments from soot, flowers, and leaves. Features bold line-work (Kachni) and lush color fields (Bharni) depicting cosmology, fertility, and nature.',
          actionText: 'View art form'
        },
        {
          name: 'Manjusha Scroll Painting',
          hindiName: 'मंजूषा अंग चित्रकला',
          region: 'Bhagalpur (Anga Region)',
          badge: 'Anga Folk Narrative',
          description: 'India’s only sequential comic-strip style folk art executed in strictly three sacred colors: Pink, Green, and Yellow. Tells the epic folklore of Behula-Bishahari with snake and aquatic motifs.',
          actionText: 'View art form'
        },
        {
          name: 'Sujani Narrative Embroidery',
          hindiName: 'सुजनी कशीदाकारी',
          region: 'Muzaffarpur & Sitamarhi',
          badge: 'GI Tag #74',
          description: 'Layered antique cloth stitched with colored running threads into vibrant embroidered tapestries that document women’s lives, dreams, and domestic folk narratives.',
          actionText: 'View art form'
        },
        {
          name: 'Sikki Golden Grass Craft',
          hindiName: 'सिक्की घास शिल्पकला',
          region: 'North Bihar Wetlands',
          badge: 'Indigenous Wetland Art',
          description: 'Wild riparian golden reeds harvested from marshlands, dyed with lacquer pigments, and hand-coiled into lightweight storage vessels and ritual boxes.',
          actionText: 'View art form'
        }
      ]
    },
    people: {
      eyebrow: 'Philosophers, Astronomers & Statesmen',
      title: 'वे लोग जिन्होंने बिहार की कहानी लिखी',
      subtitle: 'People Who Shaped Bihar & Human History',
      viewAllBtn: 'Read all biographical profiles',
      actionText: 'View historical legacy',
      thinkers: [
        {
          name: 'Gautama Buddha',
          hindiName: 'गौतम बुद्ध',
          title: 'The Awakened One',
          era: '6th – 5th Century BCE',
          district: 'Gaya & Rajgir',
          quote: 'Peace comes from within. Do not seek it without.',
          story: 'Sought truth across Magadha, attained supreme Bodhi beneath the pipal tree at Bodh Gaya, and taught the Middle Path (Madhyama-pratipat) that transformed global thought.'
        },
        {
          name: 'Lord Mahavira',
          hindiName: 'भगवान महावीर',
          title: '24th Jain Tirthankara',
          era: '6th Century BCE',
          district: 'Vaishali (Kundalpur)',
          quote: 'Non-injury to any living being is the highest religion.',
          story: 'Born in the Licchavi republic of Vaishali; codified the foundational principles of Ahimsa (Universal Non-violence) and Anekantavada (multi-faceted perspective of truth).'
        },
        {
          name: 'Aryabhata',
          hindiName: 'आर्यभट्ट',
          title: 'Astronomer & Mathematician',
          era: '476 – 550 CE',
          district: 'Patna (Taregna Observatory)',
          quote: 'The spherical earth rotates on its axis, while stars appear to move westward.',
          story: 'Formulated the mathematical value of Pi (3.1416), introduced sine tables, and proved earth’s axial rotation from his Taregna observatory near Pataliputra at age 23.'
        },
        {
          name: 'Dr. Rajendra Prasad',
          hindiName: 'डॉ. राजेन्द्र प्रसाद',
          title: 'First President of India & Statesman',
          era: '1884 – 1963 CE',
          district: 'Siwan (Ziradei)',
          quote: 'In drafting the Constitution, we sought to preserve the soul of our ancient civilization.',
          story: 'Supreme legal mind, freedom fighter, and president of the Constituent Assembly who guided free India’s foundational constitutional framework with humility and intellect.'
        }
      ]
    },
    places: {
      eyebrow: 'Sacred Sanctuaries & Ancient Geometry',
      title: 'जहाँ बिहार आपको ले जाता है',
      subtitle: 'Places That Stay With You',
      viewAllBtn: 'Explore all pilgrimage & travel circuits',
      actionText: 'View historical details',
      destinations: [
        {
          name: 'Nalanda Mahavihara',
          hindiName: 'नालंदा महाविहार',
          location: 'Nalanda District',
          tag: 'UNESCO World Heritage',
          description: 'The baked-brick silence of the ancient world’s greatest residential university, where ten thousand monks once questioned the stars.'
        },
        {
          name: 'Mahabodhi Temple & Bodhi Tree',
          hindiName: 'महाबोधि मंदिर व बोधिवृक्ष',
          location: 'Bodh Gaya, Gaya',
          tag: 'Cradle of Enlightenment',
          description: 'The sacred pipal tree and sandstone diamond throne where human consciousness found the Middle Path 2,500 years ago.'
        },
        {
          name: 'Ashokan Pillar of Kolhua',
          hindiName: 'कोल्हुआ का अशोक स्तंभ',
          location: 'Vaishali District',
          tag: 'First Republic of the World',
          description: 'A monolithic polished chunar sandstone column crowned with a solitary lion gazing towards the Buddha’s final journey.'
        },
        {
          name: 'Tomb of Sher Shah Suri',
          hindiName: 'शेरशाह सूरी का मकबरा',
          location: 'Sasaram, Rohtas',
          tag: 'Indo-Islamic Masterpiece',
          description: 'A majestic octagonal sandstone mausoleum rising like a stone lotus in the center of an artificial square lake.'
        },
        {
          name: 'Valmiki National Park & Tiger Reserve',
          hindiName: 'वाल्मीकि राष्ट्रीय उद्यान',
          location: 'West Champaran',
          tag: 'Sub-Himalayan Wilderness',
          description: 'Primeval sal canopy, snow-fed Gandak waters, and Bengal tiger trails nestled against the misty Himalayan borderlands.'
        },
        {
          name: 'Barabar Rock-Cut Caves',
          hindiName: 'बराबर की प्राचीन गुफाएं',
          location: 'Jehanabad District',
          tag: '3rd Century BCE Monolithic Architecture',
          description: 'India’s oldest surviving rock-cut cave sanctuaries, hewn from sheer granite boulders with glass-like acoustic interiors.'
        }
      ]
    },
    districts: {
      eyebrow: '38 Administrative & Cultural Territories',
      title: '38 ज़िले। 38 पहचानें। अनगिनत कहानियाँ।',
      subtitle: 'Every District Has Its Own Soul',
      description: 'From the Himalayan sal groves of the north-west to the fertile Kosi marshes, the handlooms of Bhagalpur, and the granite hills of Magadh.',
      exploreAllBtn: 'Explore all 38 districts',
      divisionSuffix: 'Division',
      hqPrefix: 'HQ:',
      exploreDossier: 'Explore Dossier',
      bookmarkAdd: 'Bookmark district',
      bookmarkRemove: 'Remove bookmark',
      verifiedLandmark: '✓ Verified Landmark',
      culturalIdentity: 'Cultural Identity',
      bannerTitle: 'Discover All 38 Districts in the Interactive Atlas',
      bannerDesc: 'Filter by 9 administrative divisions, population, literacy, river basins, and historical eras.',
      bannerBtn: 'Open 38 District Explorer →'
    },
    closingCta: {
      eyebrow: 'Living Memory of Civilizations',
      headingPart1: 'Bihar is not a place on a map.',
      headingHindi: 'यह एक जीवित अनुभव है।',
      description: 'Embark on a digital pilgrimage across ancient republics, monastic universities, sacred rivers, vibrant courtyards, and thirty-eight living identities.',
      startBtn: 'Begin District Journey',
      quizBtn: 'Test Your Bihar Knowledge',
      guideBtn: 'Ask Bihar Guide'
    },
    symbols: {
      title: 'Official State Symbols of Bihar:',
      treeLabel: 'State Tree:',
      treeValue: 'Peepal (Ficus religiosa)',
      birdLabel: 'State Bird:',
      birdValue: 'Gauraiya (House Sparrow)',
      animalLabel: 'State Animal:',
      animalValue: 'Gaur (Mithun)',
      flowerLabel: 'State Flower:',
      flowerValue: 'Genda (Marigold)',
      fishLabel: 'State Fish:',
      fishValue: 'Mangur (Clarias batrachus)'
    },
    footer: {
      brandDesc: 'The Digital Atlas of Bihar. Documenting ancient civilizations, 38 administrative districts, sacred pilgrimage circuits, living folk arts, and gastronomic heritage with precision.',
      divisionsTitle: '9 Administrative Divisions',
      divisions: [
        'Patna Division',
        'Tirhut Division',
        'Saran Division',
        'Darbhanga Division',
        'Kosi Division',
        'Purnia Division',
        'Bhagalpur Division',
        'Munger Division',
        'Magadh Division'
      ],
      traditionsTitle: 'Living Traditions',
      traditions: [
        'Chhath Mahaparva (Vedic Sun Worship)',
        'Madhubani & Manjusha Painting',
        'Silao Khaja & Gaya Tilkut',
        'Sonepur Cattle Fair & Rajgir Mahotsav',
        'Nalanda & Mahabodhi UNESCO Sites'
      ],
      referenceTitle: 'Attribution & Reference',
      referenceDesc: 'Data curated from official publications of the Archaeological Survey of India (ASI), Census of India 2011, Bihar State Tourism Development Corporation (BSTDC), and District Gazetteers.',
      copyright: 'All rights reserved.'
    }
  },
  hi: {
    nav: {
      brandSubtitle: 'हर ज़िले की अपनी कहानी है',
      explore: 'अन्वेषण',
      districts: 'ज़िले (38)',
      historyHeritage: 'इतिहास व धरोहर',
      history: 'बिहार — समय के पार (इतिहास)',
      heritage: 'स्मारक व पुरातात्विक धरोहर',
      cultureTraditions: 'संस्कृति व परंपराएं',
      arts: 'लोक कला व शिल्प',
      cuisine: 'खानपान व स्वाद',
      festivals: 'लोकपर्व व छठ महापर्व',
      music: 'सुनिए बिहार को (संगीत व नाद)',
      languages: 'भाषाएं व लोकवाणी',
      personalities: 'विशिष्ट विभूतियाँ',
      placesNature: 'स्थल व प्रकृति',
      places: 'भू-परिदृश्य व दर्शनीय स्थल',
      journeys: 'बिहार की प्रेरक यात्राएं',
      map: 'इंटरएक्टिव मानचित्र',
      askBihar: 'बिहार से पूछें',
      search: 'खोजें',
      searchPlaceholderMobile: 'बिहार को खोजिए (एटलस खोज)',
      quiz: 'प्रश्नोत्तरी',
      bookmarks: 'सहेजे गए ज़िले',
      themeDark: 'लाइट मोड पर जाएँ (☀️)',
      themeLight: 'डार्क मोड पर जाएँ (🌙)',
      allDistrictsCount: 'सभी 38 ज़िले'
    },
    hero: {
      eyebrow: 'बिहार का डिजिटल सांस्कृतिक एटलस व ऐतिहासिक स्मृति',
      title: 'BIHAR 360',
      hindiTitle: 'हर ज़िले की अपनी कहानी है।',
      description: 'बिहार पवित्र नदियों, अदम्य जनमानस, गौरवशाली धरोहर, पारंपरिक खानपान, लोकपर्वों, प्राचीन भाषाओं व कलाओं की एक जीवंत अमर गाथा है।',
      exploreBtn: 'बिहार को जानिए',
      districtsBtn: '38 ज़िलों का अन्वेषण करें',
      stripGanga: 'पवित्र गंगा बेसिन',
      stripDistricts: '38 विशिष्ट ज़िले',
      stripHistory: '3,000+ वर्षों का जीवंत इतिहास',
      scrollPrompt: 'अन्वेषण के लिए नीचे स्क्रॉल करें'
    },
    glimpse: {
      eyebrow: 'चित्रमय झलकियाँ व जीवंत क्षण',
      title: 'एक नज़र में बिहार',
      subtitle: 'बिहार की एक समग्र झलक',
      description: 'एक सभ्यतागत सातत्य जहाँ नदी तटों पर वैदिक ऋचाएं गूंजती हैं, मिट्टी के चूल्हे सदियों की रसोई संजोते हैं, और आँगन की माटी महिलाओं को दार्शनिक चित्रकार बना देती है।',
      nalandaTag: 'भव्य सभ्यतागत धरोहर',
      nalandaEra: '5वीं शताब्दी ईस्वी',
      nalandaTitle: 'नालंदा महाविहार',
      nalandaDesc: 'जहाँ 10,000 भिक्षु और देश-विदेश के विद्वान खगोलशास्त्र, चिकित्सा, न्याय और चेतना के मर्म को डिकोड करने के लिए नालंदा के विशाल पुस्तकालयों में एकत्र होते थे।',
      littiTag: 'पाक आत्मा व लोक स्वाद',
      littiTitle: 'अंगीठी और सत्तू भरी लिट्टी चोखा',
      littiDesc: 'उपलों की धीमी आँच पर पकी और शुद्ध देशी घी में डूबी—सदियों का पारंपरिक आहार जो आज बिहार का गौरव है।',
      mithilaTag: 'जीवंत प्राकृतिक रंग',
      mithilaTitle: 'मिथिला पावन चित्रकला',
      mithilaDesc: 'बाँस की सींकों और कालिख-रंगों से कच्ची दीवारों पर रची गई कला, जो वैदिक संस्कारों और उत्तर बिहार की प्रकृति को अमर बनाती है।',
      valmikiTag: 'उप-हिमालयी वन्य वैभव',
      valmikiTitle: 'वाल्मीकि शाल वन एवं गंडक नदी',
      valmikiDesc: 'जहाँ हिमालय की तलहटी बिहार की माटी को छूती है—रॉयल बंगाल टाइगर और महर्षि वाल्मीकि की प्राचीन तपोभूमि।',
      mungerTag: 'उत्तर-वाहिनी पावन प्रवाह',
      mungerTitle: 'मुंगेर दुर्ग एवं उत्तर-वाहिनी गंगा',
      mungerDesc: 'जहाँ पतित-पावनी गंगा उत्तर दिशा में मुड़ती है और तट पर प्राचीन ऐतिहासिक दुर्ग रक्षा प्रहरी बनकर खड़ा है।'
    },
    history: {
      eyebrow: 'सभ्यता और विचार के ऐतिहासिक युग',
      title: 'बिहार — समय के पार',
      subtitle: 'कालचक्र में बिहार',
      viewAllBtn: 'बिहार का संपूर्ण इतिहास जानें',
      visualBadge: 'आत्मबोध की पावन स्थली',
      visualTitle: 'महाबोधि मंदिर परिसर',
      visualDesc: 'यूनेस्को विश्व धरोहर स्थल जहाँ पवित्र बोधिवृक्ष और सम्राट अशोक द्वारा तीसरी शताब्दी ईसा पूर्व स्थापित वज्रासन स्थित है।',
      readMoreBtn: 'बिहार के इतिहास की यात्रा करें →',
      epochs: [
        {
          era: '6वीं शताब्दी ई.पू.',
          title: 'वैशाली एवं विश्व का प्रथम गणतंत्र',
          hindiTitle: 'वैशाली एवं विश्व का प्रथम गणतंत्र',
          description: 'लिच्छवियों के नेतृत्व में वैशाली ने विश्व की प्रथम संहिताबद्ध लोकतांत्रिक संसद (संस्थागार) की नींव रखी।'
        },
        {
          era: '528 ई.पू.',
          title: 'बोधगया में बुद्धत्व एवं महावीर का अहिंसा संदेश',
          hindiTitle: 'बोधगया में बुद्धत्व एवं महावीर का अहिंसा संदेश',
          description: 'गया में बोधिवृक्ष के नीचे सिद्धार्थ गौतम को बुद्धत्व प्राप्त हुआ; भगवान महावीर ने अपरिग्रह व अहिंसा को प्रतिष्ठा दी।'
        },
        {
          era: '322 – 185 ई.पू.',
          title: 'मौर्य साम्राज्य एवं पाटलिपुत्र की आभा',
          hindiTitle: 'मौर्य साम्राज्य एवं पाटलिपुत्र की आभा',
          description: 'चंद्रगुप्त और चाणक्य ने पाटलिपुत्र से भारत का शासन किया; सम्राट अशोक ने युद्ध त्यागकर धम्म के शिलालेख खुदवाए।'
        },
        {
          era: '5वीं – 12वीं सदी ई.',
          title: 'नालंदा व विक्रमशिला का विश्व ज्ञान केंद्र',
          hindiTitle: 'नालंदा व विक्रमशिला का विश्व ज्ञान केंद्र',
          description: 'दर्शन, न्याय, चिकित्सा और गणित के वैश्विक विद्यापीठ जिन्होंने सात शताब्दियों तक पूरे एशिया के जिज्ञासुओं का मार्गदर्शन किया।'
        },
        {
          era: '16वीं शताब्दी ई.',
          title: 'शेरशाह सूरी एवं सासाराम की वास्तुकला',
          hindiTitle: 'शेरशाह सूरी एवं सासाराम की वास्तुकला',
          description: 'चांदी का "रुपिया" मुद्रा सुधार, ग्रांड ट्रंक रोड का पुनर्निर्माण, और सासाराम में जल के बीच अष्टकोणीय भव्य मकबरे का निर्माण।'
        },
        {
          era: '1917 – 1974 ई.',
          title: 'चंपारण सत्याग्रह से संपूर्ण क्रांति तक',
          hindiTitle: 'चंपारण सत्याग्रह से जेपी आंदोलन तक',
          description: '1917 में महात्मा गांधी ने चंपारण की माटी पर सत्याग्रह का पहला प्रयोग किया; 1974 में जयप्रकाश नारायण ने लोकतंत्र की रक्षा हेतु संपूर्ण क्रांति का बिगुल फूँका।'
        }
      ]
    },
    music: {
      eyebrow: 'ध्वनि-संसार एवं प्रांतीय लोकवाणी',
      title: 'सुनिए बिहार को',
      subtitle: 'बिहार की सुरमयी आवाज़',
      description: 'चार सहोदर भाषाओं—मैथिली, भोजपुरी, मगही और अंगिका—की मधुर गूंज जो मन्दिरों के प्रांगणों, खलिहानों और पवित्र घाटों पर सदियों से गाई जा रही है।',
      verifiedBadge: 'प्रमाणित पारंपरिक लोक-ध्वनि',
      selectedLabel: 'चयनित परंपरा:',
      performerLabel: 'गायक/वादक:',
      listenRecording: 'रिकॉर्डिंग सुनें',
      pauseAudio: 'रोकें',
      exploreArchive: 'संपूर्ण संगीत संग्रह देखें',
      listen: 'सुनें',
      playing: 'चल रहा है'
    },
    cuisine: {
      eyebrow: 'माटी का स्वाद एवं पाक परंपरा',
      title: 'स्वाद से पहचानिए बिहार',
      subtitle: 'बिहार का पारंपरिक स्वाद',
      viewAllBtn: 'बिहार के सभी पारंपरिक व्यंजन देखें',
      actionText: 'विधि व इतिहास देखें',
      items: [
        {
          name: 'लिट्टी चोखा',
          hindiName: 'लिट्टी चोखा',
          origin: 'भोजपुर एवं मगध',
          badge: 'विशिष्ट राज्य व्यंजन',
          description: 'हाथ से गढ़े गेहूं के गोलों में भुने चने के सत्तू और मसालों का भरावन, गोइठे की आँच पर सिके और गरमागरम देशी घी में तर।'
        },
        {
          name: 'पवित्र ठेकुआ',
          hindiName: 'पवित्र ठेकुआ',
          origin: 'समस्त बिहार (छठ प्रसाद)',
          badge: 'छठ महापर्व का पावन प्रसाद',
          description: 'दरदरे गेहूं के आटे, गहरे गुड़, इलायची और सूखे नारियल से काष्ठ के साँचों पर ढले कुरकुरे पावन पकवान।'
        },
        {
          name: 'मिथिला मखाना',
          hindiName: 'मिथिला मखाना',
          origin: 'दरभंगा एवं मधुबनी',
          badge: 'जीआई टैग प्राप्त धरोहर',
          description: 'मिथिला के गहरे कमल पोखरों में पैदा होने वाले मखाने, जिन्हें भूनकर खीर व व्यंजनों में प्रयुक्त किया जाता है।'
        },
        {
          name: 'सिलाव का खाजा',
          hindiName: 'सिलाव का खाजा',
          origin: 'नालंदा (सिलाव)',
          badge: 'जीआई टैग (52 परतों वाला)',
          description: 'बौद्ध काल से सिलाव में शुद्ध घी की पचास से अधिक महीन परतों में बना और चाशनी में भीगा कुरकुरा मिष्ठान्न।'
        },
        {
          name: 'गया का तिलकुट',
          hindiName: 'गया का तिलकुट',
          origin: 'गया (रमना रोड)',
          badge: 'शीतकालीन पारंपरिक मिष्ठान्न',
          description: 'कुटे हुए सफेद तिल और शीतकालीन गन्ने के गुड़ की चाशनी से हाथ से पीट-पीटकर बनाई गई खस्ता पट्टी।'
        }
      ]
    },
    festivals: {
      eyebrow: 'ऋतु चक्र एवं पंचतत्वों की उपासना',
      title: 'जब बिहार उत्सव बन जाता है',
      subtitle: 'पर्व-त्योहार और लोक परंपराएं',
      description: 'जहाँ प्रकृति पर विजय नहीं, बल्कि उसकी प्रत्यक्ष पूजा की जाती है। बिहार के लोकपर्व सामाजिक बंधनों से परे जल, सूर्य और प्रवासी जीवन के प्रति श्रद्धा का उत्सव हैं।',
      chhathBadge: 'सर्वोच्च महापर्व',
      chhathSub: 'कार्तिक शुक्ल षष्ठी',
      chhathTitle: 'छठ पूजा: सूर्य, जल और प्रकृति की आराधना',
      chhathDesc: 'संसार का एकमात्र वैदिक महापर्व जो अस्ताचलगामी और उदीयमान दोनों सूर्यों को अर्घ्य समर्पित करता है। गंगा, गंडक और कोशी के पावन जल में करोड़ों श्रद्धालु बिना किसी पुरोहित के सीधे सूर्य नारायण की वंदना करते हैं।',
      chhathAction: 'छठ के चारों पावन अनुष्ठान पढ़ें',
      sonepurBadge: 'संगम मेला • सारण',
      sonepurTitle: 'सोनपुर हरिहर क्षेत्र मेला',
      sonepurDesc: 'एशिया का सबसे बड़ा ग्रामीण मेला जहाँ गंडक और गंगा के संगम पर मारवाड़ी घोड़े, लोकनाट्य और श्रद्धालु जुटते हैं।',
      samaBadge: 'शीतकालीन लोक परंपरा • मिथिला',
      samaTitle: 'सामा-चकेवा: भाई-बहन व प्रवासी पक्षियों का स्नेह',
      samaDesc: 'शीत ऋतु की चांदनी में बहनें मिट्टी की मूर्तियाँ गढ़कर हिमालय से आने वाले प्रवासी पक्षियों के स्वागत में लोकगीत गाती हैं।',
      exploreAllBtn: 'सभी लोकपर्व देखें →'
    },
    arts: {
      eyebrow: 'जीवंत परंपराएं एवं देशज हस्तशिल्प',
      title: 'बिहार की जीवित कला',
      subtitle: 'बिहार की लोक कला धरोहर',
      viewAllBtn: 'बिहार की सभी लोक कलाएं जानें',
      mithilaBadge: 'जीआई टैग #31 धरोहर',
      mithilaRegion: 'मिथिला सांस्कृतिक अंचल',
      mithilaTitle: 'मिथिला (मधुबनी) चित्रकला',
      mithilaHindi: 'मिथिला चित्रकला — दीवारों से वैश्विक कैनवास तक',
      mithilaDesc: 'कोहबर की कच्ची दीवारों पर बाँस की सींकों और चावल के लेप से उकेरी गई आकृतियाँ। उर्वरता के लिए मछली, सौंदर्य हेतु मयूर और शुचिता का प्रतीक कमल—हर प्रतीक में गहरा दर्शन निहित है।',
      mithilaAction: 'शैलियाँ व तकनीकें देखें',
      items: [
        {
          name: 'मिथिला (मधुबनी) चित्रकला',
          hindiName: 'मिथिला (मधुबनी) चित्रकला',
          region: 'मधुबनी एवं दरभंगा (मिथिला)',
          badge: 'जीआई टैग #31',
          description: 'बाँस की सींकों और प्राकृतिक रंगों (कचनी व भरनी शैली) से रची जाने वाली वैश्विक ख्याति प्राप्त लोक चित्रकला।',
          actionText: 'कला रूप देखें'
        },
        {
          name: 'मंजूषा अंग चित्रकला',
          hindiName: 'मंजूषा अंग चित्रकला',
          region: 'भागलपुर (अंग अंचल)',
          badge: 'अंग लोक गाथा',
          description: 'भारत की एकमात्र तीन रंगों (गुलाबी, हरा, पीला) में रची जाने वाली कथात्मक कला, जो बिहुला-विषहरी की अमर गाथा कहती है।',
          actionText: 'कला रूप देखें'
        },
        {
          name: 'सुजनी कशीदाकारी',
          hindiName: 'सुजनी कशीदाकारी',
          region: 'मुजफ्फरपुर एवं सीतामढ़ी',
          badge: 'जीआई टैग #74',
          description: 'पुराने वस्त्रों की तहों पर रंगीन धागों के महीन टांकों से ग्रामीण महिलाओं के जीवन, सुख-दुख और सपनों को पिरोया जाता है।',
          actionText: 'कला रूप देखें'
        },
        {
          name: 'सिक्की घास शिल्पकला',
          hindiName: 'सिक्की घास शिल्पकला',
          region: 'उत्तर बिहार की आद्रभूमि',
          badge: 'देशज आद्रभूमि शिल्प',
          description: 'नदियों और पोखरों के किनारों पर उगने वाली सुनहरी घास को लाख के रंगों से रंगकर बनाए जाने वाले आकर्षक पात्र व मूर्तियाँ।',
          actionText: 'कला रूप देखें'
        }
      ]
    },
    people: {
      eyebrow: 'दार्शनिक, खगोलविद् एवं राष्ट्रनिर्माता',
      title: 'वे लोग जिन्होंने बिहार की कहानी लिखी',
      subtitle: 'बिहार की वे विभूतियाँ जिन्होंने मानव इतिहास को गढ़ा',
      viewAllBtn: 'सभी जीवन-वृत्त पढ़ें',
      actionText: 'ऐतिहासिक योगदान देखें',
      thinkers: [
        {
          name: 'गौतम बुद्ध',
          hindiName: 'गौतम बुद्ध',
          title: 'तथागत / बुद्ध',
          era: '6वीं – 5वीं सदी ई.पू.',
          district: 'गया एवं राजगीर',
          quote: 'शांति अंतर्मन से आती है, इसे बाहर मत खोजो।',
          story: 'मगध की धरती पर सत्य की खोज की, बोधगया में पीपल वृक्ष के नीचे सम्बोधि प्राप्त की और मध्यम मार्ग का उपदेश दिया जिसने विश्व दर्शन को बदल दिया।'
        },
        {
          name: 'भगवान महावीर',
          hindiName: 'भगवान महावीर',
          title: '24वें जैन तीर्थंकर',
          era: '6वीं सदी ई.पू.',
          district: 'वैशाली (कुंडलपुर)',
          quote: 'समस्त जीवों के प्रति अहिंसा ही परम धर्म है।',
          story: 'वैशाली गणतंत्र में जन्मे; जिन्होंने सार्वभौमिक अहिंसा, सत्य और अनेकांतवाद के महान सिद्धांतों को मानव जीवन का मार्ग बनाया।'
        },
        {
          name: 'आर्यभट्ट',
          hindiName: 'आर्यभट्ट',
          title: 'महान खगोलशास्त्री व गणितज्ञ',
          era: '476 – 550 ईस्वी',
          district: 'पटना (तारेगना वेधशाला)',
          quote: 'गोल पृथ्वी अपनी धुरी पर घूमती है, जिससे तारे पश्चिम की ओर चलते प्रतीत होते हैं।',
          story: 'मात्र 23 वर्ष की आयु में पाई (π = 3.1416) का मान दिया, ज्या (साइन) सारणी बनाई और तारेगना से पृथ्वी के घूर्णन को प्रमाणित किया।'
        },
        {
          name: 'डॉ. राजेन्द्र प्रसाद',
          hindiName: 'डॉ. राजेन्द्र प्रसाद',
          title: 'भारत के प्रथम राष्ट्रपति व स्वतंत्रता सेनानी',
          era: '1884 – 1963 ईस्वी',
          district: 'सीवान (जीरादेई)',
          quote: 'संविधान निर्माण में हमने अपनी प्राचीन सभ्यता की आत्मा को संजोने का प्रयास किया।',
          story: 'संविधान सभा के अध्यक्ष और स्वतंत्र भारत के प्रथम राष्ट्रपति, जिन्होंने सादगी, विद्वता और निष्ठा से स्वतंत्र राष्ट्र की नींव को सुदृढ़ किया।'
        }
      ]
    },
    places: {
      eyebrow: 'पवित्र स्थल, तपोवन एवं प्राचीन स्थापत्य',
      title: 'जहाँ बिहार आपको ले जाता है',
      subtitle: 'वे स्थल जो स्मृतियों में बस जाते हैं',
      viewAllBtn: 'सभी तीर्थ एवं यात्रा परिपथ देखें',
      actionText: 'विस्तृत विवरण देखें',
      destinations: [
        {
          name: 'नालंदा महाविहार',
          hindiName: 'नालंदा महाविहार',
          location: 'नालंदा ज़िला',
          tag: 'यूनेस्को विश्व धरोहर',
          description: 'प्राचीन विश्व के महानतम आवासीय विश्वविद्यालय के लाल ईंटों के खंडहर, जहाँ कभी दस हज़ार विद्वान ज्ञान मीमांसा करते थे।'
        },
        {
          name: 'महाबोधि मंदिर व बोधिवृक्ष',
          hindiName: 'महाबोधि मंदिर व बोधिवृक्ष',
          location: 'बोधगया, गया',
          tag: 'ज्ञानोदय की उद्गम स्थली',
          description: 'पवित्र बोधिवृक्ष और बलुआ पत्थर का वज्रासन, जहाँ 2,500 वर्ष पूर्व तथागत को बुद्धत्व प्राप्त हुआ था।'
        },
        {
          name: 'कोल्हुआ का अशोक स्तंभ',
          hindiName: 'कोल्हुआ का अशोक स्तंभ',
          location: 'वैशाली ज़िला',
          tag: 'विश्व का प्रथम गणतंत्र',
          description: 'चुनार के एकाश्म पॉलिशदार बलुआ पत्थर का ऐतिहासिक स्तंभ, जिस पर स्थापित सिंह बुद्ध की अंतिम यात्रा की ओर निहारता है।'
        },
        {
          name: 'शेरशाह सूरी का मकबरा',
          hindiName: 'शेरशाह सूरी का मकबरा',
          location: 'सासाराम, रोहतास',
          tag: 'भारतीय-इस्लामी स्थापत्य का शिखर',
          description: 'एक विशाल कृत्रिम झील के बीचोबीच जलकमल की भांति तैरता हुआ अष्टकोणीय भव्य बलुआ पत्थर का मकबरा।'
        },
        {
          name: 'वाल्मीकि राष्ट्रीय उद्यान',
          hindiName: 'वाल्मीकि राष्ट्रीय उद्यान',
          location: 'पश्चिम चंपारण',
          tag: 'उप-हिमालयी वन्य जीवन',
          description: 'शाल के घने जंगल, गंडक नदी का स्वच्छ प्रवाह और बर्फीली हिमालयी तलहटी में फैले रॉयल बंगाल टाइगर के विचरण पथ।'
        },
        {
          name: 'बराबर की प्राचीन गुफाएं',
          hindiName: 'बराबर की प्राचीन गुफाएं',
          location: 'जहानाबाद ज़िला',
          tag: 'तीसरी सदी ई.पू. एकाश्म गुफाएं',
          description: 'कठोर ग्रेनाइट चट्टानों को तराशकर बनाई गई भारत की सबसे प्राचीन गुफाएं, जिनका आंतरिक भाग शीशे जैसा चमकदार है।'
        }
      ]
    },
    districts: {
      eyebrow: '38 प्रशासनिक एवं सांस्कृतिक अंचल',
      title: '38 ज़िले। 38 पहचानें। अनगिनत कहानियाँ।',
      subtitle: 'हर ज़िले का अपना अनूठा स्वरूप',
      description: 'उत्तर-पश्चिम के शाल वनों से लेकर कोशी की उपजाऊ कछारों, भागलपुर के रेशम करघों और मगध की ग्रेनाइट पहाड़ियों तक।',
      exploreAllBtn: 'सभी 38 ज़िले देखें',
      divisionSuffix: 'प्रमंडल',
      hqPrefix: 'मुख्यालय:',
      exploreDossier: 'ज़िला विवरण पढ़ें',
      bookmarkAdd: 'ज़िले को सहेजें',
      bookmarkRemove: 'सहेजे गए से हटाएं',
      verifiedLandmark: '✓ प्रमाणित दर्शनीय स्थल',
      culturalIdentity: 'सांस्कृतिक पहचान',
      bannerTitle: '38 ज़िलों का इंटरएक्टिव एटलस देखें',
      bannerDesc: '9 प्रशासनिक प्रमंडलों, नदियों, ऐतिहासिक कालों और सांख्यिकी के अनुसार बिहार का अन्वेषण करें।',
      bannerBtn: '38 ज़िला एक्सप्लोरर खोलें →'
    },
    closingCta: {
      eyebrow: 'सभ्यताओं की जीवंत स्मृति',
      headingPart1: 'बिहार केवल मानचित्र पर कोई रेखा नहीं है।',
      headingHindi: 'यह एक जीवित अनुभव है।',
      description: 'प्राचीन गणराज्यों, विद्यापीठों, पावन नदियों, लोक-कला से सजे आँगनों और 38 जीवंत पहचानों की डिजिटल तीर्थयात्रा पर चलिए।',
      startBtn: 'ज़िला यात्रा प्रारंभ करें',
      quizBtn: 'बिहार ज्ञान प्रश्नोत्तरी खेलें',
      guideBtn: 'मार्गदर्शिका से पूछें'
    },
    symbols: {
      title: 'बिहार के आधिकारिक राजकीय प्रतीक:',
      treeLabel: 'राजकीय वृक्ष:',
      treeValue: 'पीपल (फाइकस रिलिजियोसा)',
      birdLabel: 'राजकीय पक्षी:',
      birdValue: 'गौरैया (हाउस स्पैरो)',
      animalLabel: 'राजकीय पशु:',
      animalValue: 'गौर (बैल/मिथुन)',
      flowerLabel: 'राजकीय पुष्प:',
      flowerValue: 'गेंदा (मैरीगोल्ड)',
      fishLabel: 'राजकीय मछली:',
      fishValue: 'मांगुर (क्लेरियस बट्राकस)'
    },
    footer: {
      brandDesc: 'बिहार का डिजिटल सांस्कृतिक एटलस। प्राचीन सभ्यताओं, 38 प्रशासनिक ज़िलों, पावन तीर्थ परिपथों, लोक कलाओं और पारंपरिक स्वाद की प्रामाणिक प्रस्तुति।',
      divisionsTitle: '9 प्रशासनिक प्रमंडल',
      divisions: [
        'पटना प्रमंडल',
        'तिरहुत प्रमंडल',
        'सारण प्रमंडल',
        'दरभंगा प्रमंडल',
        'कोशी प्रमंडल',
        'पूर्णिया प्रमंडल',
        'भागलपुर प्रमंडल',
        'मुंगेर प्रमंडल',
        'मगध प्रमंडल'
      ],
      traditionsTitle: 'जीवंत लोक परंपराएं',
      traditions: [
        'छठ महापर्व (सूर्य उपासना)',
        'मधुबनी एवं मंजूषा चित्रकला',
        'सिलाव खाजा एवं गया का तिलकुट',
        'सोनपुर पशु मेला एवं राजगीर महोत्सव',
        'नालंदा एवं महाबोधि यूनेस्को धरोहर'
      ],
      referenceTitle: 'संदर्भ व आधिकारिक स्रोत',
      referenceDesc: 'भारतीय पुरातत्व सर्वेक्षण (ASI), भारत की जनगणना 2011, बिहार राज्य पर्यटन विकास निगम (BSTDC) एवं ज़िला गजेटियर्स के आधिकारिक अभिलेखों से संकलित।',
      copyright: 'सर्वाधिकार सुरक्षित।'
    }
  }
};

export const uiTranslations: Record<string, AppUiTranslations> = new Proxy(rawUiTranslations as any, {
  get(target, prop: string) {
    if (prop in target) {
      return target[prop];
    }
    const fallback = resolveTranslationLanguage(prop);
    return target[fallback] || target.en;
  }
});
