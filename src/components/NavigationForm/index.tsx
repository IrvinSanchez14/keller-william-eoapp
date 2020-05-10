import { Fragment } from 'react';
import classnames from 'classnames';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { AwesomeFontIcon } from 'src/components/AwesomeFontIcon';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { Column, Row } from '../LayoutWrapper/Flex';
import { Icon } from '../Icon';
import ButtonForm from '../ButtonForm';
import { useAppContext } from 'src/store';
import { setPageLocation, changeStatusProgressBar } from 'src/store/actions/app';
import { STEP_TYPES } from 'src/helpers/constants';
import useStyles from './styles';

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

export function NavigationForm(Props: INavigationProps) {
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
  const classes = useStyles();

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
    </Fragment>
  );
}
