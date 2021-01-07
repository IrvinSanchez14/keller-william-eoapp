import Layout from '../Layout';
import styled from 'styled-components';
import TextLight from 'src/components/TextLight';
import TextBold from 'src/components/TextBold';
import RiskProfileProps from './IRiskProfile';
import { useCallback } from 'react';

const labelInformation = {
  isHomeWarranty: 'Do you offer home warranty programs',
  isMortgageBanking: 'Are you involved in mortgage banking  development, or construction',
  isPerformServices: 'Do you perform services for REITS or property syndications',
  isRepresentCommission: '',
  percentageTransactions:
    'Percentage of you overall transactions were derived from REOs/Foreclosures/Short Sale',
};

const ContainerInformation = styled.div<{ firstPadding?: boolean }>`
  padding-bottom: 34px;
  ${({ firstPadding }) => firstPadding && `padding-bottom: 31px;`};
`;

export default function RiskProfile({ data, openEditModal }: RiskProfileProps): JSX.Element {
  const onOpenModal = useCallback(
    (nameForm: string) => () => {
      openEditModal(nameForm);
    },
    [openEditModal],
  );
  return (
    <Layout
      textHeader="Risk profile"
      openEditPageModal={openEditModal && onOpenModal('Risk profile')}
      style={{ height: 562 }}
    >
      <ContainerInformation firstPadding>
        <TextLight text={labelInformation.isHomeWarranty} />
        <TextBold
          typeFormat="boolean"
          customMargin
          text={data.riskFactorInformation.isHomeWarranty}
        />
      </ContainerInformation>
      <ContainerInformation>
        <TextLight text={labelInformation.isMortgageBanking} />
        <TextBold
          typeFormat="boolean"
          customMargin
          text={data.riskFactorInformation.isMortgageBanking}
        />
      </ContainerInformation>
      <ContainerInformation>
        <TextLight text={labelInformation.isPerformServices} />
        <TextBold
          typeFormat="boolean"
          customMargin
          text={data.riskFactorInformation.isPerformServices}
        />
      </ContainerInformation>
      <ContainerInformation>
        <TextLight text={labelInformation.percentageTransactions} />
        <TextBold
          typeFormat="percentage"
          customMargin
          text={data.riskFactorInformation.percentageTransactions}
        />
      </ContainerInformation>
    </Layout>
  );
}
