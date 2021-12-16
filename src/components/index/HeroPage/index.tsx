import { IFeatureCardProps } from '@src/interfaces';
import Aos from 'aos';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const FeatureCard: NextPage<IFeatureCardProps> = ({
  title,
  subTitle,
  iconUrl,
  iconWidth,
  iconHeight,
}) => {
  return (
    <div className="card">
      <div className="icon">
        <Image
          alt="icon"
          src={iconUrl}
          draggable="false"
          width={iconWidth}
          height={iconHeight}
        ></Image>
      </div>
      <div className="title">{title}</div>
      <div className="subtitle">{subTitle}</div>
    </div>
  );
};

const HeroPage: NextPage = () => {
  const { t, i18n } = useTranslation(['index']);
  const { language } = i18n;
  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);
  return (
    <>
      <div className="hero-page" data-aos="fade-in">
        <div className="bannar">
          <h1
            className="slogan"
            style={{ fontSize: language === 'en' ? 36 : 56 }}
          >
            {t('slogan')}
          </h1>
          <div className="description">{t('description')}</div>
          <button
            className="primary-button start-button"
            onClick={() => {
              if (process.browser)
                window.open('https://qiwei.juzibot.com/user/login');
            }}
          >
            {t('start-free')}
          </button>
        </div>
      </div>

      <div className="card-bannar">
        <FeatureCard
          iconUrl="/images/icons/cloud.png"
          title={t('card-1-title')}
          subTitle={t('card-1-subtitle')}
          iconWidth="93"
          iconHeight="77"
        />
        <FeatureCard
          iconUrl="/images/icons/solution.png"
          title={t('card-2-title')}
          subTitle={t('card-2-subtitle')}
          iconWidth="92"
          iconHeight="85"
        />
        <FeatureCard
          iconUrl="/images/icons/crown.png"
          title={t('card-3-title')}
          subTitle={t('card-3-subtitle')}
          iconWidth="92"
          iconHeight="73"
        />
      </div>
    </>
  );
};

export default HeroPage;
