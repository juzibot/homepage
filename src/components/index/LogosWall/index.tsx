/* eslint-disable */
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
const logos = Array(44)
  .fill(null)
  .map((_, index) => {
    return `https://cdn-official-website.juzibot.com/images/index-logos/${index + 1}.png`;
  });

// const logoUrls = [logos.slice(0, 22), logos.slice(22)];

const LogosWall: NextPage = () => {
  const { t } = useTranslation(['homepage']);
  const [isAnimatePaused, toggleAnimatePaused] = useState(false);
  return (
    <>
      <h1 className="title">{t('logos-wall-title')}</h1>
      <div className="logo-wall">
        <div className="scroll-mask" />
        <div
          className="logos-scroll-bar"
          style={{ animationPlayState: isAnimatePaused ? 'paused' : 'running' }}
        >
          {logos.map((item, index) => {
            return (
              <div
                className="logo"
                key={`${index}`}
                onMouseMove={() => toggleAnimatePaused(true)}
                onMouseLeave={() => toggleAnimatePaused(false)}
              >
                <div className="logo-item">
                  <img src={item} alt="logo" draggable="false" />
                </div>
              </div>
            );
          })}
        </div>

        {/* <div
          className="logos-scroll-bar"
          style={{ animationPlayState: isAnimatePaused ? 'paused' : 'running' }}
        >
          {logoUrls[1].map((item, index) => {
            return (
              <div
                className="logo"
                key={`${index + 22}`}
                onMouseMove={() => toggleAnimatePaused(true)}
                onMouseLeave={() => toggleAnimatePaused(false)}
              >
                <div className="logo-item">
                  <img src={item} alt="logo" draggable="false" />
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default LogosWall;
