import { useRouter } from 'next/dist/client/router';
import { useCallback, useEffect, useState } from 'react';
import FormRouter from 'src/components/FormRouter';
import SessionModal from 'src/components/SessionModal';
import { FirmInformation } from 'src/containers/TreeEO/FirmInformation';
import { useAppContext } from 'src/store';
import { setAppState } from 'src/store/actions/app';
import AppState from 'src/store/models/AppState';
import ky from '../../utils/ky';
import { AgentInformation } from './AgentInformation';
import { AgentInformationDesignation } from './AgentInformationDesignation';
import { AgentInformationRevoked } from './AgentInformationRevoked';
import { CommissionInformation } from './CommissionInformation';
import { CommissionInformationCommercial } from './CommissionInformationCommercial';
import { CommissionInformationMenu } from './CommissionInformationMenu';
import { CommissionInformationOther } from './CommissionInformationOther';
import { CommissionInformationResidential } from './CommissionInformationResidential';
import { CommissionInformationSummary } from './CommissionInformationSummary';
import { CommissionInformationTransaction } from './CommissionInformationTransaction';
import { FirmInformationAffiliated } from './FirmInformationAffiliated';
import { FirmInformationBroker } from './FirmInformationBroker';
import { FirmInformationEmail } from './FirmInformationEmail';
import { PolicyInformation } from './PolicyInformation';
import { PolicyInformationClaims } from './PolicyInformationClaims';
import { RiskProfileReits } from './RiskProfieReits';
import { RiskProfile } from './RiskProfile';
import { RiskProfileBanck } from './RiskProfileBanck';
import { RiskProfileFirm } from './RiskProfileFirm';
import { RiskProfileTransaction } from './RiskProfileTransaction';
import { WelcomeEO } from './WelcomeEO';

type SessionResponse = AppState['app'];

function isLastPage(state: AppState) {
  return state.app.metadata.finishProgressForm === true;
}

function useSessionSaver(state: AppState) {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string>();
  const { dispatch } = useAppContext();

  const onSubmit = useCallback(async () => {
    if (sessionId || state.app.eoSessionId) {
      const response = await ky
        .put(`session/${sessionId || state.app.eoSessionId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          json: state.app,
        })
        .json<SessionResponse>();
      return response;
    } else {
      return await ky
        .post('session', { json: state.app })
        .json<SessionResponse>()
        .then((response: any) => {
          setIsOpen(true);
          setAppState(dispatch, { app: response });
          setSessionId(response.eoSessionId);
          localStorage.setItem('token', response.accessToken);
        });
    }
  }, [sessionId, state]);
  return { sessionId: sessionId || state.app.eoSessionId, isOpen, setIsOpen, onSubmit };
}

function AppEO() {
  const router = useRouter();
  const { dispatch, intl, state } = useAppContext();
  const { onSubmit, sessionId, isOpen, setIsOpen } = useSessionSaver(state);
  const getSession = useCallback(
    async (sessionIdCall: string) => {
      const updateURLSession = `session/${sessionIdCall}`;
      try {
        await ky
          .get(updateURLSession, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          })
          .json<SessionResponse>()
          .then((response: any) => {
            setAppState(dispatch, { app: response });
          })
          .catch((err: any) => {
            if (err.response.status === 401) {
              ky.post(`tokens/refresh`, { json: { eoSessionId: sessionIdCall } })
                .json()
                .then((responseTok: any) => {
                  localStorage.setItem('token', responseTok.accessToken);
                  ky.get(updateURLSession, {
                    headers: { Authorization: `Bearer ${responseTok.accessToken}` },
                  })
                    .json<SessionResponse>()
                    .then((responseA: any) => {
                      setAppState(dispatch, { app: responseA });
                    });
                });
            }
          });
      } catch {}
    },
    [dispatch],
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('complete');
    if (state.app.confirmationNumber && myParam) {
      router.push(`/confirmation-page?sessionId=${sessionId}&complete=true`);
    } else if (state.app.confirmationNumber) {
      router.push(`/reviewpdf?sessionId=${sessionId}`);
    } else if (isLastPage(state)) router.push(`/review?sessionId=${sessionId}`);
  }, [state, sessionId, router]);

  useEffect(() => {
    const sessionIdUse = router.query.sessionId;
    if (typeof sessionIdUse !== 'string') return;
    getSession(sessionIdUse);
  }, [getSession, router.query.sessionId]);

  return (
    <>
      <SessionModal onClose={() => setIsOpen(false)} isOpen={isOpen} />
      <FormRouter dispatch={dispatch} intl={intl} formData={state} onSubmit={onSubmit}>
        <WelcomeEO />
        <FirmInformation />
        <FirmInformationEmail />
        <FirmInformationBroker />
        <FirmInformationAffiliated />
        <AgentInformation />
        <AgentInformationDesignation />
        <AgentInformationRevoked />
        <PolicyInformation />
        <PolicyInformationClaims />
        <CommissionInformation />
        <CommissionInformationTransaction />
        <CommissionInformationMenu />
        <CommissionInformationResidential />
        <CommissionInformationCommercial />
        <CommissionInformationOther />
        <CommissionInformationSummary />
        <RiskProfile />
        <RiskProfileBanck />
        <RiskProfileReits />
        <RiskProfileFirm />
        <RiskProfileTransaction />
      </FormRouter>
    </>
  );
}

export default AppEO;
