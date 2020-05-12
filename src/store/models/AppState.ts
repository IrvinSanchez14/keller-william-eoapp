export interface RiskProfileProps {
  isHomeWarranty: boolean;
  isMortageBanking: boolean;
  isPerformServices: boolean;
  isRepresentCommission: boolean;
  percentageTransactions: number;
}

export interface SummaryProps {
  realEstate: number;
  rawLand: number;
  appraisals: number;
  propertyMgmt: number;
  ownedProperty: number;
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
    yearCoverage: string;
    annualPremium: number;
  };
  isHaveClaims: boolean | null;
  claims: [] | [{ dateClaim: string; amountClaim: number }];
}

export interface AgentInformationProps {
  numberAgentsMoreCommission: number;
  numberAgentLessCommission: number;
  numberAgenteNoCommission: number;
  numberAgentSpecialDesignation: number;
  revokedLicense: boolean;
}

export interface FirmInformationProps {
  contactName?: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
  streetAddress: string;
  suite: number;
  phoneNumber: number;
  faxNumber: number;
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
        contactName: undefined,
        brokerName: undefined,
        kwMarketCenterName: undefined,
        yearEstablished: undefined,
        streetAddress: '',
        suite: 0,
        phoneNumber: 0,
        faxNumber: 0,
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
        revokedLicense: undefined,
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
        isHaveClaims: null,
        claims: [],
      },
      commissionInformation: {
        grossCommission: undefined,
        averageValue: undefined,
        percentageTransactions: undefined,
        residential: {
          realEstate: 0,
          rawLand: 0,
          appraisals: 0,
          propertyMgmt: 0,
          ownedProperty: 0,
          total: 0,
        },
        commercial: {
          realEstate: 0,
          rawLand: 0,
          appraisals: 0,
          propertyMgmt: 0,
          ownedProperty: 0,
          total: 0,
        },
        farmRanch: 0,
        auctioneering: 0,
        mortageBrokerage: 0,
        totalCommision: 0,
      },
      riskFactorInformation: {
        isHomeWarranty: undefined,
        isMortageBanking: undefined,
        isPerformServices: undefined,
        isRepresentCommission: undefined,
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
    },
  };
}
