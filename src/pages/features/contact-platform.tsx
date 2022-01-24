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

const ContactPlatformPage: NextPage = () => {
  const [isChrome, toggleChrome] = useState(true);
  useEffect(() => {
    toggleChrome(isBrowserChrome());
  }, []);
  return (
    <>
      <Seo page="feature-contact-platform" />
      <div className="wrapper feature contact-platform">
        <div className={`bg ${!isChrome && 'moz'}`}></div>
        <div
          className="container"
          style={{
            backgroundImage: `url('https://cdn-official-website.juzibot.com/images/feat-03.png')`,
          }}
        >
          <FeatureHeroPage
            title="客户会话中台"
            brief="客户会话中台（CCP）提供聚合多种 IM
        平台消息的能力，在一个后台应答来自多平台多个账号上的消息，亦可以同时主动触达这些客户，无论他们来自微信、抖音、5G
        短信、Whatsapp 还是邮件。"
            docsUrl="https://k0auuqcihb.feishu.cn/docs/doccnJMlpBUC1NAHW7ujCXVxaUB#ebpzcU"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/cp-01.png',
                title: '1000%',
                subtitle: '提升沟通效率',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/cp-02.png',
                title: '80%',
                subtitle: '减少人力成本',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/cp-03.png',
                title: '500+',
                subtitle: '同时服务客户数',
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-description">
        <div className="container">
          <FeatureDescription
            firstTitle="把多平台会话统一管理"
            firstSubtitle="基于 RPA
        技术，句子互动提供把多平台、多账号的消息聚合在同一个后台的能力。无论客户从哪个平台发起会话，都可以在后台快速响应。
        在会话中台，你可以让多个员工同时服务一个客户。基于消息路由和打通内部系统的侧边栏，会话中的服务同样可以成为效率工单。"
            secondTitle="内嵌侧边栏让应答更高效"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/cp-04.svg',
                title: '打通话术库系统',
                subtitle:
                  '侧边栏内嵌话术库，可一键发送预设话术内容，保证应答的效率和专业度',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/cp-05.svg',
                title: '清晰展示客户画像',
                subtitle:
                  '侧边栏内嵌客户画像和工作台，全方位展示客户，像老朋友一样与每一个客户沟通',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/cp-06.svg',
                title: '打通企业自建系统',
                subtitle:
                  '提供完善的SDK，打通任一平台系统，实时展示客户的全域旅程，让沟通无界',
              },
            ]}
            photo="https://cdn-official-website.juzibot.com/images/icons/features/cp-07.svg"
            photoPosition="right"
          />
        </div>
      </div>

      <div className="wrapper feature-appeal">
        <div className="container">
          <FeatureAppealBar
            title="为企业沉淀基于对话的数据资产"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/cp-08.png',
                title: '存档来自全平台的消息',
                subtitle: '随时可查阅',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/cp-09.png',
                title: '保证沟通合规',
                subtitle: '风控信息实时报警',
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/cp-10.png',
                title: '分析每个轮次的对话',
                subtitle: '提供响应效率的绩效分析',
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-bar">
        <div className="container">
          <h1>更多提效能力</h1>
          <FeatureBar hideTitle="急速应答" />
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

export default ContactPlatformPage;
