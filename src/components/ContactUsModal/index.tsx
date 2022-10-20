import { Modal } from "antd";
import { FC, ReactElement, useState } from "react";
import { CloseOutlined } from '@ant-design/icons';
import { RightIcon } from "../common/ContactModal";
import styles from './index.module.scss';
import React from "react";
import ContactForm from "../ContactForm";

type Props = {
  visible?: boolean,
  onCancel?: () => void,
  onOk?: () => void,
}

const list = [
  {
    title: '实战陪跑',
    desc: [
      '1 对 1 全程辅助注册',
      '7 天免费试用，PoC 实战陪跑',
      '私域实战专家 1 对 1 咨询解决运营问题',
    ],
  },
  {
    title: '运营干货',
    desc: [
      '赠送 600+ 私域 SOP 合集',
      '80+ 头部企业真实运营案例针对性解析',
    ],
  },
  {
    title: '社群交流',
    desc: [
      '与 5000+ 一线操盘手实时交流',
      '300+ 分实操干货弹药，200+ 行业案例供给',
      '最新私域行业情报实时更新解读',
    ],
  },
];

const ContactUsModal: FC<Props> = props => {
  const handleCancel = () => {
    Modal.confirm({
      icon: null,
      centered: true,
      className: styles.confirmModal,
      title: <div className="text-center text-lg">确定离开？</div>,
      content: (
        <div className="text-[#FF5E1E] text-center text-base mt-6">
          <p className="mb-1"> 600+ 份私域实操 SOP </p>
          <p>添加顾问即可自动领取</p>
        </div>
      ),
      cancelText: '去填写',
      okText: '暂不需要',
      cancelButtonProps: { type: 'primary', className: styles.cancelButton, size: 'large' },
      okButtonProps: { type: 'default', className: styles.okButton, size: 'large' },
      onOk: () => props.onCancel?.(),
    })
  }
  return (
    <Modal
      visible={props.visible}
      destroyOnClose
      title={null}
      footer={null}
      closable={false}
      className={styles.box}
      width={'100vw'}
    >
      <div className={styles.content}>
        <h2 className="px-6 mt-10 text-center text-2xl">不止工具，更多全方位支持</h2>
        <p className="px-6 text-center">
          <span className="text-[#555555]">下方扫码或提交信息添加咨询顾问，</span>
          <span className="text-[#F5790D]"> 即刻领取 {`>>>`}</span>
        </p>
        {list.map(({ title, desc = [] }, i) => (
          <div key={title} className="px-6">
            <div className="text-[#F5790D] font-semibold mt-4">
              <span className="text-2xl mr-1">{`0${i + 1}`}</span>
              <span className="text-base">{title}</span>
            </div>
            <div>
              {desc.map(str => (
                <div key={str}>
                  <RightIcon />
                  <span className="ml-1">{str}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="px-4 mx-4 py-5 bg-white rounded-lg flex mt-5 mb-7">
        <img src='https://cdn-official-website.juzibot.com/images/contact_us_mobile.png' height={124} width={124} alt="" className="flex-shrink-0 mr-[10px]" onClick={() => open('https://work.weixin.qq.com/kfid/kfcbfceaec6e8e30afe')} />
          <div>
            <p className="text-[#FF5E1E] text-2xl font-semibold mb-2">10倍</p>
            <p className="text-[#FF5E1E] text-base  font-medium mb-2">提高你的私域运营效率</p>
            <p className="text-[#666666]">截图后微信扫一扫，与陪跑数百家头部企业的顾问聊聊</p>
          </div>
        </div>
        
        <ContactForm
          className="bg-white pb-3"
          classNameForInput="!bg-[#FAFAFA] !border-[#EEEEEE]"
          classNameForDesc="text-[16px]"
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
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      />
    </>
  );
};

export { ContactUsModalWithButton };
export default ContactUsModal;