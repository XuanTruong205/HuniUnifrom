import React from 'react';
import { PARTNER_LOGOS, type PartnerLogoItem } from '../../data/partner-logos';
import {
  Award,
  Flag,
  Shield,
  GraduationCap,
  Layers,
  Sparkles,
  Building2,
  Gem,
  Radio,
  Sun,
  Flame,
  Crown,
} from 'lucide-react';

const LOGO_ICONS: Record<string, React.ElementType> = {
  'star-wings': Award,
  'golf-flag': Flag,
  'shield-crest': Shield,
  'edu-cap': GraduationCap,
  'squares-techcom': Layers,
  'diamond-vcb': Gem,
  'petals-fpt': Flame,
  'quotes-viettel': Radio,
  'star-mb': Sparkles,
  'sun-lotus': Sun,
  'orbit-vnpt': Building2,
  'crown-hdc': Crown,
};

export const PartnerMarqueeStrip: React.FC = () => {
  const marqueeItems = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <div className="py-7 bg-[#F5EFE6] border-y border-[#E8DFD0] overflow-hidden relative select-none">
      {/* Title above marquee */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 mb-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D4A373]" />
          <span className="text-xs font-semibold text-[#1E1C19] tracking-wide">
            Đối tác đồng hành cùng HDC Uniform
          </span>
        </div>
        <span className="text-xs text-[#7A7164]">
          Hiệp hội Doanh nhân • Sự kiện thể thao quốc gia • Trường học & Doanh nghiệp
        </span>
      </div>

      {/* Masked Marquee Scroller */}
      <div
        className="w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused] py-1">
          {marqueeItems.map((item, idx) => {
            const Icon = LOGO_ICONS[item.iconType] || Building2;
            return (
              <div
                key={`${item.id}-${idx}`}
                className="group relative h-16 px-4.5 shrink-0 flex items-center gap-3.5 rounded-xl bg-white/80 border border-[#ECE4D8] shadow-2xs hover:shadow-xs hover:border-[#DECBB7] hover:bg-white transition-all duration-200 cursor-pointer overflow-hidden"
                title={`${item.name} - ${item.category}`}
              >
                {/* Organization Icon / Logo Badge */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-200"
                  style={{
                    backgroundColor: `${item.accentColor}12`,
                    borderColor: `${item.accentColor}25`,
                    color: item.accentColor,
                  }}
                >
                  <Icon className="w-4.5 h-4.5" />
                </div>

                {/* Name & Sector Details */}
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs sm:text-[13px] text-[#1E1C19] whitespace-nowrap">
                      {item.shortName}
                    </span>
                    {item.catalogueFeatured && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] shrink-0" title="Dự án thực tế từ Catalogue" />
                    )}
                  </div>
                  <span className="text-[11px] text-[#7A7164] whitespace-nowrap line-clamp-1 mt-0.5">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
