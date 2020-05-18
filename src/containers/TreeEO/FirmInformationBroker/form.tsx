import { Typography } from '@material-ui/core';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { FielControlForm } from 'src/components/FieldControlForm';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { dateMask } from 'src/utils';

const useStyles = makeStyles((theme: MuiTheme) => ({
  titleForm: {
    fontSize: 16,
    lineHeight: '14px',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      lineHeight: '28px',
      marginBottom: '-0.2em',
    },
  },
  fielControlForm: {
    width: 161,
    height: 60,
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      width: 119,
      height: 40,
    },
  },
  rowStyles: {
    margin: '0 -8px',
    '& .column': {
      padding: '0 8px',
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        '&:nth-of-type(2)': {
          paddingTop: '23px',
        },
      },
    },
  },
  containerFirst: {
    marginBottom: '24px',
  },
}));

export const FormFirmInformationBroker = (formikProps: any) => {
  const classes = useStyles();
  return (
    <>
      <Column className={classnames(classes.containerFirst)}>
        <Typography className={classnames(classes.titleForm)}>
          Date broker licensed as an agent
        </Typography>
        <FielControlForm
          data-test-id="dateLicensedBrokerAgent"
          id="dateLicensedBrokerAgent"
          name="dateLicensedBrokerAgent"
          type="text"
          label={'Date'}
          placeholder="MM/DD/YYYY"
          mask={dateMask}
          setFieldTouched={formikProps.setFieldTouched}
          errors={formikProps.errors}
          touched={formikProps.touched}
          shouldValidateOnMount
          className={classnames(classes.fielControlForm)}
          renderFastField
        />
      </Column>

      <Column>
        <Typography className={classnames(classes.titleForm)}>
          Date licensed as a broker.
        </Typography>
        <FielControlForm
          data-test-id="dateLicensedBroker"
          name="dateLicensedBroker"
          type="text"
          label={'Date'}
          setFieldTouched={formikProps.setFieldTouched}
          errors={formikProps.errors}
          touched={formikProps.touched}
          className={classnames(classes.fielControlForm)}
          shouldValidateOnMount
          placeholder="MM/DD/YYYY"
          mask={dateMask}
          renderFastField
        />
      </Column>
    </>
  );
};
