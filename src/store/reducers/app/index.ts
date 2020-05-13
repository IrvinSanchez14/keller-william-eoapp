import AppState from 'src/store/models/AppState';

export interface IFormInterface {
  click: number;
}

const example: IFormInterface = {
  click: 0,
};

export const appInitialState = {
  example,
};

export const appActions: any = {
  SET_PAGE_LOCATION: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        metadata: {
          ...state.app.metadata,
          actualPage: action.payload,
        },
      },
    };
  },
  FINISH_FORM: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        metadata: {
          ...state.app.metadata,
          finishProgressForm: true,
        },
      },
    };
  },
  FIRM_CONFIRMATION_STORE: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        email: action.payload.email || state.app.email,
        data: {
          ...state.app.data,
          firmInformation: {
            ...state.app.data.firmInformation,
            ...action.payload,
          },
        },
      },
    };
  },
  SET_INSURANCE_POLICY_INFORMATION: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          ...state.app.data,
          policyInformation: {
            ...state.app.data.policyInformation,
            currentCarrier: action.payload.currentCarrier,
            isHaveInsurance: action.payload.isHaveInsuranceField,
            insurance: {
              renewalDate: action.payload.renewalDate,
              deductible: action.payload.deductible,
              limits: action.payload.limits,
              yearCoverage: action.payload.yearCoverage,
              annualPremium: action.payload.annualPremium,
            },
          },
        },
      },
    };
  },
  SET_COMMISSION_INFORMATION: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          ...state.app.data,
          commissionInformation: {
            ...state.app.data.commissionInformation,
            ...action.payload,
          },
        },
      },
    };
  },
  SET_RISK_PROFILE: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          ...state.app.data,
          riskFactorInformation: {
            ...state.app.data.riskFactorInformation,
            ...action.payload,
          },
        },
      },
    };
  },
  SET_TOTAL_SUMMARY_COMMISSION: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          ...state.app.data,
          commissionInformation: {
            ...state.app.data.commissionInformation,
            totalCommision: action.payload,
          },
        },
      },
    };
  },
  SET_COMMISSION_RESIDENTIAL: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          ...state.app.data,
          commissionInformation: {
            ...state.app.data.commissionInformation,
            residential: {
              ...action.payload.commissionForm.residential,
              total: action.payload.total,
            },
          },
        },
      },
    };
  },
  SET_COMMISSION_COMMERCIAL: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          ...state.app.data,
          commissionInformation: {
            ...state.app.data.commissionInformation,
            commercial: {
              ...action.payload.commissionForm.commercial,
              total: action.payload.total,
            },
          },
        },
      },
    };
  },
  SET_ALL_COMMISSION_INFORMATION: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          ...state.app.data,
          commissionInformation: {
            ...state.app.data.commissionInformation,
            ...action.payload,
          },
        },
      },
    };
  },
  SET_CLAIMS_POLICY_INFORMATION: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          ...state.app.data,
          policyInformation: {
            ...state.app.data.policyInformation,
            isHaveClaims: action.payload.isHaveClaims,
            claims: action.payload.claims.map((item: any) => {
              return {
                dateClaim: item.dateClaim,
                amountClaim: item.amountClaim,
              };
            }),
          },
        },
      },
    };
  },
  SET_ALL_INFORMATION_POLICY: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          ...state.app.data,
          policyInformation: {
            ...state.app.data.policyInformation,
            currentCarrier: action.payload.currentCarrier,
            isHaveInsurance: action.payload.isHaveInsuranceField,
            insurance: {
              renewalDate: action.payload.renewalDate,
              deductible: action.payload.deductible,
              limits: action.payload.limits,
              yearCoverage: action.payload.yearCoverage,
              annualPremium: action.payload.annualPremium,
            },
            isHaveClaims: action.payload.isHaveClaims,
            claims: action.payload.claims.map((item: any) => {
              return {
                dateClaim: item.dateClaim,
                amountClaim: item.amountClaim,
              };
            }),
          },
        },
      },
    };
  },
  ADD_CLAIMS_POLICY_INFORMATION: (state: any, action: any) => {
    const addArray = [{}];
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          ...state.app.data,
          policyInformation: {
            ...state.app.data.policyInformation,
            isHaveClaims: true,
            claims:
              action.payload.claims.length <= 0
                ? addArray
                : action.payload.claims.map((item: any) => {
                    return {
                      dateClaim: item.dateClaim,
                      amountClaim: item.amountClaim,
                    };
                  }),
          },
        },
      },
    };
  },
  CHANGE_STATUS_PROGRESS_BAR: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        metadata: {
          ...state.app.metadata,
          progressBar: action.payload,
        },
      },
    };
  },
  AGENT_INFORMATION_STORE: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          ...state.app.data,
          agentInformation: {
            ...state.app.data.agentInformation,
            ...action.payload,
          },
        },
      },
    };
  },
  SET_INFORMATION_PAGE: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        metadata: {
          ...state.app.metadata,
          categoryPage: action.payload.title,
          actualPage: action.payload.page,
        },
      },
    };
  },
  SET_APP_STATE: (_: AppState, action: { payload: AppState }) => {
    return action.payload;
  },
  SET_COPY_STORE_API: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        completed: action.payload.completed,
        email: action.payload.email,
        id: action.payload.id,
        data: {
          ...action.payload.data,
        },
        metadata: {
          ...action.payload.metadata,
        },
      },
    };
  },
};
