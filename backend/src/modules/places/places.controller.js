import { getAllPlaces, getPlaceById } from './places.service.js';
import { sendSuccess, AppError } from '../../utils/response.js';

export async function handleGetAllPlaces(req, res, next) {
  try {
    const { districtId, category, placeType } = req.query;
    const data = await getAllPlaces({
      districtId: typeof districtId === 'string' ? districtId : undefined,
      category: typeof category === 'string' ? category : undefined,
      placeType: typeof placeType === 'string' ? placeType : undefined
    });
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetPlaceById(req, res, next) {
  try {
    const id = String(req.params.id);
    const place = await getPlaceById(id);
    if (!place) {
      throw new AppError(`Place not found: ${id}`, 404, 'PLACE_NOT_FOUND');
    }
    sendSuccess(res, place);
  } catch (err) {
    next(err);
  }
}
