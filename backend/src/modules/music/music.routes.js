import { Router } from 'express';
import { handleGetAllMusicTracks, handleGetMusicTrackById } from './music.controller.js';

export const musicRouter = Router();

musicRouter.get('/', handleGetAllMusicTracks);
musicRouter.get('/:id', handleGetMusicTrackById);
