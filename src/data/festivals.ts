import { Festival } from '../types';
import { VERIFIED_IMAGES } from './media';

export const FESTIVALS_DATA: Festival[] = [
  {
    id: 'chhath-puja',
    name: 'Chhath Puja (Surya Shashthi)',
    hindiName: 'छठ पूजा (महापर्व)',
    timing: 'Kartik Shukla Shashthi (October/November) & Chaitra (March/April)',
    associatedDistricts: ['patna', 'gaya', 'vaishali', 'muzaffarpur', 'bhojpur', 'bhagalpur', 'madhubani'],
    image: VERIFIED_IMAGES.chhathPuja,
    overview: 'The supreme festival (Mahaparva) of Bihar, observed with uncompromising purity and devotion. It is the only Vedic festival in the world that worships both the setting sun and the rising sun, symbolizing the cosmic balance of life and gratitude to nature.',
    rituals: [
      'Day 1 - Nahay-Khay: Devotees (Vratis) bathe in sacred rivers and prepare a sanctified vegetarian meal of bottle gourd (Lauki/Kaddu) cooked in pure ghee and rock salt with Arwa chawal in copper/earthen utensils.',
      'Day 2 - Kharna: A day-long nirjala (waterless) fast broken only after sunset by offering Rasiya (jaggery kheer made on earthen stoves with mango wood) and ghee-slathered rotis to the Sun, followed by beginning a strict 36-hour waterless fast.',
      'Day 3 - Sandhya Arghya: In the evening, devotees carry bamboo baskets (Daura and Soop) loaded with Thekua, sugarcane, bananas, coconuts, and seasonal fruits to river ghats, standing waist-deep in water to offer Arghya to the setting sun.',
      'Day 4 - Usha Arghya: Before dawn, families return to the riverbank to offer prayers and milk Arghya to the rising sun, after which the fast is broken with ginger and holy water (Parana).'
    ],
    significance: 'Rooted in the Rigveda and the Mahabharata (associated with Draupadi and Karna). Celebrates solar energy, ecological water bodies, zero priest mediation (every individual prays directly to nature), and complete social equality on the ghats.'
  },
  {
    id: 'sonepur-mela',
    name: 'Sonepur Harihar Kshetra Mela',
    hindiName: 'सोनपुर हरिहर क्षेत्र मेला',
    timing: 'Kartik Purnima (November/December, lasting one month)',
    associatedDistricts: ['saran', 'vaishali', 'patna'],
    image: VERIFIED_IMAGES.sonepurMela,
    overview: 'Asia’s largest cattle and rural carnival, held on the auspicious confluence of the holy Ganga and Gandak (Narayani) rivers at Sonepur. Renowned for centuries of horse, bird, cattle trading, circus shows, folk performances, and spiritual bathing.',
    rituals: [
      'Holy dip (Snan) at the Sangam on Kartik Purnima at sunrise',
      'Pujas and Jalabhisheka at the historic Baba Harihar Nath Temple',
      'Parades and traditional trading of Marwari horses, camels, and cattle',
      'Nightly Bhojpuri theatrical shows, Nautanki, and open-air handicraft bazaars'
    ],
    significance: 'Historical roots tracing back to Chandragupta Maurya who purchased war elephants and cavalry horses here. Celebrates the mythological Gajendramoksha legend where Lord Vishnu rescued the elephant king from a crocodile.'
  },
  {
    id: 'sama-chakeva',
    name: 'Sama-Chakeva',
    hindiName: 'सामा-चकेवा',
    timing: 'Winter season during the Shukla Paksha of Kartik month (November)',
    associatedDistricts: ['madhubani', 'darbhanga', 'samastipur', 'sitamarhi'],
    image: VERIFIED_IMAGES.samaChakeva,
    overview: 'A poignant and beautiful folk festival of Mithila celebrating the eternal love and bond between brothers and sisters, welcoming winter migratory birds from the Himalayas with handmade clay sculptures.',
    rituals: [
      'Young women sculpt miniature clay birds: Sama (female bird), Chakeva (male bird), Charwak, and a malicious gossip-monger called Chugla.',
      'In the quiet winter evenings under the moonlight, girls gather in village courtyards singing enchanting Maithili folk songs.',
      'On Kartik Purnima night, the mustache of Chugla is burnt, and Sama-Chakeva clay birds are immersed in village ponds while brothers crush the clay idols under their feet to signify protection.'
    ],
    significance: 'Originates from the Skanda Purana story of Krishna’s daughter Sama and her brother Samba who defended her honor against false slander. Highlights deep environmental consciousness regarding migratory bird species.'
  },
  {
    id: 'pitrapaksha-mela',
    name: 'Gaya Pitrapaksha Mela',
    hindiName: 'गया पितृपक्ष मेला',
    timing: 'Bhadrapada Shukla Anant Chaturdashi to Ashwin Amavasya (September/October)',
    associatedDistricts: ['gaya'],
    image: VERIFIED_IMAGES.pitrapaksha,
    overview: 'The largest ancestral remembrance pilgrimage in the world, where millions from across the globe gather on the banks of the sacred Falgu River in Gaya to perform Pind Daan rituals for the salvation of departed ancestors.',
    rituals: [
      'Ritual bathing and offering barley-flour and sesame rice balls (Pind) at the 45 historic Vedis of Gaya',
      'Offering oblations at the sacred Vishnupad temple over the fossilized footprint of Lord Vishnu',
      'Visiting the Akshayavat (immortal banyan tree) where Sita performed Pind Daan for King Dasharatha',
      'Special mantras chanted under the guidance of traditional Gayawal Pandas'
    ],
    significance: 'Sanctified in the Garuda Purana and Ramayana. It is believed that performing Pind Daan in Gaya frees ancestors from the cycle of rebirth and attains Moksha.'
  },
  {
    id: 'rajgir-mahotsav',
    name: 'Rajgir Mahotsav',
    hindiName: 'राजगीर महोत्सव',
    timing: 'Last week of November / early December (Annual 3-day festival)',
    associatedDistricts: ['nalanda'],
    image: VERIFIED_IMAGES.nalanda,
    overview: 'A vibrant celebration of Indian classical music, dance, theater, and arts held in the ancient royal valley of Rajgir against the backdrop of the sacred Ratnagiri and Vaibhargiri hills.',
    rituals: [
      'Performances by legendary Indian classical vocalists, instrumentalists, and classical dance maestros',
      'Traditional Tonga (horse carriage) races through scenic hill routes',
      'Food festival showcasing regional culinary delicacies like Silao Khaja and Litti Chokha',
      'Heritage walks exploring Venuvana, Griddhakuta, and cyclopean stone walls'
    ],
    significance: 'Organized by Bihar Tourism to celebrate the rich syncretic heritage of Buddhism, Jainism, Hinduism, and Sikhism intertwined in the ancient capital of Magadh.'
  }
];
