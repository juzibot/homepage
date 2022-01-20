import { isBrowserChrome } from '@src/utils/isBrowserChrome';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { FeatureHeroPage } from '@src/components/features/FeatureHeroPage';
import { FeatureDescription } from '@src/components/features/FeatureDescription';
import { FeatureAppealBar } from '@src/components/features/FeatureAppealBar';
import AppealBar from '@src/components/index/AppealBar';
import FeatureBar from '@src/components/features/FeatureBar';
import Seo from '@src/components/common/Seo';

const ManagementPage: NextPage = () => {
  const [isChrome, toggleChrome] = useState(true);
  useEffect(() => {
    toggleChrome(isBrowserChrome());
  }, []);
  return (
    <>
      <Seo page="feature-management" />
      <div className="wrapper feature management">
        <div className={`bg ${!isChrome && 'moz'}`}></div>
        <div
          className="container"
          style={{
            backgroundImage: `url('https://cdn-official-website.juzibot.com/images/feat-04.svg')`,
          }}
        >
          <FeatureHeroPage
            title="高效管理"
            brief="句子互动提供多维度、多分级的权限管理，无论是企业内部各级消息的传达、权限的赋予，还是运营过程中消息的高效分配回复，亦或是运营后对员工的绩效管理。"
            docsUrl="/"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ma-01.png',
                title: '10 倍',
                subtitle: '组织管理效率',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ma-02.png',
                title: '100%',
                subtitle: '员工权限覆盖率',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ma-03.png',
                title: '每轮',
                subtitle: '对话绩效分析',
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-description">
        <div className="container">
          <FeatureDescription
            firstTitle="组织效率是生产力的保障"
            firstSubtitle="句子互动有丰富的头部品牌服务经验，深知管理安全和组织效率是生产力的保障。我们提供一套覆盖 10 人到千人以上团队管理需求的权限配置系统。
            我们提供从功能使用、操作权限、可见数据等多个维度的权限管理配置，提供针对每轮对话的效率绩效分析，为企业管理保驾护航。"
            secondTitle="高细粒度的权限管理"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ma-04.svg',
                title: '自由配置角色权限全面满足管理需求',
                subtitle:
                  '提供以功能点为单元的角色权限管理系统，把越权操作、数据泄露风险降到最低',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ma-05.svg',
                title: '多组别业务独立执行',
                subtitle:
                  '把并行业务以组为单元分开，组别间数据和业务安全隔离，又能被集团统一管理',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ma-06.svg',
                title: '细化到消息查看和发送的权限管理',
                subtitle:
                  '所有会话集中分配，员工可在查看和应答权限内会话消息，支持仅应答话术库内容',
              },
            ]}
            photo="https://cdn-official-website.juzibot.com/images/icons/features/ma-07.png"
            photoPosition="left"
          />
        </div>
      </div>

      <div className="wrapper feature-appeal">
        <div className="container">
          <FeatureAppealBar
            title="让每轮沟通效率最大化"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ma-08.png',
                title: '统计员工各时间跨度的对话消息总量',
                subtitle: '计算每轮对话的响应效率和质量',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ma-09.png',
                title: '实时监控潜在风险对话，提供秒级',
                subtitle: '敏感词、拉黑、超时应答预警通知',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ma-10.png',
                title: '提供多维度沟通数据的排行榜，',
                subtitle: '定时推送到指定群',
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-bar">
        <div className="container">
          <h1>更多提效能力</h1>
          <FeatureBar hideTitle="高效管理" />
        </div>
      </div>

      <div className="wrapper appeal-bar">
        <div className="container">
          <AppealBar />
        </div>
      </div>
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

export default ManagementPage;
