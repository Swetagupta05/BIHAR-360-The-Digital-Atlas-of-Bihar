import { District } from '../../types';
import { getDistrictImageMetadata } from '../districtImages';
import { MAGADH_DISTRICTS } from './magadh';
import { TIRHUT_DISTRICTS } from './tirhut';
import { MITHILA_DISTRICTS } from './mithila';
import { BHOJPUR_DISTRICTS } from './bhojpur';
import { SARAN_DISTRICTS } from './saran';
import { KOSI_DISTRICTS } from './kosi';
import { PURNIA_DISTRICTS } from './purnia';
import { ANGA_DISTRICTS } from './anga';

export const DISTRICT_IDENTITY_STATEMENTS: Record<string, string> = {
  patna: 'Capital of Bihar and ancient Pataliputra, imperial seat of the Mauryas and Guptas at the holy confluence of the Ganga.',
  nalanda: 'Global beacon of ancient learning and monastic scholarship, home to the UNESCO World Heritage ruins of Nalanda Mahavihara.',
  gaya: 'Spiritual sanctuary of world Buddhism and ancestral salvation, home to the UNESCO World Heritage Mahabodhi Temple and Falgu River.',
  jehanabad: 'Cradle of India’s earliest rock-cut architecture in the granite boulders of the ancient 3rd-century BCE Barabar Caves.',
  nawada: 'Southern hill land of natural springs and waterfalls, famed for scenic Kakolat Falls and the ancient Jain tirth of Gunawa Sthan.',
  aurangabad: 'Historical gateway of Magadh renowned for the 8th-century sun temple of Deo and Sun Festival celebrations on the Batane River.',
  arwal: 'Fertile Son riverine agricultural district rooted in folk literature and peaceful Son canal-fed harvest traditions.',
  vaishali: 'World’s earliest recorded democratic republic (Licchavi), birthplace of Lord Mahavira, and setting of Ashoka’s Kolhua Lion Pillar.',
  muzaffarpur: 'Global capital of fragrant GI-tagged Shahi Litchis and vibrant home to the traditional Sujani Kantha textile craft.',
  'east-champaran': 'Historic cradle of Mahatma Gandhi’s 1917 Satyagraha and home to the majestic 104-foot Kesaria Buddhist Stupa.',
  'west-champaran': 'Bihar’s wilderness frontier sheltering Valmiki Tiger Reserve, dense sal forests, and Gandak river floodplains.',
  'purvi-champaran': 'Historic cradle of Mahatma Gandhi’s 1917 Satyagraha and home to the majestic 104-foot Kesaria Buddhist Stupa.',
  'pashchim-champaran': 'Bihar’s wilderness frontier sheltering Valmiki Tiger Reserve, dense sal forests, and Gandak river floodplains.',
  sitamarhi: 'Sacred mythological birthplace of Devi Sita at Janaki Mandir and Punaura Dham in the fertile northern plains.',
  sheohar: 'Compact historic agricultural pocket along the Bagmati River, noted for fertile paddy fields and rural communal harmony.',
  madhubani: 'Heartland of Mithila culture and world-renowned home of GI-tagged Mithila / Madhubani painting and aquatic makhana ponds.',
  darbhanga: 'Cultural and musical capital of Mithila, celebrated for Raj Darbhanga royal palaces, Dhrupad classical music, and ponds.',
  samastipur: 'Agricultural research and education hub of central Bihar, birthplace of Dr. Rajendra Prasad Central Agricultural University (Pusa).',
  bhojpur: 'Historic heartland of Bhojpuri valor, home to 1857 revolutionary leader Babu Veer Kunwar Singh and the Koilwar Sone Bridge.',
  buxar: 'Ancient hermitage of Sage Vishwamitra on the sacred Ganga ghats and historic turning point of the Battle of Buxar (1764).',
  rohtas: 'Architectural marvel of the grand red sandstone floating Tomb of Sher Shah Suri and Rohtasgarh plateau fortress.',
  kaimur: 'Rugged limestone plateau district crowned by the ancient 7th-century Maa Mundeshwari Devi Temple, India’s oldest active stone temple.',
  saran: 'Vibrant confluence of the Gandak and Ganga rivers, home to the historic Sonepur Harihar Kshetra Mela and Chhapra culture.',
  siwan: 'Birthplace of Dr. Rajendra Prasad, India’s first President, in Ziradei, and historic center of metalwork and pottery.',
  gopalganj: 'Agricultural sugarcane heartland bordering eastern Uttar Pradesh, celebrated for the sacred Thawe Bhawani Temple.',
  saharsa: 'Heart of the resilient Kosi basin, ancient philosophical seat of Mandana Mishra and the venerable Tara Sthan temple at Mahishi.',
  madhepura: 'Sacred riverine realm of Singheshwar Sthan Shiva Dham and landmark political home of social justice leader B.P. Mandal.',
  supaul: 'Gateway to the Kosi River barrage and resilient Mithila craft center noted for traditional Sikki golden grass weaving.',
  purnia: 'Literary heartland immortalized by Phanishwar Nath Renu (Maila Anchal), celebrated for sprawling jute and maize cultivation.',
  katihar: 'Strategic eastern rail and river nexus of Bihar, home to the ecologically rich Gogabil Lake oxbow wetland.',
  kishanganj: 'Eastern tea-growing jewel of Bihar nestled in the lush alluvial plains of the Mahananda River basin bordering West Bengal.',
  araria: 'Serene eastern border district known for rich agricultural harvest traditions and the literary legacy of Phanishwar Nath Renu at Simraha.',
  bhagalpur: 'The Silk City of India, world-famed for wild golden Tussar Silk (GI), ancient Vikramshila University ruins, and Gangetic Dolphins.',
  banka: 'Sacred granite monolith realm of Mandar Hill, celebrated in the mythological Samudra Manthan and adorned with ancient rock carvings.',
  munger: 'Ancient fort citadel along a dramatic rocky bend of the holy Ganga, home to the world-renowned Bihar School of Yoga.',
  jamui: 'Historic southern hill district graced by the 1909 Giddhaur Minto Tower and sacred Jain pilgrimage sites of Lachhuar.',
  khagaria: 'Riverine “Farakia” district woven by seven flowing rivers (Ganga, Gandak, Bagmati, Kosi, Kamla) and famed for fertile floodplains.',
  begusarai: 'Industrial and literary powerhouse of Bihar, home to Bihar’s first Ramsar wetland (Kanwar Lake) and Rashtrakavi Ramdhari Singh Dinkar.',
  lakhisarai: 'Ancient Buddhist and monastic heartland of Krimila along the Kiul River, celebrated for Ashokdham and Shringi Rishi Hills.',
  sheikhpura: 'One of Bihar’s most compact historic districts, known for traditional stone carving, Chewara hills, and Girihinda Pahar.'
};

const RAW_DISTRICTS: District[] = [
  ...MAGADH_DISTRICTS,
  ...TIRHUT_DISTRICTS,
  ...MITHILA_DISTRICTS,
  ...BHOJPUR_DISTRICTS,
  ...SARAN_DISTRICTS,
  ...KOSI_DISTRICTS,
  ...PURNIA_DISTRICTS,
  ...ANGA_DISTRICTS
];

export const ALL_DISTRICTS: District[] = RAW_DISTRICTS.map(d => {
  const meta = getDistrictImageMetadata(d.slug);
  return {
    ...d,
    imageMetadata: meta,
    heroImage: meta ? meta.url : '',
    identityStatement: DISTRICT_IDENTITY_STATEMENTS[d.slug] || d.overview.slice(0, 120),
    censusYear: 2011
  };
});

export const REGIONS: { id: string; name: string; hindiName: string; districtCount: number; description: string }[] = [
  { id: 'Magadh', name: 'Magadh', hindiName: 'मगध', districtCount: MAGADH_DISTRICTS.length, description: 'Imperial seat of Mauryas and Guptas, cradle of Buddhism and Jainism.' },
  { id: 'Tirhut', name: 'Tirhut', hindiName: 'तिरहुत', districtCount: TIRHUT_DISTRICTS.length, description: 'World’s first republic (Vaishali), Champaran Satyagraha, and Shahi Litchi.' },
  { id: 'Mithila', name: 'Mithila', hindiName: 'मिथिला', districtCount: MITHILA_DISTRICTS.length, description: 'Ancient realm of King Janaka, Madhubani painting, and Mithila Makhana.' },
  { id: 'Bhojpur', name: 'Bhojpur', hindiName: 'भोजपुर', districtCount: BHOJPUR_DISTRICTS.length, description: 'Veer Kunwar Singh’s 1857 valor, Sher Shah Suri’s tomb, and Mundeshwari.' },
  { id: 'Saran', name: 'Saran', hindiName: 'सारण', districtCount: SARAN_DISTRICTS.length, description: 'Sonepur Mela, Dr. Rajendra Prasad birthplace (Ziradei), and Bhikhari Thakur.' },
  { id: 'Kosi', name: 'Kosi', hindiName: 'कोसी', districtCount: KOSI_DISTRICTS.length, description: 'River of resilience, Mandana Mishra debates, and Tara Sthan Mahishi.' },
  { id: 'Purnia', name: 'Purnia', hindiName: 'पूर्णिया', districtCount: PURNIA_DISTRICTS.length, description: 'Phanishwar Nath Renu literary soil, Kishanganj tea gardens, and Gogabil wetlands.' },
  { id: 'Anga', name: 'Anga', hindiName: 'अंग', districtCount: ANGA_DISTRICTS.length, description: 'King Karna’s realm, Vikramshila University, Bhagalpuri Tussar Silk, and Munger Yoga.' }
];

export function getDistrictById(id: string): District | undefined {
  return ALL_DISTRICTS.find(d => d.id === id || d.slug === id);
}

export function getDistrictsByRegion(region: string): District[] {
  if (region === 'All') return ALL_DISTRICTS;
  return ALL_DISTRICTS.filter(d => d.region.toLowerCase() === region.toLowerCase());
}
