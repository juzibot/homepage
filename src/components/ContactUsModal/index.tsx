import { Modal } from "antd";
import { CSSProperties, FC, Fragment, ReactElement, useState } from "react";
import { CloseOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import React from "react";
import ContactForm from "../ContactForm";
import cls from 'classnames';
import { useRouter } from "next/router";
import { RightIcon } from "../common/ContactModal";
import { defaultContactUsPaths } from "@src/config";

type Props = {
  open?: boolean,
  onCancel?: () => void,
  onOk?: () => void,
}

const ContactUsModal: FC<Props> = props => {
  const router = useRouter();
  const handleCancel = () => {
    props.onCancel?.();
  }

  let leftTips: { title: string, items: string[] }[]  = [];
  let qrCode = 'https://cdn-official-website.juzibot.com/images/contact_us_mobile.png';
  let leftBg: CSSProperties = {};
  let appeal = <span>截图后微信扫一扫</span>;
  let footer = (
    <>
      <p className="text-[#666666] mb-0">与陪跑数百家头部企业的</p>
      <p className="text-[#666666] mb-0">顾问聊聊</p>
    </>
  );

  if (defaultContactUsPaths.find(d => d === router.pathname)) {
    qrCode = '/_images/contact-us-qrcode/homepage.png';
    leftTips = [
      {
        title: '实战陪跑',
        items: [
          '1 对 1 全程辅助注册',
          '实战专家全程帮辅解决问题',
        ],
      },
      {
        title: '运营干货',
        items: [
          '80+ 头部企业真实运营案例针对性解析',
          '赠送 600+ 私域、AI 干货合集',
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
    ];
    appeal = (
      <span>
        <span className='text-[16px]'>对话式 AI，轻松盘活私域</span>
        <br />
        <span className='text-[12px]'>句子互动和你一起抓住变现商机</span>
      </span>
    );
    footer = <span>截图后微信扫一扫，与顾问聊一聊</span>;
    leftBg = { background: 'linear-gradient(169deg, #F6F7FD 4.15%, #EAF2FF 94.03%)' };
  } else if (router.pathname === '/features/ai') {
    qrCode = '/_images/contact-us-qrcode/ai.png';
    leftTips = [
      {
        title: '实战陪跑',
        items: [
          'AI 工程师 1 对 1 辅助搭建调优知识库',
          'AI 实战专家全程咨询解决问题',
        ],
      },
      {
        title: '运营干货',
        items: [
          '80+ 头部企业真实运营案例针对性解析',
          '赠送 600 +业务 SOP 合集',
        ],
      },
      {
        title: '社群交流',
        items: [
          '与5000+ 一线业务操盘手实时交流',
          '300+ 份实操干货弹药，200+ 行业案例供给',
          '最新 AI 行业情报实时更新解读',
        ],
      },
    ];
    leftBg = { background: 'linear-gradient(174deg, #FFFBF1 2.78%, #FFF4DF 95.55%)' };
    appeal = (
      <span>
        <span className="text-[18px]">立刻搭建</span>
        <br />
        <span className=''>大模型驱动的数字员工</span>
      </span>
    );
    footer = <span>截图后微信扫一扫，与顾问聊一聊</span>;
  } else if (router.pathname === '/features/rpa') {
    leftTips = [
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
    ];
    leftBg = { background: 'linear-gradient(164deg, rgba(102, 71, 255, 0.09) 0%, rgba(5, 85, 255, 0.09) 100%), #FFF' };
    appeal = (
      <span>
        <span className='text-[18px]'>10 倍</span>
        <br />
        <span>提高你的私域运营效率</span>
      </span>
    );
    footer = <span>截图后微信扫一扫，与顾问聊一聊</span>;
  }

  return (
    <Modal
      open={props.open}
      destroyOnClose
      title={null}
      footer={null}
      closable={false}
      className={styles.box}
      width={'100vw'}
    >
      <div className={styles.content} style={{ ...leftBg }}>
        <h2 className="px-6 mt-10 text-center text-2xl">不止工具，更多全方位支持</h2>
        <p className="px-6 text-center">
          <span className="text-[#555555]">下方扫码或提交信息添加咨询顾问，</span>
          <span className="text-[#F5790D]"> 即刻了解 {`>>>`}</span>
        </p>

        <div className="px-8">
          {
            leftTips.map((d, i) => (
              <Fragment key={d.title}>
                <div className="text-[#F5790D] font-semibold text-base mt-3">
                  <span className="mr-1 text-[24px]">{`0${i + 1}`}</span>
                  {d.title}
                </div>
                {
                  d.items?.map(e => (
                    <div key={e} className="text-[#555]">
                      <RightIcon />
                      <span className="ml-1">{e}</span>
                    </div>
                  ))
                }
              </Fragment>
            ))
          }
        </div>

        <div className="px-4 mx-4 py-5 bg-white rounded-lg flex mt-5 mb-7">
        <img src={qrCode} height={124} width={124} alt="" className="flex-shrink-0 mr-[10px]" onClick={() => open('https://work.weixin.qq.com/kfid/kfcbfceaec6e8e30afe')} />
          <div className="flex flex-col justify-center text-[15px]">
            <p className="text-[#FF5E1E] text-[15px] font-medium mb-2">{appeal}</p>
            {footer}
          </div>
        </div>
        
        <ContactForm
          className="bg-white pb-3"
          classNameForInput="!bg-[#FAFAFA] !border-[#EEEEEE]"
          classNameForDesc="text-[16px] !mb-6"
          classNameForSubmit={cls('!rounded-full !border-0 !bg-[#0555FF]')}
          onOk={props.onOk}
        />
        <p className="bg-white text-[#0555FF] text-center text-base pt-0 pb-7 mb-0">已有账号，建议在网页版登录</p>
        <CloseOutlined className="absolute top-3 right-3 !text-[#AAB9CA] p-1 cursor-pointer" onClick={handleCancel} />
      </div>
    </Modal>
  );
}

const ContactUsModalWithButton: FC<{ children: ReactElement }> = ({
  children
}) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(true);
  return (
    <>
      {React.cloneElement(children, { onClick: handleClick })}
      <ContactUsModal
        open={visible}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      />
    </>
  );
};

export { ContactUsModalWithButton };
export default ContactUsModal;
