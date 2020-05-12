import { Component } from 'react';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { Typography } from '@material-ui/core';

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

type FullNameProps = IAppStoreProps;

@withStyles(styles)
export class CommissionInformationCommercial extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: any) => {
    const totalResidential = this.sumState(values.commercial);
    const numberValues: any = Object.keys(values).reduce(
      (res, key: string) => ({
        ...res,
        [key]: Number(values[key]),
      }),
      {},
    );
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeCommissionCommercial(dispatch, numberValues, totalResidential); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 14, categoriesName.commissionInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const { formData } = this.props;
    if (!isEmpty(formData.app.data)) {
    }
    setInformationPage(dispatch, 13, categoriesName.commissionInformation);
  }

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
          heading={this.props.intl.get('app.head.form.commission.part.five')}
          bottomContent={this.props.intl.get('app.link.commission.part.four')}
          classHeader={classnames(classes.stepHeader)}
          classBottom={classnames(classes.stepBottom)}
        >
          <Typography className={classnames(classes.titleForm)}>{'Commercial'}</Typography>
          <FormApp
            initialValues={{
              commercial: {
                realEstate: formData.app.data.commission.commercial.realEstate,
                rawLand: formData.app.data.commission.commercial.rawLand,
                appraisals: formData.app.data.commission.commercial.appraisals,
                propertyMgmt: formData.app.data.commission.commercial.propertyMgmt,
                ownedProperty: formData.app.data.commission.commercial.ownedProperty,
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
