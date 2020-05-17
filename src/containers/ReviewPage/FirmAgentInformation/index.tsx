import { useCallback } from 'react';
import Layout from '../Layout';
import styled from 'styled-components';
import FirmAgentInformationProps from './IFirmAgentInformation';
import TextLight from 'src/components/TextLight';
import TextBold from 'src/components/TextBold';
import { parseNumberToThounsads } from 'src/utils';

const labelInformation = {
  firmInformation: {
    contactName: 'Contact name',
    brokerName: 'Broker/owner name',
    kwMarketCenterName: 'KW Market Center name',
    yearEstablished: 'Year established',
    streetAddress: 'Street Address',
    suite: 'Suite/Unit #',
    phoneNumber: 'Phone number',
    faxNumber: 'Fax number',
    email: 'Email address',
    isFirmOwned:
      'Is your firm independently owned and not controlled, affiliated with, or owned by another entity?',
    dateLicensedBrokerAgent: 'Date broker licensed as an agent',
    dateLicensedBroker: 'Date licensed as a broker',
  },
  agentInformation: {
    numberAgentsMoreCommission:
      'Total number of agents earning ore than $20,000 in commission per year',
    numberAgentLessCommission:
      'Total number of agents earning less than $20,000 in commission per year',
    numberAgenteNoCommission: 'Total number  of agents earning no commission',
    numberAgentSpecialDesignation:
      'Number of agents who have earned any type of special designation',
    revokedLicense:
      'Have any licensees of the firm had their license cancelledor revoked in the last three years?',
  },
};

const ContainerInformation = styled.div<{ firstPadding?: boolean }>`
  padding-bottom: 34px;
  ${({ firstPadding }) => firstPadding && `padding-bottom: 31px;`};
  ${({ theme }) => theme.phone`
  padding-bottom: 26px;
`}
`;

const ContainerBackgroundShape = styled.div`
  background: url(../../../static/img/reviewImgs/bg_left.svg) no-repeat;
  background-size: 415px 90%;
  background-position: right;
  z-index: 1px;
  ${({ theme }) => theme.phone`
  `}
`;

export default function FirmAgentInformation({
  openEditModal,
  data,
}: FirmAgentInformationProps): React.ReactElement {
  const onOpenModal = useCallback(
    (nameform: string) => () => {
      openEditModal?.(nameform);
    },
    [openEditModal],
  );
  return (
    <ContainerBackgroundShape>
      <Layout
        textHeader="Firm information"
        openEditPageModal={openEditModal && onOpenModal('Firm information')}
      >
        <ContainerInformation firstPadding>
          <TextBold text="Keller Williams Realty, Inc." />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.firmInformation.contactName} />
          <TextBold customMargin text={data.firmInformation.contactName} />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.firmInformation.brokerName} />
          <TextBold customMargin text={data.firmInformation.brokerName} />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.firmInformation.kwMarketCenterName} />
          <TextBold customMargin text={data.firmInformation.kwMarketCenterName} />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.firmInformation.yearEstablished} />
          <TextBold customMargin text={data.firmInformation.yearEstablished} />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.firmInformation.streetAddress} />
          <TextBold customMargin text={data.firmInformation.streetAddress} />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.firmInformation.suite} />
          <TextBold customMargin text={data.firmInformation.suite} />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.firmInformation.phoneNumber} />
          <TextBold customMargin text={data.firmInformation.phoneNumber} />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.firmInformation.faxNumber} />
          <TextBold customMargin text={data.firmInformation.faxNumber} />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.firmInformation.email} />
          <TextBold customMargin text={data.firmInformation.email} />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.firmInformation.dateLicensedBrokerAgent} />
          <TextBold customMargin text={data.firmInformation.dateLicensedBrokerAgent} />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.firmInformation.dateLicensedBroker} />
          <TextBold customMargin text={data.firmInformation.dateLicensedBroker} />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight customWidth text={labelInformation.firmInformation.isFirmOwned} />
          <TextBold typeFormat="boolean" customMargin text={data.firmInformation.isFirmOwned} />
        </ContainerInformation>
      </Layout>
      <Layout
        textHeader="Agent information"
        openEditPageModal={openEditModal && onOpenModal('Agent information')}
      >
        <ContainerInformation>
          <TextLight text={labelInformation.agentInformation.numberAgentsMoreCommission} />
          <TextBold
            typeFormat="amount"
            customMargin
            text={parseNumberToThounsads(data.agentInformation.numberAgentsMoreCommission)}
          />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight
            text={parseNumberToThounsads(
              labelInformation.agentInformation.numberAgentLessCommission,
            )}
          />
          <TextBold
            typeFormat="amount"
            customMargin
            text={parseNumberToThounsads(data.agentInformation.numberAgentLessCommission)}
          />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.agentInformation.numberAgenteNoCommission} />
          <TextBold
            typeFormat="amount"
            customMargin
            text={parseNumberToThounsads(data.agentInformation.numberAgenteNoCommission)}
          />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.agentInformation.numberAgentSpecialDesignation} />
          <TextBold
            customMargin
            text={parseNumberToThounsads(data.agentInformation.numberAgentSpecialDesignation)}
          />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.agentInformation.revokedLicense} />
          <TextBold typeFormat="boolean" customMargin text={data.agentInformation.revokedLicense} />
        </ContainerInformation>
      </Layout>
    </ContainerBackgroundShape>
  );
}
