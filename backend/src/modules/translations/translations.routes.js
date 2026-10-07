import { Router } from 'express';
import { handleGetTranslations } from './translations.controller.js';

export const translationsRouter = Router();

translationsRouter.get('/:langCode', handleGetTranslations);
translationsRouter.get('/:langCode/:section', handleGetTranslations);
