import { Component } from 'react';
//import Router from 'next/router';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';

import { FormApp } from 'src/components/FormApp';
import { dateBrokerValidateSchema } from 'src/helpers/validations';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { categoriesName } from 'src/helpers/constants';
import { FormFirmInformationBroker } from './form';

type FullNameProps = IAppStoreProps & { onSubmit?: () => Promise<void> };

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class FirmInformationBroker extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    actions.setSubmitting(true);
    storeFirmConfirmation(dispatch, values); //TODO put state in localstorage
    await this.props.onSubmit?.();
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.5);
    setInformationPage(dispatch, 4, categoriesName.firmConfirmation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const { formData } = this.props;
    setInformationPage(dispatch, 3, categoriesName.firmConfirmation);
  }

  render() {
    const isLoading = false;
    const { classes, formData, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.firm.part.three')}
          heading={this.props.intl.get('app.head.form.firm.part.three')}
          classHeader={classnames(classes.stepHeader)}
        >
          <FormApp
            initialValues={{
              dateLicensedBrokerAgent:
                formData.app.data.firmInformation.dateLicensedBrokerAgent || '',
              dateLicensedBroker: formData.app.data.firmInformation.dateLicensedBroker || '',
            }}
            isInitValid={this.isInitValid}
            validationSchema={dateBrokerValidateSchema}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.isButtonLoading}
            isInQuestionnaire
            dispatch={dispatch}
            progressBar={formData.app.metadata.progressBar}
            hideButton={false}
            alignButton={classnames(classes.alignButton)}
          >
            {(formikProps) => {
              return FormFirmInformationBroker(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
