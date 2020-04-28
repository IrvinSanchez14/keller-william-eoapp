import React from 'react';
import Head from 'next/head';
import styled, { ThemeProvider, css } from 'styled-components';

import globalTheme from 'src/styles/MarketingEO/theme';
import GlobalStyles from 'src/styles/MarketingEO/globalStyles';
import LayoutProps from './ILayout';
import Footer from 'src/components/Footer';
import Navigation from '../Navigation';

const navigationFooterItems = ['About', 'FAQ', 'Contact', 'Legal', 'Marketing'];
const navigationItems = ['About', 'FAQ', 'Contact', 'Legal'];

const Wrapper = styled.main`
  position: relative;
  ${({ isPaddingTop }) => isPaddingTop && 'padding-top: 100px;'};
  ${({ isDark }) =>
    isDark &&
    css`
      background: ${({ theme }) => theme.colors.dark};
    `};
  ${(props) =>
    !props.withoutPositionRelative &&
    css`
      overflow: hidden;
    `};
`;

const defaultProps: LayoutProps = {
  withoutPositionRelative: false,
  title: null,
  withoutNavbar: false,
  withoutFooter: false,
  isWhiteNav: false,
  isPaddingTop: false,
  isDark: false,
  agentAssetsFooter: false,
  shouldTrackPageWithGA: false,
};

function Layout(Props: LayoutProps) {
  const {
    children,
    withoutPositionRelative,
    withoutNavbar,
    withoutFooter,
    isWhiteNav,
    isPaddingTop,
    isDark,
    agentAssetsFooter,
  } = Props;
  return (
    <>
      <Head>
        <title>Keller Covered</title>
      </Head>
      <ThemeProvider theme={globalTheme}>
        <>
          <GlobalStyles />
          {!withoutNavbar && <Navigation items={navigationItems} isWhiteNav={isWhiteNav} />}
          <Wrapper
            isPaddingTop={isPaddingTop}
            withoutPositionRelative={withoutPositionRelative}
            isDark={isDark}
          >
            {children}
          </Wrapper>
          {!withoutFooter && (
            <Footer agentAssetsFooter={agentAssetsFooter} linkItems={navigationFooterItems} />
          )}
        </>
      </ThemeProvider>
    </>
  );
}

Layout.defaultProps = defaultProps;

export default Layout;
