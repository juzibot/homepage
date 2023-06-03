/* eslint-disable no-unreachable */
import { ContactUsPureModalWithButton } from '@src/components/ContactUsPureModal';
import ContactUsSimpleModal from '@src/components/ContactUsSimpleModal';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';

const CustomerAcquisitionPage: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='m-auto pt-[60px] relative'>
      <ContactUsSimpleModal
        open={showModal}
        onCancel={() => setShowModal(false)}
      />
      <div
        onClick={() => setShowModal(true)}
        className='w-[calc(17%)] h-[calc(7%)] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[40%] left-[50%] cursor-pointer'
        style={{ transform: 'translate(-50%)' }}
      ></div>
      <img className='w-full' alt='' src='/_images/image-page/internet-0.png' />
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
