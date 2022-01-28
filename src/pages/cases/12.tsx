import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某韩国时装零售头部品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-12"
        themeColor="#BB3DFF"
        title="某韩国时装零售头部品牌"
        brief="该品牌是韩国时装零售巨头，私域业务是将各平台已购用户沉淀进入企微和社群，然后分配给各大区的线上导购。通过高频次的营销活动推送，引导用户进入小程序商城复购"
        datas={[
          {
            title: '5W',
            subtitle: '每月 AI 外呼涨粉数',
          },
          {
            title: '100%',
            subtitle: '已回复聊天占比',
          },
          {
            title: '250+',
            subtitle: '统一管理账号数',
          },
        ]}
        steps={[
          '用户在该品牌有赞店铺、微信小程序购买产品后会接到官方的电话，告知加搭配师好友可以获得 2.5 - 3.5 折券，享受更多社群的优惠福利和收获穿搭资讯，挂机后用户在服务通知里看到搭配师的企微二维码',
          '添加好友后，会立刻收到一条文本欢迎语告知福利领取方式、一条小程序领取优惠券以及一张加入群聊的二维码',
          '10 天后会告知服务升级，接下来有另一位更专业的搭配师提供服务',
          '如果未加入群聊，还会定期收到搭配师的群聊邀请',
          '加入群聊后，每天分别在 9 点和 23 点收到早安、晚安问候，其他时段每 2 小时会收到一条商品推荐小程序；在私信中也会不定时收到搭配师发送的促销活动和商品推荐',
          '购买过程中遇到问题，找搭配师可以很快得到回复，搭配师可以不用问就知道所有订单信息',
        ]}
        features={[
          {
            icon: '12-1.svg',
            title: '打通 AI 外呼自动添加好友',
            subtitle:
              '自动向电话中有意向的客户发送好友请求，全程不需要人工参与',
          },
          {
            icon: '12-2.svg',
            title: '无限条数欢迎语',
            subtitle: '突破企业微信 2 条欢迎语限制，自动发送多条内容和入群邀请',
          },
          {
            icon: '12-3.svg',
            title: '定时群发',
            subtitle:
              '突破企业微信每天只能群发 1 次消息的限制，每天一次配置后自动在多个时间群发内容',
          },
          {
            icon: '12-4.svg',
            title: '批量邀请加入群聊',
            subtitle:
              '将所有未加入群聊的用户筛选进入动态的分层，定期邀请用户加入群聊',
          },
          {
            icon: '12-5.svg',
            title: '打通内部小程序后台',
            subtitle:
              '将小程序后台嵌入会话侧边栏，实时查看客户购物轨迹、订单信息和消费历史，提供精准的服务',
          },
          {
            icon: '12-6.svg',
            title: '多区域云导购账号集中管理',
            subtitle:
              '客户由集团集中唤醒添加后，分配给各大区的云导购提供服务，集团可操作每个大区、每个云导购账号直接发送消息',
          },
        ]}
        achievements={[
          {
            icon: '07',
            title:
              '3 人管理 25 个账号下 5 万个用户的消息，平均 1.3 分钟内即可应答，极大地提高了人效比',
          },
          {
            icon: '03',
            title: '2 人管理 15 个账号下 3 万个用户的消息，极大地提高了人效比',
          },
          {
            icon: '02',
            title: '自动化激活会员用户，通过 AI 电话的激活引导，添加率近 30%',
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
