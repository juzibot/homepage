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
  const { i18n } = useTranslation(['homepage']);
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
      <h1 className="text-jz-text-1 text-3xl text-center mb-6 px-10 text-[30px] font-bold" data-aos="fade-in">
        专注于政企·金融行业的提效方案
      </h1>
      <div className="solution-groups pl-[26px] pt-[34px] bg-[url(https://cdn-official-website.juzibot.com/images/index-line-mobile.svg)] bg-no-repeat mb-10">
        <SolutionItem
          title="AI智能知识库快速定位最佳回答"
          brief="句子互动基于大模型开发的智能问答系统，收集各类高频问题的最佳答案，让你在服务人群时事半功倍"
          imagePosition="left"
          imageUrl="https://cdn-official-website.juzibot.com/images/solution-05-divider.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-01-divider.svg"
          fromColor="#6547FF"
          toColor="rgba(101, 71, 255, 0)"
          className="h-[calc(453px+10px)]"
        />

        <SolutionItem
          title="标准化应答提供最佳服务体验"
          brief="句子互动基于对话式机器人提供自动应答SOP的标准化能力，将高效服务方案，轻松应用在你的所有人群服务上。"
          imagePosition="right"
          imageUrl="https://cdn-official-website.juzibot.com/images/index-solution-2.png"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-02-divider.svg"
          fromColor="#0555FF"
          toColor="rgba(5, 85, 255, 0)"
          className="h-[calc(493px+10px)]"
        />

        <SolutionItem
          title="打造人群画像实现服务千人千面"
          brief="依据既定规则、人群属性，自动为你的人群进行标签分类管理，基于多维度标签打造动态的人群分组，实现治理服务精细化。"
          imagePosition="left"
          imageUrl="https://cdn-official-website.juzibot.com/images/solution-07-divider.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-03-divider.svg"
          fromColor="#FC790D"
          toColor="rgba(252, 121, 13, 0)"
          className="h-[calc(476px+10px)]"
        />

        <SolutionItem
          title="数据驱动决策管理有“效”可依"
          brief="数据中台提供多维度统计数据，从人群属性到对话特征、从工作人员绩效到人群满意度评价，用数据驱动你的决策，让绩效辅佐你的管理。"
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
