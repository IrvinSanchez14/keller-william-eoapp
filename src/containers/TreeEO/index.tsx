import { useEffect, useRef, useState } from 'react';
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

type SessionCreateResponse = AppState['app'] & {
  id: string;
  completed: boolean;
  confirmationNumber: string;
};

function useSessionSaver(state: AppState) {
  const [sessionId, setSessionId] = useState<string>();
  const [creating, setCreating] = useState(false);
  const page = useRef(state.app.metadata.actualPage);

  useEffect(() => {
    const actualPage = state.app.metadata.actualPage;
    if (!state.app.email || creating || page.current === actualPage) return;
    page.current = actualPage;
    if (sessionId) return void ky.put(`session/${sessionId}`, { json: state.app });
    const createSession = async (state: AppState) => {
      try {
        const response = await ky
          .post('session', { json: state.app })
          .json<SessionCreateResponse>();
        setSessionId(response.id);
      } finally {
        setCreating(false);
      }
    };
    setCreating(true);
    createSession(state);
  }, [sessionId, state, creating]);
  return { sessionId };
}

function AppEO() {
  const { dispatch, intl, state } = useAppContext();
  useSessionSaver(state);

  return (
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
  );
}

export default AppEO;
