import * as React from 'react';
import Head from 'next/head';

export default function MyApp(pageProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <React.Component {...pageProps} />
      </>
  );
}