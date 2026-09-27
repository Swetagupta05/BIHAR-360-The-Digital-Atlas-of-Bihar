import React from 'react';
import { Music, Play, Volume2, Sparkles, Feather, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { LanguageProfile } from '../../types';
import { useMusicPlayer } from '../../context/MusicPlayerContext';
import { MUSIC_TRACKS } from '../../data/music';

interface OralTraditionsSectionProps {
  languages: LanguageProfile[];
  language: 'en' | 'hi';
  onSelectLanguage: (lang: LanguageProfile) => void;
  onNavigateTab?: (tab: string) => void;
}

interface HighlightedOralTradition {
  id: string;
  title: string;
  hindiTitle: string;
  languageName: string;
  languageId: string;
  region: string;
  genre: string;
  description: string;
  culturalContext: string;
  musicTrackId?: string;
  iconSymbol: string;
}

const ORAL_TRADITIONS_CATALOG: HighlightedOralTradition[] = [
  {
    id: 'bidesiya-theatre',
    title: 'Bidesiya: The Ballad of Migration',
    hindiTitle: 'बिदेसिया: विस्थापन और विरह का लोकनाट्य',
    languageName: 'Bhojpuri',
    languageId: 'bhojpuri',
    region: 'Bhojpur & Saran',
    genre: 'Folk Theatre & Migration Ballad',
    description:
      'Created by legendary playwright Bhikhari Thakur in the 1910s, Bidesiya articulates the agony of rural men leaving for distant cities (Calcutta) and the loneliness of the women left behind in Bihar villages.',
    culturalContext:
      'Staged across open fields on moonlit nights, combining high social critique with vibrant music, cross-dressing actors, and emotional dialogues.',
    musicTrackId: 'bhikhari-thakur-bidesiya',
    iconSymbol: '🎭'
  },
  {
    id: 'behula-bishahari',
    title: 'Behula-Bishahari Gatha: The Serpent Epic',
    hindiTitle: 'बिहुला-विषहरी गाथा: अंग का लोक-महाकाव्य',
    languageName: 'Angika',
    languageId: 'angika',
    region: 'Anga (Bhagalpur & Banka)',
    genre: 'Ritual Oral Ballad & Folk Drama',
    description:
      'A venerable oral epic chronicling Behula’s fearless voyage across the celestial river to reclaim the life of her husband Bala Lakhindar from the serpent goddess Manasa.',
    culturalContext:
      'Recited by traditional bards during the Shravan-Bhadrapada monsoon festival, accompanied by dhak drums and depicted in Manjusha scroll art.',
    musicTrackId: 'anga-manjusha-behula',
    iconSymbol: '🐍'
  },
  {
    id: 'lorikayan-epic',
    title: 'Lorikayan: The Ahir Folk Epic',
    hindiTitle: 'लोरिकायन: शौर्य और न्याय की लोकगाथा',
    languageName: 'Magahi & Bhojpuri',
    languageId: 'magahi',
    region: 'Magadh & Bhojpur',
    genre: 'Heroic Martial Epic',
    description:
      'The sweeping epic of the pastoral folk hero Veer Lorik, detailing his heroic battles, moral codes, love for Manjari, and protection of rural communities against tyrannical chieftains.',
    culturalContext:
      'Chanted in extended ballad recitations by traditional storytellers playing the dholak and kartal across the Gangetic plains.',
    iconSymbol: '⚔️'
  },
  {
    id: 'samdaun-farewell',
    title: 'Samdaun: The Bridal Farewell Hymn',
    hindiTitle: 'समदौन: मिथिला का अश्रुपूर्ण विदाई गीत',
    languageName: 'Maithili',
    languageId: 'maithili',
    region: 'Mithila',
    genre: 'Life-Cycle Women’s Ritual Song',
    description:
      'A deeply moving song tradition sung by women at the moment a newlywed bride departs her maternal threshold, invoking Sita’s departure from Janakpur.',
    culturalContext:
      'Transmitted orally across generations of women without written musical scores, expressing the profound maternal tenderness and grief of separation.',
    musicTrackId: 'samdaun-doli-uthalo',
    iconSymbol: '🌸'
  },
  {
    id: 'raja-salhesh',
    title: 'Raja Salhesh: Folk Protector of the Forest',
    hindiTitle: 'राजा सलहेस: लोक-रक्षक और न्याय की गाथा',
    languageName: 'Maithili & Angika',
    languageId: 'maithili',
    region: 'Mithila & Kosi',
    genre: 'Folk Hero Epic & Narrative Drama',
    description:
      'The foundational hero-deity epic of the Dalit and Dusadh communities in Mithila, venerating King Salhesh for his bravery, devotion to justice, and protection of pastoral flora and fauna.',
    culturalContext:
      'Commemorated in clay terracotta relief shrines and painted murals, sung with ritual cymbals during Salhesh festivals.',
    iconSymbol: '👑'
  },
  {
    id: 'kajari-monsoon',
    title: 'Kajari & Jhumar: Melodies of the Rains',
    hindiTitle: 'कजरी एवं झूमर: सावन की रिमझिम फुहारें',
    languageName: 'Bhojpuri & Magahi',
    languageId: 'bhojpuri',
    region: 'Western & Central Bihar',
    genre: 'Seasonal Monsoon Ballad',
    description:
      'Poetic songs sung during the lunar month of Shravan celebrating dark rain clouds, swinging on tree swings (jhoola), and the romance of reunion amidst rain-drenched paddy fields.',
    culturalContext:
      'Performed in village courtyards during the monsoon season, rich in earthy vernacular metaphors of fertility and renewal.',
    musicTrackId: 'bhojpuri-kajari-barsan',
    iconSymbol: '🌧️'
  }
];

export const OralTraditionsSection: React.FC<OralTraditionsSectionProps> = ({
  languages,
  language,
  onSelectLanguage,
  onNavigateTab
}) => {
  const { playTrack, currentTrack, isPlaying } = useMusicPlayer();

  const handlePlayTraditionTrack = (trackId: string) => {
    const track = MUSIC_TRACKS.find(t => t.id === trackId);
    if (track) {
      playTrack(track);
    } else if (onNavigateTab) {
      onNavigateTab('music');
    }
  };

  return (
    <section id="oral-traditions-section" className="space-y-8 mb-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/20 border border-[#C85A32]/30 text-[#C85A32] dark:text-[#E06C43] text-xs font-semibold uppercase tracking-wider">
            <Feather className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'वाचिक परंपराएं एवं लोकनाट्य' : 'Living Oral Epics & Drama'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi'
              ? 'कंठस्थ धरोहर: गाथाएं, विदाई और रंगमंच'
              : 'Voices that Endure: Oral Traditions of Bihar'}
          </h2>

          <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'कागज़ पर लिखे जाने से सदियों पहले, बिहार की भाषाएं लोक-कथाकारों के कंठ, महिलाओं के मंगल गीतों और ग्रामीण अखाड़ों के नाटकों में जीवित रहीं।'
              : 'Long before ink touched paper, Bihar’s languages were preserved in oral epics, women’s ritual songs, and open-air theatrical performances passed down through generations.'}
          </p>
        </div>

        {/* Music Connection Link */}
        {onNavigateTab && (
          <button
            onClick={() => onNavigateTab('music')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] hover:underline"
          >
            <Music className="w-4 h-4" />
            <span>{language === 'hi' ? 'संगीत कक्ष में सुनें' : 'Explore in Music Hall'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Grid of Oral Traditions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ORAL_TRADITIONS_CATALOG.map(item => {
          const associatedLang = languages.find(l => l.id === item.languageId);
          const hasTrack = !!item.musicTrackId;
          const isCurrentPlaying =
            hasTrack && currentTrack?.id === item.musicTrackId && isPlaying;

          return (
            <div
              key={item.id}
              className="rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#16191D] p-6 flex flex-col justify-between hover:shadow-md transition-all space-y-4 group"
            >
              <div className="space-y-3">
                {/* Header Tag Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-2xl">{item.iconSymbol}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-[#C85A32]/10 text-[#C85A32] font-semibold">
                      {item.languageName}
                    </span>
                    <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#A89F93]">
                      {item.region}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors">
                    {language === 'hi' ? item.hindiTitle : item.title}
                  </h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] block">
                    {item.genre}
                  </span>
                </div>

                <p className="text-xs text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
                  {item.description}
                </p>

                {/* Cultural Context Callout */}
                <div className="p-3 rounded-xl bg-[#FBF9F5] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-[11px] text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
                  <strong className="text-[#1E2124] dark:text-[#F5F1E8] font-semibold block mb-0.5">
                    {language === 'hi' ? 'सांस्कृतिक परिवेश' : 'Living Performance'}
                  </strong>
                  {item.culturalContext}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-3 border-t border-[#F0E8DD] dark:border-[#2E343B] flex items-center justify-between gap-2">
                {associatedLang ? (
                  <button
                    onClick={() => onSelectLanguage(associatedLang)}
                    className="text-xs font-semibold text-[#5A524A] dark:text-[#C8BFB4] hover:text-[#C85A32] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{associatedLang.name}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                ) : (
                  <span className="text-xs text-[#8C8276]">{item.languageName}</span>
                )}

                {hasTrack && (
                  <button
                    onClick={() => handlePlayTraditionTrack(item.musicTrackId!)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      isCurrentPlaying
                        ? 'bg-[#C85A32] text-white shadow-xs'
                        : 'bg-[#F5EFE6] dark:bg-[#252A30] text-[#C85A32] dark:text-[#E06C43] hover:bg-[#C85A32] hover:text-white'
                    }`}
                  >
                    {isCurrentPlaying ? (
                      <>
                        <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                        <span>Playing</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Hear Track</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
