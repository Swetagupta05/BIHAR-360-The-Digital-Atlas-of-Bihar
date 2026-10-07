import { ALL_DISTRICTS } from './districts';
import { BIHAR_LANDSCAPE_PLACES, BIHAR_RIVERS } from './places';
import { ALL_HISTORICAL_EVENTS, HISTORICAL_ERAS } from './history';
import { HERITAGE_SITES } from './heritage';
import { NOTABLE_PERSONALITIES } from './personalities';
import { FESTIVALS_DATA } from './festivals';
import { CUISINE_ITEMS } from './cuisine';
import { BIHAR_LANGUAGES } from './languages';
import { ARTS_AND_CRAFTS } from './arts';
import { MUSIC_TRACKS } from './music';
import { CURATED_JOURNEYS } from './itineraries';
import { VERIFIED_IMAGES } from './media';

export type DiscoveryEntityType =
  | 'district'
  | 'place'
  | 'history'
  | 'heritage'
  | 'person'
  | 'festival'
  | 'food'
  | 'language'
  | 'art'
  | 'music'
  | 'journey';

export type AliasType =
  | 'modern_alias'             // Verified alternate name for the identical entity (e.g. Purvi Champaran for East Champaran)
  | 'alternate_spelling'       // Alternate romanization/spelling (e.g. Bodhgaya vs Bodh Gaya, Chapra vs Chhapra, Purnea vs Purnia)
  | 'administrative_hq'        // Headquarters town/city of an administrative district (e.g. Sasaram for Rohtas, Motihari for East Champaran)
  | 'historical_association'   // Ancient capital, predecessor settlement, or historical name (e.g. Pataliputra for Patna, Anga for Bhagalpur)
  | 'regional_context'         // Broader cultural or geographical region (e.g. Mithila for Madhubani, Shahabad for Bhojpur)
  | 'cultural_reference';      // Widely cited cultural title (e.g. Silk City for Bhagalpur, Litchi City for Muzaffarpur)

export interface DiscoveryAlias {
  value: string;
  type: AliasType;
}

export interface DiscoveryConnection {
  targetId: string;
  targetType: DiscoveryEntityType;
  relationship: string;
  label: string;
  hindiLabel?: string;
  districtId?: string;
}

export interface DiscoveryRecord {
  id: string;
  type: DiscoveryEntityType;
  typeLabel: string;
  hindiTypeLabel: string;
  title: string;
  hindiTitle?: string;
  subtitle: string;
  description: string;
  aliases: string[]; // Kept for backwards compatibility
  typedAliases: DiscoveryAlias[];
  keywords: string[];
  image?: string;
  sourceId: string;
  route: {
    tab: string;
    targetId?: string;
    districtId?: string;
  };
  districtId?: string;
  districtName?: string;
  headquarters?: string;
  region?: string;
  connections: DiscoveryConnection[];

  // Precomputed normalized fields for ultra-fast deterministic matching
  titleNorm: string;
  hindiTitleNorm: string;
  aliasesNorm: string[];
  keywordsNorm: string[];
  subtitleNorm: string;
  descriptionNorm: string;
  metadataNorm: string;
}

export interface SearchResult {
  record: DiscoveryRecord;
  score: number;
  matchReason: string;
}

export interface SearchState {
  query: string;
  activeFilter: DiscoveryEntityType | 'all';
  results: SearchResult[];
  didYouMean?: string;
  totalMatches: number;
}

// Unicode and diacritic normalization
export function normalizeSearchText(text: string): string {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove latin diacritics
    .normalize('NFC')
    .toLowerCase()
    .replace(/[^\w\s\u0900-\u097F]/g, ' ') // preserve English alphanumeric, Hindi Devanagari, and space
    .replace(/\s+/g, ' ')
    .trim();
}

// Levenshtein distance for conservative typo detection
export function levenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// -------------------------------------------------------------
// AUDITED GEOGRAPHIC & HISTORICAL ASSOCIATIONS (NO CONFLATION)
// -------------------------------------------------------------

// 1. Direct modern aliases and alternate spellings for the EXACT same district entity
const DISTRICT_MODERN_ALIASES: Record<string, string[]> = {
  'east-champaran': ['Purvi Champaran', 'East Champaran District'],
  'west-champaran': ['Pashchim Champaran', 'West Champaran District'],
  purnia: ['Purnea', 'Purnea District'],
  saran: ['Saran District', 'Chapra District'],
  bhojpur: ['Bhojpur District', 'Arrah District'],
  kaimur: ['Kaimur Bhabhua', 'Kaimur District'],
  gaya: ['Gaya Ji', 'Gayaji', 'Gaya District'],
  patna: ['Patna District'],
  nalanda: ['Nalanda District'],
  munger: ['Monghyr', 'Munger District'],
  sitamarhi: ['Sitamarhi District'],
  darbhanga: ['Darbhanga District'],
  madhubani: ['Madhubani District'],
  muzaffarpur: ['Muzaffarpur District'],
  bhagalpur: ['Bhagalpur District'],
  rohtas: ['Rohtas District'],
  buxar: ['Buxar District'],
  siwan: ['Siwan District'],
  gopalganj: ['Gopalganj District'],
  vaishali: ['Vaishali District'],
  samastipur: ['Samastipur District'],
  begusarai: ['Begusarai District'],
  khagaria: ['Khagaria District'],
  saharsa: ['Saharsa District'],
  madhepura: ['Madhepura District'],
  supaul: ['Supaul District'],
  araria: ['Araria District'],
  kishanganj: ['Kishanganj District'],
  katihar: ['Katihar District'],
  banka: ['Banka District'],
  jamui: ['Jamui District'],
  nawada: ['Nawada District'],
  aurangabad: ['Aurangabad District Bihar'],
  jehanabad: ['Jehanabad District'],
  arwal: ['Arwal District'],
  sheohar: ['Sheohar District'],
  lakhisarai: ['Lakhisarai District'],
  sheikhpura: ['Sheikhpura District']
};

// 2. Historical associations (Explicitly distinguished from the modern administrative district)
const DISTRICT_HISTORICAL_ASSOCIATIONS: Record<string, string[]> = {
  patna: ['Pataliputra', 'Kusumpura', 'Pushpapura', 'Azimabad', 'Patliputra'],
  nalanda: ['Ancient Nalanda', 'Magadha University Center'],
  vaishali: ['Licchavi Republic', 'Vesali', 'Basarh'],
  bhagalpur: ['Anga Kingdom', 'Champa'],
  munger: ['Mudgagiri'],
  bhojpur: ['Shahabad'],
  rohtas: ['Rohtasgarh'],
  lakhisarai: ['Krimila']
};

// 3. Cultural and regional associations (Explicitly distinguished from the district name)
const DISTRICT_REGIONAL_ASSOCIATIONS: Record<string, string[]> = {
  madhubani: ['Mithila', 'Mithila Cultural Region'],
  darbhanga: ['Mithila', 'Mithila Cultural Region', 'Raj Darbhanga'],
  sitamarhi: ['Mithila', 'Mithila Cultural Region', 'Punaura Dham'],
  samastipur: ['Mithila', 'Mithila Cultural Region'],
  muzaffarpur: ['Tirhut', 'Litchi City'],
  bhagalpur: ['Silk City', 'Anga'],
  begusarai: ['Industrial Center of Bihar', 'Kabartal Wetland'],
  bhojpur: ['Bhojpur Cultural Region'],
  saran: ['Saran Division', 'Chirand Archaeological Complex'],
  kishanganj: ['Tea Growing Region of Bihar'],
  rohtas: ['Kaimur Plateau Region', 'Rohtasgarh Plateau'],
  kaimur: ['Kaimur Range'],
  gaya: ['Falgu River Valley', 'Magadh']
};

// -------------------------------------------------------------
// CENTRALIZED DISCOVERY INDEX BUILDER
// -------------------------------------------------------------
function buildDiscoveryIndex(): DiscoveryRecord[] {
  const records: DiscoveryRecord[] = [];

  const createRecord = (
    base: Omit<
      DiscoveryRecord,
      | 'titleNorm'
      | 'hindiTitleNorm'
      | 'aliasesNorm'
      | 'keywordsNorm'
      | 'subtitleNorm'
      | 'descriptionNorm'
      | 'metadataNorm'
    >
  ): DiscoveryRecord => {
    const titleNorm = normalizeSearchText(base.title);
    const hindiTitleNorm = normalizeSearchText(base.hindiTitle || '');
    const aliasesNorm = base.aliases.map(normalizeSearchText).filter(Boolean);
    const keywordsNorm = base.keywords.map(normalizeSearchText).filter(Boolean);
    const subtitleNorm = normalizeSearchText(base.subtitle);
    const descriptionNorm = normalizeSearchText(base.description);
    const metadataNorm = normalizeSearchText(
      `${base.districtName || ''} ${base.headquarters || ''} ${base.region || ''} ${base.typeLabel} ${base.hindiTypeLabel}`
    );

    return {
      ...base,
      titleNorm,
      hindiTitleNorm,
      aliasesNorm,
      keywordsNorm,
      subtitleNorm,
      descriptionNorm,
      metadataNorm
    };
  };

  // 1. DISTRICTS (38)
  for (const d of ALL_DISTRICTS) {
    const typedAliases: DiscoveryAlias[] = [];
    const connections: DiscoveryConnection[] = [];

    // Modern aliases / alternate spellings
    for (const val of DISTRICT_MODERN_ALIASES[d.id] || []) {
      typedAliases.push({ value: val, type: 'modern_alias' });
    }

    // Administrative Headquarters: explicit relationship & typed alias
    if (d.headquarters) {
      if (d.headquarters.toLowerCase() !== d.name.toLowerCase()) {
        typedAliases.push({ value: d.headquarters, type: 'administrative_hq' });
        connections.push({
          targetId: `hq-${d.id}`,
          targetType: 'district',
          relationship: 'headquarters',
          label: `HQ: ${d.headquarters}`,
          districtId: d.id
        });
      }
    }

    // Historical associations
    for (const val of DISTRICT_HISTORICAL_ASSOCIATIONS[d.id] || []) {
      typedAliases.push({ value: val, type: 'historical_association' });
    }

    // Regional and cultural associations
    for (const val of DISTRICT_REGIONAL_ASSOCIATIONS[d.id] || []) {
      typedAliases.push({ value: val, type: 'regional_context' });
    }

    // Linked Heritage Monuments (up to 3)
    const linkedHeritage = HERITAGE_SITES.filter(h => h.districtId === d.id);
    for (const h of linkedHeritage.slice(0, 3)) {
      connections.push({
        targetId: h.id,
        targetType: 'heritage',
        relationship: 'heritage_site',
        label: h.name,
        hindiLabel: h.hindiName,
        districtId: d.id
      });
    }

    // Linked Places & Landscapes (up to 3)
    const linkedPlaces = BIHAR_LANDSCAPE_PLACES.filter(p => p.districtId === d.id);
    for (const p of linkedPlaces.slice(0, 3)) {
      connections.push({
        targetId: p.id,
        targetType: 'place',
        relationship: 'landscape_place',
        label: p.name,
        hindiLabel: p.hindiName,
        districtId: d.id
      });
    }

    // Linked Cuisines (up to 2)
    const linkedFood = CUISINE_ITEMS.filter(f => f.originDistrict === d.name || f.districts?.includes(d.id));
    for (const f of linkedFood.slice(0, 2)) {
      connections.push({
        targetId: f.id,
        targetType: 'food',
        relationship: 'regional_cuisine',
        label: f.name,
        hindiLabel: f.hindiName,
        districtId: d.id
      });
    }

    // Linked Personalities (up to 2)
    const linkedPeople = NOTABLE_PERSONALITIES.filter(
      p =>
        p.districtOrigin?.toLowerCase().includes(d.name.toLowerCase()) ||
        p.bornDistrict?.toLowerCase().includes(d.name.toLowerCase())
    );
    for (const p of linkedPeople.slice(0, 2)) {
      connections.push({
        targetId: p.id,
        targetType: 'person',
        relationship: 'notable_figure',
        label: p.name,
        hindiLabel: p.hindiName,
        districtId: d.id
      });
    }

    // Linked Folk Arts
    const linkedArt = ARTS_AND_CRAFTS.filter(a => a.districtId === d.id || a.originRegion.toLowerCase().includes(d.region.toLowerCase()));
    for (const a of linkedArt.slice(0, 1)) {
      connections.push({
        targetId: a.id,
        targetType: 'art',
        relationship: 'regional_art',
        label: a.name,
        hindiLabel: a.hindiName,
        districtId: d.id
      });
    }

    // Linked Curated Journeys
    const linkedJourneys = CURATED_JOURNEYS.filter(j => j.districts.includes(d.id));
    for (const j of linkedJourneys.slice(0, 2)) {
      connections.push({
        targetId: j.id,
        targetType: 'journey',
        relationship: 'curated_route',
        label: j.title,
        hindiLabel: j.hindiTitle,
        districtId: d.id
      });
    }

    const placeNames = (d.importantPlaces || []).map(p => p.name);
    const foodNames = (d.food || []).map(f => f.name);
    const allAliasStrings = typedAliases.map(a => a.value);

    records.push(
      createRecord({
        id: d.id,
        type: 'district',
        typeLabel: 'District',
        hindiTypeLabel: 'ज़िला',
        title: d.name,
        hindiTitle: d.hindiName,
        subtitle: `HQ: ${d.headquarters} • ${d.region} Region`,
        description: d.overview || `${d.name} district situated in the ${d.region} region of Bihar.`,
        aliases: allAliasStrings,
        typedAliases,
        keywords: [
          ...(d.famousFor || []),
          ...placeNames,
          ...foodNames,
          d.region,
          'district',
          'dossier'
        ],
        image: d.heroImage || VERIFIED_IMAGES.golghar,
        sourceId: d.id,
        route: { tab: 'districts', districtId: d.id },
        districtId: d.id,
        districtName: d.name,
        headquarters: d.headquarters,
        region: d.region,
        connections
      })
    );
  }

  // 2. PLACES & RIVERS (20 Places + 8 Rivers)
  for (const p of BIHAR_LANDSCAPE_PLACES) {
    const connections: DiscoveryConnection[] = [];
    if (p.districtId) {
      connections.push({
        targetId: p.districtId,
        targetType: 'district',
        relationship: 'located_in',
        label: `${p.districtName} District`,
        districtId: p.districtId
      });
    }

    const linkedJourneys = CURATED_JOURNEYS.filter(j => j.districts.includes(p.districtId));
    if (linkedJourneys.length > 0) {
      connections.push({
        targetId: linkedJourneys[0].id,
        targetType: 'journey',
        relationship: 'on_journey_route',
        label: linkedJourneys[0].title,
        hindiLabel: linkedJourneys[0].hindiTitle
      });
    }

    const typedAliases: DiscoveryAlias[] = [
      { value: p.landscapeType, type: 'cultural_reference' }
    ];
    if (p.tagline) {
      typedAliases.push({ value: p.tagline, type: 'cultural_reference' });
    }

    records.push(
      createRecord({
        id: p.id,
        type: 'place',
        typeLabel: 'Landscape & Place',
        hindiTypeLabel: 'स्थल एवं परिदृश्य',
        title: p.name,
        hindiTitle: p.hindiName,
        subtitle: `${p.districtName} • ${p.category}`,
        description: p.whyItMatters || p.intro || p.tagline,
        aliases: typedAliases.map(a => a.value),
        typedAliases,
        keywords: [p.category, p.landscapeType, ...(p.thingsToSee || []), p.districtName],
        image: p.image || VERIFIED_IMAGES.rohtasgarh,
        sourceId: p.id,
        route: { tab: 'places', targetId: p.id, districtId: p.districtId },
        districtId: p.districtId,
        districtName: p.districtName,
        connections
      })
    );
  }

  for (const r of BIHAR_RIVERS) {
    const connections: DiscoveryConnection[] = [];
    for (const dId of (r.primaryDistricts || []).slice(0, 3)) {
      const matchD = ALL_DISTRICTS.find(d => d.id === dId || d.name.toLowerCase() === dId.toLowerCase());
      if (matchD) {
        connections.push({
          targetId: matchD.id,
          targetType: 'district',
          relationship: 'river_basin',
          label: `${matchD.name} District`,
          districtId: matchD.id
        });
      }
    }

    const typedAliases: DiscoveryAlias[] = [
      { value: 'River of Bihar', type: 'cultural_reference' }
    ];
    if (r.confluence) {
      typedAliases.push({ value: r.confluence, type: 'cultural_reference' });
    }

    records.push(
      createRecord({
        id: r.id,
        type: 'place',
        typeLabel: 'River & Waterway',
        hindiTypeLabel: 'प्रमुख नदी',
        title: r.name,
        hindiTitle: r.hindiName,
        subtitle: `Origin: ${r.origin} • Length: ${r.lengthInBiharKm ? `${r.lengthInBiharKm} km` : 'Perennial'}`,
        description: r.culturalSignificance || r.geographicRole,
        aliases: typedAliases.map(a => a.value),
        typedAliases,
        keywords: ['River', 'Waterway', 'Ganga Basin', ...(r.primaryDistricts || []), ...(r.keyPlacesAlong || [])],
        image: r.image || VERIFIED_IMAGES.kesariaStupa,
        sourceId: r.id,
        route: { tab: 'places', targetId: r.id },
        connections
      })
    );
  }

  // 3. HERITAGE SITES (11)
  for (const h of HERITAGE_SITES) {
    const connections: DiscoveryConnection[] = [];
    if (h.districtId) {
      connections.push({
        targetId: h.districtId,
        targetType: 'district',
        relationship: 'monument_location',
        label: `${h.location}`,
        districtId: h.districtId
      });
    }

    const linkedJourneys = CURATED_JOURNEYS.filter(j => j.districts.includes(h.districtId));
    for (const j of linkedJourneys.slice(0, 2)) {
      connections.push({
        targetId: j.id,
        targetType: 'journey',
        relationship: 'circuit_stop',
        label: j.title,
        hindiLabel: j.hindiTitle
      });
    }

    const cleanName = h.name.replace(/^(Tomb of|Ruins of|Site of)\s+/i, '').trim();
    const typedAliases: DiscoveryAlias[] = [
      { value: cleanName, type: 'alternate_spelling' },
      { value: h.period, type: 'historical_association' },
      { value: h.dynasty, type: 'historical_association' }
    ];
    if (h.id === 'mahabodhi-temple') {
      typedAliases.push({ value: 'Bodh Gaya', type: 'modern_alias' });
      typedAliases.push({ value: 'Bodhgaya', type: 'alternate_spelling' });
      typedAliases.push({ value: 'Bodh Gaya Temple', type: 'alternate_spelling' });
    }
    if (h.isUnesco) {
      typedAliases.push({ value: 'UNESCO World Heritage', type: 'cultural_reference' });
    }

    records.push(
      createRecord({
        id: h.id,
        type: 'heritage',
        typeLabel: 'Heritage Monument',
        hindiTypeLabel: 'ऐतिहासिक धरोहर',
        title: h.name,
        hindiTitle: h.hindiName,
        subtitle: `${h.location} • ${h.period} (${h.dynasty})`,
        description: h.significance || h.description,
        aliases: typedAliases.map(a => a.value),
        typedAliases,
        keywords: [h.category, h.dynasty, h.period, ...(h.keyFeatures || []), h.isUnesco ? 'UNESCO' : 'ASI'],
        image: h.image || VERIFIED_IMAGES.nalanda,
        sourceId: h.id,
        route: { tab: 'heritage', targetId: h.id, districtId: h.districtId },
        districtId: h.districtId,
        districtName: h.location.split(',')[0],
        connections
      })
    );
  }

  // 4. HISTORICAL EVENTS & ERAS (25 + 12)
  for (const ev of ALL_HISTORICAL_EVENTS) {
    const connections: DiscoveryConnection[] = [];
    if (ev.districtId) {
      connections.push({
        targetId: ev.districtId,
        targetType: 'district',
        relationship: 'historic_site',
        label: `${ev.location}`,
        districtId: ev.districtId
      });
    }

    const typedAliases: DiscoveryAlias[] = [];
    if (ev.approximateYear) {
      typedAliases.push({ value: ev.approximateYear, type: 'historical_association' });
    }
    if (ev.historicalRegion) {
      typedAliases.push({ value: ev.historicalRegion, type: 'regional_context' });
    }
    for (const actor of ev.keyActors || []) {
      typedAliases.push({ value: actor, type: 'historical_association' });
    }

    records.push(
      createRecord({
        id: ev.id,
        type: 'history',
        typeLabel: 'Historical Event',
        hindiTypeLabel: 'ऐतिहासिक घटना',
        title: ev.title,
        hindiTitle: ev.hindiTitle,
        subtitle: `${ev.dateLabel} • ${ev.location}`,
        description: ev.description,
        aliases: typedAliases.map(a => a.value),
        typedAliases,
        keywords: [ev.evidenceType, ev.historicalRegion, ...(ev.keyActors || []), 'History of Bihar'],
        image: VERIFIED_IMAGES.barabarCaves,
        sourceId: ev.id,
        route: { tab: 'history', targetId: ev.id, districtId: ev.districtId },
        districtId: ev.districtId,
        connections
      })
    );
  }

  for (const era of HISTORICAL_ERAS) {
    const typedAliases: DiscoveryAlias[] = [
      { value: era.period, type: 'historical_association' },
      { value: era.dateLabel, type: 'historical_association' }
    ];

    records.push(
      createRecord({
        id: era.id,
        type: 'history',
        typeLabel: 'Historical Era',
        hindiTypeLabel: 'ऐतिहासिक कालखंड',
        title: era.title,
        hindiTitle: era.hindiTitle,
        subtitle: `${era.period} (${era.dateLabel})`,
        description: era.summary,
        aliases: typedAliases.map(a => a.value),
        typedAliases,
        keywords: [...(era.keyThemes || []), ...(era.survivingLandmarks || []), ...(era.relatedRegions || [])],
        image: era.coverImage || VERIFIED_IMAGES.ashokanPillar,
        sourceId: era.id,
        route: { tab: 'history', targetId: era.id },
        connections: []
      })
    );
  }

  // 5. NOTABLE PERSONALITIES (25)
  for (const p of NOTABLE_PERSONALITIES) {
    const connections: DiscoveryConnection[] = [];
    if (p.districtOrigin) {
      const matchD = ALL_DISTRICTS.find(d => p.districtOrigin?.toLowerCase().includes(d.name.toLowerCase()));
      if (matchD) {
        connections.push({
          targetId: matchD.id,
          targetType: 'district',
          relationship: 'birthplace_or_origin',
          label: `${matchD.name} District`,
          districtId: matchD.id
        });
      }
    }

    if (p.languageAssociation?.language) {
      const lang = BIHAR_LANGUAGES.find(l => l.name.toLowerCase().includes(p.languageAssociation!.language.toLowerCase()));
      if (lang) {
        connections.push({
          targetId: lang.id,
          targetType: 'language',
          relationship: 'literary_tradition',
          label: `${lang.name} Language`,
          hindiLabel: lang.localName
        });
      }
    }

    const typedAliases: DiscoveryAlias[] = [];
    if (p.field) {
      typedAliases.push({ value: p.field, type: 'cultural_reference' });
    }
    if (p.eraPeriod) {
      typedAliases.push({ value: p.eraPeriod, type: 'historical_association' });
    }
    if (p.districtOrigin) {
      typedAliases.push({ value: p.districtOrigin, type: 'regional_context' });
    }

    records.push(
      createRecord({
        id: p.id,
        type: 'person',
        typeLabel: 'Historical Personality',
        hindiTypeLabel: 'विभूति व व्यक्तित्व',
        title: p.name,
        hindiTitle: p.hindiName,
        subtitle: `${p.title} • ${p.era || ''}`,
        description: p.shortContribution || p.biography.slice(0, 180) + '...',
        aliases: typedAliases.map(a => a.value),
        typedAliases,
        keywords: [p.field || '', p.eraPeriod || '', ...(p.majorAchievements || []), ...(p.keyWorks || [])],
        image: p.image || undefined,
        sourceId: p.id,
        route: { tab: 'personalities', targetId: p.id },
        connections
      })
    );
  }

  // 6. FESTIVALS (11)
  for (const fest of FESTIVALS_DATA) {
    const connections: DiscoveryConnection[] = [];

    // Linked traditional foods
    for (const spFood of (fest.specialFoods || []).slice(0, 2)) {
      const matchFood = CUISINE_ITEMS.find(c => c.name.toLowerCase().includes(spFood.toLowerCase()));
      if (matchFood) {
        connections.push({
          targetId: matchFood.id,
          targetType: 'food',
          relationship: 'festive_prasad',
          label: matchFood.name,
          hindiLabel: matchFood.hindiName
        });
      }
    }

    // Linked music tracks
    const linkedMusic = MUSIC_TRACKS.filter(m => m.festivalId === fest.id || m.title.toLowerCase().includes(fest.name.toLowerCase()));
    for (const m of linkedMusic.slice(0, 2)) {
      connections.push({
        targetId: m.id,
        targetType: 'music',
        relationship: 'festival_hymn',
        label: m.title,
        hindiLabel: m.hindiTitle
      });
    }

    // Associated districts
    for (const dId of (fest.associatedDistricts || []).slice(0, 3)) {
      const matchD = ALL_DISTRICTS.find(d => d.id === dId || d.name.toLowerCase() === dId.toLowerCase());
      if (matchD) {
        connections.push({
          targetId: matchD.id,
          targetType: 'district',
          relationship: 'associated_district',
          label: `${matchD.name} District`,
          districtId: matchD.id
        });
      }
    }

    const typedAliases: DiscoveryAlias[] = [];
    if (fest.monthDisplay) typedAliases.push({ value: fest.monthDisplay, type: 'cultural_reference' });
    if (fest.prominence) typedAliases.push({ value: fest.prominence, type: 'cultural_reference' });
    if (fest.traditionCategory) typedAliases.push({ value: fest.traditionCategory, type: 'cultural_reference' });

    records.push(
      createRecord({
        id: fest.id,
        type: 'festival',
        typeLabel: 'Festival & Observance',
        hindiTypeLabel: 'लोकपर्व एवं उत्सव',
        title: fest.name,
        hindiTitle: fest.hindiName,
        subtitle: `${fest.timing || fest.monthGregorian || ''} • ${fest.season || ''} Season`,
        description: fest.description || fest.overview || fest.culturalSignificance || '',
        aliases: typedAliases.map(a => a.value),
        typedAliases,
        keywords: [fest.category || '', ...(fest.rituals || []), ...(fest.specialFoods || []), 'Festival of Bihar'],
        image: fest.image || VERIFIED_IMAGES.chhathPuja,
        sourceId: fest.id,
        route: { tab: 'festivals', targetId: fest.id },
        connections
      })
    );
  }

  // 7. CUISINE (16) — AUDITED FOR FOOD & GI INTEGRITY
  for (const c of CUISINE_ITEMS) {
    const connections: DiscoveryConnection[] = [];

    // Origin District
    if (c.originDistrict) {
      const matchD = ALL_DISTRICTS.find(
        d => d.name.toLowerCase() === c.originDistrict?.toLowerCase() || d.id === c.originDistrict?.toLowerCase()
      );
      if (matchD) {
        connections.push({
          targetId: matchD.id,
          targetType: 'district',
          relationship: 'origin_district',
          label: `${matchD.name} District`,
          districtId: matchD.id
        });
      }
    }

    // Linked journeys featuring this dish
    const linkedJourneys = CURATED_JOURNEYS.filter(j =>
      j.culinaryTraditions.some(t => t.toLowerCase().includes(c.name.toLowerCase()))
    );
    if (linkedJourneys.length > 0) {
      connections.push({
        targetId: linkedJourneys[0].id,
        targetType: 'journey',
        relationship: 'featured_culinary_stop',
        label: linkedJourneys[0].title,
        hindiLabel: linkedJourneys[0].hindiTitle
      });
    }

    // STRICT GI INTEGRITY:
    // Only items with c.giTag === true (e.g. Silao Ka Khaja) display GI tag.
    // Gaya Tilkut has c.giTag === false (application under examination / not established as registered GI).
    // Mithila Makhana Kheer has c.giTag === false (dish itself is not GI, though prepared from GI-tagged raw makhana).
    const isGiCertified = c.giTag === true;
    const typedAliases: DiscoveryAlias[] = [];
    if (c.originDistrict) typedAliases.push({ value: c.originDistrict, type: 'regional_context' });
    if (c.region) typedAliases.push({ value: c.region, type: 'regional_context' });
    if (isGiCertified) typedAliases.push({ value: 'Geographical Indication (GI)', type: 'cultural_reference' });

    records.push(
      createRecord({
        id: c.id,
        type: 'food',
        typeLabel: 'Culinary Tradition',
        hindiTypeLabel: 'पारंपरिक व्यंजन',
        title: c.name,
        hindiTitle: c.hindiName,
        subtitle: `${c.originDistrict || c.region || ''} • ${c.category || ''}${isGiCertified ? ' (GI Tagged)' : ''}`,
        description: c.description || c.culturalContext || '',
        aliases: typedAliases.map(a => a.value),
        typedAliases,
        keywords: [c.category || '', ...(c.ingredients || []), c.region || '', 'Bihari Food', 'Cuisine'],
        image: c.image || VERIFIED_IMAGES.littiChokha,
        sourceId: c.id,
        route: { tab: 'cuisine', targetId: c.id },
        region: c.region,
        connections
      })
    );
  }

  // 8. LANGUAGES (8)
  for (const lang of BIHAR_LANGUAGES) {
    const connections: DiscoveryConnection[] = [];

    // Spoken in districts
    for (const dId of (lang.associatedDistricts || []).slice(0, 3)) {
      const matchD = ALL_DISTRICTS.find(d => d.id === dId || d.name.toLowerCase() === dId.toLowerCase());
      if (matchD) {
        connections.push({
          targetId: matchD.id,
          targetType: 'district',
          relationship: 'spoken_in',
          label: `${matchD.name} District`,
          districtId: matchD.id
        });
      }
    }

    // Music track connections
    for (const mId of (lang.musicTrackIds || []).slice(0, 2)) {
      const track = MUSIC_TRACKS.find(t => t.id === mId);
      if (track) {
        connections.push({
          targetId: track.id,
          targetType: 'music',
          relationship: 'language_soundscape',
          label: track.title,
          hindiLabel: track.hindiTitle
        });
      }
    }

    const typedAliases: DiscoveryAlias[] = [
      { value: lang.localName, type: 'alternate_spelling' },
      { value: lang.primaryScript, type: 'cultural_reference' }
    ];
    for (const scr of lang.traditionalScripts || []) {
      typedAliases.push({ value: scr, type: 'cultural_reference' });
    }

    records.push(
      createRecord({
        id: lang.id,
        type: 'language',
        typeLabel: 'Language & Literature',
        hindiTypeLabel: 'भाषा एवं साहित्य',
        title: lang.name,
        hindiTitle: lang.localName,
        subtitle: `${lang.classification} • Script: ${lang.primaryScript}`,
        description: lang.overview || lang.literaryTradition,
        aliases: typedAliases.map(a => a.value),
        typedAliases,
        keywords: [lang.classification, ...(lang.primaryRegions || []), ...(lang.associatedDistricts || []), 'Dialect', 'Mother Tongue'],
        image: undefined,
        sourceId: lang.id,
        route: { tab: 'languages', targetId: lang.id },
        connections
      })
    );
  }

  // 9. ARTS & CRAFTS (6)
  for (const art of ARTS_AND_CRAFTS) {
    const connections: DiscoveryConnection[] = [];
    if (art.districtId) {
      connections.push({
        targetId: art.districtId,
        targetType: 'district',
        relationship: 'origin_cluster',
        label: `${art.districtId} District`,
        districtId: art.districtId
      });
    }

    const linkedJourneys = CURATED_JOURNEYS.filter(j =>
      j.craftTraditions.some(c => c.toLowerCase().includes(art.name.toLowerCase()))
    );
    if (linkedJourneys.length > 0) {
      connections.push({
        targetId: linkedJourneys[0].id,
        targetType: 'journey',
        relationship: 'craft_trail',
        label: linkedJourneys[0].title,
        hindiLabel: linkedJourneys[0].hindiTitle
      });
    }

    const typedAliases: DiscoveryAlias[] = [
      { value: art.originRegion, type: 'regional_context' }
    ];
    if (art.id === 'madhubani-painting') {
      typedAliases.push({ value: 'Mithila Painting', type: 'alternate_spelling' });
      typedAliases.push({ value: 'Mithila Art', type: 'alternate_spelling' });
      typedAliases.push({ value: 'Madhubani Art', type: 'alternate_spelling' });
    }
    if (art.tagline) typedAliases.push({ value: art.tagline, type: 'cultural_reference' });
    if (art.giTag) typedAliases.push({ value: 'Geographical Indication (GI)', type: 'cultural_reference' });

    records.push(
      createRecord({
        id: art.id,
        type: 'art',
        typeLabel: 'Art & Craft',
        hindiTypeLabel: 'लोककला एवं शिल्प',
        title: art.name,
        hindiTitle: art.hindiName,
        subtitle: `${art.originRegion} • ${art.category}${art.giTag ? ' (GI Tagged)' : ''}`,
        description: art.description || art.culturalMeaning || art.tagline || '',
        aliases: typedAliases.map(a => a.value),
        typedAliases,
        keywords: [art.category, ...(art.materials || []), ...(art.masterArtisans || []), 'Folk Art', 'Handloom'],
        image: art.image || VERIFIED_IMAGES.madhubani,
        sourceId: art.id,
        route: { tab: 'arts', targetId: art.id, districtId: art.districtId },
        districtId: art.districtId,
        region: art.originRegion,
        connections
      })
    );
  }

  // 10. MUSIC (15)
  for (const m of MUSIC_TRACKS) {
    const connections: DiscoveryConnection[] = [];
    if (m.districtId) {
      connections.push({
        targetId: m.districtId,
        targetType: 'district',
        relationship: 'regional_tradition',
        label: `${m.districtName || m.districtId}`,
        districtId: m.districtId
      });
    }
    if (m.festivalId) {
      connections.push({
        targetId: m.festivalId,
        targetType: 'festival',
        relationship: 'sung_during_festival',
        label: m.tradition
      });
    }

    const typedAliases: DiscoveryAlias[] = [
      { value: m.performer, type: 'cultural_reference' },
      { value: m.tradition, type: 'cultural_reference' },
      { value: m.language, type: 'regional_context' },
      { value: m.regionDisplay, type: 'regional_context' }
    ];

    records.push(
      createRecord({
        id: m.id,
        type: 'music',
        typeLabel: 'Music & Song',
        hindiTypeLabel: 'संगीत एवं लोकगीत',
        title: m.title,
        hindiTitle: m.hindiTitle,
        subtitle: `${m.performer} • ${m.tradition} (${m.language})`,
        description: m.description || m.culturalContext,
        aliases: typedAliases.map(a => a.value),
        typedAliases,
        keywords: [m.category, m.language, m.regionDisplay, ...(m.instruments || []), 'Folk Song', 'Raga', 'Dhrupad'],
        image: m.coverImage || undefined,
        sourceId: m.id,
        route: { tab: 'music', targetId: m.id, districtId: m.districtId },
        districtId: m.districtId,
        districtName: m.districtName,
        region: m.regionDisplay,
        connections
      })
    );
  }

  // 11. CURATED JOURNEYS (10)
  for (const j of CURATED_JOURNEYS) {
    const connections: DiscoveryConnection[] = [];

    // Connect to districts on the route
    for (let i = 0; i < Math.min(j.districts.length, 4); i++) {
      connections.push({
        targetId: j.districts[i],
        targetType: 'district',
        relationship: 'circuit_district',
        label: `${j.districtNames[i]} District`,
        districtId: j.districts[i]
      });
    }

    const typedAliases: DiscoveryAlias[] = [
      { value: j.themeLabel, type: 'cultural_reference' }
    ];
    if (j.hindiTagline) typedAliases.push({ value: j.hindiTagline, type: 'cultural_reference' });

    records.push(
      createRecord({
        id: j.id,
        type: 'journey',
        typeLabel: 'Curated Journey',
        hindiTypeLabel: 'सांस्कृतिक यात्रा',
        title: j.title,
        hindiTitle: j.hindiTitle,
        subtitle: `${j.durationDays} Days / ${j.durationDays - 1} Nights • ${j.themeLabel}`,
        description: j.tagline || j.storyNarrative.slice(0, 180) + '...',
        aliases: typedAliases.map(a => a.value),
        typedAliases,
        keywords: [
          j.theme,
          j.themeLabel,
          ...j.districtNames,
          ...j.regions,
          ...j.culinaryTraditions,
          'Itinerary',
          'Route',
          'Circuit'
        ],
        image: j.heroImage || VERIFIED_IMAGES.mahabodhi,
        sourceId: j.id,
        route: { tab: 'circuits', targetId: j.id },
        connections
      })
    );
  }

  return records;
}

// Single pre-computed in-memory discovery index
export const DISCOVERY_INDEX: DiscoveryRecord[] = buildDiscoveryIndex();

// Typo detection dictionary (all primary titles and aliases >= 4 chars)
interface CandidateTerm {
  normalized: string;
  original: string;
}

const DICTIONARY_TERMS: CandidateTerm[] = (() => {
  const map = new Map<string, string>();
  for (const r of DISCOVERY_INDEX) {
    if (r.titleNorm && r.titleNorm.length >= 4) {
      map.set(r.titleNorm, r.title);
    }
    for (let i = 0; i < r.aliases.length; i++) {
      const aliasNorm = r.aliasesNorm[i];
      if (aliasNorm && aliasNorm.length >= 4 && !map.has(aliasNorm)) {
        map.set(aliasNorm, r.aliases[i]);
      }
    }
  }
  return Array.from(map.entries()).map(([normalized, original]) => ({ normalized, original }));
})();

export function findFuzzySuggestion(rawQuery: string): string | undefined {
  const norm = normalizeSearchText(rawQuery);
  if (norm.length < 4) return undefined;

  let bestCandidate: string | undefined = undefined;
  let minDistance = 3; // only accept distance 1 or 2

  for (const term of DICTIONARY_TERMS) {
    if (term.normalized === norm) return undefined; // exact match exists

    if (Math.abs(term.normalized.length - norm.length) <= 2) {
      const dist = levenshteinDistance(norm, term.normalized);
      if (dist < minDistance) {
        minDistance = dist;
        bestCandidate = term.original;
      }
    }

    if (!norm.includes(' ') && term.normalized.includes(' ')) {
      const words = term.normalized.split(' ');
      for (const w of words) {
        if (Math.abs(w.length - norm.length) <= 2) {
          const dist = levenshteinDistance(norm, w);
          if (dist < minDistance) {
            minDistance = dist;
            bestCandidate = term.original;
          }
        }
      }
    }
  }

  return bestCandidate;
}

// Deterministic tie-breaker weights (used ONLY to break ties when relevance scores are equal)
const DETERMINISTIC_TIE_BREAKER_WEIGHTS: Record<DiscoveryEntityType, number> = {
  district: 11,
  heritage: 10,
  place: 9,
  journey: 8,
  history: 7,
  festival: 6,
  food: 5,
  art: 4,
  person: 3,
  music: 2,
  language: 1
};

// -------------------------------------------------------------
// DETERMINISTIC SEARCH ENGINE WITH EXPLAINABLE SCORING
// -------------------------------------------------------------
export function searchDiscoveryIndex(
  rawQuery: string,
  filter: DiscoveryEntityType | 'all' = 'all',
  maxResults: number = 30
): SearchState {
  const normQuery = normalizeSearchText(rawQuery);

  if (!normQuery) {
    return {
      query: '',
      activeFilter: filter,
      results: [],
      totalMatches: 0
    };
  }

  const queryWords = normQuery.split(' ').filter(Boolean);
  const scoredResults: SearchResult[] = [];

  for (const record of DISCOVERY_INDEX) {
    if (filter !== 'all' && record.type !== filter) {
      continue;
    }

    let score = 0;
    let matchReason = '';

    // 1. Exact primary title match
    if (record.titleNorm === normQuery) {
      score = 1000;
      matchReason = 'Exact Title Match';
    } else if (record.hindiTitleNorm && record.hindiTitleNorm === normQuery) {
      score = 950;
      matchReason = 'Exact Hindi Title Match';
    } else {
      // 2. Exact match against typed aliases (distinguishing modern aliases from historical/administrative/regional signals)
      let matchedAlias: DiscoveryAlias | undefined;
      for (let i = 0; i < record.typedAliases.length; i++) {
        const aNorm = normalizeSearchText(record.typedAliases[i].value);
        if (aNorm === normQuery) {
          matchedAlias = record.typedAliases[i];
          break;
        }
      }

      if (matchedAlias) {
        if (matchedAlias.type === 'modern_alias' || matchedAlias.type === 'alternate_spelling') {
          score = 900;
          matchReason = `Verified Alternate Name: ${matchedAlias.value}`;
        } else if (matchedAlias.type === 'administrative_hq') {
          score = 750;
          matchReason = `District Headquarters: ${matchedAlias.value}`;
        } else if (matchedAlias.type === 'historical_association') {
          score = 720;
          matchReason = `Historical Association: ${matchedAlias.value}`;
        } else if (matchedAlias.type === 'regional_context') {
          score = 680;
          matchReason = `Regional Context: ${matchedAlias.value}`;
        } else {
          score = 660;
          matchReason = `Cultural Reference: ${matchedAlias.value}`;
        }
      }
    }

    // 3. Prefix and partial title matches if exact match did not trigger
    if (score === 0) {
      if (record.titleNorm.startsWith(normQuery)) {
        score = 800;
        matchReason = 'Title Starts With Search';
      } else if (record.hindiTitleNorm && record.hindiTitleNorm.startsWith(normQuery)) {
        score = 740;
        matchReason = 'Hindi Title Starts With Search';
      } else if (queryWords.length > 1 && queryWords.every(w => record.titleNorm.includes(w))) {
        score = 780;
        matchReason = 'All Query Words in Title';
      } else if (queryWords.length > 1 && record.hindiTitleNorm && queryWords.every(w => record.hindiTitleNorm.includes(w))) {
        score = 730;
        matchReason = 'All Query Words in Hindi Title';
      } else if (record.titleNorm.split(' ').includes(normQuery)) {
        score = 650;
        matchReason = 'Full Word Match in Title';
      } else if (record.titleNorm.includes(normQuery)) {
        score = 550;
        matchReason = 'Title Contains Search Term';
      } else if (record.hindiTitleNorm && record.hindiTitleNorm.includes(normQuery)) {
        score = 500;
        matchReason = 'Hindi Title Contains Search Term';
      } else if (record.aliasesNorm.some(a => a.includes(normQuery))) {
        score = 450;
        matchReason = 'Alternate Name Partial Match';
      } else if (record.keywordsNorm.some(k => k === normQuery)) {
        score = 400;
        matchReason = 'Topic Keyword Match';
      } else if (record.keywordsNorm.some(k => k.includes(normQuery))) {
        score = 300;
        matchReason = 'Keyword Substring Match';
      } else if (record.subtitleNorm.includes(normQuery)) {
        score = 200;
        matchReason = 'Location / Subtitle Match';
      } else if (record.descriptionNorm.includes(normQuery)) {
        score = 100;
        matchReason = 'Description Context Match';
      } else if (queryWords.length > 1) {
        let matchedWords = 0;
        for (const w of queryWords) {
          if (
            record.titleNorm.includes(w) ||
            record.hindiTitleNorm.includes(w) ||
            record.aliasesNorm.some(a => a.includes(w)) ||
            record.keywordsNorm.some(k => k.includes(w)) ||
            record.descriptionNorm.includes(w)
          ) {
            matchedWords++;
          }
        }
        if (matchedWords === queryWords.length) {
          score = 250;
          matchReason = 'All Words Matched in Context';
        } else if (matchedWords > 0) {
          score = matchedWords * 40;
          matchReason = 'Partial Word Matches in Context';
        }
      }
    }

    if (score > 0) {
      scoredResults.push({
        record,
        score,
        matchReason
      });
    }
  }

  // -------------------------------------------------------------
  // DETERMINISTIC RANKING:
  // Primary relevance
  //   ↓
  // exactness (score difference)
  //   ↓
  // concise title length
  //   ↓
  // deterministic tie-breaker (only when scores are equal!)
  //   ↓
  // alphabetical ID order
  // -------------------------------------------------------------
  scoredResults.sort((a, b) => {
    // 1. Primary relevance score descending
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    // 2. Title length ascending (more concise exact match preferred)
    if (a.record.title.length !== b.record.title.length) {
      return a.record.title.length - b.record.title.length;
    }
    // 3. Deterministic tie-breaker for identical relevance scores
    const tieA = DETERMINISTIC_TIE_BREAKER_WEIGHTS[a.record.type] || 0;
    const tieB = DETERMINISTIC_TIE_BREAKER_WEIGHTS[b.record.type] || 0;
    if (tieB !== tieA) {
      return tieB - tieA;
    }
    // 4. Stable alphabetical ID tie-breaker
    return a.record.id.localeCompare(b.record.id);
  });

  let didYouMean: string | undefined = undefined;
  if (scoredResults.length === 0) {
    didYouMean = findFuzzySuggestion(rawQuery);
  }

  return {
    query: rawQuery,
    activeFilter: filter,
    results: scoredResults.slice(0, maxResults),
    didYouMean,
    totalMatches: scoredResults.length
  };
}

// -------------------------------------------------------------
// VERIFIED SEARCH SUGGESTIONS & EDITORIAL THEMATIC PORTALS
// -------------------------------------------------------------
export const SEARCH_SUGGESTIONS = [
  { query: 'Nalanda', hindi: 'नालंदा', type: 'place', label: 'Nalanda' },
  { query: 'Madhubani', hindi: 'मधुबनी', type: 'district', label: 'Madhubani' },
  { query: 'Chhath', hindi: 'छठ पूजा', type: 'festival', label: 'Chhath' },
  { query: 'Mithila', hindi: 'मिथिला', type: 'art', label: 'Mithila' },
  { query: 'Bodh Gaya', hindi: 'बोधगया', type: 'heritage', label: 'Bodh Gaya' },
  { query: 'Sher Shah', hindi: 'शेरशाह सूरी', type: 'person', label: 'Sher Shah Suri' },
  { query: 'Silao Khaja', hindi: 'सिलाव खाजा', type: 'food', label: 'Silao Khaja' },
  { query: 'Maithili', hindi: 'मैथिली', type: 'language', label: 'Maithili' },
  { query: 'Litti Chokha', hindi: 'लिट्टी चोखा', type: 'food', label: 'Litti Chokha' },
  { query: 'Barabar Caves', hindi: 'बराबर गुफाएँ', type: 'heritage', label: 'Barabar Caves' }
];

export const THEMATIC_STARTING_POINTS = [
  {
    title: 'Walk through 3,000 years of history',
    hindiTitle: 'समय के पार — बिहार का 3000 वर्षों का इतिहास',
    tab: 'history',
    query: 'Mauryan',
    icon: 'Landmark',
    description: 'From pre-historic Chirand and Pataliputra to Nalanda and Champaran'
  },
  {
    title: 'Listen to the living soundscapes',
    hindiTitle: 'सुनिए बिहार को — लोकधुनों और शास्त्रीय रागों का संसार',
    tab: 'music',
    query: 'Dhrupad',
    icon: 'Music',
    description: 'Chhath devotional songs, Bidesiya ballads, and Darbhanga Dhrupad'
  },
  {
    title: 'Taste the traditional culinary heritage',
    hindiTitle: 'स्वाद बिहार का — लिट्टी चोखा से सिलाव खाजा तक',
    tab: 'cuisine',
    query: 'Khaja',
    icon: 'Utensils',
    description: 'Traditional Tilkut, GI-tagged Silao Khaja, Ahuna Mutton, and Makhana'
  },
  {
    title: 'Explore Bihar’s historical personalities',
    hindiTitle: 'बिहार की विभूतियाँ — आर्यभट से दिनकर तक',
    tab: 'personalities',
    query: 'Aryabhata',
    icon: 'Users',
    description: 'Philosophers, poets, mathematicians, freedom fighters, and scholars'
  },
  {
    title: "Explore Bihar's languages and literary traditions",
    hindiTitle: 'बिहार की भाषाएँ एवं साहित्यिक परंपरा — मैथिली, भोजपुरी, मगही',
    tab: 'languages',
    query: 'Maithili',
    icon: 'BookOpen',
    description: 'Historic scripts, literary texts, oral ballads, and regional dialects'
  },
  {
    title: 'Follow a story across districts',
    hindiTitle: 'बिहार की कथात्मक यात्राएँ — 10 विशेष परिपथ',
    tab: 'circuits',
    query: 'Awakening Trail',
    icon: 'Compass',
    description: 'The Awakening Trail, Fortress expeditions, and Living Art circuits'
  }
];

export function getRecordById(id: string): DiscoveryRecord | undefined {
  return DISCOVERY_INDEX.find(r => r.id === id);
}
