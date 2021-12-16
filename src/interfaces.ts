import { TFunction } from 'next-i18next';
import { CSSProperties } from 'react';

export interface IMenuItemProps {
  hasArrow?: boolean;
  href: string;
  onClick?: () => void;
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
