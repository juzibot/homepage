import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const SolutionContactPage: NextPage = () => {
  const { t } = useTranslation('solutions', {
    keyPrefix: 'finance',
  });
  return (
    <>
      <Seo page="finance" />
      <SolutionDetailPage
        cases={[
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
            title: '某知名地方银行',
            brief:
              '2 人管理 15 个账号的消息应答，5倍以上提高人的服务半径，工具赋能精细化 SOP 运营，开卡率 46%',
            category: CompanyCategory.FINANCE,
            url: '/cases/30',
            imageUrl:
              '/_images/cases/companies/14.png',
          },
          {
            title: '某知名保险公司',
            brief:
              '0 人工成本，机器人自动完成 14000+ 用户的运营工作，触达用户的消息总量提升 4 倍以上',
            category: CompanyCategory.FINANCE,
            url: '/cases/31',
            imageUrl:
              '/_images/cases/companies/15.png',
          },
        ]}
        heroTitle={t('hero-title')}
        heroSubtitle={t('hero-subtitle')}
        backgroundUrl="/_images/solutions/bg-8.svg"
        challenges={[
          {
            icon: 'icon-28.svg',
            title: t('challenges.title-1'),
            subtitle: t('challenges.subtitle-1'),
          },
          {
            icon: 'icon-29.svg',
            title: t('challenges.title-2'),
            subtitle: t('challenges.subtitle-2'),
          },
          {
            icon: 'icon-30.svg',
            title: t('challenges.title-3'),
            subtitle: t('challenges.subtitle-3'),
          },
        ]}
        solutions={[
          {
            title: t('solutions.title-1'),
            photo:
              '/_images/solutions/s-29.svg',
            subtitle: t('solutions.subtitle-1'),
            icon: '/_images/solutions/no-25.svg',
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
