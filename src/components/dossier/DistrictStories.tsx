import React from 'react';
import { District } from '../../types';
import { getDistrictStories } from '../../data/districtDossiers';
import { Feather, BookOpen, Quote } from 'lucide-react';

interface DistrictStoriesProps {
  district: District;
  language: 'en' | 'hi';
}

export const DistrictStories: React.FC<DistrictStoriesProps> = ({ district, language }) => {
  const stories = getDistrictStories(district.slug, district.name, district.history);

  if (stories.length === 0) return null;

  return (
    <section 
      id="stories" 
      aria-labelledby="stories-heading"
      className="py-12 sm:py-16 px-4 sm:px-8 border-b border-[#EADBCE] dark:border-[#2D3238] bg-[#F7F4EE] dark:bg-[#151719] transition-colors"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
            <Feather className="w-4 h-4 text-[#C85A32]" />
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#C85A32]">
              {language === 'hi' ? 'माटी की गाथाएँ' : 'Literary & Oral Memory'}
            </span>
          </div>
          <h2 
            id="stories-heading" 
            className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#FBF9F5] tracking-tight"
          >
            {language === 'hi' ? `${district.hindiName} से जुड़ी कहानियाँ` : `Stories from ${district.name}`}
          </h2>
          <p className="text-sm sm:text-base text-[#736B63] dark:text-[#9EA8B3] mt-2">
            Narratives etched into the soil, river crossings, folklore, and literary consciousness of Bihar.
          </p>
        </div>

        {/* Story Narratives */}
        <div className="space-y-8">
          {stories.map((story, idx) => (
            <article 
              key={idx}
              className="bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl p-6 sm:p-9 shadow-xs hover:border-[#C85A32]/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-xs font-bold uppercase tracking-wider">
                  {story.tag}
                </span>

                {story.source && (
                  <span className="text-[11px] text-[#A3988C] dark:text-[#9EA8B3] font-serif italic">
                    Source: {story.source}
                  </span>
                )}
              </div>

              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#FBF9F5] mb-1.5 leading-snug">
                {story.title}
              </h3>

              {story.subtitle && (
                <p className="font-serif text-sm sm:text-base text-[#C85A32] italic mb-4">
                  {story.subtitle}
                </p>
              )}

              <p className="text-base text-[#463F38] dark:text-[#D1C7BD] leading-relaxed">
                {story.narrative}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
