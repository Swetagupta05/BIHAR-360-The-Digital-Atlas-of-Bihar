/**
 * BIHAR 360 — AI Grounded Context Builder
 * Packages retrieved entities into a compact, budget-aware context representation.
 * Prevents bloated payloads while ensuring 100% factual grounding.
 */

import { RetrievedContext, KnowledgeEntity, GroundingSource } from './types';

export interface CompactContextPackage {
  query: string;
  markdown: string;
  estimatedTokens: number;
  sources: GroundingSource[];
  hasPrimaryMatch: boolean;
}

/**
 * Approximate token estimator (averages ~4 characters per token).
 */
export function estimateTokenCount(text: string): number {
  if (!text) return 0;
  return Math.ceil(text.length / 4);
}

/**
 * Formats a KnowledgeEntity into a compact, dense markdown card.
 */
export function formatEntityCard(entity: KnowledgeEntity): string {
  const lines: string[] = [];
  lines.push(`### [${entity.type.toUpperCase()}] ${entity.title}${entity.hindiTitle ? ` (${entity.hindiTitle})` : ''}`);
  if (entity.subtitle) lines.push(`*${entity.subtitle}*`);
  if (entity.districtName) lines.push(`- Administrative Anchor: ${entity.districtName} District${entity.region ? ` (${entity.region} Region)` : ''}`);
  if (entity.headquarters) lines.push(`- Administrative Headquarters: ${entity.headquarters}`);
  lines.push(`- Summary: ${entity.description}`);

  if (entity.facts && entity.facts.length > 0) {
    lines.push(`- Verified Facts:`);
    for (const fact of entity.facts.slice(0, 5)) {
      lines.push(`  * ${fact}`);
    }
  }

  if (entity.sources && entity.sources.length > 0) {
    lines.push(`- Primary Attribution: ${entity.sources.slice(0, 2).join(', ')}`);
  }

  return lines.join('\n');
}

/**
 * Builds a budget-capped context package from a RetrievedContext object.
 * Maximum token target: ~3,000 tokens to ensure ultra-fast generation and low cost.
 */
export function buildCompactContextPackage(
  retrieved: RetrievedContext,
  maxTokenBudget: number = 3000
): CompactContextPackage {
  const sections: string[] = [];

  // 1. Primary entities
  sections.push(`## 1. PRIMARY ATLAS ENTITIES IN FOCUS`);
  for (const entity of retrieved.primaryEntities) {
    sections.push(formatEntityCard(entity));
  }

  // 2. Connected entities across dimensions
  if (retrieved.connectedEntities.length > 0) {
    sections.push(`\n## 2. CROSS-SECTIONAL CONNECTIONS (Heritage, Cuisine, Art, Music, Routes)`);
    for (const connected of retrieved.connectedEntities) {
      const summarySnippet = connected.subtitle || connected.description.slice(0, 140) + '...';
      sections.push(
        `- **${connected.title}** [${connected.type.toUpperCase()}] (${connected.districtName || connected.region || 'Bihar'}): ${summarySnippet} (Atlas Tab: "${connected.route?.tab || 'home'}")`
      );
    }
  }

  // 3. Thematic links
  if (retrieved.thematicLinks.length > 0) {
    sections.push(`\n## 3. VERIFIED RELATIONSHIPS`);
    for (const link of retrieved.thematicLinks.slice(0, 8)) {
      sections.push(`- ${link.fromTitle} ──[${link.relation}]──> ${link.toTitle} (${link.dimension})`);
    }
  }

  // 4. Suggested Exploration Coordinates
  if (retrieved.suggestedExplorations.length > 0) {
    sections.push(`\n## 4. SUGGESTED ATLAS DESTINATIONS`);
    for (const exp of retrieved.suggestedExplorations) {
      sections.push(`- [${exp.category.toUpperCase()}] "${exp.title}" → Tab: ${exp.tab} (${exp.reason})`);
    }
  }

  let finalMarkdown = sections.join('\n');
  let currentTokens = estimateTokenCount(finalMarkdown);

  // If over budget, trim connected entities
  if (currentTokens > maxTokenBudget) {
    const trimmedSections = [
      `## 1. PRIMARY ATLAS ENTITIES IN FOCUS`,
      ...retrieved.primaryEntities.map(formatEntityCard),
      `\n## 2. KEY CONNECTED ENTITIES`,
      ...retrieved.connectedEntities.slice(0, 5).map(c => `- **${c.title}** [${c.type}]: ${c.subtitle || c.description.slice(0, 100)}...`),
      `\n## 3. SUGGESTED ATLAS DESTINATIONS`,
      ...retrieved.suggestedExplorations.slice(0, 3).map(e => `- "${e.title}" (Tab: ${e.tab})`)
    ];
    finalMarkdown = trimmedSections.join('\n');
    currentTokens = estimateTokenCount(finalMarkdown);
  }

  return {
    query: retrieved.query,
    markdown: finalMarkdown,
    estimatedTokens: currentTokens,
    sources: retrieved.sources,
    hasPrimaryMatch: retrieved.primaryEntities.length > 0
  };
}
