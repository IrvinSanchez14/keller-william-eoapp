import React from 'react';
import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';

import animations from 'src/helpers/animations';
import { IeStyles } from 'src/styles/MarketingEO/utils';
import Image from 'src/components/Image';
import P from 'src/components/P';

const StyledSection = styled.section`
  position: relative;
  min-height: 1134px;
  ${({ theme }) => theme.tablet`min-height: auto;`};
`;

const StyledContainer = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.gridWidth};
  margin: 0 auto;
  display: flex;
  justify-items: center;
  ${({ theme }) => theme.tablet`flex-direction: column;`};
`;

const StyledHeader = styled.header`
  margin-top: 216px;
  padding: 0 0 0 96px;
  position: relative;
  z-index: 1;
  ${({ theme }) => theme.desktopSmall`padding: 0 0 0 25px`};
  ${({ theme }) => theme.phone`
    padding: 0 25px;
    margin-top: 108px;
  `};
`;

const StyledText = styled(P)`
  color: ${({ theme }) => theme.colors.dark};
`;

const StyledSVG = styled(SVG)`
  ${({ position }) => position && `position: ${position};`};
  ${({ top }) => top && `top: ${top};`};
  ${({ right }) => right && `right: ${right};`};
  ${({ left }) => left && `left: ${left};`};
  ${({ bottom }) => bottom && `bottom: ${bottom};`};
  ${({ height }) => height && `height: ${height};`};
  ${({ width }) => width && `width: ${width};`};

  ${({ isTabletHidden, theme }) => isTabletHidden && theme.tablet`display: none;`};
`;

const StyledIconsContainer = styled.div`
  &::after,
  &::before {
    display: none;
  }

  ${({ theme }) => theme.tablet`
    position: relative;
    min-height: 630px;
    margin-top: -102px;

    &::after,
    &::before {
      display: block;
      position: absolute;
      right: 0;
      width: 100%;
      content: "";
      background-size: contain;
    }

    &::before {
      top: 0;
      height: 100%;
      background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100%;
    }
    &::after {
      top: 69px;
      height: 455px;
      background: url(../../../static/img/heroImgs/tabletClouds.svg) no-repeat 100%;
      }
  `};
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledTextElement = styled.span`
  @media (min-width: 600px) {
    display: block;
  }
`;

const sharedIconStyles = css`
  ${IeStyles`
    svg {
      height: 300px !important;
    }
  `};
  position: absolute;
  z-index: 1;
`;

const StyledMobilePhoneIcon = styled(Image)`
  ${sharedIconStyles};
  display: none;
  ${({ theme }) => theme.tablet`
    display: block;
    width: 256px;
    height: 450px;
    left: 50%;
    top: 132px;
    z-index: 1;
    transform: translateX(-50%);
  `};
`;

const StyledDesktopPhoneIcon = styled(Image)`
  ${sharedIconStyles};
  right: 99px;
  top: 162px;
  width: 427px;
  height: 766px;
  ${({ theme }) => theme.desktopSmall`right: -42px`};
  @media (max-width: 960px) {
    right: -36px;
    top: 145px;
    width: 355px;
  }
  ${({ theme }) => theme.tablet`display: none`};
`;

function HeroSection() {
  const renderBackgroundShapes = () => {
    const shapes = [
      {
        src: '/static/img/heroImgs/desktopShape.svg',
        top: '0',
        right: '0',
        isTabletHidden: true,
      },
      {
        src: '/static/img/heroImgs/desktopCloudsRight.svg',
        top: '267px',
        right: '0',
        isTabletHidden: true,
      },
      {
        src: '/static/img/heroImgs/desktopCloudsLeft.svg',
        bottom: '237px',
        left: '0',
        isTabletHidden: true,
      },
    ];
    return shapes.map((shape) => <StyledSVG key={shape.src} position="absolute" {...shape} />);
  };

  return (
    <StyledSection>
      <StyledContainer></StyledContainer>
      <StyledIconsContainer>{renderBackgroundShapes()}</StyledIconsContainer>
    </StyledSection>
  );
}

export default HeroSection;
