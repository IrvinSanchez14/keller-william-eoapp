import Layout from '../Layout';
import styled from 'styled-components';
import TextBold from 'src/components/TextBold';
import TextLight from 'src/components/TextLight';
import PolicyCommissionInformationProps from './IPolicyCommissionInformation';
import { formatAmount } from 'src/helpers/formatData';

interface ContainerInformationProps {
  firstPadding?: boolean;
  fixMobilePosition?: boolean;
  maxWidthMobile?: boolean;
}

const labelInformation = {
  policyInformation: {
    currentCarrier: 'Current insurance carrier',
    renewalDate: 'Renewal date',
    deductible: 'Deductible',
    limits: 'Limits',
    years: 'Years of continuos coverage',
    annualPremium: 'Annual premium',
    isHaveClaims: 'Any claims in the last 5 years?',
    dateClaim: 'Date of claim',
    amountClaim: 'Amount of claim',
  },
  commission: {
    grossCommission: 'Gross commission for the last 12 months',
    averageValue: 'Average value of properties sold',
    percentageTransactions: 'Percentageof transactions representing both buyer and seller',
  },
};

const ContainerInformation = styled.div<ContainerInformationProps>`
  padding-bottom: 34px;
  ${({ firstPadding }) => firstPadding && `padding-bottom: 31px;`};
  ${({ fixMobilePosition, theme }) =>
    fixMobilePosition &&
    theme.phone`
    padding-bottom: 300px;
  `}
  ${({ maxWidthMobile, theme }) =>
    maxWidthMobile &&
    theme.phone`
        position: absolute;
        bottom: -15px;
        left: 0;
        width: 100%;
  `}
`;

const ContainerBackgroundShape = styled.div`
  background: url(../../../static/img/reviewImgs/bg_left.svg) no-repeat;
  background-size: 415px 90%;
  background-position: left;
  z-index: 1px;
  ${({ theme }) => theme.phone`
    background-size: 0px 0px;
  `}
`;

const Table = styled.div`
  max-width: 510px;
  ${({ theme }) => theme.phone`
    max-width: 100%;
  `}
`;

const TableHeader = styled.div`
  ${({ theme }) =>
    theme &&
    `background-color: ${theme.colors.lightestGray};color: ${theme.colors.paragraph.darkGray}`};
  font-style: 'Bold';
  font-size: 12px;
  padding: 10px 15px 10px;
`;

const TableList = styled.p<{ lastItem?: boolean }>`
  justify-content: center;
  align-items: center;
  display: flex;
  ${({ theme }) => theme && `border-bottom: 1px solid ${theme.colors.lightestGray};`};
  ${({ lastItem, theme }) =>
    lastItem &&
    `
    border-top: 1px solid ${theme.colors.grayTableHeader};
    border-bottom: 0;
  `}
`;

const ComissionNameText = styled.p`
  font-size: 16px;
  width: 60%;
  padding: 15px 0 15px 15px;
  ${({ theme }) => theme && `color: ${theme.colors.primaryDark};`};
`;

const ComissionValueText = styled.p`
  font-size: 16px;
  font-style: 'Bold';
  width: 60%;
  text-align: right;
  right: 0;
  padding-right: 15px;
  ${({ theme }) => theme && `color: ${theme.colors.paragraph.darkGray};`};
  ${({ theme }) => theme && theme.phone`color: ${theme.colors.paragraph.dark};font-style: 'Bold';`};
`;

const ComissionTotalNameText = styled.h1`
  font-size: 16px;
  width: 60%;
  padding: 15px 0 15px 15px;
  ${({ theme }) =>
    theme &&
    `
    color: ${theme.colors.primaryDark};
    letter-spacing: -0.31px;
    font-size: 22px;
  `}
`;

const ComissionTotalValueText = styled.h1`
  width: 60%;
  text-align: right;
  right: 0;
  padding-right: 15px;
  ${({ theme }) =>
    theme &&
    `
    color: ${theme.colors.primaryDark};
    letter-spacing: -0.31px;
    font-size: 22px;
  `};
`;

export default function PolicyCommissionInformation({
  data,
  openEditModal,
}: PolicyCommissionInformationProps): JSX.Element {
  return (
    <ContainerBackgroundShape>
      <Layout
        textHeader="Policy information"
        openEditPageModal={() => openEditModal('Policy information')}
      >
        <ContainerInformation firstPadding>
          <TextLight text={labelInformation.policyInformation.currentCarrier} />
          <TextBold customMargin text={data.policyInformation.currentCarrier} />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.policyInformation.renewalDate} />
          <TextBold customMargin text={data.policyInformation.insurance.renewalDate} />
        </ContainerInformation>
        <ContainerInformation>
          <TextBold customMargin text={labelInformation.policyInformation.deductible} />
          <TextLight typeFormat="money" text={data.policyInformation.insurance.deductible} />
        </ContainerInformation>
        <ContainerInformation>
          <TextBold customMargin text={labelInformation.policyInformation.limits} />
          <TextLight typeFormat="money" text={data.policyInformation.insurance.limits} />
        </ContainerInformation>
        <ContainerInformation>
          <TextBold customMargin text={labelInformation.policyInformation.years} />
          <TextLight text={data.policyInformation.insurance.yearCoverage} />
        </ContainerInformation>
        <ContainerInformation>
          <TextBold customMargin text={labelInformation.policyInformation.annualPremium} />
          <TextLight typeFormat="money" text={data.policyInformation.insurance.annualPremium} />
        </ContainerInformation>
        <ContainerInformation>
          <TextBold customMargin text={labelInformation.policyInformation.isHaveClaims} />
          <TextLight typeFormat="boolean" text={data.policyInformation.isHaveClaims} />
        </ContainerInformation>
        <ContainerInformation>
          <TextBold customMargin text={labelInformation.policyInformation.dateClaim} />
          <TextLight text={data.policyInformation.claims[0].dateClaim} />
        </ContainerInformation>
        <ContainerInformation>
          <TextBold customMargin text={labelInformation.policyInformation.amountClaim} />
          <TextLight typeFormat="money" text={data.policyInformation.claims[0].amountClaim} />
        </ContainerInformation>
      </Layout>
      <Layout textHeader="Commission" openEditPageModal={() => openEditModal('Commission')}>
        <ContainerInformation firstPadding>
          <TextLight text={labelInformation.commission.grossCommission} />
          <TextBold typeFormat="money" customMargin text={data.commission.grossCommission} />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.commission.averageValue} />
          <TextBold typeFormat="money" customMargin text={data.commission.averageValue} />
        </ContainerInformation>
        <ContainerInformation fixMobilePosition>
          <TextLight text={labelInformation.commission.percentageTransactions} />
          <TextBold
            typeFormat="percentage"
            customMargin
            text={data.commission.percentageTransactions}
          />
        </ContainerInformation>
        <ContainerInformation maxWidthMobile>
          <Table>
            <TableHeader>TYPES OF COMMISSION</TableHeader>
            <TableList>
              <ComissionNameText>{`Residential`}</ComissionNameText>
              <ComissionValueText>
                {data.commission.summary.residential.residentialTotal}
              </ComissionValueText>
            </TableList>
            <TableList>
              <ComissionNameText>{`Comercial`}</ComissionNameText>
              <ComissionValueText>
                {formatAmount(data.commission.summary.commercial.commercialTotal, true)}
              </ComissionValueText>
            </TableList>
            <TableList>
              <ComissionNameText>{`Farm/Ranch`}</ComissionNameText>
              <ComissionValueText>
                {formatAmount(data.commission.farmRanch, true)}
              </ComissionValueText>
            </TableList>
            <TableList>
              <ComissionNameText>{`Auctionering`}</ComissionNameText>
              <ComissionValueText>
                {formatAmount(data.commission.auctioneering, true)}
              </ComissionValueText>
            </TableList>
            <TableList>
              <ComissionNameText>{`Mortgage`}</ComissionNameText>
              <ComissionValueText>
                {formatAmount(data.commission.mortageBrokerage, true)}
              </ComissionValueText>
            </TableList>
            <TableList lastItem>
              <ComissionTotalNameText>{`Total`}</ComissionTotalNameText>
              <ComissionTotalValueText>
                {formatAmount(data.commission.totalCommision, true)}
              </ComissionTotalValueText>
            </TableList>
          </Table>
        </ContainerInformation>
      </Layout>
    </ContainerBackgroundShape>
  );
}
