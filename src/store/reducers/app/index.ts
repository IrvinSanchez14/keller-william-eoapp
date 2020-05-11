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
  FIRM_CONFIRMATION_STORE: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
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
            isHaveInsurance: action.payload.isHaveInsurance,
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
          commission: {
            ...state.app.data.commission,
            ...action.payload,
          },
        },
      },
    };
  },
  SET_TOTAL_SUMMARY_COMMISSION: (state: any, action: any) => {
    console.log('ACTION', action);
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          ...state.app.data,
          commission: {
            ...state.app.data.commission,
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
          commission: {
            ...state.app.data.commission,
            residential: {
              ...action.payload.commissionForm,
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
          commission: {
            ...state.app.data.commission,
            commercial: {
              ...action.payload.commissionForm,
              total: action.payload.total,
            },
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
  ADD_CLAIMS_POLICY_INFORMATION: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          ...state.app.data,
          policyInformation: {
            ...state.app.data.policyInformation,
            isHaveClaims: true,
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
};
