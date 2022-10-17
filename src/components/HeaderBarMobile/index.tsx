import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IMenuItemProps } from '@src/interfaces';
import { useState, useEffect } from 'react';
import { host } from '@src/config';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { isBrowserChrome } from '@src/utils/isBrowserChrome';
import { useShowModal } from '@src/utils/showModal';
import cx from '@src/utils/cx';


const headerbarExtraClassMap: { [path: string]: string } = {
  '/about-us': 'about-us',
  '/features/': 'feature-page-header',
  '/solutions/': 'feature-page-header',
  '/culture': 'about-us',
};

const HeaderBarMobile: NextPage = () => {
  const { t, i18n } = useTranslation(['common']);
  const [borderBottomVisible, setBorderBottomVisible] = useState(false);
  const [isChrome, setIsChrome] = useState(true);
  const [headerbarExtraClass, setHeaderbarExtraClass] = useState('');
  const isZh = i18n.language === 'zh';
  const { pathname } = useRouter();
  const showModal = useShowModal();

  useEffect(() => {
    for (const path in headerbarExtraClassMap) {
      if (pathname.includes(path)) {
        setHeaderbarExtraClass(headerbarExtraClassMap[path]);
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (process.browser) {
      window.addEventListener('scroll', () => {
        setBorderBottomVisible(window.scrollY > 0);
      });
      setIsChrome(isBrowserChrome());
    }
  }, []);

  function changeLanguage() {
    location.href = host + (isZh ? '/en' : '/zh');
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
          <img src="/static/icons/arrow.svg" alt="" />
        </span>
        <img className="ml-4" src="/static/icons/contact-us.svg" alt="" />
        <img className="ml-4" src="/static/icons/user.svg" alt="" />
        <img className="ml-4" src="/static/icons/menu-more.svg" alt="" />
      </div>
    </div>
  )
};

export default HeaderBarMobile;
