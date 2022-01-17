import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IMenuItemProps } from '@src/interfaces';
import { useState, useEffect } from 'react';
import { host } from '@src/config';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const MenuItem: NextPage<IMenuItemProps> = ({
  hasArrow,
  children,
  href,
  onClick,
}) => {
  return (
    <Link href={href}>
      <a
        className="menu-item"
        draggable="false"
        target="_self"
        onClick={onClick}
      >
        <span>{children}</span>
        {hasArrow ? (
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: 4 }}
          >
            <path
              d="M4.99999 3.78132L8.29999 0.481323L9.24266 1.42399L4.99999 5.66666L0.757324 1.42399L1.69999 0.481323L4.99999 3.78132Z"
              fill="#54657E"
            />
          </svg>
        ) : null}
      </a>
    </Link>
  );
};

const headerbarExtraClassMap: { [path: string]: string } = {
  '/about-us': 'about-us',
};

const HeaderBar: NextPage = () => {
  const { t, i18n } = useTranslation(['common']);
  const { language } = i18n;
  const [borderBottomVisible, setBorderBottomVisible] = useState(false);
  const [isChrome, setIsChrome] = useState(true);
  const [isContactQrcodeVisible, setIsContactQrcodeVisible] = useState(false);
  const [headerbarExtraClass, setHeaderbarExtraClass] = useState('');

  const { pathname } = useRouter();

  useEffect(() => {
    setHeaderbarExtraClass(headerbarExtraClassMap[pathname] || '');
  }, [pathname]);

  useEffect(() => {
    if (process.browser) {
      window.addEventListener('scroll', () => {
        setBorderBottomVisible(window.scrollY > 0);
      });
      setIsChrome(/Chrome|Safari/.test(navigator.userAgent));
    }
  }, []);

  return (
    <>
      <header
        className={`wrapper header-bar ${
          !isChrome ? 'opacity' : ''
        } ${headerbarExtraClass} ${borderBottomVisible ? 'has-bg' : ''}`}
        style={{
          borderBottom: borderBottomVisible
            ? '1px solid #eee'
            : '1px solid #ffffff00',
        }}
      >
        <div className="container">
          <menu className="header-left">
            <a className="logo" href={host}>
              <Image
                alt="logo"
                src="https://cdn-official-website.juzibot.com/images/logo.svg"
                width={120}
                height={64}
                draggable="false"
              ></Image>
            </a>
            <MenuItem href="https://botorange.com/">{t('products')}</MenuItem>
            <MenuItem href="https://botorange.com/">{t('solutions')}</MenuItem>
            {/* <MenuItem href="/">{t('cases')}</MenuItem> */}
            <MenuItem href="https://blog.juzibot.com/">{t('course')}</MenuItem>
            <MenuItem href="https://wechaty.js.org/">{t('developer')}</MenuItem>
            <MenuItem href="/about-us">{t('about')}</MenuItem>
          </menu>

          <menu className="header-right">
            {/* <MenuItem
              hasArrow
              onClick={() =>
                location.replace(`${host}/${language === 'zh' ? 'en' : 'zh'}`)
              }
              href="#"
            >
              {t('language')}
            </MenuItem> */}
            <Link href="#">
              <a
                className="menu-item primary-link"
                draggable="false"
                onMouseMove={() => setIsContactQrcodeVisible(true)}
                onMouseOut={() => setIsContactQrcodeVisible(false)}
              >
                {t('lets-talk')}
              </a>
            </Link>
            <Link href="https://qiwei.juzibot.com/user/login">
              <a className="menu-item primary-link round" draggable="false">
                {t('login')}
              </a>
            </Link>
          </menu>
        </div>
      </header>

      <div className="wrapper menu-box">
        <div className="container">
          <div
            className={`contact-menu ${
              isContactQrcodeVisible ? 'visible' : 'hidden'
            }`}
          >
            <div className="box">
              <Image
                src="https://cdn-official-website.juzibot.com/images/contact-qrcode.png"
                width="200"
                height="200"
                alt="qrcode"
                draggable="false"
              />

              <span>{t('lets-talk-scan-qrcode')}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
