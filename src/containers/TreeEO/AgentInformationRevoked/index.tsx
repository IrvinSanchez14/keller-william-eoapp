import { Component } from 'react';
import _ from 'lodash';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';

import { RadioField } from 'src/components/RadioForm';
import { categoriesName } from 'src/helpers/constants';

type FullNameProps = IAppStoreProps;

export const propertyUsageFields = [
  {
    id: 1,
    name: 'revokedLicense',
    value: true,
    text: 'Yes',
  },
  {
    id: 2,
    name: 'revokedLicense',
    value: false,
    text: 'No',
  },
];

export class AgentInformationRevoked extends Component<FullNameProps> {
  isInitValid = false;
  state = {
    revokedLicense: '',
  };

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    storeFirmConfirmation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 5);
    setInformationPage(dispatch, 7, categoriesName.agentInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 6, categoriesName.agentInformation);
  }

  handleChange = (value: boolean, formikProps: any) => {
    formikProps.setFieldValue('revokedLicense', value);
    this.setState({
      revokedLicense: value,
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
            label={item.text}
            onChange={() => this.handleChange(item.value, formikProps)}
            checked={formikProps.values.revokedLicense === item.value}
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
          avatarText={this.props.intl.get('app.avatar.text.agent.part.three')}
          heading={this.props.intl.get('app.head.form.agent.part.three')}
        >
          <FormApp
            initialValues={{
              revokedLicense: this.state.revokedLicense,
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
