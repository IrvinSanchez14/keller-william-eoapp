import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeRiskProfile, changeStatusProgressBar, finishForm } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { categoriesName } from 'src/helpers/constants';
import { riskProfileTransactionValidateSchema } from 'src/helpers/validations';
import { FormApp } from 'src/components/FormApp';
import { FormRiskProfileTransaction } from './form';
import { removePercentageSign } from 'src/utils';

type FullNameProps = IAppStoreProps & { onSubmit?: () => Promise<void> };

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
    storeRiskProfile(dispatch, {
      ...values,
      percentageTransactions: removePercentageSign(values.percentageTransactions),
    }); //TODO put state in localstorage
    actions.setSubmitting(true);
    await this.props.onSubmit?.();
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 5.5);
    finishForm(dispatch);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 21, categoriesName.riskFactorInformation);
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
