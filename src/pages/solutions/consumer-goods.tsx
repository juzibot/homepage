import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const SolutionContactPage: NextPage = () => {
  const { t } = useTranslation('solutions', {
    keyPrefix: 'consumer-goods',
  });
  return (
    <>
      <Seo page="consumer-goods" />
      <SolutionDetailPage
        cases={[
          {
            title: '某韩国时装零售头部品牌',
            brief:
              '已回复聊天占比达 100%，日均聊天数达 1300+ 条，超过 250 个云导购账号的统一管理',
            category: CompanyCategory.TRADE,
            url: '/cases/12',
            imageUrl:
              '/_images/cases/companies/27.png',
          },
          {
            title: '某头部潮流玩具品牌',
            brief:
              '2 人管理 15 个账号下 3 万余用户的消息，触达用户的消息总量提升 6 倍以上',
            category: CompanyCategory.TRADE,
            url: '/cases/10',
            imageUrl:
              '/_images/cases/companies/25.png',
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
        backgroundUrl="/_images/solutions/bg-5.svg"
        challenges={[
          {
            icon: 'icon-19.svg',
            title: t('challenges.title-1'),
            subtitle: t('challenges.subtitle-1'),
          },
          {
            icon: 'icon-20.svg',
            title: t('challenges.title-2'),
            subtitle: t('challenges.subtitle-2'),
          },
          {
            icon: 'icon-21.svg',
            title: t('challenges.title-3'),
            subtitle: t('challenges.subtitle-3'),
          },
        ]}
        solutions={[
          {
            title: t('solutions.title-1'),
            photo:
              '/_images/solutions/s-20.svg',
            subtitle: t('solutions.subtitle-1'),
            icon: '/_images/solutions/no-16.svg',
          },

          {
            title: t('solutions.title-2'),
            photo:
              '/_images/solutions/s-21.svg',
            subtitle: t('solutions.subtitle-2'),
            icon: '/_images/solutions/no-17.svg',
          },

          {
            title: t('solutions.title-3'),
            photo:
              '/_images/solutions/s-22.svg',
            subtitle: t('solutions.subtitle-3'),
            icon: '/_images/solutions/no-18.svg',
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
