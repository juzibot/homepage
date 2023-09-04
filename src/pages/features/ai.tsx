/* eslint-disable no-unreachable */
import { isBrowserChrome } from '@src/utils/isBrowserChrome';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import Seo from '@src/components/common/Seo';
import { useMediaQuery } from '@react-hookz/web';
import FooterBarWithButton from '@src/components/FooterBarWithButton';

const CustomerAcquisitionPage: NextPage = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const [, toggleChrome] = useState(true);
  useEffect(() => {
    toggleChrome(isBrowserChrome());
  }, []);
  if (isSmallDevice) {
    return (
      <div className='m-auto'>
        <Seo page="features-ai" />
        <img className='w-full' alt='' src='/_images/image-page/ai-00.png' />
        <div className="wrapper appeal-bar">
          <div className="container !w-[100%]">
            <FooterBarWithButton
              contactUsOption={{ type: 'ai', qrCode: 'sf-02' }}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='m-auto'>
      <Seo page="features-ai" />
      <img className='w-full mt-[72px]' alt='' src='/_images/image-page/ai-0.jpg' />
      <div className="wrapper appeal-bar">
        <div className="container">
          <FooterBarWithButton
            contactUsOption={{ type: 'ai', qrCode: 'sf-02' }}
          />
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
        'features',
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default CustomerAcquisitionPage;
