import { IFeatureAppealBarProps } from '@src/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';

export const FeatureAppealBar: NextPage<IFeatureAppealBarProps> = ({
  title,
  datas,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="items">
        {datas.map(({ title, subtitle, icon }) => (
          <div className="item" key={title}>
            <Image
              src={icon}
              width="64"
              height="64"
              alt="icon"
              draggable="false"
            />

            <p>{title}</p>
            <p>{subtitle}</p>
          </div>
        ))}
      </div>
    </>
  );
};
