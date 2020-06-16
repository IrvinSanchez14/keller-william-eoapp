import * as Yup from 'yup';
import { removePercentageSign, removeSignsFromNumbers } from 'src/utils';

Yup.addMethod(Yup.number, 'parsePercentage', function () {
  return this.transform(function (_, originalValue) {
    return removePercentageSign(originalValue);
  });
});

Yup.addMethod(Yup.number, 'parseMoney', function () {
  return this.transform(function (_, originalValue) {
    return removeSignsFromNumbers(originalValue);
  });
});

export const fullNameValidateSchema = Yup.object().shape({
  contactName: Yup.string().required('Field is required'),
  brokerName: Yup.string().required('Field is required'),
  kwMarketCenterName: Yup.string().required('Field is required'),
  yearEstablished: Yup.number()
    .moreThan(1899, 'Year established must be greater or equal than 1900')
    .lessThan(
      new Date().getFullYear() + 1,
      `Year established must be less or equal than ${new Date().getFullYear()}`,
    )
    .required('Field is required'),
});

export const fullEmailValidateSchema = Yup.object().shape({
  streetAddress: Yup.string().required('Field is required'),
  phoneNumber: Yup.string()
    .length(14, 'Phone number must have 10 digits.')
    .required('Field is required'),
  faxNumber: Yup.string().length(14, 'Fax number must have 10 digits.').notRequired().nullable(),
  email: Yup.string().email('Email address must be a valid email').required('Field is required'),
});

export const dateBrokerValidateSchema = Yup.object().shape({
  dateLicensedBrokerAgent: Yup.string().required('Field is required'),
  dateLicensedBroker: Yup.string().required('Field is required'),
});

export const isFirmOwnedValidateSchema = Yup.object().shape({
  isFirmOwned: Yup.boolean().required('Field is required'),
});

export const editFirmInformationSchema = fullNameValidateSchema
  .concat(fullEmailValidateSchema)
  .concat(dateBrokerValidateSchema)
  .concat(isFirmOwnedValidateSchema);

export const agentLicensedValidateSchema = Yup.object().shape({
  numberAgentsMoreCommission: Yup.number().parseMoney().required('Field is required'),
  numberAgentLessCommission: Yup.number().parseMoney().required('Field is required'),
  numberAgenteNoCommission: Yup.number().parseMoney().required('Field is required'),
});

export const agentSpecialValidateSchema = Yup.object().shape({
  numberAgentSpecialDesignation: Yup.number().parseMoney().required('Field is required'),
});

export const agentRevokedValidateSchema = Yup.object().shape({
  revokedLicense: Yup.boolean().required('Field is required'),
});

export const editAgentInformationSchema = agentLicensedValidateSchema
  .concat(agentSpecialValidateSchema)
  .concat(agentRevokedValidateSchema);

export const valdiatePolicySchema = Yup.object().shape({
  isHaveInsuranceField: Yup.boolean().required('Field is required'),
  currentCarrier: Yup.string().when('isHaveInsuranceField', {
    is: false,
    then: Yup.string().required('Field is required'),
  }),
  renewalDate: Yup.string().when('isHaveInsuranceField', {
    is: false,
    then: Yup.string().required('Field is required'),
  }),
  deductible: Yup.string().when('isHaveInsuranceField', {
    is: false,
    then: Yup.string().required('Field is required'),
  }),
  limits: Yup.string().when('isHaveInsuranceField', {
    is: false,
    then: Yup.string().required('Field is required'),
  }),
  yearCoverage: Yup.string().when('isHaveInsuranceField', {
    is: false,
    then: Yup.string().required('Field is required'),
  }),
  claims: Yup.array().when('isHaveClaims', {
    is: true,
    then: Yup.array().of(
      Yup.object().shape({
        dateClaim: Yup.string().required('Field is required'),
        amountClaim: Yup.number().parseMoney().min(0).required('Field is required'),
      }),
    ),
  }),
});

export const isHaveClaimsValidateSchema = Yup.object().shape({
  isHaveClaims: Yup.boolean().required('Field is required'),
  claims: Yup.array().when('isHaveClaims', {
    is: true,
    then: Yup.array().of(
      Yup.object().shape({
        dateClaim: Yup.string().required('Field is required'),
        amountClaim: Yup.number().parseMoney().min(0).required('Field is required'),
      }),
    ),
  }),
});

export const policyInforamtionValidateSchema = Yup.object().shape({
  isHaveInsuranceField: Yup.boolean().required('Field is required'),
  currentCarrier: Yup.string().when('isHaveInsuranceField', {
    is: false,
    then: Yup.string().required('Field is required'),
  }),
  renewalDate: Yup.string().when('isHaveInsuranceField', {
    is: false,
    then: Yup.string().required('Field is required'),
  }),
  deductible: Yup.string().when('isHaveInsuranceField', {
    is: false,
    then: Yup.string().required('Field is required'),
  }),
  limits: Yup.string().when('isHaveInsuranceField', {
    is: false,
    then: Yup.string().required('Field is required'),
  }),
  yearCoverage: Yup.string().when('isHaveInsuranceField', {
    is: false,
    then: Yup.string().required('Field is required'),
  }),
});

export const commissionInformationValidateSchema = Yup.object().shape({
  grossCommission: Yup.number()
    .parseMoney()
    .required('Field is required')
    .min(0, 'Commission must be greater than or equal to 0'),
  averageValue: Yup.number()
    .required('Field is required')
    .parseMoney()
    .min(0, 'Average must be greater than or equal to 0'),
});

export const commissionTransactionValidateSchema = Yup.object().shape({
  percentageTransactions: Yup.number()
    .parsePercentage()
    .required('Field is required')
    .max(100, 'Please enter a value between 0-100')
    .positive('The value must be positive'),
});

export const commissionResidentialValidateSchema = Yup.object().shape({
  residential: Yup.object().shape({
    realEstate: Yup.number().parseMoney().nullable(),
    rawLand: Yup.number().parseMoney().nullable(),
    appraisals: Yup.number().parseMoney().nullable(),
    propertyMgmt: Yup.number().parseMoney().nullable(),
    ownedProperty: Yup.number().parseMoney().nullable(),
  }),
});

export const commissionCommercialValidateSchema = Yup.object().shape({
  commercial: Yup.object().shape({
    realEstate: Yup.number().parseMoney().nullable(),
    rawLand: Yup.number().parseMoney().nullable(),
    appraisals: Yup.number().parseMoney().nullable(),
    propertyMgmt: Yup.number().parseMoney().nullable(),
    ownedProperty: Yup.number().parseMoney().nullable(),
  }),
});

export const commissionOtherValidateSchema = Yup.object().shape({
  farmRanch: Yup.number().parseMoney().min(0, 'The value must be positive'),
  auctioneering: Yup.number().parseMoney().min(0, 'The value must be positive'),
  mortageBrokerage: Yup.number().parseMoney().min(0, 'The value must be positive'),
});

export const editCommissionInformationSchema = commissionInformationValidateSchema
  .concat(commissionTransactionValidateSchema)
  .concat(commissionResidentialValidateSchema)
  .concat(commissionCommercialValidateSchema)
  .concat(commissionOtherValidateSchema);

export const riskProfileValidateSchema = Yup.object().shape({
  isHomeWarranty: Yup.boolean().required('Field is required'),
});

export const riskProfileBanckValidateSchema = Yup.object().shape({
  isMortageBanking: Yup.boolean().required('Field is required'),
});

export const riskProfileReitsValidateSchema = Yup.object().shape({
  isPerformServices: Yup.boolean().required('Field is required'),
});

export const riskProfileFirmValidateSchema = Yup.object().shape({
  isRepresentCommission: Yup.boolean().required('Field is required'),
});

export const riskProfileTransactionValidateSchema = Yup.object().shape({
  percentageTransactions: Yup.number()
    .parsePercentage()
    .required('Field is required')
    .max(100, 'Please enter a value between 0-100')
    .min(0),
});

export const editRiskProfileSchema = riskProfileValidateSchema
  .concat(riskProfileBanckValidateSchema)
  .concat(riskProfileReitsValidateSchema)
  .concat(riskProfileFirmValidateSchema)
  .concat(riskProfileTransactionValidateSchema);

export const confirmAddressModalShema = Yup.object({
  street: Yup.string()
    .min(5, 'Field is required')
    .required('Field is required')
    .test(
      'is-valid-address',
      'Please enter a valid street',
      (value: string) => value !== undefined && /\s/.test(value.toLowerCase()),
    ),
  city: Yup.string().required('Field is required'),
  state: Yup.string().required('Field is required'),
  postalCode: Yup.string().min(5, 'Please enter a valid ZIP code').required('Field is required'),
});
