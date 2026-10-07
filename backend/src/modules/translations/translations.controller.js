import { getTranslationsForLanguage } from './translations.service.js';
import { sendSuccess } from '../../utils/response.js';

export async function handleGetTranslations(req, res, next) {
  try {
    const langCode = String(req.params.langCode || 'en');
    const section = req.params.section ? String(req.params.section) : undefined;
    const data = await getTranslationsForLanguage(langCode, section);
    sendSuccess(res, data);
  } catch (err) {
    next(err);
  }
}
