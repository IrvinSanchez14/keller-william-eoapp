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
};
