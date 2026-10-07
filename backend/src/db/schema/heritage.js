import { pgTable, varchar, doublePrecision, text, boolean, jsonb, integer, timestamp } from 'drizzle-orm/pg-core';
import { districts } from './districts.js';

/**
 * Authoritative Built Heritage & Archaeological Sites of Bihar
 * Distinct from administrative districts.
 * E.g. Nalanda Mahavihara (heritage monument) is located within Nalanda District.
 * Sher Shah Tomb is located in Sasaram within Rohtas District.
 */
export const heritageSites = pgTable('heritage_sites', {
  id: varchar('id', { length: 64 }).primaryKey(),
  name: varchar('255', { length: 255 }).notNull(),
  hindiName: varchar('hindi_name', { length: 255 }).notNull(),
  location: varchar('location', { length: 255 }).notNull(),
  districtId: varchar('district_id', { length: 64 }).notNull().references(() => districts.id),
  latitude: doublePrecision('latitude').notNull(),
  longitude: doublePrecision('longitude').notNull(),
  period: varchar('period', { length: 128 }).notNull(),
  dynasty: varchar('dynasty', { length: 128 }).notNull(),
  category: varchar('category', { length: 128 }).notNull(),
  isUnesco: boolean('is_unesco').default(false).notNull(),
  unescoRef: varchar('unesco_ref', { length: 64 }),
  unescoYear: integer('unesco_year'),
  image: text('image').notNull(),
  description: text('description').notNull(),
  architecture: text('architecture').notNull(),
  significance: text('significance').notNull(),
  keyFeatures: jsonb('key_features').notNull(),
  timings: varchar('timings', { length: 128 }),
  entryFee: varchar('entry_fee', { length: 255 }),
  bestTime: varchar('best_time', { length: 128 }),
  nearestHub: varchar('nearest_hub', { length: 255 }),
  museumDoc: jsonb('museum_doc'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});
