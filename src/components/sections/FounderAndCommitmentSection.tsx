import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../../data/huni-master-data';
import { resolveAsset } from '../../utils/asset';
import {
  User,
  Users,
  Diamond,
  Leaf,
  ShieldCheck,
  Truck,
  ArrowRight,
} from 'lucide-react';

const CORE_COMMITMENTS = [
  {
    id: 'cmt-design',
    icon: Diamond,
    title: 'Thiết kế chuyên nghiệp, đậm dấu ấn thương hiệu',
    desc: 'Tư vấn và thiết kế đồng phục theo nhận diện riêng, thể hiện rõ bản sắc từng doanh nghiệp.',
  },
  {
    id: 'cmt-eco',
    icon: Leaf,
    title: 'Chất liệu cao cấp, an toàn và thân thiện',
    desc: 'Ưu tiên chất liệu sinh học, thoáng mát, an toàn cho người mặc và thân thiện với môi trường.',
  },
  {
    id: 'cmt-kcs',
    icon: ShieldCheck,
    title: 'Tiến độ chuẩn xác & KCS 100%',
    desc: 'Quy trình kiểm soát chất lượng nghiêm ngặt từng đường kim mũi chỉ, bàn giao chuẩn hẹn cam kết.',
  },
  {
    id: 'cmt-sample',
    icon: Truck,
    title: 'May mẫu thử 24h & Giao hàng toàn quốc',
    desc: 'Cung cấp tập mẫu vải và may áo mẫu gửi tận nơi hoàn toàn miễn phí trước khi sản xuất hàng loạt.',
  },
];

export const FounderAndCommitmentSection: React.FC = () => {
  const { leadership } = COMPANY_INFO;
  const [activePhotoTab, setActivePhotoTab] = useState<'portrait' | 'team'>('portrait');

  const currentImageSrc =
    activePhotoTab === 'portrait'
      ? resolveAsset(leadership.portraitSlot.src)
      : resolveAsset(leadership.showroomTeamSlot.src);

  const currentAlt =
    activePhotoTab === 'portrait'
      ? leadership.portraitSlot.alt
      : leadership.showroomTeamSlot.alt;

  return (
    <section
      id="founder-vision"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#FAF6F0] text-[#1E1C19] overflow-hidden"
    >
      {/* ========================================================= */}
      {/* 1. BACKGROUND DELICATE CONTOURS & EDITORIAL ELEMENTS      */}
      {/* ========================================================= */}
      {/* Top Left Organic Contour Waves */}
      <svg
        className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none opacity-40 text-[#DFD6C8]"
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50 80 C 120 160, 240 60, 380 180 C 460 250, 520 200, 560 300"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M-80 140 C 90 220, 220 110, 340 230 C 420 310, 480 260, 530 360"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path
          d="M-20 20 C 150 90, 270 20, 400 130 C 470 190, 540 150, 580 240"
          stroke="currentColor"
          strokeWidth="0.6"
        />
      </svg>

      {/* Top Right Editorial Stamp */}
      <div className="hidden lg:flex flex-col items-end absolute top-12 right-8 xl:right-16 text-[10px] tracking-[0.28em] text-[#9E9484] uppercase font-medium leading-relaxed select-none">
        <span>Đồng Phục</span>
        <span>Kiến Tạo</span>
        <span>Giá Trị</span>
        <span>Bền Vững</span>
      </div>

      {/* Subtle Botanical Leaf Shadow in Bottom Left */}
      <div className="absolute -bottom-10 -left-10 w-64 h-64 opacity-20 pointer-events-none filter blur-[1px]">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-[#6D6559]">
          <path d="M40,160 Q70,90 140,50 Q120,110 80,150 Z" />
          <path d="M30,170 Q60,110 110,90 Q95,135 60,165 Z" />
          <path d="M50,150 Q90,100 160,80 Q130,130 90,160 Z" />
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================= */}
        {/* 2. SECTION HEADER (CENTERED, EDITORIAL SERIF)             */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE8DD] border border-[#DFD6C8] text-[12px] font-medium text-[#574F44]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7D6B56]" />
            <span>Ban lãnh đạo & Chuẩn mực thương hiệu</span>
          </div>

          {/* Heading in High-Fashion Serif */}
          <h2 className="font-serif text-[32px] sm:text-[42px] lg:text-[48px] font-normal sm:font-medium text-[#1E1C19] tracking-tight leading-[1.18]">
            Nâng Tầm Giá Trị Thương Hiệu
            <span className="block mt-0.5">Doanh Nghiệp</span>
          </h2>

          {/* Description */}
          <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[#6E6559] max-w-2xl mx-auto font-normal">
            HDC Uniform cam kết kiến tạo giải pháp đồng phục chỉnh chu, tôn vinh hình ảnh và bản sắc văn hóa riêng biệt của từng đối tác doanh nghiệp.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 3. MAIN SECTION GRID (LEFT: PHOTO, RIGHT: CONTENT)        */}
        {/* ========================================================= */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ------------------------------------------------------- */}
          {/* CỘT TRÁI: TABS & FOUNDER PORTRAIT CARD                  */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {/* Top Switcher Tabs */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActivePhotoTab('portrait')}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                  activePhotoTab === 'portrait'
                    ? 'bg-[#363029] text-white shadow-sm'
                    : 'bg-transparent text-[#6B6154] hover:bg-[#EAE0D3]/60 border border-[#E0D6C8]'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Founder & CEO</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePhotoTab('team')}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                  activePhotoTab === 'team'
                    ? 'bg-[#363029] text-white shadow-sm'
                    : 'bg-transparent text-[#6B6154] hover:bg-[#EAE0D3]/60 border border-[#E0D6C8]'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Đội ngũ Showroom</span>
              </button>
            </div>

            {/* Photo Card with Organic Beige Backdrop */}
            <div className="relative">
              {/* Organic Soft Shape Behind Card */}
              <div className="absolute -left-6 sm:-left-8 -top-6 -bottom-6 w-[85%] rounded-[44px] bg-[#EFE8DD] -z-10 pointer-events-none" />

              {/* Main Photo Container */}
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-white shadow-[0_12px_36px_rgba(40,32,24,0.08)] border border-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhotoTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full aspect-[4/5] bg-slate-100"
                  >
                    <img
                      src={currentImageSrc}
                      alt={currentAlt}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />

                    {/* Subtle Gradient Over Bottom to Ensure Readability */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Bottom Nameplate Card */}
                <div className="absolute bottom-3.5 inset-x-3.5 sm:bottom-4 sm:inset-x-4 bg-[#FBF9F5]/92 backdrop-blur-md rounded-[20px] p-3.5 sm:p-4 border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex items-center justify-between gap-2 select-none">
                  {/* Name and Designation */}
                  <div className="space-y-0.5 min-w-0">
                    <h4 className="font-semibold text-[14px] sm:text-[15px] text-[#1E1C19] truncate">
                      {activePhotoTab === 'portrait' ? leadership.founderName : 'Tập Thể Showroom'}
                    </h4>
                    <p className="text-[9.5px] sm:text-[10px] text-[#857B6E] tracking-wider uppercase font-semibold truncate">
                      {activePhotoTab === 'portrait' ? leadership.title : 'HDC UNIFORM SHOWROOM'}
                    </p>
                  </div>

                  {/* Elegant Signature Stroke Vector */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 36"
                      className="w-16 sm:w-20 h-7 sm:h-8 text-[#A68862] opacity-80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 24 Q 18 10, 26 20 T 40 18 Q 48 12, 54 28 Q 62 8, 70 20 T 88 18 Q 95 16, 98 22" />
                      <path d="M22 28 C 35 27, 65 26, 85 24" strokeWidth="1.2" opacity="0.6" />
                    </svg>
                  </div>

                  {/* CEO Pill Badge */}
                  <span className="shrink-0 px-3 py-1 rounded-full bg-[#DFD4C3] text-[#5C4A33] text-[11px] font-semibold tracking-wide">
                    {activePhotoTab === 'portrait' ? 'CEO' : 'TEAM'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* CỘT PHẢI: QUOTE & 4 CORE COMMITMENT CARDS               */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Editorial Quote Header */}
            <div className="space-y-3.5">
              {/* Quote Mark Icon with Horizontal Rule */}
              <div className="flex items-center gap-3">
                <span className="text-[#CCA472] font-serif text-[42px] leading-none select-none font-bold">
                  “
                </span>
                <div className="h-[1px] w-16 bg-[#DFD4C4]" />
              </div>

              {/* Bold Editorial Quote */}
              <blockquote className="font-serif text-[22px] sm:text-[25px] lg:text-[27px] font-medium text-[#1E1C19] leading-[1.3] tracking-tight">
                “Đồng phục không chỉ để mặc — đó là hình ảnh thương hiệu của doanh nghiệp.”
              </blockquote>

              {/* Founder Narrative Paragraph */}
              <p className="text-[13.5px] sm:text-[14px] leading-[1.7] text-[#635A4F] font-normal">
                "{leadership.message}"
              </p>
            </div>

            {/* 4 Core Commitments Header */}
            <div className="space-y-3 pt-2">
              <div className="text-[11px] font-bold text-[#8C8070] tracking-[0.16em] uppercase">
                4 Cam kết giá trị cốt lõi:
              </div>

              {/* 2x2 Commitment Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {CORE_COMMITMENTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="p-4 sm:p-4.5 rounded-[18px] bg-white/70 hover:bg-white border border-[#ECE3D5] hover:border-[#DECBB7] shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group"
                    >
                      {/* Icon with warm circular backdrop */}
                      <div className="w-10 h-10 rounded-full bg-[#F3EBE0] group-hover:bg-[#EFE4D6] text-[#8F6E43] flex items-center justify-center shrink-0 transition-colors">
                        <Icon className="w-4.5 h-4.5" />
                      </div>

                      {/* Content */}
                      <div className="space-y-1">
                        <h4 className="font-semibold text-[13px] sm:text-[13.5px] text-[#1E1C19] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[11.5px] sm:text-[12px] text-[#6E6559] leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Action & Footnote Row */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <a
                href="#quotation-download"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#2B2620] hover:bg-[#1A1713] text-white text-[13.5px] font-medium shadow-sm transition-all duration-200 hover:scale-[1.02] self-start sm:self-auto cursor-pointer"
              >
                <span>Nhận tư vấn may mẫu miễn phí</span>
                <ArrowRight className="w-4 h-4 text-[#D8B685]" />
              </a>

              {/* Right Footnote Stamp */}
              <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-[#9E9484] uppercase font-medium">
                <div className="hidden sm:block h-[1px] w-8 bg-[#DFD6C8]" />
                <span>Đồng hành kiến tạo hình ảnh doanh nghiệp</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
