import { getAllHeritageSites, getHeritageSiteById } from './heritage.service.js';
import { sendSuccess, AppError } from '../../utils/response.js';

export async function handleGetAllHeritageSites(req, res, next) {
  try {
    const { districtId, isUnesco } = req.query;
    const data = await getAllHeritageSites({
      districtId: typeof districtId === 'string' ? districtId : undefined,
      isUnesco: isUnesco === 'true' ? true : isUnesco === 'false' ? false : undefined
    });
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetHeritageSiteById(req, res, next) {
  try {
    const id = String(req.params.id);
    const site = await getHeritageSiteById(id);
    if (!site) {
      throw new AppError(`Heritage site not found: ${id}`, 404, 'HERITAGE_SITE_NOT_FOUND');
    }
    sendSuccess(res, site);
  } catch (err) {
    next(err);
  }
}
