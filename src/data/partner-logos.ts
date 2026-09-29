/**
 * PARTNER & CLIENT LOGOS DATASET
 * Danh sách các tổ chức, hiệp hội doanh nhân, sự kiện thể thao và doanh nghiệp
 * phù hợp với định vị B2B của HDC Fashion / Đồng Phục IHDC.
 */

export interface PartnerLogoItem {
  id: string;
  name: string;
  shortName: string;
  category: string;
  catalogueFeatured?: boolean;
  accentColor: string;
  logoType: 'svg-badge' | 'custom-mark';
  iconType: string;
}

export const PARTNER_LOGOS: readonly PartnerLogoItem[] = [
  {
    id: 'dnt-vietnam',
    name: 'Hội Doanh Nhân Trẻ Việt Nam',
    shortName: 'DNT Việt Nam',
    category: 'Hiệp hội Doanh nhân Quốc gia',
    catalogueFeatured: true,
    accentColor: '#C5A869',
    logoType: 'svg-badge',
    iconType: 'star-wings',
  },
  {
    id: 'long-bien-golf',
    name: 'Sân Golf Long Biên',
    shortName: 'Long Bien Golf',
    category: 'Đối tác Giải đấu Thể thao',
    catalogueFeatured: true,
    accentColor: '#16A34A',
    logoType: 'svg-badge',
    iconType: 'golf-flag',
  },
  {
    id: 'dnt-hoa-binh',
    name: 'Hội Doanh Nhân Trẻ Hòa Bình',
    shortName: 'DNT Hòa Bình',
    category: 'Hiệp hội Doanh nhân',
    catalogueFeatured: true,
    accentColor: '#0284C7',
    logoType: 'svg-badge',
    iconType: 'shield-crest',
  },
  {
    id: 'ihdc-kids-edu',
    name: 'Hệ Thống Trường Học IHDC Kids',
    shortName: 'IHDC Kids Edu',
    category: 'Đồng Phục Học Đường',
    catalogueFeatured: true,
    accentColor: '#EA580C',
    logoType: 'svg-badge',
    iconType: 'edu-cap',
  },
  {
    id: 'techcombank',
    name: 'Ngân Hàng Techcombank',
    shortName: 'Techcombank',
    category: 'Tài chính - Ngân hàng',
    accentColor: '#DC2626',
    logoType: 'svg-badge',
    iconType: 'squares-techcom',
  },
  {
    id: 'vietcombank',
    name: 'Ngân Hàng Vietcombank',
    shortName: 'Vietcombank',
    category: 'Tài chính - Ngân hàng',
    accentColor: '#059669',
    logoType: 'svg-badge',
    iconType: 'diamond-vcb',
  },
  {
    id: 'fpt-corp',
    name: 'Tập Đoàn FPT',
    shortName: 'FPT Corporation',
    category: 'Công nghệ & Giáo dục',
    accentColor: '#F97316',
    logoType: 'svg-badge',
    iconType: 'petals-fpt',
  },
  {
    id: 'viettel-group',
    name: 'Tập Đoàn Viettel',
    shortName: 'Viettel Group',
    category: 'Viễn thông & Công nghệ',
    accentColor: '#E11D48',
    logoType: 'svg-badge',
    iconType: 'quotes-viettel',
  },
  {
    id: 'mb-bank',
    name: 'Ngân Hàng Quân Đội MB',
    shortName: 'MB Bank',
    category: 'Tài chính - Ngân hàng',
    accentColor: '#2563EB',
    logoType: 'svg-badge',
    iconType: 'star-mb',
  },
  {
    id: 'th-group',
    name: 'Tập Đoàn TH True Milk',
    shortName: 'TH Group',
    category: 'Nông nghiệp & Tiêu dùng',
    accentColor: '#0284C7',
    logoType: 'svg-badge',
    iconType: 'sun-lotus',
  },
  {
    id: 'vnpt-group',
    name: 'Tập Đoàn VNPT',
    shortName: 'VNPT Telecom',
    category: 'Bưu chính Viễn thông',
    accentColor: '#0284C7',
    logoType: 'svg-badge',
    iconType: 'orbit-vnpt',
  },
  {
    id: 'hdc-uniform-corp',
    name: 'HDC Corporate Group',
    shortName: 'HDC Group VN',
    category: 'Hệ Sinh Thái Thời Trang',
    catalogueFeatured: true,
    accentColor: '#D97706',
    logoType: 'svg-badge',
    iconType: 'crown-hdc',
  },
] as const;
