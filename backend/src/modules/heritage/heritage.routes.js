import { Router } from 'express';
import { handleGetAllHeritageSites, handleGetHeritageSiteById } from './heritage.controller.js';

export const heritageRouter = Router();

heritageRouter.get('/', handleGetAllHeritageSites);
heritageRouter.get('/:id', handleGetHeritageSiteById);
