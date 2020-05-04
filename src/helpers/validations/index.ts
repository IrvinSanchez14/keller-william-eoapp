import * as Yup from 'yup';

export const fullNameValidateSchema = Yup.object().shape({
  contacName: Yup.string().required('Field is required'),
  brokerName: Yup.string().required('Field is required'),
  kwMarketCenterName: Yup.string().required('Field is required'),
  yearEstablished: Yup.number().required('Field is required'),
});

export const fullEmailValidateSchema = Yup.object().shape({
  streetAddress: Yup.string().required('Field is required'),
  suite: Yup.number().required('Field is required'),
  phoneNumber: Yup.number().required('Field is required'),
  faxNumber: Yup.number().required('Field is required'),
  emailAddress: Yup.string().required('Field is required'),
});

export const dateBrokerValidateSchema = Yup.object().shape({
  dateLicensedBrokerAgent: Yup.string().required('Field is required'),
  dateLicensedBroker: Yup.string().required('Field is required'),
});
