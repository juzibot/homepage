import type { AppProps } from 'next/app';
import { appWithTranslation, useTranslation } from 'next-i18next';
import '@styles/global.scss';
import HeaderBar from '@src/components/HeaderBar';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Footer from '@src/components/Footer';
import { logHireInfo } from '@src/utils/hire';
import { useEffect } from 'react';
import Script from 'next/script';

const JuziApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    logHireInfo();
  }, []);

  const { i18n } = useTranslation('common');

  return (
    <>
      <HeaderBar />
      <div className={`app ${i18n.language}`}>
        <Component {...pageProps} />
      </div>
      <Footer />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-855RJWL7LP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-855RJWL7LP');
        `}
      </Script>
      <Script id="baidu-analytics">
        {`
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?45faeee2378d9d538a057946597526ca";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `}
      </Script>
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
