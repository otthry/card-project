import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
export default function MyDocument(props) {
  return (
    <Html lang="en">
      <Head>
        {/* PWA primary color */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
