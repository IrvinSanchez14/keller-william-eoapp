import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import isEmpty from 'lodash/isEmpty';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeAgentInformation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { agentLicensedValidateSchema } from 'src/helpers/validations';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { categoriesName } from 'src/helpers/constants';
import { FormAgentInformation } from './form';

type FullNameProps = IAppStoreProps & { onSubmit?: () => Promise<void> };

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class AgentInformation extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    actions.setSubmitting(true);
    storeAgentInformation(dispatch, values); //TODO put state in localstorage
    await this.props.onSubmit?.();
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    setInformationPage(dispatch, 6, categoriesName.agentInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const { formData } = this.props;
    if (!isEmpty(formData.app.data)) {
      this.isInitValid = await agentLicensedValidateSchema.isValid({
        numberAgentsMoreCommission: formData.app.data.agentInformation.numberAgentsMoreCommission,
        numberAgentLessCommission: formData.app.data.agentInformation.numberAgentLessCommission,
        numberAgenteNoCommission: formData.app.data.agentInformation.numberAgenteNoCommission,
      });
    }
    setInformationPage(dispatch, 5, categoriesName.agentInformation);
  }

  render() {
    const isLoading = false;
    const { classes, formData, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.agent.part.one')}
          heading={this.props.intl.get('app.head.form.agent.part.one')}
          description={['', this.props.intl.get('app.message.form.agent.part.one')]}
        >
          <Typography className={classnames(classes.titleForm)}>
            {this.props.intl.get('app.title.form.agent.part.one')}
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
            isInitValid={this.isInitValid}
            validationSchema={agentLicensedValidateSchema}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.isButtonLoading}
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
