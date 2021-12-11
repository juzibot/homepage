import { ISolutionItemProp, ITranslationProps } from '@src/interfaces';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Aos from 'aos';
import Image from 'next/image';

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
      style={{ flexDirection: imagePosition === 'left' ? 'row' : 'row-reverse' }}
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
        <div className="title" style={{ backgroundImage: `url(${dividerUrl})` }}>
          {title}
        </div>
        <div className="brief">{brief}</div>
      </div>
    </div>
  );
};

const SolutionPage: NextPage<ITranslationProps> = () => {
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
        专注于效率提升的解决方案
      </h1>

      <div className="solution-groups">
        <SolutionItem
          title="高效搭建私域冷启动流量池"
          brief="将沉淀的客户手机号线索，用电话机器人批量筛选，高意向客户自动添加，帮助品牌实现零人工触达百万用户。单个私域好友成本低于 5 元。"
          imagePosition="left"
          imageUrl="/images/solution-01.svg"
          dividerUrl="/images/solution-01-divider.svg"
        />

        <SolutionItem
          title="标准化运营为用户提供最佳服务体验"
          brief="句子互动提供基于 SOP 的标准化运营能力，将金牌运营的最佳实践，轻松应用在你的所有客户服务上。"
          imagePosition="right"
          imageUrl="/images/solution-02.svg"
          dividerUrl="/images/solution-02-divider.svg"
          style={{ transform: 'translateY(-10px)' }}
        />

        <SolutionItem
          title="打造用户画像实现服务千人千面"
          brief="依据既定规则，自动为你的客户进行价值评分与标签管理，基于多维度用户标签打造动态的客户分组，让每个客户收到他们感兴趣的消息。"
          imagePosition="left"
          imageUrl="/images/solution-03.svg"
          dividerUrl="/images/solution-03-divider.svg"
          style={{ transform: 'translateY(8px)' }}
        />

        <SolutionItem
          title="数据驱动决策管理有“效”可依"
          brief="数据中台提供多维度统计数据，从增长到互动、从员工绩效到销售转化，用数据驱动你的决策，让绩效辅佐你的管理。"
          imagePosition="right"
          imageUrl="/images/solution-04.svg"
          dividerUrl="/images/solution-04-divider.svg"
          style={{ transform: 'translateY(-8px)' }}
        />
      </div>
    </>
  );
};

export default SolutionPage;
