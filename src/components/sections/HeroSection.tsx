import React from 'react';
import { motion } from 'framer-motion';
import { resolveAsset } from '../../utils/asset';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Layers,
  Award,
} from 'lucide-react';

const TRUST_PILLARS = [
  {
    icon: Award,
    title: '10+ Năm Kinh Nghiệm',
    subtitle: 'Năng lực sản xuất linh hoạt từ đơn nhỏ đến lớn',
  },
  {
    icon: Leaf,
    title: 'Chất Liệu Xanh Tự Nhiên',
    subtitle: 'Sợi Sen, Chuối, Xơ Dừa, Bamboo, Modal an toàn',
  },
  {
    icon: Layers,
    title: 'Công Nghệ Seamless',
    subtitle: 'Dán ép nhiệt phẳng phiu, siêu êm nhẹ không ma sát',
  },
  {
    icon: ShieldCheck,
    title: 'Cam Kết Tiến Độ & KCS',
    subtitle: 'May mẫu miễn phí, giao hàng chuẩn hẹn toàn quốc',
  },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#08182F] text-white">
      {/* ========================================================= */}
      {/* 1. HERO BACKGROUND IMAGE & PRECISE DIRECTIONAL GRADIENT   */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={resolveAsset('/images/catalog/page00_obj29_1000x666.jpg')}
          alt="HDC Uniform - Thời Trang Đồng Phục Doanh Nghiệp"
          className="w-full h-full object-cover object-[80%_center] md:object-[70%_center] scale-100"
          loading="eager"
        />

        {/* Gradient chính xác theo yêu cầu: mạnh ở bên trái và giảm dần về bên phải */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(8,24,47,0.95) 0%, rgba(8,24,47,0.78) 35%, rgba(8,24,47,0.2) 70%, rgba(8,24,47,0) 100%)',
          }}
        />

        {/* Lớp bóng nhẹ ở chân hero để chuyển mượt xuống thanh USP */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08182F] to-transparent pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN HERO CONTENT CONTAINER (GENEROUS SPACING)         */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 flex flex-col justify-center min-h-[580px] sm:min-h-[620px] lg:min-h-[660px]">
        <div className="max-w-2xl">
          {/* Eyebrow / Tag: 12-13px, font-weight 500, letter-spacing nhẹ, không quá nổi */}
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-[12px] sm:text-[13px] font-medium text-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-[#E7B936]" />
            <span className="tracking-wide">Thời trang đồng phục doanh nghiệp cao cấp</span>
          </div>

          {/* H1: 50-58px desktop, 34-40px mobile, line-height 1.05-1.15, font-weight 600-700 */}
          <h1 className="text-[34px] sm:text-[42px] lg:text-[54px] font-bold tracking-tight leading-[1.1] text-white">
            Phong Cách <br />
            <span className="text-[#E7B936]">Tạo Thành Công</span>
          </h1>

          {/* Description: 16-18px, line-height 1.6, max-width 500-560px */}
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] lg:text-[17px] text-slate-200 leading-[1.6] max-w-[540px] font-normal drop-shadow-xs">
            Giải pháp đồng phục doanh nghiệp toàn diện. Tiên phong ứng dụng chất liệu sinh thái tự nhiên, kỹ thuật Seamless không đường may và họa tiết di sản văn hóa bản địa.
          </p>

          {/* CTAs: Primary vàng, Secondary outline, cao 46-50px, radius 8-10px */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5">
            {/* Primary CTA */}
            <a
              href="#catalog-showcase"
              className="inline-flex items-center justify-center h-[48px] px-6 sm:px-7 rounded-[9px] bg-[#E7B936] hover:bg-[#d8a92b] text-[#08182F] font-semibold text-[14px] sm:text-[15px] shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              <span>Xem bộ sưu tập</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#08182F]" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#quotation-download"
              className="inline-flex items-center justify-center h-[48px] px-6 sm:px-7 rounded-[9px] bg-white/10 hover:bg-white/15 border border-white/25 text-white font-medium text-[14px] sm:text-[15px] transition-all duration-200"
            >
              <span>Nhận báo giá B2B</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. THANH USP PHÍA DƯỚI HERO: 2 CỘT MOBILE, 4 CỘT DESKTOP   */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#08182F]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8 lg:py-9">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 lg:divide-x lg:divide-white/10">
            {TRUST_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 lg:px-6 first:lg:pl-0 last:lg:pr-0"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E7B936]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[13px] sm:text-[14px] font-semibold text-white tracking-tight leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] sm:text-[12px] text-slate-300 leading-relaxed font-normal">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
