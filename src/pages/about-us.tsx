import Seo from '@src/components/common/Seo';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useEffect, useState } from 'react';
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
      <Link href='/join-us'>
        <a target='_blank'>
          <button className='primary-button start-button'>加入我们</button>
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
        '/_images/media-reports/img-1.png',
      title: '「句子互动」完成数百万美元Pre-A轮融资，打造大模型驱动的下一代对话式营销云',
      subtitle:
        '北京句子互动科技有限公司已完成数百万美元Pre-A轮融资，由真成投资领投，奇绩创坛跟投。本轮融资主要用于搭建大模型驱动的下一代对话式营销云……',
      src:
        'https://mp.weixin.qq.com/s/TSMHK8niDFsbR-jOWWCC0g',
    },
    {
      imgUrl:
        '/_images/media-reports/img-2.png',
      title: '句子互动抢先获得微软 Azure OpenAI 服务授权,持续深耕智能对话领域',
      subtitle:
        '微软 Azure 作为 OpenAI 的独家云服务提供商，提供了不可或缺的技术支持和服务，助力 OpenAI 在人工智能和自然语言生成等领域持续发展和创新……',
      src: 'https://mp.weixin.qq.com/s/L33EkP_86rtgIlnWc0OHjA',
    },
    {
      imgUrl:
        '/_images/media-reports/img-3.png',
      title: '句子互动亮相 WAIC 2023，共话 Chatbot 产业新未来',
      subtitle:
        '“句子互动应上海人工智能投资基金邀请参会，在本次会展中，句子互动展示最新产品 — AI 知识库，与众多行业从业者探讨企业级 AI 机器人的落地应用以及在不同场景下的跨界创新……',
      src: 'https://mp.weixin.qq.com/s/_8erRH--gNVH4EGU_WUvKA',
    },
    {
      imgUrl:
        '/_images/media-reports/img-4.png',
      title: '130页 PPT 深入浅出了解 ChatGPT —— ChatGPT 从 0 到 1',
      subtitle:
        '130 页 PPT尽可能深入浅出地为大家做一个 ChatGPT 的介绍，从技术原理、发展背景、应用场景和 prompt 等多个角度来进行阐述，献给拥抱 AGI 时代来临的你们……',
      src: 'https://mp.weixin.qq.com/s?__biz=Mzk0NzQzNzIwMQ==&mid=2247484302&idx=1&sn=e8a3de361651e991a25819efc334fee1&scene=21#wechat_redirect',
    },
    {
      imgUrl:
        '/_images/media-reports/img-5.png',
      title: '12 节课 从 0 到 1 ，快速成为 ChatGPT 的受益者',
      subtitle:
        '希望通过本课程的学习，你能享受到 ChatGPT 带来的极致体验，如写代码、约会指南等，同时你将极大地拓展自己的技能和视野，真正体验 AI 技术与人类共生的奇妙之处……',
      src:
        'https://mp.weixin.qq.com/s?__biz=MzU3OTk2MzA1Nw==&mid=2247535279&idx=1&sn=cb7688563d61b753fdaf60741a8bd80d&chksm=fd5c1b71ca2b92675a2f955f35c654b83170a36f8080e818b588eb3418e5e2b54111aebe149e&scene=21#wechat_redirect',
    },
    {
      imgUrl:
        '/_images/media-reports/img-6.png',
      title: '句子互动整合ChatGPT等生成模型，通过Chatbot提供真正意义上基于对话的AI工具',
      subtitle:
        '句子互动创始人李佳芮作为全球最大的 RPA 聊天机器人开源框架 Wechaty 的联合作者，自 2016 年起致力于通过 Chatbot 将对话式服务落地的业务场景中……',
      src: 'https://mp.weixin.qq.com/s?__biz=MzU3OTk2MzA1Nw==&mid=2247528198&idx=1&sn=5af2a6a1d39cbd3979d167aec9f27c7c&chksm=fd5c3ed8ca2bb7ce72bdf8223dcd36651aef693ac99f73f25a9bb34eb3c20f30e846d06397bf&token=915112483&lang=zh_CN#rd',
    },
    {
      imgUrl:
        '/_images/media-reports/img-7.png',
      title: '句子互动参加硬核桃5G开发者社区两周年庆典，与百度、中国搜索、来也科技助力智能化，赋能5G产业！',
      subtitle:
        '很荣幸句子互动成为首批核能商店共创企业，并在庆典中与百度、中国搜索、来也等公司一起上台，共同见证了 5G 与新型技术金融应用联合实验室的揭牌仪式……',
      src: 'https://mp.weixin.qq.com/s/IEYjUlE480roE9I30bkbpg',
    },
    {
      imgUrl:
        '/_images/media-reports/img-8.png',
      title:
        '句子互动被 2000+ 品牌评选为“年度最值得推荐的私域工具”',
      subtitle:
        '从2022年 8月开始，业内知名媒体团队见实开展了一项私域行业调研，3 个月内共收到了来自 2000+ 品牌的有效问卷反馈……',
      src: 'https://mp.weixin.qq.com/s/gQTgvxMWagdpQnlYLzcRhw',
    },
    {
      imgUrl:
        '/_images/media-reports/img-9.png',
      title: '2023ChatGPT未来大会成功举办，《Chatbot从0到1》被推荐',
      subtitle:
        '微软技术俱乐部（苏州）执行主席潘淳带来主题分享《ChatGPT如何带动产业升级》。分享中潘淳向与会观众推荐了李佳芮《Chatbot 从 0 到 1：对话式交互设计实践指南》……',
      src:
        'https://mp.weixin.qq.com/s/t_-WStNg5YJh2vOXvundMA',
    },
    {
      imgUrl:
        '/_images/media-reports/img-10.png',
      title: '句子互动助力企业信息安全，荣获公安部颁发「国家信息安全等级保护三级」认证',
      subtitle:
        '经过公安厅的认证评估，句子互动旗下RPA营销服务一体化平台句子秒回成功获得了“信息系统安全等级保护备案证明第3级”（以下简称“等保三级”）证明。',
      src:
        'https://mp.weixin.qq.com/s/VkLkdpowpdJ5awgqSqIifA',
    },
    {
      imgUrl:
        '/_images/media-reports/img-11.png',
      title: '句子互动树立对话式营销行业新标杆，荣获 ISO9001 质量管理体系认证',
      subtitle:
        '句子互动申请并通过了 ISO9001 质量管理认证机构专家全面、严格、细致的审查，获得GB/T19001-2016 / ISO9001:2015 标准质量管理体系认证证书，认证范围为应用软件技术开发，自行开发的SaaS产品销售……',
      src:
        'https://mp.weixin.qq.com/s/r_uNiPIjNMm4mfUQ7_QKFg',
    },
    {
      imgUrl:
        '/_images/media-reports/img-12.png',
      title: '句子互动获得高新技术企业认定',
      subtitle:
        '句子互动通过北京市认定管理机构2021年认定的高新技术企业，于2021年12月公示。',
      src:
        'http://www.innocom.gov.cn/gqrdw/c101407/202112/dfb1d5c2a6eb47ddb3f00bfe5f02413b.shtml',
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
        className='news-swiper'
        spaceBetween={30}
        style={{ width: '100%' }}
        onSwiper={swiper => {
          setSwiper(swiper);
          autoplay(swiper);
        }}
        onActiveIndexChange={swiper => {
          setCurrentIndex(swiper.activeIndex);
          debounceAutoPlay();
        }}
      >
        {data.map((d, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='news-item-container'>
                {d.map((item, idx) => {
                  return (
                    <Link href={item.src} key={`${i}-${idx}`}>
                      <a className='news' target='_blank'>
                        <img src={item.imgUrl} alt='news-cover'></img>
                        <div style={{ height: 116 }}>
                          <div className='title line-clamp-2 min-h-[50px]'>{item.title}</div>
                          <div className='subtitle line-clamp-2'>{item.subtitle}</div>
                        </div>
                        <div className='read-more'>点击查看 →</div>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='pagination'>
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
        className='certificate-swiper'
        slidesPerView='auto'
        centeredSlides
        spaceBetween={30}
        autoplay
        style={{ width: '100%' }}
        onSwiper={s => {
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
              <SwiperSlide key={idx} className='slide-item'>
                <img
                  src={`https://cdn-official-website.juzibot.com/images/about-us/certificate/图-${
                    idx + 1
                  }.png`}
                  alt='certificate'
                  draggable='false'
                  onLoad={() => {
                    setImageLoadedCount(imageLoadedCount + 1);
                  }}
                ></img>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className='slider'>
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
            src='https://cdn-official-website.juzibot.com/images/icons/arrow-right.svg'
            alt='arrow'
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
            src='https://cdn-official-website.juzibot.com/images/icons/arrow-right.svg'
            alt='arrow'
          ></img>
        </div>
      </div>
    </>
  );
};

// const CustomerDisplay: NextPage = () => {
//   return (
//     <>
//       <h1>我们的客户</h1>
//       <div className='subtitle'>以下为部分客户，排名不分前后</div>

//       <div className='category'>消费品牌</div>
//       <img
//         src='https://cdn-official-website.juzibot.com/images/about-us/consumer-20220222.png'
//         alt='consumer'
//         draggable='false'
//       ></img>
//       <div className='category'>政务/金融/医疗</div>
//       <img
//         src='https://cdn-official-website.juzibot.com/images/about-us/finance-20220222.png'
//         alt='finance'
//         draggable='false'
//       ></img>
//       <div className='category'>互联网服务在线教育</div>
//       <img
//         src='https://cdn-official-website.juzibot.com/images/about-us/internal-20230316.png'
//         alt='internal'
//         draggable='false'
//       ></img>
//     </>
//   );
// };

// const Popup: NextPage<{
//   isReverse?: boolean;
//   x: number;
//   y: number;
//   lineY?: number;
//   title: string;
//   style?: CSSProperties;
//   flag: string;
//   currentFlag: string;
//   flagSetter: (f: string) => void;
// }> = ({
//   isReverse,
//   children,
//   title,
//   x,
//   y,
//   style,
//   lineY,
//   flagSetter,
//   flag,
//   currentFlag,
// }) => {
//   if (isReverse) {
//     return (
//       <div
//         className={`popup-container-reverse pop ${
//           flag === currentFlag ? 'hover' : ''
//         }`}
//         style={{ transform: `translate(${x}px, ${y}px)` }}
//         onMouseLeave={() => flagSetter('')}
//         onMouseMove={() => flagSetter(flag)}
//         id={`c${flag}`}
//       >
//         <div
//           className='line'
//           style={lineY ? { transform: `translateY(${lineY}px)` } : {}}
//         ></div>
//         <div className='popup' style={style}>
//           <div>
//             <strong>{title}</strong>
//           </div>
//           {children}
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div
//         className={`popup-container ${currentFlag === flag ? 'hover' : ''}`}
//         style={{ transform: `translate(${x}px, ${y}px)` }}
//         onMouseLeave={() => flagSetter('')}
//         onMouseMove={() => flagSetter(flag)}
//       >
//         <div className='popup' style={style}>
//           <div>
//             <strong>{title}</strong>
//           </div>
//           {children}
//         </div>
//         <div
//           className='line'
//           style={lineY ? { transform: `translateY(${lineY}px)` } : {}}
//         ></div>
//       </div>
//     );
//   }
// };

// const Dot: NextPage<{
//   x: number;
//   y: number;
//   isWhite?: boolean;
//   onClick?: () => void;
//   flag: string;
//   currentFlag: string;
//   flagSetter: (f: string) => void;
// }> = ({ x, y, isWhite, onClick, flag, currentFlag, flagSetter }) => {
//   return (
//     <div
//       className={`dot-container ${currentFlag === flag ? 'hover' : ''}`}
//       style={{
//         transform: `translate(${x}px, ${y}px)`,
//         borderWidth: isWhite ? 10 : 8,
//       }}
//       onMouseMove={() => flagSetter(flag)}
//       onMouseLeave={() => flagSetter('')}
//     >
//       <div className={isWhite ? 'dot-white' : 'dot'} onClick={onClick}></div>
//     </div>
//   );
// };

// const ExtraDialog: NextPage<{ flag: string }> = ({ flag }) => {
//   if (flag === '2015') {
//     return (
//       <div className='cover-dialog hover c-2015'>
//         <strong>2015.02</strong>
//         <div>
//           句子互动前身桔子互动成立，为微信事业部、亚马逊、京东、华为等品牌提供新媒体运营服务
//         </div>
//         <strong>2016.05</strong>
//         <div>为聊天机器人开源框架 Wechay 写下第一行代码</div>
//         <strong>2016.06</strong>
//         <div>桔子互动获得 PreAngel 天使投资</div>
//       </div>
//     );
//   }
//   if (flag === '2017') {
//     return (
//       <div className='cover-dialog reverse hover c-2017'>
//         <strong>2017.03</strong>
//         <div>Wechaty 的首个落地项目小桔机器人上线</div>
//         <strong>2017.04</strong>
//         <div>为美团提供聊天机器人技术支持，微信自动化的第一笔收入</div>
//         <strong>2017.07</strong>
//         <div>与新华网签订合同，提供新媒体运营服务</div>
//         <strong>2017.12</strong>
//         <div>入围第一期百度 AI 加速器</div>
//       </div>
//     );
//   }
//   if (flag === '2018') {
//     return (
//       <div className='cover-dialog hover c-2018'>
//         <strong>2018.01</strong>
//         <div>
//           与硅谷 chatbot 平台 Datalog 签署合作协议，作为 MyPolly 在中国的经销商
//         </div>
//         <strong>2018.03</strong>
//         <div>获得硅谷著名的孵化加速器之一 Plug And Play 的投资</div>
//         <strong>2018.05</strong>
//         <div>
//           与北邮人工智能实验室签署合作协议，在自然语言处理方面双方进行深度合作
//         </div>
//         <strong>2018.08</strong>
//         <div>
//           获得第七届全国社会媒体处理大会（SMP 2018）SMP 任务型人机对话在线评测第
//           4 名，回复自然度排名第 1
//         </div>
//         <strong>2018.09</strong>
//         <div>句子互动 CEO 李佳芮获得微软 MVP 称号</div>
//         <strong>2018.12</strong>
//         <div>入选Y Combinator，成为 YC 进入中国招募的第一批孵化项目</div>
//       </div>
//     );
//   }
//   if (flag === '2019') {
//     return (
//       <div className='cover-dialog reverse hover c-2019'>
//         <strong>2019.01</strong>
//         <div>句子秒回上线</div>
//         <strong>2019.04</strong>
//         <div>
//           获得知名投资机构TSVC、阿尔法公社的投资；以NLP处理技术和精准的市场定位，获得了2019
//           CCFA年度零售技术新锐得奖
//         </div>
//         <strong>2019.07</strong>
//         <div>联合腾讯举办 bot5 系列沙龙</div>
//         <strong>2019.10</strong>
//         <div>句子秒回与第一个海外客户达成合作</div>
//         <strong>2019.12</strong>
//         <div>
//           句子互动 CEO 李佳芮参加 2019 Microsoft Ignite The Tour
//           并做主题分享；企业战略重新定位，All in 企业微信
//         </div>
//       </div>
//     );
//   }
//   if (flag === '2020') {
//     return (
//       <div className='cover-dialog hover c-2020'>
//         <strong>2020.03</strong>
//         <div>
//           句子互动企业微信产品上线，并获得首个客户京东金融；《Chatbot 从 0 到
//           1：对话式交互设计实践指南》出版；句子互动和 Wechaty
//           作为特邀合作社区与微软共同举办 Microsoft Online Tech Forum
//         </div>
//         <strong>2020.05</strong>
//         <div>入选 Facebook 中国大陆首期加速器</div>
//         <strong>2020.08</strong>
//         <div>与行业头部品牌核桃编程等达成合作</div>
//         <strong>2020.09</strong>
//         <div>
//           与母婴行业新消费品牌 Babycare 、教育行业头部品牌猿辅导等达成合作
//         </div>
//         <strong>2020.11</strong>
//         <div>与美团、元气森林、网易有道、京东等品牌达成合作</div>
//         <strong>2020.12</strong>
//         <div>与美宝莲纽约、 58 同城、衣恋、乐凯撒等品牌达成合作</div>
//       </div>
//     );
//   }
//   if (flag === '2021') {
//     return (
//       <div className='cover-dialog reverse hover c-2021'>
//         <strong>2021.01</strong>
//         <div>与学而思、聪明核桃、一起教育等头部教育公司达成合作</div>
//         <strong>2021.03</strong>
//         <div>与泡泡玛特、屈臣氏、YOOZ 电子烟、雪玲妃等头部消费品牌达成合作</div>
//         <strong>2021.05</strong>
//         <div>
//           与厦门银行、啄木鸟唯修、安克、元宝保险、亿学学堂等知名企业达成合作
//         </div>
//         <strong>2021.07</strong>
//         <div>
//           与北京民政、美的、蒙牛、高德、朝阳大悦城、谦寻（薇娅）等品牌达成合作
//         </div>
//         <strong>2021.08</strong>
//         <div>
//           获得真成投资数百万美元 A 轮投资；与北京邮电大学安全学院成立 RPA
//           联合实验室；句子互动 CEO
//           李佳芮受邀参加联合国开发计划署与清华大学联合举办的人工智能圆桌论坛
//         </div>
//         <strong>2021.09</strong>
//         <div>
//           创始人 CEO 李佳芮入选福布斯中国2021年度30 Under 30、中关村 2021 年度
//           U30 榜单
//         </div>
//         <strong>2021.12</strong>
//         <div>句子互动上线 Wechaty Puppet Walnut，入局 5G 消息</div>
//       </div>
//     );
//   }
//   if (flag === '2022') {
//     return (
//       <div className='cover-dialog hover c-2022'>
//         <strong>2022.01</strong>
//         <div>句子秒回 WhatsApp 版上线</div>
//         <strong>2022.03</strong>
//         <div>与宝洁、科沃斯等知名品牌签约</div>
//       </div>
//     );
//   }
//   return null;
// };

// const GrowthWall: NextPage = () => {
//   const [flag, setFlag] = useState('');
//   const popupFlags = [
//     '2015',
//     '2016-05',
//     '2017',
//     '2017-12',
//     '2018',
//     '2018-12',
//     '2019',
//     '2019-01',
//     '2020',
//     '2020-03',
//     '2021',
//     '2021-07',
//     '2022',
//     '2022-01',
//   ];
//   const autoPlayRef = useRef<NodeJS.Timer>();
//   const [extraPopopVisible, toggleExtraPopopVisible] = useState(false);

//   useEffect(() => {
//     if (popupFlags?.length) {
//       autoPlayRef.current = setTimeout(() => {
//         if (!flag) return;
//         let idx = popupFlags.indexOf(flag) + 1;
//         if (idx > popupFlags.length - 1) {
//           idx = 0;
//         }
//         setFlag(popupFlags[idx]);
//       }, 5000);
//     }
//   }, [flag]);

//   useEffect(() => {
//     startAutoPlay();
//   }, []);

//   function startAutoPlay() {
//     autoPlayRef.current = setTimeout(() => {
//       if (!flag) {
//         setFlag('2016-05');
//       }
//     }, 2000);
//   }

//   return (
//     <>
//       <h3>发展历程</h3>
//       <div
//         className='growth-data'
//         onMouseMove={() => {
//           autoPlayRef.current && clearTimeout(autoPlayRef.current);
//           toggleExtraPopopVisible(true);
//         }}
//         onMouseLeave={() => {
//           toggleExtraPopopVisible(false);
//           startAutoPlay();
//         }}
//       >
//         <ExtraDialog flag={extraPopopVisible ? flag : ''} />
//         <Popup
//           title='2016.05'
//           x={110}
//           y={104}
//           lineY={182}
//           flag='2016-05'
//           flagSetter={setFlag}
//           currentFlag={flag}
//         >
//           <div>为聊天机器人开源框架</div>
//           <div>Wechaty 写下第一行代码</div>
//         </Popup>

//         <Popup
//           title='2017.12'
//           x={284}
//           y={194}
//           lineY={162}
//           isReverse
//           flag='2017-12'
//           flagSetter={setFlag}
//           currentFlag={flag}
//         >
//           <div>入围第一期百度 AI 加速器</div>
//         </Popup>

//         <Popup
//           title='2018.12'
//           x={454}
//           y={88}
//           lineY={180}
//           style={{ width: 260 }}
//           flag='2018-12'
//           flagSetter={setFlag}
//           currentFlag={flag}
//         >
//           <div>入选 Y Combinator，成为 YC 进入中国招募的第一批孵化项目</div>
//         </Popup>

//         <Popup
//           title='2019.01'
//           isReverse
//           x={624}
//           y={168}
//           lineY={156}
//           style={{ width: 128 }}
//           flag='2019-01'
//           flagSetter={setFlag}
//           currentFlag={flag}
//         >
//           <div>句子秒回上线</div>
//         </Popup>

//         <Popup
//           title='2020.03'
//           x={794}
//           y={-40}
//           lineY={250}
//           style={{ width: 280 }}
//           flag='2020-03'
//           flagSetter={setFlag}
//           currentFlag={flag}
//         >
//           <div>句子互动企业微信产品上线，并获得首个客户京东金融</div>
//           <div style={{ marginTop: 8 }}>
//             <strong>2020.11</strong>
//           </div>
//           <div>与美团、元气森林、网易有道、京东等品牌达成合作</div>
//         </Popup>

//         <Popup
//           title='2021.07'
//           x={964}
//           y={66}
//           lineY={0}
//           style={{ width: 310 }}
//           isReverse
//           flag='2021-07'
//           flagSetter={setFlag}
//           currentFlag={flag}
//         >
//           <div>
//             与北京民政、美的、蒙牛、高德、朝阳大悦城、谦寻（薇娅）等品牌达成合作
//           </div>
//           <div style={{ marginTop: 8 }}>
//             <strong>2021.12</strong>
//           </div>
//           <div>句子互动上线 Wechaty Puppet Walnut，入局 5G 消息</div>
//         </Popup>

//         <Popup
//           title='2022.01'
//           x={1093}
//           y={-62}
//           lineY={160}
//           style={{ width: 230 }}
//           flag='2022-01'
//           flagSetter={setFlag}
//           currentFlag={flag}
//         >
//           <div>句子秒回 WhatsApp 版上线</div>
//         </Popup>

//         <Dot
//           x={16}
//           y={338}
//           currentFlag={extraPopopVisible ? flag : ''}
//           flagSetter={setFlag}
//           flag='2015'
//         />
//         <Dot
//           x={96}
//           y={338}
//           isWhite
//           currentFlag={flag}
//           flagSetter={setFlag}
//           flag='2016-05'
//         />
//         <Dot
//           x={186}
//           y={336}
//           currentFlag={extraPopopVisible ? flag : ''}
//           flagSetter={setFlag}
//           flag='2017'
//         />
//         <Dot
//           x={270}
//           y={335}
//           isWhite
//           currentFlag={flag}
//           flagSetter={setFlag}
//           flag='2017-12'
//         />
//         <Dot
//           x={356}
//           y={330}
//           currentFlag={extraPopopVisible ? flag : ''}
//           flagSetter={setFlag}
//           flag='2018'
//         />
//         <Dot
//           x={440}
//           y={325}
//           isWhite
//           currentFlag={flag}
//           flagSetter={setFlag}
//           flag='2018-12'
//         />
//         <Dot
//           x={526}
//           y={315}
//           currentFlag={extraPopopVisible ? flag : ''}
//           flagSetter={setFlag}
//           flag='2019'
//         />
//         <Dot
//           x={610}
//           y={304}
//           isWhite
//           currentFlag={flag}
//           flagSetter={setFlag}
//           flag='2019-01'
//         />
//         <Dot
//           x={696}
//           y={286}
//           currentFlag={extraPopopVisible ? flag : ''}
//           flagSetter={setFlag}
//           flag='2020'
//         />
//         <Dot
//           x={780}
//           y={266}
//           isWhite
//           currentFlag={flag}
//           flagSetter={setFlag}
//           flag='2020-03'
//         />
//         <Dot
//           x={866}
//           y={237}
//           currentFlag={extraPopopVisible ? flag : ''}
//           flagSetter={setFlag}
//           flag='2021'
//         />
//         <Dot
//           x={950}
//           y={207}
//           isWhite
//           currentFlag={flag}
//           flagSetter={setFlag}
//           flag='2021-07'
//         />
//         <Dot
//           x={1038}
//           y={170}
//           currentFlag={extraPopopVisible ? flag : ''}
//           flagSetter={setFlag}
//           flag='2022'
//         />
//         <Dot
//           x={1080}
//           y={152}
//           isWhite
//           currentFlag={flag}
//           flagSetter={setFlag}
//           flag='2022-01'
//         />
//       </div>
//     </>
//   );
// };

const AboutUsHeroPage: NextPage = () => {
  const { t } = useTranslation('about-us');
  return (
    <div className='first-page'>
      <Seo page='about-us' />
      <h1>{t('hero-title')}</h1>

      <div className='info-box'>
        <div className='left'>
          <Image
            src='https://cdn-official-website.juzibot.com/images/about-us/photo.png'
            width={660}
            height={400}
            alt='photo'
            draggable='false'
          />
          <div className='logo-box'>
            <img
              src='https://cdn-official-website.juzibot.com/images/logo.png'
              alt='logo'
              draggable='false'
            />
          </div>
        </div>

        <div className='right'>
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

const AboutAiNativePage: NextPage = () => {
  // const { t } = useTranslation('about-us');
  return (
    <div className='first-page !pt-0'>
      <Seo page='about-us' />
      <div className='flex flex-col items-center justify-center'>
        <div className='!text-[32px] font-semibold'>AI Native 团队，</div>
        <div className='!text-[32px] font-semibold'>
          在 IM 营销生态 & Chatbot 领域7 年积累磨一剑，对营销场景有深刻认知
        </div>
      </div>

      <div className='info-box justify-center'>
        <div className='flex-1 flex items-center justify-center'>
          <img
            src='_images/image-page/about-us-1.png'
            alt='photo'
            className='w-[1220px]'
            draggable='false'
          />
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
      <Seo page='about-us' />
      <div className='wrapper about-us-page'>
        <div className='container'>
          <AboutUsHeroPage />
        </div>
      </div>
      <div className='wrapper about-us-page' style={{ background: 'unset' }}>
        <div className='container'>
          <AboutAiNativePage />
        </div>
      </div>
      {isZh ? (
        <>
          {/* <div className='wrapper growth-wall'>
            <div className='container'>
              <GrowthWall />
            </div>
          </div> */}

          <div className='wrapper video-box'>
            <div className='container'>
              <div className='video-container'>
                <div className='video' id='video'></div>
              </div>
            </div>
            <Script
              src='https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js'
              onLoad={initPlayer}
              async
            ></Script>
          </div>

          {/* <div className='wrapper customer-display'>
            <div className='container'>
              <CustomerDisplay />
            </div>
          </div> */}

          <div className='wrapper certificates'>
            <div className='container'>
              <Certificates />
            </div>
          </div>

          <div className='wrapper news'>
            <div className='container'>
              <NewsPage />
            </div>
          </div>

          <div className='wrapper about-appeal'>
            <div className='container'>
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
