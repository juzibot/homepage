import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SolutionContactPage: NextPage = () => {
  return (
    <>
      <Seo title="私域全链路解决方案 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <SolutionDetailPage
        heroTitle="私域全链路解决方案"
        heroSubtitle="让私域业务成为可被标准化落地执行、真能为企业带来转化的数据资产，助力企业 10 倍提高私域流量的运营效率"
        backgroundUrl="https://cdn-official-website.juzibot.com/images/solutions/bg-1.svg"
        challenges={[
          {
            icon: 'icon-1.svg',
            title: '获客成本高',
            subtitle: '互联网流量见顶，获客成本逐年增高',
          },
          {
            icon: 'icon-2.svg',
            title: '消耗大量人力',
            subtitle: '私域业务重人力，员工能力参差不齐',
          },
          {
            icon: 'icon-3.svg',
            title: '无法标准化',
            subtitle: '场景多环节链路复杂，工作很难被标准化',
          },
          {
            icon: 'icon-4.svg',
            title: '数据割裂',
            subtitle: '用户数据分散在多平台，无法被整合',
          },
        ]}
        solutions={[
          {
            title: '零人工规模化搭建私域流量池',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-1.svg',
            items: [
              {
                title: '规模迁移',
                subtitle:
                  '提供 AI 外呼、Excel 加好友和短信加好友多种线索迁移方案，零人工搭建私域流量池',
              },
              {
                title: '渠道分明',
                subtitle:
                  '为不同来源、不同添加意向的用户打上详尽标签和备注，从源端建立完善画像体系',
              },
              {
                title: '安全增长',
                subtitle:
                  '配合系统级风控策略，实时预警系统限制或添加无响应事件，保证企业账号资产安全',
              },
            ],
          },

          {
            title: 'RPA 助力降低 90%人力投入',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-2.svg',
            items: [
              {
                title: '消息聚合',
                subtitle:
                  '把承载相同业务的账号聚合在一个页面，无需来回切换，10 倍提高人的服务半径',
              },
              {
                title: '机器代劳',
                subtitle:
                  '让机器人完成所有可被抽象特征的工作，把员工从重复、机械性的工作中解脱出来',
              },
              {
                title: '绩效统计',
                subtitle:
                  '计算每轮对话的质量和响应时间，提供针对会话的绩效统计，最大化提高工作效率',
              },
            ],
          },

          {
            title: '全流程 SOP 作业保质保量服务',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-3.svg',
            items: [
              {
                title: '自动触达',
                subtitle:
                  '预设明确的时间节点的服务消息推送规则，添加好友后自动执行',
              },
              {
                title: '定时推送',
                subtitle:
                  '把可预见运营动作集中完成配置，系统在设定时间自动执行，保证运营计划完美落地',
              },
              {
                title: '无休治理',
                subtitle:
                  '配置社群管理规则，机器人24小时巡检，监测到违规行为自动移除群聊并全企业拉黑',
              },
            ],
          },

          {
            title: '汇总全域数据实现千人千面服务',
            photo: 'https://cdn-official-website.juzibot.com/images/solutions/s-4.svg',
            items: [
              {
                title: '全域打通',
                subtitle:
                  '提供开放的API接口和完善的SDK，把用户全域数据汇总在一起形成完善的用户画像',
              },
              {
                title: '千人千面',
                subtitle:
                  '把可预见运营动作集中完成配置，系统在设定时间自动执行，保证运营计划完美落地',
              },
              {
                title: '结果导向',
                subtitle:
                  '交叉分析转化数据与运营动作，把订单转化归因到每一次推送，以结果优化运营路径',
              },
            ],
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

export default SolutionContactPage;
