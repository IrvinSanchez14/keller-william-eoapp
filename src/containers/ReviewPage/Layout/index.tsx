import styled from 'styled-components';
import ButtonPrimary from 'src/components/Button/ButtonPrimary';

interface LayoutProps {
  textHeader: string;
  openEditPageModal?: () => void;
  children: React.ReactNode;
  style?: any;
}

interface OuterWrapperProps {
  padding?: any;
}

const LayoutContainer = styled.div<OuterWrapperProps>`
  margin: 0 90px 30px 90px;
  padding-top: 40px;
  ${(props) =>
    props.padding &&
    `
    padding-bottom: 68px;
`};
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
      margin-top: -25px;
      padding: 0 60px 0 47px;
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
  margin-right: 40px;
  margin-top: 2px;
  font-size: 18px;
  line-height: 22px;
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
      width: 74px;
      height: 40px;
      font-size: 16px;
      line-height: 8px;
      justify-content: center;
      margin-right: 16px;
  `};
  ${({ theme }) => theme.phoneSmall`
    width: 74px;
    height: 40px;
    font-size: 16px;
    line-height: 8px;
    justify-content: center;
    margin-right: 16px;
  `}
`;

const LayoutHeaderText = styled.h1`
  padding-top: 8px;
  font-size: 32px;
  letter-spacing: -0.44px;
  width: 100%;
  ${({ theme }) => theme && `color: ${theme.colors.paragraph.dark};`}
  ${({ theme }) => theme.phone`
    font-size: 20px;
    padding-top: 11px;
  `}
  ${({ theme }) => theme.phoneSmall`
    font-size: 20px;
  `}
`;

const LayoutData = styled.div`
  margin: 27px 60px 0px 60px;
  ${({ theme }) =>
    theme &&
    theme.phone`
      margin: 16px 47px 0 47px;
  `};
  @media (min-width: 371px) and (max-width: 442px) {
    margin: 16px 27px 0 27px;
  }
  ${({ theme }) => theme.phoneSmall`
    margin: 16px 27px 0 27px;
  `}
`;

export default function Layout({
  textHeader,
  openEditPageModal,
  children,
  style,
}: LayoutProps): React.ReactElement {
  return (
    <LayoutContainer padding={style}>
      <LayoutHeaderSection>
        <LayoutHeaderText>{textHeader}</LayoutHeaderText>
        {openEditPageModal && <LayoutEditBottom onClick={openEditPageModal}>Edit</LayoutEditBottom>}
      </LayoutHeaderSection>
      <LayoutData>{children}</LayoutData>
    </LayoutContainer>
  );
}
