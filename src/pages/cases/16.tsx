import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某线上教育头部品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-16"
        themeColor="#FC790D"
        title="某线上教育头部品牌"
        brief=" 该品牌是做线上教育的一线公司，私域主要是通过广告投放拉流，通过免费资料引导用户进流量池"
        datas={[
          {
            title: '80W',
            subtitle: '人均服务客户数',
          },
          {
            title: '46%',
            subtitle: '已回复聊天占比',
          },
          {
            title: '40%+',
            subtitle: '零人工入群率',
          },
          {
            title: '4 倍',
            subtitle: '提升消息触达率',
          },
        ]}
        steps={[
          '用户在朋友圈看到该品牌的广告，获知能免费领取课程/复习资料，点开广告关注公众号后，立刻收到该品牌两条欢迎语，品牌介绍+资料领取链接',
          '用户点击对应年级的语文资料链接后，被提示添加老师领取并附带二维码',
          '用户扫码添加好友后，用户立刻收到 2 条欢迎语，第一条是老师的自我介绍，并附上了对应年级的语文资料链接，第二条是被告知群内有什么福利，并要求回复年级，可进群领取学习资料',
          '用户回复年级后，收到对应年级群的入群链接，若用户未回复对应年级，后续也没有再次被提醒入群',
          '用户入群后，会立刻收到欢迎语，被告知群规和下次直播课的时间',
          '用户在群内会不定时收到直播讲座的邀请，被告知扫码关注公众号，即可免费预约讲座',
          '当群内有人发广告信息，用户会看到违规者立刻被小助理告知违规并移出群聊',
          '用户在群内和私信发送产品（写作 / 回放 / 书单 ）相关关键词，会立刻收到老师的资料或相关信息回复',
          '每天晚上六点半，用户都会在群内和私信中收到知识日报或者每周测试',
          '用户平时向老师咨询问题，如孩子的作文怎么写、课程的 PDF 在哪里找等，都能在短时间内被回复，而且回答的内容都非常详细',
        ]}
        features={[
          {
            icon: '16-1.svg',
            title: '多账号消息聚合',
            subtitle:
              '将原来需要大量人力管理的账号聚合在一个页面，使得 1 人可以管理数十个账号的消息',
          },
          {
            icon: '16-2.svg',
            title: '嵌入会话页面的话术库',
            subtitle:
              '原来需要重复编辑且无法标准化应答的内容，形成统一的回复规范一键发送给用户，提升应答专业度和效率',
          },
          {
            icon: '16-3.svg',
            title: '关键词自动应答',
            subtitle:
              '原来需要大量人力对用户的常规问题进行重复性回答的，借由关键词回复功能，可实现常规问题的自动回复，运营人员仅需对个性提问进行专项回复',
          },
          {
            icon: '16-4.svg',
            title: '自动化拉群',
            subtitle:
              '原来需要人工手动逐个邀请的用户，使用关键词或基于标签批量邀请加入群聊',
          },
          {
            icon: '16-5.svg',
            title: '高频应答',
            subtitle:
              'RPA 助力应答效率，自动发送多条内容和入群邀请卡片',
          },
          {
            icon: '16-6.svg',
            title: '高频触达',
            subtitle:
              'RPA 助力提升应答效率，每天进行 3 次以上社群群发私信群发，保证营销信息的高频触达',
          },
          {
            icon: '16-7.svg',
            title: '自动化的社群运营',
            subtitle:
              '无需人工时刻监督，机器基于预设的规则（消息内容、链接、小程序）自动执行社群维护，自动移除违规用户并加入全企业共享的黑名单',
          },
        ]}
        achievements={[
          {
            icon: '02',
            title:
              '1 人管理 116 个账号下近 80w 用户的消息，已回复聊天占比 46%，极大地提高了人效比',
          },
          {
            icon: '06',
            title: '零人工成本前提下，入群率 40% 以上，高于行业水平',
          },
          {
            icon: '03',
            title: '将触达用户的消息总量提升 4 倍以上，大幅提升最终转化效果',
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
