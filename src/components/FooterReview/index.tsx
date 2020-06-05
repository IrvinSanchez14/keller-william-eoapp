import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import theme from 'src/styles/MarketingEO/theme';
import ButtonPrimary from 'src/components/Button/ButtonPrimary';
import { useRouter } from 'next/dist/client/router';

const FooterContainer = styled.footer`
  height: 120px;
  display: flex;
  background-color: ${theme.colors.darkBlue};
  bottom: 0;
  width: 100%;
`;

const FooterSection = styled.div<{ hideDogIcon?: boolean; alignRight?: boolean }>`
  width: 70%;
  display: flex;
  align-items: center;
  ${({ hideDogIcon, theme }) => hideDogIcon && theme && theme.phone`display: none;`}
  ${({ alignRight }) =>
    alignRight &&
    `
    justify-content: flex-end;
    margin-right: 100px;
    width: 30%;
    @media (max-width: 900px) {
      margin-right: 40px;
    }}
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
    width: 100%;
    justify-content: center;
    margin: 0 0 0 0;
  `}
`;

const FooterDogIcon = styled(SVG)<{ width: string; height: string }>`
  ${({ height }) => height && `height: ${height};`};
  ${({ width }) => width && `width: ${width};`};
  margin-left: 97px;
  @media (max-width: 900px) {
    margin-left: 20px;
  }
`;

const FooterLooksText = styled.h1`
  font-size: 30px;
  font-style: 'Regular';
  font-weight: 200;
  letter-spacing: -0.54px;
  @media (max-width: 850px) {
    font-size: 27px;
  }
  color: ${theme.colors.white};
`;

const FooterSubmitText = styled.p`
  font-family: 'Effra Medium';
  font-style: 'Bold';
`;

export default function FooterReview({ sessionId }: { sessionId: string }): JSX.Element {
  const router = useRouter();
  return (
    <FooterContainer>
      <FooterSection hideDogIcon>
        <FooterDogIcon width="100px" height="55px" src="/img/dog-circle.svg" />
        <FooterLooksText>Looks great. Woof woof!</FooterLooksText>
      </FooterSection>
      <FooterSection alignRight>
        <ButtonPrimary onClick={() => router.push(`/provider-selection?sessionId=${sessionId}`)}>
          <FooterSubmitText>Submit application</FooterSubmitText>
        </ButtonPrimary>
      </FooterSection>
    </FooterContainer>
  );
}
