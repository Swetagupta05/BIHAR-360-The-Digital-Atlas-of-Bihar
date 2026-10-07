import { pgTable, varchar, text, boolean, jsonb, timestamp } from 'drizzle-orm/pg-core';
import { districts } from './districts.js';

/**
 * Traditional Arts, Crafts, and Weaving Traditions of Bihar
 * Foreign keyed to origin district.
 */
export const artsCrafts = pgTable('arts_crafts', {
  id: varchar('id', { length: 64 }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  hindiName: varchar('hindi_name', { length: 255 }).notNull(),
  tagline: varchar('tagline', { length: 255 }),
  originRegion: varchar('origin_region', { length: 64 }).notNull(),
  districtId: varchar('district_id', { length: 64 }).notNull().references(() => districts.id),
  associatedDistricts: jsonb('associated_districts').default([]).notNull(),
  category: varchar('category', { length: 64 }).notNull(),
  categoryType: varchar('category_type', { length: 32 }),
  giTag: boolean('gi_tag').default(false).notNull(),
  image: text('image').notNull(),
  description: text('description').notNull(),
  history: text('history').notNull(),
  techniques: text('techniques').notNull(),
  materials: jsonb('materials').notNull(),
  masterArtisans: jsonb('master_artisans').default([]).notNull(),
  practitionersList: jsonb('practitioners_list'),
  motifs: jsonb('motifs'),
  processSteps: jsonb('process_steps'),
  culturalMeaning: text('cultural_meaning'),
  livingToday: text('living_today'),
  sources: jsonb('sources'),
  multilingual: jsonb('multilingual'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});
