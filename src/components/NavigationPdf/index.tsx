import styled from 'styled-components';
import theme from 'src/styles/MarketingEO/theme';
import SVG from 'react-inlinesvg';
import ButtonPrimary from 'src/components/Button/ButtonPrimary';
import NavigationPdfProps from './INavigationPdf';

interface HeaderContainerProps {
  centerItem?: boolean;
  rightItem?: boolean;
  leftItem?: boolean;
  paddingLogo?: boolean;
}

interface StyledSVGProps {
  width: string;
  height: string;
}

const Header = styled.div<{ isTablet?: boolean }>`
  width: 100%;
  height: 120px;
  display: flex;
  z-index: 1000;
  background-color: transparent;
  ${({ isTablet }) =>
    isTablet && `box-shadow: 0px 1px 10px 0px #cacacb;background-color: ${theme.colors.white};`};
`;

const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  padding: 5px 5px 5px 5px;
  height: 100%;
  display: flex;
  align-items: center;
  ${({ centerItem }) => centerItem && `justify-content: center;`};
  ${({ rightItem }) => rightItem && `justify-content: flex-end;padding-right: 70px;`}
  ${({ leftItem }) =>
    leftItem &&
    `padding-left: 100px;
      @media (max-width: 908px) {
        padding-left: 60px;
      }
  `}
  ${({ paddingLogo }) => paddingLogo && `padding: 0 0 0 28px;`}
`;

const HeaderTextPage = styled.h1`
  flex-direction: row;
  display: flex;
  font-style: 'Bold';
  font-size: 15px;
  letter-spacing: 1.5px;
`;

const HeaderTextP = styled.p`
  flex-direction: row;
  display: flex;
  font-style: 'light';
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 100;
`;

const StyledSVG = styled(SVG)<StyledSVGProps>`
  ${({ height }) => height && `height: ${height};`};
  ${({ width }) => width && `width: ${width};`};
`;

export default function NavigationPdf(Props: NavigationPdfProps): React.ReactElement {
  const { isTablet, isMobile } = Props;

  return (
    <Header isTablet={isTablet}>
      {!isTablet && (
        <HeaderContainer leftItem>
          <HeaderTextPage>
            <strong>E&O APPLICATION</strong>
          </HeaderTextPage>
          <HeaderTextP>:REVIEW</HeaderTextP>
        </HeaderContainer>
      )}
      <HeaderContainer paddingLogo centerItem>
        <StyledSVG height="120px" width="188px" src="/static/img/logoKW.svg" />
      </HeaderContainer>
      <HeaderContainer rightItem></HeaderContainer>
    </Header>
  );
}
