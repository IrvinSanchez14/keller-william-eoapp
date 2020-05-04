import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import theme from 'src/styles/MarketingEO/theme';

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

const StyledBenefitsContainer = styled.div`
  display: flex;
  justify-items: center;
  padding: 20px 90px 80px 90px;
  ${({ theme }) => theme.tablet`flex-direction: column;`};
  ${({ theme }) => theme.phone`padding: 50px 20px 0 20px;`};
`;

const StyleBenefitSection = styled.div`
  width: 50%;
  ${({ theme }) => theme.tablet`width: 100%;`};
  ${({ theme }) => theme.phone`width: 100%;`};
`;

const StyleBenefitHeader = styled.div`
  left: 0;
  padding-left: 10px;
  ${({ showRightLine }) => showRightLine && `border-right: 1px solid ${theme.colors.lightGray};`}
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
      /*padding-top: 140px;*/
  `}
`;

const StyledCircle = styled.div`
  width: 22px;
  height: 22px;
  padding: 3px 3px 3px 3px;
  border-radius: 11px;
  border: 2px solid ${theme.colors.primary};
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledBenefitText = styled.div`
  padding: ${({ customPadding }) => customPadding};
  font-size: 1.6rem;
  font-weight: bold;
  color: ${theme.colors.dark};
  ${({ theme }) => theme.phone`
    font-size: 1.2rem;
    padding: 0 0 0 10px;
  `};
`;

const PartnersHeroSection = (): JSX.Element => {
  const renderBenefitList = (list: Array<string>, customPadding?: string): Array<JSX.Element> => {
    return (
      list &&
      list.map((text) => (
        <StyledBenefitItem key={text}>
          <StyledCircle>
            <i style={{ color: theme.colors.primary, fontSize: 13 }} className="fas fa-check" />
          </StyledCircle>
          <StyledBenefitText customPadding={customPadding}>{text}</StyledBenefitText>
        </StyledBenefitItem>
      ))
    );
  };

  return (
    <>
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
            {renderBenefitList(secondBenefitList, '0 20px 0px 30px')}
          </StyleBenefitHeader>
        </StyleBenefitSection>
      </StyledBenefitsContainer>
    </>
  );
};

export default PartnersHeroSection;
