import { getAllJourneys, getJourneyById } from './journeys.service.js';
import { sendSuccess, AppError } from '../../utils/response.js';

export async function handleGetAllJourneys(req, res, next) {
  try {
    const { theme } = req.query;
    const data = await getAllJourneys({
      theme: typeof theme === 'string' ? theme : undefined
    });
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetJourneyById(req, res, next) {
  try {
    const id = String(req.params.id);
    const journey = await getJourneyById(id);
    if (!journey) {
      throw new AppError(`Journey not found: ${id}`, 404, 'JOURNEY_NOT_FOUND');
    }
    sendSuccess(res, journey);
  } catch (err) {
    next(err);
  }
}
