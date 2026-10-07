import { Router } from 'express';
import { handleGetAllPlaces, handleGetPlaceById } from './places.controller.js';

export const placesRouter = Router();

placesRouter.get('/', handleGetAllPlaces);
placesRouter.get('/:id', handleGetPlaceById);
