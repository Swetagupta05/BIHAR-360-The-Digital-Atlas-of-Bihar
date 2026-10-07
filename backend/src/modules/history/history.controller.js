import {
  getAllHistoryEras,
  getHistoryEraById,
  getAllHistoryEvents,
  getHistoryEventById
} from './history.service.js';
import { sendSuccess, AppError } from '../../utils/response.js';

export async function handleGetAllHistoryEras(_req, res, next) {
  try {
    const data = await getAllHistoryEras();
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetHistoryEraById(req, res, next) {
  try {
    const id = String(req.params.id);
    const era = await getHistoryEraById(id);
    if (!era) {
      throw new AppError(`Historical era not found: ${id}`, 404, 'HISTORY_ERA_NOT_FOUND');
    }
    sendSuccess(res, era);
  } catch (err) {
    next(err);
  }
}

export async function handleGetAllHistoryEvents(req, res, next) {
  try {
    const { eraId, districtId } = req.query;
    const data = await getAllHistoryEvents({
      eraId: typeof eraId === 'string' ? eraId : undefined,
      districtId: typeof districtId === 'string' ? districtId : undefined
    });
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetHistoryEventById(req, res, next) {
  try {
    const id = String(req.params.id);
    const event = await getHistoryEventById(id);
    if (!event) {
      throw new AppError(`Historical event not found: ${id}`, 404, 'HISTORY_EVENT_NOT_FOUND');
    }
    sendSuccess(res, event);
  } catch (err) {
    next(err);
  }
}
