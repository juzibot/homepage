/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unreachable */
import { NextPage } from "next";
import Seo from "@src/components/common/Seo";
import { useState } from "react";
import ContactUsModal from "@src/components/ContactUsModal";
import FooterBarWithButton from "@src/components/FooterBarWithButton";

const MobileIndexPage: NextPage<{}> = () => {
  const [showContactUs, setShowContactUs] = useState(false);
  return (
    <div className="text-jz-text-3 relative">
      <Seo page="homepage" />
      <div className="absolute top-[221px] flex items-center justify-center w-[100%]">
        <a onClick={() => setShowContactUs(true)} target="_blank" className="w-[150px] h-[50px]" style={{ border: 'unset' }}></a>
      </div>
      <img alt="" className='w-full' src="/_images/image-page/index-20231023-m.png" />
      <div className="wrapper appeal-bar !px-[16px]">
        <div className="container !w-[100%]">
          <FooterBarWithButton />
        </div>
      </div>
      <ContactUsModal
        open={showContactUs}
        onCancel={() => setShowContactUs(false)}
      />
    </div>
  );
};

export default MobileIndexPage;
