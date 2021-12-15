import Aos from 'aos';
import { NextPage } from 'next';
import { useEffect } from 'react';

const AppealBar: NextPage = () => {
  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);
  return (
    <div className="content" data-aos="fade-in">
      <div className="title">即日起，建立以社交关系为核心的营销体系</div>
      <button
        className="white-button start-button"
        onClick={() => {
          if (process.browser) window.open('https://qiwei.juzibot.com/user/login');
        }}
      >
        免费使用
      </button>
    </div>
  );
};

export default AppealBar;
