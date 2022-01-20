import { NextPage } from 'next';
import Image from 'next/image';

export const FeatureDescription: NextPage = () => {
  return (
    <>
      <h1>把多平台会话统一管理</h1>
      <section className="brief">
        基于RPA技术，句子互动提供把多平台、多账号的消息聚合在同一个后台的能力。无论客户从哪个平台发起会话，都可以在后台快速响应。
        在会话中台，你可以让多个员工同时服务一个客户。基于消息路由和打通内部系统的侧边栏，会话中的服务同样可以成为效率工单。
      </section>

      <div className="features-box">
        <div className="left">
          <h3>内嵌侧边栏让应答更高效</h3>

          <div className="item">
            <Image
              src="https://cdn-official-website.juzibot.com/images/icons/features/cp-04.svg"
              width="24"
              height="24"
              alt="small-icon"
              draggable="false"
            />
            <div className="content">
              <div className="title">打通话术库系统</div>
              <p>
                侧边栏内嵌话术库，可一键发送预设话术内容，保证应答的效率和专业度
              </p>
            </div>
          </div>

          <div className="item">
            <Image
              src="https://cdn-official-website.juzibot.com/images/icons/features/cp-05.svg"
              width="24"
              height="24"
              alt="small-icon"
              draggable="false"
            />
            <div className="content">
              <div className="title">清晰展示客户画像</div>
              <p>
                侧边栏内嵌客户画像和工作台，全方位展示客户，像老朋友一样与每一个客户沟通
              </p>
            </div>
          </div>

          <div className="item">
            <Image
              src="https://cdn-official-website.juzibot.com/images/icons/features/cp-06.svg"
              width="24"
              height="24"
              alt="small-icon"
              draggable="false"
            />
            <div className="content">
              <div className="title">打通企业自建系统</div>
              <p>
                提供完善的SDK，打通任一平台系统，实时展示客户的全域旅程，让沟通无界
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <Image
            src="https://cdn-official-website.juzibot.com/images/icons/features/cp-07.svg"
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
