import { NextPage } from 'next';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useTranslation } from 'react-i18next';

const Seo: NextPage<NextSeoProps & { page: string }> = (props) => {
  const { t } = useTranslation(['seos']);
  const { page } = props;
  return (
    <>
      <NextSeo
        {...props}
        title={t(`${page}-title`)}
        description={t('description')}
      />
    </>
  );
};

export default Seo;
