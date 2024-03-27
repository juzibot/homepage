import { IFeatureCardProps } from '@src/interfaces';
import Aos from 'aos';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

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
  const { t } = useTranslation(['homepage']);
  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);
  return (
    <>
      <div className="w-[1200px] mt-[50px]">
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
