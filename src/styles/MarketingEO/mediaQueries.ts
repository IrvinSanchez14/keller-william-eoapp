import { css, ThemedCssFunction, DefaultTheme } from 'styled-components';
import breakpoints from './breakpoints';

export default Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (opt, ...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(opt, ...args)};
    }
  `;
  return acc;
}, {}) as {
  desktopSmall: (...opts: any) => ReturnType<ThemedCssFunction<DefaultTheme>>;
  tablet: (...opts: any) => ReturnType<ThemedCssFunction<DefaultTheme>>;
  phone: (...opts: any) => ReturnType<ThemedCssFunction<DefaultTheme>>;
  phoneSmall: (...opts: any) => ReturnType<ThemedCssFunction<DefaultTheme>>;
};
