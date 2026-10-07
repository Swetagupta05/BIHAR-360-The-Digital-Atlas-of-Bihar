import { getAllArtsCrafts, getArtCraftById } from './arts.service.js';
import { sendSuccess, AppError } from '../../utils/response.js';

export async function handleGetAllArtsCrafts(req, res, next) {
  try {
    const { districtId, category, giTag } = req.query;
    const data = await getAllArtsCrafts({
      districtId: typeof districtId === 'string' ? districtId : undefined,
      category: typeof category === 'string' ? category : undefined,
      giTag: giTag === 'true' ? true : giTag === 'false' ? false : undefined
    });
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetArtCraftById(req, res, next) {
  try {
    const id = String(req.params.id);
    const art = await getArtCraftById(id);
    if (!art) {
      throw new AppError(`Art/craft not found: ${id}`, 404, 'ART_CRAFT_NOT_FOUND');
    }
    sendSuccess(res, art);
  } catch (err) {
    next(err);
  }
}
