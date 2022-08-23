import { CaseDetailPage } from '@src/components/cases/CaseDetailPage';
import Seo from '@src/components/common/Seo';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasePage: NextPage = () => {
  return (
    <>
      <Seo title="某成人理财教育品牌 - 句子互动企微SCRM - 助力搭建安全稳定私域流量" />
      <CaseDetailPage
        category={CompanyCategory.TRADE}
        logoUrl="logo-19"
        themeColor="#6547FF"
        title="某成人理财教育品牌"
        brief="该品牌是做成人线上教育的互联网公司，它的私域主要是通过广告投放低价理财体验课引流，通过短期课程服务，引导用户购买长期理财正价课"
        datas={[
          {
            title: '10%',
            subtitle: '提升人效',
          },
          {
            title: '10 倍',
            subtitle: '提升消息触达率',
          },
          {
            title: '71%',
            subtitle: '完课率',
          },
        ]}
        steps={[
          '用户在公众号、朋友圈或其他平台上的广告中点击购买理财体验课程后，弹出班主任二维码，并附带说明添加老师获取上课方式',
          '用户添加班主任企微后，会在一分钟左右收到班主任的信息，主要包括老师的自我介绍，短期课的课程安排，包括上课形式和时间，并获取课前学习资料',
          '开班前两天，用户会收到班主任的建群预告，再次告知开课时间，以及将会建立班级微信群，到时用户将被邀请进群',
          '开课前一天，用户再次收到班主任的消息，被提醒在入群前要观看视频录制的入群须知，并被第三次提醒开课时间，以及被告知今晚7点会被邀请入群，也只有进到群里才能够学习',
          '紧接着用户收到群二维码，被要求扫码入群，以及进群后及时查看群公告，以后所有的重要内容和课程都会在群里进行讲解，以及第四次收到开课时间的提醒',
          '未及时进群的用户，开课前会一直收到班主任的多次提醒和入群邀请',
          '开班后，用户在群内进行为期12天的学习，每天会在群内收到3次课程内容和1次作业通知，同时在私信中，完成作业的用户会收到作业奖励，未完成作业则会收到作业提醒',
          '体验课的第十二天，用户会收到班主任每天5-8次私信的后续长期课程的介绍信息和促销活动提醒',
        ]}
        features={[
          {
            icon: '19-1.svg',
            title: '高频应答',
            subtitle:
              'RPA 助力提升应答效率，对新好友发送多条欢迎信息，完整说明学习安排，降低线上班主任大量说明工作',
          },
          {
            icon: '19-2.svg',
            title: '高频触达',
            subtitle:
              'RPA 助力高效触达，每天进行 4 次社群公告和 5~8 次的私信群发，保证课程内容和营销信息的高频触达',
          },
          {
            icon: '19-3.svg',
            title: '自动化标签',
            subtitle:
              '该品牌能对提交作业的用户进行自动标签，区分每天用户的行为，然后做差异化运营',
          },
        ]}
        achievements={[
          {
            icon: '03',
            title:
              '10 倍的信息触达效率，通过高频次的营销触达，完课率达71%',
          },
          {
            icon: '08',
            title: '根据用户行为自动化完成所有社群用户的分层，并进行差异化推送',
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
