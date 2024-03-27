/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
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
import { ContactUsOption } from '../common/emitter';

const MenuItem: NextPage<{
  iconUrl?: string;
  hoverIconUrl?: string;
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
          {
            iconUrl && hoverIconUrl && (
              <div style={{ flexShrink: 0 }}>
              <Image
                  src={isHover ? hoverIconUrl : iconUrl}
                  alt="header-icon"
                  width="16"
                  height="16"
                  draggable="false"
                />
              </div>
            )
          }
          <div style={{ marginLeft: 12 }}>{children}</div>
        </div>
      </a>
    </Link>
  );
};

const SolutionsMenu: NextPage = () => {
  return (
    <div className="dropdown-menu product !h-[200px] !w-[220px]" style={{ transform: "translate(-65px, -6px)"}}>
      <div className="box">
        <MenuItem
          href="/features/government"
        >
          政务解决方案
        </MenuItem>
        <MenuItem
          href="/features/internet"
        >
          互联网解决方案
        </MenuItem>
        <MenuItem
          href="/features/customer"
        >
          消费品解决方案
        </MenuItem>
      </div>
    </div>
  );
  return (
    <div className="dropdown-menu cases">
      <div className="box">
        <div className="flex-row">
          <div style={{ marginLeft: 8 }}>
            <div className="flex-row title-bar">
              <Image
                src="https://cdn-official-website.juzibot.com/images/icons/header-bar/14.svg"
                alt="menu-icon"
                width="24"
                height="24"
              />
              <span>场景</span>
            </div>
            <MenuItem
              iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/06.svg"
              hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/06-o.svg"
              href="/solutions/general"
            >
              私域全链路解决方案
            </MenuItem>
            <MenuItem
              iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/07.svg"
              hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/07-o.svg"
              href="/solutions/customer-service"
            >
              客服场景解决方案
            </MenuItem>
            <MenuItem
              iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/08.svg"
              hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/08-o.svg"
              href="/solutions/increase"
            >
              增长场景解决方案
            </MenuItem>
            <MenuItem
              iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/09.svg"
              hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/09-o.svg"
              href="/solutions/operate"
            >
              规模化运营解决方案
            </MenuItem>
          </div>

          <div style={{ marginLeft: 16 }}>
            <div className="flex-row title-bar">
              <Image
                src="https://cdn-official-website.juzibot.com/images/icons/header-bar/15.svg"
                alt="menu-icon"
                width="24"
                height="24"
              />
              <span>行业</span>
            </div>
            <MenuItem
              iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/10.svg"
              hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/10-o.svg"
              href="/solutions/consumer-goods"
            >
              消费品行业解决方案
            </MenuItem>
            <MenuItem
              iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/11.svg"
              hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/11-o.svg"
              href="/solutions/education"
            >
              教培行业解决方案
            </MenuItem>
            <MenuItem
              iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/12.svg"
              hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/12-o.svg"
              href="/solutions/health"
            >
              健康行业解决方案
            </MenuItem>
            <MenuItem
              iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/13.svg"
              hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/13-o.svg"
              href="/solutions/finance"
            >
              政务金融行业解决方案
            </MenuItem>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductMenu: NextPage = () => {
  const { t, i18n } = useTranslation('common');
  return (
    <div className="dropdown-menu product !h-[150px] !w-[400px]" style={{ transform: "translate(-135px, -6px)"}}>
      <div className="box">
        <MenuItem
          // iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/ai.svg"
          // hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/ai-o.svg"
          href="/features/ai"
        >
          {t('products-1')}
        </MenuItem>
        <MenuItem
          // iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/rpa.svg"
          // hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/rpa-o.svg"
          href="/features/rpa"
        >
          {t('products-2')}
        </MenuItem>
      </div>
    </div>
  );
  return (
    <div
      className="dropdown-menu product"
      style={
        i18n.language === 'en'
          ? {
              width: 360,
              transform: 'translate(-130px, -6px)',
            }
          : {
              height: 320,
            }
      }
    >
      <div className="box">
        <MenuItem
          iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/01.svg"
          hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/01-o.svg"
          href="/features/customer-acquisition"
        >
          {t('footer-menu-1-1-title')}
        </MenuItem>
        <MenuItem
          iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/02.svg"
          hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/02-o.svg"
          href="/features/sop"
        >
          {t('footer-menu-1-2-title')}
        </MenuItem>
        <MenuItem
          iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/03.svg"
          hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/03-o.svg"
          href="/features/contact-platform"
        >
          {t('footer-menu-1-3-title')}
        </MenuItem>
        <MenuItem
          iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/05.svg"
          hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/05-o.svg"
          href="/features/data-center"
        >
          {t('footer-menu-1-4-title')}
        </MenuItem>
        {i18n.language === 'zh' ? (
          <MenuItem
            iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/04.svg"
            hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/04-o.svg"
            href="/features/management"
          >
            {t('footer-menu-1-5-title')}
          </MenuItem>
        ) : null}
      </div>
    </div>
  );
};

const AboutUsMenu: NextPage = () => {
  return (
    <div className="dropdown-menu about-us">
      <div className="box">
        <MenuItem
          // iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/16.svg"
          // hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/16-o.svg"
          href="/about-us"
        >
          公司介绍
        </MenuItem>
        <MenuItem
          // iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/17.svg"
          // hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/17-o.svg"
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
                fill="#54657E"
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
              fill="#54657E"
            />
          </svg>
        ) : null}
      </span>
      {menu && menuVisible ? menu : null}
    </div>
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
  '/culture': 'about-us',
};

const HeaderBar: NextPage = () => {
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
    <div className={i18n.language}>
      <header
        className={`wrapper header-bar ${
          !isChrome ? 'opacity' : ''
        } ${headerbarExtraClass} ${borderBottomVisible ? 'has-bg' : 'has-bg'}`}
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
            {/* {isZh && <WeworkBar />} */}
            <HeaderMenu hasArrow menu={<ProductMenu />}>
              {t('products')}
            </HeaderMenu>
            {isZh ? (
              <HeaderMenu hasArrow menu={<SolutionsMenu />}>
                {t('solutions')}
              </HeaderMenu>
            ) : 
              <HeaderMenu href="/features/customer" linkTarget="_self">
                {t('solutions')}
              </HeaderMenu>
            }
            {isZh && (
            <HeaderMenu href="/chatbot/practice-guide" linkTarget="_self">
              {t('chatbot')}
            </HeaderMenu>
            )}
            {isZh && (
            <HeaderMenu href="https://blog.juzibot.com/" linkTarget="_blank">
              {t('course')}
            </HeaderMenu>
            )}
            <HeaderMenu href="https://wechaty.js.org/" linkTarget="_blank">
              {t('developer')}
            </HeaderMenu>
            <HeaderMenu href="https://chat.juzibot.com/" linkTarget="_blank">
            {t('gpt')}
            </HeaderMenu>
            {isZh ? (
              <HeaderMenu hasArrow menu={<AboutUsMenu />}>
                {t('about')}
              </HeaderMenu>
            ): 
            <HeaderMenu href="/about-us" linkTarget="_self">
              {t('about')}
            </HeaderMenu>
            }
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
              <Link href="#">
                <a
                  className="menu-item primary-link"
                  draggable="false"
                  onClick={() => {
                    let qrCode: ContactUsOption['qrCode'] = 'sf-01';
                     if (pathname === '/about-us') {
                      qrCode = 'juzibot-01';
                     } else if (pathname === '/culture') {
                      qrCode = 'juzibot-02';
                     }
                    showModal({ qrCode });
                  }}
                >
                  {t('lets-talk')}
                </a>
              </Link>

            <div
              className="menu-item primary-link round"
              draggable="false"
              onClick={() => {
                let qrCode: ContactUsOption['qrCode'] = 'sf-01';
                 if (pathname === '/about-us') {
                  qrCode = 'juzibot-01';
                 } else if (pathname === '/culture') {
                  qrCode = 'juzibot-02';
                 }
                showModal({ qrCode });
              }}
              style={{
                userSelect: 'none',
                cursor: 'pointer',
              }}
            >
              {t('login')}
            </div>
          </menu>
        </div>
      </header>
    </div>
  );
};

export default HeaderBar;
