import styled, { css } from 'styled-components';
import IButtonArrow from './IButtonArrow';

interface StyledLinkProps {
  margin?: string;
  textCenter?: boolean;
  isRed?: boolean;
  isWhite?: boolean;
  customWidth?: string;
  mobileWidth?: string;
  mobileMargin?: string;
}

const StyledLink = styled.a<StyledLinkProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 15px 75px 15px 35px;
  height: 90px;
  font-family: 'Bold';
  font-size: 1.6rem;
  line-height: 1.3em;
  letter-spacing: 0.03em;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}

  ${({ textCenter }) =>
    textCenter &&
    css`
      justify-content: center;
      text-align: center;
    `}

  ${({ isRed, theme }) =>
    isRed &&
    css`
      background: ${theme.colors.mortgageRed};
    `};

  ${({ isWhite, theme }) =>
    isWhite &&
    css`
      background: ${theme.colors.white};
      color: ${theme.colors.mortgageRed};
    `};

  ${({ customWidth }) =>
    customWidth &&
    css`
      width: ${customWidth};
    `};

    ${({ theme, mobileWidth }) => theme.phone`
      font-size: 26px;
      font-weigth: bold;
      padding: 15px 8px;
      width: ${mobileWidth};
  `};

   ${({ theme, mobileMargin }) => theme.phone`
     margin: ${mobileMargin};
     font-size: 26px;
   `}

  span {
    font-size: 1.4em;
  }

  ${({ theme }) => theme.desktopSmall`
    padding: 15px 65px 15px 25px;
  `};

  ${({ theme }) => theme.tablet`
    height: 80px;
    padding: 15px 75px 15px 35px;
  `};

  ${({ theme }) => theme.phone`
    height: 70px;
    width: 380px;
    font-size: 23px;
    padding: 15px 65px 15px 25px;
  `};

  /* Phone -> X -> Phone Small */
  @media (min-width: 370px) and (max-width: 570px) {
    height: 65px;
    width: 290px;
    font-size: 16px;
    padding: 18px 60px 18px 20px;
    font-weight: normal;
  }

  ${({ theme }) => theme.phoneSmall`
    height: 60px;
    width: 260px;
    font-size: 16px;
    padding: 18px 60px 18px 20px;
    font-weight: normal;
  `};
  }
`;

const StyledIcon = styled.div<{ isWhite: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);

  ${({ theme, isWhite }) =>
    isWhite &&
    css`
      i {
        color: ${theme.colors.gray};
      }
    `};

  i {
    font-size: 22px;
  }

  ${({ theme }) => theme.phone`
    width: 65px;
    height: 65px;
    right: 10px;
    i {
      font-size: 18px;
    }
  `};

  ${({ theme }) => theme.tablet`
    width: 55px;
    height: 55px;
    right: 15px;
    i {
      font-size: 25px;
    }
  `};

  @media (min-width: 370px) and (max-width: 570px) {
    width: 50px;
    height: 50px;
    right: 10px;
    i {
      font-size: 25px;
    }
  }

  ${({ theme }) => theme.phoneSmall`
    width: 45px;
    height: 45px;
    right: 8px;
    i {
      font-size: 20px;
    }
  `};
`;

const ButtonWithArrow = ({
  href,
  target,
  isRed,
  isWhite,
  children,
  customWidth,
  textCenter,
  ...rest
}: IButtonArrow): JSX.Element => (
  <StyledLink
    href={href}
    target={target}
    isRed={isRed}
    isWhite={isWhite}
    customWidth={customWidth}
    textCenter={textCenter}
    {...rest}
  >
    <div>{children}</div>
    <StyledIcon isWhite={isWhite}>
      <i className="fa fa-arrow-right" />
    </StyledIcon>
  </StyledLink>
);

ButtonWithArrow.defaultProps = {
  target: '',
  isRed: false,
  isWhite: false,
  customWidth: null,
  textCenter: false,
};

export default ButtonWithArrow;
