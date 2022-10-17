import cx from "@src/utils/cx";
import { Button, Form, Input, Modal } from "antd";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { CloseOutlined } from '@ant-design/icons';
import { getQrcode, RightIcon } from "../common/ContactModal";
import styles from './index.module.scss';
import axios from "axios";

type Props = {
  visible?: boolean,
  onCancel?: () => void,
  onOk?: () => void,
}

export const phoneRegex = /^1\d{10}$/;
export const phoneErrMsg = '手机号格式错误';

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
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (props.visible === false) {
      setSubmitting(false);
    }
  }, [props.visible]);

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
          <span className="text-[#555555]">右侧扫码或提交信息添加咨询顾问，</span>
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
          <img src={getQrcode(router.pathname)} height={124} width={124} alt="" className="flex-shrink-0 mr-[10px]" />
          <div>
            <p className="text-[#FF5E1E] text-2xl font-semibold mb-2">10倍</p>
            <p className="text-[#FF5E1E] text-base  font-medium mb-2">提高你的私域运营效率</p>
            <p className="text-[#666666]">微信扫一扫，与陪跑数百家头部企业的顾问聊聊</p>
          </div>
        </div>


        <div className="pt-8 px-6 pb-7 bg-white">
          <h4 className="text-center text-lg">提交信息添加咨询顾问</h4>
          <p className="text-center">咨询顾问会尽快与您取得联系</p>
          <Form
            className=""
            onFinish={values => {
              setSubmitting(true);
              axios
                .post('/api/contact', values)
                .then(() => {
                  Modal.success({
                    centered: true,
                    content: '提交成功，我们将在 24 小时内联系您！',
                    okText: '继续浏览',
                  });
                  props.onOk?.();
                })
                .finally(() => setSubmitting(false));
            }}
          >
            <Form.Item
              label={null}
              name="name"
              rules={[{ required: true, message: '请填写姓名!' }]}
            >
              <Input size="large" placeholder="姓名" className={styles.input} maxLength={32} />
            </Form.Item>
            <Form.Item
              label={null}
              name="phone"
              rules={[{ required: true, message: '请填写电话!' }, { pattern: phoneRegex, message: phoneErrMsg }]}
            >
              <Input size="large" placeholder="电话" className={styles.input} />
            </Form.Item>
            <Form.Item
              label={null}
              name="company"
              rules={[{ required: true, message: '请填写公司!' }]}
            >
              <Input size="large" placeholder="公司" className={styles.input} maxLength={32} />
            </Form.Item>
            <Form.Item
              label={null}
              name="remark"
              rules={[{ required: false }]}
            >
              <Input size="large" placeholder="备注" className={styles.input} maxLength={200} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                className={cx('!rounded-3xl !bg-[#0555FF] font-medium !h-12', styles.submit)}
                loading={submitting}
              >
                立即提交
              </Button>
            </Form.Item>
          </Form>
          <p className="text-[#0555FF] text-center text-base mt-1 mb-0">已有账号，建议在网页版登录</p>
        </div>
        <CloseOutlined className="absolute top-3 right-3 !text-[#AAB9CA] p-1 cursor-pointer" onClick={handleCancel} />
      </div>
    </Modal>
  );
}

export default ContactUsModal;