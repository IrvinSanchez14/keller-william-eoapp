import classnames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FormApp } from 'src/components/FormApp';

import { useAppContext } from 'src/store';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { storeAllPolicy } from 'src/store/actions/app';

import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { FormPolicyInformation } from 'src/containers/TreeEO/PolicyInformation/form';
import { FormPolicyInformationClaims } from 'src/containers/TreeEO/PolicyInformationClaims/form';
import { useEffect, useState } from 'react';
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
    marginBottom: '60px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '121px',
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

export function EditPagePolicyInformation({ closeModal }: any) {
  const router = useRouter();
  const [sessionId, setSessionId] = useState<string>();
  const { dispatch, state, intl } = useAppContext();
  const [isHaveInsurance, setIsHaveInsurance] = useState(
    state.app.data.policyInformation.isHaveInsurance,
  );
  const classes = useStyles();

  const onSubmit = async (values: any, actions: any) => {
    storeAllPolicy(dispatch, values);
    await ky.put(`session/${sessionId}`, {
      json: {
        ...state.app,
        data: {
          ...state.app.data,
          policyInformation: {
            ...state.app.data.policyInformation,
            currentCarrier: values.currentCarrier,
            isHaveInsurance: isHaveInsurance,
            insurance: {
              renewalDate: values.renewalDate,
              deductible: values.deductible,
              limits: values.limits,
              yearCoverage: values.yearCoverage,
              annualPremium: values.annualPremium,
            },
            isHaveClaims: values.isHaveClaims,
            claims: values.claims.map((item: any) => {
              return {
                dateClaim: item.dateClaim,
                amountClaim: item.amountClaim,
              };
            }),
          },
        },
      },
    });
    closeModal(false);
  };

  const handleChange = () => {
    setIsHaveInsurance(!isHaveInsurance);
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
          currentCarrier: state.app.data.policyInformation.currentCarrier,
          isHaveInsuranceField: state.app.data.policyInformation.isHaveInsurance,
          renewalDate: state.app.data.policyInformation.insurance.renewalDate,
          deductible: state.app.data.policyInformation.insurance.deductible,
          limits: state.app.data.policyInformation.insurance.limits,
          yearCoverage: state.app.data.policyInformation.insurance.yearCoverage,
          annualPremium: state.app.data.policyInformation.insurance.annualPremium,
          isHaveClaims: state.app.data.policyInformation.isHaveClaims,
          claims: state.app.data.policyInformation.claims,
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
                  {'Insurance information'}
                </Typography>
                {FormPolicyInformation(formikProps, handleChange)}
              </Column>
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Insurance information'}
                </Typography>
                {FormPolicyInformationClaims(formikProps, state, dispatch)}
              </Column>
            </>
          );
        }}
      </FormApp>
    </>
  );
}
