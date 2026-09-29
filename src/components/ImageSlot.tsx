import React, { useState } from 'react';
import { ImageOff, Sparkles } from 'lucide-react';
import type { ImageSlotData } from '../data/huni-master-data';
import { resolveAsset } from '../utils/asset';

interface ImageSlotProps {
  slot: ImageSlotData;
  aspect?: 'square' | 'portrait' | 'video' | 'banner' | 'wide' | 'auto';
  className?: string;
  badgeLabel?: string;
  hideCaption?: boolean;
  objectPosition?: string;
  fit?: 'cover' | 'contain';
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  slot,
  aspect = 'portrait',
  className = '',
  badgeLabel = 'HDC Fashion',
  hideCaption = false,
  objectPosition = 'object-center',
  fit = 'cover',
}) => {
  const [hasError, setHasError] = useState(false);

  const aspectStyles = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    video: 'aspect-[16/9]',
    wide: 'aspect-[4/3]',
    banner: 'aspect-[21/9]',
    auto: '',
  }[aspect];

  // If real image source is available and no loading error
  if (slot.src && !hasError) {
    return (
      <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-transparent ${aspectStyles} ${className}`}>
        <img
          src={resolveAsset(slot.src)}
          alt={slot.alt}
          loading="lazy"
          onError={() => setHasError(true)}
          className={`w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${objectPosition} transition-transform duration-500 hover:scale-105`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/90 border border-dashed border-slate-300/80 flex flex-col items-center justify-center p-4 text-center select-none shadow-sm transition-all hover:border-[#999de9]/50 hover:shadow-md ${aspectStyles} ${className}`}
      role="img"
      aria-label={`${slot.alt} (Vị trí hình ảnh HUNI)`}
    >
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-[92%]">
        <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200/80 flex items-center justify-center text-slate-400 mb-2.5 transition-transform duration-300 group-hover:scale-110">
          <ImageOff className="w-4 h-4 text-slate-400" />
        </div>
        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-200/80 text-[10px] font-semibold text-slate-900 mb-1.5 uppercase tracking-wider">
          <Sparkles className="w-2.5 h-2.5 text-slate-700" />
          {badgeLabel}
        </div>
        <p className="text-xs font-semibold text-slate-900 leading-snug line-clamp-2">
          {slot.alt}
        </p>
      </div>
    </div>
  );
};
