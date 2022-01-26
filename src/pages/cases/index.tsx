import { Pagination } from '@src/components/common/Pagination';
import { Tabs } from '@src/components/common/Tabs';
import AppealBar from '@src/components/index/AppealBar';
import { CompanyCategory, ICompanyItemProps } from '@src/interfaces';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { chunk } from 'lodash';
import Seo from '@src/components/common/Seo';

const CompanyItem: NextPage<ICompanyItemProps> = ({
  title,
  brief,
  imageUrl,
  url,
}) => {
  return (
    <Link href={url}>
      <a>
        <div className="company-item">
          <div className="photo-bar">
            <img
              className="photo"
              src={imageUrl}
              alt={title}
              draggable="false"
            ></img>
          </div>

          <h3>{title}</h3>
          <div className="brief">{brief}</div>
          <span className="read-more">了解更多 →</span>
        </div>
      </a>
    </Link>
  );
};

const companies: ICompanyItemProps[] = [
  {
    title: '某市级民政机关',
    brief:
      '自动化完成 900 万线索量的筛选，平均每人每日回复 1000+ 消息，触达用户的消息总量提升 3 倍以上',
    category: CompanyCategory.GOV,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/2.png',
  },
  {
    title: '某饮料新消费头部品牌',
    brief:
      '实现 1 人管理 10 个企业微信、10 万粉丝的消息应答，触达用户的消息总量提升 5 倍以上',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/0.png',
  },
  {
    title: '某乳类一线品牌',
    brief:
      '实现 1 人管理 10 个企业微信、10 万粉丝的消息应答，触达用户的消息总量提升 5 倍以上',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/17.png',
  },
  {
    title: '某传统冲泡饮料头部品牌',
    brief: '触达用户的消息总量提升 2 倍以上',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/18.png',
  },
  {
    title: '一线明星自创食品品牌',
    brief:
      '用户已回复聊天占比达 100%，日均聊天数达 2775 条，平均首次响应时长快至 2s',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/19.png',
  },
  {
    title: '某减肥代餐一线品牌',
    brief:
      '用户已回复聊天占比达 100%，日均聊天数达 2775 条，平均首次响应时长可达 2s',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/20.png',
  },
  {
    title: '某国际一线美妆大品牌',
    brief:
      '自动化激活会员用户，10 倍的信息触达效率，86w 小程序用户行为的自动标签化',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/21.png',
  },
  {
    title: '某国货头部化妆品品牌',
    brief: '2 人管理 12 个账号下 4000 个用户的消息，回复率达到 90%',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/22.png',
  },
  {
    title: '某国际高端护肤品牌',
    brief:
      '触达用户的消息总量提升 2 倍以上，零人工成本前提下，入群率高达 38.71%',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/23.png',
  },
  {
    title: '某日本著名化妆品品牌',
    brief: '触达用户的消息总量提升 3 倍以上，大幅提升最终转化效果',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/24.png',
  },
  {
    title: '某头部潮流玩具品牌',
    brief:
      '2 人管理 15 个账号下 3 万余用户的消息，触达用户的消息总量提升 6 倍以上',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/25.png',
  },
  {
    title: '某宠物护理一线品牌',
    brief:
      '3 人管理 25 个账号下 5 万个用户的消息，平均 1.3 分钟内即可应答，触达用户的消息总量提升 7 倍以上',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/26.png',
  },
  {
    title: '某韩国时装零售头部品牌',
    brief:
      '已回复聊天占比达 100%，日均聊天数达 1300+ 条，超过 250 个云导购账号的统一管理',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/27.png',
  },
  {
    title: '某连锁披萨品牌',
    brief:
      '5 个企业微信上的 10万 用户、近 1000 个微信群消息，均有机器完成，触达用户的消息总量提升 2 倍以上',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/28.png',
  },
  {
    title: '某国内电子烟一线品牌',
    brief:
      '4 个人管理 80 个企业微信账号上的 100 万用户，平均每人每天应答 8000 条消息，90% 以上客户被回复',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/29.png',
  },
  {
    title: '某国内头部家电品牌',
    brief:
      '3 人管理 12 个账号上的 10万+ 客户消息应答和营销触达，触达用户的消息总量提升 4 倍以上',
    category: CompanyCategory.TRADE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/30.png',
  },
  {
    title: '某线上教育头部品牌',
    brief:
      '1 人管理 116 个账号下近 80w 用户的消息，已回复聊天占比 46%，触达用户的消息总量提升 4 倍以上',
    category: CompanyCategory.EDUCATION,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/1.png',
  },
  {
    title: '某头部线上教育公司旗下子品牌',
    brief:
      '超过 500 个账号 250 万用户的增长和触达几乎自动化完成运营，员工只需要提供文案和海报',
    category: CompanyCategory.EDUCATION,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/8.png',
  },
  {
    title: '某在线教育头部品牌',
    brief:
      '0 人工自动完成 30 万用户的增长、触达和筛选，触达用户的消息总量提升 3 倍以上',
    category: CompanyCategory.EDUCATION,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/9.png',
  },
  {
    title: '某成人理财教育品牌',
    brief: '10 倍的信息触达效率，通过高频次的营销触达，大幅提升续保率',
    category: CompanyCategory.EDUCATION,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/10.png',
  },
  {
    title: '某连锁药店品牌',
    brief:
      '1 人管理 10 余个企业微信上的 6 万余用户消息，触达用户的消息总量提升 3 倍以上',
    category: CompanyCategory.MEDICAL,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/11.png',
  },
  {
    title: '某会员制高端医院品牌',
    brief: '零人工成本下粉丝入群率超过 75%，触达用户的消息总量提升 4 倍以上',
    category: CompanyCategory.MEDICAL,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/12.png',
  },
  {
    title: '某医疗行业高级杂志机构',
    brief:
      '私域运营实现链路自动化，粉丝入群率超过 70%，触达用户的消息总量提升 7 倍以上',
    category: CompanyCategory.MEDICAL,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/13.png',
  },
  {
    title: '某知名地方银行',
    brief:
      '2 人管理 15 个账号的消息应答，5倍以上提高人的服务半径，工具赋能精细化 SOP 运营，开卡率 46%',
    category: CompanyCategory.FINANCE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/14.png',
  },
  {
    title: '某知名保险公司',
    brief:
      '0 人工成本，机器人自动完成 14000+ 用户的运营工作，触达用户的消息总量提升 4 倍以上',
    category: CompanyCategory.FINANCE,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/15.png',
  },
  {
    title: '某头部约车服务品牌（司机端）',
    brief:
      '触达用户的消息总量提升 3 倍以上，0人力成本，自动完成2000+意向客户线索的规模化迁移',
    category: CompanyCategory.IT,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/3.png',
  },
  {
    title: '某头部约车服务品牌（用户端）',
    brief:
      '1 人管理 10 个账号 5 万用户数，触达用户的消息总量提升 3 倍以上，零人工成本前提下，入群率 50% 以上',
    category: CompanyCategory.IT,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/4.png',
  },
  {
    title: '某本地化社群平台',
    brief:
      '全自动化运营 250w 私域用户，每日通过 API 接口将触达用户的消息总量提升 10 倍以上',
    category: CompanyCategory.IT,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/5.png',
  },
  {
    title: '某头部互联网平台',
    brief:
      '4 人管理8个账号下 3万余个用户、100+ 企业微信群的消息，平均首次响应 30s 应答率达 77.05%',
    category: CompanyCategory.IT,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/6.png',
  },
  {
    title: '某头部互联网平台技术社区',
    brief:
      '1 人管理 4 个账号下 2 万个用户消息，触达用户消息总量提升 3 倍以上，零人工成本前提下，入群率 64% 以上',
    category: CompanyCategory.IT,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/7.png',
  },
  {
    title: '某家庭维修品牌',
    brief:
      '8 人完成 180 个账号上 300 万用户的客诉应答，每天处理 6300 余客户的售后问题，平均应答时间2分钟以内',
    category: CompanyCategory.IT,
    url: '/',
    imageUrl:
      'https://cdn-official-website.juzibot.com/images/cases/companies/31.png',
  },
];

const PAGE_SIZE = 12;

const CasesPage: NextPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [companiesList, setCompaniesList] = useState<ICompanyItemProps[][]>([]);
  const [companiesCount, setCompaniesCount] = useState(0);

  function getCompanies(idx: number) {
    setCurrentPage(1);
    if (idx === 0) {
      const len = companies.length;
      setCompaniesList(chunk(companies, PAGE_SIZE));
      setCompaniesCount(len);
      return;
    }
    const list = companies.filter((item) => item.category === idx);
    const len = list.length;
    setCompaniesList(chunk(list, PAGE_SIZE));
    setCompaniesCount(len);
  }

  useEffect(() => {
    getCompanies(tabIndex);
  }, [tabIndex]);

  useEffect(() => {
    getCompanies(0);
  }, []);

  const tabs = [
    {
      title: '全部',
    },
    {
      title: '消费品',
    },
    {
      title: '教育',
    },
    {
      title: '医疗健康',
    },
    {
      title: '金融保险',
    },
    {
      title: '政务服务',
    },
    {
      title: '互联网服务',
    },
  ];
  return (
    <>
      <Seo page="cases" />
      <div className="wrapper cases-hero-page">
        <div className="container">
          <h1 className="slogan">5000+ 品牌的选择</h1>
          <section className="brief">
            各个行业、各种规模的团队都在使用句子互动。我们助力企业和组织建立以社交关系为核心的营销体系，高效触达与深度连接数以千万计的客户，让营销事半功倍。
          </section>

          <button className="primary-button start-button">预约咨询</button>
        </div>
      </div>

      <div className="wrapper companies-page">
        <div className="container">
          <div id="tabs">
            <Tabs
              tabs={tabs}
              activeIndex={tabIndex}
              onChange={setTabIndex}
            ></Tabs>
          </div>

          <div className="items-box">
            {(companiesList[currentPage - 1] || []).map((item) => (
              <CompanyItem {...item} key={item.title} />
            ))}
          </div>

          <div style={{ margin: '24px 0' }}>
            <Pagination
              pageSize={PAGE_SIZE}
              totalCount={companiesCount}
              currentPage={currentPage}
              onChange={(p) => {
                setCurrentPage(p);
                if (process.browser) {
                  const top =
                    (document.querySelector('.cases-hero-page')?.clientHeight ||
                      100) - 100;
                  window.scrollTo({
                    top,
                    behavior: 'smooth',
                  });
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="wrapper appeal-bar">
        <div className="container">
          <AppealBar />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', [
        'common',
        'homepage',
        'seos',
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default CasesPage;
