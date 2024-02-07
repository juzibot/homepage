import { CSSProperties, ReactNode } from "react"
import { ContactUsOption } from "./emitter"
import { NextRouter } from "next/router";
import { host } from "@src/config";

type Key = Required<ContactUsOption>['type'];
export const leftTipMap: { [key in Key]: { title: string, items: string[] }[] } = {
  default: [
    {
      title: '业务咨询',
      items: [
        '提供专业的业务咨询及解决方案',
        '结合RPA和AI技术，协助企业制定有效的运营策略',
      ],
    },
    {
      title: '实战陪跑',
      items: [
        '提供一对一辅导，全程协助深入了解RPA和AI',
        '实战专家解答问题，提供全方位工具支持',
      ],
    },
    {
      title: '社群交流',
      items: [
        '实时与5000+一线业务操盘手交流',
        '获取最新私域和AI行业情报',
        '赠送600+私域和AI干货合集，持续更新解读',
      ],
    },
  ],
  ai: [
    {
      title: '业务咨询',
      items: [
        '为企业制定数字员工发展战略和规划',
        '帮助企业利用数字员工驱动业务决策',
        '为企业提供人工智能方面的咨询和指导',
      ],
    },
    {
      title: '实战陪跑',
      items: [
        '协助企业进行数字员工的搭建和优化',
        '提供数字员工的性能监控和维护服务，确保数字员工持续性能和准确性',
      ],
    },
    {
      title: '社群交流',
      items: [
        '最新 AI 行业情报实时更新解读',
        '与一线业务操盘手实时交流',
        '实操干货弹药、行业案例持续供给',
      ],
    },
  ],
  rpa: [
    {
      title: '实战陪跑',
      items: [
        '1 对 1 全程辅助注册',
        '7 天免费试用，PoC 实战陪跑',
        '私域实战专家 1 对 1 咨询解决运营问题',
      ],
    },
    {
      title: '运营干货',
      items: [
        '赠送 600 +业务 SOP 合集',
        '80+ 头部企业真实运营案例针对性解析',
      ],
    },
    {
      title: '社群交流',
      items: [
        '与5000+ 一线业务操盘手实时交流',
        '300+ 份实操干货弹药，200+ 行业案例供给',
        '最新私域行业情报实时更新解读',
      ],
    },
  ],
}

export const leftStyleMap: { [key in Key]: CSSProperties } = {
  default: { background: 'linear-gradient(169deg, #F6F7FD 4.15%, #EAF2FF 94.03%)' },
  ai: { background: 'linear-gradient(174deg, #FBF5FF 2.78%, #F0E1FF 95.55%)' },
  rpa: { background: 'linear-gradient(147.8deg, rgba(102, 71, 255, 0.1) 19.05%, rgba(5, 85, 255, 0.1) 87.88%)' },
}

export const appealMap: { [key in Key]: ReactNode } = {
  default: (
    <span>
      <span className='text-[18px]'>对话式 AI，轻松盘活私域</span>
      <br />
      <span className='text-[16px]'>句子互动和你一起抓住变现商机</span>
    </span>
  ),

  ai: (
    <span>
      <span className='text-[18px]'>立刻搭建大模型驱动的数字员工</span>
    </span>
  ),
  rpa: (
    <span>
      <span className='text-[18px]'>10 倍提高你的私域运营效率</span>
    </span>
  ),
}

export const footerMap = (router: NextRouter) => {
  return (
    {
      default: (
        <div className="login relative " style={{ marginTop: 22 }}>
          <div className='w-[300px] absolute flex justify-between left-1/2' style={{ transform: 'translateX(-50%)' }}>
            <span>
              登录
              <a href={`https://insight.juzibot.com/auth/login?from=juzibot.com`} target="_blank" rel="noreferrer">句子AI知识库账号</a>
            </span>
            <span>
              登录
              <a href={`https://miaohui.juzibot.com/auth/login?from=login&rediect=${host + router.pathname}`} target="_blank" rel="noreferrer">句子秒回账号</a>
            </span>
          </div>
        </div>
      ),
      ai: (
        <div className="login" style={{ marginTop: 42 }}>
          已有账号，
          <a href="https://insight.juzibot.com/auth/login?from=juzibot.com" target="_blank" rel="noreferrer">
            立即登录
          </a>
        </div>
      ),
      rpa: (
        <div className="login" style={{ marginTop: 42 }}>
          已有账号，
          <a href={`https://miaohui.juzibot.com/auth/login?from=login&rediect=${host + router.pathname}`} target="_blank" rel="noreferrer">
            立即登录
          </a>
        </div>
      ),
    } as { [key in Required<ContactUsOption>['type']]: ReactNode }
  )
}

// https://juzihudong.feishu.cn/sheets/WUqgsmlJKhLZjvt2UlmcLb6In5c
export const qrCodeMap: { [key in Required<ContactUsOption>['qrCode']]: string } = {
  'sf-01': '/_images/qrcodes/sf-01.png',
  'sf-02': '/_images/qrcodes/sf-02.png',
  'sf-03': '/_images/qrcodes/sf-03.png',
  'sf-04': '/_images/qrcodes/sf-04.png',
  'juzibot-01': '/_images/qrcodes/juzibot-01.png',
  'juzibot-02': '/_images/qrcodes/juzibot-02.png',
}
