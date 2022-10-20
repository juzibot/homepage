import { ISolutionItemProp } from '@src/interfaces';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import { LineWithDot } from '@src/components/LineWithDot';
import cx from '@src/utils/cx';

export const SolutionItem: NextPage<ISolutionItemProp> = ({
  imageUrl,
  title,
  brief,
  style,
  className,
  fromColor,
  toColor,
}) => {
  useEffect(() => {
    if (process.browser) {
      Aos.init({
        offset: 120,
        duration: 800,
      });
    }
  }, []);
  return (
    <div
      className={cx('solution-item h-[462px]', className)}
      data-aos="fade-in"
    >
      <div className="solution-content" style={style}>
        <div className="text-[#364256] text-[19px] font-medium"> {title} </div>
        <LineWithDot fromColor={fromColor!} toColor={toColor!} className="mt-3 mb-2" />
        <p className="brief text-[#869BB9] text-[15px]">{brief}</p>
      </div>
      <div className="flex justify-center">
        <img
          className="solution-image max-h-[300px] max-w-full"
          src={imageUrl}
          alt={title}
          draggable="false"
        />
      </div>
    </div>
  );
};

const SolutionPageMobile: NextPage = () => {
  const { t, i18n } = useTranslation(['homepage']);
  void i18n
  useEffect(() => {
    if (process.browser) {
      Aos.init({
        offset: 120,
        duration: 800,
      });
    }
  }, []);
  return (
    <div className="mt-20 px-4">
      <h1 className="text-jz-text-1 text-3xl text-center mb-6 px-10 text-[30px] font-bold" data-aos="fade-in">{t('solution-title')}</h1>
      <div className="solution-groups pl-[26px] pt-[34px] bg-[url(https://cdn-official-website.juzibot.com/images/index-line-mobile.svg)] bg-no-repeat mb-10">
        <SolutionItem
          title={t('solution-1-title')}
          brief={t('solution-1-content')}
          imagePosition="left"
          imageUrl="https://cdn-official-website.juzibot.com/images/index-solution-1.png"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-01-divider.svg"
          fromColor="#6547FF"
          toColor="rgba(101, 71, 255, 0)"
          className="h-[calc(453px+10px)]"
        />

        <SolutionItem
          title={t('solution-2-title')}
          brief={t('solution-2-content')}
          imagePosition="right"
          imageUrl="https://cdn-official-website.juzibot.com/images/index-solution-2.png"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-02-divider.svg"
          fromColor="#0555FF"
          toColor="rgba(5, 85, 255, 0)"
          className="h-[calc(493px+10px)]"
        />

        <SolutionItem
          title={t('solution-3-title')}
          brief={t('solution-3-content')}
          imagePosition="left"
          imageUrl="https://cdn-official-website.juzibot.com/images/index-solution-3.png"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-03-divider.svg"
          fromColor="#FC790D"
          toColor="rgba(252, 121, 13, 0)"
          className="h-[calc(476px+10px)]"
        />

        <SolutionItem
          title={t('solution-4-title')}
          brief={t('solution-4-content')}
          imagePosition="right"
          imageUrl="https://cdn-official-website.juzibot.com/images/index-solution-4.png"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-04-divider.svg"
          fromColor="#0DE492"
          toColor="rgba(13, 228, 146, 0)"
        />
      </div>
    </div>
  );
};

export default SolutionPageMobile;
