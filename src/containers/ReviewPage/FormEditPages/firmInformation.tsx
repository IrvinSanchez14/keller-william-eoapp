import classnames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FormApp } from 'src/components/FormApp';

import { useAppContext } from 'src/store';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { storeFirmConfirmation } from 'src/store/actions/app';

import { FormFirmInformation } from 'src/containers/TreeEO/FirmInformation/form';
import { Column } from 'src/components/LayoutWrapper/Flex';
import { FormFirmInformationEmail } from 'src/containers/TreeEO/FirmInformationEmail/form';
import { FormFirmInformationAffiliated } from 'src/containers/TreeEO/FirmInformationAffiliated/form';
import { FormFirmInformationBroker } from 'src/containers/TreeEO/FirmInformationBroker/form';
import ky from 'src/utils/ky';
import { useEffect, useState } from 'react';
import Hr from 'src/components/Hr';
import { editFirmInformationSchema } from 'src/helpers/validations';

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
    // marginLeft: 60,
    marginBottom: '60px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '121px',
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
    maxWidth: 482,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 312,
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

export function EditPageFirmInformation({ closeModal }: any) {
  const router = useRouter();
  const [sessionId, setSessionId] = useState<string>();
  const { dispatch, state, intl } = useAppContext();
  const classes = useStyles();

  const onSubmit = async (values: any, actions: any) => {
    values.suite = values.suite === '' ? null : values.suite;
    storeFirmConfirmation(dispatch, values);
    await ky.put(`session/${sessionId}`, {
      json: {
        ...state.app,
        data: {
          ...state.app.data,
          firmInformation: {
            ...state.app.data.firmInformation,
            ...values,
          },
        },
      },
    });
    closeModal(false);
  };

  const handleChange = (value: boolean, formikProps: any) => {
    formikProps.setFieldValue('isFirmOwned', value);
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
          contactName: state.app.data.firmInformation.contactName,
          brokerName: state.app.data.firmInformation.brokerName,
          kwMarketCenterName: state.app.data.firmInformation.kwMarketCenterName,
          yearEstablished: state.app.data.firmInformation.yearEstablished,
          streetAddress: state.app.data.firmInformation.streetAddress,
          suite: state.app.data.firmInformation.suite || null,
          phoneNumber: state.app.data.firmInformation.phoneNumber,
          faxNumber: state.app.data.firmInformation.faxNumber,
          email: state.app.data.firmInformation.email,
          dateLicensedBrokerAgent: state.app.data.firmInformation.dateLicensedBrokerAgent,
          dateLicensedBroker: state.app.data.firmInformation.dateLicensedBroker,
          isFirmOwned: state.app.data.firmInformation.isFirmOwned,
        }}
        className={classes.form}
        alignButton={classes.alignButton}
        customButtonStyles={classes.customButtonStyles}
        isInitValid={false}
        validationSchema={editFirmInformationSchema}
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
            <div style={{ width: '100%' }}>
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainer)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Basic Information'}
                  </Typography>
                  {FormFirmInformation(formikProps)}
                </Column>
              </Column>
              <Hr />
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainer)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Contact information'}
                  </Typography>
                  {FormFirmInformationEmail(formikProps)}
                </Column>
              </Column>
              <Hr />
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainer)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Broker information'}
                  </Typography>
                  {FormFirmInformationBroker(formikProps)}
                </Column>
              </Column>
              <Hr />
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainerDetail)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Firm details'}
                  </Typography>
                  <Typography className={classnames(classes.textFirm)}>
                    {intl.get('app.head.form.firm.part.three')}
                  </Typography>
                  {FormFirmInformationAffiliated(formikProps, handleChange)}
                </Column>
              </Column>
            </div>
          );
        }}
      </FormApp>
    </div>
  );
}
