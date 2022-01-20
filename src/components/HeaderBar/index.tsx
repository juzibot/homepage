import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderBarMenu, IMenuItemProps } from '@src/interfaces';
import { useState, useEffect } from 'react';
import { host } from '@src/config';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { FeatureMenu, QRCodeToast } from './DropdownMenus';
import { isBrowserChrome } from '@src/utils/isBrowserChrome';

const MenuItem: NextPage<IMenuItemProps> = ({
  hasArrow,
  children,
  href,
  onClick,
  onMenuHide,
  onMenuHover,
}) => {
  return (
    <>
      <Link href={href}>
        <a
          className="menu-item"
          draggable="false"
          target="_self"
          onClick={onClick}
          onMouseMove={onMenuHover}
          onMouseLeave={onMenuHide}
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
    </>
  );
};

const WeworkBar: NextPage = () => {
  return (
    <Link href="https://work.weixin.qq.com/">
      <a target="_blank" rel="noreferrer">
        <div className="wework-bar">
          <Image
            src="https://cdn-official-website.juzibot.com/images/icons/wework.svg"
            width="20"
            height="20"
            alt="wework-icon"
          />
          <span>企业微信官方服务商</span>
        </div>
      </a>
    </Link>
  );
};

const headerbarExtraClassMap: { [path: string]: string } = {
  '/about-us': 'about-us',
  '/features/contact-platform': 'contact-platform-header',
};

const HeaderBar: NextPage = () => {
  const { t } = useTranslation(['common']);
  const [borderBottomVisible, setBorderBottomVisible] = useState(false);
  const [isChrome, setIsChrome] = useState(true);
  const [activeMenu, setActiveMenu] = useState<HeaderBarMenu | null>(null);
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
      setIsChrome(isBrowserChrome());
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
            <WeworkBar />
            <MenuItem
              href="https://botorange.com/"
              hasArrow
              onMenuHover={() => setActiveMenu(HeaderBarMenu.FEATURES)}
              onMenuHide={() => setActiveMenu(null)}
            >
              {t('products')}
            </MenuItem>
            <MenuItem href="https://botorange.com/">{t('solutions')}</MenuItem>
            <MenuItem href="https://blog.juzibot.com/">{t('course')}</MenuItem>
            <MenuItem href="https://wechaty.js.org/">{t('developer')}</MenuItem>
            <MenuItem href="/about-us">{t('about')}</MenuItem>
          </menu>

          <menu className="header-right">
            <Link href="#">
              <a
                className="menu-item primary-link"
                draggable="false"
                onMouseMove={() => setActiveMenu(HeaderBarMenu.QRCODE)}
                onMouseOut={() => setActiveMenu(null)}
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

      <div className="wrapper menu-box" onMouseMove={() => setActiveMenu(null)}>
        <div className="container">
          <FeatureMenu visibility={activeMenu === HeaderBarMenu.FEATURES} />
          <QRCodeToast visibility={activeMenu === HeaderBarMenu.QRCODE} />
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
