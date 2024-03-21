import { IFeatureCardProps } from '@src/interfaces';
import Aos from 'aos';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import LogosWallNew from '../LogosWallNew';
import styles from './index.module.scss';
import { ContactUsPureModalWithButton } from '@src/components/ContactUsPureModal';

export const FeatureCard: NextPage<IFeatureCardProps> = ({
  title,
  subTitle,
  iconUrl,
  iconWidth,
  iconHeight,
  className,
}) => {
  return (
    <div className={`card ${className || ''}`}>
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
  const { t, i18n } = useTranslation(['homepage']);
  const isZh = i18n.language === 'zh';
  const { language } = i18n;
  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);
  return (
    <>
      { isZh ? (
        <div className="hero-page-new-bg">
        <div className="hero-page-new" data-aos="fade-in">
          <div className="bannar">
            <h1
              className="slogan max-w-[566px]"
              style={{ fontSize: language === 'en' ? 36 : 46 }}
            >
              {t('government-title')}
            </h1>
            <div className="description">{t('government-body')}</div>
            <ContactUsPureModalWithButton>
              <button className="white-button-pure start-button bg-white text-red !shadow-none">
                {t('start-free')}
              </button>
            </ContactUsPureModalWithButton>
          </div>
        </div>
      </div>
      ): // English
      <div className="hero-page-new-bg" style={{ background: "linear-gradient(#FE9900, #FE9900)" }}>
      <div className="hero-page-new" data-aos="fade-in">
        <div className="bannar">
          <h1
            className="slogan max-w-[566px]"
            style={{ fontSize: 55, fontFamily: '"Gill Sans", sans-serif' }}
          >
            {t('government-title')}
          </h1>
          <div className="description">{t('government-body')}</div>
          <ContactUsPureModalWithButton>
            <button className="white-button-pure start-button bg-white text-red !shadow-none">
              {t('start-free')}
            </button>
          </ContactUsPureModalWithButton>
        </div>
      </div>
    </div>
      }

      <div className="w-[1200px] m-auto">
        <div className="logos-wall">
          <div className="container">
            <h1 className="title">{t('logos-wall-title')}</h1> 
            <LogosWallNew />
          </div>
        </div>
      </div>

      <div className="w-[1200px] m-auto">
        <div className="card-bannar">
          <FeatureCard
            className={styles.card}
            iconUrl="https://cdn-official-website.juzibot.com/images/icons/cloud.png"
            title={t('feature-card-1-title')}
            subTitle={t('feature-card-1-subtitle')}
            iconWidth="93"
            iconHeight="77"
          />
          <FeatureCard
            className={styles.card}
            iconUrl="https://cdn-official-website.juzibot.com/images/icons/solution.png"
            title={t('feature-card-2-title')}
            subTitle={t('feature-card-2-subtitle')}
            iconWidth="92"
            iconHeight="85"
          />
          <FeatureCard
            className={styles.card}
            iconUrl="https://cdn-official-website.juzibot.com/images/icons/security.png"
            title={t('feature-card-3-title')}
            subTitle={t('feature-card-3-subtitle')}
            iconWidth="92"
            iconHeight="73"
          />
        </div>
      </div>
    </>
  );
};

export default HeroPage;
