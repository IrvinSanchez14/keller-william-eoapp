export interface FirmInformationProps {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
}

export interface DataInitalProps {
  firmInformation?: FirmInformationProps;
  agentInformation?: Array<any>;
  policyInformation?: Array<any>;
  commission?: Array<any>;
  riskProfile?: Array<any>;
}

export interface AppInitalProps {
  email: string;
  data: DataInitalProps;
  providers: Object;
  metadata: Array<any>;
}

export interface IAppState {
  app: AppInitalProps;
}

export default class AppState implements IAppState {
  app: AppInitalProps = {
    email: '',
    data: {},
    providers: [],
    metadata: [],
  };
}
