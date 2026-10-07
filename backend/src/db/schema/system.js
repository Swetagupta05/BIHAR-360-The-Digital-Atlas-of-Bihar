import { pgTable, text, timestamp, varchar, boolean } from 'drizzle-orm/pg-core';

/**
 * Minimal baseline system table for infrastructure verification.
 */
export const systemHealth = pgTable('system_health', {
  id: varchar('id', { length: 64 }).primaryKey(),
  serviceName: varchar('service_name', { length: 128 }).notNull(),
  version: varchar('version', { length: 32 }).notNull(),
  isHealthy: boolean('is_healthy').default(true).notNull(),
  notes: text('notes'),
  lastCheckedAt: timestamp('last_checked_at', { withTimezone: true })
    .defaultNow()
    .notNull()
});
