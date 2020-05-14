import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import StepsHeroSection from 'src/pageElements/index/StepsHeroSection';

const firstBenefitList: Array<string> = [
  'Access the best E&O carries at wholesale pricing, only available through the KC program',
  'Dedicated customer service team shops the best policy for you',
  'Free legal support for E&O claims through The Boxwood Group',
];

const secondBenefitList: Array<string> = [
  'Free onsite or remote risk management consultant',
  '5% to 10% discount  on premiums with Preferred premium credit exclusive for Keller Williams with interest-free financing',
  "Pearl's national buying program offering deep discounts on a wide variety of business supplies and services",
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
  padding: 82px 90px 80px 90px;
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
  padding-left: 10px;
  ${({ showRightLine, theme }) =>
    showRightLine && `border-right: 1px solid ${theme.colors.lightGray};`}
  ${({ paddingLeft }) => paddingLeft && `padding-left: 80px;`}
  ${({ theme }) =>
    theme.phone`border-right: 0;padding-left: 0;` &&
    theme.tablet`border-right: 0;padding-left: 0;`};
`;

const StyledBenefitItem = styled.div`
  width: 100%;
  min-height: 110px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
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
`;

const StyledCircle = styled.div`
  width: 22px;
  height: 22px;
  padding: 3px 3px 3px 3px;
  border-radius: 11px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledBenefitText = styled.div<{ customPadding?: string }>`
  padding: ${({ customPadding }) => customPadding};
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
  ${({ theme }) => theme.phone`
    font-size: 1.2rem;
    padding: 0 0 0 10px;
  `};
`;

const Shape = styled.div`
  background: url(../../../static/img/stepsImgs/backgroundShape.svg) no-repeat 100%;
  background-size: 250px 1200px;
  background-position: 0 220px;
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

export default function SecondHeroSection(): React.ReactElement {
  const renderBenefitList = (list: Array<string>, customPadding?: string): Array<JSX.Element> => {
    return (
      list &&
      list.map((text) => (
        <StyledBenefitItem key={text}>
          <StyledCircle>
            <i style={{ color: '#0093E9', fontSize: 13 }} className="fas fa-check" />
          </StyledCircle>
          <StyledBenefitText customPadding={customPadding}>{text}</StyledBenefitText>
        </StyledBenefitItem>
      ))
    );
  };

  return (
    <>
      <PartnersContainerText>
        <PartnersText>Brought to you by our partners.</PartnersText>
      </PartnersContainerText>
      <Shape>
        <StyledBenefitsContainer>
          <StyleBenefitSection>
            <StyleBenefitHeader showRightLine>
              <StyledSVG
                key="first_benefit"
                src="/static/img/AmWins_Logo.svg"
                width="230px"
                height="100px"
                mobileWidth="200px"
              />
              {renderBenefitList(firstBenefitList, '0 90px 0px 30px')}
            </StyleBenefitHeader>
          </StyleBenefitSection>
          <StyleBenefitSection>
            <StyleBenefitHeader paddingLeft>
              <StyledSVG
                key="second_benefit"
                src="/static/img/PearlInsurance_Logo.svg"
                width="290px"
                height="100px"
                mobileWidth="250px"
              />
              {renderBenefitList(secondBenefitList, '0 20px 0px 20px')}
            </StyleBenefitHeader>
          </StyleBenefitSection>
        </StyledBenefitsContainer>
        <StepsHeroSection />
      </Shape>
    </>
  );
}
