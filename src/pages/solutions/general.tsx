import Seo from '@src/components/common/Seo';
import { SolutionDetailPage } from '@src/components/solutions/SolutionPage';
import { CompanyCategory } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const SolutionContactPage: NextPage = () => {
  const { t } = useTranslation('solutions', {
    keyPrefix: 'general'
  })
  return (
    <>
      <Seo page="general" />
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
            title: '某家庭维修品牌',
            brief:
              '8 人完成 180 个账号上 300 万用户的客诉应答，每天处理 6300 余客户的售后问题，平均应答时间2分钟以内',
            category: CompanyCategory.IT,
            url: '/cases/26',
            imageUrl:
              '/_images/cases/companies/31.png',
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
        backgroundUrl="/_images/solutions/bg-1.svg"
        challenges={[
          {
            icon: 'icon-1.svg',
            title: t('challenges.title-1'),
            subtitle: t('challenges.subtitle-1'),
          },
          {
            icon: 'icon-2.svg',
            title: t('challenges.title-2'),
            subtitle: t('challenges.subtitle-2'),
          },
          {
            icon: 'icon-3.svg',
            title: t('challenges.title-3'),
            subtitle: t('challenges.subtitle-3'),
          },
          {
            icon: 'icon-4.svg',
            title: t('challenges.title-4'),
            subtitle: t('challenges.subtitle-4'),
          },
        ]}
        solutions={[
          {
            title: t('solutions.solution-title-1'),
            photo:
              '/_images/solutions/s-1.svg',
            items: [
              {
                title: t('solutions.title-1'),
                subtitle: t('solutions.subtitle-1'),
              },
              {
                title: t('solutions.title-2'),
                subtitle: t('solutions.subtitle-2'),
              },
              {
                title: t('solutions.title-3'),
                subtitle: t('solutions.subtitle-3'),
              },
            ],
          },

          {
            title: t('solutions.solution-title-2'),
            photo:
              '/_images/solutions/s-2.svg',
            items: [
              {
                title: t('solutions.title-4'),
                subtitle: t('solutions.subtitle-4'),
              },
              {
                title: t('solutions.title-5'),
                subtitle: t('solutions.subtitle-5'),
              },
              {
                title: t('solutions.title-6'),
                subtitle: t('solutions.subtitle-6'),
              },
            ],
          },

          {
            title: t('solutions.solution-title-3'),
            photo:
              '/_images/solutions/s-3.svg',
            items: [
              {
                title: t('solutions.title-7'),
                subtitle: t('solutions.subtitle-7'),
              },
              {
                title: t('solutions.title-8'),
                subtitle: t('solutions.subtitle-8'),
              },
              {
                title: t('solutions.title-9'),
                subtitle: t('solutions.subtitle-9'),
              },
            ],
          },

          {
            title: t('solutions.solution-title-4'),
            photo:
              '/_images/solutions/s-4.svg',
            items: [
              {
                title: t('solutions.title-10'),
                subtitle: t('solutions.subtitle-10'),
              },
              {
                title: t('solutions.title-11'),
                subtitle: t('solutions.subtitle-11'),
              },
              {
                title: t('solutions.title-12'),
                subtitle: t('solutions.subtitle-12'),
              },
            ],
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
