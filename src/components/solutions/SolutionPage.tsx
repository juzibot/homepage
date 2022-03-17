import { ISolutionPageProps } from '@src/interfaces';
import { CompanyItem } from '@src/pages/cases';
import { NextPage } from 'next';
import Image from 'next/image';
import AppealBar from '../index/AppealBar';

export const SolutionDetailPage: NextPage<ISolutionPageProps> = ({
  heroTitle,
  heroSubtitle,
  solutions,
  challenges,
  backgroundUrl,
  cases
}) => {
  return (
    <>
      <div
        className="wrapper solution-hero-page"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <div className="container">
          <h1>{heroTitle}</h1>
          <div className="subtitle">{heroSubtitle}</div>

          <button
            className="primary-button start-button"
            onClick={() => {
              if (process.browser) {
                window.open('https://qiwei.juzibot.com/user/login', '_blank');
              }
            }}
          >
            立即使用
          </button>
        </div>
      </div>

      <div className="wrapper solution-challenge-page">
        <div className="container">
          <h1>痛点挑战</h1>
          <div className="items">
            {challenges.map((item) => (
              <div className="item" key={item.title}>
                <Image
                  src={`https://cdn-official-website.juzibot.com/images/solutions/${item.icon}`}
                  width="64"
                  height="64"
                  alt="icon"
                  draggable="false"
                />

                <div className="title">{item.title}</div>
                <div className="subtitle">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper solution-items-page">
        <div className="container">
          <h1>解决方案</h1>
          <div className="items">
            {solutions.map((item, index) => {
              return (
                <div
                  className="item"
                  key={item.title}
                  style={{
                    flexDirection: index % 2 === 1 ? 'row' : 'row-reverse',
                    alignItems: item.subtitle ? 'flex-start' : 'center',
                  }}
                >
                  <div className="left">
                    <h3 style={{ display: item.subtitle ? 'none' : 'block' }}>
                      {item.title}
                    </h3>
                    {item.items
                      ? item.items.map((itm) => {
                          return (
                            <div className="items-bar" key={itm.title}>
                              <div className="title">
                                <div className="dot" />
                                <span>{itm.title}</span>
                              </div>

                              <div className="subtitle">{itm.subtitle}</div>
                            </div>
                          );
                        })
                      : null}

                    {item.subtitle ? (
                      <div className="solutions-content">
                        <div
                          style={{
                            transform: 'scale(0.8) translateX(-90px)',
                            marginTop: 32,
                          }}
                        >
                          <Image
                            src={item.icon!}
                            width="96"
                            height="130"
                            alt="icon"
                            draggable="false"
                          />
                        </div>

                        <h5>{item.title}</h5>
                        <div className="subtitle">{item.subtitle}</div>
                      </div>
                    ) : null}
                  </div>

                  <div
                    style={{
                      flexShrink: 0,
                      transform: `translateX(${
                        index % 2 === 0 ? '-' : ''
                      }32px)`,
                    }}
                  >
                    <Image
                      src={item.photo}
                      width="496"
                      height="440"
                      alt="photo"
                      draggable="false"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="wrapper case-detail-read-more">
        <div className="container">
          <h1>案例实践</h1>
          <div className="items-box">
            {cases.map((item) => (
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
