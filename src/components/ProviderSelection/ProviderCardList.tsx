import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.darkBlue};

  li {
    padding-left: 2.5rem;
  }

  li:before {
    content: '\f058';
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.lightBlue};
    font-family: FontAwesome;
    display: inline-block;
    margin-left: -2.5rem;
    width: 2.5rem;
  }

  & > * + * {
    margin-top: 1.5rem;
  }
`;

const ProviderCardList: React.FC = ({ children }) => {
  return <StyledUl>{children}</StyledUl>;
};

export default ProviderCardList;
