import { Component } from 'react';

import { FormikProps } from 'src/typesInterface/IAppStoreProps';
import { fullEmailValidateSchema } from 'src/helpers/validations';
import { getFullEmailFields } from 'src/helpers/fieldsForm';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';
import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';

interface IFormFirmInformation {
  formData: any;
  dispatch: any;
  onSubmit?: any;
  hideButton?: boolean;
  classes?: any;
}

@withStyles(styles)
export class FormFirmInformationEmail extends Component<IFormFirmInformation> {
  isInitValid = false;

  renderFormChildren = ({ errors, touched, setFieldTouched }: FormikProps) =>
    getFullEmailFields().map(({ name, type, customWidth, label }) => (
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
    const { formData, hideButton, onSubmit, dispatch } = this.props;
    return (
      <FormApp
        initialValues={{
          streetAddress: formData.app.data.firmInformation.streetAddress || '',
          suite: formData.app.data.firmInformation.suite || '',
          phoneNumber: formData.app.data.firmInformation.phoneNumber || '',
          faxNumber: formData.app.data.firmInformation.faxNumber || '',
          emailAddress: formData.app.data.firmInformation.emailAddress || '',
        }}
        isInitValid={this.isInitValid}
        validationSchema={fullEmailValidateSchema}
        onSubmit={onSubmit}
        buttonLabel={'Continue'}
        dataTestId="continueButton"
        isLoading={false}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={formData.app.metadata.progressBar}
        hideButton={hideButton}
      >
        {this.renderFormChildren}
      </FormApp>
    );
  }
}
