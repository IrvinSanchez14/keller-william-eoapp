import { Component } from 'react';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeAgentInformation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';

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

  render() {
    const isLoading = false;
    const { formData, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.agent.part.three')}
          heading={this.props.intl.get('app.head.form.agent.part.three')}
        >
          <FormAgentInformationRevoked
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
