import { Component } from 'react';

import { agentSpecialValidateSchema } from 'src/helpers/validations';
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

@withStyles(styles)
export class FormAgentInformationDesignation extends Component<IFormFirmInformation> {
  isInitValid = false;
  isButtonLoading = false;

  render() {
    const isLoading = false;
    const { classes, formData, onSubmit, dispatch, hideButton } = this.props;
    return (
      <FormApp
        initialValues={{
          numberAgentSpecialDesignation:
            formData.app.data.agentInformation.numberAgentSpecialDesignation || '',
        }}
        isInitValid={this.isInitValid}
        validationSchema={agentSpecialValidateSchema}
        onSubmit={onSubmit}
        buttonLabel={'Continue'}
        dataTestId="continueButton"
        isLoading={this.isButtonLoading}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={formData.app.metadata.progressBar}
        hideButton={false}
      >
        {({ touched, errors, setFieldTouched }) => {
          return (
            <>
              <Row wrap="wrap" margin="0 -8px">
                <Column padding="0px 8px">
                  <FielControlForm
                    data-test-id="numberAgentSpecialDesignation"
                    name="numberAgentSpecialDesignation"
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
