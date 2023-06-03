/* eslint-disable no-unreachable */
import { ContactUsPureModalWithButton } from '@src/components/ContactUsPureModal';
import ContactUsSimpleModal from '@src/components/ContactUsSimpleModal';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';

const CustomerAcquisitionPage: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='m-auto'>
      <ContactUsSimpleModal
        open={showModal}
        onCancel={() => setShowModal(false)}
      />
      <div
        onClick={() => setShowModal(true)}
        className='w-[352px] h-[106px] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[315px] left-[50%] cursor-pointer'
        style={{ transform: 'translate(-50%)' }}
      ></div>
      <img className='w-full' alt='' src='/_images/image-page/customer-0.svg' />
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
