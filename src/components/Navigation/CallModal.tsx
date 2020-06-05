import Modal from 'react-modal';
import styled from 'styled-components';

import CallModalProps from './ICallModal';
import P from 'src/components/P';

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

const ModalContainer = styled.div`
  position: relative;
  padding: 70px 88px 70px;
  background-color: #fff;
  border-radius: 12px;
  text-align: center;
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.15);
  ${({ theme }) => theme.phone`
    padding: 50px 20px;
    border-radius: 6px;
    top: 38%;
    width: calc(100% - 50px);
  `};
  ${({ theme }) => theme.phoneSmall`
    width: calc(100% - 20px);
  `};

  &:focus {
    outline: none;
  }
`;

const StyledImg = styled.img`
  max-width: 100%;
  height: 90px;
  margin-bottom: 40px;
  ${({ theme }) => theme.phone`
    height: 50px;
    margin-bottom: 30px;
  `};
`;

const StyledIconWrapper = styled.button`
  position: absolute;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  top: 30px;
  right: 26px;
  i {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledLink = styled.a`
  font-family: 'Bold';
  display: block;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 2px;
  font-size: 22px;
  text-decoration: none;

  ${({ theme }) => theme.phone`
    font-size: 18px;
    line-height: 24px;
  `};
`;

function CallModal(Props: CallModalProps) {
  const { isModalOpen, closeModal } = Props;

  return (
    <StyledModal onRequestClose={closeModal} style={customStyles} isOpen={isModalOpen}>
      <ModalContainer>
        <StyledIconWrapper onClick={closeModal}>
          <i className="far fa-2x fa-times" />
        </StyledIconWrapper>
        <StyledImg src="/img/stepsImgs/insuramatchBig.svg" />
        <P>
          By calling this number, you’ll be connected to a licensed InsuraMatch agent. Don’t worry,
          they’ve got you covered!
        </P>

        <P>8am - 5pm CST, Mon-Fri</P>
        <P>9am - 2pm CST, Sat</P>
        <StyledLink href="tel:(857) 263-2750">(857) 263-2750</StyledLink>
      </ModalContainer>
    </StyledModal>
  );
}

Modal.setAppElement('#__next');

export default CallModal;
