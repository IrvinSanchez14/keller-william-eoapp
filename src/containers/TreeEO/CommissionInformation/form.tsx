import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { FielControlForm } from 'src/components/FieldControlForm';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { useAppContext } from 'src/store';

const useStyles = makeStyles((theme: MuiTheme) => ({
  subTitleForm: {
    fontSize: 16,
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
    },
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const FormCommissionInformation = (formikProps: any) => {
  const { intl } = useAppContext();
  const classes = useStyles();

  return (
    <>
      <Row wrap="wrap" margin="0 -8px" style={stylesComponent.rowContainer}>
        <Column padding="0px 8px">
          <Typography className={classnames(classes.subTitleForm)}>
            {intl.get('app.subtitle.form.commission.part.one')}
          </Typography>
          <FielControlForm
            data-test-id="grossCommission"
            name="grossCommission"
            type="number"
            label={'Commission'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={150}
          />
        </Column>
      </Row>
      <Row wrap="wrap" margin="0 -8px" style={stylesComponent.rowContainer}>
        <Column padding="0px 8px">
          <Typography className={classnames(classes.subTitleForm)}>
            {intl.get('app.subtitle2.form.commission.part.one')}
          </Typography>
          <FielControlForm
            data-test-id="averageValue"
            name="averageValue"
            type="number"
            label={'Average property value'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={150}
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
