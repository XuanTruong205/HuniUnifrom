import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, IHDC_POLICIES } from '../../data/huni-master-data';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  ArrowRight,
  ClipboardList,
  Palette,
  Scissors,
  CheckCircle,
  Truck,
  FileCheck,
  Users2,
  Headphones,
} from 'lucide-react';

const PRODUCTION_STEPS = [
  { step: '01', title: 'Tiếp nhận yêu cầu', desc: 'Tư vấn ý tưởng, chất liệu và phong cách đồng phục', icon: Headphones },
  { step: '02', title: 'Thiết kế mẫu 2D/3D', desc: 'Miễn phí thiết kế, không giới hạn số lần sửa đổi', icon: Palette },
  { step: '03', title: 'Lựa chọn chất liệu', desc: 'Gửi mẫu vải thực tế tận nơi để khách hàng kiểm tra', icon: ClipboardList },
  { step: '04', title: 'May mẫu thử chuẩn', desc: 'May áo mẫu duyệt form dáng và đường ép seam thực tế', icon: Scissors },
  { step: '05', title: 'Ký kết & Sản xuất', desc: 'Lên chuyền may hàng loạt theo chuẩn kích thước cơ thể', icon: Users2 },
  { step: '06', title: 'Kiểm định KCS', desc: 'Kiểm tra kỹ thuật từng đường may, nẹp áo và mũi chỉ', icon: FileCheck },
  { step: '07', title: 'Đóng gói & Bàn giao', desc: 'Giao hàng miễn phí toàn quốc đúng hẹn hợp đồng', icon: Truck },
  { step: '08', title: 'Bảo hành & Hậu mãi', desc: 'Đồng hành dài hạn, hỗ trợ phát sinh mẫu linh hoạt', icon: CheckCircle },
];

export const B2BCommitmentAndProcessSection: React.FC = () => {
  return (
    <section id="ihdc-commitments" className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-xs font-bold text-slate-900 tracking-wider uppercase shadow-2xs"
          >
            <ShieldCheck className="w-4 h-4 text-slate-800" />
            <span>06 / CHÍNH SÁCH CAM KẾT & QUY TRÌNH MAY ĐO CHUẨN</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1b33] tracking-tight leading-tight"
          >
            9 Cam Kết Vàng B2B & Quy Trình 8 Bước
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            HDC Fashion minh bạch trong từng cam kết dịch vụ và quy trình sản xuất, giúp quý đối tác doanh nghiệp và trường học hoàn toàn an tâm khi hợp tác.
          </motion.p>
        </div>

        {/* 9 CAM KẾT VÀNG TỪ CATALOGUE TRANG 7 & 10 */}
        <div className="bg-white rounded-[36px] p-6 sm:p-10 border border-slate-200 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
                Chính Sách Khách Hàng Doanh Nghiệp
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1b33]">
                9 Điểm Tựa Vững Chắc Cho Mọi Hợp Đồng B2B
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full w-fit">
              Trang 7 & 10 Catalogue HDC
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {IHDC_POLICIES.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-4 rounded-2xl border transition-all flex items-start gap-3 bg-white/90 border-slate-200/90 hover:bg-[#f5f6fe] hover:border-[#999de9]/70 hover:shadow-xs group"
              >
                <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 text-xs group-hover:bg-[#999de9] group-hover:text-white transition-colors">
                  {item.iconType === 'star' ? (
                    <Sparkles className="w-3.5 h-3.5" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  )}
                </div>
                <span className="text-xs font-semibold text-[#0a1b33] leading-relaxed">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* QUY TRÌNH SẢN XUẤT 8 BƯỚC CHUẨN MỰC */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Tiến Độ & Kiểm Soát Chất Lượng
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1b33]">
              Quy Trình May Đo B2B Chuẩn 8 Bước
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Từ tiếp nhận ý tưởng sơ khởi đến sản phẩm hoàn hảo trên tay khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTION_STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="group p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#999de9] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-black text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                        {s.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-[#0a1b33] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="font-extrabold text-sm text-[#0a1b33] leading-snug">
                      {s.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0a152d] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-extrabold text-white">
              Sẵn sàng nâng tầm thương hiệu cùng HDC Fashion?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Nhận tư vấn thiết kế miễn phí và mẫu vải tận nơi ngay hôm nay.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#quotation-download"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#999de9] to-[#7b7fd4] hover:from-[#7b7fd4] hover:to-[#5f63b8] text-white font-bold text-xs shadow-md shadow-[#999de9]/30 transition-all"
            >
              <span>Nhận Báo Giá B2B Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_INFO.hotlineTel}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white" />
              <span>{COMPANY_INFO.hotline}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
