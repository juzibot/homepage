import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SolutionContactPage: NextPage = () => {
  return (
    <>
      <Seo title="规模化运营解决方案 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <SolutionDetailPage
        heroTitle="规模化运营解决方案"
        heroSubtitle="句子互动将 IM 软件变成可自动执行计划任务的机器人，解决面向数百万用户的规模化、千人千面营销推送难题。"
        backgroundUrl="https://cdn-official-website.juzibot.com/images/solutions/bg-4.svg"
        challenges={[
          {
            icon: 'icon-15.svg',
            title: '私域重人力',
            subtitle: '随着用户数量增长，人力成本骤增',
          },
          {
            icon: 'icon-16.svg',
            title: '员工参差不齐',
            subtitle: '量变带来质变，不能给到每个用户最好的服务体验',
          },
          {
            icon: 'icon-17.svg',
            title: '触达频次有限',
            subtitle: '每天只能群发一次消息，影响力不足以支撑转化',
          },
          {
            icon: 'icon-18.svg',
            title: '推送千篇一律',
            subtitle: '差异化推送配置成本高，推送打扰用户导致大量流失',
          },
        ]}
        solutions={[
          {
            title: '把 IM 软件变成自动执行任务的机器人，减少 90% 的人力投入',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-16.svg',
            subtitle:
              '句子互动把每一个账号变成全年无休、自动执行运营计划的效率机器人，完成 90%以上的被抽象的标准化运营动作，把员工从机械重复的工作中解脱出来。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-15.svg',
          },

          {
            title: 'SOP 化运营搭配完善的话术库，让每个客户都能享受最佳服务',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-17.svg',
            subtitle:
              '句子互动提供多层级、多维度话术库能力，结合可以按预设时间节点向指定画像人群发送指定消息内容和定时消息群发能力，实现真正意义上的 SOP 化运营，让企业最佳运营实践被应用到每一个客户服务中。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-12.svg',
          },

          {
            title: 'RPA 助力赋予更多的推送机会，为更高转化率提供强力支持',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-18.svg',
            subtitle:
              '基于 RPA 技术，句子互动提供更多次面向全部用户和群聊的多次消息推送的能力，真正有效率地将私聊群聊作为一个推送和变现入口。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-13.svg',
          },

          {
            title: '聚合用户全域数据打造完善用户画像，实现千人千面柔性触达',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-19.svg',
            subtitle:
              '句子互动提供完善的 SDK 和开放 API 并预先打通市场上的电话短信系统、小程序商城、SCRM、ERP、CDP，实现全自动的用户画像和用户分层，并进行千人千面的用户触达。',
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-14.svg',
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
