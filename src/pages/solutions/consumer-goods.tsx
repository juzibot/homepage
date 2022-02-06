import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SolutionContactPage: NextPage = () => {
  return (
    <>
      <Seo title="消费品行业解决方案 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <SolutionDetailPage
        heroTitle="消费品行业解决方案"
        heroSubtitle="句子互动助力消费品行业快速搭建私域流量池，赋能更多 SKU 展现机会、打通结果数据构建增长到转化的私域业务闭环。"
        backgroundUrl="/_images/solutions/bg-5.svg"
        challenges={[
          {
            icon: 'icon-19.svg',
            title: '获客成本高',
            subtitle: '流量成本日渐增加，存量线索又无法被高效唤醒',
          },
          {
            icon: 'icon-20.svg',
            title: '触达频次有限',
            subtitle: '每天只能群发一次消息，多 SKU 无法被全面展示',
          },
          {
            icon: 'icon-21.svg',
            title: '无法构建转化闭环',
            subtitle: '数据割裂，转化数据无法直接用于指导运营优化',
          },
        ]}
        solutions={[
          {
            title: '规模化唤醒存量沉默客户，零人工成本搭建私域冷启动流量池',
            photo: '/_images/solutions/s-20.svg',
            subtitle:
              '无需人工参与，把海量的沉默客户线索交给机器人，同多种途径自动完成意向客户筛选、社交关系建立和特殊信息备注，低成本前提下获得更高转化率。',
            icon: '/_images/solutions/no-16.svg',
          },

          {
            title: 'RPA 助力赋予更多的推送机会，让每一个 SKU 都被用户看到',
            photo: '/_images/solutions/s-21.svg',
            subtitle:
              '基于 RPA 技术，句子互动提供更多次面向全部用户和群聊的消息推送的能力，真正有效率地将私聊群聊作为一个推送和变现入口，让更多 SKU 有机会被推荐。 SOP 化运营，让企业最佳运营实践被应用到每一个客户服务中。',
            icon: '/_images/solutions/no-17.svg',
          },

          {
            title: '聚合用户全域数据，关联结果数据指导运营策略优化',
            photo: '/_images/solutions/s-22.svg',
            subtitle:
              '句子互动提供完善的 SDK 和开放 API 并预先打通市场上的电话短信系统、小程序商城、SCRM、ERP、CDP，打通效果数据，关联会话、物料和时间等多维度互动数据，用结果指导运营的优化策略。',
            icon: '/_images/solutions/no-18.svg',
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

export default SolutionContactPage;
