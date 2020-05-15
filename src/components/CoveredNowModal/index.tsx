import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import CallModalProps from './ICoveredNowModal';
import theme from 'src/styles/MarketingEO/theme';

interface ModalContainerProps {
  screenWidth: number;
  theme: any;
}

interface ModalScheduleTextProps {
  firstText?: boolean;
  left?: boolean;
  right?: boolean;
  isPhone?: boolean;
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
  position: relative;
  background-color: #fff;
  border-radius: 12px;
  width: 705px;
  min-height: 413px;
  margin: 0 auto;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.15);
  margin-right: 4px;
  margin-bottom: 175px;
  ${({ theme, screenWidth }) =>
    theme &&
    theme.phone`
    margin-top: 300px;
    padding-bottom: 50px;
    padding-left: 2px;
    width: ${screenWidth - 1}px;
  `};
  ${({ theme, screenWidth }) =>
    theme &&
    theme.phone`
    max-width: ${screenWidth};
    padding-top: 10px;
    padding-vertical: 10px;
  `};
  ${({ theme, screenWidth }) =>
    theme &&
    theme.phoneSmall`
    padding-top: 10px;
    max-width: ${screenWidth};
    padding-vertical: 10px;
  `};
`;

const ModalHeader = styled.div`
  background-color: ${theme.colors.darkBlue};
  width: 100%;
  height: 104px;
  display: flex;
  border-radius: 12px 12px 0 0;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyledSVG = styled(SVG)`
  width: 340px;
  height: 43px;
  margin-top: 6px;
  margin-right: 6px;
  display: flex;
  @media (min-width: 330px) and (max-width: 390px) {
    width: 200px;
  }
  @media (max-width: 329px) {
    width: 160px;
  }
`;

const StyledWinsIcon = styled(SVG)`
  width: 200px;
  height: 33px;
  margin-left: 44px;
  margin-top: 51px;
  ${({ theme }) =>
    theme &&
    theme.phone`
    margin: 51px 0 15px 0;
  `};
`;

const StyledPearlIcon = styled(SVG)`
  width: 260px;
  height: 55px;
  padding-right: 34px;
  margin-top: 35px;
  ${({ theme }) =>
    theme &&
    theme.phone`
    margin: 35px 0 15px 0;
    padding: 0 0 0 0;
  `};
`;

const ModalCloseContainer = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  margin-right: 26px;
  padding-bottom: 30px;
`;

const ModalCloseIcon = styled.i`
  font-size: 28px;
  color: ${theme.colors.white};
`;

const ModalQuestionText = styled.h4`
  padding-top: 41px;
  padding-left: 3px;
  text-align: center;
  font-size: 22px;
`;

const ModalPartnersContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  ${({ theme }) =>
    theme &&
    theme.phone`
    flex-direction: column;
    flex: 1;
  `};
`;

const ModalScheduleText = styled.a<ModalScheduleTextProps>`
  font-size: 22px;
  font-style: 'Regular';
  padding-top: 5px;
  ${({ firstText }) => firstText && `padding-top: 18px;`};
  ${({ left }) => left && `padding-left: 46px;`};
  ${({ right }) => right && `padding-right: 38px;`};
  ${({ isPhone, left }) =>
    isPhone && left && `text-decoration: none; color: ${theme.colors.primary};padding-left: 50px;`};
  ${({ isPhone, right }) =>
    isPhone &&
    right &&
    `text-decoration: none; color: ${theme.colors.primary};padding-right: 34px;`};
  ${({ theme }) =>
    theme &&
    theme.phone`
    padding: 5px 0 0 0;
  `};
`;

const ModalPartnerSection = styled.div`
  justify-items: center;
  align-items: center;
  display: flex;
  width: 50%;
  flex-direction: column;
  ${({ theme }) =>
    theme &&
    theme.phone`
    width: 100%;
  `};
`;

const ModalSheduleContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  ${({ theme }) =>
    theme &&
    theme.phone`
    width: 100%;
  `};
  flex-direction: column;
  text-align: center;
`;

export default function CoveredNowModal(Props: CallModalProps) {
  const [width, setWidth] = useState(0);
  const { isModalOpen, closeModal } = Props;
  const updateSvgStyle = (code: string): string => {
    const codeWithReplacedFill = code.replace(/fill=".*?"/g, 'fill="currentColor"');
    const codeWithReplacedMask = codeWithReplacedFill.replace(/mask=".*?"/g, 'mask=""');
    return codeWithReplacedMask;
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledModal onRequestClose={closeModal} style={customStyles} isOpen={isModalOpen}>
      <ModalContainer screenWidth={width}>
        <ModalHeader>
          <StyledSVG
            preProcessor={(code: string) => updateSvgStyle(code)}
            src="/static/img/logoKW.svg"
          />
          <ModalCloseContainer>
            <ModalCloseIcon onClick={closeModal} className="fas fa-times" />
          </ModalCloseContainer>
        </ModalHeader>
        <ModalQuestionText>Questions? Give us a call!</ModalQuestionText>
        <ModalPartnersContainer>
          <ModalPartnerSection>
            <StyledWinsIcon src="/static/img/AmWins_Logo2.svg" />
            <ModalSheduleContainer>
              <ModalScheduleText firstText left>
                8am - 5pm CST, Mon-Fri
              </ModalScheduleText>
              <ModalScheduleText isPhone href="tel:1 (404) 978-6029" left>
                <strong>1 (404) 978-6029</strong>
              </ModalScheduleText>
            </ModalSheduleContainer>
          </ModalPartnerSection>
          <ModalPartnerSection>
            <StyledPearlIcon src="/static/img/PearlInsurance_Logo.svg" />
            <ModalSheduleContainer>
              <ModalScheduleText firstText right>
                7am - 6pm CST, Mon-Fri
              </ModalScheduleText>
              <ModalScheduleText isPhone href="tel:1 (800) 469-3582" right>
                <strong>1 (800) 469-3582</strong>
              </ModalScheduleText>
            </ModalSheduleContainer>
          </ModalPartnerSection>
        </ModalPartnersContainer>
      </ModalContainer>
    </StyledModal>
  );
}

Modal.setAppElement('#__next');
