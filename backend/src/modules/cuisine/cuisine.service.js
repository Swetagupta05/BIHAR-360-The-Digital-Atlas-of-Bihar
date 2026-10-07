import { db } from '../../db/client.js';
import { foods } from '../../db/schema/index.js';
import { getCanonicalFoods } from '../../db/domainStore.js';
import { eq } from 'drizzle-orm';

export async function getAllFoods(filters) {
  try {
    const results = await db.select().from(foods);
    let list = results;
    if (filters?.region) list = list.filter((f) => f.region?.toLowerCase() === filters.region.toLowerCase());
    if (filters?.originDistrictId) list = list.filter((f) => f.originDistrictId === filters.originDistrictId);
    if (filters?.isVegetarian !== undefined) list = list.filter((f) => f.isVegetarian === filters.isVegetarian);
    if (filters?.giTag !== undefined) list = list.filter((f) => f.giTag === filters.giTag);
    return list;
  } catch {
    let list = getCanonicalFoods();
    if (filters?.region) list = list.filter((f) => f.region?.toLowerCase() === filters.region.toLowerCase());
    if (filters?.originDistrictId) list = list.filter((f) => f.originDistrictId === filters.originDistrictId);
    if (filters?.isVegetarian !== undefined) list = list.filter((f) => f.isVegetarian === filters.isVegetarian);
    if (filters?.giTag !== undefined) list = list.filter((f) => f.giTag === filters.giTag);
    return list;
  }
}

export async function getFoodById(id) {
  try {
    const results = await db.select().from(foods).where(eq(foods.id, id));
    if (results.length > 0) return results[0];
  } catch {
    // fallback
  }
  const all = getCanonicalFoods();
  return all.find((f) => f.id === id) || null;
}
