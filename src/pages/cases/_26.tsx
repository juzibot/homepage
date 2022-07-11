import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某家庭维修品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-26"
        themeColor="#0555FF"
        title="某家庭维修品牌"
        brief="该平台是国内提供家庭维修服务的一线平台。它的私域主要是将用户做沉淀，提供客诉售后服务的同时，通过优惠券引导用户复购。"
        datas={[
          {
            title: '38W',
            subtitle: '人均服务客户数',
          },
          {
            title: '6300+',
            subtitle: '每天处理问题数',
          },
          {
            title: '2min',
            subtitle: '平均应答时间',
          },
          {
            title: '85%+',
            subtitle: '客户 30 日留存率',
          },
        ]}
        steps={[
          '用户在 APP 或小程序下单后，若预约的维修师傅未能完成维修，会被指引添加企业微信客服申诉',
          '添加好友后，会收到多条欢迎语，告知专属服务范围，以及一条小程序的优惠活动',
          '用户告知申诉需求 & 订单手机号，可在 2 分钟以内被回复，随后根据订单情况给到详细的解决方案',
          '用户会不定期收到客服发来的直播邀请、优惠活动消息，咨询相关信息同样会快速得到回复',
        ]}
        features={[
          {
            icon: '26-1.svg',
            title: '多账号消息聚合',
            subtitle:
              '将原来需要大量人力管理的账号聚合在一个页面，使得1人可以管理数十个账号的消息快速应答',
          },
          {
            icon: '26-2.svg',
            title: '自动丰富用户画像',
            subtitle:
              '不再需要手工根据客户发送的消息标记用户标签，系统根据用户消息中包含的关键词或互动频率自动打上标签，自动化完成用户画像的构建',
          },
          {
            icon: '26-3.svg',
            title: '高频触达',
            subtitle:
              'RPA 助力提升应答效率，每天进行 3 次以上社群群发和私信群发，保证营销信息的高频触达',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title:
              '8人完成180个账号上300万用户的客诉应答，每天处理6300余客户的售后问题，平均应答时间2分钟以内，极大提高了客诉处理效率',
          },
          {
            icon: '06',
            title: '专业和高效的服务体验，使得客户30日留存85%以上',
          },
        ]}
      />
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
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default CasePage;
