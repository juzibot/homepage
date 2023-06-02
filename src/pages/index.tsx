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
import { ContactUsPureModalWithButton } from '@src/components/ContactUsPureModal';

const Home: NextPage = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const [, setWidth] = useState(0);
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
    return <MobileIndexPage />
  }

  return (
    <div className={i18n.language}>
      <Seo page="homepage" />
      <div className='relative'>
        <img className='w-full' alt='' src="_images/image-page/1-1.png" />
        <ContactUsPureModalWithButton>
          <div className="w-[152px] h-[56px] bg-[#0555FF] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[69%] left-[11%] cursor-pointer">
            免费使用
          </div>
        </ContactUsPureModalWithButton>
      </div>
      <img className='w-full' alt='' src="_images/image-page/1-2.png" />
      <img className='w-full' alt='' src="_images/image-page/1-3.png" />
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
