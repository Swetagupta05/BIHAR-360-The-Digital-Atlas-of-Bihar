import { db } from '../../db/client.js';
import { translations } from '../../db/schema/index.js';
import { getCanonicalTranslations } from '../../db/domainStore.js';
import { eq, and } from 'drizzle-orm';

export async function getTranslationsForLanguage(langCode, section) {
  try {
    let whereClause = eq(translations.languageCode, langCode);
    if (section) {
      whereClause = and(eq(translations.languageCode, langCode), eq(translations.section, section));
    }
    const results = await db.select().from(translations).where(whereClause);
    if (results.length > 0) {
      const grouped = {};
      for (const row of results) {
        if (!grouped[row.section]) grouped[row.section] = {};
        try {
          grouped[row.section][row.translationKey] = JSON.parse(row.translationValue);
        } catch {
          grouped[row.section][row.translationKey] = row.translationValue;
        }
      }
      return section ? grouped[section] || {} : grouped;
    }
  } catch {
    // fallback
  }
  return getCanonicalTranslations(langCode, section);
}
