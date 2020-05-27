import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';

import theme from 'src/styles/MarketingEO/theme';
import Span from 'src/components/Span';
import DogIcon from 'src/components/DogIcon';
import PartnerTile from 'src/components/PartnerTile';

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
  width: 10px;
  height: 10px;
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

const StyledStepsContainer = styled.div<{
  padding?: string;
  mobilePadding?: string;
  tabletPadding?: string;
}>`
  position: relative;
  flex-direction: row;
  display: flex;
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ theme }) => theme.tablet`flex-direction: column;`};

  ${({ theme }) => theme.phone`
    padding: 87px 51px 0 50px;
  `};
  ${({ mobilePadding, theme }) => mobilePadding && theme.phone`padding: ${mobilePadding};`};
  ${({ tabletPadding, theme }) => tabletPadding && theme.tablet`padding: ${tabletPadding};`};
`;

interface StyledStepSectionProps {
  margin?: string;
  height?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  mobileMargin?: string;
}

const StyledStepSection = styled.div<StyledStepSectionProps>`
  width: 48%;
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
  ${({ theme, mobileMargin }) => mobileMargin && theme.phone`margin: ${mobileMargin}`};
`;

interface StyledStepPresentItemProps {
  showShadow?: boolean;
  display?: boolean;
  width?: string;
  flexDirection?: string;
}

const StyledStepPresentItem = styled.div<StyledStepPresentItemProps>`
  min-width: 180px;
  max-width: 370px
  min-height: 90px;
  max-height: 300px;
  flex-direction: row;
  border-radius: 5px;
  background-color: ${theme.colors.white};
  justify-content: space-around;
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
  ${({ theme }) => theme.tablet`
    width: 100%;
    max-width: 274px;
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
  background-color: ${({ theme }) => theme.colors.redCheck};
  height: 45px;
  width: 45px;
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
  paddingTop?: number;
}

const StyledStepPresentBuilding = styled.div<StyledStepPresentBuildingProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  ${({ paddingTop }) =>
    paddingTop &&
    `
    padding-top: ${paddingTop}px;
  `}
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
    padding-top: 45px;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
    text-align: center;
    width: 100%;
    padding-top: 0px;
  `};
`;

interface StyledStepPresentBuildingTextProps {
  padding?: string;
  fontSize?: string;
  bold?: boolean;
}

const StyledStepPresentBuildingText = styled.h1<StyledStepPresentBuildingTextProps>`
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 20px;
  font-size: 16px;
  line-height: 23px;
  // ${({ padding }) => padding && `padding: ${padding}`};
  // ${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
  // ${({ color }) => color && `color: ${color}`};
  // font-family: 'Regular';
`;

const StyledStepText = styled.h1`
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: bold;
  font-family: 'Regular';
  width: 100%;
  color: ${theme.colors.darkBlue};
  ${({ theme }) =>
    theme &&
    theme.phone`
    font-size: 11px;
    line-height: 14px;
    letter-spacing: 2px;
    text-align: center;
    width: 100%;
  `};
`;

const StyledStepHeader = styled.h1<{ insertBr?: boolean }>`
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -1px;
  width: 100%;
  color: ${theme.colors.darkBlue};
  padding-top: 20px;
  ${({ theme }) =>
    theme &&
    theme.phone`
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.5px;
    width: 100%;
  `};
  ${({ insertBr, theme }) =>
    insertBr &&
    theme.tablet`
    max-width: 420px;
  `};
  ${({ theme }) =>
    theme.tablet`
    max-width: 490px;
  `};
  ${({ insertBr, theme }) =>
    insertBr &&
    theme.phone`
    max-width: 190px;
  `};
`;

const StyledStepDescription = styled.span`
  width: 100%;
  padding-top: 25px;
  font-size: 18px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.paragraph.darkGray};
  ${({ theme }) =>
    theme.tablet`
    max-width: 355px;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
    font-size: 16px;
    line-height: 20px;
  `};
`;

const StyledPartnersSuscription = styled.div`
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 415px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const StyledPartnerInformation = styled.div<{ paddingTop?: string }>`
  ${({ paddingTop }) => paddingTop && `margin-top: ${paddingTop}`};
  -webkit-box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
  -moz-box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
  box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
  background-color: ${theme.colors.white};
  height: 90px;
  // min-width: 180px;
  // max-width: 370px;
  width: 370px;
  border-radius: 5px;
  flex-direction: row;
  display: flex;
  ${({ theme }) => theme.tablet`
    max-width: 100%;
  `};
`;

const StyledPartnerBlock = styled.div`
  width: 50%;
  justify-content: center;
  display: flex;
`;

const StyledPartnerPrice = styled.p`
  font-size: 21.57px;
  line-height: 23.23px;
  letter-spacing: 0;
  ${({ theme }) =>
    theme &&
    theme.phone`
    font-size: 17px;
    line-height: 23px;
  `};
  color: ${theme.colors.dark};
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledPartnerMoth = styled.p`
  font-size: 11.61px;
  line-height: 9.12px;
  letter-spacing: 0;
  ${({ theme }) =>
    theme &&
    theme.phone`
    font-size: 9px;
    line-height: 9px;
  `};
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

interface StyledImg {
  padding?: string;
  width?: string;
  height?: string;
}

const StyledImg = styled.img<StyledImg>`
  width: 100%;
  padding: 0 40px 28px 40px;
  ${({ padding }) => padding && `padding: ${padding};`};
  ${({ width }) => width && `width: ${width};`};
  ${({ height }) => height && `height: ${height};`};
`;

const StyledImgGroup = styled.img<StyledImg>`
  width: 100%;
  padding: 0 40px 28px 40px;
  ${({ padding }) => padding && `padding: ${padding};`};
  ${({ width }) => width && `width: ${width};`};
  ${({ height }) => height && `height: ${height};`};
  ${({ theme }) => theme.tablet`
    width: 239px;
    height: 170px;
    padding-top: 20px;
  `};
  ${({ theme }) => theme.phone`
    width: 219px;
    height: 150px;
    padding-top: 20px;
  `};
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
  padding-top: 100px;
  ${({ theme }) => theme.phone`
    font-size: 1.5rem;
  `}
`;

const StyledBlueInfoText = styled.p`
  color: ${theme.colors.white};
  text-align: center;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 26px;
  padding-top: 13px;
  ${({ theme }) => theme.phone`
    font-size: 16px;
    letter-spacing: 0;
    line-height: 20px;
  `}
`;

const StyledBlueButton = styled.a`
  height: 50px;
  width: 220px;
  border-radius: 25px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 57px;
  margin-bottom: 89px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-decoration: none;
  ${({ theme }) => theme.phone`
    font-size: 16px;
  `}
`;

const StyledOtherContainer = styled.div`
  padding: 40px 110px 85px 110px;
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

const PersonsTestimony = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const PersonsTestimonyHeader = styled.h1`
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 48px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-top: 96px;
  ${({ theme }) =>
    theme &&
    theme.phone`
    max-width: 243px;
    letter-spacing: -0.5px;
    line-height: 28px;
    font-size: 24px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
  `};
`;

const PersonsTestimonyContainer = styled.div`
  flex: 1;
  display: flex;
  margin-top: 65px;
  flex-direction: row;
  ${({ theme }) =>
    theme &&
    theme.phone`
    flex-direction: column;
    margin-top: 16px;
  `}
`;

const PersonsTestimonySection = styled.div<{ isLeft?: boolean }>`
  flex: 1;
  display: flex;
  ${({ isLeft }) =>
    isLeft &&
    `
    justify-content: flex-end;
    margin-right: 47px;
  `};
  ${({ theme }) => theme.tablet`
    padding: 0 0 0 25px;
  `}
  ${({ theme, isLeft }) => theme.phone`
    justify-content: center;
    margin-top: ${isLeft ? '0px' : '36px'};
    margin-right: 47px;
  `}
`;

const QuotesImg = styled.img`
  height: 18px;
  width: 27px;
  ${({ theme }) => theme.phone`
    height: 15px;
    width: 23px;
  `};
`;

const PersonsTestimonyInformationContainer = styled.div<{ maxWidth?: string }>`
  margin-left: 10px;
  max-width: 488px;
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`};
  color: ${({ theme }) => theme.colors.paragraph.darkGray};
  ${({ theme }) => theme.phone`
    width: 290px;
  `}
`;

const PersonsTestimonyInformation = styled.p<{ maxWidth?: string }>`
  font-size: 18px;
  letter-spacing: 0;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.paragraph.darkGray};
  ${({ theme }) => theme.phone`
    font-family: Effra;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 20px;
  `}
`;

const PersonName = styled.h1`
  padding-top: 19px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

const CardHeroHelpImage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 26px;
`;

const renderStepInformation = (numberStep: number): JSX.Element => {
  const steps = [
    {
      numberStep: 'STEP ONE',
      headerText: 'Fill out a standard application',
      descriptionStep: 'Get quotes from both of our partners.',
      padding: '50px 30px',
      // mobilePadding: '10px 30px',
      width: '100%',
      paddingTop: 0,
    },
    {
      numberStep: 'STEP TWO',
      headerText: 'Enjoy exclusive benefits',
      descriptionStep:
        'Keller Covered has done the work for you and negotiated rates for you at no extra cost.',
      padding: '10px 30px',
      mobilePadding: '-100px 30px',
      width: '100%',
      paddingTop: 155,
    },
    {
      numberStep: 'STEP THREE',
      headerText: 'Get a policy in as little as 24 hours',
      descriptionStep:
        'Your selected providers will reach out and finalize the best coverage for your needs.',
      padding: '10px 30px',
      mobilePadding: '40px 30px',
      width: '100%',
      paddingTop: 0,
    },
  ];
  return (
    <StyledStepPresentBuilding
      paddingTop={steps[numberStep].paddingTop}
      width={steps[numberStep].width}
    >
      <StyledStepText>{steps[numberStep].numberStep}</StyledStepText>
      <StyledStepHeader insertBr={numberStep < 1}>{steps[numberStep].headerText}</StyledStepHeader>
      <StyledStepDescription>{steps[numberStep].descriptionStep}</StyledStepDescription>
    </StyledStepPresentBuilding>
  );
};

const StepsHeroSection = (): JSX.Element => {
  return (
    <>
      <StyledStepsContainer padding="60px 90px 0 90px">
        <StyledStepSection>
          <StyledStepPresentItem showShadow width="274px">
            <StyledButtonCheckContainer>
              <StyledStepButtonCheck margin="-14px 7px 0 0">
                <i style={{ color: theme.colors.white, fontSize: 18 }} className="fas fa-check" />
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
            <CardHeroHelpImage>
              <img
                width={118.19}
                height={108.1}
                style={{ marginTop: 30.22 }}
                src="/static/img/Group.png"
              />
              <StyledStepPresentBuildingText
                color={theme.colors.primary}
                padding="10px 0 6px 0"
                fontSize="1.0rem"
              >
                Commercial
              </StyledStepPresentBuildingText>
            </CardHeroHelpImage>
          </StyledStepPresentItem>
        </StyledStepSection>
        <StyledLine>
          <StyledShapeCircle />
          <StyledShapeLine height="175px" />
        </StyledLine>
        <StyledStepSection mobileMargin="45px 0 0 0">{renderStepInformation(0)}</StyledStepSection>
      </StyledStepsContainer>
      <StyledStepsContainer mobilePadding="0px 0px 10px 0px" padding="0 90px 0 90px">
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
                <StyledPartnerPrice>$1,700</StyledPartnerPrice>
                <StyledPartnerMoth>/mo</StyledPartnerMoth>
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
                <StyledPartnerPrice>$1,700</StyledPartnerPrice>
                <StyledPartnerMoth>/mo</StyledPartnerMoth>
              </StyledPartnerBlock>
              <div>
                <StyledStepButtonCheck margin="25px -17px 0 0;">
                  <i style={{ color: theme.colors.white, fontSize: 18 }} className="fas fa-check" />
                </StyledStepButtonCheck>
              </div>
            </StyledPartnerInformation>
          </StyledPartnersSuscription>
        </StyledStepSection>
        <StyledLine directionContent>
          <StyledShapeLine height="170px" />
          <StyledShapeCircle />
          <StyledShapeLine height="250px" />
        </StyledLine>
        <StyledStepSection mobileMargin="45px 0 0 0">{renderStepInformation(1)}</StyledStepSection>
      </StyledStepsContainer>
      <StyledStepsContainer
        tabletPadding="140px 0 0 0"
        mobilePadding="140px 0px 0px 0px"
        padding="0 90px 0 90px"
      >
        <StyledStepSection>
          <StyledWrapper>
            <StyledConffetiSVG src="/static/img/stepsImgs/confetti.svg" />
            <StyledTextContainer>
              <DogIcon size="40px" mobileSize="34px" />
              <Span margin="10px 0 0 0" color="white" letterSpacing="1px">
                CONGRATS, YOU&apos;RE INSURED!
              </Span>
            </StyledTextContainer>
            <PartnerTile price="$1,700" />
            <StyledImg alt="signature" src="/static/img/stepsImgs/signature.png" />
          </StyledWrapper>
        </StyledStepSection>
        <StyledLine directionContent>
          <StyledShapeLine height="210px" />
          <StyledShapeCircle />
        </StyledLine>
        <StyledStepSection mobileMargin="45px 0 0 0">{renderStepInformation(2)}</StyledStepSection>
      </StyledStepsContainer>
      <PersonsTestimony>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <PersonsTestimonyHeader>{`What people are saying about E&O`}</PersonsTestimonyHeader>
        </div>
        <PersonsTestimonyContainer>
          <PersonsTestimonySection isLeft>
            <QuotesImg src="/static/img/quotes.png" />
            <PersonsTestimonyInformationContainer>
              <PersonsTestimonyInformation>
                {`Keller Covered's partnership with top E&O providers has made the process of reviewing our insurance needs simpler than we ever thought possible. In addition to the ease of use, it is going to save my Market Center 15%. In business every dollar counts, I appreciate being partnered with people who continue to help me look after my bottom line."`}
              </PersonsTestimonyInformation>
              <PersonName>{`– MARC KING, OP CHESTERFIELD`}</PersonName>
            </PersonsTestimonyInformationContainer>
          </PersonsTestimonySection>
          <PersonsTestimonySection>
            <QuotesImg src="/static/img/quotes.png" />
            <PersonsTestimonyInformationContainer maxWidth="497px">
              <PersonsTestimonyInformation>
                {`Being a multiple market center OP means having a lot of balls to juggle.  Keller Covered's E&O quoting system was very helpful to compare coverage.  The system made it easy to get quotes from multiple carriers, which is the key to finding the best coverage. At the end of the day, we can save 14% because of our partnership with Keller Williams."`}
              </PersonsTestimonyInformation>
              <PersonName>{`– LARRY ROBINSON, OP FAYETTEVILLE AND FT. SMITH`}</PersonName>
            </PersonsTestimonyInformationContainer>
          </PersonsTestimonySection>
        </PersonsTestimonyContainer>
      </PersonsTestimony>
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
          <StyledBlueButton
            className="mediumFont"
            href="https://eo.kellercovered.com/eoapplication"
          >
            Get started now
          </StyledBlueButton>
        </StyledBlueContainer>
      </StyledOtherContainer>
    </>
  );
};

export default StepsHeroSection;
