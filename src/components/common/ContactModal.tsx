import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { validatePhoneNum } from '@src/utils/validatePhoneNum';

const ContactModal: NextPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const remarkRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const refs = [nameRef, phoneRef, companyRef, remarkRef];
  const [countdown, setCountdown] = useState(0);

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
    <div id="contact-modal" onClick={hideModal}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="left">
          <img src="https://cdn-official-website.juzibot.com/images/contact-qrcode.png" alt="qrcode" />
          <div style={{ width: 180 }}>
            <div style={{ marginTop: 24 }}>微信扫一扫</div>
            <div>与私域解决方案专家联系</div>
            <div style={{ marginTop: 12 }}>咨询时间：</div>
            <div>周一至周日 9:30-23:00</div>
          </div>
        </div>
        <div className="right">
          <div
            className="form"
            style={{ display: countdown === 0 ? 'block' : 'none' }}
          >
            <h3>获取免费的私域运营资讯与最优报价</h3>
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
          </div>

          <div
            className="success-tips"
            style={{ display: countdown > 0 ? 'block' : 'none' }}
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
        <div className="close-bar" onClick={hideModal}>
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
  );
};

export default ContactModal;
