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
    <section id="eco-fabrics-seamless" className="py-20 sm:py-24 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Spacing Heading -> Description 14-18px */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8FC] border border-[#E4E7EC] text-[12px] sm:text-[13px] font-medium text-[#101828]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7B936]" />
            <span>Đột phá chất liệu xanh & Công nghệ</span>
          </div>

          <h2 className="mt-3.5 sm:mt-4 text-[30px] sm:text-[36px] lg:text-[38px] font-semibold text-[#08182F] tracking-tight leading-[1.2]">
            Chất Liệu Sinh Thái & Công Nghệ May Liền Mạch
          </h2>

          <p className="mt-3.5 sm:mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-[#667085] max-w-2xl mx-auto font-normal">
            {SUSTAINABLE_FABRICS.subText}. Tiên phong ứng dụng nguồn sợi tự nhiên bản địa Việt Nam và kỹ thuật dán ép nhiệt phẳng phiu không ma sát.
          </p>
        </div>

        {/* 3 Nhóm Chính: Vải cao cấp • Công nghệ may • Kiểm soát chất lượng */}
        <div className="mt-10 sm:mt-12 lg:mt-14 flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#F7F8FC] rounded-xl border border-[#E4E7EC]">
            <button
              onClick={() => setActiveGroup('fabric')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] sm:text-[14px] font-medium transition-all duration-200 ${
                activeGroup === 'fabric'
                  ? 'bg-[#08182F] text-white shadow-2xs'
                  : 'text-[#667085] hover:text-[#08182F]'
              }`}
            >
              <Leaf className={`w-4 h-4 ${activeGroup === 'fabric' ? 'text-[#E7B936]' : 'text-slate-400'}`} />
              <span>1. Vải cao cấp</span>
            </button>

            <button
              onClick={() => setActiveGroup('seamless')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] sm:text-[14px] font-medium transition-all duration-200 ${
                activeGroup === 'seamless'
                  ? 'bg-[#08182F] text-white shadow-2xs'
                  : 'text-[#667085] hover:text-[#08182F]'
              }`}
            >
              <Cpu className={`w-4 h-4 ${activeGroup === 'seamless' ? 'text-[#E7B936]' : 'text-slate-400'}`} />
              <span>2. Công nghệ may</span>
            </button>

            <button
              onClick={() => setActiveGroup('quality')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] sm:text-[14px] font-medium transition-all duration-200 ${
                activeGroup === 'quality'
                  ? 'bg-[#08182F] text-white shadow-2xs'
                  : 'text-[#667085] hover:text-[#08182F]'
              }`}
            >
              <ShieldCheck className={`w-4 h-4 ${activeGroup === 'quality' ? 'text-[#E7B936]' : 'text-slate-400'}`} />
              <span>3. Kiểm soát chất lượng</span>
            </button>
          </div>
        </div>

        {/* Nội dung theo từng nhóm: Card background white, border 1px #E4E7EC, radius 12-14px, padding 24px, hover nâng 2-4px */}
        <div className="mt-8 sm:mt-10">
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
                {/* Mission Statement */}
                <div className="p-6 sm:p-7 rounded-[14px] bg-[#F7F8FC] border border-[#E4E7EC] space-y-1.5">
                  <span className="text-[12px] font-semibold text-[#08182F] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E7B936]" />
                    Mục tiêu phát triển bền vững
                  </span>
                  <p className="text-[14px] sm:text-[15px] text-[#101828] leading-[1.6] font-normal">
                    "{SUSTAINABLE_FABRICS.originalText}"
                  </p>
                </div>

                {/* 6 Loại Sợi Tự Nhiên */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SUSTAINABLE_FABRICS.fibers.map((fiber) => {
                    const Icon = FIBER_ICONS[fiber.iconName] || Leaf;
                    return (
                      <div
                        key={fiber.id}
                        className="p-6 rounded-[14px] bg-white border border-[#E4E7EC] shadow-[0_4px_20px_rgba(16,24,40,0.04)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,24,40,0.08)] transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div className="space-y-3.5">
                          <div className="flex items-center gap-3.5">
                            {fiber.imageSrc ? (
                              <div className="w-13 h-13 rounded-lg overflow-hidden bg-slate-50 border border-slate-100 shrink-0 p-1 group-hover:scale-105 transition-transform duration-300">
                                <img
                                  src={resolveAsset(fiber.imageSrc)}
                                  alt={fiber.name}
                                  className="w-full h-full object-contain"
                                  loading="lazy"
                                />
                              </div>
                            ) : (
                              <div className="w-13 h-13 rounded-lg bg-slate-50 text-[#08182F] flex items-center justify-center shrink-0">
                                <Icon className="w-5 h-5 text-[#E7B936]" />
                              </div>
                            )}
                            <div>
                              <span className="text-[11px] font-medium text-[#667085] block">
                                Sợi sinh thái
                              </span>
                              <h4 className="text-[15px] font-semibold text-[#101828]">
                                {fiber.name}
                              </h4>
                            </div>
                          </div>

                          <p className="text-[13px] text-[#667085] leading-relaxed font-normal">
                            {fiber.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[#E4E7EC] flex items-center justify-between text-[12px] font-medium text-[#101828]">
                          <span className="flex items-center gap-1">
                            <Check className="w-3.5 h-3.5 text-[#E7B936]" />
                            100% Tự nhiên
                          </span>
                          <span className="text-[#667085] text-[11px] font-normal">An toàn cho da</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 5 Đặc Tính Kiểm Chứng */}
                <div className="p-6 sm:p-7 rounded-[14px] bg-white border border-[#E4E7EC] shadow-[0_4px_20px_rgba(16,24,40,0.04)] space-y-4">
                  <div className="text-center max-w-xl mx-auto space-y-1">
                    <span className="text-[12px] font-semibold text-[#08182F] uppercase tracking-wider">
                      Tiêu chuẩn kiểm nghiệm
                    </span>
                    <h4 className="text-[16px] font-semibold text-[#101828]">
                      5 Đặc tính kiểm chứng vượt trội của dòng vải sinh thái
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-1">
                    {SUSTAINABLE_FABRICS.properties.map((prop) => (
                      <div
                        key={prop.id}
                        className="p-3.5 rounded-lg bg-[#F7F8FC] border border-[#E4E7EC] space-y-1"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#08182F] text-[#E7B936] flex items-center justify-center text-[10px] font-bold">
                          ✓
                        </div>
                        <h5 className="text-[13px] font-semibold text-[#101828] pt-1">
                          {prop.title}
                        </h5>
                        <p className="text-[11px] text-[#667085] leading-snug font-normal">
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
                {/* Hero Box Navy */}
                <div className="p-7 sm:p-9 rounded-[14px] bg-[#08182F] text-white space-y-5 shadow-sm border border-white/10">
                  <div className="max-w-2xl space-y-1.5">
                    <span className="text-[12px] font-medium text-[#E7B936] uppercase tracking-wider flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-[#E7B936]" />
                      Kỹ thuật may đo hiện đại
                    </span>
                    <h3 className="text-[22px] sm:text-[26px] font-semibold text-white">
                      {SEAMLESS_TECHNOLOGY.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                    {SEAMLESS_TECHNOLOGY.points.map((pt, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-1.5"
                      >
                        <div className="w-6 h-6 rounded-md bg-[#E7B936] text-[#08182F] flex items-center justify-center font-bold text-[11px]">
                          0{idx + 1}
                        </div>
                        <p className="text-[12px] text-slate-200 leading-relaxed font-normal">
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
                      <span className="text-[12px] font-semibold text-[#08182F] uppercase tracking-wider block">
                        Chi tiết thực tế
                      </span>
                      <h4 className="text-[16px] font-semibold text-[#101828]">
                        Cận cảnh nẹp áo ép nhiệt & dàn mẫu thực tế tại xưởng
                      </h4>
                    </div>
                    <span className="text-[12px] text-[#667085] hidden sm:inline font-normal">
                      Catalogue Trang 3 & 5
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {SEAMLESS_TECHNOLOGY.macroPhotoSlots.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-[14px] bg-white border border-[#E4E7EC] shadow-[0_4px_20px_rgba(16,24,40,0.04)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,24,40,0.08)] transition-all duration-300 space-y-2 group"
                      >
                        <div className="overflow-hidden rounded-lg bg-slate-50 aspect-square flex items-center justify-center">
                          <ImageSlot
                            slot={item.slot}
                            aspect="square"
                            className="group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                            hideCaption={true}
                          />
                        </div>
                        <p className="text-[13px] font-medium text-[#101828] text-center line-clamp-1 pt-1">
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
                className="p-7 sm:p-9 rounded-[14px] bg-white border border-[#E4E7EC] shadow-[0_4px_20px_rgba(16,24,40,0.04)] space-y-6"
              >
                <div className="space-y-1.5 max-w-3xl">
                  <span className="text-[12px] font-semibold text-[#08182F] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E7B936]" />
                    Kiểm soát chất lượng & Họa tiết bản sắc
                  </span>
                  <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#101828]">
                    Họa Tiết Di Sản Văn Hóa Bản Địa
                  </h3>
                  <p className="text-[14px] text-[#667085] leading-relaxed font-normal">
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
                          className={`w-full p-3.5 rounded-lg border text-left transition-all duration-200 flex items-start gap-3 ${
                            isSelected
                              ? 'border-[#08182F] bg-[#F7F8FC] text-[#08182F] ring-1 ring-[#08182F]'
                              : 'border-[#E4E7EC] bg-white text-[#667085] hover:bg-[#F7F8FC]'
                          }`}
                        >
                          <div
                            className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-[#08182F] text-[#E7B936]' : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[13px] text-[#101828]">
                              {motif.name}
                            </h4>
                            <p className="text-[12px] text-[#667085] mt-0.5 leading-relaxed font-normal">
                              {motif.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Motif Hero Preview */}
                  <div className="lg:col-span-7">
                    <div className="rounded-xl overflow-hidden bg-[#F7F8FC] border border-[#E4E7EC] p-3 shadow-xs">
                      <ImageSlot
                        slot={selectedMotif.photoSlot}
                        aspect="wide"
                        className="rounded-lg max-h-[340px] object-cover"
                        hideCaption={true}
                      />
                      <div className="mt-2.5 p-2.5 bg-white rounded-lg border border-[#E4E7EC] flex items-center justify-between text-[12px]">
                        <span className="font-semibold text-[#101828]">{selectedMotif.name}</span>
                        <span className="text-[#667085] font-normal">Độc quyền thiết kế HDC Uniform</span>
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
