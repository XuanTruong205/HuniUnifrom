import React from 'react';
import { CASE_STUDIES } from '../../data/huni-master-data';
import { ImageSlot } from '../ImageSlot';
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Users,
} from 'lucide-react';

export const RealProjectShowcase: React.FC = () => {
  const [golfProject, kidsProject] = CASE_STUDIES;

  return (
    <section id="real-projects" className="py-20 sm:py-24 lg:py-28 bg-[#FAF6F0] relative overflow-hidden text-[#1E1C19]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE8DD] border border-[#DFD6C8] text-[12px] font-medium text-[#574F44]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7D6B56]" />
            <span>Hồ sơ năng lực & Dự án thực tế</span>
          </div>

          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-normal sm:font-medium text-[#1E1C19] tracking-tight leading-[1.18]">
            Hình Ảnh Thực Tế & <br className="hidden sm:block" />
            <span className="italic">Dự Án Tiêu Biểu</span>
          </h2>

          <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[#6E6559] max-w-2xl mx-auto font-normal">
            HDC Uniform vinh hạnh đồng hành cùng các sự kiện thể thao lãnh đạo cấp quốc gia và các giải pháp đồng phục học sinh tiêu chuẩn cao.
          </p>
        </div>

        {/* Content list */}
        <div className="mt-12 sm:mt-14 lg:mt-16 space-y-12">
          {/* ============================================================= */}
          {/* DỰ ÁN 1: GIẢI GOLF DNT 30 NĂM (Trang 8 Catalogue)            */}
          {/* ============================================================= */}
          {golfProject && (
            <div className="bg-white/80 rounded-[28px] p-6 sm:p-9 lg:p-11 border border-[#ECE4D8] shadow-[0_6px_24px_rgba(40,32,24,0.03)] space-y-7 relative overflow-hidden">
              {/* Header info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#ECE4D8]">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#363029] text-[#EAE0D3] text-[11px] font-semibold uppercase tracking-wider">
                      Đồng Phục Golf
                    </span>
                    <span className="flex items-center gap-1 text-[12px] text-[#7A7164]">
                      <MapPin className="w-3.5 h-3.5 text-[#8F6E43]" />
                      Sân Golf Long Biên - Hà Nội
                    </span>
                  </div>
                  <h3 className="font-serif text-[22px] sm:text-[26px] font-medium text-[#1E1C19] leading-snug">
                    {golfProject.title}
                  </h3>
                </div>

                {/* Verified Metrics từ Catalogue */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <div className="px-4 py-2 rounded-xl bg-[#FAF6F0] border border-[#ECE4D8] flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-[#8F6E43] shrink-0" />
                    <div>
                      <span className="text-[12px] font-semibold text-[#1E1C19] block">Kỷ Niệm 30 Năm</span>
                      <span className="text-[10px] text-[#7A7164]">Phong trào DNT Việt Nam</span>
                    </div>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-[#FAF6F0] border border-[#ECE4D8] flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-[#8F6E43] shrink-0" />
                    <div>
                      <span className="text-[12px] font-semibold text-[#1E1C19] block">Hàng Trăm Doanh Nhân</span>
                      <span className="text-[10px] text-[#7A7164]">Shark & Lãnh đạo tham dự</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bố cục 40% Text / 60% Images: 1 ảnh lớn + 2 ảnh nhỏ */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                {/* Cột 40% Text */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    <div className="bg-[#FAF6F0] p-4 sm:p-5 rounded-2xl border border-[#ECE4D8] space-y-1.5">
                      <span className="text-[11px] font-bold text-[#8C8070] tracking-[0.16em] uppercase flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8F6E43]" />
                        Nội dung sự kiện từ Catalogue:
                      </span>
                      <p className="text-[13px] sm:text-[14px] text-[#1E1C19] leading-[1.65] italic font-normal">
                        "{golfProject.description}"
                      </p>
                    </div>

                    <div className="space-y-1.5 text-[12px] text-[#1E1C19] bg-[#FAF6F0] p-4 rounded-2xl border border-[#ECE4D8]">
                      <p className="font-semibold text-[#1E1C19] uppercase tracking-wider text-[11px] mb-1">
                        Đại diện tham dự:
                      </p>
                      <p className="flex items-center gap-2 font-normal text-[#6E6559]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8F6E43] shrink-0" />
                        <span>Anh Đặng Hồng Anh - Chủ tịch hội DNT Việt Nam</span>
                      </p>
                      <p className="flex items-center gap-2 font-normal text-[#6E6559]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8F6E43] shrink-0" />
                        <span>Anh Đỗ Duy Liên - Phó Chủ tịch hội DNT Việt Nam</span>
                      </p>
                    </div>
                  </div>

                  <a
                    href="#quotation-download"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2B2620] hover:bg-[#1A1713] text-white font-medium text-[13px] shadow-sm transition-all hover:scale-[1.02] self-start"
                  >
                    <span>Xem thêm chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4A373]" />
                  </a>
                </div>

                {/* Cột 60% Images */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-3.5">
                  {/* 1 Large Photo */}
                  {golfProject.gallery[0] && (
                    <div className="sm:col-span-7 rounded-2xl overflow-hidden border border-[#ECE4D8] bg-white flex flex-col group">
                      <div className="relative h-full min-h-[280px] sm:min-h-0 flex-1 overflow-hidden">
                        <ImageSlot
                          slot={golfProject.gallery[0].slot}
                          aspect="auto"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          hideCaption={true}
                        />
                      </div>
                      <div className="p-3 bg-white border-t border-[#ECE4D8]">
                        <p className="text-[12px] font-medium text-[#1E1C19] line-clamp-1">
                          {golfProject.gallery[0].title}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 2 Smaller Photos */}
                  <div className="sm:col-span-5 flex flex-col gap-3.5">
                    {golfProject.gallery.slice(1, 3).map((item, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-2xl overflow-hidden border border-[#ECE4D8] bg-white flex flex-col group"
                      >
                        <div className="relative min-h-[130px] flex-1 overflow-hidden">
                          <ImageSlot
                            slot={item.slot}
                            aspect="auto"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            hideCaption={true}
                          />
                        </div>
                        <div className="p-2.5 bg-white border-t border-[#ECE4D8]">
                          <p className="text-[11.5px] font-medium text-[#1E1C19] line-clamp-1">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================= */}
          {/* DỰ ÁN 2: ĐỒNG PHỤC HỌC SINH IHDC KIDS (Trang 9-12)          */}
          {/* ============================================================= */}
          {kidsProject && (
            <div className="bg-white/80 rounded-[28px] p-6 sm:p-9 lg:p-11 border border-[#ECE4D8] shadow-[0_6px_24px_rgba(40,32,24,0.03)] space-y-7 relative overflow-hidden">
              {/* Header info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#ECE4D8]">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#363029] text-[#EAE0D3] text-[11px] font-semibold uppercase tracking-wider">
                      Đồng Phục Học Sinh
                    </span>
                    <span className="text-[12px] text-[#7A7164]">
                      {kidsProject.subtitle}
                    </span>
                  </div>
                  <h3 className="font-serif text-[22px] sm:text-[26px] font-medium text-[#1E1C19] leading-snug">
                    {kidsProject.title}
                  </h3>
                </div>

                {/* Verified Metrics */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <div className="px-4 py-2 rounded-xl bg-[#FAF6F0] border border-[#ECE4D8] flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#8F6E43] shrink-0" />
                    <div>
                      <span className="text-[12px] font-semibold text-[#1E1C19] block">Vải Kháng Khuẩn</span>
                      <span className="text-[10px] text-[#7A7164]">Mềm mại, an toàn làn da</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bố cục 40% Text / 60% Images: 1 ảnh lớn + 2 ảnh nhỏ */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                {/* Cột 40% Text */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    <div className="bg-[#FAF6F0] p-4 sm:p-5 rounded-2xl border border-[#ECE4D8] space-y-1.5">
                      <span className="text-[11px] font-bold text-[#8C8070] tracking-[0.16em] uppercase flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8F6E43]" />
                        Định hướng chất lượng học đường:
                      </span>
                      <p className="text-[13px] sm:text-[14px] text-[#1E1C19] leading-[1.65] italic font-normal">
                        "{kidsProject.description}"
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#ECE4D8] text-[12px] text-[#6E6559] space-y-1.5">
                      <p className="font-semibold text-[#1E1C19] uppercase tracking-wider text-[11px] mb-1">
                        Tiêu chuẩn học đường HDC Uniform:
                      </p>
                      <p className="flex items-center gap-2 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8F6E43] shrink-0" />
                        <span>Form dáng thoải mái, thấm hút mồ hôi tối đa</span>
                      </p>
                      <p className="flex items-center gap-2 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8F6E43] shrink-0" />
                        <span>Họa tiết dệt tinh xảo, đường may gia cố chắc chắn</span>
                      </p>
                    </div>
                  </div>

                  <a
                    href="#quotation-download"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2B2620] hover:bg-[#1A1713] text-white font-medium text-[13px] shadow-sm transition-all hover:scale-[1.02] self-start"
                  >
                    <span>Tư vấn mẫu đồng phục học sinh</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4A373]" />
                  </a>
                </div>

                {/* Cột 60% Images */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-3.5">
                  {/* 1 Large Photo */}
                  {kidsProject.gallery[0] && (
                    <div className="sm:col-span-7 rounded-2xl overflow-hidden border border-[#ECE4D8] bg-white flex flex-col group">
                      <div className="relative h-full min-h-[280px] sm:min-h-0 flex-1 overflow-hidden">
                        <ImageSlot
                          slot={kidsProject.gallery[0].slot}
                          aspect="auto"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          hideCaption={true}
                        />
                      </div>
                      <div className="p-3 bg-white border-t border-[#ECE4D8]">
                        <p className="text-[12px] font-medium text-[#1E1C19] line-clamp-1">
                          {kidsProject.gallery[0].title}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 2 Smaller Photos */}
                  <div className="sm:col-span-5 flex flex-col gap-3.5">
                    {kidsProject.gallery.slice(1, 3).map((item, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-2xl overflow-hidden border border-[#ECE4D8] bg-white flex flex-col group"
                      >
                        <div className="relative min-h-[130px] flex-1 overflow-hidden">
                          <ImageSlot
                            slot={item.slot}
                            aspect="auto"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            hideCaption={true}
                          />
                        </div>
                        <div className="p-2.5 bg-white border-t border-[#ECE4D8]">
                          <p className="text-[11.5px] font-medium text-[#1E1C19] line-clamp-1">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
