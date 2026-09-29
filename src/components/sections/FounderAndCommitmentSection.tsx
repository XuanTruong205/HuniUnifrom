import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../../data/huni-master-data';
import { ImageSlot } from '../ImageSlot';
import {
  Quote,
  Users,
  UserCheck,
  ShieldCheck,
  Palette,
  Leaf,
  Clock,
  ArrowRight,
} from 'lucide-react';

const CORE_USPS = [
  {
    id: 'usp-design',
    icon: Palette,
    title: 'Thiết kế độc quyền theo nhận diện',
    desc: 'Tư vấn phom dáng và bảng màu chuẩn chỉnh theo hệ thống nhận diện thương hiệu của từng doanh nghiệp.',
  },
  {
    id: 'usp-eco',
    icon: Leaf,
    title: 'Chất liệu sinh thái & May ép Seamless',
    desc: 'Ứng dụng nguồn sợi tự nhiên bản địa (Sen, Chuối, Xơ Dừa) và công nghệ dán nẹp phẳng phiu không ma sát.',
  },
  {
    id: 'usp-kcs',
    icon: ShieldCheck,
    title: 'Tiến độ chuẩn xác & KCS 100%',
    desc: 'Quy trình kiểm soát chất lượng nghiêm ngặt từng đường kim mũi chỉ, bàn giao chuẩn hẹn cam kết.',
  },
  {
    id: 'usp-sample',
    icon: Clock,
    title: 'May mẫu thử 24h & Giao hàng toàn quốc',
    desc: 'Cung cấp tập mẫu vải và may áo mẫu gửi tận nơi hoàn toàn miễn phí trước khi sản xuất hàng loạt.',
  },
];

export const FounderAndCommitmentSection: React.FC = () => {
  const { leadership } = COMPANY_INFO;
  const [activePhotoTab, setActivePhotoTab] = useState<'portrait' | 'team'>('portrait');

  const currentSlot =
    activePhotoTab === 'portrait'
      ? leadership.portraitSlot
      : leadership.showroomTeamSlot;

  return (
    <section id="founder-vision" className="py-20 sm:py-24 lg:py-28 bg-[#F7F8FC] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Spacing Heading -> Description 14-18px */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E7EC] text-[12px] sm:text-[13px] font-medium text-[#101828]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7B936]" />
            <span>Ban lãnh đạo & Chuẩn mực thương hiệu</span>
          </div>

          <h2 className="mt-3.5 sm:mt-4 text-[30px] sm:text-[36px] lg:text-[38px] font-semibold text-[#08182F] tracking-tight leading-[1.2]">
            Nâng Tầm Giá Trị Thương Hiệu Doanh Nghiệp
          </h2>

          <p className="mt-3.5 sm:mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-[#667085] max-w-2xl mx-auto font-normal">
            HDC Uniform cam kết kiến tạo giải pháp đồng phục chỉn chu, tôn vinh hình ảnh và bản sắc văn hóa riêng biệt của từng đối tác doanh nghiệp.
          </p>
        </div>

        {/* ========================================================= */}
        {/* MAIN SECTION SPREAD: SPACING 40-56px TỪ DESCRIPTION      */}
        {/* Không lồng card-trong-card, giảm border, shadow nhẹ       */}
        {/* ========================================================= */}
        <div className="mt-10 sm:mt-12 lg:mt-14 bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-[#E4E7EC] shadow-[0_4px_20px_rgba(16,24,40,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Cột Trái: Ảnh nhân viên / Founder phóng lớn hơn 10-15% (5 Cột) */}
            <div className="lg:col-span-5 space-y-3">
              {/* Photo Switcher Tab */}
              <div className="flex items-center gap-1.5 p-1 bg-[#F7F8FC] rounded-lg border border-[#E4E7EC]">
                <button
                  onClick={() => setActivePhotoTab('portrait')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-md text-[13px] font-medium transition-all duration-200 ${
                    activePhotoTab === 'portrait'
                      ? 'bg-[#08182F] text-white shadow-2xs'
                      : 'text-[#667085] hover:text-[#08182F]'
                  }`}
                >
                  <UserCheck className={`w-3.5 h-3.5 ${activePhotoTab === 'portrait' ? 'text-[#E7B936]' : 'text-slate-400'}`} />
                  <span>Founder & CEO</span>
                </button>
                <button
                  onClick={() => setActivePhotoTab('team')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-md text-[13px] font-medium transition-all duration-200 ${
                    activePhotoTab === 'team'
                      ? 'bg-[#08182F] text-white shadow-2xs'
                      : 'text-[#667085] hover:text-[#08182F]'
                  }`}
                >
                  <Users className={`w-3.5 h-3.5 ${activePhotoTab === 'team' ? 'text-[#E7B936]' : 'text-slate-400'}`} />
                  <span>Đội ngũ Showroom</span>
                </button>
              </div>

              {/* Photo Display - Phóng lớn hơn 10-15% */}
              <div className="relative overflow-hidden rounded-xl bg-slate-50 border border-[#E4E7EC]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhotoTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ImageSlot
                      slot={currentSlot}
                      aspect={activePhotoTab === 'portrait' ? 'portrait' : 'wide'}
                      className="w-full h-[470px] sm:h-[510px] object-cover"
                      badgeLabel={
                        activePhotoTab === 'portrait'
                          ? 'Bà Nguyễn Thị Thương'
                          : 'Showroom HDC Uniform'
                      }
                      hideCaption={true}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Nameplate - Nhẹ nhàng, không thêm card thừa */}
                <div className="p-3 bg-white/95 border-t border-[#E4E7EC] flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[14px] text-[#101828]">
                      {leadership.founderName}
                    </h4>
                    <p className="text-[12px] text-[#667085]">
                      {leadership.title}
                    </p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#08182F] text-[#E7B936] font-semibold text-[11px]">
                    CEO
                  </span>
                </div>
              </div>
            </div>

            {/* Cột Phải: Editorial Quote & 4 Trụ Cột USP (7 Cột) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quote yêu cầu chính xác: font-size 20-24px, font-weight 500, không quá đậm */}
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-[#E7B936]" />
                <blockquote className="text-[20px] sm:text-[22px] lg:text-[24px] font-medium text-[#101828] leading-[1.35] tracking-tight">
                  “Đồng phục không chỉ để mặc — đó là hình ảnh thương hiệu của doanh nghiệp.”
                </blockquote>
                <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#667085] font-normal">
                  "{leadership.message}"
                </p>
              </div>

              {/* 4 Trụ Cột USP Chính - Bỏ viền dày, tinh tế */}
              <div className="pt-4 border-t border-[#E4E7EC] space-y-3">
                <h4 className="text-[12px] font-semibold text-[#08182F] uppercase tracking-wider">
                  4 Cam kết giá trị cốt lõi:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {CORE_USPS.map((usp) => {
                    const Icon = usp.icon;
                    return (
                      <div
                        key={usp.id}
                        className="p-3 rounded-lg bg-[#F7F8FC] border border-[#E4E7EC] space-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[#E7B936] shrink-0" />
                          <h5 className="font-semibold text-[13px] text-[#101828] leading-tight">
                            {usp.title}
                          </h5>
                        </div>
                        <p className="text-[12px] text-[#667085] leading-relaxed pl-6 font-normal">
                          {usp.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-1">
                <a
                  href="#quotation-download"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[9px] bg-[#08182F] hover:bg-[#071329] text-white text-[13px] sm:text-[14px] font-semibold shadow-xs transition-all duration-200"
                >
                  <span>Nhận tư vấn may mẫu miễn phí</span>
                  <ArrowRight className="w-4 h-4 text-[#E7B936]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
