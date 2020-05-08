import styled from 'styled-components';
import ButtonPrimary from 'src/components/Button/ButtonPrimary';

interface LayoutProps {
  textHeader: string;
  openEditPageModal: () => void;
  children: Array<JSX.Element> | JSX.Element;
}

const LayoutContainer = styled.div`
  margin: 0 90px 29px 90px;
  padding-top: 40px;
  padding-bottom: 72px;
  border-radius: 6px;
  background-color: white;
  position: relative;
  ${({ theme }) =>
    theme &&
    `
    -webkit-box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
    -moz-box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
    box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
  `};
  ${({ theme }) =>
    theme &&
    theme.tablet`
    margin: 0 70px 29px 70px;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
      margin: 0 25px 29px 25px;
  `};
`;

const LayoutHeaderSection = styled.div`
  padding: 0 60px 0 60px;
  display: flex;
  ${({ theme }) =>
    theme &&
    theme.phone`
      padding: 0 47px 0 47px;
  `};
  @media (min-width: 371px) and (max-width: 442px) {
    padding: 0 27px 0 27px;
  }
  ${({ theme }) => theme.phoneSmall`
    padding: 0 27px 0 27px;
    color: grey;
  `}
`;

const LayoutEditBottom = styled(ButtonPrimary)`
  position: absolute;
  margin-right: 130px;
  justify-content: center;
  font-style: 'Bold';
  width: 204px;
  height: 60px;
  display: flex;
  right: 0;
  ${({ theme }) =>
    theme &&
    `
    border: 2px solid ${theme.colors.primary};
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  `}
  ${({ theme }) =>
    theme &&
    theme.tablet`
      width: 150px;
      margin-right: 100px;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
      width: 84px;
      height: 50px;
      justify-content: center;
      margin-right: 40px;
  `};
  ${({ theme }) => theme.phoneSmall`
    width: 60px;
    height: 50px;
    justify-content: center;
    margin-right: 40px;
  `}
`;

const LayoutHeaderText = styled.h1`
  padding-top: 21px;
  font-size: 32px;
  letter-spacing: -0.44px;
  width: 100%;
  ${({ theme }) => theme && `color: ${theme.colors.paragraph.dark};`}
  ${({ theme }) => theme.phone`
    padding-top: 11px;
  `}
  ${({ theme }) => theme.phoneSmall`
    font-size: 22px;
  `}
  @media (min-width: 371px) and (max-width: 435px) {
    font-size: 26px;
  }
`;

const LayoutData = styled.div`
  margin: 40px 60px 0px 60px;
  ${({ theme }) =>
    theme &&
    theme.phone`
      margin: 40px 47px 0 47px;
  `};
  @media (min-width: 371px) and (max-width: 442px) {
    margin: 40px 27px 0 27px;
  }
  ${({ theme }) => theme.phoneSmall`
    margin: 40px 27px 0 27px;
  `}
`;

export default function Layout({
  textHeader,
  openEditPageModal,
  children,
}: LayoutProps): JSX.Element {
  return (
    <LayoutContainer>
      <LayoutHeaderSection>
        <LayoutHeaderText>{textHeader}</LayoutHeaderText>
        <LayoutEditBottom onClick={openEditPageModal}>Edit</LayoutEditBottom>
      </LayoutHeaderSection>
      <LayoutData>{children}</LayoutData>
    </LayoutContainer>
  );
}
