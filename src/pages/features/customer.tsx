/* eslint-disable no-unreachable */
import { useMediaQuery } from '@react-hookz/web';
import ContactUsModal from '@src/components/ContactUsModal';
import FooterBarWithButton from '@src/components/FooterBarWithButton';
import Seo from '@src/components/common/Seo';
import { useShowModal } from '@src/utils/showModal';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroPageNew from '@src/components/index/HeroPageNew';
import SolutionPageNew from '@src/components/index/SolutionPageNew';

const CustomerAcquisitionPage: NextPage = () => {
  const { i18n } = useTranslation('common');
  const isZh = i18n.language === 'zh';
  const [showModal, setShowModal] = useState(false);
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const showPcModal = useShowModal();
  if (isSmallDevice) {
    return (
      <div className='m-auto pt-[60px] relative'>
        <Seo page="features-customer" />
        { isZh ? (
          <>
          <img className='w-full' alt='' src='/_images/image-page/customer-0.png' /><div
            onClick={() => setShowModal(true)}
            className='w-[calc(42%)] h-[calc(5%)] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[25.7%] left-[49%] cursor-pointer'
            style={{ transform: 'translate(-50%)' }}
          ></div><div className="wrapper appeal-bar">
              <div className="container !w-[100%]">
                <FooterBarWithButton
                  contactUsOption={{ qrCode: 'sf-04' }} />
              </div>
            </div><ContactUsModal
              qrCode='sf-04'
              open={showModal}
              onCancel={() => setShowModal(false)} />
          </>
        ): // English mobile
          <>
          <img className='w-full' alt='' src='/_images/image-page/customer-0-en.png' /><div
          ></div><div className="wrapper appeal-bar">
              <div className="container !w-[100%]">
                <FooterBarWithButton
                  contactUsOption={{ qrCode: 'sf-04' }} />
              </div>
            </div><ContactUsModal
              qrCode='sf-04'
              open={showModal}
              onCancel={() => setShowModal(false)} />
          </>
        } 
      </div>
    );
  }

  return (
    <div className='m-auto relative'>
      <Seo page="features-customer" />
      { isZh ? (
        <>
        <div
          onClick={() => showPcModal({ qrCode: 'sf-04' })}
          className='w-[calc(15%)] h-[calc(8.25%)] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[28.7%] left-[50%] cursor-pointer'
          style={{ transform: 'translate(-50%)' }}
        ></div><img className='w-full' alt='' src='/_images/image-page/customer-0.svg' /><div className="wrapper appeal-bar">
            <div className="container">
              <FooterBarWithButton
                contactUsOption={{ qrCode: 'sf-04' }} />
            </div>
          </div>
        </>
      ): // English
        <>
        <div
          onClick={() => showPcModal({ qrCode: 'sf-04' })}
          className='w-[calc(15%)] h-[calc(8.25%)] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[28.7%] left-[50%] cursor-pointer'
          style={{ transform: 'translate(-50%)' }}
        ></div>          
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

          <div className="wrapper appeal-bar">
            <div className="container">
              <FooterBarWithButton
                contactUsOption={{ qrCode: 'sf-04' }} />
            </div>
          </div>
        </>
      }
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
