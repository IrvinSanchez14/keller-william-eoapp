import { EditPageFirmInformation } from './firmInformation';
import { EditPageAgentInformation } from './agentInformation';
import { EditPagePolicyInformation } from './policyInformation';
import { EditPageCommissionInformation } from './commissionInformation';
import { EditPageRiskProfile } from './riskprofile';
import { useEffect, useState } from 'react';

interface IFormEditPages {
  nameForm: string;
  setShowModal?: any;
  isOpen?: any;
}

const CONSTANTS_EDIT_PAGE = {
  FIRM_INFORMATION: 'Firm information',
  AGENT_INFORMATION: 'Agent information',
  POLICY_INFORMATION: 'Policy information',
  COMMISSION: 'commission information',
  RISK_PROFILE: 'Risk profile',
};

export function FormsEditPage(Props: IFormEditPages) {
  const { nameForm, isOpen, setShowModal } = Props;

  const close = () => {
    setShowModal(false);
  };

  const renderComponent = () => {
    switch (nameForm) {
      case CONSTANTS_EDIT_PAGE.FIRM_INFORMATION: {
        return <EditPageFirmInformation closeModal={close} />;
      }
      case CONSTANTS_EDIT_PAGE.AGENT_INFORMATION: {
        return <EditPageAgentInformation closeModal={close} />;
      }
      case CONSTANTS_EDIT_PAGE.POLICY_INFORMATION: {
        return <EditPagePolicyInformation closeModal={close} />;
      }
      case CONSTANTS_EDIT_PAGE.COMMISSION: {
        return <EditPageCommissionInformation closeModal={close} />;
      }
      case CONSTANTS_EDIT_PAGE.RISK_PROFILE: {
        return <EditPageRiskProfile closeModal={close} />;
      }
      default:
        return nameForm;
    }
  };
  return <>{renderComponent()}</>;
}
