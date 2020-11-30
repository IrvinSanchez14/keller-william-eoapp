import ReviewPdfPage from 'src/containers/ReviewPdfPage';
import AppState from 'src/store/models/AppState';
import Error from 'next/error';
import { useRouter } from 'next/dist/client/router';
import { useKyGet } from 'src/utils/use-ky';

const reviewPDF: React.FC = () => {
  const router = useRouter();
  const { data, state } = useKyGet<AppState['app']>(
    `session/${router.query.sessionId}`,
    router.query.sessionId,
    {
      pause: typeof router.query.sessionId !== 'string',
    },
  );
  if (state === 'error' || (data && !data.confirmationNumber)) return <Error statusCode={404} />;
  return <div>{data && <ReviewPdfPage state={data} />}</div>;
};

export default reviewPDF;
