import styled from 'styled-components';

import FirmAgentInformation from 'src/containers/ReviewPage/FirmAgentInformation';
import PolicyCommissionInformation from 'src/containers/ReviewPage/PolicyCommissionInformation';
import RiskProfile from 'src/containers/ReviewPage/RiskProfile';
import { useState, useEffect } from 'react';
import EditPageModal from '../EditPageModal';
import { FormsEditPage } from 'src/containers/ReviewPage/FormEditPages';
import AppState from 'src/store/models/AppState';
import FirmAgentInformationProps from 'src/containers/ReviewPage/FirmAgentInformation/IFirmAgentInformation';
import IPolicyCommissionInformation from 'src/containers/ReviewPage/PolicyCommissionInformation/IPolicyCommissionInformation';
import RiskPRofileProps from 'src/containers/ReviewPage/RiskProfile/IRiskProfile';
import { setCopyStore } from 'src/store/actions/app';
import { useAppContext } from 'src/store';

interface LayoutInformationReviewProps {
  textHeader: string;
  stateServer: AppState['app'];
}

const data = {
  firmInformation: {
    contactName: 'Stephen Smalls',
    brokerName: 'Stephen Smalls',
    kwMarketCenterName: 'Southwest Market Center',
    yearEstablished: 1986,
    streetAddress: '6203 Shoal Creek Blvd. Austin, TX 78757',
    suite: 101,
    phoneNumber: '(515) 555-5555',
    faxNumber: '(515) 666-5555',
    email: 'ssmalls@gmail.com',
    isFirmOwned: true,
    dateLicensedBrokerAgent: '08/19/2019',
    dateLicensedBroker: '08/19/2019',
  },
  agentInformation: {
    numberAgentsMoreCommission: 1200,
    numberAgentsLessCommission: 1200,
    numberAgentsNoCommission: 1200,
    numberAgentsSpecialDesignation: 54,
    revokedLicense: true,
  },
};

const dataPC = {
  policyInformation: {
    currentCarrier: 'Pearl Insurance',
    isHaveInsurance: true,
    insurance: {
      renewalDate: '12/15/2021',
      deductible: 5000,
      limits: 100000,
      yearCoverage: 3,
      annualPremium: 10000,
    },
    isHaveClaims: true,
    claims: [
      {
        dateClaim: '8/19/2019',
        amountClaim: 100000,
      },
    ],
  },
  commissionInformation: {
    grossCommission: 100200,
    averageValue: 100200,
    percentageTransactions: 47,
    summary: {
      residential: {
        realEstate: 1,
        rawLand: 1,
        appraisals: 1,
        propertyMgmt: 1,
        ownedProperty: 1,
        residentialTotal: 7400000,
      },
      commercial: {
        realEstate: 1,
        rawLand: 1,
        appraisals: 1,
        propertyMgmt: 1,
        ownedProperty: 1,
        commercialTotal: 6400000,
      },
    },
    farmRanch: 100000,
    auctioneering: 100000,
    mortgageBrokerage: 2000000,
    totalCommission: 160000000,
  },
};

const dataRisk = {
  riskFactorInformation: {
    isHomeWarranty: true,
    isMortgageBanking: true,
    isPerformServices: true,
    isRepresentCommission: true,
    percentageTransactions: 47,
  },
};

const LayoutHeaderText = styled.h1`
  font-size: 36px;
  letter-spacing: -0.5px;
  padding: 7px 90px 0 90px;
  line-height: 40px;
  font-weight: bold;
  ${({ theme }) => theme && `color: ${theme.colors.darkBlue};`}
  ${({ theme }) =>
    theme &&
    theme.tablet`
    padding: 30px 70px 0 70px;
    letter-spacing: 1px;
    color: #1D253C;
    font-weight: bold;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
      padding: 30px 25px 0 25px;
      font-size: 22px;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 29px;
      color: #1D253C;
  `};
`;

const LayoutsInformation = styled.div`
  padding-top: 26px;
  ${({ theme }) =>
    theme &&
    theme.phone`
  padding-top: 18px;
`};
`;

const Container = styled.div`
  padding-bottom: 40px;
`;

export default function LayoutInformationReview({
  textHeader,
  stateServer,
}: LayoutInformationReviewProps): JSX.Element {
  const { dispatch, state } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [nameForm, setNameForm] = useState('');

  function openModal(nameCategory: string): void {
    setNameForm(nameCategory);
    setShowModal(true);
  }

  useEffect(() => {
    setCopyStore(dispatch, stateServer);
  }, [setCopyStore]);

  return (
    <Container>
      <LayoutHeaderText>{textHeader}</LayoutHeaderText>
      <LayoutsInformation>
        <FirmAgentInformation
          data={state.app.data as FirmAgentInformationProps['data']}
          openEditModal={(nameFormFirm: any) => openModal(nameFormFirm)}
        />
      </LayoutsInformation>
      <LayoutsInformation>
        <PolicyCommissionInformation
          data={state.app.data as IPolicyCommissionInformation['data']}
          openEditModal={(nameFormPolicy: any) => openModal(nameFormPolicy)}
        />
      </LayoutsInformation>
      <LayoutsInformation>
        <RiskProfile
          data={state.app.data as RiskPRofileProps['data']}
          openEditModal={(nameFormRisk: any) => openModal(nameFormRisk)}
        />
      </LayoutsInformation>
      <EditPageModal
        nameForm={nameForm}
        isModalOpen={showModal}
        closeModal={() => setShowModal(false)}
        children={
          <FormsEditPage nameForm={nameForm} isOpen={showModal} setShowModal={setShowModal} />
        }
      />
    </Container>
  );
}
