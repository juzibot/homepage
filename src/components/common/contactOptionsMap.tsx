import { CSSProperties, ReactNode } from "react"
import { ContactUsOption } from "./emitter"
import { NextRouter } from "next/router";
import { host } from "@src/config";
import { useTranslation } from 'react-i18next';

type Key = Required<ContactUsOption>['type'];
export const LeftTipMap = () => { 
const { i18n } = useTranslation(['common']);
return {
  default: [
    {
      title: i18n.language === 'en' ? "Business Consulting" : "业务咨询",
      items: [
        i18n.language === 'en' ? "Professional business consulting and solutions" : "提供专业的业务咨询及解决方案",
        i18n.language === 'en' ? "RPA + AI to develop effective operational strategies" : "结合RPA和AI技术，协助企业制定有效的运营策略"
      ],
    },
    {
      title: i18n.language === 'en' ? "Practical Assistance" : "实战陪跑",
      items: [
        i18n.language === 'en' ? "One-on-one tutoring to better understand RPA + AI" : "提供一对一辅导，全程协助深入了解RPA和AI",
        i18n.language === 'en' ? "Experts provide comprehensive tool support" : "实战专家解答问题，提供全方位工具支持",
      ],
    },
    {
      title: i18n.language === 'en' ? "Community Conversation" : "社群交流",
      items: [
        i18n.language === 'en' ? "Real-time communication with 5000+ operators" : "实时与5000+一线业务操盘手交流",
        i18n.language === 'en' ? "Latest private domain and AI industry intelligence" : "获取最新私域和AI行业情报",
        i18n.language === 'en' ? "600+ private domains, updated continuously" : "赠送600+私域和AI干货合集，持续更新解读",
      ],
    },
  ],
  ai: [
    {
      title: i18n.language === 'en' ? "Business Consulting" : "业务咨询",
      items: [
        i18n.language === 'en' ? "Professional business consulting and solutions" : "为企业制定数字员工发展战略和规划",
        i18n.language === 'en' ? "Leverage digital employees to drive decisions" : "帮助企业利用数字员工驱动业务决策",
        i18n.language === 'en' ? "Consulting and guidance on AI for enterprises" : "为企业提供人工智能方面的咨询和指导",
      ],
    },
    {
      title: i18n.language === 'en' ? "Practical Assistance" : "实战陪跑",
      items: [
        i18n.language === 'en' ? "Assistance in building and optimizing digital employees" : "协助企业进行数字员工的搭建和优化",
        i18n.language === 'en' ? "Performance monitoring and maintenance services for digital employees" : "提供数字员工的性能监控和维护服务，确保数字员工持续性能和准确性",
      ],
    },
    {
      title: i18n.language === 'en' ? "Community Conversation" : "社群交流",
      items: [
        i18n.language === 'en' ? "Real-time updates on the latest AI industry intelligence" : "最新 AI 行业情报实时更新解读",
        i18n.language === 'en' ? "Real-time communication with frontline business operators" : "与一线业务操盘手实时交流",
        i18n.language === 'en' ? "600+ private domains, updated continuously" : "实操干货弹药、行业案例持续供给",
      ],
    },
  ],
  rpa: [
    {
      title: i18n.language === 'en' ? "Practical Assistance" : "实战陪跑",
      items: [
        i18n.language === 'en' ? "1-on-1 registration assistance" : "1 对 1 全程辅助注册",
        i18n.language === 'en' ? "7-day free trial, assistance in real-time" : "7 天免费试用，PoC 实战陪跑",
        i18n.language === 'en' ? "Private domain experts 1-on-1 consultation for operational problems" : "私域实战专家 1 对 1 咨询解决运营问题",
      ],
    },
    {
      title: i18n.language === 'en' ? "Operations Services" : "运营干货",
      items: [
        i18n.language === 'en' ? "600+ business SOP collection provided" : "赠送 600 +业务 SOP 合集",
        i18n.language === 'en' ? "Targeted analysis of operations cases of 80+ top enterprises" : "80+ 头部企业真实运营案例针对性解析",
      ],
    },
    {
      title: i18n.language === 'en' ? "Community Conversation" : "社群交流",
      items: [
        i18n.language === 'en' ? "Real-time communication with 5000+ operators" : "实时与5000+一线业务操盘手交流",
        i18n.language === 'en' ? "Latest private domain and AI industry intelligence" : "300+ 份实操干货弹药，200+ 行业案例供给",
        i18n.language === 'en' ? "600+ private domains, updated continuously" : "最新私域行业情报实时更新解读",
      ],
    },
  ],
}
}

export const leftStyleMap: { [key in Key]: CSSProperties } = {
  default: { background: 'linear-gradient(169deg, #F6F7FD 4.15%, #EAF2FF 94.03%)' },
  ai: { background: 'linear-gradient(174deg, #FBF5FF 2.78%, #F0E1FF 95.55%)' },
  rpa: { background: 'linear-gradient(147.8deg, rgba(102, 71, 255, 0.1) 19.05%, rgba(5, 85, 255, 0.1) 87.88%)' },
}

export const AppealMap = () => {
  const { i18n } = useTranslation(['common']);
  return {
    default: (
      <span>
        <span style={{ fontSize: i18n.language === 'en' ? 13 : 18 }}>{i18n.language === 'en' ? "Dialogue based AI, effortless private domains" : "对话式 AI，轻松盘活私域"}</span>
        <br />
        <span className='text-[16px]'>{i18n.language === 'en' ? "Seize opportunities with Juzi.bot" : "句子互动和你一起抓住变现商机"}</span>
      </span>
    ),

    ai: (
      <span>
        <span style={{ fontSize: i18n.language === 'en' ? 15 : 18 }}>{i18n.language === 'en' ? "Start building your personalized model" : "立刻搭建大模型驱动的数字员工"}</span>
      </span>
    ),
    rpa: (
      <span>
        <span className='text-[18px]'>{i18n.language === 'en' ? "Increase your operational efficiency up to 10x" : "10 倍提高你的私域运营效率"}</span>
      </span>
    ),
  }
}

export const FooterMap = (router: NextRouter) => {
  const { i18n } = useTranslation(['common']);
  return (
    {
      default: (
        <div className="login relative " style={{ marginTop: 22 }}>
          <div className='w-[300px] absolute flex justify-between left-1/2' style={{ transform: 'translateX(-50%)' }}>
            <span>
              {i18n.language === 'en' ? "Login" : "登录"}
              <a href={`https://insight.juzibot.com/auth/login?from=juzibot.com`} target="_blank" rel="noreferrer"> {i18n.language === 'en' ? "AI Knowledge Center" : "句子AI知识库账号"}</a>
            </span>
            <span>
            {i18n.language === 'en' ? "Login" : "登录"}
              <a href={`https://miaohui.juzibot.com/auth/login?from=login&rediect=${host + router.pathname}`} target="_blank" rel="noreferrer"> {i18n.language === 'en' ? "Juzi.bot" : "句子秒回账号"}</a>
            </span>
          </div>
        </div>
      ),
      ai: (
        <div className="login" style={{ marginTop: i18n.language === 'en' ? 20 : 42 }}>
          {i18n.language === 'en' ? "Already have an account? " : "已有账号，"}
          <a href="https://insight.juzibot.com/auth/login?from=juzibot.com" target="_blank" rel="noreferrer">
            {i18n.language === 'en' ? "Login" : "立即登录"}
          </a>
        </div>
      ),
      rpa: (
        <div className="login" style={{ marginTop: i18n.language === 'en' ? 20 : 42 }}>
          {i18n.language === 'en' ? "Already have an account? " : "已有账号，"}
          <a href={`https://miaohui.juzibot.com/auth/login?from=login&rediect=${host + router.pathname}`} target="_blank" rel="noreferrer">
          {i18n.language === 'en' ? "Login" : "立即登录"}
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
