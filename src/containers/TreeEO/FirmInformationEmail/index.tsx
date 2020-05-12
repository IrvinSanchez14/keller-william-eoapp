import { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { fullEmailValidateSchema } from 'src/helpers/validations';

import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { categoriesName } from 'src/helpers/constants';
import { FormFirmInformationEmail } from './form';

type FullNameProps = IAppStoreProps;

@withStyles(styles)
export class FirmInformationEmail extends Component<FullNameProps> {
  isInitValid = false;

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    storeFirmConfirmation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    setInformationPage(dispatch, 2, categoriesName.firmConfirmation);
  };

  async componentDidMount() {
    const { dispatch, formData } = this.props;
    if (!isEmpty(formData.app.data)) {
      this.isInitValid = await fullEmailValidateSchema.isValid({
        streetAddress: formData.app.data.firmInformation.streetAddress,
        suite: formData.app.data.firmInformation.suite,
        phoneNumber: formData.app.data.firmInformation.phoneNumber,
        faxNumber: formData.app.data.firmInformation.faxNumber,
        emailAddress: formData.app.data.firmInformation.emailAddress,
      });
    }
    setInformationPage(dispatch, 1, categoriesName.firmConfirmation);
  }

  render() {
    const isLoading = false;
    const { formData, dispatch } = this.props;
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
            isInitValid
            validationSchema={fullEmailValidateSchema}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={false}
            isInQuestionnaire
            dispatch={dispatch}
            progressBar={formData.app.metadata.progressBar}
            hideButton={false}
          >
            {FormFirmInformationEmail}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
