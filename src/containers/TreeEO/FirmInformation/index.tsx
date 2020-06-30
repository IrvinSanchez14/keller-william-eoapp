import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';

import { FormApp } from 'src/components/FormApp';
import StepWrapper from 'src/components/StepWrapper';
import { FormFirmInformation } from './form';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { categoriesName } from 'src/helpers/constants';
import { fullNameValidateSchema } from 'src/helpers/validations';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  kwMarketCenterNumber: string;
  yearEstablished: number;
};

@withStyles(styles)
export class FirmInformation extends Component<FullNameProps> {
  state = {
    isButtonLoading: false,
    isInitValid: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 1, categoriesName.firmConfirmation);
  }

  nextStep = (values: any, actions: FormikHelpers<FormFields>) => {
    const { dispatch, formData } = this.props;
    this.setState({ isButtonLoading: true });
    storeFirmConfirmation(dispatch, values);
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.5);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 2, categoriesName.firmConfirmation);
  };

  render() {
    const isLoading = false;
    const { classes, formData, dispatch, intl } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={intl.get('app.avatar.text.firm.part.one')}
          heading={intl.get('app.head.form.firm.part.one')}
          subHeading={['', intl.get('app.subhead.form.firm.part.one')]}
          bottomContent={intl.getHTML('app.link.condition.firm.part.one')}
          classHeader={classnames(classes.stepHeader)}
          classBottom={classnames(classes.stepBottom)}
        >
          <Typography className={classnames(classes.titleForm)}>
            {intl.get('app.title.form.firm.part.one')}
          </Typography>
          <FormApp
            initialValues={{
              contactName: formData.app.data.firmInformation.contactName || '',
              brokerName: formData.app.data.firmInformation.brokerName || '',
              kwMarketCenterName: formData.app.data.firmInformation.kwMarketCenterName || '',
              kwMarketCenterNumber: formData.app.data.firmInformation.kwMarketCenterNumber || '',
              yearEstablished: formData.app.data.firmInformation.yearEstablished || '',
            }}
            isInitValid
            validationSchema={fullNameValidateSchema}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.state.isButtonLoading}
            isInQuestionnaire
            dispatch={dispatch}
            progressBar={formData.app.metadata.progressBar}
            hideButton={false}
            alignButton={classnames(classes.alignButton)}
          >
            {(formikProps) => {
              return FormFirmInformation(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
