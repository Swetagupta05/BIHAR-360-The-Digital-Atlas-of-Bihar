import { db } from '../../db/client.js';
import { discoveryEntities, discoveryConnections } from '../../db/schema/index.js';
import { getCanonicalDiscovery } from '../../db/domainStore.js';
import { eq } from 'drizzle-orm';

export async function searchDiscovery(query, type) {
  try {
    const entities = await db.select().from(discoveryEntities);
    let list = entities;
    if (type && type !== 'all') {
      list = list.filter((e) => e.type === type);
    }
    if (query) {
      const q = query.toLowerCase();
      list = list.filter((e) =>
        e.title.toLowerCase().includes(q) ||
        (e.hindiTitle && e.hindiTitle.toLowerCase().includes(q)) ||
        e.subtitle.toLowerCase().includes(q) ||
        (e.aliases && e.aliases.some((a) => a.toLowerCase().includes(q)))
      );
    }
    return list;
  } catch {
    const { entities } = getCanonicalDiscovery();
    let list = entities;
    if (type && type !== 'all') {
      list = list.filter((e) => e.type === type);
    }
    if (query) {
      const q = query.toLowerCase();
      list = list.filter((e) =>
        e.title.toLowerCase().includes(q) ||
        (e.hindiTitle && e.hindiTitle.toLowerCase().includes(q)) ||
        e.subtitle.toLowerCase().includes(q) ||
        (e.aliases && e.aliases.some((a) => a.toLowerCase().includes(q)))
      );
    }
    return list;
  }
}

export async function getDiscoveryEntityById(id) {
  try {
    const results = await db.select().from(discoveryEntities).where(eq(discoveryEntities.id, id));
    if (results.length > 0) {
      const conns = await db.select().from(discoveryConnections).where(eq(discoveryConnections.sourceId, id));
      return { ...results[0], connections: conns };
    }
  } catch {
    // fallback
  }
  const { entities, connections } = getCanonicalDiscovery();
  const entity = entities.find((e) => e.id === id);
  if (!entity) return null;
  const conns = connections.filter((c) => c.sourceId === id);
  return { ...entity, connections: conns };
}

export async function getDiscoveryConnections(entityId) {
  try {
    const conns = await db.select().from(discoveryConnections).where(eq(discoveryConnections.sourceId, entityId));
    return conns;
  } catch {
    const { connections } = getCanonicalDiscovery();
    return connections.filter((c) => c.sourceId === entityId);
  }
}
