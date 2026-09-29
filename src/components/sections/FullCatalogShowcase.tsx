import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PRODUCTS_CATALOG,
  type ProductCatalogGroup,
} from '../../data/huni-master-data';
import { ImageSlot } from '../ImageSlot';
import {
  Shirt,
  Sparkles,
  GraduationCap,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Eye,
} from 'lucide-react';

const TAB_ICONS = [
  Shirt,          // Sơ mi Best Seller & Vest
  Sparkles,       // Polo Trẻ Trung, Năng Động
  GraduationCap,  // Đồng Phục IHDC Kids
  Briefcase,      // Tỉ Mỉ Trong Từng Phụ Kiện
];

export const FullCatalogShowcase: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(PRODUCTS_CATALOG[0].id);

  const activeCategory: ProductCatalogGroup =
    PRODUCTS_CATALOG.find((cat) => cat.id === activeTabId) || PRODUCTS_CATALOG[0];

  return (
    <section id="catalog-showcase" className="py-20 sm:py-24 lg:py-28 bg-[#F5EFE6] relative overflow-hidden text-[#1E1C19]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE8DD] border border-[#DFD6C8] text-[12px] font-medium text-[#574F44]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7D6B56]" />
            <span>Bộ sưu tập sản phẩm chủ lực</span>
          </div>

          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-normal sm:font-medium text-[#1E1C19] tracking-tight leading-[1.18]">
            Bộ Sưu Tập Sản Phẩm <br className="hidden sm:block" />
            <span className="italic">Đồng Phục Đẳng Cấp</span>
          </h2>

          <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[#6E6559] max-w-2xl mx-auto font-normal">
            Sơ mi Seamless không đường may, áo Polo Anti-UV thoáng khí, đồng phục học sinh cao cấp và phụ kiện doanh nghiệp tinh tế.
          </p>
        </div>

        {/* 4 Interactive Category Tabs */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#EFE8DD]/70 rounded-full max-w-3xl mx-auto border border-[#DFD6C8]">
          {PRODUCTS_CATALOG.map((cat, idx) => {
            const Icon = TAB_ICONS[idx] || Shirt;
            const isActive = cat.id === activeTabId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTabId(cat.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#363029] text-white shadow-sm'
                    : 'text-[#6B6154] hover:text-[#1E1C19] hover:bg-white/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4A373]' : 'text-[#8C8070]'}`} />
                <span>{cat.categoryTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="mt-8 sm:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* Category Description Banner */}
              <div className="p-5 sm:p-6 rounded-[24px] bg-white border border-[#ECE4D8] flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-[0_4px_16px_rgba(40,32,24,0.03)]">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#8C8070] tracking-[0.16em] uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8F6E43]" />
                    Danh mục đang xem
                  </span>
                  <h3 className="font-serif text-[19px] sm:text-[21px] font-medium text-[#1E1C19]">
                    {activeCategory.categoryTitle}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#6E6559] max-w-3xl leading-relaxed font-normal">
                    {activeCategory.description}
                  </p>
                </div>
                <a
                  href="#quotation-download"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2B2620] hover:bg-[#1A1713] text-white text-[13px] font-medium shrink-0 transition-all shadow-sm hover:scale-[1.02]"
                >
                  <span>Nhận tư vấn may mẫu</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4A373]" />
                </a>
              </div>

              {/* Highlight Banner (Polo Anti-UV nếu có) */}
              {activeCategory.highlightBanner && (
                <div className="p-6 sm:p-8 rounded-[24px] bg-[#231F1C] text-white flex flex-col lg:flex-row items-center gap-8 shadow-md border border-[#3A332B]">
                  {activeCategory.highlightBanner.slot && (
                    <div className="w-full lg:w-1/2 rounded-[20px] overflow-hidden shadow-xs border border-white/10">
                      <ImageSlot
                        slot={activeCategory.highlightBanner.slot}
                        aspect="video"
                        className="max-h-[260px]"
                        hideCaption={true}
                      />
                    </div>
                  )}
                  <div className="w-full lg:w-1/2 space-y-3.5">
                    <span className="text-[11px] font-medium text-[#D4A373] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#D4A373]" />
                      Trang 6 Catalogue HDC Uniform
                    </span>
                    <h4 className="font-serif text-[22px] sm:text-[25px] font-medium leading-tight text-white">
                      {activeCategory.highlightBanner.title}
                    </h4>
                    <p className="text-[13px] text-[#DDD3C4] leading-relaxed italic bg-white/5 p-3.5 rounded-xl border border-white/10 font-normal">
                      "{activeCategory.highlightBanner.subText}"
                    </p>
                    <div className="space-y-2 pt-1">
                      {activeCategory.highlightBanner.bulletPoints.map((bp, i) => (
                        <div key={i} className="flex items-center gap-2 text-[12px] text-[#E8E0D5] font-normal">
                          <CheckCircle className="w-4 h-4 text-[#D4A373] shrink-0" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Main Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCategory.items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative rounded-[22px] bg-white border border-[#ECE4D8] shadow-[0_4px_16px_rgba(40,32,24,0.02)] hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden h-full"
                  >
                    <div className="space-y-3">
                      {/* Item Image Slot: aspect 4:5 */}
                      <div className="p-3 bg-[#FAF6F0] relative overflow-hidden">
                        <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-white border border-[#ECE4D8] flex items-center justify-center">
                          <ImageSlot
                            slot={item.photoSlot}
                            aspect="portrait"
                            fit="contain"
                            objectPosition="object-center"
                            className="w-full h-full object-contain p-2 rounded-xl transition-transform duration-300 group-hover:scale-[1.04]"
                            hideCaption={true}
                          />

                          {/* Hover Overlay: Hiện CTA "Xem chi tiết" */}
                          <div className="absolute inset-0 bg-[#231F1C]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                            <a
                              href="#quotation-download"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4A373] hover:bg-[#C29363] text-[#1A1714] font-semibold text-[13px] shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                            >
                              <Eye className="w-3.5 h-3.5 text-[#1A1714]" />
                              <span>Xem chi tiết</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className="px-5 space-y-1.5 pb-2">
                        <div className="flex items-center justify-between gap-2">
                          {item.badge ? (
                            <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#363029] text-[#EAE0D3]">
                              {item.badge}
                            </span>
                          ) : (
                            <span className="text-[10px] font-normal px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#7A6E5F] border border-[#ECE4D8]">
                              {item.categoryName || 'Đồng phục'}
                            </span>
                          )}
                          {item.colorSwatch && (
                            <div className="flex items-center gap-1.5 text-[11px] text-[#7A7164]">
                              <span className="text-[10px]">Màu:</span>
                              <span
                                className="w-3.5 h-3.5 rounded-full border border-slate-300 inline-block"
                                style={{ backgroundColor: item.colorSwatch }}
                                title={`Màu sắc: ${item.colorSwatch}`}
                              />
                            </div>
                          )}
                        </div>

                        <h4 className="font-serif text-[17px] sm:text-[18px] font-medium text-[#1E1C19] leading-snug">
                          {item.name}
                        </h4>

                        {item.description && (
                          <p className="text-[12.5px] text-[#6E6559] line-clamp-2 leading-relaxed font-normal">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Card Action Footer */}
                    <div className="px-5 py-3 mt-1 border-t border-[#ECE4D8] flex items-center justify-between text-[12px] bg-[#FAF6F0]/60">
                      <span className="font-normal text-[#8C8070] text-[11px]">
                        HDC Uniform Standard
                      </span>
                      <a
                        href="#quotation-download"
                        className="font-medium text-[#1E1C19] hover:text-[#8F6E43] flex items-center gap-1 transition-colors"
                      >
                        <span>Xem chi tiết</span>
                        <ArrowRight className="w-3 h-3 text-[#D4A373]" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
