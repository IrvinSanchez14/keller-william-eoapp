import { EditPageFirmInformation } from './firmInformation';
import { EditPageAgentInformation } from './agentInformation';
import { EditPagePolicyInformation } from './policyInformation';
import { EditPageCommissionInformation } from './commissionInformation';

interface IFormEditPages {
  nameForm: string;
}

const CONSTANTS_EDIT_PAGE = {
  FIRM_INFORMATION: 'Firm information',
  AGENT_INFORMATION: 'Agent information',
  POLICY_INFORMATION: 'Policy information',
  COMMISSION: 'Commission',
};

export function FormsEditPage(Props: IFormEditPages) {
  const { nameForm } = Props;
  const renderComponent = () => {
    switch (nameForm) {
      case CONSTANTS_EDIT_PAGE.FIRM_INFORMATION: {
        return <EditPageFirmInformation />;
      }
      case CONSTANTS_EDIT_PAGE.AGENT_INFORMATION: {
        return <EditPageAgentInformation />;
      }
      case CONSTANTS_EDIT_PAGE.POLICY_INFORMATION: {
        return <EditPagePolicyInformation />;
      }
      case CONSTANTS_EDIT_PAGE.COMMISSION: {
        return <EditPageCommissionInformation />;
      }
      default:
        return nameForm;
    }
  };
  return <>{renderComponent()}</>;
}
