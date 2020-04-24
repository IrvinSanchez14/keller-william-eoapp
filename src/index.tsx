import React from 'react';
import { AppStateContextProvider } from './store';
import PageExample from './containers/PageExample';

function App(): JSX.Element {
  return (
    <AppStateContextProvider>
      <PageExample />
    </AppStateContextProvider>
  );
}

export default App;
