import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../data/huni-master-data';
import {
  Send,
  PhoneCall,
  CheckCircle2,
  Building2,
  User,
  Mail,
  MapPin,
  Clock,
  Layers,
  ShieldCheck,
  Check,
  ArrowRight,
} from 'lucide-react';

const PRODUCT_LINE_OPTIONS = [
  { id: 'so-mi-seamless', label: 'Sơ mi Seamless không đường may', badge: 'Best Seller' },
  { id: 'polo-anti-uv', label: 'Polo Anti-UV (Trẻ trung, năng động)', badge: 'Phổ biến' },
  { id: 'hdc-kids', label: 'Đồng phục học sinh HDC Kids', badge: 'Cao cấp' },
  { id: 'vest-doanh-nhan', label: 'Vest doanh nghiệp lịch lãm', badge: 'Doanh nhân' },
  { id: 'phu-kien', label: 'Phụ kiện: Ví da, thắt lưng, cavat', badge: 'Đồng bộ' },
];

const QUANTITY_OPTIONS = [
  'Dưới 50 bộ',
  '50 - 100 bộ',
  '100 - 500 bộ',
  '500 - 1.000 bộ',
  'Trên 1.000 bộ (Ưu đãi VIP)',
];

const ECO_FABRIC_OPTIONS = [
  { name: 'Sợi Sen', desc: 'Chống tia UV, siêu mát' },
  { name: 'Sợi Tơ Chuối', desc: 'Bền chắc, thân thiện MT' },
  { name: 'Sợi Xơ Dừa', desc: 'Sợi tự nhiên bản địa' },
  { name: 'Sợi Bạc Hà', desc: 'Kháng khuẩn, mát lạnh' },
  { name: 'Bamboo (Sợi Tre)', desc: 'Thoáng khí, mềm mịn' },
  { name: 'Modal Cao Cấp', desc: 'Chống nhăn, giữ phom' },
];

export const B2BQuotationAndDownloadForm: React.FC = () => {
  // Form State
  const [selectedProductLine, setSelectedProductLine] = useState<string>(
    PRODUCT_LINE_OPTIONS[0].id
  );
  const [selectedQuantity, setSelectedQuantity] = useState<string>(
    QUANTITY_OPTIONS[1]
  );
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([
    'Sợi Sen',
    'Bamboo (Sợi Tre)',
  ]);

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFabric = (fabric: string) => {
    setSelectedFabrics((prev) =>
      prev.includes(fabric) ? prev.filter((f) => f !== fabric) : [...prev, fabric]
    );
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (phoneError) setPhoneError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vietnam phone validation
    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    if (!phone || !phoneRegex.test(phone.trim().replace(/\s/g, ''))) {
      setPhoneError('Vui lòng nhập số điện thoại hợp lệ (10 số) để HDC Uniform liên hệ');
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="quotation-download" className="py-20 sm:py-24 lg:py-28 bg-[#F7F8FC] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Spacing Heading -> Description 14-18px */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E7EC] text-[12px] sm:text-[13px] font-medium text-[#101828]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7B936]" />
            <span>Liên hệ tư vấn & Báo giá B2B</span>
          </div>

          <h2 className="mt-3.5 sm:mt-4 text-[30px] sm:text-[36px] lg:text-[38px] font-semibold text-[#08182F] tracking-tight leading-[1.2]">
            Sở Hữu Đồng Phục Doanh Nghiệp Ấn Tượng
          </h2>

          <p className="mt-3.5 sm:mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-[#667085] max-w-2xl mx-auto font-normal">
            Nhận trọn bộ thiết kế 3D, báo giá chiết khấu trực tiếp từ xưởng và mẫu vải may thử gửi tận nơi trong 24 giờ.
          </p>
        </div>

        {/* Content Layout: Spacing 40-56px */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ========================================================= */}
          {/* LEFT: 3-STEP INTUITIVE B2B CONVERSION FORM (8 COLUMNS)    */}
          {/* ========================================================= */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-9 border border-[#E4E7EC] shadow-[0_4px_20px_rgba(16,24,40,0.04)]">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-5"
              >
                <div className="w-14 h-14 rounded-full bg-[#08182F] text-[#E7B936] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#08182F]">
                    Gửi Yêu Cầu Báo Giá Thành Công!
                  </h3>
                  <p className="text-[14px] text-[#667085] max-w-md mx-auto leading-relaxed font-normal">
                    Chuyên viên HDC Uniform đã tiếp nhận thông tin ({phone}). Chúng tôi sẽ liên hệ tư vấn và gửi bảng mẫu vải trong 30 phút.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-[9px] bg-[#08182F] text-white text-[13px] font-medium hover:bg-slate-900 transition-colors"
                >
                  Gửi yêu cầu bổ sung
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* 1. NHÓM 1: NHU CẦU */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#08182F] text-white font-semibold text-[11px] flex items-center justify-center">
                      1
                    </span>
                    <label className="text-[13px] sm:text-[14px] font-medium text-[#101828]">
                      Nhu cầu dòng sản phẩm quan tâm:
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PRODUCT_LINE_OPTIONS.map((prod) => {
                      const isSelected = selectedProductLine === prod.id;
                      return (
                        <button
                          key={prod.id}
                          type="button"
                          onClick={() => setSelectedProductLine(prod.id)}
                          className={`p-3 rounded-lg border text-left text-[13px] sm:text-[14px] font-medium transition-all flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'border-[#08182F] bg-[#F7F8FC] text-[#08182F] ring-1 ring-[#08182F]'
                              : 'border-[#E4E7EC] bg-white text-[#667085] hover:bg-[#F7F8FC]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? 'border-[#08182F] bg-[#08182F]'
                                  : 'border-slate-300 bg-white'
                              }`}
                            >
                              {isSelected && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E7B936]" />
                              )}
                            </span>
                            <span>{prod.label}</span>
                          </div>
                          {prod.badge && (
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-md font-semibold shrink-0 ${
                                isSelected
                                  ? 'bg-[#08182F] text-[#E7B936]'
                                  : 'bg-slate-100 text-slate-500'
                              }`}
                            >
                              {prod.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. NHÓM 2: LOẠI SẢN PHẨM & SỐ LƯỢNG */}
                <div className="space-y-4 pt-4 border-t border-[#E4E7EC]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#08182F] text-white font-semibold text-[11px] flex items-center justify-center">
                      2
                    </span>
                    <label className="text-[13px] sm:text-[14px] font-medium text-[#101828]">
                      Loại sản phẩm và số lượng dự kiến:
                    </label>
                  </div>

                  {/* Số lượng */}
                  <div className="space-y-2">
                    <span className="text-[12px] font-medium text-[#667085]">Số lượng đặt may:</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                      {QUANTITY_OPTIONS.map((qty) => {
                        const isSelected = selectedQuantity === qty;
                        return (
                          <button
                            key={qty}
                            type="button"
                            onClick={() => setSelectedQuantity(qty)}
                            className={`p-2 rounded-lg border text-center text-[12px] font-medium transition-all ${
                              isSelected
                                ? 'border-[#08182F] bg-[#08182F] text-white'
                                : 'border-[#E4E7EC] bg-white text-[#667085] hover:bg-[#F7F8FC]'
                            }`}
                          >
                            {qty}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Chất liệu tự nhiên */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[12px] font-medium text-[#667085]">
                      Chất liệu sợi tự nhiên mong muốn (chọn nhiều loại):
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {ECO_FABRIC_OPTIONS.map((fabric) => {
                        const isChecked = selectedFabrics.includes(fabric.name);
                        return (
                          <button
                            key={fabric.name}
                            type="button"
                            onClick={() => toggleFabric(fabric.name)}
                            className={`p-2.5 rounded-lg border text-left text-[12px] transition-all flex items-start gap-2 ${
                              isChecked
                                ? 'border-[#E7B936] bg-amber-50/40 text-[#101828] font-medium'
                                : 'border-[#E4E7EC] bg-white text-[#667085] hover:bg-[#F7F8FC]'
                            }`}
                          >
                            <span
                              className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 border mt-0.5 ${
                                isChecked
                                  ? 'bg-[#08182F] border-[#08182F] text-[#E7B936]'
                                  : 'bg-white border-slate-300'
                              }`}
                            >
                              {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </span>
                            <div>
                              <span className="block font-medium">{fabric.name}</span>
                              <span className="text-[10px] text-slate-400 font-normal">
                                {fabric.desc}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 3. NHÓM 3: THÔNG TIN LIÊN HỆ */}
                <div className="space-y-4 pt-4 border-t border-[#E4E7EC]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#08182F] text-white font-semibold text-[11px] flex items-center justify-center">
                      3
                    </span>
                    <label className="text-[13px] sm:text-[14px] font-medium text-[#101828]">
                      Thông tin liên hệ nhận mẫu & báo giá:
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Họ tên */}
                    <div>
                      <span className="block text-[13px] font-medium text-[#101828] mb-1">
                        Họ và tên *
                      </span>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Nguyễn Văn A"
                          className="w-full h-[50px] pl-10 pr-3.5 text-[14px] bg-white border border-[#D0D5DD] rounded-[9px] focus:outline-none focus:border-[#08182F] focus:ring-1 focus:ring-[#08182F] font-normal"
                        />
                      </div>
                    </div>

                    {/* Số điện thoại */}
                    <div>
                      <span className="block text-[13px] font-medium text-[#101828] mb-1">
                        Số điện thoại / Zalo *
                      </span>
                      <div className="relative">
                        <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="0984 95 95 86"
                          className={`w-full h-[50px] pl-10 pr-3.5 text-[14px] bg-white border rounded-[9px] focus:outline-none font-normal ${
                            phoneError
                              ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                              : 'border-[#D0D5DD] focus:border-[#08182F] focus:ring-1 focus:ring-[#08182F]'
                          }`}
                        />
                      </div>
                      {phoneError && (
                        <p className="text-[11px] text-red-500 mt-1">{phoneError}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Tên đơn vị / doanh nghiệp */}
                    <div>
                      <span className="block text-[13px] font-medium text-[#101828] mb-1">
                        Tên doanh nghiệp / Đơn vị
                      </span>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Công ty Cổ phần ABC"
                          className="w-full h-[50px] pl-10 pr-3.5 text-[14px] bg-white border border-[#D0D5DD] rounded-[9px] focus:outline-none focus:border-[#08182F] focus:ring-1 focus:ring-[#08182F] font-normal"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <span className="block text-[13px] font-medium text-[#101828] mb-1">
                        Email nhận bảng báo giá
                      </span>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="contact@company.com"
                          className="w-full h-[50px] pl-10 pr-3.5 text-[14px] bg-white border border-[#D0D5DD] rounded-[9px] focus:outline-none focus:border-[#08182F] focus:ring-1 focus:ring-[#08182F] font-normal"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Địa chỉ nhận mẫu thử */}
                  <div>
                    <span className="block text-[13px] font-medium text-[#101828] mb-1">
                      Địa chỉ nhận mẫu vải thực tế tận nơi (Miễn phí)
                    </span>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Số nhà, đường, quận/huyện, tỉnh/thành phố"
                        className="w-full h-[50px] pl-10 pr-3.5 text-[14px] bg-white border border-[#D0D5DD] rounded-[9px] focus:outline-none focus:border-[#08182F] focus:ring-1 focus:ring-[#08182F] font-normal"
                      />
                    </div>
                  </div>

                  {/* Ghi chú */}
                  <div>
                    <span className="block text-[13px] font-medium text-[#101828] mb-1">
                      Ghi chú thêm về yêu cầu may đo
                    </span>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Màu sắc nhận diện, vị trí in thêu logo, ngày cần hoàn thiện..."
                      className="w-full p-3 text-[14px] bg-white border border-[#D0D5DD] rounded-[9px] focus:outline-none focus:border-[#08182F] focus:ring-1 focus:ring-[#08182F] font-normal"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON GOLD #E7B936 (Cao 50-52px, Radius 8-10px) */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[50px] inline-flex items-center justify-center gap-2 px-8 rounded-[9px] bg-[#E7B936] hover:bg-[#d8a92b] text-[#08182F] font-semibold text-[15px] shadow-sm transition-all duration-200 disabled:opacity-50 cursor-pointer hover:scale-[1.01] active:scale-98"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-[#08182F] border-t-transparent rounded-full animate-spin mr-1" />
                    ) : (
                      <Send className="w-4 h-4 text-[#08182F]" />
                    )}
                    <span>Gửi Yêu Cầu Tư Vấn & Báo Giá</span>
                  </button>
                  <p className="text-center text-[11px] text-[#667085] mt-2 font-normal">
                    HDC Uniform cam kết bảo mật 100% thông tin doanh nghiệp đối tác.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* ========================================================= */}
          {/* RIGHT: CARD TƯ VẤN: "Nhận tư vấn & báo giá" (4 COLUMNS)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#08182F] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_4px_20px_rgba(16,24,40,0.06)] border border-white/10">
              <div className="flex items-center gap-2 text-[12px] font-medium text-[#E7B936] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#E7B936]" />
                <span>Hỗ Trợ B2B Trực Tiếp</span>
              </div>

              <div>
                <h3 className="text-[20px] sm:text-[22px] font-semibold leading-tight text-white">
                  Nhận tư vấn & báo giá
                </h3>
                <p className="text-[13px] text-slate-300 mt-2 leading-[1.6] font-normal">
                  Liên hệ trực tiếp ban dự án HDC Uniform để nhận tư vấn bảng mẫu vải thực tế và chính sách chiết khấu trực tiếp tại xưởng sản xuất.
                </p>
              </div>

              {/* Hotline Callout */}
              <a
                href={COMPANY_INFO.hotlineTel}
                className="group p-4 rounded-[9px] bg-[#E7B936] hover:bg-[#d8a92b] text-[#08182F] flex items-center justify-between shadow-xs transition-all block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#08182F] text-[#E7B936] flex items-center justify-center font-bold">
                    <PhoneCall className="w-4 h-4 text-[#E7B936]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-[#08182F]/70 block">
                      Hotline Trực Tiếp
                    </span>
                    <span className="text-[17px] font-bold tracking-tight block text-[#08182F]">
                      {COMPANY_INFO.hotline}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#08182F] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Verified Value Propositions */}
              <div className="space-y-3 pt-2 border-t border-white/10 text-[13px] text-slate-200">
                <div className="flex items-start gap-2.5 font-normal">
                  <Clock className="w-4 h-4 text-[#E7B936] shrink-0 mt-0.5" />
                  <span>Phản hồi & báo giá chi tiết trong vòng <strong>30 phút</strong></span>
                </div>
                <div className="flex items-start gap-2.5 font-normal">
                  <Layers className="w-4 h-4 text-[#E7B936] shrink-0 mt-0.5" />
                  <span>Gửi tập mẫu vải sinh thái & may áo mẫu <strong>MIỄN PHÍ</strong></span>
                </div>
                <div className="flex items-start gap-2.5 font-normal">
                  <ShieldCheck className="w-4 h-4 text-[#E7B936] shrink-0 mt-0.5" />
                  <span>Cam kết đúng tiến độ 100%, bảo hành đường may & form dáng</span>
                </div>
                <div className="flex items-start gap-2.5 font-normal">
                  <MapPin className="w-4 h-4 text-[#E7B936] shrink-0 mt-0.5" />
                  <span>Văn phòng: {COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
