import React from 'react';
import classnames from 'classnames';
import { ButtonBase, Typography } from '@material-ui/core';

import { AwesomeFontIcon } from 'src/components/AwesomeFontIcon';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { withStyles, WithStyles } from 'src/styles/FormStyle/css/withStyles';

import { styles } from './style';
import { Column, Row } from '../LayoutWrapper/Flex';
import { Icon } from '../Icon';
import ButtonForm from '../ButtonForm';

interface INavigationProps extends IAppStoreProps {
  withBackButton?: boolean;
  backClick?: () => void;
  history?: History;
  logoLink?: string;
  disableSaveProgress?: boolean;
  customBackLabel?: string;
  withSaveProgressButton?: boolean;
  saveProgress?: () => void;
  customSaveProgress?: () => void;
  customCTAHandler?: () => void;
  isFetching?: boolean;
  isConfirmationPage?: boolean;
  isCallButton?: boolean;
}

const STEP_TYPES = [
  {
    type: 'new organic',
    value: 'E&O APPLICATION',
    stepsSum: 7,
  },
  {
    type: 'new kwlead',
    value: 'NEW QUOTE',
    stepsSum: 10,
  },
  {
    type: 'kw agent',
    value: 'KW AGENT QUOTE',
    stepsSum: 5,
  },
  {
    type: 'comprehensive organic',
    value: 'COMPREHENSIVE QUOTE',
    stepsSum: 5,
  },
];

@withStyles(styles)
export class NavigationForm extends React.Component<INavigationProps & WithStyles<typeof styles>> {
  saveProgress = () => {
    const { saveProgress, customSaveProgress } = this.props;

    if (customSaveProgress) {
      customSaveProgress();
    }
    saveProgress();
  };

  goBack = (e, isLabel: boolean) => {
    /*const {
      backClick,
      history,
      session: { sendFormGAEvent, sendGAEvent },
    } = this.props;

    history && history.goBack();
    backClick && backClick();

    // @ts-ignore
    if (history && history.location === '/find-agent') {
      isLabel
        ? sendGAEvent({ actionType: 'back', page: 'findAgentCity' })
        : sendGAEvent({ actionType: 'backArrow', page: 'findAgentCity' });
    }*/
  };

  renderLogo() {
    const { classes, isConfirmationPage = false } = this.props;
    return (
      <Column align="center">
        <Icon
          name="kcLogo"
          className={classnames(classes.logo, { [classes.logoConfirmation]: isConfirmationPage })}
        />
      </Column>
    );
  }

  openCallToActionDialog = () => {
    /* const { customCTAHandler } = this.props;

    this.callToActionDialog.open();
    customCTAHandler();*/
  };

  render() {
    const {
      classes,
      intl,
      withBackButton,
      saveProgress,
      logoLink,
      customBackLabel,
      withSaveProgressButton,
      isFetching,
      isConfirmationPage = false,
      isCallButton = true,
    } = this.props;

    const currentStep = {
      id: 1,
      name: 'New 1 Organic',
      number: 1,
      type: 'new organic',
      typeWithCampaign: 'new organic',
    }; //JSON.parse(localStorage.getItem('step'));
    const stepType = currentStep && STEP_TYPES.find((step) => step.type === currentStep.type);
    const stepTypeValue = stepType ? stepType.value : '';
    const step = currentStep && stepType ? `FIRM INFORMATION` : '';

    const hideBackButton = currentStep && currentStep.number === 1;

    return (
      <Row align="center" className={classes.wrapper}>
        <header className={classes.container}>
          {withBackButton && (
            <Row
              className={classnames(classes.backButtonContainer, {
                [classes.buttonContainerWithCustomBack]: !!customBackLabel,
              })}
            >
              <div
                onClick={() => this.goBack(null, false)}
                tabIndex={1}
                role="button"
                className={classnames(classes.backIconContainer, {
                  [classes.hidden]: hideBackButton && !customBackLabel,
                })}
              >
                <AwesomeFontIcon
                  name="faArrowLeft"
                  type="regular"
                  dataTestId="backButton"
                  className={classes.backIcon}
                />
              </div>

              <Row
                valign="center"
                className={classnames(classes.stepContainer, {
                  [classes.noPadding]: hideBackButton,
                })}
              >
                {!!customBackLabel ? (
                  <Typography
                    onClick={() => this.goBack(null, true)}
                    className={classes.customBackLabel}
                    variant="body1"
                  >
                    {customBackLabel}
                  </Typography>
                ) : (
                  <>
                    <Typography variant="caption" className={classes.stepType}>
                      <strong>{`${stepTypeValue}:`}</strong>
                    </Typography>
                    <Typography variant="caption">{step}</Typography>
                  </>
                )}
              </Row>
            </Row>
          )}
          {withSaveProgressButton && (
            <Row className={classes.saveProgressContainer}>
              <ButtonBase
                data-test-id="saveProgressButton"
                className={classes.saveProgressButton}
                onClick={this.saveProgress}
              >
                <span className={classes.saveProgressMobile}>
                  {intl.get('common.saveProgress')}
                </span>
                <span className={classes.saveProgressDesktop}>
                  {intl.get('common.saveYourProgress')}
                </span>
              </ButtonBase>
            </Row>
          )}
          {isFetching && (
            <Row valign="center" align="flex-start" className={classes.fetchingCaptionContainer} />
          )}
          {!!logoLink ? (
            <div
              className={classnames(classes.logoContainer, {
                [classes.logoCentered]: isConfirmationPage,
              })}
            >
              <a href={logoLink}>{this.renderLogo()}</a>
            </div>
          ) : (
            <div className={classes.logoContainer}>{this.renderLogo()}</div>
          )}
          {isCallButton && (
            <Row
              align="flex-end"
              className={classnames(classes.ctaContainer, {
                [classes.ctaContainerPosition]: withSaveProgressButton,
                [classes.ctaContainerInvisible]: isFetching,
              })}
            >
              <ButtonForm
                customIconName="faPhone"
                customIconType="solid"
                className={classnames(classes.ctaButtonMobile, {
                  [classes.ctaButtonMobileConfirmation]: isConfirmationPage,
                })}
                onClick={this.openCallToActionDialog}
                label=""
                isDark
                outlined
              />
              <ButtonForm
                customIconName="faPhone"
                customIconType="solid"
                className={classnames(classes.ctaButtonDesktop, {
                  [classes.ctaButtonDesktopConfirmation]: isConfirmationPage,
                })}
                onClick={this.openCallToActionDialog}
                label={'(857) 263-2750'}
                isDark
              />
            </Row>
          )}
        </header>
      </Row>
    );
  }
}
