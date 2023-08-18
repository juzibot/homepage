/* eslint-disable no-unreachable */
// import { ContactUsPureModalWithButton } from '@src/components/ContactUsPureModal';
import { useMediaQuery } from '@react-hookz/web';
import ContactUsSimpleModal from '@src/components/ContactUsSimpleModal';
import Seo from '@src/components/common/Seo';
import AppealBarNew from '@src/components/index/AppealBarNew';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';

const CustomerAcquisitionPage: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  if (isSmallDevice) {
    return (
      <div className='m-auto pt-[60px] relative'>
        <Seo page="features-customer" />
        <img className='w-full' alt='' src='/_images/image-page/customer-0.png' />
        <div
          onClick={() => setShowModal(true)}
          className='w-[calc(42%)] h-[calc(5%)] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[25.7%] left-[49%] cursor-pointer'
          style={{ transform: 'translate(-50%)' }}
        ></div>
        <div className="wrapper appeal-bar">
          <div className="container !w-[100%]">
            <AppealBarNew />
          </div>
        </div>
        <ContactUsSimpleModal
          open={showModal}
          onCancel={() => setShowModal(false)}
        />
      </div>
    );
  }

  return (
    <div className='m-auto relative'>
      <Seo page="features-customer" />
      <ContactUsSimpleModal
        open={showModal}
        onCancel={() => setShowModal(false)}
      />
      <div
        onClick={() => setShowModal(true)}
        className='w-[calc(15%)] h-[calc(8.25%)] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[28.7%] left-[50%] cursor-pointer'
        style={{ transform: 'translate(-50%)' }}
      ></div>
      <img className='w-full' alt='' src='/_images/image-page/customer-0.svg' />
      <div className="wrapper appeal-bar">
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
        'features',
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default CustomerAcquisitionPage;
