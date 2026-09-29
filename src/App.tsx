import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { PartnerMarqueeStrip } from './components/common/PartnerMarqueeStrip';
import { FounderAndCommitmentSection } from './components/sections/FounderAndCommitmentSection';
import { EcoFabricAndSeamlessSection } from './components/sections/EcoFabricAndSeamlessSection';
import { FullCatalogShowcase } from './components/sections/FullCatalogShowcase';
import { RealProjectShowcase } from './components/sections/RealProjectShowcase';
import { B2BQuotationAndDownloadForm } from './components/forms/B2BQuotationAndDownloadForm';
import { CompleteFooter } from './components/layout/CompleteFooter';
import { FloatingContactBar } from './components/common/FloatingContactBar';

export const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1E1C19] font-sans antialiased selection:bg-[#EAE0D3] selection:text-[#1E1C19]">
      {/* 0. Top Luxury Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C29363] via-[#D4A373] to-[#E5C198] origin-left z-[9999] pointer-events-none"
        style={{ scaleX }}
      />

      {/* 1. Header (Sticky, 76px, Navy/Blur, CTA Nhận báo giá) */}
      <Header />

      {/* 2. Hero Section (Luxury Espresso #1A1714, H1 Serif, CTA Champagne Gold #D4A373, Trust Pillars) */}
      <HeroSection />

      {/* 2.5. Partner Marquee Scroller */}
      <PartnerMarqueeStrip />

      {/* 3. Section Giới Thiệu HDC (Founder, Editorial Quote, 4 USPs) */}
      <FounderAndCommitmentSection />

      {/* 4. Chất Liệu & Công Nghệ (3 Nhóm: Vải cao cấp • Công nghệ may • Kiểm soát chất lượng) */}
      <EcoFabricAndSeamlessSection />

      {/* 5. Product Collection (70-75% Image, aspect 4:5, Hover scale 1.04, translateY -4px, CTA Xem chi tiết) */}
      <FullCatalogShowcase />

      {/* 6. Case Study / Dự Án Thực Tế (40% Text / 60% Images, 1 Lớn + 2 Nhỏ) */}
      <RealProjectShowcase />

      {/* 7. Form Đặt Đồng Phục (3 Nhóm, Input 48-52px, Heading "Nhận tư vấn & báo giá") */}
      <B2BQuotationAndDownloadForm />

      {/* 8. Footer (Pre-footer CTA banner + Chân trang) */}
      <CompleteFooter />

      {/* 9. Floating Contact Bar */}
      <FloatingContactBar />
    </div>
  );
};

export default App;
