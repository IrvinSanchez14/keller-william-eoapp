import { CSSProperties } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import IEditPageModal from './IEditPageModal';

interface CustomStylesProps {
  overlay: CSSProperties;
}

const customStyles: CustomStylesProps = {
  overlay: {
    display: 'flex',
    zIndex: 10000,
    overflowX: 'auto',
    backgroundColor: 'white',
  },
};

const StyledModal = styled(Modal)<{ style: CustomStylesProps }>`
  &:focus {
    outline: none;
  }
  width: 100%;
  background-color: white;
`;

const ModalContainer = styled.div`
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  background: url(../../../img/reviewImgs/bg_left.svg) no-repeat;
  background-size: 415px 90%;
  background-position: left;
  z-index: 1px;
  ${({ theme }) => theme.phone`
    background-size: 215px 100%;
  `}
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  margin-left: 90px;
  margin-right: 90px;
  margin-top: 70px;
  ${({ theme }) =>
    theme &&
    theme.tablet`
    margin: 70px 70px 29px 70px;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
      margin: 36px 25px 29px 25px;
  `};
`;

const ModalHeaderText = styled.h1`
  font-size: 32px;
  letter-spacing: -0.57px;
  width: 50%;
  display: flex;
  ${({ theme }) =>
    theme &&
    theme.tablet`
      width: 70%;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
      font-size: 22px;
      width: 75%;
  `};
`;

const ModalHeaderCloseContainer = styled.div`
  width: 50%;
  justify-content: flex-end;
  display: flex;
  padding-right: 183px;
  padding-top: 10px;
  ${({ theme }) =>
    theme &&
    theme.tablet`
      width: 30%;
      padding-right: 160px;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
      width: 25%;
      padding-right: 50px;
  `};
`;

const ModalHeaderCloseIcon = styled.i`
  font-size: 28px;
  display: flex;
  cursor: pointer;
  ${({ theme }) => theme && `color: ${theme.colors.primary};`};
`;

const ModalFormContainer = styled.div`
  width: 100%;
`;

const ModalForm = styled.div`
  height: 100%;
  margin-top: 29px;
  margin-left: 90px;
  margin-right: 90px;
  margin-bottom: 80px;
  padding-top: 63px;
  padding-bottom: 80px;
  display: flex;
  border-radius: 6px;
  background-color: white;
  ${({ theme }) =>
    theme &&
    `
    -webkit-box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
    -moz-box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
    box-shadow: -1px 0px 8px 2px ${theme.colors.shadowColor};
  `};
  ${({ theme }) =>
    theme &&
    theme.tablet`
    margin: 0 70px 29px 70px;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
      margin: 0 25px 29px 25px;
  `};
`;

export default function EditPageModal({
  isModalOpen,
  closeModal,
  nameForm,
  children,
}: IEditPageModal): JSX.Element {
  return (
    <StyledModal onRequestClose={closeModal} style={customStyles} isOpen={isModalOpen}>
      <ModalContainer>
        <ModalHeader>
          <ModalHeaderText>{`Edit your ${nameForm}`}</ModalHeaderText>
          <ModalHeaderCloseContainer>
            <ModalHeaderCloseIcon onClick={closeModal} className="fas fa-times" />
          </ModalHeaderCloseContainer>
        </ModalHeader>
        <ModalFormContainer>
          <ModalForm>{children}</ModalForm>
        </ModalFormContainer>
      </ModalContainer>
    </StyledModal>
  );
}
