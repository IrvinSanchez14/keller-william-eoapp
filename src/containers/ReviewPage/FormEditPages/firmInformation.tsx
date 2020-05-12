import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FormApp } from 'src/components/FormApp';

import { useAppContext } from 'src/store';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { storeFirmConfirmation } from 'src/store/actions/app';

import { FormFirmInformation } from 'src/containers/TreeEO/FirmInformation/form';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { FormFirmInformationEmail } from 'src/containers/TreeEO/FirmInformationEmail/form';
import { FormFirmInformationAffiliated } from 'src/containers/TreeEO/FirmInformationAffiliated/form';
import { FormFirmInformationBroker } from 'src/containers/TreeEO/FirmInformationBroker/form';

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

export function EditPageFirmInformation() {
  const { dispatch, state, intl } = useAppContext();
  const classes = useStyles();

  const onSubmit = (values: any, actions: any) => {
    storeFirmConfirmation(dispatch, values);
  };

  const handleChange = (value: boolean, formikProps: any) => {
    formikProps.setFieldValue('isFirmOwned', value);
  };

  return (
    <>
      <FormApp
        initialValues={{
          contacName: state.app.data.firmInformation.contacName,
          brokerName: state.app.data.firmInformation.brokerName,
          kwMarketCenterName: state.app.data.firmInformation.kwMarketCenterName,
          yearEstablished: state.app.data.firmInformation.yearEstablished,
          streetAddress: state.app.data.firmInformation.streetAddress,
          suite: state.app.data.firmInformation.suite,
          phoneNumber: state.app.data.firmInformation.phoneNumber,
          faxNumber: state.app.data.firmInformation.faxNumber,
          emailAddress: state.app.data.firmInformation.email,
          dateLicensedBrokerAgent: state.app.data.firmInformation.dateLicensedBrokerAgent,
          dateLicensedBroker: state.app.data.firmInformation.dateLicensedBroker,
          isFirmOwned: state.app.data.firmInformation.isFirmOwned,
        }}
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
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Basic Information'}
                </Typography>
                {FormFirmInformation(formikProps)}
              </Column>
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Contact information'}
                </Typography>
                {FormFirmInformationEmail(formikProps)}
              </Column>
              <Column className={classnames(classes.rowContainer)}>
                <Typography className={classnames(classes.titleForm)}>
                  {'Broker information'}
                </Typography>
                {FormFirmInformationBroker(formikProps)}
              </Column>
              <Column className={classnames(classes.rowContainerDetail)}>
                <Typography className={classnames(classes.titleForm)}>{'Firm details'}</Typography>
                <Typography className={classnames(classes.textFirm)}>
                  {intl.get('app.head.form.firm.part.three')}
                </Typography>
                {FormFirmInformationAffiliated(formikProps, handleChange)}
              </Column>
            </>
          );
        }}
      </FormApp>
    </>
  );
}
