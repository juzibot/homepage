import { Modal, ModalFuncProps } from "antd";
import styles from './index.module.scss';
import cls from 'classnames';

export const PureModalInfoNoContent = (props: ModalFuncProps) => {
  return Modal.info({
    ...props,
    centered: props.centered ?? true,
    closable: props.closable ?? true,
    className: cls(styles.PureModalInfoNoContent, props.className),
  })
}