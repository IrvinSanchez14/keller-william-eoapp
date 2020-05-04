import { Component } from 'react';
import _ from 'lodash';

import { FormikProps, IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setPageLocation } from 'src/store/actions/app';
import { fullEmailValidateSchema } from 'src/helpers/validations';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';

import { RadioField } from 'src/components/RadioForm';

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
    isFirmOwned: '',
  };

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    storeFirmConfirmation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 5);
    setPageLocation(dispatch, 3);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setPageLocation(dispatch, 2);
  }

  handleChange = (value: boolean, formikProps: any) => {
    formikProps.setFieldValue('isFirmOwned', value);
    this.setState({
      isFirmOwned: value,
    });
  };

  renderFormChildren = (formikProps: any) => {
    return propertyUsageFields.map((item) => (
      <FielControlForm
        key={item.id}
        name={item.name}
        renderCustomField={({ field }) => (
          <RadioField
            {...field}
            value={item.value}
            data-test-id={item.value}
            label={this.props.intl.get(`app.radio.answer.${item.text}`)}
            onChange={() => this.handleChange(item.value, formikProps)}
            checked={formikProps.values.isFirmOwned === item.value}
          />
        )}
      />
    ));
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
            isInitValid
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={false}
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
