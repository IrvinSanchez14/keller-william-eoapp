import Modal from 'react-modal';
import styled from 'styled-components';
import ButtonForm from '../ButtonForm';

import theme from 'src/styles/MarketingEO/theme';
import DogIcon from '../DogIcon';

interface SessionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalContainerProps {
  screenWidth: number;
}

const customStyles = {
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
    backgroundColor: 'rgb(247, 247, 247, 0.5)',
  },
};

const StyledModal = styled(Modal)`
  &:focus {
    outline: none;
  }
`;

const ModalContainer = styled.div<ModalContainerProps>`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.theme.colors.darkBlue};
  color: #fff;
  border-radius: 12px;
  width: 90vw;
  min-height: 516px;
  height: auto;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.15);
  margin-right: 4px;
  margin-bottom: 175px;
  align-items: center;

  & > * + * {
    margin-top: 1rem;
  }

  @media (min-width: 1000px) {
    width: 1000px;
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  margin: 0;
  flex-direction: column;
  border-radius: 12px 12px 0 0;
  justify-content: center;
  align-items: center;
  color: white;

  & p {
    text-transform: uppercase;
    font-family: Bold;
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`;

const ModalCloseContainer = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  top: 20px;
  margin-right: 26px;
  padding-bottom: 30px;
`;

const ModalCloseIcon = styled.i`
  font-size: 28px;
  color: ${theme.colors.white};
`;

const StyledHeading = styled.h1`
  font-size: 2rem;
  text-align: center;

  @media (min-width: 690px) {
    font-size: 2.7rem;
  }
`;

const StyledModalParagraph = styled.p`
  font-size: 1.1rem;
  text-align: center;
  max-width: 460px;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;

  & button {
    min-width: 180px;
    width: 180px;
    height: 50px;
    font-size: 0.95rem;
  }
`;

const ParagraphContainer = styled.div`
  margin-top: 2rem;
  & > * + * {
    margin-top: 2rem;
  }
`;

const SessionModal: React.FC<SessionModalProps> = (props) => {
  const { isOpen, onClose } = props;
  const width = 500;

  return (
    <StyledModal onRequestClose={onClose} style={customStyles} isOpen={isOpen}>
      <ModalContainer screenWidth={width}>
        <ModalCloseContainer>
          <ModalCloseIcon onClick={onClose} className="fas fa-times" />
        </ModalCloseContainer>
        <ModalHeader>
          <DogIcon size="50px" mobileSize="50px" />
          <p>Keys to the kingdom</p>
        </ModalHeader>
        <StyledHeading>We&apos;ve created a login for you!</StyledHeading>
        <ParagraphContainer>
          <StyledModalParagraph>
            You&apos;ll receive an email shortly with a special link that will allow you to access
            your application at any time!
          </StyledModalParagraph>
          <StyledModalParagraph>
            This will come in handy if you need information for the application that you do not have
            currently at hand.
          </StyledModalParagraph>
        </ParagraphContainer>
        <ButtonContainer>
          <ButtonForm onClick={onClose} label="Continue" />
        </ButtonContainer>
      </ModalContainer>
    </StyledModal>
  );
};

export default SessionModal;

Modal.setAppElement('#__next');
