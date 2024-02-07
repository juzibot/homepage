/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unreachable */
import { NextPage } from "next";
import Seo from "@src/components/common/Seo";
import { useState } from "react";
import ContactUsModal from "@src/components/ContactUsModal";
import FooterBarWithButton from "@src/components/FooterBarWithButton";
import Typewriter from 'typewriter-effect';
import { RightArrow } from '@src/components/Icon';
import { ContactUsModalWithButton } from '@src/components/ContactUsModal';

const MobileIndexPage: NextPage<{}> = () => {
  const [showContactUs, setShowContactUs] = useState(false);
  return (
    <div className="text-jz-text-3 relative">
      <Seo page="homepage" />

      <div>
        <img className='w-full' src="/_images/image-page/index-top-bg-m.png" alt='' />
        <div className="absolute top-[100px] w-full font-sans">
          <div className="text-center text-[22px] text-white">AI+RPA, 大模型驱动的Al数字员工</div>
          <div className="flex text-[30px] font-medium">
            <span className="w-1/2 flex-shrink-0 text-white text-right">他可以是</span>
            <Typewriter
              options={{
                wrapperClassName: 'text-[30px] text-[#DA37E8]',
                cursorClassName: 'text-[#DA37E8]',
                strings: ['数字销售', '数字 SDR', '数字网格员', '数字民警', '数字电力管家'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className='w-full mt-8 flex justify-center'>
            <a
              style={{ background: 'linear-gradient(96deg, #EF3BFB 0.67%, #6721FF 98.48%)' }}
              className="h-12 px-10 flex justify-center items-center rounded-full text-white cursor-pointer text-[18px] hover:text-white"
              href="https://chat.juzibot.com/" rel="noreferrer" target="_blank"
            >
              立即体验
            </a>
          </div>
          {/* 两个卡片 */}
          <div className="flex flex-col gap-3 justify-center items-center mt-10">
            <div className="w-[calc(100vw-60px)] h-[170px] p-5 rounded-xl bg-black flex flex-col">
              <div className="text-white text-[21px] font-medium mb-2">句子互动 AI 大模型</div>
              <p className="flex-1 text-white">👋哈喽，我是最懂句子互动的 AI 员工，快来跟我对话吧～看看还有哪些能力？</p>
              <a className="text-[#EF3BFB] hover:text-[#EF3BFB] mt-2 inline-flex items-center gap-2 cursor-pointer" href="https://chat.juzibot.com/" rel="noreferrer" target="_blank">与我对话 <RightArrow /> </a>
            </div>
            <div className="w-[calc(100vw-60px)] h-[170px] p-5 rounded-xl bg-black flex flex-col">
              <div className="text-white text-[21px] font-medium mb-2">句子互动产品</div>
              <p className="flex-1 text-white">只需上传学习素材或添加提示语，即可获得独特个性和超强能力的专属助理机器人。</p>
              <ContactUsModalWithButton>
                <span className="text-[#EF3BFB] mt-2 inline-flex items-center gap-2 cursor-pointer">联系我们 <RightArrow /> </span>
              </ContactUsModalWithButton>
            </div>
          </div>
        </div>
      </div>

      <img alt="" className='w-full' src="/_images/image-page/index-content-m.png" />

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
  )
  return (
    <div className="text-jz-text-3 relative">
      <Seo page="homepage" />
      <div className="absolute top-[221px] flex items-center justify-center w-[100%]">
        <a onClick={() => setShowContactUs(true)} target="_blank" className="w-[150px] h-[50px]" style={{ border: 'unset' }}></a>
      </div>
      <img alt="" className='w-full' src="/_images/image-page/index-20231207-m.png" />
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
