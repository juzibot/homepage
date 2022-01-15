/* eslint-disable */
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
const logoUrls = Array(44)
  .fill(null)
  .map((_, index) => {
    return `/images/index-logos/${index + 1}.png`;
  });

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
          {logoUrls.map((item, index) => {
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
      </div>
    </>
  );
};

export default LogosWall;
