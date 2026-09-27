import React from 'react';
import { Play, ListMusic, Sparkles, ArrowRight } from 'lucide-react';
import { MusicCollection, MusicTrack } from '../../types';
import { useMusicPlayer } from '../../context/MusicPlayerContext';

interface MusicCollectionsSectionProps {
  collections: MusicCollection[];
  tracks: MusicTrack[];
  language: 'en' | 'hi';
  onSelectTrackDetail: (track: MusicTrack) => void;
}

export const MusicCollectionsSection: React.FC<MusicCollectionsSectionProps> = ({
  collections,
  tracks,
  language,
  onSelectTrackDetail
}) => {
  const { playTrack, currentTrack, isPlaying } = useMusicPlayer();

  const handlePlayCollection = (collection: MusicCollection) => {
    const collectionTracks = tracks.filter(t => collection.trackIds.includes(t.id));
    if (collectionTracks.length > 0) {
      playTrack(collectionTracks[0], collectionTracks);
    }
  };

  return (
    <section id="music-collections-section" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <ListMusic className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
            <span>{language === 'hi' ? 'विशेष संग्रह' : 'Curated Playlists'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'थीम आधारित संगीत संग्रह' : 'Curated Collections'}
          </h2>

          <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'अनुष्ठानों, शास्त्रीय दरबारों, लोक गाथाओं और क्षेत्रीय विशिष्टताओं के अनुसार संकलित प्रामाणिक ऑडियो संग्रह।'
              : 'Thematic pathways curated exclusively from verified historical recordings and documented oral traditions.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map(col => {
          const colTracks = tracks.filter(t => col.trackIds.includes(t.id));
          const isPlayingThisCollection =
            currentTrack && col.trackIds.includes(currentTrack.id) && isPlaying;

          return (
            <div
              key={col.id}
              className="p-6 rounded-3xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#8C8276] dark:text-[#A89F93]">
                  <span className="uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43] font-semibold">
                    {col.category.toUpperCase()}
                  </span>
                  <span>{colTracks.length} recordings</span>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#F5F1E8]">
                  {language === 'hi' ? col.hindiTitle : col.title}
                </h3>

                <p className="font-serif text-xs text-[#8C8276] dark:text-[#A89F93]">
                  {col.subtitle}
                </p>

                <p className="text-xs text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed line-clamp-3">
                  {col.description}
                </p>
              </div>

              {/* Sample Track Chips */}
              <div className="space-y-1.5 pt-3 border-t border-[#F0E8DD] dark:border-[#2E343B]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] block">
                  Included in this collection:
                </span>
                <div className="space-y-1">
                  {colTracks.slice(0, 3).map(track => (
                    <div
                      key={track.id}
                      onClick={() => playTrack(track, colTracks)}
                      className="p-2 rounded-xl bg-[#FBF9F5] dark:bg-[#16191D] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] cursor-pointer text-xs flex items-center justify-between transition-colors"
                    >
                      <span className="truncate text-[#1E2124] dark:text-[#F5F1E8]">
                        {track.title}
                      </span>
                      <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#A89F93] ml-2 flex-shrink-0">
                        {track.durationMinutes}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handlePlayCollection(col)}
                className={`w-full py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors ${
                  isPlayingThisCollection
                    ? 'bg-[#C85A32] text-white shadow-xs'
                    : 'bg-[#1E2124] dark:bg-[#F5F1E8] text-white dark:text-[#0F1113] hover:bg-[#C85A32] dark:hover:bg-[#C85A32] dark:hover:text-white'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>
                  {isPlayingThisCollection
                    ? 'Playing This Collection'
                    : language === 'hi'
                    ? 'संग्रह सुनें'
                    : 'Play Collection'}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
