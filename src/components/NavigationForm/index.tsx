import React, { Fragment } from 'react';
import classnames from 'classnames';
import { ButtonBase, Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

import { AwesomeFontIcon } from 'src/components/AwesomeFontIcon';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { WithStyles } from 'src/styles/FormStyle/css/withStyles';

import { styles } from './style';
import { Column, Row } from '../LayoutWrapper/Flex';
import { Icon } from '../Icon';
import ButtonForm from '../ButtonForm';
import { useAppContext } from 'src/store';
import { setPageLocation, changeStatusProgressBar } from 'src/store/actions/app';

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
    type: 'firm information',
    value: 'FIRM INFORMATION',
    stepsSum: 4,
  },
];

const BorderLinearProgress = withStyles({
  root: {
    borderRadius: '9px',
    height: '15px',
    backgroundColor: '#e2e2e2',
    width: '100%',
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#0070f3',
  },
})(LinearProgress);

export function NavigationForm(Props: INavigationProps & WithStyles<typeof styles>) {
  const {
    withBackButton,
    logoLink,
    customBackLabel,
    withSaveProgressButton,
    isFetching,
    isConfirmationPage = false,
    isCallButton = true,
  } = Props;
  const { state, intl, dispatch } = useAppContext();
  const classes = styles();

  const saveProgress = () => {
    /*const { saveProgress, customSaveProgress } = Props;

    if (customSaveProgress) {
      customSaveProgress();
    }
    saveProgress();*/
  };

  const goBack = (e, isLabel: boolean) => {
    changeStatusProgressBar(dispatch, state.app.metadata.progressBar - 5);
    setPageLocation(dispatch, state.app.metadata.actualPage - 1);
  };

  const renderLogo = () => {
    return (
      <Column align="center">
        <Icon
          name="kcLogo"
          className={classnames(classes.logo, { [classes.logoConfirmation]: isConfirmationPage })}
        />
      </Column>
    );
  };

  const openCallToActionDialog = () => {
    /* const { customCTAHandler } = this.props;

    this.callToActionDialog.open();
    customCTAHandler();*/
  };

  const stepType =
    state.app.metadata && STEP_TYPES.find((step) => step.type === state.app.metadata.categoryPage);
  const stepTypeValue = intl.get('app.name.form').toUpperCase(); //title app
  const step = state.app.metadata && stepType ? state.app.metadata.categoryPage.toUpperCase() : ''; // category form

  const hideBackButton = state.app.metadata && state.app.metadata.actualPage === 0;

  return (
    <Fragment>
      <Row align="center" className={classes.wrapper}>
        <header className={classes.container}>
          {withBackButton && (
            <Row
              className={classnames(classes.backButtonContainer, {
                [classes.buttonContainerWithCustomBack]: !!customBackLabel,
              })}
            >
              <div
                onClick={() => goBack(null, false)}
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
                    onClick={() => goBack(null, true)}
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
                onClick={() => saveProgress()}
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
              <a href={logoLink}>{renderLogo()}</a>
            </div>
          ) : (
            <div className={classes.logoContainer}>{renderLogo()}</div>
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
                onClick={() => openCallToActionDialog()}
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
                onClick={() => openCallToActionDialog()}
                label={'Get covered now'}
                isDark
              />
            </Row>
          )}
        </header>
      </Row>
      <Row className={classnames(classes.contentProgressBar)}>
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={state.app.metadata.progressBar}
        />
      </Row>
    </Fragment>
  );
}
