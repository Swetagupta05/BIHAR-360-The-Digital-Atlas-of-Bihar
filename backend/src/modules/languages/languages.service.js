import { db } from '../../db/client.js';
import { interfaceLanguages, biharLanguages, scripts } from '../../db/schema/index.js';
import { getCanonicalLanguages } from '../../db/domainStore.js';
import { eq } from 'drizzle-orm';

export async function getInterfaceLanguages() {
  try {
    const list = await db.select().from(interfaceLanguages);
    return list;
  } catch {
    return getCanonicalLanguages().interfaceLanguages;
  }
}

export async function getBiharLanguages() {
  try {
    const list = await db.select().from(biharLanguages);
    return list;
  } catch {
    return getCanonicalLanguages().biharLanguages;
  }
}

export async function getBiharLanguageById(id) {
  try {
    const results = await db.select().from(biharLanguages).where(eq(biharLanguages.id, id));
    if (results.length > 0) return results[0];
  } catch {
    // fallback
  }
  const all = getCanonicalLanguages().biharLanguages;
  return all.find((l) => l.id === id) || null;
}

export async function getScripts() {
  try {
    const list = await db.select().from(scripts);
    return list;
  } catch {
    return getCanonicalLanguages().scripts;
  }
}

export async function getScriptById(id) {
  try {
    const results = await db.select().from(scripts).where(eq(scripts.id, id));
    if (results.length > 0) return results[0];
  } catch {
    // fallback
  }
  const all = getCanonicalLanguages().scripts;
  return all.find((s) => s.id === id) || null;
}
