interface FirmInformationProps {
  contactFirstName: string;
  contactLastName: string;
  brokerName: string;
  kwMarketCenterName: string;
  kwMarketCenterNumber: string;
  yearEstablished: number;
  streetAddress: string;
  suite?: number;
  phoneNumber: string;
  faxNumber?: string;
  email: string;
  isFirmOwned?: boolean;
  dateLicensedBrokerAgent: string;
  dateLicensedBroker: string;
}

interface AgentInformationProps {
  numberAgentsMoreCommission: number;
  numberAgentsLessCommission: number;
  numberAgentsNoCommission: number;
  numberAgentsSpecialDesignation: number;
  revokedLicense: boolean | null;
}

interface DataProps {
  firmInformation: FirmInformationProps;
  agentInformation: AgentInformationProps;
}

export default interface FirmAgentInformationProps {
  openEditModal?: (nameform: string) => void;
  data: DataProps;
}
