import React from 'react';
import styled from 'styled-components';
import ISpan from './ISpan';

const StyledSpan = styled.span`
  color: ${({ theme, color }) => (color === 'white' ? theme.colors.white : theme.colors.spanColor)};
  ${({ color }) => color && `color: ${color}`};
  font-size: 12px;
  line-height: 14px;
  font-family: 'Bold';
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '2px'};
  ${({ margin }) => margin && `margin: ${margin};`};
`;

const Span = (props: ISpan): JSX.Element => <StyledSpan {...props}>{props.children}</StyledSpan>;

export default Span;
