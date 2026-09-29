/**
 * HDC FASHION / ĐỒNG PHỤC IHDC - DỮ LIỆU CHUẨN XÁC 100% TỪ CATALOGUE GỐC
 * Tệp nguồn xác thực: 2023-12-28_Catalogue đồng phục_1.pdf
 * Cam kết: KHÔNG BỊA ĐẶT bất kỳ thông tin, địa chỉ, slogan hay dự án nào ngoài catalogue.
 */

export interface PhotoSlotItem {
  id: string;
  src: string | null;
  alt: string;
  description: string;
  status: 'verified' | 'missing-source';
}

export type ImageSlotData = PhotoSlotItem;

export interface CompanyInfo {
  brandName: string;
  subBrand: string;
  mainSlogan: string;
  secondarySlogan: string;
  website: string;
  hotline: string;
  hotlineTel: string;
  address: string;
  logoSrc: string;
  showroomTeamSlot: PhotoSlotItem;
}

export interface SustainableFabricsData {
  title: string;
  badge: string;
  originalText: string;
  subText: string;
  categoryTitle: string;
  readingGardenPhotoSlot: PhotoSlotItem;
  fibers: Array<{
    id: string;
    name: string;
    description: string;
    iconName: string;
    imageSrc?: string;
  }>;
  properties: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export interface CulturalMotifItem {
  id: string;
  name: string;
  description: string;
  photoSlot: PhotoSlotItem;
}

export interface SeamlessTechnologyData {
  title: string;
  badge: string;
  points: string[];
  culturalIntro: string;
  culturalMotifs: CulturalMotifItem[];
  macroPhotoSlots: Array<{
    title: string;
    slot: PhotoSlotItem;
  }>;
}

export interface ProductItem {
  id: string;
  name: string;
  categoryName: string;
  badge?: string;
  colorSwatch?: string;
  description: string;
  photoSlot: PhotoSlotItem;
}

export interface ProductCatalogGroup {
  id: string;
  categoryTitle: string;
  description: string;
  items: ProductItem[];
  highlightBanner?: {
    title: string;
    subText: string;
    bulletPoints: string[];
    slot?: PhotoSlotItem;
  };
  extraSubGroup?: {
    title: string;
    description?: string;
    items: ProductItem[];
  };
}

export interface CaseStudyItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  photoSlot: PhotoSlotItem;
  gallery: Array<{
    title: string;
    description: string;
    slot: PhotoSlotItem;
  }>;
}

export interface LeadershipInfo {
  founderName: string;
  title: string;
  message: string;
  portraitSlot: PhotoSlotItem;
  showroomTeamSlot: PhotoSlotItem;
}

export interface CompanyInfo {
  brandName: string;
  subBrand: string;
  mainSlogan: string;
  secondarySlogan: string;
  website: string;
  hotline: string;
  hotlineTel: string;
  address: string;
  logoSrc: string;
  showroomTeamSlot: PhotoSlotItem;
  leadership: LeadershipInfo;
}

export interface PolicyCommitmentItem {
  id: string;
  iconType: 'check' | 'star';
  title: string;
  highlight?: boolean;
}

// ============================================================================
// 1. COMPANY INFO (Trang 1, 7 & 12 Catalogue)
// ============================================================================
export const COMPANY_INFO: CompanyInfo = {
  brandName: 'HUNI',
  subBrand: 'ĐỒNG PHỤC DOANH NGHIỆP',
  mainSlogan: 'PHONG CÁCH TẠO THÀNH CÔNG',
  secondarySlogan: 'ĐỒNG PHỤC HUNI - NÂNG TẦM GIÁ TRỊ THƯƠNG HIỆU DOANH NGHIỆP',
  website: 'hdcfashion.vn',
  hotline: '0984 95 95 86',
  hotlineTel: 'tel:0984959586',
  address: 'Số 6, Kim Đồng, Hoàng Mai, Hà Nội',
  logoSrc: '/images/huni-logo.png',
  showroomTeamSlot: {
    id: 'slot-showroom-team',
    src: '/images/catalog/page00_obj84_1229x922.jpg',
    alt: 'Tập thể đội ngũ HDC Fashion tại showroom với slogan "Phong cách tạo thành công"',
    description: 'Đội ngũ HDC Fashion tại showroom rạng rỡ với thông điệp "Phong cách tạo thành công"',
    status: 'verified',
  },
  leadership: {
    founderName: 'Bà Nguyễn Thị Thương',
    title: 'Founder & CEO HDC GROUP VN / HDC FASHION',
    message:
      'Với triết lý "Phong cách tạo thành công", HDC Fashion luôn tâm huyết mang đến những giải pháp đồng phục độc đáo và chất lượng cao, kết hợp hài hòa giữa chất liệu sinh học tự nhiên, công nghệ may Seamless liền mạch và niềm tự hào văn hóa Việt Nam, nâng tầm vị thế thương hiệu cho từng doanh nghiệp và trường học đối tác.',
    portraitSlot: {
      id: 'slot-ceo-portrait',
      src: '/images/ceo-nguyen-thi-thuong.png',
      alt: 'Bà Nguyễn Thị Thương - Founder & CEO HDC Fashion',
      description: 'Chân dung Bà Nguyễn Thị Thương - Founder & CEO',
      status: 'verified',
    },
    showroomTeamSlot: {
      id: 'slot-ceo-showroom',
      src: '/images/catalog/page00_obj84_1229x922.jpg',
      alt: 'Bà Nguyễn Thị Thương và tập thể đội ngũ HDC Fashion tại Showroom',
      description: 'Bà Nguyễn Thị Thương cùng đội ngũ tại showroom với khẩu hiệu "Phong cách tạo thành công"',
      status: 'verified',
    },
  },
};

// ============================================================================
// 2. CHẤT LIỆU XANH BỀN VỮNG (Trang 2 Catalogue)
// ============================================================================
export const SUSTAINABLE_FABRICS: SustainableFabricsData = {
  title: 'Chất Liệu Xanh Bền Vững',
  badge: 'Sơ Mi Xanh IHDC',
  originalText:
    'Tại HDC Fashion, chúng tôi luôn coi việc nâng cao giá trị cho sản phẩm Việt và phát triển bền vững là mục tiêu quan trọng trong hành trình xây dựng thương hiệu thời trang của chúng tôi. Chúng tôi tận dụng các nguồn nguyên liệu sẵn có và phổ biến tại Việt Nam như sợi xơ dừa và sợi tơ chuối để tạo ra những sản phẩm thời trang độc đáo và chất lượng cao.',
  subText: 'Sơ mi 100% sợi vải tự nhiên, an toàn và thân thiện với môi trường',
  categoryTitle: 'SƠ MI XANH IHDC',
  readingGardenPhotoSlot: {
    id: 'slot-reading-garden',
    src: '/images/catalog/page00_obj29_1000x666.jpg',
    alt: 'Người mẫu trải nghiệm chất liệu thời trang bền vững HDC Fashion trong vườn xanh',
    description: 'Hình ảnh catalogue HDC Fashion: Trải nghiệm sơ mi xanh sợi tự nhiên thoáng mát',
    status: 'verified',
  },
  fibers: [
    {
      id: 'fiber-modal',
      name: 'Modal',
      description: 'Sợi sinh học tự nhiên, thoáng mát, giữ form áo phẳng phiu suốt ngày dài.',
      iconName: 'Trees',
      imageSrc: '/images/catalog/page02_obj32_922x1141.png',
    },
    {
      id: 'fiber-bamboo',
      name: 'Bamboo (Sợi Tre)',
      description: 'Sợi tre thiên nhiên kháng khuẩn vượt trội, hút ẩm và dịu nhẹ với mọi làn da.',
      iconName: 'Wind',
      imageSrc: '/images/catalog/page02_obj34_417x662.png',
    },
    {
      id: 'fiber-mint',
      name: 'Sợi Bạc Hà',
      description: 'Kháng khuẩn tự nhiên, tạo cảm giác mát lạnh tức thì khi tiếp xúc với làn da.',
      iconName: 'Leaf',
      imageSrc: '/images/catalog/page02_obj36_775x517.png',
    },
    {
      id: 'fiber-lotus',
      name: 'Sợi Sen',
      description: 'Sợi dệt từ cuống sen cao cấp, khả năng chống tia cực tím và thấm hút tối ưu.',
      iconName: 'Flower2',
      imageSrc: '/images/catalog/page02_obj38_1192x688.png',
    },
    {
      id: 'fiber-banana',
      name: 'Sợi Tơ Chuối',
      description: 'Nguồn nguyên liệu sẵn có và phổ biến tại Việt Nam, sợi dệt nhẹ, bền chắc và thân thiện môi trường.',
      iconName: 'Sparkles',
      imageSrc: '/images/catalog/page02_obj40_731x548.png',
    },
    {
      id: 'fiber-coconut',
      name: 'Sợi Xơ Dừa',
      description: 'Nguồn nguyên liệu tự nhiên bản địa Việt Nam, dệt thành sợi bền chắc độc đáo và chất lượng cao.',
      iconName: 'ShieldCheck',
      imageSrc: '/images/catalog/page02_obj31_983x653.jpg',
    },
  ],
  properties: [
    {
      id: 'prop-1',
      title: 'Siêu mềm mượt',
      description: 'Cảm giác khi sờ vào siêu mềm mịn, êm ái cho làn da.',
    },
    {
      id: 'prop-2',
      title: 'Bền đẹp, giữ màu cực tốt',
      description: 'Độ bền sợi cao, màu sắc sắc nét sau nhiều lần sử dụng.',
    },
    {
      id: 'prop-3',
      title: 'Kháng khuẩn, thoáng khí',
      description: 'Khả năng thông thoáng tự nhiên, ức chế vi khuẩn gây mùi.',
    },
    {
      id: 'prop-4',
      title: 'Không cần là ủi',
      description: 'Sợi vải chống nhăn tự nhiên, giữ nếp phẳng phiu tiện lợi.',
    },
    {
      id: 'prop-5',
      title: 'Thân thiện môi trường',
      description: '100% sợi vải tự nhiên, an toàn và phát triển bền vững.',
    },
  ],
};

// ============================================================================
// 3. CÔNG NGHỆ SEAMLESS & HỌA TIẾT VĂN HÓA (Trang 3 & 4 Catalogue)
// ============================================================================
export const SEAMLESS_TECHNOLOGY: SeamlessTechnologyData = {
  title: 'Công Nghệ Seamless Từ Sơ Mi Không Đường May',
  badge: 'Seamless Technology',
  points: [
    'Công nghệ liền mạch, không sử dụng đường may thường được áp dụng tại tay áo, nẹp áo, vạt áo.',
    'Chất liệu vải cao cấp, co giãn 4 chiều vô cùng thoải mái.',
    'Trọng lượng áo siêu nhẹ, cảm giác khi sờ vào siêu mềm mịn.',
  ],
  culturalIntro:
    'IHDC FASHION là thương hiệu thời trang độc đáo với tiếp cận sáng tạo đặc biệt, khai thác sâu vào yếu tố văn hóa, đưa các giá trị văn hóa vào thiết kế thời trang. Với mục tiêu tôn vinh giá trị văn hóa, nét đẹp độc đáo của Việt Nam, thể hiện tinh thần dân tộc.',
  culturalMotifs: [
    {
      id: 'motif-trong-dong',
      name: 'Trống Đồng Cổ',
      description: 'Họa tiết biểu tượng di sản lịch sử ngàn năm văn hiến của dân tộc Việt Nam.',
      photoSlot: {
        id: 'slot-motif-trong-dong',
        src: '/images/catalog/page04_obj56_700x560.jpg',
        alt: 'Họa tiết Trống Đồng Cổ',
        description: 'Bản vẽ họa tiết di sản Trống Đồng Cổ trên trang phục IHDC',
        status: 'verified',
      },
    },
    {
      id: 'motif-hang-xom-trai',
      name: 'Hang Xóm Trại',
      description: 'Họa tiết lấy cảm hứng từ di chỉ khảo cổ học Hang Xóm Trại nổi tiếng.',
      photoSlot: {
        id: 'slot-motif-hang-xom-trai',
        src: '/images/catalog/page00_obj53_800x600.jpg',
        alt: 'Họa tiết Hang Xóm Trại',
        description: 'Bản vẽ chi tiết họa tiết Hang Xóm Trại',
        status: 'verified',
      },
    },
    {
      id: 'motif-nui-dau-rong',
      name: 'Núi Đầu Rồng',
      description: 'Hình tượng Núi Đầu Rồng kỳ vĩ, thể hiện khí phách kiên cường và thịnh vượng.',
      photoSlot: {
        id: 'slot-motif-nui-dau-rong',
        src: '/images/catalog/page04_obj55_600x450.jpg',
        alt: 'Họa tiết Núi Đầu Rồng',
        description: 'Họa tiết Núi Đầu Rồng trong thiết kế đồng phục IHDC',
        status: 'verified',
      },
    },
    {
      id: 'motif-suoi-kim-boi',
      name: 'Suối Nước Nóng Kim Bôi',
      description: 'Dòng chảy êm dịu, mềm mại của nguồn khoáng thiên nhiên Kim Bôi.',
      photoSlot: {
        id: 'slot-motif-suoi-kim-boi',
        src: '/images/catalog/page04_obj57_550x412.jpg',
        alt: 'Họa tiết Suối Nước Nóng Kim Bôi',
        description: 'Họa tiết Suối Nước Nóng Kim Bôi trên sơ mi IHDC',
        status: 'verified',
      },
    },
  ],
  macroPhotoSlots: [
    {
      title: 'Nẹp áo ép nhiệt Seamless',
      slot: {
        id: 'slot-macro-nep-ao',
        src: '/images/catalog/page05_obj75_512x512.png',
        alt: 'Chi tiết nẹp áo ép dán nhiệt Seamless',
        description: 'Ảnh cận cảnh kỹ thuật dán nẹp không dùng đường chỉ, phẳng tuyệt đối',
        status: 'verified',
      },
    },
    {
      title: 'Đường dệt vải sọc tinh xảo',
      slot: {
        id: 'slot-macro-det-vai-soc',
        src: '/images/catalog/page00_obj43_768x768.jpg',
        alt: 'Cận cảnh thớ vải dệt sọc cao cấp',
        description: 'Độ sắc nét của từng sợi dệt sọc co giãn 4 chiều',
        status: 'verified',
      },
    },
    {
      title: 'Tay áo thêu logo HDC sắc nét',
      slot: {
        id: 'slot-macro-theu-logo-hdc',
        src: '/images/catalog/page03_obj45_768x768.jpg',
        alt: 'Logo HDC thêu sắc nét trên tay áo',
        description: 'Chi tiết mũi thêu logo sắc nét và chuẩn màu nhận diện',
        status: 'verified',
      },
    },
    {
      title: 'Dàn áo mẫu thực tế tại xưởng may',
      slot: {
        id: 'slot-macro-dan-ao-mau-xuong',
        src: '/images/catalog/page03_obj47_1024x768.jpg',
        alt: 'Dàn áo mẫu đồng phục thực tế',
        description: 'Dàn mẫu sơ mi và vest hoàn thiện tại xưởng may IHDC',
        status: 'verified',
      },
    },
  ],
};

// ============================================================================
// 4. DANH MỤC SẢN PHẨM BEST SELLER (Trang 4, 5, 6, 10, 11, 12 Catalogue)
// ============================================================================
export const PRODUCTS_CATALOG: readonly ProductCatalogGroup[] = [
  // Nhóm 1: Sơ mi Best Seller & Vest (Trang 5 Catalogue)
  {
    id: 'so-mi-vest',
    categoryTitle: 'Sơ Mi Best Seller & Vest',
    description:
      'Các dòng sơ mi cao cấp: Sơ mi ngắn tay, dài tay, sơ mi không đường may Seamless, sơ mi trắng, sơ mi họa tiết văn hóa và bộ vest lịch lãm.',
    items: [
      {
        id: 'sm-ngan-tay',
        name: 'Sơ Mi Ngắn Tay',
        categoryName: 'Sơ mi công sở',
        badge: 'Best Seller',
        colorSwatch: '#CBD5E1',
        description: 'Mẫu sơ mi ngắn tay trẻ trung, thoáng mát, chất vải co giãn nhẹ nhàng.',
        photoSlot: {
          id: 'slot-sm-ngan-tay',
          src: '/images/catalog/crop_sm_ngan_tay.png',
          alt: 'Sơ mi ngắn tay HDC Fashion',
          description: 'Mẫu sơ mi ngắn tay chuẩn form dáng IHDC',
          status: 'verified',
        },
      },
      {
        id: 'sm-dai-tay',
        name: 'Sơ Mi Dài Tay',
        categoryName: 'Sơ mi lịch lãm',
        badge: 'Best Seller',
        colorSwatch: '#93C5FD',
        description: 'Sơ mi dài tay phom chuẩn cổ đức, bề mặt vải mềm mượt không cần là ủi.',
        photoSlot: {
          id: 'slot-sm-dai-tay',
          src: '/images/catalog/crop_sm_dai_tay.png',
          alt: 'Sơ mi dài tay HDC Fashion',
          description: 'Mẫu sơ mi nam dài tay thanh lịch tại trang bìa catalogue',
          status: 'verified',
        },
      },
      {
        id: 'sm-khong-duong-may',
        name: 'Sơ Mi Không Đường May',
        categoryName: 'Công nghệ Seamless',
        badge: 'Đột phá',
        colorSwatch: '#94A3B8',
        description: 'Công nghệ liền mạch tại cổ áo, nẹp áo và vạt áo, trọng lượng siêu nhẹ.',
        photoSlot: {
          id: 'slot-sm-khong-duong-may',
          src: '/images/catalog/crop_sm_set_seamless.png',
          alt: 'Sơ mi không đường may Seamless',
          description: 'Mẫu sơ mi công nghệ không đường may cao cấp siêu nhẹ',
          status: 'verified',
        },
      },
      {
        id: 'sm-trang',
        name: 'Sơ Mi Trắng',
        categoryName: 'Best Seller',
        badge: 'Cơ bản chuẩn mực',
        colorSwatch: '#FFFFFF',
        description: 'Sắc trắng thanh lịch, giữ màu cực tốt, tạo phong thái trang trọng.',
        photoSlot: {
          id: 'slot-sm-trang',
          src: '/images/catalog/crop_sm_trang.png',
          alt: 'Sơ mi trắng HDC Fashion',
          description: 'Mẫu sơ mi trắng cơ bản chuẩn doanh nghiệp',
          status: 'verified',
        },
      },
      {
        id: 'sm-hoa-tiet-van-hoa',
        name: 'Sơ Mi Họa Tiết Văn Hóa',
        categoryName: 'Dòng Di Sản',
        badge: 'Độc bản văn hóa',
        colorSwatch: '#C5A869',
        description: 'Đưa các giá trị văn hóa vào thiết kế thời trang, tôn vinh nét đẹp Việt Nam.',
        photoSlot: {
          id: 'slot-sm-hoa-tiet-van-hoa',
          src: '/images/catalog/page05_obj70_360x360.png',
          alt: 'Sơ mi họa tiết văn hóa HDC Fashion',
          description: 'Mẫu sơ mi in dệt họa tiết văn hóa độc đáo',
          status: 'verified',
        },
      },
      {
        id: 'vest-doanh-nhan',
        name: 'Vest Đồng Phục Cao Cấp',
        categoryName: 'Vest May Đo',
        badge: 'Sang trọng',
        colorSwatch: '#0F172A',
        description: 'Form dáng vest đứng chuẩn mực, tôn vinh vị thế và hình ảnh chuyên nghiệp.',
        photoSlot: {
          id: 'slot-vest-doanh-nhan',
          src: '/images/catalog/page05_obj78_750x750.png',
          alt: 'Vest đồng phục HDC Fashion',
          description: 'Bộ vest lịch lãm cắt may tinh xảo',
          status: 'verified',
        },
      },
    ],
  },

  // Nhóm 2: Polo Trẻ Trung, Năng Động (Trang 6 Catalogue)
  {
    id: 'polo-anti-uv',
    categoryTitle: 'Polo Trẻ Trung, Năng Động',
    description:
      'Sự giao thoa giữa phong cách thời trang thoải mái, phóng khoáng nhưng vẫn rất lịch lãm. Chất liệu vải cao cấp, công nghệ hiện đại thấm hút tốt và tính năng Anti UV chống nắng, bảo vệ làn da tối đa khi mặc.',
    highlightBanner: {
      title: 'Polo Trẻ Trung, Năng Động - IHDC',
      subText:
        'Áo Polo cao cấp của IHDC là sự giao thoa giữa phong cách thời trang thoải mái, phóng khoáng nhưng vẫn rất lịch lãm. Với chất liệu vải cao cấp, công nghệ hiện đại thấm hút tốt và tính năng Anti UV chống nắng, bảo vệ làn da tối đa khi mặc.',
      bulletPoints: [
        'Chất liệu vải cao cấp, thấm hút mồ hôi tối đa',
        'Tính năng Anti UV chống nắng, bảo vệ làn da',
        'Phong cách thoải mái, phóng khoáng và lịch lãm',
      ],
      slot: {
        id: 'slot-polo-banner-team',
        src: '/images/catalog/page00_obj84_1229x922.jpg',
        alt: 'Đội ngũ showroom HDC Fashion trong áo polo đồng phục',
        description: 'Tập thể showroom HDC Fashion cầm bảng slogan "Phong cách tạo thành công"',
        status: 'verified',
      },
    },
    items: [
      {
        id: 'polo-do-do',
        name: 'Polo Đỏ Đô Phối Viền Cổ',
        categoryName: 'Polo Anti-UV',
        badge: 'Nổi bật',
        colorSwatch: '#800020',
        description: 'Áo polo gam màu đỏ đô bo cổ viền sọc tương phản tinh tế.',
        photoSlot: {
          id: 'slot-polo-do-do',
          src: '/images/catalog/page06_obj90_576x768.png',
          alt: 'Áo Polo Anti-UV Đỏ đô cổ viền',
          description: 'Áo Polo Anti-UV phối cổ viền màu đỏ đô',
          status: 'verified',
        },
      },
      {
        id: 'polo-navy',
        name: 'Polo Xanh Navy',
        categoryName: 'Polo Anti-UV',
        badge: 'Lịch thiệp',
        colorSwatch: '#0a1b33',
        description: 'Tone màu xanh navy trang nhã, sạch sẽ và dễ phối đồ.',
        photoSlot: {
          id: 'slot-polo-navy',
          src: '/images/catalog/page06_obj89_384x512.png',
          alt: 'Áo Polo Anti-UV Xanh navy',
          description: 'Áo Polo Anti-UV màu xanh navy lịch lãm',
          status: 'verified',
        },
      },
      {
        id: 'polo-trang-3-soc',
        name: 'Polo Trắng 3 Sọc Cổ',
        categoryName: 'Polo Anti-UV',
        badge: 'Thể thao năng động',
        colorSwatch: '#F8FAFC',
        description: 'Sắc trắng thanh lịch kết hợp 3 sọc thể thao tại bo cổ áo.',
        photoSlot: {
          id: 'slot-polo-trang-3-soc',
          src: '/images/catalog/page06_obj86_576x768.png',
          alt: 'Áo Polo Anti-UV Trắng 3 sọc cổ',
          description: 'Áo Polo Anti-UV màu trắng điểm 3 sọc cổ',
          status: 'verified',
        },
      },
      {
        id: 'polo-xanh-bien',
        name: 'Polo Xanh Biển Tươi Sáng',
        categoryName: 'Polo Anti-UV',
        badge: 'Năng động',
        colorSwatch: '#2563EB',
        description: 'Màu xanh biển tràn đầy năng lượng tươi mới cho các hoạt động.',
        photoSlot: {
          id: 'slot-polo-xanh-bien',
          src: '/images/catalog/page06_obj87_482x512.png',
          alt: 'Áo Polo Anti-UV Xanh biển',
          description: 'Áo Polo Anti-UV sắc xanh biển tươi mát',
          status: 'verified',
        },
      },
      {
        id: 'polo-den',
        name: 'Polo Đen Sang Trọng',
        categoryName: 'Polo Anti-UV',
        badge: 'Cá tính',
        colorSwatch: '#111827',
        description: 'Màu đen huyền bí, chất vải bền màu, chống tia UV hiệu quả.',
        photoSlot: {
          id: 'slot-polo-den',
          src: '/images/catalog/page06_obj88_384x512.png',
          alt: 'Áo Polo Anti-UV Đen',
          description: 'Áo Polo Anti-UV màu đen sang trọng',
          status: 'verified',
        },
      },
    ],
  },

  // Nhóm 3: Đồng Phục IHDC Kids (Trang 9, 10, 11, 12 Catalogue)
  {
    id: 'hdc-kids',
    categoryTitle: 'Đồng Phục IHDC Kids',
    description:
      'Điểm đến chất lượng cho đồng phục học sinh, nơi bạn tìm thấy sự hoàn hảo giữa phong cách và chất lượng. Chúng tôi tự hào mang đến cho bạn những giải pháp đồng phục độc đáo, phù hợp với hình ảnh và giá trị của tập thể trường học, cam kết mang đến sự hài lòng tuyệt đối cho khách hàng.',
    items: [
      {
        id: 'set-sm-gile-cuc-vang',
        name: 'Set Sơ Mi Gile Vest Cúc Vàng',
        categoryName: 'Đồng phục học sinh',
        badge: 'Best Seller',
        colorSwatch: '#1E3A8A',
        description: 'Gile vest màu xanh đậm đính cúc kim loại vàng sang trọng cùng sơ mi trắng.',
        photoSlot: {
          id: 'slot-set-sm-gile-cuc-vang',
          src: '/images/catalog/page12_obj134_452x452.png',
          alt: 'Set Sơ mi gile vest cúc vàng IHDC Kids',
          description: 'Set sơ mi gile vest học sinh cúc vàng nổi bật',
          status: 'verified',
        },
      },
      {
        id: 'set-gile-xam-ca-vat-tim',
        name: 'Set Gile Ghi Xám Cà Vạt Tím',
        categoryName: 'Đồng phục học sinh',
        badge: 'Best Seller',
        colorSwatch: '#6B7280',
        description: 'Áo gile dệt sợi ghi xám phối cà vạt tím pastel trang nhã cho học sinh.',
        photoSlot: {
          id: 'slot-set-gile-xam-ca-vat-tim',
          src: '/images/catalog/page12_obj135_452x452.png',
          alt: 'Set Gile ghi xám cà vạt tím IHDC Kids',
          description: 'Set đồng phục gile ghi xám phối cà vạt tím',
          status: 'verified',
        },
      },
      {
        id: 'set-yem-xanh-reu',
        name: 'Set Váy Yếm Xanh Rêu',
        categoryName: 'Đồng phục học sinh',
        badge: 'Duyên dáng',
        colorSwatch: '#4D7C0F',
        description: 'Thiết kế váy yếm học sinh gam màu xanh rêu thanh nhã kết hợp áo trắng.',
        photoSlot: {
          id: 'slot-set-yem-xanh-reu',
          src: '/images/catalog/page12_obj136_1152x648.png',
          alt: 'Set váy yếm xanh rêu IHDC Kids',
          description: 'Set yếm học sinh gam màu xanh rêu thanh nhã',
          status: 'verified',
        },
      },
      {
        id: 'set-polo-kaki-be',
        name: 'Set Polo + Quần/Váy Kaki Be',
        categoryName: 'Đồng phục học sinh',
        badge: 'Năng động',
        colorSwatch: '#D2B48C',
        description: 'Áo polo thoáng mát phối quần hoặc chân váy kaki be xếp ly.',
        photoSlot: {
          id: 'slot-set-polo-kaki-be',
          src: '/images/catalog/page00_obj132_395x593.png',
          alt: 'Set Polo Kaki be IHDC Kids',
          description: 'Đồng phục học sinh Set Polo phối Quần/Váy kaki be',
          status: 'verified',
        },
      },
    ],
    extraSubGroup: {
      title: 'Polo Trẻ Em Đầy Đủ Màu Sắc (Trang 11 Catalogue)',
      description:
        'Áo polo trẻ em với đầy đủ màu sắc cũng được may theo dáng cổ bẻ, form dáng suông, vừa vặn như với áo người lớn, item này sẽ mang đến vẻ đẹp cực thời trang và đáng yêu cho bé.',
      items: [
        {
          id: 'polo-kids-trang',
          name: 'Polo Trẻ Em Màu Trắng',
          categoryName: 'Polo Kids',
          colorSwatch: '#FFFFFF',
          description: 'Áo polo trắng dáng cổ bẻ, form suông thoải mái cho bé sinh hoạt.',
          photoSlot: {
            id: 'slot-polo-kids-trang',
            src: '/images/catalog/page00_obj124_450x600.png',
            alt: 'Polo Trẻ Em Màu Trắng',
            description: 'Áo Polo học sinh màu trắng Best Seller',
            status: 'verified',
          },
        },
        {
          id: 'polo-kids-navy',
          name: 'Polo Trẻ Em Màu Xanh Navy',
          categoryName: 'Polo Kids',
          colorSwatch: '#0a1b33',
          description: 'Form dáng vừa vặn, màu sắc sạch sẽ, chống bám bẩn khi vận động.',
          photoSlot: {
            id: 'slot-polo-kids-navy',
            src: '/images/catalog/page11_obj128_683x1024.png',
            alt: 'Polo Trẻ Em Màu Xanh Navy',
            description: 'Áo Polo học sinh màu xanh navy Best Seller',
            status: 'verified',
          },
        },
        {
          id: 'polo-kids-do',
          name: 'Polo Trẻ Em Màu Đỏ',
          categoryName: 'Polo Kids',
          colorSwatch: '#DC2626',
          description: 'Sắc đỏ tràn đầy năng lượng và tự tin trong các hoạt động học đường.',
          photoSlot: {
            id: 'slot-polo-kids-do',
            src: '/images/catalog/page11_obj129_342x455.png',
            alt: 'Polo Trẻ Em Màu Đỏ',
            description: 'Áo Polo học sinh màu đỏ Best Seller',
            status: 'verified',
          },
        },
        {
          id: 'polo-kids-vang',
          name: 'Polo Trẻ Em Màu Vàng',
          categoryName: 'Polo Kids',
          colorSwatch: '#EAB308',
          description: 'Sắc vàng tươi sáng mang đến vẻ đẹp thời trang và đáng yêu cho bé.',
          photoSlot: {
            id: 'slot-polo-kids-vang',
            src: '/images/catalog/page11_obj127_360x480.png',
            alt: 'Polo Trẻ Em Màu Vàng',
            description: 'Áo Polo học sinh màu vàng Best Seller',
            status: 'verified',
          },
        },
      ],
    },
  },

  // Nhóm 4: Phụ Kiện Doanh Nghiệp (Trang 4 Catalogue)
  {
    id: 'phu-kien-qua-tang',
    categoryTitle: 'Tỉ Mỉ Trong Từng Phụ Kiện',
    description:
      'Ví da, thắt lưng họa tiết, sơ mi, cavat,.. Từng phụ kiện được hoàn thiện tinh tế đồng bộ phong cách và đẳng cấp.',
    items: [
      {
        id: 'ca-vat',
        name: 'Cavat Đồng Bộ Họa Tiết',
        categoryName: 'Phụ kiện',
        badge: 'Tinh tế',
        colorSwatch: '#1E293B',
        description: 'Cavat dệt hoa văn tỉ mỉ, đồng bộ sang trọng cùng áo sơ mi.',
        photoSlot: {
          id: 'slot-ca-vat',
          src: '/images/catalog/page04_obj63_256x224.png',
          alt: 'Cavat đồng phục HDC Fashion',
          description: 'Phụ kiện cavat họa tiết tinh tế',
          status: 'verified',
        },
      },
      {
        id: 'vi-da',
        name: 'Ví Da Doanh Nhân',
        categoryName: 'Phụ kiện',
        badge: 'Cao cấp',
        colorSwatch: '#78350F',
        description: 'Ví da cao cấp dập chìm nhận diện thương hiệu tỉ mỉ từng chi tiết.',
        photoSlot: {
          id: 'slot-vi-da',
          src: '/images/catalog/page04_obj64_514x386.png',
          alt: 'Ví da doanh nhân HDC Fashion',
          description: 'Phụ kiện ví da cao cấp đồng bộ trang phục',
          status: 'verified',
        },
      },
      {
        id: 'that-lung-da',
        name: 'Thắt Lưng Họa Tiết',
        categoryName: 'Phụ kiện',
        badge: 'Sang trọng',
        colorSwatch: '#0F172A',
        description: 'Thắt lưng da cao cấp phối khóa kim loại mạ vàng sang trọng.',
        photoSlot: {
          id: 'slot-that-lung-da',
          src: '/images/catalog/page04_obj62_256x228.png',
          alt: 'Thắt lưng da HDC Fashion',
          description: 'Thắt lưng họa tiết cao cấp',
          status: 'verified',
        },
      },
    ],
  },
] as const;

// ============================================================================
// 5. CASE STUDY DỰ ÁN THỰC TẾ (Trang 8 & Trang 9-12 Catalogue)
// ============================================================================
export const CASE_STUDIES: readonly CaseStudyItem[] = [
  // Dự án 1: Giải Golf 30 năm DNT Việt Nam (Trang 8 Catalogue - 100% nguyên văn)
  {
    id: 'case-golf-30-nam',
    title: 'Đồng Phục IHDC Golf Truyền Cảm Hứng Chiến Thắng Cho Các Thủ Lĩnh',
    subtitle: 'Giải Golf kỷ niệm 30 năm phong trào DNT Việt Nam - Sân Golf Long Biên',
    description:
      'Giải Golf kỷ niệm 30 năm phong trào DNT Việt Nam đã được tổ chức thành công tại sân Golf Long Biên. Với đông đảo các Shark tham dự và sự góp mặt của gương mặt quen thuộc - anh Đặng Hồng Anh - Chủ tịch hội DNT Việt Nam , anh Đỗ Duy Liên - Phó chủ tịch hội DNT Việt Nam, chủ tịch hội DNT Hoà Bình… Cùng hàng trăm các Shark trong hội DNT Việt Nam.',
    photoSlot: {
      id: 'slot-case-golf',
      src: '/images/catalog/page07_obj97_1229x820.png',
      alt: 'Các Golfer thi đấu tại Giải Golf kỷ niệm 30 năm phong trào Doanh nhân trẻ Việt Nam',
      description: 'Hình ảnh golfer thi đấu trong trang phục Đồng phục IHDC Golf tại sân Golf Long Biên',
      status: 'verified',
    },
    gallery: [
      {
        title: 'Toàn cảnh khai mạc cùng anh Đặng Hồng Anh và anh Đỗ Duy Liên',
        description: 'Sự kiện quy tụ đông đảo các Shark tham dự trong trang phục đồng phục IHDC Golf.',
        slot: {
          id: 'slot-golf-sharks-panorama',
          src: '/images/catalog/page08_obj104_864x576.jpg',
          alt: 'Toàn cảnh Shark và Doanh nhân trẻ tham dự giải Golf',
          description: 'Toàn cảnh lễ khai mạc giải Golf kỷ niệm 30 năm DNT Việt Nam',
          status: 'verified',
        },
      },
      {
        title: 'Golfer nữ tự tin trong cú swing uyển chuyển',
        description: 'Trang phục thể thao thoải mái, co giãn tối đa giúp các thủ lĩnh tự tin thi đấu.',
        slot: {
          id: 'slot-golf-female-swing',
          src: '/images/catalog/page08_obj103_672x448.jpg',
          alt: 'Golfer nữ swing gậy trong trang phục IHDC Golf',
          description: 'Ảnh golfer nữ swing gậy thi đấu',
          status: 'verified',
        },
      },
      {
        title: 'Dàn áo Polo thể thao thi đấu năng động',
        description: 'Áo polo đồng phục thi đấu sắc nét, thấm hút mồ hôi và chống nắng Anti-UV.',
        slot: {
          id: 'slot-golf-group-white-orange',
          src: '/images/catalog/page07_obj95_768x576.jpg',
          alt: 'Dàn áo polo thi đấu golf',
          description: 'Ảnh dàn áo polo thể thao thi đấu giải Golf',
          status: 'verified',
        },
      },
    ],
  },

  // Dự án 2: Đồng Phục Học Sinh IHDC Kids (Trang 9 - 12 Catalogue - 100% nguyên văn)
  {
    id: 'case-ihdc-kids',
    title: 'Đồng Phục IHDC Kids - Điểm Đến Chất Lượng Cho Đồng Phục Học Sinh',
    subtitle: 'Nơi bạn tìm thấy sự hoàn hảo giữa phong cách và chất lượng',
    description:
      'IHDC Fashion - điểm đến chất lượng cho đồng phục học sinh, nơi bạn tìm thấy sự hoàn hảo giữa phong cách và chất lượng. Chúng tôi tự hào mang đến cho bạn những giải pháp đồng phục độc đáo, phù hợp với hình ảnh và giá trị của tập thể trường học, cam kết mang đến sự hài lòng tuyệt đối cho khách hàng. Thay vì mãi sử dụng các thiết kế đơn giản như ngày trước, nhiều đơn vị nhà trường đã tiến hành cải cách đổi mới những mẫu trang phục này. Nhờ vậy các bạn học sinh đang học tập tại đây cũng sẽ cảm thấy thoải mái, không bị gò bó áp lực.',
    photoSlot: {
      id: 'slot-case-kids',
      src: '/images/catalog/page09_obj114_630x393.jpg',
      alt: 'Lễ khai giảng rực rỡ trong trang phục học đường IHDC Kids',
      description: 'Hình ảnh học sinh rạng rỡ trong đồng phục học đường IHDC Kids',
      status: 'verified',
    },
    gallery: [
      {
        title: 'Trang phục lễ hội & khai giảng trang trọng',
        description: 'Thiết kế độc đáo, phù hợp với hình ảnh và giá trị của tập thể trường học.',
        slot: {
          id: 'slot-school-opening',
          src: '/images/catalog/page09_obj114_630x393.jpg',
          alt: 'Không khí lễ hội trường học trang trọng',
          description: 'Học sinh trong đồng phục học đường trang nhã',
          status: 'verified',
        },
      },
      {
        title: 'Học sinh tiểu học rạng rỡ trong sắc áo polo',
        description: 'Form dáng suông vừa vặn giúp các bạn học sinh cảm thấy thoải mái, không bị gò bó áp lực.',
        slot: {
          id: 'slot-school-kids-red-airplanes',
          src: '/images/catalog/page09_obj113_750x378.jpg',
          alt: 'Học sinh trong sắc áo polo rạng rỡ',
          description: 'Học sinh tươi vui cùng đồng phục học đường',
          status: 'verified',
        },
      },
      {
        title: 'Đồng phục học đường năng động và vui tươi',
        description: 'Chất liệu cao cấp, bền đẹp, an toàn cho làn da học sinh khi vui học và sáng tạo.',
        slot: {
          id: 'slot-school-kids-yellow',
          src: '/images/catalog/page10_obj120_665x443.jpg',
          alt: 'Nhóm học sinh năng động trong sắc áo polo vàng',
          description: 'Học sinh rạng rỡ trong đồng phục polo vàng năng động',
          status: 'verified',
        },
      },
    ],
  },
] as const;

// ============================================================================
// 6. CHÍNH SÁCH & LÝ DO CHỌN TẠI IHDC FASHION (Trang 7 & 10 Catalogue - 100% nguyên văn)
// ============================================================================
export const IHDC_POLICIES: readonly PolicyCommitmentItem[] = [
  {
    id: 'pol-1',
    iconType: 'check',
    title: 'Tư vấn, thiết kế MIỄN PHÍ phù hợp với hình ảnh và giá trị của tập thể trường học / thương hiệu',
  },
  {
    id: 'pol-2',
    iconType: 'check',
    title: 'Không bị giới hạn số lần sửa chữa mẫu',
    highlight: true,
  },
  {
    id: 'pol-3',
    iconType: 'check',
    title: 'Đa dạng mẫu áo đồng phục: Vest, sơ mi, polo… sử dụng chất liệu cao cấp, bền đẹp, thân thiện môi trường và an toàn cho làn da người sử dụng',
  },
  {
    id: 'pol-4',
    iconType: 'check',
    title: 'Đa dạng chất liệu, màu sắc đa dạng, phong phú',
  },
  {
    id: 'pol-5',
    iconType: 'check',
    title: 'Đa dạng các form áo khác nhau để phù hợp với mọi vóc dáng cơ thể',
  },
  {
    id: 'pol-6',
    iconType: 'check',
    title: 'Các sản phẩm có giá thành phù hợp với nhiều phân khúc khách hàng',
  },
  {
    id: 'pol-7',
    iconType: 'star',
    title: 'IHDC có chính sách chiết khấu, ưu đãi hấp dẫn cho khách hàng doanh nghiệp, khách đặt số lượng lớn',
    highlight: true,
  },
  {
    id: 'pol-8',
    iconType: 'star',
    title: 'Giao hàng MIỄN PHÍ toàn quốc nhanh chóng',
    highlight: true,
  },
  {
    id: 'pol-9',
    iconType: 'star',
    title: 'IHDC đã hợp tác thiết kế đồng phục cho nhiều đơn vị, doanh nghiệp tên tuổi',
  },
] as const;
