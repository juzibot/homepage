import { useTranslation } from 'react-i18next';

const FooterBarButton = ({ url }: { url: string; }) => {
  const { t } = useTranslation(['homepage']);
  const handleClick = () => {
    window.open(url);
  };
  return (
    <div className="content">
      <div className="title">RPA + AI，打造下一代基于 IM 跨平台，对话式营销云</div>
      <button className="white-button start-button !shadow-none" onClick={handleClick}>
        {t('appeal-start-free')}
      </button>
    </div>
  );
};

export default FooterBarButton;
