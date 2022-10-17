import { IFooterMenu, IFriendLink } from '@src/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import ContactModal from '../common/ContactModal';
import cx from '@src/utils/cx';
import { Collapse } from 'antd';
import styles from './index.module.scss';
const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr: false });
const { Panel } = Collapse; 

const FooterMobile: NextPage = () => {
  const { t, i18n } = useTranslation(['common']);

  const menus: (IFooterMenu | undefined)[] = [
    {
      title: t('footer-menu-1-title'),
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
        // {
        //   title: t('footer-menu-3-1-title'),
        //   url: 'https://k0auuqcihb.feishu.cn/docs/doccnJMlpBUC1NAHW7ujCXVxaUB',
        // },
        // { title: t('footer-menu-3-2-title'), url: 'https://docs.juzibot.com/' },
        { title: t('footer-menu-3-3-title'), url: 'https://wechaty.js.org/' },
        { title: t('footer-menu-3-4-title'), url: '/cases' },
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
          url: `/${i18n.language}/about-us`,
        },
        {
          title: t('footer-menu-4-3-title'),
          url: 'https://juzibot.com/join-us',
        },
        {
          title: t('footer-menu-4-4-title'),
          url: 'https://qiwei.juzibot.com/agreement',
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
  return (
    <>
      {/* <ContactModal /> */}
      <footer className={cx(i18n.language, styles.footer, 'py-10 bg-[#F9F9F9]')}>
        <div className="pl-">
          <Image
            src="https://cdn-official-website.juzibot.com/images/logo.svg"
            width={120}
            height={64}
            draggable="false"
            alt="logo"
          />
        </div>

        <div>
          <Collapse
            ghost
            expandIconPosition="end"
          >
            {
              menus.filter(d => d).map((d, i) => (
                <Panel header={t(d!.title)} key={i}>
                  {
                    d?.child.map((e, j) => (
                      <p key={j}>
                        <a
                          href={e.url}
                          {...(e.url?.includes('http')
                            ? { target: '_blank', rel: 'noreferrer' }
                            : { target: '_self' })}
                        >
                          {t(e.title)}</a>
                      </p>
                    ))
                  }
                </Panel>
              ))
            }
          </Collapse>
        </div>

        <div className="mt-14">
          <div className="text-[#54657E] text-center">
            <span className="friendlink">{t('friendlink')}</span>
            {friendLinks.map(({ title, url }) => (
              <Link key={title} href={url}>
                <a className="text-[#54657E] hover:text-[#AAB9CA] mr-2" target="_blank" rel="noreferrer">
                  {title}
                </a>
              </Link>
            ))}
          </div>

          <div className="text-[#AAB9CA] text-center leading-7 mt-2">
            <div className="copyright">{t('copyright')}</div>
            <div>
              <Link href="https://beian.miit.gov.cn/">
                <a className="text-[#AAB9CA] hover:text-[#AAB9CA]" target="_blank" rel="noreferrer">
                  {t('registration')}
                </a>
              </Link>
            </div>
            <div>
              <Link href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802033527">
                <a className="text-[#AAB9CA] hover:text-[#AAB9CA] inline-flex items-center" target="_blank" rel="noreferrer">
                  <img
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
    </>
  );
};

export default FooterMobile;
