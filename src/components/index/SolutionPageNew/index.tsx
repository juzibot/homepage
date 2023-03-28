import { ISolutionItemProp } from '@src/interfaces';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Aos from 'aos';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const SolutionItem: NextPage<ISolutionItemProp> = ({
  imagePosition,
  imageUrl,
  title,
  dividerUrl,
  brief,
  style,
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
      className="solution-item"
      style={{
        flexDirection: imagePosition === 'left' ? 'row' : 'row-reverse',
      }}
      data-aos="fade-in"
    >
      <Image
        className="solution-image"
        src={imageUrl}
        alt={title}
        draggable="false"
        width="560"
        height="448"
      ></Image>
      <div className="solution-content" style={style}>
        <div
          className="title"
          style={{ backgroundImage: `url(${dividerUrl})` }}
        >
          {title}
        </div>
        <div className="brief">{brief}</div>
      </div>
    </div>
  );
};

const SolutionPage: NextPage = () => {
  const { i18n } = useTranslation(['homepage']);
  useEffect(() => {
    if (process.browser) {
      Aos.init({
        offset: 120,
        duration: 800,
      });
    }
  }, []);
  return (
    <>
      <h1 className="title" data-aos="fade-in">
        专注于政企·金融行业的提效方案
      </h1>

      <div className="solution-groups">
        <SolutionItem
          title="AI智能知识库快速定位最佳回答"
          brief="句子互动基于ChatGPT开发的智能问答系统，收集各类高频问题的最佳答案，让你在服务人群时事半功倍"
          imagePosition="left"
          imageUrl="/_images/solution-05-divider.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-03-divider.svg"
          style={{ transform: 'translateY(-30px)' }}
        />

        <SolutionItem
          title="标准化应答提供最佳服务体验"
          brief="句子互动基于对话式机器人提供自动应答SOP的标准化能力，将高效服务方案，轻松应用在你的所有人群服务上。"
          imagePosition="right"
          imageUrl="/_images/solution-06-divider.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-02-divider.svg"
          style={{ transform: 'translateY(-51px)' }}
        />

        <SolutionItem
          title="打造人群画像实现服务千人千面"
          brief="依据既定规则、人群属性，自动为你的人群进行标签分类管理，基于多维度标签打造动态的人群分组，实现治理服务精细化。"
          imagePosition="left"
          imageUrl="/_images/solution-07-divider.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-03-divider.svg"
          style={{ transform: 'translateY(-42px)' }}
        />

        <SolutionItem
          title="数据驱动决策管理有“效”可依"
          brief="数据中台提供多维度统计数据，从人群属性到对话特征、从工作人员绩效到人群满意度评价，用数据驱动你的决策，让绩效辅佐你的管理。"
          imagePosition="right"
          imageUrl="/_images/solution-08-divider.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-04-divider.svg"
          style={{ transform: i18n.language === 'en' ? 'translateY(-40px)' : 'translateY(-62px)' }}
        />
      </div>
    </>
  );
};

export default SolutionPage;
