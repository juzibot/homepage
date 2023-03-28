/* eslint-disable jsx-a11y/alt-text */
import { Modal } from 'antd';
import React, { FC } from 'react';
import styles from './index.module.scss';

interface Props {
  open?: boolean
  onCancel?: () => void
}

const ContactUsSimpleModal: FC<Props> = ({ open, onCancel }) => {
  return (
    <Modal
      title={null}
      footer={null}
      closable
      width={512}
      open={open}
      className={styles.box}
      onCancel={() => onCancel?.()}
    >
      <div className={`h-full flex flex-col justify-center items-center ${styles.content}`}>
        <img className="w-[198px] h-[198px]" src="https://cdn-official-website.juzibot.com/images/contact_us_mobile.png" />
        <div className="mt-4 text-[#333] font-semibold">扫码联系销售顾问获取更多信息</div>
        <div className="mt-3 text-[#364256]">立即扫码联系我吧！</div>
      </div>
    </Modal>
  );
};

export default ContactUsSimpleModal;
