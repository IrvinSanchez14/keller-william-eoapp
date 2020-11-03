interface RiskProfileDataProps {
  isHomeWarranty: boolean;
  isMortgageBanking: boolean;
  isPerformServices: boolean;
  isRepresentCommission: boolean;
  percentageTransactions: number;
}

interface Data {
  riskFactorInformation: RiskProfileDataProps;
}

export default interface RiskPRofileProps {
  data: Data;
  openEditModal?: (nameform: string) => void;
}
