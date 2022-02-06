import { HeaderBarMenu, IHeaderBarMenuProps } from '@src/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const BaseMenu: NextPage<IHeaderBarMenuProps> = ({
  left,
  style,
  children,
  onMouseLeave,
  onMouseMove,
}) => {
  return (
    <div
      style={{ paddingTop: 70, position: 'fixed' }}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <div
        className="dropdown-menu"
        style={{ ...style, transform: `translateX(${left}px)` }}
      >
        <div className="box">{children}</div>
      </div>
    </div>
  );
};

const MenuItem: NextPage<{
  iconUrl: string;
  hoverIconUrl: string;
  href: string;
}> = ({ iconUrl, hoverIconUrl, href, children }) => {
  const [isHover, toggleHover] = useState(false);
  return (
    <Link href={href}>
      <a>
        <div
          className="dropdown-menu-item"
          onMouseLeave={() => toggleHover(false)}
          onMouseMove={() => toggleHover(true)}
        >
          <Image
            src={isHover ? hoverIconUrl : iconUrl}
            alt="header-icon"
            width="16"
            height="16"
            draggable="false"
          />

          <div style={{ marginLeft: 12 }}>{children}</div>
        </div>
      </a>
    </Link>
  );
};

export const SolutionMenu: NextPage<{
  visibility: boolean;
  current: HeaderBarMenu | null;
}> = ({ current, visibility }) => {
  const [styles, setStyles] = useState<CSSProperties>();
  const timerRef = useRef<NodeJS.Timeout>();
  const move = useRef<boolean>(true);
  useMemo(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (current !== null && current !== HeaderBarMenu.SOLUTIONS) {
      setStyles({
        display: 'none',
      });
      return;
    }
    if (visibility) {
      setStyles({
        display: 'flex',
        opacity: 1,
      });
    } else {
      timerRef.current = setTimeout(() => {
        if (!move.current) {
          setStyles({
            opacity: 0,
          });
          timerRef.current = setTimeout(() => {
            setStyles({
              display: 'none',
            });
          }, 300);
        }
      }, 300);
    }
  }, [visibility, current]);
  return (
    <BaseMenu
      left={375}
      name={HeaderBarMenu.SOLUTIONS}
      style={{ height: 270, ...styles, width: 240 }}
      key="solutions"
      onMouseMove={() => (move.current = true)}
      onMouseLeave={() => {
        setStyles({
          opacity: 0,
        });
        move.current = false;
        timerRef.current = setTimeout(() => {
          setStyles({
            display: 'none',
          });
        }, 300);
      }}
    >
      <MenuItem
        iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/06.svg"
        hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/06-o.svg"
        href="/solutions/general"
      >
        私域全链路解决方案
      </MenuItem>
      <MenuItem
        iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/07.svg"
        hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/07-o.svg"
        href="/solutions/customer-service"
      >
        客服场景解决方案
      </MenuItem>
      <MenuItem
        iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/08.svg"
        hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/08-o.svg"
        href="/solutions/increase"
      >
        增长场景解决方案
      </MenuItem>
      <MenuItem
        iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/09.svg"
        hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/09-o.svg"
        href="/solutions/operate"
      >
        规模化运营解决方案
      </MenuItem>
    </BaseMenu>
  );
};

export const FeatureMenu: NextPage<{
  visibility: boolean;
  current: HeaderBarMenu | null;
}> = ({ visibility, current }) => {
  const [styles, setStyles] = useState<CSSProperties>();
  const timerRef = useRef<NodeJS.Timeout>();
  const move = useRef<boolean>(true);
  useMemo(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (current !== null && current !== HeaderBarMenu.FEATURES) {
      setStyles({
        display: 'none',
      });
      return;
    }
    if (visibility) {
      setStyles({
        display: 'flex',
        opacity: 1,
      });
    } else {
      timerRef.current = setTimeout(() => {
        if (!move.current) {
          setStyles({
            opacity: 0,
          });
          timerRef.current = setTimeout(() => {
            setStyles({
              display: 'none',
            });
          }, 300);
        }
      }, 300);
    }
  }, [visibility, current]);
  return (
    <BaseMenu
      left={295}
      name={HeaderBarMenu.FEATURES}
      style={{ height: 314, ...styles }}
      key="features"
      onMouseMove={() => (move.current = true)}
      onMouseLeave={() => {
        setStyles({
          opacity: 0,
        });
        move.current = false;
        timerRef.current = setTimeout(() => {
          setStyles({
            display: 'none',
          });
        }, 300);
      }}
    >
      <MenuItem
        iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/01.svg"
        hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/01-o.svg"
        href="/features/customer-acquisition"
      >
        规模获客
      </MenuItem>
      <MenuItem
        iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/02.svg"
        hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/02-o.svg"
        href="/features/sop"
      >
        精准触达
      </MenuItem>
      <MenuItem
        iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/03.svg"
        hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/03-o.svg"
        href="/features/contact-platform"
      >
        急速应答
      </MenuItem>
      <MenuItem
        iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/04.svg"
        hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/04-o.svg"
        href="/features/management"
      >
        高效管理
      </MenuItem>
      <MenuItem
        iconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/05.svg"
        hoverIconUrl="https://cdn-official-website.juzibot.com/images/icons/header-bar/05-o.svg"
        href="/features/data-center"
      >
        数据驱动
      </MenuItem>
    </BaseMenu>
  );
};

export const QRCodeToast: NextPage<{ visibility: boolean }> = ({
  visibility,
}) => {
  const { t } = useTranslation(['common']);
  return (
    <div className={`contact-menu ${visibility ? 'visible' : 'hidden'}`}>
      <div className="box">
        <Image
          src="https://cdn-official-website.juzibot.com/images/contact-qrcode.png"
          width="200"
          height="200"
          alt="qrcode"
          draggable="false"
        />

        <span>{t('lets-talk-scan-qrcode')}</span>
      </div>
    </div>
  );
};
