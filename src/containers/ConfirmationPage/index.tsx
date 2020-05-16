import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { useAppContext } from 'src/store';
import { exampleContext } from 'src/store/actions/example';
import NavigationReview from 'src/components/NavigationReview';

import ConfirmationPageProps from './IConfirmationPage';
import { formatNumericalAbbreviation } from 'src/helpers/formatData';

const DogIconContainer = styled.div`
  padding-left: 81px;
  padding-top: 14px;
  align-items: center;
  display: flex;
  ${({ theme }) =>
    theme &&
    theme.tablet`
    padding-left: 52px;
    padding-top: 52px;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
    padding-left: 23px;
    padding-top: 23px;
  `};
`;

const StyleSVG = styled(SVG)<{ width?: string; height?: string }>`
  width: 54px;
  height: 54px;
  ${({ width }) => width && `width: ${width};`};
  ${({ height }) => height && `height: ${height};`};
  ${({ theme }) =>
    theme &&
    theme.tablet`
      width: 74px;
      height: 74px;
  `};
  ${({ theme }) =>
    theme &&
    theme.tablet`
      width: 54px;
      height: 54px;
  `};
`;

const DogWoofText = styled.h1`
  font-size: 12px;
  padding-left: 15px;
  letter-spacing: 2px;
  ${({ theme }) =>
    theme &&
    theme.tablet`
    font-size: 15px;
  `};
  ${({ theme }) =>
    theme &&
    theme.tablet`
    font-size: 12px;
  `};
`;

const Content = styled.div`
  width: 100%;
  margin-top: 48px;
  padding-bottom: 321px;
  display: flex;
  background: url(../../../static/img/confirmation.svg) no-repeat;
  background-size: 100% 300px;
  background-position: bottom left;
  ${({ theme }) =>
    theme &&
    theme.tablet`
    flex-direction: column;
    background-size: 100% 300px;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
    padding-bottom: 135px;
    flex-direction: column;
    background: url(../../../static/img/confirmation_mobile.svg) no-repeat;
    background-size: contain;
    background-position: right bottom;
  `};
  @media (min-width: 500px) and (max-width: 690px) {
    padding-bottom: 180px;
  }
`;

const ContentSection = styled.div<{ left?: boolean; right?: boolean }>`
  width: 50%;
  ${({ left }) => left && `padding-left: 90px;padding-right: 10px;`};
  ${({ theme }) => theme && theme.tablet`width: 100%;flex-direction: column;`};
  ${({ theme, left }) =>
    theme &&
    left &&
    theme.phone`
    padding-left: 24px;
    padding-right: 24px;
  `};
  ${({ theme, right }) =>
    theme &&
    right &&
    theme.phone`

  `};
`;

const WelcomeText = styled.h1<{ primaryColor?: boolean; normalMargin?: boolean }>`
  font-size: 64px;
  letter-spacing: -1.35px;
  line-height: 66px;
  overflow: hidden;
  ${({ theme }) => theme && `color: ${theme.colors.primaryDark};`};
  ${({ primaryColor, theme }) => primaryColor && `color: ${theme.colors.primary};`};
  ${({ normalMargin }) => normalMargin && `letter-spacing: -1.40px;`};
  @media (min-width: 1252px) and (max-width: 1418px) {
    font-size: 55px;
  }
  @media (min-width: 1000px) and (max-width: 1251px) {
    font-size: 45px;
  }
  @media (min-width: 901px) and (max-width: 999px) {
    font-size: 40px;
  }
  ${({ theme }) =>
    theme &&
    theme.phone`
    font-size: 36px;
    letter-spacing: -0.75px;
    margin-top: -15px;
  `};
`;

const FollowingInformation = styled.div`
  margin-top: 83px;
  margin-left: -2px;
  ${({ theme }) =>
    theme &&
    theme.phone`
    margin-top: 26px;
  `};
`;

const FollowingText = styled.h1`
  font-size: 24px;
  ${({ theme }) =>
    theme &&
    `
    color: ${theme.colors.paragraph.dark};
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
    font-size: 18px;
  `};
`;

const FollowingSection = styled.div<{ moreTop?: boolean }>`
  display: flex;
  ${({ moreTop }) => moreTop && `margin-top: 10px;`}
`;

const CheckIcon = styled.i`
  height: 21px;
  width: 21px;
  border-radius: 50%;
  padding-left: 4px;
  padding-top: 5px;
  align-items: center;
  display: flex;
  margin-top: 27px;
  ${({ theme }) =>
    theme &&
    `
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  `};
`;

const CheckTextContainer = styled.div`
  margin-left: 11px;
  margin-right: 140px;
  ${({ theme }) =>
    theme &&
    theme.phone`
    margin-left: 10px;
    margin-right: 30px;
  `};
`;

const CheckText = styled.p`
  font-size: 22px;
  line-height: 31px;
  margin-top: 22px;
  ${({ theme }) => theme && `color: ${theme.colors.paragraph.dark};`};
  ${({ theme }) =>
    theme &&
    theme.phone`
    font-size: 18px;
    line-height: 25px;
  `};
`;

const Confirmation = styled.div`
  margin-top: 22px;
  padding-bottom: 8px;
  margin-left: 32px;
  margin-right: 60px;
  border-radius: 15px;
  background-color: white;
  ${({ theme }) =>
    theme &&
    `
    -webkit-box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
    -moz-box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
    box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
    margin-left: 24px;
    margin-right: 24px;
  `};
`;

const ConfirmationHeader = styled.div`
  ${({ theme }) => theme && `border-bottom: 1px solid ${theme.colors.shadowGrayColor};`};
  height: 104px;
  align-items: center;
  display: flex;
`;

const ConfirmationHeaderText = styled.p`
  font-size: 22px;
  line-height: 28px;
  padding-top: 9px;
  padding-left: 50px;
  ${({ theme }) => theme && `color: ${theme.colors.paragraph.dark};`};
  ${({ theme }) =>
    theme &&
    theme.phone`
    padding-left: 24px;
  `};
`;

const ConfirmationSummaryText = styled.h1`
  font-size: 22px;
  letter-spacing: 0;
  line-height: 28px;
  padding: 31px 0 37px 52px;
  ${({ theme }) => theme && `color: ${theme.colors.paragraph.dark};`};
  ${({ theme }) =>
    theme &&
    theme.phone`
    padding-left: 24px;
    padding: 30px 24px;
    font-size: 16px;
  `};
`;

const Table = styled.div`
  max-width: 598px;
  padding-left: 30px;
  padding-bottom: 70px;
  ${({ theme }) => theme.phone`
    max-width: 100%;
    padding-left: 0px;
  `}
`;

const TableHeader = styled.div`
  font-style: 'Bold';
  font-size: 12px;
  letter-spacing: 2px;
  padding: 12px 20px 10px;
  ${({ theme }) =>
    theme &&
    `
    color: ${theme.colors.paragraph.darkGray};
    background: ${theme.colors.grayTableColor};
  `};
`;

const TableList = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  ${({ theme }) => theme && `border-bottom: 1px solid ${theme.colors.lightestGray};`};
`;

const TableNameText = styled.p`
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 56px;
  width: 80%;
  padding: 0px 0px 0px 20px;
  ${({ theme }) => theme && `color: ${theme.colors.primaryDark};`};
  ${({ theme }) => theme && theme.phone`font-size: 14px;width: 70%;`};
`;

const TableValueText = styled.h1`
  font-size: 16px;
  font-style: 'Bold';
  width: 20%;
  text-align: right;
  right: 0;
  padding-right: 15px;
  ${({ theme }) => theme && `color: ${theme.colors.paragraph.darkGray};`};
  ${({ theme }) => theme && theme.phone`font-size: 14px;`};
`;

const ContainerShape = styled.div`
  width: 100%;
  height: 100%;
  background: url(../../../static/img/reviewImgs/bg_right.svg) no-repeat;
  background-size: 340px 100%;
  background-position: right top;
  ${({ theme }) =>
    theme &&
    theme.tablet`
    flex-direction: column;
    background-position: top right;
    background-size: 400px 100%;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
    flex-direction: column;
    background: url(../../../static/img/reviewImgs/bg_right.svg) no-repeat 100% 90%;
    background-size: 162px 781px;
  `};
`;

export default function ConfirmationPage({
  confirmationNumber,
  agentsNumber,
  grossCommission,
  claimsNumber,
  propertySoldValue,
}: ConfirmationPageProps): JSX.Element {
  const { dispatch, intl, state } = useAppContext();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [width, setWidth] = useState(1024);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 690);
    setIsTablet(window.innerWidth < 880);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    exampleContext(dispatch, 0);
    window.addEventListener('resize', handleResize);
    setIsMobile(window.innerWidth < 690);
    setIsTablet(window.innerWidth < 880);
    setWidth(window.innerWidth);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ContainerShape>
      <NavigationReview width={width} isTablet={isTablet} isMobile={isMobile} />
      <DogIconContainer>
        <StyleSVG src="/static/img/dog-circle.svg" />
        <DogWoofText>{`WOOFTASTIC, YOU DID IT!`}</DogWoofText>
      </DogIconContainer>
      <Content>
        <ContentSection left>
          <WelcomeText primaryColor>{`Thanks!`}</WelcomeText>
          <WelcomeText normalMargin>{`A representative will`}</WelcomeText>
          <WelcomeText normalMargin>{`reach out to you to`}</WelcomeText>
          <WelcomeText normalMargin>{`finalize your policy.`}</WelcomeText>
          <FollowingInformation>
            <FollowingText>{`Please have the folowing information available:`}</FollowingText>
            <FollowingSection>
              <div>
                <CheckIcon className="fas fa-check" />
              </div>
              <CheckTextContainer>
                <CheckText>{`Loss-run statements for the last 5 years from your current broker`}</CheckText>
              </CheckTextContainer>
            </FollowingSection>
            <FollowingSection moreTop>
              <div>
                <CheckIcon className="fas fa-check" />
              </div>
              <CheckTextContainer>
                <CheckText>{`Current policy for comparison between quality and quantify of coverages`}</CheckText>
              </CheckTextContainer>
            </FollowingSection>
          </FollowingInformation>
        </ContentSection>
        <ContentSection right>
          <Confirmation>
            <ConfirmationHeader>
              <ConfirmationHeaderText>
                {`Confirmation #: `}
                <strong>{confirmationNumber}</strong>
              </ConfirmationHeaderText>
            </ConfirmationHeader>
            <ConfirmationSummaryText>
              <strong>{`Your application summary`}</strong>
            </ConfirmationSummaryText>
            <Table>
              <TableHeader>
                <strong>{`RISK PROFILE`}</strong>
              </TableHeader>
              <TableList>
                <TableNameText>{`Total number of agents (including owners and managers)`}</TableNameText>
                <TableValueText>{agentsNumber}</TableValueText>
              </TableList>
              <TableList>
                <TableNameText>{`Total number of claims in the past 5 years`}</TableNameText>
                <TableValueText>{claimsNumber}</TableValueText>
              </TableList>
              <TableList>
                <TableNameText>{`Gross commission for the last 12 moths`}</TableNameText>
                <TableValueText>{formatNumericalAbbreviation(grossCommission)}</TableValueText>
              </TableList>
              <TableList>
                <TableNameText>{`Average value of property sold`}</TableNameText>
                <TableValueText>{formatNumericalAbbreviation(propertySoldValue)}</TableValueText>
              </TableList>
            </Table>
          </Confirmation>
        </ContentSection>
      </Content>
    </ContainerShape>
  );
}

ConfirmationPage.defaultProps = {
  confirmationNumber: '99393',
  agentsNumber: 54,
  grossCommission: 2,
  claimsNumber: 100000000,
  propertySoldValue: 500000,
};
