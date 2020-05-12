import { Component } from 'react';
import classnames from 'classnames';

import { FielControlForm } from 'src/components/FieldControlForm';
import { Column } from 'src/components/LayoutWrapper/Flex';
import {
  setInformationPage,
  addClaimsPolicy,
  storeClaimsPolicy,
  changeStatusProgressBar,
} from 'src/store/actions/app';

import { styles } from './styles';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { isHaveClaimsValidateSchema } from 'src/helpers/validations';
import { TextFieldForm } from 'src/components/TextFieldForm';
import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { RadioField } from 'src/components/RadioForm';
import { categoriesName } from 'src/helpers/constants';
import { AwesomeFontIcon } from 'src/components/AwesomeFontIcon';
import { FormPolicyInformationClaims } from './form';

export type CurrentAddressProps = IAppStoreProps;

@withStyles(styles)
export class PolicyInformationClaims extends Component<CurrentAddressProps> {
  isLoading = false;
  isInitValid = false;
  isButtonLoading = false;

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 9, categoriesName.commission);
  }

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    this.isButtonLoading = true;
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    storeClaimsPolicy(dispatch, values);
    setInformationPage(dispatch, 10, categoriesName.policyInformation);
  };

  render() {
    const { intl, classes, formData, dispatch } = this.props;

    return (
      !this.isLoading && (
        <>
          <StepWrapper
            avatarText={intl.get('app.avatar.title.policy.part.two')}
            heading={intl.get('app.head.form.policy.part.two')}
          >
            <FormApp
              initialValues={{
                isHaveClaims: formData.app.data.policyInformation.isHaveClaims,
                claims: formData.app.data.policyInformation.claims || [],
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
            >
              {(formikProps) => {
                return FormPolicyInformationClaims(formikProps, formData, dispatch);
              }}
            </FormApp>
          </StepWrapper>
        </>
      )
    );
  }
}
