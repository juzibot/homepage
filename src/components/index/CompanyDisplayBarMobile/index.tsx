import { NextPage } from 'next';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Parallax, Controller, Swiper as SwiperType } from 'swiper';
import { ICompanyProps } from '@src/interfaces';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import { debounce } from 'lodash';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import cx from '@src/utils/cx';

console.log('styles', styles);

const SwiperItem: NextPage<ICompanyProps> = (props) => {
  const { t } = useTranslation(['homepage']);
  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);
  return (
    <div className={cx('feature-swiper-item bg-[#F9F9F9]')} data-aos="fade-in">
      <div className="flex flex-col items-center">
        <div className={cx('w-[320px] h-[184px]  pt-[20px] flex flex-col justify-center items-center bg-white text-[#0555FF] rounded-3xl', styles.cardShadow)}>
          <div className="flex items-end">
            <img src={props.iconUrl} className="mr-4" alt="" />
            <span className="text-4xl text-[44px] font-bold">{props.title}</span>
          </div>
          <p className="mt-5 text-center text-lg text-[18px] font-semibold">{props.subTitle}</p>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <img src={props.companyLogoUrl} alt="" />
          <div className="text-jz-text-1 text-2xl text-[21px] font-semibold mb-4">{props.companyName}</div>
          <p className="text-[#364256] text-center text-[16px] px-4 mb-0">{props.companyBrief}</p>
          <span className="text-[#869BB9] hidden">{t('company-read-more')}</span>
        </div>
      </div>
    </div>
  );
};

const FeatureSwiperMobile: NextPage = () => {
  const { t } = useTranslation(['homepage']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | undefined>(undefined);
  const [autoPlayInterval, setAutoPlayInterval] = useState<NodeJS.Timer>();
  const [documentVisible, setDocumentVisible] = useState(true);
  const [isChrome, toggleIsChrome] = useState(true);
  const items: ICompanyProps[] = [
    {
      iconUrl: 'https://cdn-official-website.juzibot.com/images/icons/contact.svg',
      // redirectUrl: '/cases/26',
    },
    {
      iconUrl:
        'https://cdn-official-website.juzibot.com/images/icons/growing.svg',
      redirectUrl: '/cases/23',
    },
    {
      iconUrl:
        'https://cdn-official-website.juzibot.com/images/icons/rocket.svg',
      redirectUrl: '/cases/06',
    },
    {
      iconUrl: 'https://cdn-official-website.juzibot.com/images/icons/safe.svg',
      redirectUrl: '/cases/32',
    },
  ].map((item, index) => ({
    ...item,
    title: t(`company-${index + 1}-title`),
    subTitle: t(`company-${index + 1}-subtitle`),
    companyLogoUrl: `https://cdn-official-website.juzibot.com/images/icons/logo-${index}.svg`,
    companyName: t(`company-${index + 1}-name`),
    companyBrief: t(`company-${index + 1}-brief`),
    comment: t(`company-${index + 1}-comment`),
  }));

  function autoplay(s?: SwiperType) {
    s = s || swiper;
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
    }
    const _autoPlayInterval = setInterval(() => {
      if (!s || !documentVisible) return;
      if (s.isEnd) {
        s.slideTo(0);
      } else {
        s.slideNext(300);
      }
    }, 6000000);
    setAutoPlayInterval(_autoPlayInterval);
  }

  const debounceAutoPlay = debounce(() => autoplay(swiper));

  useEffect(() => {
    if (process.browser) {
      document.addEventListener('visibilitychange', () => {
        const visible = document.visibilityState === 'visible';
        setDocumentVisible(visible);
      });
      toggleIsChrome(/Chrome|Safari/.test(navigator.userAgent));
    }
  }, []);

  return (
    <div className="px-4 py-[72px] bg-[#F9F9F9]">
      <h1 className="text-center text-[30px] mb-12 px-8 font-bold">{t('company-display-title')}</h1>
      <div className="feature-swiper">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Parallax, Controller]}
          style={{ width: '100%' }}
          parallax={{ enabled: true }}
          onSwiper={(swiper) => {
            setSwiper(swiper);
            autoplay(swiper);
          }}
          onActiveIndexChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
            debounceAutoPlay();
          }}
          controller={{ control: swiper }}
        >
          {items.map((props, idx) => (
            <SwiperSlide key={idx + 1}>
              <SwiperItem {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.pagination}>
          {items.map((_, idx) => (
            <div
              key={idx + 1}
              className={currentIndex === idx ? styles.active : ''}
              onClick={() => {
                swiper?.slideTo(idx);
              }}
            >
              <div
                style={{
                  visibility: currentIndex === idx ? 'visible' : 'hidden',
                  width: '100%',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSwiperMobile;
