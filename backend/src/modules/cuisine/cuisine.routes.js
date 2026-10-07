import { Router } from 'express';
import { handleGetAllFoods, handleGetFoodById } from './cuisine.controller.js';

export const cuisineRouter = Router();

cuisineRouter.get('/', handleGetAllFoods);
cuisineRouter.get('/:id', handleGetFoodById);
