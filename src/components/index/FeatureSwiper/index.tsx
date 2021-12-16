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

const FeatureSwiperItem: NextPage<IFeatureSwiperItemProps> = ({
  title,
  subTitle,
  brief,
  iconUrl,
  index,
}) => {
  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);
  return (
    <div className="feature-swiper-item" data-aos="fade-in">
      <div className="content">
        <div data-swiper-parallax="-300">
          <div className="num">
            <Image
              src={`/images/icons/0${index}.svg`}
              width="97"
              height="130"
              draggable="false"
              alt="num"
            />
          </div>
          <h1 className="title">{title}</h1>
        </div>

        <div className="subtitle" data-swiper-parallax="-300">
          {subTitle}
        </div>
        <div className="brief" data-swiper-parallax="-200">
          {brief}
        </div>
        <Link href="/">
          <a className="read-more" data-swiper-parallax="-300">
            了解更多 →
          </a>
        </Link>
      </div>
      <div className="image">
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

const FeatureSwiper: NextPage = () => {
  const { t } = useTranslation(['index']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | undefined>(undefined);
  const [autoPlayInterval, setAutoPlayInterval] = useState<NodeJS.Timer>();
  const items: IFeatureSwiperItemProps[] = Array(5)
    .fill(null)
    .map((_, index) => ({
      title: t(`feature-${index + 1}-title`),
      subTitle: t(`feature-${index + 1}-subtitle`),
      brief: t(`feature-${index + 1}-content`),
      iconUrl: `/images/feat-0${index + 1}.png`,
    }));

  function autoplay(s?: SwiperType) {
    s = s || swiper;
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
    }
    const _autoPlayInterval = setInterval(() => {
      if (!s) return;
      if (s.isEnd) {
        s.slideTo(0);
      } else {
        s.slideNext(300);
      }
    }, 6000);
    setAutoPlayInterval(_autoPlayInterval);
  }

  const debounceAutoPlay = debounce(() => autoplay(swiper));

  return (
    <>
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
        <div className="pagination">
          {items.map((_, idx) => (
            <div
              key={idx + 1}
              className={currentIndex === idx ? 'active' : 'normal'}
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
    </>
  );
};

export default FeatureSwiper;
