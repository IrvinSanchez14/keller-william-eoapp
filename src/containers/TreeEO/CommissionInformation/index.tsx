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
import { commissionInformationValidateSchema } from 'src/helpers/validations';
import { FormApp } from 'src/components/FormApp';
import { FormCommissionInformation } from './form';
import { removeSignsFromNumbers } from 'src/utils';

type FullNameProps = IAppStoreProps & { onSubmit?: () => Promise<void> };

type FormFields = {
  contactFirstName: string;
  contactLastName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class CommissionInformation extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    const parsedValues = {
      ...values,
      averageValue: removeSignsFromNumbers(values.averageValue),
      grossCommission: removeSignsFromNumbers(values.grossCommission),
    };
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    actions.setSubmitting(true);
    storeCommissionInformation(dispatch, parsedValues); //TODO put state in localstorage
    await this.props.onSubmit?.();
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.5);
    setInformationPage(dispatch, 11, categoriesName.commissionInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 10, categoriesName.commissionInformation);
  }

  render() {
    const isLoading = false;
    const { classes, formData, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avata.title.commission.part.one')}
          heading={this.props.intl.get('app.head.commission.part.one')}
          bottomContent={this.props.intl.get('app.link.commission.part.one')}
          classHeader={classnames(classes.stepHeader)}
          classBottom={classnames(classes.stepBottom)}
        >
          <FormApp
            initialValues={{
              grossCommission: formData.app.data.commissionInformation.grossCommission,
              averageValue: formData.app.data.commissionInformation.averageValue,
            }}
            isInitValid={this.isInitValid}
            validationSchema={commissionInformationValidateSchema}
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
              return FormCommissionInformation(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
