import { css } from 'styled-components';
import breakpoints from './breakpoints';

export default Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (opt, ...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(opt, ...args)};
    }
  `;
  return acc;
}, {});
