export type Region = 
  | 'Magadh' 
  | 'Mithila' 
  | 'Bhojpur' 
  | 'Anga' 
  | 'Saran' 
  | 'Tirhut' 
  | 'Kosi' 
  | 'Purnia';

export interface SourceAttribution {
  sourceName: string;
  sourceUrl?: string;
  verifiedYear: number;
  officialReference?: string;
}

export interface DistrictImage {
  id: string;
  districtId: string;
  url: string;
  altText: string;
  subject: string;
  location?: string;
  landmark?: string;
  category:
    | 'landmark'
    | 'nature'
    | 'culture'
    | 'food'
    | 'festival'
    | 'city'
    | 'architecture'
    | 'people'
    | 'agriculture'
    | 'editorial';
  sourceName: string;
  sourceUrl?: string;
  credit?: string;
  license?: string;
  verified: boolean;
  verificationSource?: string;
  isAiInterpretation?: boolean;
}

export interface District {
  id: string;
  name: string;
  hindiName: string;
  slug: string;
  region: Region;
  headquarters: string;
  areaSqKm: number;
  populationApprox: string;
  literacyRate: string;
  sexRatio: string;
  censusYear?: number;
  coordinates: { lat: number; lng: number };
  svgGridLocation: { x: number; y: number };
  heroImage: string;
  imageMetadata?: DistrictImage | null;
  identityStatement?: string;
  overview: string;
  whyItMatters: string;
  history: string;
  geography: string;
  culture: string;
  languages: string[];
  famousFor: string[];
  importantPlaces: Array<{
    name: string;
    description: string;
    tag: string;
    image?: string;
    verified?: boolean;
    verificationSource?: string;
  }>;
  food: Array<{
    name: string;
    description: string;
  }>;
  festivals: string[];
  artsAndCrafts: string[];
  notablePeople: string[];
  agriculture: string[];
  economy: string;
  travelTips: string[];
  sourceAttribution: SourceAttribution;
}

export interface RiverDetail {
  id: string;
  name: string;
  hindiName: string;
  origin: string;
  confluence: string;
  lengthInBiharKm?: number;
  primaryDistricts: string[];
  geographicRole: string;
  culturalSignificance: string;
  keyPlacesAlong: string[];
  notableSpecies?: string[];
  historicalContext?: string;
  image: string;
  sources: string[];
}

export type LandscapeCategory =
  | 'All'
  | 'Rivers & River Landscapes'
  | 'Wetlands & Lakes'
  | 'Forests & Wildlife'
  | 'Hills & Rock Landscapes'
  | 'Plains & Agricultural Landscapes'
  | 'Caves & Geological Sites'
  | 'Archaeological Landscapes'
  | 'Sacred Landscapes';

export interface LandscapePlace {
  id: string;
  name: string;
  hindiName: string;
  tagline: string;
  category: 'Rivers & River Landscapes' | 'Wetlands & Lakes' | 'Forests & Wildlife' | 'Hills & Rock Landscapes' | 'Plains & Agricultural Landscapes' | 'Caves & Geological Sites' | 'Archaeological Landscapes' | 'Sacred Landscapes';
  districtId: string;
  districtName: string;
  coordinates: { lat: number; lng: number };
  image: string;
  imageCaption?: string;
  intro: string;
  landscapeType: string;
  whyItMatters: string;
  historyNarrative?: string;
  cultureAndTraditions?: string;
  wildlifeAndEcology?: string;
  thingsToSee: string[];
  associatedPeopleIds?: string[];
  associatedHeritageId?: string;
  sacredTradition?: 'Buddhist' | 'Jain' | 'Hindu' | 'Sikh' | 'Sufi' | 'Multi-faith';
  conservationStatus?: string;
  sources: string[];
  isFeatured?: boolean;
  featuredRole?: 'lead' | 'supporting' | 'panoramic';
}

export interface Place {
  id: string;
  name: string;
  hindiName: string;
  slug: string;
  category: 'Heritage' | 'Spiritual' | 'Historical' | 'Nature' | 'Architecture' | 'Museums' | 'Hidden Gem';
  districtId: string;
  districtName: string;
  region: Region;
  coordinates: { lat: number; lng: number };
  image: string;
  summary: string;
  history: string;
  whyVisit: string;
  thingsToSee: string[];
  bestTimeToVisit: string;
  howToReach: string;
  isHiddenGem: boolean;
  source: string;
}

export interface HistoricalEvent {
  id: string;
  period: string;
  eraName: string;
  yearRange: string;
  title: string;
  description: string;
  keyFigures: string[];
  keyLocations: string[];
  significance: string;
  image: string;
  sources: string;
}

export interface LanguageInfo {
  name: string;
  nativeScript: string;
  region: string;
  speakersApprox: string;
  description: string;
  keyPhrases: Array<{
    phrase: string;
    translation: string;
    context: string;
  }>;
  literaryHeritage: string;
}

export interface ArtForm {
  id: string;
  name: string;
  hindiName: string;
  slug: string;
  originDistrict: string;
  region: Region;
  period: string;
  materials: string[];
  techniques: string[];
  motifs: string[];
  culturalMeaning: string;
  contemporaryPractice: string;
  image: string;
  giTagStatus?: string;
  source: string;
}

export type FestivalSeason = 'winter' | 'spring' | 'summer' | 'monsoon' | 'autumn';
export type FestivalTradition =
  | 'all'
  | 'chhath'
  | 'hindu'
  | 'sufi'
  | 'sikh'
  | 'buddhist'
  | 'regional'
  | 'harvest'
  | 'folk';

export interface FestivalRitualStep {
  phase: number;
  title: string;
  hindiTitle?: string;
  dayTag?: string;
  description: string;
  keyItems?: string[];
}

export interface FestivalFoodTradition {
  name: string;
  hindiName?: string;
  description: string;
  foodId?: string;
  prasadContext?: string;
}

export interface FestivalMusicTradition {
  title: string;
  genre: string;
  description: string;
  famousLines?: string;
  oralTradition?: string;
}

export interface FestivalSacredPlace {
  name: string;
  hindiName?: string;
  districtId: string;
  districtName: string;
  context: string;
}

export interface FestivalMultilingual {
  title?: { en?: string; hi?: string; bho?: string; mai?: string; mag?: string };
  tagline?: { en?: string; hi?: string; bho?: string; mai?: string; mag?: string };
  summary?: { en?: string; hi?: string; bho?: string; mai?: string; mag?: string };
}

export interface FestivalSources {
  primary: string;
  secondary?: string;
  institutionalAuthority?: string;
}

export interface Festival {
  id: string;
  name: string;
  hindiName: string;
  slug?: string;
  timing?: string;
  monthGregorian?: string;
  lunarTithi?: string;
  category?: string;
  season?: FestivalSeason;
  traditionCategory?: FestivalTradition;
  monthDisplay?: string;
  monthIndex?: number; // 0 to 11 for calendar placement
  atmosphereQuote?: string;
  regions?: string[];
  associatedDistricts?: string[];
  prominence?: string;
  description?: string;
  overview?: string;
  rituals: string[];
  ritualSequence?: FestivalRitualStep[];
  specialFoods?: string[];
  foodTraditions?: FestivalFoodTradition[];
  songsAndMusic?: string;
  musicTradition?: FestivalMusicTradition;
  sacredPlaces?: FestivalSacredPlace[];
  originsHistory?: string;
  culturalSignificance?: string;
  significance?: string;
  communityExperience?: string;
  image: string;
  source?: string;
  sourcesDetail?: FestivalSources;
  multilingual?: FestivalMultilingual;
}

export interface HeritageLookCloserItem {
  title: string;
  focus: string; // e.g. 'Stucco Reliefs', 'Acoustic Cavity', 'Mirror Polish', 'Octagonal Geometry'
  description: string;
}

export interface HeritageSiteDetail {
  whyItMatters: string;
  storyNarrative: string[];
  whatRemains: string;
  whyItMattersToday: string;
  lookCloser: HeritageLookCloserItem[];
  sources: {
    primary: string;
    secondary?: string;
    designation: string; // e.g., 'UNESCO World Heritage Site (Ref 1502)' or 'ASI Protected Monument of National Importance'
    surveyId?: string;
  };
  unescoDetails?: {
    refNumber: string;
    inscriptionYear: number;
    criteria: string;
  };
  timelineEra: 'Mauryan' | 'Classical' | 'Pala-Buddhist' | 'Medieval' | 'Modern';
  historicalPeriodYear: string;
  relatedSiteIds: string[];
}

export interface HeritageSite {
  id: string;
  name: string;
  hindiName: string;
  location: string;
  districtId: string;
  coordinates: { lat: number; lng: number };
  period: string;
  dynasty: string;
  category: string;
  isUnesco: boolean;
  image: string;
  description: string;
  architecture: string;
  significance: string;
  keyFeatures: string[];
  visitorInfo: {
    timings: string;
    entryFee: string;
    bestTime: string;
    nearestHub: string;
  };
  museumDoc?: HeritageSiteDetail;
}

export interface Dish {
  id: string;
  name: string;
  hindiName: string;
  originDistrict: string;
  category: string;
  isVegetarian: boolean;
  giTag: boolean;
  image: string;
  description: string;
  ingredients: string[];
  preparationMethod: string;
  culturalContext: string;
}

export interface ArtCraftProcessStep {
  step: number;
  phase: 'Material' | 'Preparation' | 'Tools' | 'Technique' | 'Crafting' | 'Finished Art';
  title: string;
  hindiTitle?: string;
  description: string;
  toolOrMaterial?: string;
}

export interface ArtCraftMotif {
  name: string;
  hindiName?: string;
  symbolism: string;
  visualContext?: string;
}

export interface ArtPractitioner {
  name: string;
  hindiName?: string;
  honor: string; // e.g. 'Padma Shri Awardee', 'National Award Winner'
  artFormId: string;
  region: string;
  districtId?: string;
  contribution: string;
  source: string;
}

export interface CraftMaterial {
  id: string;
  name: string;
  hindiName: string;
  category: 'Natural Fiber' | 'Mineral & Plant Pigment' | 'Traditional Tool' | 'Raw Textile & Cocoon' | 'Natural Resin & Foil';
  origin: string;
  usedInArts: string[];
  description: string;
  extractionProcess: string;
  sensoryTexture: string;
}

export interface ArtMultilingual {
  title?: { en?: string; hi?: string; bho?: string; mai?: string; mag?: string; an?: string };
  tagline?: { en?: string; hi?: string; bho?: string; mai?: string; mag?: string; an?: string };
  culturalQuote?: { en?: string; hi?: string; bho?: string; mai?: string; mag?: string; an?: string };
}

export interface ArtSources {
  primary: string;
  institutionalAuthority?: string;
  giRegistry?: string;
  academicReference?: string;
}

export interface ArtCraft {
  id: string;
  name: string;
  hindiName: string;
  tagline?: string;
  originRegion: string;
  districtId: string;
  associatedDistricts?: string[];
  category: string;
  categoryType?: 'painting' | 'textile' | 'fibre' | 'miniature';
  giTag: boolean;
  image: string;
  description: string;
  history: string;
  techniques: string;
  materials: string[];
  masterArtisans: string[];
  practitionersList?: ArtPractitioner[];
  fiveStyles?: Array<{ name: string; description: string; context?: string }>;
  motifs?: ArtCraftMotif[];
  processSteps?: ArtCraftProcessStep[];
  culturalMeaning?: string;
  livingToday?: string;
  contemporaryRevival?: string;
  communityTradition?: string;
  gallery?: string[];
  relatedFestivals?: string[];
  sources?: ArtSources;
  multilingual?: ArtMultilingual;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export interface FoodItem {
  id: string;
  name: string;
  hindiName: string;
  slug: string;
  category: 'Main Dish' | 'Sweet & Dessert' | 'Snack & Street Food' | 'Traditional Beverage' | 'Staple & Grain';
  region: string;
  originDistrict?: string;
  description: string;
  keyIngredients: string[];
  preparationNotes: string;
  culturalContext: string;
  whenCommonlyEaten: string;
  associatedFestivals?: string[];
  image: string;
  whereToTry: string;
  giTag?: boolean;
}

export interface Personality {
  id: string;
  name: string;
  hindiName: string;
  slug?: string;
  era?: string;
  eraPeriod?: 'Ancient Bihar' | 'Medieval Bihar' | 'Colonial / Freedom Movement' | 'Modern Bihar' | 'Contemporary Bihar';
  field?: string;
  category?: string;
  bornDistrict?: string;
  districtOrigin?: string;
  lifeSpan?: string;
  title: string;
  biography: string;
  shortContribution?: string;
  featuredStoryIntro?: string;
  isWomanVoice?: boolean;
  whyPlaceMatters?: string;
  languageAssociation?: {
    language: string;
    contribution: string;
    keyWorkOrTradition: string;
    region: string;
  };
  historicalConnection?: {
    event: string;
    period: string;
    significance: string;
  };
  majorContributions?: string[];
  majorAchievements?: string[];
  keyWorks?: string[];
  quotes?: string[];
  associatedPlaces?: string[];
  legacy?: string;
  image: string;
  sources?: string[];
  sourceAttribution?: string;
}

export interface NatureSpot {
  id: string;
  title: string;
  category: 'Tiger Reserve & National Park' | 'Bird Sanctuary & Wetland' | 'Rivers & Waterways' | 'Waterfalls & Springs' | 'Hills & Geological Formations';
  district: string;
  description: string;
  floraFauna: string[];
  bestTimeToVisit: string;
  ecoTourismHighlights: string[];
  image: string;
  source: string;
}

export interface ModernDevelopment {
  id: string;
  sector: 'Education & Research' | 'Infrastructure & Connectivity' | 'Startups & Technology' | 'Agriculture & GI Exports' | 'Renewable Energy' | 'Heritage Revival';
  title: string;
  milestoneYear: string;
  description: string;
  impact: string;
  location: string;
  image: string;
  source: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  category: 'Bhojpuri Folk' | 'Maithili Traditions' | 'Magahi Traditions' | 'Chhath & Festival Geet' | 'Classical & Shehnai' | 'Kajari & Biraha';
  description: string;
  youtubeVideoId: string;
  duration: string;
  language: string;
  districtAssociation: string;
  coverImage?: string;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  destinations: string[];
  activities: string[];
  accommodationRecommendation: string;
  mealsHighlight: string;
}

export interface Itinerary {
  id: string;
  title: string;
  durationDays: number;
  budgetLevel: 'Budget' | 'Moderate' | 'Heritage & Comfort';
  theme: string;
  summary: string;
  days: ItineraryDay[];
}

export interface BookmarkItem {
  id: string;
  type: 'district' | 'place' | 'food' | 'festival' | 'personality' | 'art' | 'music';
  title: string;
  subtitle: string;
  link: string;
  savedAt: number;
}
