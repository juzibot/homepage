import { CSSProperties } from 'react';

export interface IMenuItemProps {
  hasArrow?: boolean;
  href: string;
  onClick?: () => void;
  onMenuHover?: () => void;
  onMenuHide?: () => void;
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
  redirectUrl?: string;
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
