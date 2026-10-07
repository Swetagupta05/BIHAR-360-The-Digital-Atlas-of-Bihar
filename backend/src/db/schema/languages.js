import { pgTable, varchar, text, boolean, jsonb, timestamp } from 'drizzle-orm/pg-core';

/**
 * 1. Interface Languages Registry
 * Pan-Indian interface languages (English + 22 Eighth Schedule languages)
 */
export const interfaceLanguages = pgTable('interface_languages', {
  id: varchar('id', { length: 16 }).primaryKey(),
  code: varchar('code', { length: 16 }).notNull().unique(),
  name: varchar('name', { length: 128 }).notNull(),
  nativeName: varchar('native_name', { length: 128 }).notNull(),
  script: varchar('script', { length: 64 }).notNull(),
  isScheduledLanguage: boolean('is_scheduled_language').default(false).notNull(),
  translationAvailable: boolean('translation_available').default(false).notNull(),
  fallbackLanguage: varchar('fallback_language', { length: 16 }).default('en').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});

/**
 * 2. Cultural & Linguistic Languages of Bihar
 */
export const biharLanguages = pgTable('bihar_languages', {
  id: varchar('id', { length: 64 }).primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  localName: varchar('local_name', { length: 128 }).notNull(),
  category: varchar('category', { length: 64 }).notNull(),
  classification: text('classification').notNull(),
  scholarlyClassificationNote: text('scholarly_classification_note').notNull(),
  officialStatus: text('official_status').notNull(),
  primaryRegions: jsonb('primary_regions').notNull(),
  associatedDistricts: jsonb('associated_districts').notNull(),
  traditionalScripts: jsonb('traditional_scripts').notNull(),
  primaryScript: varchar('primary_script', { length: 128 }).notNull(),
  overview: text('overview').notNull(),
  literaryTradition: text('literary_tradition').notNull(),
  oralTraditions: jsonb('oral_traditions').notNull(),
  notableFigures: jsonb('notable_figures').notNull(),
  festivalConnections: jsonb('festival_connections'),
  musicTrackIds: jsonb('music_track_ids').default([]).notNull(),
  samplePhrase: jsonb('sample_phrase').notNull(),
  sampleLiteraryPassage: jsonb('sample_literary_passage'),
  censusNote: text('census_note').notNull(),
  sources: jsonb('sources').default([]).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});

/**
 * 3. Historical & Living Scripts of Bihar
 */
export const scripts = pgTable('scripts', {
  id: varchar('id', { length: 64 }).primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  hindiName: varchar('hindi_name', { length: 128 }).notNull(),
  nativeSample: text('native_sample').notNull(),
  nativeSampleTranslation: text('native_sample_translation').notNull(),
  languagesAssociated: jsonb('languages_associated').notNull(),
  historicalEra: text('historical_era').notNull(),
  statusToday: text('status_today').notNull(),
  description: text('description').notNull(),
  culturalNote: text('cultural_note').notNull(),
  unicodeRange: varchar('unicode_range', { length: 128 }),
  visualGlyphs: jsonb('visual_glyphs'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});
