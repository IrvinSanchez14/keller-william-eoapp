import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeRiskProfile, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { categoriesName } from 'src/helpers/constants';
import { riskProfileTransactionValidateSchema } from 'src/helpers/validations';
import { FormApp } from 'src/components/FormApp';
import { FormRiskProfileTransaction } from './form';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class RiskProfileTransaction extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeRiskProfile(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 21, categoriesName.commissionInformation);
  }

  render() {
    const isLoading = false;
    const { classes, formData, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.risk.part.five')}
          heading={this.props.intl.get('app.header.form.risk.part.five')}
          classHeader={classnames(classes.stepHeader)}
        >
          <FormApp
            initialValues={{
              percentageTransactions:
                formData.app.data.riskFactorInformation.percentageTransactions,
            }}
            isInitValid={this.isInitValid}
            validationSchema={riskProfileTransactionValidateSchema}
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
              return FormRiskProfileTransaction(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
