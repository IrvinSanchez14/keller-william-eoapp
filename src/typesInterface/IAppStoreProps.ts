import { UIStore } from 'src/styles/FormStyle/UIStore';

export type IntlProps = {
  get: (key: string, params?: any) => string;
  getHTML: (key: string, params?: any) => string;
};

export interface IAppStoreProps {
  intl?: IntlProps;
  ui?: UIStore;
  session?: any;
  property?: any;
  agent?: any;
  quotes?: any;
  error?: any;
  stepper?: any;
  dispatch?: any;
}
