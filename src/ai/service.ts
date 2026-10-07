/**
 * BIHAR 360 — AI Bihar Guide Service
 * High-level orchestration uniting local retrieval, grounded prompts, and model generation.
 */

import { GoogleGenAI } from '@google/genai';
import { retrieveGroundedContext } from './retrieval';
import { buildGroundedPrompt } from './prompts';
import { buildCompactContextPackage } from './context';
import { AIMessage, AIResponse } from './types';

/**
 * Generates an authoritative deterministic grounded response directly from the
 * structured knowledge graph when offline or without external API keys.
 */
function buildDeterministicGroundedResponse(
  query: string,
  retrieved: ReturnType<typeof retrieveGroundedContext>
): string {
  const { primaryEntities, connectedEntities, suggestedExplorations } = retrieved;

  if (primaryEntities.length === 0) {
    return `Welcome to **BIHAR 360 — The Digital Atlas of Bihar**.

I could not locate a direct match for *"${query}"* in our verified atlas database. BIHAR 360 covers all **38 administrative districts**, ancient archaeological sites (such as Nalanda, Bodh Gaya, and Vaishali), culinary traditions (like Litti Chokha and Silao Khaja), living folk arts (Mithila painting, Manjusha art), and classical soundscapes.

Would you like to explore:
• Ancient Buddhist & Jain heritage (Bodh Gaya, Nalanda, Rajgir, Vaishali)
• The cultural heart of Mithila or Magadha
• Traditional GI-tagged culinary specialities
• Curated journeys across Bihar`;
  }

  const primary = primaryEntities[0];
  const parts: string[] = [];

  parts.push(`### ${primary.title}${primary.hindiTitle ? ` (${primary.hindiTitle})` : ''}`);
  if (primary.subtitle) {
    parts.push(`*${primary.subtitle}*\n`);
  }

  parts.push(primary.description);

  if (primary.facts && primary.facts.length > 0) {
    parts.push(`\n**Verified Atlas Highlights:**`);
    for (const f of primary.facts.slice(0, 4)) {
      parts.push(`• ${f}`);
    }
  }

  // Cross-sectional connections
  if (connectedEntities.length > 0) {
    parts.push(`\n**Cross-Sectional Connections across Bihar 360:**`);
    const byType: Record<string, string[]> = {};
    for (const c of connectedEntities) {
      if (!byType[c.type]) byType[c.type] = [];
      byType[c.type].push(`**${c.title}**${c.subtitle ? ` (${c.subtitle})` : ''}`);
    }

    if (byType.heritage?.length) parts.push(`• **Heritage & Archaeology:** ${byType.heritage.join('; ')}`);
    if (byType.food?.length) parts.push(`• **Culinary Traditions:** ${byType.food.join('; ')}`);
    if (byType.art?.length) parts.push(`• **Living Arts & Crafts:** ${byType.art.join('; ')}`);
    if (byType.music?.length) parts.push(`• **Soundscapes & Traditions:** ${byType.music.join('; ')}`);
    if (byType.festival?.length) parts.push(`• **Festivals & Observances:** ${byType.festival.join('; ')}`);
    if (byType.journey?.length) parts.push(`• **Curated Journey Circuits:** ${byType.journey.join('; ')}`);
  }

  if (suggestedExplorations.length > 0) {
    parts.push(`\n**Recommended Atlas Exploration:**`);
    for (const exp of suggestedExplorations.slice(0, 3)) {
      parts.push(`• *${exp.title}* → Explore in the **${exp.tab.toUpperCase()}** section (${exp.reason})`);
    }
  }

  return parts.join('\n');
}

/**
 * Ask the AI Bihar Guide a question.
 * Returns grounded answer, citations, and suggested interactive atlas destinations.
 */
export async function askBiharGuide(
  query: string,
  _history?: AIMessage[]
): Promise<AIResponse> {
  // 1. Deterministic Local Retrieval
  const retrieved = retrieveGroundedContext(query);
  const contextPackage = buildCompactContextPackage(retrieved);

  // 2. Check if server-side Gemini API key is available
  const apiKey =
    typeof process !== 'undefined' && process.env?.GEMINI_API_KEY
      ? process.env.GEMINI_API_KEY
      : undefined;

  let answer = '';

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });

      const promptData = buildGroundedPrompt(query, retrieved);

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: promptData.contents,
        config: {
          systemInstruction: promptData.systemInstruction,
          temperature: 0.2, // Low temperature for high factual adherence
          topP: 0.9
        }
      });

      if (response && response.text) {
        answer = response.text.trim();
      }
    } catch {
      // Graceful fallback to deterministic knowledge engine on network/auth failure
      answer = buildDeterministicGroundedResponse(query, retrieved);
    }
  }

  // If no API key or model generation returned empty, use deterministic grounded engine
  if (!answer) {
    answer = buildDeterministicGroundedResponse(query, retrieved);
  }

  return {
    answer,
    citations: contextPackage.sources,
    suggestedExplorations: retrieved.suggestedExplorations,
    confidence: retrieved.confidence,
    contextSummary: {
      primaryEntityCount: retrieved.primaryEntities.length,
      connectedEntityCount: retrieved.connectedEntities.length,
      query
    }
  };
}
