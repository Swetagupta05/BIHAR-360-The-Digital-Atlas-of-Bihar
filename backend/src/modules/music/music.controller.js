import { getAllMusicTracks, getMusicTrackById } from './music.service.js';
import { sendSuccess, AppError } from '../../utils/response.js';

export async function handleGetAllMusicTracks(req, res, next) {
  try {
    const { category, language, districtId } = req.query;
    const data = await getAllMusicTracks({
      category: typeof category === 'string' ? category : undefined,
      language: typeof language === 'string' ? language : undefined,
      districtId: typeof districtId === 'string' ? districtId : undefined
    });
    sendSuccess(res, data, 200, { total: data.length });
  } catch (err) {
    next(err);
  }
}

export async function handleGetMusicTrackById(req, res, next) {
  try {
    const id = String(req.params.id);
    const track = await getMusicTrackById(id);
    if (!track) {
      throw new AppError(`Music track not found: ${id}`, 404, 'MUSIC_TRACK_NOT_FOUND');
    }
    sendSuccess(res, track);
  } catch (err) {
    next(err);
  }
}
