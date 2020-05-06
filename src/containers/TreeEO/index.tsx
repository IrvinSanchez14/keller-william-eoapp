import { useAppContext } from 'src/store';
import FormRouter from 'src/components/FormRouter';
import { FirmInformation } from 'src/containers/TreeEO/FirmInformation';
import { FirmInformationEmail } from './FirmInformationEmail';
import { FirmInformationAffiliated } from './FirmInformationAffiliated';
import { FirmInformationBroker } from './FirmInformationBroker';
import { AgentInformation } from './AgentInformation';
import { AgentInformationDesignation } from './AgentInformationDesignation';
import { AgentInformationRevoked } from './AgentInformationRevoked';

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
    </FormRouter>
  );
}

export default AppEO;
