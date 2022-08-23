import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某头部约车服务品牌（用户端） - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-22"
        themeColor="#0DE492"
        title="某头部约车服务品牌（用户端）"
        brief="该品牌为打车用户搭建私域，主要通过不断的营销信息推送，来引导用户使用打车服务或邀请亲友打车"
        datas={[
          {
            title: '5W',
            subtitle: '人均服务客户数',
          },
          {
            title: '3 倍',
            subtitle: '提升消息触达率',
          },
          {
            title: '50%',
            subtitle: '零人工入群率',
          },
        ]}
        steps={[
          '用户在线下司机的推荐下，扫码添加该品牌客服后，会立刻收到欢迎语，获知加入打车福利群可以获得5元立减券，还能参与免单活动，只需回复自己所在的城市即可',
          '用户回复城市后，会马上收到客服的群邀请链接，点击进入城市群后会看到群公告，了解到每周一、周三、周五都会有打车折扣活动',
          '用户在城市群内会时常收到裂变活动邀请，邀请新朋友完单，本人就能获得10元现金奖励，被邀请的朋友还能获得一张10元打车立减券',
        ]}
        features={[
          {
            icon: '22-1.svg',
            title: '高频触达',
            subtitle:
              'RPA 助力高效触达，每天进行2-3次以上社群群发和私信群发，保证营销信息的高频触达',
          },
          {
            icon: '22-2.svg',
            title: '自动化邀请入群',
            subtitle:
              'RPA 助力提升运营效率，可以根据消息关键词自动完成拉群动作，极大节省人力、提高入群率',
          },
          {
            icon: '22-3.svg',
            title: '关键词自动应答',
            subtitle:
              'RPA 助力应答效率，借由关键词回复功能，可实现常规问题的自动回复，运营人员仅需对个性提问进行专项回复',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title: '1 人管理十余个账号的数万用户，极大提高了人效',
          },
          {
            icon: '02',
            title:
              '将触达用户的消息总量提升 3 倍以上，大幅提升群聊活跃度，保持群粘性，提升最终转化效果',
          },
          {
            icon: '06',
            title: '零人工成本前提下，入群率 50% 以上，远高于行业水平',
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
