import { useMediaQuery } from '@react-hookz/web';
import Seo from '@src/components/common/Seo';
import AppealBar from '@src/components/index/AppealBar';
import CompanyDisplayBar from '@src/components/index/CompanyDisplayBar/index';
import FeatureSwiper from '@src/components/index/FeatureSwiper';
import HeroPage from '@src/components/index/HeroPage';
import SolutionPage from '@src/components/index/SolutionPage';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MobileIndexPage from './index-mobile';

const Home: NextPage = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const [width, setWidth] = useState(0);
  const SHOW_MASK_WINDOW_WIDTH = 1200;
  useEffect(() => {
    if (process.browser) {
      window.addEventListener('resize', () =>
        setWidth(document.body.clientWidth)
      );
      setWidth(document.body.clientWidth);
    }
  }, []);
  const { i18n } = useTranslation('common');

  if (isSmallDevice) {
    return <MobileIndexPage />
  }
  return (
    <div className={i18n.language}>
      <Seo page="homepage" />
      <div className="wrapper index-page">
        <div className="container">
          <HeroPage />
        </div>
      </div>

      <div className="wrapper feature-page">
        <div className="container">
          <div
            className="mask-wrapper"
            style={{
              visibility: width > SHOW_MASK_WINDOW_WIDTH ? 'visible' : 'hidden',
            }}
          >
            <div className="mask" />
            <div className="mask-reverse" />
          </div>
          <FeatureSwiper />
        </div>
      </div>

      <div className="wrapper solution-page">
        <div className="container">
          <SolutionPage />
        </div>
      </div>

      <div className="wrapper company-display">
        <div className="container">
          <CompanyDisplayBar />
        </div>
      </div>

      <div className="wrapper appeal-bar">
        <div className="container">
          <AppealBar />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', [
        'common',
        'homepage',
        'seos',
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default Home;
