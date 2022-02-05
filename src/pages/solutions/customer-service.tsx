import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SolutionContactPage: NextPage = () => {
  return (
    <>
      <Seo title="客服场景解决方案 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <SolutionDetailPage
        heroTitle="客服场景解决方案"
        heroSubtitle="句子互动提供把任意 IM 软件变成效率客服系统的解决方案，在一个后台应答来自多平台多个账号上的消息。
        同时打破账号间好友关系隔阂，让会话在员工之间高效流转"
        backgroundUrl="https://cdn-official-website.juzibot.com/images/solutions/bg-2.svg"
        challenges={[
          {
            icon: 'icon-5.svg',
            title: '服务半径小',
            subtitle: '员工能同时管理应答的账号数量有限',
          },
          {
            icon: 'icon-6.svg',
            title: '多人协作复杂',
            subtitle: '受限好友关系，无法多人协作应答',
          },
          {
            icon: 'icon-7.svg',
            title: '沟通风控难',
            subtitle: '无法有效约束员工可能发送的内容',
          },
          {
            icon: 'icon-8.svg',
            title: '绩效统计乱',
            subtitle: '复杂的对话场景无法精准合理的统计绩效',
          },
        ]}
        solutions={[
          {
            title: '聚合多平台多账号消息，10 倍提高员工服务半径',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-5.svg',
            subtitle:
              '句子互动提供一个功能更强的聊天页面，把十几个账号的消息放在一个页面里管理，使得原来多个人的工作可以被一个人来处理。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-1.svg',
          },

          {
            title: '打破账号间好友关系隔阂，让客户在多人间效率流转',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-6.svg',
            subtitle:
              '句子互动聚合所有账号的好友关系链，用户可以在企业内部员工之间被自由分配流转，让会话成为效率的工单系统，让多人可以协作服务同一个用户。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-2.svg',
          },

          {
            title: '监控每一轮对话，实时预警延时回复和风险内容',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-7.svg',
            subtitle:
              '留存全企业员工聊天记录，实时监控潜在风险对话，提供秒级敏感词、拉黑、超时应答预警通知。可预设员工会话权限，支持仅发送话术库内容。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-3.svg',
          },

          {
            title: '分析每个轮次的对话，提供基于响应效率的绩效分析',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-8.svg',
            subtitle:
              '深入洞察客服、运营的数量和质量，统计员工各时间跨度的对话消息总量，计算每轮对话的响应效率。提供多维度的排行榜，定时推送到指定群或指定员工。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-4.svg',
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
