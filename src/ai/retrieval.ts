/**
 * BIHAR 360 — AI Grounded Retrieval Engine
 * High-precision, deterministic local retrieval and multi-hop relationship expansion.
 * Maps user queries across the digital atlas knowledge graph without hallucinations.
 */

import {
  getAllKnowledgeEntities,
  getKnowledgeEntityById,
  entityToGroundingSource,
} from './knowledge';
import {
  KnowledgeEntity,
  KnowledgeEntityType,
  RetrievedContext,
  SuggestedExploration,
  ThematicLink,
  GroundingSource,
} from './types';

// Normalized string helper
export function normalizeQueryText(text: string): string {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .normalize('NFC')
    .toLowerCase()
    .replace(/[^\w\s\u0900-\u097F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Region to District Map
export const REGION_DISTRICT_MAP: Record<string, string[]> = {
  mithila: ['madhubani', 'darbhanga', 'sitamarhi', 'samastipur', 'sheohar', 'supaul', 'saharsa'],
  magadh: ['patna', 'nalanda', 'gaya', 'jehanabad', 'arwal', 'aurangabad', 'nawada'],
  bhojpur: ['bhojpur', 'buxar', 'rohtas', 'kaimur', 'saran', 'siwan', 'gopalganj'],
  anga: ['bhagalpur', 'banka', 'munger'],
  seemanchal: ['purnia', 'katihar', 'kishanganj', 'araria'],
  tirhut: ['muzaffarpur', 'vaishali', 'east-champaran', 'west-champaran', 'sitamarhi', 'sheohar'],
  kosi: ['saharsa', 'madhepura', 'supaul']
};

// Known Topic & Keyword Associations
const THEME_KEYWORD_MAP: Record<string, { categories: KnowledgeEntityType[]; keywords: string[] }> = {
  buddhism: {
    categories: ['heritage', 'person', 'journey', 'place'],
    keywords: ['buddha', 'buddhist', 'enlightenment', 'monastery', 'sangha', 'stupas', 'mahavihara', 'bodh gaya', 'rajgir', 'vaishali', 'kesaria', 'nalanda']
  },
  jainism: {
    categories: ['heritage', 'person', 'journey', 'place'],
    keywords: ['mahavira', 'tirthankara', 'pavapuri', 'kundalpur', 'jain', 'ahimsa']
  },
  food: {
    categories: ['food'],
    keywords: ['food', 'cuisine', 'dish', 'taste', 'eat', 'gi', 'recipe', 'sweets', 'snack', 'khaja', 'litti', 'tilkut', 'makhana', 'sattu']
  },
  cuisine: {
    categories: ['food'],
    keywords: ['food', 'cuisine', 'dish', 'delicacy', 'eat', 'meal', 'gastronomy', 'traditional food']
  },
  festival: {
    categories: ['festival'],
    keywords: ['festival', 'puja', 'mela', 'fair', 'celebration', 'ritual', 'chhath', 'sama chakeva', 'pitrupaksha']
  },
  art: {
    categories: ['art'],
    keywords: ['art', 'craft', 'painting', 'folk art', 'madhubani', 'manjusha', 'tikuli', 'sikki', 'sujani']
  },
  craft: {
    categories: ['art'],
    keywords: ['craft', 'handicraft', 'weaving', 'textile', 'grass', 'bamboo', 'stone craft']
  },
  music: {
    categories: ['music'],
    keywords: ['music', 'song', 'ragas', 'dhrupad', 'folk song', 'ballad', 'singer', 'listen', 'soundscape', 'thumri', 'bidesiya']
  },
  language: {
    categories: ['language'],
    keywords: ['language', 'dialect', 'script', 'mother tongue', 'speak', 'literature', 'maithili', 'bhojpuri', 'magahi', 'angika', 'bajjika']
  },
  history: {
    categories: ['history_era', 'history_event', 'person', 'heritage'],
    keywords: ['history', 'historical', 'ancient', 'empire', 'dynasty', 'mauryan', 'gupta', 'pala', 'ruler', 'battle', 'revolt', 'independence']
  },
  journey: {
    categories: ['journey'],
    keywords: ['journey', 'circuit', 'trail', 'itinerary', 'travel', 'plan', 'route', 'tour', 'visit', 'expedition']
  }
};

/**
 * Classifies query intent based on regional, administrative, and thematic signals.
 */
export function detectQueryIntent(normalizedQuery: string): {
  primaryTopic?: string;
  targetDistricts: string[];
  targetRegions: string[];
  targetEras: string[];
  thematicCategories: KnowledgeEntityType[];
} {
  const targetDistricts: string[] = [];
  const targetRegions: string[] = [];
  const targetEras: string[] = [];
  const thematicCategories = new Set<KnowledgeEntityType>();
  let primaryTopic: string | undefined;

  // 1. Check Regions
  for (const [region, districts] of Object.entries(REGION_DISTRICT_MAP)) {
    if (normalizedQuery.includes(region)) {
      targetRegions.push(region);
      for (const d of districts) {
        if (!targetDistricts.includes(d)) targetDistricts.push(d);
      }
    }
  }

  // 2. Check Districts directly
  const allEntities = getAllKnowledgeEntities();
  const districtEntities = allEntities.filter(e => e.type === 'district');
  for (const d of districtEntities) {
    const dNameNorm = normalizeQueryText(d.districtName || d.title);
    const hqNorm = d.headquarters ? normalizeQueryText(d.headquarters) : '';
    if (
      normalizedQuery.includes(d.id) ||
      (dNameNorm && normalizedQuery.includes(dNameNorm)) ||
      (hqNorm && normalizedQuery.includes(hqNorm))
    ) {
      if (!targetDistricts.includes(d.id)) {
        targetDistricts.push(d.id);
      }
    }
  }

  // 3. Check Thematic categories
  for (const [themeKey, themeData] of Object.entries(THEME_KEYWORD_MAP)) {
    if (normalizedQuery.includes(themeKey) || themeData.keywords.some(k => normalizedQuery.includes(k))) {
      for (const cat of themeData.categories) {
        thematicCategories.add(cat);
      }
      if (!primaryTopic) primaryTopic = themeKey;
    }
  }

  // 4. Check Era signals
  if (normalizedQuery.includes('ancient') || normalizedQuery.includes('mauryan') || normalizedQuery.includes('magadha')) {
    targetEras.push('ancient-bihar');
  }
  if (normalizedQuery.includes('medieval') || normalizedQuery.includes('sher shah') || normalizedQuery.includes('sultanate')) {
    targetEras.push('medieval-bihar');
  }
  if (normalizedQuery.includes('modern') || normalizedQuery.includes('freedom') || normalizedQuery.includes('independence')) {
    targetEras.push('modern-bihar');
  }

  return {
    primaryTopic,
    targetDistricts,
    targetRegions,
    targetEras,
    thematicCategories: Array.from(thematicCategories)
  };
}

/**
 * Calculates deterministic match score between an entity and the user query.
 */
function calculateEntityScore(
  entity: KnowledgeEntity,
  normQuery: string,
  queryTokens: string[],
  intents: ReturnType<typeof detectQueryIntent>
): number {
  let score = 0;
  const idNorm = normalizeQueryText(entity.id);
  const titleNorm = normalizeQueryText(entity.title);
  const hindiNorm = entity.hindiTitle ? normalizeQueryText(entity.hindiTitle) : '';
  const descNorm = normalizeQueryText(entity.description);

  // Exact ID or full title match
  if (normQuery === idNorm || normQuery === titleNorm) {
    return 1000;
  }

  // Exact title phrase contains
  if (normQuery.includes(titleNorm) && titleNorm.length > 3) {
    score += 400;
  }
  if (titleNorm.includes(normQuery) && normQuery.length > 3) {
    score += 350;
  }
  if (hindiNorm && normQuery.includes(hindiNorm)) {
    score += 400;
  }

  // Alias matches
  for (const alias of entity.aliases) {
    const aliasNorm = normalizeQueryText(alias);
    if (!aliasNorm) continue;
    if (normQuery === aliasNorm) {
      score += 450;
    } else if (normQuery.includes(aliasNorm) && aliasNorm.length > 3) {
      score += 300;
    } else if (aliasNorm.includes(normQuery) && normQuery.length > 3) {
      score += 250;
    }
  }

  // Token matches on title & tags
  for (const token of queryTokens) {
    if (token.length < 3) continue;
    if (titleNorm.includes(token)) score += 60;
    if (entity.tags.some(t => normalizeQueryText(t).includes(token))) score += 40;
    if (descNorm.includes(token)) score += 15;
  }

  // Intent alignments
  if (intents.thematicCategories.includes(entity.type)) {
    score += 80;
  }
  if (entity.districtId && intents.targetDistricts.includes(entity.districtId)) {
    score += 100;
  }
  if (entity.region && intents.targetRegions.some(r => entity.region?.toLowerCase().includes(r))) {
    score += 80;
  }

  return score;
}

/**
 * Retrieves the grounded context for any Bihar 360 query.
 * Expands relationships across districts, heritage, cuisine, arts, music, festivals, and routes.
 */
export function retrieveGroundedContext(rawQuery: string): RetrievedContext {
  const normalizedQuery = normalizeQueryText(rawQuery);
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const intents = detectQueryIntent(normalizedQuery);
  const allEntities = getAllKnowledgeEntities();

  // 1. Score all entities
  const scoredList = allEntities.map(entity => ({
    entity,
    score: calculateEntityScore(entity, normalizedQuery, queryTokens, intents)
  }));

  scoredList.sort((a, b) => b.score - a.score);

  // Top direct matches (score >= 50 or top 4 if scores are modest)
  const directMatches = scoredList
    .filter(item => item.score >= 50)
    .slice(0, 6)
    .map(item => item.entity);

  // If no high-score match, take the top 2 non-zero matches or default to atlas anchors
  const primaryEntities: KnowledgeEntity[] = directMatches.length > 0
    ? directMatches
    : scoredList.filter(item => item.score > 10).slice(0, 3).map(item => item.entity);

  // 2. Relationship Expansion (1-hop connected entities)
  const connectedEntitiesMap = new Map<string, KnowledgeEntity>();
  const thematicLinks: ThematicLink[] = [];
  const primaryIds = new Set(primaryEntities.map(e => e.id));

  // Determine districts in focus
  const focusDistrictIds = new Set<string>();
  for (const pe of primaryEntities) {
    if (pe.type === 'district') focusDistrictIds.add(pe.id);
    if (pe.districtId) focusDistrictIds.add(pe.districtId);
  }
  for (const d of intents.targetDistricts) {
    focusDistrictIds.add(d);
  }

  // A. Traverse explicit relationships of primary entities
  for (const pe of primaryEntities) {
    for (const rel of pe.relationships) {
      if (primaryIds.has(rel.targetId) || connectedEntitiesMap.has(rel.targetId)) continue;
      const targetEntity = getKnowledgeEntityById(rel.targetId);
      if (targetEntity) {
        connectedEntitiesMap.set(targetEntity.id, targetEntity);
        thematicLinks.push({
          fromId: pe.id,
          fromTitle: pe.title,
          toId: targetEntity.id,
          toTitle: targetEntity.title,
          relation: rel.description || rel.label,
          dimension: targetEntity.type
        });
      }
    }
  }

  // B. Cross-section expansion for districts in focus
  // Pull representative Food, Heritage, Arts, Music, Festivals for the focused district
  for (const dId of focusDistrictIds) {
    const districtEntity = getKnowledgeEntityById(dId);
    if (districtEntity && !primaryIds.has(districtEntity.id) && !connectedEntitiesMap.has(districtEntity.id)) {
      connectedEntitiesMap.set(districtEntity.id, districtEntity);
    }

    const districtPeers = allEntities.filter(
      e => (e.districtId === dId || e.relationships.some(r => r.districtId === dId)) &&
           !primaryIds.has(e.id) &&
           !connectedEntitiesMap.has(e.id)
    );

    // Balance across types: add up to 2 food, 2 heritage, 1 art, 1 festival, 1 music
    const typeBudgets: Record<string, number> = {
      food: 2,
      heritage: 2,
      place: 1,
      art: 1,
      festival: 1,
      music: 1,
      journey: 1
    };

    for (const peer of districtPeers) {
      const budget = typeBudgets[peer.type] ?? 0;
      if (budget > 0) {
        connectedEntitiesMap.set(peer.id, peer);
        typeBudgets[peer.type] = budget - 1;
        thematicLinks.push({
          fromId: dId,
          fromTitle: districtEntity?.title || dId,
          toId: peer.id,
          toTitle: peer.title,
          relation: `${peer.title} is anchored in ${districtEntity?.title || dId}`,
          dimension: peer.type
        });
      }
    }
  }

  // C. Region-wide expansion if region query
  for (const region of intents.targetRegions) {
    const regionPeers = allEntities.filter(
      e => e.region?.toLowerCase().includes(region) &&
           !primaryIds.has(e.id) &&
           !connectedEntitiesMap.has(e.id)
    );

    // Pick top representation across dimensions for the region
    for (const peer of regionPeers.slice(0, 6)) {
      connectedEntitiesMap.set(peer.id, peer);
    }
  }

  // D. Thematic expansion if specific theme requested (e.g. "buddhism", "food", "languages")
  if (intents.thematicCategories.length > 0) {
    for (const cat of intents.thematicCategories) {
      const catEntities = allEntities.filter(
        e => e.type === cat && !primaryIds.has(e.id) && !connectedEntitiesMap.has(e.id)
      );

      // Score category entities against query keywords
      const sortedCat = catEntities.map(e => ({
        e,
        score: calculateEntityScore(e, normalizedQuery, queryTokens, intents)
      })).sort((a, b) => b.score - a.score);

      for (const item of sortedCat.slice(0, 4)) {
        connectedEntitiesMap.set(item.e.id, item.e);
      }
    }
  }

  // Final connected list (capped to prevent context bloat while keeping high coverage)
  const connectedEntities = Array.from(connectedEntitiesMap.values()).slice(0, 14);

  // 3. Suggested Explorations (with deep links to atlas tabs)
  const suggestedExplorations: SuggestedExploration[] = [];
  const addedTabs = new Set<string>();

  for (const ent of [...primaryEntities, ...connectedEntities]) {
    if (!ent.route) continue;
    const tabKey = `${ent.route.tab}:${ent.id}`;
    if (addedTabs.has(tabKey)) continue;

    let reason = `Explore ${ent.title} in the ${ent.route.tab.toUpperCase()} section`;
    if (ent.type === 'food') reason = `Discover authentic regional culinary tradition: ${ent.title}`;
    else if (ent.type === 'heritage') reason = `View archaeological & architectural details of ${ent.title}`;
    else if (ent.type === 'journey') reason = `Follow the curated itinerary: ${ent.title}`;
    else if (ent.type === 'district') reason = `Explore complete district dossier and landscape of ${ent.title}`;
    else if (ent.type === 'music') reason = `Listen to traditional soundscape: ${ent.title}`;

    suggestedExplorations.push({
      title: ent.title,
      hindiTitle: ent.hindiTitle,
      tab: ent.route.tab,
      targetId: ent.route.targetId,
      districtId: ent.districtId,
      category: ent.type,
      reason
    });
    addedTabs.add(tabKey);
    if (suggestedExplorations.length >= 5) break;
  }

  // 4. Grounding Sources & Citations
  const sources: GroundingSource[] = [
    ...primaryEntities.map(entityToGroundingSource),
    ...connectedEntities.slice(0, 8).map(entityToGroundingSource)
  ];

  // 5. Confidence determination
  const maxScore = scoredList[0]?.score || 0;
  let confidence: 'high' | 'medium' | 'low' = 'low';
  if (maxScore >= 200 || primaryEntities.length >= 1) confidence = 'high';
  else if (maxScore >= 50) confidence = 'medium';

  // 6. Compact Context Markdown builder (structured for prompt injection)
  const markdownParts: string[] = [];

  markdownParts.push(`### USER QUERY:\n"${rawQuery}"\n`);
  markdownParts.push(`### DETECTED ATLAS INTENT:\n- Regions: ${intents.targetRegions.length ? intents.targetRegions.join(', ') : 'None'}\n- Districts: ${intents.targetDistricts.length ? intents.targetDistricts.join(', ') : 'None'}\n- Primary Topic: ${intents.primaryTopic || 'General Exploration'}\n`);

  markdownParts.push(`### PRIMARY ATLAS ENTITIES:`);
  for (const ent of primaryEntities) {
    markdownParts.push(
      `• [${ent.type.toUpperCase()}] **${ent.title}** (${ent.hindiTitle || 'N/A'})\n` +
      `  - Subtitle: ${ent.subtitle || ''}\n` +
      `  - District: ${ent.districtName || 'N/A'}${ent.region ? ` (${ent.region} Region)` : ''}\n` +
      `  - Description: ${ent.description}\n` +
      (ent.facts?.length ? `  - Verified Facts:\n    ${ent.facts.slice(0, 4).map(f => `* ${f}`).join('\n    ')}\n` : '') +
      `  - Atlas Navigation: tab="${ent.route?.tab || 'home'}" targetId="${ent.route?.targetId || ent.id}"\n`
    );
  }

  if (connectedEntities.length > 0) {
    markdownParts.push(`### CONNECTED ATLAS ENTITIES (1-Hop Cross-Sectional Links):`);
    for (const ent of connectedEntities) {
      markdownParts.push(
        `• [${ent.type.toUpperCase()}] **${ent.title}** (${ent.districtName || ent.region || 'Bihar'})\n` +
        `  - Details: ${ent.subtitle || ent.description.slice(0, 160)}...\n` +
        `  - Atlas Navigation: tab="${ent.route?.tab || 'home'}" targetId="${ent.route?.targetId || ent.id}"\n`
      );
    }
  }

  if (thematicLinks.length > 0) {
    markdownParts.push(`### VERIFIED RELATIONSHIPS:`);
    for (const link of thematicLinks.slice(0, 8)) {
      markdownParts.push(`• ${link.fromTitle} ──(${link.relation})──> ${link.toTitle} [${link.dimension}]`);
    }
  }

  return {
    query: rawQuery,
    normalizedQuery,
    detectedIntents: intents,
    primaryEntities,
    connectedEntities,
    thematicLinks,
    suggestedExplorations,
    sources,
    compactContextMarkdown: markdownParts.join('\n'),
    confidence
  };
}
