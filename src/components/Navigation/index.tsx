import { useState, useEffect, createRef } from 'react';
import SVG from 'react-inlinesvg';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import Hamburger from './Hamburger';
import NavigationProps from './INavigation';
import Menu from '../Menu';
import CoveredNowModal from 'src/components/CoveredNowModal';
import GetCoveredNowButton from '../GetCoveredNowButton';

const Wrapper = styled.nav`
  position: absolute;
  z-index: 1000;
  background-color: transparent;
  width: 100%;
  transition: all 0.2s;
  padding-left: 91px;
  padding-right: 91px;
  ${({ theme }) => theme.desktopSmall`padding: 30px 25px 0 25px;`};
  ${({ theme }) => theme.tablet`padding-left: 30px;
  padding-right: 1px;`};
  ${({ theme }) => theme.phone`
    top: 0;
    position: fixed;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    background-color: ${theme.colors.white};
    z-index: 100;
  `};
`;

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  ${({ theme }) => theme.desktopSmall`padding: 30px 25px;`};
  ${({ theme }) => theme.phone`
    background-color: ${theme.colors.white};
    padding: 21px 25px;
    box-shadow: 0px 1px 10px 0px #cacacb;
  `};
`;

const StyledLogoContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  ${({ theme }) => theme.phone`
    position: static;
    order: -1;
    transform: translate(-5px, 0);
  `};
`;

const StyledSvg = styled(SVG)`
  height: 38px;
  width: 188px;
  cursor: pointer;
  ${({ isWhiteNav, theme }) =>
    isWhiteNav &&
    css`
      path {
        fill: ${theme.colors.white};
      }
    `};
  ${({ theme }) => theme.phone`
    display: none;
  `};
`;

const StyledImg = styled.img`
  display: none;
  cursor: pointer;
  ${({ theme }) => theme.phone`
    display: block;
    height: 28px;
    width: 138px;
  `};
`;

function Navigation(Props: NavigationProps) {
  const { items, isWhiteNav } = Props;
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const hamburger = createRef();
  const menuContainer = createRef();

  const handleClicking = (e: any) => {
    if (menuContainer.current && hamburger.current && isMenuVisible && !isMobile) {
      setIsMenuVisible(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 690);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('click', handleClicking);
    window.addEventListener('resize', handleResize);
    setIsMobile(window.innerWidth < 690);
    setWidth(window.innerWidth);
    return () => {
      window.removeEventListener('click', handleClicking);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleHamburger = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Wrapper>
        <StyledContainer>
          <Hamburger
            isWhiteNav={isWhiteNav && !isMobile}
            ref={hamburger}
            isOpen={isMenuVisible}
            toggleMenu={() => toggleHamburger()}
          />
          <Link href="/">
            <StyledLogoContainer>
              <StyledImg src="/img/logoKW.svg" alt="KWlogo" data-test-id="logo" />
              <StyledSvg
                isWhiteNav={isWhiteNav && !isMobile}
                src="/img/logoKW.svg"
                data-test-id="logo"
              />
            </StyledLogoContainer>
          </Link>
          {((isMobile && !isMenuVisible) || !isMobile) && (
            <GetCoveredNowButton isMobile={isMobile} onClick={toggleModal} />
          )}
          {(isMenuVisible || isMobile) && (
            <Menu isMenuVisible={isMenuVisible} ref={menuContainer} items={items} />
          )}
        </StyledContainer>
      </Wrapper>
      {isModalVisible && (
        <CoveredNowModal isModalOpen={isModalVisible} closeModal={() => toggleModal()} />
      )}
    </>
  );
}

export default Navigation;
