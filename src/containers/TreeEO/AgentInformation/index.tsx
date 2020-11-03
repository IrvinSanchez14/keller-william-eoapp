import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';

import { FormAgentInformation } from './form';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeAgentInformation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { agentLicensedValidateSchema } from 'src/helpers/validations';
import { categoriesName } from 'src/helpers/constants';
import { removeSignsFromNumbers } from 'src/utils';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';

type FullNameProps = IAppStoreProps & { onSubmit?: () => Promise<void> };

@withStyles(styles)
export class AgentInformation extends Component<FullNameProps> {
  state = {
    isInitValid: false,
    isButtonLoading: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 5, categoriesName.agentInformation);
  }

  nextStep = async (values: any, actions: FormikHelpers<any>) => {
    const parsedValues = {
      ...values,
      numberAgentLessCommission: removeSignsFromNumbers(values.numberAgentLessCommission),
      numberAgenteNoCommission: removeSignsFromNumbers(values.numberAgenteNoCommission),
      numberAgentsMoreCommission: removeSignsFromNumbers(values.numberAgentsMoreCommission),
    };
    this.setState({ isButtonLoading: true });
    const { dispatch, formData } = this.props;
    actions.setSubmitting(true);
    storeAgentInformation(dispatch, parsedValues);
    await this.props.onSubmit?.();
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.5);
    setInformationPage(dispatch, 6, categoriesName.agentInformation);
  };

  render() {
    const isLoading = false;
    const { classes, formData, dispatch, intl } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={intl.get('app.avatar.text.agent.part.one')}
          heading={intl.get('app.head.form.agent.part.one')}
          bottomContent={intl.get('app.message.form.agent.part.one')}
          classHeader={classnames(classes.stepHeader)}
          classBottom={classnames(classes.stepBottom)}
        >
          <Typography className={classnames(classes.titleForm)}>
            {intl.get('app.title.form.agent.part.one')}
          </Typography>
          <FormApp
            initialValues={{
              numberAgentsMoreCommission:
                formData.app.data.agentInformation.numberAgentsMoreCommission || '',
              numberAgentLessCommission:
                formData.app.data.agentInformation.numberAgentLessCommission || '',
              numberAgenteNoCommission:
                formData.app.data.agentInformation.numberAgenteNoCommission || '',
            }}
            isInitValid
            validationSchema={agentLicensedValidateSchema}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.state.isButtonLoading}
            isInQuestionnaire
            dispatch={dispatch}
            progressBar={formData.app.metadata.progressBar}
            alignButton={classnames(classes.alignButton)}
          >
            {(formikProps) => {
              return FormAgentInformation(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
