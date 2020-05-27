import { Component } from 'react';
import classnames from 'classnames';

import { FormApp } from 'src/components/FormApp';
import StepWrapper from 'src/components/StepWrapper';
import { FormFirmInformationAffiliated } from './form';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { isFirmOwnedValidateSchema } from 'src/helpers/validations';
import { categoriesName } from 'src/helpers/constants';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { FormikProps } from 'formik';

type FirmInformationProps = IAppStoreProps & { onSubmit?: () => Promise<void> };

@withStyles(styles)
export class FirmInformationAffiliated extends Component<FirmInformationProps> {
  state = {
    isFirmOwned: this.props.formData.app.data.firmInformation.isFirmOwned,
    isButtonLoading: false,
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 4, categoriesName.firmConfirmation);
  }

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    this.setState({ isButtonLoading: true });
    storeFirmConfirmation(dispatch, values);
    await this.props.onSubmit?.();
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.5);
    setInformationPage(dispatch, 5, categoriesName.firmConfirmation);
  };

  handleChange = (value: boolean, formikProps: FormikProps<any>) => {
    formikProps.setFieldValue('isFirmOwned', value);
  };

  render() {
    const isLoading = false;
    const { formData, classes, intl } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={intl.get('app.avatar.text.firm.part.four')}
          heading={intl.get('app.head.form.firm.part.four')}
          classHeader={classnames(classes.stepHeader)}
        >
          <FormApp
            initialValues={{
              isFirmOwned: formData.app.data.firmInformation.isFirmOwned,
            }}
            validationSchema={isFirmOwnedValidateSchema}
            isInitValid
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.state.isButtonLoading}
            isInQuestionnaire
            dispatch={this.props.dispatch}
            progressBar={formData.app.metadata.progressBar}
            hideButton={false}
            alignButton={classnames(classes.alignButton)}
          >
            {(formikProps) => {
              return FormFirmInformationAffiliated(formikProps, this.handleChange);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
