import { pgTable, varchar, text, boolean, jsonb, timestamp } from 'drizzle-orm/pg-core';
import { districts } from './districts.js';

/**
 * Traditional Foods & Culinary Heritage of Bihar
 * Distinct from towns or districts (e.g. Silao Khaja originated in Nalanda district; Gaya Tilkut originated in Gaya).
 */
export const foods = pgTable('foods', {
  id: varchar('id', { length: 64 }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  hindiName: varchar('hindi_name', { length: 255 }).notNull(),
  region: varchar('region', { length: 64 }),
  originDistrictId: varchar('origin_district_id', { length: 64 }).references(() => districts.id),
  associatedDistricts: jsonb('associated_districts').default([]).notNull(),
  category: varchar('category', { length: 64 }).notNull(),
  isVegetarian: boolean('is_vegetarian').default(true).notNull(),
  giTag: boolean('gi_tag').default(false).notNull(),
  image: text('image').notNull(),
  description: text('description').notNull(),
  ingredients: jsonb('ingredients').notNull(),
  preparationMethod: text('preparation_method').notNull(),
  culturalContext: text('cultural_context').notNull(),
  whenEaten: text('when_eaten'),
  season: varchar('season', { length: 64 }),
  festivalConnections: jsonb('festival_connections').default([]).notNull(),
  isSignature: boolean('is_signature').default(false).notNull(),
  sources: jsonb('sources').default([]).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});
