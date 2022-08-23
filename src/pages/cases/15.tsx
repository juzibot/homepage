import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某国内头部家电品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-15"
        themeColor="#0555FF"
        title="某国内头部家电品牌"
        brief=" 该家电品牌为电动牙刷业务线单独开辟私域，主要用来通过营销活动增进用户在微信生态的复购"
        datas={[
          {
            title: '4 倍',
            subtitle: '提升人效',
          },
          {
            title: '3W+',
            subtitle: '人均服务客户数',
          },
          {
            title: '10min',
            subtitle: '平均响应时长',
          },
        ]}
        steps={[
          '用户在抖音直播间、淘宝、京东等商城购买电动牙刷后，在快递中看到包裹卡，添加福利官西酱好友，可以免费领取电动牙刷头；同时会接到来自官方的电话，挂机后微信收到一条服务消息，点开后可以扫码添加客服好友；',
          '添加好友后，立刻收到欢迎语告知点击第二条消息的链接领取优惠券，领取后可免费兑换礼品；',
          '大约 30 分钟后告知发送「进群」可加入粉丝群，领取320元优惠券，每天分享变美知识、福利优惠、签到领积分兑换好礼，回复关键词后立刻得到群邀请卡片',
          '用户在朋友圈看到好友发的直播打卡 0 元领电动牙刷的海报，扫码进群后，获知添加客服可 0 元体验按摩椅等产品，还能继续参与裂变助力，于是扫码进群',
          '加入群聊后，用户立刻被@收到一条欢迎语告知群规和优惠券领取方式，群内每天 10 点、12 点和 15 点分别收到早安知识、打卡积分消息、直播通知',
          '用户观看抖音直播，依据粉丝团等级，购买指定商品后，还能获得大额返现。返现额度随粉丝团等级增加',
          '向客服发送消息咨询产品问题会在半小时内被回复，回复速度很快内容非常专业'
        ]}
        features={[
          {
            icon: '15-1.svg',
            title: '高效的会员引流',
            subtitle:
              '把原来沉默无法双向互动的手机号线索，通过 AI 外呼 + API 批量自动添加成为企业微信好友，零人力成本解决私域冷启动流量池搭建的问题',
          },
          {
            icon: '15-2.svg',
            title: '多账号消息聚合',
            subtitle: '将原来需要大量人力管理的账号聚合在一个页面，使得 1 人可以管理数十个账号的消息',
          },
          {
            icon: '24-3.svg',
            title: '嵌入会话页面的话术库',
            subtitle:
              '原来需要重复编辑且无法标准化应答的内容，形成统一的回复规范一键发送给用户，提升应答专业度和效率',
          },
          {
            icon: '15-4.svg',
            title: '自动化邀请入群',
            subtitle:
              'RPA 助力提升运营效率，可以根据消息关键词或用户标签批量自动完成拉群动作，极大节省人力、提高入群率',
          },
          {
            icon: '15-5.svg',
            title: '关键词自动应答',
            subtitle: 'RPA 助力应答效率，借由关键词回复功能，可实现常规问题的自动回复，运营人员仅需对个性提问进行专项回复',
          },
          {
            icon: '15-6.svg',
            title: '高频触达',
            subtitle:
              'RPA 助力高效触达，每天进行 3 次以上社群群发私信群发，保证营销信息的高频触达',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title:
              '3 人管理十余个账号上数万客户的消息应答和营销触达，极大提高了人效比',
          },
          {
            icon: '06',
            title: '将触达用户的消息总量提升 4 倍以上，大幅提升最终转化效果',
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
