import { IFeatureCardProps, ITranslationProps } from '@src/interfaces';
import Aos from 'aos';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect } from 'react';

export const FeatureCard: NextPage<IFeatureCardProps> = ({ title, subTitle, iconUrl }) => {
  return (
    <div className="card">
      <Image src={iconUrl} width="88" height="72" draggable="false"></Image>
      <div className="title">{title}</div>
      <div className="subtitle">{subTitle}</div>
    </div>
  );
};

const HeroPage: NextPage<ITranslationProps> = ({ t, locale }) => {
  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);
  return (
    <>
      <div className="hero-page" data-aos="fade-in">
        <div className="bannar">
          <h1 className="slogan" style={{ fontSize: locale === 'en' ? 36 : 56 }}>
            {t('slogan')}
          </h1>
          <div className="description">{t('description')}</div>
          <button className="primary-button start-button">{t('start-free')}</button>
        </div>
      </div>

      <div className="card-bannar">
        <FeatureCard
          iconUrl="/images/icons/cloud.svg"
          title={t('card-1-title')}
          subTitle={t('card-1-subtitle')}
        />
        <FeatureCard
          iconUrl="/images/icons/solution.svg"
          title={t('card-2-title')}
          subTitle={t('card-2-subtitle')}
        />
        <FeatureCard
          iconUrl="/images/icons/crown.png"
          title={t('card-3-title')}
          subTitle={t('card-3-subtitle')}
        />
      </div>
    </>
  );
};

export default HeroPage;
