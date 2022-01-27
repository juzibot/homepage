import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某饮料新消费头部品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-1"
        themeColor="#FF6058"
        title="某饮料新消费头部品牌"
        brief="该品牌通过优惠券将各渠道用户引入企业微信，并沉淀在社群。通过高频的优惠活动推送，引导用户进入小程序商城购买产品"
        datas={[
          {
            title: '100000',
            subtitle: '人均服务客户数',
          },
          {
            title: '10',
            subtitle: '人均管理企微数',
          },
          {
            title: '30%',
            subtitle: '零人工入群率',
          },
        ]}
        steps={[
          '用户在快递包裹卡、线下冰柜广告、公众号推送内容下，看到 30 元 - 100 元不等的优惠券，扫码添加到该品牌福利官企业微信',
          '添加后，用户立刻收到福利官的多条自动欢迎语（其中包含部分优惠券）和入群邀请卡片（提示告知必须入群才能领取剩余优惠券）',
          '用户点击入群邀请卡片后，该品牌福利官通过自动群欢迎语发放剩余优惠券；用户在群内每天收到 5 条以上的消息（包括产品推荐、拼团活动、会员购买等），引导用户访问小程序购买',
          '用户在私聊中，也会持续收到每天 1 条的消息，且推送商品和日常饮用口味较为接近，引导用户访问小程序购买',
        ]}
        features={[
          {
            icon: 'blue-1.svg',
            title: '渠道二维码',
            subtitle:
              '精准定位用户是从快递包裹卡、线下冰柜广告、公众号推送的哪个渠道添加福利官的',
          },
          {
            icon: 'orange-1.svg',
            title: '无限条数欢迎语',
            subtitle:
              '突破企业微信 2 条欢迎语限制，自动发送多条内容和入群邀请卡片',
          },
          {
            icon: 'green-1.svg',
            title: '定时群发',
            subtitle:
              '突破企业微信每天只能群发 1 次消息的限制，每天一次配置后自动在多个时间群发内容',
          },
          {
            icon: 'purple-1.svg',
            title: '以 unionid 为核心的 API 柔性群发',
            subtitle:
              '打通企业微信和小程序数据，实现用户能够依据其小程序访问行为收到其感兴趣的消息',
          },
        ]}
        achievements={[
          {
            icon: '01',
            title: '零人工成本前提下，入群率 30% 以上，远高于行业水平',
          },
          {
            icon: '02',
            title:
              '半自动化私域运营，实现 1 人管理 10 个企业微信、10 万粉丝的消息应答',
          },
          {
            icon: '03',
            title: '将触达用户的消息总量提升 5 倍以上，大幅提升最终转化效果',
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
