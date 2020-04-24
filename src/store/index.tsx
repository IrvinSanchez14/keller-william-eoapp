import React, { Dispatch, useContext } from 'react';
import AppState from './models/AppState';
import { Actions } from './reducers';
import { useConsoleLogging } from 'src/helpers/logging';

const reducer = (state: any, action: any) => {
	const getAction = Actions[action.type];
	const log = useConsoleLogging();
	const updateAction = getAction && getAction(state, action);
	console.group('Dispatch Action: ' + action.type);
	log({ logLevel: 'info', message: 'Prev State' });
	console.table(state, 'background: #222; color: #bada55');
	log({ logLevel: 'debug', message: 'New State' });
	console.table({ ...state, ...updateAction });
	console.groupEnd();

	return { ...state, ...updateAction };
};

let state = new AppState();
let initialState = state;

let dispatch: Dispatch<any> = function () {};
export const AppStateContext = React.createContext({ state, dispatch });

export function AppStateContextProvider({ children }: any) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const value = { state, dispatch };
	return (
		<AppStateContext.Provider value={value}>
			{children}
		</AppStateContext.Provider>
	);
}

export const useAppContext = () => useContext(AppStateContext);
