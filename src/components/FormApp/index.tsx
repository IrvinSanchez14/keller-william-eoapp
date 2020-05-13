import { Component, ReactNode } from 'react';
import classnames from 'classnames';
import { Formik, Form } from 'formik';
import { ButtonBase } from '@material-ui/core';

import { withStyles, WithStyles } from 'src/styles/FormStyle/css/withStyles';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';

import { styles } from './styles';
import { Row } from '../LayoutWrapper/Flex';
import ButtonForm from '../ButtonForm';
import { AwesomeFontIcon } from '../AwesomeFontIcon';

export type CustomFormProps = WithStyles<typeof styles> &
  IAppStoreProps & {
    isInitValid?: boolean;
    initialValues: Record<string, any>;
    validationSchema?: Record<string, any>;
    onSubmit?: (values: any, actions: any) => void;
    hideButton?: boolean;
    buttonLabel?: string;
    buttonDescription?: string;
    className?: string;
    isLoading?: boolean;
    isCustomValid?: boolean;
    notDisabled?: boolean;
    children?: ({ errors, touched }: any) => ReactNode;
    dataTestId?: string;
    validate?: any;
    disabled?: boolean;
    isValid?: boolean;
    isButtonBlue?: boolean;
    isSaveProgressButton?: boolean;
    saveProgress?: () => void;
    intl?: any;
    withFaq?: boolean;
    customButtonStyles?: string;
    customButtonContainer?: string;
    centeredButtonContainer?: boolean;
    isRowForm?: boolean;
    isInQuestionnaire?: boolean;
    purchaseColor?: string;
    customNavigationSaveProgress?: () => void;
    progressBar?: number;
    alignButton?: any;
  };

@withStyles(styles)
export class FormApp extends Component<CustomFormProps> {
  saveProgress = () => {
    /*const {
      saveProgress,
      isInQuestionnaire,
      customNavigationSaveProgress,
      session: {sendFormGAEvent},
      stepper: {isCurrBitingHistoryView},
    } = this.props;

    if (isInQuestionnaire) {
      sendFormGAEvent('saveProgress', {isCurrBitingHistoryView});
    }
    if (customNavigationSaveProgress) {
      customNavigationSaveProgress();
    }
    saveProgress();*/
  };

  onSubmit = (values: any, formikActions: any) => {
    this.props.onSubmit(values, formikActions);
  };

  render() {
    const {
      intl,
      classes,
      isInitValid,
      initialValues,
      onSubmit,
      validationSchema,
      hideButton,
      buttonLabel,
      buttonDescription,
      isLoading,
      children,
      isCustomValid,
      className,
      notDisabled,
      dataTestId,
      validate,
      disabled,
      isButtonBlue = true,
      isSaveProgressButton,
      saveProgress,
      withFaq,
      customButtonStyles,
      customButtonContainer,
      centeredButtonContainer,
      isRowForm,
      alignButton,
      ...rest
    } = this.props;

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validate={validate}
        onSubmit={this.onSubmit}
        validateOnMount={isInitValid}
        enableReinitialize
        {...rest}
      >
        {({
          errors,
          touched,
          isValid: isFormValid,
          values,
          setFieldError,
          handleSubmit,
          setFieldValue,
          setSubmitting,
          validateField,
          setFieldTouched,
          isValidating,
          isSubmitting,
          dirty,
          resetForm,
        }) => {
          const isValid = isFormValid || this.props.isValid;
          const customWidth = isSaveProgressButton && {
            customWidthMobile: 'auto',
            customWidthDesktop: 225,
          };

          const x = notDisabled
            ? false
            : disabled || isLoading || !isValid || isCustomValid === false || isSubmitting;

          return (
            <Form className={classnames(classes.form, className, { [classes.row]: isRowForm })}>
              {children({
                errors,
                touched,
                values,
                setFieldError,
                handleSubmit,
                setFieldValue,
                resetForm,
                validateField,
                setFieldTouched,
                setSubmitting,
                isValidating,
                isSubmitting,
                dirty,
                isValid: isFormValid,
              })}
              {!hideButton && (
                <Row
                  className={classnames(classes.buttonContainer, customButtonContainer, {
                    [classes.doubleButtonContainer]: isSaveProgressButton,
                    [classes.centeredButtonContainer]: centeredButtonContainer,
                    [classes.rowButtonContainer]: isRowForm,
                  })}
                >
                  <Row className={classnames(classes.actionButtonContainer, alignButton)}>
                    <ButtonForm
                      data-test-id={dataTestId || 'continueButton'}
                      type="submit"
                      label={buttonLabel}
                      className={classnames(classes.button, customButtonStyles, {
                        [classes.doubleButton]: isSaveProgressButton,
                        [classes.rowButton]: isRowForm,
                      })}
                      disabled={
                        notDisabled
                          ? false
                          : disabled ||
                            isLoading ||
                            !isValid ||
                            isCustomValid === false ||
                            isSubmitting
                      }
                      subLabel={buttonDescription}
                      isLoading={isLoading}
                      isBlue={isButtonBlue}
                      {...customWidth}
                    />
                  </Row>
                  {isSaveProgressButton && (
                    <Row align="flex-end" className={classes.saveProgressContainer}>
                      <ButtonBase
                        data-test-id="saveProgressButton"
                        className={classes.saveProgressButton}
                        onClick={this.saveProgress}
                      >
                        {'Save your progress'}
                      </ButtonBase>
                    </Row>
                  )}
                  {withFaq && (
                    <Row valign="center" className={classes.faqContainer}>
                      <AwesomeFontIcon name="faQuestionCircle" type="regular" />
                    </Row>
                  )}
                </Row>
              )}
            </Form>
          );
        }}
      </Formik>
    );
  }
}
