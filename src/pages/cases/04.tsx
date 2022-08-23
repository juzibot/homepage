import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="一线明星自创食品品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-4"
        themeColor="#FC790D"
        title="一线明星自创食品品牌"
        brief="该品牌是明星自创食品品牌，是明星与 TOP 带货主播联名共创的食品电商品牌，私域主要用于沉淀电商平台已购用户并通过各类促销活动增进用户回到淘宝进行复购"
        datas={[
          {
            title: '1W+',
            subtitle: '零人工迁移好友数',
          },
          {
            title: '2775',
            subtitle: '日均聊天数',
          },
          {
            title: '2min',
            subtitle: '平均首次响应时长',
          },
        ]}
        steps={[
          '用户通过电商平台购买该自创品牌的食品后，在快递中看到包裹卡，提示加入明星宠粉群，有四重好礼（抽奖、试吃、明星见面会、红包），并附带客服的企业微信',
          '用户在电商平台购买该自创品牌的食品后，几天后会接到明星官方的电话，告知添加客服好友，可以领取优惠券/赠品/获得试吃资格，同意添加挂机后微信收到一条服务消息，点开后可以扫码添加',
          '添加好友后，用户会立刻收到欢迎语和群邀请链接，提示群内有”免费试吃”、“大额优惠券”等福利，在私信和群聊中发送“试吃”，会马上收到客服的回复的试吃申请海报',
          '如果用户未及时进群，会在 5 天后再次收到进群试吃的福利提醒，并附带入群链接',
          '用户进群后，会和其他9位刚进群的粉丝一起收到一条欢迎语，说明群规。在群内会不定期收到多条推送，内容类型包括拉朋友助力得试吃资格、最新淘宝优惠券等',
          '用户购物遇到问题时，找该自创品牌福利官都能快速得到反馈，即便在非工作时间也会立刻收到反馈'
        ]}
        features={[
          {
            icon: '4-1.svg',
            title: '高效的会员引流',
            subtitle:
              '原来需要人工电话引导用户添加企微，通过 API 加好友功能后，全部变为自动发送企微申请，极大地降低了激活沉默会员用户的成本',
          },
          {
            icon: '4-2.svg',
            title: '高频应答',
            subtitle:
              'RPA 助力应答效率，可自动发送多条欢迎语和入群链接',
          },
          {
            icon: '4-3.svg',
            title: '批量邀请加入群聊',
            subtitle:
              '所有未加入群聊的用户会进行二次邀请，增加用户的进群率',
          },
          {
            icon: '4-4.svg',
            title: '柔性发送入群欢迎语',
            subtitle:
              '入群后每满 10 人会收到一条统一的欢迎语，告知群规 / 领取福利的方式，减少对用户的打扰',
          },
          {
            icon: '4-5.svg',
            title: '定时群发',
            subtitle:
              'RPA 助力高效触达，每天一次配置后自动在多个时间群发内容',
          },
          {
            icon: '4-6.svg',
            title: '自动回复、分时段回复',
            subtitle:
              'RPA 助力效率应答，当用户发送指定关键词后，可自动发送预设的话术，非工作时段也能第一时间给到客户应答',
          },
          {
            icon: '4-7.svg',
            title: '消息聚合',
            subtitle:
              '将多个账号的消息聚合在一个聊天页面，使得一人可管理两万+粉丝的消息应答',
          },
          {
            icon: '4-8.svg',
            title: '自动化拉群',
            subtitle:
              'RPA 助力提升运营效率，，使用入群关键词后，用户 24 小时随时发送带有关键词的消息，都会马上收到对应的入群链接',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title: '0 人工规模化将一万+意向线索通过句子秒回的API加好友导入企业微信，总涨粉率高达 38.87%',
          },
          {
            icon: '02',
            title: '用户已回复聊天占比达 100%，日均聊天数达 2775 条，平均首次响应时长可达 2min，首次响应 30s 内应答率可达 100%，客服处理效率得到显著提升',
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
