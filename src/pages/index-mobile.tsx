import { NextPage } from "next";
import FeatureSwiperMobile from '@src/components/index/FeatureSwiperMobile';
import SolutionPageMobile from '@src/components/index/SolutionPageMobile';
import CompanyDisplayBarMobile from '@src/components/index/CompanyDisplayBarMobile';
import HeroPageMobile from '@src/components/index/HeroPageMobile';

const MobileIndexPage: NextPage<{}> = () => {
  return (
    <div className="mt-14 text-jz-text-3">
      <HeroPageMobile />
      <FeatureSwiperMobile />
      <SolutionPageMobile />
      <CompanyDisplayBarMobile />
    </div>
  )
}

export default MobileIndexPage;