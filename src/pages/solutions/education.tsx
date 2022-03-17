import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const SolutionContactPage: NextPage = () => {
  const { t } = useTranslation('solutions', {
    keyPrefix: 'education',
  });
  return (
    <>
      <Seo page="education" />
      <SolutionDetailPage
        cases={[
          {
            title: '某头部线上教育公司旗下子品牌',
            brief:
              '超过 500 个账号 250 万用户的增长和触达几乎自动化完成运营，员工只需要提供文案和海报',
            category: CompanyCategory.EDUCATION,
            url: '/cases/17',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/8.png',
          },
          {
            title: '某在线教育头部品牌',
            brief:
              '0 人工自动完成 30 万用户的增长、触达和筛选，触达用户的消息总量提升 3 倍以上',
            category: CompanyCategory.EDUCATION,
            url: '/cases/18',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/9.png',
          },
          {
            title: '某成人理财教育品牌',
            brief: '10 倍的信息触达效率，通过高频次的营销触达，大幅提升续保率',
            category: CompanyCategory.EDUCATION,
            url: '/cases/19',
            imageUrl:
              'https://cdn-official-website.juzibot.com/images/cases/companies/10.png',
          },
        ]}
        heroTitle={t('hero-title')}
        heroSubtitle={t('hero-subtitle')}
        backgroundUrl="https://cdn-official-website.juzibot.com/images/solutions/bg-6.svg"
        challenges={[
          {
            icon: 'icon-22.svg',
            title: t('challenges.title-1'),
            subtitle: t('challenges.subtitle-1'),
          },
          {
            icon: 'icon-23.svg',
            title: t('challenges.title-2'),
            subtitle: t('challenges.subtitle-2'),
          },
          {
            icon: 'icon-24.svg',
            title: t('challenges.title-3'),
            subtitle: t('challenges.subtitle-3'),
          },
        ]}
        solutions={[
          {
            title: t('solutions.title-1'),
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-20.svg',
            subtitle: t('solutions.subtitle-1'),
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-19.svg',
          },

          {
            title: t('solutions.title-2'),
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-21.svg',
            subtitle: t('solutions.subtitle-2'),
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-20.svg',
          },

          {
            title: t('solutions.title-3'),
            photo:
              'https://cdn-official-website.juzibot.com/images/solutions/s-22.svg',
            subtitle: t('solutions.subtitle-3'),
            icon: 'https://cdn-official-website.juzibot.com/images/solutions/no-21.svg',
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
