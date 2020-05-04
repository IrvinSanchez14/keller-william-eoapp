import styled, { css } from 'styled-components';

interface IProps {
  isSmall?: boolean;
  props?: any;
}

const StyledParagraph = styled.p`
  color: ${({ theme: { colors }, color }) =>
    color === 'white' ? colors.white : colors.paragraph.dark};
  font-size: 22px;
  line-height: 28px;
  ${({ margin }) => margin && `margin: ${margin};`};

  ${({ theme, mobileMargin }) => theme.phone`
    font-size: 18px;
    line-height: 24px;
    ${mobileMargin && `margin: ${mobileMargin}`};
  `};

  ${({ isSmall, theme, color }) =>
    isSmall &&
    css`
      font-size: 18px;
      line-height: 26px;
      color: ${(color === 'dark' && theme.colors.paragraph.darkGray) ||
      (color === 'light' && theme.colors.paragraph.lightGray) ||
      theme.colors.white};
      ${theme.phone`
        font-size: 16px;
        line-height: 20px;
      `};
    `};
`;

const defaultProps: IProps = {
  isSmall: false,
};

function P(Props: IProps) {
  const { isSmall, ...props } = Props;
  return <StyledParagraph isSmall={isSmall} {...props} />;
}

P.defaultProps = defaultProps;

export default P;
