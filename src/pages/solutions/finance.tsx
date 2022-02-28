import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SolutionContactPage: NextPage = () => {
  return (
    <>
      <Seo title="政务金融行业解决方案 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <SolutionDetailPage
        cases={[
          {
            title: '某市级民政机关',
            brief:
              '自动化完成 900 万线索量的筛选，平均每人每日回复 1000+ 消息，触达用户的消息总量提升 3 倍以上',
            category: CompanyCategory.GOV,
            url: '/cases/32',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/16.png',
          },
          {
            title: '某知名地方银行',
            brief:
              '2 人管理 15 个账号的消息应答，5倍以上提高人的服务半径，工具赋能精细化 SOP 运营，开卡率 46%',
            category: CompanyCategory.FINANCE,
            url: '/cases/29',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/14.png',
          },
          {
            title: '某知名保险公司',
            brief:
              '0 人工成本，机器人自动完成 14000+ 用户的运营工作，触达用户的消息总量提升 4 倍以上',
            category: CompanyCategory.FINANCE,
            url: '/cases/31',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/15.png',
          },
        ]}
        heroTitle="政务金融行业解决方案"
        heroSubtitle="保障用户数据安全，集成已有数据系统，多层级权限管理让每一次服务更专业、更有温度。"
        backgroundUrl="https://cdn-official-website.juzibot.com/images/solutions/bg-8.svg"
        challenges={[
          {
            icon: 'icon-28.svg',
            title: '数据安全',
            subtitle: '常规的线上工具无法保证政务金融系统的数据安全性',
          },
          {
            icon: 'icon-29.svg',
            title: '专业性要求高',
            subtitle: '需要更细致的权限管理系统保证服务的专业性',
          },
          {
            icon: 'icon-30.svg',
            title: '服务打通困难',
            subtitle: '内部数据系统难以与常规的线上工具集成打通',
          },
        ]}
        solutions={[
          {
            title: '把服务部署在私有服务器，相同的体验更安全的数据留存',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-29.svg',
            subtitle:
              '句针对有更高安全诉求及合规要求的政务金融单位，句子互动提供私有化部署方案，可兼容各种复杂的部署环境。私有化产品与公有云同步更新，保证产品体验的同时用户数据更安全。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-25.svg',
          },

          {
            title: '监控每一次推送和会话，实时预警风险内容保证服务的专业性',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-27.svg',
            subtitle:
              '实时监控员工会话消息，预警潜在风险应答，可预设员工会话权限，支持仅发送话术库内容。保证向用户发送专业、正确的内容。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-23.svg',
          },

          {
            title: '集成打通已有数据系统，把服务迁移的数据损失降到最低',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-28.svg',
            subtitle:
              '句子互动提供完善的 SDK 和开放的 API 接口，快速打通集成已有的内部账号系统和用户数据库，将所有信息汇总显示，以最低的成本完成服务入口的迁移和衔接。',
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
