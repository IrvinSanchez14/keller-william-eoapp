import { useRouter } from 'next/dist/client/router';
import { useCallback, useEffect, useRef, useState } from 'react';
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

  const onSubmit = useCallback(async () => {
    if (sessionId || state.app.id)
      return ky
        .put(`session/${sessionId || state.app.id}`, { json: state.app })
        .json<SessionResponse>();
    const response = await ky.post('session', { json: state.app }).json<SessionResponse>();
    setIsOpen(true);
    setSessionId(response.id);
    return response;
  }, [sessionId, state]);
  return { sessionId: sessionId || state.app.id, isOpen, setIsOpen, onSubmit };
}

function AppEO() {
  const router = useRouter();
  const { dispatch, intl, state } = useAppContext();
  const { onSubmit, sessionId, isOpen, setIsOpen } = useSessionSaver(state);
  const getSession = useCallback(
    async (sessionId: string) => {
      try {
        const response = await ky.get(`session/${sessionId}`).json<SessionResponse>();
        setAppState(dispatch, { app: response });
      } catch {}
    },
    [dispatch],
  );

  useEffect(() => {
    if (state.app.confirmationNumber) router.push(`/confirmation-page?sessionId=${sessionId}`);
    else if (isLastPage(state))
      setTimeout(function () {
        router.push(`/review?sessionId=${sessionId}`);
      }, 3000);
  }, [state, sessionId, router]);

  useEffect(() => {
    const sessionId = router.query.sessionId;
    if (typeof sessionId !== 'string') return;
    getSession(sessionId);
  }, [getSession, router.query.sessionId]);

  return (
    <>
      <SessionModal onClose={() => setIsOpen(false)} isOpen={isOpen} />
      <FormRouter dispatch={dispatch} intl={intl} formData={state} onSubmit={onSubmit}>
        <WelcomeEO />
        <FirmInformation />
        <FirmInformationEmail />
        <FirmInformationAffiliated />
        <FirmInformationBroker />
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
