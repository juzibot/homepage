import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某头部互联网平台 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-24"
        themeColor="#0555FF"
        title="某头部互联网平台"
        brief="该平台业务线为全国广告行业从业人员，搭建行业学习交流社群，它的私域主要是进行社群的维护，并通过裂变活动增加私域客户数目"
        datas={[
          {
            title: '3W+',
            subtitle: '人均服务客户数',
          },
          {
            title: '83%',
            subtitle: '消息回复率',
          },
          {
            title: '77.05%',
            subtitle: '30s 应答率',
          },
          {
            title: '6 倍',
            subtitle: '提升消息触达率',
          },
        ]}
        steps={[
          '用户在朋友圈看到该平台业务线的「行业交流群」广告，添加客服好友可以免费加入交流',
          '用户添加好友后，立刻收到2条消息，告知用户朋友圈转发海报即可进群抽奖',
          '用户将朋友圈转发截图发送给客服，随后被邀请进群',
          '用户回复对应关键词后，立刻收到群聊邀请，进群后，每日可收到一条企微朋友圈裂变活动的消息和一条平台「每日流量动态」的链接',
          '无论在群聊还是私聊中，当用户发送“礼物”“北京”“电商”等关键词时，可以立刻收到相应的消息回复',
        ]}
        features={[
          {
            icon: '24-1.svg',
            title: '渠道二维码',
            subtitle: '精准定位用户是从群引流、渠道裂变等哪个渠道添加客服的',
          },
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
        ]}
        achievements={[
          {
            icon: '03',
            title:
              '1 人管理 8 个账号下3万+个用户、100+ 企业微信群的消息，平均首次响应 30s 应答率达 77.05%，回复率达到 83%，极大地提高了人效比',
          },
          {
            icon: '06',
            title: '将触达用户的消息总量提升 6 倍以上，大幅提升最终转化效果',
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
