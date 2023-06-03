/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unreachable */
import { NextPage } from "next";
import SolutionPageMobile from '@src/components/index/SolutionPageMobile';
import HeroPageMobile from '@src/components/index/HeroPageMobile';

const MobileIndexPage: NextPage<{}> = () => {
  return (
    <div className="text-jz-text-3 relative">
      <div className="absolute top-[80px] flex items-center justify-center w-[100%]">
        <a href="https://insight.juzibot.com" target="_blank" className="w-[150px] h-[100px]" style={{ border: 'unset' }}></a>
      </div>
      <img alt="" className='w-full' src="_images/image-page/index-0.png" />
    </div>
  );
  return (
    <div className="text-jz-text-3">
      <HeroPageMobile />
      <SolutionPageMobile />
    </div>
  )
}

export default MobileIndexPage;
