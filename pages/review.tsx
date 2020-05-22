import Head from 'next/head';

import ReviewPage from 'src/containers/ReviewPage';
import AppState from 'src/store/models/AppState';
import Error from 'next/error';
import { useKyGet } from 'src/utils/use-ky';
import { useRouter } from 'next/dist/client/router';

const MyApp: React.FC = () => {
  const router = useRouter();
  const { data, state } = useKyGet<AppState['app']>(`session/${router.query.sessionId}`, {
    pause: typeof router.query.sessionId !== 'string',
  });
  if (state === 'error') return <Error statusCode={404} />;
  return <div>{data && <ReviewPage state={data} />}</div>;
};

export default MyApp;
