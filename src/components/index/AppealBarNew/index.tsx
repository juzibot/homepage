import { ContactUsPureModalWithButton } from '@src/components/ContactUsPureModal';
import ContactUsSimpleModal from '@src/components/ContactUsSimpleModal';
import { useShowModal } from '@src/utils/showModal';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AppealBar: NextPage<{ isRed?: boolean; useSimpleModal?: boolean; imageNode?: React.ReactNode; }> = ({ isRed, useSimpleModal, imageNode }) => {
  const { t } = useTranslation(['homepage']);
  const [showContactUs, setShowContactUs] = useState(false);
  const showModal = useShowModal();
  const router = useRouter();
  const handleClick = () => {
    if (['/', '/features/ai', '/features/rpa'].includes(router.pathname)) {
      showModal();
    } else {
      setShowContactUs(true);
    }
  };
  return (
    <div className="content">
      <div className="title text-center">{isRed ? '即日起，建立安全·高效的数字化服务体系' : 'RPA + AI，打造下一代基于 IM 跨平台，对话式营销云'}</div>
      {useSimpleModal ? (
        <button className="white-button start-button !shadow-none" onClick={handleClick}>
          {t('appeal-start-free')}
        </button>
      ) : (
        <ContactUsPureModalWithButton>
          <button className="white-button start-button !shadow-none">
            {t('appeal-start-free')}
          </button>
        </ContactUsPureModalWithButton>
      )}
      <ContactUsSimpleModal
        open={showContactUs}
        onCancel={() => setShowContactUs(false)}
        imageNode={imageNode}
      />
    </div>
  );
};

export default AppealBar;
