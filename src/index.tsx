import { Component } from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { AppStateContextProvider } from './store';
import AppEO from './containers/TreeEO';

export class App extends Component {
  render() {
    return (
      <AppStateContextProvider>
        <AppEO />
      </AppStateContextProvider>
    );
  }
}

export default App;
