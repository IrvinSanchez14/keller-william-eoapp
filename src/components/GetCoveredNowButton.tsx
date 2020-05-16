import styled from 'styled-components';
import ButtonPrimary from 'src/components/Button/ButtonPrimary';

const StyledButton = styled(ButtonPrimary)`
  width: 201px;
  font-family: Bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  ${({ theme }) => theme.phone`
    width: 40px;
    height: 40px;
    overflow: hidden;
    margin-left: 22px;
    i {
      transform: translateY(-3px);
    }
  `};
`;

const StyledButtonCopy = styled.span`
  margin-left: 11px;
  i {
    transform: translateY(-3px);
  }
`;

interface Props {
  onClick: () => void;
  isMobile?: boolean;
}

const GetCoveredNowButton: React.FC<Props> = ({ onClick, isMobile }) => {
  return (
    <StyledButton onClick={onClick} width="200px" color="dark">
      {isMobile ? (
        <i style={{ marginTop: 6 }} className="fas fa-phone" />
      ) : (
        <>
          <i style={{ fontSize: 18 }} className="fas fa-phone" />
          <StyledButtonCopy>Get covered now</StyledButtonCopy>
        </>
      )}
    </StyledButton>
  );
};

export default GetCoveredNowButton;
