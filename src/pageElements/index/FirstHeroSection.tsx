import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import ButtonWithArrow from 'src/components/Button/ButtonArrow';
import { fonts } from 'assets/fonts';

const Container = styled.div`
  background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100%;
  background-size: 500px 80%;
  background-position: top right;
  @media (min-width: 1191px) and (max-width: 1300px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% -150px;
    background-size: 420px 100%;
  }
  @media (min-width: 1000px) and (max-width: 1190px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% -140px;
    background-size: 380px 100%;
  }
  @media (min-width: 1000px) and (max-width: 1101px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% -140px;
    background-size: 350px 100%;
  }
  @media (min-width: 901px) and (max-width: 999px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% -140px;
    background-size: 290px 100%;
  }
  @media (min-width: 800px) and (max-width: 900px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% -140px;
    background-size: 280px 100%;
  }
  @media (min-width: 733px) and (max-width: 799px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% -120px;
    background-size: 270px 100%;
  }
  @media (min-width: 691px) and (max-width: 732px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% -50px;
    background-size: 260px 100%;
  }
  ${({ theme }) => theme.tablet`min-height: auto;`};
  ${({ theme }) => theme.phone`
    // background-size: 0px 0px;
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% -50px;
    background-size: 200px 100%;
  `}
  @media (min-width: 640px) and (max-width: 689px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% 20px;
    background-size: 220px 100%;
  }
  @media (min-width: 555px) and (max-width: 639px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% 60px;
    background-size: 190px 100%;
  }
  @media (min-width: 485px) and (max-width: 554px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% -10px;
    background-size: 170px 100%;
  }
  @media (min-width: 450px) and (max-width: 484px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% -10px;
    background-size: 140px 100%;
  }
  @media (min-width: 390px) and (max-width: 449px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% -30px;
    background-size: 120px 100%;
  }
  @media (min-width: 373px) and (max-width: 389px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% -50px;
    background-size: 110px 100%;
  }
  @media (min-width: 300px) and (max-width: 372px) {
    background: url(../../../static/img/heroImgs/tabletShape.svg) no-repeat 100% -160px;
    background-size: 110px 100%;
  }
  min-height: auto;
`;

const ContainerClouds = styled.div`
  ${({ theme }) => theme.tablet`min-height: auto;`};
  background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100%;
  background-size: 500px 80%;
  background-position: top right;
  //
  @media (min-width: 1191px) and (max-width: 1300px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% -150px;
    background-size: 420px 100%;
  }
  @media (min-width: 1000px) and (max-width: 1190px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% -140px;
    background-size: 380px 100%;
  }
  @media (min-width: 1000px) and (max-width: 1101px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% -140px;
    background-size: 350px 100%;
  }
  @media (min-width: 901px) and (max-width: 999px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% -140px;
    background-size: 290px 100%;
  }
  @media (min-width: 800px) and (max-width: 900px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% -140px;
    background-size: 280px 100%;
  }
  @media (min-width: 733px) and (max-width: 799px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% -120px;
    background-size: 270px 100%;
  }
  @media (min-width: 691px) and (max-width: 732px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% -50px;
    background-size: 260px 100%;
  }
  ${({ theme }) => theme.tablet`min-height: auto;`};
  ${({ theme }) => theme.phone`
    // background-size: 0px 0px;
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% -50px;
    background-size: 200px 100%;
  `}
  @media (min-width: 640px) and (max-width: 689px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% 20px;
    background-size: 220px 100%;
  }
  @media (min-width: 555px) and (max-width: 639px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% 60px;
    background-size: 190px 100%;
  }
  @media (min-width: 485px) and (max-width: 554px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% -10px;
    background-size: 170px 100%;
  }
  @media (min-width: 450px) and (max-width: 484px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% -10px;
    background-size: 140px 100%;
  }
  @media (min-width: 390px) and (max-width: 449px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% -30px;
    background-size: 120px 100%;
  }
  @media (min-width: 373px) and (max-width: 389px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% -50px;
    background-size: 110px 100%;
  }
  @media (min-width: 300px) and (max-width: 372px) {
    background: url(../../../static/img/heroImgs/new_cloud.svg) no-repeat 100% -110px;
    background-size: 110px 100%;
  }
`;

const ContainerDog = styled.div`
  margin-left: 181px;
  padding-top: 136px;
  align-items: center;
  display: flex;
  ${({ theme }) => theme && theme.tablet`margin-left: 31px; margin-top: 33px;`};
  ${({ theme }) => theme && theme.phone`margin-left: 26px;margin-top 0px;`};
`;

const DogIcon = styled(SVG)`
  width: 60px;
  height: 60px;
  ${({ theme }) => theme && theme.phone`width: 40px;height: 40px;`};
`;

const KaceyTopText = styled.h1`
  font-size: 12px;
  letter-spacing: 2px;
  padding-left: 18px;
  padding-top: 3px;
  line-height: 14px;
  ${({ theme }) => theme && `color: ${theme.colors.darkBlue};`};
  ${({ theme }) => theme && theme.phone`font-size: 11px;`};
`;

const FetchDiscountedContainer = styled.div`
  margin-top: 20px;
  margin-left: 181px;
  ${({ theme }) => theme && theme.tablet`margin-left: 31px;`};
  ${({ theme }) =>
    theme &&
    theme.phone`
    margin-left: 26px;
    max-width: 320px;
  `};
  @media (min-width: 460px) and (max-width: 689px) {
    max-width: 420px;
  }
`;

const FetchDiscountedText = styled.h1`
  font-size: 64px;
  letter-spacing: -1px;
  line-height: 66px;
  display: flex;
  ${({ theme }) => theme && `color: ${theme.colors.darkBlue};`};
  ${({ theme }) =>
    theme &&
    theme.phone`
    font-size: 36px;
    line-height: 40px;
    width: 330px;
    display:inline;
  `};
  @media (min-width: 460px) and (max-width: 689px) {
    font-size: 56px;
    // line-height: 40px;
    width: 330px;
    display: inline;
  }
  @media (max-width: 339px) {
    font-size: 35px;
  }
`;
const ButtonQuoteContainer = styled.div`
  padding-left: 175px;
  padding-top: 10px;
  ${({ theme }) => theme && theme.tablet`padding-left: 31px;`};
  ${({ theme }) =>
    theme &&
    theme.phone`
    padding-left: 26px;
  `};
`;

const DogPersonImage = styled(SVG)`
  margin-left: 323px;
  margin-top: 44px;
  width: 476px;
  height: 251px;
  ${({ theme }) =>
    theme &&
    theme.tablet`
    width: 339px;
    height: 196px;
    margin-top: 62px;
    margin-left: 140px;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
    width: 239px;
    height: 126px;
    margin-top: 62px;
    margin-left: 14px;
  `};
  @media (min-width: 901px) and (max-width: 1143px) {
    margin-left: 120px;
  }
  @media (min-width: 691px) and (max-width: 733px) {
    margin-left: 80px;
  }
  @media (min-width: 460px) and (max-width: 689px) {
    width: 350px;
    height: 135px;
  }
  @media (min-width: 300px) and (max-width: 372px) {
    margin-top: 145px;
  }
`;

const OurStory = styled.div`
  padding-top: 42px;
  padding-left: 120px;
  padding-right: 120px;
  ${({ theme }) =>
    theme &&
    theme.tablet`
    padding-left: 60px;
    padding-right: 60px;
  `}
  ${({ theme }) =>
    theme &&
    theme.phone`
    padding-left: 25px;
  padding-right: 25px;
  `}
`;

const OurStoryContainer = styled.div`
  border-radius: 6px;
  ${({ theme }) => theme && `background-color: ${theme.colors.darkBlue};`};
  ${({ theme }) => theme && `color: ${theme.colors.white};`};
  padding-bottom: 69px;
`;

const OurStoryHeader = styled.h1`
  padding-top: 48px;
  text-align: center;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -1px;
`;

const OurStoryDescription = styled.p<{ secondSection?: boolean }>`
  font-size: 22px;
  letter-spacing: 0px;
  line-height: 27px;
  text-align: center;
  padding-left: 112px;
  padding-right: 112px;
  padding-top: 24px;
  ${({ secondSection }) => secondSection && `padding-top: 26px;margin-left: 2px;`};
  ${({ theme }) =>
    theme &&
    theme.phone`
    padding-left: 24px;
    padding-right: 24px;
    font-size: 16px;
  `}
`;

const PrimaryColor = styled(FetchDiscountedText)`
  ${({ theme }) => theme && `color: ${theme.colors.primary};`};
`;

export default function FirstHeroSection(): React.ReactElement {
  return (
    <Container>
      <ContainerClouds>
        <ContainerDog>
          <DogIcon src="/static/img/dog-circle.svg" />
          <KaceyTopText>{`MEET KACEY, HE WILL:`}</KaceyTopText>
        </ContainerDog>
        <FetchDiscountedContainer>
          <FetchDiscountedText>Fetch discounted E&O </FetchDiscountedText>
          <FetchDiscountedText>quotes exclusive to Keller </FetchDiscountedText>
          <FetchDiscountedText>Williams Market Centers </FetchDiscountedText>
          <FetchDiscountedText>
            in <PrimaryColor>&nbsp;less than 1 hour</PrimaryColor>.
          </FetchDiscountedText>
        </FetchDiscountedContainer>
        <ButtonQuoteContainer>
          <ButtonWithArrow
            href="/eoapplication"
            margin="38px 0 0 0"
            mobileMargin="8px 0 0 0"
            customWidth="436px"
            mobileWidth="250px"
            data-test-id="getButton"
          >
            Get your quotes today
          </ButtonWithArrow>
        </ButtonQuoteContainer>
        <DogPersonImage src="/static/img/mobileSofa.svg" />
        <OurStory>
          <OurStoryContainer>
            <OurStoryHeader>Our story</OurStoryHeader>
            <OurStoryDescription>
              Keller Covered has done the hard work for you by negotiating significant discounts
              with E&O Insurance providers. What was normally a process of 4-8 hours for a single
              quote, has been streamlined through our proprietary workflow to allow you to apply for
              multiple quotes in less than 1 hour.
            </OurStoryDescription>
            <OurStoryDescription secondSection>
              Quotes are provided at additional costs to you as we have eliminated any middle-man
              fees associated with the process. We are extremely proud to provide the best purchase
              experience in the industry!
            </OurStoryDescription>
          </OurStoryContainer>
        </OurStory>
      </ContainerClouds>
    </Container>
  );
}
