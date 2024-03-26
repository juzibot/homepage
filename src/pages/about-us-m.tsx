import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const ContactUsM: NextPage = () => {
  const { i18n } = useTranslation('about-us');
  const isZh = i18n.language === 'zh';
  return (
    <div className='m-auto'>
      {isZh ? (
          <img className='w-full' alt='' src='/_images/image-page/about-us-20220207-m.png' />
        ): 
          <img className='w-full' alt='' src='/_images/image-page/about-us-20220207-m-en.png' />
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
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default ContactUsM;
