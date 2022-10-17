import Image from 'next/image';
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { IFeatureCardProps } from '@src/interfaces';
import { Swiper } from 'swiper/react';
import { Navigation, Parallax, Controller, Swiper as SwiperType } from 'swiper';
import FeatureSwiper from '@src/components/index/FeatureSwiperMobile';
import SolutionPageMobile from '@src/components/index/SolutionPageMobile';
import CompanyDisplayBarMobile from '@src/components/index/CompanyDisplayBarMobile';

const logos = Array(44)
  .fill(null)
  .map((_, index) => {
    return `https://cdn-official-website.juzibot.com/images/index-logos/${
      index + 1
    }.png`;
  });

const FeatureCard: NextPage<IFeatureCardProps> = (props) => {
  return (
    <div className="border border-[#F2F6FF] border-solid rounded-2xl p-6 mt-6 shadow-sm">
      <div className="flex items-center">
        <img
          alt="icon"
          className="flex-shrink-0 w-[66px] h-[54px]"
          src={props.iconUrl}
        />
        <h4 className="flex-1 text-jz-text-1 mb-3">{props.title}</h4>
      </div>
      <p className="subtitle">{props.subTitle}</p>
    </div>
  );
}

const MobileIndexPage: NextPage<{}> = () => {
  const { t, i18n } = useTranslation(['homepage']);
  const { language } = i18n;
  return (
    <div className="mt-14 text-jz-text-3">
      {/* 下一代 */}
      <div className="px-4">
        <h1 className="text-4xl text-center text-jz-text-1 mb-4">{t('slogan')}</h1>
        <p>{t('description')}</p>
        {/* <button className="">{t('start-free')}</button> */}
        <img className="mt-6" src="/static/index-picture-mobile.svg" alt="" />
      </div>

      {/* 10倍 */}
      <div className="px-4">
        <h2 className="text-xl text-center text-jz-text-1 mt-6 mb-4">{t('logos-wall-title')}</h2>
        <div className="flex overflow-x-auto">
          {logos.map((item) => {
            return <img className="mx-[10px] h-[72px]" key={item} src={item} alt="logo" draggable="false" />;
          })}
        </div>
        <div>
          <div></div>
        </div>
        <div className="card-bannar">
          <FeatureCard
            iconUrl="https://cdn-official-website.juzibot.com/images/icons/cloud.png"
            title={t('card-1-title')}
            subTitle={t('card-1-subtitle')}
            iconWidth="93"
            iconHeight="77"
          />
          <FeatureCard
            iconUrl="https://cdn-official-website.juzibot.com/images/icons/solution.png"
            title={t('card-2-title')}
            subTitle={t('card-2-subtitle')}
            iconWidth="92"
            iconHeight="85"
          />
          <FeatureCard
            iconUrl="https://cdn-official-website.juzibot.com/images/icons/crown.png"
            title={t('card-3-title')}
            subTitle={t('card-3-subtitle')}
            iconWidth="92"
            iconHeight="73"
          />
        </div>
      </div>
      
      <FeatureSwiper />
      <SolutionPageMobile />
      <CompanyDisplayBarMobile />
    </div>
  )
}

export default MobileIndexPage;