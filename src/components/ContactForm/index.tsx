import cx from "@src/utils/cx";
import { Button, Form, Input, Modal } from "antd";
import { FC, useState } from "react";
import styles from './index.module.scss';
import axios from "axios";
import React from "react";
import { phoneErrMsg, phoneRegex } from "@src/utils/validatePhoneNum";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation(['common']);

  return (
    <div className={cx('pt-8 px-6 pb-7 bg-white', props.className)}>
      { !props.hideTitle && <h4 className={cx('text-center text-lg text-[#333333]', props.classNameForTitle)}>{t('contact-submit-1')}</h4> }
      { !props.hideDesc && <p className={cx('text-center mb-8 text-[#666666]', props.classNameForDesc)}>{t('contact-submit-2')}</p> }
      <Form
        onFinish={values => {
          setSubmitting(true);
          axios
            .post('/api/contact', values)
            .then(() => {
              Modal.success({
                centered: true,
                content: t('contact-submitted-1'),
                okText: t('contact-submitted-2'),
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
          rules={[{ required: true, message: t('enter-name')}]}
        >
          <Input size="large" placeholder={t('name')} className={inputClassName} maxLength={32} />
        </Form.Item>
        <Form.Item
          label={null}
          name="phone"
          rules={[{ required: true, message: t('enter-phone')}, { pattern: phoneRegex, message: phoneErrMsg }]}
        >
          <Input size="large" placeholder={t('phone')}  className={inputClassName} />
        </Form.Item>
        <Form.Item
          label={null}
          name="company"
          rules={[{ required: true, message: t('enter-company')}]}
        >
          <Input size="large" placeholder={t('company')} className={inputClassName} maxLength={32} />
        </Form.Item>
        <Form.Item
          label={null}
          name="remark"
          rules={[{ required: false }]}
        >
          <Input size="large" placeholder={t('notes')} className={inputClassName} maxLength={200} />
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
            {t('submit')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ContactForm;
