import { db } from '../../db/client.js';
import { musicTracks } from '../../db/schema/index.js';
import { getCanonicalMusic } from '../../db/domainStore.js';
import { eq } from 'drizzle-orm';

export async function getAllMusicTracks(filters) {
  try {
    const results = await db.select().from(musicTracks);
    let list = results;
    if (filters?.category) list = list.filter((m) => m.category === filters.category);
    if (filters?.language) list = list.filter((m) => m.language.toLowerCase() === filters.language.toLowerCase());
    if (filters?.districtId) list = list.filter((m) => m.districtId === filters.districtId);
    return list;
  } catch {
    let list = getCanonicalMusic();
    if (filters?.category) list = list.filter((m) => m.category === filters.category);
    if (filters?.language) list = list.filter((m) => m.language.toLowerCase() === filters.language.toLowerCase());
    if (filters?.districtId) list = list.filter((m) => m.districtId === filters.districtId);
    return list;
  }
}

export async function getMusicTrackById(id) {
  try {
    const results = await db.select().from(musicTracks).where(eq(musicTracks.id, id));
    if (results.length > 0) return results[0];
  } catch {
    // fallback
  }
  const all = getCanonicalMusic();
  return all.find((m) => m.id === id) || null;
}
