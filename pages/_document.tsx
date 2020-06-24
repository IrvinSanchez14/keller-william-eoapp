import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const materialUiSheets = new MaterialUiServerStyleSheets();

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(materialUiSheets.collect(<App {...props} />)),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/img/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/img/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <script src="https://kit.fontawesome.com/0f6ae094e0.js" crossOrigin="anonymous" defer />
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places&language=en`}
          />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
