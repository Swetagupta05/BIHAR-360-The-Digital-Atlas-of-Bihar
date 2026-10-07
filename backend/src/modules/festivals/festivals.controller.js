import { getAllFestivals, getFestivalById } from './festivals.service.js';
import { sendSuccess, AppError } from '../../utils/response.js';

export async function handleGetAllFestivals(req, res, next) {
  try {
    const { season, traditionCategory } = req.query;
    const data = await getAllFestivals({
      season: typeof season === 'string' ? season : undefined,
      traditionCategory: typeof traditionCategory === 'string' ? traditionCategory : undefined
    });
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetFestivalById(req, res, next) {
  try {
    const id = String(req.params.id);
    const festival = await getFestivalById(id);
    if (!festival) {
      throw new AppError(`Festival not found: ${id}`, 404, 'FESTIVAL_NOT_FOUND');
    }
    sendSuccess(res, festival);
  } catch (err) {
    next(err);
  }
}
