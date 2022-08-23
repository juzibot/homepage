import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某国货头部化妆品品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-7"
        themeColor="#FF6058"
        title="某国货头部化妆品品牌"
        brief="该品牌是线上国产化妆品的头部品牌，私域主要是将各平台已购用户通过电话回访的方式引导添加企微并邀请进群，通过高频的促销活动推送刺激用户在小程序商城中复购"
        datas={[
          {
            title: '2 倍',
            subtitle: '提升人效',
          },
          {
            title: '2,000',
            subtitle: '人均服务客户数',
          },
          {
            title: '90%',
            subtitle: '提升消息回复率',
          },
        ]}
        steps={[
          '用户在抖音直播间、淘宝、京东等商城购买产品后，接到来自某品牌的电话，告知添加美肤顾问好友，可以领取免费面膜，享受美肤专属服务等，同意添加挂机后微信收到一条服务消息，点开后可以扫码添加福美肤顾问',
          '添加好友后，用户立刻收到 0 元换面膜的流程说明以及申请入口，领取后的面膜需要随下次下单赠送，并被告知可以入群获得更多隐藏福利，附带入群链接',
          '用户进群后，每天会在社群中收到 2 - 3 波产品促销信息，类型多为买赠、限时优惠以及积分赠送活动，刺激用户进入小程序下单，还会有不定时的直播通知在社群和私信中同步送达',
          '购买商品或参与活动得到的积分可以用于在小程序购买时抵扣和申领试用',
          '在想获得商品推荐、了解售后问题时，用户都能通过私信美肤顾问得到及时的回复，且回答内容非常专业详尽',
        ]}
        features={[
          {
            icon: '7-1.svg',
            title: '多账号消息聚合',
            subtitle:
              '将原来需要大量人力管理的账号聚合在一个页面，使得 1 人可以管理数十个账号的消息',
          },
          {
            icon: '7-2.svg',
            title: '嵌入会话页面的话术库',
            subtitle:
              '原来需要重复编辑且无法标准化应答的内容，形成统一的回复规范一键发送给用户，提升应答专业度和效率',
          },
          {
            icon: '7-3.svg',
            title: '自动化邀请入群',
            subtitle:
              ' RPA 助力提升运营效率，现在可以在添加好友后立刻自动发送入群邀请，极大节省人力、提高入群率',
          },
          {
            icon: '7-4.svg',
            title: '高效的会员引流',
            subtitle:
              '把原来沉默无法双向互动的手机号线索，通过 AI 外呼 + API 批量自动添加成为企业微信好友，零人工解决私域冷启动流量池搭建的问题',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title: '句子支持下，该品牌实现 2 人管理十余个账号下数万个用户的消息，回复率达到 90%，极大地提高了人效比',
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
