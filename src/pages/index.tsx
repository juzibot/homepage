import Seo from '@src/components/common/Seo';
import AppealBar from '@src/components/index/AppealBar';
import CompanyDisplayBar from '@src/components/index/CompanyDisplayBar/index';
import FeatureSwiper from '@src/components/index/FeatureSwiper';
import HeroPage from '@src/components/index/HeroPage';
import LogosWall from '@src/components/index/LogosWall';
import SolutionPage from '@src/components/index/SolutionPage';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
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
  return (
    <>
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
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', ['common', 'homepage', 'seos'])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default Home;
