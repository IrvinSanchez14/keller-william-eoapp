import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { FielControlForm } from 'src/components/FieldControlForm';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { useAppContext } from 'src/store';
import { moneyMask } from 'src/utils';

const useStyles = makeStyles((theme: MuiTheme) => ({
  subTitleForm: {
    fontSize: 16,
    width: '100%',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
    },
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1.3em',
    maxWidth: 410,
  },
  column: {
    width: '100%',
  },
}));

export const FormCommissionInformation = (formikProps: any) => {
  const { intl } = useAppContext();
  const classes = useStyles();

  return (
    <>
      <Row wrap="wrap" margin="0 -8px" className={classes.rowContainer}>
        <Column className={classes.column} padding="0px 8px">
          <Typography className={classnames(classes.subTitleForm)}>
            {intl.get('app.subtitle.form.commission.part.one')}
          </Typography>
          <FielControlForm
            data-test-id="grossCommission"
            name="grossCommission"
            placeholder="$0"
            label={'Commission'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={150}
            numberMask
            setNumberMask={moneyMask}
          />
        </Column>
      </Row>
      <Row wrap="wrap" margin="0 -8px" className={classes.rowContainer}>
        <Column className={classes.column} padding="0px 8px">
          <Typography className={classnames(classes.subTitleForm)}>
            {intl.get('app.subtitle2.form.commission.part.one')}
          </Typography>
          <FielControlForm
            data-test-id="averageValue"
            name="averageValue"
            placeholder="$0"
            label={'Average property value'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={150}
            numberMask
            setNumberMask={moneyMask}
          />
        </Column>
      </Row>
    </>
  );
};
