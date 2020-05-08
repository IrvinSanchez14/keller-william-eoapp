import Layout from '../Layout';
import styled from 'styled-components';
import TextLight from 'src/components/TextLight';
import TextBold from 'src/components/TextBold';
import RiskProfileProps from './IRiskProfile';

const labelInformation = {
  isHomeWarranty: 'Do you offer home warranty programs',
  isMortageBanking: 'Are you involved in mortgage banking  development, or construction',
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
  return (
    <Layout textHeader="Risk profile" openEditPageModal={openEditModal}>
      <ContainerInformation firstPadding>
        <TextLight text={labelInformation.isHomeWarranty} />
        <TextBold typeFormat="boolean" customMargin text={data.riskProfile.isHomeWarranty} />
      </ContainerInformation>
      <ContainerInformation>
        <TextLight text={labelInformation.isMortageBanking} />
        <TextBold typeFormat="boolean" customMargin text={data.riskProfile.isMortageBanking} />
      </ContainerInformation>
      <ContainerInformation>
        <TextLight text={labelInformation.isPerformServices} />
        <TextBold typeFormat="boolean" customMargin text={data.riskProfile.isPerformServices} />
      </ContainerInformation>
      <ContainerInformation>
        <TextLight text={labelInformation.percentageTransactions} />
        <TextBold
          typeFormat="percentage"
          customMargin
          text={data.riskProfile.percentageTransactions}
        />
      </ContainerInformation>
    </Layout>
  );
}
