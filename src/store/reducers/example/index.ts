export interface IFormInterface {
	click: number;
}

const example: IFormInterface = {
	click: 0,
};

export const exampleInitialState = {
	example,
};

export const examplesActions: any = {
	EXAMPLE_ACTION_CONTEXT: (state: any, action: any) => {
		return {
			...state,
			Example: action.payload,
		};
	},
};
