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
  redirectUrl: string;
  onHover?: () => void;
}

export interface IFooterMenu {
  title: string;
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

