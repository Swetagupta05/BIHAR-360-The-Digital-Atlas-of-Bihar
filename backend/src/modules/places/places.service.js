import { db } from '../../db/client.js';
import { places } from '../../db/schema/index.js';
import { getCanonicalPlaces } from '../../db/domainStore.js';
import { eq } from 'drizzle-orm';

export async function getAllPlaces(filters) {
  try {
    const results = await db.select().from(places);
    let list = results;
    if (filters?.districtId) list = list.filter((p) => p.districtId === filters.districtId);
    if (filters?.category) list = list.filter((p) => p.category === filters.category);
    if (filters?.placeType) list = list.filter((p) => p.placeType === filters.placeType);
    return list;
  } catch {
    let list = getCanonicalPlaces();
    if (filters?.districtId) list = list.filter((p) => p.districtId === filters.districtId);
    if (filters?.category) list = list.filter((p) => p.category === filters.category);
    if (filters?.placeType) list = list.filter((p) => p.placeType === filters.placeType);
    return list;
  }
}

export async function getPlaceById(id) {
  try {
    const results = await db.select().from(places).where(eq(places.id, id));
    if (results.length > 0) return results[0];
  } catch {
    // fallback
  }
  const all = getCanonicalPlaces();
  return all.find((p) => p.id === id || p.slug === id) || null;
}
