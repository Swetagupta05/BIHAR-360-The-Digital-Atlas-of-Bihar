import { searchDiscovery, getDiscoveryEntityById, getDiscoveryConnections } from './discovery.service.js';
import { sendSuccess, AppError } from '../../utils/response.js';

export async function handleSearchDiscovery(req, res, next) {
  try {
    const { q, type } = req.query;
    const data = await searchDiscovery(
      typeof q === 'string' ? q : undefined,
      typeof type === 'string' ? type : undefined
    );
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetDiscoveryEntityById(req, res, next) {
  try {
    const id = String(req.params.id);
    const entity = await getDiscoveryEntityById(id);
    if (!entity) {
      throw new AppError(`Discovery entity not found: ${id}`, 404, 'ENTITY_NOT_FOUND');
    }
    sendSuccess(res, entity);
  } catch (err) {
    next(err);
  }
}

export async function handleGetDiscoveryConnections(req, res, next) {
  try {
    const id = String(req.params.id);
    const connections = await getDiscoveryConnections(id);
    sendSuccess(res, connections, 200, { total: connections.length });
  } catch (err) {
    next(err);
  }
}
