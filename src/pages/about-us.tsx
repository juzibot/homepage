import Seo from '@src/components/common/Seo';
import FeatureBar from '@src/components/features/FeatureBar';
import AppealBar from '@src/components/index/AppealBar';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { CSSProperties, useState } from 'react';

const Popup: NextPage<{
  isReverse?: boolean;
  x: number;
  y: number;
  lineY?: number;
  title: string;
  style?: CSSProperties;
  flag: string;
  currentFlag: string;
  flagSetter: (f: string) => void;
}> = ({
  isReverse,
  children,
  title,
  x,
  y,
  style,
  lineY,
  flagSetter,
  flag,
  currentFlag,
}) => {
  if (isReverse) {
    return (
      <div
        className={`popup-container-reverse ${
          flag === currentFlag ? 'hover' : ''
        }`}
        style={{ transform: `translate(${x}px, ${y}px)` }}
        onMouseLeave={() => flagSetter('')}
        onMouseMove={() => flagSetter(flag)}
      >
        <div
          className="line"
          style={lineY ? { transform: `translateY(${lineY}px)` } : {}}
        ></div>
        <div className="popup" style={style}>
          <div>
            <strong>{title}</strong>
          </div>
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`popup-container ${currentFlag === flag ? 'hover' : ''}`}
        style={{ transform: `translate(${x}px, ${y}px)` }}
        onMouseLeave={() => flagSetter('')}
        onMouseMove={() => flagSetter(flag)}
      >
        <div className="popup" style={style}>
          <div>
            <strong>{title}</strong>
          </div>
          {children}
        </div>
        <div
          className="line"
          style={lineY ? { transform: `translateY(${lineY}px)` } : {}}
        ></div>
      </div>
    );
  }
};

const Dot: NextPage<{
  x: number;
  y: number;
  isWhite?: boolean;
  onClick?: () => void;
  flag: string;
  currentFlag: string;
  flagSetter: (f: string) => void;
}> = ({ x, y, isWhite, onClick, flag, currentFlag, flagSetter }) => {
  return (
    <div
      className={`dot-container ${currentFlag === flag ? 'hover' : ''}`}
      style={{
        transform: `translate(${x}px, ${y}px)`,
        borderWidth: isWhite ? 10 : 8,
      }}
      onMouseMove={() => flagSetter(flag)}
      onMouseLeave={() => flagSetter('')}
    >
      <div className={isWhite ? 'dot-white' : 'dot'} onClick={onClick}></div>
    </div>
  );
};

const GrowthWall: NextPage = () => {
  const [flag, setFlag] = useState('');
  return (
    <>
      <h3>发展历程</h3>
      <div className="growth-data">
        <Popup
          title="2016.05"
          x={110}
          y={104}
          lineY={182}
          flag="2016-05"
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>为聊天机器人开源框架</div>
          <div>Wechaty 写下第一行代码</div>
        </Popup>

        <Popup
          title="2017.12"
          x={284}
          y={194}
          lineY={162}
          isReverse
          flag="2017-12"
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>入围第一期百度 AI 加速器</div>
        </Popup>

        <Popup
          title="2018.12"
          x={454}
          y={88}
          lineY={180}
          style={{ width: 260 }}
          flag="2018-12"
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>入选 Y Combinator，成为 YC 进入中国招募的第一批孵化项目</div>
        </Popup>

        <Popup
          title="2019.01"
          isReverse
          x={624}
          y={168}
          lineY={156}
          style={{ width: 128 }}
          flag="2019-01"
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>句子秒回上线</div>
        </Popup>

        <Popup
          title="2020.03"
          x={794}
          y={-40}
          lineY={250}
          style={{ width: 280 }}
          flag="2020-03"
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>句客宝产品上线，并获得首个客户京东金融</div>
          <div style={{ marginTop: 8 }}>
            <strong>2020.11</strong>
          </div>
          <div>与美团、元气森林、网易有道、京东等品牌达成合作</div>
        </Popup>

        <Popup
          title="2021.07"
          x={964}
          y={66}
          lineY={0}
          style={{ width: 310 }}
          isReverse
          flag="2021-07"
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>
            与北京民政、美的、蒙牛、高德、朝阳大悦城、谦寻（薇娅）等品牌达成合作
          </div>
          <div style={{ marginTop: 8 }}>
            <strong>2021.12</strong>
          </div>
          <div>句子互动上线 Wechaty Puppet Walnut，入局 5G 消息</div>
        </Popup>

        <Popup
          title="2022.01"
          x={1093}
          y={-62}
          lineY={160}
          style={{ width: 230 }}
          flag="2022-01"
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>句子秒回 WhatsApp 版上线</div>
        </Popup>

        <Dot
          x={16}
          y={338}
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2015"
        />
        <Dot
          x={96}
          y={338}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2016-05"
        />
        <Dot
          x={186}
          y={336}
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2017"
        />
        <Dot
          x={270}
          y={335}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2017-12"
        />
        <Dot
          x={356}
          y={330}
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2018"
        />
        <Dot
          x={440}
          y={325}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2018-12"
        />
        <Dot
          x={526}
          y={315}
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2019"
        />
        <Dot
          x={610}
          y={304}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2019-01"
        />
        <Dot
          x={696}
          y={286}
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2020"
        />
        <Dot
          x={780}
          y={266}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2020-03"
        />
        <Dot
          x={866}
          y={237}
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2021"
        />
        <Dot
          x={950}
          y={207}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2021-07"
        />
        <Dot
          x={1038}
          y={170}
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2022"
        />
        <Dot
          x={1080}
          y={152}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag="2022-01"
        />
      </div>
    </>
  );
};

const AboutUsHeroPage: NextPage = () => {
  return (
    <div className="first-page">
      <Seo page="about-us" />
      <h1>用新的营销方式打动你的万千客户</h1>

      <div className="info-box">
        <div className="left">
          <Image
            src="/_images/about-us/photo.png"
            width={660}
            height={400}
            alt="photo"
            draggable="false"
          />
          <div className="logo-box">
            <img
              src="https://cdn-official-website.juzibot.com/images/logo.png"
              alt="logo"
              draggable="false"
            />
          </div>
        </div>

        <div className="right">
          <div>
            句子互动成立于 2017
            年，是国内的领先的对话式营销云技术服务商。我们集成国内外主流 IM
            平台，为企业与开发者提供基于即时通信软件的规模化营销服务。句子互动团队在
            RPA、智能对话与私域运营服务领域不断创新，每日提升 1000
            万人次的会话服务体验。
          </div>
          <div style={{ marginTop: 24 }}>
            团队累计融资数千万，投资机构包括 Plug and Play、PreAngel、 Y
            Combinator、TSVC、阿尔法公社、真成投资等。团队既是硅谷著名孵化器 Y
            Combinator 国内首批入围团队，也是百度 AI
            加速器首期成员，目前团队已经过百人。
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUsPage: NextPage = () => {
  return (
    <>
      <div className="wrapper about-us-page">
        <div className="container">
          <AboutUsHeroPage />
        </div>
      </div>

      <div className="wrapper growth-wall">
        <div className="container">
          <GrowthWall />
        </div>
      </div>

      <div className="wrapper appeal-bar">
        <div className="container">
          <AppealBar />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', [
        'common',
        'homepage',
        'seos',
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default AboutUsPage;
