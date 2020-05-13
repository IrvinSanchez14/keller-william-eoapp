import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import isEmpty from 'lodash/isEmpty';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeAgentInformation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { agentSpecialValidateSchema } from 'src/helpers/validations';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { categoriesName } from 'src/helpers/constants';
import { FormAgentInformationDesignation } from './form';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class AgentInformationDesignation extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeAgentInformation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 7, categoriesName.agentInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const { formData } = this.props;
    if (!isEmpty(formData.app.data)) {
      this.isInitValid = await agentSpecialValidateSchema.isValid({
        numberAgentSpecialDesignation:
          formData.app.data.agentInformation.numberAgentSpecialDesignation,
      });
    }
    setInformationPage(dispatch, 6, categoriesName.agentInformation);
  }

  render() {
    const isLoading = false;
    const { classes, formData, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.agent.part.two')}
          heading={this.props.intl.get('app.head.form.agent.part.two')}
        >
          <Typography className={classnames(classes.titleForm)}>
            {this.props.intl.get('app.title.form.agent.part.two')}
          </Typography>
          <FormApp
            initialValues={{
              numberAgentSpecialDesignation:
                formData.app.data.agentInformation.numberAgentSpecialDesignation || '',
            }}
            isInitValid={this.isInitValid}
            validationSchema={agentSpecialValidateSchema}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.isButtonLoading}
            isInQuestionnaire
            dispatch={dispatch}
            progressBar={formData.app.metadata.progressBar}
            hideButton={false}
            alignButton={classnames(classes.alignButton)}
          >
            {(formikProps) => {
              return FormAgentInformationDesignation(formikProps);
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
