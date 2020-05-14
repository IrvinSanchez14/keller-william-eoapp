import classnames from 'classnames';
import { Component } from 'react';
import { FormApp } from 'src/components/FormApp';
import StepWrapper from 'src/components/StepWrapper';
import { categoriesName } from 'src/helpers/constants';
import { isHaveClaimsValidateSchema } from 'src/helpers/validations';
import {
  changeStatusProgressBar,
  setInformationPage,
  storeClaimsPolicy,
} from 'src/store/actions/app';
import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { FormPolicyInformationClaims } from './form';
import { styles } from './styles';

export type CurrentAddressProps = IAppStoreProps & { onSubmit?: () => Promise<void> };

@withStyles(styles)
export class PolicyInformationClaims extends Component<CurrentAddressProps> {
  isLoading = false;
  isInitValid = false;
  isButtonLoading = false;
  state = {
    isHaveClaims: this.props.formData.app.data.policyInformation.isHaveClaims,
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 9, categoriesName.policyInformation);
  }

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    actions.setSubmitting(true);
    await this.props.onSubmit?.();
    this.isButtonLoading = true;
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    storeClaimsPolicy(dispatch, values);
    setInformationPage(dispatch, 10, categoriesName.commissionInformation);
  };

  handleChange = (response: boolean) => {
    this.setState({
      isHaveClaims: response,
    });
  };

  render() {
    const { intl, classes, formData, dispatch } = this.props;

    return (
      !this.isLoading && (
        <>
          <StepWrapper
            avatarText={intl.get('app.avatar.title.policy.part.two')}
            heading={intl.get('app.head.form.policy.part.two')}
            classHeader={classnames(classes.stepHeader)}
          >
            <FormApp
              initialValues={{
                isHaveClaims: formData.app.data.policyInformation.isHaveClaims,
                claims: formData.app.data.policyInformation.claims,
              }}
              validationSchema={isHaveClaimsValidateSchema}
              onSubmit={this.nextStep}
              className={classes.form}
              buttonLabel={'Continue'}
              dataTestId="reviewButton"
              isLoading={this.isButtonLoading}
              isInitValid
              dispatch={this.props.dispatch}
              isInQuestionnaire
              progressBar={formData.app.metadata.progressBar}
              hideButton={false}
              alignButton={classnames(classes.alignButton)}
            >
              {(formikProps) => {
                return FormPolicyInformationClaims(
                  formikProps,
                  formData,
                  dispatch,
                  this.handleChange,
                );
              }}
            </FormApp>
          </StepWrapper>
        </>
      )
    );
  }
}
