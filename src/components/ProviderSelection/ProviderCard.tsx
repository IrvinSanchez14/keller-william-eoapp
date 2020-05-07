import styled from 'styled-components';

const StyledSection = styled.section`
  box-shadow: -1px 0px 8px 2px ${(props) => props.theme.colors.shadowColor};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 15px;
  margin: 10px;
  max-width: 600px;
  min-width: 360px;
`;

const ProviderCard: React.FC = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default ProviderCard;
