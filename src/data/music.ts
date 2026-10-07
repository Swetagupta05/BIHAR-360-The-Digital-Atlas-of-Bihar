import { MusicTrack, MusicCollection } from '../types';
import { VERIFIED_IMAGES } from './media';

export const MUSIC_TRACKS: MusicTrack[] = [
  // 1. Chhath Mahaparva — The Ultimate Living Hymn
  {
    id: 'kelwa-ke-paat-par',
    title: 'Kelwa Ke Paat Par (Ugeelan Surujmal)',
    hindiTitle: 'केलवा के पात पर उगेलन सुरुजमल',
    performer: 'Padma Bhushan Sharda Sinha',
    tradition: 'Chhath Mahaparva Solar Hymn',
    traditionType: 'traditional_folk',
    category: 'festival',
    language: 'Bhojpuri',
    region: 'bhojpur',
    regionDisplay: 'Bhojpur & Statewide Bihar',
    districtId: 'patna',
    districtName: 'Patna',
    youtubeId: 'lQwwc2xbMZg',
    youtubeUrl: 'https://www.youtube.com/watch?v=lQwwc2xbMZg',
    durationMinutes: '8:35',
    culturalContext:
      'The definitive hymn of Chhath Puja across Bihar. Sung as the sun rises over the river ghats, venerating Surya as the visible cosmic deity and life-giver.',
    description:
      'Composed with traditional acoustic dholak and harmonium, this classic rendition by Sharda Sinha captures the intimate domestic preparations of the vrati, awaiting dawn at the riverbank.',
    instruments: ['Dholak', 'Harmonium', 'Manjira', 'Bansuri'],
    festivalId: 'chhath-puja',
    personalityId: 'sharda-sinha',
    placeId: 'patna-ghats',
    source: 'T-Series Regional (Album: Hey Chhath Maiya / Sharda Sinha Discography)',
    coverImage: VERIFIED_IMAGES.chhathPuja
  },
  {
    id: 'kaanch-hi-baans-ke-bahangiya',
    title: 'Kaanch Hi Baans Ke Bahangiya',
    hindiTitle: 'काँच ही बाँस के बहँगिया',
    performer: 'Padma Bhushan Sharda Sinha',
    tradition: 'Chhath Bamboo Offering Ballad',
    traditionType: 'traditional_folk',
    category: 'festival',
    language: 'Bhojpuri',
    region: 'bhojpur',
    regionDisplay: 'Bhojpur & Magadh',
    districtId: 'saran',
    districtName: 'Saran',
    youtubeId: 'fVRF_99cziY',
    youtubeUrl: 'https://www.youtube.com/watch?v=fVRF_99cziY',
    durationMinutes: '6:15',
    culturalContext:
      'Chronicles the sacred journey of the bamboo carrier walking barefoot to the river ghat, carrying the freshly woven basket of offerings for the Sun God.',
    description:
      'Reflects the central ecological spirit of Chhath: green bamboo woven by rural craft communities. The song expresses filial devotion, ritual sanctity, and familial solidarity.',
    instruments: ['Harmonium', 'Dholak', 'Bansuri', 'Manjira'],
    festivalId: 'chhath-puja',
    personalityId: 'sharda-sinha',
    source: 'T-Series Regional (Album: Chhathi Maiya Aayihein Hamaar / Sharda Sinha)',
    coverImage: VERIFIED_IMAGES.chhathPuja
  },

  // 2. Mithila Vivah & Farewell Ballads
  {
    id: 'samdaun-doli-uthalo',
    title: 'Mithila Vivah Geet: Samdaun (Bar Re Jatan Se Hum)',
    hindiTitle: 'मिथिला समदौन: बड़ रे जतन से हम (बेटी विदाई गीत)',
    performer: 'Padma Bhushan Sharda Sinha',
    tradition: 'Maithili Life-Cycle Bridal Farewell Ballad',
    traditionType: 'traditional_folk',
    category: 'lifecycle',
    language: 'Maithili',
    region: 'mithila',
    regionDisplay: 'Mithila (Madhubani & Darbhanga)',
    districtId: 'madhubani',
    districtName: 'Madhubani',
    youtubeId: 'FEmmSCVgYdE',
    youtubeUrl: 'https://www.youtube.com/watch?v=FEmmSCVgYdE',
    durationMinutes: '5:20',
    culturalContext:
      'Sung when the bride departs her maternal home in Mithila. The Samdaun is renowned in Indian ethnomusicology for its solemn melodic cadence and emotional restraint.',
    description:
      'Passed down through generations of women in family courtyards, the Samdaun expresses the tender grief of farewell, honoring the daughter as Lakshmi of the maternal threshold.',
    instruments: ['Harmonium', 'Dholak', 'Vocal Chorus'],
    festivalId: 'mithila-vivah-panchami',
    source: 'T-Series Regional (Album: Maithili Vivah Geet / Sharda Sinha)',
    coverImage: VERIFIED_IMAGES.madhubani
  },
  {
    id: 'vidyapati-nachari-bhairavi',
    title: 'Jai Jai Bhairavi (Vidyapati Gosaunik Geet)',
    hindiTitle: 'जय जय भैरवी असुर भयावनि (विद्यापति नचारी)',
    performer: 'Padma Bhushan Sharda Sinha',
    tradition: 'Mahakavi Vidyapati Devotional Repertoire',
    traditionType: 'classical_repertoire',
    category: 'devotional',
    language: 'Maithili',
    region: 'mithila',
    regionDisplay: 'Mithila (Samastipur & Darbhanga)',
    districtId: 'samastipur',
    districtName: 'Samastipur',
    youtubeId: 'F-MEzs4jFy0',
    youtubeUrl: 'https://www.youtube.com/watch?v=F-MEzs4jFy0',
    durationMinutes: '6:45',
    culturalContext:
      'Composed by 14th-century poet-scholar Mahakavi Vidyapati of Bisafi. Revered as the foundational cultural invocation prayer across Mithila, invoking Shakti for wisdom and courage.',
    description:
      'Set in Raag Bhairavi, this devotional song bridges Sanskrit classical metrics with vernacular Maithili devotional warmth. It opens major cultural assemblies in North Bihar.',
    instruments: ['Tanpura', 'Tabla', 'Harmonium', 'Manjira'],
    personalityId: 'mahakavi-vidyapati',
    source: 'Saregama Bhakti (Album: Gosauni Ke Geet / Sharda Sinha)',
    coverImage: VERIFIED_IMAGES.madhubani
  },

  // 3. Classical Dhrupad — Darbhanga Court Tradition
  {
    id: 'darbhanga-dhrupad-darbari',
    title: 'Darbhanga Dhrupad & Dhamar: Raag Gara',
    hindiTitle: 'दरभंगा ध्रुपद एवं धमार: राग गारा',
    performer: 'Pandit Ram Chatur Mallik',
    tradition: 'Gauhar Bani Classical Dhrupad Gharana',
    traditionType: 'court_tradition',
    category: 'classical',
    language: 'Hindustani Classical / Brajbhasha',
    region: 'mithila',
    regionDisplay: 'Darbhanga Raj Court Tradition',
    districtId: 'darbhanga',
    districtName: 'Darbhanga',
    youtubeId: 'SILooFtL8Yg',
    youtubeUrl: 'https://www.youtube.com/watch?v=SILooFtL8Yg',
    durationMinutes: '11:15',
    culturalContext:
      'One of India’s four historic Dhrupad schools, patronized by the Maharajas of Darbhanga. Famous for deep-chested vocalization, microtonal nuances, and complex laykari on the pakhawaj.',
    description:
      'Pt. Ram Chatur Mallik (1902–1990) was the premier court vocalist of the Darbhanga Raj and a Padma Shri recipient. His rendition adheres strictly to ancient Dhrupad-Dhamar canons.',
    instruments: ['Pakhawaj', 'Tanpura'],
    placeId: 'raj-darbhanga',
    source: 'Sangeet Natak Akademi & Classical Dhrupad Archives',
    coverImage: VERIFIED_IMAGES.nalanda
  },
  {
    id: 'dumraon-shehnai-bhairavi',
    title: 'Dumraon Shehnai: Raag Bhairavi',
    hindiTitle: 'डुमरांव शहनाई: राग भैरवी',
    performer: 'Bharat Ratna Ustad Bismillah Khan',
    tradition: 'Dumraon Royal Court Shehnai Lineage',
    traditionType: 'court_tradition',
    category: 'classical',
    language: 'Instrumental',
    region: 'bhojpur',
    regionDisplay: 'Bhojpur (Dumraon, Buxar)',
    districtId: 'buxar',
    districtName: 'Buxar',
    youtubeId: 'FjwCSNkRiBo',
    youtubeUrl: 'https://www.youtube.com/watch?v=FjwCSNkRiBo',
    durationMinutes: '9:40',
    culturalContext:
      'Ustad Bismillah Khan was born in Dumraon (Buxar district), where his forebears were hereditary court musicians for the Maharaja of Dumraon. He elevated the traditional folk reed into classical mastery.',
    description:
      'This signature Bhairavi recitation incorporates regional Purab Ang Thumri phrases and riverine folk inflections native to Western Bihar.',
    instruments: ['Shehnai', 'Duggi', 'Sur Harmonium'],
    personalityId: 'ustad-bismillah-khan',
    placeId: 'dumraon-palace',
    source: 'Saregama Classical / Prasar Bharati Archive',
    coverImage: VERIFIED_IMAGES.sherShahTomb
  },

  // 4. Bhojpuri Folk Theatre — Bhikhari Thakur & Bidesiya
  {
    id: 'bhikhari-thakur-bidesiya',
    title: 'Bhojpuri Bidesiya: Pyari Sundari Lokgeet',
    hindiTitle: 'भोजपुरी बिदेसिया: प्यारी सुंदरी लोकगीत',
    performer: 'Dr. Nitu Kumari Nootan',
    tradition: 'Bhojpuri Folk Theatre (Bidesiya Naach)',
    traditionType: 'traditional_folk',
    category: 'theatre',
    language: 'Bhojpuri',
    region: 'bhojpur',
    regionDisplay: 'Bhojpur & Saran (Chapra)',
    districtId: 'saran',
    districtName: 'Saran',
    youtubeId: 'jNXj3DTb3aY',
    youtubeUrl: 'https://www.youtube.com/watch?v=jNXj3DTb3aY',
    durationMinutes: '6:10',
    culturalContext:
      'Created by Bhikhari Thakur (1887–1971), celebrated as the Shakespeare of Bhojpuri. Bidesiya captures the human toll of rural-to-urban labor migration from Bihar to the mills of Bengal and Assam.',
    description:
      'Performed with expressive dramatic phrasing, harmonium, and dholak, voicing the longing and resilience of women left behind in village homes.',
    instruments: ['Harmonium', 'Dholak', 'Jhal (Cymbals)'],
    personalityId: 'bhikhari-thakur',
    placeId: 'kutubpur-chapra',
    source: 'Bhikhari Thakur Repertory Documentation / Classical Folk Series',
    coverImage: VERIFIED_IMAGES.sonepurMela
  },
  {
    id: 'bhojpuri-kajari-barsan',
    title: 'Bhojpuri Kajari: Koyal Bin Bagiya Na Shobhe Raja',
    hindiTitle: 'भोजपुरी कजरी: कोयल बिन बगिया ना शोभे राजा',
    performer: 'Padma Bhushan Sharda Sinha',
    tradition: 'Monsoon Agrarian Folk Song (Kajari)',
    traditionType: 'traditional_folk',
    category: 'folk',
    language: 'Bhojpuri',
    region: 'bhojpur',
    regionDisplay: 'Bhojpur & Rohtas',
    districtId: 'bhojpur',
    districtName: 'Bhojpur',
    youtubeId: 'PQsKIXx3bfU',
    youtubeUrl: 'https://www.youtube.com/watch?v=PQsKIXx3bfU',
    durationMinutes: '5:15',
    culturalContext:
      'Kajari is the traditional seasonal song of the Shravan monsoon in Western Bihar, sung as the first rains green the parched plains and village swings are hung from mango groves.',
    description:
      'Characterized by swaying rhythmic cadences mirroring village rope swings (Jhula), celebrating nature’s revival and heartfelt domestic affection.',
    instruments: ['Dholak', 'Harmonium', 'Manjira'],
    source: 'T-Series Regional (Album: Kajari Geet / Sharda Sinha)',
    coverImage: VERIFIED_IMAGES.rohtasgarh
  },

  // 5. Magahi & Bhojpuri Life-Cycle Traditions
  {
    id: 'magahi-sohar-janam',
    title: 'Bhojpuri & Magahi Sohar Geet',
    hindiTitle: 'सोहर गीत (संस्कार एवं जन्मोत्सव)',
    performer: 'Dr. Nitu Kumari Nootan',
    tradition: 'Childbirth Blessing Folk Tradition (Sohar)',
    traditionType: 'traditional_folk',
    category: 'lifecycle',
    language: 'Bhojpuri & Magahi',
    region: 'magadh',
    regionDisplay: 'Magadh & Bhojpur',
    districtId: 'gaya',
    districtName: 'Gaya',
    youtubeId: 'iH5HL4roSc8',
    youtubeUrl: 'https://www.youtube.com/watch?v=iH5HL4roSc8',
    durationMinutes: '5:40',
    culturalContext:
      'Sohar songs are performed in Bihari households upon the birth of an infant, welcoming the newborn into the community with blessings for long life and moral virtue.',
    description:
      'Accompanied by traditional dholak and metallic bronze plate (Thali) percussion, sung collectively in domestic courtyards without formal amplification.',
    instruments: ['Thali', 'Dholak', 'Harmonium'],
    source: 'T-Series Hamaar Bhojpuri (Traditional Sohar Release)',
    coverImage: VERIFIED_IMAGES.pitrapaksha
  },
  {
    id: 'magahi-falgu-nirgun',
    title: 'Kabir Nirgun: Hans Akela (Udd Jayega Hans Akela)',
    hindiTitle: 'कबीर निर्गुण: उड़ जाएगा हंस अकेला',
    performer: 'Pandit Kumar Gandharva',
    tradition: 'Nirgun Bhakti & Contemplative Spiritual Tradition',
    traditionType: 'classical_repertoire',
    category: 'devotional',
    language: 'Purabi & Hindustani',
    region: 'magadh',
    regionDisplay: 'Magadh (Gaya Region) & Eastern Plains',
    districtId: 'gaya',
    districtName: 'Gaya',
    youtubeId: 'DXtAf9lO6pE',
    youtubeUrl: 'https://www.youtube.com/watch?v=DXtAf9lO6pE',
    durationMinutes: '6:50',
    culturalContext:
      'Resonates with the ancient ascetic and philosophical soil of Gaya and the Barabar hills, meditating on the transient nature of worldly attachment and the solitary pilgrimage of the soul.',
    description:
      'Pt. Kumar Gandharva’s iconic rendition of Kabir’s verses uses minimalist acoustic restraint, harmonium drone, and contemplative tempo.',
    instruments: ['Harmonium', 'Tabla', 'Tanpura'],
    placeId: 'barabar-caves',
    source: 'Saregama Classical (Album: Nirgun Ke Gun / Pt. Kumar Gandharva)',
    coverImage: VERIFIED_IMAGES.barabarCaves
  },

  // 6. Angika & Eastern Bihar Narrative Traditions
  {
    id: 'anga-manjusha-behula',
    title: 'Bihula Bishahari Angika Geet (Bishahari Maiya Khola Na He Kewar)',
    hindiTitle: 'बिहुला विषहरी अंगिका लोकगीत: विषहरी मईया खोला ना हे केवार',
    performer: 'Sushil Kumar Bharti & Troupe',
    tradition: 'Anga Epic Narrative Singing (Bishahari Gatha)',
    traditionType: 'traditional_folk',
    category: 'folk',
    language: 'Angika',
    region: 'anga',
    regionDisplay: 'Anga (Bhagalpur & Banka)',
    districtId: 'bhagalpur',
    districtName: 'Bhagalpur',
    youtubeId: 'dIn6T1odszY',
    youtubeUrl: 'https://www.youtube.com/watch?v=dIn6T1odszY',
    durationMinutes: '6:15',
    culturalContext:
      'Sung during the Mansa / Bishahari Puja across Bhagalpur and the Anga plains. Recounts the mythic saga of Sati Behula who sailed the holy Ganga on a raft to overcome serpent curses.',
    description:
      'Direct companion to the GI-tagged Manjusha scroll and temple painting tradition, accompanied by lively folk percussion and devotional call-and-response.',
    instruments: ['Dhak', 'Kansi', 'Harmonium', 'Manjira'],
    placeId: 'vikramshila',
    source: 'Anga Regional Folk Registry & Manjusha Documentation',
    coverImage: VERIFIED_IMAGES.manjusha
  },

  // 7. Syncretic Sufi & Spiritual Traditions
  {
    id: 'sufi-qawwali-maner-sharif',
    title: 'Maner Sharif Urs Celebration & Qawwali',
    hindiTitle: 'मनेर शरीफ उर्स कव्वाली परंपरा',
    performer: 'Traditional Qawwals of Maner Dargah',
    tradition: '700-Year Chisti-Firdausiya Sufi Tradition',
    traditionType: 'traditional_folk',
    category: 'devotional',
    language: 'Hindustani & Braj',
    region: 'magadh',
    regionDisplay: 'Patna & Nalanda',
    districtId: 'patna',
    districtName: 'Patna',
    youtubeId: '_CRtJ9RXpDA',
    youtubeUrl: 'https://www.youtube.com/watch?v=_CRtJ9RXpDA',
    durationMinutes: '8:40',
    culturalContext:
      'Held at the 17th-century sandstone Chhoti Dargah of Maner Sharif during the annual Urs. Devotees across religious communities participate in shared syncretic devotional harmony.',
    description:
      'Features rhythmic handclapping, harmonium accompaniment, and mystic poetic verses dedicated to saint Hazrat Makhdoom Yahya Maneri.',
    instruments: ['Harmonium', 'Dholak', 'Synchronized Handclapping'],
    festivalId: 'sufi-urs-maner',
    source: 'Maner Sharif Dargah Cultural Documentation Archive',
    coverImage: VERIFIED_IMAGES.sherShahTomb
  },
  {
    id: 'takht-patna-sahib-gurbani',
    title: 'Takht Sri Harmandir Ji Patna Sahib Gurbani Kirtan',
    hindiTitle: 'तख्त श्री हरमंदिर जी पटना साहिब गुरबाणी कीर्तन',
    performer: 'Hazoori Ragi Jatha (Takht Sri Patna Sahib)',
    tradition: 'Classical Sikh Gurbani Kirtan',
    traditionType: 'classical_repertoire',
    category: 'devotional',
    language: 'Gurbani & Braj',
    region: 'magadh',
    regionDisplay: 'Patna City (Patna Sahib)',
    districtId: 'patna',
    districtName: 'Patna',
    youtubeId: 'lJ4G38z1uUE',
    youtubeUrl: 'https://www.youtube.com/watch?v=lJ4G38z1uUE',
    durationMinutes: '7:25',
    culturalContext:
      'Recited inside the marble sanctum at the birthplace of Guru Gobind Singh Ji (born in Patna in 1666). Emphasizes righteous courage, equality, and divine remembrance.',
    description:
      'Performed in classical Indian ragas with antique acoustic harmonium, tabla, and traditional stringed accompaniments by ordained Ragi Jathas.',
    instruments: ['Harmonium', 'Tabla', 'Tanpura'],
    festivalId: 'prakash-parv',
    placeId: 'patna-sahib',
    source: 'Takhat Sri Patna Sahib Official Broadcast Archive',
    coverImage: VERIFIED_IMAGES.patnaSahib
  },

  // 8. Nature & Southern Plateau Traditions
  {
    id: 'karam-mandar-geet',
    title: 'Karam Parva Mandar Folk Geet & Dance',
    hindiTitle: 'करमा पर्व मांदर ताल एवं लोकगीत',
    performer: 'Regional Traditional Folk Troupe',
    tradition: 'Southern Plateau Nature-Worship Tradition',
    traditionType: 'traditional_folk',
    category: 'folk',
    language: 'Regional Dialect & Bhojpuri',
    region: 'bhojpur',
    regionDisplay: 'Southern Plateau (Rohtas & Kaimur)',
    districtId: 'kaimur',
    districtName: 'Kaimur',
    youtubeId: 'd_JuWYis3uk',
    youtubeUrl: 'https://www.youtube.com/watch?v=d_JuWYis3uk',
    durationMinutes: '5:35',
    culturalContext:
      'Celebrated in plateau and forest-edge settlements during the Bhadrapada monsoon. Youths dance in continuous circles around consecrated branches of the Karam tree.',
    description:
      'Driven by the deep resonance of the clay Mandar drum and brass percussion, celebrating agricultural germination, friendship, and ecological balance.',
    instruments: ['Mandar (Clay drum)', 'Nagara', 'Bansuri', 'Thali'],
    festivalId: 'karam-parva',
    placeId: 'mundeshwari-hill',
    source: 'Regional Tribal & Plateau Folklore Documentation',
    coverImage: VERIFIED_IMAGES.sikkiCraft
  },

  // 9. Contemporary Revival of Traditional Solar Hymns
  {
    id: 'contemporary-bihar-sharda-tribute',
    title: 'Uga Ho Surujdev (Chhath Geet)',
    hindiTitle: 'उग हो सुरुजदेव (छठ लोकगीत)',
    performer: 'Maithili Thakur',
    tradition: 'Contemporary Acoustic Revival of Traditional Folk',
    traditionType: 'contemporary_rendition',
    category: 'contemporary',
    language: 'Maithili & Bhojpuri',
    region: 'statewide',
    regionDisplay: 'Mithila & Statewide Bihar',
    districtId: 'patna',
    districtName: 'Patna',
    youtubeId: 'TjH3jsybNJA',
    youtubeUrl: 'https://www.youtube.com/watch?v=TjH3jsybNJA',
    durationMinutes: '5:45',
    culturalContext:
      'Demonstrates the intergenerational continuity of Bihar’s folk heritage among younger generations, presenting pure acoustic traditional hymns with classical fidelity.',
    description:
      'Recorded with harmonium, tabla, and unadorned vocal harmonies, continuing the veneration of the morning sun without synthetic studio distortion.',
    instruments: ['Harmonium', 'Tabla', 'Bansuri'],
    festivalId: 'chhath-puja',
    source: 'Official Maithili Thakur Channel (Traditional Chhath Series)',
    coverImage: VERIFIED_IMAGES.golghar
  }
];

export const MUSIC_COLLECTIONS: MusicCollection[] = [
  {
    id: 'festival-sounds',
    title: 'Festival Sounds',
    hindiTitle: 'पर्व-त्योहारों के पावन स्वर',
    subtitle: 'Chhath, Sama-Chakeva, and Auspicious Congregations',
    category: 'festival',
    description:
      'From the mist-shrouded dawn hymns of Chhath Puja to nocturnal winter songs, explore how Bihar celebrates through living sound.',
    trackIds: ['kelwa-ke-paat-par', 'kaanch-hi-baans-ke-bahangiya', 'contemporary-bihar-sharda-tribute']
  },
  {
    id: 'folk-voices',
    title: 'Folk Voices & Ballads',
    hindiTitle: 'माटी के बोल एवं लोक गाथाएं',
    subtitle: 'Migration, Longing & Monsoon Rhythms',
    category: 'folk',
    description:
      'The heartfelt storytelling of the Bihari hinterland—from Bhikhari Thakur’s Bidesiya migration epics to Shravan Kajari swing songs.',
    trackIds: ['bhikhari-thakur-bidesiya', 'bhojpuri-kajari-barsan', 'anga-manjusha-behula']
  },
  {
    id: 'wedding-lifecycle',
    title: 'Wedding & Life-Cycle Songs',
    hindiTitle: 'संस्कार एवं जीवन चक्र के गीत',
    subtitle: 'Sohar, Kohbar, Samdaun & Courtship Verses',
    category: 'lifecycle',
    description:
      'The oral lineage of women: auspicious Sohar welcoming newborns and the tearful dignity of the Samdaun bridal farewell in Mithila.',
    trackIds: ['samdaun-doli-uthalo', 'magahi-sohar-janam']
  },
  {
    id: 'classical-court',
    title: 'Classical & Court Traditions',
    hindiTitle: 'दरबारी ध्रुपद एवं शास्त्रीय संगीत',
    subtitle: 'Darbhanga Dhrupad & Dumraon Shehnai',
    category: 'classical',
    description:
      'Centuries of royal patronage under the Darbhanga Raj and Dumraon courts that gave India its supreme Dhrupad maestros and the Shehnai of Bismillah Khan.',
    trackIds: ['darbhanga-dhrupad-darbari', 'dumraon-shehnai-bhairavi']
  },
  {
    id: 'devotional-spiritual',
    title: 'Devotional & Mystical Traditions',
    hindiTitle: 'भक्ति, सूफी एवं आध्यात्मिक परंपरा',
    subtitle: 'Vidyapati Padavali, Maner Urs & Gurbani',
    category: 'devotional',
    description:
      'Bihar’s syncretic spirituality: Mahakavi Vidyapati’s Nachari, the 700-year Sufi Qawwali of Maner Sharif, and Gurbani Kirtan at Takht Sri Patna Sahib.',
    trackIds: ['vidyapati-nachari-bhairavi', 'sufi-qawwali-maner-sharif', 'takht-patna-sahib-gurbani', 'magahi-falgu-nirgun']
  },
  {
    id: 'regional-bihar',
    title: 'Regional Soundscapes of Bihar',
    hindiTitle: 'क्षेत्रीय स्वर धाराएं',
    subtitle: 'Mithila, Bhojpur, Magadh & Anga',
    category: 'all',
    description:
      'A panoramic journey connecting language, dialect, and melody across Bihar’s historical cultural territories.',
    trackIds: ['kelwa-ke-paat-par', 'samdaun-doli-uthalo', 'bhikhari-thakur-bidesiya', 'magahi-sohar-janam', 'anga-manjusha-behula']
  }
];
