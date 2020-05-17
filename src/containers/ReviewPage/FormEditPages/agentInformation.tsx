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
import { editAgentInformationSchema } from 'src/helpers/validations';
import { removeSignsFromNumbers } from 'src/utils';
import { Divider } from '@material-ui/core';

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
    <>
      <FormApp
        initialValues={{
          numberAgentsMoreCommission: state.app.data.agentInformation.numberAgentsMoreCommission,
          numberAgentLessCommission: state.app.data.agentInformation.numberAgentLessCommission,
          numberAgenteNoCommission: state.app.data.agentInformation.numberAgenteNoCommission,
          numberAgentSpecialDesignation:
            state.app.data.agentInformation.numberAgentSpecialDesignation,
          revokedLicense: state.app.data.agentInformation.revokedLicense,
        }}
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
      >
        {(formikProps) => {
          return (
            <>
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Total number of licensed agents'}
                </Typography>
                {FormAgentInformation(formikProps, isReview)}
              </Column>
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleSpecial)}>
                  {'Special designations'}
                </Typography>
                {FormAgentInformationDesignation(formikProps)}
              </Column>
              <Column className={classnames(classes.rowContainerDetail)}>
                <Typography className={classnames(classes.titleForm)}>{'Firm details'}</Typography>
                <Typography className={classnames(classes.textFirm)}>
                  {intl.get('app.head.form.agent.part.three')}
                </Typography>
                {FormAgentInformationRevoked(formikProps, handleChange)}
              </Column>
            </>
          );
        }}
      </FormApp>
    </>
  );
}
