import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { FielControlForm } from 'src/components/FieldControlForm';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
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

export const FormAgentInformation = (formikProps: any, isReview?: boolean) => {
  const { intl } = useAppContext();
  const classes = useStyles();
  return (
    <>
      <Row wrap="wrap" className={classnames(classes.rowContainer)}>
        <Typography className={classnames(classes.subTitleForm)}>
          {isReview
            ? intl.get('app.subtitle.one.form.agent.part.one.review')
            : intl.get('app.subtitle.one.form.agent.part.one')}
        </Typography>
        <Column>
          <FielControlForm
            data-test-id="numberAgentsMoreCommission"
            name="numberAgentsMoreCommission"
            type="number"
            label={'Number of agents'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={94}
          />
        </Column>
      </Row>
      <Row wrap="wrap" className={classnames(classes.rowContainer)}>
        <Typography className={classnames(classes.subTitleForm)}>
          {isReview
            ? intl.get('app.subtitle.two.form.agent.part.one.review')
            : intl.get('app.subtitle.two.form.agent.part.one')}
        </Typography>
        <Column>
          <FielControlForm
            data-test-id="numberAgentLessCommission"
            name="numberAgentLessCommission"
            type="number"
            label={'Number of agents'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={94}
          />
        </Column>
      </Row>
      <Row wrap="wrap" className={classnames(classes.rowContainer)}>
        <Typography className={classnames(classes.subTitleForm)}>
          {isReview
            ? intl.get('app.subtitle.tree.form.agent.part.one.review')
            : intl.get('app.subtitle.tree.form.agent.part.one')}
        </Typography>
        <Column>
          <FielControlForm
            data-test-id="numberAgenteNoCommission"
            name="numberAgenteNoCommission"
            type="number"
            label={'Number of agents'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={94}
          />
        </Column>
      </Row>
    </>
  );
};
