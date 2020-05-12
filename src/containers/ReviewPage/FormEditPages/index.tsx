import { EditPageFirmInformation } from './firmInformation';
import { EditPageAgentInformation } from './agentInformation';
import { EditPagePolicyInformation } from './policyInformation';
import { EditPageCommissionInformation } from './commissionInformation';
import { EditPageRiskProfile } from './riskprofile';

interface IFormEditPages {
  nameForm: string;
}

const CONSTANTS_EDIT_PAGE = {
  FIRM_INFORMATION: 'Firm information',
  AGENT_INFORMATION: 'Agent information',
  POLICY_INFORMATION: 'Policy information',
  COMMISSION: 'Commission',
  RISK_PROFILE: 'Risk profile',
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
      case CONSTANTS_EDIT_PAGE.RISK_PROFILE: {
        return <EditPageRiskProfile />;
      }
      default:
        return nameForm;
    }
  };
  return <>{renderComponent()}</>;
}
