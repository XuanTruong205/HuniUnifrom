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
    <section id="real-projects" className="py-20 sm:py-24 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Spacing Heading -> Description 14-18px */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8FC] border border-[#E4E7EC] text-[12px] sm:text-[13px] font-medium text-[#101828]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7B936]" />
            <span>Hồ sơ năng lực & Dự án thực tế</span>
          </div>

          <h2 className="mt-3.5 sm:mt-4 text-[30px] sm:text-[36px] lg:text-[38px] font-semibold text-[#08182F] tracking-tight leading-[1.2]">
            Hình Ảnh Thực Tế & Dự Án Tiêu Biểu
          </h2>

          <p className="mt-3.5 sm:mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-[#667085] max-w-2xl mx-auto font-normal">
            HDC Uniform vinh hạnh đồng hành cùng các sự kiện thể thao lãnh đạo cấp quốc gia và các giải pháp đồng phục học sinh tiêu chuẩn cao.
          </p>
        </div>

        {/* Content list: Spacing 40-56px */}
        <div className="mt-10 sm:mt-12 lg:mt-14 space-y-10">
          {/* ============================================================= */}
          {/* DỰ ÁN 1: GIẢI GOLF DNT 30 NĂM (Trang 8 Catalogue)            */}
          {/* ============================================================= */}
          {golfProject && (
            <div className="bg-[#F7F8FC] rounded-2xl p-6 sm:p-9 lg:p-11 border border-[#E4E7EC] shadow-[0_4px_20px_rgba(16,24,40,0.04)] space-y-7 relative overflow-hidden">
              {/* Header info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#E4E7EC]">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#08182F] text-white text-[11px] font-semibold uppercase tracking-wider">
                      Đồng Phục Golf
                    </span>
                    <span className="flex items-center gap-1 text-[12px] text-[#667085]">
                      <MapPin className="w-3.5 h-3.5 text-[#E7B936]" />
                      Sân Golf Long Biên - Hà Nội
                    </span>
                  </div>
                  <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#08182F] leading-snug">
                    {golfProject.title}
                  </h3>
                </div>

                {/* Verified Metrics từ Catalogue (Không tự bịa) */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <div className="px-3 py-1.5 rounded-lg bg-white border border-[#E4E7EC] flex items-center gap-2 shadow-2xs">
                    <Calendar className="w-4 h-4 text-[#E7B936] shrink-0" />
                    <div>
                      <span className="text-[12px] font-semibold text-[#101828] block">Kỷ Niệm 30 Năm</span>
                      <span className="text-[10px] text-[#667085]">Phong trào DNT Việt Nam</span>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 rounded-lg bg-white border border-[#E4E7EC] flex items-center gap-2 shadow-2xs">
                    <Users className="w-4 h-4 text-[#E7B936] shrink-0" />
                    <div>
                      <span className="text-[12px] font-semibold text-[#101828] block">Hàng Trăm Doanh Nhân</span>
                      <span className="text-[10px] text-[#667085]">Shark & Lãnh đạo tham dự</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bố cục 40% Text / 60% Images: 1 ảnh lớn + 2 ảnh nhỏ */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                {/* Cột 40% Text (5/12) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E4E7EC] space-y-1.5">
                      <span className="text-[11px] font-semibold text-[#E7B936] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E7B936]" />
                        Nội dung sự kiện từ Catalogue:
                      </span>
                      <p className="text-[13px] sm:text-[14px] text-[#101828] leading-[1.6] italic font-normal">
                        "{golfProject.description}"
                      </p>
                    </div>

                    <div className="space-y-1.5 text-[12px] text-[#101828] bg-white p-3.5 rounded-xl border border-[#E4E7EC]">
                      <p className="font-semibold text-[#08182F] uppercase tracking-wider text-[11px] mb-1">
                        Đại diện tham dự:
                      </p>
                      <p className="flex items-center gap-2 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E7B936] shrink-0" />
                        <span>Anh Đặng Hồng Anh - Chủ tịch hội DNT Việt Nam</span>
                      </p>
                      <p className="flex items-center gap-2 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E7B936] shrink-0" />
                        <span>Anh Đỗ Duy Liên - Phó Chủ tịch hội DNT Việt Nam</span>
                      </p>
                    </div>
                  </div>

                  <a
                    href="#quotation-download"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[9px] bg-[#08182F] hover:bg-[#071329] text-white font-medium text-[13px] shadow-2xs transition-colors self-start"
                  >
                    <span>Xem dự án</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E7B936]" />
                  </a>
                </div>

                {/* Cột 60% Images (7/12) - 1 ảnh lớn + 2 ảnh nhỏ */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-3.5">
                  {/* 1 Large Photo */}
                  {golfProject.gallery[0] && (
                    <div className="sm:col-span-7 rounded-xl overflow-hidden shadow-2xs border border-[#E4E7EC] bg-white flex flex-col group">
                      <div className="relative h-full min-h-[280px] sm:min-h-0 flex-1 overflow-hidden">
                        <ImageSlot
                          slot={golfProject.gallery[0].slot}
                          aspect="auto"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          hideCaption={true}
                        />
                      </div>
                      <div className="p-2.5 bg-white border-t border-[#E4E7EC]">
                        <p className="text-[12px] font-medium text-[#101828] line-clamp-1">
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
                        className="flex-1 rounded-xl overflow-hidden shadow-2xs border border-[#E4E7EC] bg-white flex flex-col group"
                      >
                        <div className="relative min-h-[130px] flex-1 overflow-hidden">
                          <ImageSlot
                            slot={item.slot}
                            aspect="auto"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            hideCaption={true}
                          />
                        </div>
                        <div className="p-2 bg-white border-t border-[#E4E7EC]">
                          <p className="text-[11px] font-medium text-[#101828] line-clamp-1">
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
            <div className="bg-[#F7F8FC] rounded-2xl p-6 sm:p-9 lg:p-11 border border-[#E4E7EC] shadow-[0_4px_20px_rgba(16,24,40,0.04)] space-y-7 relative overflow-hidden">
              {/* Header info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#E4E7EC]">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#08182F] text-white text-[11px] font-semibold uppercase tracking-wider">
                      Đồng Phục Học Sinh
                    </span>
                    <span className="text-[12px] text-[#667085]">
                      {kidsProject.subtitle}
                    </span>
                  </div>
                  <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#08182F] leading-snug">
                    {kidsProject.title}
                  </h3>
                </div>

                {/* Verified Metrics */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <div className="px-3 py-1.5 rounded-lg bg-white border border-[#E4E7EC] flex items-center gap-2 shadow-2xs">
                    <ShieldCheck className="w-4 h-4 text-[#E7B936] shrink-0" />
                    <div>
                      <span className="text-[12px] font-semibold text-[#101828] block">Vải Kháng Khuẩn</span>
                      <span className="text-[10px] text-[#667085]">Mềm mại, an toàn làn da</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bố cục 40% Text / 60% Images: 1 ảnh lớn + 2 ảnh nhỏ */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                {/* Cột 40% Text (5/12) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E4E7EC] space-y-1.5">
                      <span className="text-[11px] font-semibold text-[#E7B936] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E7B936]" />
                        Định hướng chất lượng học đường:
                      </span>
                      <p className="text-[13px] sm:text-[14px] text-[#101828] leading-[1.6] italic font-normal">
                        "{kidsProject.description}"
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-[#E4E7EC] text-[12px] text-[#667085] space-y-1.5">
                      <p className="font-semibold text-[#08182F] uppercase tracking-wider text-[11px] mb-1">
                        Tiêu chuẩn học đường HDC Uniform:
                      </p>
                      <p className="flex items-center gap-2 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E7B936] shrink-0" />
                        <span>Form dáng thoải mái, không gò bó vận động cả ngày</span>
                      </p>
                      <p className="flex items-center gap-2 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E7B936] shrink-0" />
                        <span>Chất liệu vải thân thiện môi trường, không kích ứng da</span>
                      </p>
                      <p className="flex items-center gap-2 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E7B936] shrink-0" />
                        <span>Bền màu qua nhiều lần giặt, giữ phom phẳng phiu</span>
                      </p>
                    </div>
                  </div>

                  <a
                    href="#quotation-download"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[9px] bg-[#08182F] hover:bg-[#071329] text-white font-medium text-[13px] shadow-2xs transition-colors self-start"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E7B936]" />
                  </a>
                </div>

                {/* Cột 60% Images (7/12) - 1 ảnh lớn + 2 ảnh nhỏ */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-3.5">
                  {/* 1 Large Photo */}
                  {kidsProject.gallery[0] && (
                    <div className="sm:col-span-7 rounded-xl overflow-hidden shadow-2xs border border-[#E4E7EC] bg-white flex flex-col group">
                      <div className="relative h-full min-h-[280px] sm:min-h-0 flex-1 overflow-hidden">
                        <ImageSlot
                          slot={kidsProject.gallery[0].slot}
                          aspect="auto"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          hideCaption={true}
                        />
                      </div>
                      <div className="p-2.5 bg-white border-t border-[#E4E7EC]">
                        <p className="text-[12px] font-medium text-[#101828] line-clamp-1">
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
                        className="flex-1 rounded-xl overflow-hidden shadow-2xs border border-[#E4E7EC] bg-white flex flex-col group"
                      >
                        <div className="relative min-h-[130px] flex-1 overflow-hidden">
                          <ImageSlot
                            slot={item.slot}
                            aspect="auto"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            hideCaption={true}
                          />
                        </div>
                        <div className="p-2 bg-white border-t border-[#E4E7EC]">
                          <p className="text-[11px] font-medium text-[#101828] line-clamp-1">
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
