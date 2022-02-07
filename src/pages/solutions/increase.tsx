import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SolutionContactPage: NextPage = () => {
  return (
    <>
      <Seo title="增长场景解决方案 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <SolutionDetailPage
        cases={[
          {
            title: '某国际一线美妆大品牌',
            brief:
              '自动化激活会员用户，10 倍的信息触达效率，86w 小程序用户行为的自动标签化',
            category: CompanyCategory.TRADE,
            url: '/cases/06',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/21.png',
          },
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
            title: '某饮料新消费头部品牌',
            brief:
              '实现 1 人管理 10 个企业微信、10 万粉丝的消息应答，触达用户的消息总量提升 5 倍以上',
            category: CompanyCategory.TRADE,
            url: '/cases/01',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/0.png',
          },
        ]}
        heroTitle="增长场景解决方案"
        heroSubtitle="新流量时代的增长引擎，句子互动提供多种方式零人工成本规模触达并添加用户进入私域，助力冷启动流量池搭建。"
        backgroundUrl="https://cdn-official-website.juzibot.com/images/solutions/bg-3.svg"
        challenges={[
          {
            icon: 'icon-9.svg',
            title: '获客成本高',
            subtitle: '互联网流量见顶，流量成本日渐增加',
          },
          {
            icon: 'icon-10.svg',
            title: '渠道来源复杂',
            subtitle: '多平台获客，无法区分用户来源',
          },
          {
            icon: 'icon-11.svg',
            title: '留存率低',
            subtitle: '后链路运营耗人力，用户留存乏力',
          },
        ]}
        solutions={[
          {
            title: '上传 Excel 就能开始加好友，自带完整的风控策略',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-9.svg',
            subtitle:
              '上传包含客户线索信息、备注等字段的Excel到系统，配置添加时段、添加频率、添加账号的信息，系统会自动均匀执行。同时提供系统级风控，监测到风险任务及时暂停。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-5.svg',
          },

          {
            title: '电话机器人 + 企业微信机器人：高转化率的私域构建',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-10.svg',
            subtitle:
              '将企业沉淀的大量手机线索交给电话机器人，批量触达并筛选意向线索自动同步给企业微信机器人，自动发送好友申请。全程无需人工参与，机器人配合自动完成客户添加和备注同步。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-6.svg',
          },

          {
            title: '短信群发 + 企业微信承接：用户行动成本最低的转化路径',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-11.svg',
            subtitle:
              '将带有直接唤醒微信小程序的链接插入短信，用户只需一次点击、一次识别即可完成好友添加，把用户行动成本降到最低。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-7.svg',
          },

          {
            title: '把个微用户规模化迁移成更合规的企微客户关系',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-12.svg',
            subtitle:
              '只需把个微好友的名片发送给企业微信账号，机器人就会自动、均匀的添加成为好友。提供系统级风控，监测到风险任务及时暂停。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-8.svg',
          },

          {
            title: '提供渠道二维码及基于来源信息的预备注',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-13.svg',
            subtitle:
              '句子互动提供一套完全的渠道二维码功能，可为不同渠道配置不同的二维码、发送不同的欢迎语，并自动打标签标识来源。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-9.svg',
          },

          {
            title: '自动完成用户承接、分流和核心生命周期阶段的留存召回',
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-14.svg',
            subtitle:
              '句子互动提供应答 SOP 能力，在添加好友前预设触达规则，按时间自动执行添加后的消息触达，含入群邀请和最长 30 天的消息发送，流失预判自动招回让 LTV 无限增长。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-10.svg',
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
