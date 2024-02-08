import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

          <title>Data Scientist</title>
          <meta name="description" content="I hunt patterns in Data" />

          <meta property="og:url" content="https://m-rayan.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Data Scientist" />
          <meta property="og:description" content="I hunt patterns in Data" />
          <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/ab6c17c4-147e-4845-84b8-3e56272df748.png?token=oot2n40rNAzRSWex4iflkogXwxFfdPSeHx70eJAKF44&height=515&width=400&expires=33243383673" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="m-rayan.vercel.app" />
          <meta property="twitter:url" content="https://m-rayan.vercel.app/" />
          <meta name="twitter:title" content="Data Scientist" />
          <meta name="twitter:description" content="I hunt patterns in Data" />
          <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/ab6c17c4-147e-4845-84b8-3e56272df748.png?token=oot2n40rNAzRSWex4iflkogXwxFfdPSeHx70eJAKF44&height=515&width=400&expires=33243383673" />


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
