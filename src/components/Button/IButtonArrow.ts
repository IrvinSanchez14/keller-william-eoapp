export default interface IButtonArrow {
  href: string;
  children: Array<JSX.Element> | string;
  target?: string;
  isRed?: boolean;
  isWhite?: boolean;
  customWidth?: string;
  textCenter?: boolean;
  margin?: string;
  mobileMargin?: string;
  width?: string;
  mobileWidth?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
