/* eslint-disable */
import PhotoCarousel from '@src/components/PhotoCarousel';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

export const indexLogos = [3, 45, 5, 6, 46, 19, 22, 36, 38]
  .map(v => `https://cdn-official-website.juzibot.com/images/index-logos/${v}.png`);

export const indexLogosEn = [7, 8, 9, 10, 25, 26, 27, 47, 48, 49, 50, 51, 52]
  .map(v => `/_images/index-logos/${v}.png`);

const LogosWall: NextPage = () => {
  const { i18n } = useTranslation(['homepage']);
  const isZh = i18n.language === 'zh';
  return (
    <>
      {isZh ? (
        <PhotoCarousel photos={indexLogos} />
      ) : 
        <PhotoCarousel photos={indexLogosEn} />
      }
    </>
  );
};

export default LogosWall;
