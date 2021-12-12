import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class JuziSiteDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <title>句子互动企微SCRM - 助力搭建安全稳定私域流量</title>
        <meta name="viewport" content="width=1280, initial-scale=1.0" />
        <meta name="keywords" content="营销云,juzi.bot,企业微信,企微,SCRM,SaaS" />
        <meta name="description" content="句子互动是下一代营销云。通过企业微信沉淀微信流量，提供工具和整合业务流，从引流、转化到运营管理用户的全生命周期，是你在流量红利见顶时代的全新增长引擎" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default JuziSiteDocument;
