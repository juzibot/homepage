import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某会员制高端医院品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-28"
        themeColor="#0555FF"
        title="某会员制高端医院品牌"
        brief="该品牌私域主要为宝妈、医美人群，做产前产后互动和HPV预约"
        datas={[
          {
            title: '75%+',
            subtitle: '零人工入群率',
          },
          {
            title: '4 倍',
            subtitle: '提升消息触达率',
          },
        ]}
        steps={[
          '用户在医院就诊时被引导关注该品牌医院公众号，关注后收到自动欢迎语告知，回复粉丝群、变美等关键词可加入群聊享受官方福利、医生直播分享等福利，用户扫码后添加客服为好友',
          '用户添加后立刻收到一条消息欢迎语，告知可以回复“年终盛典”参加双十二活动领取优惠券、回复想要加入的群聊关键词加入群聊；',
          '用户回复“年终盛典”立刻收到一条询问需要的产品优惠券，回复对应数字即可领取，用户回复数字后立刻收到优惠券小程序',
          '用户回复粉丝群关键词后，立刻收到群邀请卡片（群聊包括粉丝福利群、孕妈妈群、产后群）',
          '加入群聊后，每天中午、下午和晚上会分别收到一次客服发来的疫苗预约、健康科普、直播邀约、活动优惠等信息',
          '向客服咨询问题，按照制定的序号回复相关问题都能得到详细的解答'
        ]}
        features={[
          {
            icon: '28-1.svg',
            title: '渠道二维码',
            subtitle:
              '精准定位用户是在公众号回复哪些关键词添加客服',
          },
          {
            icon: '28-2.svg',
            title: '关键词自动响应',
            subtitle:
              '原来需要大量人力重复回答常规问题、重复邀请用户进群的，借由关键词回复功能，快速完成应答或者拉入对应群聊，极大的降低人力成本',
          },
          {
            icon: '27-3.svg',
            title: '无限次群发',
            subtitle:
              '突破企微原有每天 1 次的群发限制，每天进行 3 次以上社群群发和私信群发，保证营销信息的高频触达',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title:
              '私域运营实现链路自动化，零人工成本下粉丝入群率超过 75%',
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
