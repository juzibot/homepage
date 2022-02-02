import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某医疗行业高级杂志机构 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-29"
        themeColor="#6547FF"
        title="某医疗行业高级杂志机构"
        brief="该机构通过杂志、公众号引导医生添加企微做医教课程销售和活动宣传"
        datas={[
          {
            title: '70%+',
            subtitle: '零人工入群率',
          },
          {
            title: '7 倍',
            subtitle: '提升消息触达率',
          },
          {
            title: '79%',
            subtitle: '群留存用户',
          },
        ]}
        steps={[
          '用户在医学期刊或其对应的公众号上看到添加联络官企业微信可以加入学习交流群，遂扫码添加',
          '添加好友后立刻收到3条包含文字内容和群邀请卡片的消息，告知即将邀请加入群聊，并希望告知医院和科室方便更好的交流',
          '加入群聊后立刻收到被@的欢迎语告知群规，同时收到一条过往课程的合集链接',
          '群内每天都会收到多条医学联络官发来的学术论坛要求、课程邀请、图书推荐等消息',
          '错过了分享直播咨询联络官索要直播回放会立刻得到回复',
        ]}
        features={[
          {
            icon: '28-1.svg',
            title: '渠道二维码',
            subtitle: '精准定位用户是在公众号回复哪些关键词添加客服',
          },
          {
            icon: '28-2.svg',
            title: '关键词自动响应',
            subtitle:
              '原来需要大量人力重复回答常规问题、重复邀请用户进群的，借由关键词回复功能，快速完成应答或者拉入对应群聊，极大的降低人力成本',
          },
          {
            icon: '27-3.svg',
            title: '无限次群发',
            subtitle:
              '突破企微原有每天 1 次的群发限制，每天进行 3 次以上社群群发和私信群发，保证营销信息的高频触达',
          },
          {
            icon: '29-2.svg',
            title: '发送多条欢迎语',
            subtitle:
              '突破企业微信 2 条欢迎语的限制，自动发送文字、图片/链接多媒体素材和群邀请卡片',
          },
          {
            icon: '29-5.svg',
            title: '动态分组并分别触达',
            subtitle:
              '将原来需要每次群发前手工筛选客户范围的工作流程变成一次筛选动态适配，可直接针对分组群发消息，极大的提高了运营效率',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title: '私域运营实现链路自动化，群留存率超过 79%',
          },
          {
            icon: '06',
            title: '将触达用户的消息总量提升 7 倍以上，大幅提升最终转化效果',
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
