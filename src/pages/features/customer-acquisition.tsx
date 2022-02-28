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

const CustomerAcquisitionPage: NextPage = () => {
  const [isChrome, toggleChrome] = useState(true);
  useEffect(() => {
    toggleChrome(isBrowserChrome());
  }, []);
  return (
    <>
      <Seo page="feature-customer-acquisition" />
      <div className="wrapper feature customer-acquisition">
        <div className={`bg ${!isChrome && 'moz'}`}></div>
        <div
          className="container"
          style={{
            backgroundImage: `url('https://cdn-official-website.juzibot.com/images/feat-01.png')`,
          }}
        >
          <FeatureHeroPage
            title="规模化获客"
            brief="增长，无需从零开始。句子提供完整的规模化获客解决方案，零人工成本把沉默的存量线索规模化迁移成可双向互动、多维触达的社交关系链。为用户打造行动成本最低的转化路径、为企业实现高转化率的私域构建，全程自动化完成，同时提供更安全的风控策略。"
            docsUrl="https://k0auuqcihb.feishu.cn/docs/doccnJMlpBUC1NAHW7ujCXVxaUB#tlJtFV"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-08.png',
                title: '￥5',
                subtitle: '单个好友成本',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-09.png',
                title: '99%',
                subtitle: '减少人力成本',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-10.png',
                title: '40%',
                subtitle: '意向线索转化率',
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-description">
        <div className="container">
          <FeatureDescription
            firstTitle="零人工成本搭建私域冷启动流量池"
            firstSubtitle="无需人工参与，把海量的沉默客户线索交给机器人，自动完成意向客户筛选、社交关系建立和特殊信息备注，低成本前提下获得更高转化率。"
            secondTitle="三管齐下，高效且安全"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-04.svg',
                title: '上传 Excel 就能开始加好友，自带完整的风控策略',
                subtitle:
                  '一次上传多个添加任务，系统自动均匀执行，识别到限制添加动作时自动执行养号',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-05.svg',
                title: '电话机器人 + 企业微信机器人，高转化率的私域构建',
                subtitle:
                  'AI 电话 + 微信机器人自动筛选接听且同意添加的用户执行添加任务',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-06.svg',
                title: '短信群发 + 企业微信承接，用户行动成本最低的转化路径',
                subtitle:
                  '短信附带短链接，点击自动唤醒微信打开添加落地页，把用户行动成本降到最低',
              },
            ]}
            photo="https://cdn-official-website.juzibot.com/images/icons/features/ca-07.png"
            photoPosition="right"
          />
        </div>
      </div>

      <div className="wrapper feature-appeal">
        <div className="container">
          <FeatureAppealBar
            title="系统级风控保证企业数据资产安全"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-01.png',
                title: '支持涨粉任务状态实时查看',
                subtitle: '暂停潜在风险任务和账号',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-02.png',
                title: '系统自动根据账号承接情况动态调整',
                subtitle: '也可在任意时间人工开启或者暂停',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-03.png',
                title: '可设置好友申请的发送时间、发送间隔',
                subtitle: '以及被限制后自动养号时长',
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-bar">
        <div className="container">
          <h1>更多提效能力</h1>
          <FeatureBar hideTitle="规模获客" />
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

export default CustomerAcquisitionPage;
