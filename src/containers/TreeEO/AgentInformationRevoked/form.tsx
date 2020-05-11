import { Component } from 'react';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';

import { RadioField } from 'src/components/RadioForm';

interface IFormFirmInformation {
  formData: any;
  dispatch: any;
  onSubmit?: any;
  hideButton?: boolean;
  classes?: any;
}

export const propertyUsageFields = [
  {
    id: 1,
    name: 'revokedLicense',
    value: true,
    text: 'Yes',
  },
  {
    id: 2,
    name: 'revokedLicense',
    value: false,
    text: 'No',
  },
];

export class FormAgentInformationRevoked extends Component<IFormFirmInformation> {
  isInitValid = false;
  state = {
    revokedLicense: this.props.formData.app.data.agentInformation.revokedLicense,
  };

  handleChange = (value: boolean, formikProps: any) => {
    formikProps.setFieldValue('revokedLicense', value);
    this.setState({
      revokedLicense: value,
    });
  };

  renderFormChildren = (formikProps: any) => {
    return propertyUsageFields.map((item) => (
      <FielControlForm
        key={item.id}
        name={item.name}
        renderCustomField={({ field }) => (
          <RadioField
            {...field}
            value={item.value}
            data-test-id={item.value}
            label={item.text}
            onChange={() => this.handleChange(item.value, formikProps)}
            checked={formikProps.values.revokedLicense === item.value}
          />
        )}
      />
    ));
  };

  render() {
    const isLoading = false;
    const { formData, dispatch, onSubmit, hideButton } = this.props;
    return (
      <FormApp
        initialValues={{
          revokedLicense: this.state.revokedLicense,
        }}
        isInitValid
        onSubmit={onSubmit}
        buttonLabel={'Continue'}
        dataTestId="continueButton"
        isLoading={false}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={formData.app.metadata.progressBar}
        hideButton={false}
      >
        {this.renderFormChildren}
      </FormApp>
    );
  }
}
