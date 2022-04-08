import { IFeatureItemProps } from '@src/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FeatureItem: NextPage<IFeatureItemProps> = ({
  iconUrl,
  title,
  subtitle,
  redirectUrl,
  hoverIconUrl,
  mask,
  visibility,
}) => {
  const [isHover, setIsHover] = useState(false);
  const { t } = useTranslation('homepage');
  return visibility ? (
    <Link href={redirectUrl}>
      <a className={`feature-item ${isHover ? 'hover' : ''}`}>
        <div
          className={`item ${isHover ? 'hover' : ''}`}
          onMouseMove={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={{ background: isHover ? `url(${mask})` : '' }}
        >
          <div style={{ flexShrink: 0 }}>
            <Image
              src={isHover ? hoverIconUrl : iconUrl}
              width="40"
              height="40"
              alt="icon"
              draggable="false"
            />
          </div>
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <div className="redirect-url">{t('read-more')} →</div>
        </div>
      </a>
    </Link>
  ) : null;
};

const FeatureBar: NextPage<{ hideTitle?: string }> = ({ hideTitle }) => {
  const { t, i18n } = useTranslation('features');
  const isEn = i18n.language === 'en';
  return (
    <div
      className="content"
      style={{ gridTemplateColumns: `repeat(${hideTitle ? 4 : 5}, 1fr)` }}
    >
      <FeatureItem
        iconUrl="https://cdn-official-website.juzibot.com/images/icons/features/01.svg"
        hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/features/01-hover.svg"
        title={t('customer-acquisition.title')}
        mask="https://cdn-official-website.juzibot.com/images/icons/features/01-mask.svg"
        subtitle={t('customer-acquisition.subtitle')}
        redirectUrl="/features/customer-acquisition"
        visibility={isEn || !hideTitle || hideTitle !== '规模获客'}
      />
      <FeatureItem
        iconUrl="https://cdn-official-website.juzibot.com/images/icons/features/02.svg"
        hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/features/02-hover.svg"
        title={t('sop.title')}
        mask="https://cdn-official-website.juzibot.com/images/icons/features/02-mask.svg"
        subtitle={t('sop.subtitle')}
        redirectUrl="/features/sop"
        visibility={isEn || !hideTitle || hideTitle !== '精准触达'}
      />
      <FeatureItem
        iconUrl="https://cdn-official-website.juzibot.com/images/icons/features/05.svg"
        hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/features/05-hover.svg"
        title={t('contact-platform.title')}
        mask="https://cdn-official-website.juzibot.com/images/icons/features/05-mask.svg"
        subtitle={t('contact-platform.subtitle')}
        redirectUrl="/features/contact-platform"
        visibility={isEn || !hideTitle || hideTitle !== '急速应答'}
      />
      {!isEn ? (
        <FeatureItem
          iconUrl="https://cdn-official-website.juzibot.com/images/icons/features/03.svg"
          hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/features/03-hover.svg"
          title="高效管理"
          mask="https://cdn-official-website.juzibot.com/images/icons/features/03-mask.svg"
          subtitle="把不同区域、不同业务阶段乃至不同业务类型划分在相对独立的管理单元，分开统计绩效、计算产出。"
          redirectUrl="/features/management"
          visibility={!hideTitle || hideTitle !== '高效管理'}
        />
      ) : null}
      <FeatureItem
        iconUrl="https://cdn-official-website.juzibot.com/images/icons/features/04.svg"
        hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/features/04-hover.svg"
        title={t('data-center.title')}
        mask="https://cdn-official-website.juzibot.com/images/icons/features/04-mask.svg"
        subtitle={t('data-center.subtitle')}
        redirectUrl="/features/data-center"
        visibility={isEn || !hideTitle || hideTitle !== '数据驱动'}
      />
    </div>
  );
};

export default FeatureBar;
