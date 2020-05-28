import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import StepsHeroSection from 'src/pageElements/index/StepsHeroSection';

interface BenefitList {
  label: string;
}

const firstBenefitList: Array<BenefitList> = [
  {
    label:
      'Access the best E&O carries at wholesale pricing, only available through the KC program',
  },
  {
    label: 'Dedicated customer service team shops the best policy for you',
  },
  {
    label: 'Free legal support for E&O claims through The Boxwood Group',
  },
];

const secondBenefitList: Array<BenefitList> = [
  {
    label: 'Free onsite or remote risk management consultant',
  },
  {
    label:
      'Exclusive Preferred premium discount for Keller Williams with a no interest payment plan available for premiums greater than $5,000',
  },
  {
    label:
      "Pearl's national buying program offering deep discounts on a wide variety of business supplies and services",
  },
];

const PartnersContainerText = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 90px;
  ${({ theme }) =>
    theme &&
    theme.phone`
    padding-top: 27px;
  `};
`;

const PartnersText = styled.h1`
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -1px;
  text-align: center;
  color: ${({ theme }) => theme && theme.colors.darkBlue};
  ${({ theme }) =>
    theme &&
    theme.phone`
    font-size: 36px;
    max-width: 365px;
  `};
  @media (min-width: 200px) and (max-width: 400px) {
    font-size: 31px;
  }
`;

const StyledBenefitsContainer = styled.div`
  display: flex;
  justify-items: center;
  padding: 90px 90px 80px 90px;
  ${({ theme }) => theme.tablet`flex-direction: column;`};
  ${({ theme }) => theme.phone`padding: 50px 20px 0 20px;`};
`;

const StyleBenefitSection = styled.div`
  width: 50%;
  ${({ theme }) => theme.tablet`width: 100%;`};
  ${({ theme }) => theme.phone`width: 100%;`};
`;

interface StyleBenefitHeaderProps {
  showRightLine?: boolean;
  paddingLeft?: boolean;
}

const StyleBenefitHeader = styled.div<StyleBenefitHeaderProps>`
  left: 0;
  padding-left: 42px;
  align-items: center;
  display: flex;
  flex-direction: column;
  ${({ showRightLine, theme }) =>
    showRightLine && `border-right: 1px solid ${theme.colors.lightGray};`}
  ${({ paddingLeft }) => paddingLeft && `padding-left: 78px;margin-top: -36px;`}
  ${({ theme, paddingLeft }) => theme.tablet`
    border-right: 0;padding-left: 0;
    align-items: flex-start;
    padding-top: ${({ paddingLeft }) => (paddingLeft ? '76px' : '0px')};
  `};
  ${({ theme }) =>
    theme.phone`border-right: 0;padding-left: 0;` &&
    theme.tablet`border-right: 0;padding-left: 0;`};
`;

const StyledBenefitItem = styled.div<{ custom?: boolean }>`
  width: 100%;
  // min-height: 110px;
  display: flex;
  flex-direction: row;
  ${({ custom }) => custom && `margin-bottom: 10px;`};
  ${({ theme }) => theme.phone`
    min-height: 80px;
  `};
`;

const StyledSVG = styled(SVG)`
  ${({ position }) => position && `position: ${position};`};
  ${({ top }) => top && `top: ${top};`};
  ${({ right }) => right && `right: ${right};`};
  ${({ left }) => left && `left: ${left};`};
  ${({ bottom }) => bottom && `bottom: ${bottom};`};
  ${({ height }) => height && `height: ${height};`};
  ${({ width }) => width && `width: ${width};`};
  ${({ padding }) => padding && `padding: ${padding}`}
  ${({ isTabletHidden, theme }) => isTabletHidden && theme.tablet`display: none;`};
  ${({ theme, mobileWidth }) =>
    mobileWidth &&
    theme.phone`
      width: ${mobileWidth};
  `}
  margin-bottom: 43px;
`;

const StyledCircle = styled.div<{ custom?: string; customMobile?: string }>`
  width: 23px;
  height: 23px;
  margin-top: 7px;
  margin-left: 7px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.redCheck};
  justify-content: center;
  align-items: center;
  display: flex;
  ${({ custom }) => custom && `margin: ${custom};`};
  ${({ theme, customMobile }) =>
    customMobile &&
    theme.phone`
      margin: ${customMobile};
  `};
`;

const StyledBenefitText = styled.h1<{
  customPadding?: string;
  customWidth?: boolean;
  customMobile?: string;
}>`
  padding: ${({ customPadding }) => customPadding};
  font-size: 24px;
  letter-spacing: -0.43px;
  line-height: 31px;
  width: 491px;
  color: ${({ theme }) => theme.colors.dark};
  ${({ theme }) => theme.phone`
    font-size: 1.2rem;
    font-size: 18px;
    letter-spacing: -0.32px;
    line-height: 24px;
    padding: 0 0 0 10px;
  `};
  ${({ customWidth }) => customWidth && `width: 470px;`};
  ${({ theme, customMobile }) =>
    customMobile &&
    theme.phone`
    padding: ${customMobile};
  `};
`;

const Shape = styled.div`
  background: url(../../../static/img/stepsImgs/backgroundShape.svg) no-repeat 100%;
  background-size: 255px 1200px;
  background-position: 0 290px;
  @media (min-width: 901px) and (max-width: 1050px) {
    background-size: 200px 1200px;
    background-position: 0 220px;
  }
  ${({ theme }) => theme.tablet`
    background: url(../../../static/img/stepsImgs/mobileBackgroundShape.svg) no-repeat 100%;
    background-size: 130px 2800px;
    background-position: 0 220px;
  `};
  ${({ theme }) => theme.phone`
    background: url(../../../static/img/stepsImgs/mobileBackgroundShape.svg) no-repeat 100%;
    background-size: 120px 2350px;
    background-position: 0 220px;
  `};
`;

const PartnerImageContainer = styled.div<{ marginRight: string }>`
  margin-right: ${({ marginRight }) => marginRight};
  ${({ theme }) => theme.tablet`
    margin-right: 0px;
  `};
`;

export default function SecondHeroSection(): React.ReactElement {
  return (
    <>
      <PartnersContainerText>
        <PartnersText>Brought to you by our partners.</PartnersText>
      </PartnersContainerText>
      <Shape>
        <StyledBenefitsContainer>
          <StyleBenefitSection>
            <StyleBenefitHeader showRightLine>
              <PartnerImageContainer marginRight="160px">
                <StyledSVG
                  key="first_benefit"
                  src="/static/img/AmWins_Logo.svg"
                  width="212px"
                  height="45px"
                  mobileWidth="200px"
                />
              </PartnerImageContainer>
              <StyledBenefitItem>
                <div>
                  <StyledCircle customMobile="3px 0 0 0">
                    <i style={{ color: '#CE011F', fontSize: 13 }} className="fas fa-check" />
                  </StyledCircle>
                </div>
                <StyledBenefitText customPadding="3px 20px">
                  {firstBenefitList[0].label}
                </StyledBenefitText>
              </StyledBenefitItem>
              <StyledBenefitItem>
                <div>
                  <StyledCircle custom="33px 7px" customMobile="20px 0 0 0">
                    <i style={{ color: '#CE011F', fontSize: 13 }} className="fas fa-check" />
                  </StyledCircle>
                </div>
                <StyledBenefitText customPadding="27px 13px" customMobile="20px 13px">
                  {firstBenefitList[1].label}
                </StyledBenefitText>
              </StyledBenefitItem>
              <StyledBenefitItem>
                <div>
                  <StyledCircle custom="9px 7px" customMobile="3px 0 0 0">
                    <i style={{ color: '#CE011F', fontSize: 13 }} className="fas fa-check" />
                  </StyledCircle>
                </div>
                <StyledBenefitText customPadding="4px 13px">
                  {firstBenefitList[2].label}
                </StyledBenefitText>
              </StyledBenefitItem>
            </StyleBenefitHeader>
          </StyleBenefitSection>
          <StyleBenefitSection>
            <StyleBenefitHeader paddingLeft>
              <PartnerImageContainer marginRight="135px">
                <StyledSVG
                  key="second_benefit"
                  src="/static/img/PearlInsurance_Logo.svg"
                  width="290px"
                  height="70px"
                  mobileWidth="250px"
                />
              </PartnerImageContainer>
              <StyledBenefitItem>
                <div>
                  <StyledCircle custom="18px 5px" customMobile="1px 5px 0 0">
                    <i style={{ color: '#CE011F', fontSize: 13 }} className="fas fa-check" />
                  </StyledCircle>
                </div>
                <StyledBenefitText customPadding={'14px 15px'}>
                  {secondBenefitList[0].label}
                </StyledBenefitText>
              </StyledBenefitItem>
              <StyledBenefitItem>
                <div>
                  <StyledCircle custom="22px 5px" customMobile="3px 5px 0 0">
                    <i style={{ color: '#CE011F', fontSize: 13 }} className="fas fa-check" />
                  </StyledCircle>
                </div>
                <StyledBenefitText customWidth customPadding="18px 14px">
                  {secondBenefitList[1].label}
                </StyledBenefitText>
              </StyledBenefitItem>
              <StyledBenefitItem>
                <div>
                  <StyledCircle custom="4px 7px" customMobile="20px 8px 0 0">
                    <i style={{ color: '#CE011F', fontSize: 13 }} className="fas fa-check" />
                  </StyledCircle>
                </div>
                <StyledBenefitText customPadding="0 11px" customMobile="20px 0 0 7px">
                  {secondBenefitList[2].label}
                </StyledBenefitText>
              </StyledBenefitItem>
            </StyleBenefitHeader>
          </StyleBenefitSection>
        </StyledBenefitsContainer>
        <StepsHeroSection />
      </Shape>
    </>
  );
}
