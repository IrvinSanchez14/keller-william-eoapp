import Head from 'next/head';
import styled, { css } from 'styled-components';

import LayoutProps from './ILayout';
import Footer from 'src/components/Footer';
import Navigation from '../Navigation';

const navigationFooterItems = [
  { label: 'About', link: 'https://kellercovered.com/about' },
  {
    label: 'FAQ',
    link: 'https://intercom.help/keller-covered/en/collections/1487633-faq',
  },
  { label: 'Contact', link: 'https://kellercovered.com/contact' },
  { label: 'Legal', link: 'https://kellercovered.com/legal/#privacy' },
];
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
      {!withoutNavbar && <Navigation items={navigationFooterItems} isWhiteNav={isWhiteNav} />}
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
  );
}

Layout.defaultProps = defaultProps;

export default Layout;
