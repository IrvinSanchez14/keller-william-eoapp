import App from 'next/app';
import GlobalStyles from 'src/styles/MarketingEO/globalStyles';
import globalTheme from 'src/styles/MarketingEO/theme';
import { ThemeProvider } from 'styled-components';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={globalTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
