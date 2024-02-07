import React, { useState } from 'react';
import { useShowModal } from '@src/utils/showModal';
import cls from 'classnames';
import { ContactUsOption } from '../common/emitter';
import { useMediaQuery } from '@react-hookz/web';
import ContactUsModal from '../ContactUsModal';
import { pick } from 'lodash';

type Props = {
  // title?: string
  // buttonText?: string
  contactUsOption?: ContactUsOption
  onButtonClick?: () => void
  onClick?: () => void
}

const FooterBarWithButton = (props: Props = {}) => {
  const {
    // title = 'RPA + AI，打造下一代基于 IM 跨平台，对话式营销云',
    // buttonText = '免费使用',
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

  const pcTitle = (
    <div className={cls('title')}>
      <span>AI+RPA，大模型驱动的</span>
      <span className="text-[#EF3BFB] ml-2">AI 数字员工</span>
    </div>
  );
  const mobileTitle = (
    <div className={cls('title')}>
      <div className='text-center text-[28px]'>AI+RPA，</div>
      <div className='text-[22px]'>
        <span>大模型驱动的</span>
        <span className="text-[#EF3BFB] ml-2">AI 数字员工</span>
      </div>
    </div>
  );

  return (
    <div className="content" onClick={onClick}>
      {isMobile ? mobileTitle : pcTitle}
      <span
        style={{ background: 'linear-gradient(96deg, #EF3BFB 0.67%, #6721FF 98.48%)' }}
        className="rounded-full px-10 py-4 text-white cursor-pointer text-[18px]"
        onClick={handleClick}
      >
        立即体验
      </span>
      <ContactUsModal
        {...pick(props.contactUsOption, ['type', 'qrCode'])}
        open={showMobileModal}
        onCancel={() => setShowMobileModal(false)}
      />
    </div>
  );
};

export default FooterBarWithButton;