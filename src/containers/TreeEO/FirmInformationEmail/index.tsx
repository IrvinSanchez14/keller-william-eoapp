import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import { geocodeByAddress } from 'react-places-autocomplete';

import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import ConfirmAddressModal from 'src/components/ConfirmAddressModal';
import { FormFirmInformationEmail } from './form';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { fullEmailValidateSchema } from 'src/helpers/validations';
import { isHttpError } from 'src/helpers/typeGuards';
import { categoriesName } from 'src/helpers/constants';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';

type FirmInformationProps = IAppStoreProps & { onSubmit?: () => Promise<void> };

@withStyles(styles)
export class FirmInformationEmail extends Component<FirmInformationProps> {
  state = {
    isButtonLoading: false,
    showModal: false,
  };

  componentDidMount() {
    setInformationPage(this.props.dispatch, 2, categoriesName.firmConfirmation);
  }

  nextStep = async (values: any, actions: FormikHelpers<any>) => {
    const { dispatch, formData } = this.props;
    this.setState({ isButtonLoading: true });
    values.suite = values.suite === '' ? null : values.suite;
    storeFirmConfirmation(dispatch, values);
    if (formData.app.metadata.actualPage === 2 && !this.state.showModal) {
      const { streetAddress } = values;
      const address = await geocodeByAddress(streetAddress)
        .then((result) => result)
        .catch((error) => error);
      if (typeof address === 'string') {
        this.setState({ isButtonLoading: false, showModal: true });
        return false;
      }
    }
    try {
      await this.props.onSubmit?.();
      changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.5);
      setInformationPage(dispatch, 3, categoriesName.firmConfirmation);
    } catch (err) {
      if (!isHttpError(err) || err.response.status !== 422) return;
      actions.setFieldError('email', 'This email already exists');
      actions.setFieldTouched('email', true, false);
      this.setState({ isButtonLoading: false });
    } finally {
      actions.setSubmitting(false);
    }
  };

  render() {
    const isLoading = false;
    const { showModal, isButtonLoading } = this.state;
    const { formData, dispatch, classes, intl } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={intl.get('app.avatar.text.firm.part.one')}
          heading={intl.get('app.head.form.firm.part.two')}
        >
          <FormApp
            initialValues={{
              streetAddress: formData.app.data.firmInformation.streetAddress || '',
              suite: formData.app.data.firmInformation.suite || null,
              phoneNumber: formData.app.data.firmInformation.phoneNumber || '',
              faxNumber: formData.app.data.firmInformation.faxNumber || '',
              email: formData.app.data.firmInformation.email || '',
            }}
            isInitValid
            validationSchema={fullEmailValidateSchema}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={isButtonLoading}
            isInQuestionnaire
            dispatch={dispatch}
            progressBar={formData.app.metadata.progressBar}
            hideButton={false}
            alignButton={classnames(classes.alignButton)}
          >
            {(formikProps) => {
              return (
                <>
                  {FormFirmInformationEmail(formikProps)}
                  <ConfirmAddressModal
                    showModal={showModal}
                    closeModal={() => this.setState({ showModal: false })}
                  />
                </>
              );
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
