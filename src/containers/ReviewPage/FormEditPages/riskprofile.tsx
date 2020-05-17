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
    fontSize: '16px',
    lineHeight: '21px',
    color: '#07293D',
    marginBottom: '18px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '30px',
      fontWeight: 'bold',
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '-0.3px',
      color: '#1D253C',
    },
  },
  titleFormSpecial: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '18px',
    color: '#07293D',
    marginBottom: '18px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '26px',
      fontWeight: 'bold',
      fontSize: '36px',
      lineHeight: '40px',
      letterSpacing: '-0.5px',
      color: '#1D253C',
    },
  },
  titleFormLast: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '21px',
    color: '#07293D',
    marginBottom: '18px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '12px',
      fontWeight: 'bold',
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '-0.3px',
      color: '#1D253C',
    },
  },
  rowContainer: {
    margin: '-38px 0px 48px -44px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '40px',
      width: '512px',
      margin: '0px 0px',
    },
  },
  rowContainerFinal: {
    margin: '-38px 0px 0px -44px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '0px',
      width: '512px',
      margin: '0px 0px',
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
  divTypo: {
    [theme.breakpoints.down(768)]: {
      margin: '-38px 0px 39px -44px',
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
        validationSchema={editRiskProfileSchema}
        onSubmit={onSubmit}
        buttonLabel={'Save changes'}
        dataTestId="continueButton"
        isLoading={false}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={state.app.metadata.progressBar}
        hideButton={false}
        alignButton={classnames(classes.alignButton)}
      >
        {(formikProps) => {
          return (
            <>
              <div className={classnames(classes.divTypo)}>
                <Typography className={classnames(classes.titleFormSpecial)}>
                  {'Risk profile details'}
                </Typography>
              </div>
              <div className={classnames(classes.divTypo)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Do you offer home warranty programs?'}
                </Typography>
              </div>
              <Column className={classnames(classes.rowContainer)}>
                {FormRiskProfile(formikProps)}
              </Column>
              <div className={classnames(classes.divTypo)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Are you involved in mortgage banking, development, or construction?'}
                </Typography>
              </div>
              <Column className={classnames(classes.rowContainer)}>
                {FormRiskProfileBanck(formikProps)}
              </Column>
              <div className={classnames(classes.divTypo)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Do you perform services for REITS  or property syndications?'}
                </Typography>
              </div>
              <Column className={classnames(classes.rowContainer)}>
                {FormRiskProfileReits(formikProps)}
              </Column>
              <div className={classnames(classes.divTypo)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Does any one client represent more than 25% of the firm’s annual commission?'}
                </Typography>
              </div>
              <Column className={classnames(classes.rowContainer)}>
                {FormRiskProfileFirm(formikProps)}
              </Column>
              <div className={classnames(classes.divTypo)}>
                <Typography className={classnames(classes.titleFormLast)}>
                  {
                    'Total percentage of your overall transactions that were derived from REOs/Foreclosures/Short Sales'
                  }
                </Typography>
              </div>
              <Column className={classnames(classes.rowContainerFinal)}>
                {FormRiskProfileTransaction(formikProps, isReview)}
              </Column>
            </>
          );
        }}
      </FormApp>
    </>
  );
}
