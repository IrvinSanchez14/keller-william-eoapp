export interface RiskProfileProps {
  riskFactorInformationId?: number;
  isHomeWarranty?: boolean;
  isMortgageBanking?: boolean;
  isPerformServices?: boolean;
  isRepresentCommission?: boolean;
  percentageTransactions: number;
}

export interface SummaryProps {
  commissionId?: number;
  realEstate?: number;
  rawLand?: number;
  appraisals?: number;
  propertyMgmt?: number;
  ownedProperty?: number;
  total: number;
}

export interface CommissionInformationProps {
  commissionInformationId?: number;
  grossCommission: number;
  averageValue: number;
  percentageTransactions: number;
  residentialCommission: SummaryProps;
  commercialCommission: SummaryProps;
  farmRanch: number;
  auctioneering: number;
  mortgageBrokerage: number;
  totalCommission: number;
}

export interface PolicyInformationProps {
  policyInformationId?: number;
  currentCarrier: string;
  isHaveInsurance: boolean;
  insurance: {
    insuranceId?: number;
    renewalDate: string;
    deductible: number;
    limits: number;
    yearCoverage: number;
    annualPremium: number;
  };
  isHaveClaims?: boolean;
  claims?: [] | [{ claimId?: number; dateClaim: string; amountClaim: number }];
}

export interface AgentInformationProps {
  numberAgentsMoreCommission: number;
  numberAgentsLessCommission: number;
  numberAgentsNoCommission: number;
  numberAgentsSpecialDesignation: number;
  revokedLicense?: boolean;
  agentInformationI?: number;
}

export interface FirmInformationProps {
  contactName: string;
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
  firmInformationId?: number;
}

export interface DataInitalProps {
  firmInformation: FirmInformationProps;
  agentInformation?: AgentInformationProps;
  policyInformation?: PolicyInformationProps;
  commissionInformation?: CommissionInformationProps;
  riskFactorInformation?: RiskProfileProps;
}

export interface MetaDataProps {
  actualPage?: number;
  categoryPage?: string;
  progressBar?: number;
  finishProgressForm?: boolean;
}

export interface AppInitalProps {
  eoSessionId?: string;
  email: string;
  data: DataInitalProps;
  providers: Record<string, any>;
  completed: boolean;
  confirmationNumber?: string;
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
        kwMarketCenterNumber: '',
        yearEstablished: 0,
        streetAddress: '',
        suite: null,
        phoneNumber: '',
        faxNumber: '',
        email: '',
        isFirmOwned: null,
        dateLicensedBrokerAgent: '',
        dateLicensedBroker: '',
      },
      agentInformation: {
        numberAgentsMoreCommission: 0,
        numberAgentsLessCommission: 0,
        numberAgentsNoCommission: 0,
        numberAgentsSpecialDesignation: 0,
        revokedLicense: null,
      },
      policyInformation: {
        currentCarrier: '',
        isHaveInsurance: false,
        insurance: {
          renewalDate: undefined,
          deductible: undefined,
          limits: undefined,
          yearCoverage: undefined,
          annualPremium: undefined,
        },
        isHaveClaims: null,
      },
      commissionInformation: {
        grossCommission: undefined,
        averageValue: undefined,
        percentageTransactions: undefined,
        residentialCommission: {
          realEstate: undefined,
          rawLand: undefined,
          appraisals: undefined,
          propertyMgmt: undefined,
          ownedProperty: undefined,
          total: 0,
        },
        commercialCommission: {
          realEstate: undefined,
          rawLand: undefined,
          appraisals: undefined,
          propertyMgmt: undefined,
          ownedProperty: undefined,
          total: 0,
        },
        farmRanch: undefined,
        auctioneering: undefined,
        mortgageBrokerage: undefined,
        totalCommission: 0,
      },
      riskFactorInformation: {
        isHomeWarranty: null,
        isMortgageBanking: null,
        isPerformServices: null,
        isRepresentCommission: null,
        percentageTransactions: undefined,
      },
    },
    eoSessionId: '',
    providers: [],
    completed: false,
    confirmationNumber: undefined,
    metadata: {
      actualPage: 0,
      categoryPage: 'firm information',
      progressBar: 0,
      finishProgressForm: false,
    },
  };
}
