import {
  getInterfaceLanguages,
  getBiharLanguages,
  getBiharLanguageById,
  getScripts,
  getScriptById
} from './languages.service.js';
import { sendSuccess, AppError } from '../../utils/response.js';

export async function handleGetInterfaceLanguages(_req, res, next) {
  try {
    const data = await getInterfaceLanguages();
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetBiharLanguages(_req, res, next) {
  try {
    const data = await getBiharLanguages();
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetBiharLanguageById(req, res, next) {
  try {
    const id = String(req.params.id);
    const lang = await getBiharLanguageById(id);
    if (!lang) {
      throw new AppError(`Bihar language profile not found: ${id}`, 404, 'BIHAR_LANGUAGE_NOT_FOUND');
    }
    sendSuccess(res, lang);
  } catch (err) {
    next(err);
  }
}

export async function handleGetScripts(_req, res, next) {
  try {
    const data = await getScripts();
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetScriptById(req, res, next) {
  try {
    const id = String(req.params.id);
    const script = await getScriptById(id);
    if (!script) {
      throw new AppError(`Script profile not found: ${id}`, 404, 'SCRIPT_NOT_FOUND');
    }
    sendSuccess(res, script);
  } catch (err) {
    next(err);
  }
}
