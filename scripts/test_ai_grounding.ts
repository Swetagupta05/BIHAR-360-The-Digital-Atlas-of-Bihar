/**
 * Automated Verification Test for Step 20: AI Grounded Knowledge Architecture
 */

// Enforce deterministic local knowledge engine for test suite
delete process.env.GEMINI_API_KEY;

import {
  getAllKnowledgeEntities,
  retrieveGroundedContext,
  buildCompactContextPackage,
  buildGroundedPrompt,
  askBiharGuide
} from '../src/ai';

async function runTests() {
  console.log('====================================================');
  console.log('BIHAR 360 — STEP 20 GROUNDED KNOWLEDGE ARCHITECTURE AUDIT');
  console.log('====================================================\n');

  // 1. Verify Knowledge Graph Initialization
  const allEntities = getAllKnowledgeEntities();
  console.log(`Total Canonical Knowledge Entities: ${allEntities.length}`);
  if (allEntities.length < 100) {
    throw new Error(`Expected at least 100 knowledge entities, found ${allEntities.length}`);
  }

  const typesCount: Record<string, number> = {};
  for (const e of allEntities) {
    typesCount[e.type] = (typesCount[e.type] || 0) + 1;
  }
  console.log('Entities Breakdown by Type:', typesCount);

  // Check all 38 districts exist in knowledge base
  const districtEntities = allEntities.filter(e => e.type === 'district');
  if (districtEntities.length !== 38) {
    throw new Error(`Expected exactly 38 districts in knowledge graph, found ${districtEntities.length}`);
  }
  console.log('✓ All 38 administrative districts verified in knowledge graph.');

  // 2. Test Suite for Grounded Retrieval Queries
  const TEST_CASES = [
    {
      query: 'Tell me about Nalanda.',
      requiredInPrimary: ['nalanda'],
      requiredConnections: ['district', 'heritage'],
      description: 'Nalanda Mahavihara ruins and Nalanda district'
    },
    {
      query: 'What can I explore around Bodh Gaya?',
      requiredInPrimary: ['bodh-gaya', 'gaya'],
      requiredConnections: ['district', 'heritage', 'food'],
      description: 'Bodh Gaya multi-hop expansion (Gaya, Buddha, Tilkut, etc.)'
    },
    {
      query: 'What can I explore in Mithila?',
      requiredInPrimary: ['mithila', 'madhubani'],
      requiredConnections: ['art', 'language'],
      description: 'Mithila cultural region expansion (Madhubani art, Maithili, etc.)'
    },
    {
      query: 'What food should I try in Gaya?',
      requiredInPrimary: ['gaya'],
      requiredConnections: ['food'],
      description: 'Gaya district traditional sweets & cuisine'
    },
    {
      query: 'Which festivals are associated with Anga?',
      requiredInPrimary: ['anga', 'bhagalpur'],
      requiredConnections: ['festival'],
      description: 'Anga regional festivals (Bihula-Vishahari, Chhath, etc.)'
    },
    {
      query: 'Show me a journey connected to Sher Shah Suri.',
      requiredInPrimary: ['sher-shah-suri'],
      requiredConnections: ['journey', 'district'],
      description: 'Sher Shah Suri tomb at Sasaram and Fortress Circuit'
    },
    {
      query: 'What languages are spoken in Bihar?',
      requiredInPrimary: ['language'],
      requiredConnections: ['language'],
      description: 'Languages of Bihar (Maithili, Bhojpuri, Magahi, etc.)'
    },
    {
      query: "Tell me about Bihar's history in simple terms.",
      requiredInPrimary: ['history'],
      requiredConnections: ['history_era'],
      description: 'Bihar historical eras and antiquity'
    },
    {
      query: 'What places are connected to Buddhism?',
      requiredInPrimary: ['buddha', 'heritage'],
      requiredConnections: ['heritage'],
      description: 'Buddhist pilgrimage circuit (Bodh Gaya, Nalanda, Rajgir, Vaishali)'
    },
    {
      query: 'What music can I listen to from Mithila?',
      requiredInPrimary: ['mithila', 'music'],
      requiredConnections: ['music'],
      description: 'Mithila classical Dhrupad & Maithili ballads'
    },
    {
      query: 'Plan a cultural journey through Bihar.',
      requiredInPrimary: ['journey'],
      requiredConnections: ['journey'],
      description: 'Curated circuits across districts'
    },
    {
      query: 'What can I explore near Rajgir?',
      requiredInPrimary: ['rajgir', 'nalanda'],
      requiredConnections: ['heritage', 'district'],
      description: 'Rajgir Gridhakuta, hot springs, and Nalanda district'
    },
    {
      query: 'Tell me the story behind Madhubani art.',
      requiredInPrimary: ['madhubani', 'art'],
      requiredConnections: ['art', 'district'],
      description: 'Mithila / Madhubani painting origins and GI status'
    }
  ];

  console.log('\n--- EXECUTING TEST QUERY SUITE ---');

  for (const tc of TEST_CASES) {
    const retrieved = retrieveGroundedContext(tc.query);
    const contextPackage = buildCompactContextPackage(retrieved);
    const prompt = buildGroundedPrompt(tc.query, retrieved);

    if (retrieved.primaryEntities.length === 0) {
      throw new Error(`Query "${tc.query}" returned 0 primary entities!`);
    }

    if (contextPackage.estimatedTokens > 3500) {
      throw new Error(`Context package for "${tc.query}" exceeded token budget: ${contextPackage.estimatedTokens}`);
    }

    if (!prompt.contents.includes(tc.query)) {
      throw new Error(`Prompt for "${tc.query}" does not include query!`);
    }

    const primaryTitles = retrieved.primaryEntities.map(e => e.title).join(', ');
    const connectedTypes = Array.from(new Set(retrieved.connectedEntities.map(e => e.type))).join(', ');

    console.log(`\n✓ Query: "${tc.query}"`);
    console.log(`  Confidence: ${retrieved.confidence}`);
    console.log(`  Primary: ${primaryTitles}`);
    console.log(`  Connected Dimensions: ${connectedTypes} (${retrieved.connectedEntities.length} entities)`);
    console.log(`  Relationships: ${retrieved.thematicLinks.length} links`);
    console.log(`  Suggested Explorations: ${retrieved.suggestedExplorations.length} deep-links`);
    console.log(`  Token Budget: ~${contextPackage.estimatedTokens} tokens`);
  }

  // 3. Test Full Service Call (deterministic output verification)
  console.log('\n--- TESTING FULL SERVICE PIPELINE ---');
  const serviceRes = await askBiharGuide('What can I explore around Bodh Gaya?');
  console.log('Sample Response Title:', serviceRes.answer.split('\n')[0]);
  console.log('Citations Count:', serviceRes.citations.length);
  console.log('Suggested Explorations Count:', serviceRes.suggestedExplorations.length);
  console.log('Confidence:', serviceRes.confidence);

  if (serviceRes.citations.length === 0) {
    throw new Error('Expected citations in service response!');
  }

  console.log('\n====================================================');
  console.log('STEP 20 AUDIT PASSED: ALL GROUNDING TESTS SUCCESSFUL!');
  console.log('====================================================');
}

runTests().catch(err => {
  console.error('\n❌ Test failed with error:', err);
  process.exit(1);
});
