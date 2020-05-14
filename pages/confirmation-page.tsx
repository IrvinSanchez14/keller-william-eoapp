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
      {data && (
        <ConfirmationPage
          confirmationNumber={data.confirmationNumber}
          agentsNumber={
            data.data.agentInformation.numberAgenteNoCommission +
            data.data.agentInformation.numberAgentLessCommission +
            data.data.agentInformation.numberAgentsMoreCommission +
            data.data.agentInformation.numberAgentSpecialDesignation
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
