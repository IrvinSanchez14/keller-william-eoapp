import ky from 'src/utils/ky';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { FormApp } from 'src/components/FormApp';
import { valdiatePolicySchema } from 'src/helpers/validations';
import { useAppContext } from 'src/store';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { storeAllPolicy } from 'src/store/actions/app';
import { Column } from 'src/components/LayoutWrapper/Flex';
import { FormPolicyInformation } from 'src/containers/TreeEO/PolicyInformation/form';
import { FormPolicyInformationClaims } from 'src/containers/TreeEO/PolicyInformationClaims/form';
import { removeSignsFromNumbers } from 'src/utils';

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
  rowContainer: {
    margin: '-38px 0px 74px -44px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '121px',
      width: '512px',
      margin: '0px 0px',
    },
  },
  rowContainerDetail: {
    margin: '-38px 0px 0px -44px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      width: '512px',
      margin: '0px 0px',
    },
  },
  alignButton: {
    width: '215px',
    marginLeft: '-16px',
    [theme.breakpoints.up(768)]: {
      width: '226px',
      marginLeft: '0px',
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
  const [isHaveClaims, setIsHaveClaims] = useState(state.app.data.policyInformation.isHaveClaims);
  const classes = useStyles();

  const onSubmit = async (values: any, actions: any) => {
    values.isHaveInsuranceField = isHaveInsurance;
    values.isHaveClaims = isHaveClaims;

    if (!values.isHaveClaims) {
      values.claims = [];
    }

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
              deductible: removeSignsFromNumbers(values.deductible),
              limits: removeSignsFromNumbers(values.limits),
              yearCoverage: removeSignsFromNumbers(values.yearCoverage),
              annualPremium: removeSignsFromNumbers(values.annualPremium),
            },
            isHaveClaims: values.isHaveClaims,
            claims: values.claims.map((item: any) => {
              return {
                dateClaim: item.dateClaim,
                amountClaim: removeSignsFromNumbers(item.amountClaim),
              };
            }),
          },
        },
      },
    });
    closeModal(false);
  };

  const handleChange = (value: boolean) => {
    setIsHaveInsurance(value);
  };

  const claimsHandleChange = (value: boolean) => {
    setIsHaveClaims(value);
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
        validationSchema={valdiatePolicySchema}
        onSubmit={onSubmit}
        buttonLabel={'Save changes'}
        dataTestId="continueButton"
        isLoading={false}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={state.app.metadata.progressBar}
        hideButton={false}
        validateOnChange={true}
        alignButton={classnames(classes.alignButton)}
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
              <Column className={classnames(classes.rowContainerDetail)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Insurance information'}
                </Typography>
                {FormPolicyInformationClaims(formikProps, state, dispatch, claimsHandleChange)}
              </Column>
            </>
          );
        }}
      </FormApp>
    </>
  );
}
