import { Component } from 'react';
import { FormikHelpers } from 'formik';
import isEmpty from 'lodash/isEmpty';

import { policyInforamtionValidateSchema } from 'src/helpers/validations';
import { FormApp } from 'src/components/FormApp';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeInsurancePolicy, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { categoriesName } from 'src/helpers/constants';
import { FormPolicyInformation } from './form';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class PolicyInformation extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeInsurancePolicy(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 8, categoriesName.policyInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const { formData } = this.props;
    if (!isEmpty(formData.app.data)) {
    }
    setInformationPage(dispatch, 7, categoriesName.policyInformation);
  }

  render() {
    const isLoading = false;
    const { formData, dispatch } = this.props;

    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.title.policy.part.one')}
          heading={this.props.intl.get('app.head.form.policy.part.one')}
        >
          <FormApp
            initialValues={{
              currentCarrier: formData.app.data.policyInformation.currentCarrier || '',
              isHaveInsurance: formData.app.data.policyInformation.isHaveInsurance,
              renewalDate: formData.app.data.policyInformation.insurance.renewalDate || '',
              deductible: formData.app.data.policyInformation.insurance.deductible || '',
              limits: formData.app.data.policyInformation.insurance.limits || '',
              yearCoverage: formData.app.data.policyInformation.insurance.yearCoverage || '',
              annualPremium: formData.app.data.policyInformation.insurance.annualPremium || '',
            }}
            validationSchema={policyInforamtionValidateSchema(
              formData.app.data.policyInformation.isHaveInsurance,
            )}
            isInitValid={this.isInitValid}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.isButtonLoading}
            isInQuestionnaire
            dispatch={dispatch}
            progressBar={formData.app.metadata.progressBar}
            notDisabled={false}
            hideButton={false}
          >
            {(formikProps) => {
              console.log('formikProps', formikProps);
              return FormPolicyInformation(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
