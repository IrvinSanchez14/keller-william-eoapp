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
  FIRM_CONFIRMATION_STORE: (state: any, action: any) => {
    return {
      ...state,
      app: {
        ...state.app,
        data: {
          firmInformation: action.payload,
        },
      },
    };
  },
};
