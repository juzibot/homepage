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

const SopPage: NextPage = () => {
  const [isChrome, toggleChrome] = useState(true);
  useEffect(() => {
    toggleChrome(isBrowserChrome());
  }, []);
  return (
    <>
      <Seo page="feature-sop" />
      <div className="wrapper feature sop">
        <div className={`bg ${!isChrome && 'moz'}`}></div>
        <div
          className="container"
          style={{
            backgroundImage: `url('https://cdn-official-website.juzibot.com/images/feat-06.png')`,
          }}
        >
          <FeatureHeroPage
            title="SOP 消息触达"
            brief="现在，你可以摆脱空间和时间的束缚，一次性完成客户全生命周期的运营规划，在任意时间、任意场景下执行触达转化。依托 RPA 技术，句子互动将 IM 软件变成可自动执行计划任务的机器人，让营销实现真正意义上的 SOP 化。"
            docsUrl="https://k0auuqcihb.feishu.cn/docs/doccnJMlpBUC1NAHW7ujCXVxaUB#nvwxlQ"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-01.png',
                title: '1000%',
                subtitle: '提高服务半径',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-02.png',
                title: '80%',
                subtitle: '减少人力投入',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-03.png',
                title: '500%',
                subtitle: '增加 LTV',
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-description">
        <div className="container">
          <FeatureDescription
            firstTitle="让每个账号变成自驱的效率单元"
            firstSubtitle="句子互动赋予每个账号按预设规则自动执行任务的能力，使它们可以基于客户的会话关键词做出响应，给出预设话术的应答、邀请进群亦或是标记画像。基于 SOP 消息触达，你可以制定更长周期的运营计划了，在用户生命周期任意时段预设一条符合那个时段场景的消息规则。"
            secondTitle="提效，从解放重复作业开始"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-04.svg',
                title: '所有人做的事情，机器都能完成',
                subtitle:
                  '添加好友、自动应答、邀请入群、社群巡检，机械性的工作被机器人更规范的执行',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-05.svg',
                title: '把员工从重复的作业中解放出来',
                subtitle:
                  '日常问候、定时消息、违规提醒，重复性工作由机器代劳，让员工创造更大的价值',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-06.svg',
                title: '更高频次的消息触达为转化提速',
                subtitle:
                  '依托 RPA 技术，更高频次的消息推送成为可能，量变带来质变转化得到有效保障',
              },
            ]}
            photo="https://cdn-official-website.juzibot.com/images/icons/features/sop-07.png"
            photoPosition="left"
          />
        </div>
      </div>

      <div className="wrapper feature-appeal">
        <div className="container">
          <FeatureAppealBar
            title="最强的操盘手都在操盘时间"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-08.png',
                title: '预设用户',
                subtitle: '不同生命周期阶段的触达消息',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-09.png',
                title: '真正实现基于用户',
                subtitle: '不同互动反馈的剧本营销',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-10.png',
                title: '流失预判自动招回',
                subtitle: '让 LTV 无限增长',
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-bar">
        <div className="container">
          <h1>更多提效能力</h1>
          <FeatureBar hideTitle="精准触达" />
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

export default SopPage;
