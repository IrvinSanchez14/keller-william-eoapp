import Layout from '../Layout';
import styled from 'styled-components';
import TextBold from 'src/components/TextBold';
import TextLight from 'src/components/TextLight';
import PolicyCommissionInformationProps from './IPolicyCommissionInformation';
import { formatAmount, formatPercentage } from 'src/helpers/formatData';
import { useCallback } from 'react';

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
    years: 'Years of continuous coverage',
    annualPremium: 'Annual premium',
    isHaveClaims: 'Any claims in the last 5 years?',
    dateClaim: 'Date of claim',
    amountClaim: 'Amount of claim',
  },
  commissionInformation: {
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

  &:last-child {
    border-top: 1px solid ${(props) => props.theme.colors.grayTableHeader};
    border-bottom: 0;
  }
}
`;

const TableHeader = styled.div`
  ${({ theme }) =>
    theme &&
    `background-color: ${theme.colors.lightestGray};color: ${theme.colors.paragraph.darkGray}`};
  font-style: 'Bold';
  font-size: 12px;
  padding: 10px 15px 10px;
`;

const TableList = styled.div<{ lastItem?: boolean }>`
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

const ComissionValueText = styled.h1`
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

function calcCommission(total: number, value: number) {
  return ((+value || 0) / (total || 1)) * 100;
}

function getTableInfo(data: PolicyCommissionInformationProps['data'], isPdf: boolean) {
  const tableInfo: { name: string; value: number | string }[] = isPdf
    ? [
        {
          name: 'Residential real estate',
          value: calcCommission(
            data.commissionInformation.totalCommision,
            data.commissionInformation.residential.realEstate,
          ),
        },
        {
          name: 'Residential raw land',
          value: calcCommission(
            data.commissionInformation.totalCommision,
            data.commissionInformation.residential.rawLand,
          ),
        },
        {
          name: 'Residential appraisals',
          value: calcCommission(
            data.commissionInformation.totalCommision,
            data.commissionInformation.residential.appraisals,
          ),
        },
        {
          name: 'Residential property management',
          value: calcCommission(
            data.commissionInformation.totalCommision,
            data.commissionInformation.residential.propertyMgmt,
          ),
        },
        {
          name: 'Residential owned property',
          value: calcCommission(
            data.commissionInformation.totalCommision,
            data.commissionInformation.residential.ownedProperty,
          ),
        },
        {
          name: 'Commercial real estate',
          value: calcCommission(
            data.commissionInformation.totalCommision,
            data.commissionInformation.commercial.realEstate,
          ),
        },
        {
          name: 'Commercial raw land',
          value: calcCommission(
            data.commissionInformation.totalCommision,
            data.commissionInformation.commercial.rawLand,
          ),
        },
        {
          name: 'Commercial appraisals',
          value: calcCommission(
            data.commissionInformation.totalCommision,
            data.commissionInformation.commercial.appraisals,
          ),
        },
        {
          name: 'Commercial property management',
          value: calcCommission(
            data.commissionInformation.totalCommision,
            data.commissionInformation.commercial.propertyMgmt,
          ),
        },
        {
          name: 'Commercial property',
          value: calcCommission(
            data.commissionInformation.totalCommision,
            data.commissionInformation.commercial.ownedProperty,
          ),
        },
        {
          name: 'Farm/Ranch',
          value: calcCommission(
            data.commissionInformation.totalCommision,
            data.commissionInformation.farmRanch,
          ),
        },
        {
          name: 'Auctioneering',
          value: calcCommission(
            data.commissionInformation.totalCommision,
            data.commissionInformation.auctioneering,
          ),
        },
        {
          name: 'Mortgage',
          value: calcCommission(
            data.commissionInformation.totalCommision,
            data.commissionInformation.mortageBrokerage,
          ),
        },
      ]
    : [
        {
          name: 'Residential',
          value: formatAmount(data.commissionInformation.residential.total, true),
        },
        {
          name: 'Commercial',
          value: formatAmount(data.commissionInformation.commercial.total, true),
        },
        {
          name: 'Farm/Ranch',
          value: formatAmount(data.commissionInformation.farmRanch, true),
        },
        {
          name: 'Auctioneering',
          value: formatAmount(data.commissionInformation.auctioneering, true),
        },
        {
          name: 'Mortgage',
          value: formatAmount(data.commissionInformation.mortageBrokerage, true),
        },
      ];
  if (isPdf) {
    const percentages = tableInfo.map((cell) => cell.value) as number[];
    const percDiff = 100 - percentages.reduce((sum, value) => sum + Math.floor(value), 0);
    if (percDiff > 0) {
      const sortedPercentages = percentages.sort((a, b) => b - Math.floor(b) - (a - Math.floor(a)));
      for (let i = 0; i < percDiff; i++) {
        for (const cell of tableInfo) {
          if (cell.value !== sortedPercentages[i]) continue;
          cell.value = Math.floor(cell.value) + 1;
          break;
        }
      }
      for (const cell of tableInfo) {
        cell.value = formatPercentage(Math.floor(cell.value as number));
      }
    }
  }
  return tableInfo;
}

export default function PolicyCommissionInformation({
  data,
  openEditModal,
  isPdf,
}: PolicyCommissionInformationProps): JSX.Element {
  const onOpenModal = useCallback(
    (nameForm: string) => () => {
      openEditModal?.(nameForm);
    },
    [openEditModal],
  );
  const tableInfo = getTableInfo(data, isPdf);
  return (
    <ContainerBackgroundShape>
      <Layout
        textHeader="Policy information"
        openEditPageModal={openEditModal && onOpenModal('Policy information')}
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
        {data.policyInformation.isHaveClaims &&
          data.policyInformation.claims.map((claim) => (
            <>
              <ContainerInformation>
                <TextBold customMargin text={labelInformation.policyInformation.dateClaim} />
                <TextLight text={claim.dateClaim} />
              </ContainerInformation>
              <ContainerInformation>
                <TextBold customMargin text={labelInformation.policyInformation.amountClaim} />
                <TextLight typeFormat="money" text={claim.amountClaim} />
              </ContainerInformation>
            </>
          ))}
      </Layout>
      <Layout textHeader="Commission" openEditPageModal={openEditModal && onOpenModal('Comission')}>
        <ContainerInformation firstPadding>
          <TextLight text={labelInformation.commissionInformation.grossCommission} />
          <TextBold
            typeFormat="money"
            customMargin
            text={data.commissionInformation.grossCommission}
          />
        </ContainerInformation>
        <ContainerInformation>
          <TextLight text={labelInformation.commissionInformation.averageValue} />
          <TextBold
            typeFormat="money"
            customMargin
            text={data.commissionInformation.averageValue}
          />
        </ContainerInformation>
        <ContainerInformation fixMobilePosition>
          <TextLight text={labelInformation.commissionInformation.percentageTransactions} />
          <TextBold
            typeFormat="percentage"
            customMargin
            text={data.commissionInformation.percentageTransactions}
          />
        </ContainerInformation>
        <ContainerInformation maxWidthMobile>
          <Table>
            <TableHeader>TYPES OF COMMISSION</TableHeader>
            {tableInfo.map((cell) => (
              <TableList key={cell.name}>
                <ComissionNameText>{cell.name}</ComissionNameText>
                <ComissionValueText>{cell.value}</ComissionValueText>
              </TableList>
            ))}
            <TableList lastItem>
              <ComissionTotalNameText>Total</ComissionTotalNameText>
              <ComissionTotalValueText>
                {isPdf ? '100%' : formatAmount(data.commissionInformation.totalCommision, true)}
              </ComissionTotalValueText>
            </TableList>
          </Table>
        </ContainerInformation>
      </Layout>
    </ContainerBackgroundShape>
  );
}
