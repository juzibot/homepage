import { ICaseDetailPageProps, ICompanyItemProps } from '@src/interfaces';
import { companies, CompanyItem } from '@src/pages/cases';
import { shuffle } from 'lodash';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AppealBar from '../index/AppealBar';

export const CaseDetailPage: NextPage<ICaseDetailPageProps> = ({
  themeColor,
  title,
  brief,
  datas,
  steps,
  features,
  achievements,
  logoUrl,
}) => {
  const [moreCompanies, setMoreCompanies] = useState<ICompanyItemProps[]>([]);
  useEffect(() => {
    setMoreCompanies(shuffle(companies.filter((item) => item.title !== title)));
  }, [title]);

  return (
    <>
      <div className="wrapper case-detail-page">
        <div className="container">
          <img
            src={`/_images/cases/icons/${logoUrl}.svg`}
            width="120"
            height="120"
            alt="logo"
            draggable="false"
            style={{ transform: 'translateX(-20px)' }}
          />

          <h1 className="title">{title}</h1>
          <div className="brief">{brief}</div>

          <div className="datas-bar">
            {datas.map((item) => (
              <div className="item" key={item.title}>
                <h3 style={{ color: themeColor }}>{item.title}</h3>
                <div className="subtitle">{item.subtitle}</div>
              </div>
            ))}
          </div>

          <div className="user-tour">
            <h3>用户旅程</h3>

            <section className="tours-bar">
              {steps.map((item) => (
                <div className="item" key={item}>
                  <div className="dot">
                    <Image
                      src="/_images/cases/icons/dot.svg"
                      alt="dot"
                      draggable="false"
                      width="16"
                      height="16"
                    />
                  </div>

                  <span>{item}</span>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>

      <div className="wrapper case-detail-features-page">
        <div className="container">
          <h1>句子助力</h1>

          <div className="items">
            {features.map((item) => (
              <div className="item" key={item.title}>
                <Image
                  src={`/_images/cases/round/${item.icon}`}
                  width="64"
                  height="64"
                  alt="icon"
                  draggable="false"
                />

                <h3>{item.title}</h3>
                <div className="content">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper case-detail-achievements-page">
        <div className="container">
          <h1>运营效果</h1>
          <div className="items">
            {achievements.map((item) => (
              <div className="item" key={item.title}>
                <Image
                  src={`/_images/cases/icons/${item.icon}.svg`}
                  alt="icon"
                  width="18"
                  height="18"
                  draggable="false"
                />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper case-detail-read-more">
        <div className="container">
          <h1>查看更多客户故事</h1>
          <div className="items-box">
            {moreCompanies.slice(0, 3).map((item) => (
              <CompanyItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper appeal-bar">
        <div className="container">
          <AppealBar />
        </div>
      </div>
    </>
  );
};
