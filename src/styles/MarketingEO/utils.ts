import { css } from 'styled-components';

export const IeStyles = (...args: any) => css`
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    ${css(args)};
  }
`;
