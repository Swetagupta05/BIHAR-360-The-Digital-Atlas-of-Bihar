import { pgTable, varchar, text, timestamp, index } from 'drizzle-orm/pg-core';

/**
 * Interface Localization Dictionary
 */
export const translations = pgTable('translations', {
  id: varchar('id', { length: 160 }).primaryKey(),
  languageCode: varchar('language_code', { length: 16 }).notNull(),
  section: varchar('section', { length: 64 }).notNull(),
  translationKey: varchar('translation_key', { length: 128 }).notNull(),
  translationValue: text('translation_value').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
}, (table) => [
  index('idx_translations_lang_sec').on(table.languageCode, table.section)
]);
