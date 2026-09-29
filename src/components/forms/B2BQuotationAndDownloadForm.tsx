import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../data/huni-master-data';
import {
  Send,
  PhoneCall,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  User,
  Building2,
} from 'lucide-react';

const QUICK_PRODUCTS = [
  'Sơ mi Seamless',
  'Polo Anti-UV',
  'Đồng phục học sinh',
  'Vest doanh nghiệp',
  'Thiết kế theo yêu cầu',
];

const QUICK_QUANTITIES = [
  'Dưới 50 bộ',
  '50 - 200 bộ',
  '200 - 500 bộ',
  'Trên 500 bộ',
];

export const B2BQuotationAndDownloadForm: React.FC = () => {
  // Form State
  const [selectedProduct, setSelectedProduct] = useState<string>(QUICK_PRODUCTS[0]);
  const [selectedQuantity, setSelectedQuantity] = useState<string>(QUICK_QUANTITIES[1]);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [noteOrCompany, setNoteOrCompany] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (phoneError) setPhoneError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vietnam phone validation
    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    if (!phone || !phoneRegex.test(phone.trim().replace(/\s/g, ''))) {
      setPhoneError('Vui lòng nhập số điện thoại hợp lệ (10 số) để nhận báo giá');
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="quotation-download" className="py-16 sm:py-20 lg:py-24 bg-[#F5EFE6] relative overflow-hidden text-[#1E1C19]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE8DD] border border-[#DFD6C8] text-[12px] font-medium text-[#574F44]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7D6B56]" />
            <span>Liên hệ tư vấn & Báo giá nhanh B2B</span>
          </div>

          <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[42px] font-normal sm:font-medium text-[#1E1C19] tracking-tight leading-[1.2]">
            Nhận Báo Giá & May Mẫu <br className="hidden sm:block" />
            <span className="italic">Hoàn Toàn Miễn Phí</span>
          </h2>

          <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#6E6559] font-normal">
            Điền nhanh thông tin trong 15 giây hoặc gọi trực tiếp Hotline để chuyên viên HDC gửi mẫu vải tận nơi ngay trong ngày.
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-stretch">
          
          {/* ========================================================= */}
          {/* LEFT: FORM TINH GỌN (CHỈ 15 GIÂY)                        */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-9 border border-[#ECE3D5] shadow-[0_6px_24px_rgba(40,32,24,0.03)] flex flex-col justify-between">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 sm:py-16 text-center space-y-4 my-auto"
              >
                <div className="w-16 h-16 rounded-full bg-[#2B2620] text-[#D4A373] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-[22px] sm:text-[25px] font-medium text-[#1E1C19]">
                    Gửi Yêu Cầu Thành Công!
                  </h3>
                  <p className="text-[14px] text-[#6E6559] max-w-md mx-auto leading-relaxed font-normal">
                    Chuyên viên HDC Uniform đã tiếp nhận thông tin ({phone}). Chúng tôi sẽ liên hệ tư vấn và gửi bảng mẫu vải trong 15 phút.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#2B2620] text-white text-[13px] font-medium hover:bg-[#1A1713] transition-colors cursor-pointer"
                >
                  Gửi yêu cầu khác
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Chọn nhanh dòng sản phẩm quan tâm */}
                <div className="space-y-2.5">
                  <label className="text-[13px] font-semibold text-[#1E1C19] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8F6E43]" />
                    <span>Dòng sản phẩm quan tâm:</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_PRODUCTS.map((prod) => {
                      const isSelected = selectedProduct === prod;
                      return (
                        <button
                          key={prod}
                          type="button"
                          onClick={() => setSelectedProduct(prod)}
                          className={`px-3.5 py-2 rounded-full text-[12.5px] font-medium transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? 'bg-[#2B2620] text-white shadow-xs'
                              : 'bg-[#F5EFE6] hover:bg-[#EFE8DD] text-[#5C5346] border border-[#ECE3D5]'
                          }`}
                        >
                          {prod}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Chọn nhanh số lượng */}
                <div className="space-y-2.5">
                  <label className="text-[13px] font-semibold text-[#1E1C19] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8F6E43]" />
                    <span>Số lượng đặt may dự kiến:</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {QUICK_QUANTITIES.map((qty) => {
                      const isSelected = selectedQuantity === qty;
                      return (
                        <button
                          key={qty}
                          type="button"
                          onClick={() => setSelectedQuantity(qty)}
                          className={`p-2 rounded-xl text-[12px] font-medium text-center transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? 'bg-[#2B2620] text-white shadow-xs'
                              : 'bg-[#F5EFE6] hover:bg-[#EFE8DD] text-[#5C5346] border border-[#ECE3D5]'
                          }`}
                        >
                          {qty}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Thông tin liên hệ nhanh (Họ tên + Số điện thoại) */}
                <div className="pt-2 border-t border-[#ECE3D5] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Họ và tên */}
                    <div className="space-y-1">
                      <label className="text-[12.5px] font-medium text-[#1E1C19]">
                        Họ và tên *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#8C8070] absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Anh / Chị..."
                          className="w-full h-[46px] pl-10 pr-3 text-[13.5px] bg-[#FAF7F2] border border-[#DFD6C8] rounded-xl focus:outline-none focus:border-[#2B2620] focus:ring-1 focus:ring-[#2B2620] text-[#1E1C19] placeholder:text-[#A09586]"
                        />
                      </div>
                    </div>

                    {/* Số điện thoại / Zalo */}
                    <div className="space-y-1">
                      <label className="text-[12.5px] font-medium text-[#1E1C19]">
                        Số điện thoại / Zalo nhận báo giá *
                      </label>
                      <div className="relative">
                        <PhoneCall className="w-4 h-4 text-[#8C8070] absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="0984 95 95 86"
                          className={`w-full h-[46px] pl-10 pr-3 text-[13.5px] bg-[#FAF7F2] border rounded-xl focus:outline-none text-[#1E1C19] placeholder:text-[#A09586] ${
                            phoneError
                              ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                              : 'border-[#DFD6C8] focus:border-[#2B2620] focus:ring-1 focus:ring-[#2B2620]'
                          }`}
                        />
                      </div>
                      {phoneError && (
                        <p className="text-[11px] text-red-500 mt-1">{phoneError}</p>
                      )}
                    </div>
                  </div>

                  {/* Tên đơn vị / Ghi chú nhanh (Tùy chọn) */}
                  <div className="space-y-1">
                    <label className="text-[12.5px] font-medium text-[#1E1C19]">
                      Tên doanh nghiệp hoặc ghi chú thêm (Tùy chọn)
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-[#8C8070] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        value={noteOrCompany}
                        onChange={(e) => setNoteOrCompany(e.target.value)}
                        placeholder="Ví dụ: Công ty ABC - Cần nhận mẫu vải tận nơi..."
                        className="w-full h-[46px] pl-10 pr-3 text-[13.5px] bg-[#FAF7F2] border border-[#DFD6C8] rounded-xl focus:outline-none focus:border-[#2B2620] focus:ring-1 focus:ring-[#2B2620] text-[#1E1C19] placeholder:text-[#A09586]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[50px] inline-flex items-center justify-center gap-2.5 px-6 rounded-full bg-[#2B2620] hover:bg-[#1A1713] text-white font-medium text-[14px] shadow-sm transition-all duration-200 hover:scale-[1.01] active:scale-98 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-[#D4A373] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 text-[#D4A373]" />
                    )}
                    <span className="whitespace-nowrap font-medium">Nhận Báo Giá & May Mẫu Miễn Phí</span>
                  </button>
                  <p className="text-center text-[11px] text-[#7A7164] mt-2 font-normal">
                    ⚡ Phản hồi trong 15 phút. HDC cam kết bảo mật 100% thông tin đối tác.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* ========================================================= */}
          {/* RIGHT: LIÊN HỆ TRỰC TIẾP 24/7 (KHÔNG CẦN CHỜ ĐỢI)       */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 bg-[#1F1B17] text-[#FAF6F0] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-9 border border-[#352E26] shadow-[0_8px_32px_rgba(26,23,20,0.12)] flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#D4A373] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#D4A373]" />
                <span>Liên Hệ Trực Tiếp Ban Dự Án</span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-serif text-[22px] sm:text-[25px] font-medium leading-snug text-white">
                  Cần Tư Vấn Gấp Trong 5 Phút?
                </h3>
                <p className="text-[13px] text-[#DDD3C4] leading-relaxed font-normal">
                  Nếu bạn bận rộn và không muốn mất thời gian điền form, hãy kết nối ngay với chuyên viên dự án của HDC Uniform:
                </p>
              </div>

              {/* 2 Quick Action Buttons */}
              <div className="space-y-3 pt-1">
                {/* 1. Hotline Button */}
                <a
                  href={COMPANY_INFO.hotlineTel}
                  className="group w-full p-3.5 sm:p-4 rounded-2xl bg-[#D4A373] hover:bg-[#C29363] text-[#1A1714] flex items-center justify-between shadow-xs transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1A1714] text-[#D4A373] flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#1A1714]/70 block">
                        Hotline Trực Tiếp 24/7
                      </span>
                      <span className="text-[16px] sm:text-[17px] font-bold tracking-tight block text-[#1A1714]">
                        {COMPANY_INFO.hotline}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1A1714] group-hover:translate-x-1 transition-transform mr-1" />
                </a>

                {/* 2. Zalo Chat Button */}
                <a
                  href="https://zalo.me/0984959586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full p-3.5 sm:p-4 rounded-2xl bg-[#2D2620] hover:bg-[#362E27] border border-[#4A3F33] text-white flex items-center justify-between shadow-xs transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0068FF] text-white flex items-center justify-center shrink-0 font-bold text-[13px]">
                      Zalo
                    </div>
                    <div>
                      <span className="text-[10.5px] font-medium uppercase tracking-wider text-[#D4A373] block">
                        Chat Zalo Nhận Mẫu Vải
                      </span>
                      <span className="text-[14px] sm:text-[15px] font-medium block text-white">
                        Kết nối Zalo tư vấn tức thì
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#D4A373] group-hover:translate-x-1 transition-transform mr-1" />
                </a>
              </div>
            </div>

            {/* 3 Core Value Commitments */}
            <div className="pt-5 border-t border-[#352E26] space-y-3 text-[12.5px] text-[#DDD3C4]">
              <div className="flex items-start gap-2.5 font-normal">
                <Clock className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>Phản hồi & báo giá chi tiết trong vòng <strong className="text-white">15 phút</strong></span>
              </div>
              <div className="flex items-start gap-2.5 font-normal">
                <Sparkles className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>Gửi tập mẫu vải sinh thái & may áo mẫu <strong className="text-white">MIỄN PHÍ</strong></span>
              </div>
              <div className="flex items-start gap-2.5 font-normal">
                <ShieldCheck className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>Cam kết xuất xưởng trực tiếp, không qua trung gian</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default B2BQuotationAndDownloadForm;
