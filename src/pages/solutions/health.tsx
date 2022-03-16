import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const SolutionContactPage: NextPage = () => {
  const { t } = useTranslation('solutions', {
    keyPrefix: 'health',
  });
  return (
    <>
      <Seo page="health" />
      <SolutionDetailPage
        cases={[
          {
            title: '某连锁药店品牌',
            brief:
              '1 人管理 10 余个企业微信上的 6 万余用户消息，触达用户的消息总量提升 3 倍以上',
            category: CompanyCategory.MEDICAL,
            url: '/cases/27',
            imageUrl:
              '/_images/cases/companies/11.png',
          },
          {
            title: '某减肥代餐一线品牌',
            brief:
              '用户已回复聊天占比达 100%，日均聊天数达 2775 条，平均首次响应时长可达 2s',
            category: CompanyCategory.TRADE,
            url: '/cases/05',
            imageUrl:
              '/_images/cases/companies/20.png',
          },
          {
            title: '某会员制高端医院品牌',
            brief:
              '零人工成本下粉丝入群率超过 75%，触达用户的消息总量提升 4 倍以上',
            category: CompanyCategory.MEDICAL,
            url: '/cases/28',
            imageUrl:
              '/_images/cases/companies/12.png',
          },
        ]}
        heroTitle={t('hero-title')}
        heroSubtitle={t('hero-subtitle')}
        backgroundUrl="/_images/solutions/bg-7.svg"
        challenges={[
          {
            icon: 'icon-25.svg',
            title: t('challenges.title-1'),
            subtitle: t('challenges.subtitle-1'),
          },
          {
            icon: 'icon-26.svg',
            title: t('challenges.title-2'),
            subtitle: t('challenges.subtitle-2'),
          },
          {
            icon: 'icon-27.svg',
            title: t('challenges.title-3'),
            subtitle: t('challenges.subtitle-3'),
          },
        ]}
        solutions={[
          {
            title: t('solutions.title-1'),
            photo:
              '/_images/solutions/s-26.svg',
            subtitle: t('solutions.subtitle-1'),
            icon: '/_images/solutions/no-22.svg',
          },

          {
            title: t('solutions.title-2'),
            photo:
              '/_images/solutions/s-27.svg',
            subtitle: t('solutions.subtitle-2'),
            icon: '/_images/solutions/no-23.svg',
          },

          {
            title: t('solutions.title-3'),
            photo:
              '/_images/solutions/s-28.svg',
            subtitle: t('solutions.subtitle-3'),
            icon: '/_images/solutions/no-24.svg',
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
