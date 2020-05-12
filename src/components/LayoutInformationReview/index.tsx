import styled from 'styled-components';

import FirmAgentInformation from 'src/containers/ReviewPage/FirmAgentInformation';
import PolicyCommissionInformation from 'src/containers/ReviewPage/PolicyCommissionInformation';
import RiskProfile from 'src/containers/ReviewPage/RiskProfile';
import { useState } from 'react';
import EditPageModal from '../EditPageModal';
import { FormsEditPage } from 'src/containers/ReviewPage/FormEditPages';

interface LayoutInformationReviewProps {
  textHeader: string;
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
    numberAgentLessCommission: 1200,
    numberAgenteNoCommission: 1200,
    numberAgentSpecialDesignation: 54,
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
      yearCoverage: '3',
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
  commission: {
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
    mortageBrokerage: 2000000,
    totalCommision: 160000000,
  },
};

const dataRisk = {
  riskProfile: {
    isHomeWarranty: true,
    isMortageBanking: true,
    isPerformServices: true,
    isRepresentCommission: true,
    percentageTransactions: 47,
  },
};

const LayoutHeaderText = styled.h1`
  font-size: 36px;
  letter-spacing: -0.5px;
  padding: 7px 90px 0 90px;
  ${({ theme }) => theme && `color: ${theme.colors.darkBlue};`}
  ${({ theme }) =>
    theme &&
    theme.tablet`
    padding: 30px 70px 0 70px;
    letter-spacing: 1px;
  `};
  ${({ theme }) =>
    theme &&
    theme.phone`
      font-size: 22px;
      padding: 30px 25px 0 25px;
      letter-spacing: 0.5px;
  `};
`;

const LayoutsInformation = styled.div`
  padding-top: 34px;
`;

const Container = styled.div`
  padding-bottom: 150px;
`;

export default function LayoutInformationReview({
  textHeader,
}: LayoutInformationReviewProps): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [nameForm, setNameForm] = useState('');

  function openModal(nameCategory: string): void {
    setNameForm(nameCategory);
    setShowModal(true);
  }

  return (
    <Container>
      <LayoutHeaderText>{textHeader}</LayoutHeaderText>
      <LayoutsInformation>
        <FirmAgentInformation data={data} openEditModal={(nameForm) => openModal(nameForm)} />
      </LayoutsInformation>
      <LayoutsInformation>
        <PolicyCommissionInformation
          data={dataPC}
          openEditModal={(nameForm) => openModal(nameForm)}
        />
      </LayoutsInformation>
      <LayoutsInformation>
        <RiskProfile data={dataRisk} openEditModal={(nameForm) => openModal(nameForm)} />
      </LayoutsInformation>
      <EditPageModal
        nameForm={nameForm}
        isModalOpen={showModal}
        closeModal={() => setShowModal(false)}
        children={<FormsEditPage nameForm={nameForm} />}
      />
    </Container>
  );
}
