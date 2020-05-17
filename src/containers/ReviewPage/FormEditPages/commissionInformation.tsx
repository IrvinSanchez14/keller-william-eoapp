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

export function EditPageCommissionInformation({ closeModal }: any) {
  const router = useRouter();
  const [isReview] = useState(true);
  const [sessionId, setSessionId] = useState<string>();
  const { dispatch, state } = useAppContext();
  const classes = useStyles();

  const onSubmit = async (values: any, actions: any) => {
    values.grossCommission = removeSignsFromNumbers(values.grossCommission);
    values.averageValue = removeSignsFromNumbers(values.averageValue);
    values.percentageTransactions = removePercentageSign(values.percentageTransactions);
    values.farmRanch = removeSignsFromNumbers(values.farmRanch);
    values.auctioneering = removeSignsFromNumbers(values.auctioneering);
    values.mortageBrokerage = removeSignsFromNumbers(values.mortageBrokerage);

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
      values.mortageBrokerage;
    values.residential.total = totalResidential;
    values.commercial.total = totalCommercial;
    values.totalCommision = total;
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

  return (
    <>
      <FormApp
        initialValues={{
          grossCommission: state.app.data.commissionInformation.grossCommission,
          averageValue: state.app.data.commissionInformation.averageValue,
          commercial: {
            realEstate: state.app.data.commissionInformation.commercial.realEstate,
            rawLand: state.app.data.commissionInformation.commercial.rawLand,
            appraisals: state.app.data.commissionInformation.commercial.appraisals,
            propertyMgmt: state.app.data.commissionInformation.commercial.propertyMgmt,
            ownedProperty: state.app.data.commissionInformation.commercial.ownedProperty,
          },
          farmRanch: state.app.data.commissionInformation.farmRanch,
          auctioneering: state.app.data.commissionInformation.auctioneering,
          mortageBrokerage: state.app.data.commissionInformation.mortageBrokerage,
          residential: {
            realEstate: state.app.data.commissionInformation.residential.realEstate,
            rawLand: state.app.data.commissionInformation.residential.rawLand,
            appraisals: state.app.data.commissionInformation.residential.appraisals,
            propertyMgmt: state.app.data.commissionInformation.residential.propertyMgmt,
            ownedProperty: state.app.data.commissionInformation.residential.ownedProperty,
          },
          percentageTransactions: state.app.data.commissionInformation.percentageTransactions,
        }}
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
