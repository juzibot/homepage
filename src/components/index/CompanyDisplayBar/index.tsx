import { ICompanyProps } from '@src/interfaces';
import Aos from 'aos';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Company: NextPage<ICompanyProps> = ({ iconUrl, title, subTitle, onHover, selected }) => {
  return (
    <div
      className="company"
      onMouseMove={onHover}
      onTouchMove={onHover}
      style={{ filter: selected ? 'unset' : 'grayscale(100%)' }}
    >
      <div className="title-bar">
        <img src={iconUrl} alt={title} draggable="false"></img>
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
      companyName: '啄木鸟家庭维修',
      companyLogoUrl: '/images/icons/zhuomuniao.svg',
      companyBrief: '使用句子互动后，15人客服团队，服务 300 万客户，每个客服日对话 500 次',
      redirectUrl: '/',
      comment: '用过句子互动产品后，再也不考虑其他 SCRM 产品了，加油！',
    },
    {
      title: '20,000',
      iconUrl: '/images/icons/growing.svg',
      subTitle: '人/天',
      companyName: '啄木鸟家庭维修',
      companyLogoUrl: '/images/icons/zhuomuniao.svg',
      companyBrief: '使用句子互动后，15人客服团队，服务 300 万客户，每个客服日对话 500 次',
      redirectUrl: '/',
      comment: '用过句子互动产品后，再也不考虑其他 SCRM 产品了，加油！！',
    },
    {
      title: '1:15',
      iconUrl: '/images/icons/rocket.svg',
      subTitle: 'ROI',
      companyName: '啄木鸟家庭维修',
      companyLogoUrl: '/images/icons/zhuomuniao.svg',
      companyBrief: '使用句子互动后，15人客服团队，服务 300 万客户，每个客服日对话 500 次',
      redirectUrl: '/',
      comment: '用过句子互动产品后，再也不考虑其他 SCRM 产品了，加油！！',
    },
    {
      title: '99.99%',
      iconUrl: '/images/icons/contact.svg',
      subTitle: '稳定性',
      companyName: '啄木鸟家庭维修',
      companyLogoUrl: '/images/icons/zhuomuniao.svg',
      companyBrief: '使用句子互动后，15人客服团队，服务 300 万客户，每个客服日对话 500 次',
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
      <div className="title" data-aos="fade-in">现在，你也可以像他们一样</div>
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

      <div className="comment-bar" data-aos="fade-in">
        <img className="quote" src="/images/icons/quote.svg" draggable="false" alt="quote"></img>
        <span className="comment">{items[selectedCompanyIdx]['comment']}</span>
        <img
          className="quote reverse"
          src="/images/icons/quote.svg"
          draggable="false"
          alt="quote"
        ></img>
      </div>

      <div className="company-info" data-aos="fade-in">
        <img
          className="logo"
          alt="logo"
          src={items[selectedCompanyIdx]['companyLogoUrl']}
          draggable="false"
        ></img>
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
