import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../../data/huni-master-data';
import { ImageSlot } from '../ImageSlot';
import {
  Quote,
  Sparkles,
  PhoneCall,
  Award,
  Users,
  UserCheck,
  CheckCircle,
} from 'lucide-react';

export const FounderSection: React.FC = () => {
  const { leadership } = COMPANY_INFO;
  const [activePhotoTab, setActivePhotoTab] = useState<'portrait' | 'team'>('portrait');

  const currentSlot =
    activePhotoTab === 'portrait'
      ? leadership.portraitSlot
      : leadership.showroomTeamSlot;

  return (
    <section id="founder-vision" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-slate-100/80 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-300/60 text-xs font-bold text-amber-950 tracking-wider uppercase shadow-2xs"
          >
            <Award className="w-4 h-4 text-amber-600" />
            <span>02 / NGƯỜI SÁNG LẬP & TẦM NHÌN CHIẾN LƯỢC</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1b33] tracking-tight leading-tight"
          >
            ĐỒNG PHỤC IHDC <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a1b33] via-slate-800 to-amber-600">
              NÂNG TẦM GIÁ TRỊ THƯƠNG HIỆU DOANH NGHIỆP
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            Hơn 10 năm tâm huyết trong ngành thời trang may đo B2B, HDC Fashion kiến tạo giải pháp đồng phục ấn tượng, độc đáo, tôn vinh hình ảnh và bản sắc thương hiệu của từng đối tác.
          </motion.p>
        </div>

        {/* Editorial Spread Container */}
        <div className="bg-gradient-to-br from-slate-50/80 via-white to-amber-50/30 rounded-[36px] p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Cột Trái: Trưng Bày Hình Ảnh CEO & Showroom Team (5 Cột) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200 shadow-md">
                {/* Switcher Tab */}
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl mb-3 border border-slate-200">
                  <button
                    onClick={() => setActivePhotoTab('portrait')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                      activePhotoTab === 'portrait'
                        ? 'bg-white text-[#0a1b33] shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <UserCheck className="w-3.5 h-3.5 text-amber-600" />
                    <span>Chân dung Founder</span>
                  </button>
                  <button
                    onClick={() => setActivePhotoTab('team')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                      activePhotoTab === 'team'
                        ? 'bg-white text-[#0a1b33] shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5 text-amber-600" />
                    <span>Đội ngũ Showroom</span>
                  </button>
                </div>

                {/* Photo Display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhotoTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageSlot
                      slot={currentSlot}
                      aspect={activePhotoTab === 'portrait' ? 'portrait' : 'wide'}
                      className="rounded-2xl max-h-[460px] object-cover"
                      badgeLabel={
                        activePhotoTab === 'portrait'
                          ? 'Bà Nguyễn Thị Thương'
                          : 'Showroom HDC Fashion'
                      }
                      hideCaption={true}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Nameplate Card */}
                <div className="mt-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-base text-[#0a1b33]">
                        {leadership.founderName}
                      </h4>
                      <p className="text-[11px] font-semibold text-amber-600 tracking-wide mt-0.5">
                        {leadership.title}
                      </p>
                    </div>
                    <span className="w-9 h-9 rounded-full bg-amber-500/10 text-amber-700 font-black text-xs flex items-center justify-center border border-amber-500/20 shadow-xs">
                      CEO
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột Phải: Thư Ngỏ Lãnh Đạo & Triết Lý Sản Xuất (7 Cột) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quote Block */}
              <div className="relative bg-white p-6 sm:p-8 rounded-3xl border border-amber-200/70 shadow-sm space-y-4">
                <Quote className="w-10 h-10 text-amber-500/40" />
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic font-medium">
                  "{leadership.message}"
                </p>
                <div className="pt-3 flex items-center justify-between border-t border-slate-100 text-xs">
                  <div>
                    <span className="font-bold text-[#0a1b33] block text-sm">
                      {leadership.founderName}
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      {leadership.title}
                    </span>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider shadow-xs">
                    {COMPANY_INFO.mainSlogan}
                  </span>
                </div>
              </div>

              {/* 3 Core Brand Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0a1b33]">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>May đo theo yêu cầu</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Linh hoạt từ đơn số lượng nhỏ đến đơn lớn toàn quốc
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0a1b33]">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Đột phá chất liệu</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Tiên phong vải sinh thái tự nhiên & công nghệ Seamless
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0a1b33]">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>Tôn vinh văn hóa</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Đưa các họa tiết di sản văn hóa Việt Nam vào thời trang
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={COMPANY_INFO.hotlineTel}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a152d] text-white text-xs font-bold shadow-md hover:bg-slate-900 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Kết Nối Trực Tiếp: {COMPANY_INFO.hotline}</span>
                </a>
                <a
                  href="#eco-fabrics-seamless"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0a1b33] text-xs font-bold transition-colors"
                >
                  <span>Khám Phá Chất Liệu Xanh</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
