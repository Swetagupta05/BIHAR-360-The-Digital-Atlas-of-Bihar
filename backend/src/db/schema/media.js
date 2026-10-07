import { pgTable, varchar, text, boolean, timestamp } from 'drizzle-orm/pg-core';
import { districts } from './districts.js';

/**
 * Verified Photographic and Cartographic Media Assets of Bihar
 */
export const mediaAssets = pgTable('media_assets', {
  id: varchar('id', { length: 64 }).primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  hindiTitle: varchar('hindi_name', { length: 255 }),
  location: varchar('location', { length: 255 }),
  districtId: varchar('district_id', { length: 64 }).references(() => districts.id),
  src: text('src').notNull(),
  caption: text('caption'),
  category: varchar('category', { length: 64 }),
  license: varchar('license', { length: 128 }).default('Verified Public Educational / Atlas License'),
  isVerified: boolean('is_verified').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});
