/* eslint-disable no-unreachable */
import { NextPage } from "next";
import SolutionPageMobile from '@src/components/index/SolutionPageMobile';
import HeroPageMobile from '@src/components/index/HeroPageMobile';

const MobileIndexPage: NextPage<{}> = () => {
  return (
    <div className="text-jz-text-3">
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