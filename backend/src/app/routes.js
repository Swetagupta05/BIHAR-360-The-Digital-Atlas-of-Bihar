import { Router } from 'express';
import { healthRouter } from '../modules/health/health.routes.js';
import { districtsRouter } from '../modules/districts/districts.routes.js';
import { placesRouter } from '../modules/places/places.routes.js';
import { heritageRouter } from '../modules/heritage/heritage.routes.js';
import { personalitiesRouter } from '../modules/personalities/personalities.routes.js';
import { cuisineRouter } from '../modules/cuisine/cuisine.routes.js';
import { festivalsRouter } from '../modules/festivals/festivals.routes.js';
import { artsRouter } from '../modules/arts/arts.routes.js';
import { languagesRouter } from '../modules/languages/languages.routes.js';
import { musicRouter } from '../modules/music/music.routes.js';
import { historyRouter } from '../modules/history/history.routes.js';
import { journeysRouter } from '../modules/journeys/journeys.routes.js';
import { translationsRouter } from '../modules/translations/translations.routes.js';
import { mediaRouter } from '../modules/media/media.routes.js';
import { discoveryRouter } from '../modules/discovery/discovery.routes.js';

export const apiRouter = Router();

// Mount API v1 module routes
apiRouter.use('/health', healthRouter);
apiRouter.use('/districts', districtsRouter);
apiRouter.use('/places', placesRouter);
apiRouter.use('/heritage', heritageRouter);
apiRouter.use('/personalities', personalitiesRouter);
apiRouter.use('/foods', cuisineRouter);
apiRouter.use('/cuisine', cuisineRouter);
apiRouter.use('/festivals', festivalsRouter);
apiRouter.use('/arts', artsRouter);
apiRouter.use('/languages', languagesRouter);
apiRouter.use('/music', musicRouter);
apiRouter.use('/history', historyRouter);
apiRouter.use('/journeys', journeysRouter);
apiRouter.use('/translations', translationsRouter);
apiRouter.use('/media', mediaRouter);
apiRouter.use('/discovery', discoveryRouter);
