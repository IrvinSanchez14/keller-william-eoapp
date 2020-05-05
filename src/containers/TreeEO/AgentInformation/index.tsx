import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import { Typography } from '@material-ui/core';
import _ from 'lodash';

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

type FullNameProps = IAppStoreProps;

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
    storeAgentInformation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 5);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 5, categoriesName.agentInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const { formData } = this.props;
    if (!_.isEmpty(formData.app.data)) {
      this.isInitValid = await agentLicensedValidateSchema.isValid({
        numberAgentsMoreCommission: formData.app.data.agentInformation.numberAgentsMoreCommission,
        numberAgentLessCommission: formData.app.data.agentInformation.numberAgentLessCommission,
        numberAgenteNoCommission: formData.app.data.agentInformation.numberAgenteNoCommission,
      });
    }
    setInformationPage(dispatch, 4, categoriesName.agentInformation);
  }

  render() {
    const isLoading = false;
    const { classes, formData } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.agent.part.one')}
          heading={this.props.intl.get('app.head.form.agent.part.one')}
          subHeading={['', this.props.intl.get('app.message.form.agent.part.one')]}
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
            dispatch={this.props.dispatch}
            progressBar={formData.app.metadata.progressBar}
          >
            {({ touched, errors }) => {
              return (
                <>
                  <Row wrap="wrap" margin="0 -8px" style={stylesComponent.rowContainer}>
                    <Typography className={classnames(classes.subTitleForm)}>
                      {this.props.intl.get('app.subtitle.one.form.agent.part.one')}
                    </Typography>
                    <Column padding="0px 8px">
                      <FielControlForm
                        data-test-id="numberAgentsMoreCommission"
                        name="numberAgentsMoreCommission"
                        type="number"
                        label={'Number of agents'}
                        errors={errors}
                        touched={touched}
                        shouldValidateOnMount
                        isErrorMessageHidden
                        customWidth={94}
                      />
                    </Column>
                  </Row>
                  <Row wrap="wrap" margin="0 -8px" style={stylesComponent.rowContainer}>
                    <Typography className={classnames(classes.subTitleForm)}>
                      {this.props.intl.get('app.subtitle.two.form.agent.part.one')}
                    </Typography>
                    <Column padding="0px 8px">
                      <FielControlForm
                        data-test-id="numberAgentLessCommission"
                        name="numberAgentLessCommission"
                        type="number"
                        label={'Number of agents'}
                        errors={errors}
                        touched={touched}
                        shouldValidateOnMount
                        isErrorMessageHidden
                        customWidth={94}
                      />
                    </Column>
                  </Row>
                  <Row wrap="wrap" margin="0 -8px" style={{ flexDirection: 'column' }}>
                    <Typography className={classnames(classes.subTitleForm)}>
                      {this.props.intl.get('app.subtitle.tree.form.agent.part.one')}
                    </Typography>
                    <Column padding="0px 8px">
                      <FielControlForm
                        data-test-id="numberAgenteNoCommission"
                        name="numberAgenteNoCommission"
                        type="number"
                        label={'Number of agents'}
                        errors={errors}
                        touched={touched}
                        shouldValidateOnMount
                        isErrorMessageHidden
                        customWidth={94}
                      />
                    </Column>
                  </Row>
                </>
              );
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}

const stylesComponent = {
  rowContainer: {
    marginBottom: '1.3em',
  },
};
