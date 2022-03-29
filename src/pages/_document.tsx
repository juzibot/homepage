/* eslint-disable react/no-unescaped-entities */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class JuziSiteDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <title>句子互动企微SCRM - 助力搭建安全稳定私域流量</title>
        <meta name="viewport" content="width=1440, initial-scale=1.0" />
        <meta name="baidu-site-verification" content="code-a7uFgEHa8D" />
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
