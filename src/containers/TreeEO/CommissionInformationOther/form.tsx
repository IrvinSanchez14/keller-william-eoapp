import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { FielControlForm } from 'src/components/FieldControlForm';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { useAppContext } from 'src/store';
import { moneyMask } from 'src/utils';

const useStyles = makeStyles((theme: MuiTheme) => ({
  titleForm: {
    color: '#07293D',
    fontSize: 16,
    lineHeight: '21px',
    fontWeight: 'bold',
    marginBottom: '1.3em',
    margin: '0 15px',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      lineHeight: '28px',
      marginBottom: '0.7em',
      margin: '0 15px',
      color: '#07293D',
    },
  },
  rowContainer: {
    marginBottom: '1.3em',
  },
  column: {
    width: '100%',
  },
  subTitleForm: {
    fontSize: 16,
    lineHeight: '21px',
    width: '100%',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      lineHeight: '28px',
    },
  },
  subTitleFormReview: {
    fontSize: 16,
    lineHeight: '21px',
    width: '100%',
    fontWeight: 'bold',
    fontFamily: 'Effra',
    marginBottom: '10px',
    color: '#07293D',
    [theme.breakpoints.up(768)]: {
      fontSize: 24,
      lineHeight: '32px',
      color: '#1D253C',
      fontFamily: 'Effra',
      fontWeight: 'bold',
      marginBottom: '12px',
    },
  },
  containerOne: {
    padding: '0px 0px',
    [theme.breakpoints.up(768)]: {
      padding: '0px 8px',
    },
  },
  containerTwo: {
    padding: '0px 0px',
    [theme.breakpoints.up(768)]: {
      padding: '0px 30px',
    },
  },
  containerTotal: {
    marginTop: 20,
    [theme.breakpoints.up(768)]: {
      marginTop: 85,
    },
  },
  divContainerTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  stepHeader: {
    fontSize: '24px',
    lineHeight: '28px',
    [theme.breakpoints.up(768)]: {
      fontSize: '56px',
      lineHeight: '62px',
      marginBottom: '3.7em',
    },
  },
  stepBottom: {
    fontSize: '16px',
    lineHeight: '20px',
    [theme.breakpoints.up(768)]: {
      fontSize: '22px',
      lineHeight: '28px',
      marginTop: 55,
    },
  },
  textTotal: {
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 'bold',
    marginBottom: '1.3em',
    margin: '0 15px',
    marginTop: '2px',
    [theme.breakpoints.up(768)]: {
      fontSize: '22px',
      lineHeight: '28px',
      color: '#07293D',
      marginTop: '10px',
    },
  },
  textNumberTotal: {
    fontSize: 24,
    lineHeight: '20px',
    fontWeight: 'bold',
    marginBottom: '1.3em',
    margin: '0 15px',
    [theme.breakpoints.up(768)]: {
      fontSize: '48px',
      lineHeight: '48px',
    },
  },
  rowFinal: {
    [theme.breakpoints.up(768)]: {
      marginBottom: '7em',
    },
  },
}));

export const FormCommissionInformationOther = (formikProps: any, isReview?: boolean) => {
  const { intl } = useAppContext();
  const classes = useStyles();
  return (
    <>
      <Row wrap="wrap" className={classes.rowContainer}>
        <Column className={classes.column}>
          <Typography
            className={classnames(isReview ? classes.subTitleFormReview : classes.subTitleForm)}
          >
            {isReview
              ? intl.get('app.subtitle.one.commission.part.six.review')
              : intl.get('app.subtitle.one.commission.part.six')}
          </Typography>
          <FielControlForm
            data-test-id="farmRanch"
            name="farmRanch"
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={150}
            placeholder="$0"
            numberMask
            setNumberMask={moneyMask}
          />
        </Column>
      </Row>
      <Row wrap="wrap" className={classes.rowContainer}>
        <Column className={classes.column}>
          <Typography
            className={classnames(isReview ? classes.subTitleFormReview : classes.subTitleForm)}
          >
            {isReview
              ? intl.get('app.subtitle.two.commission.part.six.review')
              : intl.get('app.subtitle.two.commission.part.six')}
          </Typography>
          <FielControlForm
            data-test-id="auctioneering"
            name="auctioneering"
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={150}
            placeholder="$0"
            numberMask
            setNumberMask={moneyMask}
          />
        </Column>
      </Row>
      <Row wrap="wrap" className={isReview ? '' : classnames(classes.rowFinal)}>
        <Column className={classes.column}>
          <Typography
            className={classnames(isReview ? classes.subTitleFormReview : classes.subTitleForm)}
          >
            {isReview
              ? intl.get('app.subtitle.three.commission.part.six.review')
              : intl.get('app.subtitle.three.commission.part.six')}
          </Typography>
          <FielControlForm
            data-test-id="mortageBrokerage"
            name="mortageBrokerage"
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={150}
            placeholder="$0"
            numberMask
            setNumberMask={moneyMask}
          />
        </Column>
      </Row>
    </>
  );
};
