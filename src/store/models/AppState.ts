export interface PolicyInformationProps {
  currentCarrier: string;
  isHaveInsurance: boolean;
  insurance: {
    renewalDate: string;
    deductible: number;
    limits: number;
    yearCoverage: string;
    annualPremium: number;
  };
  isHaveClaims: boolean;
  claims: [
    {
      dateClaim: string;
      amountClaim: number;
    },
  ];
}

export interface AgentInformationProps {
  numberAgentsMoreCommission: number;
  numberAgentLessCommission: number;
  numberAgenteNoCommission: number;
  numberAgentSpecialDesignation: number;
  revokedLicense: boolean;
  currentCarrier: string;
  isHaveInsurance: boolean;
}

export interface FirmInformationProps {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
  streetAddress: string;
  suite: number;
  phoneNumber: number;
  faxNumber: number;
  emailAddress: string;
  isFirmOwned: boolean;
  dateLicensedBrokerAgent: string;
  dateLicensedBroker: string;
}

export interface DataInitalProps {
  firmInformation: FirmInformationProps;
  agentInformation?: AgentInformationProps;
  policyInformation?: PolicyInformationProps;
  commission?: Array<any>;
  riskProfile?: Array<any>;
}

export interface MetaDataProps {
  actualPage?: number;
  categoryPage?: string;
  progressBar?: number;
}

export interface AppInitalProps {
  email: string;
  data: DataInitalProps;
  providers: Record<string, any>;
  metadata: MetaDataProps;
}

export interface IAppState {
  app: AppInitalProps;
}

export default class AppState implements IAppState {
  app: AppInitalProps = {
    email: '',
    data: {
      firmInformation: {
        contactName: '',
        brokerName: '',
        kwMarketCenterName: '',
        yearEstablished: 0,
        streetAddress: '',
        suite: 0,
        phoneNumber: 0,
        faxNumber: 0,
        emailAddress: '',
        isFirmOwned: false,
        dateLicensedBrokerAgent: '',
        dateLicensedBroker: '',
      },
      agentInformation: {
        numberAgentsMoreCommission: 0,
        numberAgentLessCommission: 0,
        numberAgenteNoCommission: 0,
        numberAgentSpecialDesignation: 0,
        revokedLicense: false,
        currentCarrier: '',
        isHaveInsurance: false,
      },
      policyInformation: {
        currentCarrier: '',
        isHaveInsurance: false,
        insurance: {
          renewalDate: '',
          deductible: 0,
          limits: 0,
          yearCoverage: '',
          annualPremium: 0,
        },
        isHaveClaims: undefined,
        claims: [
          {
            dateClaim: '',
            amountClaim: undefined,
          },
        ],
      },
    },
    providers: [],
    metadata: {
      actualPage: 0,
      categoryPage: 'firm information',
      progressBar: 5,
    },
  };
}
