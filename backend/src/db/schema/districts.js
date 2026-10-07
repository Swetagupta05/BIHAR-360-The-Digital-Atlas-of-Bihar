import { pgTable, varchar, doublePrecision, integer, text, jsonb, timestamp } from 'drizzle-orm/pg-core';

/**
 * 38 Administrative Districts of Bihar
 * Distinct from towns, headquarters, cultural regions, and heritage monuments.
 * E.g. Rohtas (district) headquarters is Sasaram (town/city).
 * East Champaran headquarters is Motihari; West Champaran is Bettiah.
 */
export const districts = pgTable('districts', {
  id: varchar('id', { length: 64 }).primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  hindiName: varchar('hindi_name', { length: 128 }).notNull(),
  slug: varchar('slug', { length: 128 }).notNull().unique(),
  region: varchar('region', { length: 64 }).notNull(), // Magadh, Mithila, Bhojpur, Anga, Saran, Tirhut, Kosi, Purnia
  division: varchar('division', { length: 64 }).notNull(), // 9 Administrative Divisions
  headquarters: varchar('headquarters', { length: 128 }).notNull(), // Distinct administrative HQ
  areaSqKm: doublePrecision('area_sq_km').notNull(),
  populationApprox: varchar('population_approx', { length: 64 }).notNull(),
  literacyRate: varchar('literacy_rate', { length: 32 }).notNull(),
  sexRatio: varchar('sex_ratio', { length: 32 }).notNull(),
  censusYear: integer('census_year').default(2011).notNull(),
  latitude: doublePrecision('latitude').notNull(),
  longitude: doublePrecision('longitude').notNull(),
  svgGridX: integer('svg_grid_x').notNull(),
  svgGridY: integer('svg_grid_y').notNull(),
  heroImage: text('hero_image').notNull(),
  identityStatement: text('identity_statement'),
  overview: text('overview').notNull(),
  whyItMatters: text('why_it_matters').notNull(),
  history: text('history').notNull(),
  geography: text('geography').notNull(),
  culture: text('culture').notNull(),
  economy: text('economy').notNull(),
  languages: jsonb('languages').notNull(),
  famousFor: jsonb('famous_for').notNull(),
  importantPlaces: jsonb('important_places').notNull(),
  food: jsonb('food').notNull(),
  festivals: jsonb('festivals').notNull(),
  artsAndCrafts: jsonb('arts_and_crafts').notNull(),
  notablePeople: jsonb('notable_people').notNull(),
  agriculture: jsonb('agriculture').notNull(),
  travelTips: jsonb('travel_tips').notNull(),
  sourceName: varchar('source_name', { length: 255 }).notNull(),
  sourceUrl: text('source_url'),
  verifiedYear: integer('verified_year').notNull(),
  officialReference: text('official_reference'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});
