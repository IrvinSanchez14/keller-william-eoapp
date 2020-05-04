import React from 'react';
import _ from 'lodash';

import { FormikProps, IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setPageLocation } from 'src/store/actions/app';
import { fullEmailValidateSchema } from 'src/helpers/validations';
import { getFullEmailFields } from 'src/helpers/fieldsForm';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';

type FullNameProps = IAppStoreProps;

@withStyles(styles)
export class FirmInformationEmail extends React.Component<FullNameProps> {
  isInitValid = false;

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    storeFirmConfirmation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 5);
    setPageLocation(dispatch, 2);
  };

  async componentDidMount() {
    const { dispatch, formData } = this.props;
    if (!_.isEmpty(formData.app.data)) {
      this.isInitValid = await fullEmailValidateSchema.isValid({
        streetAddress: formData.app.data.firmInformation.streetAddress,
        suite: formData.app.data.firmInformation.suite,
        phoneNumber: formData.app.data.firmInformation.phoneNumber,
        faxNumber: formData.app.data.firmInformation.faxNumber,
        emailAddress: formData.app.data.firmInformation.emailAddress,
      });
    }
    setPageLocation(dispatch, 1);
  }

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
    const isLoading = false;
    const { formData } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.firm.part.one')}
          heading={this.props.intl.get('app.head.form.firm.part.two')}
        >
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
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={false}
            isInQuestionnaire
            dispatch={this.props.dispatch}
            progressBar={formData.app.metadata.progressBar}
          >
            {this.renderFormChildren}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
