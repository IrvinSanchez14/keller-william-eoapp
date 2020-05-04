import React from 'react';
import reactIntlUniversal from 'react-intl-universal';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { AppStateContextProvider } from './store';
import { uiStoreInstance } from 'src/styles/FormStyle/UIStore';
import { GlobalCssOverride as GlobalCss } from 'src/styles/FormStyle/css/globalCss';
import AppEO from './containers/TreeEO';

import enUS from 'assets/i18n/en-US.json';

export class App extends React.Component {
  loadLocales() {
    const locales = {
      'en-US': enUS,
    };
    return reactIntlUniversal.init({
      locales,
      currentLocale: 'en-US',
    });
  }

  componentDidMount() {
    this.loadLocales();
  }

  render() {
    return (
      <AppStateContextProvider>
        <MuiThemeProvider theme={uiStoreInstance.muiTheme}>
          <CssBaseline />
          <GlobalCss />
          <AppEO />
        </MuiThemeProvider>
      </AppStateContextProvider>
    );
  }
}

export default App;
