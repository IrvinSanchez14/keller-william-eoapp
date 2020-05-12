import { DefaultTheme } from 'styled-components';

export default interface ISpan {
  theme?: DefaultTheme;
  color?: string;
  letterSpacing?: string;
  margin?: string;
  children?: any;
}
