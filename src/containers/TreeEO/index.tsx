import { useEffect, useRef, useState, useCallback } from 'react';
import FormRouter from 'src/components/FormRouter';
import { FirmInformation } from 'src/containers/TreeEO/FirmInformation';
import { useAppContext } from 'src/store';
import AppState from 'src/store/models/AppState';
import ky from '../../utils/ky';
import { AgentInformation } from './AgentInformation';
import { AgentInformationDesignation } from './AgentInformationDesignation';
import { AgentInformationRevoked } from './AgentInformationRevoked';
import { FirmInformationAffiliated } from './FirmInformationAffiliated';
import { FirmInformationBroker } from './FirmInformationBroker';
import { FirmInformationEmail } from './FirmInformationEmail';
import { PolicyInformation } from './PolicyInformation';
import { PolicyInformationClaims } from './PolicyInformationClaims';
import { CommissionInformation } from './CommissionInformation';
import { CommissionInformationTransaction } from './CommissionInformationTransaction';
import { CommissionInformationResidential } from './CommissionInformationResidential';
import { CommissionInformationSummary } from './CommissionInformationSummary';
import { CommissionInformationMenu } from './CommissionInformationMenu';
import { CommissionInformationCommercial } from './CommissionInformationCommercial';
import { CommissionInformationOther } from './CommissionInformationOther';
import { RiskProfile } from './RiskProfile';
import { RiskProfileBanck } from './RiskProfileBanck';
import { RiskProfileReits } from './RiskProfieReits';
import { RiskProfileFirm } from './RiskProfileFirm';
import { RiskProfileTransaction } from './RiskProfileTransaction';
import ProviderSelection from 'src/components/ProviderSelection';
import { useRouter } from 'next/dist/client/router';
import { setAppState } from 'src/store/actions/app';
import SessionModal from 'src/components/SessionModal';

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
  const [complete, setComplete] = useState(true);
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
    if (!isLastPage(state) && complete) setComplete(false);
    if (isLastPage(state) && !complete) setComplete(true);
  }, [state, complete]);

  useEffect(() => {
    if (state.app.completed) router.push(`/confirmation-page?sessionId=${sessionId}`);
  }, [state.app.completed, sessionId, router, state.app.confirmationNumber]);

  useEffect(() => {
    const resume = router.query.resume;
    if (typeof resume !== 'string') return;
    getSession(resume);
  }, [getSession, router.query.resume]);

  if (complete) return <ProviderSelection sessionId={sessionId} />;

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
