import { Router } from 'express';
import {
  handleGetInterfaceLanguages,
  handleGetBiharLanguages,
  handleGetBiharLanguageById,
  handleGetScripts,
  handleGetScriptById
} from './languages.controller.js';

export const languagesRouter = Router();

languagesRouter.get('/interface', handleGetInterfaceLanguages);
languagesRouter.get('/bihar', handleGetBiharLanguages);
languagesRouter.get('/bihar/:id', handleGetBiharLanguageById);
languagesRouter.get('/scripts', handleGetScripts);
languagesRouter.get('/scripts/:id', handleGetScriptById);
