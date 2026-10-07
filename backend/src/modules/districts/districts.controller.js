import { getAllDistricts, getDistrictById } from './districts.service.js';
import { sendSuccess, AppError } from '../../utils/response.js';

export async function handleGetAllDistricts(req, res, next) {
  try {
    const { region, division } = req.query;
    const data = await getAllDistricts({
      region: typeof region === 'string' ? region : undefined,
      division: typeof division === 'string' ? division : undefined
    });
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetDistrictById(req, res, next) {
  try {
    const id = String(req.params.id);
    const district = await getDistrictById(id);
    if (!district) {
      throw new AppError(`District not found: ${id}`, 404, 'DISTRICT_NOT_FOUND');
    }
    sendSuccess(res, district);
  } catch (err) {
    next(err);
  }
}
