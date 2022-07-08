import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const SolutionContactPage: NextPage = () => {
  const { t } = useTranslation('solutions', {
    keyPrefix: 'customer-service',
  });
  return (
    <>
      <Seo page="customer-service" />
      <SolutionDetailPage
        cases={[
          {
            title: '某市级民政机关',
            brief:
              '自动化完成 900 万线索量的筛选，平均每人每日回复 1000+ 消息，触达用户的消息总量提升 3 倍以上',
            category: CompanyCategory.GOV,
            url: '/cases/32',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/16.png',
          },
          {
            title: '某国内电子烟一线品牌',
            brief:
              '4 个人管理 80 个企业微信账号上的 100 万用户，平均每人每天应答 8000 条消息，90% 以上客户被回复',
            category: CompanyCategory.TRADE,
            url: '/cases/14',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/29.png',
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
        ]}
        heroTitle={t('hero-title')}
        heroSubtitle={t('hero-subtitle')}
        backgroundUrl="https://cdn-official-website.juzibot.com/images/solutions/bg-2.svg"
        challenges={[
          {
            icon: 'icon-5.svg',
            title: t('challenges.title-1'),
            subtitle: t('challenges.subtitle-1'),
          },
          {
            icon: 'icon-6.svg',
            title: t('challenges.title-2'),
            subtitle: t('challenges.subtitle-2'),
          },
          {
            icon: 'icon-7.svg',
            title: t('challenges.title-3'),
            subtitle: t('challenges.subtitle-3'),
          },
          {
            icon: 'icon-8.svg',
            title: t('challenges.title-4'),
            subtitle: t('challenges.subtitle-4'),
          },
        ]}
        solutions={[
          {
            title: t('solutions.title-1'),
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-5.svg',
            subtitle: t('solutions.subtitle-1'),
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-1.svg',
          },

          {
            title: t('solutions.title-2'),
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-6.svg',
            subtitle: t('solutions.subtitle-2'),
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-2.svg',
          },

          {
            title: t('solutions.title-3'),
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-7.svg',
            subtitle: t('solutions.subtitle-3'),
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-3.svg',
          },

          {
            title: t('solutions.title-4'),
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-8.svg',
            subtitle: t('solutions.subtitle-4'),
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-4.svg',
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
