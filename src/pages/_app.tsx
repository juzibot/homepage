import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '@styles/global.scss';
import HeaderBar from '@src/components/HeaderBar';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Footer from '@src/components/Footer';
import { logHireInfo } from '@src/utils/hire';
import { useEffect } from 'react';

const JuziApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    logHireInfo();
  }, []);
  return (
    <>
      <HeaderBar />
      <div className="app">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', ['common', 'homepage'])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default appWithTranslation(JuziApp);
