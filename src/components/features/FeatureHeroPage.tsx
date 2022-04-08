import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { IFeatureHeroPageProps } from '@src/interfaces';
import { useTranslation } from 'react-i18next';
import { host } from '@src/config';
import { useRouter } from 'next/router';

export const FeatureHeroPage: NextPage<IFeatureHeroPageProps> = ({
  title,
  brief,
  docsUrl,
  datas,
}) => {
  const { t } = useTranslation('features');
  const router = useRouter();
  return (
    <>
      <h1>{title}</h1>
      <section className="brief">{brief}</section>
      <div className="buttons-bar">
        <button
          className="primary-button start-button"
          onClick={() => {
            if (process.browser)
              window.open(
                `https://qiwei.juzibot.com/user/login?from=login&rediect=${
                  host + router.asPath
                }`
              );
          }}
        >
          {t('usage')}
        </button>
        <Link href={docsUrl}>
          <a className="read-docs" target="_blank">
            {t('document')}
          </a>
        </Link>
      </div>

      <div className="data-bar">
        {datas.map(({ title, subtitle, icon }) => (
          <div className="item" key={title}>
            <Image
              src={icon}
              alt="icon"
              width="48"
              height="48"
              draggable="false"
            />
            <div className="info">
              <h3>{title}</h3>
              <div>{subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
