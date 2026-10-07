/**
 * BIHAR 360 — AI Guide UI Integration & Verification Test Suite (Step 21)
 */

import { askBiharGuide } from '../src/ai/service';
import { GroundingSource, SuggestedExploration } from '../src/ai/types';

console.log('====================================================');
console.log('BIHAR 360 — STEP 21 AI GUIDE UI VERIFICATION');
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

async function runUITests() {
  // 1. Service contract verification for UI
  console.log('--- 1. UI SERVICE CONTRACT VERIFICATION ---');
  const res1 = await askBiharGuide('Tell me about Nalanda.');
  check(typeof res1.answer === 'string' && res1.answer.length > 50, 'Grounded answer string provided');
  check(Array.isArray(res1.citations) && res1.citations.length > 0, 'Citations array provided for source cards');
  check(Array.isArray(res1.suggestedExplorations) && res1.suggestedExplorations.length > 0, 'Suggested explorations provided for actions');

  // 2. Source Card Contract & Destination Mapping
  console.log('\n--- 2. SOURCE CARD & NAVIGATION MAPPING ---');
  const supportedTabs = ['districts', 'places', 'heritage', 'history', 'cuisine', 'arts', 'festivals', 'personalities', 'circuits', 'music', 'languages'];
  for (const src of res1.citations.slice(0, 5)) {
    check(!!src.entityId && !!src.title && !!src.type, `Source card "${src.title}" has valid canonical ID and type (${src.type})`);
    check(supportedTabs.includes(src.tab), `Source card "${src.title}" maps to valid atlas tab: "${src.tab}"`);
  }

  // 3. Explore Actions Contract
  console.log('\n--- 3. EXPLORE ACTIONS VERIFICATION ---');
  for (const exp of res1.suggestedExplorations.slice(0, 5)) {
    check(!!exp.title && !!exp.tab && !!exp.category, `Explore action "${exp.title}" has valid title and tab ("${exp.tab}")`);
    check(supportedTabs.includes(exp.tab), `Explore action tab "${exp.tab}" is supported by BIHAR 360 navigation`);
  }

  // 4. Low Confidence / NO_GROUNDED_CONTEXT handling
  console.log('\n--- 4. NO GROUNDED CONTEXT SIMULATION ---');
  const resEmpty = await askBiharGuide('xyzqwe999randomquerythatdoesnotexist');
  check(resEmpty.citations.length === 0, 'Unrecognized query returns 0 citations');
  check(resEmpty.confidence === 'low' || resEmpty.answer.includes('could not locate a direct match'), 'Deterministic engine flags ungrounded query');

  // 5. Cross-Sectional Discovery Formatting
  console.log('\n--- 5. CROSS-SECTIONAL DISCOVERY OUTPUT ---');
  const resBodhGaya = await askBiharGuide('What can I explore around Bodh Gaya?');
  check(resBodhGaya.answer.includes('Cross-Sectional Connections across Bihar 360'), 'Cross-sectional connections section formatted');
  check(resBodhGaya.answer.includes('Festivals & Observances') || resBodhGaya.answer.includes('Heritage & Archaeology'), 'Contains cultural connections dimension');
  check(resBodhGaya.answer.includes('Curated Journey Circuits'), 'Contains circuit dimension');
  check(resBodhGaya.answer.includes('Mahabodhi Temple Complex'), 'Mentions Mahabodhi Temple Complex in explorations');

  // 6. Security & Secret boundary
  console.log('\n--- 6. SECURITY BOUNDARY FOR UI ---');
  check(typeof process.env.VITE_GEMINI_API_KEY === 'undefined', 'VITE_GEMINI_API_KEY is not defined in environment');
  
  if (failedTests > 0) {
    console.error(`\n❌ ${failedTests} tests failed!`);
    process.exit(1);
  } else {
    console.log('\n====================================================');
    console.log('ALL STEP 21 UI INTEGRATION TESTS PASSED!');
    console.log('====================================================');
  }
}

runUITests().catch(err => {
  console.error('\n❌ Test suite failed:', err);
  process.exit(1);
});
