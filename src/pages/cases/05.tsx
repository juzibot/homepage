import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某减肥代餐一线品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-5"
        themeColor="#0555FF"
        title="某减肥代餐一线品牌"
        brief="该品牌为减肥代餐一线品牌，私域主要通过营养师做购后服务和复购的引导"
        datas={[
          {
            title: '30%',
            subtitle: '30s 内应答率',
          },
          {
            title: '900',
            subtitle: '日均发消息数',
          },
          {
            title: '90%',
            subtitle: '已回复聊天占比',
          },
          {
            title: '10W+',
            subtitle: '零人工迁移好友数',
          },
        ]}
        steps={[
          '用户购买该品牌产品后会收到随包的包裹卡，或接到电话告知添加营养师企业微信可以得到额外的产品赠送以及专注的健康咨询，遂添加了营养师企业微信号',
          '扫描包裹卡添加好友后会立刻收到消息，要求告知营养师手机号才能领取赠品',
          '营养师会在当天发送消息询问购买了什么产品，告知后会立刻收到自己购买产品的使用方法',
          '而后的时间内向营养师咨询任何健康问题或者产品使用方法都会在半小时内容得到解答',
        ]}
        features={[
          {
            icon: '5-1.svg',
            title: '打通 AI 外呼自动添加好友',
            subtitle:
              '自动向电话中有意向的客户发送好友请求，将粉丝平均分配给旗下的 30 个营养师账号',
          },
          {
            icon: '5-2.svg',
            title: '嵌入会话页面的话术库',
            subtitle:
              '营养师可以根据客户购买产品一键将预设好的话术内容发送到会话',
          },
          {
            icon: '5-3.svg',
            title: '消息聚合',
            subtitle: '营养师可以在 PC 端根据客户回复的消息快速为其设置包含手机号、购买产品、来源渠道的备注名',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title:
              '首次 30s 内响应比例超过 30%，日均发送消息数可达 900，已回复聊天占比达 90%',
          },
          {
            icon: '02',
            title:
              '规模化完成 10万 意向手机号线索向企业微信好友的迁移，转化超过 35%',
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
