import styled from 'styled-components';
import SVG from 'react-inlinesvg';

interface ProviderCardHeaderProps {
  logo: string;
  logoDescription: string;
}

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7rem;
  margin: 0;
  border-radius: 15px 15px 0 0;
`;

const ProviderCardHeader: React.FC<ProviderCardHeaderProps> = ({ logo, logoDescription }) => {
  return (
    <StyledHeader>
      <SVG src={logo} description={logoDescription} />
    </StyledHeader>
  );
};

export default ProviderCardHeader;
