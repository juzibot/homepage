import { ICompanyProps } from '@src/interfaces';
import Aos from 'aos';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Company: NextPage<ICompanyProps> = ({ iconUrl, title, subTitle, onHover, selected }) => {
  return (
    <div
      className="company"
      onMouseMove={onHover}
      onTouchMove={onHover}
      style={{ filter: selected ? 'unset' : 'grayscale(100%)' }}
    >
      <div className="title-bar">
        <Image src={iconUrl} alt={title} draggable="false" width="36" height="36"></Image>
        <span className="title">{title}</span>
      </div>
      <div className="subtitle">{subTitle}</div>
    </div>
  );
};

const CompanyDisplayBar: NextPage = () => {
  const items: ICompanyProps[] = [
    {
      title: '300W',
      iconUrl: '/images/icons/contact.svg',
      subTitle: '15 位客服对接用户数',
      companyName: '某家庭维修品牌',
      companyLogoUrl: '/images/icons/logo-0.svg',
      companyBrief: '使用句子互动后，15人客服团队，服务 300 万客户，每个客服日对话 500 次',
      redirectUrl: '/',
      comment: '用过句子互动产品后，再也不考虑其他 SCRM 产品了，加油！',
    },
    {
      title: '20,000',
      iconUrl: '/images/icons/growing.svg',
      subTitle: '人/天',
      companyName: '某本地化品牌',
      companyLogoUrl: '/images/icons/logo-1.svg',
      companyBrief: '使用句子互动，服务覆盖 600+ 县市社群，累计 2500,000 人次触达，日均新增 20,000 用户',
      redirectUrl: '/',
      comment: '用过句子互动产品后，再也不考虑其他 SCRM 产品了，加油！！',
    },
    {
      title: '15+',
      iconUrl: '/images/icons/rocket.svg',
      subTitle: 'ROI',
      companyName: '某母婴品牌',
      companyLogoUrl: '/images/icons/logo-2.svg',
      companyBrief: '使用句子互动后，1:1,000,000 服务半径，月 GMV 高达 1000 万',
      redirectUrl: '/',
      comment: '用过句子互动产品后，再也不考虑其他 SCRM 产品了，加油！！',
    },
    {
      title: '99.9%',
      iconUrl: '/images/icons/safe.svg',
      subTitle: '稳定性',
      companyName: '某政府服务平台',
      companyLogoUrl: '/images/icons/logo-3.svg',
      companyBrief: '使用句子互动后，将 500 万用户快速迁移，每日收发 70,000 条消息',
      redirectUrl: '/',
      comment: '用过句子互动产品后，再也不考虑其他 SCRM 产品了，加油！',
    },
  ];
  const [selectedCompanyIdx, setSelectedCompanyIdx] = useState(0);
  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);
  return (
    <>
      <div className="title" data-aos="fade-in">
        现在，你也可以像他们一样
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
          src="/images/icons/quote.svg"
          draggable="false"
          alt="quote-icon"
          width="24"
          height="16"
        ></Image>
        <span className="comment">{items[selectedCompanyIdx]['comment']}</span>

        <Image
          className="quote reverse"
          src="/images/icons/quote.svg"
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
          <div className="brief">{items[selectedCompanyIdx]['companyBrief']}</div>
        </div>
      </div>

      <a className="read-more" href={items[selectedCompanyIdx]['redirectUrl']}>
        阅读更多 →
      </a>
    </>
  );
};

export default CompanyDisplayBar;
