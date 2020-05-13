import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { FielControlForm } from 'src/components/FieldControlForm';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { useAppContext } from 'src/store';

const useStyles = makeStyles((theme: MuiTheme) => ({
  subTitleForm: {
    color: '#07293D',
    fontSize: '16px',
    lineHeight: '21px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      fontSize: '22px',
      lineHeight: '28px',
      width: '100%',
    },
  },
}));

export const FormCommissionInformationTransaction = (formikProps: any) => {
  const { intl } = useAppContext();
  const classes = useStyles();
  return (
    <>
      <Row wrap="wrap" style={stylesComponent.rowContainer}>
        <Typography className={classnames(classes.subTitleForm)}>
          {intl.get('app.subtitle.form.commission.part.two')}
        </Typography>
        <Column>
          <FielControlForm
            data-test-id="percentageTransactions"
            name="percentageTransactions"
            type="number"
            label={'Percentage of transactions'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            placeholder="%"
            shouldValidateOnMount
            renderFastField
            customWidth={100}
          />
        </Column>
      </Row>
    </>
  );
};

const stylesComponent = {
  rowContainer: {
    marginBottom: '1.3em',
  },
};
