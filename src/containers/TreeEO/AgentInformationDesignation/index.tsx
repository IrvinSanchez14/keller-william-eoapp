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
import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { categoriesName } from 'src/helpers/constants';
import { FormAgentInformationDesignation } from './form';
import { removeSignsFromNumbers } from 'src/utils';

type FullNameProps = IAppStoreProps & { onSubmit?: () => Promise<void> };

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class AgentInformationDesignation extends Component<FullNameProps> {
  state = {
    isInitValid: false,
    isButtonLoading: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 6, categoriesName.agentInformation);
  }

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    const parsedValues = {
      ...values,
      numberAgentsSpecialDesignation: removeSignsFromNumbers(values.numberAgentsSpecialDesignation),
    };
    this.setState({ isButtonLoading: true });
    const { dispatch, formData } = this.props;
    actions.setSubmitting(true);
    storeAgentInformation(dispatch, parsedValues); //TODO put state in localstorage
    await this.props.onSubmit?.();
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.5);
    setInformationPage(dispatch, 7, categoriesName.agentInformation);
  };

  render() {
    const isLoading = false;
    const { classes, formData, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.agent.part.two')}
          heading={this.props.intl.get('app.head.form.agent.part.two')}
          classHeader={classnames(classes.stepHeader)}
        >
          <Typography className={classnames(classes.titleForm)}>
            {this.props.intl.get('app.title.form.agent.part.two')}
          </Typography>
          <FormApp
            initialValues={{
              numberAgentsSpecialDesignation:
                formData.app.data.agentInformation.numberAgentsSpecialDesignation || '',
            }}
            isInitValid
            validationSchema={agentSpecialValidateSchema}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.state.isButtonLoading}
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
