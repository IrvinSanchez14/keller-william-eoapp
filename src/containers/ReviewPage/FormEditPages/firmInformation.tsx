import classnames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import { Typography } from '@material-ui/core';
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
    fontFamily: 'Effra',
    [theme.breakpoints.up(768)]: {
      marginBottom: '30px',
      fontWeight: 'bold',
      fontSize: '36px',
      lineHeight: '40px',
      letterSpacing: '-0.5px',
      color: '#1D253C',
      fontFamily: 'Effra',
    },
  },
  titleFormEspecial: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '28px',
    color: '#07293D',
    marginBottom: '12px',
    fontFamily: 'Effra',
    [theme.breakpoints.up(768)]: {
      marginBottom: '25px',
      fontWeight: 'bold',
      fontSize: '22px',
      lineHeight: '28px',
      color: '#1D253C',
      fontFamily: 'Effra',
    },
  },
  rowContainer: {
    margin: '-38px 0px 67px -44px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '121px',
      width: '512px',
      margin: '0px 0px',
    },
  },
  rowContainerSecond: {
    margin: '0px 0px 67px -44px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      marginBottom: '121px',
      width: '512px',
      margin: '0px 0px',
    },
  },
  textFirm: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '21px',
    marginBottom: '0px',
    color: '#07293D',
    letterSpacing: '0px',
    width: '260px',
    [theme.breakpoints.up(768)]: {
      fontSize: '24px',
      lineHeight: '29px',
      marginBottom: '25px',
      fontWeight: 'bold',
      letterSpacing: '-0.3px',
      fontFamily: 'Effra',
      color: '#07293D',
      width: 'auto',
    },
  },
  rowContainerDetail: {
    margin: '-38px 0px -18px -44px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      width: 512,
      margin: '0px 0px',
    },
  },
  divTypo: {
    margin: '0px 0px 55px 35px',
    [theme.breakpoints.up(768)]: {
      margin: '-25px 0px 39px 87px',
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
    maxWidth: 482,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 312,
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
    fontWeight: 'normal',
    fontFamily: 'Effra Medium',
  },
  alignButtonX: {
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      flex: 2,
      margin: '0px 74px 5px 74px',
      fontFamily: 'Effra',
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      justifyContent: 'center',
      width: '100%',
      fontFamily: 'Effra',
    },
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
          kwMarketCenterNumber: state.app.data.firmInformation.kwMarketCenterNumber,
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
        alignButton={classnames(classes.alignButtonX)}
      >
        {(formikProps) => {
          return (
            <div style={{ width: '100%' }}>
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainer)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Basic Information'}
                  </Typography>
                  <Typography className={classnames(classes.titleFormEspecial)}>
                    {'Keller Williams Realty, Inc.'}
                  </Typography>
                  {FormFirmInformation(formikProps, true)}
                </Column>
              </Column>
              <Hr />
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainerSecond)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Contact information'}
                  </Typography>
                  {FormFirmInformationEmail(formikProps)}
                </Column>
              </Column>
              <Hr />
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainerSecond)}>
                  <Typography className={classnames(classes.titleForm)}>
                    {'Broker information'}
                  </Typography>
                  {FormFirmInformationBroker(formikProps)}
                </Column>
              </Column>
              <Hr />
              <div className={classnames(classes.divTypo)}>
                <Typography className={classnames(classes.titleForm)}>{'Firm details'}</Typography>
                <Typography className={classnames(classes.textFirm)}>
                  {
                    'Is your firm independently owned and not controlled, affiliated with, or owned by another entity?'
                  }
                </Typography>
              </div>
              <Column className={classnames(classes.containerForm)}>
                <Column className={classnames(classes.rowContainerDetail)}>
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
