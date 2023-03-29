import type { AppProps } from 'next/app';
import { appWithTranslation, useTranslation } from 'next-i18next';
import 'antd/dist/antd.css';
import '@styles/global.scss';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { logHireInfo } from '@src/utils/hire';
import { useEffect } from 'react';
import Script from 'next/script';
import { ContactButtonNew } from '@src/components/common/ContactButtonNew';
import { useMediaQuery } from '@react-hookz/web';
import HeaderBarMobile from '@src/components/HeaderBarMobile';
import FooterMobile from '@src/components/FooterMobile';
import HeaderBarNew from '@src/components/HeaderBarNew';
import FooterNew from '@src/components/FooterNew';
import { useRouter } from 'next/router';
import HeaderBar from '@src/components/HeaderBar';
import { Footer } from 'antd/lib/layout/layout';
import { ContactButton } from '@src/components/common/Contact';
// import { juziAnalysis } from '@src/utils/analysis';


const JuziApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    logHireInfo();
    // if (process.browser) {
    //   juziAnalysis();
    // }
  }, []);

  const { i18n } = useTranslation('common');
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const { pathname } = useRouter();
  const isNewIndex = ['/', 'index', '/zh', '/zh/index'].includes(pathname) && i18n.language === 'zh';

  if (pathname === '/_version') {
    return <Component {...pageProps} />
  }

  const PcHeader = isNewIndex ? <HeaderBarNew /> : <HeaderBar />;
  const PcFooter = isNewIndex ? <FooterNew /> : <Footer />;
  const PcContactButton = isNewIndex ? <ContactButtonNew /> : <ContactButton />;

  return (
    <>
      {isSmallDevice ? <HeaderBarMobile /> : PcHeader }
      <div className={`app ${i18n.language}`}>
        <Component {...pageProps} />
      </div>
      {isSmallDevice ? <FooterMobile /> : PcFooter}
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
      {!isSmallDevice && PcContactButton}
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
