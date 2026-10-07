import {
  searchDiscoveryIndex,
  findFuzzySuggestion,
  DISCOVERY_INDEX
} from '../src/data/discovery';

console.log('====================================================');
console.log('BIHAR 360 DISCOVERY ENGINE: STEP 16.5 VALIDATION');
console.log('====================================================\n');

let failedTests = 0;

function check(condition: boolean, title: string, detail?: string) {
  if (condition) {
    console.log(`[PASS] ${title}`);
  } else {
    console.error(`[FAIL] ${title}${detail ? ` -> ${detail}` : ''}`);
    failedTests++;
  }
}

// ----------------------------------------------------
// 1. SPECIFIC SEARCHES (ENGLISH & HINDI)
// ----------------------------------------------------
console.log('--- 1. EXACT & INTENT SEARCH TESTS ---');

// Nalanda
const qNalanda = searchDiscoveryIndex('Nalanda');
check(qNalanda.results.length > 0 && qNalanda.results[0].record.id === 'nalanda', 'Query "Nalanda" -> Nalanda district at top');
check(qNalanda.results.some(r => r.record.id === 'nalanda-mahavihara'), 'Query "Nalanda" -> includes Nalanda Mahavihara');

// Madhubani
const qMadhubani = searchDiscoveryIndex('Madhubani');
check(qMadhubani.results.length > 0 && qMadhubani.results[0].record.id === 'madhubani', 'Query "Madhubani" -> Madhubani district at top');

// Mithila
const qMithila = searchDiscoveryIndex('Mithila');
check(qMithila.results.length > 0, 'Query "Mithila" -> returns results');
const madhubaniInMithila = qMithila.results.find(r => r.record.id === 'madhubani');
check(!!madhubaniInMithila && madhubaniInMithila.matchReason.startsWith('Regional Context'), 'Query "Mithila" -> Madhubani has Regional Context match reason');

// Chhath
const qChhath = searchDiscoveryIndex('Chhath');
check(qChhath.results.length > 0 && qChhath.results[0].record.id === 'chhath-puja', 'Query "Chhath" -> Chhath Puja at top');

// Maithili
const qMaithili = searchDiscoveryIndex('Maithili');
check(qMaithili.results.length > 0 && qMaithili.results[0].record.id === 'maithili', 'Query "Maithili" -> Maithili language at top');

// Sher Shah
const qSherShah = searchDiscoveryIndex('Sher Shah');
check(
  qSherShah.results.length > 0 &&
  (qSherShah.results[0].record.id === 'sher-shah-suri' || qSherShah.results[0].record.id === 'sher-shah-tomb'),
  'Query "Sher Shah" -> Sher Shah Suri / Tomb at top'
);

// Sasaram
const qSasaram = searchDiscoveryIndex('Sasaram');
check(qSasaram.results.length > 0, 'Query "Sasaram" -> returns results');
const rohtasInSasaram = qSasaram.results.find(r => r.record.id === 'rohtas');
check(!!rohtasInSasaram && rohtasInSasaram.matchReason === 'District Headquarters: Sasaram', 'Query "Sasaram" -> Rohtas with "District Headquarters: Sasaram"');

// Rohtas
const qRohtas = searchDiscoveryIndex('Rohtas');
check(qRohtas.results.length > 0 && qRohtas.results[0].record.id === 'rohtas', 'Query "Rohtas" -> Rohtas district at top');

// Motihari
const qMotihari = searchDiscoveryIndex('Motihari');
check(qMotihari.results.length > 0, 'Query "Motihari" -> returns results');
const eastChamparanInMotihari = qMotihari.results.find(r => r.record.id === 'east-champaran');
check(!!eastChamparanInMotihari && eastChamparanInMotihari.matchReason === 'District Headquarters: Motihari', 'Query "Motihari" -> East Champaran with "District Headquarters: Motihari"');

// Pataliputra
const qPataliputra = searchDiscoveryIndex('Pataliputra');
check(qPataliputra.results.length > 0, 'Query "Pataliputra" -> returns results');
const patnaInPataliputra = qPataliputra.results.find(r => r.record.id === 'patna');
check(!!patnaInPataliputra && patnaInPataliputra.matchReason === 'Historical Association: Pataliputra', 'Query "Pataliputra" -> Patna with "Historical Association: Pataliputra"');

// Bodh Gaya
const qBodhGaya = searchDiscoveryIndex('Bodh Gaya');
check(qBodhGaya.results.length > 0 && qBodhGaya.results[0].record.id === 'mahabodhi-temple', 'Query "Bodh Gaya" -> Mahabodhi Temple at top');

// Gaya Tilkut
const qGayaTilkut = searchDiscoveryIndex('Gaya Tilkut');
check(qGayaTilkut.results.length > 0 && qGayaTilkut.results[0].record.id === 'gaya-tilkut', 'Query "Gaya Tilkut" -> Gaya Tilkut cuisine at top');

// Hindi Searches
console.log('\n--- 2. DEVANAGARI HINDI TESTS ---');
const qHiNalanda = searchDiscoveryIndex('नालंदा');
check(qHiNalanda.results.length > 0 && qHiNalanda.results[0].record.id === 'nalanda', 'Hindi "नालंदा" -> Nalanda at top');

const qHiMadhubani = searchDiscoveryIndex('मधुबनी');
check(qHiMadhubani.results.length > 0 && qHiMadhubani.results[0].record.id === 'madhubani', 'Hindi "मधुबनी" -> Madhubani at top');

const qHiChhath = searchDiscoveryIndex('छठ');
check(qHiChhath.results.length > 0 && qHiChhath.results[0].record.id === 'chhath-puja', 'Hindi "छठ" -> Chhath Puja at top');

const qHiMaithili = searchDiscoveryIndex('मैथिली');
check(qHiMaithili.results.length > 0 && qHiMaithili.results[0].record.id === 'maithili', 'Hindi "मैथिली" -> Maithili at top');

const qHiPatna = searchDiscoveryIndex('पटना');
check(qHiPatna.results.length > 0 && qHiPatna.results[0].record.id === 'patna', 'Hindi "पटना" -> Patna at top');

const qHiGaya = searchDiscoveryIndex('गया');
check(qHiGaya.results.length > 0 && qHiGaya.results[0].record.id === 'gaya', 'Hindi "गया" -> Gaya at top');

// ----------------------------------------------------
// 3. FUZZY & TYPO MATCHING
// ----------------------------------------------------
console.log('\n--- 3. FUZZY / TYPO DETECTION TESTS ---');
const typoNalnda = findFuzzySuggestion('nalnda');
check(typoNalnda === 'Nalanda', `Typo "nalnda" -> suggested "${typoNalnda}" (Expected: "Nalanda")`);

const typoMadhbani = findFuzzySuggestion('madhbani');
check(typoMadhbani === 'Madhubani', `Typo "madhbani" -> suggested "${typoMadhbani}" (Expected: "Madhubani")`);

// ----------------------------------------------------
// 4. ZERO RESULTS TEST
// ----------------------------------------------------
console.log('\n--- 4. ZERO RESULT TEST ---');
const qUnknown = searchDiscoveryIndex('xyzabc123');
check(qUnknown.results.length === 0, 'Query "xyzabc123" -> exactly 0 results');
check(qUnknown.totalMatches === 0, 'Query "xyzabc123" -> totalMatches is 0');

// ----------------------------------------------------
// 5. FOOD / GI INTEGRITY TEST
// ----------------------------------------------------
console.log('\n--- 5. GI INTEGRITY VERIFICATION ---');
const tilkutRecord = DISCOVERY_INDEX.find(r => r.id === 'gaya-tilkut');
check(!!tilkutRecord, 'Gaya Tilkut record exists');
if (tilkutRecord) {
  const hasGiTagged = tilkutRecord.subtitle.toLowerCase().includes('gi tagged') || tilkutRecord.description.toLowerCase().includes('gi-tagged');
  const hasGiCertified = tilkutRecord.subtitle.toLowerCase().includes('gi certified') || tilkutRecord.description.toLowerCase().includes('gi-certified');
  const hasGiRegistered = tilkutRecord.subtitle.toLowerCase().includes('gi registered') || tilkutRecord.description.toLowerCase().includes('gi-registered');
  check(!hasGiTagged, 'Gaya Tilkut does NOT claim "GI Tagged"');
  check(!hasGiCertified, 'Gaya Tilkut does NOT claim "GI Certified"');
  check(!hasGiRegistered, 'Gaya Tilkut does NOT claim "GI Registered"');
}

// ----------------------------------------------------
// 6. TYPED RELATIONSHIPS TEST (NO IDENTITY CONFLATION)
// ----------------------------------------------------
console.log('\n--- 6. TYPED RELATIONSHIPS VERIFICATION ---');
const rohtasRec = DISCOVERY_INDEX.find(r => r.id === 'rohtas');
check(rohtasRec?.title === 'Rohtas', 'Rohtas title is "Rohtas"');
const rohtasHq = rohtasRec?.typedAliases.find(a => a.value === 'Sasaram');
check(rohtasHq?.type === 'administrative_hq', 'Rohtas -> Sasaram typed as administrative_hq');

const eastRec = DISCOVERY_INDEX.find(r => r.id === 'east-champaran');
check(eastRec?.title === 'East Champaran', 'East Champaran title is "East Champaran"');
const eastHq = eastRec?.typedAliases.find(a => a.value === 'Motihari');
check(eastHq?.type === 'administrative_hq', 'East Champaran -> Motihari typed as administrative_hq');

const westRec = DISCOVERY_INDEX.find(r => r.id === 'west-champaran');
check(westRec?.title === 'West Champaran', 'West Champaran title is "West Champaran"');
const westHq = westRec?.typedAliases.find(a => a.value === 'Bettiah');
check(westHq?.type === 'administrative_hq', 'West Champaran -> Bettiah typed as administrative_hq');

const nalandaRec = DISCOVERY_INDEX.find(r => r.id === 'nalanda');
const nalandaHeritageConn = nalandaRec?.connections.find(c => c.targetId === 'nalanda-mahavihara');
check(!!nalandaHeritageConn && nalandaHeritageConn.relationship === 'heritage_site', 'Nalanda District -> Nalanda Mahavihara connected via heritage_site relationship');

const madhubaniRec = DISCOVERY_INDEX.find(r => r.id === 'madhubani');
const madhubaniMithila = madhubaniRec?.typedAliases.find(a => a.value === 'Mithila');
check(madhubaniMithila?.type === 'regional_context', 'Madhubani -> Mithila typed as regional_context');

// ----------------------------------------------------
// 7. HISTORICAL ASSOCIATIONS (PATALIPUTRA != PATNA)
// ----------------------------------------------------
console.log('\n--- 7. HISTORICAL ASSOCIATIONS VERIFICATION ---');
const patnaRec = DISCOVERY_INDEX.find(r => r.id === 'patna');
check(patnaRec?.title === 'Patna', 'Patna title is "Patna"');
const pataliputraAlias = patnaRec?.typedAliases.find(a => a.value === 'Pataliputra');
check(pataliputraAlias?.type === 'historical_association', 'Pataliputra typed as historical_association (not modern alias)');

// ----------------------------------------------------
// 8. SEARCH CATEGORY COUNTS VERIFICATION
// ----------------------------------------------------
console.log('\n--- 8. CATEGORY MATCH COUNTS VERIFICATION ---');
const qCategoryNalanda = searchDiscoveryIndex('Nalanda', 'all', 200);
const districtMatches = qCategoryNalanda.results.filter(r => r.record.type === 'district').length;
const heritageMatches = qCategoryNalanda.results.filter(r => r.record.type === 'heritage').length;
const totalDistrictCount = DISCOVERY_INDEX.filter(r => r.type === 'district').length;
check(districtMatches === 1, `Query "Nalanda" district count is matching count (${districtMatches}), not total (${totalDistrictCount})`);
check(heritageMatches >= 1, `Query "Nalanda" heritage count is matching count (${heritageMatches})`);

// ----------------------------------------------------
// 9. RECENT SEARCH NORMALIZATION
// ----------------------------------------------------
console.log('\n--- 9. RECENT SEARCH DEDUPLICATION LOGIC ---');
function simulateSaveRecent(existing: string[], term: string): string[] {
  const trimmed = term.trim();
  if (!trimmed) return existing;
  return [trimmed, ...existing.filter(s => s.toLowerCase() !== trimmed.toLowerCase())].slice(0, 6);
}

let recents: string[] = [];
recents = simulateSaveRecent(recents, 'Nalanda');
recents = simulateSaveRecent(recents, 'nalanda');
recents = simulateSaveRecent(recents, 'NALANDA');
check(recents.length === 1 && recents[0] === 'NALANDA', `Case-insensitive recent searches deduped to 1 entry (result: [${recents}])`);

console.log('\n====================================================');
if (failedTests === 0) {
  console.log('ALL VERIFICATION TESTS COMPLETED WITH ZERO FAILURES!');
} else {
  console.error(`FAILED CHECKS: ${failedTests}`);
  process.exit(1);
}
console.log('====================================================');
