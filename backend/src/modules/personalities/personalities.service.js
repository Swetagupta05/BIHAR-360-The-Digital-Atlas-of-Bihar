import { db } from '../../db/client.js';
import { personalities } from '../../db/schema/index.js';
import { getCanonicalPersonalities } from '../../db/domainStore.js';
import { eq } from 'drizzle-orm';

export async function getAllPersonalities(filters) {
  try {
    const results = await db.select().from(personalities);
    let list = results;
    if (filters?.eraPeriod) list = list.filter((p) => p.eraPeriod === filters.eraPeriod);
    if (filters?.field) list = list.filter((p) => p.field === filters.field);
    if (filters?.districtOrigin) list = list.filter((p) => p.districtOrigin === filters.districtOrigin);
    return list;
  } catch {
    let list = getCanonicalPersonalities();
    if (filters?.eraPeriod) list = list.filter((p) => p.eraPeriod === filters.eraPeriod);
    if (filters?.field) list = list.filter((p) => p.field === filters.field);
    if (filters?.districtOrigin) list = list.filter((p) => p.districtOrigin === filters.districtOrigin);
    return list;
  }
}

export async function getPersonalityById(id) {
  try {
    const results = await db.select().from(personalities).where(eq(personalities.id, id));
    if (results.length > 0) return results[0];
  } catch {
    // fallback
  }
  const all = getCanonicalPersonalities();
  return all.find((p) => p.id === id) || null;
}
