import styled, { keyframes, css } from 'styled-components';
import ButtonPrimaryProps from './IButtonPrimary';

interface ButtonStylesProps {
  width?: string;
  height?: string;
  margin?: string;
  as?: any;
  isInverted?: boolean;
  color?: string;
  customColor?: string;
  mobileWidth?: string;
  mobileMargin?: string;
}

export const buttonStyles = css<ButtonStylesProps>`
  border: none;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  padding: 20px 8px;
  border-radius: 30px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-weight: 400;
  cursor: pointer;
  ${({ margin }) => margin && `margin: ${margin};`};
  ${({ as }) => as === 'a' && 'text-decoration: none;'};
  color: ${({ isInverted, theme }) => (isInverted ? theme.colors.primary : theme.colors.white)};
  background: ${({ isInverted, theme, color, customColor }) =>
    (color === 'dark' && theme.colors.dark) ||
    (isInverted ? theme.colors.white : theme.colors[customColor || 'primary'])};

  &:disabled {
    background: ${({ theme }) => theme.colors.grayLight};
    color: ${({ theme }) => theme.colors.paragraph.darkGray};
    cursor: not-allowed;
  }

  ${({ theme, mobileWidth }) => theme.phone`
      font-size: 16px;
      padding: 15px 8px;
      width: ${mobileWidth};
  `};
  ${({ theme, mobileMargin }) => mobileMargin && theme.phone`margin: ${mobileMargin}`};
`;

const rotate = keyframes`
  0% {
    opacity: 0.2;
    width: 5px;
    height: 5px;
  }
  20% {
    opacity: 1;
    width: 11px;
    height: 11px;
  }
  100% {
    opacity: 0.2;
    width: 5px;
    height: 5px;
  }
`;

const StyledLoader = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  & i {
    animation-name: ${rotate};
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    background: white;
    height: 2px;
    width: 2px;
    border-radius: 50%;
    margin-right: 8px;
    transform: translateY(6px);
  }

  & i:nth-child(2) {
    animation-delay: 0.2s;
  }

  & i:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const StyledButton = styled.button`
  ${buttonStyles};
`;

const defaultProps: ButtonPrimaryProps = {
  isInverted: false,
  color: '',
  width: '225px',
  isLoading: false,
};

function ButtonPrimary(props: ButtonPrimaryProps & ButtonStylesProps) {
  const { isInverted, color, width, children, isLoading, ...rest } = props;
  return (
    <StyledButton isInverted={isInverted} width={width} color={color} {...rest}>
      {isLoading ? (
        <StyledLoader>
          <i />
          <i />
          <i />
        </StyledLoader>
      ) : (
        children
      )}
    </StyledButton>
  );
}

ButtonPrimary.defaultProps = defaultProps;

export default ButtonPrimary;
