/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ContactUsSimpleModal from '../ContactUsSimpleModal';
import Link from 'next/link';

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  return (
    <div className='relative'>
      <ContactUsSimpleModal open={showContactModal} onCancel={() => setShowContactModal(false)} />
      <img
        className='ml-4 w-[20px] h-[20px]'
        src='https://s3.cn-north-1.amazonaws.com.cn/xiaoju-material/public/782f029c-4f82-44ed-ba38-959f5ea573cd/%E6%9B%B4%E5%A4%9A.png'
        alt=''
        onClick={() => setShowMenu(true)}
      />
      {showMenu && createPortal(
        <div
          className='fixed top-[20px] bg-[#fff] z-[100] w-[100%] pt-[16px] overflow-auto'
          style={{ height: 'calc(100% - 20px)' }}
        >
          <div className='relative'>
            <img onClick={() => setShowMenu(false)} className="absolute w-[24px] right-[28px] top-[-12px] cursor-pointer" src="https://s3.cn-north-1.amazonaws.com.cn/xiaoju-material/public/141abebc-9772-4a56-8c38-fe84f8f9c841/close.png" alt="close" />
            <div
              className='mt-[16px] h-[188px] px-[28px]'
              style={{ borderBottom: '1px solid rgba(221, 227, 234, 0.5)' }}
            >
              <div className='text-[17px] leading-[24px] mt-[24px] font-semibold text-[#364256]'>
                产品与服务
              </div>
              <Link href="/features/ai" passHref>
                <div onClick={() => setShowMenu(false)} className="text-[#364256] w-full text-[16px] mt-[32px] inline-block">
                  AI 驱动的基于企业私有数据的“ChatGPT”
                </div>
              </Link>
              <Link href="/features/rpa" passHref>
                <div onClick={() => setShowMenu(false)} className='text-[#364256] w-full text-[16px] mt-[32px] inline-block'>
                  RPA 驱动的营销服务一体化平台
                </div>
              </Link>
            </div>
            {/* <div className='flex flex-col px-[28px] pt-[24px] pb-[32px] gap-[32px]'>
              <div className='text-[17px] leading-[24px] mt-[24px] font-semibold text-[#364256]'>
                解决方案
              </div>
              <Link href="/features/government" passHref>
                <div onClick={() => setShowMenu(false)} className='text-[#364256] w-full text-[16px] inline-block'>
                  政务解决方案
                </div>
              </Link>
              <Link href="/features/internet" passHref>
                <div onClick={() => setShowMenu(false)} className='text-[#364256] w-full text-[16px] inline-block'>
                  互联网解决方案
                </div>
              </Link>
              <Link href="/features/customer" passHref>
                <div onClick={() => setShowMenu(false)} className='text-[#364256] w-full text-[16px] inline-block'>
                  消费品解决方案
                </div>
              </Link>
            </div> */}
            <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
            <div className='h-[72px] flex items-center px-[28px]'>
              <Link href="/features/case" passHref>
                <div onClick={() => setShowMenu(false)} className='w-[100%] text-[17px] text-[#364256]'>
                  客户案例
                </div>
              </Link>
            </div>
            <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
            <div className='h-[72px] flex items-center px-[28px]'>
              <a href="https://juzibot.com/blog/" rel="noreferrer" target="_blank" className='w-[100%] text-[17px] text-[#364256]'>增常情报局</a>
            </div>
            <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
            <div className='h-[72px] flex items-center px-[28px]'>
              <a href="https://wechaty.js.org/" rel="noreferrer" target="_blank" className='w-[100%] text-[17px] text-[#364256]'>开发者</a>
            </div>
            <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
            <div className='h-[72px] flex items-center px-[28px]'>
              <a href="https://chat.juzibot.com/" rel="noreferrer" target="_blank" className='w-[100%] text-[17px] text-[#364256]'>
                体验句子 GPT
              </a>
            </div>
            <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
            <div className='h-[72px] flex items-center px-[28px]'>
              <Link href="/about-us-m" passHref>
                <div onClick={() => setShowMenu(false)} className='w-[100%] text-[17px] text-[#364256]'>
                  关于我们
                </div>
              </Link>
            </div>
            <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
            <div className='h-[72px] flex items-center px-[28px]'>
              <Link href="/culture-m" passHref>
                <div onClick={() => setShowMenu(false)} className='w-[100%] text-[17px] text-[#364256]'>
                  公司文化
                </div>
              </Link>
            </div>
            <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
            <div className='h-[35px]' />
          </div>
        </div>,
        document.getElementsByTagName('body')[0]
      )}
    </div>
  );
};

export default MobileMenu;
