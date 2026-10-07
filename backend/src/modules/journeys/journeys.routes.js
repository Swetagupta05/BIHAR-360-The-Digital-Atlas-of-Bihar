import { Router } from 'express';
import { handleGetAllJourneys, handleGetJourneyById } from './journeys.controller.js';

export const journeysRouter = Router();

journeysRouter.get('/', handleGetAllJourneys);
journeysRouter.get('/:id', handleGetJourneyById);
