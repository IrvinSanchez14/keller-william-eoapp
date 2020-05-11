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
import { FormCommissionInformation } from './form';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class CommissionInformation extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeCommissionInformation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 10, categoriesName.commission);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 9, categoriesName.commission);
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
          <FormCommissionInformation
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
