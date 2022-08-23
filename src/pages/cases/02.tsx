import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某乳类一线品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-2"
        themeColor="#0DE492"
        title="某乳类一线品牌"
        brief=""
        datas={[
          {
            title: '5 倍',
            subtitle: '提升人效',
          },
          {
            title: '15000',
            subtitle: '人均服务客户数',
          },
          {
            title: '3 倍',
            subtitle: '提升消息触达率',
          },
        ]}
        steps={[
          '用户在朋友圈看到该品牌的广告，或收到亲友发送的牛奶助力领取活动，点开广告后关注「品牌服务号」后，收到欢迎语告知需要添加福利官参与抽奖 + 领取免费好奶',
          '用户添加福利官后，立刻收到活动小程序入口，并告知小程序抽奖活动，同时回复关键词（我要进群）即可进入福利社群',
          '用户回复我要进群后，立刻收到入群链接',
          '用户加入福利群后立刻收到被 @ 的欢迎语告知社群活动安排。在群内每天会收到 2 - 3 次的活动介绍，类型分为三类：群内答题抽奖、跳一跳小游戏排名兑奖、以及邀请好友助力兑奖。每周三和周五还会看到额外的福利和红包雨活动',
          '用户在私信或社群中询问试吃、积分等问题，都会立刻收到较为详细的回复',
        ]}
        features={[
          {
            icon: 'blue-2.svg',
            title: '嵌入会话页面的话术库',
            subtitle:
              '原来需要重复编辑且无法标准化应答的内容，形成统一的回复规范一键发送给用户，提升应答专业度和效率',
          },
          {
            icon: 'orange-2.svg',
            title: '自动丰富用户画像',
            subtitle:
              '不再需要手工根据客户发送的消息标记用户标签，系统根据用户消息中包含的关键词自动打上标签，自动化完成用户画像的构建',
          },
          {
            icon: 'green-2.svg',
            title: '高频触达',
            subtitle:
              'RPA 助力高效触达，每天进行 2-3 次社群群发和私信群发，保证营销信息的高频触达',
          },
          {
            icon: 'pink-1.svg',
            title: '自动化邀请入群',
            subtitle:
              'RPA 助力效率运营，可以根据消息关键词自动完成拉群动作，极大节省人力、提高入群率',
          },
          {
            icon: 'purple-2.svg',
            title: '关键词自动应答',
            subtitle:
              'RPA 助力高效应答，借由关键词回复功能，可实现常规问题的自动回复，运营人员仅需对个性提问进行专项回复',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title: '将触达用户的消息总量提升 3 倍以上，大幅提升最终转化效果',
          },
          {
            icon: '02',
            title: '2 人管理账号下数万个用户的消息，极大地提高了人效比',
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
