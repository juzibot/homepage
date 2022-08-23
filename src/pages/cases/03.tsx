import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某传统冲泡饮料头部品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-3"
        themeColor="#FC790D"
        title="某传统冲泡饮料头部品牌"
        brief="该传统冲泡饮料头部品牌的私域，主要做新品推荐做复购引导"
        datas={[
          {
            title: '3 倍',
            subtitle: '提升人效',
          },
          {
            title: '5 倍',
            subtitle: '提升消息触达率',
          },
          {
            title: '30%',
            subtitle: '提升转化率',
          },
        ]}
        steps={[
          '用户在抖音直播间、淘宝、京东等商城购买产品后，在快递包裹中看到卡片，添加好友可以领取优惠券大礼包，扫码添加客服为好友',
          '添加客服后，用户会立刻收到一条有赞店铺会员注册链接和福利群的二维码，并被告知入会领取优惠券，进群查看更多活动',
          '用户加入群聊后立刻收到被 @ 的欢迎语，在群内每天会收到 2 - 3 次的活动介绍和商城小程序',
        ]}
        features={[
          {
            icon: 'green-3.svg',
            title: '高频触达',
            subtitle:
              'RPA 助力高效触达，每天进行 2 次以上社群群发和私信群发，保证营销信息的高频触达',
          },
          {
            icon: 'orange-3.svg',
            title: '加好友多条欢迎语',
            subtitle:
              '原来需要大量人力对用户进行重复性回答的，借多条欢迎语，可实现常规问题的自动回复，运营人员仅需对个性提问进行专项回复',
          },
          {
            icon: 'blue-3.svg',
            title: '消息聚合',
            subtitle:
              '将多个账号的消息聚合在一个聊天页面，使得一人可管理数万粉丝的消息应答',
          },
          {
            icon: 'orange-4.svg',
            title: '柔性发送入群欢迎语',
            subtitle:
              '入群后每满 10 人会收到一条统一的欢迎语，告知群规 / 领取福利的方式，减少对用户的打扰',
          },
          {
            icon: 'green-4.svg',
            title: '定时群发',
            subtitle:
              'RPA 助力高效触达，每天一次配置后自动在多个时间群发内容',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title: '将触达用户的消息总量提升 2 倍以上，大幅提升最终转化效果',
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
