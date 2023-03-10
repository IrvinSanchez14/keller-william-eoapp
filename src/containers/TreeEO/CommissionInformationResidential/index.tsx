import { Component } from 'react';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';
import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { categoriesName } from 'src/helpers/constants';
import { commissionResidentialValidateSchema } from 'src/helpers/validations';
import { storeCommissionResidential, changeStatusProgressBar } from 'src/store/actions/app';
import { FormApp } from 'src/components/FormApp';
import { FormCommissionInformationResidential } from './form';
import { removeSignsFromNumbers } from 'src/utils';

type FullNameProps = IAppStoreProps & { onSubmit?: () => Promise<void> };

const residential = {
  realState: '',
};

@withStyles(styles)
export class CommissionInformationResidential extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 13, categoriesName.commissionInformation);
  }

  nextStep = async (values: any, actions: any) => {
    values.residential = Object.keys(values.residential).reduce(
      (res, key: string) => ({
        ...res,
        [key]: removeSignsFromNumbers(values.residential[key] ?? 0),
      }),
      {},
    );
    const totalResidential = this.sumState(values.residential);
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    actions.setSubmitting(true);
    storeCommissionResidential(dispatch, values, totalResidential); //TODO put state in localstorage
    await this.props.onSubmit?.();
    changeStatusProgressBar(dispatch, parseFloat(formData.app.metadata.progressBar) + 4.5);
    setInformationPage(dispatch, 14, categoriesName.commissionInformation);
  };

  sumState = (object: any) =>
    Object.keys(object).reduce((sum, key) => sum + removeSignsFromNumbers(object[key] ?? 0), 0);

  render() {
    const isLoading = false;
    const { formData, classes, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avata.text.commission.part.four')}
          heading={this.props.intl.get('app.head.form.commission.part.four')}
          bottomContent={this.props.intl.get('app.link.commission.part.four')}
          classHeader={classnames(classes.stepHeader)}
          classBottom={classnames(classes.stepBottom)}
        >
          <Typography className={classnames(classes.titleForm)}>{'Residential'}</Typography>
          <FormApp
            initialValues={{
              residential: {
                realEstate:
                  formData.app.data.commissionInformation.residentialCommission.realEstate,
                rawLand: formData.app.data.commissionInformation.residentialCommission.rawLand,
                appraisals:
                  formData.app.data.commissionInformation.residentialCommission.appraisals,
                propertyMgmt:
                  formData.app.data.commissionInformation.residentialCommission.propertyMgmt,
                ownedProperty:
                  formData.app.data.commissionInformation.residentialCommission.ownedProperty,
              },
            }}
            isInitValid
            validationSchema={commissionResidentialValidateSchema}
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
              return FormCommissionInformationResidential(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
