/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { useMediaQuery } from '@react-hookz/web';
import Seo from '@src/components/common/Seo';
import AppealBarNew from '@src/components/index/AppealBarNew';
import HeroPageNew from '@src/components/index/HeroPageNew';
import SolutionPageNew from '@src/components/index/SolutionPageNew';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MobileIndexPage from './index-mobile';
import FooterBarButton from '@src/components/FooterBarButton';
import ContactUsSimpleModal from '@src/components/ContactUsSimpleModal';

const Home: NextPage = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const [, setWidth] = useState(0);
  const [showContactUs, setShowContactUs] = useState(false);
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
    return <MobileIndexPage />;
  }

  return (
    <div className={i18n.language}>
      <Seo page="homepage" />
      <div className='m-auto pt-[60px]'>
        <div className='relative'>
          <img className='w-full' alt='' src="_images/image-page/index-00.jpg" />
          {/* <ContactUsPureModalWithButton> */}
          <a
            // href="https://insight.juzibot.com/"
            onClick={() => setShowContactUs(true)}
            target="_blank"
            rel="noreferrer"
            className="w-[calc(11%)] h-[calc(2.25%)] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[12.7%] left-[50%] cursor-pointer"
            style={{ transform: 'translate(-50%)' }}
          >
          </a>
          <ContactUsSimpleModal
            open={showContactUs}
            onCancel={() => setShowContactUs(false)}
            imageNode={<img src="_images/contact-us-qrcode/homepage.png" alt="" className="w-full h-full" />}
          />
          {/* </ContactUsPureModalWithButton> */}
        </div>
        <div className="wrapper appeal-bar">
          <div className="container">
            <FooterBarButton url="https://insight.juzibot.com/" imageNode={<img src="_images/contact-us-qrcode/homepage.png" alt="" className="w-full h-full" />} useModal />
          </div>
        </div>
        {/* <img className='w-full' alt='' src="_images/image-page/index-2.png" /> */}
        {/* <img className='w-full' alt='' src="_images/image-page/index-3.png" /> */}
      </div>
    </div>
  );
  return (
    <div className={i18n.language}>
      <Seo page="homepage" />
      <div className="wrapper index-page !p-0 bg-[url('https://cdn-official-website.juzibot.com/images/background-red.svg')]">
        <div className="container !w-full">
          <HeroPageNew />
        </div>
      </div>

      <div className="wrapper solution-page">
        <div className="container">
          <SolutionPageNew />
        </div>
      </div>

      <div className="wrapper appeal-bar-new">
        <div className="container">
          <AppealBarNew />
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
