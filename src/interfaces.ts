import { CSSProperties } from 'react';

type typeObject<type, K extends string | number | symbol> = { [k in K]: type };

export interface IMenuItemProps {
  hasArrow?: boolean;
  href?: string;
  linkTarget?: string;
  onClick?: () => void;
  menu?: any;
}

export interface IFeatureCardProps {
  iconUrl: string;
  title: string;
  subTitle: string;
  redirectUrl?: string;
  iconWidth: string;
  iconHeight: string;
  className?: string;
}

export interface IFeatureSwiperItemProps {
  index?: number;
  iconUrl: string;
  title: string;
  subTitle: string;
  brief: string;
  redirectUrl: string;
}

export interface ISolutionItemProp {
  imageUrl: string;
  dividerUrl: string;
  title: string;
  brief: string;
  imagePosition: 'left' | 'right';
  style?: CSSProperties;
  fromColor?: string,
  toColor?: string,
  className?: string,
}

export interface ICompanyProps {
  iconUrl: string;
  title: string;
  subTitle: string;
  selected?: boolean;
  comment: string;
  companyLogoUrl: string;
  companyName: string;
  companyBrief: string;
  redirectUrl?: string;
  onHover?: () => void;
}

export interface IFooterMenu {
  title: string;
  isDisable?: boolean;
  child: {
    title: string;
    url?: string;
    tooltip?: string;
  }[];
}

export interface IFriendLink {
  title: string;
  url: string;
}

export interface IGreatTitleBar {
  title: string;
  subtitle: string;
  notes: string;
}

export interface IFeatureItemProps {
  iconUrl: string;
  hoverIconUrl: string;
  title: string;
  subtitle: string;
  redirectUrl: string;
  mask: string;
  visibility: boolean;
}

export enum HeaderBarMenu {
  FEATURES,
  SOLUTIONS,
  QRCODE,
  ABOUT_US,
}
export interface IHeaderBarMenuProps {
  left: number;
  style?: CSSProperties;
  name: HeaderBarMenu;
  onMouseLeave: () => void;
  onMouseMove: () => void;
}

type FeatureHeroPageData = {
  icon: string;
  title: string;
  subtitle: string;
};
export interface IFeatureHeroPageProps {
  title: string;
  brief: string;
  docsUrl: string;
  datas: [FeatureHeroPageData, FeatureHeroPageData, FeatureHeroPageData];
}

export interface IFeatureDescriptionProps {
  firstTitle: string;
  firstSubtitle: string;
  secondTitle: string;
  datas: [FeatureHeroPageData, FeatureHeroPageData, FeatureHeroPageData];
  photo: string;
  photoPosition: 'left' | 'right';
}

export interface IFeatureAppealBarProps {
  title: string;
  datas: [FeatureHeroPageData, FeatureHeroPageData, FeatureHeroPageData];
}

export interface ITabsProps {
  tabs: { title: string; url?: string }[];
  activeIndex: number;
  onChange: (idx: number) => void;
}

export enum CompanyCategory {
  TRADE = 1,
  EDUCATION,
  MEDICAL,
  FINANCE,
  GOV,
  IT,
}

export interface ICompanyItemProps {
  title: string;
  brief: string;
  imageUrl?: string;
  category: CompanyCategory;
  url: string;
}

export interface IPaginationProps {
  pageSize: number;
  totalCount: number;
  currentPage: number;
  onChange: (page: number) => void;
}

type CaseDataItem = { title: string; subtitle: string };

export interface ICaseDetailPageProps {
  category: CompanyCategory;
  themeColor: string;
  logoUrl: string;
  title: string;
  brief: string;
  datas: CaseDataItem[];
  steps: [string, ...string[]];
  features: [
    typeObject<string, 'icon' | 'title' | 'subtitle'>,
    ...typeObject<string, 'icon' | 'title' | 'subtitle'>[]
  ];
  achievements: [
    typeObject<string, 'icon' | 'title'>,
    ...typeObject<string, 'icon' | 'title'>[]
  ];
}

export interface ISolutionPageProps {
  heroTitle: string;
  heroSubtitle: string;
  backgroundUrl: string;
  challenges: typeObject<string, 'title' | 'icon' | 'subtitle'>[];
  solutions: (typeObject<string, 'photo' | 'title'> & {
    items?: { title: string; subtitle: string }[];
    subtitle?: string;
    icon?: string;
  })[];
  cases: ICompanyItemProps[]
}

export interface GetIpRespond {
  asn?: string;
  asn_number?: number;
  asn_org?: string;
  city?: string;
  connection_type?: string;
  continent_code?: string;
  continent_name?: string;
  country_code?: string;
  country_name?: string;
  currency_code?: string;
  currency_name?: string;
  district?: string;
  hostname?: string;
  ip?: string;
  isp?: string;
  latitude?: number;
  longitude?: number;
  org?: string;
  postal_code?: string;
  premium?: boolean;
  region?: string;
  success?: boolean;
  timezone_name?: string;
}

// export interface GetIpRespond {
//   asn: 'AS9304 - HGC Global Communications Limited';
//   asn_number: 9304;
//   asn_org: 'HGC Global Communications Limited';
//   city: 'Tsuen Wan';
//   connection_type: 'Corporate';
//   continent_code: 'AS';
//   continent_name: 'Asia';
//   country_code: 'HK';
//   country_name: 'Hong Kong';
//   currency_code: 'HKD';
//   currency_name: 'Hong Kong Dollar';
//   district: '';
//   hostname: '218.190.231.88';
//   ip: '218.190.231.88';
//   isp: 'HGC Global Communications Limited';
//   latitude: 22.3484;
//   longitude: 114.112;
//   org: 'HGC Global Communications Limited';
//   postal_code: '';
//   premium: false;
//   region: 'Tsuen Wan';
//   success: true;
//   timezone_name: 'Asia/Hong_Kong';
// }