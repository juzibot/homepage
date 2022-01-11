import { IFeatureItemProps } from '@src/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const FeatureItem: NextPage<IFeatureItemProps> = ({
  iconUrl,
  title,
  subtitle,
  redirectUrl,
  hoverIconUrl,
  mask,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className={`feature-item ${isHover ? 'hover' : ''}`}>
      <div
        className={`item ${isHover ? 'hover' : ''}`}
        onMouseMove={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{ background: isHover ? `url(${mask})` : '' }}
      >
        <Image
          src={isHover ? hoverIconUrl : iconUrl}
          width="40"
          height="40"
          alt="icon"
          draggable="false"
        />
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <Link href={redirectUrl}>
          <a className="redirect-url" href={redirectUrl}>
            了解更多 →
          </a>
        </Link>
      </div>
    </div>
  );
};

const FeatureBar: NextPage = () => {
  return (
    <div className="content">
      <FeatureItem
        iconUrl="/images/icons/features/01.svg"
        hoverIconUrl="/images/icons/features/01-hover.svg"
        title="规模获客"
        mask="/images/icons/features/01-mask.svg"
        subtitle="让沉默的客户线索变成可双向互动的活跃流量池，规模化自动执行，全程无需人工。获客成本低至 5 元。"
        redirectUrl="/"
      />
      <FeatureItem
        iconUrl="/images/icons/features/02.svg"
        hoverIconUrl="/images/icons/features/02-hover.svg"
        title="精准触达"
        mask="/images/icons/features/02-mask.svg"
        subtitle="句子互动提供针对客户生命周期、客户画像、运营需求的自动化消息触达能力，基于既定规则自动执行营销任务。"
        redirectUrl="/"
      />
      <FeatureItem
        iconUrl="/images/icons/features/03.svg"
        hoverIconUrl="/images/icons/features/03-hover.svg"
        title="高效管理"
        mask="/images/icons/features/03-mask.svg"
        subtitle="把不同区域、不同业务阶段乃至不同业务类型划分在相对独立的管理单元，分开统计绩效、计算产出。"
        redirectUrl="/"
      />
      <FeatureItem
        iconUrl="/images/icons/features/04.svg"
        hoverIconUrl="/images/icons/features/04-hover.svg"
        title="数据驱动"
        mask="/images/icons/features/04-mask.svg"
        subtitle="提供从增长到互动、从员工绩效到销售转化多维度统计数据，用数据驱动你的决策，让绩效辅佐你的管理。"
        redirectUrl="/"
      />
    </div>
  );
};

export default FeatureBar;
