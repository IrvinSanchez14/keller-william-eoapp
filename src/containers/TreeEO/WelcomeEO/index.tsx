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
    const { classes, formData, dispatch, intl, _key } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          key={_key}
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
                    <div className={classnames(classes.containerCircle)}>
                      <div className={classnames(classes.circleFormat)}>
                        <span className={classnames(classes.textCircle)}>1</span>
                      </div>
                      <span className={classnames(classes.textContainerCircle)}>
                        Market Center Financials
                      </span>
                    </div>
                    <div className={classnames(classes.containerCircle)}>
                      <div className={classnames(classes.circleFormat)}>
                        <span className={classnames(classes.textCircle)}>2</span>
                      </div>
                      <span className={classnames(classes.textContainerCircle)}>
                        Agent Production Breakdown
                      </span>
                    </div>
                    <div className={classnames(classes.containerCircle)}>
                      <div className={classnames(classes.circleFormat)}>
                        <span className={classnames(classes.textCircle)}>3</span>
                      </div>
                      <span className={classnames(classes.textContainerCircle)}>
                        Current E&O Policy
                      </span>
                    </div>
                    <div className={classnames(classes.containerCircle)}>
                      <div className={classnames(classes.circleFormat)}>
                        <span className={classnames(classes.textCircle)}>4</span>
                      </div>
                      <span className={classnames(classes.textContainerCircle)}>
                        Loss-run statement for last 5 years
                      </span>
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
