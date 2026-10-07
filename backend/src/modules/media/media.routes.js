import { Router } from 'express';
import { handleGetAllMediaAssets, handleGetMediaAssetById } from './media.controller.js';

export const mediaRouter = Router();

mediaRouter.get('/', handleGetAllMediaAssets);
mediaRouter.get('/:id', handleGetMediaAssetById);
