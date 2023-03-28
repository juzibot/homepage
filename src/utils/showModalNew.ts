import { useTranslation } from 'react-i18next';

export function useShowModalNew() {
  const { i18n } = useTranslation();
  if (typeof document === 'undefined') return () => {};
  return () => {
    if (i18n.language === 'zh') {
      document
        .getElementById('contact-modal-new')
        ?.setAttribute('style', 'display: flex');
    } else {
      window.open('https://miaohui.juzibot.com/auth/login', '_blank');
    }
  };
}
