import { db } from '../../db/client.js';
import { artsCrafts } from '../../db/schema/index.js';
import { getCanonicalArts } from '../../db/domainStore.js';
import { eq } from 'drizzle-orm';

export async function getAllArtsCrafts(filters) {
  try {
    const results = await db.select().from(artsCrafts);
    let list = results;
    if (filters?.districtId) list = list.filter((a) => a.districtId === filters.districtId);
    if (filters?.category) list = list.filter((a) => a.category?.toLowerCase() === filters.category.toLowerCase());
    if (filters?.giTag !== undefined) list = list.filter((a) => a.giTag === filters.giTag);
    return list;
  } catch {
    let list = getCanonicalArts();
    if (filters?.districtId) list = list.filter((a) => a.districtId === filters.districtId);
    if (filters?.category) list = list.filter((a) => a.category?.toLowerCase() === filters.category.toLowerCase());
    if (filters?.giTag !== undefined) list = list.filter((a) => a.giTag === filters.giTag);
    return list;
  }
}

export async function getArtCraftById(id) {
  try {
    const results = await db.select().from(artsCrafts).where(eq(artsCrafts.id, id));
    if (results.length > 0) return results[0];
  } catch {
    // fallback
  }
  const all = getCanonicalArts();
  return all.find((a) => a.id === id) || null;
}
