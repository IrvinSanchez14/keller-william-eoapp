import { Component } from 'react';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';
import { storeCommissionCommercial, changeStatusProgressBar } from 'src/store/actions/app';
import { commissionCommercialValidateSchema } from 'src/helpers/validations';
import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { categoriesName } from 'src/helpers/constants';
import { FormCommissionInformationCommercial } from './form';
import { FormApp } from 'src/components/FormApp';
import { removeSignsFromNumbers } from 'src/utils';

type FullNameProps = IAppStoreProps & { onSubmit?: () => Promise<void> };

@withStyles(styles)
export class CommissionInformationCommercial extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: any) => {
    values.commercial = Object.keys(values.commercial).reduce(
      (res, key: string) => ({
        ...res,
        [key]: removeSignsFromNumbers(values.commercial[key] ?? 0),
      }),
      {},
    );
    const totalResidential = this.sumState(values.commercial);
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    actions.setSubmitting(true);
    storeCommissionCommercial(dispatch, values, totalResidential); //TODO put state in localstorage
    await this.props.onSubmit?.();
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.5);
    setInformationPage(dispatch, 15, categoriesName.commissionInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 14, categoriesName.commissionInformation);
  }

  sumState = (object: any) =>
    Object.keys(object).reduce((sum, key) => sum + removeSignsFromNumbers(object[key] ?? 0), 0);

  render() {
    const isLoading = false;
    const { formData, classes, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.commission.part.commercial')}
          heading={this.props.intl.get('app.head.form.commission.part.five')}
          bottomContent={this.props.intl.get('app.link.commission.part.four')}
          classHeader={classnames(classes.stepHeader)}
          classBottom={classnames(classes.stepBottom)}
        >
          <Typography className={classnames(classes.titleForm)}>{'Commercial'}</Typography>
          <FormApp
            initialValues={{
              commercial: {
                realEstate: formData.app.data.commissionInformation.commercialCommission.realEstate,
                rawLand: formData.app.data.commissionInformation.commercialCommission.rawLand,
                appraisals: formData.app.data.commissionInformation.commercialCommission.appraisals,
                propertyMgmt:
                  formData.app.data.commissionInformation.commercialCommission.propertyMgmt,
                ownedProperty:
                  formData.app.data.commissionInformation.commercialCommission.ownedProperty,
              },
            }}
            isInitValid={this.isInitValid}
            validationSchema={commissionCommercialValidateSchema}
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
              return FormCommissionInformationCommercial(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
