import { Component } from 'react';
import { FormikHelpers } from 'formik';
import classnames from 'classnames';

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

type FullNameProps = IAppStoreProps & { onSubmit?: () => Promise<void> };

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
  state = {
    isHaveInsurance: this.props.formData.app.data.policyInformation.isHaveInsurance,
  };

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    actions.setSubmitting(true);
    values.isHaveInsuranceField = this.state.isHaveInsurance;
    storeInsurancePolicy(dispatch, values); //TODO put state in localstorage
    await this.props.onSubmit?.();
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    setInformationPage(dispatch, 9, categoriesName.policyInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const { formData } = this.props;
    setInformationPage(dispatch, 8, categoriesName.policyInformation);
  }

  handleChange = () => {
    this.setState({
      isHaveInsurance: !this.state.isHaveInsurance,
    });
  };

  render() {
    const isLoading = false;
    const { formData, dispatch, classes } = this.props;

    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.title.policy.part.one')}
          heading={this.props.intl.get('app.head.form.policy.part.one')}
          classHeader={classnames(classes.stepHeader)}
        >
          <FormApp
            initialValues={{
              currentCarrier: formData.app.data.policyInformation.currentCarrier || '',
              isHaveInsuranceField: formData.app.data.policyInformation.isHaveInsurance,
              renewalDate: formData.app.data.policyInformation.insurance.renewalDate || '',
              deductible: formData.app.data.policyInformation.insurance.deductible || 0,
              limits: formData.app.data.policyInformation.insurance.limits || 0,
              yearCoverage: formData.app.data.policyInformation.insurance.yearCoverage || 0,
              annualPremium: formData.app.data.policyInformation.insurance.annualPremium || 0,
            }}
            validationSchema={policyInforamtionValidateSchema(this.state.isHaveInsurance)}
            isInitValid
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
              return FormPolicyInformation(formikProps, this.handleChange);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
