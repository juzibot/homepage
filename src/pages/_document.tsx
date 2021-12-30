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
