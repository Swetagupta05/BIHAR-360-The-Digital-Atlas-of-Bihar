/**
 * BIHAR 360 — Centralized Interface Language Registry
 * Supports English and the 22 Scheduled Languages of India.
 * Provides metadata for native script typography, translation status, and fallback cascades.
 */

export interface InterfaceLanguage {
  id: string;
  code: string;
  name: string;
  nativeName: string;
  script: string;
  isScheduledLanguage: boolean;
  translationAvailable: boolean;
  fallbackLanguage: 'en' | 'hi';
}

export const INTERFACE_LANGUAGES: InterfaceLanguage[] = [
  {
    id: 'en',
    code: 'en',
    name: 'English',
    nativeName: 'English',
    script: 'Latin',
    isScheduledLanguage: false,
    translationAvailable: true,
    fallbackLanguage: 'en'
  },
  {
    id: 'hi',
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    script: 'Devanagari',
    isScheduledLanguage: true,
    translationAvailable: true,
    fallbackLanguage: 'hi'
  },
  {
    id: 'as',
    code: 'as',
    name: 'Assamese',
    nativeName: 'অসমীয়া',
    script: 'Bengali-Assamese',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'bn',
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    script: 'Bengali',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'brx',
    code: 'brx',
    name: 'Bodo',
    nativeName: 'बोडो',
    script: 'Devanagari',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'doi',
    code: 'doi',
    name: 'Dogri',
    nativeName: 'डोगरी',
    script: 'Devanagari',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'gu',
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    script: 'Gujarati',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'kn',
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    script: 'Kannada',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'en'
  },
  {
    id: 'ks',
    code: 'ks',
    name: 'Kashmiri',
    nativeName: 'कश्मीरी',
    script: 'Perso-Arabic / Devanagari',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'gom',
    code: 'gom',
    name: 'Konkani',
    nativeName: 'कोंकणी',
    script: 'Devanagari',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'mai',
    code: 'mai',
    name: 'Maithili',
    nativeName: 'मैथिली',
    script: 'Devanagari / Tirhuta',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'ml',
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    script: 'Malayalam',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'en'
  },
  {
    id: 'mni',
    code: 'mni',
    name: 'Meitei / Manipuri',
    nativeName: 'মৈতৈলোন্',
    script: 'Meitei Mayek / Bengali',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'en'
  },
  {
    id: 'mr',
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    script: 'Devanagari',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'ne',
    code: 'ne',
    name: 'Nepali',
    nativeName: 'नेपाली',
    script: 'Devanagari',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'or',
    code: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    script: 'Odia',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'pa',
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    script: 'Gurmukhi',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'sa',
    code: 'sa',
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
    script: 'Devanagari',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'sat',
    code: 'sat',
    name: 'Santali',
    nativeName: 'संथाली',
    script: 'Ol Chiki / Devanagari',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'sd',
    code: 'sd',
    name: 'Sindhi',
    nativeName: 'سنڌي',
    script: 'Perso-Arabic / Devanagari',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  },
  {
    id: 'ta',
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    script: 'Tamil',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'en'
  },
  {
    id: 'te',
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    script: 'Telugu',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'en'
  },
  {
    id: 'ur',
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    script: 'Perso-Arabic',
    isScheduledLanguage: true,
    translationAvailable: false,
    fallbackLanguage: 'hi'
  }
];

/**
 * Resolves translation bundle for any selected language code.
 * If translation is available, returns it. Otherwise returns the designated fallback (hi or en).
 */
export function resolveTranslationLanguage(code: string): 'en' | 'hi' {
  const lang = INTERFACE_LANGUAGES.find((l) => l.code === code || l.id === code);
  if (!lang) return 'en';
  if (lang.translationAvailable && (lang.code === 'en' || lang.code === 'hi')) {
    return lang.code;
  }
  return lang.fallbackLanguage;
}

export function getInterfaceLanguage(code: string): InterfaceLanguage {
  const match = INTERFACE_LANGUAGES.find((l) => l.code === code || l.id === code);
  return match || INTERFACE_LANGUAGES[0];
}
