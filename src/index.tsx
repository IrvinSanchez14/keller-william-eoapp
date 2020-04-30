import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { AppStateContextProvider } from './store';
import PageExample from './containers/PageExample';
import { uiStoreInstance } from 'src/styles/FormStyle/UIStore';
import { GlobalCssOverride as GlobalCss } from 'src/styles/FormStyle/css/globalCss';
import { FirmInformation } from './containers/TreeEO/FirmInformation';
import FormRouter from './components/FormRouter';

export class App extends React.Component {
  render() {
    return (
      <AppStateContextProvider>
        <MuiThemeProvider theme={uiStoreInstance.muiTheme}>
          <CssBaseline />
          <GlobalCss />
          <FormRouter>
            <FirmInformation />
          </FormRouter>
        </MuiThemeProvider>
      </AppStateContextProvider>
    );
  }
}

export default App;
