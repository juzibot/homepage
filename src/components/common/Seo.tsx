import { NextPage } from 'next';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useTranslation } from 'react-i18next';

const Seo: NextPage<NextSeoProps & { page?: string }> = (props) => {
  const { t } = useTranslation(['seos']);
  const { page } = props;
  return (
    <>
      <NextSeo
        {...props}
        {...(page ? { title: t(`${page}-title`) } : null)}
        description={t('description')}
      />
    </>
  );
};

export default Seo;
