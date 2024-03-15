import { Modal, ModalFuncProps } from "antd";
import styles from './index.module.scss';
import { twMerge } from 'tailwind-merge';

export const PureModalInfoNoContent = (props: ModalFuncProps) => {
  return Modal.info({
    ...props,
    centered: props.centered ?? true,
    closable: props.closable ?? true,
    className: twMerge(styles.PureModalInfoNoContent, props.className),
  })
}