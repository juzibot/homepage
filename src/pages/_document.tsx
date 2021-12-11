import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class JuziSiteDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <meta name="viewport" content="width=1280, initial-scale=1.0" />
        <title>句子互动官网</title>
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
