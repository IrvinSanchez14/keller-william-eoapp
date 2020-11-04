import { UIStore } from 'src/styles/FormStyle/UIStore';

export type IntlProps = {
  get: (key: string, params?: any) => string;
  getHTML: (key: string, params?: any) => string;
};

export interface IAppStoreProps {
  _key?: any;
  intl?: IntlProps;
  ui?: UIStore;
  session?: any;
  property?: any;
  agent?: any;
  quotes?: any;
  error?: any;
  stepper?: any;
  dispatch?: any;
  classes?: any;
  formData?: any;
  sessionId?: any;
}

export type FormikProps = {
  errors?: any;
  touched?: any;
  values: any;
  setFieldTouched: any;
};
