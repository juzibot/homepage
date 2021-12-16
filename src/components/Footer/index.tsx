import { IFooterMenu, IFriendLink } from '@src/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Footer: NextPage = () => {
  const { t } = useTranslation(['common']);

  const menus: IFooterMenu[] = [
    {
      title: t('footer-menu-1-title'),
      child: [
        { title: t('footer-menu-1-1-title'), url: '/' },
        { title: t('footer-menu-1-2-title'), url: '/' },
        { title: t('footer-menu-1-3-title'), url: '/' },
        { title: t('footer-menu-1-4-title'), url: '/' },
        { title: t('footer-menu-1-5-title'), url: '/' },
        { title: t('footer-menu-1-6-title'), url: '/' },
        { title: t('footer-menu-1-7-title'), url: '/' },
        { title: t('footer-menu-1-8-title'), url: '/' },
        { title: t('footer-menu-1-9-title'), url: '/' },
      ],
    },
    {
      title: t('footer-menu-2-title'),
      child: [
        { title: t('footer-menu-2-1-title'), url: '/' },
        { title: t('footer-menu-2-2-title'), url: '/' },
        { title: t('footer-menu-2-3-title'), url: '/' },
        { title: t('footer-menu-2-4-title'), url: '/' },
        { title: t('footer-menu-2-5-title'), url: '/' },
        { title: t('footer-menu-2-6-title'), url: '/' },
        { title: t('footer-menu-2-7-title'), url: '/' },
        { title: t('footer-menu-2-8-title'), url: '/' },
      ],
    },
    {
      title: t('footer-menu-3-title'),
      child: [
        { title: t('footer-menu-3-1-title'), url: '/' },
        { title: t('footer-menu-3-2-title'), url: '/' },
        { title: t('footer-menu-3-3-title'), url: '/' },
        { title: t('footer-menu-3-4-title'), url: '/' },
        { title: t('footer-menu-3-5-title'), url: '/' },
        { title: t('footer-menu-3-6-title'), url: '/' },
        { title: t('footer-menu-3-7-title'), url: '/' },
      ],
    },
    {
      title: t('footer-menu-4-title'),
      child: [
        { title: t('footer-menu-4-1-title'), url: '/' },
        { title: t('footer-menu-4-2-title'), url: '/' },
        { title: t('footer-menu-4-3-title'), url: '/' },
        { title: t('footer-menu-4-4-title'), url: '/' },
        { title: t('footer-menu-4-5-title'), url: '/' },
        { title: t('footer-menu-4-6-title'), url: '/' },
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
  return (
    <footer className="wrapper footer-bar">
      <div className="container">
        <div className="menu-container">
          <div className="logo">
            <Image
              src="/images/logo.svg"
              width={120}
              height={64}
              draggable="false"
              alt="logo"
            ></Image>
          </div>

          {menus.map((menu) => (
            <div key={menu.title} className="menu-group">
              <div className="title">{menu.title}</div>
              <div className="menus">
                {menu.child.map((item, idx) =>
                  item.tooltip ? (
                    <div key={idx}>{item.title}</div>
                  ) : (
                    <a href={item.url} key={idx}>
                      {item.title}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="registration-container">
        <div className="friendship-links">
          <span className="friendlink">{t('friendlink')}</span>
          {friendLinks.map(({ title, url }) => (
            <Link key={title} href={url}>
              <a className="friendlink" target="_blank">
                {title}
              </a>
            </Link>
          ))}
        </div>

        <div className="registration">
          <span className="copyright">© {t('copyright')}</span>
          <Link href="https://beian.miit.gov.cn/">
            <a className="beian" target="_blank">
              {t('registration')}
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
