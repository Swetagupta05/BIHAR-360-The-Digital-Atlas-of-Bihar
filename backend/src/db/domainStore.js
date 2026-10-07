/**
 * BIHAR 360 — Authoritative In-Memory Domain Fallback Store
 * Used by modular domain services when PostgreSQL connection is offline or in test environments.
 * Returns identical normalized schemas guaranteed by the canonical source data.
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const canonicalData = require('./canonicalData.json');

export function getCanonicalDistricts() {
  return canonicalData.districts;
}

export function getCanonicalPlaces() {
  return canonicalData.places;
}

export function getCanonicalHeritage() {
  return canonicalData.heritage;
}

export function getCanonicalPersonalities() {
  return canonicalData.personalities;
}

export function getCanonicalFoods() {
  return canonicalData.foods;
}

export function getCanonicalFestivals() {
  return canonicalData.festivals;
}

export function getCanonicalArts() {
  return canonicalData.arts;
}

export function getCanonicalLanguages() {
  return {
    interfaceLanguages: canonicalData.interfaceLanguages,
    biharLanguages: canonicalData.biharLanguages,
    scripts: canonicalData.scripts
  };
}

export function getCanonicalMusic() {
  return canonicalData.music;
}

export function getCanonicalHistory() {
  return canonicalData.history;
}

export function getCanonicalJourneys() {
  return canonicalData.journeys;
}

export function getCanonicalTranslations(langCode = 'en', section) {
  const translations = canonicalData.translations[langCode] || canonicalData.translations.en;
  if (!translations) return {};
  if (section && section in translations) {
    return translations[section];
  }
  return translations;
}

export function getCanonicalMedia() {
  return canonicalData.media;
}

export function getCanonicalDiscovery() {
  const entities = canonicalData.discovery?.entities || [];
  const connections = [];

  for (const ent of entities) {
    if (ent.connections && ent.connections.length > 0) {
      for (let i = 0; i < ent.connections.length; i++) {
        const conn = ent.connections[i];
        connections.push({
          id: `conn-${ent.id}-${conn.targetId}-${i}`,
          sourceId: ent.id,
          targetId: conn.targetId,
          targetType: conn.targetType,
          relationship: conn.relationship,
          label: conn.label,
          hindiLabel: conn.hindiLabel || null,
          districtId: conn.districtId || null,
          createdAt: new Date()
        });
      }
    }
  }

  return { entities, connections };
}
