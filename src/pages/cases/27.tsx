import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某连锁药店品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-27"
        themeColor="#FC790D"
        title="某连锁药店品牌"
        brief="该品牌主要做连锁药店和线上问诊业务，私域为签约医生的患者服务和购药引导"
        datas={[
          {
            title: '10 倍',
            subtitle: '提升人效',
          },
          {
            title: '6W',
            subtitle: '人均服务客户数',
          },
          {
            title: '3 倍',
            subtitle: '提升消息触达率',
          },
        ]}
        steps={[
          '用户在医院看病时看到医生桌面摆放的二维码，被告知扫描可以添加健康管家，随时咨询健康问题还会分享科普知识',
          '添加健康管家好友后，立刻收到3条招呼语（自我介绍、提供咨询、分享健康知识）',
          '向管家咨询问题会立刻收到一条回复（管家正在赶来，请稍等），10 分钟左右以后会收到对问题的解答或者告知问题需要找专业的医生咨询，可以搜索该品牌小程序来咨询',
          '每天 11 点、14 点和 17 点都会收到健康管家发来的健康知识和医生直播推荐'
        ]}
        features={[
          {
            icon: '27-1.svg',
            title: '高频应答',
            subtitle:
              'RPA 助力应答效率，自动发送多条内容',
          },
          {
            icon: '27-2.svg',
            title: '关键词自动应答',
            subtitle:
              'RPA 助力应答效率，可以由机器人第一时间给到响应，提高应答效率和用户体验',
          },
          {
            icon: '27-3.svg',
            title: '高频触达',
            subtitle:
              'RPA助力 高效触达，每天进行 3 次以上社群群发和私信群发，保证营销信息的高频触达',
          },
        ]}
        achievements={[
          {
            icon: '06',
            title:
              '1 人管理数十个企业微信上数万用户的消息，极大提高了人效比',
          },
          {
            icon: '03',
            title: '专业和高效的服务体验，使得客户30日留存85%以上',
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
