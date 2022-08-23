import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某宠物护理一线品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-11"
        themeColor="#0DE492"
        title="某宠物护理一线品牌"
        brief="该品牌是一家专注宠物护理领域的品牌，它的私域主要是在做通过通过优惠活动来刺激用户在微信小程序商城中进行复购"
        datas={[
          {
            title: '16,000',
            subtitle: '人均服务客户数',
          },
          {
            title: '1.3min',
            subtitle: '平均应答时间',
          },
          {
            title: '7 倍',
            subtitle: '提升消息触达率',
          },
          {
            title: '30%',
            subtitle: 'AI 引导添加率',
          },
        ]}
        steps={[
          '用户在抖音直播间、淘宝、京东等商城购买产品后，在快递包裹中看到卡片，添加好友可以领取优惠券 & 赠品，于是扫码添加福利官为好友',
          '用户在抖音直播间、淘宝、京东等商城购买产品后，会接到回访电话，告知有免费礼品领取，被引导添加健康顾问企微',
          '添加好友后，用户立刻收到1条欢迎语，内容包含健康顾问的自我介绍和询问是否领取新品体验礼',
          '用户肯定回复之后，立刻收到工作人员的消息，和对用户养猫还是养狗的询问',
          '用户回复自己养的是猫猫/狗狗后，立刻收到健康顾问的领取奖品指示（文字 + 操作指引图），被告知点击下方链接进入专享福利页面，通过免费随单赠送的方式送福利',
          '用户如果未回复工作人员，会再次收到提醒领取福利的消息',
          '用户号扫码领取福利后，向工作人员回复关键词“已领”，立刻收到工作人员发来的第二个福利（7 折优惠券，7 天内有效），并说明关于宠物养护方面的问题都可以及时留言，除了休息时间，看到后都会及时回复',
          '用户在当晚 5 - 7 点区间会收到工作人员的进群邀请，告知进群福利（宠物知识分享、不定期优惠）',
          '用户进群后，会立刻收到被 @ 的欢迎语，收到群规',
          '每天早上 8 点、中午 12 点，晚上 19 点，用户会在群内收到关于宠物的互动问答和知识分享，如“猫咪为啥在你面前揣手手”',
          '群内会不定期推出优惠活动介绍（文字 + 小程序链接），如“年货节”活动',
          '用户私聊和在群中咨询健康顾问关于宠物的问题（如狗狗年龄、喂养相关）都能及时被回复，且回答内容非常专业详尽',
        ]}
        features={[
          {
            icon: '11-2.svg',
            title: '嵌入会话页面的话术库',
            subtitle:
              '原来需要重复编辑且无法标准化应答的内容，形成统一的回复规范一键发送给用户，提升应答专业度和效率',
          },
          {
            icon: '10-1.svg',
            title: '自动化邀请入群',
            subtitle: 'RPA 助力提升应答效率，使用关键词邀请加入群聊',
          },
          {
            icon: '8-3.svg',
            title: '高频触达',
            subtitle:
              'RPA 助力提升应答效率，每天进行至少 2 次以上社群群发和私信群发，保证营销信息的高频触达',
          },
          {
            icon: '10-3.svg',
            title: '关键词自动应答',
            subtitle:
              'RPA 助力应答效率，借由关键词回复功能，可实现常规问题的自动回复，运营人员仅需对个性提问进行专项回复',
          },
        ]}
        achievements={[
          {
            icon: '02',
            title: '3 人管理数十个账号的客户消息，平均 1.3 分钟内即可应答，极大地提高了人效比',
          },
          {
            icon: '06',
            title: '自动化激活会员用户，通过 AI 电话的激活引导，添加率近 30%',
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
