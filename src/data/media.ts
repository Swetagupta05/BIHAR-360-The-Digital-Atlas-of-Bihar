export interface VerifiedMediaAsset {
  id: string;
  title: string;
  hindiTitle: string;
  location: string;
  districtId: string;
  src: string;
  caption: string;
  isVerified: true;
}

export const VERIFIED_IMAGES = {
  nalanda: '/assets/images/nalanda_university_ruins_1789937702654.jpg',
  mahabodhi: '/assets/images/mahabodhi_temple_gaya_1789937719331.jpg',
  littiChokha: '/assets/images/litti_chokha_bihar_1789937732927.jpg',
  madhubani: '/assets/images/madhubani_mithila_painting_1789937745005.jpg',
  chhathPuja: '/assets/images/chhath_puja_bihar_1789937759874.jpg',
  golghar: '/assets/images/patna_golghar_granary_1789937770039.jpg',
  sherShahTomb: '/assets/images/sher_shah_suri_tomb_1789937780605.jpg',
  barabarCaves: '/assets/images/barabar_caves_bihar_1789937792685.jpg',
  kesariaStupa: '/assets/images/kesaria_stupa_champaran_1789937806799.jpg',
  vikramshila: '/assets/images/vikramshila_ruins_bhagalpur_1789937817668.jpg',
  ashokanPillar: '/assets/images/ashokan_pillar_vaishali_1789937849903.jpg',
  patnaSahib: '/assets/images/patna_sahib_gurudwara_1789937861692.jpg',
  rohtasgarh: '/assets/images/rohtasgarh_fort_plateau_1789937871440.jpg',
  mundeshwari: '/assets/images/mundeshwari_temple_kaimur_1789937882692.jpg',
  champaranMutton: '/assets/images/champaran_ahuna_mutton_1789937906439.jpg',
  thekua: '/assets/images/bihari_thekua_prasad_1789938008063.jpg',
  makhanaKheer: '/assets/images/mithila_makhana_kheer_1789938020193.jpg',
  tilkut: '/assets/images/gaya_tilkut_sweet_1789938032533.jpg',
  silaoKhaja: '/assets/images/silao_khaja_bihar_1789937916729.jpg',
  manjusha: '/assets/images/manjusha_art_bihar_1789937931195.jpg',
  sujani: '/assets/images/sujani_embroidery_bihar_1789937939588.jpg',
  bhagalpuriSilk: '/assets/images/bhagalpuri_tussar_silk_1789938063798.jpg',
  sikkiCraft: '/assets/images/sikki_grass_craft_bihar_1789938076910.jpg',
  sonepurMela: '/assets/images/sonepur_cattle_fair_1789937950038.jpg',
  pitrapaksha: '/assets/images/gaya_pitrapaksha_mela_1789938112172.jpg',
  samaChakeva: '/assets/images/sama_chakeva_mithila_1789938124507.jpg',
} as const;

// Verified district landmark image mapping (only where exact photographic match exists)
export const DISTRICT_VERIFIED_LANDMARK: Record<string, { src: string; name: string; tag: string }> = {
  patna: {
    src: VERIFIED_IMAGES.golghar,
    name: 'Golghar Granary & Patna Heritage',
    tag: 'Architectural Landmark'
  },
  nalanda: {
    src: VERIFIED_IMAGES.nalanda,
    name: 'Nalanda Mahavihara Ancient Ruins',
    tag: 'UNESCO World Heritage'
  },
  gaya: {
    src: VERIFIED_IMAGES.mahabodhi,
    name: 'Mahabodhi Temple Complex',
    tag: 'UNESCO World Heritage'
  },
  vaishali: {
    src: VERIFIED_IMAGES.ashokanPillar,
    name: 'Kolhua Monolithic Ashokan Pillar',
    tag: 'Mauryan Heritage'
  },
  rohtas: {
    src: VERIFIED_IMAGES.sherShahTomb,
    name: 'Tomb of Sher Shah Suri',
    tag: 'Indo-Islamic Masterpiece'
  },
  jehanabad: {
    src: VERIFIED_IMAGES.barabarCaves,
    name: 'Barabar Caves Monolithic Granites',
    tag: 'Mauryan Rock-Cut'
  },
  'east-champaran': {
    src: VERIFIED_IMAGES.kesariaStupa,
    name: 'Kesaria Ancient Buddhist Stupa',
    tag: 'Ancient Stupa'
  },
  bhagalpur: {
    src: VERIFIED_IMAGES.vikramshila,
    name: 'Vikramshila University Excavations',
    tag: 'Pala Era Mahavihara'
  },
  kaimur: {
    src: VERIFIED_IMAGES.mundeshwari,
    name: 'Maa Mundeshwari Devi Octagonal Temple (108 CE)',
    tag: 'Oldest Functional Temple'
  },
  madhubani: {
    src: VERIFIED_IMAGES.madhubani,
    name: 'Traditional Mithila / Madhubani Art Heritage',
    tag: 'GI Tag Folk Art'
  },
  'west-champaran': {
    src: VERIFIED_IMAGES.champaranMutton,
    name: 'Bettiah Raj & Champaran Ahuna Heritage',
    tag: 'Culinary Heritage'
  },
  saran: {
    src: VERIFIED_IMAGES.sonepurMela,
    name: 'Harihar Kshetra Sonepur Heritage Grounds',
    tag: 'Historic River Confluence'
  },
  muzaffarpur: {
    src: VERIFIED_IMAGES.sujani,
    name: 'Sujani Craft & Shahi Litchi Region',
    tag: 'GI Tag Textile Art'
  }
};

export const VERIFIED_LANDMARK_IMAGES = DISTRICT_VERIFIED_LANDMARK;

