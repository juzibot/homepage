/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { useMediaQuery } from '@react-hookz/web';
import Seo from '@src/components/common/Seo';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MobileIndexPage from './index-mobile';
import { useShowModal } from '@src/utils/showModal';
import FooterBarWithButton from '@src/components/FooterBarWithButton';

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
  const showModal = useShowModal();

  if (isSmallDevice) {
    return <MobileIndexPage />;
  }

  return (
    <div className={i18n.language}>
      <Seo page="homepage" />
      <div className='m-auto pt-[60px]'>
        <div className='relative'>
          <img className='w-full' alt='' src="_images/image-page/index-20231207.png" />
          <a
            // href="https://insight.juzibot.com/"
            onClick={() =>{ showModal({}) }}
            target="_blank"
            rel="noreferrer"
            className="w-[calc(11%)] h-[calc(2.25%)] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[12.7%] left-[50%] cursor-pointer"
            style={{ transform: 'translate(-50%)' }}
          >
          </a>
        </div>
        <div className="wrapper appeal-bar">
          <div className="container">
            <FooterBarWithButton />
          </div>
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
