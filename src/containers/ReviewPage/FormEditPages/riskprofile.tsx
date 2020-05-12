import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FormApp } from 'src/components/FormApp';

import { useAppContext } from 'src/store';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { storeRiskProfile } from 'src/store/actions/app';

import { Row, Column } from 'src/components/LayoutWrapper/Flex';

import { useState, useEffect } from 'react';
import { FormRiskProfile } from 'src/containers/TreeEO/RiskProfile/form';
import { FormRiskProfileBanck } from 'src/containers/TreeEO/RiskProfileBanck/form';
import { FormRiskProfileReits } from 'src/containers/TreeEO/RiskProfieReits/form';
import { FormRiskProfileFirm } from 'src/containers/TreeEO/RiskProfileFirm/form';
import { FormRiskProfileTransaction } from 'src/containers/TreeEO/RiskProfileTransaction/form';
import { useRouter } from 'next/dist/client/router';
import ky from 'src/utils/ky';

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
    marginBottom: '24px',
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

export function EditPageRiskProfile() {
  const router = useRouter();
  const [isReview] = useState(true);
  const [sessionId, setSessionId] = useState<string>();
  const { dispatch, state, intl } = useAppContext();
  const [isHaveInsurance, setIsHaveInsurance] = useState(false);
  const classes = useStyles();

  const onSubmit = async (values: any, actions: any) => {
    storeRiskProfile(dispatch, values);
    await ky.put(`session/${sessionId}`, {
      json: {
        ...state.app,
        data: {
          ...state.app.data,
          riskFactorInformation: {
            ...state.app.data.riskFactorInformation,
            ...values,
          },
        },
      },
    });
  };

  useEffect(() => {
    const sessionId = router.query.sessionId;
    if (typeof sessionId !== 'string') return;
    setSessionId(sessionId);
  }, []);

  return (
    <>
      <FormApp
        initialValues={{
          isHomeWarranty: state.app.data.riskFactorInformation.isHomeWarranty,
          isPerformServices: state.app.data.riskFactorInformation.isPerformServices,
          isMortageBanking: state.app.data.riskFactorInformation.isMortageBanking,
          isRepresentCommission: state.app.data.riskFactorInformation.isRepresentCommission,
          percentageTransactions: state.app.data.riskFactorInformation.percentageTransactions,
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
                  {'Do you offer home warranty programs?'}
                </Typography>
                {FormRiskProfile(formikProps)}
              </Column>
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Are you involved in mortgage banking, development, or construction?'}
                </Typography>
                {FormRiskProfileBanck(formikProps)}
              </Column>
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Do you perform services for REITS  or property syndications?'}
                </Typography>
                {FormRiskProfileReits(formikProps)}
              </Column>
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Does any one client represent more than 25% of the firm’s annual commission?'}
                </Typography>
                {FormRiskProfileFirm(formikProps)}
              </Column>
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleForm)}>
                  {
                    'Total percentage of your overall transactions that were derived from REOs/Foreclosures/Short Sales'
                  }
                </Typography>
                {FormRiskProfileTransaction(formikProps, isReview)}
              </Column>
            </>
          );
        }}
      </FormApp>
    </>
  );
}
