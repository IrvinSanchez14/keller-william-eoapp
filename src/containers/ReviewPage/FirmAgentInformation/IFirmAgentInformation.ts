interface FirmInformationProps {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
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
  numberAgentLessCommission: number;
  numberAgenteNoCommission: number;
  numberAgentSpecialDesignation: number;
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
