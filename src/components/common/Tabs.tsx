import { ITabsProps } from '@src/interfaces';
import { NextPage } from 'next';

export const Tabs: NextPage<ITabsProps> = ({ tabs, activeIndex, onChange }) => {
  return (
    <div className="tabs">
      {tabs.map((item, index) => (
        <div
          className={`tab${activeIndex === index ? ' active' : ''}`}
          key={index}
          onClick={() => onChange(index)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};
