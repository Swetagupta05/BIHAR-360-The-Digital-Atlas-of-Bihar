import { Router } from 'express';
import { handleGetAllArtsCrafts, handleGetArtCraftById } from './arts.controller.js';

export const artsRouter = Router();

artsRouter.get('/', handleGetAllArtsCrafts);
artsRouter.get('/:id', handleGetArtCraftById);
