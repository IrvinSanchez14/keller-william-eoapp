export interface RiskProfileProps {
  isHomeWarranty?: boolean;
  isMortageBanking?: boolean;
  isPerformServices?: boolean;
  isRepresentCommission?: boolean;
  percentageTransactions: number;
}

export interface SummaryProps {
  realEstate?: number;
  rawLand?: number;
  appraisals?: number;
  propertyMgmt?: number;
  ownedProperty?: number;
  total: number;
}

export interface CommissionInformationProps {
  grossCommission: number;
  averageValue: number;
  percentageTransactions: number;
  residential: SummaryProps;
  commercial: SummaryProps;
  farmRanch: number;
  auctioneering: number;
  mortageBrokerage: number;
  totalCommision: number;
}

export interface PolicyInformationProps {
  currentCarrier: string;
  isHaveInsurance: boolean;
  insurance: {
    renewalDate: string;
    deductible: number;
    limits: number;
    yearCoverage: number;
    annualPremium: number;
  };
  isHaveClaims?: boolean;
  claims: [] | [{ dateClaim: string; amountClaim: number }];
}

export interface AgentInformationProps {
  numberAgentsMoreCommission: number;
  numberAgentLessCommission: number;
  numberAgenteNoCommission: number;
  numberAgentSpecialDesignation: number;
  revokedLicense?: boolean;
}

export interface FirmInformationProps {
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
  id?: string;
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
        numberAgentLessCommission: 0,
        numberAgenteNoCommission: 0,
        numberAgentSpecialDesignation: 0,
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
        claims: [{ dateClaim: '', amountClaim: null }],
      },
      commissionInformation: {
        grossCommission: undefined,
        averageValue: undefined,
        percentageTransactions: undefined,
        residential: {
          realEstate: undefined,
          rawLand: undefined,
          appraisals: undefined,
          propertyMgmt: undefined,
          ownedProperty: undefined,
          total: 0,
        },
        commercial: {
          realEstate: undefined,
          rawLand: undefined,
          appraisals: undefined,
          propertyMgmt: undefined,
          ownedProperty: undefined,
          total: 0,
        },
        farmRanch: undefined,
        auctioneering: undefined,
        mortageBrokerage: undefined,
        totalCommision: 0,
      },
      riskFactorInformation: {
        isHomeWarranty: null,
        isMortageBanking: null,
        isPerformServices: null,
        isRepresentCommission: null,
        percentageTransactions: undefined,
      },
    },
    id: undefined,
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
