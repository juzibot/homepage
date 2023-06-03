import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ContactUsM: NextPage = () => {
  return (
    <div className='m-auto'>
      <img className='w-full' alt='' src='/_images/image-page/about-us-00.jpg' />
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

export default ContactUsM;
