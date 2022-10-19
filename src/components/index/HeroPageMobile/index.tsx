import { IFeatureCardProps } from '@src/interfaces';
import Aos from 'aos';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, message, Modal } from 'antd';
import axios from 'axios';
import styles from './index.module.scss';
import cx from '@src/utils/cx';
import { phoneErrMsg, phoneRegex } from '@src/utils/validatePhoneNum';

const FeatureCard: NextPage<IFeatureCardProps> = (props) => {
  return (
    <div className="border border-[#F2F6FF] border-solid rounded-2xl bg-white p-6 mt-6 shadow-sm">
      <div className="flex items-center">
        <img
          alt="icon"
          className="flex-shrink-0 h-[54px] -ml-2"
          src={props.iconUrl}
        />
        <h4 className="flex-1 text-jz-text-1 text-[17px] mb-3">{props.title}</h4>
      </div>
      <p className="text-[15px]">{props.subTitle}</p>
    </div>
  );
}

const logos = Array(44)
  .fill(null)
  .map((_, index) => {
    return `https://cdn-official-website.juzibot.com/images/index-logos/${index + 1
      }.png`;
  });

const HeroPage: NextPage = () => {
  const { t } = useTranslation(['homepage']);
  const [inputPhone, setInputPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);

  const handleSubmit = () => {
    if (!phoneRegex.test(inputPhone)) {
      return message.info(phoneErrMsg);
    }
    setSubmitting(true);
    axios
      .post('/api/contact', { name: '', phone: inputPhone, company: '', remark: '' })
      .then(() => {
        Modal.success({
          centered: true,
          content: '提交成功，我们将在 24 小时内联系您！',
          okText: '继续浏览',
          okButtonProps: { className: '!bg-[#0555FF] !border-[#0555FF]' },
        });
      })
      .finally(() => setSubmitting(false));
  }

  return (
    <>
      <div className="">
        <h1 className="px-4 text-4xl text-center font-bold text-jz-text-1 mb-4">{t('slogan')}</h1>
        <p className="px-4 text-[15px]">{t('description')}</p>
        <div className="mx-4 px-4 bg-[#F9F9F9] rounded-3xl h-12 pl-4 pr-1 flex justify-between items-center max-w-[400px] border border-solid border-[#EEEEEE]">
          <Input
            className="!bg-[#F9F9F9] !border-none hover:!border-0 focus:!border-0 focus:!shadow-none !placeholder-[#AAB9CA]"
            placeholder="输入手机号立刻开始"
            maxLength={32}
            value={inputPhone}
            onChange={e => setInputPhone(e.target.value.trim()) }
          />
          <Button
            size="large"
            type="primary"
            className="ml-4 px-5 !rounded-3xl !bg-[#0555FF] font-semibold !border-[#0555FF]"
            loading={submitting}
            onClick={handleSubmit}
          >免费使用</Button>
        </div>
        <div className="px-4 flex justify-center">
          <img className="mt-6 max-w-full" src="/static/index-picture-mobile.png" alt="" />
        </div>
      </div>

      <div className="">
        <h2 className="px-4 text-xl text-center text-jz-text-1 mt-6 mb-4">{t('logos-wall-title')}</h2>

        <div className="px-4 overflow-x-hidden bg-white">
          <div className="relative border border-white border-solid overflow-hidden">
            <div className="absolute -left-1 h-full w-[30px] bg-gradient-to-r from-[#ffffff] to-transparent z-10"></div>
            <div className="absolute -right-1 h-full w-[30px] bg-gradient-to-l from-[#ffffff] to-transparent z-10"></div>
            <div className={cx(styles.logos)}>
              {logos.map((item) => {
                return <img className="mx-[10px] h-[72px]" key={item} src={item} alt="customer-logo" draggable="false" />;
              })}
            </div>
          </div>
        </div>

        <div className="px-4 pb-[72px] bg-[url(/static/icons/index-hero-feature-bg.svg)] bg-no-repeat bg-left-bottom bg-contain">
          <FeatureCard
            iconUrl="/static/icons/index-hero-feature-1.png"
            title={t('card-1-title')}
            subTitle={t('card-1-subtitle')}
            iconWidth="93"
            iconHeight="77"
          />
          <FeatureCard
            iconUrl="/static/icons/index-hero-feature-2.png"
            title={t('card-2-title')}
            subTitle={t('card-2-subtitle')}
            iconWidth="92"
            iconHeight="85"
          />
          <FeatureCard
            iconUrl="/static/icons/index-hero-feature-3.png"
            title={t('card-3-title')}
            subTitle={t('card-3-subtitle')}
            iconWidth="92"
            iconHeight="73"
          />
        </div>
      </div>
    </>
  )
};

export default HeroPage;
