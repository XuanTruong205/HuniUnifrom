import React from 'react';
import { COMPANY_INFO } from '../../data/huni-master-data';
import { resolveAsset } from '../../utils/asset';
import {
  PhoneCall,
  MapPin,
  Globe,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const CompleteFooter: React.FC = () => {
  return (
    <footer className="bg-[#08182F] text-slate-300 border-t border-white/10 text-xs">
      {/* ========================================================= */}
      {/* 1. PRE-FOOTER CTA BANNER                                  */}
      {/* ========================================================= */}
      <div className="border-b border-white/10 relative overflow-hidden bg-[#071329]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-2.5 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#E7B936]">
                <Sparkles className="w-3.5 h-3.5 text-[#E7B936]" />
                Đồng hành cùng doanh nghiệp thành công
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
                Sẵn sàng tạo bộ đồng phục mang dấu ấn riêng?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Liên hệ với HDC Uniform ngay hôm nay để nhận trọn bộ giải pháp may mẫu miễn phí trong 24 giờ, catalogue chất liệu và chính sách chiết khấu trực tiếp tại xưởng.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 shrink-0">
              <a
                href="#quotation-download"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#E7B936] hover:bg-[#d8a92b] text-[#08182F] font-bold text-sm shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                <span>Nhận tư vấn miễn phí</span>
                <ArrowRight className="w-4 h-4 text-[#08182F]" />
              </a>

              <a
                href={COMPANY_INFO.hotlineTel}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-medium text-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#E7B936]" />
                <span>{COMPANY_INFO.hotline}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN FOOTER CONTENT (GENEROUS PADDING)                 */}
      {/* ========================================================= */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* CỘT 1: THƯƠNG HIỆU & GIỚI THIỆU (5 CỘT) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <img
                src={resolveAsset(COMPANY_INFO.logoSrc)}
                alt="HDC Uniform Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <div className="space-y-2 text-slate-400 leading-relaxed font-normal">
              <p>
                <strong className="text-white">Thương hiệu:</strong> {COMPANY_INFO.brandName} ({COMPANY_INFO.subBrand})
              </p>
              <p>
                <strong className="text-white">Slogan:</strong> "{COMPANY_INFO.mainSlogan}"
              </p>
              <p>
                <strong className="text-white">Định hướng:</strong> "{COMPANY_INFO.secondarySlogan}"
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E7B936]" />
                Dữ liệu và thiết kế xác thực từ Catalogue 2023-12-28
              </span>
            </div>
          </div>

          {/* CỘT 2: ĐỊA CHỈ & LIÊN HỆ THEO CATALOGUE (4 CỘT) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-[#E7B936] pl-2.5">
              Thông Tin Liên Hệ Trực Tiếp
            </h4>

            <div className="space-y-3.5">
              {/* Văn phòng công ty */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/15 transition-colors space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <MapPin className="w-4 h-4 text-[#E7B936] shrink-0" />
                  <span>Văn phòng công ty</span>
                </div>
                <p className="text-slate-300 pl-6 leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
              </div>

              {/* Hotline & Website */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/15 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <PhoneCall className="w-4 h-4 text-[#E7B936] shrink-0" />
                  <a
                    href={COMPANY_INFO.hotlineTel}
                    className="hover:text-[#E7B936] transition-colors"
                  >
                    Hotline: {COMPANY_INFO.hotline}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <Globe className="w-4 h-4 text-[#E7B936] shrink-0" />
                  <a
                    href={`https://${COMPANY_INFO.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#E7B936] transition-colors"
                  >
                    Website: {COMPANY_INFO.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CỘT 3: SƠ ĐỒ DANH MỤC SẢN PHẨM (3 CỘT) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-[#E7B936] pl-2.5">
              Danh Mục Sản Phẩm
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <a href="#catalog-showcase" className="hover:text-[#E7B936] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E7B936]" />
                  <span>Sơ mi Best Seller & Vest</span>
                </a>
              </li>
              <li>
                <a href="#catalog-showcase" className="hover:text-[#E7B936] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E7B936]" />
                  <span>Polo Anti-UV Năng Động</span>
                </a>
              </li>
              <li>
                <a href="#catalog-showcase" className="hover:text-[#E7B936] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E7B936]" />
                  <span>Đồng phục học sinh HDC Kids</span>
                </a>
              </li>
              <li>
                <a href="#eco-fabrics-seamless" className="hover:text-[#E7B936] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E7B936]" />
                  <span>Chất liệu sinh học & Seamless</span>
                </a>
              </li>
              <li>
                <a href="#real-projects" className="hover:text-[#E7B936] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#E7B936]" />
                  <span>Giải Golf 30 năm DNT Việt Nam</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.brandName} ({COMPANY_INFO.subBrand}). Mọi quyền được bảo lưu.</p>
          <div className="flex items-center gap-4">
            <a href={`https://${COMPANY_INFO.website}`} className="hover:text-slate-200">
              {COMPANY_INFO.website}
            </a>
            <span>•</span>
            <a href={COMPANY_INFO.hotlineTel} className="hover:text-slate-200">
              {COMPANY_INFO.hotline}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
