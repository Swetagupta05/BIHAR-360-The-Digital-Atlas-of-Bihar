import React from 'react';
import { ArtCraft } from '../../types';
import { Sparkles, MapPin, Feather, Award, Eye, Scissors } from 'lucide-react';
import { VERIFIED_IMAGES } from '../../data/media';

interface FeatureSujaniProps {
  art: ArtCraft;
  language: 'en' | 'hi';
  onSelectDistrict?: (districtId: string) => void;
  onOpenDetails: () => void;
}

export const FeatureSujani: React.FC<FeatureSujaniProps> = ({
  art,
  language,
  onSelectDistrict,
  onOpenDetails,
}) => {
  return (
    <section className="bg-[#FAF7F2] dark:bg-[#1E2226] border border-[#EADBCE] dark:border-[#33383F] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
      {/* Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EADBCE] dark:border-[#33383F]">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30 text-[#C85A32] text-xs font-bold uppercase tracking-wider">
            <Scissors className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>{language === 'hi' ? 'तिरहुत की सुई-धागा लोक परंपरा' : 'Textile Quilting & Social Narrative of Tirhut'}</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#F3EFEA] tracking-tight">
            {language === 'hi' ? 'सुजनी कढ़ाई एवं रजाई शिल्प' : 'Sujani Embroidery of Bihar'}
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-[#C85A32]">
            {language === 'hi'
              ? 'पुरानी साड़ियों की तहों में उकेरी गई ग्रामीण महिलाओं की मौन डायरी'
              : 'Recycled vintage textiles stitched with rippled running threads into intimate visual journals.'}
          </p>

          <p className="text-xs sm:text-sm text-[#2D3238]/80 dark:text-[#EADBCE]/80 leading-relaxed">
            {language === 'hi'
              ? '‘सु’ (पवित्र / सहज) और ‘जनी’ (जन्म) से मिलकर बना ‘सुजनी’ शब्द मूलतः नवजात शिशु के स्वागत के लिए पुरानी मुलायम धोतियों और साड़ियों को जोड़कर बनाई जाने वाली कंथा या रजाई थी। 1980 के दशक में मुजफ्फरपुर के भूसरा गांव की महिलाओं ने इस घरेलू शिल्प को सामाजिक चेतना और नारी मुक्ति का सशक्त माध्यम बना दिया।'
              : 'Derived from "Su" (sacred / facilitating) and "Jani" (birth), Sujani began as maternal quilts stitched from layered vintage cottons to cradle newborn babies. In the late 20th century, women in Bhusra village near Muzaffarpur transformed this domestic craft into a profound textile documentary of female literacy, domestic reality, and rural rights.'}
          </p>
        </div>

        {/* Geographic & GI Tag Block */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-3 shrink-0">
          <div className="p-3.5 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-xs space-y-1 w-full sm:w-auto">
            <div className="text-[10px] font-bold uppercase text-[#C85A32] tracking-wider">
              {language === 'hi' ? 'भौगोलिक क्षेत्र' : 'Geographic Hearth'}
            </div>
            <div className="font-serif font-bold text-sm text-[#1E2124] dark:text-white">
              Tirhut (Muzaffarpur & Sitamarhi)
            </div>
            {onSelectDistrict && (
              <button
                onClick={() => onSelectDistrict('muzaffarpur')}
                className="text-[#C85A32] hover:underline flex items-center gap-1 text-[11px] font-semibold pt-1"
              >
                <MapPin className="w-3 h-3" />
                <span>{language === 'hi' ? 'मुजफ्फरपुर जिला डोशियर देखें →' : 'Explore Muzaffarpur Dossier →'}</span>
              </button>
            )}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 text-amber-900 dark:text-amber-200 text-xs font-semibold">
            <span>★ GI Application No. 144 Registered</span>
          </div>
        </div>
      </div>

      {/* Main 2-Column Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Textile Detail Image */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#EADBCE] dark:border-[#383D45] aspect-4/3 shadow-sm group">
          <img
            src={VERIFIED_IMAGES.sujani}
            alt="Authentic Sujani running-stitch embroidery detail"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
            <span className="font-serif font-bold text-sm block">Rippled Running Stitches</span>
            <span className="text-[#EADBCE]/80 text-[11px]">Layered recycled cotton with chain-stitch figurative contours.</span>
          </div>
        </div>

        {/* Right Column: Cultural & Technical Insight */}
        <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-lg sm:text-xl text-[#1E2124] dark:text-white">
              {language === 'hi'
                ? 'लहरिया टांका: कपड़े पर बहती नदी की तरह महीन सिलाई'
                : 'The Rippled Poth: Sewing the Texture of Flowing Water'}
            </h4>
            <p>
              Four to five layers of worn, washed cotton saris are spread flat on the floor and basted together with long tacking stitches. The artisan sews thousands of dense, parallel running stitches in white thread across the entire background. This creates an undulating, tactile surface called the <em>Poth</em>, giving the quilt its soft thermal cushioning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-1">
              <strong className="text-xs font-bold text-[#C85A32] block">
                {language === 'hi' ? 'जंजीरा टांका (रूपरेखा):' : 'Chain Stitch Outlines:'}
              </strong>
              <p className="text-[11px] text-[#2D3238]/80 dark:text-[#EADBCE]/80">
                Bold black or navy threads trace the silhouettes of trees, animals, and village women engaged in daily life.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-1">
              <strong className="text-xs font-bold text-[#C85A32] block">
                {language === 'hi' ? 'रंगीन भराव (कशीदा):' : 'Vibrant Filling Stitches:'}
              </strong>
              <p className="text-[11px] text-[#2D3238]/80 dark:text-[#EADBCE]/80">
                Fine parallel running stitches in crimson, marigold, and forest green fill the interior spaces of figures.
              </p>
            </div>
          </div>

          {/* Revival & Collective note */}
          <div className="p-4 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] flex items-center justify-between gap-4">
            <div className="text-xs">
              <strong className="text-[#1E2124] dark:text-white block font-serif">
                Bhusra Mahila Vikas Samiti & Nirmala Devi (National Awardee)
              </strong>
              <span className="text-[#2D3238]/70 dark:text-[#EADBCE]/70 text-[11px]">
                Over 600 rural women in Muzaffarpur earn direct livelihoods through this collective.
              </span>
            </div>
            <button
              onClick={onOpenDetails}
              className="shrink-0 px-3.5 py-1.5 rounded-lg bg-[#C85A32] text-white font-semibold text-xs hover:bg-[#B34D29] transition-all flex items-center gap-1"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'विस्तार से देखें' : 'View Details'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
