/**
 * Verification Test: Step 21.5 Homepage Hindi / i18n Localization Integrity
 * Validates deterministic translation dictionaries, component prop threading,
 * full homepage coverage, and zero translation leakage.
 */

import fs from 'fs';
import path from 'path';
import { uiTranslations, Language } from '../src/data/translations';

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, msg: string) {
  if (condition) {
    console.log(`  ✓ ${msg}`);
    passCount++;
  } else {
    console.error(`  ✗ FAIL: ${msg}`);
    failCount++;
  }
}

async function runI18nAudit() {
  console.log('\n=== BIHAR 360 — HOMEPAGE HINDI / i18n INTEGRITY AUDIT ===\n');

  // Test 1: uiTranslations Dictionary Completeness
  console.log('[1/4] Auditing Deterministic Translation Dictionaries');
  assert(Boolean(uiTranslations.en), 'uiTranslations.en is defined');
  assert(Boolean(uiTranslations.hi), 'uiTranslations.hi is defined');

  const sections: (keyof typeof uiTranslations.en)[] = [
    'nav', 'hero', 'glimpse', 'history', 'music', 'cuisine',
    'festivals', 'arts', 'people', 'places', 'districts',
    'closingCta', 'symbols', 'footer'
  ];

  for (const sec of sections) {
    assert(Boolean(uiTranslations.en[sec]), `Section en.${sec} is defined`);
    assert(Boolean(uiTranslations.hi[sec]), `Section hi.${sec} is defined`);
  }

  // Devanagari character verification for Hindi translation strings
  const devanagariRegex = /[\u0900-\u097F]/;
  assert(devanagariRegex.test(uiTranslations.hi.hero.eyebrow), 'Hero eyebrow in Hindi contains Devanagari script');
  assert(devanagariRegex.test(uiTranslations.hi.hero.description), 'Hero description in Hindi contains Devanagari script');
  assert(devanagariRegex.test(uiTranslations.hi.glimpse.title), 'Glimpse title in Hindi contains Devanagari script');
  assert(devanagariRegex.test(uiTranslations.hi.history.subtitle), 'History subtitle in Hindi contains Devanagari script');
  assert(devanagariRegex.test(uiTranslations.hi.cuisine.viewAllBtn), 'Cuisine view all button in Hindi contains Devanagari script');
  assert(devanagariRegex.test(uiTranslations.hi.festivals.chhathTitle), 'Festivals Chhath title in Hindi contains Devanagari script');
  assert(devanagariRegex.test(uiTranslations.hi.arts.mithilaTitle), 'Arts Mithila title in Hindi contains Devanagari script');
  assert(devanagariRegex.test(uiTranslations.hi.people.viewAllBtn), 'People view all button in Hindi contains Devanagari script');
  assert(devanagariRegex.test(uiTranslations.hi.places.viewAllBtn), 'Places view all button in Hindi contains Devanagari script');
  assert(devanagariRegex.test(uiTranslations.hi.districts.bannerBtn), 'Districts banner button in Hindi contains Devanagari script');
  assert(devanagariRegex.test(uiTranslations.hi.closingCta.startBtn), 'Closing CTA button in Hindi contains Devanagari script');
  assert(devanagariRegex.test(uiTranslations.hi.symbols.title), 'Symbols title in Hindi contains Devanagari script');
  assert(devanagariRegex.test(uiTranslations.hi.footer.referenceDesc), 'Footer reference description in Hindi contains Devanagari script');

  // Test 2: Component Prop Threading & Coverage
  console.log('\n[2/4] Verifying Homepage & Component Architecture');
  const homePagePath = fs.existsSync(path.join(process.cwd(), 'src/pages/HomePage.jsx'))
    ? path.join(process.cwd(), 'src/pages/HomePage.jsx')
    : path.join(process.cwd(), 'src/components/HomePage.tsx');
  const homePageSource = fs.readFileSync(homePagePath, 'utf-8');

  assert(homePageSource.includes('<HeroSection') && homePageSource.includes('language={language}'), 'HomePage passes language to HeroSection');
  assert(homePageSource.includes('<GlimpseSection') && homePageSource.includes('language={language}'), 'HomePage passes language to GlimpseSection');
  assert(homePageSource.includes('<HistoryTimelineSection') && homePageSource.includes('language={language}'), 'HomePage passes language to HistoryTimelineSection');
  assert(homePageSource.includes('<HearBiharSection') && homePageSource.includes('language={language}'), 'HomePage passes language to HearBiharSection');
  assert(homePageSource.includes('<TasteBiharSection') && homePageSource.includes('language={language}'), 'HomePage passes language to TasteBiharSection');
  assert(homePageSource.includes('<FestivalsSection') && homePageSource.includes('language={language}'), 'HomePage passes language to FestivalsSection');
  assert(homePageSource.includes('<LivingArtsSection') && homePageSource.includes('language={language}'), 'HomePage passes language to LivingArtsSection');
  assert(homePageSource.includes('<PeopleSection') && homePageSource.includes('language={language}'), 'HomePage passes language to PeopleSection');
  assert(homePageSource.includes('<PlacesSection') && homePageSource.includes('language={language}'), 'HomePage passes language to PlacesSection');
  assert(homePageSource.includes('<DistrictsPreviewSection') && homePageSource.includes('language={language}'), 'HomePage passes language to DistrictsPreviewSection');
  assert(homePageSource.includes('<ClosingCtaSection') && homePageSource.includes('language={language}'), 'HomePage passes language to ClosingCtaSection');

  // Test 3: Navbar and App Persistence
  console.log('\n[3/4] Verifying Navbar & LocalStorage Persistence');
  const navbarPath = fs.existsSync(path.join(process.cwd(), 'src/components/layout/Navbar/Navbar.jsx'))
    ? path.join(process.cwd(), 'src/components/layout/Navbar/Navbar.jsx')
    : path.join(process.cwd(), 'src/components/layout/Navbar.tsx');
  const navbarSource = fs.readFileSync(navbarPath, 'utf-8');
  const desktopNavSource = fs.existsSync(path.join(process.cwd(), 'src/components/layout/Navbar/DesktopNav.jsx'))
    ? fs.readFileSync(path.join(process.cwd(), 'src/components/layout/Navbar/DesktopNav.jsx'), 'utf-8')
    : navbarSource;
  assert(navbarSource.includes('uiTranslations[language].nav'), 'Navbar consumes uiTranslations[language].nav');
  assert(desktopNavSource.includes('{t.explore}'), 'Navbar renders localized explore button');
  assert(desktopNavSource.includes('{t.districts}'), 'Navbar renders localized districts button');
  assert(desktopNavSource.includes('{t.historyHeritage}') || desktopNavSource.includes('label={t.historyHeritage}'), 'Navbar renders localized history & heritage button');
  assert(desktopNavSource.includes('{t.cultureTraditions}') || desktopNavSource.includes('label={t.cultureTraditions}'), 'Navbar renders localized culture traditions button');
  assert(desktopNavSource.includes('{t.placesNature}') || desktopNavSource.includes('label={t.placesNature}'), 'Navbar renders localized places nature button');

  const appSource = fs.readFileSync(path.join(process.cwd(), 'src/App.tsx'), 'utf-8');
  assert(appSource.includes("localStorage.getItem('bihar360_language')"), 'App initializes language from localStorage');
  assert(appSource.includes("localStorage.setItem('bihar360_language', language)"), 'App persists language changes to localStorage');
  assert(appSource.includes('<SymbolsBanner language={language} />'), 'App passes language to SymbolsBanner');
  assert(appSource.includes('<Footer language={language} />'), 'App passes language to Footer');

  // Test 4: Verify Both English and Hindi Outputs Are Distinct (No Hardcoded Overwrite)
  console.log('\n[4/4] Verifying Locale Distinction');
  assert(uiTranslations.en.hero.exploreBtn !== uiTranslations.hi.hero.exploreBtn, 'Hero explore button is localized (EN != HI)');
  assert(uiTranslations.en.districts.exploreAllBtn !== uiTranslations.hi.districts.exploreAllBtn, 'Districts explore button is localized (EN != HI)');
  assert(uiTranslations.en.footer.divisionsTitle !== uiTranslations.hi.footer.divisionsTitle, 'Footer divisions title is localized (EN != HI)');
  assert(uiTranslations.en.nav.search !== uiTranslations.hi.nav.search, 'Navbar search text is localized (EN != HI)');

  console.log(`\nAudit Complete: ${passCount} Passed, ${failCount} Failed\n`);
  if (failCount > 0) {
    process.exit(1);
  }
}

runI18nAudit();
