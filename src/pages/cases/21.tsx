import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某头部约车服务品牌（司机端） - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-21"
        themeColor="#0555FF"
        title="某头部约车服务品牌（司机端）"
        brief="该品牌为旗下司机群体搭建私域，主要是用来将各地司机分地区引入私域流量池，将通过群内的福利活动留住这些司机"
        datas={[
          {
            title: '3 倍',
            subtitle: '提升消息触达率',
          },
          {
            title: '2000+',
            subtitle: '零人工迁移客户数',
          },
          {
            title: '31%',
            subtitle: '社群活跃度',
          },
        ]}
        steps={[
          '用户在该品牌司机端看到发起的福利活动，参与活动并扫码进入司机福利大群',
          '用户加入群后，会收到客服的添加好友请求，被告知通过企业微信，回复关键词（城市）即可进入相应的城市福利群',
          '用户进入城市福利群后，每天都能在群内收到2-3条福利活动介绍海报和活动提醒。用户如果参加周三福利日中奖，给小助理发送中奖截图，姓名以及手机号，即可兑奖',
          '城市群内会不定期推出的拉新活动，用户向小助理回复关键词报名后，立刻得知活动细则，包括报名后赚现金比其他师傅加倍',
          '用户回复确认报名后，会被小助理拉进“确认报名群”，看到群内有不定期的统计排名',
        ]}
        features={[
          {
            icon: '21-1.svg',
            title: '规模化获客',
            subtitle:
              '原来需要大量人工在群内手动添加的好友，直接由机器执行添加动作，极大地节省人力成本',
          },
          {
            icon: '21-2.svg',
            title: '高频触达',
            subtitle:
              'RPA 助力提升应答效率，每天进行 3 次以上向 1000+ 社群群发消息，保证营销信息的高频触达',
          },
          {
            icon: '21-3.svg',
            title: '自动化邀请入群',
            subtitle:
              '原来需要大量人工手动邀请入群的用户，可以根据消息关键词批量自动完成拉群动作，极大节省人力、提高入群率',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title: '将触达用户的消息总量提升 3 倍以上，大幅提升最终转化效果',
          },
          {
            icon: '06',
            title:
              '0 人力成本，自动完成 2000+ 意向客户线索的规模化迁移，转化率高达 60%',
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
