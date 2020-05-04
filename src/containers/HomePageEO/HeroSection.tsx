import React from 'react';
import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';
import theme from 'src/styles/MarketingEO/theme';
import { IeStyles } from 'src/styles/MarketingEO/utils';
import Image from 'src/components/Image';
import P from 'src/components/P';
import FirstHeroSection from 'src/pageElements/index/FirstHeroSection';
import PartnersHeroSection from 'src/pageElements/index/PartnersHeroSection';
import StepsHeroSection from 'src/pageElements/index/StepsHeroSection';

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
  margin-top: 135px;
  padding: 0 0 0 91px;
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
  @media (max-width: 1188px) {
    display: none;
  }
  // display:none;
  // ${({ customHidden }) => customHidden && `display: flex;`};
`;

const StyledPersonDogSVG = styled(SVG)`
  ${({ position }) => position && `position: ${position};`};
  ${({ top }) => top && `top: ${top};`};
  ${({ right }) => right && `right: ${right};`};
  ${({ left }) => left && `left: ${left};`};
  ${({ bottom }) => bottom && `bottom: ${bottom};`};
  ${({ height }) => height && `height: ${height};`};
  ${({ width }) => width && `width: ${width};`};
  // only phone
  // @media (max-width: 599px) {
  //   width: 100%;
  //   height: 290px;
  // }
  // // tablet portrait up
  // @media (min-width: 600px) {
  //   width: 340px;
  //   height: 200px;
  // }
  // @media (min-width: 650px) and (max-width: 700px) {
  //   width: 390px;
  //   height: 200px;
  // }
  @media (max-width: 436px) {
    width: 100%;
    height: 290px;
  }
`;

const StyledSofaContainer = styled.div`
  padding-top: 10px;
  // flex-direction: column;
  @media (max-width: 436px) {
    width: 230px;
    height: 210px;
    margin-top: 80px;
    position: absolute;
    display: flex;
  }
  @media (min-width: 437px) and (max-width: 480px) {
    width: 290px;
    margin-top: 120px;
    position: absolute;
    display: flex;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 320px;
    margin-top: 120px;
    position: absolute;
    display: flex;
  }
  @media (min-width: 561px) and (max-width: 699px) {
    width: 430px;
    margin-top: 150px;
    position: absolute;
    display: flex;
    background-size: contain;
  }
  @media (min-width: 700px) and (max-width: 800px) {
    width: 450px;
    height: 250px;
    margin-top: 160px;
    margin-left: 30px;
    position: absolute;
    display: flex;
  }
  @media (min-width: 801px) and (max-width: 862px) {
    width: 520px;
    height: 290px;
    margin-top: 130px;
    margin-left: 30px;
    position: absolute;
    display: flex;
  }
  @media (min-width: 863px) and (max-width: 899px) {
    width: 520px;
    height: 290px;
    margin-top: 250px;
    margin-left: 30px;
    position: absolute;
    display: flex;
  }
  @media (min-width: 900px) and (max-width: 999px) {
    width: 520px;
    height: 290px;
    margin-top: 230px;
    margin-left: 60px;
    position: absolute;
    display: flex;
  }
  @media (min-width: 1000px) and (max-width: 1188px) {
    width: 600px;
    height: 290px;
    margin-top: 270px;
    margin-left: 120px;
    position: absolute;
    display: flex;
  }
  @media (min-width: 1189px) {
    width: 550px;
    height: 230px;
    margin-top: 140px;
    margin-left: 120px;
    position: absolute;
    display: flex;
  }
`;

const StyledIconsContainer = styled.div`
  &::after,
  &::before {
    display: none;
  }

  &::after,
  &::before {
    display: block;
    position: absolute;
    right: 0;
    width: 100%;
    content: '';
    background-size: contain;
  }

  @media (max-width: 400px) {
    position: relative;
    min-height: 390px;
    margin-top: -102px;
    &::before {
      top: 10px;
      height: 370px;
      background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100%;
      background-size: contain;
    }
    &::after {
      top: -20px;
      right: -290px;
      height: 380px;
      width: 750px;
      background: url(../../../static/img/heroImgs/mobileCloudRight.svg) no-repeat 100%;
      background-size: contain;
    }
  }
  @media (min-width: 401px) and (max-width: 480px) {
    position: relative;
    min-height: 400px;
    margin-top: -102px;
    &::before {
      top: 10px;
      height: 370px;
      background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100%;
      background-size: contain;
    }
    &::after {
      top: -20px;
      right: -290px;
      height: 380px;
      width: 750px;
      background: url(../../../static/img/heroImgs/mobileCloudRight.svg) no-repeat 100%;
      background-size: contain;
    }
  }
  @media (min-width: 481px) and (max-width: 560px) {
    position: relative;
    min-height: 400px;
    margin-top: -102px;
    &::before {
      top: 0px;
      height: 370px;
      background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100%;
      background-size: contain;
    }
    &::after {
      top: -20px;
      right: -290px;
      height: 380px;
      width: 750px;
      background: url(../../../static/img/heroImgs/mobileCloudRight.svg) no-repeat 100%;
      background-size: contain;
    }
  }
  @media (min-width: 561px) and (max-width: 650px) {
    position: relative;
    min-height: 450px;
    margin-top: -102px;
    &::before {
      top: 0px;
      height: 370px;
      background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100%;
      background-size: contain;
    }
    &::after {
      top: -20px;
      right: -290px;
      height: 380px;
      width: 750px;
      background: url(../../../static/img/heroImgs/mobileCloudRight.svg) no-repeat 100%;
      background-size: contain;
    }
  }
  @media (min-width: 651px) and (max-width: 760px) {
    position: relative;
    min-height: 470px;
    margin-top: -102px;
    &::before {
      top: -60px;
      height: 470px;
      background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100%;
      background-size: contain;
    }
    &::after {
      top: -40px;
      right: -240px;
      height: 380px;
      width: 750px;
      background: url(../../../static/img/heroImgs/mobileCloudRight.svg) no-repeat 100%;
      background-size: contain;
    }
  }
  @media (min-width: 761px) and (max-width: 860px) {
    position: relative;
    min-height: 510px;
    margin-top: -102px;
    &::before {
      top: -90px;
      height: 510px;
      background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100%;
      background-size: contain;
    }
    &::after {
      top: -40px;
      right: -240px;
      height: 380px;
      width: 750px;
      background: url(../../../static/img/heroImgs/mobileCloudRight.svg) no-repeat 100%;
      background-size: contain;
    }
  }
  @media (min-width: 861px) and (max-width: 899px) {
    position: relative;
    min-height: 630px;
    margin-top: -102px;
    &::before {
      top: -140px;
      height: 690px;
      background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100%;
      background-size: contain;
    }
    &::after {
      top: -40px;
      right: -240px;
      height: 450px;
      width: 750px;
      background: url(../../../static/img/heroImgs/mobileCloudRight.svg) no-repeat 100%;
      background-size: contain;
    }
  }
  @media (min-width: 861px) and (max-width: 899px) {
    position: relative;
    min-height: 630px;
    margin-top: -102px;
    &::before {
      top: -140px;
      height: 690px;
      background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100%;
      background-size: contain;
    }
    &::after {
      top: -40px;
      right: -240px;
      height: 450px;
      width: 750px;
      background: url(../../../static/img/heroImgs/mobileCloudRight.svg) no-repeat 100%;
      background-size: contain;
    }
  }
  @media (min-width: 900px) and (max-width: 1000px) {
    position: relative;
    min-height: 630px;
    margin-top: -102px;
    &::before {
      top: -180px;
      height: 700px;
      background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100%;
      background-size: contain;
    }
    &::after {
      top: -80px;
      right: -290px;
      height: 500px;
      width: 750px;
      background: url(../../../static/img/heroImgs/mobileCloudRight.svg) no-repeat 100%;
      background-size: contain;
    }
  }
  @media (min-width: 1001px) and (max-width: 1188px) {
    position: relative;
    min-height: 630px;
    margin-top: -102px;
    &::before {
      top: -380px;
      height: 940px;
      background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100%;
      background-size: contain;
    }
    &::after {
      top: -480px;
      right: -360px;
      height: 1100px;
      width: 850px;
      background: url(../../../static/img/heroImgs/mobileCloudRight.svg) no-repeat 100%;
      background-size: contain;
    }
  }
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
        customHidden: true,
      },
      {
        src: '/static/img/heroImgs/desktopCloudsRight.svg',
        top: '224px',
        right: '0',
        isTabletHidden: true,
      },
      // {
      //   src: '/static/img/heroImgs/desktopCloudsLeft.svg',
      //   bottom: '237px',
      //   left: '0',
      //   isTabletHidden: true,
      // },
    ];
    return shapes.map((shape) => <StyledSVG key={shape.src} position="absolute" {...shape} />);
  };

  const StyledFirstSection = styled.div`
    padding-top: 130px;
    padding-left: 181px;
  `;

  const StyledDogContainer = styled.div`
    flex-direction: row;
    align-items: center;
    display: flex;
  `;

  const StyledTextHeader = styled.h1`
    font-size: 12px;
    font-style: 'Bold';
    letter-spacing: 2px;
    ${({ padding }) =>
      padding &&
      `
      padding: ${padding};
    `};
  `;

  const StyledTextContainer = styled.div`
    padding: 23px 0 0 0;
    ${({ padding }) => padding && `padding: ${padding}`};
  `;

  const StyledTextElement = styled.span`
    ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
    @media (min-width: 690px) {
      display: flex;
    }
    @media (max-width: 689px) {
      ${({ insertBr }) =>
        insertBr &&
        `
      &::after {
        display: block;
        content: '\';
        white-space: pre;
      }
    `}
    }
  `;

  const StyledPersonDogContainer = styled.div`
    padding: 30px;
    position: absolute;
    ${({ theme, mobilePadding }) =>
      mobilePadding &&
      theme.phone`
      padding: ${mobilePadding};
    `}
    ${({ theme, tabletPadding }) =>
      tabletPadding &&
      theme.tablet`
      padding: ${tabletPadding};
    `}
  `;

  const StyledTextBroughtContainer = styled.div`
    justify-content: center;
    display: flex;
    @media (min-width: 1189px) {
      margin-top: -140px;
    }
  `;

  const StyledTextBrought = styled.h3`
    font-size: 2.8rem;
    font-style: 'Bold';
    display: flex;
    width: 80%;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 40px 0 40px 0;
  `;

  return (
    <>
      <FirstHeroSection />
      <PartnersHeroSection />
      <StepsHeroSection />
    </>
  );
}

export default HeroSection;
