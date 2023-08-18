/* eslint-disable no-unreachable */
import { isBrowserChrome } from '@src/utils/isBrowserChrome';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { FeatureHeroPage } from '@src/components/features/FeatureHeroPage';
import { FeatureDescription } from '@src/components/features/FeatureDescription';
import { FeatureAppealBar } from '@src/components/features/FeatureAppealBar';
import AppealBar from '@src/components/index/AppealBar';
import FeatureBar from '@src/components/features/FeatureBar';
import Seo from '@src/components/common/Seo';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@react-hookz/web';
import ContactUsSimpleModal from '@src/components/ContactUsSimpleModal';
import AppealBarNew from '@src/components/index/AppealBarNew';

const CustomerAcquisitionPage: NextPage = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const [isChrome, toggleChrome] = useState(true);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    toggleChrome(isBrowserChrome());
  }, []);
  const { t } = useTranslation('features', {
    keyPrefix: 'customer-acquisition',
  });
  if (isSmallDevice) {
    return (
      <div className='m-auto pt-[50px] relative'>
        <Seo page="features-case" />
        <img className='w-full' alt='' src="/_images/image-page/case-00.png" />
        <div
          onClick={() => setShowModal(true)}
          className='w-[152px] h-[56px] rounded-[100px] flex justify-center items-center text-[18px] font-semibold text-white absolute top-[7%] left-[50%] cursor-pointer'
          style={{ transform: 'translate(-50%)', boxShadow: ' 0px 35px 50px -15px rgba(52, 128, 239, 0.3)' }}
        >
        </div>
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
    <div className='m-auto pt-[50px] relative'>
      <Seo page="features-case" />
      <ContactUsSimpleModal
        open={showModal}
        onCancel={() => setShowModal(false)}
      />
      <div
        onClick={() => setShowModal(true)}
        className='w-[152px] bg-[#0555FF] h-[56px] rounded-[100px] flex justify-center items-center text-[18px] font-semibold text-white absolute top-[14%] left-[50%] cursor-pointer'
        style={{ transform: 'translate(-50%)', boxShadow: ' 0px 35px 50px -15px rgba(52, 128, 239, 0.3)' }}
      >
        预约咨询
      </div>
      <img className='w-full' alt='' src="/_images/image-page/case-0.png" />
      <div className="wrapper appeal-bar">
        <div className="container">
          <AppealBarNew />
        </div>
      </div>
      {/* <img className='w-full' alt='' src="/_images/image-page/ai-2.png" />
      <img className='w-full' alt='' src="/_images/image-page/ai-3.png" />
      <img className='w-full' alt='' src="/_images/image-page/ai-4.png" />
      <img className='w-full' alt='' src="/_images/image-page/ai-5.png" />
      <img className='w-full' alt='' src="/_images/image-page/ai-5.png" /> */}
    </div>
  );
  return (
    <>
      <Seo page="feature-customer-acquisition" />
      <div className="wrapper feature customer-acquisition">
        <div className={`bg ${!isChrome && 'moz'}`}></div>
        <div
          className="container"
          style={{
            backgroundImage: `url('https://cdn-official-website.juzibot.com/images/feat-01.png')`,
          }}
        >
          <FeatureHeroPage
            title={t('title')}
            brief={t('subtitle')}
            docsUrl="https://k0auuqcihb.feishu.cn/docs/doccnJMlpBUC1NAHW7ujCXVxaUB#tlJtFV"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-08.png',
                title: '￥5',
                subtitle: t('table-title-1'),
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-09.png',
                title: '99%',
                subtitle: t('table-title-2'),
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-10.png',
                title: '40%',
                subtitle: t('table-title-3'),
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-description">
        <div className="container">
          <FeatureDescription
            firstTitle={t('description-title')}
            firstSubtitle={t('discription-subtitle')}
            secondTitle={t('discription-second-title')}
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-04.svg',
                title: t('data-title-1'),
                subtitle: t('data-subtitle-1'),
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-05.svg',
                title: t('data-title-2'),
                subtitle: t('data-subtitle-2'),
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-06.svg',
                title: t('data-title-3'),
                subtitle: t('data-subtitle-3'),
              },
            ]}
            photo="https://cdn-official-website.juzibot.com/images/icons/features/ca-07.png"
            photoPosition="right"
          />
        </div>
      </div>

      <div className="wrapper feature-appeal">
        <div className="container">
          <FeatureAppealBar
            title={t('appeal-title')}
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-01.png',
                title: t('appeal-title-1'),
                subtitle: t('appeal-subtitle-1'),
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-02.png',
                title: t('appeal-title-2'),
                subtitle: t('appeal-subtitle-2'),
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-03.png',
                title: t('appeal-title-3'),
                subtitle: t('appeal-subtitle-3'),
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-bar">
        <div className="container">
          <h1>{t('more-features')}</h1>
          <FeatureBar hideTitle="规模获客" />
        </div>
      </div>

      <div className="wrapper appeal-bar">
        <div className="container">
          <AppealBar />
        </div>
      </div>
    </>
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
