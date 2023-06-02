/* eslint-disable no-unreachable */
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CustomerAcquisitionPage: NextPage = () => {
  return (
    <div className='m-auto pt-[60px]'>
      <img className='w-full' alt='' src="/_images/image-page/internet-0.svg" />
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
