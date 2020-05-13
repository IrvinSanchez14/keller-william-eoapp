export default interface LayoutProps {
  children?: JSX.Element;
  withoutPositionRelative: boolean;
  title?: string;
  withoutNavbar: boolean;
  withoutFooter: boolean;
  isWhiteNav: boolean;
  isPaddingTop: boolean;
  isDark: boolean;
  agentAssetsFooter: boolean;
  shouldTrackPageWithGA: boolean;
}
