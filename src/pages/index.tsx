import AppealBar from '@src/components/index/AppealBar';
import CompanyDisplayBar from '@src/components/index/CompanyDisplayBar/index';
import FeatureSwiper from '@src/components/index/FeatureSwiper';
import HeroPage from '@src/components/index/HeroPage';
import SolutionPage from '@src/components/index/SolutionPage';
import { ITranslationPageProps } from '@src/interfaces';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const Home: NextPage<ITranslationPageProps> = ({ locale }) => {
  const { t } = useTranslation('index');
  return (
    <>
      <div className="wrapper index-page">
        <div className="container">
          <HeroPage t={t} locale={locale} />
        </div>
      </div>

      <div className="wrapper feature-page">
        <div className="mask-wrapper">
          <div className="mask" />
          <div className="mask-reverse" />
        </div>
        <div className="container">
          <FeatureSwiper />
        </div>
      </div>

      <div className="wrapper solution-page">
        <div className="container">
          <SolutionPage t={t} locale={locale} />
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
      ...(await serverSideTranslations(locale || 'zh', ['common', 'index'])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default Home;
