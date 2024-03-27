/* eslint-disable no-unreachable */
import { isBrowserChrome } from '@src/utils/isBrowserChrome';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import Seo from '@src/components/common/Seo';
import { useMediaQuery } from '@react-hookz/web';
import FooterBarWithButton from '@src/components/FooterBarWithButton';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

const CustomerAcquisitionPage: NextPage = () => {
  const { t, i18n } = useTranslation('common');
  const isZh = i18n.language === 'zh';
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const [, toggleChrome] = useState(true);
  useEffect(() => {
    toggleChrome(isBrowserChrome());
  }, []);

  // if (isSmallDevice) {
  //   return (
  //     <div className='m-auto'>
  //       <Seo page="features-ai" />
  //       <img className='w-full' alt='' src='/_images/image-page/ai-20231023-m.png' />
  //       <div className="wrapper appeal-bar">
  //         <div className="container !w-[100%]">
  //           <FooterBarWithButton
  //             contactUsOption={{ type: 'ai', qrCode: 'sf-02' }}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  if (isSmallDevice) {
    return (
      <div className='m-auto'>
        <Seo page="features-ai" />
        <div className="relative">
        { isZh ? (
          <img className='w-full' alt='' src="/_images/image-page/ai-top-20240206-m.png"/>
        ) : 
          <img className='w-full' alt='' src="/_images/image-page/ai-top-20240206-m-en.png"/>
        }
          <div className="absolute top-0 h-[200px] w-full flex justify-center items-center">
            {/* 文字 */}
            { isZh ? (
              <div className="w-full font-sans">
              <div className="text-center text-[19px] text-block">{t('ai-title')}</div>
              <div className="flex text-[29px] font-medium">
                <span className="w-1/2 flex-shrink-0 text-block text-right">{t('ai-subtitle')}</span>
                <Typewriter
                  options={{
                    wrapperClassName: 'text-[29px] text-[#DA37E8]',
                    cursorClassName: 'text-[#DA37E8]',
                    strings: ["数字销售", "数字 SDR", "数字网格员", "数字民警", "数字电力管家"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            ) : 
            <div className="w-full font-sans">
              <div className="text-center text-[19px] text-block">{t('ai-title')}</div>
              <div className="flex text-[18px] font-medium">
                <span className="w-[51%] flex-shrink-0 text-block text-right mr-1">{t('ai-subtitle')}</span>
                <Typewriter
                  options={{
                    wrapperClassName: 'text-[18px] text-[#DA37E8]',
                    cursorClassName: 'text-[#DA37E8]',
                    strings: ["Customer Inquiries", "Complaints", "Subscriptions", "Product Inquiries", "Post-Sale Follow-Up"],
                    autoStart: true,
                    delay: 80,
                    deleteSpeed: 0.8,
                    loop: true,
                  }}
                />
              </div>
            </div>
            }
          </div>
        </div>
        {isZh ? (
          <img className='w-full' alt='' src='/_images/image-page/ai-middle-20240206-m.png' />
        ): 
        <img className='w-full' alt='' src='/_images/image-page/ai-middle-20240206-m-en.png' />
        }
        <div className="wrapper appeal-bar">
          <div className="container !w-[100%]">
            <FooterBarWithButton
              contactUsOption={{ type: 'ai', qrCode: 'sf-02' }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='m-auto'>
      <Seo page="features-ai" />
      <div className="relative">
      {isZh ? (
        <img className='w-full' alt='' src="/_images/image-page/ai-top-20240206.png"/>
      ): 
        <img className='w-full' alt='' src="/_images/image-page/ai-top-20240206-en.png"/>
      }
        <div className="absolute top-10 h-[50vh] w-full flex justify-center items-center">
          {/* 文字 */}
          { isZh ? (
              <div className="w-full font-sans">
              <div className="text-center text-[56px] text-block">{t('ai-title')}</div>
              <div className="flex text-[65px] font-medium">
                <span className="w-1/2 flex-shrink-0 text-block text-right">{t('ai-subtitle')}</span>
                <Typewriter
                  options={{
                    wrapperClassName: 'text-[65px] text-[#DA37E8]',
                    cursorClassName: 'text-[#DA37E8]',
                    strings: ["数字销售", "数字 SDR", "数字网格员", "数字民警", "数字电力管家"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            ) : 
            <div className="w-full font-sans">
              <div className="text-center text-[56px] text-block">{t('ai-title')}</div>
              <div className="flex text-[65px] font-medium">
                <span className="w-1/2 flex-shrink-0 text-block text-right mr-4">{t('ai-subtitle')}</span>
                <Typewriter
                  options={{
                    wrapperClassName: 'text-[65px] text-[#DA37E8]',
                    cursorClassName: 'text-[#DA37E8]',
                    strings: ["Customer Inquiries", "Subscriptions", "Product Inquiries", "Post-Sale Follow-Up"],
                    autoStart: true,
                    delay: 80,
                    deleteSpeed: 0.8,
                    loop: true,
                  }}
                />
              </div>
            </div>
            }
        </div>
      </div>
      {isZh ? (
        <img className='w-full' alt='' src='/_images/image-page/ai-middle-20240206.png' />
      ): <img className='w-full' style={{marginTop: -60}} alt='' src='/_images/image-page/ai-middle-20240206-en.png' />
      }
      <div className="wrapper appeal-bar">
        <div className="container">
          <FooterBarWithButton
            contactUsOption={{ type: 'ai', qrCode: 'sf-02' }}
          />
        </div>
      </div>
    </div>
  )

  // 旧的
  return (
    <div className='m-auto'>
      <Seo page="features-ai" />
      <img className='w-full mt-[72px]' alt='' src='/_images/image-page/ai-20231023.png' />
      <div className="wrapper appeal-bar">
        <div className="container">
          <FooterBarWithButton
            contactUsOption={{ type: 'ai', qrCode: 'sf-02' }}
          />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', [
        'common',
        'homepage',
        'seos',
        'features',
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default CustomerAcquisitionPage;
