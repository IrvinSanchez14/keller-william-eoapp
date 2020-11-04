import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import { FielControlForm } from 'src/components/FieldControlForm';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { useAppContext } from 'src/store';

const useStyles = makeStyles((theme: MuiTheme) => ({
  subTitleForm: {
    fontSize: 16,
    width: '100%',
    maxWidth: 478,
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
    },
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowContainerReviewPage: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
}));

export const FormAgentInformation = (formikProps: any, isReview?: boolean) => {
  const { intl } = useAppContext();
  const classes = useStyles();
  return (
    <>
      <Row
        wrap="wrap"
        className={classnames(isReview ? classes.rowContainerReviewPage : classes.rowContainer)}
      >
        <Typography className={classnames(classes.subTitleForm)}>
          {isReview
            ? intl.get('app.subtitle.one.form.agent.part.one.review')
            : intl.get('app.subtitle.one.form.agent.part.one')}
        </Typography>
        <Column>
          <FielControlForm
            data-test-id="numberAgentsMoreCommission"
            name="numberAgentsMoreCommission"
            label={'Number of agents'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={94}
            numberMask
          />
        </Column>
      </Row>
      <Row
        wrap="wrap"
        className={classnames(isReview ? classes.rowContainerReviewPage : classes.rowContainer)}
      >
        <Typography className={classnames(classes.subTitleForm)}>
          {isReview
            ? intl.get('app.subtitle.two.form.agent.part.one.review')
            : intl.get('app.subtitle.two.form.agent.part.one')}
        </Typography>
        <Column>
          <FielControlForm
            data-test-id="numberAgentLessCommission"
            name="numberAgentLessCommission"
            label={'Number of agents'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={94}
            numberMask
          />
        </Column>
      </Row>
      <Row
        wrap="wrap"
        className={classnames(isReview ? classes.rowContainerReviewPage : classes.rowContainer)}
      >
        <Typography className={classnames(classes.subTitleForm)}>
          {isReview
            ? intl.get('app.subtitle.tree.form.agent.part.one.review')
            : intl.get('app.subtitle.tree.form.agent.part.one')}
        </Typography>
        <Column>
          <FielControlForm
            data-test-id="numberAgenteNoCommission"
            name="numberAgenteNoCommission"
            label={'Number of agents'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={94}
            numberMask
          />
        </Column>
      </Row>
    </>
  );
};
