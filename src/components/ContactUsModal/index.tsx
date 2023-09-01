import { Modal } from "antd";
import { FC, ReactElement, useState } from "react";
import { CloseOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import React from "react";
import ContactForm from "../ContactForm";
import cls from 'classnames';
import { useRouter } from "next/router";

type Props = {
  visible?: boolean,
  onCancel?: () => void,
  onOk?: () => void,
}

const ContactUsModal: FC<Props> = props => {
  const router = useRouter();
  const handleCancel = () => {
    props.onCancel?.();
  }
  let qrCode = 'https://cdn-official-website.juzibot.com/images/contact_us_mobile.png';
  if (router.pathname === '/') {
    qrCode = '_images/contact-us-qrcode/homepage.png';
  } else if (router.pathname === '/features/ai') {
    qrCode = '/_images/contact-us-qrcode/ai.png';
  } else if (router.pathname === '/features/rpa') {
    qrCode = '/_images/contact-us-qrcode/rpa.png';
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

        <div className="px-4 mx-4 py-5 bg-white rounded-lg flex mt-5 mb-7">
        <img src={qrCode} height={124} width={124} alt="" className="flex-shrink-0 mr-[10px]" onClick={() => open('https://work.weixin.qq.com/kfid/kfcbfceaec6e8e30afe')} />
          <div className="flex flex-col justify-center text-[15px]">
            <p className="text-[#FF5E1E] text-[15px] font-medium mb-2">截图后微信扫一扫</p>
            <p className="text-[#666666] mb-0">与陪跑数百家头部企业的</p>
            <p className="text-[#666666] mb-0">顾问聊聊</p>
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
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      />
    </>
  );
};

export { ContactUsModalWithButton };
export default ContactUsModal;
