/* eslint-disable no-unreachable */
import { NextPage } from "next";
import SolutionPageMobile from '@src/components/index/SolutionPageMobile';
import HeroPageMobile from '@src/components/index/HeroPageMobile';

const MobileIndexPage: NextPage<{}> = () => {
  return (
    <div className="text-jz-text-3">
      <img className='w-full' src="_images/image-page/1-1.png" />
      <img className='w-full' src="_images/image-page/1-2.png" />
      <img className='w-full' src="_images/image-page/1-3.png" />
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