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
import { TextFieldForm } from 'src/components/TextFieldForm';
import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { RadioField } from 'src/components/RadioForm';
import { categoriesName } from 'src/helpers/constants';
import { AwesomeFontIcon } from 'src/components/AwesomeFontIcon';
import { FormPolicyInformationClaims } from './form';

export type CurrentAddressProps = IAppStoreProps;

type FormValues = {
  unit: string;
  formattedAddress: string;
  isHaveClaims: boolean;
  years: number;
  months: number;
  zero_results?: boolean;
};

@withStyles(styles)
export class PolicyInformationClaims extends Component<CurrentAddressProps> {
  isLoading = false;
  isButtonLoading = false;

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 8, categoriesName.policyInformation);
  }

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    this.isButtonLoading = true;
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    storeClaimsPolicy(dispatch, values);
    setInformationPage(dispatch, 9, categoriesName.policyInformation);
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
            <FormPolicyInformationClaims
              formData={formData}
              dispatch={dispatch}
              onSubmit={this.nextStep}
              hideButton={false}
            />
          </StepWrapper>
        </>
      )
    );
  }
}
