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
    <section id="catalog-showcase" className="py-20 sm:py-24 lg:py-28 bg-[#F7F8FC] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Spacing Heading -> Description 14-18px */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E7EC] text-[12px] sm:text-[13px] font-medium text-[#101828]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7B936]" />
            <span>Bộ sưu tập sản phẩm chủ lực</span>
          </div>

          <h2 className="mt-3.5 sm:mt-4 text-[30px] sm:text-[36px] lg:text-[38px] font-semibold text-[#08182F] tracking-tight leading-[1.2]">
            Bộ Sưu Tập Sản Phẩm Đồng Phục
          </h2>

          <p className="mt-3.5 sm:mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-[#667085] max-w-2xl mx-auto font-normal">
            Sơ mi Seamless không đường may, áo Polo Anti-UV thoáng khí, đồng phục học sinh cao cấp và phụ kiện doanh nghiệp tinh tế.
          </p>
        </div>

        {/* 4 Interactive Category Tabs - Tối giản, radius 8px, padding dễ bấm */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-200/50 rounded-xl max-w-2xl mx-auto border border-[#E4E7EC]">
          {PRODUCTS_CATALOG.map((cat, idx) => {
            const Icon = TAB_ICONS[idx] || Shirt;
            const isActive = cat.id === activeTabId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTabId(cat.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-[13px] sm:text-[14px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#08182F] text-white shadow-2xs'
                    : 'text-[#667085] hover:text-[#08182F] hover:bg-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#E7B936]' : 'text-slate-400'}`} />
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
              <div className="p-5 sm:p-6 rounded-[14px] bg-white border border-[#E4E7EC] flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-[0_4px_20px_rgba(16,24,40,0.03)]">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-[#E7B936] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E7B936]" />
                    Danh mục đang xem
                  </span>
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#101828]">
                    {activeCategory.categoryTitle}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#667085] max-w-3xl leading-relaxed font-normal">
                    {activeCategory.description}
                  </p>
                </div>
                <a
                  href="#quotation-download"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#08182F] hover:bg-[#071329] text-white text-[13px] font-medium shrink-0 transition-colors shadow-2xs"
                >
                  <span>Nhận tư vấn may mẫu</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E7B936]" />
                </a>
              </div>

              {/* Highlight Banner (Polo Anti-UV nếu có) */}
              {activeCategory.highlightBanner && (
                <div className="p-6 sm:p-8 rounded-[14px] bg-[#08182F] text-white flex flex-col lg:flex-row items-center gap-8 shadow-sm border border-white/10">
                  {activeCategory.highlightBanner.slot && (
                    <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-xs border border-white/10">
                      <ImageSlot
                        slot={activeCategory.highlightBanner.slot}
                        aspect="video"
                        className="max-h-[260px]"
                        hideCaption={true}
                      />
                    </div>
                  )}
                  <div className="w-full lg:w-1/2 space-y-3.5">
                    <span className="text-[12px] font-medium text-[#E7B936] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#E7B936]" />
                      Trang 6 Catalogue HDC Uniform
                    </span>
                    <h4 className="text-[22px] sm:text-[24px] font-semibold leading-tight text-white">
                      {activeCategory.highlightBanner.title}
                    </h4>
                    <p className="text-[13px] text-slate-300 leading-relaxed italic bg-white/5 p-3.5 rounded-lg border border-white/10 font-normal">
                      "{activeCategory.highlightBanner.subText}"
                    </p>
                    <div className="space-y-2 pt-1">
                      {activeCategory.highlightBanner.bulletPoints.map((bp, i) => (
                        <div key={i} className="flex items-center gap-2 text-[12px] text-slate-200 font-normal">
                          <CheckCircle className="w-4 h-4 text-[#E7B936] shrink-0" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Main Products Grid - Ảnh 70–75% Card, aspect 4:5, hover translateY -4px, scale 1.04, hiện "Xem chi tiết" */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCategory.items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative rounded-[14px] bg-white border border-[#E4E7EC] shadow-[0_4px_20px_rgba(16,24,40,0.04)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,24,40,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden h-full"
                  >
                    <div className="space-y-3">
                      {/* Item Image Slot: 70–75% diện tích card, aspect 4:5 */}
                      <div className="p-3 bg-[#F7F8FC] relative overflow-hidden">
                        <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-white border border-[#E4E7EC] flex items-center justify-center">
                          <ImageSlot
                            slot={item.photoSlot}
                            aspect="portrait"
                            fit="contain"
                            objectPosition="object-center"
                            className="w-full h-full object-contain p-2 rounded-lg transition-transform duration-300 group-hover:scale-[1.04]"
                            hideCaption={true}
                          />

                          {/* Hover Overlay: Hiện CTA "Xem chi tiết" */}
                          <div className="absolute inset-0 bg-[#08182F]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                            <a
                              href="#quotation-download"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E7B936] hover:bg-[#d8a92b] text-[#08182F] font-semibold text-[13px] shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                            >
                              <Eye className="w-3.5 h-3.5 text-[#08182F]" />
                              <span>Xem chi tiết</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Content Details: Tên sản phẩm nổi bật hơn mô tả */}
                      <div className="px-5 space-y-1.5 pb-2">
                        <div className="flex items-center justify-between gap-2">
                          {item.badge ? (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#08182F] text-white">
                              {item.badge}
                            </span>
                          ) : (
                            <span className="text-[10px] font-normal px-2 py-0.5 rounded-md bg-slate-100 text-[#667085]">
                              {item.categoryName || 'Đồng phục'}
                            </span>
                          )}
                          {item.colorSwatch && (
                            <div className="flex items-center gap-1.5 text-[11px] text-[#667085]">
                              <span className="text-[10px]">Màu:</span>
                              <span
                                className="w-3 h-3 rounded-full border border-slate-300 inline-block"
                                style={{ backgroundColor: item.colorSwatch }}
                                title={`Màu sắc: ${item.colorSwatch}`}
                              />
                            </div>
                          )}
                        </div>

                        <h4 className="font-semibold text-[16px] sm:text-[17px] text-[#101828] leading-snug">
                          {item.name}
                        </h4>

                        {item.description && (
                          <p className="text-[13px] text-[#667085] line-clamp-2 leading-relaxed font-normal">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Card Action Footer */}
                    <div className="px-5 py-3 mt-1 border-t border-[#E4E7EC] flex items-center justify-between text-[12px] bg-[#F7F8FC]/50">
                      <span className="font-normal text-[#667085] text-[11px]">
                        HDC Uniform Standard
                      </span>
                      <a
                        href="#quotation-download"
                        className="font-medium text-[#101828] hover:text-[#E7B936] flex items-center gap-1 transition-colors"
                      >
                        <span>Xem chi tiết</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#E7B936] group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Extra Sub-Group (IHDC Kids) */}
              {activeCategory.extraSubGroup && (
                <div className="mt-10 p-6 sm:p-7 rounded-[14px] bg-white border border-[#E4E7EC] shadow-[0_4px_20px_rgba(16,24,40,0.03)] space-y-5">
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-[#E7B936] uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E7B936]" />
                      Best Seller Học Sinh
                    </span>
                    <h4 className="text-[18px] sm:text-[20px] font-semibold text-[#101828]">
                      {activeCategory.extraSubGroup.title}
                    </h4>
                    {activeCategory.extraSubGroup.description && (
                      <p className="text-[13px] text-[#667085] leading-relaxed italic bg-[#F7F8FC] p-3 rounded-lg border border-[#E4E7EC] max-w-3xl font-normal">
                        "{activeCategory.extraSubGroup.description}"
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {activeCategory.extraSubGroup.items.map((subItem) => (
                      <div
                        key={subItem.id}
                        className="bg-white rounded-xl p-3 border border-[#E4E7EC] shadow-2xs hover:shadow-xs hover:-translate-y-1 transition-all duration-300 space-y-2.5 group"
                      >
                        <div className="overflow-hidden rounded-lg bg-slate-50 aspect-[4/5] flex items-center justify-center p-2">
                          <ImageSlot
                            slot={subItem.photoSlot}
                            aspect="portrait"
                            fit="contain"
                            objectPosition="object-center"
                            className="w-full h-full object-contain rounded-lg group-hover:scale-[1.04] transition-transform duration-300"
                            hideCaption={true}
                          />
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <span className="font-semibold text-[13px] text-[#101828]">
                            {subItem.name}
                          </span>
                          {subItem.colorSwatch && (
                            <span
                              className="w-3 h-3 rounded-full border border-slate-300 shrink-0"
                              style={{ backgroundColor: subItem.colorSwatch }}
                            />
                          )}
                        </div>
                        {subItem.description && (
                          <p className="text-[12px] text-[#667085] leading-snug line-clamp-2 font-normal">
                            {subItem.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
