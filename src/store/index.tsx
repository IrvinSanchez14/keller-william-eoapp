import React, { Dispatch, useContext } from 'react';
import AppState from './models/AppState';
import { Actions } from './reducers';

const reducer = (state: any, action: any) => {
  const getAction = Actions[action.type];
  const updateAction = getAction && getAction(state, action);
  console.group('Dispatch Action: ' + action.type);
  console.info('Prev State');
  console.table(state, 'background: #222; color: #bada55');
  console.debug('New State');
  console.table({ ...state, ...updateAction });
  console.groupEnd();

  return { ...state, ...updateAction };
};

const state = new AppState();
const initialState = state;

const dispatch: Dispatch<any> = function () {
  // any
};

export const AppStateContext = React.createContext({ state, dispatch });

export function AppStateContextProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export const useAppContext = () => useContext(AppStateContext);
