import { IFooterMenu } from '@src/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Footer: NextPage = () => {
  const menus: IFooterMenu[] = [
    {
      title: '产品服务',
      child: [
        {
          title: '规模化获客',
          url: '/',
        },
        {
          title: '自动化营销',
          url: '/',
        },
        {
          title: '客户会话中台',
          url: '/',
        },
        {
          title: '数据中台',
          url: '/',
        },
        {
          title: '管理中心',
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
          title: 'RPA',
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
          title: '私域全场景解决方案',
          url: '/',
        },
        {
          title: '客服解决方案',
          url: '/',
        },
        {
          title: '增长解决方案',
          url: '/',
        },
        {
          title: '转化解决方案',
          url: '/',
        },
        {
          title: '消费品行业解决方案',
          url: '/',
        },
        {
          title: '连锁门店解决方案',
          url: '/',
        },
        {
          title: '政务解决方案',
          url: '/',
        },
        {
          title: '互联网服务解决方案',
          url: '/',
        },
      ],
    },
    {
      title: '资料',
      child: [
        {
          title: '产品手册',
          url: 'https://k0auuqcihb.feishu.cn/docs/doccnJMlpBUC1NAHW7ujCXVxaUB',
        },
        {
          title: '增长情报局',
          url: 'https://blog.juzibot.com/',
        },
        {
          title: '培训 & 公开课',
          url: '/',
        },
        {
          title: '私域社群',
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
          title: '关于我们',
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
          tooltip: '北京海淀区中关村智造大街 F 座 5 层',
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
        <span className="copyright">© 2021 北京句子科技有限公司</span>
        <Link href="https://beian.miit.gov.cn/">
          <a className="beian" target="_blank">
            京ICP备19049435号-1
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
