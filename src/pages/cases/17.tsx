import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某头部线上教育公司旗下子品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-17"
        themeColor="#0DE492"
        title="某头部线上教育公司旗下子品牌"
        brief="该品牌是头部在线教育公司的子品牌，主打素质教育，私域主要是通过裂变，借助免费思维编程课，引导用户不断拉新"
        datas={[
          {
            title: '500+',
            subtitle: '自动化管理账号数',
          },
          {
            title: '250W',
            subtitle: '自动化运营客户数',
          },
          {
            title: '90%',
            subtitle: '提升人效',
          },
        ]}
        steps={[
          '用户在朋友圈看到好友发的“免费领取编程思维课程”的海报，扫码添加海报上的小助手为好友',
          '添加好友后立刻收到欢迎语，告知回复相应数字并按照要求操作一定能领到礼品；',
          '用户回复数字，得到一张海报图片和文案，要求分享到朋友圈或孩子相关群截图即可领取礼品。此后用户每天都会收到一条此类活动的消息',
          '若用户未回复相关数字，则很少再能收到相关信息',
          '此后，用户每天都会收到 1 - 2 条「思维+英语」的课程推荐',
        ]}
        features={[
          {
            icon: '17-1.svg',
            title: '关键词自动应答',
            subtitle:
              '原来需要大量人力对用户的常规问题进行重复性回答的，借由关键词回复功能，可实现常规问题的自动回复',
          },
          {
            icon: '17-2.svg',
            title: '自动丰富用户画像',
            subtitle:
              '不再需要手工根据客户发送的消息标记用户标签，系统根据用户消息中包含的关键词或互动频率自动打上标签，自动化完成用户画像的构建',
          },
          {
            icon: '17-3.svg',
            title: 'API 消息自动群发',
            subtitle:
              '所有消息群发不再有人工执行，由系统直接调用API接口向用户发送消息',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title: '超过 500 个账号 250 万用户的增长和触达几乎自动化完成运营，人工只需要提供文案和海报',
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
