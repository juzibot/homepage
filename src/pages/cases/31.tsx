import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某知名保险公司 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-31"
        themeColor="#FC790D"
        title="某知名保险公司"
        brief="该品牌是国内规模较大的全国性保险公司。它的私域主要是通过app和小程序中多样的福利活动来刺激用户进行定投"
        datas={[
          {
            title: '14000+',
            subtitle: '零人工运营客户数',
          },
          {
            title: '4 倍',
            subtitle: '提升消息触达率',
          },
        ]}
        steps={[
          '用户线上购买投保产品后，会看到入群二维码和入群参加更多活动的提示。扫码进群后，用户立刻收到一条消息，被告知需要添加机器人为好友',
          '在群内，用户每天会进行在 2 - 3 次的签到和活动提醒，以及不定时的保险内容分享，同时也会看到其他用户发送的签到链接，连续签到一个月，会在群内收到签到奖励通知',
          '当用户过生日时，用户会在群内收到一条 @ 自己的生日祝福和定投活动提醒',
          '用户在生日当天完成定投，还会在群内收到机器人一条通知，告诉自己定投多少钱已成功并再次附带生日祝福',
        ]}
        features={[
          {
            icon: '31-1.svg',
            title: '机器人自动触达',
            subtitle:
              '改变原来需要人力提醒用户活动参与的进度，由机器人根据用户在APP的活动参与情况，自动发送各类活动进度提醒',
          },
          {
            icon: '31-2.svg',
            title: '关键词自动应答',
            subtitle:
              '原来需要大量人力对用户的常规问题进行重复性回答的，借由关键词回复功能，可实现常规问题的自动回复，运营人员仅需对个性提问进行专项回复',
          },
          {
            icon: '31-3.svg',
            title: '高频触达',
            subtitle:
              'RPA 助力提升应答效率，每天进行4次以上社群群发和私信群发，保证营销信息的高频触达',
          },
          {
            icon: '31-4.svg',
            title: '防封设置',
            subtitle:
              '控制通过好友申请的频率和时间，降低被限流限制封号的风险，使托管微信能够长期且健康的执行获客任务',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title: '将触达用户的消息总量提升 4 倍以上，大幅提升群聊活跃度，保持群粘性，提升最终转化效果',
          },
          {
            icon: '08',
            title: '0 人工成本，机器人自动完成 14000+ 用户的运营工作',
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
