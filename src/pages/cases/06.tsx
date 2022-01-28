import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某国际一线美妆大品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-6"
        themeColor="#BB3DFF"
        title="某国际一线美妆大品牌"
        brief="该品牌为国际一线美妆品牌，私域主要通过 AI 外呼把 400 万手机号迁移到企业微信做产品营销和复购"
        datas={[
          {
            title: '40%',
            subtitle: '自动化激活会员率',
          },
          {
            title: '10 倍',
            subtitle: '提升信息触达效率',
          },
          {
            title: '86W',
            subtitle: '自动标签化用户',
          },
        ]}
        steps={[
          '近期消费用户在包裹卡、公众号上看到领取赠品小样，从而扫码添加到各大区导购，往期消费的会员用户，则会接到回访电话，告知有限量活动，被引导添加导购企微',
          '添加企微后，用户会马上收到多条信息，包括包裹卡上承诺的抽奖链接、入群活动以及入群链接',
          '群内除每日的优惠活动外，还会通知私信导购领取限量的优惠券，引导用户和导购产生私信。在私信中，导购除介绍活动外，会利用护肤知识和用户产生交互，从而针对性的向用户推荐某类产品',
          '入群后，用户在群内每天会看到 7 - 10 次的群内专属优惠推送和样品赠送活动，刺激用户进入小程序购买商品',
        ]}
        features={[
          {
            icon: '6-1.svg',
            title: '高效的会员引流',
            subtitle:
              '在句子的 API 加好友的助力下，回访电话从人工全部变成了 AI 外呼，极大的降低激活沉默会员用户的成本',
          },
          {
            icon: '6-2.svg',
            title: '无限条数欢迎语',
            subtitle:
              '在企微原有 1 条好友欢迎语的基础上，可以再发送无数条欢迎信息，并且包含入群链接，引导用户直接进入社群',
          },
          {
            icon: '6-3.svg',
            title: '无限制群发',
            subtitle:
              '突破企微原有的每天1条的群发，进行每天 10 次，近 30 条的营销信息群发',
          },
          {
            icon: '6-4.svg',
            title: '自动应答',
            subtitle:
              '借由关键词回复功能，可对用户的大部分提问进行自动回复，导购人员仅需对个性提问进行专项回复',
          },
          {
            icon: '6-5.svg',
            title: '用户数据化资产沉淀',
            subtitle:
              '将小程序商城数据和企微打通，对用户在小程序的购买和点击行为自动打上标签，并同步至企微',
          },
        ]}
        achievements={[
          {
            icon: '05',
            title: '自动化激活会员用户，通过Ai电话的激活引导，添加率近 40%',
          },
          {
            icon: '03',
            title: '10倍的信息触达效率，通过高频次的营销触达，大幅提升 GMV',
          },
          {
            icon: '02',
            title:
              '86w 小程序用户行为的自动标签化，真正具备了千人千面的营销推送能力',
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
