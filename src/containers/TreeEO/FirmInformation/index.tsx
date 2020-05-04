import React from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import { Typography } from '@material-ui/core';
import _ from 'lodash';

import { FormikProps, IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setPageLocation } from 'src/store/actions/app';
import { fullNameValidateSchema } from 'src/helpers/validations';
import { getFullNameFields } from 'src/helpers/fieldsForm';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class FirmInformation extends React.Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeFirmConfirmation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 5);
    actions.setSubmitting(true);
    setPageLocation(dispatch, 1);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const { formData } = this.props;
    if (!_.isEmpty(formData.app.data)) {
      this.isInitValid = await fullNameValidateSchema.isValid({
        contacName: formData.app.data.firmInformation.contacName,
        brokerName: formData.app.data.firmInformation.brokerName,
        kwMarketCenterName: formData.app.data.firmInformation.kwMarketCenterName,
        yearEstablished: formData.app.data.firmInformation.yearEstablished,
      });
    }
    setPageLocation(dispatch, 0);
  }

  renderFormChildren = ({ errors, touched, setFieldTouched }: FormikProps) =>
    getFullNameFields().map(({ name, type, customWidth, label }) => (
      <FielControlForm
        data-test-id={name}
        key={name}
        name={name}
        type={type}
        setFieldTouched={setFieldTouched}
        label={label}
        fullWidth
        errors={errors}
        touched={touched}
        renderFastField
        customWidth={customWidth}
      />
    ));

  render() {
    const isLoading = false;
    const { classes, formData } = this.props;
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
              brokerName: formData.app.data.firmInformation.brokerName || '',
              kwMarketCenterName: formData.app.data.firmInformation.kwMarketCenterName || '',
              yearEstablished: formData.app.data.firmInformation.yearEstablished || '',
            }}
            isInitValid={this.isInitValid}
            validationSchema={fullNameValidateSchema}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.isButtonLoading}
            isInQuestionnaire
            dispatch={this.props.dispatch}
            progressBar={formData.app.metadata.progressBar}
          >
            {this.renderFormChildren}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
