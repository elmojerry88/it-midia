// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Cor da barra de status no iPhone */}
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          {/* Para uma cor específica, use a tag de theme-color */}
          <meta name="theme-color" content="#000000" /> {/* Substitua pela cor desejada */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
