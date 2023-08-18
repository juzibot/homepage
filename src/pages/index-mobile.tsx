/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unreachable */
import { NextPage } from "next";
import SolutionPageMobile from '@src/components/index/SolutionPageMobile';
import HeroPageMobile from '@src/components/index/HeroPageMobile';
import FooterBarButton from "@src/components/FooterBarButton";
import { useState } from "react";
import ContactUsSimpleModal from "@src/components/ContactUsSimpleModal";
import Seo from "@src/components/common/Seo";

const MobileIndexPage: NextPage<{}> = () => {
  const [showContactUs, setShowContactUs] = useState(false);
  return (
    <div className="text-jz-text-3 relative">
      <Seo page="homepage" />
      <div className="absolute top-[221px] flex items-center justify-center w-[100%]">
        <a onClick={() => setShowContactUs(true)} target="_blank" className="w-[150px] h-[50px]" style={{ border: 'unset' }}></a>
      </div>
      <img alt="" className='w-full' src="/_images/image-page/index-0.png" />
      <div className="wrapper appeal-bar !px-[16px]">
        <div className="container !w-[100%]">
          <FooterBarButton isMobile url="https://insight.juzibot.com/" imageNode={<img src="_images/contact-us-qrcode/homepage.png" alt="" className="w-full h-full" />} useModal />
        </div>
      </div>
      <ContactUsSimpleModal
        open={showContactUs}
        onCancel={() => setShowContactUs(false)}
        imageNode={<img src="_images/contact-us-qrcode/homepage.png" alt="" className="w-full h-full" />}
      />
    </div>
  );
  return (
    <div className="text-jz-text-3">
      <HeroPageMobile />
      <SolutionPageMobile />
    </div>
  );
};

export default MobileIndexPage;
