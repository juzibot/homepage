import { ContactUsModalWithButton } from '@src/components/ContactUsModal';
import { Button } from 'antd';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const AppealBarMobile: NextPage = () => {
  const { t, i18n } = useTranslation(['homepage']);
  return (
    <div className="bg-slate-400 py-12 bg-[url(https://cdn-official-website.juzibot.com/images/appeal-background.svg)]">
      <h2 className="text-center text-white text-2xl max-w-[70%] mx-auto">{t('appeal-title')}</h2>
      <div className="flex justify-center">
        {
          i18n.language === 'zh' && (
            <ContactUsModalWithButton>
              <Button
                size="large"
                type="primary"
                className="!bg-transparent !rounded-3xl !px-6 mt-7 font-medium !border-white"
              >
                {t('appeal-start-free')}
              </Button>
            </ContactUsModalWithButton>
          )
        }
      </div>
    </div>
  )
};

export default AppealBarMobile;
