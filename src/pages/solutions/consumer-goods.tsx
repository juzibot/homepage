import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SolutionContactPage: NextPage = () => {
  return (
    <>
      <Seo title="消费品行业解决方案 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <SolutionDetailPage
        cases={[
          {
            title: '某韩国时装零售头部品牌',
            brief:
              '已回复聊天占比达 100%，日均聊天数达 1300+ 条，超过 250 个云导购账号的统一管理',
            category: CompanyCategory.TRADE,
            url: '/cases/12',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/27.png',
          },
          {
            title: '某头部潮流玩具品牌',
            brief:
              '2 人管理 15 个账号下 3 万余用户的消息，触达用户的消息总量提升 6 倍以上',
            category: CompanyCategory.TRADE,
            url: '/cases/10',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/25.png',
          },
          {
            title: '某饮料新消费头部品牌',
            brief:
              '实现 1 人管理 10 个企业微信、10 万粉丝的消息应答，触达用户的消息总量提升 5 倍以上',
            category: CompanyCategory.TRADE,
            url: '/cases/01',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/0.png',
          },
        ]}
        heroTitle="消费品行业解决方案"
        heroSubtitle="句子互动助力消费品行业快速搭建私域流量池，赋能更多 SKU 展现机会、打通结果数据构建增长到转化的私域业务闭环。"
        backgroundUrl="https://cdn-official-website.juzibot.com/images/solutions/bg-5.svg"
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
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-20.svg',
            subtitle:
              '无需人工参与，把海量的沉默客户线索交给机器人，同多种途径自动完成意向客户筛选、社交关系建立和特殊信息备注，低成本前提下获得更高转化率。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-16.svg',
          },

          {
            title: 'RPA 助力赋予更多的推送机会，让每一个 SKU 都被用户看到',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-21.svg',
            subtitle:
              '基于 RPA 技术，句子互动提供更多次面向全部用户和群聊的消息推送的能力，真正有效率地将私聊群聊作为一个推送和变现入口，让更多 SKU 有机会被推荐。 SOP 化运营，让企业最佳运营实践被应用到每一个客户服务中。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-17.svg',
          },

          {
            title: '聚合用户全域数据，关联结果数据指导运营策略优化',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-22.svg',
            subtitle:
              '句子互动提供完善的 SDK 和开放 API 并预先打通市场上的电话短信系统、小程序商城、SCRM、ERP、CDP，打通效果数据，关联会话、物料和时间等多维度互动数据，用结果指导运营的优化策略。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-18.svg',
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
