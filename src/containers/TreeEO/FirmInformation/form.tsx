import { Component } from 'react';

import { FormikProps } from 'src/typesInterface/IAppStoreProps';
import { FielControlForm } from 'src/components/FieldControlForm';
import { getFullNameFields } from 'src/helpers/fieldsForm';
import { FormApp } from 'src/components/FormApp';
import { fullNameValidateSchema } from 'src/helpers/validations';

interface IFormFirmInformation {
  formData: any;
  dispatch: any;
  onSubmit?: any;
  hideButton?: boolean;
}

export class FormFirmInformation extends Component<IFormFirmInformation> {
  isInitValid = false;
  isButtonLoading = false;

  renderFormChildren = ({ errors, touched, setFieldTouched }: FormikProps) =>
    getFullNameFields().map(({ name, type, customWidth, label }) => (
      <FielControlForm
        data-test-id={name}
        key={name}
        name={name}
        type={type}
        setFieldTouched={setFieldTouched}
        label={label}
        fullWidth
        errors={errors}
        touched={touched}
        renderFastField
        customWidth={customWidth}
      />
    ));

  render() {
    const isLoading = false;
    const { formData, onSubmit, hideButton } = this.props;
    return (
      <FormApp
        initialValues={{
          contacName: formData.app.data.firmInformation.contacName || '',
          brokerName: formData.app.data.firmInformation.brokerName || '',
          kwMarketCenterName: formData.app.data.firmInformation.kwMarketCenterName || '',
          yearEstablished: formData.app.data.firmInformation.yearEstablished || '',
        }}
        isInitValid={this.isInitValid}
        validationSchema={fullNameValidateSchema}
        onSubmit={onSubmit}
        buttonLabel={'Continue'}
        dataTestId="continueButton"
        isLoading={this.isButtonLoading}
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
