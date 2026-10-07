import { getAllPersonalities, getPersonalityById } from './personalities.service.js';
import { sendSuccess, AppError } from '../../utils/response.js';

export async function handleGetAllPersonalities(req, res, next) {
  try {
    const { eraPeriod, field, districtOrigin } = req.query;
    const data = await getAllPersonalities({
      eraPeriod: typeof eraPeriod === 'string' ? eraPeriod : undefined,
      field: typeof field === 'string' ? field : undefined,
      districtOrigin: typeof districtOrigin === 'string' ? districtOrigin : undefined
    });
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetPersonalityById(req, res, next) {
  try {
    const id = String(req.params.id);
    const person = await getPersonalityById(id);
    if (!person) {
      throw new AppError(`Personality not found: ${id}`, 404, 'PERSONALITY_NOT_FOUND');
    }
    sendSuccess(res, person);
  } catch (err) {
    next(err);
  }
}
