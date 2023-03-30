/* eslint-disable */
import PhotoCarousel from '@src/components/PhotoCarousel';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

export const indexLogos = [3, 45, 5, 6, 46, 19, 22, 36, 38]
  .map(v => `https://cdn-official-website.juzibot.com/images/index-logos/${v}.png`);

const LogosWall: NextPage = () => {
  const { t } = useTranslation(['homepage']);
  return (
    <>
      <h1 className="title">10倍提高政企、金融行业的服务效率</h1> 
      <PhotoCarousel photos={indexLogos} />
    </>
  );
};

export default LogosWall;
