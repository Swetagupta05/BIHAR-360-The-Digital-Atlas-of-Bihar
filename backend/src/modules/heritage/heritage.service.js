import { db } from '../../db/client.js';
import { heritageSites } from '../../db/schema/index.js';
import { getCanonicalHeritage } from '../../db/domainStore.js';
import { eq } from 'drizzle-orm';

export async function getAllHeritageSites(filters) {
  try {
    const results = await db.select().from(heritageSites);
    let list = results;
    if (filters?.districtId) list = list.filter((h) => h.districtId === filters.districtId);
    if (filters?.isUnesco !== undefined) list = list.filter((h) => h.isUnesco === filters.isUnesco);
    return list;
  } catch {
    let list = getCanonicalHeritage();
    if (filters?.districtId) list = list.filter((h) => h.districtId === filters.districtId);
    if (filters?.isUnesco !== undefined) list = list.filter((h) => h.isUnesco === filters.isUnesco);
    return list;
  }
}

export async function getHeritageSiteById(id) {
  try {
    const results = await db.select().from(heritageSites).where(eq(heritageSites.id, id));
    if (results.length > 0) return results[0];
  } catch {
    // fallback
  }
  const all = getCanonicalHeritage();
  return all.find((h) => h.id === id) || null;
}
