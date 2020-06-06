import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import IDogIcon from './IDogIcon';

const StyledSVG = styled(SVG)`
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  ${({ theme, tabletSize }) => theme.tablet`
    width: ${tabletSize};
    height: ${tabletSize};
  `};

  ${({ theme, mobileSize }) => theme.phone`
    width: ${mobileSize};
    height: ${mobileSize};
  `};
`;

const DogIcon = ({ size, tabletSize, mobileSize }: IDogIcon): JSX.Element => (
  <StyledSVG
    size={size}
    tabletSize={tabletSize || mobileSize}
    mobileSize={mobileSize}
    src="/img/dog-circle.svg"
  />
);

DogIcon.defaultProps = {
  tabletSize: null,
};

export default DogIcon;
