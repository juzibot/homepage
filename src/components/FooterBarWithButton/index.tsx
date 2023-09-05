import React, { useState } from 'react';
import { useShowModal } from '@src/utils/showModal';
import cls from 'classnames';
import { ContactUsOption } from '../common/emitter';
import { useMediaQuery } from '@react-hookz/web';
import ContactUsModal from '../ContactUsModal';
import { pick } from 'lodash';

type Props = {
  title?: string
  buttonText?: string
  contactUsOption?: ContactUsOption
  onButtonClick?: () => void
  onClick?: () => void
}

const FooterBarWithButton = (props: Props = {}) => {
  const {
    title = 'RPA + AI，打造下一代基于 IM 跨平台，对话式营销云',
    buttonText = '免费使用',
    contactUsOption,
    onButtonClick,
    onClick,
  } = props
  const isMobile = useMediaQuery('only screen and (max-width : 600px)');
  const showPcModal = useShowModal();
  const [showMobileModal, setShowMobileModal] = useState(false);

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
      return
    }
    if (isMobile) {
      setShowMobileModal(true);
      return;
    }
    showPcModal(contactUsOption);
  };
  return (
    <div className="content" onClick={onClick}>
      <div className={cls(isMobile ? 'title text-center' : 'title')}>{title}</div>
      <button className="white-button start-button !shadow-none" onClick={handleClick}>
        {buttonText}
      </button>
      <ContactUsModal
        {...pick(props.contactUsOption, ['type', 'qrCode'])}
        open={showMobileModal}
        onCancel={() => setShowMobileModal(false)}
      />
    </div>
  );
};

export default FooterBarWithButton;