import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const FeatureHeroPage: NextPage = () => {
  return (
    <>
      <h1>客户会话中台</h1>

      <section className="brief">
        客户会话中台（SIS）提供聚合多种 IM
        平台消息的能力，在一个后台应答来自多平台多个账号上的消息，亦可以同时主动触达这些客户，无论他们来自微信、抖音、5G
        短信、Whatsapp 还是邮件。
      </section>

      <div className="buttons-bar">
        <button className="primary-button start-button">立即使用</button>
        <Link href="/">
          <a className="read-docs" target="_blank">
            阅读手册
          </a>
        </Link>
      </div>

      <div className="data-bar">
        <div className="item">
          <Image
            src="https://cdn-official-website.juzibot.com/images/icons/features/cp-01.png"
            alt="icon"
            width="48"
            height="48"
            draggable="false"
          />
          <div className="info">
            <h3>1000%</h3>
            <div>提升沟通效率</div>
          </div>
        </div>

        <div className="item">
          <Image
            src="https://cdn-official-website.juzibot.com/images/icons/features/cp-02.png"
            alt="icon"
            width="48"
            height="48"
            draggable="false"
          />
          <div className="info">
            <h3>80%</h3>
            <div>节省人力成本</div>
          </div>
        </div>

        <div className="item">
          <Image
            src="https://cdn-official-website.juzibot.com/images/icons/features/cp-03.png"
            alt="icon"
            width="48"
            height="48"
            draggable="false"
          />
          <div className="info">
            <h3>500+</h3>
            <div>同时服务客户数</div>
          </div>
        </div>
      </div>
    </>
  );
};
