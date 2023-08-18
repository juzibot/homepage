/* eslint-disable no-unreachable */
// import { useMediaQuery } from '@react-hookz/web';
import { useMediaQuery } from '@react-hookz/web';
import Seo from '@src/components/common/Seo';
import AppealBarNew from '@src/components/index/AppealBarNew';
import HeroPageNew from '@src/components/index/HeroPageNew';
import SolutionPageNew from '@src/components/index/SolutionPageNew';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import MobileIndexPage from '../index-mobile';

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

  // if (isSmallDevice) {
  //   return <MobileIndexPage />
  // }
  if (isSmallDevice) {
    return (
      <div className='m-auto relative'>
        <Seo page="features-government" />
        <img className='w-full' alt='' src='/_images/image-page/government-0.png' />
        <div className="wrapper appeal-bar-new">
          <div className="container !w-[100%]">
            <AppealBarNew isRed />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={i18n.language}>
      <Seo page="features-government" />
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
          <AppealBarNew isRed />
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
