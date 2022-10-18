import { NextPage } from 'next';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Parallax, Controller, Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import { IFeatureSwiperItemProps } from '@src/interfaces';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import { debounce } from 'lodash';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

console.log('styles', styles);

const FeatureSwiperItem: NextPage<IFeatureSwiperItemProps> = ({
  title,
  subTitle,
  brief,
  iconUrl,
  index,
  redirectUrl,
}) => {
  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);
  const { t } = useTranslation('homepage');
  return (
    <div className="feature-swiper-item" data-aos="fade-in">
      <div className="content">
        <div data-swiper-parallax="-300">
          <div className="flex justify-center -mb-8">
            <Image
              src={`https://cdn-official-website.juzibot.com/images/icons/0${index}.svg`}
              width="67"
              height="107"
              draggable="false"
              alt="num"
            />
          </div>
          <h2 className="text-jz-text-1 text-2xl text-center mb-4">{title}</h2>
        </div>

        <h4 className="text-jz-text-1 text-center mb-4" data-swiper-parallax="-300">{subTitle}</h4>
        <p className="text-[#869BB9] text-center text-sm" data-swiper-parallax="-200">
          {brief}
        </p>

        <div className="flex justify-center mt-8 hidden">
          <Link href={redirectUrl}>
            <a className="text-[#54657E]" data-swiper-parallax="-300">
              {t('read-more')}→
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Image
          src={iconUrl}
          draggable="false"
          width="608"
          height="544"
          alt="picture"
        />
      </div>
    </div>
  );
};

const FeatureSwiperMobile: NextPage = () => {
  const { t, i18n } = useTranslation(['homepage']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | undefined>(undefined);
  const [autoPlayInterval, setAutoPlayInterval] = useState<NodeJS.Timer>();
  const [documentVisible, setDocumentVisible] = useState(true);
  const [isChrome, toggleIsChrome] = useState(true);
  let items: IFeatureSwiperItemProps[] = Array(5)
    .fill(null)
    .map((_, index) => ({
      title: t(`feature-${index + 1}-title`),
      subTitle: t(`feature-${index + 1}-subtitle`),
      brief: t(`feature-${index + 1}-content`),
      iconUrl: `https://cdn-official-website.juzibot.com/images/feat-0${index + 1
        }.${index > 1 ? 'svg' : 'png'}`,
      redirectUrl: [
        '/features/customer-acquisition',
        '/features/sop',
        '/features/contact-platform',
        '/features/management',
        '/features/data-center',
      ][index],
    }));

  if (i18n.language === 'en') {
    items = items.filter((_, idx) => idx !== 3);
  }

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
    }, 6000);
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
    <div className="px-4 mt-6">
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
              <FeatureSwiperItem {...props} index={idx + 1} />
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
