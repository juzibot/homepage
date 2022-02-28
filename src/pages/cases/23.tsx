import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某本地化社群平台 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-23"
        themeColor="#FC790D"
        title="某本地化社群平台"
        brief="该品牌私域业务是通过本地 KOL 拉取的区域性流量，导入社群后，通过高频的岗位信息推送来引导用户成功入职合作平台"
        datas={[
          {
            title: '250W',
            subtitle: '零人力运营用户数',
          },
          {
            title: '10 倍',
            subtitle: '提升消息触达率',
          },
          {
            title: '62%',
            subtitle: '零人工入群率',
          },
        ]}
        steps={[
          'KOL 直接邀请：用户被本地 KOL 邀请加入本地工作推荐群，群内每天会收到多条平台方小助理的工作推荐小程序；或用户入群后次日会收到来自平台方小助理的好友请求，请求显示通过好友可以得到更多的工作推荐机会',
          '好友邀请链路：用户在朋友圈看到朋友分享的海报，添加小助手可以领红包还可以加入本地工作推荐群，遂扫码添加',
          '添加好友后立刻收到多条欢迎语，包含自我介绍、邀请加入本地工作推荐群的邀请卡片、领取10元红包的链接和平台小程序，点击领取10元红包的链接提示需要分享到朋友圈才可以领取',
          '如果未加入群聊会在接下来的一天内收到多次群邀请卡片消息，加入群聊后不再收到邀请消息',
          '加入群聊后，从早7点起到晚22点，会收到小助手发来的数十条工作推荐小程序',
          '群内有其他群友发送小程序、链接、图片、大段文字，会被小助手警告违反群规并移除群聊',
        ]}
        features={[
          {
            icon: '23-1.svg',
            title: 'API 接口自动发送消息',
            subtitle:
              '突破企微原有每天1次的群发限制，无需人工操作，直接调用API接口每天进行 10 次以上社群群发和私信群发，保证营销信息的高频触达',
          },
          {
            icon: '23-2.svg',
            title: '自动邀请入群',
            subtitle:
              '原来需要大量人工回复重复的消息、手动邀请入群的用户，可以根据消息关键词自动完成拉群、回复动作，极大提高入群率、节省人力',
          },
          {
            icon: '23-3.svg',
            title: '规模化获客',
            subtitle:
              '原来需要大量人工在群内手动添加的好友，直接由机器执行添加动作，极大地节省人力成本',
          },
          {
            icon: '23-4.svg',
            title: '自动化的社群运营',
            subtitle:
              '无需人工时刻监督，机器基于预设的规则（消息内容、链接、小程序）自动执行社群维护，自动移除违规用户并加入全企业共享的黑名单',
          },
        ]}
        achievements={[
          {
            icon: '08',
            title: '全自动化运营 250w 私域用户，人力成本几乎降低为零',
          },
          {
            icon: '03',
            title:
              '每日通过 API 接口将触达用户的消息总量提升 10 倍以上，大幅提升最终转化效果',
          },
          {
            icon: '06',
            title: '几乎零人力成本，完成数百万用户的增长和批量入群，入群率达 62%',
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
