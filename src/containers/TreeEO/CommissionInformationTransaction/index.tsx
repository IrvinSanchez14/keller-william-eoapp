import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeCommissionInformation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { categoriesName } from 'src/helpers/constants';
import { FormCommissionInformationTransaction } from './form';
import { commissionTransactionValidateSchema } from 'src/helpers/validations';
import { FormApp } from 'src/components/FormApp';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class CommissionInformationTransaction extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeCommissionInformation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 12, categoriesName.commission);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 11, categoriesName.commission);
  }

  render() {
    const isLoading = false;
    const { classes, formData, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.title.commission.part.two')}
          heading={this.props.intl.get('app.head.commission.part.two')}
          classHeader={classnames(classes.stepHeader)}
        >
          <FormApp
            initialValues={{
              percentageTransactions: formData.app.data.commission.percentageTransactions,
            }}
            isInitValid={this.isInitValid}
            validationSchema={commissionTransactionValidateSchema}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.isButtonLoading}
            isInQuestionnaire
            dispatch={dispatch}
            progressBar={formData.app.metadata.progressBar}
            hideButton={false}
          >
            {(formikProps) => {
              return FormCommissionInformationTransaction(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
