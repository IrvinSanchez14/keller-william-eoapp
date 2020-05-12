import Head from 'next/head';

import ConfirmationPage from 'src/containers/ConfirmationPage';
import { GetServerSideProps } from 'next';
import AppState from 'src/store/models/AppState';
import ky from '../src/utils/ky';
import Error from 'next/error';

const MyApp: React.FC<Partial<AppState>> = ({ app }) => {
  if (!app || !app.confirmationNumber) return <Error statusCode={404} />;
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
      <ConfirmationPage
        confirmationNumber={app.confirmationNumber!}
        agentsNumber={
          app.data.agentInformation.numberAgenteNoCommission +
          app.data.agentInformation.numberAgentLessCommission +
          app.data.agentInformation.numberAgentsMoreCommission +
          app.data.agentInformation.numberAgentSpecialDesignation
        }
        grossCommission={app.data.commissionInformation.grossCommission}
        claimsNumber={app.data.policyInformation.claims.length}
        propertySoldValue={app.data.commissionInformation.averageValue}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sessionId = context.query.sessionId;
  if (typeof sessionId !== 'string') return { props: {} };
  try {
    const response = await ky.get(`session/${sessionId}`).json<AppState['app']>();
    return { props: { app: response } };
  } catch {
    return { props: {} };
  }
};

export default MyApp;
