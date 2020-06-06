import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import MenuProps, { Items } from './IMenu';

interface MenuWrapperProps {
  isMenuVisible?: boolean;
}

const MenuWrapper = styled.div<MenuWrapperProps>`
  position: absolute;
  top: 110px;
  left: 2px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  border: 1px solid #e4e4e4;
  box-shadow: 2px 2px 0px 0px rgba(181, 181, 181, 0.5);

  ${({ theme, isMenuVisible }) => theme.phone`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    transition: .3s ease-in-out;
    transform: translateY(-100%);
    z-index: -1;
    box-shadow: none;
    border-radius: 0;
    border: none;
    ${isMenuVisible && 'transform: translateY(0)'}
  `};
`;

const basicStyles = css`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  line-height: 42px;
  ${({ theme }) => theme.phone`
    color: ${theme.colors.dark};
    font-family: 'Effra Bold';
    font-size: 26px;
    line-height: 50px;
  `};
`;

const StyledLinkText = styled.p`
  cursor: pointer;
  ${basicStyles};
`;

const StyledLink = styled.a`
  ${basicStyles};
  display: block;
  text-decoration: none;
`;

const ListWrapper = styled.ul`
  padding: 12px 44px 12px 26px;
  ${({ theme }) => theme.phone`padding: 95px 25px 20px;`};
`;

const ListElement = styled.li`
  ${({ theme }) => theme.phone`
    padding: 14px 0;
    border-bottom: 1px solid #D4D4D4;
  `};
`;

function redirectTo(link: string): void {
  location.href = link;
}

const formatLink = (string: string) => string.toLowerCase().split(' ').join('');

const renderNavItem = (link: string, label: string) => {
  switch (link) {
    case 'faq':
      return (
        <StyledLink
          data-test-id="faq"
          onClick={() => redirectTo(link)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </StyledLink>
      );
    default:
      return (
        <StyledLink onClick={() => redirectTo(link)}>
          <StyledLinkText data-test-id={link}>{label}</StyledLinkText>
        </StyledLink>
      );
  }
};

const renderList = (items: Array<Items>) =>
  items.map((item) => {
    const link = formatLink(item.link);
    return (
      item.label !== 'Legal' && (
        <ListElement key={link}>{renderNavItem(link, item.label)}</ListElement>
      )
    );
  });

const Menu = forwardRef((Props: MenuProps, ref: any) => {
  const { items, isMenuVisible } = Props;
  return (
    <MenuWrapper isMenuVisible={isMenuVisible} ref={ref}>
      <ListWrapper>{renderList(items)}</ListWrapper>
    </MenuWrapper>
  );
});

export default Menu;
