import { pgTable, varchar, text, integer, jsonb, timestamp } from 'drizzle-orm/pg-core';
import { districts } from './districts.js';

/**
 * Universal Discovery Index & Search Graph
 * Models cross-domain search indexing, typed aliases, and relational edges across Bihar's cultural atlas.
 */
export const discoveryEntities = pgTable('discovery_entities', {
  id: varchar('id', { length: 64 }).primaryKey(),
  type: varchar('type', { length: 32 }).notNull(),
  typeLabel: varchar('type_label', { length: 64 }).notNull(),
  hindiTypeLabel: varchar('hindi_type_label', { length: 64 }).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  hindiTitle: varchar('hindi_name', { length: 255 }),
  subtitle: varchar('subtitle', { length: 255 }).notNull(),
  description: text('description').notNull(),
  districtId: varchar('district_id', { length: 64 }).references(() => districts.id),
  aliases: jsonb('aliases').default([]).notNull(),
  typedAliases: jsonb('typed_aliases').default([]).notNull(),
  keywords: jsonb('keywords').default([]).notNull(),
  searchWeight: integer('search_weight').default(10).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});

/**
 * Graph Edges connecting canonical knowledge entities
 */
export const discoveryConnections = pgTable('discovery_connections', {
  id: varchar('id', { length: 160 }).primaryKey(),
  sourceId: varchar('source_id', { length: 64 }).notNull().references(() => discoveryEntities.id, { onDelete: 'cascade' }),
  targetId: varchar('target_id', { length: 64 }).notNull(),
  targetType: varchar('target_type', { length: 32 }).notNull(),
  relationship: varchar('relationship', { length: 64 }).notNull(),
  label: varchar('label', { length: 128 }).notNull(),
  hindiLabel: varchar('hindi_label', { length: 128 }),
  districtId: varchar('district_id', { length: 64 }).references(() => districts.id),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});
