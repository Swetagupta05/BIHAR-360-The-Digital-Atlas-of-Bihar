import { getAllFoods, getFoodById } from './cuisine.service.js';
import { sendSuccess, AppError } from '../../utils/response.js';

export async function handleGetAllFoods(req, res, next) {
  try {
    const { region, originDistrictId, isVegetarian, giTag } = req.query;
    const data = await getAllFoods({
      region: typeof region === 'string' ? region : undefined,
      originDistrictId: typeof originDistrictId === 'string' ? originDistrictId : undefined,
      isVegetarian: isVegetarian === 'true' ? true : isVegetarian === 'false' ? false : undefined,
      giTag: giTag === 'true' ? true : giTag === 'false' ? false : undefined
    });
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetFoodById(req, res, next) {
  try {
    const id = String(req.params.id);
    const food = await getFoodById(id);
    if (!food) {
      throw new AppError(`Food not found: ${id}`, 404, 'FOOD_NOT_FOUND');
    }
    sendSuccess(res, food);
  } catch (err) {
    next(err);
  }
}
