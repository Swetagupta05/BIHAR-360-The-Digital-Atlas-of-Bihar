import { db } from '../../db/client.js';
import { historyEras, historyEvents } from '../../db/schema/index.js';
import { getCanonicalHistory } from '../../db/domainStore.js';
import { eq } from 'drizzle-orm';

export async function getAllHistoryEras() {
  try {
    const list = await db.select().from(historyEras);
    return list.sort((a, b) => a.startYearOrder - b.startYearOrder);
  } catch {
    return getCanonicalHistory().eras.sort((a, b) => a.startYearOrder - b.startYearOrder);
  }
}

export async function getHistoryEraById(id) {
  try {
    const results = await db.select().from(historyEras).where(eq(historyEras.id, id));
    if (results.length > 0) return results[0];
  } catch {
    // fallback
  }
  return getCanonicalHistory().eras.find((e) => e.id === id) || null;
}

export async function getAllHistoryEvents(filters) {
  try {
    const results = await db.select().from(historyEvents);
    let list = results;
    if (filters?.eraId) list = list.filter((ev) => ev.eraId === filters.eraId);
    if (filters?.districtId) list = list.filter((ev) => ev.districtId === filters.districtId);
    return list;
  } catch {
    let list = getCanonicalHistory().events;
    if (filters?.eraId) list = list.filter((ev) => ev.eraId === filters.eraId);
    if (filters?.districtId) list = list.filter((ev) => ev.districtId === filters.districtId);
    return list;
  }
}

export async function getHistoryEventById(id) {
  try {
    const results = await db.select().from(historyEvents).where(eq(historyEvents.id, id));
    if (results.length > 0) return results[0];
  } catch {
    // fallback
  }
  return getCanonicalHistory().events.find((ev) => ev.id === id) || null;
}
