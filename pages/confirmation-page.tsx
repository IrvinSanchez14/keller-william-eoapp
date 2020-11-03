import Head from 'next/head';

import ConfirmationPage from 'src/containers/ConfirmationPage';
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
      {data && (
        <ConfirmationPage
          confirmationNumber={data.confirmationNumber}
          agentsNumber={
            data.data.agentInformation.numberAgentsNoCommission +
            data.data.agentInformation.numberAgentsLessCommission +
            data.data.agentInformation.numberAgentsMoreCommission
          }
          grossCommission={data.data.commissionInformation.grossCommission}
          claimsNumber={data.data.policyInformation.claims.length}
          propertySoldValue={data.data.commissionInformation.averageValue}
        />
      )}
    </div>
  );
};

export default MyApp;
