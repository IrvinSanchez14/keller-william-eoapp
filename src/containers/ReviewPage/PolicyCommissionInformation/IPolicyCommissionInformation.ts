import { CommissionInformationProps } from 'src/store/models/AppState';

interface Insurance {
  renewalDate: string;
  deductible: number;
  limits: number;
  yearCoverage: number;
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
  isHaveClaims?: boolean;
  claims: Array<Claims>;
}

interface Data {
  policyInformation: PolicyInformation;
  commissionInformation: CommissionInformationProps;
}

export default interface IPolicyCommissionInformation {
  data: Data;
  openEditModal?: (nameForm: string) => void;
  isPdf?: boolean;
}
