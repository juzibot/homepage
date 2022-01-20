import { IFeatureDescriptionProps } from '@src/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';

export const FeatureDescription: NextPage<IFeatureDescriptionProps> = ({
  firstTitle,
  firstSubtitle,
  secondTitle,
  datas,
  photo,
  photoPosition,
}) => {
  return (
    <>
      <h1>{firstTitle}</h1>
      <section className="brief">{firstSubtitle}</section>

      <div
        className="features-box"
        style={{
          flexDirection: photoPosition === 'right' ? 'row' : 'row-reverse',
        }}
      >
        <div
          className="left"
          style={{
            paddingLeft: photoPosition === 'left' ? 0 : 16,
            paddingRight: photoPosition === 'left' ? 24 : 0,
          }}
        >
          <h3>{secondTitle}</h3>

          {datas.map(({ title, subtitle, icon }) => (
            <div className="item" key={title}>
              <Image
                src={icon}
                width="24"
                height="24"
                alt="small-icon"
                draggable="false"
              />
              <div className="content">
                <div className="title">{title}</div>
                <p>{subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="right"
          style={{ marginLeft: photoPosition === 'left' ? 0 : 24 }}
        >
          <Image
            src={photo}
            width="500"
            height="440"
            alt="feature-picture"
            draggable="false"
          />
        </div>
      </div>
    </>
  );
};
