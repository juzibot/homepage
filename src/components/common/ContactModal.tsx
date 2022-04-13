import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { validatePhoneNum } from '@src/utils/validatePhoneNum';
import { host } from '@src/config';
import { useRouter } from 'next/router';
import { shuffle } from 'lodash';

const DetentionModal: NextPage<{
  onConfirm: () => void;
  onCancel: () => void;
}> = ({ onCancel, onConfirm }) => {
  const contents: string[] = [
    '你将失去与<strong>5000+ 操盘手实时交流的机会</strong>',
    '<strong>80+ 行业头部企业的案例拆解添加顾问即可自动领取</strong>',
    '你可能会错过<strong>7 天免费试用，PoC 实战全程陪跑</strong>',
    '<strong>600+ 份私域实操 SOP 添加顾问即可自动领取</strong>',
  ];
  return (
    <div className="detention-modal">
      <div className="title">确定离开？</div>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: shuffle(contents)[0],
        }}
      />

      <div className="buttons">
        <div className="btn primary" onClick={onConfirm}>
          去添加
        </div>
        <div className="btn" onClick={onCancel}>
          暂不需要
        </div>
      </div>
    </div>
  );
};

const RightIcon = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 6.75L3.24 8.84C3.40463 8.96572 3.59527 9.05306 3.79799 9.09563C4.00071 9.1382 4.21039 9.13491 4.41168 9.08603C4.61297 9.03714 4.80079 8.94389 4.96141 8.81308C5.12203 8.68227 5.25138 8.51723 5.34 8.33L8.87 1"
        stroke="#F15A24"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

const ContactModal: NextPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const remarkRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const refs = [nameRef, phoneRef, companyRef, remarkRef];
  const [countdown, setCountdown] = useState(0);
  const [isScanQrcode, toggleScanQrcode] = useState(true);
  const [isDetentionModalVisible, toggleDetentionModalVisible] =
    useState(false);
  const router = useRouter();

  function hideModal() {
    refs.forEach((item) => {
      item.current?.removeAttribute('disabled');
      item.current!.value = '';
    });
    buttonRef.current?.removeAttribute('disabled');
    buttonRef.current!.innerText = '立即提交';
    document
      .getElementById('contact-modal')
      ?.setAttribute('style', 'display: none');
  }

  function handleCloseModal() {
    toggleDetentionModalVisible(true);
  }

  function getQrcode() {
    const arr = [
      '/',
      '/features/customer-acquisition',
      '/features/sop',
      '/features/contact-platform',
      '/features/data-center',
      '/features/management',
      '/features/security',
      '/solutions/general',
      '/solutions/customer-service',
      '/solutions/increase',
      '/solutions/operate',
      '/solutions/consumer-goods',
      '/solutions/education',
      '/solutions/health',
      '/solutions/finance',
      '/about-us',
      '/culture',
      '/cases',
    ];
    const map: { [url: string]: number } = {};
    arr.forEach((s, i) => {
      map[s] = i + 1;
    });
    const pathname = router.pathname;
    const _arr = arr.sort((b, a) => b.length - a.length);
    let res = 1;
    _arr.forEach((s) => {
      if (pathname.includes(s)) {
        res = map[s];
      }
    });
    return `/_images/qrcodes/官网弹窗${res}.png`;
  }

  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => setCountdown((c) => c - 1), 1000);
    } else {
      hideModal();
    }
  }, [countdown]);

  async function submit() {
    const [name, phone, company, remark] = refs.map(
      (item) => item.current?.value || ''
    );
    nameRef.current?.setAttribute(
      'style',
      `border-color: ${name ? '#eee' : '#265cf3'}`
    );
    phoneRef.current?.setAttribute(
      'style',
      `border-color: ${phone && validatePhoneNum(phone) ? '#eee' : '#265cf3'}`
    );
    if (!name || !phone || !validatePhoneNum(phone)) {
      return;
    }
    refs.forEach((item) => (item.current!.disabled = true));
    buttonRef.current?.setAttribute('disabled', 'true');
    buttonRef.current!.innerText = '正在提交';
    const data = { name, phone, company, remark };
    if (process.browser) {
      axios
        .post('/api/contact', data)
        .then((res) => {
          console.log(res);
        })
        .finally(() => {
          setCountdown(3);
        });
    }
  }

  return (
    <>
      <div
        id="contact-modal"
        style={isDetentionModalVisible ? { filter: 'blur(4px)' } : {}}
      >
        <div
          className="modal"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="left">
            <h2>不止工具，更多全方位支持</h2>
            <div style={{ marginTop: 8 }}>
              {isScanQrcode ? '右侧扫码' : '提交信息'}添加咨询顾问，
              <span className="orange">
                即刻领取
                {' >>>'}
              </span>
            </div>

            <div className="content">
              <div className="title" style={{ marginTop: 42 }}>
                <span className="num">01</span>
                实战陪跑
              </div>
              <div className="item" style={{ marginTop: 16 }}>
                <RightIcon />
                <span>1 对 1 全程辅助注册</span>
              </div>
              <div className="item">
                <RightIcon />
                <span>7 天免费试用，PoC 实战陪跑</span>
              </div>
              <div className="item">
                <RightIcon />
                <span>私域实战专家 1 对 1 咨询解决运营问题</span>
              </div>

              <div className="title" style={{ marginTop: 28 }}>
                <span className="num">02</span>
                运营干货
              </div>
              <div className="item" style={{ marginTop: 16 }}>
                <RightIcon />
                <span>赠送 600+ 私域 SOP 合集</span>
              </div>
              <div className="item">
                <RightIcon />
                <span>80+ 头部企业真实运营案例针对性解析</span>
              </div>

              <div className="title" style={{ marginTop: 28 }}>
                <span className="num">03</span>
                社群交流
              </div>
              <div className="item" style={{ marginTop: 16 }}>
                <RightIcon />
                <span>与 5000+ 一线操盘手实时交流</span>
              </div>
              <div className="item">
                <RightIcon />
                <span>300+ 分实操干货弹药，200+ 行业案例供给</span>
              </div>
              <div className="item">
                <RightIcon />
                <span>最新私域行业情报实时更新解读</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div
              className="qrcode-bar"
              style={{
                display: isScanQrcode ? 'flex' : 'none',
              }}
            >
              <img src={getQrcode()} alt="qrcode" className="qrcode" />
              <div className="tips">
                微信扫一扫，与陪跑数百家头部企业的顾问聊聊
              </div>
              <div className="appeal">10 倍提高你的私域运营效率</div>
              <div className="login" style={{ marginTop: 42 }}>
                已有账号，
                <a
                  href={`https://qiwei.juzibot.com/user/login?from=login&rediect=${
                    host + router.pathname
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  立即登录
                </a>
              </div>
            </div>
            <div
              className="form"
              style={{
                display: !isScanQrcode && countdown === 0 ? 'block' : 'none',
              }}
            >
              <input
                placeholder="姓名"
                name="name"
                ref={nameRef}
                maxLength={16}
              />
              <input
                placeholder="电话"
                name="phone"
                type="number"
                ref={phoneRef}
                maxLength={11}
              />
              <input
                placeholder="公司"
                name="company"
                ref={companyRef}
                maxLength={48}
              />
              <input
                placeholder="备注"
                name="remark"
                ref={remarkRef}
                maxLength={100}
              />

              <button ref={buttonRef} onClick={submit}>
                立即提交
              </button>

              <div className="tips">咨询顾问会尽快与您取得联系</div>
              <div className="login" style={{ marginTop: 12 }}>
                已有账号，
                <a
                  href={`https://qiwei.juzibot.com/user/login?from=login&rediect=${
                    host + router.pathname
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  立即登录
                </a>
              </div>
            </div>

            <div
              className="success-tips"
              style={{
                display: !isScanQrcode && countdown > 0 ? 'block' : 'none',
              }}
            >
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9030"
                width="64"
                height="64"
              >
                <path
                  d="M512 0C229.004 0 0 229.004 0 512s229.004 512 512 512 512-229.004 512-512S794.996 0 512 0z m260.655 425.425L493.382 704.698c-5.586 5.586-13.033 9.31-21.411 9.31-10.24 1.861-20.48-0.932-27.927-8.379L268.102 528.756a30.906 30.906 0 0 1 0-43.752l14.894-14.895c12.102-12.102 31.651-12.102 43.753 0l141.498 141.498 244.83-244.829c12.101-12.102 31.65-12.102 43.752 0l15.826 14.895c12.101 12.102 12.101 31.65 0 43.752z"
                  p-id="9031"
                  fill="#7cba59"
                ></path>
              </svg>

              <h4 style={{ marginTop: 24 }}>
                提交成功，我们将在 24 小时内联系您！
              </h4>

              <div className="auto-close">{countdown} 秒后自动关闭</div>
            </div>
          </div>
          <div className="close-bar">
            <div
              className="switch-mode"
              onClick={() => toggleScanQrcode(!isScanQrcode)}
            >
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9463"
                width="16"
                height="16"
              >
                <path
                  d="M956.994933 307.22722c4.950755-11.95017 2.214435-25.705452-6.931876-34.851763L799.528576 121.840976l-45.227064 45.227064 95.941096 95.941096-722.30068 0 0 63.960731 799.507086 0C940.384627 326.969866 952.046225 319.179436 956.994933 307.22722zM959.430402 646.774543L159.923316 646.774543c-12.935614 0-24.596188 7.791453-29.54592 19.741623-4.950755 11.95017-2.214435 25.705452 6.931876 34.851763l150.534482 150.534482 45.227064-45.226041-95.941096-95.941096 722.30068 0L959.430402 646.774543z"
                  p-id="9464"
                  fill="#666666"
                ></path>
              </svg>
              <span className="tips">
                {isScanQrcode
                  ? '不方便扫码？去留联系方式'
                  : '立即聊聊？微信扫码'}
              </span>
            </div>
            <div className="close-btn" onClick={handleCloseModal}>
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9123"
                width="36"
                height="36"
              >
                <path
                  d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z"
                  p-id="9124"
                  fill="#ccc"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {isDetentionModalVisible ? (
        <DetentionModal
          onCancel={() => {
            toggleDetentionModalVisible(false);
            hideModal();
          }}
          onConfirm={() => {
            toggleDetentionModalVisible(false);
          }}
        />
      ) : null}
    </>
  );
};

export default ContactModal;
