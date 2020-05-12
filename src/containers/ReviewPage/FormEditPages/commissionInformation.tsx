import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FormApp } from 'src/components/FormApp';

import { useAppContext } from 'src/store';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { storeCommissionAll } from 'src/store/actions/app';

import { Row, Column } from 'src/components/LayoutWrapper/Flex';

import { useState } from 'react';
import { FormCommissionInformation } from 'src/containers/TreeEO/CommissionInformation/form';
import { FormCommissionInformationTransaction } from 'src/containers/TreeEO/CommissionInformationTransaction/form';
import { FormCommissionInformationResidential } from 'src/containers/TreeEO/CommissionInformationResidential/form';
import { FormCommissionInformationCommercial } from 'src/containers/TreeEO/CommissionInformationCommercial/form';
import { FormCommissionInformationOther } from 'src/containers/TreeEO/CommissionInformationOther/form';

const useStyles = makeStyles((theme: MuiTheme) => ({
  titleForm: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '18px',
    color: '#07293D',
    marginBottom: '18px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '30px',
      fontWeight: 'bold',
      fontSize: '36px',
      lineHeight: '40px',
      letterSpacing: '-0.5px',
      color: '#1D253C',
    },
  },
  rowContainer: {
    margin: '0px -30px',
    marginBottom: '16px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '40px',
    },
  },
  titleSpecial: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '18px',
    color: '#07293D',
    marginBottom: '15px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '30px',
      fontWeight: 'bold',
      fontSize: '36px',
      lineHeight: '40px',
      letterSpacing: '-0.5px',
      color: '#1D253C',
    },
  },
  textFirm: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '21px',
    marginBottom: '16px',
    [theme.breakpoints.up(768)]: {
      fontSize: '24px',
      lineHeight: '29px',
      marginBottom: '25px',
    },
  },
  rowContainerDetail: {
    margin: '0px -30px',
    marginBottom: '60px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '84px',
    },
  },
}));

export function EditPageCommissionInformation() {
  const [isReview] = useState(true);
  const { dispatch, state, intl } = useAppContext();
  const classes = useStyles();

  const onSubmit = (values: any, actions: any) => {
    storeCommissionAll(dispatch, values);
  };

  return (
    <>
      <FormApp
        initialValues={{
          grossCommission: state.app.data.commission.grossCommission,
          averageValue: state.app.data.commission.averageValue,
          commercial: {
            realEstate: state.app.data.commission.commercial.realEstate,
            rawLand: state.app.data.commission.commercial.rawLand,
            appraisals: state.app.data.commission.commercial.appraisals,
            propertyMgmt: state.app.data.commission.commercial.propertyMgmt,
            ownedProperty: state.app.data.commission.commercial.ownedProperty,
          },
          farmRanch: state.app.data.commission.farmRanch,
          auctioneering: state.app.data.commission.auctioneering,
          mortageBrokerage: state.app.data.commission.mortageBrokerage,
          residential: {
            realEstate: state.app.data.commission.residential.realEstate,
            rawLand: state.app.data.commission.residential.rawLand,
            appraisals: state.app.data.commission.residential.appraisals,
            propertyMgmt: state.app.data.commission.residential.propertyMgmt,
            ownedProperty: state.app.data.commission.residential.ownedProperty,
          },
          percentageTransactions: state.app.data.commission.percentageTransactions,
        }}
        isInitValid={false}
        validationSchema={null}
        onSubmit={onSubmit}
        buttonLabel={'Save changes'}
        dataTestId="continueButton"
        isLoading={false}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={state.app.metadata.progressBar}
        hideButton={false}
      >
        {(formikProps) => {
          return (
            <>
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Commission details'}
                </Typography>
                {FormCommissionInformation(formikProps)}
              </Column>
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Percentage of transactions represented by both the buyer and seller'}
                </Typography>
                {FormCommissionInformationTransaction(formikProps)}
              </Column>
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Residential  commission'}
                </Typography>
                {FormCommissionInformationResidential(formikProps, isReview)}
              </Column>
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Commercial commission'}
                </Typography>
                {FormCommissionInformationCommercial(formikProps, isReview)}
              </Column>
              <Column className={classnames(classes.rowContainer)}>
                {FormCommissionInformationOther(formikProps, isReview)}
              </Column>
            </>
          );
        }}
      </FormApp>
    </>
  );
}
