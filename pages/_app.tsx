import { AppProps } from 'next/app';
//import 'assets/fonts/Effra/stylesheet.css';
import React from 'react';
import Head from 'next/head';

import HomePageEO from 'src/containers/HomePageEO';
import App from 'src';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/0f6ae094e0.js" crossOrigin="anonymous" />
        <link
          href="https://kit-pro.fontawesome.com/releases/latest/css/pro-v4-shims.min.css"
          media="all"
          rel="stylesheet"
          id="font-awesome-5-kit-css"
        />
        <link
          href="https://kit-pro.fontawesome.com/releases/latest/css/pro-v4-font-face.min.css"
          media="all"
          rel="stylesheet"
          id="font-awesome-5-kit-css"
        />
        <link
          href="https://kit-pro.fontawesome.com/releases/latest/css/pro.min.css"
          media="all"
          rel="stylesheet"
          id="font-awesome-5-kit-css"
        />
        <link href="/assets/fonts/Effra/stylesheet.css" rel="stylesheet" />
      </Head>
      <App />
    </Component>
  );
}

export default MyApp;
