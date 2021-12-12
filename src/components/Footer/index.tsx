import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Footer: NextPage = () => {
  const menus = [
    {
      title: '产品服务',
      child: [
        {
          title: '客户会话中台',
          url: '/',
        },
        {
          title: 'SOP 自动作业',
          url: '/',
        },
        {
          title: '用户画像 CDP',
          url: '/',
        },
        {
          title: '数据中台',
          url: '/',
        },
        {
          title: '客户成功',
          url: '/',
        },
        {
          title: '安全与合规',
          url: '/',
        },
        {
          title: '云原生',
          url: '/',
        },
        {
          title: '私有化部署',
          url: '/',
        },
      ],
    },
    {
      title: '解决方案',
      child: [
        {
          title: '企业微信全场景方案',
          url: '/',
        },
        {
          title: '客服解决方案',
          url: '/',
        },
        {
          title: '私域流量增长方案',
          url: '/',
        },
        {
          title: '规模化运营',
          url: '/',
        },
        {
          title: '消费品 & 线下门店',
          url: '/',
        },
        {
          title: '泛金融行业',
          url: '/',
        },
        {
          title: '政务',
          url: '/',
        },
        {
          title: '在线教育',
          url: '/',
        },
      ],
    },
    {
      title: '资料',
      child: [
        {
          title: '使用手册',
          url: '/',
        },
        {
          title: '博客',
          url: '/',
        },
        {
          title: '行业洞察',
          url: '/',
        },
        {
          title: '培训 & 公开课',
          url: '/',
        },
        {
          title: '开发文档',
          url: '/',
        },
        {
          title: '开源项目',
          url: '/',
        },
        {
          title: 'Github',
          url: '/',
        },
      ],
    },
    {
      title: '公司',
      child: [
        {
          title: '关于',
          url: '/',
        },
        {
          title: '合作伙伴',
          url: '/',
        },
        {
          title: '加入我们',
          url: '/',
        },
        {
          title: '隐私条款',
          url: '/',
        },
        {
          title: '公司地址',
          tooltip: 'sales@juzi.bot',
        },
        {
          title: 'sales@juzi.bot',
          url: 'mailto: sales@juzi.bot',
        },
      ],
    },
  ];
  return (
    <footer className="wrapper footer-bar">
      <div className="container">
        <div className="menu-container">
          <div className="logo">
            <Image
              src="/images/logo.svg"
              width={120}
              height={64}
              draggable="false"
              alt="logo"
            ></Image>
          </div>

          {menus.map((menu) => (
            <div key={menu.title} className="menu-group">
              <div className="title">{menu.title}</div>
              <div className="menus">
                {menu.child.map((item, idx) =>
                  item.tooltip ? (
                    <div key={idx}>{item.title}</div>
                  ) : (
                    <a href={item.url} key={idx}>
                      {item.title}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="registration-info">
        <span className="copyright">© 北京句子科技有限公司</span>
        <Link href="https://beian.miit.gov.cn/">
          <a className="beian" target="_blank">京ICP备19049435号-1</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
