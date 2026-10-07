import { Router } from 'express';
import { handleGetAllFestivals, handleGetFestivalById } from './festivals.controller.js';

export const festivalsRouter = Router();

festivalsRouter.get('/', handleGetAllFestivals);
festivalsRouter.get('/:id', handleGetFestivalById);
