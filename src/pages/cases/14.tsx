import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某国内电子烟一线品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-14"
        themeColor="#6547FF"
        title="某国内电子烟一线品牌"
        brief="该品牌是国内头部的电子烟品牌，私域主要用来承接售后咨询、加盟入驻、购买引导等业务，将售后客户沉淀成企业数据资产。"
        datas={[
          {
            title: '25W',
            subtitle: '人均服务客户数',
          },
          {
            title: '8000',
            subtitle: '日均发消息数',
          },
          {
            title: '10min',
            subtitle: '平均响应时长',
          },
          {
            title: '70%',
            subtitle: '30s 内应答率',
          },
        ]}
        steps={[
          '用户在门店、官网、公众号、商品包装上看到二维码，添加客服企微账号可以提供购买、售后等服务',
          '添加客服账号后，咨询任何产品介绍、附近门店、商品坏损等问题都可以在15分钟内被回复，问题咨询完后会收到对客服的评价邀请',
          '客服平均每个月都会发送活动促销、抽奖等信息，消息末尾会带有“不想接收此类消息可回复 TD”，回复后没再收到相似信息',
        ]}
        features={[
          {
            icon: '14-1.svg',
            title: '消息聚合',
            subtitle:
              '把 80 个企业微信账号的消息聚合在一个页面，由4个客服集中提供服务',
          },
          {
            icon: '14-2.svg',
            title: '嵌入会话页面的话术库',
            subtitle: '客服可根据顾客发送的消息将预设的应答话术一键发送到会话',
          },
          {
            icon: '14-3.svg',
            title: '基于用户发送关键词打标签',
            subtitle:
              '根据用户会话消息，把用户分成潜在客户、消费客户、门店店长、加盟商等类型或打上不同的标签（如回复 TD 用户打上“不想被打扰”的标签不再发送广告消息）',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title:
              '客服服务效率大幅度提升，4 个人管理 80 个企业微信账号上的 100 万用户，平均每人每天应答来自 2000 个客户的 8000 条消息',
          },
          {
            icon: '06',
            title:
              '90% 以上客户被回复，首次应答时间小于 15 分，30s 应答率 70%，平均响应时间 10 分钟',
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
