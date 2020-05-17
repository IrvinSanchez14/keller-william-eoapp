import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { Typography } from '@material-ui/core';

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

export const FormRiskProfileTransaction = (formikProps: any, isReview?: boolean) => {
  const { intl } = useAppContext();
  const classes = useStyles();
  return (
    <>
      <Row wrap="wrap" style={stylesComponent.rowContainer}>
        {isReview ? null : (
          <Typography className={classnames(classes.subTitleForm)}>
            {intl.get('app.title.form.risk.part.five')}
          </Typography>
        )}

        <Column padding="0px 8px">
          <FielControlForm
            data-test-id="percentageTransactions"
            name="percentageTransactions"
            label={isReview ? '' : 'Percentage of transactions'}
            setFieldTouched={formikProps.setFieldTouched}
            placeholder="%"
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={100}
            percentageMask
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
