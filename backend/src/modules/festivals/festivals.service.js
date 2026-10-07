import { db } from '../../db/client.js';
import { festivals } from '../../db/schema/index.js';
import { getCanonicalFestivals } from '../../db/domainStore.js';
import { eq } from 'drizzle-orm';

export async function getAllFestivals(filters) {
  try {
    const results = await db.select().from(festivals);
    let list = results;
    if (filters?.season) list = list.filter((f) => f.season?.toLowerCase() === filters.season.toLowerCase());
    if (filters?.traditionCategory) list = list.filter((f) => f.traditionCategory === filters.traditionCategory);
    return list;
  } catch {
    let list = getCanonicalFestivals();
    if (filters?.season) list = list.filter((f) => f.season?.toLowerCase() === filters.season.toLowerCase());
    if (filters?.traditionCategory) list = list.filter((f) => f.traditionCategory === filters.traditionCategory);
    return list;
  }
}

export async function getFestivalById(id) {
  try {
    const results = await db.select().from(festivals).where(eq(festivals.id, id));
    if (results.length > 0) return results[0];
  } catch {
    // fallback
  }
  const all = getCanonicalFestivals();
  return all.find((f) => f.id === id) || null;
}
