import { pgTable, varchar, text, jsonb, timestamp } from 'drizzle-orm/pg-core';
import { districts } from './districts.js';

/**
 * Verified Music Tracks & Oral Musical Traditions of Bihar
 */
export const musicTracks = pgTable('music_tracks', {
  id: varchar('id', { length: 64 }).primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  hindiTitle: varchar('hindi_name', { length: 255 }).notNull(),
  performer: varchar('performer', { length: 255 }).notNull(),
  tradition: varchar('tradition', { length: 255 }).notNull(),
  traditionType: varchar('tradition_type', { length: 64 }).notNull(),
  category: varchar('category', { length: 64 }).notNull(),
  language: varchar('language', { length: 64 }).notNull(),
  region: varchar('region', { length: 64 }).notNull(),
  districtId: varchar('district_id', { length: 64 }).references(() => districts.id),
  youtubeId: varchar('youtube_id', { length: 64 }).notNull(),
  youtubeUrl: text('youtube_url').notNull(),
  durationMinutes: varchar('duration_minutes', { length: 32 }).notNull(),
  culturalContext: text('cultural_context').notNull(),
  description: text('description').notNull(),
  instruments: jsonb('instruments').notNull(),
  source: text('source').notNull(),
  coverImage: text('cover_image'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});
