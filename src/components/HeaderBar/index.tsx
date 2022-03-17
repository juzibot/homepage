import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderBarMenu, IMenuItemProps } from '@src/interfaces';
import { useState, useEffect } from 'react';
import { host } from '@src/config';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { FeatureMenu, SolutionMenu } from './DropdownMenus';
import { isBrowserChrome } from '@src/utils/isBrowserChrome';

const MenuItem: NextPage<IMenuItemProps> = ({
  hasArrow,
  children,
  href,
  onClick,
  onMenuHide,
  onMenuHover,
  linkTarget,
}) => {
  return (
    <>
      <Link href={href}>
        <a
          className="menu-item"
          draggable="false"
          target={linkTarget || '_self'}
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
  '/features/': 'feature-page-header',
  '/solutions/': 'feature-page-header',
};

const HeaderBar: NextPage = () => {
  const { t } = useTranslation(['common']);
  const [borderBottomVisible, setBorderBottomVisible] = useState(false);
  const [isChrome, setIsChrome] = useState(true);
  const [activeMenu, setActiveMenu] = useState<HeaderBarMenu | null>(null);
  const [headerbarExtraClass, setHeaderbarExtraClass] = useState('');

  const { pathname } = useRouter();

  useEffect(() => {
    for (const path in headerbarExtraClassMap) {
      if (pathname.includes(path)) {
        setHeaderbarExtraClass(headerbarExtraClassMap[path]);
      }
    }
    setActiveMenu(null);
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
          <div style={{ display: 'none' }}>
            <img
              src="https://cdn-official-website.juzibot.com/images/logo@512.png"
              alt="logo for wechat sharing"
            ></img>
          </div>
          <menu className="header-left">
            <a className="logo" href={host}>
              <Image
                alt="logo"
                src="https://cdn-official-website.juzibot.com/images/logo.png"
                width={106}
                height={64}
                draggable="false"
              ></Image>
            </a>
            <WeworkBar />
            <MenuItem
              href="#"
              hasArrow
              onMenuHover={() => setActiveMenu(HeaderBarMenu.FEATURES)}
              onMenuHide={() => setActiveMenu(null)}
            >
              {t('products')}
            </MenuItem>
            <MenuItem
              href="#"
              hasArrow
              onMenuHover={() => setActiveMenu(HeaderBarMenu.SOLUTIONS)}
              onMenuHide={() => setActiveMenu(null)}
            >
              {t('solutions')}
            </MenuItem>
            <MenuItem href="/cases">{t('cases')}</MenuItem>
            <MenuItem href="https://blog.juzibot.com/" linkTarget="_blank">
              {t('course')}
            </MenuItem>
            <MenuItem href="https://wechaty.js.org/" linkTarget="_blank">
              {t('developer')}
            </MenuItem>
            <MenuItem href="/about-us">{t('about')}</MenuItem>
          </menu>

          <menu className="header-right">
            <Link href="#">
              <a
                className="menu-item primary-link"
                draggable="false"
                onClick={() => {
                  document
                    .getElementById('contact-modal')
                    ?.setAttribute('style', 'display: flex');
                }}
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
          <FeatureMenu
            visibility={activeMenu === HeaderBarMenu.FEATURES}
            current={activeMenu}
            onHide={() => setActiveMenu(null)}
          />
          <SolutionMenu
            visibility={activeMenu === HeaderBarMenu.SOLUTIONS}
            current={activeMenu}
            onHide={() => {}}
          />
          {/* <QRCodeToast visibility={activeMenu === HeaderBarMenu.QRCODE} /> */}
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
