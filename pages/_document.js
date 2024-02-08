import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Open Graph meta tags */}
          <meta property="og:title" content="Data Scientist" />
          <meta property="og:description" content="I hunt patterns in Data" />
          <meta property="og:image" content="https://photos.google.com/u/1/photo/AF1QipMz5vWIJyKpDf2xEVd9xfxthRN7oIVd2tll_0hc" />
          <meta property="og:url" content="https://m-rayan.vercel.app/" />
        </Head>
        <body>
          <Main />
          <Analytics />
          <NextScript />
        </body>
      </Html>
    );
  }
}
