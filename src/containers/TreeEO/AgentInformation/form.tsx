import { Component } from 'react';
import classnames from 'classnames';
import reactIntlUniversal from 'react-intl-universal';
import { Typography } from '@material-ui/core';

import { agentLicensedValidateSchema } from 'src/helpers/validations';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';
import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';

interface IFormFirmInformation {
  formData: any;
  dispatch: any;
  onSubmit?: any;
  hideButton?: boolean;
  classes?: any;
}

const intl = reactIntlUniversal;

@withStyles(styles)
export class FormAgentInformation extends Component<IFormFirmInformation> {
  isInitValid = false;
  isButtonLoading = false;

  render() {
    const isLoading = false;
    const { classes, formData, dispatch, hideButton, onSubmit } = this.props;
    return (
      <FormApp
        initialValues={{
          numberAgentsMoreCommission:
            formData.app.data.agentInformation.numberAgentsMoreCommission || '',
          numberAgentLessCommission:
            formData.app.data.agentInformation.numberAgentLessCommission || '',
          numberAgenteNoCommission:
            formData.app.data.agentInformation.numberAgenteNoCommission || '',
        }}
        isInitValid={this.isInitValid}
        validationSchema={agentLicensedValidateSchema}
        onSubmit={onSubmit}
        buttonLabel={'Continue'}
        dataTestId="continueButton"
        isLoading={this.isButtonLoading}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={formData.app.metadata.progressBar}
      >
        {({ touched, errors, setFieldTouched }) => {
          return (
            <>
              <Row wrap="wrap" margin="0 -8px" style={stylesComponent.rowContainer}>
                <Typography className={classnames(classes.subTitleForm)}>
                  {intl.get('app.subtitle.one.form.agent.part.one')}
                </Typography>
                <Column padding="0px 8px">
                  <FielControlForm
                    data-test-id="numberAgentsMoreCommission"
                    name="numberAgentsMoreCommission"
                    type="number"
                    label={'Number of agents'}
                    setFieldTouched={setFieldTouched}
                    errors={errors}
                    touched={touched}
                    shouldValidateOnMount
                    renderFastField
                    customWidth={94}
                  />
                </Column>
              </Row>
              <Row wrap="wrap" margin="0 -8px" style={stylesComponent.rowContainer}>
                <Typography className={classnames(classes.subTitleForm)}>
                  {intl.get('app.subtitle.two.form.agent.part.one')}
                </Typography>
                <Column padding="0px 8px">
                  <FielControlForm
                    data-test-id="numberAgentLessCommission"
                    name="numberAgentLessCommission"
                    type="number"
                    label={'Number of agents'}
                    setFieldTouched={setFieldTouched}
                    errors={errors}
                    touched={touched}
                    shouldValidateOnMount
                    renderFastField
                    customWidth={94}
                  />
                </Column>
              </Row>
              <Row wrap="wrap" margin="0 -8px" style={{ flexDirection: 'column' }}>
                <Typography className={classnames(classes.subTitleForm)}>
                  {intl.get('app.subtitle.tree.form.agent.part.one')}
                </Typography>
                <Column padding="0px 8px">
                  <FielControlForm
                    data-test-id="numberAgenteNoCommission"
                    name="numberAgenteNoCommission"
                    type="number"
                    label={'Number of agents'}
                    setFieldTouched={setFieldTouched}
                    errors={errors}
                    touched={touched}
                    shouldValidateOnMount
                    renderFastField
                    customWidth={94}
                  />
                </Column>
              </Row>
            </>
          );
        }}
      </FormApp>
    );
  }
}

const stylesComponent = {
  rowContainer: {
    marginBottom: '1.3em',
  },
};
