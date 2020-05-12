import { Component } from 'react';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';

import StepWrapper from 'src/components/StepWrapper';
import { isFirmOwnedValidateSchema } from 'src/helpers/validations';
import { FormApp } from 'src/components/FormApp';
import { categoriesName } from 'src/helpers/constants';
import { FormFirmInformationAffiliated } from './form';

type FullNameProps = IAppStoreProps;

export const propertyUsageFields = [
  {
    id: 1,
    name: 'isFirmOwned',
    value: true,
    text: 'YES',
  },
  {
    id: 2,
    name: 'isFirmOwned',
    value: false,
    text: 'NO',
  },
];

export class FirmInformationAffiliated extends Component<FullNameProps> {
  isInitValid = false;
  state = {
    isFirmOwned: this.props.formData.app.data.firmInformation.isFirmOwned,
  };

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    storeFirmConfirmation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    setInformationPage(dispatch, 3, categoriesName.firmConfirmation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 2, categoriesName.firmConfirmation);
  }

  handleChange = (value: boolean, formikProps: any) => {
    formikProps.setFieldValue('isFirmOwned', value);
  };

  render() {
    const isLoading = false;
    const { formData } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.firm.part.three')}
          heading={this.props.intl.get('app.head.form.firm.part.three')}
        >
          <FormApp
            initialValues={{
              isFirmOwned: this.state.isFirmOwned,
            }}
            validationSchema={isFirmOwnedValidateSchema}
            isInitValid
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={false}
            isInQuestionnaire
            dispatch={this.props.dispatch}
            progressBar={formData.app.metadata.progressBar}
            hideButton={false}
          >
            {(formikProps) => {
              return FormFirmInformationAffiliated(formikProps, this.handleChange);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
