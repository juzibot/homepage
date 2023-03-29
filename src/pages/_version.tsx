import { NextPage } from 'next';
import React from 'react';
import getConfig from "next/config";

const AppVersion: NextPage = () => {
  const { publicRuntimeConfig } = getConfig();
  return (
    <div className='p-6'>
      <p>appVersion: {publicRuntimeConfig.appVersion}</p>
      <p>startTime: {publicRuntimeConfig.startTime}</p>
    </div>
  );
};

export default AppVersion;
