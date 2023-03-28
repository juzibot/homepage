import { IFeatureCardProps } from '@src/interfaces';
import Aos from 'aos';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useShowModal } from '@src/utils/showModal';
import LogosWallNew from '../LogosWallNew';
import styles from './index.module.scss';

export const FeatureCard: NextPage<IFeatureCardProps> = ({
  title,
  subTitle,
  iconUrl,
  iconWidth,
  iconHeight,
  className,
}) => {
  return (
    <div className={`card ${className || ''}`}>
      <div className="icon">
        <Image
          alt="icon"
          src={iconUrl}
          draggable="false"
          width={iconWidth}
          height={iconHeight}
        ></Image>
      </div>
      <div className="title">{title}</div>
      <div className="subtitle">{subTitle}</div>
    </div>
  );
};

const HeroPage: NextPage = () => {
  const { t, i18n } = useTranslation(['homepage']);
  const { language } = i18n;
  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);
  const showModal = useShowModal();
  return (
    <>
      <div className="hero-page-new-bg">
        <div className="hero-page-new" data-aos="fade-in">
          <div className="bannar">
            <h1
              className="slogan max-w-[546px]"
              style={{ fontSize: language === 'en' ? 36 : 46 }}
            >
              以客户体验为核心目标，贯穿场景化服务体系
            </h1>
            <div className="description">句子互动打通主流的通信工具和社交平台，帮助社区和金融行业建立以服务群众、客户沟通为核心的服务体系，高效触达与深度连接数以千万计的人群，让沟通事半功倍。</div>
            <button className="white-button-pure start-button bg-white text-red !shadow-none" onClick={showModal}>
              {t('start-free')}
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1200px] m-auto">
        <div className="logos-wall">
          <div className="container">
            <LogosWallNew />
          </div>
        </div>
      </div>

      <div className="w-[1200px] m-auto">
        <div className="card-bannar">
          <FeatureCard
            className={styles.card}
            iconUrl="https://cdn-official-website.juzibot.com/images/icons/cloud.png"
            title="智能对话服务"
            subTitle="对话式机器人24小时在线自动应答、多平台的会话消息聚合管理，句子互动帮你打造更高效的服务云中台。"
            iconWidth="93"
            iconHeight="77"
          />
          <FeatureCard
            className={styles.card}
            iconUrl="https://cdn-official-website.juzibot.com/images/icons/solution.png"
            title="规模化服务解决方案提供商"
            subTitle="无需额外开发，即可上手规模化服务你的人群。10 倍提效，人均服务 20 万客户，并为你的人群提供千人千面的服务体验。"
            iconWidth="92"
            iconHeight="85"
          />
          <FeatureCard
            className={styles.card}
            iconUrl="/_images/icons/security.png"
            title="安全·可靠的数据保护"
            subTitle="句子互动支持私有化部署，部署过程简单、规范。全方面的保护你的企业数据。安全、放心的提升企业服务效率"
            iconWidth="92"
            iconHeight="73"
          />
        </div>
      </div>
    </>
  );
};

export default HeroPage;
