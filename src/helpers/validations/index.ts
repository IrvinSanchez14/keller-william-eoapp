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

export const agentLicensedValidateSchema = Yup.object().shape({
  numberAgentsMoreCommission: Yup.number().required('Field is required'),
  numberAgentLessCommission: Yup.number().required('Field is required'),
  numberAgenteNoCommission: Yup.number().required('Field is required'),
});

export const agentSpecialValidateSchema = Yup.object().shape({
  numberAgentSpecialDesignation: Yup.number().required('Field is required'),
});

export const policyInforamtionValidateSchema = (status: boolean) => {
  if (status) {
    return Yup.object().shape({
      isHaveClaims: Yup.boolean(),
    });
  } else {
    return Yup.object().shape({
      currentCarrier: Yup.string().required('Field is required'),
      renewalDate: Yup.string().required('Field is required'),
      deductible: Yup.string().required('Field is required'),
      limits: Yup.string().required('Field is required'),
      yearCoverage: Yup.string().required('Field is required'),
      annualPremium: Yup.string().required('Field is required'),
    });
  }
};

export const commissionInformationValidateSchema = Yup.object().shape({
  grossCommission: Yup.number().required('Field is required'),
  averageValue: Yup.number().required('Field is required'),
});

export const commissionTransactionValidateSchema = Yup.object().shape({
  percentageTransactions: Yup.number().required('Field is required'),
});

export const commissionResidentialValidateSchema = Yup.object().shape({
  realEstate: Yup.number().required('Field is required'),
  rawLand: Yup.number().required('Field is required'),
  appraisals: Yup.number().required('Field is required'),
  propertyMgmt: Yup.number().required('Field is required'),
  ownedProperty: Yup.number().required('Field is required'),
});

export const commissionOtherValidateSchema = Yup.object().shape({
  farmRanch: Yup.number().required('Field is required'),
  auctioneering: Yup.number().required('Field is required'),
  mortageBrokerage: Yup.number().required('Field is required'),
});
