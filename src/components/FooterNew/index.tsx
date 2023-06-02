import { IFooterMenu, IFriendLink } from '@src/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import ContactModal from '../common/ContactModal';
import { useState } from 'react';
import ContactUsSimpleModal from '../ContactUsSimpleModal';
const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr: false });

const Footer: NextPage = () => {
  const { t, i18n } = useTranslation(['common']);
  const [showContactUs, setShowContactUs] = useState(false);

  const menus: (IFooterMenu | undefined)[] = [
    {
      title: t('footer-menu-1-title'),
      isDisable: true,
      child: [
        {
          title: t('footer-menu-1-1-title'),
          url: '/features/customer-acquisition',
        },
        { title: t('footer-menu-1-2-title'), url: '/features/sop' },
        {
          title: t('footer-menu-1-3-title'),
          url: '/features/contact-platform',
        },
        { title: t('footer-menu-1-4-title'), url: '/features/data-center' },
      ].concat(
        i18n.language === 'zh'
          ? [
              {
                title: t('footer-menu-1-5-title'),
                url: '/features/management',
              },
              { title: t('footer-menu-1-6-title'), url: '/features/security' },
            ]
          : []
      ),
    },
    i18n.language === 'zh'
      ? {
          title: t('footer-menu-2-title'),
          isDisable: true,
          child: [
            { title: t('footer-menu-2-1-title'), url: '/solutions/general' },
            { title: t('footer-menu-2-2-title'), url: '/solutions/increase' },
            { title: t('footer-menu-2-3-title'), url: '/solutions/operate' },
            {
              title: t('footer-menu-2-4-title'),
              url: '/solutions/customer-service',
            },
            {
              title: t('footer-menu-2-5-title'),
              url: '/solutions/consumer-goods',
            },
            { title: t('footer-menu-2-6-title'), url: '/solutions/education' },
            { title: t('footer-menu-2-7-title'), url: '/solutions/finance' },
            { title: t('footer-menu-2-8-title'), url: '/solutions/health' },
          ],
        }
      : undefined,
    {
      title: t('footer-menu-3-title'),
      child: [
        { title: t('footer-menu-3-3-title'), url: 'https://wechaty.js.org/' },
        { title: t('footer-menu-3-4-title'), url: '/cases', isDisable: true, },
        { title: t('footer-menu-3-5-title'), url: 'https://blog.juzibot.com/' },
        {
          title: t('footer-menu-3-6-title'),
          url: 'https://work.weixin.qq.com/nl/learning',
        },
      ],
    },
    {
      title: t('footer-menu-4-title'),
      child: [
        {
          title: t('footer-menu-4-1-title'),
          url: `/${i18n.language}/features/about-us`,
        },
        {
          title: t('footer-menu-4-3-title'),
          url: 'https://juzibot.com/join-us',
        },
        {
          title: t('footer-menu-4-4-title'),
          url: 'https://miaohui.juzibot.com/agreement',
        },
        {
          title: t('footer-menu-4-5-title'),
          tooltip:
            i18n.language === 'zh'
              ? '北京市海淀区中关村智造大街 F 座五层'
              : 'Click to View',
          url: 'https://j.map.baidu.com/bb/gw1c',
        },
        { title: t('footer-menu-4-6-title'), url: 'mailto: sales@juzi.bot' },
      ],
    },
  ];

  const friendLinks: IFriendLink[] = [
    {
      title: t('friendlink-wework'),
      url: 'https://work.weixin.qq.com/',
    },
    {
      title: t('friendlink-telrobot'),
      url: 'https://www.telrobot.top/',
    },
    {
      title: t('friendlink-authing'),
      url: 'https://www.authing.cn/',
    },
    {
      title: t('friendlink-5g-msg'),
      url: 'https://www.5g-msg.com/',
    },
  ];

  const handleClickHideMenu = () => {
    setShowContactUs(true);
  }

  return (
    <>
      <ContactModal />
      <footer className={i18n.language}>
        <div className="wrapper footer-bar">
          <div className="container">
            <div className="menu-container">
              <div className="logo">
                <Image
                  src="https://cdn-official-website.juzibot.com/images/logo.svg"
                  width={120}
                  height={64}
                  draggable="false"
                  alt="logo"
                ></Image>
              </div>

              {menus.map((menu) =>
                menu ? (
                  <div key={menu.title} className="menu-group">
                    <div className="title">{menu.title}{menu.isDisable}</div>
                    <div className="menus">
                      {menu.child.map((item, idx) => {
                        const isDisable = menu.isDisable || item.isDisable;
                        return item.tooltip ? (
                          <div className="tooltips" key={idx}>
                            <a
                              data-tip
                              data-for="address"
                              href={isDisable ? undefined : item.url}
                              {...(item.url?.includes('http')
                                ? { target: '_blank', rel: 'noreferrer' }
                                : { target: '_self' })}
                              onClick={isDisable ? handleClickHideMenu : undefined}
                            >
                              {item.title}
                            </a>
                            <ReactTooltip
                              id="address"
                              place="right"
                              effect="solid"
                              type="dark"
                            >
                              <span>{item.tooltip}</span>
                            </ReactTooltip>
                          </div>
                        ) : (
                          <a
                            href={isDisable ? undefined : item.url}
                            key={idx}
                            {...(item.url?.includes('http')
                              ? { target: '_blank', rel: 'noreferrer' }
                              : { target: '_self' })}
                            onClick={isDisable ? handleClickHideMenu : undefined}
                          >
                            {item.title}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                ) : undefined
              )}
            </div>
          </div>
        </div>

        <div className="wrapper registration">
          <div className="container registration-container">
            <div className="friendship-links">
              <span className="friendlink">{t('friendlink')}</span>
              {friendLinks.map(({ title, url }) => (
                <Link key={title} href={url}>
                  <a className="friendlink" target="_blank" rel="noreferrer">
                    {title}
                  </a>
                </Link>
              ))}
            </div>

            <div className="registration">
              <span className="copyright">{t('copyright')}</span>
              <Link href="https://beian.miit.gov.cn/">
                <a className="beian" target="_blank" rel="noreferrer">
                  {t('registration')}
                </a>
              </Link>
              <Link href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802033527">
                <a className="beian-portal" target="_blank" rel="noreferrer">
                  <Image
                    src="https://cdn-official-website.juzibot.com/images/icons/beian.png"
                    alt="beian"
                    width="16"
                    height="16"
                  />
                  <span style={{ marginLeft: 4 }}>
                    {t('registration-portal')}
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <ContactUsSimpleModal open={showContactUs} onCancel={() => setShowContactUs(false)} />
    </>
  );
};

export default Footer;
