import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../../data/huni-master-data';
import { resolveAsset } from '../../utils/asset';
import { PhoneCall, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Về chúng tôi', href: '#founder-vision' },
    { label: 'Chất liệu & Công nghệ', href: '#eco-fabrics-seamless' },
    { label: 'Bộ sưu tập', href: '#catalog-showcase' },
    { label: 'Dự án tiêu biểu', href: '#real-projects' },
    { label: 'Liên hệ B2B', href: '#quotation-download' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A1714]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(26,23,20,0.12)] border-b border-[#352E26]'
          : 'bg-[#1A1714] border-b border-[#352E26]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[74px] sm:h-[76px] flex items-center justify-between gap-4">
        {/* Brand Logo - Lớn hơn 10-15% */}
        <a href="#" className="flex items-center shrink-0 py-1" title="HDC Uniform - HUNI">
          <img
            src={resolveAsset(COMPANY_INFO.logoSrc)}
            alt="HDC Uniform Logo"
            className="h-11 sm:h-12 lg:h-[48px] w-auto object-contain transition-transform duration-200"
          />
        </a>

        {/* Navigation Menu Links (Desktop) - 14-15px, font-weight 500, spacing 26-32px */}
        <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-8 text-[14px] xl:text-[15px] font-medium text-[#D8CFBF]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors py-1 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: Duy nhất 1 CTA nổi bật "Nhận báo giá" (Champagne Gold #D4A373) + Hotline */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Hotline text nhỏ gọn thanh lịch */}
          <a
            href={COMPANY_INFO.hotlineTel}
            className="hidden xl:inline-flex items-center gap-2 text-[13px] font-medium text-[#C8BFB0] hover:text-white transition-colors"
            title={`Hotline: ${COMPANY_INFO.hotline}`}
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>{COMPANY_INFO.hotline}</span>
          </a>

          {/* Duy nhất 1 CTA nổi bật: "Nhận báo giá" - Pill Shape */}
          <a
            href="#quotation-download"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#D4A373] hover:bg-[#C29363] text-[#1A1714] text-[13px] sm:text-[14px] font-semibold transition-all duration-200 shadow-sm hover:scale-[1.02]"
          >
            Nhận báo giá
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1714] border-b border-[#352E26] px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-[14px] font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#352E26] flex items-center justify-between px-3 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-[#D4A373]" />
              Hotline: {COMPANY_INFO.hotline}
            </span>
            <a
              href={COMPANY_INFO.hotlineTel}
              className="text-[#D4A373] font-medium hover:underline"
            >
              Gọi ngay
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
