import { db } from '../../db/client.js';
import { districts } from '../../db/schema/index.js';
import { getCanonicalDistricts } from '../../db/domainStore.js';
import { eq } from 'drizzle-orm';

export async function getAllDistricts(filters) {
  try {
    const results = await db.select().from(districts);
    let list = results;
    if (filters?.region) {
      list = list.filter((d) => d.region.toLowerCase() === filters.region.toLowerCase());
    }
    if (filters?.division) {
      list = list.filter((d) => d.division.toLowerCase() === filters.division.toLowerCase());
    }
    return list;
  } catch {
    let list = getCanonicalDistricts();
    if (filters?.region) {
      list = list.filter((d) => d.region.toLowerCase() === filters.region.toLowerCase());
    }
    if (filters?.division) {
      list = list.filter((d) => d.division.toLowerCase() === filters.division.toLowerCase());
    }
    return list;
  }
}

export async function getDistrictById(id) {
  try {
    const results = await db.select().from(districts).where(eq(districts.id, id));
    if (results.length > 0) return results[0];
  } catch {
    // fallback to store
  }
  const all = getCanonicalDistricts();
  return all.find((d) => d.id === id || d.slug === id) || null;
}
