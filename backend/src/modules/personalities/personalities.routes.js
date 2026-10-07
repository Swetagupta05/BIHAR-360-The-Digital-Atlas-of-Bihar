import { Router } from 'express';
import { handleGetAllPersonalities, handleGetPersonalityById } from './personalities.controller.js';

export const personalitiesRouter = Router();

personalitiesRouter.get('/', handleGetAllPersonalities);
personalitiesRouter.get('/:id', handleGetPersonalityById);
