import { useState, useEffect } from 'react';
import ky from 'src/utils/ky';
import classnames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { FormApp } from 'src/components/FormApp';
import { useAppContext } from 'src/store';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { storeAgentInformation } from 'src/store/actions/app';
import { Column } from 'src/components/LayoutWrapper/Flex';
import { FormAgentInformation } from 'src/containers/TreeEO/AgentInformation/form';
import { FormAgentInformationDesignation } from 'src/containers/TreeEO/AgentInformationDesignation/form';
import { FormAgentInformationRevoked } from 'src/containers/TreeEO/AgentInformationRevoked/form';
import Hr from 'src/components/Hr';
import { editAgentInformationSchema } from 'src/helpers/validations';
import { removeSignsFromNumbers } from 'src/utils';

const useStyles = makeStyles((theme: MuiTheme) => ({
  titleForm: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '18px',
    color: '#07293D',
    marginBottom: '18px',
    fontFamily: 'Effra',
    [theme.breakpoints.up(768)]: {
      marginBottom: '30px',
      fontFamily: 'Effra',
      fontWeight: 'bold',
      fontSize: '36px',
      lineHeight: '40px',
      letterSpacing: '-0.5px',
      color: '#1D253C',
    },
  },
  rowContainer: {
    margin: '-38px 0px 67px -44px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '121px',
      width: '100%',
      margin: '0px 0px',
    },
  },
  rowContainerSecond: {
    margin: '0px 0px 67px -44px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '121px',
      width: '100%',
      margin: '0px 0px',
    },
  },
  titleSpecial: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '18px',
    color: '#07293D',
    marginBottom: '15px',
    fontFamily: 'Effra',
    [theme.breakpoints.up(768)]: {
      marginBottom: '30px',
      fontFamily: 'Effra',
      fontWeight: 'bold',
      fontSize: '36px',
      lineHeight: '40px',
      letterSpacing: '-0.5px',
      color: '#1D253C',
    },
  },
  textFirm: {
    fontSize: '16px',
    lineHeight: '21px',
    marginBottom: '16px',
    fontWeight: 'bold',
    [theme.breakpoints.up(768)]: {
      fontFamily: 'Effra',
      fontSize: '24px',
      lineHeight: '30px',
      marginBottom: '30px',
      letterSpacing: '-0.3px',
      fontWeight: 'bold',
    },
  },
  rowContainerDetail: {
    margin: '-38px 0px -18px -44px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      width: '510px',
      margin: '0px 0px',
    },
  },
  divTypo: {
    margin: '0px 0px 55px 35px',
    [theme.breakpoints.up(768)]: {
      margin: '-25px 0px 0px 87px',
      width: 'auto',
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
  containerForm: {
    paddingLeft: 74,
    paddingRight: 74,
    maxWidth: 1030,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  // my alignButton
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

export function EditPageAgentInformation({ closeModal }: any) {
  const router = useRouter();
  const [isReview] = useState(true);
  const [sessionId, setSessionId] = useState<string>();
  const { dispatch, state, intl } = useAppContext();
  const classes = useStyles();

  const onSubmit = async (values: any, actions: any) => {
    const parsedValues = {
      ...values,
      numberAgentsMoreCommission: removeSignsFromNumbers(values.numberAgentsMoreCommission),
      numberAgentLessCommission: removeSignsFromNumbers(values.numberAgentLessCommission),
      numberAgenteNoCommission: removeSignsFromNumbers(values.numberAgenteNoCommission),
      numberAgentSpecialDesignation: removeSignsFromNumbers(values.numberAgentSpecialDesignation),
    };
    storeAgentInformation(dispatch, values);
    await ky.put(`session/${sessionId}`, {
      json: {
        ...state.app,
        data: {
          ...state.app.data,
          agentInformation: {
            ...state.app.data.agentInformation,
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

  const handleChange = (value: boolean, formikProps: any) => {
    formikProps.setFieldValue('revokedLicense', value);
  };

  return (
    <div style={{ width: '100%' }}>
      <FormApp
        initialValues={{
          numberAgentsMoreCommission: state.app.data.agentInformation.numberAgentsMoreCommission,
          numberAgentLessCommission: state.app.data.agentInformation.numberAgentLessCommission,
          numberAgenteNoCommission: state.app.data.agentInformation.numberAgenteNoCommission,
          numberAgentSpecialDesignation:
            state.app.data.agentInformation.numberAgentSpecialDesignation,
          revokedLicense: state.app.data.agentInformation.revokedLicense,
        }}
        className={classes.form}
        // alignButton={classes.alignButton}
        customButtonStyles={classes.customButtonStyles}
        isInitValid={false}
        validationSchema={editAgentInformationSchema}
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
                  <Typography className={classnames(classes.titleForm)}>
                    {'Total number of licensed agents'}
                  </Typography>
                  {FormAgentInformation(formikProps, isReview)}
                </Column>
              </Column>
              <Hr />
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainerSecond)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Special designations'}
                  </Typography>
                  {FormAgentInformationDesignation(formikProps)}
                </Column>
              </Column>
              <Hr />
              <div className={classnames(classes.divTypo)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Cancellations and revocations'}
                </Typography>
                <Typography className={classnames(classes.textFirm)}>
                  {
                    'Have any licensees of the firm had their license cancelled or revoked in the last three years?'
                  }
                </Typography>
              </div>
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainerDetail)}>
                  {FormAgentInformationRevoked(formikProps, handleChange)}
                </Column>
              </Column>
            </>
          );
        }}
      </FormApp>
    </div>
  );
}
