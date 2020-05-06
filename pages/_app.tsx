import App from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'src/styles/MarketingEO/globalStyles';
import globalTheme from 'src/styles/MarketingEO/theme';
import { uiStoreInstance } from 'src/styles/FormStyle/UIStore';
import { GlobalCssOverride as GlobalCss } from 'src/styles/FormStyle/css/globalCss';

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <MuiThemeProvider theme={uiStoreInstance.muiTheme}>
          <ThemeProvider theme={globalTheme}>
            <GlobalStyles />
            <CssBaseline />
            <GlobalCss />
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </>
    );
  }
}
