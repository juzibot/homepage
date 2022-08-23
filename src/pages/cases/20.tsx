import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某淘系直播头部主播 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-20"
        themeColor="#FC790D"
        title="某淘系直播头部主播"
        brief="该主播私域业务主要通过微信广告投放沉淀粉丝，运营引导至淘宝直播间观看"
        datas={[
          {
            title: '5 倍',
            subtitle: '提升人效',
          },
          {
            title: '5W+',
            subtitle: '人均服务客户数',
          },
          {
            title: '99%',
            subtitle: '已回复聊天占比',
          },
          {
            title: '73%',
            subtitle: '私域留存率',
          },
        ]}
        steps={[
          '用户在朋友圈、公众号底部看到某主播投放的广告，关注主播公众号后，看到“专属客服、直播预告、每月3000份试用、每周福利抽奖”等福利添加助理',
          '添加后，立刻收到欢迎语和群邀请链接，提示群内可以发送“预告”查看每日直播预告、参加0元试用、免费抽奖等福利，如果未入群，会在后期不定时收到福利官的再次进群邀请',
          '用户在群内每天分别在16:30和19:30收到当晚直播预告消息和邀请进入直播的消息推送',
          '用户购物遇到问题时，找助理号都能在20分钟内得到反馈，即便在非工作时间也会立刻收到“当前休息，次日会第一时间回复”的消息',
          '社群内不定期组织各类抽奖、试用活动，中奖用户向助理发送指定关键词可立即收到活动群的邀请链接',
        ]}
        features={[
          {
            icon: '20-1.svg',
            title: '渠道二维码',
            subtitle:
              '将来自公众号自动回复、公众号菜单栏、小程序不同渠道的用户随机分配给旗下数百个企业微信账号，清晰标注用户来源',
          },
          {
            icon: '20-2.svg',
            title: '高频应答',
            subtitle:
              'RPA 助力应答效率，自动发送多条内容和入群邀请卡片',
          },
          {
            icon: '20-3.svg',
            title: '定时群发',
            subtitle:
              'RPA 助力高效触达，每天一次配置后自动在多个时间群发内容',
          },
          {
            icon: '20-4.svg',
            title: '自动化邀请入群',
            subtitle:
              '原来需要大量人工手动筛选未入群用户并再次邀请，可以进行自动筛选并发送群邀请，极大节省人力、提高入群率',
          },
          {
            icon: '20-5.svg',
            title: '自动回复、分时段回复',
            subtitle:
              '当用户发送指定关键词后，可自动发送预设的话术或邀请进入指定群，非工作时段回复默认的消息(小助理下班了，上班后会第一时间回复)',
          },
          {
            icon: '20-6.svg',
            title: '消息聚合',
            subtitle:
              '将多个账号的消息聚合在一个聊天页面，使得一人可管理10+个账号上的数万粉丝的消息应答',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title:
              '人效比大规模提升，私域团队人均服务近 10 万客户、数百社群，每日平均面向群聊发送2条直播预告消息',
          },
          {
            icon: '08',
            title:
              '平均首次响应时长缩短至 5min，30s 内应答率达 22.18 %，日均私聊发送消息数百条，聊天回复率达 99%',
          },
          {
            icon: '06',
            title: '30 日私域留存率达 73%，入群率超过 50%，远高于行业平均水平',
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
