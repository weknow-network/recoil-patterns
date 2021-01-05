import { AppType } from 'next/dist/next-server/lib/utils';
import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: AppType) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,maximum-scale=1.0,initial-scale=1"
          />
        </Head>
        <link
          rel="preload stylesheet"
          as="style"
          href="/Gilroy/stylesheet.css"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <Main />
        <NextScript />
      </>
    );
  }
}

export default MyDocument;
