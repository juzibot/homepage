import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const SolutionContactPage: NextPage = () => {
  const { t } = useTranslation('solutions', {
    keyPrefix: 'increase',
  });
  return (
    <>
      <Seo page="increase" />
      <SolutionDetailPage
        cases={[
          {
            title: '某国际一线美妆大品牌',
            brief:
              '自动化激活会员用户，10 倍的信息触达效率，86w 小程序用户行为的自动标签化',
            category: CompanyCategory.TRADE,
            url: '/cases/06',
            imageUrl:
              '/_images/cases/companies/21.png',
          },
          {
            title: '某市级民政机关',
            brief:
              '自动化完成 900 万线索量的筛选，平均每人每日回复 1000+ 消息，触达用户的消息总量提升 3 倍以上',
            category: CompanyCategory.GOV,
            url: '/cases/32',
            imageUrl:
              '/_images/cases/companies/16.png',
          },
          {
            title: '某饮料新消费头部品牌',
            brief:
              '实现 1 人管理 10 个企业微信、10 万粉丝的消息应答，触达用户的消息总量提升 5 倍以上',
            category: CompanyCategory.TRADE,
            url: '/cases/01',
            imageUrl:
              '/_images/cases/companies/0.png',
          },
        ]}
        heroTitle={t('hero-title')}
        heroSubtitle={t('hero-subtitle')}
        backgroundUrl="/_images/solutions/bg-3.svg"
        challenges={[
          {
            icon: 'icon-9.svg',
            title: t('challenges.title-1'),
            subtitle: t('challenges.subtitle-1'),
          },
          {
            icon: 'icon-10.svg',
            title: t('challenges.title-2'),
            subtitle: t('challenges.subtitle-2'),
          },
          {
            icon: 'icon-11.svg',
            title: t('challenges.title-3'),
            subtitle: t('challenges.subtitle-3'),
          },
        ]}
        solutions={[
          {
            title: t('solutions.title-1'),
            photo:
              '/_images/solutions/s-9.svg',
            subtitle: t('solutions.subtitle-1'),
            icon: '/_images/solutions/no-5.svg',
          },

          {
            title: t('solutions.title-2'),
            photo:
              '/_images/solutions/s-10.svg',
            subtitle: t('solutions.subtitle-2'),
            icon: '/_images/solutions/no-6.svg',
          },

          {
            title: t('solutions.title-3'),
            photo:
              '/_images/solutions/s-11.svg',
            subtitle: t('solutions.subtitle-3'),
            icon: '/_images/solutions/no-7.svg',
          },

          {
            title: t('solutions.title-4'),
            photo:
              '/_images/solutions/s-12.svg',
            subtitle: t('solutions.subtitle-4'),
            icon: '/_images/solutions/no-8.svg',
          },

          {
            title: t('solutions.title-5'),
            photo:
              '/_images/solutions/s-13.svg',
            subtitle: t('solutions.subtitle-5'),
            icon: '/_images/solutions/no-9.svg',
          },

          {
            title: t('solutions.title-6'),
            photo:
              '/_images/solutions/s-14.svg',
            subtitle: t('solutions.subtitle-6'),
            icon: '/_images/solutions/no-10.svg',
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
