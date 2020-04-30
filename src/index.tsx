import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { AppStateContextProvider } from './store';
import { uiStoreInstance } from 'src/styles/FormStyle/UIStore';
import { GlobalCssOverride as GlobalCss } from 'src/styles/FormStyle/css/globalCss';
import AppEO from './containers/TreeEO';

export class App extends React.Component {
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
