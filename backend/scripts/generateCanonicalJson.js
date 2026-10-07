import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Canonical Data Sources
import { ALL_DISTRICTS } from '../../src/data/districts/index.js';
import { DISTRICT_DIVISIONS } from '../../src/data/districtDossiers.js';
import { BIHAR_LANDSCAPE_PLACES, BIHAR_RIVERS } from '../../src/data/places.js';
import { HERITAGE_SITES } from '../../src/data/heritage.js';
import { NOTABLE_PERSONALITIES } from '../../src/data/personalities.js';
import { CUISINE_ITEMS } from '../../src/data/cuisine.js';
import { FESTIVALS_DATA } from '../../src/data/festivals.js';
import { ARTS_AND_CRAFTS } from '../../src/data/arts.js';
import { INTERFACE_LANGUAGES } from '../../src/data/interfaceLanguages.js';
import { BIHAR_LANGUAGES, SCRIPTS_OF_BIHAR } from '../../src/data/languages.js';
import { MUSIC_TRACKS } from '../../src/data/music.js';
import { HISTORICAL_ERAS, ALL_HISTORICAL_EVENTS } from '../../src/data/history.js';
import { CURATED_JOURNEYS } from '../../src/data/itineraries.js';
import { uiTranslations } from '../../src/data/translations.js';
import { VERIFIED_IMAGES } from '../../src/data/media.js';
import { DISCOVERY_INDEX } from '../../src/data/discovery.js';

async function generate() {
  console.log('Generating backend/src/db/canonicalData.json...');

  const normalizedDistricts = ALL_DISTRICTS.map((d) => ({
    id: d.id,
    name: d.name,
    hindiName: d.hindiName,
    slug: d.slug,
    region: d.region,
    division: DISTRICT_DIVISIONS[d.id] || `${d.region} Division`,
    headquarters: d.headquarters,
    areaSqKm: d.areaSqKm,
    populationApprox: d.populationApprox,
    literacyRate: d.literacyRate,
    sexRatio: d.sexRatio,
    censusYear: d.censusYear || 2011,
    latitude: d.coordinates.lat,
    longitude: d.coordinates.lng,
    svgGridX: d.svgGridLocation.x,
    svgGridY: d.svgGridLocation.y,
    heroImage: d.heroImage,
    identityStatement: d.identityStatement || null,
    overview: d.overview,
    whyItMatters: d.whyItMatters,
    history: d.history,
    geography: d.geography,
    culture: d.culture,
    economy: d.economy,
    languages: d.languages,
    famousFor: d.famousFor,
    importantPlaces: d.importantPlaces,
    food: d.food,
    festivals: d.festivals,
    artsAndCrafts: d.artsAndCrafts,
    notablePeople: d.notablePeople,
    agriculture: d.agriculture,
    travelTips: d.travelTips,
    sourceName: d.sourceAttribution.sourceName,
    sourceUrl: d.sourceAttribution.sourceUrl || null,
    verifiedYear: d.sourceAttribution.verifiedYear,
    officialReference: d.sourceAttribution.officialReference || null
  }));

  const normalizedPlaces = [
    ...BIHAR_LANDSCAPE_PLACES.map((p) => ({
      id: p.id,
      name: p.name,
      hindiName: p.hindiName,
      slug: p.id,
      category: p.category,
      placeType: 'landscape',
      districtId: p.districtId,
      region: p.districtName,
      latitude: p.coordinates.lat,
      longitude: p.coordinates.lng,
      image: p.image,
      summary: p.intro,
      history: p.historyNarrative || null,
      whyVisit: p.whyItMatters,
      thingsToSee: p.thingsToSee || [],
      bestTimeToVisit: 'October to March',
      howToReach: null,
      isHiddenGem: false,
      isFeatured: Boolean(p.isFeatured),
      source: (p.sources || []).join('; '),
      metadata: {
        tagline: p.tagline,
        landscapeType: p.landscapeType,
        wildlifeAndEcology: p.wildlifeAndEcology
      }
    })),
    ...BIHAR_RIVERS.map((r) => ({
      id: r.id,
      name: r.name,
      hindiName: r.hindiName,
      slug: r.id,
      category: 'Rivers & River Landscapes',
      placeType: 'river',
      districtId: r.primaryDistricts[0] || 'patna',
      region: 'Statewide',
      latitude: 25.6,
      longitude: 85.1,
      image: r.image,
      summary: `${r.name} originates in ${r.origin} and confluences with ${r.confluence}.`,
      history: r.historicalContext || null,
      whyVisit: r.culturalSignificance,
      thingsToSee: r.keyPlacesAlong || [],
      bestTimeToVisit: 'Year-round (Post-monsoon optimal)',
      howToReach: null,
      isHiddenGem: false,
      isFeatured: true,
      source: (r.sources || []).join('; '),
      metadata: {
        origin: r.origin,
        confluence: r.confluence,
        lengthInBiharKm: r.lengthInBiharKm,
        primaryDistricts: r.primaryDistricts,
        geographicRole: r.geographicRole
      }
    }))
  ];

  const normalizedHeritage = HERITAGE_SITES.map((h) => ({
    id: h.id,
    name: h.name,
    hindiName: h.hindiName,
    location: h.location,
    districtId: h.districtId,
    latitude: h.coordinates.lat,
    longitude: h.coordinates.lng,
    period: h.period,
    dynasty: h.dynasty,
    category: h.category,
    isUnesco: h.isUnesco,
    unescoRef: h.museumDoc?.unescoDetails?.refNumber || null,
    unescoYear: h.museumDoc?.unescoDetails?.inscriptionYear || null,
    image: h.image,
    description: h.description,
    architecture: h.architecture,
    significance: h.significance,
    keyFeatures: h.keyFeatures,
    timings: h.visitorInfo.timings,
    entryFee: h.visitorInfo.entryFee,
    bestTime: h.visitorInfo.bestTime,
    nearestHub: h.visitorInfo.nearestHub,
    museumDoc: h.museumDoc || null
  }));

  const normalizedPersonalities = NOTABLE_PERSONALITIES.map((p) => ({
    id: p.id,
    name: p.name,
    hindiName: p.hindiName,
    era: p.era || null,
    eraPeriod: p.eraPeriod || null,
    field: p.field || null,
    category: p.category || null,
    districtOrigin: p.districtOrigin || null,
    title: p.title,
    biography: p.biography,
    shortContribution: p.shortContribution || null,
    featuredStoryIntro: p.featuredStoryIntro || null,
    whyPlaceMatters: p.whyPlaceMatters || null,
    languageAssociation: p.languageAssociation || null,
    historicalConnection: p.historicalConnection || null,
    majorAchievements: p.majorAchievements || [],
    keyWorks: p.keyWorks || [],
    quotes: p.quotes || [],
    image: p.image,
    sources: p.sources || []
  }));

  const normalizedFoods = CUISINE_ITEMS.map((f) => ({
    id: f.id,
    name: f.name,
    hindiName: f.hindiName,
    region: f.region || null,
    originDistrictId: f.originDistrict || null,
    associatedDistricts: f.districts || (f.originDistrict ? [f.originDistrict] : []),
    category: f.category,
    isVegetarian: f.isVegetarian,
    giTag: f.giTag,
    image: f.image,
    description: f.description,
    ingredients: f.ingredients,
    preparationMethod: f.preparationMethod,
    culturalContext: f.culturalContext,
    whenEaten: f.whenEaten || null,
    season: f.season || null,
    festivalConnections: f.festivalConnections || [],
    isSignature: Boolean(f.isSignature),
    sources: f.sources || []
  }));

  const normalizedFestivals = FESTIVALS_DATA.map((fest) => ({
    id: fest.id,
    name: fest.name,
    hindiName: fest.hindiName,
    timing: fest.timing || null,
    monthGregorian: fest.monthGregorian || null,
    lunarTithi: fest.lunarTithi || null,
    category: fest.category || null,
    season: fest.season || null,
    traditionCategory: fest.traditionCategory || null,
    monthIndex: fest.monthIndex !== undefined ? fest.monthIndex : null,
    atmosphereQuote: fest.atmosphereQuote || null,
    regions: fest.regions || [],
    associatedDistricts: fest.associatedDistricts || [],
    prominence: fest.prominence || null,
    description: fest.description || fest.overview || '',
    rituals: fest.rituals || [],
    ritualSequence: fest.ritualSequence || null,
    specialFoods: fest.specialFoods || [],
    foodTraditions: fest.foodTraditions || null,
    musicTradition: fest.musicTradition || null,
    sacredPlaces: fest.sacredPlaces || null,
    originsHistory: fest.originsHistory || null,
    culturalSignificance: fest.culturalSignificance || null,
    image: fest.image,
    sources: fest.sourcesDetail || (fest.source ? { primary: fest.source } : null),
    multilingual: fest.multilingual || null
  }));

  const normalizedArts = ARTS_AND_CRAFTS.map((a) => ({
    id: a.id,
    name: a.name,
    hindiName: a.hindiName,
    tagline: a.tagline || null,
    originRegion: a.originRegion,
    districtId: a.districtId,
    associatedDistricts: a.associatedDistricts || [a.districtId],
    category: a.category,
    categoryType: a.categoryType || null,
    giTag: a.giTag,
    image: a.image,
    description: a.description,
    history: a.history,
    techniques: a.techniques,
    materials: a.materials,
    masterArtisans: a.masterArtisans || [],
    practitionersList: a.practitionersList || null,
    motifs: a.motifs || null,
    processSteps: a.processSteps || null,
    culturalMeaning: a.culturalMeaning || null,
    livingToday: a.livingToday || null,
    sources: a.sources || null,
    multilingual: a.multilingual || null
  }));

  const normalizedInterfaceLangs = INTERFACE_LANGUAGES.map((l) => ({
    id: l.id,
    code: l.code,
    name: l.name,
    nativeName: l.nativeName,
    script: l.script,
    isScheduledLanguage: l.isScheduledLanguage,
    translationAvailable: l.translationAvailable,
    fallbackLanguage: l.fallbackLanguage
  }));

  const normalizedBiharLangs = BIHAR_LANGUAGES.map((l) => ({
    id: l.id,
    name: l.name,
    localName: l.localName,
    category: l.category,
    classification: l.classification,
    scholarlyClassificationNote: l.scholarlyClassificationNote,
    officialStatus: l.officialStatus,
    primaryRegions: l.primaryRegions,
    associatedDistricts: l.associatedDistricts,
    traditionalScripts: l.traditionalScripts,
    primaryScript: l.primaryScript,
    overview: l.overview,
    literaryTradition: l.literaryTradition,
    oralTraditions: l.oralTraditions,
    notableFigures: l.notableFigures,
    festivalConnections: l.festivalConnections || null,
    musicTrackIds: l.musicTrackIds || [],
    samplePhrase: l.samplePhrase,
    sampleLiteraryPassage: l.sampleLiteraryPassage || null,
    censusNote: l.censusNote,
    sources: l.sources || []
  }));

  const normalizedScripts = SCRIPTS_OF_BIHAR.map((s) => ({
    id: s.id,
    name: s.name,
    hindiName: s.hindiName,
    nativeSample: s.nativeSample,
    nativeSampleTranslation: s.nativeSampleTranslation,
    languagesAssociated: s.languagesAssociated,
    historicalEra: s.historicalEra,
    statusToday: s.statusToday,
    description: s.description,
    culturalNote: s.culturalNote,
    unicodeRange: s.unicodeRange || null,
    visualGlyphs: s.visualGlyphs || null
  }));

  const normalizedMusic = MUSIC_TRACKS.map((m) => ({
    id: m.id,
    title: m.title,
    hindiTitle: m.hindiTitle,
    performer: m.performer,
    tradition: m.tradition,
    traditionType: m.traditionType,
    category: m.category,
    language: m.language,
    region: m.region,
    districtId: m.districtId || null,
    youtubeId: m.youtubeId,
    youtubeUrl: m.youtubeUrl,
    durationMinutes: m.durationMinutes,
    culturalContext: m.culturalContext,
    description: m.description,
    instruments: m.instruments,
    source: m.source,
    coverImage: m.coverImage || null
  }));

  const normalizedEras = HISTORICAL_ERAS.map((e) => ({
    id: e.id,
    title: e.title,
    hindiTitle: e.hindiTitle,
    period: e.period,
    startYearOrder: e.startYearOrder,
    dateLabel: e.dateLabel,
    summary: e.summary,
    hindiSummary: e.hindiSummary,
    historicalGeography: e.historicalGeography,
    keyThemes: e.keyThemes,
    survivingLandmarks: e.survivingLandmarks,
    relatedRegions: e.relatedRegions,
    sources: e.sources,
    coverImage: e.coverImage || null
  }));

  const normalizedEvents = ALL_HISTORICAL_EVENTS.map((ev) => ({
    id: ev.id,
    eraId: ev.eraId,
    title: ev.title,
    hindiTitle: ev.hindiTitle,
    dateLabel: ev.dateLabel,
    approximateYear: ev.approximateYear || null,
    location: ev.location,
    historicalRegion: ev.historicalRegion,
    districtId: ev.districtId || null,
    keyActors: ev.keyActors,
    description: ev.description,
    evidenceType: ev.evidenceType,
    survivingEvidence: ev.survivingEvidence,
    whatRemainsToday: ev.whatRemainsToday,
    sources: ev.sources,
    image: ev.image || null
  }));

  const normalizedJourneys = [];
  const normalizedStops = [];

  for (const j of CURATED_JOURNEYS) {
    normalizedJourneys.push({
      id: j.id,
      title: j.title,
      hindiTitle: j.hindiTitle,
      tagline: j.tagline,
      hindiTagline: j.hindiTagline,
      theme: j.theme,
      themeLabel: j.themeLabel,
      themeColor: j.themeColor,
      durationDays: j.durationDays,
      totalStops: j.totalStops,
      districts: j.districts,
      districtNames: j.districtNames,
      regions: j.regions,
      bestSeason: j.bestSeason,
      pace: j.pace,
      heroImage: j.heroImage,
      storyNarrative: j.storyNarrative,
      whyThisRoute: j.whyThisRoute,
      culinaryTraditions: j.culinaryTraditions || [],
      craftTraditions: j.craftTraditions || [],
      connectedEras: j.connectedEras || [],
      travelAdvisories: j.travelAdvisories || [],
      sources: j.sources || []
    });

    for (const s of j.stops) {
      normalizedStops.push({
        id: `${j.id}-stop-${s.stopNumber}`,
        journeyId: j.id,
        stopNumber: s.stopNumber,
        dayNumber: s.dayNumber,
        placeName: s.placeName,
        hindiPlaceName: s.hindiPlaceName || null,
        districtId: s.districtId,
        districtName: s.districtName,
        region: s.region,
        headline: s.headline,
        narrative: s.narrative,
        whatToExperience: s.whatToExperience,
        culinaryHighlight: s.culinaryHighlight || null,
        musicRecommendation: s.musicRecommendation || null,
        languageSpoken: s.languageSpoken,
        practicalTips: s.practicalTips,
        travelTransit: s.travelTransit,
        image: s.image || null
      });
    }
  }

  const rawTranslations = {};
  for (const langCode of ['en', 'hi']) {
    rawTranslations[langCode] = uiTranslations[langCode] || {};
  }

  const normalizedMedia = Object.entries(VERIFIED_IMAGES).map(([key, src]) => ({
    id: key,
    title: key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
    hindiTitle: null,
    location: null,
    districtId: null,
    src: String(src),
    caption: `Verified photographic image for ${key}`,
    category: 'verified_atlas_image',
    license: 'Atlas Educational License',
    isVerified: true
  }));

  const normalizedEntities = DISCOVERY_INDEX.map((ent) => ({
    id: ent.id,
    type: ent.type,
    typeLabel: ent.typeLabel,
    hindiTypeLabel: ent.hindiTypeLabel,
    title: ent.title,
    hindiTitle: ent.hindiTitle || null,
    subtitle: ent.subtitle,
    description: ent.description,
    districtId: ent.districtId || null,
    aliases: ent.aliases || [],
    typedAliases: ent.typedAliases || [],
    keywords: ent.keywords || [],
    searchWeight: 10,
    connections: ent.connections || []
  }));

  const canonicalPayload = {
    districts: normalizedDistricts,
    places: normalizedPlaces,
    heritage: normalizedHeritage,
    personalities: normalizedPersonalities,
    foods: normalizedFoods,
    festivals: normalizedFestivals,
    arts: normalizedArts,
    interfaceLanguages: normalizedInterfaceLangs,
    biharLanguages: normalizedBiharLangs,
    scripts: normalizedScripts,
    music: normalizedMusic,
    history: {
      eras: normalizedEras,
      events: normalizedEvents
    },
    journeys: {
      journeys: normalizedJourneys,
      stops: normalizedStops
    },
    translations: rawTranslations,
    media: normalizedMedia,
    discovery: {
      entities: normalizedEntities
    }
  };

  const targetPath = path.resolve(__dirname, '../src/db/canonicalData.json');
  fs.writeFileSync(targetPath, JSON.stringify(canonicalPayload, null, 2), 'utf-8');
  console.log(`✓ Wrote ${targetPath} (${(fs.statSync(targetPath).size / 1024).toFixed(1)} KB)`);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
