import { Component } from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';

import { FormApp } from 'src/components/FormApp';
import { Icon } from 'src/components/Icon';
import StepWrapper from 'src/components/StepWrapper';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { categoriesName } from 'src/helpers/constants';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';

@withStyles(styles)
export class WelcomeEO extends Component<IAppStoreProps> {
  state = {
    isButtonLoading: false,
    isInitValid: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 0, categoriesName.intro);
  }

  nextStep = (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    this.setState({ isButtonLoading: true });
    storeFirmConfirmation(dispatch, values);
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.5);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 1, categoriesName.firmConfirmation);
  };

  render() {
    const isLoading = false;
    const { classes, formData, dispatch, intl } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={intl.get('app.avatar.text,welcome')}
          heading={intl.get('app.head.welcome')}
          bottomContent={intl.getHTML('app.link.welcome')}
          classHeader={classnames(classes.stepHeader)}
          classBottom={classnames(classes.bottomHeader)}
        >
          <Typography className={classnames(classes.titleForm)}>
            {intl.get('app.title.welcome')}
          </Typography>
          <FormApp
            initialValues={{}}
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
            {() => {
              return (
                <>
                  <div className={classnames(classes.divSVG)}>
                    <div>
                      <div className={classnames(classes.contentFirm, classes.content)}>
                        <Icon name="firmWelcome" className={classnames(classes.iconFirm)} />
                        <Typography className={classnames(classes.labelFirm)} variant="body1">
                          Firm
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <div className={classnames(classes.contentAgent, classes.content)}>
                        <Icon name="agentWelcome" className={classnames(classes.iconAgent)} />
                        <Typography variant="body1" className={classnames(classes.labelAgent)}>
                          Agents
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <div className={classnames(classes.contentCommission, classes.content)}>
                        <Icon
                          name="commissionWelcome"
                          className={classnames(classes.iconCommission)}
                        />
                        <Typography variant="body1" className={classnames(classes.labelComission)}>
                          Commission
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <div className={classnames(classes.contentPolicy, classes.content)}>
                        <Icon name="policyWelcome" className={classnames(classes.iconPolicy)} />
                        <Typography variant="body1" className={classnames(classes.labelPolicy)}>
                          Policy
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <div className={classnames(classes.contentRisk, classes.content)}>
                        <Icon name="riskWelcome" className={classnames(classes.iconRisk)} />
                        <Typography variant="body1" className={classnames(classes.labelRisk)}>
                          Risk Profile
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <Typography className={classnames(classes.textContent)}>
                    {intl.getHTML('app.text.welcome')}
                  </Typography>
                  <Typography className={classnames(classes.textContentFinal)}>
                    {intl.getHTML('app.text.welcome.two')}
                  </Typography>
                </>
              );
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
