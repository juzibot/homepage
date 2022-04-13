import { showModal } from '@src/utils/showModal';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const AppealBar: NextPage = () => {
  const { t } = useTranslation(['homepage']);
  return (
    <div className="content">
      <div className="title">{t('appeal-title')}</div>
      <button className="white-button start-button" onClick={showModal}>
        {t('appeal-start-free')}
      </button>
    </div>
  );
};

export default AppealBar;
