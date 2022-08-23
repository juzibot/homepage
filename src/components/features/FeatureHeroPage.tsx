import { NextPage } from 'next';
import Image from 'next/image';
import { IFeatureHeroPageProps } from '@src/interfaces';
import { useTranslation } from 'react-i18next';
import { useShowModal } from '@src/utils/showModal';

export const FeatureHeroPage: NextPage<IFeatureHeroPageProps> = ({
  title,
  brief,
  datas,
}) => {
  const { t } = useTranslation('features');
  const showModal = useShowModal();
  return (
    <>
      <h1>{title}</h1>
      <section className="brief">{brief}</section>
      <div className="buttons-bar">
        <button className="primary-button start-button" onClick={showModal}>
          {t('usage')}
        </button>
      </div>

      <div className="data-bar">
        {datas.map(({ title, subtitle, icon }) => (
          <div className="item" key={title}>
            <Image
              src={icon}
              alt="icon"
              width="48"
              height="48"
              draggable="false"
            />
            <div className="info">
              <h3>{title}</h3>
              <div>{subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
