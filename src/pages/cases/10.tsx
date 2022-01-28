import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某头部潮流玩具品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-10"
        themeColor="#6547FF"
        title="某头部潮流玩具品牌"
        brief="该品牌是目前中国头部盲盒潮流玩具品牌，他们的私域是将线下的用户导入企微和社群，然后通过高频词的群发引导用户进入小程序下单"
        datas={[
          {
            title: '7 倍',
            subtitle: '提升人效',
          },
          {
            title: '15,000',
            subtitle: '人均服务客户数',
          },
          {
            title: '6 倍',
            subtitle: '提升消息触达率',
          },
        ]}
        steps={[
          '用户在视频号直播中听到主播提示，进入直播群有满减优惠券和抽奖，于是在左上角添加客服企微，然后会立刻添加成功，并且收到入群二维码和欢迎语说明入群领券、抽奖',
          '用户在线下门店看到广告海报，被告知注册会员可以累计积分用于兑换礼品，于是扫二维码关注公众号。被提示进入小程序可以在线抽盲盒，在抽盒机页面可以扫码进入抽盒互助社群',
          '用户入群后会收到欢迎语，介绍群规和群内活动。每天在群内会收到 2 - 3 次盲盒商品推送（9 点、18 点）和 1 条精美壁纸推送，并附加说明，添加客服领取更多壁纸',
          '用户添加客服后立刻收到一条欢迎语 ，根据欢迎语提示的关键词的回复，用户可以获取壁纸或者直接进入对应的福利社群，并且会被提示在客服朋友圈有定期福利发放',
          '当群友在群内发链接/小程序/广告信息，会被立刻通知违规并移出群聊',
          '除了群内信息外，用户不定时在私信中收到客服发来感兴趣的活动信息',
          '用户在咨询各类盲盒情况时，客服也会马上做出详细的回复',
        ]}
        features={[
          {
            icon: '8-2.svg',
            title: '嵌入会话页面的话术库',
            subtitle:
              '原来需要重复编辑且无法标准化应答的内容，形成统一的回复规范一键发送给用户，提升应答专业度和效率',
          },
          {
            icon: '8-3.svg',
            title: '无限次群发',
            subtitle:
              '突破企微原有每天 1 次的群发限制，每天进行至少 2 次以上社群群发和私信群发，保证营销信息的高频触达',
          },
          {
            icon: '10-1.svg',
            title: '自动化拉群',
            subtitle: '原来需要人工手动逐个邀请的用户，使用关键词邀请加入群聊',
          },
          {
            icon: '10-2.svg',
            title: '自动化的社群运营',
            subtitle:
              '无需人工时刻监督，机器基于预设的规则（消息内容、链接、小程序）自动执行社群维护，自动移除违规用户并加入全企业共享的黑名单',
          },
          {
            icon: '10-3.svg',
            title: '关键词自动应答',
            subtitle:
              '原来需要大量人力对用户的常规问题进行重复性回答的，借由关键词回复功能，可实现常规问题的自动回复，运营人员仅需对个性提问进行专项回复',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title: '2 人管理 15 个账号下 3 万个用户的消息，极大地提高了人效比',
          },
          {
            icon: '06',
            title: '将触达用户的消息总量提升 6 倍以上，大幅提升最终转化效果',
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
