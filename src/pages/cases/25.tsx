import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某头部互联网平台技术社区 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-25"
        themeColor="#FC790D"
        title="某头部互联网平台技术社区"
        brief="该平台为技术人员搭建了专业技术交流社群，句子互动助力该团队高效的管理社群，节省大量的人力成本去维护社群"
        datas={[
          {
            title: '2W',
            subtitle: '人均服务客户数',
          },
          {
            title: '3 倍',
            subtitle: '提升消息触达率',
          },
          {
            title: '64%',
            subtitle: '零人工入群率',
          },
        ]}
        steps={[
          '用户通过观看抖音快手课程直播、参与线下沙龙，查看技术知识博客，获知添加小助理可领取知识资料、加入行业沟通群',
          '添加好友后，用户向小助理回复在直播课程/沙龙活动/技术知识博客等中指定关键词数字，将被邀请进入对应社群',
          '用户每周会通过社群，收到最新直播课程消息，以及最新行业知识资料',
          '想咨询求职/技术操作等问题时，用户都能在社群及时被回复，且回答内容非常专业详尽',
        ]}
        features={[
          {
            icon: '24-2.svg',
            title: '消息聚合',
            subtitle:
              '将原来需要大量人力管理的账号聚合在一个页面，使得1人可以管理数十个账号的消息',
          },
          {
            icon: '24-3.svg',
            title: '嵌入会话页面的话术库',
            subtitle:
              '原来需要重复编辑且无法标准化应答的内容，形成统一的回复规范一键发送给用户，提升应答专业度和效率',
          },
          {
            icon: '24-4.svg',
            title: '高频触达',
            subtitle:
              'RPA 助力提升应答效率，每天进行3次以上社群群发和私信群发，保证营销信息的高频触达',
          },
          {
            icon: '24-5.svg',
            title: '自动化邀请入群',
            subtitle:
              '原来需要大量人工手动邀请入群的用户，可以根据消息关键词或用户标签批量自动完成拉群动作，极大节省人力、提高入群率',
          },
          {
            icon: '24-6.svg',
            title: '关键词自动应答',
            subtitle:
              '原来需要大量人力对用户的常规问题进行重复性回答的，借由关键词回复功能，可实现常规问题的自动回复，运营人员仅需对个性提问进行专项回复',
          },
          {
            icon: '25.svg',
            title: '自动丰富用户画像',
            subtitle:
              '不再需要手工根据客户发送的消息标记用户标签，系统根据用户消息中包含的关键词或互动频率自动打上标签，自动化完成用户画像的构建',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title:
              '句子支持下，该平台实现 1 人管理 4 个账号下 2 万个用户的消息，极大地提高了人效比',
          },
          {
            icon: '08',
            title: '将触达用户的消息总量提升 3 倍以上，大幅提升最终转化效果',
          },
          {
            icon: '06',
            title: '零人工成本前提下，入群率 64% 以上，远高于行业水平',
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
