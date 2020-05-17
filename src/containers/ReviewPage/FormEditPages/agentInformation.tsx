import classnames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FormApp } from 'src/components/FormApp';

import { useAppContext } from 'src/store';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { storeAgentInformation } from 'src/store/actions/app';

import { Column } from 'src/components/LayoutWrapper/Flex';
import { FormAgentInformation } from 'src/containers/TreeEO/AgentInformation/form';
import { FormAgentInformationDesignation } from 'src/containers/TreeEO/AgentInformationDesignation/form';
import { FormAgentInformationRevoked } from 'src/containers/TreeEO/AgentInformationRevoked/form';
import { useState, useEffect } from 'react';
import ky from 'src/utils/ky';
import Hr from 'src/components/Hr';

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
  containerForm: {
    paddingLeft: 74,
    paddingRight: 74,
    maxWidth: 1030,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
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

export function EditPageAgentInformation({ closeModal }: any) {
  const router = useRouter();
  const [isReview] = useState(true);
  const [sessionId, setSessionId] = useState<string>();
  const { dispatch, state, intl } = useAppContext();
  const classes = useStyles();

  const onSubmit = async (values: any, actions: any) => {
    storeAgentInformation(dispatch, values);
    await ky.put(`session/${sessionId}`, {
      json: {
        ...state.app,
        data: {
          ...state.app.data,
          agentInformation: {
            ...state.app.data.agentInformation,
            ...values,
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
        alignButton={classes.alignButton}
        customButtonStyles={classes.customButtonStyles}
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
                <Column className={classnames(classes.rowContainer)}>
                  <Typography className={classnames(classes.titleSpecial)}>
                    {'Special designations'}
                  </Typography>
                  {FormAgentInformationDesignation(formikProps)}
                </Column>
              </Column>
              <Hr />
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainerDetail)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Firm details'}
                  </Typography>
                  <Typography className={classnames(classes.textFirm)}>
                    {intl.get('app.head.form.agent.part.three')}
                  </Typography>
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
