import Aos from 'aos';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AppealBar: NextPage = () => {
  const { t } = useTranslation(['homepage']);
  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);
  return (
    <div className="content" data-aos="fade-in">
      <div className="title">{t('appeal-title')}</div>
      <button
        className="white-button start-button"
        onClick={() => {
          if (process.browser)
            window.open('https://qiwei.juzibot.com/user/login');
        }}
      >
        {t('appeal-start-free')}
      </button>
    </div>
  );
};

export default AppealBar;
