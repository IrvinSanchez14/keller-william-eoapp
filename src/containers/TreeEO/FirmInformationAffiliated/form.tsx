import { Component } from 'react';
import reactIntlUniversal from 'react-intl-universal';

import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';

import { RadioField } from 'src/components/RadioForm';

interface IFormFirmInformation {
  formData: any;
  dispatch: any;
  onSubmit?: any;
  hideButton?: boolean;
}

const intl = reactIntlUniversal;

export const propertyUsageFields = [
  {
    id: 1,
    name: 'isFirmOwned',
    value: true,
    text: 'YES',
  },
  {
    id: 2,
    name: 'isFirmOwned',
    value: false,
    text: 'NO',
  },
];

export class FormFirmInformationAffiliated extends Component<IFormFirmInformation> {
  isInitValid = false;
  state = {
    isFirmOwned: this.props.formData.app.data.firmInformation.isFirmOwned,
  };

  handleChange = (value: boolean, formikProps: any) => {
    formikProps.setFieldValue('isFirmOwned', value);
    this.setState({
      isFirmOwned: value,
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
            label={intl.get(`app.radio.answer.${item.text}`)}
            onChange={() => this.handleChange(item.value, formikProps)}
            checked={formikProps.values.isFirmOwned === item.value}
          />
        )}
      />
    ));
  };

  render() {
    const isLoading = false;
    const { formData, hideButton, onSubmit } = this.props;
    return (
      <FormApp
        initialValues={{
          isFirmOwned: this.state.isFirmOwned,
        }}
        isInitValid
        onSubmit={onSubmit}
        buttonLabel={'Continue'}
        dataTestId="continueButton"
        isLoading={false}
        isInQuestionnaire
        dispatch={this.props.dispatch}
        progressBar={formData.app.metadata.progressBar}
        hideButton={hideButton}
      >
        {this.renderFormChildren}
      </FormApp>
    );
  }
}
