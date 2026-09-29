import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SUSTAINABLE_FABRICS,
  SEAMLESS_TECHNOLOGY,
} from '../../data/huni-master-data';
import { ImageSlot } from '../ImageSlot';
import { resolveAsset } from '../../utils/asset';
import {
  Leaf,
  Cpu,
  ShieldCheck,
  Check,
  Flower2,
  Wind,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const FIBER_ICONS: Record<string, React.ElementType> = {
  Flower2,
  Leaf,
  Wind,
  Sparkles,
  ShieldCheck,
};

type PillarGroup = 'fabric' | 'seamless' | 'quality';

export const EcoFabricAndSeamlessSection: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<PillarGroup>('fabric');
  const [activeMotifId, setActiveMotifId] = useState<string>(
    SEAMLESS_TECHNOLOGY.culturalMotifs[0]?.id || ''
  );

  const selectedMotif =
    SEAMLESS_TECHNOLOGY.culturalMotifs.find((m) => m.id === activeMotifId) ||
    SEAMLESS_TECHNOLOGY.culturalMotifs[0];

  return (
    <section id="eco-fabrics-seamless" className="py-20 sm:py-24 lg:py-28 bg-[#FAF6F0] relative overflow-hidden text-[#1E1C19]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE8DD] border border-[#DFD6C8] text-[12px] font-medium text-[#574F44]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7D6B56]" />
            <span>Đột phá chất liệu xanh & Công nghệ</span>
          </div>

          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-normal sm:font-medium text-[#1E1C19] tracking-tight leading-[1.18]">
            Chất Liệu Sinh Thái & <br className="hidden sm:block" />
            <span className="italic">Công Nghệ May Liền Mạch</span>
          </h2>

          <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[#6E6559] max-w-2xl mx-auto font-normal">
            {SUSTAINABLE_FABRICS.subText}. Tiên phong ứng dụng nguồn sợi tự nhiên bản địa Việt Nam và kỹ thuật dán ép nhiệt phẳng phiu không ma sát.
          </p>
        </div>

        {/* 3 Nhóm Chính: Luxury Pill Tab Switcher */}
        <div className="mt-10 sm:mt-12 lg:mt-14 flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#EFE8DD]/70 rounded-full border border-[#DFD6C8]">
            <button
              onClick={() => setActiveGroup('fabric')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                activeGroup === 'fabric'
                  ? 'bg-[#363029] text-white shadow-sm'
                  : 'text-[#6B6154] hover:text-[#1E1C19]'
              }`}
            >
              <Leaf className="w-4 h-4 text-[#D4A373]" />
              <span>1. Vải sinh thái cao cấp</span>
            </button>

            <button
              onClick={() => setActiveGroup('seamless')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                activeGroup === 'seamless'
                  ? 'bg-[#363029] text-white shadow-sm'
                  : 'text-[#6B6154] hover:text-[#1E1C19]'
              }`}
            >
              <Cpu className="w-4 h-4 text-[#D4A373]" />
              <span>2. Công nghệ ép Seamless</span>
            </button>

            <button
              onClick={() => setActiveGroup('quality')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                activeGroup === 'quality'
                  ? 'bg-[#363029] text-white shadow-sm'
                  : 'text-[#6B6154] hover:text-[#1E1C19]'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#D4A373]" />
              <span>3. Họa tiết bản sắc văn hóa</span>
            </button>
          </div>
        </div>

        {/* Nội dung theo từng nhóm */}
        <div className="mt-10 sm:mt-12">
          <AnimatePresence mode="wait">
            {/* NHÓM 1: VẢI CAO CẤP */}
            {activeGroup === 'fabric' && (
              <motion.div
                key="fabric"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Hero Box Giới thiệu Vải Xanh */}
                <div className="p-6 sm:p-8 rounded-[24px] bg-[#FAF7F2] border border-[#ECE3D5] shadow-[0_6px_24px_rgba(40,32,24,0.04)] flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 max-w-3xl">
                    <span className="text-[11px] font-semibold text-[#8F6E43] uppercase tracking-[0.16em] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8F6E43]" />
                      {SUSTAINABLE_FABRICS.badge}
                    </span>
                    <h3 className="font-serif text-[22px] sm:text-[25px] font-medium text-[#1E1C19]">
                      Chất Liệu Xanh Bền Vững - Nâng Tầm Giá Trị Việt
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] text-[#6E6559] leading-relaxed font-normal">
                      "{SUSTAINABLE_FABRICS.originalText}"
                    </p>
                  </div>
                  <a
                    href="#quotation-download"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2B2620] hover:bg-[#1A1713] text-white text-[13px] font-medium shrink-0 transition-all shadow-sm hover:scale-[1.02]"
                  >
                    <span>Yêu cầu tập mẫu vải thực tế</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4A373]" />
                  </a>
                </div>

                {/* Grid 6 Loại Sợi Tự Nhiên */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SUSTAINABLE_FABRICS.fibers.map((fiber) => {
                    const Icon = FIBER_ICONS[fiber.iconName] || Leaf;
                    return (
                      <div
                        key={fiber.id}
                        className="p-6 rounded-[20px] bg-[#FAF7F2] hover:bg-[#F5EFE6] border border-[#ECE3D5] hover:border-[#DECBB7] shadow-[0_4px_16px_rgba(40,32,24,0.03)] hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div className="space-y-3.5">
                          <div className="flex items-center gap-3.5">
                            {fiber.imageSrc ? (
                              <div className="w-13 h-13 rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#ECE3D5] shrink-0 p-1 group-hover:scale-105 transition-transform duration-300">
                                <img
                                  src={resolveAsset(fiber.imageSrc)}
                                  alt={fiber.name}
                                  className="w-full h-full object-contain"
                                  loading="lazy"
                                />
                              </div>
                            ) : (
                              <div className="w-13 h-13 rounded-xl bg-[#F5EDE0] text-[#1E1C19] flex items-center justify-center shrink-0">
                                <Icon className="w-5 h-5 text-[#8F6E43]" />
                              </div>
                            )}

                            <div>
                              <span className="text-[10px] font-semibold text-[#8F6E43] uppercase tracking-wider block">
                                Sợi sinh thái
                              </span>
                              <h4 className="text-[15px] font-semibold text-[#1E1C19]">
                                {fiber.name}
                              </h4>
                            </div>
                          </div>

                          <p className="text-[13px] text-[#6E6559] leading-relaxed font-normal">
                            {fiber.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[#ECE3D5] flex items-center justify-between text-[12px] font-medium text-[#1E1C19]">
                          <span className="flex items-center gap-1">
                            <Check className="w-3.5 h-3.5 text-[#8F6E43]" />
                            100% Tự nhiên
                          </span>
                          <span className="text-[#857B6E] text-[11px] font-normal">An toàn cho da</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 5 Đặc Tính Kiểm Chứng */}
                <div className="p-6 sm:p-7 rounded-[22px] bg-[#FAF7F2] border border-[#ECE3D5] shadow-[0_4px_16px_rgba(40,32,24,0.03)] space-y-4">
                  <div className="text-center max-w-xl mx-auto space-y-1">
                    <span className="text-[11px] font-bold text-[#8C8070] tracking-[0.16em] uppercase">
                      Tiêu chuẩn kiểm nghiệm
                    </span>
                    <h4 className="font-serif text-[18px] sm:text-[20px] font-medium text-[#1E1C19]">
                      5 Đặc tính kiểm chứng vượt trội của dòng vải sinh thái
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-2">
                    {SUSTAINABLE_FABRICS.properties.map((prop) => (
                      <div
                        key={prop.id}
                        className="p-4 rounded-xl bg-[#FAF7F2] border border-[#ECE3D5] space-y-1"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#363029] text-[#D4A373] flex items-center justify-center text-[10px] font-bold">
                          ✓
                        </div>
                        <h5 className="text-[13px] font-semibold text-[#1E1C19] pt-1">
                          {prop.title}
                        </h5>
                        <p className="text-[11.5px] text-[#6E6559] leading-snug font-normal">
                          {prop.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* NHÓM 2: CÔNG NGHỆ MAY */}
            {activeGroup === 'seamless' && (
              <motion.div
                key="seamless"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Hero Box Espresso */}
                <div className="p-7 sm:p-9 rounded-[24px] bg-[#231F1C] text-white space-y-5 shadow-md border border-[#3A332B]">
                  <div className="max-w-2xl space-y-1.5">
                    <span className="text-[12px] font-medium text-[#D4A373] uppercase tracking-wider flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-[#D4A373]" />
                      Kỹ thuật may đo hiện đại
                    </span>
                    <h3 className="font-serif text-[24px] sm:text-[28px] font-normal sm:font-medium text-white">
                      {SEAMLESS_TECHNOLOGY.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                    {SEAMLESS_TECHNOLOGY.points.map((pt, idx) => (
                      <div
                        key={idx}
                        className="p-4.5 rounded-xl bg-white/5 border border-white/10 space-y-2"
                      >
                        <div className="w-6 h-6 rounded-md bg-[#D4A373] text-[#1A1714] flex items-center justify-center font-bold text-[11px]">
                          0{idx + 1}
                        </div>
                        <p className="text-[12.5px] text-[#DDD3C4] leading-relaxed font-normal">
                          {pt}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4 Ảnh Cận Cảnh Xưởng */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#8C8070] tracking-[0.16em] uppercase block">
                        Chi tiết thực tế
                      </span>
                      <h4 className="font-serif text-[18px] sm:text-[20px] font-medium text-[#1E1C19]">
                        Cận cảnh nẹp áo ép nhiệt & dàn mẫu thực tế tại xưởng
                      </h4>
                    </div>
                    <span className="text-[12px] text-[#8C8070] hidden sm:inline font-normal">
                      Catalogue Trang 3 & 5
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {SEAMLESS_TECHNOLOGY.macroPhotoSlots.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-[20px] bg-[#FAF7F2] hover:bg-[#F5EFE6] border border-[#ECE3D5] hover:border-[#DECBB7] shadow-[0_4px_16px_rgba(40,32,24,0.03)] hover:-translate-y-1 hover:shadow-md transition-all duration-300 space-y-2 group"
                      >
                        <div className="overflow-hidden rounded-xl bg-[#F5EFE6] aspect-square flex items-center justify-center">
                          <ImageSlot
                            slot={item.slot}
                            aspect="square"
                            className="group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                            hideCaption={true}
                          />
                        </div>
                        <p className="text-[13px] font-medium text-[#1E1C19] text-center line-clamp-1 pt-1">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* NHÓM 3: KIỂM SOÁT CHẤT LƯỢNG & HỌA TIẾT DI SẢN */}
            {activeGroup === 'quality' && (
              <motion.div
                key="quality"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-7 sm:p-9 rounded-[24px] bg-[#FAF7F2] border border-[#ECE3D5] shadow-[0_4px_16px_rgba(40,32,24,0.03)] space-y-6"
              >
                <div className="space-y-1.5 max-w-3xl">
                  <span className="text-[11px] font-bold text-[#8C8070] tracking-[0.16em] uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
                    Kiểm soát chất lượng & Họa tiết bản sắc
                  </span>
                  <h3 className="font-serif text-[24px] sm:text-[28px] font-medium text-[#1E1C19]">
                    Họa Tiết Di Sản Văn Hóa Bản Địa
                  </h3>
                  <p className="text-[14px] text-[#6E6559] leading-relaxed font-normal">
                    {SEAMLESS_TECHNOLOGY.culturalIntro}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                  {/* Selector List */}
                  <div className="lg:col-span-5 space-y-2.5">
                    {SEAMLESS_TECHNOLOGY.culturalMotifs.map((motif) => {
                      const isSelected = motif.id === activeMotifId;
                      return (
                        <button
                          key={motif.id}
                          onClick={() => setActiveMotifId(motif.id)}
                          className={`w-full p-3.5 rounded-xl border text-left transition-all duration-200 flex items-start gap-3 cursor-pointer ${
                            isSelected
                              ? 'border-[#363029] bg-[#F5EFE6] text-[#1E1C19] ring-1 ring-[#363029]'
                              : 'border-[#ECE3D5] bg-[#FAF7F2] text-[#6E6559] hover:bg-[#F5EFE6]'
                          }`}
                        >
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-[#363029] text-[#D4A373]' : 'bg-[#F0E8DC] text-[#7A6E5F]'
                            }`}
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[13px] text-[#1E1C19]">
                              {motif.name}
                            </h4>
                            <p className="text-[12px] text-[#6E6559] mt-0.5 leading-relaxed font-normal">
                              {motif.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Motif Hero Preview */}
                  <div className="lg:col-span-7">
                    <div className="rounded-[20px] overflow-hidden bg-[#FAF7F2] border border-[#ECE3D5] p-3 shadow-xs">
                      <ImageSlot
                        slot={selectedMotif.photoSlot}
                        aspect="wide"
                        className="rounded-xl max-h-[340px] object-cover"
                        hideCaption={true}
                      />
                      <div className="mt-2.5 p-2.5 bg-[#FAF7F2] rounded-lg border border-[#ECE3D5] flex items-center justify-between text-[12px]">
                        <span className="font-semibold text-[#1E1C19]">{selectedMotif.name}</span>
                        <span className="text-[#8C8070] font-normal">Độc quyền thiết kế HDC Uniform</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
