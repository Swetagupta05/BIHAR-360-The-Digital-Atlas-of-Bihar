import { getAllMediaAssets, getMediaAssetById } from './media.service.js';
import { sendSuccess, AppError } from '../../utils/response.js';

export async function handleGetAllMediaAssets(_req, res, next) {
  try {
    const data = await getAllMediaAssets();
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetMediaAssetById(req, res, next) {
  try {
    const id = String(req.params.id);
    const media = await getMediaAssetById(id);
    if (!media) {
      throw new AppError(`Media asset not found: ${id}`, 404, 'MEDIA_ASSET_NOT_FOUND');
    }
    sendSuccess(res, media);
  } catch (err) {
    next(err);
  }
}
