import { ContactUsPureModalWithButton } from '@src/components/ContactUsPureModal';
import { useShowModalNew } from '@src/utils/showModalNew';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const AppealBar: NextPage<{ isRed?: boolean }> = ({ isRed }) => {
  const { t } = useTranslation(['homepage']);
  const showModal = useShowModalNew();
  return (
    <div className="content">
      <div className="title text-center">{isRed ? '即日起，建立安全·高效的数字化服务体系' : 'RPA + AI，打造下一代基于 IM 跨平台，对话式营销云'}</div>
      <ContactUsPureModalWithButton>
        <button className="white-button start-button !shadow-none" onClick={showModal}>
          {t('appeal-start-free')}
        </button>
      </ContactUsPureModalWithButton>
    </div>
  );
};

export default AppealBar;
