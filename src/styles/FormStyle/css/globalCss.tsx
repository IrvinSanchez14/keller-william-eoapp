import React from 'react';
import { withStyles } from './withStyles';

const GlobalCss = withStyles({
  '@global': {
    html: {
      width: '100%',
      margin: 0,
      height: '100vh',
      backgroundColor: '#FFFFFF',
      minHeight: '100vh',
    },
    body: {
      width: '100%',
      margin: 0,
      height: '100vh',
      backgroundColor: '#FFFFFF',
      minHeight: '100%',
      overflowY: 'auto',
      fontFamily: `"Effra", "Arial", "sans-serif"`,
    },
    '#__rootDOMNode__': {
      height: '100%',
    },
  },
})(() => null);

export const GlobalCssOverride = () => {
  // @ts-ignore
  return <GlobalCss />;
};
