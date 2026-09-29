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
    <section className="relative w-full overflow-hidden bg-[#1A1714] text-white">
      {/* ========================================================= */}
      {/* 1. HERO BACKGROUND IMAGE & LUXURY ESPRESSO GRADIENT       */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={resolveAsset('/images/catalog/page00_obj29_1000x666.jpg')}
          alt="HDC Uniform - Thời Trang Đồng Phục Doanh Nghiệp"
          className="w-full h-full object-cover object-[80%_center] md:object-[70%_center] scale-100"
          loading="eager"
        />

        {/* Directional Luxury Espresso Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(26,23,20,0.96) 0%, rgba(26,23,20,0.82) 40%, rgba(26,23,20,0.25) 75%, rgba(26,23,20,0) 100%)',
          }}
        />

        {/* Bottom smooth shadow blend into pillars */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#161311] to-transparent pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN HERO CONTENT CONTAINER (EDITORIAL LUXURY)        */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 flex flex-col justify-center min-h-[580px] sm:min-h-[620px] lg:min-h-[660px]">
        <div className="max-w-2xl space-y-5">
          {/* Eyebrow Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[12px] sm:text-[13px] font-medium text-[#EAE0D3]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            <span className="tracking-wide">Thời trang đồng phục doanh nghiệp cao cấp</span>
          </div>

          {/* Heading with Serif Glamour */}
          <h1 className="font-serif text-[36px] sm:text-[48px] lg:text-[60px] font-normal sm:font-medium tracking-tight leading-[1.12] text-white">
            Phong Cách <br />
            <span className="italic font-normal text-[#D4A373]">Tạo Thành Công</span>
          </h1>

          {/* Description */}
          <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#DDD3C4] leading-[1.65] max-w-[540px] font-normal">
            Giải pháp đồng phục doanh nghiệp toàn diện. Tiên phong ứng dụng chất liệu sinh thái tự nhiên, kỹ thuật Seamless không đường may và họa tiết di sản văn hóa bản địa.
          </p>

          {/* CTAs: Luxury Pill Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <a
              href="#catalog-showcase"
              className="inline-flex items-center justify-center h-[50px] px-7 rounded-full bg-[#D4A373] hover:bg-[#C29363] text-[#1A1714] font-semibold text-[14px] sm:text-[15px] shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Xem bộ sưu tập</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#1A1714]" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#quotation-download"
              className="inline-flex items-center justify-center h-[50px] px-7 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-[#FAF6F0] font-medium text-[14px] sm:text-[15px] backdrop-blur-xs transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Nhận báo giá B2B</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. THANH USP PHÍA DƯỚI HERO: 2 CỘT MOBILE, 4 CỘT DESKTOP   */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full border-t border-[#2E2822] bg-[#161311]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8 lg:py-9">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 lg:divide-x lg:divide-[#2E2822]">
            {TRUST_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 lg:px-6 first:lg:pl-0 last:lg:pr-0"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4A373]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[13px] sm:text-[14px] font-semibold text-white tracking-tight leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] sm:text-[12px] text-[#C2B7A8] leading-relaxed font-normal">
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
