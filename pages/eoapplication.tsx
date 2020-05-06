import Head from 'next/head';

import App from 'src';

function MyApp() {
  return (
    <div>
      <Head>
        <title>Keller Covered</title>
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
      </Head>
      <App />
    </div>
  );
}

export default MyApp;
