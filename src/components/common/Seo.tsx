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
        openGraph={{
          title: t('homepage-title'),
          type: 'website',
          url: 'https://juzibot.com',
          site_name: 'JuziBot',
          description: t('description'),
          images: [
            {
              url: '/_images/logo@192.png',
              width: 192,
              height: 192,
            },
            {
              url: '/_images/logo@256.png',
              width: 256,
              height: 256,
            },
            {
              url: '/_images/logo@512.png',
              width: 512,
              height: 512,
            },
          ],
        }}
      />
    </>
  );
};

export default Seo;
