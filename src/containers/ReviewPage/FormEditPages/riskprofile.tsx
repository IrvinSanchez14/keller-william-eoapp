import ky from 'src/utils/ky';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { FormApp } from 'src/components/FormApp';
import { useAppContext } from 'src/store';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { storeRiskProfile } from 'src/store/actions/app';
import { Column } from 'src/components/LayoutWrapper/Flex';
import { FormRiskProfile } from 'src/containers/TreeEO/RiskProfile/form';
import { FormRiskProfileBanck } from 'src/containers/TreeEO/RiskProfileBanck/form';
import { FormRiskProfileReits } from 'src/containers/TreeEO/RiskProfieReits/form';
import { FormRiskProfileFirm } from 'src/containers/TreeEO/RiskProfileFirm/form';
import { FormRiskProfileTransaction } from 'src/containers/TreeEO/RiskProfileTransaction/form';
import { removePercentageSign } from 'src/utils';
import { editRiskProfileSchema } from 'src/helpers/validations';

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
  containerForm: {
    paddingLeft: 74,
    paddingRight: 74,
    maxWidth: '100%',
  },
  alignButton: {
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      flex: 2,
      margin: '0px 74px 5px 74px',
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      width: 140,
      margin: '0px 74px 0px 74px',
    },
  },
  form: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '6px 0px 0px 0px',
  },
  customButtonStyles: {
    fontWeight: 500,
    fontFamily: 'Bold',
  },
}));

export function EditPageRiskProfile({ closeModal }: any) {
  const router = useRouter();
  const [isReview] = useState(true);
  const [sessionId, setSessionId] = useState<string>();
  const { dispatch, state, intl } = useAppContext();
  const [isHaveInsurance, setIsHaveInsurance] = useState(false);
  const classes = useStyles();

  const onSubmit = async (values: any, actions: any) => {
    const parsedValues = {
      ...values,
      percentageTransactions: removePercentageSign(values.percentageTransactions),
    };
    storeRiskProfile(dispatch, parsedValues);
    await ky.put(`session/${sessionId}`, {
      json: {
        ...state.app,
        data: {
          ...state.app.data,
          riskFactorInformation: {
            ...state.app.data.riskFactorInformation,
            ...parsedValues,
          },
        },
      },
    });
    closeModal(false);
  };

  useEffect(() => {
    const sessionId = router.query.sessionId;
    if (typeof sessionId !== 'string') return;
    setSessionId(sessionId);
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <FormApp
        initialValues={{
          isHomeWarranty: state.app.data.riskFactorInformation.isHomeWarranty,
          isPerformServices: state.app.data.riskFactorInformation.isPerformServices,
          isMortageBanking: state.app.data.riskFactorInformation.isMortageBanking,
          isRepresentCommission: state.app.data.riskFactorInformation.isRepresentCommission,
          percentageTransactions: state.app.data.riskFactorInformation.percentageTransactions,
        }}
        className={classes.form}
        alignButton={classes.alignButton}
        customButtonStyles={classes.customButtonStyles}
        isInitValid={false}
        validationSchema={editRiskProfileSchema}
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
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainer)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Do you offer home warranty programs?'}
                  </Typography>
                  {FormRiskProfile(formikProps)}
                </Column>
              </Column>
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainer)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Are you involved in mortgage banking, development, or construction?'}
                  </Typography>
                  {FormRiskProfileBanck(formikProps)}
                </Column>
              </Column>
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainer)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Do you perform services for REITS  or property syndications?'}
                  </Typography>
                  {FormRiskProfileReits(formikProps)}
                </Column>
              </Column>
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainer)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Does any one client represent more than 25% of the firm’s annual commission?'}
                  </Typography>
                  {FormRiskProfileFirm(formikProps)}
                </Column>
              </Column>
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainer)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {
                      'Total percentage of your overall transactions that were derived from REOs/Foreclosures/Short Sales'
                    }
                  </Typography>
                  {FormRiskProfileTransaction(formikProps, isReview)}
                </Column>
              </Column>
            </>
          );
        }}
      </FormApp>
    </div>
  );
}
