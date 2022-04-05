import Seo from '@src/components/common/Seo';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { chunk, debounce } from 'lodash';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export const AboutUsAppealBar: NextPage = () => {
  return (
    <>
      <h2>加入句子互动，与众多头部品牌一起打造中国私域新生态</h2>
      <Link href="/join-us">
        <a target="_blank">
          <button className="primary-button start-button">加入我们</button>
        </a>
      </Link>
    </>
  );
};

const NewsPage: NextPage = () => {
  const items: {
    imgUrl: string;
    title: string;
    subtitle: string;
    src: string;
  }[] = [
    {
      imgUrl:
        'https://cdn-official-website.juzibot.com/images/about-us/news/图-1.png',
      title: '桔子互动顺利于百度AI加速器一期毕业！',
      subtitle:
        '桔子互动已经接入百度AI的理解与交互技术平台UNIT，利用百度业界领先的需求理解、对话控制及…',
      src: 'https://www.sohu.com/a/226292674_100084020',
    },
    {
      imgUrl:
        'https://cdn-official-website.juzibot.com/images/about-us/news/图-2.png',
      title: '桔子互动和北邮人工智能实验室签署合作协议',
      subtitle:
        '致力于为人工智能(AI)智能会话服务的创业公司桔子互动近日于北京邮电大学人工智能实验室签署合作协…',
      src: 'https://mp.weixin.qq.com/s?__biz=MzU3OTk2MzA1Nw==&mid=2247485050&idx=1&sn=d795e06e36384549d29a07691a34e2d7&source=41#wechat_redirect',
    },
    {
      imgUrl:
        'https://cdn-official-website.juzibot.com/images/about-us/news/图-3.png',
      title:
        '句子互动 CEO 李佳芮参加 2019 Microsoft Ignite The Tour 并做主题分享',
      subtitle:
        '微软 2019 Ignite The Tour 是面向开发者和合作伙伴的技术盛宴！句子互动 CEO 作为微软 MVP，代表…',
      src: 'https://mp.weixin.qq.com/s/uqD3cVF6RxkKBcTgGd7eew',
    },
    {
      imgUrl:
        'https://cdn-official-website.juzibot.com/images/about-us/news/图-4.png',
      title: '句子互动与微软共同举办 Microsoft Online Tech Forum',
      subtitle:
        '首届 Microsoft Online Tech Forum 微软在线技术峰会在线上正式拉开帷幕！句子互动与 Wechaty 社区作…',
      src: 'https://mp.weixin.qq.com/s/fZOZoTHSogUb8ZKh-KOpmA',
    },
    {
      imgUrl:
        'https://cdn-official-website.juzibot.com/images/about-us/news/图-5.png',
      title: '句子互动入选Facebook中国大陆首期加速器，校友总估值近20亿',
      subtitle:
        '句子互动以一家专注于微信生态的智能营销服务商的身份，在报名的数千家企业中通过甄选，成为入选…',
      src: 'https://mp.weixin.qq.com/s/mrKFr5BY-9wZGbemXeaZBQ',
    },
    {
      imgUrl:
        'https://cdn-official-website.juzibot.com/images/about-us/news/图-6.png',
      title: '句子互动 CEO 李佳芮入选福布斯中国2021年度30 Under 30',
      subtitle:
        '福布斯发布了“2021年度30Under30榜单”。榜单聚焦中国30岁以下，在广告营销、教育、零售与电商、…',
      src: 'http://www.forbeschina.com/billionaires/57511',
    },
    {
      imgUrl:
        'https://cdn-official-website.juzibot.com/images/about-us/news/图-7.png',
      title: '句子互动 CEO 李佳芮入选中关村 2021 年度 U30 榜单',
      subtitle:
        '在2021中关村论坛平行论坛、开源创新发展论坛上，创青春-中关村U30发布2021年度优胜者榜单，句子…',
      src: 'https://mp.weixin.qq.com/s?__biz=MzU3OTk2MzA1Nw==&mid=2247488046&idx=1&sn=0ea3d124434e0e7dffee1458936bfd59&chksm=fd5f43f0ca28cae6df1c093602819a535ed4e31615dbe60684a22aa2721342a458507f8f467b&token=625789963&lang=zh_CN#rd',
    },
    {
      imgUrl:
        'https://cdn-official-website.juzibot.com/images/about-us/news/图-8.png',
      title: '句子互动入选 2020 中关村金种子企业',
      subtitle:
        '经过路演选拔，句子互动与 206 家高成长型创业企业共同入选 2020 中关村金种子企业，助力中关村…',
      src: 'http://zgcgw.beijing.gov.cn/zgc/zwgk/tzgg/10870021/',
    },
    {
      imgUrl:
        'https://cdn-official-website.juzibot.com/images/about-us/news/图-9.png',
      title: '句子互动 CEO 入选 2021 科创中国·青年创业榜',
      subtitle:
        '“青年创业榜”面向全国科技创新高地，联合北京、上海、深圳等三地政府以及大型双创平台组织，遴选…',
      src: 'https://mp.weixin.qq.com/s/BhuyDxDfbfawpaYG1hdcnQ',
    },
  ];
  const data = chunk(items, 3);
  const [autoPlayInterval, setAutoPlayInterval] = useState<NodeJS.Timer>();
  const [swiper, setSwiper] = useState<SwiperType | undefined>(undefined);
  const [documentVisible, setDocumentVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  function autoplay(s?: SwiperType) {
    s = s || swiper;
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
    }
    const _autoPlayInterval = setInterval(() => {
      if (!s || !documentVisible) return;
      if (s.isEnd) {
        s.slideTo(0);
      } else {
        s.slideNext(300);
      }
    }, 6000);
    setAutoPlayInterval(_autoPlayInterval);
  }

  const debounceAutoPlay = debounce(() => autoplay(swiper));

  useEffect(() => {
    if (process.browser) {
      document.addEventListener('visibilitychange', () => {
        const visible = document.visibilityState === 'visible';
        setDocumentVisible(visible);
      });
    }
  }, []);

  return (
    <>
      <h1>新闻报道</h1>
      <Swiper
        className="news-swiper"
        spaceBetween={30}
        style={{ width: '100%' }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          autoplay(swiper);
        }}
        onActiveIndexChange={(swiper) => {
          setCurrentIndex(swiper.activeIndex);
          debounceAutoPlay();
        }}
      >
        {data.map((d, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="news-item-container">
                {d.map((item, idx) => {
                  return (
                    <Link href={item.src} key={`${i}-${idx}`}>
                      <a className="news" target="_blank">
                        <img src={item.imgUrl} alt="news-cover"></img>
                        <div style={{ height: 116 }}>
                          <div className="title">{item.title}</div>
                          <div className="subtitle">{item.subtitle}</div>
                        </div>
                        <div className="read-more">点击查看 →</div>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="pagination">
        {data.map((_, idx) => (
          <div
            key={`p-${idx}`}
            className={currentIndex === idx ? 'active' : 'normal'}
            onClick={() => {
              swiper?.slideTo(idx);
            }}
          >
            <div
              style={{
                visibility: currentIndex === idx ? 'visible' : 'hidden',
                width: '100%',
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const Certificates: NextPage = () => {
  const [swiper, setSwiper] = useState<SwiperType | undefined>(undefined);
  const [current, setCurrent] = useState(1);
  const [imageLoadedCount, setImageLoadedCount] = useState(0);
  const TOTAL_COUNT = 18;
  useEffect(() => {
    if (swiper) {
      setTimeout(() => {
        swiper.slideTo(1);
      }, 1000);
    }
  }, [imageLoadedCount]);
  return (
    <>
      <h1>企业荣誉</h1>
      <Swiper
        className="certificate-swiper"
        slidesPerView="auto"
        centeredSlides
        spaceBetween={30}
        autoplay
        style={{ width: '100%' }}
        onSwiper={(s) => {
          setSwiper(s);
          s.slideNext();
        }}
        observer
        // controller={{ control: swiper }}
      >
        {Array(TOTAL_COUNT)
          .fill(null)
          .map((_, idx) => {
            return (
              <SwiperSlide key={idx} className="slide-item">
                <img
                  src={`https://cdn-official-website.juzibot.com/images/about-us/certificate/图-${
                    idx + 1
                  }.png`}
                  alt="certificate"
                  draggable="false"
                  onLoad={() => {
                    setImageLoadedCount(imageLoadedCount + 1);
                  }}
                ></img>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="slider">
        <div
          className={`left ${current === 1 ? 'disable' : ''}`}
          onClick={() => {
            if (current - 1 > 0) {
              swiper?.slideTo(current - 1);
              setCurrent(current - 1);
            }
          }}
        >
          <img
            src="https://cdn-official-website.juzibot.com/images/icons/arrow-right.svg"
            alt="arrow"
          ></img>
        </div>

        <div
          className={`right ${current === TOTAL_COUNT - 3 ? 'disable' : ''}`}
          onClick={() => {
            if (current < TOTAL_COUNT - 3) {
              swiper?.slideTo(current + 1);
              setCurrent(current + 1);
            }
          }}
        >
          <img
            src="https://cdn-official-website.juzibot.com/images/icons/arrow-right.svg"
            alt="arrow"
          ></img>
        </div>
      </div>
    </>
  );
};

const CustomerDisplay: NextPage = () => {
  return (
    <>
      <h1>我们的客户</h1>
      <div className="subtitle">以下为部分客户，排名不分前后</div>

      <div className="category">互联网服务</div>
      <img
        src="https://cdn-official-website.juzibot.com/images/about-us/internal.png"
        alt="internal"
        draggable="false"
      ></img>
      <div className="category">消费品牌</div>
      <img
        src="https://cdn-official-website.juzibot.com/images/about-us/consumer.png"
        alt="consumer"
        draggable="false"
      ></img>
      <div className="category">政务金融</div>
      <img
        src="https://cdn-official-website.juzibot.com/images/about-us/finance.png"
        alt="finance"
        draggable="false"
      ></img>
    </>
  );
};

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
        className={`popup-container-reverse pop ${
          flag === currentFlag ? 'hover' : ''
        }`}
        style={{ transform: `translate(${x}px, ${y}px)` }}
        onMouseLeave={() => flagSetter('')}
        onMouseMove={() => flagSetter(flag)}
        id={`c${flag}`}
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

const ExtraDialog: NextPage<{ flag: string }> = ({ flag }) => {
  if (flag === '2015') {
    return (
      <div className="cover-dialog hover c-2015">
        <strong>2015.02</strong>
        <div>
          句子互动前身桔子互动成立，为微信事业部、亚马逊、京东、华为等品牌提供新媒体运营服务
        </div>
        <strong>2016.05</strong>
        <div>为聊天机器人开源框架 Wechay 写下第一行代码</div>
        <strong>2016.06</strong>
        <div>桔子互动获得 PreAngel 天使投资</div>
      </div>
    );
  }
  if (flag === '2017') {
    return (
      <div className="cover-dialog reverse hover c-2017">
        <strong>2017.03</strong>
        <div>Wechaty 的首个落地项目小桔机器人上线</div>
        <strong>2017.04</strong>
        <div>为美团提供聊天机器人技术支持，微信自动化的第一笔收入</div>
        <strong>2017.07</strong>
        <div>与新华网签订合同，提供新媒体运营服务</div>
        <strong>2017.12</strong>
        <div>入围第一期百度 AI 加速器</div>
      </div>
    );
  }
  if (flag === '2018') {
    return (
      <div className="cover-dialog hover c-2018">
        <strong>2018.01</strong>
        <div>
          与硅谷 chatbot 平台 Datalog 签署合作协议，作为 MyPolly 在中国的经销商
        </div>
        <strong>2018.03</strong>
        <div>获得硅谷著名的孵化加速器之一 Plug And Play 的投资</div>
        <strong>2018.05</strong>
        <div>
          与北邮人工智能实验室签署合作协议，在自然语言处理方面双方进行深度合作
        </div>
        <strong>2018.08</strong>
        <div>
          获得第七届全国社会媒体处理大会（SMP 2018）SMP 任务型人机对话在线评测第
          4 名，回复自然度排名第 1
        </div>
        <strong>2018.09</strong>
        <div>句子互动 CEO 李佳芮获得微软 MVP 称号</div>
        <strong>2018.12</strong>
        <div>入选Y Combinator，成为 YC 进入中国招募的第一批孵化项目</div>
      </div>
    );
  }
  if (flag === '2019') {
    return (
      <div className="cover-dialog reverse hover c-2019">
        <strong>2019.01</strong>
        <div>句子秒回上线</div>
        <strong>2019.04</strong>
        <div>
          获得知名投资机构TSVC、阿尔法公社的投资；以NLP处理技术和精准的市场定位，获得了2019
          CCFA年度零售技术新锐得奖
        </div>
        <strong>2019.07</strong>
        <div>联合腾讯举办 bot5 系列沙龙</div>
        <strong>2019.10</strong>
        <div>句子秒回与第一个海外客户达成合作</div>
        <strong>2019.12</strong>
        <div>
          句子互动 CEO 李佳芮参加 2019 Microsoft Ignite The Tour
          并做主题分享；企业战略重新定位，All in 企业微信
        </div>
      </div>
    );
  }
  if (flag === '2020') {
    return (
      <div className="cover-dialog hover c-2020">
        <strong>2020.03</strong>
        <div>
          句客宝产品上线，并获得首个客户京东金融；《Chatbot 从 0 到
          1：对话式交互设计实践指南》出版；句子互动和 Wechaty
          作为特邀合作社区与微软共同举办 Microsoft Online Tech Forum
        </div>
        <strong>2020.05</strong>
        <div>入选 Facebook 中国大陆首期加速器</div>
        <strong>2020.08</strong>
        <div>与行业头部品牌腾讯广告、核桃编程等达成合作</div>
        <strong>2020.09</strong>
        <div>
          与母婴行业新消费品牌 Babycare 、教育行业头部品牌猿辅导等达成合作
        </div>
        <strong>2020.11</strong>
        <div>与美团、元气森林、网易有道、京东等品牌达成合作</div>
        <strong>2020.12</strong>
        <div>与美宝莲纽约、 58 同城、衣恋、乐凯撒等品牌达成合作</div>
      </div>
    );
  }
  if (flag === '2021') {
    return (
      <div className="cover-dialog reverse hover c-2021">
        <strong>2021.01</strong>
        <div>与学而思、聪明核桃、一起教育等头部教育公司达成合作</div>
        <strong>2021.03</strong>
        <div>与泡泡玛特、屈臣氏、YOOZ 电子烟、雪玲妃等头部消费品牌达成合作</div>
        <strong>2021.05</strong>
        <div>
          与厦门银行、啄木鸟唯修、安克、元宝保险、亿学学堂等知名企业达成合作
        </div>
        <strong>2021.07</strong>
        <div>
          与北京民政、美的、蒙牛、高德、朝阳大悦城、谦寻（薇娅）等品牌达成合作
        </div>
        <strong>2021.08</strong>
        <div>
          获得真成投资数百万美元 A 轮投资；与北京邮电大学安全学院成立 RPA
          联合实验室；句子互动 CEO
          李佳芮受邀参加联合国开发计划署与清华大学联合举办的人工智能圆桌论坛
        </div>
        <strong>2021.09</strong>
        <div>
          创始人 CEO 李佳芮入选福布斯中国2021年度30 Under 30、中关村 2021 年度
          U30 榜单
        </div>
        <strong>2021.12</strong>
        <div>句子互动上线 Wechaty Puppet Walnut，入局 5G 消息</div>
      </div>
    );
  }
  if (flag === '2022') {
    return (
      <div className="cover-dialog hover c-2022">
        <strong>2022.01</strong>
        <div>句子秒回 WhatsApp 版上线</div>
        <strong>2022.03</strong>
        <div>与宝洁、科沃斯等知名品牌签约</div>
      </div>
    );
  }
  return null;
};

const GrowthWall: NextPage = () => {
  const [flag, setFlag] = useState('');
  const popupFlags = [
    '2015',
    '2016-05',
    '2017',
    '2017-12',
    '2018',
    '2018-12',
    '2019',
    '2019-01',
    '2020',
    '2020-03',
    '2021',
    '2021-07',
    '2022',
    '2022-01',
  ];
  const autoPlayRef = useRef<NodeJS.Timer>();
  const [extraPopopVisible, toggleExtraPopopVisible] = useState(false);

  useEffect(() => {
    if (popupFlags?.length) {
      autoPlayRef.current = setTimeout(() => {
        if (!flag) return;
        let idx = popupFlags.indexOf(flag) + 1;
        if (idx > popupFlags.length - 1) {
          idx = 0;
        }
        setFlag(popupFlags[idx]);
      }, 5000);
    }
  }, [flag]);

  useEffect(() => {
    startAutoPlay();
  }, []);

  function startAutoPlay() {
    autoPlayRef.current = setTimeout(() => {
      if (!flag) {
        setFlag('2016-05');
      }
    }, 2000);
  }

  return (
    <>
      <h3>发展历程</h3>
      <div
        className="growth-data"
        onMouseMove={() => {
          autoPlayRef.current && clearTimeout(autoPlayRef.current);
          toggleExtraPopopVisible(true);
        }}
        onMouseLeave={() => {
          toggleExtraPopopVisible(false);
          startAutoPlay();
        }}
      >
        <ExtraDialog flag={extraPopopVisible ? flag : ''} />
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
          currentFlag={extraPopopVisible ? flag : ''}
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
          currentFlag={extraPopopVisible ? flag : ''}
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
          currentFlag={extraPopopVisible ? flag : ''}
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
          currentFlag={extraPopopVisible ? flag : ''}
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
          currentFlag={extraPopopVisible ? flag : ''}
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
          currentFlag={extraPopopVisible ? flag : ''}
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
          currentFlag={extraPopopVisible ? flag : ''}
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
  const { t } = useTranslation('about-us');
  return (
    <div className="first-page">
      <Seo page="about-us" />
      <h1>{t('hero-title')}</h1>

      <div className="info-box">
        <div className="left">
          <Image
            src="https://cdn-official-website.juzibot.com/images/about-us/photo.png"
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
          <div>{t('content-1')}</div>
          <div
            style={{ marginTop: 24 }}
            dangerouslySetInnerHTML={{ __html: t('content-2') }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const AboutUsPage: NextPage = () => {
  function initPlayer() {
    const s = document.createElement('script');
    s.innerHTML = `if (typeof DPlayer !== 'undefined') {
        const dp = new DPlayer({
          container: document.getElementById('video'),
            video: {
              url: 'https://cdn-official-website.juzibot.com/images/about-us/about-juzi.mp4',
              pic: 'https://cdn-official-website.juzibot.com/images/about-us/cover-02.jpg'
            },
        });
      }`;
    document.querySelector('body')!.appendChild(s);
  }
  useEffect(() => {
    initPlayer();
  }, []);
  const { i18n } = useTranslation('about-us');
  const isZh = i18n.language === 'zh';
  return (
    <div className={i18n.language}>
      <Seo page="about-us" />
      <div className="wrapper about-us-page">
        <div className="container">
          <AboutUsHeroPage />
        </div>
      </div>

      {isZh ? (
        <>
          <div className="wrapper growth-wall">
            <div className="container">
              <GrowthWall />
            </div>
          </div>

          <div className="wrapper video-box">
            <div className="container">
              <div className="video-container">
                <div className="video" id="video"></div>
              </div>
            </div>
            <Script
              src="https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js"
              onLoad={initPlayer}
              async
            ></Script>
          </div>

          <div className="wrapper customer-display">
            <div className="container">
              <CustomerDisplay />
            </div>
          </div>

          <div className="wrapper certificates">
            <div className="container">
              <Certificates />
            </div>
          </div>

          <div className="wrapper news">
            <div className="container">
              <NewsPage />
            </div>
          </div>

          <div className="wrapper about-appeal">
            <div className="container">
              <AboutUsAppealBar />
            </div>
          </div>
        </>
      ) : null}
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
        'about-us',
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default AboutUsPage;
