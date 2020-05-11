import { useAppContext } from 'src/store';
import FormRouter from 'src/components/FormRouter';
import { FirmInformation } from 'src/containers/TreeEO/FirmInformation';
import { FirmInformationEmail } from './FirmInformationEmail';
import { FirmInformationAffiliated } from './FirmInformationAffiliated';
import { FirmInformationBroker } from './FirmInformationBroker';
import { AgentInformation } from './AgentInformation';
import { AgentInformationDesignation } from './AgentInformationDesignation';
import { AgentInformationRevoked } from './AgentInformationRevoked';
import { PolicyInformation } from './PolicyInformation';
import { PolicyInformationClaims } from './PolicyInformationClaims';
import { CommissionInformation } from './CommissionInformation';
import { CommissionInformationTransaction } from './CommissionInformationTransaction';
import { CommissionInformationResidential } from './CommissionInformationResidential';
import { CommissionInformationSummary } from './CommissionInformationSummary';
import { CommissionInformationMenu } from './CommissionInformationMenu';
import { CommissionInformationCommercial } from './CommissionInformationCommercial';
import { CommissionInformationOther } from './CommissionInformationOther';

function AppEO() {
  const { dispatch, intl, state } = useAppContext();
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
    </FormRouter>
  );
}

export default AppEO;
