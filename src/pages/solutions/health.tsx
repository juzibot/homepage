import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SolutionContactPage: NextPage = () => {
  return (
    <>
      <Seo title="健康行业解决方案 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <SolutionDetailPage
        cases={[
          {
            title: '某连锁药店品牌',
            brief:
              '1 人管理 10 余个企业微信上的 6 万余用户消息，触达用户的消息总量提升 3 倍以上',
            category: CompanyCategory.MEDICAL,
            url: '/cases/27',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/11.png',
          },
          {
            title: '某减肥代餐一线品牌',
            brief:
              '用户已回复聊天占比达 100%，日均聊天数达 2775 条，平均首次响应时长可达 2s',
            category: CompanyCategory.TRADE,
            url: '/cases/05',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/20.png',
          },
          {
            title: '某会员制高端医院品牌',
            brief:
              '零人工成本下粉丝入群率超过 75%，触达用户的消息总量提升 4 倍以上',
            category: CompanyCategory.MEDICAL,
            url: '/cases/28',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/12.png',
          },
        ]}
        heroTitle="健康行业解决方案"
        heroSubtitle="句子互动助力医疗健康行业为用户提供更高效、更专业、更安全的健康服务。"
        backgroundUrl="https://cdn-official-website.juzibot.com/images/solutions/bg-7.svg"
        challenges={[
          {
            icon: 'icon-25.svg',
            title: '服务重人力',
            subtitle: '大量问题的应答需要大量的人力来维持',
          },
          {
            icon: 'icon-26.svg',
            title: '缺乏专业人员',
            subtitle: '对服务人员的专业要求远高于其他行业',
          },
          {
            icon: 'icon-27.svg',
            title: '内容专业要求高',
            subtitle: '对应答和推送内容的专业性有更高的要求',
          },
        ]}
        solutions={[
          {
            title: '聚合多平台多账号消息，10 倍提高员工服务半径',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-26.svg',
            subtitle:
              '句子互动提供一个功能更强的聊天页面，把十几个账号的消息放在一个页面里管理，使得原来多个人的工作可以被一个人来处理。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-22.svg',
          },

          {
            title: '让会话在员工之间自由流转分配，每一个问题得到最好的解答',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-27.svg',
            subtitle:
              '句子互动聚合所有账号的好友关系链，用户可以在企业内部员工之间被自由分配流转，普通问题可以被基础员工应答，无法被应答的问题再指派给更专业的人员。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-23.svg',
          },

          {
            title: '监控每一次推送和会话，实时预警风险内容保证服务的专业性',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-28.svg',
            subtitle:
              '实时监控员工会话消息，预警潜在风险应答，可预设员工会话权限，支持仅发送话术库内容。保证向用户发送专业、正确的内容。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-24.svg',
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
