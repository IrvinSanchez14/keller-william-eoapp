import { useState } from 'react';
import styled from 'styled-components';
import theme from 'src/styles/MarketingEO/theme';
import SVG from 'react-inlinesvg';
import ButtonPrimary from 'src/components/Button/ButtonPrimary';
import CoveredNowModal from '../CoveredNowModal';
import NavigationReviewProps from './INavigationReview';

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

const StyledButton = styled(ButtonPrimary)`
  ${({ theme }) => theme.phone`
    width: 40px;
    height: 40px;
    overflow: hidden;
    margin-left: 22px;
    i {
      transform: translateY(-3px);
    }
  `};
`;

const StyledButtonCopy = styled.span`
  margin-left: 11px;
  i {
    transform: translateY(-3px);
  }
`;

export default function NavigationReview(Props: NavigationReviewProps): JSX.Element {
  const { isTablet, isMobile, width, sectionPage } = Props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Header isTablet={isTablet}>
      {!isTablet && (
        <HeaderContainer leftItem>
          <HeaderTextPage>
            <strong>E&O APPLICATION</strong>
          </HeaderTextPage>
          <HeaderTextP>{sectionPage}</HeaderTextP>
        </HeaderContainer>
      )}
      <HeaderContainer paddingLogo centerItem>
        <StyledSVG height="120px" width="188px" src="/static/img/logoKW.svg" />
      </HeaderContainer>
      <HeaderContainer rightItem>
        <StyledButton onClick={() => toggleModal()} width="200px" color="dark">
          {isMobile ? (
            <i className="fas fa-phone" />
          ) : (
            <>
              <i style={{ fontSize: 18, marginLeft: 12 }} className="fas fa-phone" />
              <StyledButtonCopy>Get covered now</StyledButtonCopy>
            </>
          )}
        </StyledButton>
      </HeaderContainer>
      {isModalVisible && (
        <CoveredNowModal
          width={width}
          isModalOpen={isModalVisible}
          closeModal={() => toggleModal()}
        />
      )}
    </Header>
  );
}