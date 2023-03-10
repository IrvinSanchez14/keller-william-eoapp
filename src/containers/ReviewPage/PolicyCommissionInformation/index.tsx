import { useCallback } from 'react';
import Layout from '../Layout';
import styled from 'styled-components';
import TextBold from 'src/components/TextBold';
import TextLight from 'src/components/TextLight';
import PolicyCommissionInformationProps from './IPolicyCommissionInformation';
import { formatAmount, formatPercentage } from 'src/helpers/formatData';
import { parseNumberToThounsads } from 'src/utils';

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
    percentageTransactions: 'Percentage of transactions representing both buyer and seller',
  },
};

const ContainerInformation = styled.div<ContainerInformationProps>`
  padding-bottom: 32px;
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
        top: 325px;
        left: 0;
        width: 100%;
  `}
`;

const ContainerBackgroundShape = styled.div`
  background: url(../../../img/reviewImgs/bg_left.svg) no-repeat;
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
    border-bottom: 0;
  }
}
`;

const TableHeader = styled.div`
  ${({ theme }) =>
    theme && `background-color: rgba(52,51,66,0.05);color: ${theme.colors.paragraph.darkGray}`};
  font-weight: bold;
  font-size: 12px;
  padding: 14px 18px 12px;
  letter-spacing: 2px;
  line-height: 14px;
  height: 40px;
  ${({ theme }) => theme.phone`
    max-width: 100%;
    background-color: rgba(52,51,66,0.05);color: ${theme.colors.paragraph.darkGray};
    font-weight: bold;
    font-size: 11px;
    padding: 14px 28px 12px;
    letter-spacing: 2px;
    line-height: 14px;
    height: 40px;
`}
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
  padding: 0px 0px 0px 15px;
  letter-spacing: 0;
  line-height: 56px;
  ${({ theme }) => theme && `color: ${theme.colors.primaryDark};`};
  ${({ theme }) => theme.phone`
  font-size: 14px;
  width: 60%;
  padding: 0px 0px 0px 30px;
  letter-spacing: 0;
  line-height: 46px;
`}
`;

const ComissionValueText = styled.h1`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 56px;
  width: 60%;
  text-align: right;
  right: 0;
  padding-right: 15px;
  ${({ theme }) => theme && `color: ${theme.colors.paragraph.darkGray};`};
  ${({ theme }) =>
    theme &&
    theme.phone`color: ${theme.colors.paragraph.dark};font-style: 'Bold';
  font-size: 14px;
  font-weight: bold;
  padding-right: 25px;
  letter-spacing: 0;
  line-height: 46px;
  text-align: right;
  `};
`;

const ComissionTotalNameText = styled.h1`
  width: 60%;
  padding: 15px 0 15px 15px;
  ${({ theme }) =>
    theme &&
    `
    color: #1D253C;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: -0.31px;
    line-height: 40px;
  `}
  ${({ theme }) => theme.phone`
  font-size: 24px;
  padding: 15px 0 15px 29px;
  letter-spacing: -0.5px;
  line-height: 30px;
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
    color: #1D253C;
    letter-spacing: -0.31px;
    font-size: 22px;
    line-height: 40px;
    font-weight: bold;
  `};
  ${({ theme }) => theme.phone`
  font-size: 24px;
  padding-right: 25px;
  letter-spacing: 0;
  line-height: 30px;
`}
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
            data.commissionInformation.totalCommission,
            data.commissionInformation.residentialCommission.realEstate,
          ),
        },
        {
          name: 'Residential raw land',
          value: calcCommission(
            data.commissionInformation.totalCommission,
            data.commissionInformation.residentialCommission.rawLand,
          ),
        },
        {
          name: 'Residential appraisals',
          value: calcCommission(
            data.commissionInformation.totalCommission,
            data.commissionInformation.residentialCommission.appraisals,
          ),
        },
        {
          name: 'Residential property management',
          value: calcCommission(
            data.commissionInformation.totalCommission,
            data.commissionInformation.residentialCommission.propertyMgmt,
          ),
        },
        {
          name: 'Residential owned property',
          value: calcCommission(
            data.commissionInformation.totalCommission,
            data.commissionInformation.residentialCommission.ownedProperty,
          ),
        },
        {
          name: 'Commercial real estate',
          value: calcCommission(
            data.commissionInformation.totalCommission,
            data.commissionInformation.commercialCommission.realEstate,
          ),
        },
        {
          name: 'Commercial raw land',
          value: calcCommission(
            data.commissionInformation.totalCommission,
            data.commissionInformation.commercialCommission.rawLand,
          ),
        },
        {
          name: 'Commercial appraisals',
          value: calcCommission(
            data.commissionInformation.totalCommission,
            data.commissionInformation.commercialCommission.appraisals,
          ),
        },
        {
          name: 'Commercial property management',
          value: calcCommission(
            data.commissionInformation.totalCommission,
            data.commissionInformation.commercialCommission.propertyMgmt,
          ),
        },
        {
          name: 'Commercial property',
          value: calcCommission(
            data.commissionInformation.totalCommission,
            data.commissionInformation.commercialCommission.ownedProperty,
          ),
        },
        {
          name: 'Farm/Ranch',
          value: calcCommission(
            data.commissionInformation.totalCommission,
            data.commissionInformation.farmRanch,
          ),
        },
        {
          name: 'Auctioneering',
          value: calcCommission(
            data.commissionInformation.totalCommission,
            data.commissionInformation.auctioneering,
          ),
        },
        {
          name: 'Mortgage',
          value: calcCommission(
            data.commissionInformation.totalCommission,
            data.commissionInformation.mortgageBrokerage,
          ),
        },
      ]
    : [
        {
          name: 'Residential',
          value: formatAmount(data.commissionInformation.residentialCommission.total, true),
        },
        {
          name: 'Commercial',
          value: formatAmount(data.commissionInformation.commercialCommission.total, true),
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
          value: formatAmount(data.commissionInformation.mortgageBrokerage, true),
        },
      ];
  let total: number | undefined;
  if (isPdf) {
    total = 0;
    const percentages = tableInfo.map((cell) => cell.value) as number[];
    const percDiff = 100 - percentages.reduce((sum, value) => sum + Math.floor(value), 0);

    if (percDiff > 0 && percDiff < 100) {
      const sortedPercentages = percentages.sort((a, b) => b - Math.floor(b) - (a - Math.floor(a)));
      for (let i = 0; i < percDiff; i++) {
        for (const cell of tableInfo) {
          if (cell.value !== sortedPercentages[i]) continue;
          cell.value = Math.floor(cell.value) + 1;
          break;
        }
      }
      for (const cell of tableInfo) {
        const cellValue = Math.floor(cell.value as number);
        total += cellValue;
        cell.value = formatPercentage(cellValue);
      }
    }
  }
  return { tableInfo, total };
}

export default function PolicyCommissionInformation({
  data,
  openEditModal,
  isPdf,
}: PolicyCommissionInformationProps): JSX.Element {
  const onOpenModal = useCallback(
    (nameForm: string) => () => {
      openEditModal(nameForm);
    },
    [openEditModal],
  );
  const { tableInfo, total } = getTableInfo(data, isPdf);

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
          <TextLight
            text={parseNumberToThounsads(data.policyInformation.insurance.yearCoverage ?? 0)}
          />
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
      <Layout
        textHeader="Commission"
        openEditPageModal={openEditModal && onOpenModal('commission information')}
        style={true}
      >
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
                {isPdf
                  ? formatPercentage(total)
                  : formatAmount(data.commissionInformation.totalCommission, true)}
              </ComissionTotalValueText>
            </TableList>
          </Table>
        </ContainerInformation>
      </Layout>
    </ContainerBackgroundShape>
  );
}
