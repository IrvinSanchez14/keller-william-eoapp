import { Component } from 'react';

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
