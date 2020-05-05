import { useState, useEffect, useRef, useLayoutEffect, createRef } from 'react';
import SVG from 'react-inlinesvg';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import Hamburger from './Hamburger';
import NavigationProps from './INavigation';
import ButtonPrimary from '../Button/ButtonPrimary';
import Menu from '../Menu';
import CallModal from './CallModal';

const Wrapper = styled.nav`
  position: absolute;
  z-index: 1000;
  background-color: transparent;
  width: 100%;
  transition: all 0.2s;
  ${({ theme }) => theme.phone`
    top: 0;
    position: fixed;
    background-color: ${theme.colors.white};
    z-index: 100;
  `};
`;

const StyledContainer = styled.div`
  max-width: ${({ theme }) => theme.gridWidth};
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
  ${({ iswhitenav, theme }) =>
    iswhitenav &&
    css`
      path {
        fill: ${theme.colors.white};
      }
    `};
  ${({ theme }) => theme.phone`
    display: none;
  `};
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
  const { items, iswhitenav } = Props;
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
  };

  useEffect(() => {
    window.addEventListener('click', handleClicking);
    window.addEventListener('resize', handleResize);
    setIsMobile(window.innerWidth < 690);

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
            iswhitenav={iswhitenav && !isMobile}
            ref={hamburger}
            isOpen={isMenuVisible}
            toggleMenu={() => toggleHamburger()}
          />
          <Link href="/">
            <StyledLogoContainer>
              <StyledImg src="/static/img/logoKW.svg" alt="KWlogo" data-test-id="logo" />
              <StyledSvg
                iswhitenav={iswhitenav && !isMobile}
                src="/static/img/logoKW.svg"
                data-test-id="logo"
              />
            </StyledLogoContainer>
          </Link>
          {((isMobile && !isMenuVisible) || !isMobile) && (
            <StyledButton onClick={() => toggleModal()} width="200px" color="dark">
              {isMobile ? (
                <i className="fas fa-phone" />
              ) : (
                <>
                  <i className="fas fa-phone" />
                  <StyledButtonCopy>Get covered now</StyledButtonCopy>
                </>
              )}
            </StyledButton>
          )}
          {(isMenuVisible || isMobile) && (
            <Menu isMenuVisible={isMenuVisible} ref={menuContainer} items={items} />
          )}
        </StyledContainer>
      </Wrapper>
      {isModalVisible && (
        <CallModal isModalOpen={isModalVisible} closeModal={() => toggleModal()} />
      )}
    </>
  );
}

export default Navigation;
