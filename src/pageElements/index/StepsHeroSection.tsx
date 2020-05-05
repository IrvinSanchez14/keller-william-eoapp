import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';

import theme from 'src/styles/MarketingEO/theme';
import Span from 'src/components/Span';
import DogIcon from 'src/components/DogIcon';
import PartnerTile from 'src/components/PartnerTile';

const StyledTest = styled.div`
  @media (max-width: 690px) {
    position: absolute;
    top: 1900px;
    left: -490px;
    height: 830px;
    width: 600px;
    background: url(../../../static/img/stepsImgs/mobileBackgroundShape.svg) no-repeat 100%;
    background-size: contain;
    z-index: 1px;
  }
  @media (min-width: 691px) and (max-width: 900px) {
    position: absolute;
    top: 2400px;
    left: -490px;
    height: 830px;
    width: 600px;
    background: url(../../../static/img/stepsImgs/mobileBackgroundShape.svg) no-repeat 100%;
    background-size: contain;
    z-index: 1px;
  }
  @media (min-width: 901px) and (max-width: 1000px) {
    position: absolute;
    top: 2100px;
    left: -550px;
    height: 1510px;
    width: 800px;
    background: url(../../../static/img/stepsImgs/backgroundShape.svg) no-repeat 100%;
    background-size: contain;
    z-index: 1px;
  }
  @media (min-width: 1001px) and (max-width: 1160px) {
    position: absolute;
    top: 2000px;
    left: -550px;
    height: 1510px;
    width: 800px;
    background: url(../../../static/img/stepsImgs/backgroundShape.svg) no-repeat 100%;
    background-size: contain;
    z-index: 1px;
  }
  @media (min-width: 1161px) and (max-width: 1300px) {
    position: absolute;
    top: 1900px;
    left: -550px;
    height: 1510px;
    width: 800px;
    background: url(../../../static/img/stepsImgs/backgroundShape.svg) no-repeat 100%;
    background-size: contain;
    z-index: 1px;
  }
  @media (min-width: 1301px) {
    position: absolute;
    top: 1700px;
    left: -550px;
    height: 1710px;
    width: 800px;
    background: url(../../../static/img/stepsImgs/backgroundShape.svg) no-repeat 100%;
    background-size: contain;
    z-index: 1px;
  }
`;

const StyledSVG = styled(SVG)`
  ${({ position }) => position && `position: ${position};`};
  ${({ top }) => top && `top: ${top};`};
  ${({ right }) => right && `right: ${right};`};
  ${({ left }) => left && `left: ${left};`};
  ${({ bottom }) => bottom && `bottom: ${bottom};`};
  ${({ height }) => height && `height: ${height};`};
  ${({ width }) => width && `width: ${width};`};
  ${({ tableHeight }) => tableHeight && `height: auto;`};
  ${({ tableWidth }) => tableWidth && `width: 80%;`};
  ${({ mobileHeight }) => mobileHeight && `height: auto;`};
  ${({ mobileWidth }) => mobileWidth && `width: auto;top: 90px;`};

  ${({ isTabletHidden, theme }) => isTabletHidden && theme.tablet`display: none;`};
`;

const StyledShapeCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.grayBorders};
`;

const StyledShapeLine = styled.div<{ height?: string }>`
  width: 1px;
  ${({ height }) => height && `height: ${height};`}
  background-color: ${theme.colors.grayBorders};
`;

const StyledLine = styled.div<{ padding?: string; directionContent?: boolean }>`
  width: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ theme }) => theme && theme.tablet`display: none;`};
  ${({ directionContent }) => directionContent && `justify-content: flex-start`}
`;

const StyledStepsContainer = styled.div<{ padding?: string }>`
  position: relative;
  ${({ padding }) => padding && `padding: ${padding};`}
  max-width: ${({ theme }) => theme.gridWidth};
  //   background-color: green;
  flex-direction: row;
  display: flex;
  ${({ theme }) => theme.tablet`flex-direction: column;`};
`;

interface StyledStepSectionProps {
  margin?: string;
  height?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
}

const StyledStepSection = styled.div<StyledStepSectionProps>`
  width: 48%;
  //   max-height: 300px;
  display: flex;
  justify-content: center;
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ theme }) => theme && theme.tablet`width: 100%;`};
  ${({ theme }) => theme && theme.phone`width: 100%;`};
  ${({ theme }) => theme && theme.phoneSmall`width: 100%;`};
  ${({ height }) => height && `height: ${height}`};
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ padding }) => padding && `padding: ${padding}`};
`;

interface StyledStepPresentItemProps {
  showShadow?: boolean;
  display?: boolean;
  width?: string;
  flexDirection?: string;
}

const StyledStepPresentItem = styled.div<StyledStepPresentItemProps>`
  min-width: 180px;
  max-width: 370px;
  min-height: 90px;
  max-height: 300px;
  flex-direction: row;
  border-radius: 5px;
  background-color: ${theme.colors.white};
  ${({ showShadow }) =>
    showShadow &&
    `
    -webkit-box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
    -moz-box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
    box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
  `};
  ${({ display }) => display && `display: flex;`};
  ${({ width }) => width && `width: ${width}`};
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection}`}
  justify-content: space-around;

  ${({ theme }) => theme.tablet`
    width: 100%;
  `};
`;

const StyledButtonCheckContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  margin: 0 0 0 19px;

  ${({ theme }) =>
    theme &&
    theme.phone`
    justify-content: flex-start;
  `}
`;

const StyledStepButtonCheck = styled.div<{ margin?: string }>`
  background-color: ${theme.colors.primary};
  height: 35px;
  width: 37px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ margin }) => margin && `margin: ${margin}`}
`;

const StyledStepPresentDogIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
`;

interface StyledStepPresentBuildingProps {
  padding?: string;
  mobilePadding?: string;
  width?: string;
}

const StyledStepPresentBuilding = styled.div<StyledStepPresentBuildingProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  ${({ padding }) =>
    padding &&
    `
    padding: ${padding};
  `};
  @media (max-width: 800px) {
    ${({ mobilePadding }) => mobilePadding && `padding: ${mobilePadding};`};
  }
  ${({ width }) => width && `width: ${width}`};
  font-size: 0.8rem;
  ${({ theme }) =>
    theme &&
    theme.tablet`
    text-align: center;
    width: 100%;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
    text-align: center;
    width: 100%;
  `};
`;

interface StyledStepPresentBuildingTextProps {
  padding?: string;
  fontSize?: string;
  bold?: boolean;
}

const StyledStepPresentBuildingText = styled.div<StyledStepPresentBuildingTextProps>`
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
  ${({ color }) => color && `color: ${color}`};
  font-family: 'Regular';
`;

const StyledStepText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Regular';
  width: 100%;
  color: ${theme.colors.dark};
  ${({ theme }) =>
    theme &&
    theme.phone`
    text-align: center;
    width: 100%;
  `};
`;

const StyledStepHeader = styled.div`
  font-family: 'Bold';
  font-size: 2.9rem;
  font-weight: bold;
  width: 100%;
  color: ${theme.colors.dark};
  padding-top: 20px;
  ${({ theme }) =>
    theme &&
    theme.phone`
    font-size: 1.8rem;
    width: 100%;
  `};
`;

const StyledStepDescription = styled.div`
  font-family: 'Regular';
  font-size: 1.1rem;
  font-weight: normal;
  width: 100%;
  padding-top: 25px;
  color: gray;
`;

const StyledPartnersSuscription = styled.div`
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 10px;
  display: flex;
`;

const StyledPartnerInformation = styled.div<{ paddingTop?: string }>`
  -webkit-box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
  -moz-box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
  box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
  width: 350px;
  background-color: ${theme.colors.white};
  height: 90px;
  border-radius: 5px;
  flex-direction: row;
  display: flex;
  ${({ paddingTop }) => paddingTop && `margin-top: ${paddingTop}`};
`;

const StyledPartnerBlock = styled.div`
  width: 50%;
  justify-content: center;
  display: flex;
`;

const StyledPartnerPrice = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Light';
  color: ${theme.colors.dark};
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledPartnerMoth = styled.p`
  font-size: 0.8rem;
  font-family: 'Light';
  padding-top: 4px;
  color: ${theme.colors.dark};
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledWrapper = styled.div`
  max-width: 340px;
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  position: relative;
  border-radius: 0 0 6px 6px;
  background: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.phone`max-width: 272px;`};
`;

const StyledConffetiSVG = styled(SVG)`
  position: absolute;
  top: -72px;
  left: -60px;
  ${({ theme }) => theme.phone`
    width: 381px;
    top: -80px;
    left: -46px;
  `};

  ${({ theme, isSmall }) =>
    isSmall &&
    css`
      width: 350px;
      left: 50%;
      transform: translateX(-50%);

      ${theme.tablet`
        width: unset;
        left: -60px;
        transform: unset;
      `};
    `};
`;

const StyledTextContainer = styled.div`
  background-color: #1f1d3c;
  border-radius: 6px 6px 0 0;
  padding: 22px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 100%;
  padding: 0 40px 28px 40px;
  ${({ padding }) => padding && `padding: ${padding};`};
  ${({ width }) => width && `width: ${width};`};
  ${({ height }) => height && `height: ${height};`};
`;

const StyledT = styled.div`
  display: flex;
  max-height: 200px;
  ${({ theme }) => theme.desktopSmall`
    flex-direction: column;
    justify-content: center;
    align-center: center;
    max-height: 150px;
  `}
  ${({ theme }) => theme.tablet`
    flex-direction: column;
    justify-content: center;
    align-center: center;
    max-height: 125px;
  `}
  ${({ theme }) => theme.phone`
    flex-direction: column;
    justify-content: center;
    align-center: center;
    max-height: 80px;
  `}
  ${({ theme }) => theme.phoneSmall`
    flex-direction: column;
    justify-content: center;
    align-center: center;
    max-height: 100px;
  `}
`;

const StyledBlueContainer = styled.div`
  background-color: ${theme.colors.dark};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
`;

const StyledBlueHeaderText = styled.div`
  color: ${theme.colors.white};
  font-family: 'Bold';
  text-align: center;
  font-size: 2.9rem;
  padding-top: 80px;
  ${({ theme }) => theme.phone`
    font-size: 1.5rem;
  `}
`;

const StyledBlueInfoText = styled.div`
  color: ${theme.colors.white};
  font-family: 'Light';
  text-align: center;
  font-size: 1.2rem;
  padding-top: 20px;
  ${({ theme }) => theme.phone`
    font-size: 1.1rem;
  `}
`;

const StyledBlueButton = styled.a`
  height: 50px;
  width: 220px;
  border-radius: 25px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 1.1rem;
  font-family: 'Regular';
  margin-top: 50px;
  margin-bottom: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-decoration: none;
`;

const StyledOtherContainer = styled.div`
  padding: 40px 110px 40px 110px;
  ${({ theme }) => theme.tablet`
    padding: 20px 50px 20px 50px;
  `};
  ${({ theme }) => theme.phone`
    padding: 20px 30px 20px 30px;
  `};
  ${({ theme }) => theme.phoneSmall`
    padding: 20px 10px 20px 10px;
  `};
`;

const renderStepInformation = (numberStep: number): JSX.Element => {
  const steps = [
    {
      numberStep: 'STEP ONE',
      headerText: 'Fill out a standart application',
      descriptionStep: 'Get quotes from both of our partners',
      padding: '50px 30px',
      width: '100%',
    },
    {
      numberStep: 'STEP TWO',
      headerText: 'Enjoy exclusive benefits',
      descriptionStep:
        'Keller Covered has done the work for you and negotiated rates for you at no extra cost',
      padding: '150px 30px',
      mobilePadding: '100px 30px',
      width: '100%',
    },
    {
      numberStep: 'STEP THREE',
      headerText: 'Get a policy in as little as 24 hours',
      descriptionStep: 'Get expert support and choose the best coverage for you needs',
      padding: '0 30px',
      mobilePadding: '40px 30px',
      width: '100%',
    },
  ];
  return (
    <StyledStepPresentBuilding
      width={steps[numberStep].width}
      mobilePadding={steps[numberStep].mobilePadding}
      padding={steps[numberStep].padding}
    >
      <StyledStepText>{steps[numberStep].numberStep}</StyledStepText>
      <StyledStepHeader>{steps[numberStep].headerText}</StyledStepHeader>
      <StyledStepDescription>{steps[numberStep].descriptionStep}</StyledStepDescription>
    </StyledStepPresentBuilding>
  );
};

const StepsHeroSection = (): JSX.Element => {
  return (
    <>
      <StyledTest />
      <StyledStepsContainer padding="20px 90px 0 90px">
        <StyledStepSection>
          <StyledStepPresentItem showShadow width="270px">
            <StyledButtonCheckContainer>
              <StyledStepButtonCheck margin="-14px 20px 0 0">
                <i style={{ color: theme.colors.white, fontSize: 20 }} className="fas fa-check" />
              </StyledStepButtonCheck>
            </StyledButtonCheckContainer>
            <StyledStepPresentDogIcon>
              <StyledSVG
                key="second_dog"
                src="/static/img/dog-circle.svg"
                width="40px"
                height="40px"
                mobileWidth="250px"
              />
              <Span margin="13px 10px 0 10px">I'M HERE TO HELP</Span>
            </StyledStepPresentDogIcon>
            <StyledStepPresentBuilding>
              <StyledImg
                padding="0 28px 0 28px"
                height="110px"
                width="175px"
                alt="group"
                src="/static/img/Group.png"
              />
              <StyledStepPresentBuildingText
                color={theme.colors.primary}
                padding="10px 0 6px 0"
                fontSize="1.0rem"
              >
                Commercial
              </StyledStepPresentBuildingText>
            </StyledStepPresentBuilding>
          </StyledStepPresentItem>
        </StyledStepSection>
        <StyledLine>
          <StyledShapeCircle />
          <StyledShapeLine height="215px" />
        </StyledLine>
        <StyledStepSection>{renderStepInformation(0)}</StyledStepSection>
      </StyledStepsContainer>
      <StyledStepsContainer padding="0 90px 0 90px">
        <StyledStepSection>
          <StyledPartnersSuscription>
            <StyledPartnerInformation>
              <StyledPartnerBlock>
                <StyledSVG
                  key="amwins_logo"
                  src="/static/img/AmWins_Logo.svg"
                  width="130px"
                  height="90px"
                  mobileWidth="130px"
                />
              </StyledPartnerBlock>
              <StyledPartnerBlock>
                <StyledPartnerPrice>$843</StyledPartnerPrice>
                <StyledPartnerMoth>/moth</StyledPartnerMoth>
              </StyledPartnerBlock>
            </StyledPartnerInformation>
            <StyledPartnerInformation paddingTop="20px">
              <StyledPartnerBlock>
                <StyledSVG
                  key="amwins_logo"
                  src="/static/img/PearlInsurance_Logo.svg"
                  width="130px"
                  height="90px"
                  mobileWidth="130px"
                />
              </StyledPartnerBlock>
              <StyledPartnerBlock>
                <StyledPartnerPrice>$1,500</StyledPartnerPrice>
                <StyledPartnerMoth>/moth</StyledPartnerMoth>
              </StyledPartnerBlock>
              <StyledStepButtonCheck margin="29px -17px 0 0;">
                <i style={{ color: theme.colors.white, fontSize: 20 }} className="fas fa-check" />
              </StyledStepButtonCheck>
            </StyledPartnerInformation>
          </StyledPartnersSuscription>
        </StyledStepSection>
        <StyledLine directionContent>
          <StyledShapeLine height="150px" />
          <StyledShapeCircle />
          <StyledShapeLine height="400px" />
        </StyledLine>
        <StyledStepSection>{renderStepInformation(1)}</StyledStepSection>
      </StyledStepsContainer>
      <StyledStepsContainer padding="0 90px 0 90px">
        <StyledStepSection>
          <StyledWrapper>
            <StyledConffetiSVG src="/static/img/stepsImgs/confetti.svg" />
            <StyledTextContainer>
              <DogIcon size="40px" mobileSize="34px" />
              <Span margin="10px 0 0 0" color="white" letterSpacing="1px">
                CONGRATS, YOU&apos;RE INSURE!
              </Span>
            </StyledTextContainer>
            <PartnerTile price="$1,500" />
            <StyledImg alt="signature" src="/static/img/stepsImgs/signature.png" />
          </StyledWrapper>
        </StyledStepSection>
        <StyledLine directionContent>
          <StyledShapeLine height="210px" />
          <StyledShapeCircle />
        </StyledLine>
        <StyledStepSection>{renderStepInformation(2)}</StyledStepSection>
      </StyledStepsContainer>
      <StyledOtherContainer>
        <StyledT>
          <StyledSVG
            key="second_dog"
            src="/static/img/section.svg"
            width="80%"
            height="400px"
            tableWidth="90%"
            tableHeight="100px"
            mobileWidth="80%"
            mobileHeight="470px"
          />
        </StyledT>
        <StyledBlueContainer>
          <StyledBlueHeaderText>Let&apos;s get you covered</StyledBlueHeaderText>
          <StyledBlueInfoText>A new way to shop for E&O Insurance!</StyledBlueInfoText>
          <StyledBlueButton href="/eoapplication">Get started now</StyledBlueButton>
        </StyledBlueContainer>
      </StyledOtherContainer>
    </>
  );
};

export default StepsHeroSection;
