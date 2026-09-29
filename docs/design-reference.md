# Giao diện tham chiếu và cách áp dụng cho HUNI

## Ý định thiết kế

Landing page B2B đồng phục, nền sáng, chữ navy, nhiều khoảng thở. Hero video là điểm nhấn; thanh điều hướng nổi dạng viên thuốc ở chân hero. Chuyển động phục vụ thứ tự đọc và phản hồi tương tác. Các thông số mẫu được giữ để tái sử dụng, không thay thế dữ liệu thương hiệu bằng nội dung tiếng Anh mẫu.

Người dùng đã xác nhận: tạo dữ liệu rồi làm luôn giao diện HUNI theo mẫu.

## Stack và typography

- React, TypeScript, Tailwind CSS v4, `motion/react`.
- Các package yêu cầu: `lucide-react`, `motion`, `clsx`, `tailwind-merge`.
- Trong `index.css`: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600&display=swap');`.
- `@theme`: `--font-sans: Inter, sans-serif`, `--font-display: Outfit, sans-serif`.
- Nền body: `#f9fafb`. Heading: `#0a1b33`. Subheading: `#64748b`. CTA: `#0a152d`.

## Hero nguyên mẫu

Container:
`relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col`

Video layer:
`absolute inset-0 pointer-events-none z-0 overflow-hidden select-none`

Nguồn video bắt buộc:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4

Video có `autoPlay`, `loop`, `muted`, `playsInline`; class `w-full h-full object-cover scale-105 transition-transform duration-1000`; không thêm overlay.

Text wrapper:
`relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start`

Heading gốc: `Foundation of the<br />new digital epoch`. Dùng Outfit, `text-[42px] md:text-[56px]`, medium, tracking tight.

Subheading gốc: “Designing products, powering ecosystems and laying the foundation of a decentralized web for enterprises, builders and communities alike.” Dùng Inter, `text-[14px] md:text-[15px]`.

CTA gốc: “Contact Us”, `motion.button`, nền navy, chữ trắng, rounded-full, scale khi hover/tap.

Text xuất hiện qua `motion.div`, fade + trượt lên nhẹ. Ở bản HUNI, dùng slogan và thông tin được cung cấp thay cho nội dung công nghệ mẫu.

## Điều hướng nổi

Wrapper: `absolute bottom-10 left-1/2 -translate-x-1/2 z-30`.

`motion.nav`: `flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40`.

- Logo tròn: ký tự `✦`, `w-9 h-9 bg-white border border-slate-100 shadow-sm`.
- “Products”, “Docs”: `text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33]`.
- “Get in touch” + `ChevronRight`: `bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all`.
- Entrance chậm hơn text. Bản HUNI liên kết đến Sản phẩm, Chất liệu, Liên hệ.

## Marquee

Đặt dưới hero, `mt-10`, không title/description phía trên. Track dùng CSS keyframes từ `translateX(0)` đến `translateX(-50%)`, linear infinite, pause khi hover. Hai nhóm phải có chiều rộng và khoảng cách giống nhau để không giật ở điểm nối. Gradient mask hai cạnh. Khi reduced motion, ngừng tự cuộn và cho phép cuộn thủ công. Nhóm lặp `aria-hidden`.

Card nguyên mẫu:
`group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden`

Gradient layer tuyệt đối, mặc định scale 1.5 và opacity 0; hover scale 1 và opacity 100. Logo dùng `group-hover:brightness-0 group-hover:invert` như yêu cầu.

Danh sách logo mẫu, URL bắt đầu bằng `https://svgl.app/library/`:

| Tên | File | Màu gradient yêu cầu |
| --- | --- | --- |
| Procure | procure.svg | Xanh dương |
| Shopify | shopify.svg | Vàng |
| Blender | blender.svg | Xanh dương |
| Figma | figma.svg | Tím |
| Spotify | spotify.svg | Hồng/đỏ |
| Lottielab | lottielab.svg | Vàng/xanh lá |
| Google Cloud | google-cloud.svg | Xanh dương nhạt |
| Bing | bing.svg | Cyan/teal |

Các cặp mã hex cụ thể là lựa chọn triển khai vì brief chỉ định họ màu. Logo trên là tài sản minh họa giao diện, không phải bằng chứng quan hệ khách hàng với HUNI. Trên trang HUNI, component có thể nhận các chất liệu thực từ master data.

## Tính đầy đủ của dữ liệu

`src/data/huni-master-data.ts` là nguồn duy nhất cho thông tin thương hiệu. Bảo toàn tất cả nội dung người dùng đã cung cấp. Chưa có tài liệu gốc hoặc ảnh trong workspace lúc bắt đầu. Không tự tạo nguyên văn triết lý, 9 cam kết, ảnh CEO hay ảnh sản phẩm. Dùng các slot dữ liệu có kiểu rõ ràng và `src: null`/`text: null` để bổ sung sau.

## Tiêu chí nghiệm thu

- Build và TypeScript thành công; kiểm tra nội dung, điều hướng, CTA và layout mobile/desktop.
- Không tràn ngang; video lỗi vẫn đọc được nội dung.
- Tôn trọng reduced motion; keyboard focus nhìn thấy được.
- Không có ảnh bị vỡ hoặc nhãn khẳng định thông tin chưa có nguồn.
- Chỉ có thể xác nhận đủ 100% tài liệu gốc sau khi nhận và đối soát nguồn đó.
