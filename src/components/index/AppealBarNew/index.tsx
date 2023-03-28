import { ContactUsPureModalWithButton } from '@src/components/ContactUsPureModal';
import { useShowModalNew } from '@src/utils/showModalNew';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const AppealBar: NextPage = () => {
  const { t } = useTranslation(['homepage']);
  const showModal = useShowModalNew();
  return (
    <div className="content">
      <div className="title">即日起，建立安全·高效的数字化服务体系</div>
      <ContactUsPureModalWithButton>
        <button className="white-button start-button !shadow-none" onClick={showModal}>
          {t('appeal-start-free')}
        </button>
      </ContactUsPureModalWithButton>
    </div>
  );
};

export default AppealBar;
