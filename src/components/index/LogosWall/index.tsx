/* eslint-disable */
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { indexLogos } from '@src/config';

const LogosWall: NextPage = () => {
  const { t } = useTranslation(['homepage']);
  return (
    <>
      <h1 className="title">{t('logos-wall-title')}</h1> 
      <div className="logo-wall">
        <div className="scroll-mask" />
        <div className="logos-scroll-bar">
          {indexLogos.map((item, index) => {
            return (
              <div className="logo" key={`${index}`}>
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
