import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某市级民政机关 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-32"
        themeColor="#0DE492"
        title="某市级民政机关"
        brief="该养老服务平台由某市民政机关开办，是养老相关政策落实情况线上受理、投诉、咨询及建议的窗口；主要是通过用户添加服务企业微信，提供专属线上客服服务"
        datas={[
          {
            title: '900W',
            subtitle: '用户自动迁移',
          },
          {
            title: '1000+',
            subtitle: '日均回复消息数',
          },
          {
            title: '81%',
            subtitle: '消息 30s 应答率',
          },
        ]}
        steps={[
          '用户在线下看到公告或在社区工作人员的引导下，关注平台公众号，收到添加微信提示，点击选择居住区域后，跳出该地区服务人员企微二维码，扫码添加后会被立刻通过',
          '用户微信收到一条服务消息，显示为政务机构官方账号可提供用卡咨询等服务，遂扫码添加企业微信',
          '添加企微后，马上收到3条提示消息，说明客服的业务办理范围、工作时间',
          '用户添加客服一段时间后，收到老年人护理调查问卷，填写后会被邀请添加体验官微信。未来会不定时收到其他类调研问卷，并被告知优质调研回复有证书类奖励',
          '用户咨询期间，询问不同类的问题，会被提示转接给不同类客服处理，但不需添加其他微信，仍在同一界面即可接到回复',
        ]}
        features={[
          {
            icon: '32-1.svg',
            title: '规模化线索迁移',
            subtitle:
              '原来需要人工手动输入手机号添加的客户线索，使用 Excel 上传到系统由机器自动按规则执行添加，极大的节省人力成本',
          },
          {
            icon: '32-2.svg',
            title: '嵌入会话页面的话术库',
            subtitle:
              '原来需要重复编辑且无法标准化应答的内容，形成统一的回复规范一键发送给用户，提升应答专业度和效率',
          },
          {
            icon: '32-3.svg',
            title: '客户转接',
            subtitle:
              '原来需要让用户反复添加不同人员完成各类问题的咨询，使用句子的分配功能后，把会话变成可在企业内部流转的效率工单，提高服务效率',
          },
          {
            icon: '32-4.svg',
            title: '无限次群发',
            subtitle:
              '突破企微原有每天1次的群发限制，每天进行3次以上私信群发，保证营销信息的高频触达',
          },
          {
            icon: '32-5.svg',
            title: '无限条数欢迎语',
            subtitle: '突破企业微信 2 条欢迎语限制，自动发送多条内容',
          },
        ]}
        achievements={[
          {
            icon: '06',
            title: '自动化完成900万线索量的筛选，并添加意向用户，0人力成本',
          },
          {
            icon: '05',
            title: '平均每人每日回复 1000+ 消息，完成 200+ 用户咨询',
          },
          {
            icon: '03',
            title: '消息 30s 内应答率达到 81%，大幅提升服务效率',
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
