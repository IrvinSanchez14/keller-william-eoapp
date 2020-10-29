import ky from 'src/utils/ky';
import { useRouter } from 'next/dist/client/router';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { FormApp } from 'src/components/FormApp';
import { useAppContext } from 'src/store';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { storeCommissionAll } from 'src/store/actions/app';
import { Column } from 'src/components/LayoutWrapper/Flex';
import { useState, useEffect } from 'react';
import { FormCommissionInformation } from 'src/containers/TreeEO/CommissionInformation/form';
import { FormCommissionInformationTransaction } from 'src/containers/TreeEO/CommissionInformationTransaction/form';
import { FormCommissionInformationResidential } from 'src/containers/TreeEO/CommissionInformationResidential/form';
import { FormCommissionInformationCommercial } from 'src/containers/TreeEO/CommissionInformationCommercial/form';
import { FormCommissionInformationOther } from 'src/containers/TreeEO/CommissionInformationOther/form';
import { removePercentageSign, removeSignsFromNumbers } from 'src/utils';
import { editCommissionInformationSchema } from 'src/helpers/validations';

const useStyles = makeStyles((theme: MuiTheme) => ({
  titleForm: {
    fontSize: '16px',
    lineHeight: '21px',
    color: '#07293D',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      fontWeight: 'bold',
      fontFamily: 'Effra',
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '-0.3px',
      color: '#1D253C',
      width: 'auto',
    },
  },
  titleFormHead: {
    fontSize: '20px',
    lineHeight: '18px',
    color: '#07293D',
    marginBottom: '18px',
    fontWeight: 'bold',
    [theme.breakpoints.up(768)]: {
      marginBottom: '30px',
      fontWeight: 'bold',
      fontFamily: 'Effra',
      fontSize: '36px',
      lineHeight: '40px',
      letterSpacing: '-0.5px',
      color: '#1D253C',
    },
  },
  titleFormHeadSub: {
    fontSize: '16px',
    lineHeight: '21px',
    color: '#07293D',
    marginBottom: '12px',
    fontWeight: 'bold',
    fontFamily: 'Effra',
    [theme.breakpoints.up(768)]: {
      marginBottom: '30px',
      fontWeight: 'bold',
      fontFamily: 'Effra',
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '-0.3px',
      color: '#1D253C',
    },
  },
  titleFormSubHead: {
    fontSize: '16px',
    lineHeight: '21px',
    color: '#07293D',
    fontWeight: 'bold',
    [theme.breakpoints.up(768)]: {
      fontWeight: 'bold',
      fontFamily: 'Effra',
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '-0.3px',
      color: '#1D253C',
    },
  },
  rowContainer: {
    margin: '-38px 0px 74px -44px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '40px',
      width: '724px',
      margin: '0px 0px',
    },
  },
  rowContainerFinal: {
    margin: '-38px 0px 0px -44px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '40px',
      width: '724px',
      margin: '0px 0px',
    },
  },
  rowContainerWrap: {
    margin: '-38px 0px 74px -44px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '40px',
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
  containerForm: {
    paddingLeft: 74,
    paddingRight: 74,
    maxWidth: '100%',
  },
  // my align buttom
  // alignButton: {
  //   [theme.breakpoints.up(theme.breakpoints.values.md)]: {
  //     flex: 2,
  //     margin: '0px 74px 5px 74px',
  //   },
  //   [theme.breakpoints.down(theme.breakpoints.values.md)]: {
  //     width: 140,
  //     margin: '0px 74px 0px 74px',
  //   },
  // },
  form: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '6px 0px 0px 0px',
  },
  customButtonStyles: {
    fontWeight: 'normal',
    fontFamily: 'Effra Medium',
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
  alignButtonX: {
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      flex: 2,
      margin: '0px 74px 5px 74px',
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      justifyContent: 'center',
      width: '100%',
    },
  },
}));

export function EditPageCommissionInformation({ closeModal }: any) {
  const router = useRouter();
  const [isReview] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [sessionId, setSessionId] = useState<string>();
  const { dispatch, state } = useAppContext();
  const classes = useStyles();

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onSubmit = async (values: any, actions: any) => {
    values.grossCommission = removeSignsFromNumbers(values.grossCommission);
    values.averageValue = removeSignsFromNumbers(values.averageValue);
    values.percentageTransactions = removePercentageSign(values.percentageTransactions);
    values.farmRanch = removeSignsFromNumbers(values.farmRanch);
    values.auctioneering = removeSignsFromNumbers(values.auctioneering);
    values.mortgageBrokerage = removeSignsFromNumbers(values.mortgageBrokerage);

    values.residential = Object.keys(values.residential).reduce(
      (res, key: string) => ({
        ...res,
        [key]: removeSignsFromNumbers(values.residential[key] ?? 0),
      }),
      {},
    );
    values.commercial = Object.keys(values.commercial).reduce(
      (res, key: string) => ({
        ...res,
        [key]: removeSignsFromNumbers(values.commercial[key] ?? 0),
      }),
      {},
    );

    const totalResidential = sumState(values.residential);
    const totalCommercial = sumState(values.commercial);
    const total =
      totalResidential +
      totalCommercial +
      values.farmRanch +
      values.auctioneering +
      values.mortgageBrokerage;
    values.residential.total = totalResidential;
    values.commercial.total = totalCommercial;
    values.totalCommission = total;
    storeCommissionAll(dispatch, values);
    await ky.put(`session/${sessionId}`, {
      json: {
        ...state.app,
        data: {
          ...state.app.data,
          commissionInformation: {
            ...state.app.data.commissionInformation,
            ...values,
          },
        },
      },
    });
    closeModal(false);
  };

  const sumState = (object: any) => {
    return Object.keys(object).reduce((sum, key) => sum + parseFloat(object[key] || 0), 0);
  };

  useEffect(() => {
    const sessionId = router.query.sessionId;
    if (typeof sessionId !== 'string') return;
    setSessionId(sessionId);
  }, []);

  console.log('state', state);

  return (
    <div style={{ width: '100%' }}>
      <FormApp
        initialValues={{
          grossCommission: state.app.data.commissionInformation.grossCommission,
          averageValue: state.app.data.commissionInformation.averageValue,
          commercial: {
            realEstate: state.app.data.commissionInformation.commercialCommission.realEstate,
            rawLand: state.app.data.commissionInformation.commercialCommission.rawLand,
            appraisals: state.app.data.commissionInformation.commercialCommission.appraisals,
            propertyMgmt: state.app.data.commissionInformation.commercialCommission.propertyMgmt,
            ownedProperty: state.app.data.commissionInformation.commercialCommission.ownedProperty,
          },
          farmRanch: state.app.data.commissionInformation.farmRanch,
          auctioneering: state.app.data.commissionInformation.auctioneering,
          mortgageBrokerage: state.app.data.commissionInformation.mortgageBrokerage,
          residential: {
            realEstate: state.app.data.commissionInformation.residentialCommission.realEstate,
            rawLand: state.app.data.commissionInformation.residentialCommission.rawLand,
            appraisals: state.app.data.commissionInformation.residentialCommission.appraisals,
            propertyMgmt: state.app.data.commissionInformation.residentialCommission.propertyMgmt,
            ownedProperty: state.app.data.commissionInformation.residentialCommission.ownedProperty,
          },
          percentageTransactions: state.app.data.commissionInformation.percentageTransactions,
        }}
        className={classes.form}
        // alignButton={classes.alignButton}
        customButtonStyles={classes.customButtonStyles}
        isInitValid={false}
        validationSchema={editCommissionInformationSchema}
        onSubmit={onSubmit}
        buttonLabel={'Save changes'}
        dataTestId="continueButton"
        isLoading={false}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={state.app.metadata.progressBar}
        hideButton={false}
        alignButton={classnames(classes.alignButtonX)}
      >
        {(formikProps) => {
          return (
            <>
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainer)}>
                  <Typography className={classnames(classes.titleFormHead)}>
                    {'Commission details'}
                  </Typography>
                  <Typography className={classnames(classes.titleFormHeadSub)}>
                    {'Gross commission and average value of properties sold'}
                  </Typography>
                  {FormCommissionInformation(formikProps)}
                </Column>
                <div className={classnames(classes.divTypo)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Percentage of transactions represented by both the buyer and seller'}
                  </Typography>
                </div>
                <Column className={classnames(classes.rowContainer)}>
                  {FormCommissionInformationTransaction(formikProps, isReview)}
                </Column>
                <Column
                  style={{ width: width - 300 }}
                  className={classnames(classes.rowContainerWrap)}
                >
                  <Typography className={classnames(classes.titleFormSubHead)}>
                    {width <= 720 ? 'Residential' : 'Residential commission'}
                  </Typography>
                  {FormCommissionInformationResidential(formikProps, isReview)}
                </Column>
                <Column
                  style={{ width: width - 300 }}
                  className={classnames(classes.rowContainerWrap)}
                >
                  <Typography className={classnames(classes.titleFormSubHead)}>
                    {width <= 720 ? 'Commercial' : 'Commercial commission'}
                  </Typography>
                  {FormCommissionInformationCommercial(formikProps, isReview)}
                </Column>
                <Column className={classnames(classes.rowContainerFinal)}>
                  {FormCommissionInformationOther(formikProps, isReview)}
                </Column>
              </Column>
            </>
          );
        }}
      </FormApp>
    </div>
  );
}
