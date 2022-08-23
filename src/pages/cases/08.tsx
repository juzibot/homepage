import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某国际高端护肤品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-8"
        themeColor="#0555FF"
        title="某国际高端护肤品牌"
        brief="该品牌，私域主要用来维护线下门店客户，并依靠营销活动增进用户在微信生态的复购"
        datas={[
          {
            title: '2 倍',
            subtitle: '提升消息触达率',
          },
          {
            title: '38.71%',
            subtitle: '零人工入群率',
          },
          {
            title: '150',
            subtitle: '门店集中管理',
          },
        ]}
        steps={[
          '用户线下店体验后，会被店员邀请加为好友，除了享受专属客服服务，还能成为某品牌会员',
          '添加好友后，用户会立刻收到 2 条欢迎语，获知关注品牌公众号便能加入会员。同时，会被门店店员拉入门店社群',
          '用户在群内，每天早 10 点及晚 8 点，都会收到以早晚安形式分享的产品推荐并被告知提前预约然后到店体验，不定期还会在群里收到其他活动的预告',
        ]}
        features={[
          {
            icon: '8-1.svg',
            title: '多账号消息聚合',
            subtitle:
              '将原来需要大量人力管理的账号聚合在一个页面，使得 1 人可以管理数十个账号的消息',
          },
          {
            icon: '8-2.svg',
            title: '嵌入会话页面的话术库',
            subtitle:
              '原来需要重复编辑且无法标准化应答的内容，形成统一的回复规范一键发送给用户，提升应答专业度和效率',
          },
          {
            icon: '8-3.svg',
            title: '高频触达',
            subtitle:
              'RPA 助力高效触达，每天进行至少2次以上社群群发和私信群发，保证营销信息的高频触达',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title:
              '将触达用户的消息总量提升 2 倍以上，大幅提升最终转化效果',
          },
          {
            icon: '06',
            title:
              '零人工成本前提下，入群率高达 38.71% ，远高于行业水平',
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
