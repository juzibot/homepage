import { ICompanyProps } from '@src/interfaces';
import Aos from 'aos';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Company: NextPage<ICompanyProps> = ({
  iconUrl,
  title,
  subTitle,
  onHover,
  selected,
}) => {
  return (
    <div
      className="company"
      onMouseMove={onHover}
      onTouchMove={onHover}
      style={{ filter: selected ? 'unset' : 'grayscale(100%)' }}
    >
      <div className="title-bar">
        <Image
          src={iconUrl}
          alt={title}
          draggable="false"
          width="36"
          height="36"
        ></Image>
        <span className="title">{title}</span>
      </div>
      <div className="subtitle">{subTitle}</div>
    </div>
  );
};

const CompanyDisplayBar: NextPage = () => {
  const { t } = useTranslation(['homepage']);
  const items: ICompanyProps[] = [
    {
      iconUrl:
        'https://cdn-official-website.juzibot.com/images/icons/contact.svg',
      redirectUrl: '/',
    },
    {
      iconUrl:
        'https://cdn-official-website.juzibot.com/images/icons/growing.svg',
      redirectUrl: '/',
    },
    {
      iconUrl:
        'https://cdn-official-website.juzibot.com/images/icons/rocket.svg',
      redirectUrl: '/',
    },
    {
      iconUrl: 'https://cdn-official-website.juzibot.com/images/icons/safe.svg',
      redirectUrl: '/',
    },
  ].map((item, index) => ({
    ...item,
    title: t(`company-${index + 1}-title`),
    subTitle: t(`company-${index + 1}-subtitle`),
    companyLogoUrl: `https://cdn-official-website.juzibot.com/images/icons/logo-${index}.svg`,
    companyName: t(`company-${index + 1}-name`),
    companyBrief: t(`company-${index + 1}-brief`),
    comment: t(`company-${index + 1}-comment`),
  }));
  const [selectedCompanyIdx, setSelectedCompanyIdx] = useState(0);
  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);
  return (
    <>
      <div className="title" data-aos="fade-in">
        {t('company-display-title')}
      </div>
      <div className="companies" data-aos="fade-in">
        {items.map((company, idx) => (
          <Company
            {...company}
            key={idx}
            selected={idx === selectedCompanyIdx}
            onHover={() => setSelectedCompanyIdx(idx)}
          />
        ))}
      </div>

      {/* <div className="comment-bar" data-aos="fade-in">
        <Image
          className="quote"
          src="https://cdn-official-website.juzibot.com/images/icons/quote.svg"
          draggable="false"
          alt="quote-icon"
          width="24"
          height="16"
        ></Image>
        <span className="comment">{items[selectedCompanyIdx]['comment']}</span>

        <Image
          className="quote reverse"
          src="https://cdn-official-website.juzibot.com/images/icons/quote.svg"
          draggable="false"
          alt="quote-icon"
          width="24"
          height="16"
        ></Image>
      </div> */}

      <div className="company-info" data-aos="fade-in">
        <div className="logo">
          <Image
            alt="logo"
            src={items[selectedCompanyIdx]['companyLogoUrl']}
            draggable="false"
            width="110"
            height="100"
          ></Image>
        </div>

        <div className="divider"></div>
        <div className="info">
          <div className="name">{items[selectedCompanyIdx]['companyName']}</div>
          <div className="brief">
            {items[selectedCompanyIdx]['companyBrief']}
          </div>
        </div>
      </div>

      <a className="read-more" href={items[selectedCompanyIdx]['redirectUrl']}>
        {t('company-read-more')}
      </a>
    </>
  );
};

export default CompanyDisplayBar;
