import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某连锁披萨品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-13"
        themeColor="#FC790D"
        title="某连锁披萨品牌"
        brief="该品牌是一家主做西餐快餐的连锁餐厅，私域是通过免费菜等福利将线上和线下店的流量引入企微和社群，然后再通过高频次的优惠活动引导用户在小程序商城中复购"
        datas={[
          {
            title: '10W',
            subtitle: '零人工运营用户',
          },
          {
            title: '1000',
            subtitle: '零人工管理微信群',
          },
          {
            title: '2 倍',
            subtitle: '提升消息触达率',
          },
        ]}
        steps={[
          '用户在店铺或外卖通过小程序点餐支付前，被提示“输入暗号可得免费菜品”，用户点击获取暗号后弹出二维码添加福利官企业微信',
          '未在店点餐的用户，关注该品牌公众号后欢迎语告知回复关键词，可以添加福利官进群领免费菜，用户回复关键词后得到有福利官二维码的图片回复',
          '添加企业微信后会收到欢迎语告知加入群聊看公告获取暗号特权，而后发送群二维码被邀请进群，店铺点餐或外卖点餐的用户被邀请进“线下店福利群”，而公众号关注的用户则被邀请进“会员福利群”',
          '用户在群内或向福利官发送“暗号”或“晒图返券”后，立刻会有福利官回复当月暗号、发送 120 - 20 优惠券。暗号特权每个月都会改变，所以用户需要一直在群里才能持续享受优惠',
          '用户在群里每天都会收到福利官发送的抖音直播观看邀请海报，私聊消息每周会收到一条抖音直播邀约消息或者促销活动消息',
        ]}
        features={[
          {
            icon: '13-1.svg',
            title: '关键词自动应答',
            subtitle: '高频被咨询的消息有机器人完成，立即回复用户',
          },
          {
            icon: '13-2.svg',
            title: '无限制消息群发',
            subtitle:
              '突破企业微信每天只能群发 1 次的限制，更高频次的为用户推送活动信息',
          },
          {
            icon: '13-3.svg',
            title: '分层运营',
            subtitle:
              '把真实在门店产生消费的用户和仅关注未消费的用户分开管理，实现更精细化的私域运营',
          },
        ]}
        achievements={[
          {
            icon: '08',
            title:
              '5 个福利官企业微信上的 10 万用户、近 1000 个微信群的消息无需人工管理，均由机器完成',
          },
          {
            icon: '03',
            title: '将触达用户的消息总量提升 2 倍以上，最终转化效果大幅提升',
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
