import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const SolutionContactPage: NextPage = () => {
  const { t } = useTranslation('solutions', {
    keyPrefix: 'operate',
  });
  return (
    <>
      <Seo page="operate" />
      <SolutionDetailPage
        cases={[
          {
            title: '某饮料新消费头部品牌',
            brief:
              '实现 1 人管理 10 个企业微信、10 万粉丝的消息应答，触达用户的消息总量提升 5 倍以上',
            category: CompanyCategory.TRADE,
            url: '/cases/01',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/0.png',
          },
          {
            title: '某减肥代餐一线品牌',
            brief:
              '用户已回复聊天占比达 100%，日均聊天数达 2775 条，平均首次响应时长可达 2s',
            category: CompanyCategory.TRADE,
            url: '/cases/05',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/20.png',
          },
          {
            title: '某本地化社群平台',
            brief:
              '全自动化运营 250w 私域用户，每日通过 API 接口将触达用户的消息总量提升 10 倍以上',
            category: CompanyCategory.IT,
            url: '/cases/23',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/5.png',
          },
        ]}
        heroTitle={t('hero-title')}
        heroSubtitle={t('hero-subtitle')}
        backgroundUrl="https://cdn-official-website.juzibot.com/images/solutions/bg-4.svg"
        challenges={[
          {
            icon: 'icon-15.svg',
            title: t('challenges.title-1'),
            subtitle: t('challenges.subtitle-1'),
          },
          {
            icon: 'icon-16.svg',
            title: t('challenges.title-2'),
            subtitle: t('challenges.subtitle-2'),
          },
          {
            icon: 'icon-17.svg',
            title: t('challenges.title-3'),
            subtitle: t('challenges.subtitle-3'),
          },
          {
            icon: 'icon-18.svg',
            title: t('challenges.title-4'),
            subtitle: t('challenges.subtitle-4'),
          },
        ]}
        solutions={[
          {
            title: t('solutions.title-1'),
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-16.svg',
            subtitle: t('solutions.subtitle-1'),
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-15.svg',
          },

          {
            title: t('solutions.title-2'),
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-17.svg',
            subtitle: t('solutions.subtitle-2'),
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-12.svg',
          },

          {
            title: t('solutions.title-3'),
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-18.svg',
            subtitle: t('solutions.subtitle-3'),
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-13.svg',
          },

          {
            title: t('solutions.title-4'),
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-19.svg',
            subtitle: t('solutions.subtitle-4'),
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-14.svg',
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
        'solutions',
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default SolutionContactPage;
