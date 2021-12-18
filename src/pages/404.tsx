import { host } from '@src/config';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Custom404: NextPage = () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="wrapper not-found-page">
      <div className="container">
        <Image
          src="/images/404.svg"
          width="517"
          height="438"
          draggable="false"
          alt="not-found"
        />

        <div className="not-found">{t('404-not-found')}</div>

        <button
          className="primary-button start-button"
          onClick={() => {
            if (process.browser) location.replace(`${host}`);
          }}
        >
          {t('404-go-home')}
        </button>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', ['common', 'homepage'])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default Custom404;
