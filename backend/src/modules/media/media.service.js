import { db } from '../../db/client.js';
import { mediaAssets } from '../../db/schema/index.js';
import { getCanonicalMedia } from '../../db/domainStore.js';
import { eq } from 'drizzle-orm';

export async function getAllMediaAssets() {
  try {
    const list = await db.select().from(mediaAssets);
    return list;
  } catch {
    return getCanonicalMedia();
  }
}

export async function getMediaAssetById(id) {
  try {
    const results = await db.select().from(mediaAssets).where(eq(mediaAssets.id, id));
    if (results.length > 0) return results[0];
  } catch {
    // fallback
  }
  const all = getCanonicalMedia();
  return all.find((m) => m.id === id) || null;
}
