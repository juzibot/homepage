import cx from "@src/utils/cx";
import { Button, Form, Input, Modal } from "antd";
import { FC, useState } from "react";
import styles from './index.module.scss';
import axios from "axios";
import React from "react";
import { phoneErrMsg, phoneRegex } from "@src/utils/validatePhoneNum";

type Props = {
  className?: string,
  classNameForTitle?: string,
  classNameForDesc?: string,
  classNameForInput?: string,
  classNameForSubmit?: string,
  hideTitle?: boolean,
  hideDesc?: boolean,
  onCancel?: () => void,
  onOk?: () => void,
}

const ContactForm: FC<Props> = props => {
  const [submitting, setSubmitting] = useState(false);
  const inputClassName = cx(styles.input, props.classNameForInput);

  return (
    <div className={cx('pt-8 px-6 pb-7 bg-white', props.className)}>
      { !props.hideTitle && <h4 className={cx('text-center text-lg text-[#333333]', props.classNameForTitle)}>提交信息添加咨询顾问</h4> }
      { !props.hideDesc && <p className={cx('text-center mb-8 text-[#666666]', props.classNameForDesc)}>咨询顾问会尽快与您取得联系</p> }
      <Form
        onFinish={values => {
          setSubmitting(true);
          axios
            .post('/api/contact', values)
            .then(() => {
              Modal.success({
                centered: true,
                content: '提交成功，我们将在 24 小时内联系您！',
                okText: '继续浏览',
                okButtonProps: { className: '!bg-[#0555FF] !border-[#0555FF]' },
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
          <Input size="large" placeholder="姓名" className={inputClassName} maxLength={32} />
        </Form.Item>
        <Form.Item
          label={null}
          name="phone"
          rules={[{ required: true, message: '请填写电话!' }, { pattern: phoneRegex, message: phoneErrMsg }]}
        >
          <Input size="large" placeholder="电话" className={inputClassName} />
        </Form.Item>
        <Form.Item
          label={null}
          name="company"
          rules={[{ required: true, message: '请填写公司!' }]}
        >
          <Input size="large" placeholder="公司" className={inputClassName} maxLength={32} />
        </Form.Item>
        <Form.Item
          label={null}
          name="remark"
          rules={[{ required: false }]}
        >
          <Input size="large" placeholder="备注" className={inputClassName} maxLength={200} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            className={cx('!rounded-3xl !bg-[#0555FF] font-medium !h-12', styles.submit, props.classNameForSubmit)}
            loading={submitting}
          >
            立即提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ContactForm;
