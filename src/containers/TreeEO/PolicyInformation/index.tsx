import { Component } from 'react';
import { FormikHelpers } from 'formik';
import isEmpty from 'lodash/isEmpty';
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
          <FormPolicyInformation
            formData={formData}
            dispatch={dispatch}
            onSubmit={this.nextStep}
            hideButton={false}
          />
        </StepWrapper>
      )
    );
  }
}
