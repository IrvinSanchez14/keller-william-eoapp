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
  agentInformation?: Array<any>;
  policyInformation?: Array<any>;
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
  providers: Object;
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
    },
    providers: [],
    metadata: {
      actualPage: 0,
      categoryPage: 'firm information',
      progressBar: 5,
    },
  };
}
