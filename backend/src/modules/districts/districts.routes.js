import { Router } from 'express';
import { handleGetAllDistricts, handleGetDistrictById } from './districts.controller.js';

export const districtsRouter = Router();

districtsRouter.get('/', handleGetAllDistricts);
districtsRouter.get('/:id', handleGetDistrictById);
