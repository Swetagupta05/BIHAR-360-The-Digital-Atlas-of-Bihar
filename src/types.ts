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

export interface Festival {
  id: string;
  name: string;
  hindiName: string;
  slug?: string;
  timing?: string;
  monthGregorian?: string;
  lunarTithi?: string;
  category?: string;
  regions?: string[];
  associatedDistricts?: string[];
  prominence?: string;
  description?: string;
  overview?: string;
  rituals: string[];
  specialFoods?: string[];
  songsAndMusic?: string;
  culturalSignificance?: string;
  significance?: string;
  image: string;
  source?: string;
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

export interface ArtCraft {
  id: string;
  name: string;
  hindiName: string;
  originRegion: string;
  districtId: string;
  category: string;
  giTag: boolean;
  image: string;
  description: string;
  history: string;
  techniques: string;
  materials: string[];
  masterArtisans: string[];
  fiveStyles?: Array<{ name: string; description: string }>;
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
  eraPeriod?: string;
  field?: string;
  category?: string;
  bornDistrict?: string;
  districtOrigin?: string;
  lifeSpan?: string;
  title: string;
  biography: string;
  majorContributions?: string[];
  majorAchievements?: string[];
  keyWorks?: string[];
  quotes?: string[];
  associatedPlaces?: string[];
  legacy?: string;
  image: string;
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
