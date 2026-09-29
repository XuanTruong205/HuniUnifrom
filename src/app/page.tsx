import React from 'react';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { PartnerMarqueeStrip } from '@/components/common/PartnerMarqueeStrip';
import { FounderSection } from '@/components/sections/FounderSection';
import { EcoFabricAndSeamlessSection } from '@/components/sections/EcoFabricAndSeamlessSection';
import { FullCatalogShowcase } from '@/components/sections/FullCatalogShowcase';
import { RealProjectShowcase } from '@/components/sections/RealProjectShowcase';
import { B2BCommitmentAndProcessSection } from '@/components/sections/B2BCommitmentAndProcessSection';
import { B2BQuotationAndDownloadForm } from '@/components/forms/B2BQuotationAndDownloadForm';
import { CompleteFooter } from '@/components/layout/CompleteFooter';
import { FloatingContactBar } from '@/components/common/FloatingContactBar';

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  authors?: Array<{ name: string; url?: string }>;
  creator?: string;
  publisher?: string;
  openGraph?: {
    title: string;
    description: string;
    url?: string;
    siteName?: string;
    locale?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title: string;
    description: string;
  };
  alternates?: {
    canonical?: string;
  };
}

export const metadata: PageMetadata = {
  title: 'HDC FASHION | ĐỒNG PHỤC IHDC - Phong Cách Tạo Thành Công',
  description:
    'HDC Fashion (Đồng Phục IHDC) - Chuyên gia đồng phục: Chất liệu xanh bền vững (Modal, Bamboo, Sợi Bạc Hà, Sợi Sen, Sợi Chuối, Sợi Xơ Dừa), công nghệ Seamless không đường may, áo Polo Anti-UV, đồng phục học sinh IHDC Kids. Hotline: 0984 95 95 86. VP: Số 6 Kim Đồng, Hoàng Mai, Hà Nội.',
  keywords: [
    'HDC FASHION',
    'ĐỒNG PHỤC IHDC',
    'hdcfashion.vn',
    'sơ mi không đường may',
    'công nghệ Seamless',
    'áo polo anti-uv',
    'chất liệu xanh bền vững',
    'sợi sen',
    'sợi chuối',
    'đồng phục IHDC Kids',
    'đồng phục học sinh',
    'đồng phục golf',
  ],
  authors: [{ name: 'HDC FASHION', url: 'https://hdcfashion.vn' }],
  creator: 'HDC FASHION (ĐỒNG PHỤC IHDC)',
  publisher: 'HDC FASHION',
  openGraph: {
    title: 'HDC FASHION | ĐỒNG PHỤC IHDC - Phong Cách Tạo Thành Công',
    description:
      'Đồng phục IHDC - Nâng tầm giá trị thương hiệu của bạn và doanh nghiệp. Chất liệu vải sinh học tự nhiên, công nghệ Seamless và họa tiết di sản văn hóa Việt Nam.',
    url: 'https://hdcfashion.vn',
    siteName: 'HDC FASHION - ĐỒNG PHỤC IHDC',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HDC FASHION | ĐỒNG PHỤC IHDC - Phong Cách Tạo Thành Công',
    description:
      'Đồng phục IHDC - Nâng tầm giá trị thương hiệu của bạn và doanh nghiệp.',
  },
  alternates: {
    canonical: 'https://hdcfashion.vn',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fcfcfd] text-[#0a1b33] font-sans antialiased selection:bg-amber-200 selection:text-slate-900">
      {/* Thanh Điều Hướng Header (Logo HDC Fashion, Hotline, Địa Chỉ Hà Nội) */}
      <Header />

      {/* 01. Hero Banner: Định Vị Thương Hiệu & 4 Trụ Cột Năng Lực B2B */}
      <HeroSection />

      {/* Dải Logo Đối Tác & Khách Hàng Đồng Hành Cùng HDC Fashion */}
      <PartnerMarqueeStrip />

      {/* 02. Người Sáng Lập & Tầm Nhìn Chiến Lược: Bà Nguyễn Thị Thương (Founder & CEO) */}
      <FounderSection />

      {/* 03. Đột Phá Chất Liệu Xanh Bền Vững & Công Nghệ May Seamless Liền Mạch */}
      <EcoFabricAndSeamlessSection />

      {/* 04. Bộ Sưu Tập Sản Phẩm Chủ Lực (Sơ mi Seamless, Polo Anti-UV, IHDC Kids, Phụ Kiện) */}
      <FullCatalogShowcase />

      {/* 05. Hồ Sơ Năng Lực & Dự Án Thực Tế (Giải Golf 30 Năm DNT & Đồng Phục Học Đường) */}
      <RealProjectShowcase />

      {/* 06. 9 Cam Kết Vàng B2B & Quy Trình May Đo Chuẩn 8 Bước */}
      <B2BCommitmentAndProcessSection />

      {/* 07. Đăng Ký Tư Vấn & Nhận Mẫu Vải Trực Tiếp Tại Doanh Nghiệp */}
      <B2BQuotationAndDownloadForm />

      {/* Chân Trang Hoàn Chỉnh */}
      <CompleteFooter />

      {/* Thanh Phím Tắt Nổi (Gọi Ngay, Chat Zalo, Cuộn Đầu Trang) */}
      <FloatingContactBar />
    </main>
  );
}
