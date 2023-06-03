/* eslint-disable no-unused-vars */
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IMenuItemProps } from '@src/interfaces';
import { useState, useEffect } from 'react';
import { host } from '@src/config';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { isBrowserChrome } from '@src/utils/isBrowserChrome';
import { ContactUsPureModalWithButton } from '../ContactUsPureModal';
import ContactUsSimpleModal from '../ContactUsSimpleModal';

const MenuItem: NextPage<{
  iconUrl: string;
  hoverIconUrl: string;
  href: string;
}> = ({ iconUrl, hoverIconUrl, href, children }) => {
  const [isHover, toggleHover] = useState(false);
  return (
    <Link href={href}>
      <a>
        <div
          className="dropdown-menu-item"
          onMouseLeave={() => toggleHover(false)}
          onMouseMove={() => toggleHover(true)}
        >
          <div style={{ flexShrink: 0 }}>
            <Image
              src={isHover ? hoverIconUrl : iconUrl}
              alt="header-icon"
              width="16"
              height="16"
              draggable="false"
            />
          </div>

          <div style={{ marginLeft: 12 }}>{children}</div>
        </div>
      </a>
    </Link>
  );
};

const AboutUsMenu: NextPage = () => {
  return (
    <div className="dropdown-menu about-us">
      <div className="box">
        <MenuItem
          iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/16.svg"
          hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/16-o.svg"
          href="/about-us"
        >
          公司介绍
        </MenuItem>
        <MenuItem
          iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/17.svg"
          hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/17-o.svg"
          href="/culture"
        >
          公司文化
        </MenuItem>
      </div>
    </div>
  );
};

const HeaderMenu: NextPage<IMenuItemProps> = ({
  hasArrow,
  children,
  href,
  onClick,
  linkTarget,
  menu,
}) => {
  const [menuVisible, toggleMenuVisible] = useState(false);
  const router = useRouter();
  useEffect(() => {
    toggleMenuVisible(false);
  }, [router.asPath]);

  return href ? (
    <div
      onMouseLeave={() => toggleMenuVisible(false)}
      onMouseMove={() => toggleMenuVisible(true)}
      className="menu-button"
    >
      <Link href={href}>
        <a
          className="menu-item"
          draggable="false"
          target={linkTarget || '_self'}
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
                fill="currentColor"
              />
            </svg>
          ) : null}
        </a>
      </Link>
      {menu && menuVisible ? menu : null}
    </div>
  ) : (
    <div
      onMouseLeave={() => toggleMenuVisible(false)}
      onMouseMove={() => toggleMenuVisible(true)}
      className="menu-button"
    >
      <span className="menu-item" draggable="false" onClick={onClick}>
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
              fill="currentColor"
            />
          </svg>
        ) : null}
      </span>
      {menu && menuVisible ? menu : null}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WeworkBar: NextPage<{ isWhiteIcon: boolean }> = ({ isWhiteIcon }) => {
  return (
    <Link href="https://work.weixin.qq.com/">
      <a target="_blank" rel="noreferrer">
        <div className="wework-bar">
          <Image
            src={isWhiteIcon ? 'https://cdn-official-website.juzibot.com/images/icons/wework-white.svg' : 'https://cdn-official-website.juzibot.com/images/icons/wework.svg'}
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
  '/culture': 'about-us',
};

const HeaderBar: NextPage = () => {
  const { t, i18n } = useTranslation(['common']);
  const [borderBottomVisible, setBorderBottomVisible] = useState(false);
  const [isChrome, setIsChrome] = useState(true);
  const [headerbarExtraClass, setHeaderbarExtraClass] = useState('');
  const isZh = i18n.language === 'zh';
  const { pathname } = useRouter();

  const [showContactUs, setShowContactUs] = useState(false);

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

  const handleClickHideMenu = () => {
    setShowContactUs(true);
  }

  const isNewIndex = ['/', 'index', '/zh', '/zh/index'].includes(pathname) && i18n.language === 'zh';

  const isRedStyle = !borderBottomVisible && isNewIndex;

  return (
    <div className={i18n.language}>
      <header
        className={`wrapper ${!isChrome ? 'opacity' : ''
          } ${headerbarExtraClass} ${isRedStyle ? 'header-bar-new' : 'header-bar-new-sticky has-bg'}`}
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
                src={isRedStyle ? 'https://cdn-official-website.juzibot.com/images/logo-white.svg' : 'https://cdn-official-website.juzibot.com/images/logo.png'}
                width={106}
                height={64}
                draggable="false"
              ></Image>
            </a>
            {/* {isZh && <WeworkBar isWhiteIcon={isRedStyle} />} */}
            <HeaderMenu hasArrow onClick={handleClickHideMenu}>
              {t('products')}
            </HeaderMenu>
            {isZh && (
              <HeaderMenu hasArrow onClick={handleClickHideMenu}>
                {t('solutions')}
              </HeaderMenu>
            )}
            {isZh && <HeaderMenu onClick={handleClickHideMenu}>{t('cases')}</HeaderMenu>}
            <HeaderMenu href="https://blog.juzibot.com/" linkTarget="_blank">
              {t('course')}
            </HeaderMenu>
            <HeaderMenu href="https://wechaty.js.org/" linkTarget="_blank">
              {t('developer')}
            </HeaderMenu>
            {isZh ? (
              <HeaderMenu hasArrow menu={<AboutUsMenu />}>
                {t('about')}
              </HeaderMenu>
            ) : (
              <HeaderMenu href="/about-us">{t('about')}</HeaderMenu>
            )}
          </menu>

          <menu className="header-right">
            <HeaderMenu
              linkTarget="_blank"
              onClick={() => {
                changeLanguage();
              }}
              hasArrow
            >
              {isZh ? 'EN' : '中文'}
            </HeaderMenu>
            {isZh ? (
              // eslint-disable-next-line @next/next/link-passhref
              <Link href="#">
                <ContactUsPureModalWithButton>
                  <a
                    className="menu-item primary-link lets-talk-btn"
                    draggable="false"
                  >
                    {t('lets-talk')}
                  </a>
                </ContactUsPureModalWithButton>
              </Link>
            ) : (
              <Link href="https://qiwei.juzibot.com/user/login">
                <a className="menu-item primary-link lets-talk-btn" draggable="false">
                  {t('lets-talk')}
                </a>
              </Link>
            )}

            <ContactUsPureModalWithButton>
              <div
                className="menu-item primary-link round login-btn"
                draggable="false"
                style={{
                  userSelect: 'none',
                  cursor: 'pointer',
                }}
              >
                {t('login')}
              </div>
            </ContactUsPureModalWithButton>

          </menu>
        </div>
      </header>
      <ContactUsSimpleModal open={showContactUs} onCancel={() => setShowContactUs(false)} />
    </div>
  );
};

export default HeaderBar;
