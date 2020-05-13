import Head from 'next/head';

import ReviewPdfPage from 'src/containers/ReviewPdfPage';
import AppState from 'src/store/models/AppState';
import Error from 'next/error';
import { useRouter } from 'next/dist/client/router';
import { useKyGet } from 'src/utils/use-ky';

const MyApp: React.FC = () => {
  const router = useRouter();
  const { data, state } = useKyGet<AppState['app']>(`session/${router.query.sessionId}`, {
    pause: typeof router.query.sessionId !== 'string',
  });
  if (state === 'error' || (data && !data.confirmationNumber)) return <Error statusCode={404} />;
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
        <link href="/assets/fonts/Effra/stylesheet.css" rel="stylesheet" />
      </Head>
      {data && <ReviewPdfPage state={data} />}
    </div>
  );
};

export default MyApp;
