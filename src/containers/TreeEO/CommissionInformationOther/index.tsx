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
import { FormCommissionInformationOther } from './form';
import { commissionOtherValidateSchema } from 'src/helpers/validations';
import { FormApp } from 'src/components/FormApp';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class CommissionInformationOther extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeCommissionInformation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 15, categoriesName.commission);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 14, categoriesName.commission);
  }

  render() {
    const isLoading = false;
    const { classes, formData, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.commission.part.six')}
          heading={this.props.intl.get('app.head.form.commission.part.six')}
          bottomContent={this.props.intl.get('app.link.commission.part.four')}
          classHeader={classnames(classes.stepHeader)}
          classBottom={classnames(classes.stepBottom)}
        >
          <FormApp
            initialValues={{
              farmRanch: formData.app.data.commission.farmRanch,
              auctioneering: formData.app.data.commission.auctioneering,
              mortageBrokerage: formData.app.data.commission.mortageBrokerage,
            }}
            isInitValid={this.isInitValid}
            validationSchema={commissionOtherValidateSchema}
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
              return FormCommissionInformationOther(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
