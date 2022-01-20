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

const DataCenterPage: NextPage = () => {
  const [isChrome, toggleChrome] = useState(true);
  useEffect(() => {
    toggleChrome(isBrowserChrome());
  }, []);
  return (
    <>
      <Seo page="feature-data-center" />
      <div className="wrapper feature data-center">
        <div className={`bg ${!isChrome && 'moz'}`}></div>
        <div
          className="container"
          style={{
            backgroundImage: `url('https://cdn-official-website.juzibot.com/images/feat-05.svg')`,
          }}
        >
          <FeatureHeroPage
            title="数据管理中心"
            brief="把全域数据汇总在数据管理中心，呈现从增长到留存、从活跃到转化的一切业务数据和人效数据统计，为管理者提供更科学的业务流程优化策略和团队管理决策依据。"
            docsUrl="/"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/da-01.png',
                title: '全域',
                subtitle: '汇总全域数据',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/da-02.png',
                title: '100+',
                subtitle: '数据呈现维度',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/da-03.png',
                title: '实时',
                subtitle: '同步经营数据',
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-description">
        <div className="container">
          <FeatureDescription
            firstTitle="汇总用户全域数据"
            firstSubtitle="提供完善的开放 API 并预先打通市场上的电话短信系统、小程序商城、SCRM、ERP、CDP，把用户在全域的数据汇总在一起，打造更完善的客户画像。
            汇总用户在全域的数据后，句子互动提供将多个标签组合形成动态分组的能力，分组会实时计算每个用户的情况。可直接针对分组进行用户运营，实现千人千面的消息触达。"
            secondTitle="数据驱动科学决策"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/da-04.svg',
                title: '多维度增长留存统计',
                subtitle:
                  '记录账号的增长和流失数据，与更多维度交叉分析，提供全面的增长留存数据支撑',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/da-05.svg',
                title: '把每一次互动都转化为数据资产',
                subtitle:
                  '记录每次互动，识别所有素材格式，提供互动频次为核心指标的用户价值分层体系',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/da-06.svg',
                title: '关联结果数据指导行动优化',
                subtitle:
                  '打通效果数据，关联会话、物料和时间等多维度互动数据，用结果指导运营的优化',
              },
            ]}
            photo="https://cdn-official-website.juzibot.com/images/icons/features/da-07.png"
            photoPosition="left"
          />
        </div>
      </div>

      <div className="wrapper feature-appeal">
        <div className="container">
          <FeatureAppealBar
            title="为每次对话开启上帝视角"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/da-08.png',
                title: '完善 SDK 自由接入',
                subtitle: '企业自建侧边栏',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/da-09.png',
                title: '对话中实时显示客户全平台行为数据',
                subtitle: '提供精准服务',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/da-10.png',
                title: '互动数据一键录入内容数据库',
                subtitle: '随时更新用户画像',
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-bar">
        <div className="container">
          <h1>更多提效能力</h1>
          <FeatureBar hideTitle="数据驱动" />
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

export default DataCenterPage;
