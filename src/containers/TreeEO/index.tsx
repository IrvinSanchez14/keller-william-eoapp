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

type SessionResponse = AppState['app'];

function isLastPage(state: AppState) {
  return state.app.metadata.actualPage === 21;
}

function useSessionSaver(state: AppState) {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string>();
  const [creating, setCreating] = useState(false);
  const page = useRef(state.app.metadata.actualPage);

  useEffect(() => {
    const actualPage = state.app.metadata.actualPage;
    if (!state.app.email || creating || page.current === actualPage) return;
    page.current = actualPage;
    if (sessionId || state.app.id)
      return void ky.put(`session/${sessionId || state.app.id}`, { json: state.app });
    const createSession = async (state: AppState) => {
      try {
        setIsOpen(true);
        const response = await ky.post('session', { json: state.app }).json<SessionResponse>();
        setSessionId(response.id);
      } finally {
        setCreating(false);
      }
    };
    setCreating(true);
    createSession(state);
  }, [sessionId, state, creating]);
  return { sessionId: sessionId || state.app.id, isOpen, setIsOpen };
}

function AppEO() {
  const router = useRouter();
  const { dispatch, intl, state } = useAppContext();
  const { sessionId, isOpen, setIsOpen } = useSessionSaver(state);
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
    else if (isLastPage(state)) router.push(`/review?sessionId=${sessionId}`);
  }, [state, sessionId, router]);

  useEffect(() => {
    const sessionId = router.query.sessionId;
    if (typeof sessionId !== 'string') return;
    getSession(sessionId);
  }, [getSession, router.query.sessionId]);

  return (
    <>
      <SessionModal onClose={() => setIsOpen(false)} isOpen={isOpen} />
      <FormRouter>
        <FirmInformation dispatch={dispatch} intl={intl} formData={state} />
        <FirmInformationEmail dispatch={dispatch} intl={intl} formData={state} />
        <FirmInformationAffiliated dispatch={dispatch} intl={intl} formData={state} />
        <FirmInformationBroker dispatch={dispatch} intl={intl} formData={state} />
        <AgentInformation dispatch={dispatch} intl={intl} formData={state} />
        <AgentInformationDesignation dispatch={dispatch} intl={intl} formData={state} />
        <AgentInformationRevoked dispatch={dispatch} intl={intl} formData={state} />
        <PolicyInformation dispatch={dispatch} intl={intl} formData={state} />
        <PolicyInformationClaims dispatch={dispatch} intl={intl} formData={state} />
        <CommissionInformation dispatch={dispatch} intl={intl} formData={state} />
        <CommissionInformationTransaction dispatch={dispatch} intl={intl} formData={state} />
        <CommissionInformationMenu dispatch={dispatch} intl={intl} formData={state} />
        <CommissionInformationResidential dispatch={dispatch} intl={intl} formData={state} />
        <CommissionInformationCommercial dispatch={dispatch} intl={intl} formData={state} />
        <CommissionInformationOther dispatch={dispatch} intl={intl} formData={state} />
        <CommissionInformationSummary dispatch={dispatch} intl={intl} formData={state} />
        <RiskProfile dispatch={dispatch} intl={intl} formData={state} />
        <RiskProfileBanck dispatch={dispatch} intl={intl} formData={state} />
        <RiskProfileReits dispatch={dispatch} intl={intl} formData={state} />
        <RiskProfileFirm dispatch={dispatch} intl={intl} formData={state} />
        <RiskProfileTransaction dispatch={dispatch} intl={intl} formData={state} />
      </FormRouter>
    </>
  );
}

export default AppEO;
