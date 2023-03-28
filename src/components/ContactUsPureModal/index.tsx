import { Modal } from "antd";
import { FC, ReactElement, useState } from "react";
import { CloseOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import React from "react";
import ContactForm from "../ContactForm";
import { host } from '@src/config';
import { useRouter } from "next/router";

type Props = {
  visible?: boolean,
  onCancel?: () => void,
  onOk?: () => void,
}

const ContactUsPureModal: FC<Props> = props => {
  const router = useRouter();
  const [isScanQrcode, toggleScanQrcode] = useState(true);

  const handleCancel = () => {
    props.onCancel?.();
  }
  return (
    <Modal
      visible={props.visible}
      destroyOnClose
      title={null}
      footer={null}
      closable={false}
      className={styles.box}
    >
      <div className={styles.content}>
        <h2 className="px-6 mt-10 text-center text-2xl">不止工具，更多全方位支持</h2>
        <p className="px-6 text-center">
          <span className="text-[#555555]">下方扫码或提交信息添加咨询顾问，</span>
          <span className="text-[#F5790D]"> 即刻领取 {`>>>`}</span>
        </p>

        {
          isScanQrcode ? (
            <div className="px-4 mx-4 py-5 flex flex-col justify-center items-center mt-5 mb-7">
              <img
                alt=""
                src='https://cdn-official-website.juzibot.com/images/contact_us_mobile.png'
                className="w-[200px] h-[200px] mr-[10px]"
              />
              <p className="text-[#666666] mt-1">微信扫一扫，与陪跑数百家头部企业的顾问聊聊</p>
            </div>
          ) : (
          <ContactForm
            hideTitle
            hideDesc
            className="mx-8 bg-transparent pb-3"
            classNameForInput="!bg-[#FAFAFA] !border-[#EEEEEE]"
            classNameForDesc="text-[16px]"
            classNameForSubmit="!rounded-md !border-0"
            onOk={props.onOk}
          /> 
          )
        }

        <div className="flex justify-between mt-10 mx-8 mb-8">
          <div>
            已有账号，
            <a
              href={`https://miaohui.juzibot.com/auth/login?from=login&rediect=${host + router.pathname}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#F5790D] hover:text-[#F5790D]"
            >
              立即登录
            </a>
          </div>
          <div className="text-[#858585] inline-flex items-center cursor-pointer" onClick={() => toggleScanQrcode(!isScanQrcode)}>
            <svg
              className="icon mr-1"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9463"
              width="16"
              height="16"
            >
              <path
                d="M956.994933 307.22722c4.950755-11.95017 2.214435-25.705452-6.931876-34.851763L799.528576 121.840976l-45.227064 45.227064 95.941096 95.941096-722.30068 0 0 63.960731 799.507086 0C940.384627 326.969866 952.046225 319.179436 956.994933 307.22722zM959.430402 646.774543L159.923316 646.774543c-12.935614 0-24.596188 7.791453-29.54592 19.741623-4.950755 11.95017-2.214435 25.705452 6.931876 34.851763l150.534482 150.534482 45.227064-45.226041-95.941096-95.941096 722.30068 0L959.430402 646.774543z"
                p-id="9464"
                fill="currentColor"
              ></path>
            </svg>
            {isScanQrcode ? '不方便扫码？去留联系方式' : '立即聊聊？微信扫码'}
          </div>
        </div>
        <CloseOutlined className="absolute top-3 right-3 !text-[#AAB9CA] p-1 cursor-pointer" onClick={handleCancel} />
      </div>
    </Modal>
  );
}

const ContactUsPureModalWithButton: FC<{ children: ReactElement }> = ({
  children
}) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(true);
  return (
    <>
      {React.cloneElement(children, { onClick: handleClick })}
      <ContactUsPureModal
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      />
    </>
  );
};

export { ContactUsPureModalWithButton };
export default ContactUsPureModal;