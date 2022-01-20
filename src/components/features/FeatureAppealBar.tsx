import { NextPage } from 'next';
import Image from 'next/image';

export const FeatureAppealBar: NextPage = () => {
  return (
    <>
      <h1>为企业沉淀基于对话的数据资产</h1>
      <div className="items">
        <div className="item">
          <Image
            src="https://cdn-official-website.juzibot.com/images/icons/features/cp-08.png"
            width="64"
            height="64"
            alt="icon"
            draggable="false"
          />

          <p>存档来自全平台的消息</p>
          <p>随时可查阅</p>
        </div>

        <div className="item">
          <Image
            src="https://cdn-official-website.juzibot.com/images/icons/features/cp-09.png"
            width="64"
            height="64"
            alt="icon"
            draggable="false"
          />

          <p>保证沟通合规</p>
          <p>风控信息实时报警</p>
        </div>

        <div className="item">
          <Image
            src="https://cdn-official-website.juzibot.com/images/icons/features/cp-10.png"
            width="64"
            height="64"
            alt="icon"
            draggable="false"
          />

          <p>分析每个轮次的对话</p>
          <p>提供响应效率的绩效分析</p>
        </div>
      </div>
    </>
  );
};
