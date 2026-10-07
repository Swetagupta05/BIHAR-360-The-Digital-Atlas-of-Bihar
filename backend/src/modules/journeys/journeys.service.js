import { db } from '../../db/client.js';
import { journeys, journeyStops } from '../../db/schema/index.js';
import { getCanonicalJourneys } from '../../db/domainStore.js';
import { eq } from 'drizzle-orm';

export async function getAllJourneys(filters) {
  try {
    const results = await db.select().from(journeys);
    let list = results;
    if (filters?.theme) list = list.filter((j) => j.theme === filters.theme);
    return list;
  } catch {
    let list = getCanonicalJourneys().journeys;
    if (filters?.theme) list = list.filter((j) => j.theme === filters.theme);
    return list;
  }
}

export async function getJourneyById(id) {
  try {
    const results = await db.select().from(journeys).where(eq(journeys.id, id));
    if (results.length > 0) {
      const stops = await db.select().from(journeyStops).where(eq(journeyStops.journeyId, id));
      return { ...results[0], stops: stops.sort((a, b) => a.stopNumber - b.stopNumber) };
    }
  } catch {
    // fallback
  }
  const { journeys: canonicalJourneys, stops: canonicalStops } = getCanonicalJourneys();
  const j = canonicalJourneys.find((item) => item.id === id);
  if (!j) return null;
  const stops = canonicalStops.filter((s) => s.journeyId === id).sort((a, b) => a.stopNumber - b.stopNumber);
  return { ...j, stops };
}
