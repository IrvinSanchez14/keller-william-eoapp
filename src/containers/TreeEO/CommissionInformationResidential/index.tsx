import { Component } from 'react';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { Typography } from '@material-ui/core';

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
    const { formData } = this.props;
    if (!isEmpty(formData.app.data)) {
    }
    setInformationPage(dispatch, 13, categoriesName.commissionInformation);
  }

  nextStep = async (values: any, actions: any) => {
    const numberValues: any = Object.keys(values.residential).reduce(
      (res, key: string) => ({
        ...res,
        [key]: Number(values[key]),
      }),
      {},
    );
    const totalResidential = this.sumState(values.residential);
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    actions.setSubmitting(true);
    storeCommissionResidential(dispatch, values, totalResidential); //TODO put state in localstorage
    await this.props.onSubmit?.();
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.5);
    setInformationPage(dispatch, 14, categoriesName.commissionInformation);
  };

  sumState = (object: any) => {
    return Object.keys(object).reduce((sum, key) => sum + parseFloat(object[key] || 0), 0);
  };

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
                realEstate: formData.app.data.commissionInformation.residential.realEstate,
                rawLand: formData.app.data.commissionInformation.residential.rawLand,
                appraisals: formData.app.data.commissionInformation.residential.appraisals,
                propertyMgmt: formData.app.data.commissionInformation.residential.propertyMgmt,
                ownedProperty: formData.app.data.commissionInformation.residential.ownedProperty,
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
