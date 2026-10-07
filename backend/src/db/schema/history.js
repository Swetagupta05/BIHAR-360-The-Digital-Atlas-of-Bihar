import { pgTable, varchar, text, integer, jsonb, timestamp } from 'drizzle-orm/pg-core';
import { districts } from './districts.js';

/**
 * Historical Chronological Eras of Bihar
 */
export const historyEras = pgTable('history_eras', {
  id: varchar('id', { length: 64 }).primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  hindiTitle: varchar('hindi_name', { length: 255 }).notNull(),
  period: varchar('period', { length: 128 }).notNull(),
  startYearOrder: integer('start_year_order').notNull(),
  dateLabel: varchar('date_label', { length: 128 }).notNull(),
  summary: text('summary').notNull(),
  hindiSummary: text('hindi_summary').notNull(),
  historicalGeography: text('historical_geography').notNull(),
  keyThemes: jsonb('key_themes').notNull(),
  survivingLandmarks: jsonb('surviving_landmarks').notNull(),
  relatedRegions: jsonb('related_regions').notNull(),
  sources: jsonb('sources').notNull(),
  coverImage: text('cover_image'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});

/**
 * Historical Events & Turning Points of Bihar
 */
export const historyEvents = pgTable('history_events', {
  id: varchar('id', { length: 64 }).primaryKey(),
  eraId: varchar('era_id', { length: 64 }).notNull().references(() => historyEras.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 255 }).notNull(),
  hindiTitle: varchar('hindi_name', { length: 255 }).notNull(),
  dateLabel: varchar('date_label', { length: 128 }).notNull(),
  approximateYear: varchar('approximate_year', { length: 64 }),
  location: varchar('location', { length: 255 }).notNull(),
  historicalRegion: varchar('historical_region', { length: 128 }).notNull(),
  districtId: varchar('district_id', { length: 64 }).references(() => districts.id),
  keyActors: jsonb('key_actors').notNull(),
  description: text('description').notNull(),
  evidenceType: varchar('evidence_type', { length: 128 }).notNull(),
  survivingEvidence: text('surviving_evidence').notNull(),
  whatRemainsToday: text('what_remains_today').notNull(),
  sources: jsonb('sources').notNull(),
  image: text('image'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});
