import { MusicTrack } from '../types';
import { VERIFIED_IMAGES } from './media';

// Lightweight teaser dataset containing ONLY the 4 showcase tracks for HearBiharSection
// This prevents pulling the full 22.6KB music dataset into the initial homepage bundle.
export const SHOWCASE_TRACKS: MusicTrack[] = [
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
    personalityId: 'vidyapati',
    source: 'Saregama Bhakti (Album: Gosauni Ke Geet / Sharda Sinha)',
    coverImage: VERIFIED_IMAGES.madhubani
  },
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
  }
];
