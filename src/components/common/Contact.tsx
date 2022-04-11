import { showModal } from '@src/utils/showModal';
import { NextPage } from 'next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ContactButton: NextPage = () => {
  const [popupVisible, togglePopupVisible] = useState(false);
  const { i18n } = useTranslation();
  return i18n.language === 'zh' ? (
    <>
      {popupVisible ? (
        <div className="contact-popup">
          遇到问题了么？
          <div>点击这里跟我聊聊，我们一起解决你的问题~</div>
        </div>
      ) : null}
      <div
        className="contact-button-container"
        onMouseMove={() => togglePopupVisible(true)}
        onMouseLeave={() => togglePopupVisible(false)}
        onClick={showModal}
      >
        <div className="wave w1"></div>
        <div className="wave w2"></div>
        <div className="contact-button"></div>
      </div>
    </>
  ) : null;
};
