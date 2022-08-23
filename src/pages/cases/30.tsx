import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某知名地方银行 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-30"
        themeColor="#0555FF"
        title="某知名地方银行"
        brief="该机构是地方上市银行，它的私域主要用来通过营销活动引导用户开卡、储蓄、贷款和购买理财产品"
        datas={[
          {
            title: '46%',
            subtitle: '开卡率',
          },
          {
            title: '8',
            subtitle: '人均管理账号数',
          },
          {
            title: '5 倍',
            subtitle: '提升服务半径',
          },
        ]}
        steps={[
          '用户在购买早餐时看到餐车的二维码显示添加该机构福利官好友可领取80元红包，遂扫码添加',
          '添加好友后立刻收到2条自动欢迎语（告知如何领取红包&红包小程序），当日11:30再次收到福利官发来的领红包邀请小程序，告知领完可直接线上开卡使用。[未领红包]当日晚19:10收到福利官发来的领红包&开卡提醒； [已领红包未开卡]当日晚19:20收到福利官发来的消息，需绑定银行卡到微信才可使用',
          '第二天和第三天都会在17点、19:30、19:40根据自己领红包和开卡的状态收到对应的引导消息',
          '第四天10:50不管是否开红包开卡，用户都会收到福利官发来的美团外卖福利消息，点击小程序开卡可领取180元红包',
          '用户会在添加好友的第二天收到福利官发来的群邀请卡片，告知群内还有80元红包以及各种其他抢红包的活动，如果未进群或在第三天、第四天的下午18:30再次收到群邀请卡片消息',
          '入群后会不定期收到福利官发来的多种联名卡、理财产品推荐信息',
          '向福利官咨询办卡、用卡、贷款、理财类问题，都会在当天得到回复，咨询过程中得到的回复非常专业',
        ]}
        features={[
          {
            icon: '30-1.svg',
            title: '多账号消息聚合',
            subtitle:
              '将原来需要大量人力管理的账号聚合在一个页面，使得1人可以管理数十个账号的消息',
          },
          {
            icon: '30-2.svg',
            title: '客户动态分组并分别触达',
            subtitle:
              '将原来需要每次群发前手工筛选客户范围的工作流程变成一次筛选动态适配，可根据用户添加的时间分组逐天群发消息，实现真正的SOP化',
          },
          {
            icon: '30-3.svg',
            title: '自动化邀请入群',
            subtitle:
              'RPA 助力提升运营效率，可以根据用户标签批量自动完成拉群动作，极大节省人力、提高入群率',
          },
          {
            icon: '30-4.svg',
            title: '高频触达',
            subtitle:
              'RPA 助力高效触达，每天进行3次以上社群群发和私信群发，保证营销信息的高频触达',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title: '工具赋能精细化 SOP 运营，开卡数万张，开卡率近50%',
          },
          {
            icon: '06',
            title: '2 人管理 15 个账号的消息应答，5 倍以上提高人的服务半径',
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
