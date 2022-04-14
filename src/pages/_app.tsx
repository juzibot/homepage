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
      <Script id="baidu-analytics">
        {`
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?40dc953f36853e5ee70e7aecd6dee2e5";
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
