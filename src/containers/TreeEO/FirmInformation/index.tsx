import React from 'react';
import * as Yup from 'yup';
import { FormikErrors, FormikTouched } from 'formik';

import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation } from 'src/store/actions/app';

type FullNameProps = IAppStoreProps;

export const getFullNameFields = () => [
  {
    name: 'contacName',
    type: 'text',
    placeholder: 'contacName',
    label: 'Contact Name',
  },
  {
    name: 'brokerName',
    type: 'text',
    placeholder: 'brokerName',
    label: 'Broker/owner name',
  },
  {
    name: 'kwMarketCenterName',
    type: 'text',
    placeholder: 'kwMarketCenterName',
    label: 'KW Market Center name',
  },
  {
    name: 'yearEstablished',
    type: 'number',
    placeholder: 'yearEstablished',
    label: 'Year established',
  },
];

export type FormikProps = {
  errors?: any;
  touched?: any;
  values: any;
  setFieldTouched: any;
};

export const fullNameValidateSchema = Yup.object().shape({
  contacName: Yup.string().required('Field is required'),
  brokerName: Yup.string().required('Field is required'),
  kwMarketCenterName: Yup.string().required('Field is required'),
  yearEstablished: Yup.string().required('Field is required'),
});

export class FirmInformation extends React.Component<FullNameProps> {
  nextStep = async (values: any, actions: any) => {
    /*this.isButtonLoading = true;
    const {firstName, lastName} = values;
    const {
      property,
      stepper,
      session: {sendFormGAEvent},
    } = this.props;

    sendFormGAEvent('continue');

    property.personalDetails.update({
      firstName,
      lastName,
    });
    actions.setSubmitting(true);
    const userData = {
      first_name: firstName,
      last_name: lastName,
    };
    await property.updatePropertyDetails(userData);
    actions.setSubmitting(false);
    stepper.nextStep();*/
  };

  async componentDidMount() {
    /*const {
      property,
      session: {sendFormGAEvent},
    } = this.props;

    sendFormGAEvent('page');

    const {firstName, lastName} = property.personalDetails;
    this.isInitValid = await fullNameValidateSchema.isValid({
      firstName,
      lastName,
    });*/
  }

  renderFormChildren = ({ errors, touched, setFieldTouched }: FormikProps) =>
    getFullNameFields().map(({ name, type, placeholder, label }) => (
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
      />
    ));

  render() {
    const isLoading = false;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={'Let me fetch you some quotes!'}
          heading={'Hi Im Kacey!'}
          subHeading={[
            'I will connect you with multiple providers to shop and compare rates.',
            'Whats your name?',
          ]}
          bottomContent={
            'If you have questions about insurance along the way, connect with an insurance provider at <a href="tel:8572632750">(857) 263-2750</a>.'
          }
        >
          <FormApp
            initialValues={{
              contacName: '' || '',
              brokerName: '' || '',
              kwMarketCenterName: '' || '',
              yearEstablished: '' || '',
            }}
            isInitValid={false}
            validationSchema={fullNameValidateSchema}
            onSubmit={storeFirmConfirmation}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={false}
            isInQuestionnaire
            dispatch={this.props.dispatch}
          >
            {this.renderFormChildren}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
