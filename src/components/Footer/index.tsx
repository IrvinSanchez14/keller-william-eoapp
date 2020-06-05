import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';
import Link from 'next/link';
import FooterProps from './IFooter';

const largeDesktopMargin = '72px';
const smallDesktopMargin = '45px';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 100px 0;
  ${({ theme }) => theme.desktopSmall`padding: 100px 16px`};
  ${({ theme }) => theme.tablet`padding: 50px 25px 40px;`};
`;

const Container = styled.div<{ agentAssetsFooter: boolean }>`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  ${({ theme }) => theme.tablet`flex-direction: column;`};
  ${({ agentAssetsFooter }) =>
    agentAssetsFooter &&
    css`
      width: 90%;
      max-width: 1000px;
      ${({ theme }) => theme.tablet`width: 100%;`};
    `};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  svg {
    width: 150px;
    height: 30px;
    path {
      color: #fff;
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  ${({ theme }) => theme.tablet`margin-bottom: 34px;`};
`;

const TextContainer = styled.div`
  border: 1px solid rgba(212, 212, 212, 0.3);
  border-width: 0 1px;
  max-width: 570px;
  width: 100%;
  padding: 0 ${largeDesktopMargin};

  ${({ theme }) => theme.desktopSmall`padding: 0 ${smallDesktopMargin};`};
  @media (max-width: 1160px) {
    max-width: 400px;
  }
  ${({ theme }) => theme.tablet`
    max-width: 100%;
    padding: 40px 0;
    border-width: 1px 0;
  `};
`;

const SubContainer = styled.div`
  margin: 19px 0 0 ${largeDesktopMargin};

  ${({ theme }) => theme.desktopSmall`margin: 19px 0 0 ${smallDesktopMargin};`};
  ${({ theme }) => theme.tablet`margin: 40px 0 0 0;`};
`;

const StyledLink = styled.a`
  font-family: 'Light';
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;

interface StyledFooterTextProps {
  isLabsText?: boolean;
  marginTop?: string;
  mobileMarginTop?: string;
  tabletMarginTop?: string;
  small?: boolean;
}

const StyledFooterText = styled.p<StyledFooterTextProps>`
  font-family: 'Light';
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  line-height: 16px;
  ${({ theme }) => theme.phone`font-size: 11px;`};

  ${({ isLabsText }) =>
    isLabsText &&
    css`
      @media (min-width: 1260px) {
        padding-right: 13px;
      }
    `};

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `};

  ${({ mobileMarginTop, theme }) =>
    mobileMarginTop &&
    css`
      ${theme.phone`margin-top: ${mobileMarginTop};`};
    `};

  ${({ tabletMarginTop, theme }) =>
    tabletMarginTop &&
    css`
      ${theme.tablet`margin-top: ${tabletMarginTop};`};
    `};

  ${({ small, theme }) =>
    small &&
    css`
      font-size: 10px;
      line-height: 14px;
      ${theme.phone`font-size: 9px;`};
    `};
`;

const StyledIcon = styled.span`
  margin-left: 3px;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 ${largeDesktopMargin};

  ${({ theme }) => theme.desktopSmall`margin: 0 ${smallDesktopMargin};`};
  ${({ theme }) => theme.tablet`
    margin: 0 22px;
    display: flex;
    flex: 1;
    align-items: center;
  `};
`;

const StyledTextLink = styled.p`
  font-family: 'Light';
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  ${({ theme }) => theme.phone`font-size: 12px;`};
`;

const renderLinks = (items) => {
  const formatLink = (string: string) => string.toLowerCase().split(' ').join('');
  function redirectTo(link: string): void {
    location.href = link;
  }
  return (
    <ListWrapper>
      {items.map((item) => {
        const link = formatLink(item.link);

        return (
          !(link === 'findmesavings' || link === 'getquotes' || link === 'namethedog') && (
            <li key={link}>
              {link === 'faq' ? (
                <StyledLink
                  data-test-id="faqFooter"
                  onClick={() => redirectTo(link)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </StyledLink>
              ) : (
                <StyledLink href={link}>
                  <StyledTextLink data-test-id={`${item.label}Footer`}>{item.label}</StyledTextLink>
                </StyledLink>
              )}
            </li>
          )
        );
      })}
    </ListWrapper>
  );
};

const defaultProps: FooterProps = {
  agentAssetsFooter: false,
};

const StyledIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: ${largeDesktopMargin};
  ${({ theme }) => theme.desktopSmall`margin-right: ${smallDesktopMargin};`};
  ${({ theme }) => theme.tablet`margin-right: 16px;`};
  ${({ theme }) => theme.phone`justify-content: space-between;`};
`;

function Footer(Props: FooterProps) {
  const { linkItems, agentAssetsFooter } = Props;
  const currentYear = new Date().getFullYear();

  const updateSvgStyle = (code: any) => {
    const codeWithReplacedFill = code.replace(/fill=".*?"/g, 'fill="currentColor"');
    const codeWithReplacedMask = codeWithReplacedFill.replace(/mask=".*?"/g, 'mask=""');
    return codeWithReplacedMask;
  };

  const renderIcons = () => {
    const icons = [
      {
        icon: 'facebookFooter',
        href: 'https://www.facebook.com/KellerCovered/',
      },
      { icon: 'twitter', href: 'https://twitter.com/kwri' },
      {
        icon: 'linkedin',
        href: 'https://www.linkedin.com/company/keller-williams-realty-inc/',
      },
    ];

    return (
      <StyledIconsContainer>
        {icons.map((el) => (
          <a target="_blank" rel="noopener noreferrer" key={el.icon} href={el.href}>
            <SVG src={`/img/${el.icon}.svg`} />
          </a>
        ))}
      </StyledIconsContainer>
    );
  };

  return (
    <FooterWrapper>
      <Container agentAssetsFooter={agentAssetsFooter}>
        <LinksContainer>
          <LogoContainer>
            <Link href="/">
              <SVG src="/img/logoKW.svg" preProcessor={(code) => updateSvgStyle(code)} />
            </Link>
            <StyledFooterText small tabletMarginTop="74px">
              Copyright &copy; 2018-
              {currentYear}
              &nbsp; Keller Covered
            </StyledFooterText>
          </LogoContainer>
          {renderLinks(linkItems)}
          {renderIcons()}
        </LinksContainer>
        <TextContainer>
          <SVG src="/img/labsLogoFooter.svg" />
          <StyledFooterText isLabsText marginTop="16px" mobileMarginTop="19px">
            Labs is a journey. We can&apos;t guarantee the number of quotes that a buyer will
            receive (if any) due to variations in consumer, property and climate coverages by our
            insurance partners. Thanks for going on this ride with us. More to come!
            <StyledIcon aria-label="emoji-eyes" role="img">
              👀
            </StyledIcon>
          </StyledFooterText>
        </TextContainer>
        <SubContainer>
          <SVG src="/img/footerKW.svg" />
          <StyledFooterText marginTop="10px" mobileMarginTop="14px">
            Visit us at:
            <StyledLink href="https://www.kw.com/" target="_blank" rel="noopener noreferrer">
              www.kw.com
            </StyledLink>
          </StyledFooterText>
        </SubContainer>
      </Container>
    </FooterWrapper>
  );
}

Footer.defaultProps = defaultProps;

export default Footer;
