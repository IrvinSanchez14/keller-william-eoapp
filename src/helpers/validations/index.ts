import * as Yup from 'yup';

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

export const isFirmOwnedFirmSchema = Yup.object().shape({
  isFirmOwned: Yup.boolean().required(),
});

export const dateBrokerValidateSchema = Yup.object().shape({
  dateLicensedBrokerAgent: Yup.string().required('Field is required'),
  dateLicensedBroker: Yup.string().required('Field is required'),
});

export const isFirmOwnedValidateSchema = Yup.object().shape({
  isFirmOwned: Yup.boolean().required('Field is required'),
});

export const agentLicensedValidateSchema = Yup.object().shape({
  numberAgentsMoreCommission: Yup.number().required('Field is required'),
  numberAgentLessCommission: Yup.number().required('Field is required'),
  numberAgenteNoCommission: Yup.number().required('Field is required'),
});

export const agentSpecialValidateSchema = Yup.object().shape({
  numberAgentSpecialDesignation: Yup.number().required('Field is required'),
});

export const agentRevokedValidateSchema = Yup.object().shape({
  revokedLicense: Yup.boolean().required('Field is required'),
});

export const valdiatePolicySchema = (status: boolean) => {
  if (status) {
    return Yup.object().shape({
      isHaveInsuranceField: Yup.boolean(),
      isHaveClaims: Yup.boolean().required('Field is required'),
      claims: Yup.array().when('isHaveClaims', {
        is: true,
        then: Yup.array().of(
          Yup.object().shape({
            dateClaim: Yup.string().required('Field is required'),
            amountClaim: Yup.number().required('Field is required'),
          }),
        ),
      }),
    });
  } else {
    return Yup.object().shape({
      currentCarrier: Yup.string().required('Field is required'),
      renewalDate: Yup.string().required('Field is required'),
      deductible: Yup.string().required('Field is required'),
      limits: Yup.string().required('Field is required'),
      yearCoverage: Yup.number().required('Field is required'),
      annualPremium: Yup.string().required('Field is required'),
      isHaveClaims: Yup.boolean().required('Field is required'),
      claims: Yup.array().when('isHaveClaims', {
        is: true,
        then: Yup.array().of(
          Yup.object().shape({
            dateClaim: Yup.string().required('Field is required'),
            amountClaim: Yup.number().required('Field is required'),
          }),
        ),
      }),
    });
  }
};

export const isHaveClaimsValidateSchema = Yup.object().shape({
  isHaveClaims: Yup.boolean().required('Field is required'),
  claims: Yup.array().when('isHaveClaims', {
    is: true,
    then: Yup.array().of(
      Yup.object().shape({
        dateClaim: Yup.string().required('Field is required'),
        amountClaim: Yup.number().required('Field is required'),
      }),
    ),
  }),
});

export const policyInforamtionValidateSchema = (status: boolean) => {
  if (status) {
    return Yup.object().shape({
      isHaveInsuranceField: Yup.boolean(),
    });
  } else {
    return Yup.object().shape({
      currentCarrier: Yup.string().required('Field is required'),
      renewalDate: Yup.string().required('Field is required'),
      deductible: Yup.string().required('Field is required'),
      limits: Yup.string().required('Field is required'),
      yearCoverage: Yup.number().required('Field is required'),
      annualPremium: Yup.string().required('Field is required'),
    });
  }
};

export const policyInforamtionClaimsSchema = Yup.object().shape({
  isHaveClaims: Yup.boolean().required(),
  claims: Yup.array().when('isHaveClaims', {
    is: true,
    then: Yup.array()
      .of(
        Yup.object().shape({
          dateClaim: Yup.string()
            .matches(/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/)
            .required(),
          amountClaim: Yup.number().required().min(0),
        }),
      )
      .min(1)
      .required(),
    otherwise: Yup.array(),
  }),
});

export const commissionInformationValidateSchema = Yup.object().shape({
  grossCommission: Yup.number()
    .required('Field is required')
    .min(0, 'Commission must be greater than or equal to 0'),
  averageValue: Yup.number()
    .required('Field is required')
    .min(0, 'Average must be greater than or equal to 0'),
});

export const commissionTransactionValidateSchema = Yup.object().shape({
  percentageTransactions: Yup.number()
    .required('Field is required')
    .max(100, 'Please enter value between 0-100')
    .positive('The value must be positive'),
});

export const commissionResidentialValidateSchema = Yup.object().shape({
  residential: Yup.object().shape({
    realEstate: Yup.number().nullable(),
    rawLand: Yup.number().nullable(),
    appraisals: Yup.number().nullable(),
    propertyMgmt: Yup.number().nullable(),
    ownedProperty: Yup.number().nullable(),
  }),
});

export const commissionCommercialValidateSchema = Yup.object().shape({
  commercial: Yup.object().shape({
    realEstate: Yup.number().nullable(),
    rawLand: Yup.number().nullable(),
    appraisals: Yup.number().nullable(),
    propertyMgmt: Yup.number().nullable(),
    ownedProperty: Yup.number().nullable(),
  }),
});

export const commissionOtherValidateSchema = Yup.object().shape({
  farmRanch: Yup.number().min(0, 'The value must be positive'),
  auctioneering: Yup.number().min(0, 'The value must be positive'),
  mortageBrokerage: Yup.number().min(0, 'The value must be positive'),
});

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
    .required('Field is required')
    .max(100, 'Please enter value between 0-100')
    .positive('The value must be positive'),
});
