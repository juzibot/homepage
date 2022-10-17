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
import { ContactButton } from '@src/components/common/Contact';
import { useMediaQuery } from '@react-hookz/web';
import HeaderBarMobile from '@src/components/HeaderBarMobile';
import FooterMobile from '@src/components/FooterMobile';
// import { juziAnalysis } from '@src/utils/analysis';
import 'antd/dist/antd.css';


const JuziApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    logHireInfo();
    // if (process.browser) {
    //   juziAnalysis();
    // }
  }, []);

  const { i18n } = useTranslation('common');
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  const isMediumDevice = useMediaQuery('only screen and (min-width : 769px) and (max-width : 992px)');
  const isLargeDevice = useMediaQuery('only screen and (min-width : 993px) and (max-width : 1200px)');
  const isExtraLargeDevice = useMediaQuery('only screen and (min-width : 1201px)');

  console.log('=isSmallDevice', isSmallDevice, isMediumDevice, isLargeDevice, isExtraLargeDevice);

  console.log('[_app] render isSmallDevice', isSmallDevice);
  if (isSmallDevice) {
    return (
      <>
        <HeaderBarMobile />
        <div className={`app ${i18n.language}`}>
          <Component {...pageProps} />
        </div>
        <FooterMobile />
        <style global jsx>{`
          #__next {
            min-width: auto;
          }
        `}</style>
      </>
    )
  }

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
      <ContactButton />
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
