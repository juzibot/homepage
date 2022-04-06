import { host } from '@src/config';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const AppealBar: NextPage = () => {
  const { t } = useTranslation(['homepage']);
  const { pathname } = useRouter();
  return (
    <div className="content">
      <div className="title">{t('appeal-title')}</div>
      <button
        className="white-button start-button"
        onClick={() => {
          if (process.browser)
            window.open(
              `https://qiwei.juzibot.com/user/login?from=footeruse&rediect=${
                host + pathname
              }`
            );
        }}
      >
        {t('appeal-start-free')}
      </button>
    </div>
  );
};

export default AppealBar;
