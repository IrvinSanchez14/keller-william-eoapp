import AppState from 'src/store/models/AppState';
import Error from 'next/error';
import ProviderSelection from 'src/components/ProviderSelection';
import { useKyGet } from 'src/utils/use-ky';
import { useRouter } from 'next/dist/client/router';

const ProviderSelectionPage: React.FC = () => {
  const router = useRouter();
  const { data, state } = useKyGet<AppState['app']>(
    `session/${router.query.sessionId}`,
    router.query.sessionId,
    {
      pause: typeof router.query.sessionId !== 'string',
    },
  );
  if (state === 'error') return <Error statusCode={404} />;
  return <div>{data && <ProviderSelection state={data} />}</div>;
};

export default ProviderSelectionPage;
