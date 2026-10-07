import { pgTable, varchar, text, integer, jsonb, timestamp } from 'drizzle-orm/pg-core';
import { districts } from './districts.js';

/**
 * Curated Travel Journeys of Bihar
 */
export const journeys = pgTable('journeys', {
  id: varchar('id', { length: 64 }).primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  hindiTitle: varchar('hindi_name', { length: 255 }).notNull(),
  tagline: text('tagline').notNull(),
  hindiTagline: text('hindi_tagline').notNull(),
  theme: varchar('theme', { length: 64 }).notNull(),
  themeLabel: varchar('theme_label', { length: 128 }).notNull(),
  themeColor: varchar('theme_color', { length: 32 }).notNull(),
  durationDays: integer('duration_days').notNull(),
  totalStops: integer('total_stops').notNull(),
  districts: jsonb('districts').notNull(),
  districtNames: jsonb('district_names').notNull(),
  regions: jsonb('regions').notNull(),
  bestSeason: varchar('best_season', { length: 128 }).notNull(),
  pace: varchar('pace', { length: 32 }).notNull(),
  heroImage: text('hero_image').notNull(),
  storyNarrative: text('story_narrative').notNull(),
  whyThisRoute: text('why_this_route').notNull(),
  culinaryTraditions: jsonb('culinary_traditions').default([]).notNull(),
  craftTraditions: jsonb('craft_traditions').default([]).notNull(),
  connectedEras: jsonb('connected_eras').default([]).notNull(),
  travelAdvisories: jsonb('travel_advisories').default([]).notNull(),
  sources: jsonb('sources').default([]).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});

/**
 * Individual Route Stops within a Curated Journey
 */
export const journeyStops = pgTable('journey_stops', {
  id: varchar('id', { length: 64 }).primaryKey(),
  journeyId: varchar('journey_id', { length: 64 }).notNull().references(() => journeys.id, { onDelete: 'cascade' }),
  stopNumber: integer('stop_number').notNull(),
  dayNumber: integer('day_number').notNull(),
  placeName: varchar('place_name', { length: 255 }).notNull(),
  hindiPlaceName: varchar('hindi_place_name', { length: 255 }),
  districtId: varchar('district_id', { length: 64 }).notNull().references(() => districts.id),
  districtName: varchar('district_name', { length: 128 }).notNull(),
  region: varchar('region', { length: 64 }).notNull(),
  headline: varchar('headline', { length: 255 }).notNull(),
  narrative: text('narrative').notNull(),
  whatToExperience: jsonb('what_to_experience').notNull(),
  culinaryHighlight: jsonb('culinary_highlight'),
  musicRecommendation: jsonb('music_recommendation'),
  languageSpoken: varchar('language_spoken', { length: 128 }).notNull(),
  practicalTips: text('practical_tips').notNull(),
  travelTransit: text('travel_transit').notNull(),
  image: text('image'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});
