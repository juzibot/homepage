import FeatureBar from '@src/components/features/FeatureBar';
import AppealBar from '@src/components/index/AppealBar';
import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

const AboutUsHeroPage: NextPage = () => {
  const { t } = useTranslation(['common', 'about-us']);
  return (
    <div className="first-page">
      <NextSeo
        title={`${t('about-us:title')} - ${t('title')}`}
      />
      <div className="left-side">
        <p>
          用<strong>新的营销方式</strong>
        </p>
        <p>打动你的万千客户</p>
      </div>

      <div className="right-side">
        <p>
          北京句子科技有限公司成立于 2018 年，集成国内外主流 IM
          平台，为企业与开发者提供基于即时通信软件的规模化运营服务，是国内领先的对话式营销云。句子互动团队在
          RPA、智能对话与私域运营服务领域不断创新，每日提升 100
          万人次的私域体验。
        </p>
        <p>
          团队于 2018、19 年先后完成种子轮与天使轮融资，并于 2020
          年累计完成了来自 Plug and Play、PreAngel、 Y
          Combinator、TSVC、阿尔法公社、真成投资等知名机构数千万人民币融资，是硅谷著名孵化器
          Y Combinator 国内首批入围团队，也是百度 AI
          加速器首期成员。目前团队已经接近百人规模。
        </p>
      </div>
    </div>
  );
};

const AboutUsPage: NextPage = () => {
  return (
    <>
      <div className="wrapper about-us-page">
        <div className="container">
          <AboutUsHeroPage />
        </div>
      </div>

      <div className="wrapper feature-bar">
        <div className="container">
          <FeatureBar />
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
      ...(await serverSideTranslations(locale || 'zh', ['common', 'about-us', 'homepage'])),
      locale: locale?.toLowerCase() ?? 'zh'
    }
  };
};

export default AboutUsPage;
