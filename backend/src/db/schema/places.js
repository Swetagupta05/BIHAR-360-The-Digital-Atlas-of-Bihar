import { pgTable, varchar, doublePrecision, text, boolean, jsonb, timestamp } from 'drizzle-orm/pg-core';
import { districts } from './districts.js';

/**
 * Places, Rivers, and Landscape Sanctuaries of Bihar
 * Foreign keyed to administrative districts.
 */
export const places = pgTable('places', {
  id: varchar('id', { length: 64 }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  hindiName: varchar('hindi_name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  category: varchar('category', { length: 64 }).notNull(),
  placeType: varchar('place_type', { length: 32 }).default('place').notNull(), // 'place' | 'landscape' | 'river'
  districtId: varchar('district_id', { length: 64 }).notNull().references(() => districts.id),
  region: varchar('region', { length: 64 }).notNull(),
  latitude: doublePrecision('latitude').notNull(),
  longitude: doublePrecision('longitude').notNull(),
  image: text('image').notNull(),
  summary: text('summary').notNull(),
  history: text('history'),
  whyVisit: text('why_visit'),
  thingsToSee: jsonb('things_to_see').default([]).notNull(),
  bestTimeToVisit: varchar('best_time_to_visit', { length: 128 }),
  howToReach: text('how_to_reach'),
  isHiddenGem: boolean('is_hidden_gem').default(false).notNull(),
  isFeatured: boolean('is_featured').default(false).notNull(),
  source: text('source'),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});
