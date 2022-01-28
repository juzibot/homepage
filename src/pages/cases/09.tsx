import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某国际高端护肤品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-9"
        themeColor="#FF6058"
        title="某日本著名化妆品品牌"
        brief="该品牌，私域主要用来维护线下门店客户，并依靠营销活动增进用户在微信生态的复购"
        datas={[
          {
            title: '3 倍',
            subtitle: '提升消息触达率',
          },
          {
            title: '30%',
            subtitle: '提升转化率',
          },
          {
            title: '80%',
            subtitle: '提升消息回复率',
          },
        ]}
        steps={[
          '用户在线下店看到广告，扫码添加企微，立马领取护肤小样和回柜卡，于是扫码添加到导购企微',
          '添加好友后，用户立刻收到2条欢迎语，被告知领取回归卡的福利额度和使用方法，以及小样的试用教程',
          '用户在添加导购第一周会收到导购私信，获知填写信息还能额外领取肌肤护理券，到店即可试用。第二周再次收到私信，介绍某品牌线下店新品和买赠活动',
          '两周过后，用户会在私信不定时收到新品促销活动和社群邀请，点击即可进入社群',
          '有新品信息或活动预告时，用户在群内每天 12 点、14 点会收到多条实惠护肤品推荐',
        ]}
        features={[
          {
            icon: '8-1.svg',
            title: '多账号消息聚合',
            subtitle:
              '将原来需要大量人力管理的账号聚合在一个页面，使得 1 人可以管理数十个账号的消息',
          },
          {
            icon: '8-2.svg',
            title: '嵌入会话页面的话术库',
            subtitle:
              '原来需要重复编辑且无法标准化应答的内容，形成统一的回复规范一键发送给用户，提升应答专业度和效率',
          },
          {
            icon: '9.svg',
            title: '按时间线自动执行运营动作',
            subtitle:
              '原来需要人工筛选用户添加时间发送的消息可由机器人基于预设时间线自动执行消息发送，最长可预设 30 天的发送规则，涵盖文本、图片、链接、文件和入群邀请',
          },
          {
            icon: '8-3.svg',
            title: '无限次群发',
            subtitle:
              '突破企微原有每天 1 次的群发限制，每天进行至少 2 次以上社群群发和私信群发，保证营销信息的高频触达',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title: '将触达用户的消息总量提升 3 倍以上，大幅提升最终转化效果',
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
