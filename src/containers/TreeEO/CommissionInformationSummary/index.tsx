import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import { Typography } from '@material-ui/core';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { changeStatusProgressBar, storeCommissionTotalSummary } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';
import { categoriesName } from 'src/helpers/constants';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { FormCommissionInformationSummary } from './form';

type FullNameProps = IAppStoreProps & { onSubmit?: () => Promise<void> };

type FormFields = {
  contactFirstName: string;
  contactLastName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class CommissionInformationSummary extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;
  state = {
    totalCommission: 0,
  };

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    actions.setSubmitting(true);
    const { dispatch, formData } = this.props;
    const total = this.totalSummary();
    storeCommissionTotalSummary(dispatch, total); //TODO put state in localstorage
    await this.props.onSubmit?.();
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.5);
    setInformationPage(dispatch, 17, categoriesName.commissionInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 16, categoriesName.commissionInformation);
  }

  totalSummary = () => {
    const { formData } = this.props;
    const total =
      formData.app.data.commissionInformation.residentialCommission.total +
      formData.app.data.commissionInformation.commercialCommission.total +
      formData.app.data.commissionInformation.farmRanch +
      formData.app.data.commissionInformation.auctioneering +
      formData.app.data.commissionInformation.mortgageBrokerage;
    return total;
  };

  render() {
    const isLoading = false;
    const { classes, formData, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.commission.part.seven')}
          heading={this.props.intl.get('app.head.form.commission.par.seven')}
          classHeader={classnames(classes.stepHeader)}
        >
          <Typography className={classnames(classes.titleForm)}>
            {this.props.intl.get('app.title.form.commission.part.seven')}
          </Typography>
          <FormCommissionInformationSummary
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
