import { Component } from 'react';
import classnames from 'classnames';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeRiskProfile, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';

import { categoriesName } from 'src/helpers/constants';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { riskProfileBanckValidateSchema } from 'src/helpers/validations';
import { FormApp } from 'src/components/FormApp';
import { FormRiskProfileBanck } from './form';

type FullNameProps = IAppStoreProps;

@withStyles(styles)
export class RiskProfileBanck extends Component<FullNameProps> {
  isInitValid = false;
  state = { width: 0 };

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    storeRiskProfile(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    setInformationPage(dispatch, 18, categoriesName.riskProfile);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 17, categoriesName.riskProfile);
    this.setState({ width: window.innerWidth });
  }

  render() {
    const isLoading = false;
    const { formData, classes, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.risk.part.two')}
          heading={this.props.intl.get('app.header.form.risk.part.two')}
          classHeader={classnames(classes.stepHeader)}
        >
          <FormApp
            initialValues={{
              isMortageBanking: formData.app.data.riskProfile.isMortageBanking,
            }}
            isInitValid
            validationSchema={riskProfileBanckValidateSchema}
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
              return FormRiskProfileBanck(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
