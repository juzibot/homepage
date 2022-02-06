import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SolutionContactPage: NextPage = () => {
  return (
    <>
      <Seo title="教培行业解决方案 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <SolutionDetailPage
        heroTitle="教培行业解决方案"
        heroSubtitle="句子互动助力教培行业高效激活用户，将长转化周期下的复杂运营动作更标准化、完美的被执行落地，完成线索的转化。"
        backgroundUrl="https://cdn-official-website.juzibot.com/images/solutions/bg-6.svg"
        challenges={[
          {
            icon: 'icon-22.svg',
            title: '消耗大量人力',
            subtitle: '私域业务重人力，随着用户数量增长，人力成本骤增',
          },
          {
            icon: 'icon-23.svg',
            title: '获客成本高',
            subtitle: '流量成本日渐增加，沉默线索又无法被高效唤醒',
          },
          {
            icon: 'icon-24.svg',
            title: '复杂流程执行难',
            subtitle: '长转化周期、多运营动作无法被标准化执行，影响转化',
          },
        ]}
        solutions={[
          {
            title: '更高的触达频次，最大限度的唤醒沉默用户',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-20.svg',
            subtitle:
              '基于 RPA 技术，句子互动提供更多次面向全部用户和群聊的消息推送的能力，更多的唤醒策略可以被有效的执行，最大限度激活沉默客户。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-19.svg',
          },

          {
            title: '聚合多平台多账号消息，降低 90% 的人力投入',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-21.svg',
            subtitle:
              '句子互动提供一个功能更强的聊天页面。在这里，能把十几个账号的消息放在一个页面里管理，所有消息将聚合在一个页面中；使得原来多个人的工作可以被一个人来处理。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-20.svg',
          },

          {
            title: 'SOP 化运营搭配完善的话术库，让复杂转化流程被更好的落地',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-22.svg',
            subtitle:
              '句子互动提供多层级、多维度话术库能力，结合可以按预设时间节点向指定画像人群发送指定消息内容和定时消息群发能力，实现真正意义上的 SOP 化运营，让转化路径被完美执行。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-21.svg',
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
