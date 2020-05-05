import styled, { css } from 'styled-components';
import theme from 'src/styles/MarketingEO/theme';
import HProps from './IH';

const StyledHeader = styled.h1`
  ${({ color }) => color && `color: ${color}`};
  font-size: 64px;
  line-height: 66px;
  ${({ margin }) => margin && `margin: ${margin}`};

  ${({ theme, mobileMargin }) => theme.phone`
    font-size: 36px;
    line-height: 40px;
    ${mobileMargin && `margin: ${mobileMargin}`}
  `};

  ${({ as }) =>
    as === 'h2' &&
    css`
      font-size: 56px;
      line-height: 62px;
    `};
  ${({ as, theme }) =>
    as === 'h3' &&
    css`
      font-size: 48px;
      line-height: 48px;
      ${theme.phone`
        font-size: 24px;
        line-height: 28px;
      `};
    `};
  ${({ as, theme }) =>
    as === 'h4' &&
    css`
      font-size: 36px;
      line-height: 40px;
      ${theme.phone`
        font-size: 24px;
        line-height: 28px;
      `};
    `};
  ${({ theme, mobileFontSize }) =>
    mobileFontSize &&
    theme.phone`
    font-size: ${mobileFontSize}
  `};
`;

const H = ({ as, ...props }: HProps): JSX.Element => <StyledHeader as={as} {...props} />;

H.defaultProps = {
  as: 'h1',
  color: theme.colors.primaryDark,
};

export default H;
