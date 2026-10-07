/**
 * Step 21 Verification: AI Guide UI Foundation
 * Verifies component presence, bundle isolation, and service integration.
 */

import fs from 'fs';
import path from 'path';

// Enforce deterministic local knowledge engine for test suite
delete process.env.GEMINI_API_KEY;

import { askBiharGuide } from '../src/ai/service';

async function runStep21Tests() {
  console.log('====================================================');
  console.log('BIHAR 360 — STEP 21 AI GUIDE UI VERIFICATION');
  console.log('====================================================');

  let passed = true;

  // 1. Verify UI Component Files Exist
  const requiredFiles = [
    'src/components/ai/BiharGuide.tsx',
    'src/components/ai/BiharGuideInput.tsx',
    'src/components/ai/BiharGuideMessage.tsx',
    'src/components/ai/BiharGuideSuggestions.tsx',
    'src/components/ai/BiharGuideSourceCard.tsx',
    'src/components/ai/BiharGuideEmptyState.tsx',
    'src/components/ai/index.ts'
  ];

  console.log('\n--- 1. VERIFYING COMPONENT ARCHITECTURE ---');
  for (const relPath of requiredFiles) {
    const fullPath = path.resolve(process.cwd(), relPath);
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);
      console.log(`✓ Found ${relPath} (${stats.size} bytes)`);
    } else {
      console.error(`✗ Missing required file: ${relPath}`);
      passed = false;
    }
  }

  // 2. Verify Production Build & Lazy Loading Isolation
  console.log('\n--- 2. VERIFYING BUNDLE ISOLATION & LAZY LOADING ---');
  const distAssetsDir = path.resolve(process.cwd(), 'dist/assets');
  if (!fs.existsSync(distAssetsDir)) {
    console.error('✗ dist/assets not found. Run npm run build first.');
    passed = false;
  } else {
    const files = fs.readdirSync(distAssetsDir);
    const guideChunks = files.filter(f => f.startsWith('BiharGuide') && f.endsWith('.js'));
    const indexChunks = files.filter(f => f.startsWith('index-') && f.endsWith('.js'));

    if (guideChunks.length > 0) {
      console.log(`✓ BiharGuide is a dedicated split chunk: ${guideChunks.join(', ')}`);
    } else {
      console.error('✗ BiharGuide dedicated chunk not found in dist/assets!');
      passed = false;
    }

    if (indexChunks.length > 0) {
      const indexContent = fs.readFileSync(path.join(distAssetsDir, indexChunks[0]), 'utf-8');
      if (indexContent.includes('Finding the threads in Bihar 360')) {
        console.error('✗ BiharGuide strings leaked into main index chunk!');
        passed = false;
      } else {
        console.log(`✓ Main index bundle (${indexChunks[0]}) is clean of AI Guide internal strings.`);
      }
    }
  }

  // 3. Test Service Pipeline for Guide UI
  console.log('\n--- 3. TESTING GUIDE SERVICE FOR UI CONSUMPTION ---');
  const testQueries = [
    'What should I explore in Mithila?',
    'Tell me the story of Nalanda.',
    'What food is Bihar known for?',
    'Which places are connected to Buddha?'
  ];

  for (const q of testQueries) {
    const res = await askBiharGuide(q);
    if (!res.answer || res.answer.length < 50) {
      console.error(`✗ Query returned empty answer: "${q}"`);
      passed = false;
    } else if (!res.citations || res.citations.length === 0) {
      console.error(`✗ Query returned no citations: "${q}"`);
      passed = false;
    } else {
      console.log(`✓ "${q}" -> Answer: ${res.answer.slice(0, 45)}... [Citations: ${res.citations.length}, Explorations: ${res.suggestedExplorations.length}]`);
    }
  }

  console.log('\n====================================================');
  if (passed) {
    console.log('STEP 21 VERIFICATION: ALL CHECKS PASSED');
    console.log('====================================================');
    process.exit(0);
  } else {
    console.error('STEP 21 VERIFICATION: FAILURES DETECTED');
    console.log('====================================================');
    process.exit(1);
  }
}

runStep21Tests().catch(err => {
  console.error('Test execution error:', err);
  process.exit(1);
});
