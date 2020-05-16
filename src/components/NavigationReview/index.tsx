import { useState } from 'react';
import styled from 'styled-components';
import theme from 'src/styles/MarketingEO/theme';
import SVG from 'react-inlinesvg';
import CoveredNowModal from '../CoveredNowModal';
import NavigationReviewProps from './INavigationReview';
import GetCoveredNowButton from '../GetCoveredNowButton';

interface HeaderContainerProps {
  centerItem?: boolean;
  rightItem?: boolean;
  leftItem?: boolean;
  paddingLogo?: boolean;
  isConfirmationPage?: boolean;
}

interface StyledSVGProps {
  width: string;
  height: string;
  isConfirmationPage?: boolean;
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
  ${({ rightItem, isConfirmationPage }) =>
    rightItem && isConfirmationPage && `justify-content: flex-end;padding-right: 89px;`}
  ${({ isConfirmationPage, theme }) => isConfirmationPage && theme.phone`padding-right: 70px;`};
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
  ${({ isConfirmationPage }) => isConfirmationPage && `padding-left: 5px;`}
  ${({ height }) => height && `height: ${height};`};
  ${({ width }) => width && `width: ${width};`};
`;

export default function NavigationReview(Props: NavigationReviewProps): JSX.Element {
  const { isTablet, isMobile, sectionPage, isConfirmationPage } = Props;
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
        <StyledSVG isConfirmationPage height="120px" width="188px" src="/static/img/logoKW.svg" />
      </HeaderContainer>
      <HeaderContainer isConfirmationPage rightItem>
        <GetCoveredNowButton isConfirmationPage onClick={toggleModal} isMobile={isMobile} />
      </HeaderContainer>
      {isModalVisible && (
        <CoveredNowModal isModalOpen={isModalVisible} closeModal={() => toggleModal()} />
      )}
    </Header>
  );
}
