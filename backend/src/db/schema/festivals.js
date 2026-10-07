import { pgTable, varchar, text, jsonb, integer, timestamp } from 'drizzle-orm/pg-core';

/**
 * Festivals and Living Sacred Celebrations of Bihar
 */
export const festivals = pgTable('festivals', {
  id: varchar('id', { length: 64 }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  hindiName: varchar('hindi_name', { length: 255 }).notNull(),
  timing: varchar('timing', { length: 255 }),
  monthGregorian: varchar('month_gregorian', { length: 64 }),
  lunarTithi: varchar('lunar_tithi', { length: 128 }),
  category: varchar('category', { length: 64 }),
  season: varchar('season', { length: 32 }),
  traditionCategory: varchar('tradition_category', { length: 64 }),
  monthIndex: integer('month_index'),
  atmosphereQuote: text('atmosphere_quote'),
  regions: jsonb('regions').default([]).notNull(),
  associatedDistricts: jsonb('associated_districts').default([]).notNull(),
  prominence: varchar('prominence', { length: 128 }),
  description: text('description').notNull(),
  rituals: jsonb('rituals').notNull(),
  ritualSequence: jsonb('ritual_sequence'),
  specialFoods: jsonb('special_foods').default([]).notNull(),
  foodTraditions: jsonb('food_traditions'),
  musicTradition: jsonb('music_tradition'),
  sacredPlaces: jsonb('sacred_places'),
  originsHistory: text('origins_history'),
  culturalSignificance: text('cultural_significance'),
  image: text('image').notNull(),
  sources: jsonb('sources'),
  multilingual: jsonb('multilingual'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});
