import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '@styles/global.scss';
import HeaderBar from '@src/components/HeaderBar';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import Footer from '@src/components/Footer';

function JuziApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common')
  return (
    <>
      <HeaderBar t={t} locale={pageProps.locale} />
      <div className="app">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', ['common', 'index'])),
      locale: locale?.toLowerCase() ?? 'zh'
    },
  };
};

export default appWithTranslation(JuziApp);
