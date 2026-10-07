/**
 * BIHAR 360 — AI Grounded Knowledge Architecture Types
 * Canonical types for AI Guide adapter layer, grounded retrieval, and prompt context.
 */

export type KnowledgeEntityType =
  | 'district'
  | 'place'
  | 'heritage'
  | 'person'
  | 'festival'
  | 'food'
  | 'language'
  | 'art'
  | 'music'
  | 'journey'
  | 'history_era'
  | 'history_event';

export type RelationshipType =
  | 'located_in'
  | 'associated_personality'
  | 'associated_era'
  | 'culinary_tradition'
  | 'celebrated_in'
  | 'spoken_in'
  | 'art_tradition'
  | 'musical_tradition'
  | 'circuit_stop'
  | 'neighboring_district'
  | 'administrative_hq'
  | 'historical_event'
  | 'thematic_connection';

export interface KnowledgeRelationship {
  targetId: string;
  targetType: KnowledgeEntityType;
  relationshipType: RelationshipType;
  label: string;
  hindiLabel?: string;
  districtId?: string;
  description?: string;
}

export interface KnowledgeEntity {
  id: string;
  type: KnowledgeEntityType;
  title: string;
  hindiTitle?: string;
  subtitle?: string;
  description: string;
  region?: string;
  districtId?: string;
  districtName?: string;
  headquarters?: string;
  tags: string[];
  aliases: string[];
  facts?: string[];
  sources?: string[];
  relationships: KnowledgeRelationship[];
  route?: {
    tab: string;
    targetId?: string;
    districtId?: string;
  };
  metadata?: Record<string, unknown>;
}

export interface KnowledgeDocument {
  entityId: string;
  entityType: KnowledgeEntityType;
  title: string;
  hindiTitle?: string;
  summary: string;
  fullNarrative: string;
  keyFacts: string[];
  relationships: KnowledgeRelationship[];
  sources: string[];
  districtName?: string;
  region?: string;
}

export interface GroundingSource {
  entityId: string;
  title: string;
  type: KnowledgeEntityType;
  district?: string;
  tab: string;
  targetId?: string;
  snippet: string;
}

export interface ThematicLink {
  fromId: string;
  fromTitle: string;
  toId: string;
  toTitle: string;
  relation: string;
  dimension: string;
}

export interface SuggestedExploration {
  title: string;
  hindiTitle?: string;
  tab: string;
  targetId?: string;
  districtId?: string;
  category: KnowledgeEntityType;
  reason: string;
}

export interface RetrievedContext {
  query: string;
  normalizedQuery: string;
  detectedIntents: {
    primaryTopic?: string;
    targetDistricts: string[];
    targetRegions: string[];
    targetEras: string[];
    thematicCategories: KnowledgeEntityType[];
  };
  primaryEntities: KnowledgeEntity[];
  connectedEntities: KnowledgeEntity[];
  thematicLinks: ThematicLink[];
  suggestedExplorations: SuggestedExploration[];
  sources: GroundingSource[];
  compactContextMarkdown: string;
  confidence: 'high' | 'medium' | 'low';
}

export interface AIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
  groundingMetadata?: {
    entityIds: string[];
    citations: string[];
    suggestedExplorations?: SuggestedExploration[];
  };
}

export interface AIResponse {
  answer: string;
  citations: GroundingSource[];
  suggestedExplorations: SuggestedExploration[];
  confidence: 'high' | 'medium' | 'low';
  contextSummary: {
    primaryEntityCount: number;
    connectedEntityCount: number;
    query: string;
  };
}
