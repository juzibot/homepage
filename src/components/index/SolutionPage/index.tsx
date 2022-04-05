import { ISolutionItemProp } from '@src/interfaces';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Aos from 'aos';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const SolutionItem: NextPage<ISolutionItemProp> = ({
  imagePosition,
  imageUrl,
  title,
  dividerUrl,
  brief,
  style,
}) => {
  useEffect(() => {
    if (process.browser) {
      Aos.init({
        offset: 120,
        duration: 800,
      });
    }
  }, []);
  return (
    <div
      className="solution-item"
      style={{
        flexDirection: imagePosition === 'left' ? 'row' : 'row-reverse',
      }}
      data-aos="fade-in"
    >
      <Image
        className="solution-image"
        src={imageUrl}
        alt={title}
        draggable="false"
        width="560"
        height="448"
      ></Image>
      <div className="solution-content" style={style}>
        <div
          className="title"
          style={{ backgroundImage: `url(${dividerUrl})` }}
        >
          {title}
        </div>
        <div className="brief">{brief}</div>
      </div>
    </div>
  );
};

const SolutionPage: NextPage = () => {
  const { t, i18n } = useTranslation(['homepage']);
  useEffect(() => {
    if (process.browser) {
      Aos.init({
        offset: 120,
        duration: 800,
      });
    }
  }, []);
  return (
    <>
      <h1 className="title" data-aos="fade-in">
        {t('solution-title')}
      </h1>

      <div className="solution-groups">
        <SolutionItem
          title={t('solution-1-title')}
          brief={t('solution-1-content')}
          imagePosition="left"
          imageUrl="https://cdn-official-website.juzibot.com/images/solution-01.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-01-divider.svg"
          style={{ transform: 'translateY(-30px)' }}
        />

        <SolutionItem
          title={t('solution-2-title')}
          brief={t('solution-2-content')}
          imagePosition="right"
          imageUrl="https://cdn-official-website.juzibot.com/images/solution-02.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-02-divider.svg"
          style={{ transform: 'translateY(-51px)' }}
        />

        <SolutionItem
          title={t('solution-3-title')}
          brief={t('solution-3-content')}
          imagePosition="left"
          imageUrl="https://cdn-official-website.juzibot.com/images/solution-03.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-03-divider.svg"
          style={{ transform: 'translateY(-42px)' }}
        />

        <SolutionItem
          title={t('solution-4-title')}
          brief={t('solution-4-content')}
          imagePosition="right"
          imageUrl="https://cdn-official-website.juzibot.com/images/solution-04.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-04-divider.svg"
          style={{ transform: i18n.language === 'en' ? 'translateY(-40px)' : 'translateY(-62px)' }}
        />
      </div>
    </>
  );
};

export default SolutionPage;
