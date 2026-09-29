import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../../data/huni-master-data';
import { PhoneCall, ArrowUp } from 'lucide-react';

export const FloatingContactBar: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Thanh liên hệ nhanh" className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* 1. Nút Gọi Ngay Hotline */}
      <a
        href={COMPANY_INFO.hotlineTel}
        className="group relative flex items-center justify-end"
        title={`Gọi Hotline: ${COMPANY_INFO.hotline}`}
      >
        {/* Tooltip Badge on hover */}
        <span className="hidden sm:inline-block absolute right-14 whitespace-nowrap bg-[#1A1714] text-[#FAF6F0] text-xs font-medium px-3.5 py-1.5 rounded-full shadow-md border border-[#352E26] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Hotline: {COMPANY_INFO.hotline}
        </span>

        <div className="w-12 h-12 rounded-full bg-[#D4A373] hover:bg-[#C29363] text-[#1A1714] flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">
          <PhoneCall className="w-5 h-5 text-[#1A1714]" />
        </div>
      </a>

      {/* 2. Nút Chat Zalo */}
      <a
        href="https://zalo.me/0984959586"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-end"
        title={`Chat Zalo: ${COMPANY_INFO.hotline}`}
      >
        <span className="hidden sm:inline-block absolute right-14 whitespace-nowrap bg-[#1A1714] text-[#FAF6F0] text-xs font-medium px-3.5 py-1.5 rounded-full shadow-md border border-[#352E26] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat Zalo: {COMPANY_INFO.hotline}
        </span>

        <div className="w-12 h-12 rounded-full bg-[#0068ff] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 font-bold text-xs">
          Zalo
        </div>
      </a>

      {/* 3. Nút Cuộn Lên Đầu Trang */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="group relative flex items-center justify-end cursor-pointer"
            title="Cuộn lên đầu trang"
            aria-label="Cuộn lên đầu trang"
          >
            <span className="hidden sm:inline-block absolute right-14 whitespace-nowrap bg-[#1A1714] text-[#FAF6F0] text-xs font-medium px-3 py-1 rounded-full shadow-md border border-[#352E26] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Lên đầu trang
            </span>

            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#1A1714] border border-[#ECE4D8] flex items-center justify-center shadow-md hover:bg-white active:scale-95 transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </aside>
  );
};
