interface Insurance {
  renewalDate: string;
  deductible: number;
  limits: number;
  yearCoverage: string;
  annualPremium: number;
}

interface Claims {
  dateClaim: string;
  amountClaim: number;
}

interface PolicyInformation {
  currentCarrier: string;
  isHaveInsurance: boolean;
  insurance: Insurance;
  isHaveClaims: boolean;
  claims: Array<Claims>;
}

interface SumaryDefault {
  realEstate: number;
  rawLand: number;
  appraisals: number;
  propertyMgmt: number;
  ownedProperty: number;
}

interface Residential extends SumaryDefault {
  residentialTotal: number;
}

interface Comercial extends SumaryDefault {
  commercialTotal: number;
}

interface Sumary {
  residential: Residential;
  commercial: Comercial;
}

interface Commission {
  grossCommission: number;
  averageValue: number;
  percentageTransactions: number;
  summary: Sumary;
  farmRanch: number;
  auctioneering: number;
  mortageBrokerage: number;
  totalCommision: number;
}

interface Data {
  policyInformation: PolicyInformation;
  commission: Commission;
}

export default interface IPolicyCommissionInformation {
  data: Data;
  openEditModal: () => void;
}
