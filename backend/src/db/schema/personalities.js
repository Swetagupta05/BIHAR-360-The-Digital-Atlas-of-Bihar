import { pgTable, varchar, text, jsonb, timestamp } from 'drizzle-orm/pg-core';
import { districts } from './districts.js';

/**
 * Historical and Cultural Personalities of Bihar
 * Foreign keyed to birth/associated district where verified.
 */
export const personalities = pgTable('personalities', {
  id: varchar('id', { length: 64 }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  hindiName: varchar('hindi_name', { length: 255 }).notNull(),
  era: varchar('era', { length: 128 }),
  eraPeriod: varchar('era_period', { length: 64 }),
  field: varchar('field', { length: 128 }),
  category: varchar('category', { length: 128 }),
  districtOrigin: varchar('district_origin', { length: 64 }).references(() => districts.id),
  title: varchar('title', { length: 255 }).notNull(),
  biography: text('biography').notNull(),
  shortContribution: text('short_contribution'),
  featuredStoryIntro: text('featured_story_intro'),
  whyPlaceMatters: text('why_place_matters'),
  languageAssociation: jsonb('language_association'),
  historicalConnection: jsonb('historical_connection'),
  majorAchievements: jsonb('major_achievements').default([]).notNull(),
  keyWorks: jsonb('key_works').default([]).notNull(),
  quotes: jsonb('quotes').default([]).notNull(),
  image: text('image').notNull(),
  sources: jsonb('sources').default([]).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});
