import styled, { css } from 'styled-components';
import HamburguerProps from './IHamburguer';
import { forwardRef } from 'react';

const StyledHamburger = styled.button`
  outline: none;
  border: none;
  background: none;
  height: 25px;
  width: 30px;
  cursor: pointer;
  position: relative;
  ${({ theme }) => theme.phone`
    margin: 10px 0 10px auto;
    height: 20px;
  `};
`;

interface StyledLineProps {
  isWhiteNav?: boolean;
  top: string;
  openStyles?: string;
}

const StyledLine = styled.span<StyledLineProps>`
  width: 100%;
  height: 4px;
  border-radius: 1px;
  background-color: ${({ theme, isWhiteNav }) =>
    isWhiteNav ? theme.colors.white : theme.colors.primary};
  transition: 0.3s ease-in-out;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: ${({ top }) => top};
  ${({ openStyles }) =>
    openStyles &&
    css`
      ${openStyles};
    `};
`;

const Hamburger = forwardRef((Props: HamburguerProps, ref: any) => {
  const { isOpen, toggleMenu, isWhiteNav } = Props;
  const renderLines = () => {
    const lines = [
      {
        top: '0',
        openStyles: `${isOpen ? 'transform: translate(-50%, 25px); opacity: 0;' : ''}`,
      },
      {
        top: '50%',
        openStyles: `${isOpen ? 'transform: translate(-50%) rotate(45deg);' : ''}`,
      },
      {
        top: '50%',
        openStyles: `${isOpen ? 'transform: translate(-50%) rotate(-45deg);' : ''}`,
      },
      {
        top: '100%',
        openStyles: `${isOpen ? 'transform: translate(-50%, -25px); opacity: 0;' : ''}`,
      },
    ];

    return lines.map((el, index) => (
      <StyledLine key={index} top={el.top} isWhiteNav={isWhiteNav} openStyles={el.openStyles} />
    ));
  };

  return (
    <StyledHamburger data-test-id="menu" ref={ref} onClick={toggleMenu}>
      {renderLines()}
    </StyledHamburger>
  );
});

export default Hamburger;
