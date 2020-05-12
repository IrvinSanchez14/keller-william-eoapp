import { Component } from 'react';
import { FormApp } from 'src/components/FormApp';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeAgentInformation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';
import { agentRevokedValidateSchema } from 'src/helpers/validations';

import { categoriesName } from 'src/helpers/constants';
import { FormAgentInformationRevoked } from './form';

type FullNameProps = IAppStoreProps;

export class AgentInformationRevoked extends Component<FullNameProps> {
  isInitValid = false;

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    storeAgentInformation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
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

  render() {
    const isLoading = false;
    const { formData, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.agent.part.three')}
          heading={this.props.intl.get('app.head.form.agent.part.three')}
        >
          <FormApp
            initialValues={{
              revokedLicense: formData.app.data.agentInformation.revokedLicense,
            }}
            validationSchema={agentRevokedValidateSchema}
            isInitValid
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={false}
            isInQuestionnaire
            dispatch={dispatch}
            progressBar={formData.app.metadata.progressBar}
            hideButton={false}
          >
            {(formikProps) => {
              return FormAgentInformationRevoked(formikProps, this.handleChange);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
