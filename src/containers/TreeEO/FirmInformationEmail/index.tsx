import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';

import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
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
  };

  componentDidMount() {
    const { dispatch, formData } = this.props;
    setInformationPage(dispatch, 2, categoriesName.firmConfirmation);
  }

  nextStep = async (values: any, actions: FormikHelpers<any>) => {
    const { dispatch, formData } = this.props;
    this.setState({ isButtonLoading: true });
    values.suite = values.suite === '' ? null : values.suite;
    storeFirmConfirmation(dispatch, values);
    try {
      await this.props.onSubmit?.();
      changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.5);
      setInformationPage(dispatch, 3, categoriesName.firmConfirmation);
    } catch (err) {
      if (!isHttpError(err) || err.response.status !== 422) return;
      actions.setFieldError('email', 'This email aready exists');
      actions.setFieldTouched('email', true, false);
    } finally {
      actions.setSubmitting(false);
    }
  };

  render() {
    const isLoading = false;
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
            isLoading={this.state.isButtonLoading}
            isInQuestionnaire
            dispatch={dispatch}
            progressBar={formData.app.metadata.progressBar}
            hideButton={false}
            alignButton={classnames(classes.alignButton)}
          >
            {(formikProps) => {
              return FormFirmInformationEmail(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
