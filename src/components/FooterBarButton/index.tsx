import { useTranslation } from 'react-i18next';
import ContactUsSimpleModal from '../ContactUsSimpleModal';
import React, { useState } from 'react';
import { useShowModal } from '@src/utils/showModal';
import { useRouter } from 'next/router';
import ContactUsModal from '../ContactUsModal';
import cls from 'classnames';
import { defaultContactUsPaths } from '@src/config';

const FooterBarButton = ({ url, isMobile, useModal, imageNode }: { url?: string; isMobile?: boolean; useModal?: boolean; imageNode?: React.ReactNode }) => {
  const { t } = useTranslation(['homepage']);
  const [showContactUs, setShowContactUs] = useState(false);
  const showPcModal = useShowModal();
  const router = useRouter();
  const handleClick = () => {
    if (useModal) {
      if (!isMobile && defaultContactUsPaths.includes(router.pathname)) {
        showPcModal();
      } else {
        setShowContactUs(true);
      }
    } else {
      window.open(url);
    }
  };
  return (
    <div className="content">
      <div className={cls(isMobile ? 'title text-center' : 'title')}>RPA + AI，打造下一代基于 IM 跨平台，对话式营销云</div>
      <button className="white-button start-button !shadow-none" onClick={handleClick}>
        {t('appeal-start-free')}
      </button>
      <ContactUsSimpleModal
        open={!isMobile && showContactUs}
        onCancel={() => setShowContactUs(false)}
        imageNode={imageNode}
      />
      <ContactUsModal
        open={isMobile && showContactUs}
        onCancel={() => setShowContactUs(false)}
      />
    </div>
  );
};

export default FooterBarButton;
