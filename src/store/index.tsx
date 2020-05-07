import { createContext, useReducer, Dispatch, useContext } from 'react';
import reactIntlUniversal from 'react-intl-universal';

import AppState from './models/AppState';
import { Actions } from './reducers';

import enUS from 'assets/i18n/en-US.json';

const server: string = 'dev';

const reducer = (state: any, action: any) => {
  const getAction = Actions[action.type];
  const updateAction = getAction && getAction(state, action);
  if (server === 'dev') {
    console.group('Dispatch Action: ' + action.type);
    console.info('Prev State');
    console.table(state, 'background: #222; color: #bada55');
    console.debug('New State');
    console.table({ ...state, ...updateAction });
    console.groupEnd();
  }
  return { ...state, ...updateAction };
};

const state = new AppState();
const initialState = state;

const dispatch: Dispatch<any> = function () {
  // any
};

const intl = reactIntlUniversal;

function loadLocales() {
  const locales = {
    'en-US': enUS,
  };
  return reactIntlUniversal.init({
    locales,
    currentLocale: 'en-US',
  });
}

export const AppStateContext = createContext({ state, dispatch, intl });

export function AppStateContextProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch, intl };
  loadLocales();
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export const useAppContext = () => useContext(AppStateContext);
