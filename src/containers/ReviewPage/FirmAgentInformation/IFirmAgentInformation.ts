interface FirmInformationProps {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
  streetAddress: string;
  suite: number;
  phoneNumber: string | number;
  faxNumber: string | number;
  email: string;
  isFirmOwned: boolean;
  dateLicensedBrokerAgent: string;
  dateLicensedBroker: string;
}

interface AgentInformationProps {
  numberAgentsMoreCommission: number;
  numberAgentLessCommission: number;
  numberAgenteNoCommission: number;
  numberAgentSpecialDesignation: number;
  revokedLicense: boolean;
}

interface DataProps {
  firmInformation: FirmInformationProps;
  agentInformation: AgentInformationProps;
}

export default interface FirmAgentInformationProps {
  openEditModal: () => void;
  data: DataProps;
}
