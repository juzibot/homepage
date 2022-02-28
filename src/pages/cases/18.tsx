import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某在线教育头部品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-18"
        themeColor="#FF6058"
        title="某在线教育头部品牌"
        brief="该品牌是一家在线教育企业，其私域通过朋友圈引流裂变后用高质量内容和营销活动高频触达用户，提升最终转化效果"
        datas={[
          {
            title: '3 倍',
            subtitle: '提升消息触达率',
          },
          {
            title: '30W',
            subtitle: '零人工裂变客户数',
          },
          {
            title: '90%',
            subtitle: '提升人效',
          },
        ]}
        steps={[
          '用户在朋友圈看到好友发送的海报添加助教老师可以免费领取文具，随添加助教企业微信为好友参与活动',
          '添加好友后，立刻收到3条欢迎语（邀请参与裂变活动领取礼品的文本、查看助力榜的链接和活动海报）',
          '之后会在当日和次日持续收到参与活动的提醒以及其他活动的邀约',
          '除此以外，每天都会收到助教老师发来的各种考试资料、组队领取免费礼品和各类免费课程的上课提醒。',
        ]}
        features={[
          {
            icon: '18-1.svg',
            title: '全自动的运营',
            subtitle:
              '原来需要人工手动逐条群发的活动提醒由机器代替，按照用户添加好友后的时间线自动执行预设的消息，提高活动执行率降低人力成本',
          },
          {
            icon: '18-2.svg',
            title: '无限次群发',
            subtitle:
              '突破企微原有每天1次的群发限制，每天进行2次以上私聊群发，保证营销信息的高频触达。',
          },
        ]}
        achievements={[
          {
            icon: '06',
            title:
              '配合裂变活动，0 人工自动完成 30 万用户的增长、触达和筛选，人只需要配置规则和上传话术内容',
          },
          {
            icon: '02',
            title: '将触达用户的消息总量提升 3 倍以上，大幅度提高活动参与度',
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
