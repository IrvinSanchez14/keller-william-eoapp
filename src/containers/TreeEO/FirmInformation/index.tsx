import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import { Typography } from '@material-ui/core';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';
import { categoriesName } from 'src/helpers/constants';
import { FormApp } from 'src/components/FormApp';
import { fullNameValidateSchema } from 'src/helpers/validations';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { FormFirmInformation } from './form';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class FirmInformation extends Component<FullNameProps> {
  isButtonLoading = false;
  isInitValid = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeFirmConfirmation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 1, categoriesName.firmConfirmation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 0, categoriesName.firmConfirmation);
  }

  render() {
    const isLoading = false;
    const { classes, formData, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.firm.part.one')}
          heading={this.props.intl.get('app.head.form.firm.part.one')}
          subHeading={['', this.props.intl.get('app.subhead.form.firm.part.one')]}
          bottomContent={this.props.intl.getHTML('app.link.condition.firm.part.one')}
        >
          <Typography className={classnames(classes.titleForm)}>
            {this.props.intl.get('app.title.form.firm.part.one')}
          </Typography>
          <FormApp
            initialValues={{
              contacName: formData.app.data.firmInformation.contacName || '',
              brokerName: formData.app.data.firmInformation.brokerName,
              kwMarketCenterName: formData.app.data.firmInformation.kwMarketCenterName,
              yearEstablished: formData.app.data.firmInformation.yearEstablished,
            }}
            isInitValid={this.isInitValid}
            validationSchema={fullNameValidateSchema}
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
              console.log('formikProps', formikProps);
              return FormFirmInformation(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
