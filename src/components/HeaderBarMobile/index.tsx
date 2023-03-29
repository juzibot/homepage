import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { host } from '@src/config';
import { useTranslation } from 'react-i18next';
import cx from '@src/utils/cx';
import ContactUsModal from '../ContactUsModal';

const HeaderBarMobile: NextPage = () => {
  const { i18n } = useTranslation(['common']);
  const isZh = i18n.language === 'zh';
  const [showContactUsModal, setShowContactUsModal] = useState(false);

  function changeLanguage() {
    location.href = host + (isZh ? '/en/start' : '/');
  }

  return (
    <div className={cx(i18n.language, 'px-4 flex justify-between items-center')}>
      <Image
        alt="logo"
        src="https://cdn-official-website.juzibot.com/images/logo.png"
        width={106}
        height={64}
        draggable="false"
      />
      <div className="text-jz-text-3 font-medium flex">
        <span className="inline-flex" onClick={changeLanguage}>
          {isZh ? 'EN' : '中文'}
          <img src="https://cdn-official-website.juzibot.com/images/icons/arrow.svg" alt="" />
        </span>
        {isZh && (
          <>
            <img className="ml-4" src="https://cdn-official-website.juzibot.com/images/icons/contact-us.svg" alt="" onClick={() => setShowContactUsModal(true)} />
            <img className="ml-4" src="https://cdn-official-website.juzibot.com/images/icons/user.svg" alt="" onClick={() => setShowContactUsModal(true)} />
            <img className="ml-4 hidden" src="https://cdn-official-website.juzibot.com/images/icons/menu-more.svg" alt="" />
          </>
        )}
      </div>
      <ContactUsModal
        visible={showContactUsModal}
        onCancel={() => setShowContactUsModal(false)}
        onOk={() => setShowContactUsModal(false)}
      />
    </div>
  )
};

export default HeaderBarMobile;
